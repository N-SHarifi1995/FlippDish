
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
          <tr v-for="item in foods.values" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.menuId }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.explain }}</td>
            <td><v-btn  @click=" delet(item.id)"><v-icon class="">mdi-delete</v-icon></v-btn></td>
            <td><v-btn><v-icon class="">mdi-pencil</v-icon></v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn class="btn" @click="show">add</v-btn>
   <adminForm v-if="switchform"></adminForm>
  </div>
</template>

<script>
import adminForm from './adminForm.vue';
import {deleteDoc, doc} from "firebase/firestore";
import dbase from '@/firebase/index'
export default {
  name: "FoodPanel",
  components:{adminForm},
  data() {
    return {
      switchform:false,
      heads:['name',"menuId", "explain"," price ","src"]

    };
  },
  computed: {
    // hh: function () {
    //   let hesd=[]
    //   Object.keys(this.foods[1]).forEach(element => {
    // hesd.push({ text: element, value: element, align: 'start',
    //       sortable: false })  
    //   });
    //   return hesd

    // }
  },

  inject: ['foods'],

  methods: {
    getsrc(addres) {
      return require(`@/assets/img/${addres}`);
    },
    show(){
      this.switchform=!this.switchform
    console.log(this.switchform)},
   
delet(y){
 
   try{ deleteDoc(doc(dbase,'Food',y));} 
   catch(err){console.log(err)}
  },
 
  }, mounted() {
    console.log(this.foods)
  },
 

}
</script>
<style lang="scss" scoped>
.table{
  background-color: transparent;
  .btn{
    margin: 4rem 0;
  }
}
</style>
