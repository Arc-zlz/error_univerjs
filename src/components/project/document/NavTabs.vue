<template>
  <div class="sticky top-0 z-50 bg-white text-[#575d6c]">
    <q-tabs v-model="tab" no-caps inline-label dense :align="tabsAlign">
      <q-tab :name="item" v-for="item in 10" :key="item">
        <!-- 这个图标是文件夹和文件的图标 -->
        <q-icon name="description" size="1.25rem" />
        <div class="inline-block mx-1 text-[.95rem]">标题{{ item }}</div>
        <q-icon name="close" class="hover:text-cyan-400" />

        <q-menu
          touch-position
          context-menu
          fit
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list dense>
            <q-item clickable v-close-popup @click="handleAction('action1')">
              <q-item-section> 关闭当前 </q-item-section>
            </q-item>
            <q-item clickable @click="handleAction('action1')">
              <q-item-section>关闭其他标签</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list dense>
                  <q-item
                    clickable
                    v-close-popup
                    @click="handleAction('action2')"
                  >
                    <q-item-section>
                      <div>
                        <q-icon size="1.2rem" name="last_page" />
                        关闭左侧
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-popup
                    @click="handleAction('action2')"
                  >
                    <q-item-section>
                      <div>
                        <q-icon size="1.2rem" name="first_page" />
                        关闭右侧
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </q-tab>
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref<string | number>(1);
const tabsAlign = ref<'left' | 'center' | 'right' | 'justify' | undefined>(
  'left'
);

function handleAction(action: string) {
  console.log(`执行动作: ${action}`);
}
</script>

<style scoped></style>
