<template>
  <div style="font-size: 14px">
    <!-- v-if="list.length > 1" -->
    <q-breadcrumbs>
      <q-breadcrumbs-el
        :label="$t('menu.' + <string>item.name)"
        :to="item.path"
        v-for="item in list"
        :key="item.name"
      />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSysStore } from 'src/stores/systemctl';
import { computed } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';

const sysStore = useSysStore();
const { breadcrumbsList } = storeToRefs(sysStore);
const route = useRoute();

const list = computed<RouteLocationMatched[]>(() => {
  return breadcrumbsList.value.length !== 0
    ? breadcrumbsList.value.slice(1)
    : route.matched.slice(1);
});
</script>

<!-- <style scoped lang="scss"></style> -->
