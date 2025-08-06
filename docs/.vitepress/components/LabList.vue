<!-- 
  LabList.vue - 实验室列表组件
  功能：显示实验室/兴趣小组/工作室列表
  特性：随机排序、动画效果、响应式布局
-->
<script setup lang="ts">
// 导入 Vue 组合式 API
import { onMounted, ref } from 'vue'
// 导入实验室数据和子组件
import LabList from '../data/labs.json'
import LabItem from './LabItem.vue'

// 创建响应式实验室列表
const labs = ref([...LabList])

// 随机排序实验室列表
const shuffleLabs = () => labs.value.sort(() => Math.random() - 0.5)

// 组件挂载时执行随机排序
onMounted(shuffleLabs)
</script>

<template>
    <!-- 标题区域 -->
    <h1 class="center-line">
        西邮实验室/兴趣小组/工作室列表
        <!-- 随机排序按钮 -->
        <Icon class="shuffle-btn" icon="ri:shuffle-fill" @click="shuffleLabs" />
    </h1>

    <!-- 插槽内容 -->
    <slot />

    <!-- 数据来源说明 -->
    <div class="center-line vp-doc">
        由 <a href="https://docs.qq.com/sheet/DSkFiRmpzcVJHSklM?tab=BB08J2" target="_blank">西邮实验室纳新信息表</a> 生成，可通过在线文档修改信息
    </div>

    <!-- 实验室列表容器，使用过渡动画 -->
    <TransitionGroup tag="section" class="lab-list vp-doc">
        <!-- 遍历实验室列表 -->
        <LabItem v-for="lab in labs" v-bind="lab" :key="lab.id" />
    </TransitionGroup>
</template>

<style scoped>
/* 实验室列表网格布局 */
.lab-list {
    display: grid; /* 网格布局 */
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); /* 响应式列数 */
    gap: 1rem; /* 网格间距 */
    margin: 2rem auto; /* 外边距 */
}

/* 居中对齐的标题样式 */
.center-line {
    margin: 2em 0 2rem; /* 外边距 */
    font: revert; /* 重置字体 */
    line-height: normal; /* 行高 */
    text-align: center; /* 文本居中 */
}

/* 随机排序按钮样式 */
.shuffle-btn {
    cursor: pointer; /* 鼠标指针 */
}

/* 过渡动画样式 */
.v-move {
    transition: transform 0.3s; /* 变换过渡动画 */
}
</style> 