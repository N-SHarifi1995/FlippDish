<template>
    <v-card class="choose">
        <v-row class="title">why choose use?</v-row>
        <v-row>
            <v-col>
                <v-progress-circular class='circle'  progress-circular-underlay-stroke="rgba(map-get(red, 'base'), 0.4)" :rotate="360" :size="100" :width="15" :value="value">
                    {{ value }}
                </v-progress-circular>
            <p class="text">satisfacation with service</p></v-col>
            <v-col>
                <v-progress-circular class='circle' :rotate="360" :size="100" :width="15" :value="value">
                    {{ value }}
                </v-progress-circular>
            <p class="text">satisfacation with Quality</p></v-col>
            <v-col>
                <v-progress-circular class='circle' :rotate="360" :size="100" :width="15" :value="value">
                    {{ value }}
                </v-progress-circular>
            <p class="text">satisfacation with Quality</p></v-col>

        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'ChooseUs',

    data() {
        return {
            interval: {},
            value: 0,
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    },
}
</script>
<style lang="scss" scoped>
.choose {
    // background-image:linear-gradient( #111d19, #111d19),
    // url(@/assets/img/bg.jpg);
    // background-position: center;
    // background-size: cover;
    // background-attachment: fixed;
    background-color: #111d19;
     color: rgb(255, 255, 255);
        font-family: $font-dancing;
        padding: 3rem 0;

    .title {
        @include displayflex;
        font-size: 3vw;
       
    }
    .circle{
        padding: 2rem 0;
         color: rgba(255, 255, 255, 0.996);
        ;
        background-image: url(@/assets/img/mm.jpg);
       background-size:cover;
       background-position: center;
       border-radius: 50%;
    }
    .text{
          padding: 2rem 0;
    }
}
</style>
