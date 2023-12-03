import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import stripe from 'stripe'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  axios,
  VueAxios,
  stripe,
  render: h => h(App)
}).$mount('#app')
