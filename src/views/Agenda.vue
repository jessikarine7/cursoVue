<template>

  
  <div class="container-acesso1">
  
    <div class="container-acesso">

      <div class="contatos">
        <h1 class="titulo-a">Contatos</h1>
      </div>

      <div class="corpo">
        <div class="pesquisa-1">
          <div class="pesquisa">
            <label class="pesquisa-nome" for="">Pesquisar Nome</label>
            <input class="input-n" type="text" >
          </div>

            <router-link class="adicionar" to="/adicionar">
              <p class="adicionar">Adicionar contatos</p>
            </router-link>
        </div>

        <div class="card-container">
          <div class="card" v-for="contato of contatos" :key="contato.id">
            <div class="linha">
              <div class="icones">
                <img src="@/img/login3.png" class="pessoa">
                <img src="@/img/telefone.png" class="pessoa">
              </div>

              <div class="descrisao">
                <p class="get">{{contato.nome}}</p>
                <p class="get">{{contato.telefone}}</p>
              </div>

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

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2%;
  height: 70vh;
  align-content: start;
}
  
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
  width: 160vh;
  height: 80vh;
  background-color: #fff;
  border-radius: 30px;
  gap: 30px;
  
}

.titulo-a{
  font-family: poppins;
  font-weight: 800;
  color: #fff;
  font-size: 30px;
}

.contatos{
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 160vh;
  height: 8vh;
  background-color: #5744F5;
  
}

.pesquisa{
  display: flex;
  justify-content: baseline;
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
  width: 150px;
  border-radius: 10px;
  color: #5744F5;
}

.corpo{
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  gap: 25px;
}

.card{
  display: flex;
  justify-content:center;
  align-items: center;
  align-self: baseline;
  width: 25vh;
  height: 15vh;
  margin-top: 
  2%;
  border-radius: 25px;
  background-color: #5644f528;
}

.linha{
  display: flex;
  justify-content:flex-start;
  flex-direction: row;
  align-items:center;
  align-content: center;
  gap: 30px;
  width: 21vh;
  height: 11vh;
  border-style:double;
  border-width:2px;
  border-color: #5744F5;
  border-radius: 25px;
  // background: #5644f528;
}

.pessoa{
  width: 22px;
  height: 22px;
  margin: 0;
}

.descrisao{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 10px;
  // height: 100px;
  font-family: poppins;
  font-weight: 400;
  font-size: 12px;
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
  gap: 10px;
  width: 20px;
  margin-left: 20px;
  // height: 130px;
}

.pesquisa-1{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

}

.adicionar{
  font-family: poppins;
  font-size: 12px;
  color:#AFB3B3;
  text-decoration: none;
}

.adicionar:hover{
  color: #5744F5;
}

</style>

