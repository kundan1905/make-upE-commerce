

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import {getFirestore,collection,setDoc,doc, getDoc, getDocs,} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6_MHOpYkw-AVZoJLOx98fyPBsv2e5VEs",
  authDomain: "makeup--ecom.firebaseapp.com",
  projectId: "makeup--ecom",
  storageBucket: "makeup--ecom.appspot.com",
  messagingSenderId: "66493610619",
  appId: "1:66493610619:web:c31a87fdcdfda5fa1900de"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

var queryString = location.search.substring(1);
var a = queryString.split("|");
console.log("myarry", queryString.split("|")[0]);
console.log("myarry", queryString.split("|")[2]);


var docId = queryString.split("|")[1];
console.log(docId);


getProductData(docId)
async function getProductData(){
if ( queryString.split("|")[2] == "true" ) {
  const ref = doc(db, "PRODUCTS", docId);
  
  
  const desp_product=document.getElementById("product");
  
  const data = await getDoc(ref);
 
  desp_product.innerHTML=`
  <div class = "card-wrapper">
  <div class = "card">
    <!-- card left -->
    <div class = "product-imgs">
      <div class = "img-display">
        <div class = "img-showcase">
          <img src = ${data.data().product_image}>
          <img src = "./image/mensjeans/jeans6a.png">
          <img src = "./image/mensjeans/jeans6.png"> 
          <img src = "./image/mensjeans/jeans6a.png">
        </div>
      </div>
      <div class = "img-select">
        <div class = "img-item">
          <a href = "#" data-id = "1">
          <img src = ${data.data().product_image} >
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "2">
          <img src = ${data.data().product_image2} >
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "3">
          <img src = "./image/mensjeans/jeans6.png" >
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "4">
          <img src = "./image/mensjeans/jeans6a.png" >
          </a>
        </div>
      </div>
    </div>
    <!-- card right -->
    <div class = "product-content">
      <h2 class = "product-title">${data.data().item_name}</h2>
      
      <div class = "product-rating">
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star-half-alt"></i>
        <span>4.7(21)</span>
      </div>

      <div class = "product-price">
        
        <p class = "new-price">New Price: <span>&#8377;${data.data().item_price} (5%) Discount</span></p>
      </div>

      <div class = "product-detail">
        <h2>about this item: </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
        <ul>
          <li>Color: <span>${data.data().product_color}</span></li>
          <li>Available: <span class=" in_stock">IN STOCK</span></li>
          <li>Category: <span>${data.data().product_Category}</span></li>
          
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>

      <div class = "purchase-info">
        <input type = "number" min = "0" value = "1">
        <button type = "button" class = "btn">
          Add to Cart <i class = "fas fa-shopping-cart"></i>
        </button>
        <a href="placeorder.html?${docId}"><button type = "button" class = "btn">BUY NOW</button></a>
      </div>
    </div>
  `


}
else {
  var ref = doc(db, "PRODUCTS", docId);
  var desp_product=document.getElementById("product");

  var data = await getDoc(ref);
  

  desp_product.innerHTML =`
  <div class = "card-wrapper">
  <div class = "card">
    <!-- card left -->
    <div class = "product-imgs">
      <div class = "img-display">
        <div class = "img-showcase">
          <img src = ${data.product_image}>
          <img src = ${data.product_image2}>
         
        </div>
      </div>
      <div class = "img-select">
        <div class = "img-item">
          <a href = "#" data-id = "1">
          <img src = "./image/mensjeans/jeans6.png" >
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "2">
          <img src = "./image/mensjeans/jeans6a.png" >
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "3">
          <img src = "./image/mensjeans/jeans6.png" >
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "4">
          <img src = "./image/mensjeans/jeans6a.png" >
          </a>
        </div>
      </div>
    </div>
    <!-- card right -->
    <div class = "product-content">
      <h2 class = "product-title">${data.item_name}</h2>
      
      <div class = "product-rating">
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star-half-alt"></i>
        <span>4.7(21)</span>
      </div>

      <div class = "product-price">
        
        <p class = "new-price">New Price: <span>&#8377;${data.item_price} (5%) Discount</span></p>
      </div>

      <div class = "product-detail">
        <h2>about this item: </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
        <ul>
          <li>Color: <span>Black</span></li>
          <li >Available: <span class="out_of_stock">OUT OF STOCK</span></li>
          <li>Category: <span>${data.product_Category}</span></li>
          
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>

      <div class = "purchase-info">
        <input type = "number" min = "0" value = "1">
        <button type = "button" class = "btn">
          Add to Cart <i class = "fas fa-shopping-cart"></i>
        </button>
        <a href="placeorder.html?${data.docId}"><button type = "button" class = "btn">BUY NOW</button></a>
      </div>
    </div>
  `

}

}

