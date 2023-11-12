<template>
  <div class="myform">
    <h1>siginfg</h1>
  
    <v-row no-gutters>
      <v-col cols="6" class="offset-3">

       
        <v-text-field clearable dark color='#ffffff' class="input" v-model="email" label="email" required>
        </v-text-field>
        <v-text-field clearable dark class="input" v-model="password" label="password" required>
        </v-text-field>

        <v-btn class="mr-4"  title="sign">
          registmer
        </v-btn>
        <v-btn @click="signin">
          logIn
        </v-btn>

      </v-col>
    </v-row>
  </div>
</template>
  
<script>
// @ is an alias to /src
//import validator from '@/services/validatore'
//import Swal from 'sweetalert2'
import {app} from '@/firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'signIn',

  components: {},
  data() {
    return {
      name: null,
      lastname: null,
      email:'',
      password:'',

     
    }
  },
  mounted() {

  }, methods: {
    async signin() {
      console.log( this.email,this.password)
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth,this.email,this.password )
        .then((userCredential) => {
          // Signed 'in'
          const user = userCredential.user;
          alert(user)
          //
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('weak pass')
          } else {
            alert(errorMessage,errorCode)
          }
          // ..
        });


    }
  },
}
</script>
<style scoped lang="scss">
.myform {
  margin-top: 8rem;


.input{
  color:rgb(255, 255, 255) !important
}
}
</style>
  