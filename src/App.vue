<template>
  <v-app id="app">
    <NavBar></NavBar>
    <router-view @refresh="console.log('hhhh')"></router-view>
    <FooterPage></FooterPage>
  </v-app>
</template>
<script>
import { collection, onSnapshot } from 'firebase/firestore';
import dbase from '@/firebase/index'

import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  components: { NavBar, FooterPage },
  data() {
    return {
      menus: [],
     foods: {}
    }
  }
  ,
  computed:{
    
  },
  provide() {
    return {
      menus: this.menus,
      foods: this.foods
    }
  },
   methods: {
   getdata() {
    
      // try {
      //   onSnapshot(collection(dbase, 'Food'), (q) => {

      //     q.forEach((doc) => {
      //       // console.log(doc.id, " => ", doc.data());
      //       let myfood = doc.data()
      //       myfood.id = doc.id
      //       this.foods.push(myfood)

      //     })


      //   });

      // } catch (error) {
      //   console.log(error)
      // }
      //           try {
      //       let res= await getDocs(collection(dbase, 'Food'))

      //           res.forEach((doc) => {
      //             // console.log(doc.id, " => ", doc.data());
      //             let myfood = doc.data()
      //             myfood.id = doc.id
      //           this.foods.push(myfood)

      //           })

      //             ;
      //         }
      // catch (error) {
      //         console.log(error)
      //       }

      // console.log(dbase)
      // try {
      //   onSnapshot(collection(dbase, 'Menus'), (res) => {
      //     res.forEach((doc) => {
      //       //console.log(doc.id, " => ", doc.data());
      //       this.menus.push(doc.data())
      //     });
      //   });


      //   //console.log(this.menus)
      // } catch (error) {
      //   console.log(error)
      // }

      try {
        onSnapshot(collection(dbase , 'Food'), (q) => {
         
          let fbfood = []
            console.log(fbfood);
          q.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            let myfood = doc.data()
            myfood.id = doc.id
            fbfood.push(myfood)

          })
          this.foods.values= fbfood
          console.log(this.foods)
            ;
        });



      } catch (error) {
        console.log(error)
      }
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