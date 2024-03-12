const menu = document.querySelector("#menu-links");
const btn = document.querySelector(".bar");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show");
}
