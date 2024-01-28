const hamburgerIcon = document.querySelector(".hamburger-icon");
console.log(hamburgerIcon);
const menu = document.querySelector(".menu");
console.log(menu);
const triangle = document.querySelector(".triangle");
console.log(triangle);

hamburgerIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
  triangle.classList.toggle("show");
});
