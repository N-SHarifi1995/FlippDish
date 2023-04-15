<template>
  <v-card class="form">
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <form class="fform" color='#ffffff'>
          <v-text-field class="input" dark color='#ffffff' v-model="recivedData.name"  label="Name"
            required></v-text-field>
          <v-combobox dark v-if="type === 'food'" v-model="select" 
            color='#ffffff' :items="items" label="Menus"></v-combobox>
          <v-text-field class="input" dark color='#ffffff' v-model="recivedData.src"  label="image"
            required></v-text-field>
          <v-text-field dark v-model="recivedData.price" v-if="type === 'food'" color='#ffffff' label="price"
            required></v-text-field>
          <v-textarea v-model="recivedData.explain" v-if="type === 'food'" solo dark name="input-7-4" color='#ffffff'
            label="Explain"></v-textarea>
          <div class="btns"> <v-btn class="mr-4" @click="submit">
              add
            </v-btn>
            <v-btn class="mr-4" @click="edite(recivedData.id)">
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
import {dbase} from '@/firebase/index'

import Swal from 'sweetalert2'
export default {
  name: "adminForm",
  data() {
    return {
     select:null,
      items: [
         'brakfast' ,
         'drinks', 
         'fastfood',
         'seafood',
      ],
      recivedData: this.newObj
    };
  },
  props: ['newObj', 'type'],
  watch:{
    select(newValue, oldValue){
      if(newValue!= oldValue){
        
        this.recivedData.menuId=newValue
        console.log( this.recivedData.menuId)
      }
    }
  },
 
  methods: {

    async submit() {
      let mycolection = null
      let myObject = null
      if (this.type === 'food') {
        mycolection = collection(dbase, "Food")
        myObject = {
          name: this.recivedData.name,
          explain: this.recivedData.explain,
          menuId: this.select,
          price: this.recivedData.price,
          src: this.recivedData.src
        }
        console.log(myObject.menuId)
      }
      else if (this.type === 'menu') {
        console.log('m')

        mycolection = collection(dbase, "Menus")
        myObject = {
          name: this.recivedData.name,
          src: this.recivedData.src
        }
      }
      try {
        await addDoc(mycolection, myObject)
        new Swal({
          text: 'insert is done',
          icon: 'success'

        })
        this.clear()
      }
      catch (er) {
        console.error(er);
      }
     

    }
  ,
    async edite(id) {
      let myDoc = null
      
      if (this.type === 'food') {
        myDoc = doc(dbase, "Food",id)
       
      }
      else if (this.type === 'menu') {
        myDoc = doc(dbase, "Menus",id) 
      }
      try {
        console.log(this.recivedData)
        updateDoc(myDoc,this.recivedData);
        new Swal({
          text: 'upadate is done',
          icon: 'success'

        })
        this.clear()
      }
      catch (err) { console.log(err) }
    }

    ,
    clear() {
      this.recivedData.name = ''
      this.recivedData.price = ''
      this.select = []
      this.recivedData.explain = ''
      this.recivedData.src = ''

    },

  },
  mounted() {
    this.select=this.recivedData.menuId
    console.log(this.select)
  
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
