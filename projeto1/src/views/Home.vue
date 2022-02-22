<template>

  <div class="container">
    <!-- <img class="fundo" src="@/img/fundo.jpg"> -->
    <div class="container2">
      <div class="texto">
        
        <h1 class="agenda">Agenda</h1>
        <!-- <p class="contato">De Contatos</p> -->

        <div class="explicacao">
          <p class="paragrafo">Sistema de Gerenciamento de Contatos</p>

          <router-link to="/Login">
            <button class="button">Login</button>
          </router-link>
          <router-link to="/Cadastro">
            <p>Não possui cadastro?</p>
          </router-link>

        </div>
      </div>

    </div>

    <img class="capa" src="@/img/capa2.png" alt="">
<div class="fundo"></div>
  </div>
</template>


<script>
export default {

  name: 'Home',

}
</script>


<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

  /* .fundo {
    z-index:0 ;
    position: absolute;
    width: 80%;
    background: #c7f0f6;
  } */

  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-self: center; */
    align-items: center;
    gap: 20px;

  } 

  .capa {
    z-index: 9999;
    width: 50%;
  }

  .container2{
    background: #EEF3F3;
    width: 90vh;
    height: 80vh;
    
  }

  .texto{
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin-top: 4%;
    gap: 20px;
    position: absolute;
    background: #EEF3F3;
  }

  .explicacao{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align-self: center; */
    align-content: flex-end;
    width: 90vh;
    height: 50vh;
    background: #fff;
    /* background: #d0c9fb; */
    gap: 20px;
    
  }

  
  .agenda{
    color:#AFB3B3;
    font-size: 16VH;
    font-weight: 800;
    font-family: poppins;
    background: #EEF3F3;
  }

  .paragrafo{
    margin-top: 15px;
    font-size: 32px;
    color:#907ef8;
    font-family: poppins;
    font-weight: 300;
    background: #fff;
  }

  .button{
    color: #907ef8;
    background: #fff;
    border-color: #907ef8;
    border-style: double;
    border-radius: 20px;
    font-size: 20px;
    width: 25vh;
    height: 40px;
    font-family: "poppins";
    margin-top: 30px;
  }

  .button:hover{
    background: #907ef8;
    color: #fff;
  }
</style>

