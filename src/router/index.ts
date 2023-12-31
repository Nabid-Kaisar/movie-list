import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MovieAdd from '@/components/MovieAdd.vue'
import MovieList from '@/components/MovieList.vue'
import About from '@/components/About.vue'
import MovieDetail from '@/components/MovieDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieList
    },
    {
      path: '/add',
      name: 'add',
      component: MovieAdd
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/detail/:seqId',
      name: 'detail',
      component: MovieDetail
    }
  ]
})

export default router
