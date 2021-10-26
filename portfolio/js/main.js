/* Burger menu show and hide */
const burger = document.getElementById("burger");
const navUL = document.getElementById("nav-ul");

burger.addEventListener("click", () => {
  navUL.classList.toggle("display");
});

/* Hide and display navigation on scroll */
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

/* Project one modal - KILDEHUNDEN */
document.getElementById("modalBtn01").onclick = function () {
  document.getElementById("modal01").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("modalSlideshow01").innerHTML = `
    <div class="mySlides fade">
      <img src="./img/kildehunden.png">
    </div>

    <div class="mySlides fade">
      <img src="./img/kildehunden-mobile-faq-top.png">
    </div>

    <div class="mySlides fade">
      <img src="./img/kildehunden-mobile-faq.png">
    </div>

    <div class="mySlides fade">
    <img src="./img/kildehunden-desktop.png">
  </div>

  <div class="mySlides fade">
  <img src="./img/kildehunden-desktop-faq.png">
</div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <br>
`;
  showSlides(slideIndex);
};

document.getElementById("modalClose01").onclick = function () {
  document.getElementById("modal01").style.display = "none";
  document.body.style.overflow = "initial";
  document.getElementById("modalSlideshow01").innerHTML = "";
};

/* Project two modal - MIXFEVER */
document.getElementById("modalBtn02").onclick = function () {
  document.getElementById("modal02").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("modalSlideshow02").innerHTML = `
  <div class="mySlides fade">
    <img src="./img/mixfever.png">
  </div>

  <div class="mySlides fade">
    <img src="./img/mixfever-search-active.png">
  </div>

  <div class="mySlides fade">
    <img src="./img/mixfever-discover-active.png">
  </div>

  <div class="mySlides fade">
  <img src="./img/mixfever-item-page.png">
</div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <br>
`;
  showSlides(slideIndex);
};

document.getElementById("modalClose02").onclick = function () {
  document.getElementById("modal02").style.display = "none";
  document.body.style.overflow = "initial";
  document.getElementById("modalSlideshow02").innerHTML = "";
};

/* Project three modal - LUNDSBJERGGAARD */
document.getElementById("modalBtn03").onclick = function () {
  document.getElementById("modal03").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("modalSlideshow03").innerHTML = `
  <div class="mySlides fade">
    <img src="./img/lundsbjerggaard-mobile-frontpage.png">
  </div>

  <div class="mySlides fade">
    <img src="./img/lundsbjerggaard-desktop-frontpage.png">
  </div>

  <div class="mySlides fade">
    <img src="./img/lundsbjerggaard-desktop-menu.png">
  </div>

  <div class="mySlides fade">
  <img src="./img/lundsbjerggaard-mobile-menu.png">
</div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <br>
`;
  showSlides(slideIndex);
};

document.getElementById("modalClose03").onclick = function () {
  document.getElementById("modal03").style.display = "none";
  document.body.style.overflow = "initial";
  document.getElementById("modalSlideshow03").innerHTML = "";
};

/* Slideshow - with help from w3schools.com */
var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

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

/* Animation */
anime({
  targets: ".first-page-sec h1",
  translateX: [-250, 0],
  duration: 1500,
});

anime({
  targets: "#waskiw-color",
  color: "#4F4F4F",
  duration: 2000,
  delay: 1000,
});

anime({
  targets: "#at",
  color: "#a5c6f9",
  duration: 2000,
  delay: 2200,
});

anime({
  targets: "#baa",
  color: "#7DA9AA",
  duration: 2000,
  delay: 2600,
});

anime({
  targets: "#focuspoint-color",
  color: "#a5c6f9",
  duration: 2000,
  delay: 3900,
});

anime({
  targets: "#projects-color",
  color: "#6a5fb2",
  duration: 2000,
  delay: 4600,
});

anime({
  targets: "#introduction-btn",
  translateX: [-250, 0],
  easing: "easeInOutExpo",
  duration: 1500,
  delay: 5000,
  color: ["#fafafa", "#000000"],
});

anime({
  targets: "#profile-pictere-img",
  translateX: [+250, 0],
  duration: 1600,
});

function contactSuccess(event) {
  event.preventDefault();
  const name = document.getElementById("fname");
  const email = document.getElementById("email");
  const message = document.getElementById("subject");
  if (name.value !== "" && email.value !== "" && subject.value !== "") {
    event.preventDefault();
    document.getElementById("submitButton").innerHTML =
      "Success! Thank you for contacting me.";
  }
}
