import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import BookmarkView from "../views/BookmarkView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/detail/:name',
      name: 'detail',
      component: DetailView,
      props: true
    }, 

    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookmarkView,
    }
    
  ]
})

export default router
