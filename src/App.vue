<template>
  <router-view />
</template>

<script setup lang="ts">

import { useQuasar } from 'quasar';


const $q = useQuasar()
const res = $q.lang.getLocale()
$q.lang.set(res)
console.log(res, $q.lang.isoName, 'sad')
</script>
