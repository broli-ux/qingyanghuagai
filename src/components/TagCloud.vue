<template>
  <div class="tag-cloud" aria-label="标签筛选">
    <button
      type="button"
      class="tag-pill"
      :class="{ active: activeTag === '全部' }"
      @click="$emit('change', '全部')"
    >
      全部
    </button>
    <button
      v-for="tag in tags"
      :key="tag"
      type="button"
      class="tag-pill"
      :class="{ active: activeTag === tag }"
      @click="$emit('change', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tags: { type: Array, default: () => [] },
  activeTag: { type: String, default: '全部' }
})

defineEmits(['change'])
</script>
