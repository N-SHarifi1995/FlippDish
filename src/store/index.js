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
    quantit: []
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
    AddQuantit(state, { index, value }) {
      state.quantit[index] = value
      console.log(value, state.quantit)
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
    async getCurrentUser({ commit }, flag) {

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
      if (flag === 1) {
        getAuth(app).currentUser.getIdTokenResult().then(function ({ claims }) {
          if (claims.user_id == 'uFNnlFA7YIZy4j3tA8PwAYEcDVP2') {
            router.push('/admin')

          } else {
            console.log(personInfo)
            //  console.log(state.userInfo)
            router.push('/userProfile/' + personInfo.name)

          }

        })
      }


      return personInfo
    },
    async raedCart({ commit }, { id, flg }) {

      console.log(id, flg)
      const userRef = doc(collection(dbase, "users"), id);
      console.log(userRef)
      let quantit = []
      try {
        await onSnapshot(collection(userRef, "cart"), (q) => {
          console.log('adddddddddddd')
          let items = []

          q.forEach((doc) => {
            let item = doc.data()
            quantit.push(item.quantity)
            item.id = doc.id
            items.push(item)
          }
          )
          // items.quantit = quantit

          commit('setcard', items)


          console.log(quantit)
        })
      }
      catch (error) {
        alert(error)
      }
      if (flg) { commit('setquantit', quantit) }

    },

    addQuantit({ commit }, index) {
      //
      let value = +this.state.quantit[index] + 1
      console.log(value)
      commit('AddQuantit', { index, value })

    }
    ,
    
    // admindetection({ state }, person) {

    //   getAuth(app).currentUser.getIdTokenResult().then(function ({ claims }) {
    //     if (claims.user_id == 'uFNnlFA7YIZy4j3tA8PwAYEcDVP2') {
    //       router.push('/admin')

    //     } else {
    //       console.log(person.name)
    //       console.log(state.userInfo)
    //       router.push('/userProfile/' + person.name)

    //     }

    //   })
    // }
  }
  ,
  modules: {

  }
})
