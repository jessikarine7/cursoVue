<template>

  <div class="container-login1">

    <div class="container-login">
      
      <img class="imagem" src="@/img/Cadastro.jpg" alt="l">

      <form @submit.prevent="createdPost" class="informações">
        <h1 class="titulo1">Cadastro</h1>

        <span class="acesso">Nome </span>

        <input class="input" type="text" 
        placeholder="Digite seu nome" 
        id="nome"
        v-model="FormData.nome">

        <span class="acesso">Data de Nascimento</span>

        <input class="input" type="date" 
        placeholder="Digite sua data de nascimento" 
        id="data"
        v-model="FormData.data">

        <span class="acesso">Email </span>

        <input class="input" type="text" 
        placeholder="Digite seu email" 
        id="email"
        v-model="FormData.email">

        <span class="acesso">Senha </span>

        <input class="input" type="password" 
        placeholder="Crie sua senha" 
        id="password"
        v-model="FormData.password">

        <button type="submit" class="botao">Cadastrar</button> 

      </form>

    </div>
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
          this.$router.push('/Login')
        })
    }
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

.titulo1{
  font-family: poppins;
  font-weight: 800;
  color: #5744F5;
  font-size: 33px;
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

/* input::placeholder{
  color: #5644f548;
} */

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

@media (max-width: 1200px) {
  
  .container-login{
    width: 95vh;
  }

  .informações{
    width: 35vh;
  }

}

@media (max-width: 1100px) {
  
  .container-login{
    width: 90vh;
    /* height: 75vh; */
  }

  .imagem{
    width: 40vh;
  }

  .titulo1{
    font-size: 27px;
  }

}

@media (max-width: 900px) {
  
  .container-login{
    width: 85vh;
    /* height: 70vh; */
  }

  .informações{
    width: 30vh;
  }

  .titulo1{
    font-size: 27px;
  }

  .imagem{ 
    width: 40vh;
  }

}

@media (max-width: 800px) {
  
  .container-login{
    width: 80vh;
    /* height: 60vh; */
  }

  .informações{
    width: 30vh;
    gap: 7px;
  }

  .imagem{ 
    width: 35vh;
  }

  .titulo1{
    font-size: 25px;
  }

}

@media (max-width: 700px) {

  .imagem{
    width: 30vh;
  }

  .container-login{
    width: 65vh;
    /* height: 60vh; */
  }

  .informações{
    width: 28vh;
    gap: 7px;
  }

  .acesso{
    font-size: 13px;
  }

  .cadastro{
    font-size: 10px;
  }

  .titulo1{
    font-size: 25px;
  }
}

@media (max-width: 600px) {

  .imagem{
    display: none;
  }

  .container-login{
    width: 40vh;
    /* height: 50vh; */
  }

  .informações{
    margin-top: 25px;
    width: 25vh;
    
  }
}

</style>