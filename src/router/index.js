import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/wall?id=0',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/HyyIndex.vue'),
    children: [
      {
        path: '/wall',
        component: () => import(/* webpackChunkName: "home" */ '@/views/WallMessage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
