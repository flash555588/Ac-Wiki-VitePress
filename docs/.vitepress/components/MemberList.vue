<!-- 
  MemberList.vue - 成员列表组件
  功能：显示团队成员列表
  特性：网格布局、响应式设计、卡片展示
-->
<script setup lang="ts">
// 导入类型定义和子组件
import type { Member } from '../utils/member'
import MemberCard from './MemberCard.vue'

// 定义组件属性
defineProps<{
    members: Member[] // 成员列表
}>()
</script>

<template>
    <!-- 成员列表容器 -->
    <section class="members">
        <!-- 遍历成员列表，渲染成员卡片 -->
        <MemberCard v-for="member in members" :key="member.name" v-bind="member" />
    </section>
</template>

<style scoped>
/* 成员列表容器样式 */
.members {
    display: grid; /* 网格布局 */
    grid-template-columns: repeat(auto-fill, minmax(8em, 1fr)); /* 响应式列数，最小8em */
    gap: 0.5em; /* 网格间距 */
    margin: 2em auto; /* 外边距 */
}

/* 卡片样式 */
.card {
    width: auto; /* 自动宽度 */
    margin: 0; /* 无外边距 */
}
</style> 