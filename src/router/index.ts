import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';

import { AppMenu } from '@/views/app-menu';

const loadLazyView = (view: string) => {
  /* TODO: Set function output types */
  const component = import(/* webpackChunkName: "[request]" */ `@/views/${view}/component.vue`);
  type ModuleType = typeof component;
  return (): Promise<ModuleType> => component;
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App-menu',
    component: AppMenu
  },
  {
    path: '/game',
    name: 'Game-area',
    component: loadLazyView('game-area')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
