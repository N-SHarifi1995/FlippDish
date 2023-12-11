
<template>
  <v-simple-table dark class="monitorpart ">
    <template v-slot:default>
      <thead color="#ffc800">
        <tr color="#ffc800" class="tablehead">
          <th v-for="head in heads" :key="head" class="tablehead" color="#ffc800">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }} $</td>
          <td>
            <v-text-field type="number"  :value="item.quantity" v-model="quantit[index]" min="1">{{
              item.quantity
            }}</v-text-field>
          </td>
          <td>{{ item.price * quantit[index] }}$</td>
       
          <td><v-btn @click="delet(item.id)"><v-icon class="">mdi-delete</v-icon></v-btn></td>


        </tr>
        <tr>
          <td>cost:</td>
          <td>{{ sum }}</td>
        </tr>

      </tbody>
      <v-row><v-btn class="pubbutton" @click="pulse()">order</v-btn></v-row>
    </template>
  </v-simple-table>
</template>

<script>
import { dbase, } from '@/firebase/firebase'
import { doc, deleteDoc, collection } from 'firebase/firestore';
import Store from '@/store/index';
//import { getAuth } from "firebase/auth";
export default {
  name: 'userCart',

  data: () => ({
    //test: [],
    heads: ['name', 'price', 'quantity', 'totalprice'],
    user: null,
   // quantit:Store.state.quantit,
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
    },
    items() {
   
      console.log(this.$store.state.cart)
      return this.$store.state.cart
    },
    quantit() {
       
      return Store.state.quantit
    }
  },
  methods: {
    updateQuantit() {
      console.log('change')
    },
    // async raedCart(id) {

    //   try {
    //     console.log(id)
    //     const userRef = doc(collection(dbase, "users"), id);
    //     console.log(userRef)
    //     onSnapshot(collection(userRef, "cart"), (q) => {
    //       let items = []
    //       q.forEach((doc) => {
    //         let item = doc.data()
    //         item.id = doc.id
    //         items.push(item)
    //         this.quantit.push(item.quantity)

    //       },
    //         this.userrefrence = userRef,
    //         this.items = items,
    //         console.log(this.items)
    //       )
    //     });


    //   }


    //   catch (error) {
    //     alert(error)
    //   }




    // },
    delet(y) {
      console.log('ss')
      const userRef = doc(collection(dbase, "users"), this.$store.state.curentUser);
      try {
        deleteDoc(doc(userRef, 'cart', y));
      }
      catch (err) { console.log(err) }
    },
    pulse() {
  
      this.$emit('changecompo', this.sum)
    },
    // async addQ(){

    // this.items= await  this.$store.dispatch('raedCart',this.$store.state.curentUser)
    //   console.log(  this.items)


    //   }

  }
  , mounted() {

//this.quantit=this.$store.quantit
//console.log(this.quantit)

  }

}
</script>
<style lang="scss" scoped>
.monitorpart {

  .tablehead {
    color: $newyellow;
    font-family: $font-dancing;
    font-size: 3vh;
  }
}</style>
