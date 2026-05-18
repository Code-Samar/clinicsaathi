import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView     from '../views/HomeView.vue'
import AboutView    from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView  from '../views/ContactView.vue'

const routes = [
  { path: '/',         name: 'home',     component: HomeView },
  { path: '/about',    name: 'about',    component: AboutView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/contact',  name: 'contact',  component: ContactView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0, behavior: 'smooth' } },
})

export default router
