<template>
    <v-hover v-slot="{ hover }" open-delay="200">
        <div class="  mx-auto my-12 foodCart" max-width="374">


            <v-img class='img' src="@/assets/img/steak.png"></v-img>

            <v-card-title class="title">{{ food.name }}</v-card-title>

            <v-card-text>
                <v-row align="center" class="mx-0">
                    <v-rating :value="4.5" color="#ffffffc7" dense half-increments readonly size="14"></v-rating>

                    <div class="grey--text ms-4" color="#ffffffc7">
                        4.5 (413)
                    </div>
                </v-row>


                <!-- <p class="d-hidden explain "  :class="{ 'onhover': hover }">{{ food.explain }}</p> -->
                <v-fade-transition>

                    <div v-if="hover">
                        <p class="explain ">{{ food.explain }}</p>
                    </div>
                </v-fade-transition>

                <div class="my-4 text-subtitle-1">
                    $ • {{ food.price }}
                </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>


            <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="addToCart">
                    Reserve
                </v-btn>
            </v-card-actions>
        </div>
    </v-hover>
</template>

<script>
import { app, dbase } from '@/firebase/firebase'
import { getAuth } from "firebase/auth";
import { collection, doc, addDoc } from "firebase/firestore";
export default {
    name: 'FoodCart',
    data() {
        return {


        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        }
    },
    props: ['food'],
    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`)
        },
        checkCart(myfood) {
            let check
            this.cart.forEach(i => {
                if (i.name === myfood.name) {
                    
                    check = this.cart.indexOf(i)
                    console.log(check,i.name )
                }
               

            });
            console.log(check)
            return check
        },
        async addToCart() {
            let user = getAuth(app).currentUser
            console.log(user)
            if (user) {
                // 
                if (this.checkCart(this.food)!=null) {
                    console.log(this.checkCart(this.food))
                   this.$store.dispatch('addQuantit',this.checkCart(this.food))
                    
                } else {
                    try {

                        const userRef = doc(collection(dbase, "users"), user.uid);
                        await addDoc(collection(userRef, "cart"), {
                            name: this.food.name,
                            price: this.food.price,
                            quantity: 1
                        });


                    } catch (error) {
                        alert(error)
                    }
                }


            } else {
                this.$router.replace({ name: 'SignIn' })
            }

        },

    }

}
</script>
<style lang="scss" scoped>
.foodCart {
    @include displayflex;
    background-color: transparent;
    flex-direction: column;
    color: rgb(255, 255, 255);
    height: 100%;
    margin: 0 2rem;
    padding: 1rem;
    box-shadow: -7px 10px 26px -3px rgba(191, 191, 189, 0.56);
    border-top-left-radius: 30%;
    border-bottom-right-radius: 30%;

    .img {
        max-height: 12rem;
        max-width: 12rem;
        height: 12vw;
        width: 12vw;

    }

    .title {
        font-size: calc(1.2rem + 0.5vw);
        padding: 0.5rem 0;
    }

    .explain {
        //display: none;
        //transform: translateY(-200%);
        // opacity:0;
        text-align: left;
        text-justify: auto;
        padding: 0.5rem 0;
        font-size: calc(0.5rem + 0.5vw);
        max-width: min-content;
        transition: all 1s ease-in-out;


    }

    .onhover {
        // transition:all 1s ;
        // transform: translateY(+10%);
        //box-shadow: -7px 10px 26px -3px rgba(191, 191, 189, 0.56);
        display: flex;
        opacity: 1;
    }
}
</style>
