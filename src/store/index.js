import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { dbase, app } from '../firebase/firebase';
import { getAuth, signOut } from "firebase/auth";
import router from '@/router';

export default new Vuex.Store({
  state: {
    foods: [],
    menus: [],
    curentUser: '',
    cart: [],
    Oldorder: [],
    userInfo: {},
    quantit:[]
  },
  getters: {
  },
  mutations: {
    setFood(state, foods) {
      state.foods = foods
    },
    setMenu(state, menus) {
      state.menus = menus
    },
    setCurrentUser(state, currentUser) {
      state.curentUser = currentUser
    },
    deletCurrentUser(state) {
      state.curentUser = ''
    },
    setcard(state, items) {
      state.cart = items
    },
    setPersonInfo(state, personInfo) {
      state.userInfo = personInfo
    },
    setquantit(state, quantit) {
      state.quantit = quantit
    },
  },
  actions: {
    fetchData({ commit }) {

      try {
        onSnapshot(collection(dbase, 'Food'), (q) => {
          let fbfood = []
          q.forEach((doc) => {
            let myfood = doc.data()
            myfood.id = doc.id
            fbfood.push(myfood)
          })
          commit('setFood', fbfood)
        });
      } catch (error) {
        console.log(error)
      }
      try {

        onSnapshot(collection(dbase, 'Menus'), (q) => {
          let fbMenu = []
          q.forEach((doc) => {
            let myMenu = doc.data()
            myMenu.id = doc.id
            fbMenu.push(myMenu)
          })
          // console.log(fbMenu)
          commit('setMenu', fbMenu)
        });
      } catch (error) {
        console.log(error)
      }
    },

    logout({ commit }) {
      const auth = getAuth(app);
      signOut(auth).then(() => {
        commit('deletCurrentUser')
        router.push('/')

      }).catch((error) => {
        console.log(error)
      });

    },
    async getCurrentUser({ commit }) {

      let currentuser = getAuth(app).currentUser
      console.log(currentuser)
      commit('setCurrentUser', currentuser.uid)
      let personInfo = {}
      let user = (await getDoc(doc(dbase, 'users', currentuser.uid))).data()
      personInfo.name = user.name
      personInfo.lastname = user.lastname
      personInfo.addres = user.adress
      personInfo.phone = user.phone
      commit('setPersonInfo', personInfo)
return personInfo
    },
  async  raedCart({ commit }, id) {
    
      console.log(id)
      const userRef = doc(collection(dbase, "users"), id);
      console.log(userRef)
      try {
     await   onSnapshot(collection(userRef, "cart"), (q) => {
          let items = []
          let quantit = []
          q.forEach((doc) => {
            let item = doc.data()
            quantit.push(item.quantity)
            item.id = doc.id
            items.push(item)
          }
          )
        // items.quantit = quantit
         
          commit('setcard', items)
         commit('setquantit', quantit) 
         console.log(quantit)
        })
      }
      catch (error) {
        alert(error)
      }




    },
  }
  ,
  modules: {

  }
})
