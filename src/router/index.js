import {
  createWebHistory,
  createWebHashHistory,
  createRouter
} from 'vue-router'
import Layout from '@/components/Layout/index.vue'

export const constantRoutes = [
  {
    path: `/`,
    component: Layout,
    redirect: `/tools`,
    hidden: true,
    children: [
      {
        path: `/home`,
        component: () => import('@/views/home/index.vue')
      },
      {
        path: `/games`,
        component: () => import('@/views/games/index.vue')
      },
      {
        path: `/tools`,
        component: () => import('@/views/tools/index.vue')
      },
      {
        path: `/notes`,
        component: () => import('@/views/notes/index.vue')
      },
      {
        path: `/relax`,
        component: () => import('@/views/relax/index.vue')
      }
    ]
  },
  {
    path: `/links`,
    name: 'linkes',
    component: () => import('@/views/links/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/tools',
    hidden: true
  }
]

const createRoute = () =>
  createRouter({
    history: createWebHashHistory(),
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
