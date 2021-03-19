import React from 'react'
import moment from 'moment'//for better understanding check official website
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

class ExpenseForm extends React.Component{
    constructor(props){//we are using props which is send from another component
        super(props)//CHECK OR may be reason for super....because of inheritance type feature first u have to pass the arguments to base class using super

        this.state={
            description:props.expense?props.expense.description:'',
            Notes:props.expense?props.expense.Notes:'',
            Amount:props.expense?(props.expense.Amount).toString():'',//changed amoutn to Amount in expense.amount
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:''
    
        };
    }
    ChangeDescriptionState=(e)=>{
            const description=e.target.value
            this.setState(()=>({description}))//new state seted
        }
    ChangeNotesState=(e)=>{
        // const Notes=e.target.value
        e.persist()
        //same as above bt use persist
        this.setState(()=>({Notes:e.target.value}))
    }
    ChangeAmountState=(e)=>{
        const Amount=e.target.value
        this.setState(()=>({Amount}))
    }
    
    onDateChange=(createdAt)=>{//see documentation of react-dates
        if(createdAt){//it will automatically sets default date rather than leaving empty
            this.setState(()=>({createdAt}))//
        }
        
    }

    onFocusChange=({focused})=>{//see documentation of react-dates
        this.setState(()=>({calendarFocused:focused}))
    }

    onSubmit=(e)=>{
        e.preventDefault();

        if(!this.state.description||!this.state.Amount){
            this.setState(()=>({error:'Please Provide Description and Amount both'}))
        }
        else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                Amount:parseFloat(this.state.Amount,10)*100,//check for reason
                createdAt:this.state.createdAt.valueOf(),
                Notes:this.state.Notes
            })
        }
    }

    render(){
        return(
            <div className="addexpense" >
                {this.state.error&&<p>{this.state.error}</p>}
                <h1>Add or Edit Expenses</h1>
                <form onSubmit={this.onSubmit} className="expense-form">
                    <input 

                    type="text" 
                    placeholder="text" 
                    value={this.state.description}//it will not change automatically
                    onChange={this.ChangeDescriptionState}//hence we have to write this
                    autoFocus//only one autoFocus can be on page
                    
                    />
                    <input
                     type="number" 
                     placeholder="Amount" 
                     value={this.state.Amount}
                    onChange={this.ChangeAmountState}
                     />

                   <SingleDatePicker
                     date={this.state.createdAt}//these things are written on using calendar API
                     onDateChange={this.onDateChange}
                     focused={this.state.calendarFocused}    
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}//1 month calendar will be shown
                     isOutsideRange={()=>false}//previous days now we can pick
                   
                   />
                   <textarea
                   
                   value={this.state.Notes}
                    onChange={this.ChangeNotesState}
                   >
                   </textarea>

                   <button formAction="submit">Submit</button>
                </form>
            </div>
            
            
        )
    }
}

export default ExpenseForm