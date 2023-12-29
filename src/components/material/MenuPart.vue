<template>
    <v-card class="MenuesContainer ">
        <v-row no-gutters>
            <v-col class="titleQ mt-5">
                <p class="head">Menues</p>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="col col-3 mt-8" v-for="menu of menus" :key="menu.id">
                <v-card class="menu" :to="{ name: 'foodlist', params: { menu: menu.name } }">
                    <div class="imgcontainer d-none d-sm-flex">
                        {{ menu.name }}
                        <!-- <v-img class='img' alt="user" :src="getsrc(menu.src)"></v-img> -->
                    </div>

                    <v-icon color="#ffc800" class="sm-small" :size="4+'vw'">{{ menu.src }}</v-icon>
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
    computed: {
        menus() { return this.$store.state.menus }
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
    max-height: 60vh;
    padding-bottom: 3rem;

    .head {
        font-size: 4vw;
    }
}

.col {
    @include displayflex;
    padding-bottom: 8rem;

}

.menu {
    @include displayflex;
    flex-direction: column;
    //  background-image: url(@/assets/img/ee.jpg) ;
    // background-repeat: repeat;
    // background-position: center;

    height: 13vw;
    width: 70%;
    position: relative;

    background-color: rgba(35, 35, 35, 0.1);

   // border: 1px solid rgba(235, 235, 235, 0.1);
    border-radius: 15px;
    color: white;
    // display: flex;

    font-weight: 300;
    letter-spacing: .375ch;
    justify-content: center;
    margin: auto;
    position: relative;
    text-transform: uppercase;
  .imgcontainer {
        @include displayflex;
        position: absolute;
        background: rgb(184, 183, 184);
        text-overflow: ellipsis;
        //background: linear-gradient(171deg, rgba(184,183,184,1) 0%, rgba(0,0,0,1) 50%, rgba(159,159,159,1) 95%);background: rgb(208,202,208);
        background: linear-gradient(171deg, rgba(208, 202, 208, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(50, 50, 50, 1) 75%);
        top: -20%;
        height: 20%;
       padding:0 1rem ;
    //width: 50%;
       max-width: 80%;
       font-size: 1.2vw;
        p{ 
            width:90%;
        }
       
    }

    &:hover {
        transform: translateY(-5vh);
        background: rgb(58, 59, 59);
        background: radial-gradient(circle, rgb(105, 110, 80) 0%, rgba(0, 0, 0, 1) 53%);
        transition: all 0.8s ease-in-out;
        color: white;

    }

  
}</style>
