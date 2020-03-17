import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);


function App() {

  const provider = new firebase.auth.GoogleAuthProvider();


  const handleSignIn = () => {

    firebase.auth().signInWithPopup(provider).then(function(result) {



      const {displayName, photoURL, email} = result.user;
      console.log(displayName, email, photoURL);
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
     // var errorCode = error.code;
     // var errorMessage = error.message;
      // The email of the user's account used.
     // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
     // var credential = error.credential;
      // ...
    });
    

  }



  return (
    <div className="App">


      <button onClick={handleSignIn}>Sign in</button>
      
    </div>
  );
}

export default App;
