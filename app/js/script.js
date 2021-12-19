// call hambuger toggle icon
const btnHamburger = document.querySelector("#btnHamburger");
//call body tag
const body = document.querySelector("body");
// call header class
const header = document.querySelector(".header");
// call overlay div
const overlay = document.querySelector(".overlay");
// call overlay div & menu mobile
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  //close hamburger menu
  if (header.classList.contains("open")) {
    //scroll property
    body.classList.remove("no-scroll");
    //toggle icon animation
    header.classList.remove("open");
    // animations
    fadeElements.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  }
  //open hamburger menu
  else {
    //no scroll property
    body.classList.add("no-scroll");
    //toggle icon animation
    header.classList.add("open");
    // animations
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
