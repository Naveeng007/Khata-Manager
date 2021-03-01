import { createStore, combineReducers ,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default ()=>{ // There can be only one default export.

    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),

        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//we were using before compose
      );
      return store;
}
