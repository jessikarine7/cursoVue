<template>

  <div id="app">
    <Menu />
    <router-view></router-view>

  </div>

</template>



<script>

import Menu from './views/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }

}

</script>

<style>

  body{
    margin: 0;
    padding: 0;
    background-image: url("img/fundo4.jpg");
    background-repeat: no-repeat; 
    background-size: 100%;
  }

</style>

