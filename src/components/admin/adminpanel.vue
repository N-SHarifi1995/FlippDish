<template>
  <v-card class="containner">
    <v-tabs  dark color="secondary" class="tabs">
      <v-tab color="success" class="b">foods</v-tab>
      <v-tab class="b">menus</v-tab>
      <v-tab class="b">users</v-tab>
      <v-tab-item v-for="n in 3" :key="n" class='smt' >
        <v-container class="view">
          <component :is="component[n - 1]" />

        </v-container>
      </v-tab-item>
    </v-tabs>

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
      component: [FoodPanel, MenuPanel]
    }

  }, 



}
</script>
<style lang="scss" scoped>
.containner {

  margin-top: 4rem;

}

.tabs {
  @include displayflex;
  background-color:#111d19;
  flex-direction: column;
  color: aliceblue;
.smt{ background-color: #111d19;}
  
  .b {
    background-color: #111d19;
    color: white;
    
  }
}</style>
