function openForm() {
  document.getElementById("myFor").style.display = "block";
}

function closeForm() {
  document.getElementById("myFor").style.display = "none";
}

function openlog() {
  let o1 = document.getElementById("id01");
  if (o1.style.display == "none") {
    o1.style.display = "block";
  } else {
    o1.style.display = "none";
  }
}

function openlog1(){
   document.getElementById("id01").style.display = "block";
  document.getElementById("id02").style.display = "none";

}

function openlog2() {
  openlog();
  document.getElementById("id02").style.display = "block";
}

function validateForm() {
  let x = document.forms["loginfor"]["uname"].value;
  let y = document.forms["loginfor"]["psw"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (y == "") {
    alert("enter your password");
    return false;
  }
}
//back
function goback() {
  window.history.back();
}

//moblie bar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var modal1 = document.getElementById("mySidebar");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

//heart
var hrt = document.getElementById("heart1");
function toggle1() {
  if (hrt.style.color == "red") {
    hrt.style.color = "black";
  } else {
    hrt.style.color = "red";
  }
}
