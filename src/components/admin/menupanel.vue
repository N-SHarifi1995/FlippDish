<template>
  <div class="table">

    <v-data-table :headers="heads" :items="menus" :items-per-page="5" class="elevation-1" dark>
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.menuId }}</td>
          <td><v-icon small  @click="delet(item.id)">mdi-delete</v-icon></td>
          <td><v-icon samll  @click="change(item)">mdi-pencil</v-icon></td>
        </tr>
      </template>
    </v-data-table>
    <v-btn plain outlined class="btn pubbutton" @click="show">{{ btnText }}</v-btn>
    <adminForm :type="'menu'" :newObj="newObj" v-if="switchform"></adminForm>
  </div>
</template>

<script>


import adminForm from './adminForm.vue';
import { deleteDoc, doc } from "firebase/firestore";
import { dbase } from '@/firebase/firebase'
export default {
  name: "MenusPanel",
  data() {
    return {
      model: 0,
      newObj: {
        name: '',
        id: '',
        src: ''
      },
      switchform: false,
      heads: [{ text: 'name', value: 'name' },
      { text: '', value: 'action' }, { text: '', value: 'action' }],
    };
  },
  components: { adminForm },
  computed: {
    menus() {
      return this.$store.state.menus
    }
    ,
    btnText() {
      if (this.switchform === true) {
        return 'close'
      }
      else {
        return 'add'
      }
    }
  },

  methods: {
    getsrc(addres) {
      return require(`@/assets/img/${addres}`);
    }, show() {
      this.switchform = !this.switchform
      console.log(this.switchform)
    },
    delet(y) {

      try { deleteDoc(doc(dbase, 'Menus', y)); }
      catch (err) { console.log(err) }
    },
    change(item) {
      this.newObj = item
      this.show()
    },


  },

}
</script>
<style lang="scss" scoped>
.btn {
  margin: 4rem 0;
  color: $newyellow;
}
</style>
