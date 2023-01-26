<template>
    
    <v-card :loading="loading" class="  mx-auto my-12 foodCart" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img class='img' src="@/assets/img/steak.png"></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                            <div class="grey--text ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            $ • Italian, Cafe
                        </div>

                        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <v-card-text>
                        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve">
                            Reserve
                        </v-btn>
                    </v-card-actions>
                </v-card>
</template>

<script>

export default {
    name: 'FoodCart',
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
 .foodCart {
        @include displayflex;
        background-color: transparent;
        flex-direction: column;
      

        .img {
            max-height: 12rem;
            max-width: 12rem;
        }
    }
</style>
