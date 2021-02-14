import React from 'react'
import ExpenseList from './expenseList'
import ListFilters from './ExpenseListFilters'
 const ExpenseDashboard=()=>(
    <div>
       <ListFilters/>
       <ExpenseList/>
    </div>
 )

export default ExpenseDashboard