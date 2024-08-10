<template>
  <q-scroll-area
    style="height: 100%; border-right: 1px solid #ddd; position: relative"
  >
    <q-list class="menu-list">
      <q-item style="padding: 0" v-morph:MaxHeader:boxes:500="menuFold">
        <q-img
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-item>
      <q-item
        clickable
        v-ripple
        v-for="item in menuList"
        :key="item.id"
        :active="item.id === changeMenuItem.id"
        :to="item.route"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section v-show="menuFold === 'MaxHeader'">
          {{ $t(item.label) }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useSysStore } from 'stores/systemctl';
import { storeToRefs } from 'pinia';

type menuItemType = {
  id: number;
  icon: string;
  label: string;
  route: string;
  name: string;
};

const sysStore = useSysStore();
const { menuFold } = storeToRefs(sysStore);
const route = useRoute();
const menuList = reactive<menuItemType[]>([
  {
    id: 1,
    icon: 'home',
    label: 'menu.home',
    route: '/',
    name: 'home',
  },
  {
    id: 2,
    icon: 'topic',
    label: 'menu.document',
    route: '/document',
    name: 'document',
  },
  {
    id: 3,
    icon: 'cloud_sync',
    label: 'menu.files',
    route: '/files',
    name: 'files',
  },
  {
    id: 4,
    icon: 'people_outline',
    label: 'menu.aboutUs',
    route: '/aboutUs',
    name: 'aboutUs',
  },
]);

const changeMenuItem = computed({
  get: () => menuList.find((item) => item.name === route.name) || menuList[0],
  set: () => {
    return;
  },
});
</script>

<style scoped></style>
