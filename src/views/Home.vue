<template>

  <div class="container">
    
      <div class="foto">
        <img class="capa" src="@/img/capa4.png" alt="">
      </div>
    <div class="texto">
        <h1 class="agenda">Sistema de Gerenciamento</h1>
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

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

  .container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4%;
    margin-left: 6%;
    gap: 30px;
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
    flex-direction: column;
    align-items: center;
    align-self: center;
    /* gap: 2px; */
    margin-top: 10%;
  }

  
  .agenda{
    color:#5744F5;
    font-size: 50px;
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
    width: 28vh;
    height: 40px;
    font-family: "poppins";

  }

  .button:hover{
    background: #5744F5;
    color: #fff;
    border-color: #5744F5;
  }

  .cadastro{
    color: #AFB3B3;
    font-family: poppins;
    font-size: 15px;
    font-weight: 100;
    text-decoration: none;
  }

  .cadastro:hover {
    color:  #5744F5;

  }

  .capa{
    width: 65vh;
  }

  .foto{
    display: flex;
    flex-direction: row-reverse;
    align-items:center;
    gap: 80px;
  }

  @media (max-width: 1200px) {
    
    .agenda{
      font-size: 40px;
    }
    
    .paragrafo{
      font-size: 30px;
    }

  }

  @media (max-width: 1000px) {
    
    .agenda{
      font-size: 35px;
    }
    
    .paragrafo{
      font-size: 22px;
    }

    .button{
      width: 20vh;
      font-size: 15px;
    }

    .cadastro{
      font-size: 10px;
    }

    .acesso{
      align-self: flex-start;
    }

    .capa{
      width: 50vh;
    }

  }

  @media (max-width: 850px) {

    .agenda{
      font-size: 30px;
    }
    
    .paragrafo{
      font-size: 20px;
    }
    
    .capa{
      width: 35vh;
    }
    
    .button{
      width: 17vh;
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {

    .agenda{
      font-size: 25px;
    }
    
    .paragrafo{
      font-size: 18px;
    }
    
    .capa{
      width: 25vh;
    }
    
    .button{
      width: 15vh;
      font-size: 14px;
    }
  }

  @media (max-width: 500px) {
    .capa{
      display: none;
    }
    
  }
  
</style>

