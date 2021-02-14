import React from 'react'

class ExpenseForm extends React.Component{
    state={
        description:'',
        Notes:'',
        Amount:0

    }
    ChangeDescriptionState=(e)=>{
            const description=e.target.value
            this.setState(()=>({description}))
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
    
    render(){
        return(
            <div>
                <h1>from Expense Form</h1>
                <form>
                    <input 

                    type="text" 
                    placeholder="text" 
                    value={this.state.description}//it will not change automatically
                    onChange={this.ChangeDescriptionState}//hence we have to write this
                    autoFocus
                    
                    />
                    <input
                     type="number" 
                     placeholder="Amount" 
                     value={this.state.Amount}
                    onChange={this.ChangeAmountState}
                     />
                   <textarea
                   
                   value={this.state.Notes}
                    onChange={this.ChangeNotesState}
                   >
                       
                    

                   </textarea>
                </form>
            </div>
            
            
        )
    }
}

export default ExpenseForm