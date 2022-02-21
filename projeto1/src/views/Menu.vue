<template>

  <div> 
      <!-- <p class="logo">Metaway</p> -->
    <nav>
      <router-link to="/">
        <img src="@/img/home.png" alt="Home">
      </router-link>

      <router-link to="/Login">
        <img src="@/img/login.png" alt="Login">
      </router-link>

      <router-link to="/Acesso">
        <img src="@/img/agenda.png" alt="Agenda">
      </router-link>
    </nav>
  </div>

</template>


<script>


</script>


<style  lang="scss">


// @font-face {
//   font-family: 'poppins-m';
//   src: url('/@fonts/Poppins/Poppins-Medium.ttf') format('ttf');

//   font-family: 'poppins-l';
//   src: url('/@fonts/Poppins/Poppins-Light.ttf') format('ttf');
// }


// .logo{
//   color: #fff;
//   font-family: 'poppins-l';
//   font-size: 17px;
//   position: absolute;
//   padding-left: 20px;
// }

img{
  width: 30px;
  padding: 10px;
}

nav{
  background: #907ef8;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 65vh;
  gap: 20px;
}
 

</style>

