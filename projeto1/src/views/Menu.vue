<template>

  <div> 
    <nav>
      <p class="logo">Metaway</p>

      <router-link to="/">
        <img src="@/img/home.png" alt="Home">
      </router-link>

      <router-link to="/Login">
        <img src="@/img/login.png" alt="Login">
      </router-link>

      <router-link to="/Acesso">
        <img src="@/img/agenda.png" alt="Agenda">
      </router-link>
    </nav>
  </div>

</template>


<script>


</script>


<style  lang="scss">

.logo{
  font-family: sans-serif;
  font-size: 12px;
  color:#fff
}

img{
  width: 40px;
  padding: 10px;
}

nav{
  background: #b5eaf2;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 20px;
}
 

</style>

