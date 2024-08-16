<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="test()">click</q-btn>
  </q-page>
</template>

<script setup lang="ts">
function test() {
  window.electronAPI.setTitle('test title');
}
</script>
