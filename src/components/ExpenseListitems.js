import React from 'react'
import {removeExpense} from '../actions/expenses'
import {connect} from 'react-redux'
const Listitem=({dispatch,id,description,amount,createdAt})=>(
    <div>
        <h5>{description}</h5>
        <h5>{amount}-{createdAt}</h5>
        <button onClick={()=>{
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)
export default connect()(Listitem)