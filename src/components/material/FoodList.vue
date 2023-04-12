<template>
    <v-card class="foodlist">
        <h3 class="header">{{  mymenu }}</h3>
        <v-row>
            <v-col cols='3' v-for="food in foods" :key="food.id">
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
.foodlist {
    padding: 1rem;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    .header {
        margin: 5rem 3rem 0;
        @include displayflex;
    font-size: calc(1.8rem + 0.5vw);
    color: white;
    padding: 4rem 0;
    }

}

.items {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    margin-bottom: 1rem;
    //  background-color: aqua;
}
</style>
    