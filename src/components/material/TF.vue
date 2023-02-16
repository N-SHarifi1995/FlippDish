<template>
    <v-card class="TopFood ">
        <v-row no-gutters class="title">popular Food</v-row>
        <v-carousel v-model="model" :show-arrows="false" cycle class="trans" hide-delimiter-background>
            <!--  -->
            <v-carousel-item v-for="i in 4" :key="i" class="items">
                <v-row no-gutters >
                    <v-col class=" container ">
                        <FoodCart :food="food" v-for="food in foods.filter(j => j.menuId == i)" :key="food.id">
                        </FoodCart>
                    </v-col>

                </v-row>
              
            </v-carousel-item>



        </v-carousel>


    </v-card>

    <!-- -->

</template>

<script>

import FoodCart from './submaterial/FoodCart.vue';
export default {
    name: "TopFood",
    data() {
        return {
            foods: [
                { id: '1', name: "First", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '2', name: "second", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '3', name: "third", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '4', name: "forth", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '5', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '6', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '7', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '8', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '9', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '10', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '11', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '12', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '13', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '14', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '15', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { id: '16', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            ],
            model: 0
        };
    },
    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`);
        }
    },
    components: { FoodCart }
}
</script>
<style lang="scss" scoped>
.TopFood {
    // padding: 1rem;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;


    .trans {
       
        .items {
           padding-bottom: 2rem;  
 // background-color: rgb(255, 0, 0);
            .container {
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                 padding: 1rem 0;
                 margin-bottom: 1rem;
          //  background-color: aqua;
            }
        }

    }



    .title {
        @include displayflex;
        font-size: calc(1.8rem + 0.5vw);
        color: white;
        //padding: 4rem 0;
        font-family: $font-dancing;

    }

}
</style>
