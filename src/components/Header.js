import React from 'react'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
const Header=()=>(
    <div>
        <h2>Expensify</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>To home</NavLink>
        <NavLink to="next" activeClassName="is-active" exact={true}>Page1</NavLink>
    </div>
)

export default Header