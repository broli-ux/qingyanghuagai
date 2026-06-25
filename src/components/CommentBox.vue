<template>
  <section class="comment-box">
    <div class="section-heading slim">
      <p class="eyebrow">Local Comments</p>
      <h2>留言区</h2>
      
    </div>

    <form class="comment-form" @submit.prevent="submitComment">
      <input v-model.trim="form.name" type="text" placeholder="" maxlength="20" required>
      <textarea v-model.trim="form.message" placeholder="给点建议吧..." maxlength="240" required></textarea>
      <button class="btn primary" type="submit">发布评论</button>
    </form>

    <div v-if="comments.length" class="comment-list">
      <article v-for="comment in comments" :key="comment.id" class="comment-item">
        <div class="comment-avatar">{{ comment.name.slice(0, 1).toUpperCase() }}</div>
        <div>
          <strong>{{ comment.name }}</strong>
          <time>{{ comment.createdAt }}</time>
          <p>{{ comment.message }}</p>
        </div>
      </article>
    </div>

    <p v-else class="empty-state">还没有评论，来坐第一个沙发 </p>
  </section>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { getItem, setItem } from '../utils/storage'

const props = defineProps({
  slug: { type: String, required: true }
})

const form = reactive({
  name: '',
  message: ''
})
const comments = ref([])

function loadComments() {
  const allComments = getItem('comments', {})
  comments.value = allComments[props.slug] || []
}

function submitComment() {
  const nextComment = {
    id: Date.now(),
    name: form.name,
    message: form.message,
    createdAt: new Intl.DateTimeFormat('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date())
  }

  const allComments = getItem('comments', {})
  allComments[props.slug] = [nextComment, ...(allComments[props.slug] || [])]
  setItem('comments', allComments)
  comments.value = allComments[props.slug]
  form.name = ''
  form.message = ''
}

watch(() => props.slug, loadComments, { immediate: true })
</script>
