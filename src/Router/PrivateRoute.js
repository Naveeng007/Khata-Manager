import React from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
import Header from './../components/Header'
export const  PrivateRoute=({
    isAuthenticated,
    component:Component,
    ...rest //rest part of the props are destructured in rest

})=>(
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>   
                <Header/>
                <Component {...props}/>
            </div>
        ):(
            <Redirect to='/' />
        )
    )}
   />
)

const maptoprops=(state)=>({
    isAuthenticated:!!state.auth.uid//from where we are using auth...is it from combinre reducer where we renamed authreducer?
})

export default connect(maptoprops)(PrivateRoute)