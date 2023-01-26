<template>
    <v-card class="TopFood ">

        <v-carousel v-model="model" :show-arrows="false" cycle class="trans" hide-delimiter-background>
        
                <v-carousel-item transition="slide-x-transition" v-for="i in 4" :key="i">
                    <v-row> 
                        <v-col col="3" class="col" v-for="i in 4" :key="i">
                            <FoodCart></FoodCart>
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
            slides: [
                { header: "First", explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { header: "second", explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { header: "third", explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { header: "forth", explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
                { header: "fifth", explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
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
    padding: 1rem;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
.col{  padding:0 3rem;}

}
</style>
