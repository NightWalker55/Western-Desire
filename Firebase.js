import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyASng3B7QOlp_8YECdmXgdhD4bdWCjHlPA",
    authDomain: "western-desire.firebaseapp.com",
    projectId: "western-desire",
    storageBucket: "western-desire.appspot.com",
    messagingSenderId: "16470919477",
    appId: "1:16470919477:web:9c3dfe4b4092a45702a47c"
  };

  const app = firebase.initializeApp(firebaseConfig);


  export const createUserDocumentProfile = async(userAuth,additionalData)=>{
    if(!userAuth)return;
    const userRef = firestore.doc(`users/${auth.uid}`);
    const snapShot =await userRef.get();
    

    if(!snapShot.exists){
        
    const {email,displayName} = userAuth;
    const createdAt = new Date();
    
     
      try{
        await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
      }catch(error){
        console.log('Error')
      }

    
    }

    return userRef


  }

 export const auth = app.auth();
 export const firestore = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = ()=>auth.signInWithPopup(provider)