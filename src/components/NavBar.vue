<template>
    <v-card flat tile class="navbar" color="rgba(0, 0, 0,0)">
        <v-toolbar class="toolbar" color="rgba(0,0,0,0)">
            <v-btn fab icon class=" d-none d-sm-flex ">

                <v-icon color="#ffc800">mdi-home</v-icon>
            </v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab icon class="d-none d-sm-flex" v-bind="attrs" v-on="on">
                        <v-icon color="#ffc800">mdi-account-circle-outline</v-icon>
                    </v-btn>

                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'signUp' }">ایجاد حساب </router-link>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'wishList' }"> برگزیده ها</router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'signIn' }"> ورود</router-link>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <a class="link" @click='signout'> خروج</a>
                        </v-list-item-title>

                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <router-link class="link" :to="{ name: 'Admin' }"> ادمین</router-link>
                        </v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-menu>
            <!-- <v-toolbar-title color="#ffc800">FLIPDISH</v-toolbar-title>

            <v-spacer></v-spacer>

          
          
            <v-btn fab icon class="cart d-none d-sm-flex "  }">
                <span class="icon">{{ quantity }}</span>
                <v-icon color="#ffc800">mdi-cart</v-icon>
            </v-btn> -->



            <!-- <v-app-bar-nav-icon class="d-flex d-sm-none" color="#ffc800"
                @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

            <!-- 
            <v-navigation-drawer v-model="drawer" absolute height="auto" right class="mt-15">
                <v-list dense>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">



                        <v-list-item-group>
                            <v-list-item-title>کاربر</v-list-item-title>
                            <v-list-item v-if="!token">
                                <v-list-item-title>
                                    <router-link class="link" :to="{ name: 'signUp' }">ایجاد حساب </router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item v-else>
                                <v-list-item-title>
                                    <router-link class="link" :to="{ name: 'wishList' }"> برگزیده ها</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item v-if="!token">
                                <v-list-item-title>
                                    <router-link class="link" :to="{ name: 'signIn' }"> ورود</router-link>
                                </v-list-item-title>
                            </v-list-item>


                            <v-list-item v-else>
                                <v-list-item-title>
                                    <a v-if="token" class="link" @click='signOut()'> خروج</a>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item>
                            <v-list-item-title>
                                <router-link class="link" :to="{ name: 'cartPage' }"> سبدخرید</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link class="link" :to="{ name: 'Admin' }">ادمین</router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer> -->


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

        }
    }
}
</script>
<style lang="scss" scoped>
.navbar {
    position: absolute;
    top: 0;
    width: 100%;
    right: 0;
    z-index: 10;

}
</style>
