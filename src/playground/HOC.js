//higher order components
import React from 'react'
import ReactDOM from 'react-dom' 
const Info=(props)=>(
     <div>
         <p>Hi! {props.info}</p>
     </div>
 );

 const  WithAdminWarning=(WrappedContent)=>{
     return (props)=>(
         <div>
             {props.isAdmin&&<p>Secret chiz</p>}
             <WrappedContent {...props}/>
         </div>
     );
 };

const AdminInfo=WithAdminWarning(Info)
ReactDOM.render(<AdminInfo isAdmin={false} info={'Naveen'}/>,document.getElementById('app'))