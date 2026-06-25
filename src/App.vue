<template>
  <div class="app-shell">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <BackgroundCustomizer />
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import BackgroundCustomizer from './components/BackgroundCustomizer.vue'
import { siteConfig } from './config/site'
import { getItem, setItem } from './utils/storage'

function applyBackground(background) {
  document.documentElement.style.setProperty('--site-bg-image', background.image)
  document.documentElement.style.setProperty('--site-bg-opacity', background.opacity)
  document.documentElement.style.setProperty('--site-bg-blur', `${background.blur}px`)
  document.documentElement.style.setProperty('--site-bg-position', background.position || 'center center')
  document.documentElement.style.setProperty('--site-bg-size', background.size || 'cover')
  document.documentElement.style.setProperty('--site-bg-attachment', background.fixed ? 'fixed' : 'scroll')
  document.documentElement.style.setProperty('--site-overlay-opacity', background.overlayOpacity)
}

onMounted(() => {
  const savedTheme = getItem('theme', 'dark')
  document.documentElement.dataset.theme = savedTheme
  setItem('theme', savedTheme)
  applyBackground(getItem('background', siteConfig.background))
})
</script>
