import AuthLayout from '@/components/layouts/AuthLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import { authRoutes } from '@/views/auth/_config'
import NotFoundPage from '@/views/general/not_found_view/NotFoundPage.vue'
import { mainRoutes } from '@/views/main/_config'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      component: AuthLayout,
      children: authRoutes,
    },
    {
      path: '/main',
      component: MainLayout,
      children: mainRoutes,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    },
  ],
})

export default router
