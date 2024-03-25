<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div>
      <Header  />
      <!-- <HomePage /> -->
      <router-view />
      <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
// import HomePage from './components/HomePage.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
      // HelloWorld,
      Header,
      Footer,
      // HomePage,
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
