<script setup>
defineProps({ report: Object })
</script>

<template>
  <section class="card assessment">
    <h1>{{ report.title }}</h1>
    <!-- Presentation only: the server selects and orders every report block. -->
    <template v-for="(block, index) in report.blocks" :key="index">
      <component :is="block.level === 4 ? 'h4' : 'h2'" v-if="block.type === 'heading'">{{ block.text }}</component>
      <p v-else-if="block.type === 'paragraph'" :class="{ muted: block.muted }"><strong v-if="block.lead">{{ block.lead }}: </strong>{{ block.text }}</p>
      <p v-else-if="block.type === 'link'"><a :href="block.url" target="_blank" rel="noopener noreferrer">{{ block.text }}</a></p>
      <ul v-else-if="block.type === 'list'"><li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li></ul>
      <blockquote v-else-if="block.type === 'quote'"><strong>{{ block.reference }}: </strong>{{ block.text }}</blockquote>
    </template>
  </section>
</template>
