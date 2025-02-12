import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '../views/MainApp.vue'
import NotFound from '../views/NotFound.vue'
import Privacy from '../views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainApp
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
     if (savedPosition) {
        return savedPosition;
     } else {
       return { top: 0, behavior: 'smooth' }
     }
  }
})

export default router
