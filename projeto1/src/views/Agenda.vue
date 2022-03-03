<template>

  
  <div class="container-acesso1">
  
    <div class="container-acesso">

      <div class="contatos">
        <h1 class="titulo-a">Contatos</h1>
      </div>

      <div class="corpo">
        <div class="pesquisa">
        <label class="pesquisa-nome" for="">Pesquisar Nome</label>
          <input class="input-n" type="text" >
        </div>

        <div class="card" >
          <div class="linha">

            <div class="icones">
              <img src="@/img/login3.png" class="pessoa">
              <img src="@/img/calendario3.png" class="pessoa">
              <img src="@/img/email2.png" class="pessoa">
            </div>
            
            <div class="descrisao">
              <p class="get">{{ contatos.nome }}</p>
              <p class="get">Data</p>
              <p class="get">Email</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>


<script>

import axios from 'axios'

export default {

  data() {

    return{

      contatos: {
        nome:[],
        data:[],
        email: [],
      }
    }
  },
  
  created() {

    const headers = { "Content-Type": "application/json" };
    axios
      .get('http://localhost:3000/contatos', { headers })
      .then((response) => {
        console.log(response.data);
        this.contatos=response.data
      })
  }

}
</script>


<style  lang="scss">
  
.container-acesso1{
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 2%;
  
}

.container-acesso{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150vh;
  height: 70vh;
  background-color: #fff;
  border-radius: 30px;
  gap: 40px;
  // opacity: 0.8;
}

.titulo-a{
  font-family: poppins;
  font-weight: 800;
  color: #fff;
  font-size: 33px;
}

.contatos{
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 150vh;
  height: 10vh;
  background-color: #5744F5;
  
}

.pesquisa{
  display: flex;
  justify-content: baseline;
  width: 150vh;
  gap: 20px;

}

.pesquisa-nome{
  font-family: poppins;
  font-weight: 400;
  color: #5744F5;
}

.input-n{
  background-color: #5644f528;
  border: none;
  width: 20%;
  border-radius: 10px;
  color: #5744F5;
}

.corpo{
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  gap: 80px;
}

.card{
  display: flex;
  justify-content:center;
  align-items: center;
  align-self: baseline;
  width: 30vh;
  height: 30vh;
  border-radius: 25px;
  background-color: #5644f528;
}

.linha{
  display: flex;
  justify-content:center;
  flex-direction: row;
  align-items:center;
  align-content: center;
  gap: 40px;
  width: 25vh;
  height: 25vh;
  border-style:double;
  border-width:2px;
  border-color: #5744F5;
  border-radius: 25px;
  // background: #5644f528;
}

.pessoa{
  width: 30px;
  height: 30px;
  margin: 0;
}

.descrisao{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30px;
  height: 130px;
  font-family: poppins;
  font-weight: 400;
  font-size: 13px;
  color: #5744F5;
  margin-top: 10px;
}

.get{
  width: 50px;
  height: 30px;
  margin: 0;
}

.icones{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 30px;
  height: 130px;
}

</style>

