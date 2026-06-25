<template>
  <header class="site-header">
    <router-link class="brand" to="/" aria-label="返回首页">
      <span class="brand-mark">ca(Ho)2</span>
      <span>
        <strong>氢氧化钙</strong>
        <small>博客</small>
      </span>
    </router-link>

    <nav class="nav-links" aria-label="主导航">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
    </nav>

    <ThemeToggle />
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>
