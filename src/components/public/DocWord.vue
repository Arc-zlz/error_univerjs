<template>
  <div>
    <div class="canvas-editor"></div>
  </div>
</template>

<script setup lang="ts">
import Editor from '@hufe921/canvas-editor';
import { onMounted } from 'vue';

onMounted(() => {
  new Editor(document.querySelector('.canvas-editor'), {
    main: [
      {
        value: 'Hello World',
      },
    ],
  });
});
</script>

<style scoped></style>
