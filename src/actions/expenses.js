import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase'
// ADD_EXPENSE
export const addExpense = (expense) => ({//implicit return value
    type: 'ADD_EXPENSE',
    expense
  });
export const F_AddExpense=(expenseData={})=>{
  return (dispatch)=>{//we are able to return dispatch due to redux-thunk
    const {
      description = 'default',//these are default values of parameters
      Notes = 'default',
      Amount = 0,
      createdAt = 0
    }=expenseData;

    const expense={description , Notes,Amount,createdAt};
    console.log("AddExpense", expense);

    database.ref('expenses').push(expense).then((ref)=>{
     dispatch(addExpense({
      id:ref.key,
      ...expense
     }))
    })
  }
}

  
  // REMOVE_EXPENSE
  export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  //SET_EXPENSE

  export const setExpenses=(expense)=>({
    type:'SET_EXPENSE',
    expense
  })

  export const F_setExpense=()=>{
    return (dispatch)=>{
        return  database.ref('expenses').once('value').then((snapshot)=>{
          const expenses=[]
          snapshot.forEach((snapshotChild)=>{
            expenses.push({
              id:snapshotChild.key,
              ...snapshotChild.val()
            })
          })

          dispatch(setExpenses(expenses))
        })
    }
  }