<template>
  <section class="background-panel" :class="{ open: isOpen }" aria-label="背景自定义面板">
    <button class="background-panel-toggle" type="button" @click="isOpen = !isOpen">
      背景
    </button>

    <div v-if="isOpen" class="background-panel-body">
      <div class="panel-heading">
       
      </div>

   

      <label>
        图片透明度：{{ Math.round(draft.opacity * 100) }}%
        <input v-model.number="draft.opacity" min="0" max="1" step="0.01" type="range" @input="apply" />
      </label>

      <label>
        遮罩深度：{{ Math.round(draft.overlayOpacity * 100) }}%
        <input v-model.number="draft.overlayOpacity" min="0" max="0.95" step="0.01" type="range" @input="apply" />
      </label>

      <label>
        背景模糊：{{ draft.blur }}px
        <input v-model.number="draft.blur" min="0" max="12" step="1" type="range" @input="apply" />
      </label>

      <div class="preset-row">
        <button v-for="preset in presets" :key="preset.name" type="button" @click="usePreset(preset)">
          {{ preset.name }}
        </button>
      </div>

      <button class="text-button reset-bg" type="button" @click="reset">
        恢复默认背景
      </button>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { siteConfig } from '../config/site'
import { getItem, setItem } from '../utils/storage'

const isOpen = ref(false)

const presets = [
  { name: '书桌', image: 'url("images/backgrounds/study-desk.svg")', opacity: 0.34, overlayOpacity: 0.72, blur: 0 },
  { name: '更清晰', image: 'url("images/backgrounds/study-desk.svg")', opacity: 0.52, overlayOpacity: 0.58, blur: 0 },
  { name: '更克制', image: 'url("images/backgrounds/study-desk.svg")', opacity: 0.22, overlayOpacity: 0.8, blur: 2 }
]

const draft = reactive({ ...siteConfig.background })

function normalizeImage(value) {
  const trimmed = String(value || '').trim()
  if (!trimmed) return siteConfig.background.image
  if (trimmed.startsWith('url(')) return trimmed
  return `url("${trimmed}")`
}

function apply() {
  const background = {
    ...draft,
    image: normalizeImage(draft.image),
    opacity: Number(draft.opacity),
    overlayOpacity: Number(draft.overlayOpacity),
    blur: Number(draft.blur)
  }

  draft.image = background.image
  document.documentElement.style.setProperty('--site-bg-image', background.image)
  document.documentElement.style.setProperty('--site-bg-opacity', background.opacity)
  document.documentElement.style.setProperty('--site-bg-blur', `${background.blur}px`)
  document.documentElement.style.setProperty('--site-bg-position', background.position || 'center center')
  document.documentElement.style.setProperty('--site-bg-size', background.size || 'cover')
  document.documentElement.style.setProperty('--site-bg-attachment', background.fixed ? 'fixed' : 'scroll')
  document.documentElement.style.setProperty('--site-overlay-opacity', background.overlayOpacity)

  setItem('background', background)
}

function usePreset(preset) {
  Object.assign(draft, {
    ...siteConfig.background,
    ...preset
  })
  apply()
}

function reset() {
  Object.assign(draft, siteConfig.background)
  apply()
}

onMounted(() => {
  Object.assign(draft, getItem('background', siteConfig.background))
  apply()
})
</script>
