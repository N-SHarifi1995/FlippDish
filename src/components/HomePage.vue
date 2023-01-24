<template>
  <v-card class="home"> 
    
    <HeaderOne></HeaderOne>
   <ChooseUs></ChooseUs>
  <MenuPart></MenuPart>
    <ChooseUs></ChooseUs>
  <p>jmjjjjjjjjjjjjjjjjjjjjjjjj</p>
</v-card>
    
  
  

</template>

<script>

import HeaderOne from './material/Header.vue';
import ChooseUs from './material/ChooseUs.vue';
import MenuPart from './material/MenuPart.vue';

export default {
  name: 'HomePage',
   components: { HeaderOne,ChooseUs,MenuPart },

  data: () => ({
  
  })
}
</script >
<style lang="scss" scoped>
  .home{
    background-color: transparent;
  }
</style>