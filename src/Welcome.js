import React,{useState} from 'react'
import './Welcome.css'
import LogIn from './LogIn'
import SignIn from './SignIn'


 function Welcome() {
     
    const [signIn,setSignIn] = useState(false);
     const [logIn,setlogIn] = useState(false)
    
   const sign = ()=>{
       setSignIn(true);
   }

   const log = ()=>{
       setlogIn(true)
   }

   const closeSign = ()=>{
         setSignIn(false);
   }

    const closeLog = ()=>{
       setlogIn(false)
   }


    return (
        <div className="welcome-page">
           <div className="welcome-part">
            <h1>Welcome <br/> To <br/> Western Desire</h1>
            <h1>New user?</h1>
            <button className="btn" onClick={sign}>Sign in</button>
            <h1>Already have an account</h1>
            <button className="btn" onClick={log}>Log in</button>
           </div>
           <div className="logIn-part" style={logIn?{transform:'translateX(0)'}:{transform:'translateX(-450px)'}}>
              <LogIn closeLog={closeLog}/>
           </div>
           <div className="signIn-part" style={signIn?{transform:'translateX(0)'}:{transform:'translateX(450px)'}}>
              <SignIn closeSign={closeSign}/>                                                                  
        </div>
         </div>   
    )
}

export default Welcome
