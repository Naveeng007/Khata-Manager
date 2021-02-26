// import React from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import AppRouter from './Router/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses.js'
import {setTextFilter} from './actions/filter.js'
import getVisibleExpenses from './selectors/expenses'
import './styles/style.scss'
import 'normalize.css/normalize.css'//used for normalizing css according to every device and browser
// import './firebase/firebase.js'
const store=configureStore()

store.dispatch(addExpense({description:'water bill'}))
store.dispatch(addExpense({description:'bizli bill', amount:555}))
store.dispatch(addExpense({description:'rent', createdAt:100,amount:39}))
const state=store.getState();

const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))

