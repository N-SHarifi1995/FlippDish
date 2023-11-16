
<template>
  <v-simple-table dark class="monitorpart">
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="head in heads" :key="head">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><v-text-field type="number" :value="item.quantity" v-model="quantit[index]" min="1">{{ item.quantity
          }}</v-text-field></td>
          <td>{{ item.price * quantit[index] }}</td>
          <td><v-btn @click="delet(item.id)"><v-icon class="">mdi-delete</v-icon></v-btn></td>
         

        </tr>
        <tr><td>cost:</td> <td>{{sum}}</td></tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { dbase, app } from '@/firebase/firebase'
import { doc, collection, getDocs } from 'firebase/firestore';

import { getAuth } from "firebase/auth";
export default {
  name: 'userCart',

  data: () => ({
    items: [],
    heads: ['name', 'price', 'quantity', 'totalprice'],
    user: null,
    quantit: [],
  }),
  props: ['currentUser'],
  computed: {
    sum() {
      let sumprice=0 
      for (let index = 0; index < this.items.length; index++) {
         sumprice =+sumprice+(+this.items[index].price*this.quantit[index])

      }
      return sumprice
    }
  },
  methods: {

    async raedCart(id) {

      try {
        console.log(id)
        const userRef = doc(collection(dbase, "users"), id);
        console.log(userRef)
        getDocs(collection(userRef, "cart")).then((q) => {
          q.forEach((doc) => {
            let item = doc.data()
            this.items.push(item)
            this.quantit.push(item.quantity)

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




    },
    
  }
  , mounted() {
    this.raedCart(getAuth(app).currentUser.uid);


  }

}
</script>
<style lang="scss" scoped>
.monitorpart {
  @include displayflex;
  align-items: flex-start;
}
</style>
