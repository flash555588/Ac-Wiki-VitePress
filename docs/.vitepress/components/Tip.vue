<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  content: string
  interactive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  interactive: false
})

const show = ref(false)
const position = ref({ x: 0, y: 0 })

const showTip = (event: MouseEvent) => {
  if (!props.interactive) return
  
  const rect = (event.target as HTMLElement).getBoundingClientRect()
  position.value = {
    x: rect.left + rect.width / 2,
    y: rect.top - 10
  }
  show.value = true
}

const hideTip = () => {
  show.value = false
}

onMounted(() => {
  if (props.interactive) {
    document.addEventListener('mouseover', showTip)
    document.addEventListener('mouseout', hideTip)
  }
})

onUnmounted(() => {
  if (props.interactive) {
    document.removeEventListener('mouseover', showTip)
    document.removeEventListener('mouseout', hideTip)
  }
})
</script>

<template>
  <div
    v-if="show"
    class="tip"
    :style="{
      left: position.x + 'px',
      top: position.y + 'px'
    }"
  >
    {{ content }}
  </div>
</template>

<style scoped>
.tip {
  position: fixed;
  z-index: 1000;
  padding: 0.5em 1em;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5em;
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  pointer-events: none;
  transform: translateX(-50%);
  box-shadow: var(--vp-shadow-3);
}
</style> 