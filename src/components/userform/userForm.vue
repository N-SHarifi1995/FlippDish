<template>
  <div class="myform">
    <h1 class="headerform" v-if="this.type === 'SignUp'">SingUp</h1>
    <h1 class="headerform" v-else>SingIn</h1>
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

        <v-btn outlined v-if="this.type === 'SignUp'" class="mr-4 pubbutton" @click="signup" title="sign">
          register
        </v-btn>
        <v-btn outlined v-if="this.type === 'SignIn'" @click="signin" class="mr-4 pubbutton
        ">
          logIn
        </v-btn>
        <p class="statment pt-5" v-if="this.type === 'SignUp'">I have an acount
          <v-btn plain :to="{ name: 'SignIn' }" class="pubbutton">SignIn</v-btn>
        </p>
        <p class="statment pt-5" v-else>I dont have an acount
          <v-btn plain :to="{ name: 'SignUp' }" class="pubbutton">signUp</v-btn>
        </p>

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
            await setDoc(doc(dbase, 'OldOrders', userCredential.user.uid), {
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

      console.log(this.email, this.password)
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          // Signed 'in'

          const user = userCredential.user;
          alert(user.uid)
          this.$store.dispatch('getCurrentUser', 1)
          // this.$store.dispatch('admindetection',info)
          this.$store.dispatch('raedCart', { id: this.$store.state.curentUser, flg: 1 })
          //this.$router.push('/userProfile/'+user.uid)

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

  .headerform {
  color: #feed00;
 text-shadow: 1px 0px 1px #f6f3b9, 2px 0px 1px #f6f3b9, 3px 0px 1px #f6f3b9, 2px 0px 3px #e9e75a, 2px 3px 15px #e9e75a, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #e9e75a,40px 0vw 200px #e9e75a;;
 animation: flicker 3s linear infinite;
 //animation-name: lamp;\
//    animation-duration: 0.9s;
//    animation-iteration-count: infinite;
 
//  animation-timing-function: ease;

  }
}


@keyframes flicker {
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
		//text-shadow: none;
    opacity: .99;
		
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
	}
}
@keyframes lamp {
  0%{
    color: rgb(137, 134, 134);
    text-shadow: 4px 4px 30px rgb(0, 0, 0);
  }

  20% {
    text-shadow: 4px 4px 50px rgb(255, 255, 0);
    color: $newyellow
  }
  40% {
    text-shadow: 4px 4px 50px rgb(0, 0, 0);
    color: rgb(137, 134, 134);
  }
 
  100% {
    text-shadow: 4px 4px 50px rgb(255, 255, 0);;
    color:$newyellow;
  }
}

;

.statment {
  color: $newyellow
}</style>
  