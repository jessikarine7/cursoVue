import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../views/Login'
import Agenda from '../views/Agenda'
import Home from '../views/Home'
import Cadastro from '../views/Cadastro.vue'
import Adicionar from '../views/Adicionar.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,   
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login,
    props: true
  },

  {
    path: '/Agenda/:id',
    name: 'Agenda',
    component: Agenda,
    beforeEnter: () => {
      
      const isLogged = localStorage.getItem('logado') === 'true'
      return isLogged
    },
    props: true
  },

  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro,
   
  },

  {
    path: '/Adicionar/:id',
    name: 'Adicionar',
    component: Adicionar,
    props: true
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  
})


export default router
