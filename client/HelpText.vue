<script setup>
import InlineHelp from './InlineHelp.vue'
defineProps({ parts: { type: Array, required: true } })
</script>

<template>
  <span>
    <template v-for="(part, index) in parts" :key="index">
      <InlineHelp
        v-if="part.help"
        :label="part.text"
        :title="part.help.title"
        :text="part.help.text"
        :links="part.help.links"
      />
      <template v-else>{{ part.text }}</template>
    </template>
  </span>
</template>
