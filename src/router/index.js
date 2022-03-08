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
    path: '/Login/:id',
    name: 'Login',
    component: Login,
    props: true
  },

  {
    path: '/Agenda',
    name: 'Agenda',
    component: Agenda,
    beforeEnter: () => {
      const isLogged = localStorage.getItem('logado') === 'true'
      return isLogged
    }
  },

  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro,
   
  },

  {
    path: '/Adicionar',
    name: 'Adicionar',
    component: Adicionar,
  }

]

const user = {
  props: ['id'],
  template: '<div>user {{ id }}</div>'
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
  
})

const routes = [{ path: '/user/:id', component: user, props: true }]

export default router
