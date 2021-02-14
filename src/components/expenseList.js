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
            return <Listitem key ={expense.id} {...expense}/>
        } )}
    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
       
    }
}//as state will change it will re render 
export default connect(mapStateToProps)(ExpenseList)//higher order component
