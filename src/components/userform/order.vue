

  
<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>


      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="menue in menus" :key="menue.id">
            {{ menue.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="menue in menus" :key="menue.id">
     
          <v-row>
            <v-col cols='3' v-for="food in foods(menue)" :key="food.id">
              <FoodCart :food="food">
              </FoodCart>
            </v-col>
          </v-row>
       
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


  
<script>

import FoodCart from '../material/submaterial/FoodCart.vue';
export default {
  name: 'OrderView',
  components: {

FoodCart
},
  computed: {
    menus() {this.$store.state.menus
       return this.$store.state.menus },
    // foods() {
    //   let foodlist = this.$store.state.foods
    //   //foodlist = foodlist.filter(food => food.menuId == menue)
    //   console.log(this.tab)
    //  console.log(this.$store.state.foods)
    //   return foodlist
    // }
  
  },

  data() {
    return {
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',


    }
  },
  mounted() {

  }, methods: {
    foods(menue) {
      let foodlist = this.$store.state.foods
      foodlist = foodlist.filter(food => food.menuId == menue.name)
     console.log(this.$store.state.foods)
      return foodlist
    }
  },
}
</script>
<style scoped lang="scss"></style>
  