import {createStore} from 'redux'
const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
        const inc= action.by!==undefined?action.by:1
        console.log(typeof action.by)
        return {
            count:state.count+inc//how does actual count is changing on returninng this
        }
        case "DECREMENT":
        return {
            count:state.count-1
        }
        case "RESET":
        return {
            count:0
        }
        default:
        return state
    }
});
//subscribe function run evry times data inside that store changes
const unsubscribe=store.subscribe(()=>{//subscribe returns a function which when called it unsubscirbes it
    console.log(store.getState())
})

store.dispatch({
    type:  "INCREMENT",
    by:50
})
store.dispatch({
    type:  "INCREMENT"
})
// unsubscribe()
store.dispatch({
    type:  "DECREMENT",
    by:10
})

store.dispatch({
    type:  "RESET"
})

