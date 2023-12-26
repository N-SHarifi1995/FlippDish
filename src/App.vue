<template>
  <v-app id="app">
    <NavBar></NavBar>
   
    <router-view @refresh="console.log('hhhh')" class="main"></router-view>
    <FooterPage></FooterPage>
  </v-app>
</template>
<script>
import { app } from '@/firebase/firebase'
import { getAuth } from "firebase/auth";
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
    const auth = getAuth(app)
    const curentUser = auth.currentUser
    console.log(curentUser)
  },
  beforeUpdate(){const auth = getAuth(app)
    const curentUser = auth.currentUser
    console.log(curentUser)}

}

</script>
<style lang="scss" scoped>
#app {
   @include displayflex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:$bgcolor;
 .main{
  
  background-color:$bgcolor;

 }

}
</style>