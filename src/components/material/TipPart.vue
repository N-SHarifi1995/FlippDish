<template>
    <v-card class="tip section">
        <v-carousel cycle class="trans"  hide-delimiters direction="vertical" invertal="8000" :height="30 + 'vh'" :show-arrows="false">
            <v-carousel-item transition="slide-x-transition" v-for="(slide, i) in slides" :key="i">
                <v-row no-gutters class="roww">
                    <v-col class=" imgcontainer">
                        <v-img class='img' :src="getsrc(slide.src)"></v-img>
                        <div class="col-md-6  col-sm-8  text">
                            <h3 class="text-h3-sm text-h2-xs text-h3-sm">{{ slide.header }}</h3>
                            <p>{{ slide.explain }}</p>
                        </div>
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
                { header: 'First', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: '4.jpg' },
                { header: 'second', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'jj.jpg' },
                { header: 'third', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'ting-tian-E6DsqnZbZ4o-unsplash.jpg' },
                { header: 'forth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'pexels-edward-eyer-1049626 (1).jpg' },
                { header: 'fifth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'pexels-ilia-izhakovskii-3026182 (1).jpg' },

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

    //overflow: hidden;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-transform: uppercase;


    .trans {
        transition: all .9s ease-in-out;
        ;

        .roww {
            height: 100%;
          //  background-color: rgb(72, 0, 255);

            .imgcontainer {
                @include displayflex;
                height: 100%;
                width: 100%;

                .img {
                    //  position:absolute;
                    width: 100%;
                    height: 100%;
                    filter: brightness(40%);
                    

                }
            }
        }
    }





    .text {
        // display: flex;
        // flex-direction: column;
        padding: 0 3rem;
        color: white;
        text-align: start;
left:7px;
        position: absolute;
        height: 100%;

        h3 {
            font-size: calc(1.5rem + 0.5vw);
            ;
            padding: 2rem 0;
        }

        p {
            font-size: calc(0.8rem + 0.5vw);

        }

    }

    ;

}</style>
