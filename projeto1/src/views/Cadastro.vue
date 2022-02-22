<template>
  <div>
    
     <form class="informações">
       <h1>Cadastro</h1>

      <span class="acesso">Digite seu Nome </span>

      <input class="input" type="text" 
      placeholder="Digite seu email" 
      size="26" maxlength="40"
      v-model="nome">

      <span class="acesso">Digite sua data de Nascimento</span>

      <input class="input" type="date" 
      placeholder="Digite seu email" 
      size="26" maxlength="40"
      v-model="data">

      <span class="acesso">Digite seu Email </span>

      <input class="input" type="text" 
      placeholder="Digite seu email" 
      size="26" maxlength="40"
      v-model="email">

      <span class="acesso">Crie uma Senha </span>

      <input class="input" type="password" 
      placeholder="Digite sua senha" 
      maxlength="6" v-model="password">

      <router-link to="/Login">
        <button class="botao">Cadastrar</button>
      </router-link>

    </form>

  </div>
</template>


<script>

// import axios from 'axios'

export default {

  data() {

    return{
      email: [],
      password: [],
      nome: [],
      data: [],
      users: []
    }
  },

//     beforeRouteLeave(to) {
//     const email= this.email
//     const senha= this.password
//     const data= this.data
//     const nome= this.nome

//     const user1= this.users.some(u => u.email == email)
//     const user2= this.users.some(u => u.password == senha)
//     const user3= this.users.some(u => u.nome == nome)
//     const user4= this.users.some(u => u.data == data)
//     console.log(to);

//     if (to.name === 'Home') {
//       return true;
//     }

//     if (to.name === 'Login') {
//       return true;
//     }
//     return user1 && user2 && user3 && user4;
//   },


//   created() {

//     const headers = { "Content-Type": "application/json" };
//     axios
//       .post('http://localhost:3000/usuarios', { headers })
//       .then((response) => {
//         console.log(response.data);
//         this.users=response.data
//       })
//   }
}
</script>


<style scoped>

</style>