
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
              <v-textarea class="input " dark color='#ffffff' required :disabled="adreessActive"
                :value="smt.addres"></v-textarea>

            </td>
            <td> <v-icon class="edite" @click="active('adress')">mdi-pencil</v-icon></td>
          </tr>
          <tr>
            <td class="tablehead">mobile :</td>
            <td> <v-text-field class="number" dark color='#ffffff' :disabled="mobileActive" :value="smt.phone"
                required></v-text-field></td>
            <td> <v-icon class="edite" @click="active('adress')">mdi-pencil</v-icon></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <stripe-checkout ref="checkoutRef" :pk="publishableKey" :session-id="sessionId" />
    <button class="button button4" @click=" submit()">Buy now</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import stripe from 'stripe'


export default {
  name: 'userInfo',

  data: () => (
    {
      publishableKey: 'pk_test_51OGd4wJeXTDdhtDVdP86ayQBis0iNrWQxTXSmcr2TqsW1qFJKsXfOMTLZjh5HTWikYeNxPZ1mJTlC2GLhcIUTZoW005OOQwHTJ'
      , Sstripe: null,
      sessionId: null,
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
  components: { StripeCheckout, },
  props: [ 'smt','currentUser'],
  methods: {
    active(source) {
      if (source === 'adress') {
        this.adreessActive = false
      } else if (source === 'mobile') {
        this.mobileActive = false
      }
    },


    load() {
      console.log(this.smt.price)
      this.Sstripe = stripe('sk_test_51OGd4wJeXTDdhtDVQKLjo7jLoZRRuq1S92Ffkvah0nkeEAl8F61Y1jUb23h4ecBZphnltjJ09yy9TZPlDx05KE3L00ncq8U5rt')
    },

    async submit() {
      console.log(this.Sstripe)

      try {
        let session = await this.Sstripe.checkout.sessions.create({
          payment_method_types: ["card"],
          mode: "payment",
          success_url: 'http://localhost:8080/#/sucessPage',
          cancel_url: 'http://localhost:8080/#/SignIn',
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: 'item.name',
                  description: 'item.shortDes',
                  images: ['item.image']
                },
                unit_amount: this.smt.price
              },
              quantity: 1
            }],

        })

        alert(session.id)
        this.sessionId = session.id
        let ss= this.sessionId 
        console.log('dddddddddddd'+this.$store.state.cart)
        localStorage.setItem('cart',JSON.stringify(this.$store.state.cart))
        localStorage.setItem('userInfo',JSON.stringify(this.$store.state.userInfo))
       this.$refs.checkoutRef.redirectToCheckout({ss})
      } catch (error) {
        console.log(error)
      }
     
    }

  },


  mounted() {
    this.load()
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
