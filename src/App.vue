<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <FooterPage></FooterPage>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  components: { NavBar, FooterPage}
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #111d19;

}
</style>
