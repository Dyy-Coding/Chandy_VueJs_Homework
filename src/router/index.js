import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/page/Home.vue'
import About from '@/components/page/About.vue'
import Contact from '@/components/page/Contact.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', redirect: '/home' },        // Redirect root to /home
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/404', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: '/404' } // Catch-all to 404
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
