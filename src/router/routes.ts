import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'document',
        path: 'document',
        component: () => import('pages/DocumentPage.vue'),
      },
      {
        name: 'files',
        path: 'files',
        component: () => import('pages/FilesPage.vue'),
      },
      {
        name: 'aboutUs',
        path: 'aboutUs',
        component: () => import('pages/AboutUs.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
