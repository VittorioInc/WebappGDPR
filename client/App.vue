<script setup>
import { computed, onMounted, ref } from 'vue'
import Page from './Page.vue'
import { requestPage, requestPdf } from './api.js'
import en from '../shared/translations/en.js'
import it from '../shared/translations/it.js'

const response = ref(null)
const locale = ref('') // The server supplies the default language.
const busy = ref(false)
const error = ref('')
const generation = ref(0)
const pageComponent = ref(null)
const retryOptions = ref({})
const text = computed(() => response.value?.text)
const errorText = computed(() => text.value?.errors[error.value] ?? (text.value ? text.value.errors.connection : `${en.errors.connection} / ${it.errors.connection}`))
async function load(options = {}) {
  if (busy.value) return
  // Translate a conditional page using its current draft, without committing it.
  if (options.locale && response.value?.page.previewSupported && !options.answers) {
    options = { ...options, preview: true, pageId: response.value.page.id, answers: pageComponent.value.getDraft() }
  }
  retryOptions.value = options
  busy.value = true
  error.value = ''
  try {
    response.value = await requestPage({ locale: locale.value, ...options })
    locale.value = response.value.locale
    document.documentElement.lang = locale.value
    document.title = response.value.text.appTitle
    if (options.restart) generation.value++
    retryOptions.value = {}
  } catch (failure) { error.value = failure.message }
  finally { busy.value = false }
}
async function download() {
  if (busy.value) return
  busy.value = true
  error.value = ''
  try {
    const { blob, fileName } = await requestPdf({ locale: locale.value })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.append(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  } catch (failure) { error.value = failure.message }
  finally { busy.value = false }
}
onMounted(() => load())
</script>

<template>
  <main :aria-busy="busy">
    <header v-if="response">
      <strong>{{ text.appTitle }}</strong>
      <label>{{ text.language }}
        <select :value="locale" :disabled="busy" @change="load({ locale: $event.target.value })">
          <option v-for="code in response.supportedLocales" :key="code" :value="code">{{ text.languages[code] }}</option>
        </select>
      </label>
    </header>
    <div v-if="error" role="alert" class="error">
      <p>{{ errorText }}</p>
      <button :disabled="busy" @click="load(retryOptions)">{{ text?.retry ?? `${en.retry} / ${it.retry}` }}</button>
    </div>
    <!-- A different page resets its draft. Language changes keep the same key. -->
    <Page v-if="response" ref="pageComponent" :key="`${response.page.id}:${generation}`" :page="response.page" :text="text" :busy="busy"
      @submit="load($event)" @preview="load({ ...$event, preview: true })" @restart="load({ restart: true })" @back="load({ ...$event, back: true })" @download="download" />
  </main>
</template>
