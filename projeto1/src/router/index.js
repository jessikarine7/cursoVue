import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../components/Login.vue'
import Acesso from '../components/Acesso.vue'



const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/acesso',
    name: 'Acesso',
    component: Acesso
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router