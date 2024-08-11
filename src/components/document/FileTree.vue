<template>
  <div>
    <q-tree
      :nodes="simple"
      node-key="label"
      selected-color="primary"
      v-model:selected="selected"
      default-expand-all
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const selected = ref('Food');

const simple = reactive([
  {
    label: 'Relax Hotel',
    children: [
      {
        label: 'Food',
        icon: 'restaurant_menu',
      },
      {
        label: 'Room service',
        icon: 'room_service',
      },
      {
        label: 'Room view',
        icon: 'photo',
      },
    ],
  },
]);
</script>

<style scoped></style>
