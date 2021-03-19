import React from 'react'
import {Link} from 'react-router-dom'
import ExpenseList from './expenseList'
import ListFilters from './ExpenseListFilters'
 const ExpenseDashboard=()=>(
    <div className = 'Dashboard'>
      
       <Link to="addexpense"  exact={true}> <button className ="Create-button">CreateExpense</button></Link>
       <ListFilters/>
       <ExpenseList/>
    </div>
 )

export default ExpenseDashboard