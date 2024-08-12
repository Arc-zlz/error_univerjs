<template>
  <div>
    <vxeTree
      :data="data"
      :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }"
    >
      <template #icon="{ nodeData, toggleNode }">
        <span v-if="nodeData.isLeaf" class="devui-tree-node__indent"></span>
        <span
          v-else
          @click="
            (event) => {
              event.stopPropagation();
              toggleNode(nodeData);
            }
          "
        >
          <svg
            :style="{
              transform: nodeData.expanded ? 'rotate(90deg)' : '',
              marginLeft: '-2.5px',
              marginRight: '14.5px',
              cursor: 'pointer',
            }"
            viewBox="0 0 1024 1024"
            width="12"
            height="12"
          >
            <path
              d="M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z"
              fill="#8a8e99"
            ></path>
          </svg>
        </span>
      </template>
    </vxeTree>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
  {
    label: '计算机科学概论',
    children: [
      {
        label: '第1章 计算机系统基础',
        children: [
          { label: '1.1 硬件系统' },
          { label: '1.2 软件系统' },
          { label: '1.3 数据表示' },
        ],
      },
      {
        label: '第2章 编程基础',
        children: [
          { label: '2.1 程序设计语言' },
          { label: '2.2 算法与数据结构' },
          { label: '2.3 软件开发过程' },
        ],
      },
    ],
  },
  {
    label: '算法设计与分析',
    children: [
      {
        label: '第1章 引言',
        children: [
          { label: '1.1 算法的概念' },
          { label: '1.2 分析算法的效率' },
          { label: '1.3 排序算法简介' },
        ],
      },
      {
        label: '第2章 高级数据结构',
        children: [
          { label: '2.1 堆' },
          { label: '2.2 平衡二叉搜索树' },
          { label: '2.3 并查集' },
        ],
      },
    ],
  },
  {
    label: '人工智能导论',
    children: [
      {
        label: '第1章 人工智能概述',
        children: [
          { label: '1.1 人工智能的历史' },
          { label: '1.2 机器学习基础' },
          { label: '1.3 自然语言处理' },
        ],
      },
      {
        label: '第2章 深度学习',
        children: [
          { label: '2.1 深度神经网络' },
          { label: '2.2 卷积神经网络' },
          { label: '2.3 循环神经网络' },
        ],
      },
    ],
  },
]);
</script>

<style scoped></style>
