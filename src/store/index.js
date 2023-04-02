import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { collection, onSnapshot } from 'firebase/firestore';
import dbase from '../firebase/index'
export default new Vuex.Store({
  state: {
    foods:[],
    menus:[]
  },
  getters: {
  },
  mutations: {
    setFood(state,foods){
      state.foods=foods
    },
    setMenu(state,menus){
      state.menus=menus
    }
  },
  actions: {
    fetchData({commit}){
      
      try {
        onSnapshot(collection(dbase , 'Food'), (q) => {
          let fbfood = []
          q.forEach((doc) => {
            let myfood = doc.data()
            myfood.id = doc.id
            fbfood.push(myfood)
          })
          commit('setFood',fbfood)
        });
      } catch (error) {
        console.log(error)
      }
      try {
    
         onSnapshot(collection(dbase , 'Menus'), (q) => {
           let fbMenu = []
           q.forEach((doc) => {
             let myMenu = doc.data()
             myMenu.id = doc.id
             fbMenu.push(myMenu)
           })
           console.log(fbMenu)
           commit('setMenu',fbMenu)
         });
       } catch (error) {
         console.log(error)
       }
    }
    }
  ,
  modules: {

  }
})
