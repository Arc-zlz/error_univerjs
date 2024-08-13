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
        name: 'project',
        path: 'project',
        component: () => import('pages/ProjectPage.vue'),
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
      {
        name: 'plug',
        path: 'plug',
        component: () => import('pages/PlugPage.vue'),
      },
    ],
  },
  {
    path: '/project',
    component: () => import('src/layouts/ProjectLayout.vue'),
    children: [
      {
        name: 'documentInfo',
        path: 'documentInfo',
        component: () => import('src/pages/project/DocumentInfo.vue'),
      },
      {
        name: 'eventInfo',
        path: 'eventInfo',
        component: () => import('src/pages/project/EventInfo.vue'),
      },
      {
        name: 'mapInfo',
        path: 'mapInfo',
        component: () => import('src/pages/project/MapInfo.vue'),
      },
      {
        name: 'mindList',
        path: 'mindList',
        component: () => import('src/pages/project/MindList.vue'),
      },
      {
        name: 'relationshipInfo',
        path: 'relationshipInfo',
        component: () => import('src/pages/project/RelationshipInfo.vue'),
      },
      {
        name: 'tableList',
        path: 'tableList',
        component: () => import('src/pages/project/TableList.vue'),
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
