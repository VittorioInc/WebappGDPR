<script setup>
import { computed, ref, watch } from 'vue'
import ChoiceQuestion from './ChoiceQuestion.vue'
import Assessment from './Assessment.vue'
import { validChoices } from '../shared/choices.js'
const props = defineProps({ page: Object, text: Object, busy: Boolean })
const emit = defineEmits(['submit', 'restart', 'back', 'download', 'preview'])
// Suggestions are editable drafts, never submitted facts until Continue.
// Page keys reset drafts on navigation; language switches preserve user edits.
const answers = ref(Object.fromEntries((props.page.questions ?? []).map(question => [question.id, [...(question.suggestedIds ?? [])]])))
const visibleQuestions = computed(() => props.page.questions ?? [])
watch(() => props.page, page => {
  if (page.draftAnswers) answers.value = JSON.parse(JSON.stringify(page.draftAnswers))
})
defineExpose({ getDraft: () => JSON.parse(JSON.stringify(answers.value)) })
const complete = computed(() => visibleQuestions.value.every(question => validChoices(question, answers.value[question.id])))
function updateAnswer(questionId, ids) {
  if (props.page.questions.find(question => question.id === questionId)?.previewOnChange) {
    emit('preview', { pageId: props.page.id, answers: { ...answers.value, [questionId]: ids } })
    return
  }
  answers.value[questionId] = ids
}
function submit() {
  emit('submit', { pageId: props.page.id, answers: Object.fromEntries(visibleQuestions.value
    .filter(question => answers.value[question.id] !== undefined).map(question => [question.id, answers.value[question.id]])) })
}
</script>

<template>
  <section v-if="page.type === 'questionnaire' && page.scopeNotice" class="card scope-notice">
        <p class="step-label">{{ page.scopeNotice.kicker }}</p>
        <h2>{{ page.scopeNotice.title }}</h2>
        <p>{{ page.scopeNotice.intro }}</p>
        <section v-for="item in page.scopeNotice.items" :key="item.title"><h3>{{ item.title }}</h3><p>{{ item.body }}</p><blockquote>{{ item.quote }}<cite>{{ item.reference }}</cite></blockquote></section>
        <p>{{ page.scopeNotice.closing }}</p>
  </section>
  <form v-if="page.type === 'questionnaire'" id="questionnaire-page" class="card questionnaire" :class="{ 'multiple-questions': visibleQuestions.length > 1 }" @submit.prevent="submit">
    <div class="page-heading">
      <h1 :class="{ 'step-label': page.previewSupported || page.questions.length === 1 }">{{ page.title }}</h1><p v-if="page.prompt">{{ page.prompt }}</p>
    </div>
    <ChoiceQuestion v-for="question in visibleQuestions" :key="question.id" :model-value="answers[question.id]" @update:model-value="updateAnswer(question.id, $event)" :question="question" :text="text" :busy="busy" :help-entries="page.helpEntries" />
  </form>
  <Assessment v-else-if="page.type === 'assessment'" :report="page" />
  <section v-else-if="page.type === 'message'" class="card" :class="{ 'termination-error': page.tone === 'error' }">
    <h1>{{ page.title }}</h1><p>{{ page.summary }}</p>
    <p v-if="page.reference" class="reference">{{ page.reference }}</p>
  </section>
  <div class="actions">
    <button v-if="page.type === 'questionnaire'" :disabled="busy || !complete" type="submit" form="questionnaire-page">{{ busy ? text.saving : text.continue }}</button>
    <button v-if="page.type === 'assessment'" :disabled="busy" @click="emit('download')">{{ busy ? text.downloading : text.downloadPdf }}</button>
    <button v-if="page.canGoBack" class="secondary" :disabled="busy" @click="emit('back', { pageId: page.id })">{{ text.back }}</button>
    <button class="secondary" :disabled="busy" @click="emit('restart')">{{ text.restart }}</button>
  </div>
</template>
