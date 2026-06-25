<template>
  <section class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="hero-description">{{ description }}</p>
      <div class="hero-actions">
        <a href="#posts" class="btn primary">开始阅读</a>
        <router-link to="/about" class="btn ghost">了解作者</router-link>
      </div>
      <div class="hero-stats" aria-label="博客数据">
        <span><strong>{{ totalPosts }}</strong> 篇文章</span>
        <span><strong>{{ totalTags }}</strong> 个标签</span>
        <span><strong>{{ totalMinutes }}</strong> 分钟阅读</span>
      </div>
    </div>

    <div class="hero-card" aria-label="精选文章预览">
      <div class="floating-orb orb-a"></div>
      <div class="floating-orb orb-b"></div>
      <p class="card-kicker">Featured</p>
      <h2>{{ featured.title }}</h2>
      <p>{{ featured.excerpt }}</p>
      <router-link :to="`/post/${featured.slug}`" class="inline-link">查看精选文章 →</router-link>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: 'Make ideas happen' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  featured: { type: Object, required: true },
  totalPosts: { type: Number, required: true },
  totalTags: { type: Number, required: true },
  totalMinutes: { type: Number, required: true }
})
</script>
