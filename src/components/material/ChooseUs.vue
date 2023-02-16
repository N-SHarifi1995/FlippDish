<template>
    <v-card class="choose">
        <v-row no-gutters class="title">why choose use?</v-row>
        <v-row no-gutters>
            <v-col  v-for="data in values" :key="data.value">
                <v-progress-circular class='circle' progress-circular-underlay-stroke="rgba(map-get(red, 'base'), 0.4)"
                    :rotate="360" :size="100" :width="15" :value="value">
                    {{ value}}
                </v-progress-circular>
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
            value: 0,
            values:[ { name: "sevice", value: "100"},
                { name: "orders", value: "120"},
                { name: "seafood", value: "500"},
               ]
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
   
    background-color: #111d19;
    color: rgb(255, 255, 255);
    font-family: $font-dancing;
    padding: 3rem 0;

    .title {
        @include displayflex;
        font-size: calc(1.8rem + 0.5vw);
        color: white;
        padding: 4rem 0;

    }

    .circle {
        padding: 2rem 0;
        color: rgb(255, 255, 255);
        ;
        background-image: url(@/assets/img/mm.jpg);
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
    }

    .text {
        padding: 2rem 0;
    }
}
</style>
