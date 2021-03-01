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
// // returns firebase promises

/*use to add refrence name if does not exist create it*/

//   database.ref('name').set('Praveen')

//   database.ref('location/city').set('Gol Market')

database.ref('school').set({
    first:'KV',
    second:'Union Academy'
}).then(()=>{
    console.log('data sent successfully')
}).catch((e)=>{
    console.log("failed to set data",e)
})

/*use to remove saved data through refrence*/

// database.ref('school/second').remove().then(()=>{
//     console.log('successfully removed data')
// }).catch((e)=>{
//     console.log('error while removing data',e)
// })

// database.ref('name').set(null)//this will also remove data

// database.ref().update({//it is root level updating
//     name:'Neha',
//     // school:null,
//     'school/first':'St Suji'
//     // if you update like shcool:{first:st suji} it will remove second or overite school
// })

/*fetching data*/
//these run just single time
// database.ref()//gives whole data
//   .once('value')//reserved
//   .then((snapshot)=>{
//       const val=snapshot.val();
//       console.log(val)
//   }).catch((e)=>{
//       console.log('fetching error',e)
//   })


//   database.ref('school/first')//returns first school value
//   .once('value')//reserved
//   .then((snapshot)=>{
//       const val=snapshot.val();
//       console.log(val)
//   }).catch((e)=>{
//       console.log('fetching error',e)
//   })

/*whenver data changes this will automatically run*/
// it will not return promises as above fetch method
//it returns snapshot function 
const OnValueChange = database.ref().on('value',(snapshot)=>{//subscribing
  console.log(snapshot.val())
},(e)=>{
  console.log('some error occured',e)
})

//  database.ref().update({//it is root level updating
//         name:'Neha',
//         // school:null,
//         'school/first':'St Suji'
//         // if you update like shcool:{first:st suji} it will remove second or overite school
//     })

// SOME KIND OF ERROR OCCURED..value was not adde in off statement
setTimeout(() => {
  database.ref().off('value',OnValueChange)//turning off subscription of OnvalueChange
}, 5000);

sdf=k

/**************************************************************** */

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

// database.ref('Notes').push({//this is how we are going to work with arrays
//     Name:'Praveen',
//     College:'AKTU'
// })//gives unique id to each pushed item

// database.ref('Notes/-MUUD_sq4AGbzx59-9q1').update({
//     College:'IIT'
// })

// database.ref('Expenses').push({
//     description:'THis is my note',
//     rent:123,
//     CreatedAt:32423423424,
//     Amount:2002
// })
console.log('hello from firebaase')
// database.ref('Expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses=[]
//         snapshot.forEach((snapshotChild)=>{//snapshot has forEach method...you can check on Firebase Documents
//             expenses.push({
//                 id:snapshotChild.key,//unique value for each pushed items work as id
//                 ...snapshotChild.val(),
//                 d:3//adding all values of every snapshots of expense
//             });
           
//         });
//         console.log(expenses);
//     });

// database.ref('Expenses').on('value',(snapshot)=>{//envoked everytime datachanged like, added,deleted,updated 

//     const expenses=[]
//         snapshot.forEach((snapshotChild)=>{//snapshot has forEach method...you can check on Firebase Documents
//             expenses.push({
//                 id:snapshotChild.key,//unique value for each pushed items work as id
//                 ...snapshotChild.val(),
//                 d:3//adding all values of every snapshots of expense
//             });
           
//         });
//         console.log(expenses);

// })

database.ref('Expenses').on('child_added',(snapshot)=>{//will run everytime when child is added
    console.log(snapshot.key,snapshot.val())
})
database.ref('Expenses').on('child_removed',(snapshot)=>{//will run everytime when child is removed
    console.log(snapshot.key,snapshot.val())
})
database.ref('Expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val())//will run everytime when child is changed
})
