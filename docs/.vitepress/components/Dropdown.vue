<!-- 
  Dropdown.vue - 下拉菜单组件
  功能：基于 Tooltip 组件实现的下拉菜单
  特性：交互式提示、自定义内容、响应式布局
-->
<template>
    <!-- 使用 Tooltip 组件实现下拉菜单功能 -->
     <!-- 交互式模式，鼠标悬停时保持显示 -->
     <!-- 提示框位置：底部 -->
      <!-- 不显示箭头 -->
     <!-- 点击时不隐藏 -->
    <!-- 偏移量：无偏移 -->
    <Tooltip
        class="dropdown"
        interactive   
        placement="bottom" 
        :arrow="false" 
        :hide-on-click="false" 
        :offset="[0, 0]"
    >
        <!-- 触发器插槽 -->
        <slot />
        <!-- 内容插槽，传递 hide 函数 -->
        <template #content="{ hide }">
            <slot name="content" :hide />
        </template>
    </Tooltip>
</template>

<style scoped>
/* 
  Tooltip 样式定制
  参考：https://vue-tippy.netlify.app/props#appendto
  Tooltip 位于组件根部时，interactive tippy 会插入到父组件 
*/

/* 下拉菜单容器样式 */
:deep() ~ [data-tippy-root] > .tippy-box {
    overflow: auto; /* 内容溢出时显示滚动条 */
    max-height: clamp(4rem, 50vh, 20rem); /* 最大高度：最小4rem，最大20rem，默认50vh */
    padding: 0; /* 无内边距 */
    font-size: inherit; /* 继承字体大小 */
    scrollbar-width: thin; /* 细滚动条 */
}

/* 下拉菜单内容区域样式 */
:deep() ~ [data-tippy-root] .tippy-content {
    display: grid; /* 网格布局 */
}

/* 下拉菜单按钮样式 */
:deep() ~ [data-tippy-root] .tippy-content button {
    padding: 0.1em 0.5em; /* 内边距 */
    text-align: start; /* 文本左对齐 */
    transition: color 0.1s, background-color 0.2s; /* 过渡动画 */
    cursor: pointer; /* 鼠标指针样式 */
}

/* 下拉菜单按钮悬停效果 */
:deep() ~ [data-tippy-root] .tippy-content button:hover {
    background-color: var(--vp-c-default-soft); /* 悬停时背景色 */
}
</style> 