<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img 
        src="@/assets/logo.svg"  
        alt="" 
        width="30" 
        height="24" 
        class="d-inline-block align-text-top"
      />
      PokeAPI
    </router-link>
    <div>
      <router-link class="btn btn-outline-primary m-1" to="/">Home</router-link>
      <router-link class="btn btn-outline-primary m-1 " to="/pokemons">Pokemons</router-link>
      <router-link class="btn btn-outline-primary m-1 " to="/favoritos">Favoritos</router-link>
    </div>
  </div>
</nav>

<div class="container">
  <RouterView />
</div>  
  
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
