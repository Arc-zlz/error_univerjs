<template>
  <div class="q-mx-sm cursor-pointer">
    <q-icon name="event" size="1.3rem" @click="fullscreenFunc" v-if="!isFull" />
    <q-icon name="event" size="1.3rem" @click="fullscreenFunc" v-else />
  </div>

  <q-select
    placeholder="请选择语言"
    v-model="langRef"
    :options="langOptions"
    color="teal"
    dense
    borderless
    emit-value
    map-options
    options-dense
    @update:model-value="changeLang"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { ref, onMounted, WritableComputedRef } from 'vue';
// import { storeToRefs } from 'pinia';
import { useSysStore } from 'src/stores/systemctl';
import { storeToRefs } from 'pinia';

const { locale } = useI18n({ useScope: 'global' });
const isFull = ref<boolean>(false);

const langOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' },
];

const sysStore = useSysStore();
const { lang } = storeToRefs(sysStore);
const $q = useQuasar();
const langRef = ref<WritableComputedRef<string>>(locale);

function fullscreenFunc() {
  if (isFull.value) {
    $q.fullscreen.exit();
  } else {
    $q.fullscreen.request();
  }
  isFull.value = !isFull.value;
}

function changeLang(type: string) {
  sysStore.setLang(type);
}

onMounted(() => {
  langRef.value = lang.value;
});
</script>
