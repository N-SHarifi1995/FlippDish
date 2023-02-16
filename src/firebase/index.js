import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyCuN0zxs-26ZCUsJ8C0LIF5qfFUdllXW3I',
  // authDomain: 'flipdish-54761.firebaseapp.com',
  // projectId: 'flipdish-54761',
  // storageBucket: 'flipdish-54761.appspot.com',
  // messagingSenderId: '576804439050',
  // appId: '1:576804439050:web:6200b12c4570e710a80bf3'
  apiKey: 'AIzaSyDfU8ZviDNX3e8lyuWvxvArfay-C0SUHjM',
  authDomain: 'newpro-89af9.firebaseapp.com',
  projectId: 'newpro-89af9',
  storageBucket: 'newpro-89af9.appspot.com',
  messagingSenderId: '1076011171206',
  appId: '1:1076011171206:web:637c95a664a7a590cc0007'
};

const app = initializeApp(firebaseConfig);
const dbase = getFirestore(app)
//
console.log(dbase)
export default dbase;