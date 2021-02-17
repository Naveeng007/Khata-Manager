import React from 'react'
import Help from './../components/Help'
import ExpensePage from './../components/ExpensePage'
import Header from './../components/Header'
import NotFound from './../components/NotFound'
import ExpenseDashboard from  '../components/ExpenseDashboard'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
import  addExpense  from '../components/AddExpense'

const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/"  component={ExpenseDashboard } exact={true}/>
            <Route path="/help"  component={Help } exact={true}/>
            <Route path="/addexpense"  component={addExpense} exact={true} />
            <Route path="/edit/:id"  component={ExpensePage} exact={true} />

            <Route component={NotFound}/>
        </Switch>
    </div>
       
    </BrowserRouter>
)

export default AppRouter