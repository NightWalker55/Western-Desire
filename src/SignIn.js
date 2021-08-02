import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { auth, createUserDocumentProfile} from './Firebase'
import './SignIn.css'

export default class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = (e)=>{
        const {name,value} = e.target;

        this.setState({[name]:value})
    }

    
   handleSubmit = (e)=>{
       e.preventDefault();

        const {email,password,confirmPassword} = this.state;

        if(password!==confirmPassword){
            alert(`Password doesn't match`);
            return;
        }

     const {user} = auth.createUserWithEmailAndPassword(email,password);
   createUserDocumentProfile(user)
    console.log(user)

     this.setState({
          email:'',
            password:'',
            confirmPassword:''
     })

        

        
   }


    render(){
        const {closeSign} = this.props;
         return (
        <>
         <div className="header">
                <h1>Sign In</h1>
                 <AiOutlineClose className="close" onClick={closeSign}/>
                 </div> 
                 <form>
                    <label htmlFor="email">Email</label>
                 <input type="email" name="email" required  value={this.state.email} onChange={this.handleChange} placeholder="Email.." className="input-form"/>
                 <label htmlFor="password">Password</label>
                 <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} placeholder="Password.." className="input-form"/>
                 <label htmlFor="confirmPassword">Confirm Password</label>
                 <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Password.." className="input-form"/>
                 <button className="btn" type="submit" onClick={this.handleSubmit}>Submit</button>
                 </form>   
                </>
      
    )
    }

}
