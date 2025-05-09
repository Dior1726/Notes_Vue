import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../login_view/LoginPage.vue'),
  },
]
