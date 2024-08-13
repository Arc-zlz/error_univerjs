<template>
  <div>
    <div
      class="w-[25rem] bg-fff w-min-[300px]"
      v-morph:Max:boxes:200.resize="menuStatus"
    >
      <div class="pl-2 pr-5 flex justify-between items-end">
        <div>
          <slot name="tool"></slot>
          <!-- 缩放 -->
          <q-btn
            class="text-xs text-[#575d6c]"
            size="sm"
            flat
            round
            icon="zoom_in_map"
            @click="changeMenuStatus()"
          >
          </q-btn>
        </div>
        <div class="text-lg">{{ title }}</div>
      </div>
      <q-separator class="mt-2" />
      <div class="p-2">
        <slot name="content"></slot>
      </div>
    </div>
    <div
      class="fixed right-5 bottom-[100px]"
      v-morph:Min:boxes:200.tween="menuStatus"
    >
      <q-btn
        color="primary"
        icon="menu_open"
        round
        @click.stop="changeMenuStatus()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';

defineProps({
  title: {
    type: String as PropType<string>,
    default: '工具栏',
  },
});

const menuStatus = ref<'Min' | 'Max'>('Max');

function changeMenuStatus() {
  menuStatus.value = menuStatus.value === 'Max' ? 'Min' : 'Max';
}
</script>

<style lang="scss" scoped></style>
