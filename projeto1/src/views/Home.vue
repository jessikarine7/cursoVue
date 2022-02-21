<template>

  <div class="container">
    <!-- <img class="fundo" src="@/img/fundo.jpg"> -->
    <div class="container2">
      <div class="texto">
        
        <h1>Agenda de contatos</h1>

        <div class="explicacao">
          <p>sistema de gerenciamento de contatos</p>

          <router-link to="/Login">
            <button class="button">Login</button>
          </router-link>

        </div>
      </div>

    </div>

    <img class="capa" src="@/img/capa.jpg" alt="">
<div class="fundo"></div>
  </div>
</template>


<script>
export default {

  name: 'Home',

}
</script>


<style scoped>
  /* @font-face {
    font-family: "poppins l";
    src: url("~@/fonts/Poppins/Poppins-Light.ttf") format('ttf');
    font-weight: 300;
  } */

  /* @font-face {
    font-family: "poppins m";
    src: url("~@/fonts/Poppins/Poppins-Medium.ttf") format('ttf');
    font-weight: 500;
  } */

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

  .fundo {
    z-index:0 ;
    position: absolute;
    width: 80%;
    /* ::before {
      content: url('@/img/agenda.png');
      width: 15px;
      height: 15px;
    }   */
  }
/* 
  .fundo::after {
          content: url('../img/agenda.png');
      width: 15px;
      height: 15px;
  } */



  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    /* // margin-top: 4%; */
    gap: 20px;

  }

  .capa{
    z-index: 9999;
    width: 50%;
  }

  .container2{
    background: #907ef8;
    width: 65vh;
    height: 80vh;
  }

  .texto{
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin-top: 4%;
    gap: 20px;
    z-index: 9999;
    width: 80%;
    height: 100%;
    /* // border-radius: 40px
    // position: absolute; */

  }

  
  h1{
    color:#fff;
    font-size: 35px;
    font-weight: 300;
  }

  p{
    margin-top: 15px;
    font-size: 20px;
    color:#fff;
    font-weight: 600;
  }

  .button{
    color: #907ef8;
    background: #fff;
    border-color: #907ef8;
    border-style: double;
    border-radius: 20px;
    font-size: 15px;
    width: 150%;
    height: 30px;
    font-family: "poppins l";
    margin-top: 30px;
  }

  .button:hover{
    background: #907ef8;
    color: #fff;
  }
</style>

