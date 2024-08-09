<template>
  <div>

    <q-select v-model="lang" :options="[]" dense borderless emit-value map-options options-dense />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, WritableComputedRef } from 'vue';

const { locale } = useI18n({ useScope: 'global' })

const $q = useQuasar()
const lang = ref<WritableComputedRef<string>>(locale)

onMounted(() => {

  lang.value = $q.lang.isoName
  console.log(lang.value)
})
</script>
