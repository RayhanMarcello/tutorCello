import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/kelas',
      name: 'classes',
      component: () => import('../pages/ClassesView.vue')
    },
    {
      path: '/kelas/:id',
      name: 'class-detail',
      component: () => import('../pages/ClassDetailView.vue')
    },
    {
      path: '/harga',
      name: 'pricing',
      component: () => import('../pages/PricingView.vue')
    },
    {
      path: '/tentang',
      name: 'about',
      component: () => import('../pages/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
