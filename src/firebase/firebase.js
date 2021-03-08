import firebase from 'firebase/app';
// const auth=require('firebase/auth');
// const db=require('firebase/database');

import "firebase/auth";//extra added
import "firebase/database";//extra added

const firebaseConfig = {
    apiKey: "AIzaSyCcXNEBB19gURcizP6TtcbkLQ1Pc0aS5Sg",
    authDomain: "expense-manager-b1655.firebaseapp.com",
    databaseURL: "https://expense-manager-b1655-default-rtdb.firebaseio.com",
    projectId: "expense-manager-b1655",
    storageBucket: "expense-manager-b1655.appspot.com",
    messagingSenderId: "218773825056",
    appId: "1:218773825056:web:31e2081b7747989848be45",
    measurementId: "G-J6FDQJJ1LW"
  };

const instance =firebase.initializeApp(firebaseConfig);
 const database=firebase.database()

const GoogleAuthProvider=new firebase.auth.GoogleAuthProvider();

console.log('hello from firebaase')
export {database as default,firebase,GoogleAuthProvider};
