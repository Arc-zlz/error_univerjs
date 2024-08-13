<template>
  <q-splitter v-model="splitterModel" unit="px" :limits="[250, 300]">
    <template v-slot:before>
      <div class="q-pa-md">
        <FileTree />
      </div>
    </template>

    <template v-slot:separator>
      <q-avatar
        color="primary"
        text-color="white"
        size="20px"
        icon="drag_indicator"
      />
    </template>

    <template v-slot:after>
      <NavTabs />
      <div class="flex" style="height: calc(100% - 36px)">
        <CanvasEditor class="flex-1" />
        <MenuOption />
      </div>
    </template>
  </q-splitter>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FileTree from 'components/document/FileTree.vue';
import NavTabs from 'components/document/NavTabs.vue';
import MenuOption from 'components/document/MenuOption.vue';
import CanvasEditor from 'components/public/editor/CanvasEditor.vue';

const splitterModel = ref<number>(250);
</script>

<style></style>
