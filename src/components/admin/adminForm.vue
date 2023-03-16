<template>
  <v-card class="form">
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <form class="fform" color='#ffffff'>
          <v-text-field class="input" dark color='#ffffff' v-model="name" :counter="10" label="Name"
            required></v-text-field>
          <v-combobox dark v-model="select" item-text="text" item-value="value" color='#ffffff' :items="items"
            label="Menus"></v-combobox>
            <v-text-field class="input" dark color='#ffffff' v-model="src" :counter="10" label="image"
            required></v-text-field>
          <v-text-field dark v-model="price" color='#ffffff' label="price" required></v-text-field>
          <v-textarea v-model="explain" solo dark name="input-7-4" color='#ffffff' label="Explain"></v-textarea>
          <div class="btns"> <v-btn class="mr-4" @click="submit">
              add
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

import { collection,  addDoc } from "firebase/firestore";
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
      name: '',
      explain: '',
      menuId: 1,
      price: '',
      src:''
    };
  },
  methods: {

    async submit() {
      try {
        const myfood = collection(dbase, "Food");
        await addDoc(myfood, {
          name: this.name,
          explain: this.explain,
          menuId: this.menuId,
          price: this.price,
         src: this.src

        })
       // this.$parent.$emit('refresh')
       
      }
      catch (er) {
        console.error(er);
      }


    },
    clear() {
      this.name = ''
      this.price = ''
      this.select = []
      this.explain = ''
      this.src=''

    },

  },
}
</script>
<style lang="scss" scoped>
.form {
  background-color: transparent;
  color: aliceblue;

  .fform {
    color: aliceblue;
    .btns{@include displayflex}
  }

  .input {
    color: aliceblue;
  }
}
</style>
