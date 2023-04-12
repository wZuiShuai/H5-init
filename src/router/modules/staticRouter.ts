import type { RouteRecordRaw } from 'vue-router'

/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
]

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound' },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/errorPage/404.vue'),
    meta: {
      title: '404页面',
    },
  },
]
