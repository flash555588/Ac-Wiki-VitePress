<!-- 
  Logo.vue - Logo 组件
  功能：显示网站 Logo
  实现：支持 SVG 和图片文件
-->
<template>
    <!-- Logo 容器，支持多种图片格式 -->
    <img 
        class="logo" 
        src="/logo.svg" 
        alt="Ac-Wiki Logo"
        @error="handleImageError"
    />
</template>

<script setup lang="ts">
// 处理图片加载错误
function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // 如果 SVG 加载失败，尝试加载 JPG 格式
    if (img.src.includes('.svg')) {
        img.src = '/logo.jpg';
    }
}
</script>

<style scoped>
.logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style> 