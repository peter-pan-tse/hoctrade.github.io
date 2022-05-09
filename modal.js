// JavaScript Document
// Get the modal
var modal = document.getElementById("modalInfoBox");

// Get the button that opens the modal
var btn1 = document.getElementById("modalinfo1");
var btn2 = document.getElementById("modalinfo2");
var btn3 = document.getElementById("modalinfo3");
var btn4 = document.getElementById("modalinfo4");
var btn5 = document.getElementById("modalinfo5");
var btn6 = document.getElementById("modalinfo6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
btn5.onclick = function() {
  modal.style.display = "block";
}
btn6.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}