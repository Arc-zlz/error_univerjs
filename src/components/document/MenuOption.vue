<template>
  <div>
    <div
      class="w-[25rem] bg-fff w-min-[300px]"
      v-morph:Max:boxes:200.resize="menuStatus"
    >
      <div class="p-2 flex justify-between">
        <div>这是标题</div>
        <div>
          <q-icon
            name="close"
            class="hover:text-cyan-400 cursor-pointer"
            @click.stop="changeMenuStatus()"
          />
        </div>
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
import { ref } from 'vue';

const menuStatus = ref<'Min' | 'Max'>('Max');

function changeMenuStatus() {
  menuStatus.value = menuStatus.value === 'Max' ? 'Min' : 'Max';
}
</script>

<style lang="scss" scoped></style>
