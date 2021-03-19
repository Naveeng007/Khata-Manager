import React from 'react'
import {removeExpense} from '../actions/expenses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
const Listitem=({id,description,Amount,createdAt})=>(
    <div className = 'listitem'>
        <Link to={`/edit/${id}`}>
            <h5 className = 'listitem-values'>{description}</h5>
        </Link>
        
        <h5 className = 'listitem-values'>₹{Amount}</h5>
        <h5 className = 'listitem-values'>{formatRelative(subDays(new Date(createdAt), 3), new Date(createdAt))}</h5>
      
    </div>
)
export default Listitem