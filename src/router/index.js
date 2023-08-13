import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
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

