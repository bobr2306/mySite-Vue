import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/Photos.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/Links.vue')
    }
  ]
})

export default router
