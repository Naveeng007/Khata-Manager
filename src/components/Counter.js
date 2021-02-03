const React=require('react')
import Pop from './popping'
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
        this.funny=this.funny.bind(this)
        this.setpop=this.setpop.bind(this)
        this.cutpop=this.cutpop.bind(this)
        this.state={
            count:0,
            naam:"naveen",
            selected_value:undefined
        }

    }
    componentDidMount(){
        console.log('fetching data');
    }
    componentDidUpdate(){
        console.log('Saving data');
    }

    componenWillUnmount(){
        console.log('changing page or component data');
    }

    cutpop(){
        this.setState(()=>{
           return{ selected_value:''}
        })
    }
    setpop(){
        this.setState(()=>{
            return {
                selected_value:"true"
            }
        })
    }

    increment(){
        this.setState((prevState)=>{
           return {
            count:prevState.count+1,
            naam:"praveen"
           } 
        })

    }
   
    decrement(){
        this.setState((prevState)=>{
            return {
             count:prevState.count-1,
             naam:"Neha"
            } 
         })
    }
    reset(){
        this.setState(()=>{
            return {
             count:0
            } 
         })
    }
    funny(val){
        console.log(val)
    }
    render (){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <h3>name:{this.state.naam}</h3>
                <form>
                    <input val="normal"></input>
                    <button >Submit</button>
                </form>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>reset</button>
                <Body fun={this.funny}/>
                <button onClick={this.setpop}>Show Modal</button>
                <Pop 
                    selectedOption={this.state.selected_value}
                    close={this.cutpop}
                />
                {/* if it is empty means false else true..we can set it dynamically */}

            </div>
        )
    }
}

const Body=(props)=>{
    return (
        <div className="header">
        <h2>I am from stateless function</h2>
        <p className="para">my name is {props.name}</p>
        <button onClick={(e)=>{//this is how we can pass data to upward direction and we can use props as downward
            props.fun("hi")
        }}>show hello</button>
        </div>
    )
}
//this can be used for both class based or function based
Body.defaultProps={//now if Body compnoent has default props for name and work if not provided
    name:'Naveen',
    work:'Unemployed'
}