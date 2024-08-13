<template>
  <div class="">
    <q-layout
      view="lHh Lpr lff"
      container
      class="shadow-2 h-screen rounded-borders"
    >
      <DocumentMenu>
        <router-view />
      </DocumentMenu>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import DocumentMenu from 'components/layout/DocumentMenu.vue';
</script>
