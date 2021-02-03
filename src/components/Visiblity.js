const React=require('react')
import Counter from './Counter'






export default class Visiblity extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:true
        }
        this.toggle=this.toggle.bind(this)
    }
    toggle(){
        // console.log(hello)
        this.setState((prevState)=>{
       return {
                visible: !prevState.visible
             }
        
    })
    }
    render=()=>//implicitliy returning ...convert every(e.g. toggle) funciton like this
         (
            <div className="visiblity">
            <button 
                onClick={this.toggle}
            >
            {this.state.visible?'show':'hide'}
            </button>
            {this.state.visible&&(
                <p>Hello buffallo</p>
            )}
            <Counter/>
            
            </div>
        )

    
}
