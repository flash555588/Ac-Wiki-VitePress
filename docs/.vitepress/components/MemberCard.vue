<!-- 
  MemberCard.vue - 成员卡片组件
  功能：显示单个团队成员信息
  特性：头像显示、链接支持、响应式设计
-->
<script setup lang="ts">
// 导入类型定义和工具函数
import type { Member } from '../utils/member'
import { getAvatar } from '../utils/member'
import Link from './Link.vue'

// 定义组件属性，使用 Partial 使所有属性可选
defineProps<Partial<Member>>()
</script>

<template>
    <!-- 成员卡片容器 -->
    <div class="card">
        <!-- 成员头像 -->
        <img class="avatar" :src="getAvatar($props)">
        <!-- 成员姓名 -->
        <span class="name">{{ name }}</span>
        <!-- 成员职位 -->
        <span class="title">{{ title }}</span>
        <!-- 成员链接 -->
        <span v-if="github || linkText && link" class="links">
            <!-- GitHub 链接 -->
            <Link v-if="github" icon="ri:github-fill" :link="`https://github.com/${github}`" />
            <!-- 自定义链接 -->
            <Link v-if="link && linkText" icon="ri:link-m" :link="link">{{ linkText }}</Link>
        </span>
    </div>
</template>

<style scoped>
/* 成员卡片样式 */
.card {
    display: flex; /* 弹性布局 */
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中对齐 */
    gap: 0.5em; /* 元素间距 */
    width: 10em; /* 固定宽度 */
    margin: 0.5em auto; /* 外边距 */
    padding: 0.5em; /* 内边距 */
    border-radius: 0.5em; /* 圆角 */
    background-color: var(--vp-c-bg-soft); /* 背景色 */
    line-height: normal; /* 行高 */
}

/* 头像样式 */
.avatar {
    width: 3rem; /* 头像宽度 */
    height: 3rem; /* 头像高度 */
    border-radius: 4rem; /* 圆形头像 */
    box-shadow: 2px 4px 1rem var(--vp-c-divider); /* 阴影效果 */
}

/* 姓名样式 */
.name {
    font-weight: 600; /* 字体粗细 */
}

/* 职位样式 */
.title {
    flex-grow: 1; /* 占据剩余空间 */
    margin-top: -0.5em; /* 负上边距 */
    font-size: 0.75em; /* 字体大小 */
    color: var(--vp-c-text-3); /* 文字颜色 */
}

/* 链接容器样式 */
.links {
    display: flex; /* 弹性布局 */
    gap: 0.5em; /* 元素间距 */
    font-size: 0.8em; /* 字体大小 */
    line-height: 1.2; /* 行高 */
}

/* 卡片内链接样式重置 */
.card a {
    overflow: hidden; /* 隐藏溢出 */
    background: unset; /* 重置背景 */
}

.card a[target]::after {
    content: unset; /* 移除外部链接标识 */
}
</style> 