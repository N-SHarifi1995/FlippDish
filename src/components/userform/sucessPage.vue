<template>
  <v-card class="sidebar d-flex justify-center align-center flex-column
  " color="#16151500">
    <h3>your Payment was successful and your order has been placed</h3>
    <h3>thank you</h3>
    <h5>{{ info }}</h5>
    <h5>{{ items }}</h5>
    <v-btn class="pubbutton " @click="finish" dark>return</v-btn>
  </v-card>
</template>

<script>
//import Store from '@/store/index';,deleteDoc,onSnapshot
import { dbase } from '@/firebase/firebase'
import { collection, doc, addDoc,getDocs,deleteDoc } from "firebase/firestore";
export default {
  name: 'sucessPage',
  components: {},
  data: () => ({
    info: '',
    items: ''

  }), computed: {

  }, methods: {
    async finish() {
      this.$store.dispatch('getCurrentUser', 0)
      let user = this.$store.state.curentUser
      console.log(user)
      console.log(this.info)
      console.log(this.items)
      try {
        const userRef = doc(collection(dbase, "users"), user);
        console.log(userRef)


        await addDoc(collection(userRef, "OldOrders"), {
          // cardItems: this.items,
          // phone: this.info.phone,
          // adress: this.info.addres,
          date: new Date().toLocaleString()

        });

        // onSnapshot(collection(userRef, "cart"), (q) => {
        //   q.forEach((docs) => {
        //   console.log(docs.id)
        //       deleteDoc(doc(userRef, 'cart', docs.id))
          
        //   })
        
        // })

        await getDocs(collection(userRef, "cart")).then((res)=>{
          res.forEach(i=>{
             deleteDoc(doc(userRef, 'cart', i.id))
          })
        })
         //let collectionref =await getDoc(collection(userRef, "cart"))
//          querySnapshot.forEach((doc) => { 
//           console.log(doc.id, " => ", doc.data());
//           //doc.ref.delete()
         
        
  
 
// });

        //  querySnapshot .then((querySnapshot) => {
        //   querySnapshot.forEach(doc => {
        //     doc.ref.delete()
        //   });
        // })



      } catch (error) {
        alert(error)
      }


      localStorage.clear()
    },

  }
  , mounted() {

    this.items = JSON.parse(localStorage.getItem('cart')),
      this.info = JSON.parse(localStorage.getItem('userInfo'))

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
