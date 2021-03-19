import React from 'react'
import {connect} from 'react-redux'//used to connect redux store and router
import filters from '../reducers/filters'
import expenses from '../selectors/expenses'
import Listitem from './ExpenseListitems'
import selectExpenses from '../selectors/expenses'
const ExpenseList= (props)=>(
    <div>
        <h1>Hi </h1>
        {props.expenses.map((expense)=>{
            return <Listitem key ={expense.id} {...expense}/>//for listitems we have to use ID
        } )}
    </div>
)

const mapStateToProps=(state)=>{
    console.log('expenselist',state)
    return{
        expenses:selectExpenses(state.expenses,state.filters)//adding expenses props to ExpenseList
    }
}//as state will change it will re render 
export default connect(mapStateToProps)(ExpenseList)//higher order component
