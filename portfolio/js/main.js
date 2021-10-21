/* Burger menu show and hide */
const burger = document.getElementById("burger");
const navUL = document.getElementById("nav-ul");

burger.addEventListener("click", () => {
  navUL.classList.toggle("display");
});

var scrollStart = 0;
window.onscroll = scrollShowNav;
function scrollShowNav(event) {
  var currentScrollValue = document.documentElement.scrollTop;
  if (currentScrollValue > scrollStart) {
    document.getElementsByTagName("nav")[0].style.top = "-125px";
    navUL.classList.remove("display");
  } else {
    document.getElementsByTagName("nav")[0].style.top = "0px";
  }
  scrollStart = document.documentElement.scrollTop;
}

var modal = document.getElementById("modal01");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "initial";
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
}
