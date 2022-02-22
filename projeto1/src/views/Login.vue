<template>

  <div class="container-login">

    <div>
      <!-- <img src="https://lencois.mentor.metaway.com.br/diario/assets/imgs/metaway.png" width="130px"> -->
      <h1 class="titulo">Acesso Metaway</h1>
    </div>

    <form class="informações">
      <span class="acesso">Login: </span>

      <input class="input" type="text" 
      placeholder="Digite seu email" 
      size="26" maxlength="40"
      v-model="email">

      <span class="acesso">Senha: </span>

      <input class="input" type="password" 
      placeholder="Digite sua senha" 
      maxlength="6" v-model="password">

      <router-link to="/acesso" >
        <button class="botao"> Entrar</button>
      </router-link>

      <router-link to="/Cadastro">
        <p>Não possui cadastro?</p>
      </router-link>
    </form>

    
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

.container-login{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.titulo{
  font-family: sans-serif;
  color: #c42311da;
  font-size: 33px;
}

.informações{
  display: flex;
  flex-direction: column;
  gap: 15px
}

.acesso{
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.671);
  font-size: 20px;
}

.input{
  background: rgba(0, 0, 0, 0.164);
  font-size: 15px;
  border: none;
  border-radius: 10px;
  height: 35px;
}

.botao{
  margin-top: 10px;
  font-size: 15px;
  font-family: sans-serif;
  background: #c42311da;
  color: white;
  height: 30px;
  width: 50%;
  border-radius: 10px;
  border: none;
}

.botao:hover{
  opacity: 0.8;
}

</style>