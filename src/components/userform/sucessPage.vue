<template>
  <v-card class="sidebar d-flex justify-center align-center flex-column
  " color="#16151500">
    <h3>your Payment was successful and your order has been placed</h3>
    <h3>thank you</h3>
<h5>{{ info }}</h5>
<h5>{{items }}</h5>
    <v-btn class="pubbutton " @click="finish" dark>return</v-btn>
  </v-card>
</template>

<script>
//import Store from '@/store/index';
import { dbase } from '@/firebase/firebase'
import { collection, doc, addDoc,deleteDoc } from "firebase/firestore";
export default {
  name: 'sucessPage',
  components: {},
  data: () => ({
     info: '',
  items: ''
   
  }), computed: {

  }, methods: {
    async finish() {
      this.$store.dispatch('getCurrentUser')
      let user = this.$store.state.curentUser
      console.log(user)

      //  console.log(info)
      console.log(this.items)
      try {
        const userRef = doc(collection(dbase, "users"), user);
        console.log(
          userRef
          )
        await addDoc(collection(userRef, "OldOrders"), {
          cardItems: this.items,
          phone: this.info.phone,
        adress: this.info.addres,
        date:new Date().toLocaleString()
        
        });
       
        deleteDoc(doc(userRef, 'cart'));
      


      } catch (error) {
        alert(error)
      }


      localStorage.clear()
    },
    // async load() {
    //   this.info = await this.$store.dispatch('getCurrentUser')

    //   await this.$store.dispatch('raedCart', this.$store.state.curentUser)
    //   this.items = this.$store.state.cart
    //   console.log(this.info, this.$store.state.cart)
    // }
  }
  , mounted() {
    //this.load()
    //
    
this.items=JSON.parse(localStorage.getItem('cart')),
this.info=JSON.parse(localStorage.getItem('userInfo'))

  }

}
</script>
<style lang="scss" scoped>
.sidebar {

  height: 100vh;
  color: $newyellow;
  font-size: 4vh;
  font-style: italic;
  text-shadow: 1px 0.5px 0.5px wheat;

  .pubbutton {
    margin-top: 6vh;
  }
}
</style>
