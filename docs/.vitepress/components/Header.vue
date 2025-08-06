<!-- 
  Header.vue - 页面头部组件
  功能：显示欢迎信息和项目 Logo
  包含：欢迎文本、Logo 组件
-->
<template>
    <!-- 页面头部容器 -->
    <header>
        <!-- 欢迎信息段落 -->
        <p>
            欢迎加入 Ac-Wiki 社区。项目修缮中，可联系管理员贡献内容。
        </p>
        <!-- 自定义 Logo 组件，应用 header-logo 样式类 -->
        <CustomLogo 
            class="header-logo" 
            image-src="/logo.svg"
            alt-text="Ac-Wiki Logo"
            :use-image="true"
        />
    </header>
</template>

<script setup lang="ts">
// 导入自定义 Logo 组件
import CustomLogo from './CustomLogo.vue'
</script>

<style scoped>
/* 头部容器样式 */
header {
    position: relative; /* 相对定位，为绝对定位的子元素提供参考 */
    margin-block: -1em 2em; /* 上下外边距：上边距-1em，下边距2em */
    color: var(--vp-c-text-3); /* 使用 VitePress 主题变量设置文本颜色 */
}

/* 移动端响应式样式 */
/* stylelint-disable-next-line media-feature-range-notation */
@media (max-width: 768px) {
    header {
        font-size: 0.875em; /* 在小屏幕上减小字体大小 */
    }
}

/* 强调文本样式 */
strong {
    font-size: 1.2em; /* 强调文本字体大小 */
}

/* Logo 样式 */
.header-logo {
    position: absolute; /* 绝对定位 */
    top: 0; /* 距离顶部 0 */
    right: 0; /* 距离右侧 0 */
    height: 5em; /* Logo 高度 */
    color: var(--vp-c-divider); /* 使用主题变量设置颜色 */
    z-index: -1; /* 置于其他元素下方 */
}
</style> 