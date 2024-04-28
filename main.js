const menu = document.querySelector("#menu-links");
const btn = document.querySelector(".bar");
const changeIcon = document.querySelector("#bars");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show");
  changeIcon.classList.toggle("fa-xmark");
}

let availableKeywords = [
  "Frontend Development",
  "Data Analytics",
  "Fullstack Design",
  "Fullstack Software Engineering",
  "UI/UX Design",
  "Professional Google Sheets and Forms",
  "Project Management",
  "Graphic Design",
];

const resultBox = document.querySelector("#result-box");
const inputBox = document.querySelector("#input-box");
const myButn = document.querySelector("#my-btn");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
  resultBox.style.display = "block";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}

myButn.addEventListener("click", () => {
  let searchResult = inputBox.value;
  myValue = searchResult.toLowerCase();
  if (myValue == "fullstack design") {
    window.open("fullstack-design.html");
  }
  if (myValue == "frontend development") {
    window.open("frontend.html");
  }
  // if (myValue == "data analytics") {
  //   window.open("analytics.html");
  // }
  if (myValue == "ui/ux design") {
    window.open("ui.html");
  }
  if (myValue == "fullstack software engineering") {
    window.open("nano-degree.html");
  }
  if (myValue == "professional google sheets and forms") {
    window.open("googlesheets.html");
  }
  if (myValue == "project management") {
    window.open("project-management.html");
  }
  if (myValue == "") {
    alert("Please input a course!");
  }
});
