<template>

  <div class="container-login1">
    

    <div class="container-login">
      <img src="@/img/loginC.jpg" alt="l">

      <div>
      </div>

      <form class="informações">
        <h1 class="titulo">Acesso</h1>
        <span class="acesso">Login </span>

        <input class="input" type="text" 
        placeholder="Digite seu email" 
        size="26" maxlength="40"
        v-model="email">

        <span class="acesso">Senha </span>

        <input class="input" type="password" 
        placeholder="Digite sua senha" 
        maxlength="6" v-model="password">

        <router-link to="/acesso" >
          <button class="botao"> Entrar</button>
        </router-link>

        <router-link class="cadastro" to="/Cadastro">
          <p class="cadastro">Não possui cadastro?</p>
        </router-link>
      </form>

      
    </div>
  </div>


</template>


<script>

import axios from 'axios'

export default {

  data() {

    return{
      email: [],
      password: [],
      users: []
    }
  },

  beforeRouteLeave(to) {
    const email= this.email
    const senha= this.password

    const user1= this.users.some(u => u.email == email)
    const user2= this.users.some(u => u.password == senha)
    console.log(to);

    if (to.name === 'Home') {
      return true;
    }
    if (to.name === 'Cadastro') {
      return true;
    }
    return user1 && user2;
  },

  created() {

    const headers = { "Content-Type": "application/json" };
    axios
      .get('http://localhost:3000/usuarios', { headers })
      .then((response) => {
        console.log(response.data);
        this.users=response.data
      })
  }
}

</script>


<style lang="scss">

.container-login1{
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 4%;

  // justify-content: center;

}

.container-login{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:space-evenly;
  width: 110vh;
  height: 70vh;
  background-color: #fff;
  border-radius: 30px;

}

.titulo{
  font-family: poppins;
  font-weight: 800;
  color: #5744F5;
  font-size: 33px;
}

.informações{
  display: flex;
  flex-direction: column;
  width: 40vh;
  gap: 15px
}

.acesso{
  font-family: poppins;
  font-weight: 300;
  color: #AFB3B3;
  font-size: 20px;
  margin: 0;
}

.input{
  background: #5644f528;
  color: #5744F5;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  height: 35px;
}

input::placeholder{
  color: #5644f548;
}

.botao{
  margin-top: 10px;
  font-size: 15px;
  font-family: sans-serif;
  background: #5744F5;
  color: white;
  height: 30px;
  width: 50%;
  border-radius: 10px;
  border: none;
}

.botao:hover{
  opacity: 0.8;
}

.cadastro{
  
  color: #AFB3B3;
  font-family: poppins;
  font-size: 15px;
  font-weight: 100;
  text-decoration: none;
}

.cadastro:hover {
  font-family: poppins;
  font-weight: 400;
}

</style>