<template>
<div>
   

    <v-row no-gutters class="title">popular Food</v-row>
    <swiper
      :slides-per-view="4"
      :space-between="30"
      loop
      :autoplay ="true"
      :navigation="true"
     
    >
    <!-- v-for="food in foods" :key="food.id"  @swiper="onSwiper"
      @slideChange="onSlideChange"-->
      <swiper-slide
      v-for="food in foods" :key="food.id"
        class="test items"
        :class="{test_2: true}"
      >
      <FoodCart :food="food" >
                        </FoodCart>
                        
      </swiper-slide>
    </swiper>
    
  </div>

    <!-- -->

</template>

<script>

import { Navigation, Pagination, Autoplay} from 'swiper'

import { SwiperCore, Swiper, SwiperSlide  } from 'swiper-vue2'
      

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination,Autoplay])

 import FoodCart from '../material/submaterial/FoodCart.vue';
export default {
    name: "userPanel",
    data() {
        return {
            // foods: [
            //     { id: '1', name: "First", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '2', name: "second", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '3', name: "third", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '4', name: "forth", menuId: "2", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '5', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '6', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '7', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '8', name: "fifth", menuId: "3", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '9', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '10', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '11', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '12', name: "fifth", menuId: "1", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '13', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '14', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '15', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            //     { id: '16', name: "fifth", menuId: "4", price: '2000$', explain: "This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN", src: "mm.jpg" },
            // ],
            model: 0
        };
    },
    inject:['foods'],
    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`);
        },
        getImageUrl(imageId) {
            return `https://picsum.photos/600/400/?image=${imageId}`
        },
        // onSwiper(swiper) {
        //     console.log(swiper)
        // },
        // onSlideChange() {
        //     console.log('slide change')
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
.TopFood {
    padding: 1rem;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
.col{  padding:0 3rem;}

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
