<template>
  <div class="">
    <q-layout
      view="lHh Lpr lff"
      container
      class="shadow-2 h-screen rounded-borders"
    >
      <ProjectMenu>
        <router-view />
      </ProjectMenu>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import ProjectMenu from 'components/layout/ProjectMenu.vue';
</script>
