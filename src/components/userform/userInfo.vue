
<template>
  <div class="table">
    <h1>info</h1>
    <v-simple-table dark width="80%">
      <template v-slot:default>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>name : </td>
            <td>{{ smt.name }}</td>
          </tr>
          <tr>
            <td>lastname :</td>
            <td>{{ smt.lastname }}</td>
          </tr>

        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>
// import { dbase} from '@/firebase/firebase'
// import { doc, collection,getDocs} from 'firebase/firestore';
// import { getAuth } from "firebase/auth";
export default {
  name: 'userInfo',

  data: () => ({

    user: null
  }),
  props: ['currentUser', 'smt'],
  methods: {


  }
  , mounted() {
    console.log(this.smt)
  }
}
</script>
<style lang="scss">
.sidebar {
  background-color: transparent;
  margin-top: 5rem;
}
</style>
