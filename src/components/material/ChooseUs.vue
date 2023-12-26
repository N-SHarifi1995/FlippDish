<template>
    <v-card class="choose section d-none d-sm-block">
        <v-row no-gutters>
            <v-col class="titleQ">
                <p>why choose use?</p>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="container"  >
              
                <!-- <v-progress-circular class='circle' :rotate="360" :size="100" :width="5" :value="valueOne">
                    {{valueOne}}
                </v-progress-circular> -->
                <p class='circle' >
                    {{valueOne}}
                </p>
                <p class="text">satisfacation with service</p>
            </v-col>
            <v-col class="container">
                <p class='circle' >
                    {{valueOne}}
                </p>
                <p class="text">satisfacation with service</p>
            </v-col>
            <v-col class="container">
                <p class='circle' >
                    {{valueOne}}
                </p>
                <p class="text">satisfacation with service</p>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'ChooseUs',
    data() {
        return {
            interval: {},
            value:[0,0,0],
           valueOne:0 ,
           valueTow:0 ,
            val: [120,140,50]
        }
    },
    computed :{
       
    },

    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.valueOne ===1000) {
                return (this.valueOne = 0)
            }
           else{this.valueOne += 100} 
           if (this.valueTow ===2000) {
                return (this.valueTow = 0)
            }
           else{this.valueTow += 100} 
        }, 200)
    },
}
</script>
<style lang="scss" scoped>
.choose {
    justify-content: space-around;
    flex-direction: column;
    color: rgb(255, 255, 255);
margin-top: 2rem;
   
.container{
    @include displayflex;
    flex-direction: column;
   
    .circle {
        @include displayflex;
        padding: 2rem 0;
        color: rgb(254, 252, 252);
        font-weight: 800;
     background-image: url(@/assets/img/bg.jpg) ;
     background-repeat: repeat;
        background-attachment: fixed;
       //background-size: cover;
        background-position: center;
        border-radius:50%;
       height:8vw;
       width: 8vw;
      
       
    }}
    

    .text {
        padding: 2rem 0;
    }
}
</style>
