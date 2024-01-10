<template>
  <v-card class="header">
   
     <v-row no-gutters>
      <v-col class=" banner-text"  md="4" sm="6" >
        <h3  >FlipDish</h3>
        <p class="pt-5">taste of life</p>
      </v-col>
      <v-col class="img-container"  md="8" sm="6">
        <v-img class='img' :src="require('@/assets/img/Meat on Black.jpg')"></v-img>
      </v-col>
    </v-row>

  </v-card>

</template>

<script>

export default {
  name: 'HeaderOne',
  components: {  },

  data: () => ({
  })
}
</script >
<style lang="scss" scoped>
.header {
 background:$bgcolor;
  //max-height: 70vh;
  .img-container {
    //
    padding: 0;
    //  margin: 0;
    box-sizing: border-box;

    // @include displayflex;
    .img {
      //aspect-ratio:inherit
      height: 100%;
      width: 100%;
      //object-fit: cover;

      //width: auto
    }
  }


  .banner-text {
    @include displayflex;
    // background-color: #111d19;
    background-color: #000806;
    font-size: 6vw;
    font-weight: 900;
    color: white;
    flex-direction: column;
   font-family: $font-dancing;
    padding: 3rem 0;

    p {
      font-size: 3vw;
    }
  }
}
</style>