<template>

  <div class="container">

    <img src="https://lencois.mentor.metaway.com.br/diario/assets/imgs/metaway.png" width="130px">
    <h1 class="titulo">Acesso Metaway</h1>

    <form class="informações">
      <span class="acesso">Login: </span>
      <input class="input" type="text" placeholder="Digite seu email" size="26" maxlength="40">
      <span class="acesso">Senha: </span>
      <input class="input" type="password" placeholder="Digite sua senha" maxlength="6">
      <button class="botao">Entrar</button>

    </form>

  </div>

</template>



<script>

export default {
  name: 'Login',
}

// import Vue from 'vue';
// import axios from 'axios';


// new Vue({

//    el: '#app',

//   data () {
//     return {
//       email: []

//     }
//   },

//   mounted () {
//     axios
//       .get('user.json')
//       .then(response => (this.email = response.data))
//   }
// })

</script>


<style lang="scss">

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
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