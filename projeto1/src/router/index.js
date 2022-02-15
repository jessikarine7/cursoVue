import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../views/Login'
import Acesso from '../views/Acesso'



const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Acesso',
    name: 'Acesso',
    component: Acesso
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router