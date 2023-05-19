import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCCjgndhwe-U4Towvsd3LZZ1MSSYinVNs0",
  authDomain: "auth-twitter-ec45e.firebaseapp.com",
  projectId: "auth-twitter-ec45e",
  storageBucket: "auth-twitter-ec45e.appspot.com",
  messagingSenderId: "607730217650",
  appId: "1:607730217650:web:2dfd0bb824fd0233dbcfab",
  
    
});

const auth = app.auth();
export { auth };
export default app;