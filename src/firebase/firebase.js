import firebase from 'firebase/app';
const auth=require('firebase/auth');
const db=require('firebase/database');

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

 database.ref().set({
      name:'Naveen',
      location:{
          city:'New Delhi',
          pin:'110002'
      }
  }).then(()=>{
      console.log('data is saved')
  }).catch((e)=>{
    console.log('failed to save',e)
  })

  database.ref('name').set('Praveen')
  database.ref('location/city').set('Gol Market')
  database.ref('school').set({
      first:'KV',
      second:'Union Academy'
  }).then(()=>{
      console.log('data sent successfully')
  }).catch((e)=>{
      console.log("failed to set data",e)
  })

//   export default instance