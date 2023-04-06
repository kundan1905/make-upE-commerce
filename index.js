import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import  {getFirestore,collection,setDoc,doc, getDoc, getDocs,} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'


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
  initializeApp(firebaseConfig)
   const db  = getFirestore();
  



  const prom =collection(db,"PRODUCTS")
  const disname = document.getElementById("card__container"); 
  getDocs(prom)
  .then((snapshot) => {
   let PRODUCTS = []
   snapshot.docs.forEach((doc) => {
    PRODUCTS.push({...doc.data(), id: doc.id})
  
   
    
   
   console.log(PRODUCTS)
    
   })

   var i = 0;
   for(i =0;i<PRODUCTS.length;i++){
  if (PRODUCTS[i].is_available == true){
    disname.innerHTML += ` 
    <div class="colm">
        <div class="heart" >
            <i class="fa-regular fa-heart"></i>
          </div>
          <a href="description.html?${PRODUCTS[i].product_type}|${PRODUCTS[i].product_id}|${PRODUCTS[i].is_available}" ><img src=${PRODUCTS[i].product_image}></a>
        <h4>${PRODUCTS[i].item_name}</h4>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
         </div>
         <p class="in_stock">IN STOCK<p>
        <p>&#8377;${PRODUCTS[i].item_price}<p>
        
    </div>

    `
  } 
  else{
    disname.innerHTML += `  
    <div class="colm">
        <div class="heart" id="heart1"  onclick="toggle1()" >
            <i class="fa-regular fa-heart"></i>
          </div>
          <a href="description.html?${PRODUCTS[i].product_type}|${PRODUCTS[i].product_id}|${PRODUCTS[i].is_available}" ><img src="image/mensjeans/jeans1.jpeg"></a>
        <h4>${PRODUCTS[i].item_name}</h4>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
         </div>
         <p class="out_of_stock">OUT OF STOCK<p>
        <p>&#8377;${PRODUCTS[i].item_price}<p>
        
    </div>

    `

  }
   }
   
   
   
   
  })
  .catch((e)=>{
    console.log(e)
  })

  //   function getproduct(id){
  //     var indstart=id.indexof('-') + 1;
  //     var indend=id.length;
  //     return Number(id.substring(indstart,indend));

  //   }
  //   function gotoproduct(event){
  //     var index =getproduct(event.target.id);
  //     localStorage.Product=JSON.stringify(PRODUCTS)
  //   }
  // })

  const SAR=collection(db,"PRODUCTS/SHAREE/COTTON");
  const sareediplay = document.getElementById("saree__container"); 
  getDocs(SAR)
  .then((snapshot) => {
   const PRODUCTS = []
   snapshot.docs.forEach((doc) => {
    const detail = doc.data()
    PRODUCTS.push({...doc.data(), id: doc.id})
  
    
    sareediplay.innerHTML += `</div>
   <div class="colm">
       <div class="heart" id="heart1"  onclick="toggle1()" >
           <i class="fa fa-heart"></i>
         </div>
         <a href="description.html" > <img src="image/sareebanari/redwhite1i.png"></a>
       <h4>${PRODUCTS.item_name}</h4>
       <div class="rating">
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
        </div>
       <p>&#8377;${detail.item_price}<p>
   </div>
   `
   
   })
   console.log(PRODUCTS)
   
   
   
  })
  .catch((e)=>{
    console.log(e.message)
  })
  

  
  

//  //user database
//  document.getElementById("submit").onclick = ()=>{
  
//     const firstname = document.getElementById("fname").value;
//     const lastname =  document.getElementById("lname").value;
//     const moblie = document.getElementById("moblie").value;
//     const password = document.getElementById("password").value;
   
//     const data ={


       
//        firstname:firstname,
//        lastname:lastname,
//        moblie: moblie,
//        password: password
      
//      }
 
   
//   setDoc(ref,data).then((data)=>{
//     console.log(success)
  

//   }).catch((error)=>{
//     console.log(error)
//   })
//  }


 //Sing up
 const auth = getAuth();
 const firstname = document.getElementById("fname-ID");
 const lastname =  document.getElementById("lname-ID");
 const email = document.getElementById("Email_ID");
 const password = document.getElementById("Password_ID");
 //sing up
document.getElementById("Submit-ID1").onclick = () => {

    const auth = getAuth();


 createUserWithEmailAndPassword(auth,email.value, password.value).then((user) => {
        console.log(user.user.uid);
        console.log(user.user)
        const  myData ={
          UID:user.user.uid,
          user_email:email.value,
          user_firstname:firstname.value,
          user_lastname:lastname.value,
          user_password:password.value,
          user_register_date:new Date(),
        }
        const userRef = doc(db,"USER",user.user.uid);
        setDoc(userRef , myData)
        
        firstname.value="";
        lastname.value="";
        email.value="";
        password.value="";

       
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        
      }).catch((e)=>{
        console.log(e.message)
      })
     

}
const logemail = document.getElementById("Email-ID");
const logpassword = document.getElementById("Password-ID");
document.getElementById("login-ID").onclick = () => {
  //console.log("Started Login Process..")
  const auths=getAuth();
  signInWithEmailAndPassword(auths,logemail.value,logpassword.value).then((user) => {
    //console.log("Logged In Sucessfully.....")
   
    console.log(user.user);
    var x = document.getElementById("snackbar1");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
        
          logemail.value="";
         logpassword.value="";
          console.log(user)
          document.getElementById('id01').style.display="none";
         
  }).catch((e) =>{
    if(e){
    var x = document.getElementById("snackbar5");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    }
    
    console.log(e.message)
  })

}



document.getElementById("logoutbtn").onclick = () =>
{
  const authes = getAuth();
  signOut(authes).then(() => {
   // console.log("logout")
   window.location="../index.html";
   var x = document.getElementById("snackbar2");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  
  }).catch((e) => {
    console.log(e)
  });
}
//auth change
 onAuthStateChanged(auth,(user) =>{
 if (user){
  
  console.log('user status change',user)
  document.getElementById("logoutID").style.display="block";
  document.getElementById("login_d").style.display="none";
  document.getElementById("login_S").style.display="none";
  userinfo(user.uid)
  
 
 }
 else{
  userinfo(null)
  
  console.log('user status change' ,user)
  document.getElementById("logoutID").style.display="none";
  document.getElementById("login_d").style.display="block";
  document.getElementById("login_S").style.display="block";

 }
})




async function userinfo(userID) {
  const USERNAME = document.getElementById("USERNAME"); 
  
  const USERINFO = document.getElementById("USEREMAIL"); 
  console.log(userID)
  if(userID){
    const myRef  = doc(db,"USER",userID)

    // const ref = collection(db,"USER/"+userID)
    const daa = await getDoc(myRef)

    USERINFO.innerHTML = `
        <h2>${daa.data().user_email}
        </h2>
        `
        USERNAME.innerHTML = `<h1>${daa.data().user_firstname}</h2>
      `


//user profil photo


//     console.lo.log(ref)
//     getDocs(ref)
//     .then((snapshot) => {
//      let USER = []
//      snapshot.docs.forEach((doc) => {
//       USER.push({...doc.data(), id:doc.id})

//      console.log("I am logging : ",userID)
    
//   })
//     .catch((e)=>{
//       console.log(e.message)
//     })
  
  }
  
  

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

//top arrow
const scrolltotop = () =>{
  window.scroll({
    top:0,
    behavior:"smooth"
  });
};

document.getElementById("uparrow").onclick =scrolltotop;












//






