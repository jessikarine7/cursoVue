<template>

  <div id="app">

    <Login />
    <Acesso />
    
  </div>

</template>


<script>

import Login from './components/Login.vue';
import Acesso from './components/Acesso.vue';

export default {
  name: 'App',
  components: {
    Login,
    Acesso
  }

}

</script>


