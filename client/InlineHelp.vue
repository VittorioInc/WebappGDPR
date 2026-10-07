<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import { getHelpPosition } from '../shared/inlineHelp.js'

const props = defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  links: { type: Array, default: () => [] },
})

const tooltipId = `inline-help-${useId()}`
const trigger = ref(null)
const popup = ref(null)
const isOpen = ref(false)
const pinned = ref(false)
const position = ref({ left: '12px', top: '12px', visibility: 'hidden' })
let closeTimer

function cancelClose() { clearTimeout(closeTimer) }
function close() {
  cancelClose()
  isOpen.value = false
  pinned.value = false
}
function updatePosition() {
  if (!isOpen.value || !trigger.value || !popup.value) return
  const { left, top } = getHelpPosition(
    trigger.value.getBoundingClientRect(), popup.value.getBoundingClientRect(),
    { width: document.documentElement.clientWidth, height: window.innerHeight },
  )
  position.value = { left: `${left}px`, top: `${top}px`, visibility: 'visible' }
}
async function open() {
  cancelClose()
  if (isOpen.value) return
  position.value.visibility = 'hidden'
  isOpen.value = true
  await nextTick()
  updatePosition()
}
function hover(event) {
  if (event.pointerType !== 'touch') open()
}
function scheduleClose() {
  cancelClose()
  if (!pinned.value && document.activeElement !== trigger.value && !popup.value?.contains(document.activeElement)) {
    // Allow the pointer to cross the gap and read the popup itself.
    closeTimer = setTimeout(close, 180)
  }
}
function togglePinned() {
  if (pinned.value) close()
  else {
    pinned.value = true
    open()
  }
}
function dismissOutside(event) {
  if (!trigger.value?.contains(event.target) && !popup.value?.contains(event.target)) close()
}
function dismissOnEscape(event) {
  if (event.key === 'Escape') {
    if (isOpen.value && popup.value?.contains(document.activeElement)) trigger.value?.focus()
    close()
  }
}

function handleFocusOut(event) {
  if (event.relatedTarget !== trigger.value && !popup.value?.contains(event.relatedTarget)) close()
}

function focusPopupLink(event) {
  if (props.links.length && isOpen.value && !event.shiftKey) {
    const link = popup.value?.querySelector('a')
    if (link) { event.preventDefault(); link.focus() }
  }
}

watch(() => [props.label, props.title, props.text, props.links], close)
onMounted(() => {
  document.addEventListener('pointerdown', dismissOutside)
  document.addEventListener('keydown', dismissOnEscape)
  window.addEventListener('resize', updatePosition)
  window.addEventListener('scroll', updatePosition, true)
})
onBeforeUnmount(() => {
  cancelClose()
  document.removeEventListener('pointerdown', dismissOutside)
  document.removeEventListener('keydown', dismissOnEscape)
  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
})
</script>

<template>
  <span class="inline-help" data-inline-help @click.stop>
    <button
      ref="trigger"
      type="button"
      class="inline-help-trigger"
      :aria-describedby="isOpen ? tooltipId : undefined"
      :aria-expanded="isOpen"
      :aria-haspopup="links.length ? 'dialog' : undefined"
      :aria-controls="links.length && isOpen ? tooltipId : undefined"
      @pointerenter="hover"
      @pointerleave="scheduleClose"
      @focus="open"
      @blur="handleFocusOut"
      @keydown.tab="focusPopupLink"
      @click.stop="togglePinned"
    >{{ label }}</button>
    <Teleport to="body">
      <span
        v-if="isOpen"
        :id="tooltipId"
        ref="popup"
        class="inline-help-popup"
        :role="links.length ? 'dialog' : 'tooltip'"
        :aria-labelledby="links.length ? `${tooltipId}-title` : undefined"
        :style="position"
        @pointerenter="cancelClose"
        @pointerleave="scheduleClose"
        @click.stop
        @focusout="handleFocusOut"
      >
        <strong :id="`${tooltipId}-title`" class="inline-help-title">{{ title }}</strong>
        <span class="inline-help-text">{{ text }}</span>
        <a v-for="link in links" :key="link.href" class="inline-help-link"
          :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
      </span>
    </Teleport>
  </span>
</template>

<style scoped>
.inline-help-trigger {
  display: inline;
  padding: 0;
  border: 0;
  border-radius: 2px;
  color: #1d4ed8;
  background: transparent;
  font: inherit;
  text-align: inherit;
  text-decoration: underline dotted;
  text-underline-offset: 3px;
  cursor: help;
}
.inline-help-trigger:hover { color: #1e3a8a; }
.inline-help-trigger:focus-visible { outline: 2px solid #2563eb; outline-offset: 3px; }
.inline-help-popup {
  position: fixed;
  z-index: 1000;
  display: block;
  width: min(23rem, calc(100vw - 24px));
  max-height: min(28rem, calc(100dvh - 24px));
  overflow-y: auto;
  padding: 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: #fff;
  color: #334155;
  box-shadow: 0 8px 24px #0f172a26;
  font-size: 0.9rem;
  line-height: 1.55;
  cursor: auto;
}
.inline-help-title { display: block; margin-bottom: 6px; color: #0f172a; }
.inline-help-text { white-space: pre-line; }
.inline-help-link { display: block; margin-top: 10px; color: #1d4ed8; text-decoration: underline; }
.inline-help-link:focus-visible { outline: 2px solid #2563eb; outline-offset: 3px; }
</style>
