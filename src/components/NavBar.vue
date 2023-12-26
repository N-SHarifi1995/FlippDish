<template>
    <v-card  class="navbar" color="rgba(0,0,0,0)">
        <v-toolbar class="toolbar" color="rgba(0,0,0,0)">
            <v-btn fab icon class="  ">

                <v-icon color="#ffc800" @click='home'>mdi-home</v-icon>
            </v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon class="" v-bind="attrs" v-on="on">
                        <v-icon color="#ffc800">mdi-account-circle-outline</v-icon>
                    </v-btn>

                </template>
                <v-list class="list">
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'SignUp' }">SignUp</router-link>
                        </v-list-item-title>
                    </v-list-item>

                    
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'SignIn' }"> SignIn</router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <a class="link" @click='signout'> SignOut</a>
                        </v-list-item-title>

                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'adminPanel' }"> Admin</router-link>
                        </v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-menu>
           
        
        </v-toolbar>
    </v-card>
</template>

<script>
import { app } from '@/firebase/firebase'
import { signOut, getAuth } from "firebase/auth";
export default {
    name: 'NavBar',

    data: () => ({

    }),
    methods: {
        signout() {
            const auth = getAuth(app);
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });

        },
        home(){
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar {
   
    top: 0;
    width: 100%;
    right: 0;
    z-index: 10;

}.list{
    background-color:rgba(8, 8, 8, 0.073) ;
    .link{
    text-decoration: none;
    color:$newyellow;
    transition:  text-shadow 1s;
    &:hover{
        text-shadow: 1px 1px 6px rgb(255, 255, 0);
        
    }
};
}

</style>
