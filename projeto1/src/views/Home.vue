<template>

  <div class="container">
    
    <div class="texto">
      
      <h1 class="agenda">Sistema de gerenciamento</h1>
      <p class="paragrafo">DE CONTATOS</p>

      <div class="acesso">

        <router-link to="/Login">
          <button class="button">Login</button>
        </router-link>

        <router-link class="cadastro" to="/Cadastro">
          <p class="cadastro">Não possui cadastro?</p>
        </router-link>
      </div>
  
    </div>
  </div>
</template>


<script>
export default {

  name: 'Home',

}
</script>


<style scoped>
/* 
  @font-face {
    font-family: poppins-l;
    src: url('../assets/fonts/Poppins/Poppins-Italic.ttf');
  }

  .text {
    font-family: poppins-l;
  } */

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

  .container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 11%;
    margin-left: 5%;
  } 

  .texto{
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    align-content: center;
  }

  .acesso{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    gap: 15px;
  }

  
  .agenda{
    color:#5744F5;
    font-size: 60px;
    font-weight: 800;
    font-family: poppins;
    margin: 0;
  }

  .paragrafo{
    font-size: 40px;
    color:#5744F5;
    font-family: poppins;
    font-weight: 100;
    margin: 0;
  }

  .button{
    color: #AFB3B3;
    border-color: #AFB3B3;
    border-style: double;
    border-radius: 20px;
    font-size: 20px;
    width: 25vh;
    height: 40px;
    font-family: "poppins";
    margin-top: 30%;
  }

  .button:hover{
    background: #5744F5;
    color: #fff;
    border-color: #5744F5;
  }

  .cadastro{
    margin-top: 12%;
    color: #AFB3B3;
    font-family: poppins;
    font-size: 15px;
    font-weight: 100;
    text-decoration: none;
  }

</style>

