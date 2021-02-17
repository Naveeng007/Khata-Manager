import React from 'react'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
const Header=()=>(
    <div>
        <h2>Expensify</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>dashboard</NavLink>
        <NavLink to="addexpense" activeClassName="is-active" exact={true}>CreateExpense</NavLink>
        <NavLink to="dashboard" activeClassName="is-active" exact={true}>Help</NavLink>
    </div>
)

export default Header