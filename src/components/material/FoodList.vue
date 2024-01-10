<template>
    <v-card class="section">
        <p class="header">{{  mymenu }}</p>
        <v-row>
            <v-col  v-for="food in foods" :key="food.id">
                <FoodCart :food="food">
                </FoodCart>
            </v-col>
        </v-row>



    </v-card>
</template>
    
<script>

import FoodCart from './submaterial/FoodCart.vue';
export default {
    name: "FoodList",
    data() {
        return {
        mymenu:this.$route.params.menu,
            model: 0
        };
    },
    computed: {
        foods() {
            let foodlist = this.$store.state.foods
            foodlist = foodlist.filter(food => food.menuId == this.mymenu)
            console.log(this.$store.state.foods)
            return foodlist
        }
    },


    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`);
        },
        getImageUrl(imageId) {
            return `https://picsum.photos/600/400/?image=${imageId}`
        },

    },
    components: {

        FoodCart
    }
}
</script>
<style lang="scss" scoped> 
.section {
  height:100vh;
  .header{
font-size:4rem;
color: white;
  }
    }

</style>
    