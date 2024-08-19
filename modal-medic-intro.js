// JavaScript Document
// Get the modal
var modal2 = document.getElementById("modalIntroBox");

// Get the button that opens the modal
var btn2 = document.getElementById("modalintrod");
var btn3 = document.getElementById("modalintrot");
var btn4 = document.getElementById("modalintrom");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal2.style.display = "block";
}
btn4.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
	  modal2.style.display = "none";
  }
}