import React from 'react'
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
const NotFound=()=>(
    <div>
        <h1>Not Found</h1>
        <Link to="/">Go home</Link>
    </div>
);

export default NotFound