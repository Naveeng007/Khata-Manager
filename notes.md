why do we need arrow function ()=>
```js
babel src/app.js --out-file=public/script/app.js --presets=env,react --watch (if give error then run yarn install)

npm unistall-g babel-cli live-server

we can also import files using import './utils.js' but this methods don't work with functioins or variables like passing values to fun will show undefinde function

import {add,val} from './utlis.js' //order doesn't matter but name must be same

the size of output only increases when we import some modules

```js
const obj={
    name:"naveen",
    title:["naveen","praveen","neha"],
    location:"New Delhi",
    getData:function getData(){//is  this was an arrow function then this.title would not work as it try to get super parent item but simple es5 function gets its own obj items
        this.title.forEach((namee)=>{ 
            console.log(namee)
        })
    },
    putData:function putdata(){
        return this.title.map((namee)=>namee+"lives in "+this.location)
    }
}
console.log(obj.putData())
```

> does not render again and again after one time rendering

// React components name must be capital letter

```js

class Option extends React.Component{
    render(){
        return (
            //we can't Return more than one components or tags without enclosing into div:  Adjacent JSX elements must be wrapped in an enclosing tag
        <div>
            <Header/>
            <Title/>
        </div>
            
        )
    }
}

```

e.preventDefault()//stops refreshing of page

```js
> Without bable we had to write these codes for template
import ReactDOM from 'react-dom'
const React=require('react')
const template=React.createElement('p',{},'test123');//this one...<p>test123</p>
ReactDOM.render (template,document.getElementById('app'))


      // "build-babel": "babel src/app.js --out-file=public/script/app.js --presets=env,react --watch", //script part of package.json
