<template>
  <v-card class="header">
   
    <v-row>
      <v-col class="col-4 banner-text">
        <h3>FlipDish</h3>
        <p>taste of life</p>
      </v-col>
      <v-col class="col-8 img-container">
        <v-img class='img' :src="require('@/assets/img/pexels-ilia-izhakovskii-3026182\ \(1\).jpg')"></v-img>
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
  
  //max-height: 70vh;
  .img-container {
    //background: red;
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
    background-color: #111d19;

    //background: rgb(106, 255, 0);
    font-size: 5vw;
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