<template>
  <div class="myform">
    <v-row no-gutters>
      <v-col cols="6" class="offset-3">

        <!-- <div class="names">
          <v-text-field clearable outlined v-model="name" label="firstName"></v-text-field>
          <v-text-field clearable v-model="lastname" label="lastName">
          </v-text-field>
        </div> -->
        <v-text-field clearable  v-model="email" label="email" required>
        </v-text-field>
        <v-text-field clearable v-model="password" label="password" required>
        </v-text-field>

        <v-btn class="mr-4" @click="signup" title="sign">
          register
        </v-btn>
        <v-btn>
          logIn
        </v-btn>

      </v-col>
    </v-row>
  </div>
</template>
  
<script>
// @ is an alias to /src
import validator from '@/services/validatore'
//import Swal from 'sweetalert2'
//import auth from '@/firebase/index'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'signUp',

  components: {},
  data() {
    return {
      name: null,
      lastname: null,
      email: '',
      password: '',

      ...validator
    }
  },
  mounted() {

  }, methods: {
    async signup() {
      console.log(typeof this.email,this.password)
   
      //auth().createUserWithEmailAndPassword( this.email, this.password)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth,this.email,this.password)
        .then((userCredential) => {
          // Signed 'in' 
          alert(userCredential)
          //const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('weak pass')
          } else {
            alert(errorMessage)
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

  .names {
    @include displayflex;

    justify-content: space-between;
  }
}
</style>
  