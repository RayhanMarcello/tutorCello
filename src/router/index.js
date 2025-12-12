import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue')
    },
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
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../pages/AboutMeView.vue')
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

// Navigation guard untuk authentication
router.beforeEach((to, from, next) => {
  const userData = localStorage.getItem('userData')
  const isAuthenticated = !!userData

  // Jika user mencoba akses halaman selain login dan belum login
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login')
  } 
  // Jika user sudah login dan mencoba akses halaman login
  else if (to.path === '/login' && isAuthenticated) {
    next('/')
  } 
  // Lanjutkan ke halaman yang diminta
  else {
    next()
  }
})

export default router
