<template>
  <div class="myform">
    <h1 v-if="this.type === 'SignUp'">sigup</h1>
    <h1 v-else>sigInm</h1>
    <v-row no-gutters>
      <v-col cols="6" class="offset-3">

        <div class="names">
          <v-text-field v-if="this.type === 'SignUp'" clearable dark v-model="name" label="firstName"></v-text-field>
          <v-text-field v-if="this.type === 'SignUp'" clearable dark v-model="lastname" label="lastName"> </v-text-field>
        </div>
        <v-text-field clearable dark v-model="email" label="email" required>
        </v-text-field>
        <v-text-field clearable dark v-model="password" label="password" required>
        </v-text-field>

        <v-btn v-if="this.type === 'SignUp'" class="mr-4" @click="signup" title="sign">
          register
        </v-btn>
        <v-btn v-if="this.type === 'SignIn'" @click="signin">
          logIn
        </v-btn>
        <p v-if="this.type === 'SignUp'">I have an acount <v-btn text :to="{ name: 'SignIn' }">logIn</v-btn></p>
        <p v-else>I dont have an acount <v-btn text :to="{ name: 'SignUp' }">sign in</v-btn></p>

      </v-col>
    </v-row>
  </div>
</template>
  
<script>
// @ is an alias to /src
//import validator from '@/services/validatore'
//import Swal from 'sweetalert2'
import { app, dbase } from '@/firebase/firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export default {
  name: 'userForm',

  components: {},
  data() {
    return {
      name: null,
      lastname: null,
      email: '',
      password: '',

     // currentUser: null
    }
  },
  computed: {
    type() {
      return this.$route.name
    }
  },
  mounted() {
    //this.type = this.$route.name
  },
  methods: {
    async signup() {
      //console.log(this.email, this.password)

      createUserWithEmailAndPassword(getAuth(app), this.email, this.password)
        .then(async (userCredential) => {
          alert(userCredential.user.uid)
          //this.currentuser=getAuth(app).currentUser
          console.log(getAuth(app).currentUser.uid)
          try {
            await setDoc(doc(dbase, 'users', userCredential.user.uid), {
              name: this.name,
               lastname: this.lastname
            })
            await setDoc(doc(dbase, 'carts', userCredential.user.uid), {
              name: this.name,
             
            })
          }
          catch (error) {
            console.log(error)
          }
          // updateProfile(getAuth(app), {
          //   displayName: this.name,
          //   lastname: this.lastName
          // }).then(
          //    ,

          // ).catch((error)=>{
          //   alert(error)
          // })
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



    },
    async signin() {
      alert('hi')
      console.log(this.email, this.password)
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
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
            alert(errorMessage, errorCode)
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


}
</style>
  