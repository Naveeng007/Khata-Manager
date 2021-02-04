import React from 'react'
import Help from './../components/Help'
import ExpensePage from './../components/ExpensePage'
import Header from './../components/Header'
import NotFound from './../components/NotFound'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'

const AppRouter=(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/"  component={Help } exact={true}/>
            <Route path="/next/:id"  component={ExpensePage} />
            <Route component={NotFound}/>
        </Switch>
    </div>
       
    </BrowserRouter>
)

export default AppRouter