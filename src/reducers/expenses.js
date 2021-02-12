// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {//also here we can use export deault by deleteing everything before = including it
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [
          ...state,
          action.expense//if not present add it
        ];
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates//this will overwrite previous present
            };
          } else {
            return expense;
          };
        });
      default:
        return state;
    }
  };

  export default expensesReducer