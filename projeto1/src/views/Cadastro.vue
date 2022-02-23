<template>
  <div>
    
    <form @submit.prevent="createdPost" class="informações">
       <h1>Cadastro</h1>

      <span class="acesso">Digite seu Nome </span>

      <input class="input" type="text" 
      placeholder="Digite seu nome" 
      id="nome"
      v-model="FormData.nome">

      <span class="acesso">Digite sua data de Nascimento</span>

      <input class="input" type="date" 
      placeholder="Digite sua data de nascimento" 
      id="data"
      v-model="FormData.data">

      <span class="acesso">Digite seu Email </span>

      <input class="input" type="text" 
      placeholder="Digite seu email" 
      id="email"
      v-model="FormData.email">

      <span class="acesso">Crie uma Senha </span>

      <input class="input" type="password" 
      placeholder="Digite sua senha" 
      id="password"
      v-model="FormData.password">

      <router-link to="/Login">
        <button class="botao">Cadastrar</button> 
      </router-link>

    </form>

  </div>
</template>


<script>

import axios from 'axios'

export default {

  name: 'createdPost',

  data() {

    return{

      FormData: {
        nome: '',
        data: '',
        email: '',
        password: '',

      }
    }
  },

  methods: {
    createdPost() {

      axios
        .post('http://localhost:3000/usuarios', this.FormData)
        .then((response) => {
          console.log(response.data);

        })
    }

  }
}
</script>


<style scoped>

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