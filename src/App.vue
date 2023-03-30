<template>
  <v-app id="app">
    <NavBar></NavBar>
    <router-view @refresh="console.log('hhhh')"></router-view>
    <FooterPage></FooterPage>
  </v-app>
</template>
<script>

import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  components: { NavBar, FooterPage },
  data() {
    return {
      menus: [],

    }
  }
  ,

  methods: {
    async getdata() {
      await this.$store.dispatch('fetchData')


    },
  },



  beforeMount() {
    this.getdata()

  }

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