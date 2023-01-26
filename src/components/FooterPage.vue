<template>
    <v-card class="Footer">
        
       
                <v-footer  padless>
                    <v-row justify="center" no-gutters>
                        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                            {{ link }}
                        </v-btn>
                        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                        </v-col>
                    </v-row>
                </v-footer>
           

    </v-card>
</template>

<script>

export default {
    name: 'TopFood',
    data() {
        return {

            slides: [
                { header: 'First', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'second', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'third', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'forth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },
                { header: 'fifth', explain: 'This site can’t be reachedCheck if there is a typo in loremipsum.io.If spelling is correct, try running Windows Network Diagnostics.DNS_PROBE_FINISHED_NXDOMAIN', src: 'mm.jpg' },


            ],
            links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
        }
    },
    methods: {

    }

}
</script>
<style lang="scss" scoped>
.Footer {
    padding: 1rem;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
</style>
