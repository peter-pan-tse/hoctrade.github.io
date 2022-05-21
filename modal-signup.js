// JavaScript Document
// Get the modal
var modal1 = document.getElementById("modalSignInBox");
var modal2 = document.getElementById("modalSignUpBox");

// Get the button that opens the modal
var btn1 = document.getElementById("modalSignIn");
var btn2 = document.getElementById("modalSignUp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } if (event.target == modal2) {
    modal2.style.display = "none";
  }
}