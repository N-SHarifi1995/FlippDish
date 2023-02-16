<template>
    <v-card class="tip">

        <!-- <v-row class="title">Meus</v-row> -->

       
            <v-carousel cycle class="trans" hide-delimiter-background height="300" :show-arrows="false">
                <v-carousel-item transition="slide-x-transition" v-for="(slide, i) in slides" :key="i">

                    <v-row  no-gutters class="roww">
                        <v-col   class="col-md-6  col-sm-8  text">
                            <h3 class="text-h3-sm text-h2-xs text-h3-sm">{{ slide.header }}</h3>
                            <p>{{ slide.explain }}</p>
                        </v-col>
                        <v-col   class="col-md-6  col-sm-4  imgcontainer">
                            <v-img class='img' :src="getsrc(slide.src)"></v-img>
                        </v-col>
                    </v-row>

                </v-carousel-item>
            </v-carousel>

      
    </v-card>
</template>

<script>

export default {
    name: 'TipPart',
    data() {
        return {

            slides: [
                { header: 'First', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'second', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'nn.jpg' },
                { header: 'third', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'ss.jpg' },
                { header: 'forth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'jj.jpg' },
                { header: 'fifth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'kk.jpg' },

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
    font-family:  Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   

    .trans {
        transition: all .9s ease-in-out;
    
    }

    .roww {
        height: 100%
    }

    .imgcontainer {
        // margin-bottom: 5rem;
        //background-color: red;
        height: 100%;

        .img {
            border-radius: 50%;
            height: 100%;
            width: 100%;
            border: 8px rgba(17, 16, 16, 0.39) groove;


        }
    }

    .text {
        // display: flex;
        // flex-direction: column;
        padding: 0 3rem;
        color: white;
        text-align: start;
        //background-color: blue;
        height: 100%;

        h3 {
           font-size:calc(1.5rem + 0.5vw);;
            padding: 2rem 0;
        }

        p {
            font-size:calc(0.8rem + 0.5vw);

        }

    };

}
</style>
