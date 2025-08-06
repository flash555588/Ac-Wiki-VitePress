<!-- 
  CustomLogo.vue - 自定义 Logo 组件
  功能：可配置的 Logo 显示组件
  特性：支持多种图片格式、自定义样式、响应式设计
-->
<template>
    <!-- 自定义 Logo 容器 -->
    <div class="custom-logo" :class="logoClass">
        <!-- 根据配置显示不同类型的 Logo -->
        <img 
            v-if="useImage" 
            :src="imageSrc" 
            :alt="altText"
            class="logo-image"
            @error="handleImageError"
        />
        <!-- SVG Logo 作为备选 -->
        <svg 
            v-else 
            class="logo-svg" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1540 1760"
        >
            <path 
                fill="currentColor" 
                fill-rule="evenodd" 
                d="M330 1320a110 110 0 1 0 0 220h880v-220Zm864-996c-133 10-244 188-352 168-108-3-186-142-359-140-138 66-178 115-233 168 158 35 359 82 399 197 33 99-97 211-173 284l90 74c193-91 381-191 398-361 57-175 196-249 326-365-33-20-65-27-96-25ZM330 0h1100c61 0 110 49 110 110v1100c0 61-49 110-110 110v220a110 110 0 1 1 0 220H330A330 330 0 0 1 0 1430V330C0 148 148 0 330 0Z" 
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
// 定义组件属性
interface Props {
    imageSrc?: string      // 图片源路径
    altText?: string       // 图片替代文本
    logoClass?: string     // 自定义 CSS 类
    useImage?: boolean     // 是否使用图片而不是 SVG
}

const props = withDefaults(defineProps<Props>(), {
    imageSrc: '/logo.svg',
    altText: 'Ac-Wiki Logo',
    logoClass: '',
    useImage: true
})

// 处理图片加载错误
function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // 如果当前图片加载失败，尝试其他格式
    if (img.src.includes('.svg')) {
        img.src = '/logo.jpg';
    } else if (img.src.includes('.jpg')) {
        img.src = '/TencentEdgeone.png';
    }
}
</script>

<style scoped>
.custom-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
}

.logo-svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}
</style> 