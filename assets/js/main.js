/*=============== SHOW MENU ===============*/
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("nav-close");
// show menu
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// hidden menu
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);
