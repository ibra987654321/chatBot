import Vue from 'vue'
import VueRouter from 'vue-router'
import chat from '../components/ChatBox'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chat',
    name: 'home',
    component: chat
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
