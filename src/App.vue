<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  body{
    font-family: 'Poppins', sans-serif;
  }
  a {
    cursor: pointer;
    color: #00695c;
  }
  .go-back{
    color: #00695c;
    font-size: 1.5rem;
  }
  .go-back:hover{
    color: #4db6ac;
  }
</style>
