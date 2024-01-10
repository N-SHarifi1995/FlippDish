
<template>
  <v-simple-table color="#ffc800"  dark class="monitorpart ">
    <template v-slot:default>
    
        <thead color="#ffc800" class="tablehead">
        <tr color="#ffc800">
          <th v-for="head in heads" :key="head" class=" tablehead" color="#ffc800">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id" >
          <td class="textfeild" >{{ item.name }}</td>
          <td class="textfeild">{{ item.price }} $</td>
          <td>
            <v-text-field type="number" class="textfeild" :value="item.quantity" v-model="quantit[index]" min="1">{{
              item.quantity
            }}</v-text-field>
          </td>
          <td class="textfeild">{{ item.price * quantit[index] }}$</td>
       
          <td class="textfeild"><v-icon @click="delet(item.id)" class="">mdi-delete</v-icon></td>
        </tr>
        <tr>
          <td class="total">cost:</td>
          <td>{{ sum }}</td>
        </tr>

      </tbody>
     
      <v-row><v-btn outlined class="pubbutton mt-6" @click="pulse()">order</v-btn></v-row>
    </template>
  </v-simple-table>
</template>

<script>
import { dbase, } from '@/firebase/firebase'
import { doc, deleteDoc, collection } from 'firebase/firestore';
import Store from '@/store/index';
export default {
  name: 'userCart',

  data: () => ({
   
    heads: ['name', 'price', 'quantity', 'totalprice'],
    user: null,
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

  }
  

}
</script>
<style lang="scss" scoped>
.monitorpart {


 .textfeild{
  width: 5rem;
 }

   .total{
    color: $newyellow;
    font-family: $font-dancing;
    font-size: 1.3rem;
    font-weight: 400;
 }
  .tablehead {
  
    font-family: $font-dancing;
    font-size: 1.5rem;
  }
}</style>
