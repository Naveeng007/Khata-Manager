import React from 'react'
const ExpensePage=(props)=>{
    console.log(props)
   return (
    <div>
        <h1>Hello from ExpensePage {props.match.params.id} </h1>
    </div>
);
}

export default ExpensePage