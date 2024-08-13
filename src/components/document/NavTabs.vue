<template>
  <div class="sticky top-0 z-50 bg-white">
    <q-tabs v-model="tab" no-caps inline-label dense :align="tabsAlign">
      <q-tab :name="item" v-for="item in 10" :key="item">
        <!-- 这个图标是文件夹和文件的图标 -->
        <q-icon name="description" size="1.25rem" />
        <div class="inline-block mx-1 text-[.95rem]">标题{{ item }}</div>
        <q-icon
          name="close"
          class="hover:text-cyan-400"
          @click.stop="() => console.log(222)"
        />
      </q-tab>
      <q-tab name="alarms" icon="alarm" label="Alarms" />
      <q-tab name="movies" icon="movie" label="Movies" />
      <q-tab name="photos" icon="photo" label="Photos" />
      <q-tab name="videos" icon="slow_motion_video" label="Videos" />
      <q-tab
        :name="'addressbook' + item"
        icon="people"
        label="Address Book"
        v-for="item in 1"
        :key="item"
      />
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref<string | number>(1);
const tabsAlign = ref<'left' | 'center' | 'right' | 'justify' | undefined>(
  'left'
);
</script>

<style scoped></style>
