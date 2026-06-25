<template>
  <div class="page home-page">
    <HeroSection
      title="把想法实现"
      description="这是一个基于 Vue CLI 的动态博客模板：文章数据可配置，支持实时搜索、标签筛选、暗黑模式、阅读统计、点赞和本地评论。"
      :featured="featuredPost"
      :total-posts="posts.length"
      :total-tags="tags.length"
      :total-minutes="totalMinutes"
    />

    <section class="section-block" id="posts">
      <div class="section-heading">
        <p class="eyebrow">Latest Articles</p>
        <h2>最新文章</h2>
        <p>输入关键词或点击标签，列表会实时更新。</p>
      </div>

      <SearchPanel v-model="keyword" v-model:sort="sortMode" />
      <TagCloud :tags="tags" :active-tag="activeTag" @change="activeTag = $event" />

      <div class="result-line">
        <span>找到 <strong>{{ filteredPosts.length }}</strong> 篇文章</span>
        <button v-if="hasFilter" type="button" class="text-button" @click="resetFilter">清空筛选</button>
      </div>

      <div v-if="filteredPosts.length" class="post-grid">
        <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>

      <div v-else class="empty-state big">
        没找到匹配内容。
      </div>
    </section>

    <section class="newsletter-card">
      <div>
        <p class="eyebrow">Newsletter</p>
        <h2>为什么选择vue-cli</h2>
        <p>后续也许会接入ai问答</p>
      </div>
      <router-link class="btn primary" to="/post/vue-cli-blog-from-zero">查看实现思路</router-link>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import SearchPanel from '../components/SearchPanel.vue'
import TagCloud from '../components/TagCloud.vue'
import PostCard from '../components/PostCard.vue'
import { getAllTags, getFeaturedPosts, posts } from '../data/posts'

const keyword = ref('')
const activeTag = ref('全部')
const sortMode = ref('newest')

const tags = getAllTags()
const featuredPost = getFeaturedPosts()[0] || posts[0]
const totalMinutes = computed(() => posts.reduce((sum, post) => sum + post.readTime, 0))
const hasFilter = computed(() => keyword.value || activeTag.value !== '全部')

const filteredPosts = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const result = posts.filter(post => {
    const matchKeyword = !query || [post.title, post.excerpt, post.tags.join(' ')]
      .join(' ')
      .toLowerCase()
      .includes(query)
    const matchTag = activeTag.value === '全部' || post.tags.includes(activeTag.value)
    return matchKeyword && matchTag
  })

  return [...result].sort((a, b) => {
    if (sortMode.value === 'oldest') return new Date(a.date) - new Date(b.date)
    if (sortMode.value === 'readTime') return b.readTime - a.readTime
    return new Date(b.date) - new Date(a.date)
  })
})

function resetFilter() {
  keyword.value = ''
  activeTag.value = '全部'
}
</script>
