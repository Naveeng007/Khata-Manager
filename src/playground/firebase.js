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
