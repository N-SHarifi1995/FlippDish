<template>
  <v-card class="sidebar d-flex justify-center align-center
  " color="#16151500">

    <v-navigation-drawer 
      permanent left dark class="monitor ">
      <template v-slot:prepend>
        <v-list-item two-line class="mt-16">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ person.name }} {{ person.lastname }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-btn width="100%" @click="[compo = item.component, !compo ? logout() : console.log('d')]">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <component :is="compo" @changecompo="changecombo($event)" :currentUser="user" :smt="person" class="monitor">
    </component>


  </v-card>
</template>

<script>
import userCart from './userCart';
import OrderView from './order.vue';
import userInfo from './userInfo.vue';
import OldOrders from './oldOrders.vue';
// import {  dbase } from '@/firebase/firebase'
// import { doc, getDoc } from 'firebase/firestore';

//import { getAuth } from "firebase/auth";
//import store from '../../store/index'
export default {
  name: 'userProfile',
  components: { userCart, userInfo, OrderView ,OldOrders},
  data: () => ({
    compo: userCart,
    user: '',
    // person: {
    //   // name: '',
    //   // lastname: '',
    //   // addres: '',
    //   // phone: '',
    //   // price: ''

    // },
    items: [
      { title: 'carts', icon: 'mdi-cart', component: userCart },
      { title: 'pervious Orders', icon: 'mdi-logout' ,component:OldOrders},
      { title: 'info', icon: 'mdi-card-account-details-outline', component: userInfo },
      { title: 'foods', icon: 'mdi-food', component: OrderView },
      { title: 'logout', icon: 'mdi-logout' },
      
    ],
    //user: null
  }), computed: {
person(){return this.$store.state.userInfo}
  }, methods: {
    // async userinfo(userid) {
    //   try {

    //     let user = (await getDoc(doc(dbase, 'users', userid))).data()

    //     this.person.name = user.name
    //     this.person.lastname = user.lastname
    //     this.person.addres = user.adress
    //     this.person.phone = user.phone


    //   } catch (error) {
    //     console.log(error)
    //   }


    // },
    logout() {

      this.$store.dispatch('logout')
    },
    changecombo(e) {
      this.compo = userInfo

      this.person.price = e
    }
  }
  , mounted() {
    // let currentuser = getAuth(app).currentUser
    // this.user = currentuser.uid
    //this.$store.dispatch('getCurrentUser')

    this.user = this.$store.state.curentUser
   // this.userinfo(this.user)
    
    console.log(this.person)
  }

}
</script>
<style lang="scss" scoped>
.monitor {
  width: 100%;
  background-color: red
}

;

.sidebar {
  height: 100vh;

  .navdrawer {
    display: flex;
    justify-content: center;
    align-items: center;

  }
}
</style>
