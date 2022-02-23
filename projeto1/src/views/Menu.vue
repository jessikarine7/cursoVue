<template>

  <div> 
      <!-- <p class="logo">Metaway</p> -->
    <nav class="menu">
      <router-link to="/">
        <img class="img" src="@/img/home.png" alt="Home">
      </router-link>

      <router-link to="/Login">
        <img class="img" src="@/img/login.png" alt="Login">
      </router-link>

      <router-link to="/Acesso">
        <img class="img" src="@/img/agenda.png" alt="Agenda">
      </router-link>
    </nav>
  </div>

</template>


<script>


</script>


<style  lang="scss">

.img{
  width: 30px;
  padding: 10px;
}

.menu{
  display: flex;
  justify-content: center;
  align-content: center;
  // width: 100vh;
  gap: 20px;
  
}
 

</style>

