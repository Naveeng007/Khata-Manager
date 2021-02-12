import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default ()=>{ // There can be only one default export.

    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        })
      );
      return store;
}



  