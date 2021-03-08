import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
export const  PublicRoute=({
    isAuthenticated,
    component:Component,
    ...rest //rest part of the props are destructured in rest

})=>(
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to='/dashboard' />//if we are logged in and if we click login it should not go to login page rather redirect it to dashboard page
        ):(
            <Component {...props}/>
        )
    )}
   />
)

const maptoprops=(state)=>({
    isAuthenticated:!!state.auth.uid//from where we are using auth...is it from combinre reducer where we renamed authreducer?
})

export default connect(maptoprops)(PublicRoute)