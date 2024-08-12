<template>
  <div>
    <div id="app"></div>
  </div>
</template>

<script setup lang="ts">
import { LocaleType, Univer, UniverInstanceType, Tools } from '@univerjs/core';
import { defaultTheme } from '@univerjs/design';
import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverUIPlugin } from '@univerjs/ui';

import DesignZhCN from '@univerjs/design/lib/locale/zh-CN.json';
import DocsUIZhCN from '@univerjs/docs-ui/lib/locale/zh-CN.json';
import UIZhCN from '@univerjs/ui/lib/locale/zh-CN.json';

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 *
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
// import { zhCN, enUS } from 'univer:locales'

// import { DEFAULT_DOCUMENT_DATA_CN } from './data.ts'

// univer
const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.ZH_CN,
  // locales: {
  //   [LocaleType.ZH_CN]: zhCN,
  //   [LocaleType.EN_US]: enUS,
  // },
  locales: {
    [LocaleType.ZH_CN]: Tools.deepMerge(DesignZhCN, DocsUIZhCN, UIZhCN),
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin, {
  container: 'univerdoc',
  layout: {
    docContainerConfig: {
      innerLeft: false,
    },
  },
});

univer.createUnit(UniverInstanceType.UNIVER_DOC, {});
</script>

<style scoped></style>
