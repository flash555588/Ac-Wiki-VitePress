<!-- 
  QRCode.vue - 二维码组件
  功能：生成并显示二维码，支持访问链接
  特性：动态生成二维码、可选的访问链接、自定义缩放
-->
<script setup lang="ts">
// 导入二维码生成库和 Vue 组合式 API
import QRCode from 'qrcode' // 二维码生成库
import { onMounted, ref } from 'vue' // Vue 生命周期和响应式 API
import Link from './Link.vue' // 链接组件

// 定义组件属性
const props = defineProps<{
    src: string        // 二维码内容（URL 或文本）
    text?: string      // 显示的文本描述
    scale?: number     // 二维码缩放比例
    visit?: boolean    // 是否显示访问链接
}>()

// 存储生成的二维码数据 URL
const qrcodeDataUrl = ref('')

// 生成二维码的异步函数
async function generateQRCode() {
    if (!props.src)
        return

    // 使用 QRCode 库生成二维码数据 URL
    qrcodeDataUrl.value = await QRCode.toDataURL(props.src, {
        margin: 2, // 二维码边距
        scale: props.scale ?? 4, // 缩放比例，默认为 4
    })
}

// 组件挂载时生成二维码
onMounted(() => {
    generateQRCode()
})
</script>

<template>
    <!-- 二维码容器 -->
    <div class="qrcode">
        <!-- 二维码图片 -->
        <img class="image" :src="qrcodeDataUrl" alt="">
        <!-- 文本描述区域 -->
        <div class="text vp-doc">
            {{ text }}
            <!-- 条件显示访问链接 -->
            <template v-if="visit">
                <Link :link="src">
                    <Icon icon="ri:arrow-right-line" />访问
                </Link>
            </template>
        </div>
    </div>
</template>

<style scoped>
/* 二维码图片样式 */
.image {
    opacity: 0.75; /* 透明度 */
    margin: auto; /* 居中对齐 */
    image-rendering: pixelated; /* 像素化渲染，保持二维码清晰度 */
}

/* 文本描述样式 */
.text {
    opacity: 0.8; /* 透明度 */
    margin: 0.5em 0 1em; /* 外边距：上下左右 */
    font-size: 0.8em; /* 字体大小 */
    line-height: normal; /* 行高 */
    text-align: center; /* 文本居中对齐 */
}
</style> 