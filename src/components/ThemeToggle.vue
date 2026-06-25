<template>
  <button class="theme-toggle" type="button" :aria-label="label" @click="toggleTheme">
    
    <span class="theme-text">{{ theme === 'dark' ? '暗色' : '亮色' }}</span>
  </button>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { getItem, setItem } from '../utils/storage'

const theme = ref('dark')
const label = computed(() => theme.value === 'dark' ? '切换到亮色模式' : '切换到暗色模式')

function applyTheme(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  setItem('theme', value)
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  applyTheme(getItem('theme', 'dark'))
})
</script>
