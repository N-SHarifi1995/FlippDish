
<template>
  <div class="table">
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" v-for="head in Object.keys(foods[0])" :key="head.id">
              {{ head }}
            </th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="item in foods" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.menuId }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.explain }}</td>
            <td><v-btn>delet</v-btn></td>
            <td><v-btn><v-icon class="">mdi-delet</v-icon></v-btn></td>
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
export default {
  name: "FoodPanel",
  components:{adminForm},
  data() {
    return {
      switchform:false
      

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
    console.log(this.switchform)}
  }


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
