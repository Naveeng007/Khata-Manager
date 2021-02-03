// import React from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Visiblity from './components/Visiblity'
import './styles/style.scss'
import 'normalize.css/normalize.css'//used for normalizing css according to every device and browser

const page1=()=>(
    <div>
        <h1>Hello from Page 1</h1>
    </div>
);

const page2=()=>(
    <div>
        <h1>Hello from page 2</h1>
    </div>
);

const routes=(
    <BrowserRouter>
        <Route path="/"  component={page1 } exact={true}/>
        {/* using exact we matches whole path or none */}
        <Route path="/next"  component={page2} exact={true}/>
    </BrowserRouter>
)
ReactDOM.render(routes,document.getElementById('app'))

