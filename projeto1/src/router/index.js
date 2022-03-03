import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../views/Login'
import Agenda from '../views/Agenda'
import Home from '../views/Home'
import Cadastro from '../views/Cadastro.vue'



const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: (to, from, next) => {
    //   return false
    // }
   
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/Agenda',
    name: 'Agenda',
    component: Agenda,
   
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