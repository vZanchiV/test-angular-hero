<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="text-align:center; ">
      <router-link to="/question1">Lancer le test</router-link> 
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home'
}
</script>

<style>
  a{
    color: #0c0c0c;;
    text-decoration: none;
  }
  a:hover {
    color:#42b983;
  }
</style>