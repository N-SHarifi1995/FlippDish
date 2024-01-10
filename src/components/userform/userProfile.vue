<template>
  <v-card >
    <v-btn fab icon class=" monitorpart" @click="drawer = !drawer">
      <v-icon color="#ffc800">mdi-menu</v-icon>
    </v-btn>
    <v-card class="userprofile">

      <v-navigation-drawer left dark absolute class="drawer " v-model="drawer">
        <template v-slot:prepend>
          <v-list-item two-line class="mt-16">
            <v-list-item-avatar class="ma-8">
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

      <component :is="compo" class="show"  @changecompo="changecombo($event)" :currentUser="user" :smt="person" >
      </component>


    </v-card>
  </v-card>
</template>

<script>
import userCart from './userCart';
import OrderView from './order.vue';
import userInfo from './userInfo.vue';
import OldOrders from './oldOrders.vue';

export default {
  name: 'userProfile',
  components: { userCart, userInfo, OrderView, OldOrders },
  data: () => ({
    compo: userCart,
    user: '',
    drawer: true,

    items: [
      { title: 'carts', icon: 'mdi-cart', component: userCart },
      { title: 'pervious Orders', icon: 'mdi-logout', component: OldOrders },
      { title: 'info', icon: 'mdi-card-account-details-outline', component: userInfo },
      { title: 'foods', icon: 'mdi-food', component: OrderView },
      { title: 'logout', icon: 'mdi-logout' },

    ],
 
  }), computed: {
    person() { return this.$store.state.userInfo },

  }, methods: {

    logout() {

      this.$store.dispatch('logout')
    },
    changecombo(e) {
      this.compo = userInfo

      this.person.price = e
    }
  }
  , mounted() {
   
    this.user = this.$store.state.curentUser
  
    console.log(this.person)
  }

}
</script>
<style lang="scss" scoped>
.userprofile {
 
  height:100vh;
  background-color: $bgcolor;

  .show {
 //width: 100%;
  @include displayflex ;
 
width: 90vw;
}
}


.drawer {
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
;
  width: 100%;
  max-height: 100vh;
  background-color: $bgcolor;
}


</style>
