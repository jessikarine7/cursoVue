import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../views/Login'
import Acesso from '../views/Acesso'
import Home from '../views/Home'
import Cadastro from '../views/Cadastro.vue'



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
   
  },

  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro,
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes

  
})

export default router