<template>
  <q-splitter class="h-screen" v-model="splitterModel">
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
      <div class="q-pa-md">
        <DocWord />
      </div>
    </template>
  </q-splitter>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FileTree from 'components/document/FileTree.vue';
import DocWord from 'components/public/DocWord.vue';

const splitterModel = ref<number>(18);
</script>
