import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { auth, googleSignIn } from './Firebase'
import './LogIn.css'

export default class LogIn extends React.Component {
  
   constructor(props){
       super(props);

    this.state = {
        email:'',
        password:''
    }

   }

   handleChange = (e)=>{
       const {name,value} = e.target;

        this.setState({[name]:value})

   }

   handleSubmit = async(e)=>{
       e.preventDefault();
       const {email,password} = this.state;
     await auth.signInWithEmailAndPassword(email,password)
   }

   render(){
         const {closeLog} = this.props;
        return (
            <>
             <div className="header">
                 <h1>Log In</h1>
                   <AiOutlineClose className="close" onClick={closeLog}/>
                 </div>
                 <form>
                     <label htmlFor="email">Email</label>
                 <input type="email" required name="email"  value={this.state.email} onChange={this.handleChange} placeholder="Email.." className="input-form"/>
                 <label htmlFor="password">Password</label>
                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password.." className="input-form"/>
                 <button className="btn" type="submit" onClick={this.handleSubmit}>Submit</button>
                 <button className="btn" onClick={googleSignIn}>Sign In with Google</button>
                 </form>
            </>
        
    )
   }
}
