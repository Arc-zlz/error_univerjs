<template>
  <div>
    <div class="sticky pt-2 bg-white z-50 top-0">
      <div class="text-lg cursor-pointer line-clamp-2 max-h-[100px] font-bold">
        计算机编程语言
        <q-tooltip anchor="center right" self="center start"
          >计算机编程语言
          这是标题这是标题这是标题这是标题这是标题这是标题这是标题计算机编程语言计算机编程语言
        </q-tooltip>
      </div>
      <div class="flex justify-end">
        <!-- 折叠目录页面 -->
        <q-btn
          class="text-xs text-[#575d6c]"
          size="sm"
          flat
          round
          icon="unfold_less"
        >
          <q-tooltip anchor="center right" self="center start">
            折叠
          </q-tooltip>
        </q-btn>
        <!-- 创建文件 -->
        <q-btn
          class="text-xs text-[#575d6c]"
          size="sm"
          flat
          round
          icon="note_add"
        >
          <q-tooltip anchor="center right" self="center start">
            新建文件
          </q-tooltip>
        </q-btn>
      </div>
      <q-separator class="mt-2" />
    </div>
    <vxeTree
      :data="data"
      :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }"
    >
      <template #content="{ nodeData }">
        <svg
          style="margin-right: 8px"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <path
            :d="`${
              nodeData.isLeaf
                ? 'M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z'
                : nodeData.expanded
                ? 'M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z'
                : 'M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z'
            }`"
            stroke-width="1"
            fill="#8a8e99"
          ></path>
        </svg>
        {{ nodeData.label }}
        <q-tooltip anchor="center right" self="center start">
          {{ nodeData.label }}
        </q-tooltip>
      </template>
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

<style lang="scss" scoped></style>
