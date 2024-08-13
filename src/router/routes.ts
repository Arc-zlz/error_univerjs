import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/HomePage.vue'),
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
  {
    path: '/info',
    component: () => import('src/layouts/DocumentLayout.vue'),
    children: [
      {
        name: 'documentInfo',
        path: 'document/:id',
        component: () => import('src/pages/document/DocumentInfo.vue'),
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
