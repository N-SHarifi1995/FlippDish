<template>
  <v-card class="home"> 
    
    <HeaderOne></HeaderOne>
   <TipPart></TipPart>
  <MenuPart></MenuPart>
  <ChooseUs></ChooseUs>
   <TopFood></TopFood>
  
</v-card>
    
  
  

</template>

<script>

import HeaderOne from './material/Header.vue';
import ChooseUs from './material/ChooseUs.vue';
import MenuPart from './material/MenuPart.vue';
import TipPart from './material/TipPart.vue';

import TopFood from './material/TopFood.vue';

export default {
  name: 'HomePage',
   components: { HeaderOne, ChooseUs, MenuPart, TipPart, TopFood  },

  data: () => ({
  
  })
}
</script >
<style lang="scss" scoped>
  .home{
    background-color: transparent;
  }
</style>