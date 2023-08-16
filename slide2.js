var timeOut2 = 500;
var slideIndex2 = 0;
var autoOn2 = true;

autoSlides2();

function autoSlides2() {
  timeOut2 = timeOut2 - 20;

  if (autoOn2 == true && timeOut2 < 0) {
    showSlides2();
  }
  setTimeout(autoSlides2, 20);
}

function prevSlide2() {
  timeOut2 = 2000;

  var slides2 = document.getElementsByClassName("mySlides-2");
  var dots2 = document.getElementsByClassName("slide-dot-2");

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slideIndex2--;

  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  if (slideIndex2 == 0) {
    slideIndex2 = 7;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2";
}

function showSlides2() {
  timeOut2 = 5000;

  var slides2 = document.getElementsByClassName("mySlides-2");
  var dots2 = document.getElementsByClassName("slide-dot-2");

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slideIndex2++;

  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2";
}