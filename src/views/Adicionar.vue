<template>

  <div class="container-login1">

    <div class="container-login">
      
      <img src="@/img/Cadastro.jpg" alt="l">

      <form @submit.prevent="postContatos" class="informações">
        <h1 class="titulo">Adicionar Contatos</h1>

        <span class="acesso">Nome</span>

        <input class="input" type="text" 
        placeholder="Digite o nome" 
        id="nome"
        v-model="FormContatos.nome">

        <span class="acesso">Telefone</span>

        <input class="input" type="tel" 
        placeholder="Digite o numero" 
        id="telefone"
        v-model="FormContatos.telefone">

        <button type="submit" class="botao">Adicionar</button> 

      </form>

    </div>
  </div>

</template>

<script>

import axios from 'axios'

export default {

  name: 'postContatos',

  data() {

    return{

      FormContatos: {
        nome: '',
        telefone: '',
      }
    }
  },
  props: ['id'],

  methods: {
    postContatos() {
      axios
        .post(`http://localhost:3000/usuarios/${this.id}/contatos`, this.FormContatos)
        .then((response) => {
          console.log(response.data);
          
          this.$router.push(`/Agenda/${this.id}`)
        })
        .catch((error) => {
          console.log(error)
        })
    },




  }
}
</script>


<style scoped>

.container-login1{
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 4%;
  /* justify-content: center; */

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
  font-size: 28px;
  margin: 3px;
}

.informações{
  display: flex;
  flex-direction: column;
  width: 40vh;
  gap: 10px
}

.acesso{
  font-family: poppins;
  font-weight: 300;
  color: #AFB3B3;
  font-size: 15px;
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
  margin-top: 20px;
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