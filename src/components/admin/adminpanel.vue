<template>
  
    <v-card class="containner">
      <v-tabs v-model="tab" color="error" align-tabs="end" bg-color="primary" class="tabs">
        <v-tab class="b" :value="1">users</v-tab>
        <v-tab class="b" :value="2">foods</v-tab>
        <v-tab class="b" :value="3">menus</v-tab>
        
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 3" :key="n" :value="n">
          <v-container fluid>
            <component :is="component[n-1]" />
        
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>

</template>

<script>
import FoodPanel from './foodPanel.vue'
import MenuPanel from './menupanel.vue'
export default {
  name: 'adminPanel',
  data() {
    return {
      tab: 0,
      component:[FoodPanel,MenuPanel]
    }

  },components:{FoodPanel,MenuPanel}



}
</script>
<style lang="scss" scoped>
.containner {
  @include displayflex;
  flex-direction: column;
 
background-color: rgb(3, 25, 27);
  margin-top: 4rem;

}

.tabs {
  @include displayflex;
 

  .b {
    background-color: rgb(47, 255, 0);
  }
}
</style>
