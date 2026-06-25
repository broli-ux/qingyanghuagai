<template>
  <div v-if="post" class="page detail-page">
    <article class="article-shell">
      <header class="article-hero" :style="{ background: post.cover }">
        <router-link class="back-link" to="/">← 返回首页</router-link>
        <div class="article-hero-content">
          <div class="post-tags light">
            <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
          </div>
          <h1>{{ post.title }}</h1>
          <p>{{ post.excerpt }}</p>
          <div class="article-meta">
            <time :datetime="post.date">{{ formattedDate }}</time>
            <span>{{ post.readTime }} 分钟阅读</span>
            <span>{{ views }} 次浏览</span>
            <span>{{ likes }} 个喜欢</span>
          </div>
        </div>
      </header>

      <div class="article-layout">
        <aside class="toc-card">
          <p class="eyebrow">On this page</p>
          <a v-for="section in post.content" :key="section.heading" :href="`#${slugify(section.heading)}`">
            {{ section.heading }}
          </a>
          <button class="btn ghost full" type="button" @click="likePost">收藏</button>
        </aside>

        <div class="article-content">
          <section v-for="section in post.content" :id="slugify(section.heading)" :key="section.heading">
            <h2>{{ section.heading }}</h2>
            <p>{{ section.body }}</p>
          </section>

          <div class="article-cta">
            <h2>下一步可以怎么改？</h2>
            <p>请联系作者将您宝贵的意见发送给我</p>
            <router-link class="btn primary" to="/about">看看作者介绍</router-link>
          </div>

          <CommentBox :slug="post.slug" />
        </div>
      </div>
    </article>
  </div>

  <NotFound v-else />
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CommentBox from '../components/CommentBox.vue'
import NotFound from './NotFound.vue'
import { getPostBySlug } from '../data/posts'
import { getMetrics, incrementMetric } from '../utils/storage'

const route = useRoute()
const post = computed(() => getPostBySlug(route.params.slug))
const views = ref(0)
const likes = ref(0)

const formattedDate = computed(() => post.value ? new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date(post.value.date)) : '')

function slugify(text) {
  return encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'))
}

function loadMetrics() {
  if (!post.value) return
  const metrics = getMetrics(post.value.slug)
  views.value = metrics.views || 0
  likes.value = metrics.likes || 0
}

function likePost() {
  if (!post.value) return
  likes.value = incrementMetric(post.value.slug, 'likes')
}

function viewPost() {
  if (!post.value) return
  views.value = incrementMetric(post.value.slug, 'views')
  const metrics = getMetrics(post.value.slug)
  likes.value = metrics.likes || 0
}

onMounted(viewPost)
watch(() => route.params.slug, () => {
  loadMetrics()
  viewPost()
})
</script>
