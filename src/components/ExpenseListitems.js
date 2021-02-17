import React from 'react'
import {removeExpense} from '../actions/expenses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const Listitem=({id,description,amount,createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}>
            <h5>{description}</h5>
        </Link>
        
        <h5>{amount}-{createdAt}</h5>
      
    </div>
)
export default Listitem