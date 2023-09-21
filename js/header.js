const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    logo.style.width = "80";
    navbar.style.width = "0";
  } else {
    logo.style.width = "240";
    navbar.style.width = "";
  }
});
