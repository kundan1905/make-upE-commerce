

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




const auth = getAuth();


// check wheather user or not 
onAuthStateChanged(auth,(user) =>{
  if (user){
   
   console.log('user status change',user)
   var queryString = location.search.substring(1);
var a = queryString.split("|");
console.log("myarry", queryString.split("|")[0]);
var docId = queryString.split("|")[0];



getProductData(docId)
async function getProductData(productID){

  var ref = doc(db, "PRODUCTS", docId);
  
 var order = document.getElementById("productorder")
  var data = await getDoc(ref);
  
  order.innerHTML=`

  <table>
  
  <tr>
    <th colspan="2">Your order</th>
  </tr>
  <tr>
      <td>Product Image</td>
      <td><img src="${data.data().product_image}"></td>
    </tr>
  <tr>
    <td>Product Name </td>
    <td>${data.data().item_name}</td>
  </tr>
  <tr>
    <td>Total Price </td>
    <td>&#8377;${data.data().item_price}</td>
  </tr>
  <tr>
    <td>Shipping</td>
    <td>Free shipping</td>
  </tr>
</table><br>
<div>
  <input type="radio" name="dbt" value="dbt" checked> Direct Bank Transfer
</div>
<p>
    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
</p>
<div>
  <input type="radio" name="dbt" value="cd"> Cash on Delivery
</div>
<div>
  <input type="radio" name="dbt" value="cd">Card Payment or UPI <span>
  <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50">
  </span>
</div>
<button type="button">Place Order</button>
</div>
  
  `

}
}
  else{
   document.getElementById("main_order").style.display="none";
  document.getElementById("id01").style.display="block";


   
   
 
 
  }
 adresssave(user.uid)
 adress(user.uid)
 
 })
//  for codition check wheather adress enter or not
async function adress(user){
  const addfor =collection(db,"USER",user,"USER_ADDRESS")
  const dat =  await getDocs(addfor)
  console.log("Document Address",dat.docs.length)
  if(dat.docs.length==0){
    document.getElementById("user_adress").style.display="block";
  


  }
  else{
    document.getElementById("user_adress").style.display="none";
   
    var add= document.getElementById("user_address_detail")
    const Ref= collection(db,"USER",user,"USER_ADDRESS")
    const data =  await getDocs(Ref)
    .then((snapshot) => {
      let adress = []
      snapshot.docs.forEach((doc) => {
       adress.push({...doc.data(), id: doc.id})
       console.log(adress)
       
      })
     
      var i = 0;
     for(i =0;i<adress.length;i++){
     add.innerHTML=`   
     <p>DELIVERY ADRESS</p>    
     <table class="user_address">
     <tr>
        <td>FIRST NAME </td>
         <td>${adress[i].firstname}</td>
     </tr>
      <tr>
         <td>PHONE NUMBER</td>
         <td>${adress[i].phone_number}</td>
       </tr>
       <tr>
         <td>PIN NUMBER </td>
         <td>${adress[i].pin_number}</td>
       </tr>
       <tr>
         <td>STREET ADDRESS</td>
         <td>${adress[i].street_Adress}</td>
       </tr>
       <tr>
         <td>APARTMENT</td>
         <td>${adress[i].user_apartment}</td>
       </tr>
     
     
   </table>
     
  
  `


     }
    

   
    }) 
  }
  
 }
 //users adress save

function adresssave(userID){
    
document.getElementById("adresssubmitID").onclick = ()=>{

   
  
      const firstname = document.getElementById("fname").value;
      const lastname =  document.getElementById("lname").value;
      const pinnumber = document.getElementById("pinnumber").value;
      const phone = document.getElementById("phone").value;
      const Street_Address = document.getElementById("houseadd").value;
      const apartment = document.getElementById("apartment").value;
      const city = document.getElementById("city").value;
      
      const myRef  =   doc(collection(db,"USER",userID,"USER_ADDRESS") )
      
      const data ={
         firstname:firstname,
         lastname:lastname,
         pin_number:pinnumber,
         phone_number: phone,
         street_Adress:Street_Address,
         user_apartment:apartment,
         user_city:city,
       
       }
     
       setDoc(myRef,data).then((data)=>{

           
      
      console.log("success")
    
  
    }).catch((error)=>{
      console.log(error)
    })
   }
 }





//log in 
const logemail = document.getElementById("Email-ID");
const logpassword = document.getElementById("Password-ID");
document.getElementById("login-ID").onclick = () => {
  //console.log("Started Login Process..")
  const auths=getAuth();
  signInWithEmailAndPassword(auths,logemail.value,logpassword.value).then((user) => {
    //console.log("Logged In Sucessfully.....")
    console.log(user.user);
    document.getElementById("main_order").style.display="block";
    document.getElementById('id01').style.display="none";
    
    var x = document.getElementById("snackbar1");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          
          logemail.value="";
         logpassword.value="";
          console.log(user)
         
  }).catch((e) =>{
    console.log(e)
  })

}
const forgotIpassword = () =>
{

sendPasswordResetEmail(auth,logemail.value)
  .then(() => {
    
   var x = document.getElementById("snackbar3");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 7000);
    
  
  })
  .catch((error) => {
  
  });

}
document.getElementById("forgotID").onclick=forgotIpassword;
