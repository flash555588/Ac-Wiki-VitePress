<!-- 
  TableAutoSpan.vue - 自动合并单元格表格组件
  功能：根据空单元格自动计算并合并表格行
  特性：自动计算 rowspan、处理空单元格、动态表格渲染
-->
<script setup lang="ts">
// 定义组件属性
const { data } = defineProps<{
    data: string[][] // 二维数组，包含表格数据
}>()

/**
 * 计算指定位置的行合并数量
 * @param startRow 开始行索引
 * @param colIndex 列索引
 * @returns 合并的行数
 */
function calculateRowSpan(startRow: number, colIndex: number) {
    let spanCount = 1 // 初始合并数量为 1
    
    // 向下遍历，统计连续的空单元格
    for (let i = startRow + 1; i < data.length; i++) {
        if (data[i][colIndex] === '') {
            spanCount++ // 遇到空单元格，合并数量加 1
        }
        else {
            break // 遇到非空单元格，停止计算
        }
    }
    return spanCount
}
</script>

<template>
    <!-- 表格容器 -->
    <table>
        <!-- 表头 -->
        <thead>
            <tr>
                <!-- 遍历第一行作为表头 -->
                <th v-for="header, index in data[0]" :key="index">
                    {{ header }}
                </th>
            </tr>
        </thead>
        <!-- 表格主体 -->
        <tbody>
            <!-- 遍历除第一行外的所有行 -->
            <tr v-for="row, rowIndex in data.slice(1)" :key="rowIndex">
                <!-- 遍历每行的单元格 -->
                <template v-for="cell, colIndex in row" :key="colIndex">
                    <!-- 只渲染非空单元格或第一列 -->
                    <td
                        v-if="cell || (rowIndex | colIndex) === 0"
                        :rowspan="cell ? calculateRowSpan(rowIndex + 1, colIndex) : 1"
                    >
                        {{ cell }}
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template> 