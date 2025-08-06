<!-- 
  Link.vue - 链接组件
  功能：渲染内部或外部链接，支持图标和复制功能
  特性：自动识别外部链接、条件渲染、支持复制功能
-->
<script setup lang="ts">
// 导入工具函数和子组件
import { isExtLink } from '../utils/link' // 判断是否为外部链接的工具函数
import Tip from './Tip.vue' // 提示组件

// 定义组件属性
defineProps<{
    icon?: string    // 图标名称
    link?: string    // 链接地址
    text?: string    // 显示文本
    copy?: boolean   // 是否启用复制功能
}>()
</script>

<template>
    <!-- 动态组件：根据是否有链接决定渲染 a 标签或 span 标签 -->
    <!-- 外部链接在新窗口打开 -->
    <component
        :is="link ? 'a' : 'span'"
        class="link"
        :href="link"
        :target="isExtLink(link) ? '_blank' : undefined"
    >
        <!-- 条件显示图标 -->
        <Icon v-if="icon" :icon="icon" />

        <!-- 动态组件：根据是否启用复制功能决定渲染 Tip 组件或 span 标签 -->
        <component
            :is="copy ? Tip : 'span'"
            v-if="$slots.default || text"
            class="content"
            :copy
        >
            <!-- 插槽内容或默认文本 -->
            <slot>{{ text }}</slot>
        </component>
    </component>
</template>

<style scoped>
/* 链接容器样式 */
.link {
    display: inline-flex; /* 行内弹性布局 */
    gap: 0.2em; /* 元素间距 */
    line-height: 1.4; /* 行高 */
}

/* 图标样式 */
.iconify {
    height: 1.2em; /* 图标高度 */
}

/* 内容区域样式 */
.content {
    display: -webkit-box; /* WebKit 弹性盒子 */
    overflow: hidden; /* 隐藏溢出内容 */
    -webkit-line-clamp: 2; /* 限制显示行数为 2 行 */
    line-clamp: 2; /* 标准属性：限制显示行数 */
    -webkit-box-orient: vertical; /* 垂直排列 */
}
</style> 