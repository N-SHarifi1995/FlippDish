<template>
    <v-card class="MenuesContainer
    ">
        <v-row no-gutters class="title">Menus</v-row>
        <v-row no-gutters>
            <v-col class="col col-3" v-for="menu of menus" :key="menu.id">
                <v-card class="menu" :to="{name:'foodlist',params:{menu:menu.name}}">
                    <div class="imgcontainer">
                        <v-img class='img'  alt="user" :src="getsrc(menu.src)"></v-img>
                    </div>

                    <v-card-title>{{ menu.name }}</v-card-title>

                </v-card>
            </v-col>

        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'MenuPart',
    data() {
        return {
       
        }

    },
  computed:{
    menus(){return this.$store.state.menus}
  },
    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`)
        }
    },
    mounted() {
      
       console.log(this.menus)

       

    },

}
</script>
<style lang="scss" scoped>
.MenuesContainer {

    background-color: transparent;
    font-family: $font-dancing;
}

.title {
    @include displayflex;
    font-size: calc(1.8rem + 0.5vw);
    color: white;
    padding: 4rem 0;
}

.col {
    @include displayflex;
    padding-bottom: 8rem;

}

.menu {
    @include displayflex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.822);
    height: 15vw;
    width: 75%;
    position: relative;

    &:hover {
        transform: translateY(-15%);
        background: linear-gradient(rgba(29, 27, 27, 0.841), rgba(70, 69, 69, 0.852), rgba(113, 107, 107, 0.611), rgba(255, 252, 252, 0.304));
        transition: all 0.8s ease-in-out;
        color: white;

    }

    .imgcontainer {
        position: absolute;
        top: -30%;
        height: 50%;
        width: 50%;


        .img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }
    }

}
</style>
