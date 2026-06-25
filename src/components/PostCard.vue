<template>
  <article class="post-card">
    <router-link class="post-cover" :style="{ background: post.cover }" :to="`/post/${post.slug}`">
      <span v-if="post.featured" class="featured-badge">精选</span>
      <span class="cover-title">{{ post.title.slice(0, 2) }}</span>
    </router-link>

    <div class="post-body">
      <div class="post-meta">
        <time :datetime="post.date">{{ formattedDate }}</time>
        <span>·</span>
        <span>{{ post.readTime }} 分钟</span>
      </div>

      <router-link :to="`/post/${post.slug}`" class="post-title">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{ post.excerpt }}</p>

      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: { type: Object, required: true }
})

const formattedDate = computed(() => new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}).format(new Date(props.post.date)))
</script>
