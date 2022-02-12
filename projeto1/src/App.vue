<template>

  <div id="app">

    <Login />
    <Acesso />
    <!-- <User /> -->
    
  </div>

</template>


<script>

import Login from './views/Login.vue'
import Acesso from './views/Acesso.vue'
// import  *as User from './components/User'

export default {
  name: 'App',
  components: {
    Login,
    Acesso,
    // User
  }

}

</script>


