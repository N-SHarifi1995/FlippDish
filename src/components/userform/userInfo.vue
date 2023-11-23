
<template>
  <v-simple-table width="80%" dark class="monitorpart">
    <template v-slot:default>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td class="tablehead">name : </td>
          <td>{{ smt.name }}</td>
        </tr>
        <tr>
          <td class="tablehead">lastname :</td>
          <td>{{ smt.lastname }}</td>
        </tr>
        <tr>
          <td class="tablehead ">adress :</td>
          <td>
            <v-textarea class="input " dark color='#ffffff' required :disabled="adreessActive"></v-textarea>

          </td>
          <td> <v-icon class="edite" @click="active('adress')">mdi-pencil</v-icon></td>
        </tr>
        <tr>
          <td class="tablehead">mobile :</td>
          <td> <v-text-field class="number" dark color='#ffffff' :disabled="mobileActive" required></v-text-field></td>
          <td> <v-icon class="edite" @click="active('adress')">mdi-pencil</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>


// import { dbase} from '@/firebase/firebase'
// import { doc, collection,getDocs} from 'firebase/firestore';
// import { getAuth } from "firebase/auth";
export default {
  name: 'userInfo',

  data: () => ({
    adreessActive: true,
    mobileActive: true,
    user: null
  }),
  props: ['currentUser', 'smt'],
  methods: {
    active(source) {
      if (source === 'adress') {
        this.adreessActive = false
      } else if (source === 'mobile') {
        this.mobileActive = false
      }
    }

  }
  , mounted() {
    console.log(this.smt)
  }
}
</script>
<style lang="scss" scoped>
.tablehead {
  font-size: 5vh;
}

.edite {
  font-size: 2vh;
}
</style>
