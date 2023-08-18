import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MovieAdd from '@/components/MovieAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/add',
      name: 'add',
      component: MovieAdd
    }
  ]
})

export default router
