<template>
    <v-card class="tip ">

        <!-- <v-row class="title">Meus</v-row> -->

        <v-row no-gutters>
            <v-carousel cycle class="trans" hide-delimiter-background>
                <v-carousel-item transition="slide-x-transition" v-for="(slide, i) in slides" :key="i">
                    <v-card class="tip">
                        <v-row class="">
                            <v-col class="text">
                                <h3>{{ slide.header }}</h3>
                                <p>{{ slide.explain }}</p>
                            </v-col>
                            <v-col class="imgcontainer">
                                <v-img class='img' :src="getsrc(slide.src)"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-carousel-item>
            </v-carousel>

        </v-row>
    </v-card>
</template>

<script>

export default {
    name: 'TipPart',
    data() {
        return {

            slides: [
                { header: 'First', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'second', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'third', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'forth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'fifth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },

            ],
        }
    },
    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`)
        }
    }

}
</script>
<style lang="scss" scoped>
.tip {
    padding: 1rem;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    .trans {
        transition: all .9s ease-in-out;
    }

    .imgcontainer {
        margin-bottom: 5rem;

        .img {
            border-radius: 50%;
            border:8px rgba(17, 16, 16, 0.39) groove;
       
          
        }
    }

    .text {
        @include displayflex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-start;
        padding: 0 3rem;
        color: white;
        text-align: start;

        h3 {
            font-size: 3rem;
            padding: 3rem 0;
        }

        p {
            font-size: 1.5rem;

        }

    }

}
</style>
