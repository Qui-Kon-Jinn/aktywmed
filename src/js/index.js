// Import all of Bootstrap's JS

import bootstrap from 'bootstrap'

// Typed.js

// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings'
// });


// change te font size class for nav links

const links = document.querySelector("#nav-links");

const toggleNavLinksFontstyle = () => {

  if (window.matchMedia("(min-width: 992px)").matches) {
    links.classList.remove("fs-6");
    links.classList.add("fs-5");
  } else {
    links.classList.remove("fs-5");
    links.classList.add("fs-6");
  }
}
toggleNavLinksFontstyle();
window.addEventListener("resize", toggleNavLinksFontstyle);

// back to top button

//Get the button

let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const dariuszFoto = document.getElementById("dariuszFoto");
const wkladkiPicture = document.querySelectorAll(".wkladkiPicture")
if (window.matchMedia("(max-width: 821px)").matches) {
  wkladkiPicture.forEach((pic) => {
    pic.classList.add("w-50")
  })
  dariuszFoto.classList.remove("w-25");
  dariuszFoto.classList.add("w-50")
} else {
  wkladkiPicture.forEach((pic) => {
    pic.classList.add("w-25")
  })
}