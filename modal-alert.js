// JavaScript Document
// Get the modal
var modal = document.getElementById("modalInfoBox");
var modalAlert = document.getElementById("modalAlertBox");

// Get the button that opens the modal
var btn1 = document.getElementById("modalinfo1");
var btn2 = document.getElementById("modalAlert");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modalAlert.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
/* When the user clicks on <span> (x), close the modal*/
span.onclick = function() {
	modalAlert.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	  modal.style.display = "none";
  } else if (event.target == modalAlert) {
	  modalAlert.style.display = "none";
  }
}