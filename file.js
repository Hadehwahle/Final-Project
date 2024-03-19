//EXPANDABLE READ MORE LINK
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function changeBg() {
  var moreText = document.getElementById("more");

  
}

const menu = document.querySelector("#menu-links");
const btn = document.querySelector(".bar");
const changeIcon = document.querySelector("#bars");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show");
  changeIcon.classList.toggle("fa-xmark");
}