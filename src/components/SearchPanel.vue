<template>
  <section class="search-panel" aria-label="文章搜索与筛选">
    <label class="search-box">
      <span>搜索文章</span>
      <input
        :value="modelValue"
        type="search"
        placeholder=""
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </label>

    <label class="search-box compact">
      <span>排序</span>
      <select :value="sort" @change="$emit('update:sort', $event.target.value)">
        <option value="newest">最新优先</option>
        <option value="oldest">最早优先</option>
        <option value="readTime">阅读时间</option>
      </select>
    </label>
  </section>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  sort: { type: String, default: 'newest' }
})

defineEmits(['update:modelValue', 'update:sort'])
</script>
