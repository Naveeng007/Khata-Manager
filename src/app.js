// import React from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import AppRouter  from './Router/AppRouter'//if any error occurs it will be due to history
import configureStore from './store/configureStore'
import {F_setExpense} from './actions/expenses.js'
import {login,logout} from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import './styles/style.scss'
import 'normalize.css/normalize.css'//used for normalizing css according to every device and browser
import {firebase} from './firebase/firebase'
const store=configureStore()
import { useHistory,BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom'
import  { List } from "react-content-loader";

import history from "./history";
// function Navigation(props) {
    
//     const history = useHistory();
//     history.push(path);
// }

//DUMMY values
// store.dispatch(addExpense({description:'water bill'}))
// store.dispatch(addExpense({description:'bizli bill', amount:555}))
// store.dispatch(addExpense({description:'rent', createdAt:100,amount:39}))
// const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)


const state=store.getState();
console.log(state)


const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let HasRendered=false;

const RenderApp=()=>{
    if(!HasRendered)
    {
        ReactDOM.render(jsx,document.getElementById('app'))
        HasRendered=true;
    }
}




  
  const MyListLoader = () => <List />
  
  const App = () => (
    <>
      <MyListLoader />
    </>
  );





ReactDOM.render(<App/>,document.getElementById('app'))


firebase.auth().onAuthStateChanged((user)=>{
 
    if(user){
        console.log("loged in")
        store.dispatch(login(user.uid))
        store.dispatch(F_setExpense()).then(()=>{
            RenderApp();
            history.push('/dashboard')
        });
    }
    else
    {
        store.dispatch(logout())
        console.log('Logged out')
        RenderApp();
        history.push('/')
        
    }
})



