import React from 'react'
import {Link} from 'react-router-dom'
import ExpenseList from './expenseList'
import ListFilters from './ExpenseListFilters'
 const ExpenseDashboard=()=>(
    <div className = 'Dashboard'>
     
      <Link to="addexpense" className ="Create-button" exact={true}>  CreateExpense </Link>
      <h1>Expense List </h1>
      {/* <div className = 'listfilters'> */}
         <ListFilters/>
      {/* </div> */}

      
         <ExpenseList/>
      
      
      
    </div>
 )

export default ExpenseDashboard