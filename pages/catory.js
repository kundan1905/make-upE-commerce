

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import {getFirestore,collection,setDoc,doc, getDoc, getDocs,}from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi4o9aVj7ZMcXMGkfbWaKv4FSqM1M5LbI",
  authDomain: "suhagan-saree.firebaseapp.com",
  databaseURL: "https://suhagan-saree-default-rtdb.firebaseio.com",
  projectId: "suhagan-saree",
  storageBucket: "suhagan-saree.appspot.com",
  messagingSenderId: "687122214714",
  appId: "1:687122214714:web:e3b0fd2ac56bd24f476a03",
};


// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
var queryString = location.search.substring(1);

var product_Category = queryString.split("|")[0];

getProductcat(product_Category)
async function getProductcat(productID){
    if(queryString.split("|")[0] !== null){
        var ref = collection(db, product_Category);
        const disname = document.getElementById("saree__container"); 
        getDocs(ref)
        .then((snapshot) => {
         let PRODUCT = []
         snapshot.docs.forEach((doc) => {
          PRODUCT.push({...doc.data(), id: doc.id})
          console.log(PRODUCT)
          disname.innerHTML +=`
          <div class="colm">
          <div class="heart">
            <i class="fa-regular fa-heart"></i>
          </div>
            <img src="image/longonepiece/GAWON1.png">
            <h4>GAWON</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
           </div>
            <p>&#8377;1100</p>
        </div>

      `


         })
        
         })
    }
}
