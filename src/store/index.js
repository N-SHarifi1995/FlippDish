import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { collection, onSnapshot } from 'firebase/firestore';
import dbase from '../firebase/index'
export default new Vuex.Store({
  state: {
    foods:[]
  },
  getters: {
  },
  mutations: {
    setFood(state,foods){
      state.foods=foods
    }
  },
  actions: {
    fetchData({commit}){
      
      try {
       // console.log('hi')
        onSnapshot(collection(dbase , 'Food'), (q) => {
         
          let fbfood = []
            
          q.forEach((doc) => {
           //console.log(doc.id, " => ", doc.data());
            let myfood = doc.data()
            myfood.id = doc.id
            fbfood.push(myfood)
         //  console.log(fbfood);
          })
          commit('setFood',fbfood)
          
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
