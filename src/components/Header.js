import React from 'react'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'
export const Header=({startLogout})=>(//is it inside props?
    <div>
        <h2>Expensify</h2>
        <NavLink to="dashboard" activeClassName="is-active" exact={true}>dashboard</NavLink>
        <NavLink to="addexpense" activeClassName="is-active" exact={true}>CreateExpense</NavLink>
        <NavLink to="help" activeClassName="is-active" exact={true}>Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </div>
)

const MapDispatchToLogout=(dispatch)=>({//dispatch is passed implicity , same as state is passed in maptostate
    startLogout:()=>dispatch(startLogout())
})

export default connect(undefined,MapDispatchToLogout)(Header)//maptosttate is undefined as second argument is allways maptodispatch
