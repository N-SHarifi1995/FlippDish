
<template>
  <v-simple-table dark class="monitorpart">
    <template v-slot:default>
      <thead color="#ffc800">
        <tr color="#ffc800">
          <th v-for="head in heads" :key="head" class="tablehead" color="#ffc800">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}  $</td>
          <td><v-text-field type="number" :value="item.quantity" v-model="quantit[index]" min="1">{{ item.quantity
          }}</v-text-field></td>
          <td>{{ item.price * quantit[index] }}</td>
          <td><v-btn @click="delet(item.id)"><v-icon class="">mdi-delete</v-icon></v-btn></td>


        </tr>
        <tr>
          <td>cost:</td>
          <td>{{ sum }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { dbase, app } from '@/firebase/firebase'
import { doc, collection, onSnapshot, deleteDoc } from 'firebase/firestore';

import { getAuth } from "firebase/auth";
export default {
  name: 'userCart',

  data: () => ({
    items: [],
    heads: ['name', 'price', 'quantity', 'totalprice'],
    user: null,
    quantit: [],
    userrefrence: null
  }),
  props: ['currentUser'],
  computed: {
    sum() {
      let sumprice = 0
      for (let index = 0; index < this.items.length; index++) {
        sumprice = +sumprice + (+this.items[index].price * this.quantit[index])

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
        onSnapshot(collection(userRef, "cart"), (q) => {
          let items = []
          q.forEach((doc) => {
            let item = doc.data()
            item.id = doc.id
            items.push(item)
            this.quantit.push(item.quantity)

          },
            this.userrefrence = userRef,
            this.items = items,
            console.log(this.items)
          )
        });


      }


      catch (error) {
        alert(error)
      }




    },
    delet(y) {
      console.log('ss')
      //getDocs(collection(userRef, "cart"))
      try {
        deleteDoc(doc(this.userrefrence, 'cart', y));
      }
      catch (err) { console.log(err) }
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
  .tablehead{
    color: $newyellow;
  font-family: $font-dancing;
  font-size: 3vh;
  }

}
</style>
