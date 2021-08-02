import React from 'react'
import Welcome from './Welcome'
import {auth,createUserDocumentProfile} from './Firebase'
import Homepage from './Homepage/Homepage.js'
import {Switch, Route} from 'react-router-dom'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribe = null;


  componentDidMount(){
      this.unsubscribe = auth.onAuthStateChanged(async userAuth=>{
        
       const userRef =await createUserDocumentProfile(userAuth);

       if(userAuth){
           userRef.onSnapshot(snapShot=>{
         this.setState({
           currentUser:{
            id:snapShot.id,
            ...snapShot.data()
           }
         })
       })
       }

       this.setState({currentUser:userAuth})

      })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    
     return (
    <div className="app">
      {
        this.state.currentUser?<Homepage/>:<Welcome/>
      }
    </div>
  );
  }
 
}

export default App;
