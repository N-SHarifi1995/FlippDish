
<template>
  <div class="table">
    <v-data-table
    :headers="headers"
    :items="foods"
    :items-per-page="5"
    class="elevation-1"
    dark
  > <template v-slot:item="{item}" >
    <tr >
            <td>{{ item.name }}</td>
            <td>{{ item.menuId }}</td>
            <td>{{ item.price }}</td>
             <td>{{ item.src }}</td>
            <td>{{ item.explain }}</td>
            <td><v-icon small class="" @click="delet(item.id)">mdi-delete</v-icon></td>
           <td> <v-icon samll class="" @click="change(item)">mdi-pencil</v-icon></td>
          </tr>
      </template>
     </v-data-table>
    
 <v-btn plain outlined class="btn pubbutton" @click="show" >{{ btnText }}</v-btn>
    <adminForm :type="'food'" :newObj="newObj" v-if="switchform"></adminForm>
  </div> </template>  
  <!-- <template v-slot:item="{item}" >
    <tr >
            <td>{{ item.name }}</td>
            <td>{{ item.menuId }}</td>
            <td>{{ item.price }}</td>
             <td>{{ item.src }}</td>
            <td>{{ item.explain }}</td>
            <td><v-icon small class="" @click="delet(item.id)">mdi-delete</v-icon></td>
           <td> <v-icon samll class="" @click="change(item)">mdi-pencil</v-icon></td>
          </tr>
      </template> -->
<!-- </v-data-table>
    <v-btn class="btn" @click="show" >{{ btnText }}</v-btn>
    <adminForm :type="'food'" :newObj="newObj" v-if="switchform"></adminForm>
  </div> -->
<!-- </template> -->

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
     // heads: ['name', "menuId", " price ", "src", "explain"],
      headers: [
        
          { text: 'name', value: 'name' },
          { text: 'menuId', value: 'menuId' },
          { text: 'price', value: 'price' },
          { text: 'src', value: 'src' },
          { text: 'explain', value: 'explain' },
          { text: '', value: 'action' },
          { text: '', value: 'action' }
        ],
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
 
  .btn {
    margin: 4rem 0;
    color: $newyellow;
  }
}
</style> 
