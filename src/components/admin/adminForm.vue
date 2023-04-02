<template>
  <v-card class="form">
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <form class="fform" color='#ffffff'>
          <v-text-field class="input" dark color='#ffffff' v-model="recivedData.name" :counter="10" label="Name"
            required></v-text-field>
          <v-combobox dark v-if="type === 'food'" v-model="recivedData.select" item-text="text" item-value="value"
            color='#ffffff' :items="items" label="Menus"></v-combobox>
          <v-text-field class="input" dark color='#ffffff' v-model="recivedData.src" :counter="10" label="image"
            required></v-text-field>
          <v-text-field dark v-model="recivedData.price" v-if="type === 'food'" color='#ffffff' label="price"
            required></v-text-field>
          <v-textarea v-model="recivedData.explain" v-if="type === 'food'" solo dark name="input-7-4" color='#ffffff'
            label="Explain"></v-textarea>
          <div class="btns"> <v-btn class="mr-4" @click="submit">
              add
            </v-btn>
            <v-btn class="mr-4" @click="edite(food.id)">
              edite
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </div>

        </form>
      </v-col></v-row>


  </v-card>
</template>

<script>

import { collection, updateDoc, doc, addDoc } from "firebase/firestore";
import dbase from '@/firebase/index'


export default {
  name: "adminForm",
  data() {
    return {
      select: [],
      items: [
        { text: 'brakfast', value: '1' },
        { text: 'drinks', value: '4' },
        { text: 'fastfood', value: '3' },
        { text: 'seafood', value: '2' },
      ],
      recivedData: this.newObj
    };
  },
  props: ['newObj', 'type'],
  methods: {

    async submit() {
      if (this.type === 'food') {
        try {
          const myfood = collection(dbase, "Food");
          await addDoc(myfood, {
            name: this.recivedData.name,
            explain: this.recivedData.explain,
            menuId: this.recivedData.select.value,
            price: this.recivedData.price,
            src: this.recivedData.src

          })
          this.clear()
        }
        catch (er) {
          console.error(er);
        }
      } else if (this.type === 'menu') {
        console.log('m')
        try {
          const myMenu = collection(dbase, "Menus");
          await addDoc(myMenu, {
            name: this.recivedData.name,
            src: this.recivedData.src
          })
          this.clear()

        }
        catch (er) {
          console.error(er);
        }
      }



    },
    async edite(id) {
      try {
        const myFood = doc(dbase, 'Food', id);
        updateDoc(myFood, this.food);
        this.clear()
      }
      catch (err) { console.log(err) }

    }



    ,
    clear() {
      this.recivedData.name = ''
      this.recivedData.price = ''
      this.recivedData.select = []
      this.recivedData.explain = ''
      this.recivedData.src = ''

    },

  },
  mounted() {
    console.log(this.newObj)
  }
}
</script>
<style lang="scss" scoped>
.form {
  background-color: transparent;
  color: aliceblue;

  .fform {
    color: aliceblue;

    .btns {
      @include displayflex
    }
  }

  .input {
    color: aliceblue;
  }
}
</style>
