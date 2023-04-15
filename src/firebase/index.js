import { initializeApp } from 'firebase/app'
//import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  
  apiKey: 'AIzaSyDfU8ZviDNX3e8lyuWvxvArfay-C0SUHjM',
  authDomain: 'newpro-89af9.firebaseapp.com',
  projectId: 'newpro-89af9',
  storageBucket: 'newpro-89af9.appspot.com',
  messagingSenderId: '1076011171206',
  appId: '1:1076011171206:web:637c95a664a7a590cc0007'
};

 const app= initializeApp(firebaseConfig);
 //const auth = getAuth(app)
const dbase = getFirestore(app)
//console.log(dbase)
export { dbase };

//  { dbase }
