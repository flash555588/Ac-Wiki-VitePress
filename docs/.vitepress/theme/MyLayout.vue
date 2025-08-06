<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Author from '../components/Author.vue'
import GiscusComment from '../components/GiscusComment.vue' // 评论模块
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <Author />
    </template>
    <template #doc-after>
      <GiscusComment />
    </template>
  </DefaultTheme.Layout>
</template> 