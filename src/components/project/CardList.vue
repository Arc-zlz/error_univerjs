<template>
  <div class="flex p-[10px] pr-0">
    <q-card
      style="width: calc(20% - 16px)"
      class="m-[8px] min-w-[13rem]"
      v-for="item in 100"
      :key="item"
    >
      <q-item>
        <q-item-section>
          <q-item-label>Ti__tle</q-item-label>
          <q-item-label caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>

      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-card-actions>
        <div class="w-full">
          <div class="text-[.8rem]">
            更新时间：<span class="text-[#999]">2012-12-12 23:31:22</span>
          </div>
          <!-- 联网功能 -->
          <!-- <div class="mx-3 mt-2">
            <q-avatar v-for="n in 5" :key="n" size="30px" class="overlapping" :style="`left: ${-n * 10}px`">
              <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
            </q-avatar>
          </div> -->
          <div class="flex justify-end mt-2">
            <q-btn size="sm" color="primary" icon="info" class="mr-2">
              <span class="ml-[6px] inline-block">{{ $t('home.info') }}</span>
            </q-btn>
            <q-btn
              color="secondary"
              icon="edit"
              size="sm"
              :to="'/project/documentInfo/'"
            >
              <span class="ml-[6px] inline-block"
                >{{ $t('home.goWriting') }}
              </span>
            </q-btn>
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
