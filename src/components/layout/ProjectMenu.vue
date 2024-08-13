<template>
  <q-splitter v-model="splitterModel" unit="px" class="h-screen" disable>
    <template v-slot:before>
      <q-tabs v-model="tab" vertical no-caps>
        <q-tab
          :name="item.id"
          :icon="item.icon"
          :label="item.name"
          :class="{ 'text-primary': tab === item.id }"
          v-for="item in menuList"
          :key="item.id"
          :to="item.path"
          @click="jumpPage(item.path)"
        />
      </q-tabs>
      <div class="absolute bottom-3 left-0 right-0 flex justify-center">
        <q-btn color="primary" icon="exit_to_app" round to="/project" />
      </div>
    </template>

    <template v-slot:after>
      <slot></slot>
    </template>
  </q-splitter>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const tab = ref<number>(1);
const splitterModel = ref<number>(80);
const router = useRouter();
const menuList = reactive([
  { id: 1, name: '书籍', path: '/project/documentInfo', icon: 'menu_book' },
  { id: 2, name: '思维', path: '/project/mindList', icon: 'psychology' },
  { id: 3, name: '表格', path: '/project/tableList', icon: 'table_view' },
  { id: 4, name: '关系', path: '/project/relationshipInfo', icon: 'groups' },
  { id: 5, name: '事件', path: '/project/eventInfo', icon: 'calendar_month' },
  { id: 6, name: '地图', path: '/project/mapInfo', icon: 'map' },
]);

// 跳转页面
function jumpPage(path: string) {
  router.push(path);
}
</script>

<style lang="scss" scoped></style>
