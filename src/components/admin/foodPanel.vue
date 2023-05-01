
<template>
  <div class="table">

    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
          <!-- <th class="text-left" v-for="head in Object.keys(foods[3])" :key="head.id">
              {{ head }}
                    </th> -->
            <th class="text-left" v-for="head in heads" :key="head">
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in foods" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.menuId }}</td>
            <td>{{ item.price }}</td>
             <td>{{ item.src }}</td>
            <td>{{ item.explain }}</td>
           
            <td><v-btn @click="delet(item.id)"><v-icon class="">mdi-delete</v-icon></v-btn></td>
            <td><v-btn @click="change(item)"><v-icon class="">mdi-pencil</v-icon></v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn class="btn" @click="show" >{{ btnText }}</v-btn>
    <adminForm :type="'food'" :newObj="newObj" v-if="switchform"></adminForm>
  </div>
</template>

<script>
import adminForm from './adminForm.vue';
import { deleteDoc, doc } from "firebase/firestore";
import {dbase} from '@/firebase/firebase'
export default {
  name: "FoodPanel",
  components: { adminForm },
  data() {
    return {
      newObj: {
        name: '',
        explain: '',
        menuId: '',
        price: '',
        src: ''
      },
      switchform: false,
      heads: ['name', "menuId", " price ", "src", "explain"]

    };
  },
  computed: {
    foods() {
      return this.$store.state.foods
    }
    ,
    btnText(){
      if(this.switchform===true){
        return 'close'
      }
      else{
        return 'add'
      }
    }
  },



  methods: {
    getsrc(addres) {
      return require(`@/assets/img/${addres}`);
    },
    show() {
      this.switchform = !this.switchform
      console.log(this.switchform)
    },
    delet(y) {

      try { deleteDoc(doc(dbase, 'Food', y)); }
      catch (err) { console.log(err) }
    },
    change(item) {
      this.newObj = item
      this.show()
    },

  }, mounted() {
    this.$store.dispatch('fetchData')

  },


}
</script>
<style lang="scss" scoped>
.table {
  background-color: transparent;

  .btn {
    margin: 4rem 0;
  }
}
</style>
