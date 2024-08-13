import { defineStore } from 'pinia';
import { RouteLocationMatched } from 'vue-router';

export const useSysStore = defineStore('sys', {
  state: () => ({
    menuFold: 'MinHeader',
    breadcrumbsList: <RouteLocationMatched[]>[],
    lang: 'zh-CN',
  }),
  getters: {},
  actions: {
    setMenuFold() {
      this.menuFold = this.menuFold === 'MaxHeader' ? 'MinHeader' : 'MaxHeader';
    },
    setLang(type: string) {
      this.lang = type;
    },
  },
  persist: {
    storage: localStorage,
    paths: ['menuFold', 'breadcrumbsList', 'lang'],
  },
});
