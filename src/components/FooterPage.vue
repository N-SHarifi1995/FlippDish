<template>
    
                <v-card  padless class="Footer">
                    <v-row justify="center" no-gutters>
                        <v-btn v-for="link in links" :key="link"  text rounded class="my-2 btn">
                            {{ link }}
                        </v-btn>
                        <v-col class=" lighten-2 py-4 text-center white--text" cols="12">
                            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                        </v-col>
                    </v-row>
                </v-card>
 
</template>

<script>

export default {
    name: 'TopFood',
    data() {
        return {

        
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
    color: white;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
.btn{color: white;}
}
</style>
