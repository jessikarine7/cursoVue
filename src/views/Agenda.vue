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
            <input class="input-n" type="text" v-model="search"/>
          </div>

            <router-link class="adicionar"  :to="{ name: 'Adicionar', params: { id: id }}">
              <p class="adicionar">Adicionar contatos</p>
            </router-link>
        </div>

        <div class="card-container">
          <div class="card" v-for="contato of filtro" :key="contato.id">
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

  props: ['id'],
    
  data() {
    return {
      search: '',
      flag: false,
      contatos: [
        { 
          nome: '',
          telefone: '',
        }
      ],
    }
  },

  // watch: {
  //   value(value) {
  //     this.keyword = value;
  //   }
  // },

  // autocomplete() {
  //   this.keyword = this.value;
  // },

  // methods: {
  //   onInput(valor){
  //     this.$emit( Event,'input', valor);
  //   },
  // },

  
  created() {
    const headers = { "Content-Type": "application/json" };
    axios
      .get( `http://localhost:3000/usuarios/${this.id}/contatos/` , { headers })
      
        .then((response) =>{
          console.log(response.data);
          this.contatos=response.data
        })
  },

  computed: {
    filtro: function(){
      console.log('filtro');
      return this.contatos.filter((contato) => {
        return contato.nome.match(this.search);
      });
    }
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
  margin-left: 7%;
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

@media (max-width: 1500px) {
  
  .container-acesso {
    width: 140vh;
  }

  .contatos {
    width: 140vh;
  }

}

@media (max-width: 1300px) {
  
  .container-acesso {
    width: 120vh;
  }

  .contatos {
    width: 120vh;
  }

}

@media (max-width: 1200px) {
  
  .container-acesso {
    width: 100vh;
  }

  .contatos {
    width: 100vh;
  }

}

@media (max-width: 1000px) {
  
  .container-acesso {
    width: 90vh;
  }

  .contatos {
    width: 90vh;
  }

}

@media (max-width: 900px) {
  
  .container-acesso {
    width: 80vh;
  }

  .contatos {
    width: 80vh;
  }

}

@media (max-width: 800px) {
  
  .container-acesso {
    width: 70vh;
  }

  .contatos {
    width: 70vh;
  }

}

@media (max-width: 700px) {
  
  .container-acesso {
    width: 60vh;
  }

  .contatos {
    width: 60vh;
  }

}

@media (max-width: 600px) {
  
  .corpo{
    margin: 0;
  }

  .titulo-a{
    font-size: 25px;
  }
  
  .container-acesso {
    width: 50vh;
  }

  .contatos {
    width: 50vh;
  }

  .pesquisa{
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .pesquisa-1{
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;

  }

  .card-container{
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0;
  }

}

@media (max-width: 500px) {

  .container-acesso {
    width: 40vh;
  }

  .contatos {
    width: 40vh;
  }

}

@media (max-width: 300px) {

  .titulo-a{
    font-size: 20px;
  }

  .container-acesso {
    justify-content: center;
    align-items: center;
    min-width: 305h;
  }

  .contatos {
    min-width: 35vh;
  }

  .pesquisa{
    margin: 0;
  }
}
</style>

