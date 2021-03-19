import React from 'react'
import ExpenseForm from './ExpenseForm'
import {F_AddExpense} from '../actions/expenses'
import {connect} from 'react-redux'
// const AddExpensePage=(props)=>(
//     <div>
//         <h1>Hello from AddExpensePage</h1>
//         <ExpenseForm 
//         onSubmit={(expense)=>{//onSubmit this function will be calledS
//             props.dispatch(addExpense(expense))
//         }}/>
//     </div>
// );
// export default connect()(AddExpensePage)

export class AddExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.F_AddExpense(expense);//
        this.props.history.push('/')//optional
    }

    render(){
        return(
            <div>
               
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const MapDispatchToProps=(dispatch)=>({
    F_AddExpense: (expense)=>dispatch(F_AddExpense(expense))//in js any function we treat as an object and hence passing as props
});

 export default connect(undefined,MapDispatchToProps)(AddExpensePage) 