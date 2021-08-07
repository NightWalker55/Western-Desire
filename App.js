import React from 'react'
import Welcome from './src/Welcome'
import {auth,createUserDocumentProfile} from './src/Firebase'
import Homepage from './Homepage/Homepage.js'
import VintageShirt from './Pages/Vintage Shirt/VintageShirt'
import Tops from './Pages/Tops/Tops'
import Watches from './Pages/Watches/Watches'
import {Switch, Route} from 'react-router-dom'
import { HashRouter as Router} from 'react-router-dom'

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
       <Router basename={process.env.PUBLIC_URL}>
      {
        this.state.currentUser?
        <Switch>
            <Route exact path="/Western-Desire/" render={(props)=><Homepage {...props}/>}></Route>
             <Route exact path="/Western-Desire/Shirt" ><VintageShirt/></Route>
              <Route exact path="/Western-Desire/Tops" ><Tops/></Route>
               <Route exact path="/Western-Desire/Watches" ><Watches/></Route>
        </Switch>
        :
          
          <Route exact path="/Western-Desire"><Welcome/></Route>
        
       
      }
       </Router>
    </div>
  );
  }
 
}

export default App;
