<template>
  <div class="q-mx-sm cursor-pointer">
    <q-icon name="event" size="1.3rem" @click="fullscreenFunc" />
  </div>

  <q-select
    placeholder="请选择语言"
    v-model="lang"
    :options="langOptions"
    color="teal"
    dense
    borderless
    emit-value
    map-options
    options-dense
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { ref, onMounted, WritableComputedRef } from 'vue';

const { locale } = useI18n({ useScope: 'global' });

const langOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' },
];

const $q = useQuasar();
const lang = ref<WritableComputedRef<string>>(locale);

function fullscreenFunc() {
  $q.fullscreen
    .request()
    .then(() => {
      // success!
    })
    .catch((err) => {
      // oh, no!!!
      console.log(err, '全屏错误');
    });
}

onMounted(() => {
  lang.value = $q.lang.isoName;
});
</script>
