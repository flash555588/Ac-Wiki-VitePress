<!-- 
  AppCard.vue - 应用卡片组件
  功能：显示应用信息卡片，包含图标、名称和描述
  特性：支持图片路径和图标名称、单行或多行描述、响应式布局、主题适配、错误处理
-->
<script setup lang="ts">
// 导入 Vue 响应式 API
import { computed } from 'vue'

// 定义应用属性接口
export interface AppProps {
    name: string        // 应用名称
    icon: string        // 应用图标路径或图标名称
    desc: Array<string> | string  // 应用描述，支持字符串或字符串数组
}

// 定义组件属性
const props = defineProps<AppProps>()

// 判断是否为图片路径（以 http、https、/ 开头或包含文件扩展名）
const isImagePath = computed(() => {
    return props.icon.startsWith('http') || 
           props.icon.startsWith('https') || 
           props.icon.startsWith('/') || 
           props.icon.includes('.') ||
           props.icon.includes('data:')
})

// 处理图片加载错误
function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // 如果图片加载失败，隐藏图片元素
    img.style.display = 'none';
}
</script>

<template>
    <!-- 应用卡片容器 -->
    <div class="app-card">
        <!-- 应用信息区域 -->
        <div class="app-info">
            <!-- 图片路径方式显示图标 -->
            <img 
                v-if="isImagePath" 
                :src="icon" 
                class="app-icon" 
                :alt="`${name} 图标`"
                @error="handleImageError"
            />
            <!-- 图标名称方式显示图标 -->
            <Icon 
                v-else 
                :icon="icon" 
                class="app-icon-svg"
            />
            <!-- 应用名称 -->
            <span class="app-name" :title="name">{{ name }}</span>
        </div>
        <!-- 应用描述区域 -->
        <div class="app-desc">
            <!-- 处理数组形式的描述（多行描述） -->
            <template v-if="Array.isArray(desc)">
                <p v-for="(para, index) in desc" :key="index">
                    {{ para }}
                </p>
            </template>
            <!-- 处理字符串形式的描述（单行描述） -->
            <template v-else>
                <p>{{ desc }}</p>
            </template>
        </div>
    </div>
</template>

<style scoped>
/* 应用卡片容器样式 */
.app-card {
    display: flex; /* 弹性布局 */
    align-items: flex-start; /* 顶部对齐，适应长描述 */
    gap: 1em; /* 元素间距 */
    margin: 1em auto; /* 外边距：上下1em，左右自动居中 */
    padding: 1em; /* 内边距 */
    border-radius: 0.5em; /* 圆角 */
    background-color: var(--vp-c-bg-soft); /* 使用主题变量设置背景色 */
    transition: background-color 0.2s; /* 过渡动画 */
}

/* 应用信息区域样式 */
.app-info {
    display: flex; /* 弹性布局 */
    flex-direction: column; /* 垂直排列 */
    flex-shrink: 0; /* 不允许收缩 */
    align-items: center; /* 水平居中对齐 */
    gap: 0.5em; /* 元素间距 */
    width: 4em; /* 固定宽度 */
    min-width: 4em; /* 最小宽度 */
}

/* 应用名称样式 */
.app-name {
    font-size: 0.8em; /* 字体大小 */
    font-weight: 600; /* 字体粗细 */
    line-height: 1rem; /* 行高 */
    text-align: center; /* 文本居中对齐 */
    word-break: break-word; /* 长单词换行 */
    overflow-wrap: break-word; /* 溢出换行 */
    max-width: 100%; /* 最大宽度 */
}

/* 应用图标样式（图片方式） */
.app-icon {
    width: 3em; /* 图标宽度 */
    height: 3em; /* 图标高度 */
    border-radius: 0.5em; /* 圆角 */
    box-shadow: 2px 4px 1rem var(--vp-c-divider); /* 阴影效果 */
    background-color: white; /* 背景色 */
    object-fit: cover; /* 图片适配 */
    transition: transform 0.2s; /* 过渡动画 */
}

/* 应用图标样式（SVG方式） */
.app-icon-svg {
    width: 3em; /* 图标宽度 */
    height: 3em; /* 图标高度 */
    border-radius: 0.5em; /* 圆角 */
    box-shadow: 2px 4px 1rem var(--vp-c-divider); /* 阴影效果 */
    background-color: white; /* 背景色 */
    padding: 0.5em; /* 内边距 */
    transition: transform 0.2s; /* 过渡动画 */
    color: var(--vp-c-text-1); /* 图标颜色 */
}

/* 图标悬停效果 */
.app-icon:hover,
.app-icon-svg:hover {
    transform: scale(1.05); /* 悬停时轻微放大 */
}

/* 应用描述区域样式 */
.app-desc {
    flex: 1; /* 占据剩余空间 */
    min-width: 0; /* 允许收缩 */
}

/* 应用描述段落样式 */
.app-desc > p {
    margin: 0.5em 0; /* 段落外边距 */
    line-height: 1.4; /* 行高 */
    color: var(--vp-c-text-2); /* 使用主题变量设置文本颜色 */
}

/* 第一个段落没有上边距 */
.app-desc > p:first-child {
    margin-top: 0;
}

/* 最后一个段落没有下边距 */
.app-desc > p:last-child {
    margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .app-card {
        flex-direction: column; /* 移动端垂直排列 */
        align-items: center; /* 居中对齐 */
        text-align: center; /* 文本居中 */
    }
    
    .app-info {
        width: auto; /* 自动宽度 */
        min-width: auto; /* 自动最小宽度 */
    }
    
    .app-name {
        font-size: 0.9em; /* 移动端稍大字体 */
    }
    
    .app-icon,
    .app-icon-svg {
        width: 4em; /* 移动端更大图标 */
        height: 4em; /* 移动端更大图标 */
    }
}
</style> 