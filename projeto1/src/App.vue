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


  *{
    margin: 0;
    padding: 0;
    background:#fff;
  }

</style>

