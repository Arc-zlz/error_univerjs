<template>
  <q-splitter v-model="splitterModel" unit="px" class="h-screen">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical no-caps>
        <q-tab
          :name="item.id"
          :icon="item.icon"
          :label="item.name"
          :class="{ 'text-primary': tab === item.id }"
          v-for="item in menuList"
          :key="item.id"
        />
      </q-tabs>
      <div class="absolute bottom-3 left-0 right-0 flex justify-center">
        <q-btn color="primary" icon="exit_to_app" round to="/document" />
      </div>
    </template>

    <template v-slot:after>
      <slot></slot>
    </template>
  </q-splitter>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const tab = ref<number>(1);
const splitterModel = ref<number>(80);
const menuList = reactive([
  { id: 1, name: '书籍', icon: 'menu_book' },
  { id: 2, name: '思维', icon: 'psychology' },
  { id: 3, name: '表格', icon: 'table_view' },
  { id: 4, name: '关系', icon: 'groups' },
  { id: 5, name: '事件', icon: 'calendar_month' },
]);
</script>

<style lang="scss" scoped></style>
