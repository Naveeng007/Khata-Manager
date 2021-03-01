import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {F_editExpense,f_removeExpense} from '../actions/expenses'
const ExpensePage=(props)=>{//this is actually edit expense page
    console.log(props)
   return (
    <div>
        <ExpenseForm 

         expense={props.expense}
         onSubmit={(expense)=>{//on every submittion{props} this will call this function and redirrect it to '/'
             props.dispatch(F_editExpense(props.expense.id,expense))
             props.history.push('/')
             console.log('updated',expense)
         }}
        />

        <button onClick={()=>{
            props.dispatch(f_removeExpense({id:props.expense.id}))
            props.history.push('/') 
        }}>Remove</button>

    </div>
);
}

const mapStateProps=(state,props)=>{
    return {
        expense:state.expenses.find((expenses)=>{//find by id and return that expense object
            return expenses.id===props.match.params.id
        })
    }
}

export default connect(mapStateProps)(ExpensePage)