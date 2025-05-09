import type { RouteRecordRaw } from 'vue-router'

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'HomePage',
    component: () => import('../home_view/HomePage.vue'),
  },
  {
    path: 'profile',
    name: 'ProfilePage',
    component: () => import('../profile_view/ProfilePage.vue'),
  },
  {
    path: 'products',
    name: 'ProductsPage',
    component: () => import('../products_view/ProductsPage.vue'),
  },
  {
    path: 'todos',
    name: 'TodosPage',
    component: () => import('../todos_view/TodosPage.vue'),
  },
]
