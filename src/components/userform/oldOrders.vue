
<template>
 <v-card
    max-width="400"
    class="mx-auto monitorpart"
  >
    <v-container>
      <v-row dense>
      
        <v-col
          v-for="(item, i) in orders"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div >
              <div>
                <v-card-title
                  class="text-h9"
                  v-text="item.date"
                ></v-card-title>

                <v-card-text v-text="'phone:'+item.phone"></v-card-text>
                <v-card-text v-text="'adress:'+item.adress"></v-card-text>
               
              </div>
              <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
           quantity
          </th>
          <th class="text-left">
         price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="food in item.cardItems"
          :key="food.name"
        >
          <td>{{ food.name }}</td>
          <td>{{ food.quantity }}</td>
          <td>{{ food.price}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
             
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { dbase, } from '@/firebase/firebase'
import { doc, collection, onSnapshot } from 'firebase/firestore';

export default {
  name: 'OldOrders',

  data: () => ({
    items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },],

    orders: null,
   
  }),

  
  methods: {
    async  raedOldOrder( id) {
    
    console.log(id)
    const userRef = doc(collection(dbase, "users"), id);
    console.log(userRef)
    try {
   onSnapshot(collection(userRef, "OldOrders"), (q) => {
        let orders = []
        q.forEach((doc) => {
          let item = doc.data()
          item.id = doc.id
          orders.push(item)
        }
        )
    
      this.orders=orders
      console.log(this.orders)
      })
    }
    catch (error) {
      alert(error)
    }




  },


  }
  , mounted() {
 this.raedOldOrder(this.$store.state.curentUser)



  }

}
</script>
<style lang="scss" scoped>
.monitorpart {
max-height: 100vh;
overflow-y: scroll;

}</style>
