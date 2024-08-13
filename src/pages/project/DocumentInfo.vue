<template>
  <q-splitter v-model="splitterModel" unit="px" :limits="[0, 300]">
    <template v-slot:before>
      <div class="px-2">
        <FileTree />
      </div>
    </template>

    <template v-slot:separator>
      <q-avatar
        color="primary"
        :class="{ 'element-btn': splitterModel <= 10 }"
        text-color="white"
        :size="splitterModel <= 10 ? '30px' : '20px'"
        icon="drag_indicator"
        @click="splitterModel = 250"
      />
    </template>

    <template v-slot:after>
      <NavTabs />
      <div
        class="flex text-xs text-[#575d6c]"
        style="height: calc(100% - 36px)"
      >
        <CanvasEditor class="flex-1" />
        <MenuOption title="工具栏">
          <template #tool>
            <q-btn
              size="sm"
              flat
              round
              :icon="item.icon"
              v-for="item in toolList"
              :key="item.id"
              :color="changeInfo.id === item.id ? 'primary' : undefined"
              @click="changeInfo = item"
            >
            </q-btn>
          </template>
          <template #content>
            <div>
              <CommentDoc v-if="changeInfo.id === 1" />
              <DocVersion v-if="changeInfo.id === 2" />
              <AiAssistant v-if="changeInfo.id === 3" />
              <SetDoc v-if="changeInfo.id === 4" />
            </div>
          </template>
        </MenuOption>
      </div>
    </template>
  </q-splitter>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import MenuOption from 'components/project/MenuOption.vue';
import CanvasEditor from 'components/public/editor/CanvasEditor.vue';

import FileTree from 'components/project/document/FileTree.vue';
import NavTabs from 'components/project/document/NavTabs.vue';
import CommentDoc from 'components/project/document/CommentDoc.vue';
import AiAssistant from 'components/project/document/AiAssistant.vue';
import DocVersion from 'components/project/document/DocVersion.vue';
import SetDoc from 'components/project/document/SetDoc.vue';

const splitterModel = ref<number>(250);

const toolList = reactive([
  { id: 1, name: '评论/批注', icon: 'speaker_notes' },
  { id: 2, name: '版本管理', icon: 'account_tree' },
  { id: 3, name: 'AI助手', icon: 'face_retouching_natural' },
  { id: 4, name: '文档设置', icon: 'settings' },
]);
const changeInfo = ref(toolList[0]);
</script>

<style lang="scss" scoped>
/* 定义动画关键帧 */
@keyframes upDownAnimation {
  0%,
  100% {
    transform: translateY(0);
    /* 开始和结束位置不变 */
  }

  50% {
    transform: translateY(6px);
    /* 中间位置向下移动6像素 */
  }
}

/* 应用动画 */
.element-btn {
  left: -4px;
  cursor: pointer;
  animation: upDownAnimation 2s ease-in-out infinite;
  /* 动画名称、持续时间、缓动函数、循环次数 */
}
</style>
