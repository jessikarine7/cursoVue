<template>

  <div class="container"> 
      
    <nav class="menu">
      <router-link  class="nomeMenu" to="/">
        <h1 class="nomeMenu">Home</h1>
      </router-link>

      <router-link class="nomeMenu" to="/Login">
        <h1 class="nomeMenu">Login</h1>
      </router-link>

      <router-link class="nomeMenu" to="/Cadastro"> 
        <h1 class="nomeMenu">Cadastro</h1>
      </router-link>

      <h1 @click="agenda" class="nomeMenu" id='agenda'>Agenda</h1>

      <div class="deslogar">
        <h1 class="nomeMenu" @click="handleClick" id="sair">sair</h1> 

      </div>
    
      <div>
        <b-dropdown id="dropdown-offset" offset="25" text="Offset Dropdown" class="m-2">
          <b-dropdown-item href="#">Home</b-dropdown-item>
          <b-dropdown-item href="#">Login</b-dropdown-item>
          <b-dropdown-item href="#">Cadastro</b-dropdown-item>
          <b-dropdown-item href="#">Agenda</b-dropdown-item>
          <b-dropdown-item href="#">sair</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>

  </div>

</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  methods: {
    agenda() {
     const getUser = localStorage.getItem('userId')
      this.$router.push(`/Agenda/${getUser}`)
    },

    handleClick(){
      localStorage.setItem('logado', false)
      this.$router.push("/")
    }
  }
}
</script>

<style  lang="scss">
.nomeMenu{
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
  // position: absolute;
}

.menu{
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
}

.nomeMenu:hover{
  color:  #5744F5;
}

.deslogar {
  margin-top: 14px;
  cursor: pointer;
}

#agenda{
  margin-top: 10px;
  cursor: pointer;
}

#sair{
  font-size: 20px;
}
</style>
