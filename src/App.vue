<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <FooterPage></FooterPage>
  </div>
</template>
<script>
import { collection, getDocs,collectionGroup } from 'firebase/firestore';
import dbase from '@/firebase/index'

import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  components: { NavBar, FooterPage },
  data() {
    return {
      menus: [],
      foods: []
    }
  }
,
provide() {
  return {
    menus: this.menus,
    foods: this.foods
  }
},
methods: {
    async getdata() {
    // console.log(dbase)
    try {
      const querySnapshot = await getDocs(collection(dbase, 'Menus'));
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        this.menus.push(doc.data())
      });

      //console.log(this.menus)
    } catch (error) {
      console.log(error)
    }

    try {
      const q = await getDocs(collectionGroup(dbase, 'Food'));
      q.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        this.foods.push(doc.data())

      });


    } catch (error) {
      console.log(error)
    }
  }
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