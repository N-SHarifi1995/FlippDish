<template>
    <v-card class="MenuesContainer
    ">
        <v-row class="title">Meus</v-row>
        <v-row>
            <v-col class="col">
                <v-card class="menu">
                    <v-avatar size="138" class="imgcontainer"> <v-img class='img' alt="user"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    </v-avatar>

                    <v-card-title>Brakefast</v-card-title>

                </v-card>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <v-card class="menu">


                    <v-avatar size="138" class="imgcontainer"> <v-img class='img' alt="user"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    </v-avatar>

                    <v-card-title>Brakefast</v-card-title>

                </v-card>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <v-card class="menu">


                    <v-avatar size="138" class="imgcontainer"> <v-img class='img' alt="user"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    </v-avatar>

                    <v-card-title>Brakefast</v-card-title>

                </v-card>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <v-card class="menu">


                    <v-avatar size="138" class="imgcontainer"> <v-img class='img' alt="user"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    </v-avatar>

                    <v-card-title>Brakefast</v-card-title>

                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'MenuPart',


}
</script>
<style lang="scss" scoped>
.MenuesContainer {

    background-color: transparent;
    font-family: $font-dancing;
}

.title {
    @include displayflex;
    font-size: 3vw;
    color: white;
    padding: 4rem 0;
}

.col {
    @include displayflex;padding-bottom: 8rem;
   
}

.menu {
    @include displayflex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.822);
    height: 15rem;
    width: 75%;
    position: relative;

    &:hover {
        transform: translateY(-15%);
        background: linear-gradient(rgba(29, 27, 27, 0.841), rgba(70, 69, 69, 0.852), rgba(113, 107, 107, 0.611), rgba(255, 252, 252, 0.304));
        transition: all 0.8s ease-in-out;
    }

    .imgcontainer {
        position: absolute;
        top: -3rem;
        .img {
            height: 100%;
            width: 100%;
        }
    }

}
</style>
