<template>
  <v-card class="adminpanel">
    <v-tabs v-model="tab" dark centered background-color="#000806" color="#ffc800">
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1" class="b">
          foods
        </v-tab>
        <v-tab href="#tab-2" class="b">
          Menues
        </v-tab>
        <v-tab href="#tab-3" class="b">
          Users
        </v-tab>
      </v-tabs>
    
      <v-tabs-items v-model="tab" class="tabs">
        <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i" class='smt'>
          <v-card flat class="content">
            <keep-alive>
              <component :is="component[i - 1]" />
            </keep-alive>
          </v-card>
        </v-tab-item>
      </v-tabs-items>


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
      text: 'ddddddddddddddddddddddddddddddddd',
      component: [FoodPanel, MenuPanel]
    }

  },



}
</script>
<style lang="scss" scoped>
.adminpanel {
  @include displayflex;
  flex-direction: column;
  min-height: 100vh;
  .tabs {
    background-color: $bgcolor;
   
  }
  .content {
    background-color:  $bgcolor;
    min-height: 100vh;
   max-width: 80vw;
  
  }

}</style>
