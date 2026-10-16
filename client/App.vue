<script setup>
import { computed, onMounted, ref } from 'vue'
import Page from './Page.vue'
import { requestPage, requestPdf } from './api.js'
import en from '../shared/translations/en.js'
import it from '../shared/translations/it.js'

const response = ref(null)
const answers = ref({}) // Only the displayed page's unsubmitted selections.
const locale = ref('') // The server supplies the default language.
const busy = ref(false)
const error = ref('')
const text = computed(() => response.value?.text)
const errorText = computed(() => text.value?.errors[error.value] ?? (text.value ? text.value.errors.connection : `${en.errors.connection} / ${it.errors.connection}`))
// Navigation starts a fresh draft. Translation preserves edits on the same page.
function showPage(result, draft = {}) {
  answers.value = Object.fromEntries((result.page.questions ?? []).map(question => [
    question.id, [...(draft[question.id] ?? question.suggestedIds ?? [])],
  ]))
  response.value = result
  locale.value = result.locale
  document.documentElement.lang = result.locale
  document.title = result.text.appTitle
}

async function runRequest(action) {
  if (busy.value) return
  busy.value = true
  error.value = ''
  try {
    await action()
  } catch (failure) { error.value = failure.message }
  finally { busy.value = false }
}

function loadCurrentPage() {
  return runRequest(async () => showPage(await requestPage(`current?locale=${encodeURIComponent(locale.value)}`)))
}

function submit() {
  return runRequest(async () => showPage(await requestPage('answers', {
    locale: locale.value, pageId: response.value.page.id, answers: answers.value,
  })))
}

function back() {
  return runRequest(async () => showPage(await requestPage('back', {
    locale: locale.value, pageId: response.value.page.id,
  })))
}

function restart() {
  return runRequest(async () => showPage(await requestPage('restart', { locale: locale.value })))
}

function updateAnswer(questionId, ids) {
  if (busy.value) return
  answers.value[questionId] = ids
}

async function changeLanguage(event) {
  const nextLocale = event.target.value
  await runRequest(async () => {
    const page = response.value.page
    const result = await requestPage(`current?locale=${encodeURIComponent(nextLocale)}`)
    showPage(result, result.page.id === page.id ? answers.value : {})
  })
  // A failed request must leave the selector in the displayed page's language.
  event.target.value = locale.value
}

function download() {
  return runRequest(async () => {
    const { blob, fileName } = await requestPdf({ locale: locale.value })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.append(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  })
}
onMounted(loadCurrentPage)
</script>

<template>
  <main :aria-busy="busy">
    <header v-if="response">
      <strong>{{ text.appTitle }}</strong>
      <label>{{ text.language }}
        <select :value="locale" :disabled="busy" @change="changeLanguage">
          <option v-for="code in response.supportedLocales" :key="code" :value="code">{{ text.languages[code] }}</option>
        </select>
      </label>
    </header>
    <div v-if="error" role="alert" class="error">
      <p>{{ errorText }}</p>
      <button v-if="!response" :disabled="busy" @click="loadCurrentPage">{{ en.retry }} / {{ it.retry }}</button>
    </div>
    <Page v-if="response" :page="response.page" :answers="answers" :text="text" :busy="busy"
      @answer="updateAnswer" @submit="submit" @restart="restart" @back="back" @download="download" />
  </main>
</template>
