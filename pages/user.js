import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import{getFirestore,collection,setDoc,doc, getDoc, getDocs,} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAi4o9aVj7ZMcXMGkfbWaKv4FSqM1M5LbI",
    authDomain: "suhagan-saree.firebaseapp.com",
    databaseURL: "https://suhagan-saree-default-rtdb.firebaseio.com",
    projectId: "suhagan-saree",
    storageBucket: "suhagan-saree.appspot.com",
    messagingSenderId: "687122214714",
    appId: "1:687122214714:web:e3b0fd2ac56bd24f476a03"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig)
   const db  = getFirestore();
   const auth = getAuth();
   onAuthStateChanged(auth,(user) =>{
    if (user){
     
     console.log('user status change',user)
     
     userinfo(user.uid)
     
    
    }
    else{
     userinfo(null)
     
     console.log('user status change' ,user)

   
    }
   })
