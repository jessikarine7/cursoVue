<template>

  <div> 
      <!-- <p class="logo">Metaway</p> -->
    <nav class="menu">
      <router-link  class="img" to="/">
        <h1 class="img">Home</h1>
      </router-link>

      <router-link class="img" to="/Login">
        <h1 class="img">Login</h1>
      </router-link>

      <router-link class="img" to="/Cadastro"> 
        <h1 class="img">Cadastro</h1>
      </router-link>

      <router-link class="img" to="/Agenda"> 
        <h1 class="img">Agenda</h1>
      </router-link>

    
    </nav>
  </div>

</template>

<script>


</script>


<style  lang="scss">

.img{
  display: flex;
  justify-content: center;
  width: 60px;
  padding: 10px;
  font-family: poppins;
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  color: #AFB3B3;
  margin: 0;
}

.menu{
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
  
}

.img:hover{
  color:  #5744F5;
}


</style>

