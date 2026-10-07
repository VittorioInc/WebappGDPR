<script setup>
import { computed } from 'vue'
import InlineHelp from './InlineHelp.vue'
import { splitHelpText } from '../shared/inlineHelp.js'
const props = defineProps({ text: { type: String, default: '' }, entries: { type: Array, default: () => [] } })
const parts = computed(() => splitHelpText(props.text, props.entries))
</script>

<template>
  <span><template v-for="(part, index) in parts" :key="index"><InlineHelp v-if="part.help"
    :label="part.text" :title="part.help.title" :text="part.help.text" :links="part.help.links" />
    <template v-else>{{ part.text }}</template></template></span>
</template>
