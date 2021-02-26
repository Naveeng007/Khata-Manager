// import firebase from 'firebase/app';
// const auth=require('firebase/auth');
// const db=require('firebase/database');

// const firebaseConfig = {
//     apiKey: "AIzaSyCcXNEBB19gURcizP6TtcbkLQ1Pc0aS5Sg",
//     authDomain: "expense-manager-b1655.firebaseapp.com",
//     databaseURL: "https://expense-manager-b1655-default-rtdb.firebaseio.com",
//     projectId: "expense-manager-b1655",
//     storageBucket: "expense-manager-b1655.appspot.com",
//     messagingSenderId: "218773825056",
//     appId: "1:218773825056:web:31e2081b7747989848be45",
//     measurementId: "G-J6FDQJJ1LW"
//   };

//   const instance =firebase.initializeApp(firebaseConfig);
//  const database=firebase.database()

// // database.ref('Notes').push({//this is how we are going to work with arrays
// //     Name:'Praveen',
// //     College:'AKTU'
// // })//gives unique id to each pushed item

// // database.ref('Notes/-MUUD_sq4AGbzx59-9q1').update({
// //     College:'IIT'
// // })

// // database.ref('Expenses').push({
// //     description:'THis is my note',
// //     rent:123,
// //     CreatedAt:32423423424,
// //     Amount:2002
// // })
// console.log('hello from firebaase')
// // database.ref('Expenses')
// //     .once('value')
// //     .then((snapshot)=>{
// //         const expenses=[]
// //         snapshot.forEach((snapshotChild)=>{//snapshot has forEach method...you can check on Firebase Documents
// //             expenses.push({
// //                 id:snapshotChild.key,//unique value for each pushed items work as id
// //                 ...snapshotChild.val(),
// //                 d:3//adding all values of every snapshots of expense
// //             });
           
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('Expenses').on('value',(snapshot)=>{//envoked everytime datachanged like, added,deleted,updated 

// //     const expenses=[]
// //         snapshot.forEach((snapshotChild)=>{//snapshot has forEach method...you can check on Firebase Documents
// //             expenses.push({
// //                 id:snapshotChild.key,//unique value for each pushed items work as id
// //                 ...snapshotChild.val(),
// //                 d:3//adding all values of every snapshots of expense
// //             });
           
// //         });
// //         console.log(expenses);

// // })

// database.ref('Expenses').on('child_added',(snapshot)=>{//will run everytime when child is added
//     console.log(snapshot.key,snapshot.val())
// })
// database.ref('Expenses').on('child_removed',(snapshot)=>{//will run everytime when child is removed
//     console.log(snapshot.key,snapshot.val())
// })
// database.ref('Expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())//will run everytime when child is changed
// })
