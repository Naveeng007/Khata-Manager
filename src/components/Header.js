import React from 'react'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'
export const Header=({startLogout})=>(//is it inside props?
    <div className = 'navbar'>
        
        <Link to="dashboard" className="header-title"  exact={true}><h2>Expensify</h2></Link>
        
        <button onClick={startLogout} className="logout-button">Logout</button>
    </div>
)

const MapDispatchToLogout=(dispatch)=>({//dispatch is passed implicity , same as state is passed in maptostate
    startLogout:()=>dispatch(startLogout())
})

export default connect(undefined,MapDispatchToLogout)(Header)//maptosttate is undefined as second argument is allways maptodispatch
