<template>
  <v-card  class="sidebar d-flex justify-center" color="#16151500" >  
    <v-navigation-drawer  permanent left dark>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ name }} {{ lastname }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-btn width="100%" @click="[compo=item.component,!compo ? logout(): console.log('d') ]">
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
    <component :is="compo" @changecompo="changecombo()" :currentUser="user" :smt="{name:this.name,lastname:this.lastname}" class="monitor"></component>
  
  </v-card>
</template>

<script>
import userCart from './userCart';
import OrderView from './order.vue';
import userInfo from './userInfo.vue';
import { app, dbase } from '@/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore';

import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'userProfile',
  components: { userCart,userInfo,OrderView },
  data: () => ({
    compo: userCart,
    name:'',
    lastname:'',
    items: [
      { title: 'carts', icon: 'mdi-cart',component:userCart },
      { title: 'info', icon: 'mdi-card-account-details-outline', component:userInfo},
      { title: 'lasrorders', icon: 'mdi-list-box-outline' ,component:''},
      { title: 'foods', icon: 'mdi-food' ,component:OrderView},
      { title: 'logout', icon: 'mdi-logout' },
    ],
    //user: null
  }), computed: {
   user() {
        let currentuser= getAuth(app).currentUser.uid
      return currentuser
        // let user = getDoc(doc(dbase, 'users', userid))
        // return user.data()
    }
  }, methods: {
    async userinfo(userid) {
      try {

        let user = await getDoc(doc(dbase, 'users', userid))
        this.name = user.data().name
        this.lastname = user.data().lastname
      
      } catch (error) {
        console.log(error)
      }


    },
    logout() {
      const auth = getAuth(app);
      signOut(auth).then(() => {
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      });

    },
    changecombo(){
      this.compo=userInfo
    }
  }
  , mounted() {
     let currentuser= getAuth(app).currentUser
    this.user=currentuser.uid
    this.userinfo(this.user)


  }

}
</script>
<style lang="scss" scoped>
.monitor{
  width: 100%;
  background-color: transparent
};
.sidebar{
  height: 100vh;

}
</style>
