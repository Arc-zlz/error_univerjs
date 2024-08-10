<template>
  <div class="main-layout">
    <q-layout
      view="lHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated>
        <q-toolbar class="bg-white text-black shadow-none">
          <q-toolbar-title>
            <div style="display: flex; align-items: center">
              <!-- <div>{{ $t(changeMenuItem.label) }}</div> -->
              <div class="q-mx-sm">
                <Breadcrumbs />
              </div>
            </div>
          </q-toolbar-title>
          <LangSelect />
          <q-avatar
            size="30px"
            class="q-mb-sm"
            v-morph:MinHeader:boxes:500="menuFold"
          >
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="menuFold === 'MaxHeader' ? 180 : 60"
        :breakpoint="400"
      >
        <MenuList />
        <div class="tagger-btn">
          <q-btn
            size=".7rem"
            color="primary"
            @click="morphHeaderFunc()"
            :icon="
              menuFold === 'MaxHeader'
                ? 'keyboard_double_arrow_left'
                : 'keyboard_double_arrow_right'
            "
            round
          />
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LangSelect from 'components/layout/LangSelect.vue';
import Breadcrumbs from 'components/layout/MenuBreadcrumbs.vue';
import MenuList from 'components/layout/MenuList.vue';
import { useSysStore } from 'stores/systemctl';
import { storeToRefs } from 'pinia';

const sysStore = useSysStore();
const { menuFold } = storeToRefs(sysStore);
const drawer = ref<boolean>(false);

//  切换菜单
function morphHeaderFunc() {
  sysStore.setMenuFold();
}
</script>

<style lang="scss" scoped>
.main-layout {
  .tagger-btn {
    position: absolute;
    bottom: 50%;
    right: -0.85rem;
  }
}
</style>
