import React from 'react'
//react-router is extra added if problem occurs remove that
// import Createhistory from 'history/createBrowserHistory'//use lower version
import Help from './../components/Help'
import ExpensePage from './../components/ExpensePage'

import NotFound from './../components/NotFound'
import ExpenseDashboard from  '../components/ExpenseDashboard'
import history from '../history'
import { Route,Switch} from 'react-router-dom'
import  addExpense  from '../components/AddExpense'
import Login from '../components/LoginPage'
import { Router } from 'react-router';
import  PrivateRoute  from './PrivateRoute'
import  PublicRoute  from './PublicRoute'
// export const history=Createhistory();
// export const history=useHistory();
//use react-router v3
const AppRouter=()=>(
    <Router history={history}>
        {/* changed from browserhistory to upper whole */}
    <div>
        
        <Switch>
            <PublicRoute path="/"  component={Login } exact={true}/>
            <PrivateRoute path="/edit/:id"  component={ExpensePage} exact= { true } />
            <PrivateRoute path="/dashboard"  component={ExpenseDashboard } exact={true}/>
            {/* <Route path="/help"  component={Help } /> */}
            <PrivateRoute path="/addexpense"  component={addExpense} exact={true} />
            
            <Route component={NotFound}/>
        </Switch>
    </div>
       
    </Router>
)

export default AppRouter