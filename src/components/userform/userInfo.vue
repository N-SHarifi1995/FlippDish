
<template>
  <div> <v-simple-table width="80%" dark class="monitorpart">
    <template v-slot:default>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td class="tablehead">name : </td>
          <td>{{ smt.name }}</td>
        </tr>
        <tr>
          <td class="tablehead">lastname :</td>
          <td>{{ smt.lastname }}</td>
        </tr>
        <tr>
          <td class="tablehead ">adress :</td>
          <td>
            <v-textarea class="input " dark color='#ffffff' required :disabled="adreessActive" :value="smt.addres"></v-textarea>

          </td>
          <td> <v-icon class="edite" @click="active('adress')">mdi-pencil</v-icon></td>
        </tr>
        <tr>
          <td class="tablehead">mobile :</td>
          <td> <v-text-field class="number" dark color='#ffffff' :disabled="mobileActive" :value="smt.phone" required></v-text-field></td>
          <td> <v-icon class="edite" @click="active('adress')">mdi-pencil</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <stripe-checkout
      ref="checkoutRef"
      mode="subscription"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button class="button button4"  @click=" submit()">Buy now</button>
</div>
 
</template>

<script>
//import { StripeCheckout } from '@vue-stripe/vue-stripe';
//import {stripe } from '@vue-stripe/vue-stripe';
//import {loadStripe} from '@stripe/stripe-js'

import { StripeCheckout, } from '@vue-stripe/vue-stripe'

export default {
  name: 'userInfo',

  data: () => (
   { publishableKey:'pk_test_51OGd4wJeXTDdhtDVdP86ayQBis0iNrWQxTXSmcr2TqsW1qFJKsXfOMTLZjh5HTWikYeNxPZ1mJTlC2GLhcIUTZoW005OOQwHTJ'
,
    adreessActive: true,
    mobileActive: true,
    loading: false,
      lineItems: [
        {
          price: "price_1OGi8HJeXTDdhtDVeYH7TJGW",
            quantity: 1
        },
      ],
      successURL: 'http://localhost:8080/',
      cancelURL: 'http://localhost:8080/',
   
  }),
  components:{  StripeCheckout,},
  props: ['currentUser', 'smt'],
  methods: {
    active(source) {
      if (source === 'adress') {
        this.adreessActive = false
      } else if (source === 'mobile') {
        this.mobileActive = false
      }
    },
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    
    },
  
  
},
 mounted() {

  }
  }
</script>
<style lang="scss" scoped>
.tablehead {
  font-size: 5vh;
}

.edite {
  font-size: 2vh;
}
</style>
