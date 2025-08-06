<script setup lang="ts">
import type { Member } from '../utils/member'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { isExtLink } from '../utils/link'
import { getAuthor } from '../utils/member'

const { frontmatter } = useData()

const authors = computed(() => {
  const author = frontmatter.value.author
  if (!author) return []
  
  // 处理字符串格式
  if (typeof author === 'string') {
    return [getAuthor(author)]
  }
  
  // 处理数组格式
  if (Array.isArray(author)) {
    return author.map(getAuthor)
  }
  
  return []
})

function genAuthorTip(author: Member) {
  return {
    content: author.qq ? `QQ: ${author.qq}` : `GitHub@${author.github}`,
    interactive: true,
  }
}
</script>

<template>
  <section class="authors">
    <a
      v-for="author in authors"
      :key="author.name"
      v-tip="genAuthorTip(author)"
      class="author"
      :href="author.link"
      :target="isExtLink(author.link) ? '_blank' : undefined"
    >
      <img v-if="author.avatar" :src="author.avatar" alt="">
      <span class="name">{{ author.name }}</span>
    </a>
  </section>
</template>

<style scoped>
.authors {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 1em 0;
  font-size: 0.8rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.2s;
}

.author:hover {
  background-color: var(--vp-c-bg-soft-up);
}

.author img {
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
}

.author .name {
  font-weight: 500;
}
</style> 