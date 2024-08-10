import { defineStore } from 'pinia';
import { RouteLocationMatched } from 'vue-router';

export const useSysStore = defineStore('sys', {
  state: () => ({
    menuFold: 'MaxHeader',
    breadcrumbsList: <RouteLocationMatched[]>[],
  }),
  getters: {},
  actions: {
    setMenuFold() {
      this.menuFold = this.menuFold === 'MaxHeader' ? 'MinHeader' : 'MaxHeader';
    },
  },
  persist: {
    storage: localStorage,
    paths: ['menuFold', 'breadcrumbsList'],
  },
});
