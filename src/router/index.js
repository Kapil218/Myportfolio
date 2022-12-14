import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Connect from '../views/connect.vue'
import Projects from '../views/projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/project',
    name: 'project',
    component:Projects
  },
  {
    path: '/connect',
    name: 'connect',
    component:Connect
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
