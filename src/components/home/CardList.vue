<template>
  <div class="flex p-[10px] pr-0">
    <q-card
      style="width: calc(20% - 16px)"
      class="m-[8px] min-w-[13rem]"
      v-for="item in 100"
      :key="item"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>

      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-card-actions class="flex justify-end">
        <q-btn size="sm">详情</q-btn>
        <q-btn type="success" size="sm">去写作</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
