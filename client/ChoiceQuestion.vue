<script setup>
import { computed } from 'vue'
import HelpText from './HelpText.vue'
import { choiceGroups, toggleChoice } from '../shared/choices.js'
const props = defineProps({ question: Object, text: Object, busy: Boolean, helpEntries: Array, modelValue: { type: Array, default: () => [] } })
const emit = defineEmits(['update:modelValue'])
const groups = computed(() => choiceGroups(props.question))
const normalIds = computed(() => props.question.options.filter(option => !option.exclusive).map(option => option.id))
const allSelected = computed(() => normalIds.value.every(id => props.modelValue.includes(id)))
function selectAll() { emit('update:modelValue', allSelected.value ? [] : [...normalIds.value]) }
function selectRow(event, option) {
  if (!event.target.closest('input, label, button, a, [data-inline-help]')) select(option)
}
function select(option) {
  if (props.busy) return
  emit('update:modelValue', toggleChoice(props.question, props.modelValue, option))
}
</script>

<template>
  <fieldset :disabled="busy" class="question" :aria-labelledby="`${question.id}-title`">
    <h2 :id="`${question.id}-title`"><HelpText :text="question.title" :entries="helpEntries" /></h2>
    <p v-if="question.prompt"><HelpText :text="question.prompt" :entries="helpEntries" /></p>
    <p v-if="question.notice" class="question-explanation">{{ question.notice }}</p>
    <div v-if="question.explanation" class="question-explanation">
      <p v-for="(paragraph, index) in question.explanation.split('\n\n')" :key="index"><HelpText :text="paragraph" :entries="helpEntries" /></p>
      <div v-for="link in question.explanationLinks" :key="link.href"><a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a></div>
    </div>
    <div v-if="question.detectedNotice" class="detected-notice">
      <strong>{{ question.detectedNotice.title }}</strong>
      <p>{{ question.detectedNotice.intro }}</p>
      <ul><li v-for="item in question.detectedNotice.items" :key="item.label"><strong>{{ item.label }}</strong><span>{{ item.description }}</span></li></ul>
      <p v-if="question.detectedNotice.note">{{ question.detectedNotice.note }}</p>
    </div>
    <p v-if="question.suggestionNotice && modelValue.some(id => question.suggestedIds?.includes(id))" class="suggestion-note">{{ question.suggestionNotice }}</p>
    <div v-if="question.help" class="question-help"><h3>{{ question.help.title }}</h3><p>{{ question.help.text }}</p>
      <a v-for="link in question.help.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
    </div>
    <small>{{ question.type === 'single-select' ? text.single : text.multiple }}</small>
    <div v-if="question.allowSelectAll" class="question-tools"><button type="button" class="secondary" @click="selectAll">
      {{ allSelected ? question.clearAllLabel ?? text.clearAll : question.selectAllLabel ?? text.selectAll }}
    </button></div>
    <div v-for="group in groups" :key="group.id" :role="group.title ? 'group' : undefined" :aria-labelledby="group.title ? `${question.id}-${group.id}-title` : undefined">
    <h3 v-if="group.title" :id="`${question.id}-${group.id}-title`">{{ group.title }}</h3>
    <div v-for="option in question.options.filter(option => group.optionIds.includes(option.id))" :key="option.id">
      <div class="choice" :class="{ selected: modelValue.includes(option.id), exclusive: option.exclusive }" @click="selectRow($event, option)">
        <input :id="`${question.id}-${option.id}`" :type="question.type === 'single-select' ? 'radio' : 'checkbox'"
          :name="question.id" :value="option.id" :checked="modelValue.includes(option.id)"
          :aria-describedby="option.description ? `${question.id}-${option.id}-description` : undefined" @change="select(option)">
        <div class="choice-copy"><label :for="`${question.id}-${option.id}`"><strong><HelpText :text="option.label" :entries="helpEntries" /></strong></label>
          <div v-if="option.description" :id="`${question.id}-${option.id}-description`" class="description">
            <p v-for="(paragraph, index) in option.description.split('\n\n')" :key="index"><HelpText :text="paragraph" :entries="helpEntries" /></p>
          </div>
          <a v-for="link in option.descriptionLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
          <blockquote v-if="option.quote" class="reference"><q>{{ option.quote }}</q><cite>{{ option.reference }}</cite></blockquote>
        </div>
      </div>
    </div>
    </div>
  </fieldset>
</template>
