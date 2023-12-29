<template>
    <div class="section">
        <div no-gutters class="titleQ"> Food</div>
        <swiper class="swiper" :slides-per-view="5" :pauseOnMouseEnter="true"  :autoplay="true" :space-between="40" loop :navigation="true">
            <swiper-slide v-for="food in foods" :key="food.id" class=" items">
                <FoodCart :food="food">
                </FoodCart>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import {  Pagination, Autoplay } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'


// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([ Pagination, Autoplay])

import FoodCart from './submaterial/FoodCart.vue';
export default {
    name: "TopFood",
    data() {
        return {

            model: 0
        };
    },
    computed: {
        foods() {
            return this.$store.state.foods
        }
    },

    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`);
        },
        // getImageUrl(imageId) {
        //     return `https://picsum.photos/600/400/?image=${imageId}`
        // }

    },
    components: {
        Swiper,
        SwiperSlide,
        FoodCart
    }
}
</script>
<style lang="scss" scoped>
.section {
    .titleQ {
        @include displayflex;
        font-size: 4vw;
        padding: 0;
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
}
</style>
