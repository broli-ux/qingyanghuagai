<template>
  <div class="page about-page">
    <section class="about-card">
      <div class="about-avatar">{{ author.avatar }}</div>
      <div>
        <p class="eyebrow">About</p>
        <h1>{{ author.name }}</h1>
        <p class="lead">{{ author.bio }}</p>
        <div class="profile-meta">
          <span>{{ author.role }}</span>
          <span>{{ author.location }}</span>
        </div>
        <div class="hero-actions">
          <template v-for="social in author.socials" :key="social.label">
            <router-link
              v-if="social.label === 'Email'"
              class="btn ghost"
              :to="{ name: 'email' }"
            >
              {{ social.label }}
            </router-link>
            <a
              v-else
              class="btn ghost"
              :href="social.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ social.label }}
            </a>
          </template>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">What I write</p>
        <h2>博客方向</h2>
      </div>
      <div class="feature-grid">
        <article>
          <span></span>
          <h3>前端工程化</h3>
          <p>累计Vue、构建工具、组件设计和部署经验。</p>
        </article>
        <article>
          <span></span>
          <h3>界面与体验</h3>
          <p>拆解好看的页面，沉淀可复用的 UI 细节。</p>
        </article>
        <article>
          <span></span>
          <h3>项目实现</h3>
          <p>把自己想要的实现出来</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { author } from '../data/posts'
</script>
