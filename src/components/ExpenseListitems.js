import React from 'react'
import {removeExpense} from '../actions/expenses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
const Listitem=({id,description,Amount,createdAt})=>(
    <div className = 'listitem'>
        <Link to={`/edit/${id}`}>
            <h5>{description}</h5>
        </Link>
        
        <h5>{Amount}-{formatRelative(subDays(new Date(createdAt), 3), new Date(createdAt))}</h5>
      
    </div>
)
export default Listitem