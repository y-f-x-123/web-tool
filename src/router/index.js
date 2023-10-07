import {
  createWebHistory,
  createWebHashHistory,
  createRouter
} from 'vue-router'
import Layout from '@/components/Layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/web/tools',
    hidden: true,
    children: [
      {
        path: '/web/home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/web/games',
        component: () => import('@/views/games/index.vue')
      },
      {
        path: '/web/tools',
        component: () => import('@/views/tools/index.vue')
      },
      {
        path: '/web/notes',
        component: () => import('@/views/notes/index.vue')
      },
      {
        path: '/web/relax',
        component: () => import('@/views/relax/index.vue')
      }
    ]
  },
  {
    path: '/web/links',
    name: 'linkes',
    component: () => import('@/views/links/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/web/tools',
    hidden: true
  }
]

const createRoute = () =>
  createRouter({
    history: createWebHistory(),
    routes: constantRoutes
    // scrollBehavior(to, from, savedPosition) {
    //   if (savedPosition) {
    //     return savedPosition
    //   } else {
    //     return { top: 0 }
    //   }
    // }
  })

const router = createRoute()
export default router
