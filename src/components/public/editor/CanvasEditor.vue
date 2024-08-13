<template>
  <div class="w-full">
    <!-- 工具栏 -->
    <div
      class="flex justify-center p-2 sticky z-50 bg-white"
      :style="{ top: `${tabTop}px` }"
    >
      <q-separator color="#ccc" inset />
      <div v-for="item in 10" :key="item">组{{ item }}</div>
    </div>
    <!-- 内容区 -->

    <q-scroll-area
      :style="{ height: `calc(100vh - ${tabTop * 3}px)` }"
      class="bg-gray-200"
    >
      <div class="flex justify-center mt-10">
        <div class="canvas-editor" ref="canvasEditor" />
      </div>
    </q-scroll-area>
    <!-- 底部区 -->
    <div class="sticky bottom-0 bg-white p-1 flex justify-between px-2">
      <div>
        <q-icon name="description" size="1.25rem" />
        <q-icon name="description" size="1.25rem" />
      </div>
      <div>
        <q-icon name="description" size="1.25rem" />
        <q-icon name="description" size="1.25rem" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from '@hufe921/canvas-editor';
import { onMounted, PropType, ref } from 'vue';

const canvasEditor = ref<HTMLDivElement | null>(null);

defineProps({
  tabTop: {
    type: Number as PropType<number>,
    default: 36,
  },
});
function initEditor() {
  if (!canvasEditor.value) return console.log('没有找到该元素');
  new Editor(canvasEditor.value, {
    main: [
      {
        value: 'Hello World',
      },
    ],
  });
}
onMounted(() => {
  initEditor();
});
</script>

<style scoped></style>
