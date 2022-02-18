import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../views/Login'
import Acesso from '../views/Acesso'
import Home from '../views/Home'




const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/Acesso',
    name: 'Acesso',
    component: Acesso,
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes

  
})

export default router