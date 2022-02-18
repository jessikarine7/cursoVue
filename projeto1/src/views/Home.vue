<template>
  <div class="container">
    <div class="texto">
      <h1>Agenda de contatos</h1>
      <p>sistema de gerenciamento de contatos</p>

      <router-link to="/Login">
        <button class="button">Login</button>
      </router-link>

    </div>
    <img class="capa" src="@/img/capa.jpg" alt="">

  </div>
</template>


<script>
export default {

  name: 'Home',

}
</script>


<style  lang="scss">


  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-self: center;
    align-items: center;
    margin-top: 4%;
   
  }

  .capa{
    width: 35%;
  }

  
  h1{
    color: #907ef8;
    font-size: 30px;
    font-family: sans-serif;
  }

  p{
    font-family: sans-serif;
    font-size: 20px;
    color:   #907ef8;
  }

  .button{
    color: #907ef8;
    background: #fff;
    border-color: #b5eaf2;
    border-style: double;
    border-radius: 20px;
    font-size: 15px;
    width: 35%;
    font-family: sans-serif;
    margin-top: 30px;
  }

</style>

