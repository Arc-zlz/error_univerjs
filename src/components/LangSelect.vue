<template>
  <q-select v-model="lang" :options="langOptions" dense borderless emit-value map-options options-dense />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue';

const { locale } = useI18n({ useScope: 'global' })


const langOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' }
]

const $q = useQuasar()
const lang = ref(locale)


onMounted(() => {
  lang.value = $q.lang.getLocale()
})
</script>
