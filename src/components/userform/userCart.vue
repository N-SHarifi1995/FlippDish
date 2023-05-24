
<template>
 
  <div class="table">

    <v-simple-table dark width="80%">
      <template v-slot:default>
        <thead>

          <tr>
         
            <th  v-for="head in heads" :key="head">
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td> 
           
            <td>{{ item.quantity }}</td>
            
           
           
            <!-- <td><v-btn @click="delet(item.id)"><v-icon class="">mdi-delete</v-icon></v-btn></td>
            <td><v-btn @click="change(item)"><v-icon class="">mdi-pencil</v-icon></v-btn></td> -->
          </tr>
        </tbody>
      </template>
    </v-simple-table>
   
  </div>
</template>

<script>
import { dbase,app } from '@/firebase/firebase'
import { doc, collection,getDocs} from 'firebase/firestore';

import { getAuth } from "firebase/auth";
export default {
  name: 'userCart',

  data: () => ({
    items: [],
    heads:['name','price','quantity','totalprice'],
    user: null
  }),
  props: ['currentUser'],
  methods: {

    async raedCart(id) {

      try {
        console.log(id)
        const userRef = doc(collection(dbase, "users"), id);
        console.log(userRef)
          getDocs(collection(userRef, "cart")).then((q)=>{
          q.forEach((doc)=>{
            let item =doc.data()
            this.items.push(item)

          },
          console.log(this.items)
          )
         });
       
        //    let items= collection(userRef, "cart");
        //  console.log(items)
    //  onSnapshot(collection(userRef, "cart")), (q) => {
    //       let fbfood = []
    //       q.forEach((doc) => {
    //         let items = doc.data()
    //         items.id = doc.id
    //         fbfood.push(items)
    //         console.log(fbfood)
    //       })

        }


       catch (error) {
        alert(error)
      }




    }
  }
  , mounted() {
    this.raedCart(  getAuth(app).currentUser.uid)

  }

}
</script>
<style lang="scss">
.sidebar {
  background-color: transparent;
  margin-top: 5rem;
}
</style>
