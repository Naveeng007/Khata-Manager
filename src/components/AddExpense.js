import React from 'react'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'
import {connect} from 'react-redux'
const AddExpensePage=(props)=>(
    <div>
        <h1>Hello from AddExpensePage</h1>
        <ExpenseForm 
        onSubmit={(expense)=>{//onSubmit this function will be calledS
            props.dispatch(addExpense(expense))
        }}/>
    </div>
);
export default connect()(AddExpensePage)