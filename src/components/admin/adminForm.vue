<template>
 <v-card class="form">
      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="4">
          <form>
            <v-text-field v-model="name" :counter="10" label="Name" required
               ></v-text-field>
            <v-combobox     v-model="select.text" :items="items" label="Menus"></v-combobox>
            <v-text-field v-model="price"  label="price" required 
              ></v-text-field>
            <v-textarea solo name="input-7-4" label="Explain"></v-textarea>

            <v-btn class="mr-4" @click="submit">
             add
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </form>
        </v-col></v-row>


    </v-card>

    

</template>

<script>


export default {
    name: "adminForm",
    data() {
        return {
            select:[ { text: 'brakfast',value:'1'}],
        items: [
        { text: 'brakfast',value:'1'},
          { text:'drinks',value:'4'},
          { text:'fastfood',value:'3'},
         {  text:'seafood',value:'4'},
        ],
        };
    },
    methods: {
      methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.price = ''
        this.email = ''
     
      },
    },
    },
}
</script>
<style lang="scss" scoped>
.form{
  background-color: transparent;
}

</style>
