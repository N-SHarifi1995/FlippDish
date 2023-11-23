<template>
  <v-card class="home">

    <HeaderOne></HeaderOne>
    <indexPart></indexPart>
    <ChooseUs></ChooseUs>
    <MenuPart></MenuPart>
    <TipPart></TipPart>
    <TopFood></TopFood>
    
  </v-card>
</template>

<script>

import HeaderOne from './material/Header.vue';
import ChooseUs from './material/ChooseUs.vue';
import MenuPart from './material/MenuPart.vue';
import TipPart from './material/TipPart.vue';
import TopFood from './material/TopFood.vue';
import indexPart from './index.vue';

export default {
  name: 'HomePage',
  components: { HeaderOne, ChooseUs, MenuPart, TipPart, TopFood ,indexPart},

  data: () => ({

  })
}
</script >
<style lang="scss" scoped>
.home {
  background-color: transparent;
}
</style>