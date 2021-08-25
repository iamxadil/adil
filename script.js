// Selectors
const box = document.querySelector(".box");
const rec = document.querySelector(".rectangle");
const btn = document.querySelector(".right");
const btn2 = document.querySelector(".right-2");
const btns = document.querySelectorAll("li");
const sideBar = document.querySelector(".list");
const aboutPage = document.querySelector(".about-page");
const homePage = document.querySelector(".home-page");
const skillsPage = document.querySelector(".skills-page");
const bars = {
  html: document.querySelector(".progress-html"),
  css: document.querySelector(".progress-css"),
  js: document.querySelector(".progress-js"),
  py: document.querySelector(".progress-py"),
  ui: document.querySelector(".progress-ui"),
};
//Variables

let arr = [btn, btn2];
let b = Array.from(btns);
let all = [homePage, aboutPage, skillsPage];
isRight = true;

//Loops

for (e in bars) {
  bars[e].style.transition = "650ms ease-in-out";
}

all.map((e) => {
  e.style.transition = "850ms ease-in-out";
});

//Functions

function increment() {
  bars.html.style.width = "90%";
  bars.css.style.width = "100%";
  bars.js.style.width = "90%";
  bars.py.style.width = "65%";
  bars.ui.style.width = "95%";
}
function dec() {
  bars.html.style.width = "0";
  bars.css.style.width = "0";
  bars.js.style.width = "0";
  bars.py.style.width = "0";
  bars.ui.style.width = "0";
}

//Events

arr.forEach((button) => {
  button.addEventListener("click", () => {
    if (isRight) {
      sideBar.classList.add("active");
      button.innerHTML = `<i class="uil uil-angle-left"></i>`;
      isRight = false;
    } else {
      sideBar.classList.remove("active");
      button.innerHTML = `<i class="uil uil-angle-right"></i>`;
      isRight = true;
    }
  });
});

//Loops

//Events

btns.forEach((e) => {
  e.addEventListener("click", () => {
    if (e == b[0]) {
      dec();
      box.style.backgroundImage = ``;
      aboutPage.style.display = "none";
      skillsPage.style.display = "none";
      homePage.style.display = "flex";
      setTimeout(() => {
        aboutPage.style.opacity = "0";
        homePage.style.opacity = "1";
      }, 1);
    } else if (e == b[1]) {
      dec();
      homePage.style.display = "none";
      skillsPage.style.display = "none";
      box.style.backgroundImage = `linear-gradient(to left, rgba(71, 71, 71, 0.6), rgba(0, 0, 0, 0.616)), url('./Images/saturn.jpg')`;
      aboutPage.style.display = "flex";
      setTimeout(() => {
        homePage.style.opacity = "0";
        skillsPage.style.opacity = "0";
        aboutPage.style.opacity = "1";
      }, 1);
    } else if (e == b[2]) {
      box.style.backgroundImage = ``;
      homePage.style.display = "none";
      aboutPage.style.display = "none";
      skillsPage.style.display = "flex";
      setTimeout(() => {
        homePage.style.opacity = "0";
        aboutPage.style.opacity = "0";
        skillsPage.style.opacity = "1";
      }, 1);

      setTimeout(() => {
        increment();
      }, 650);
    } else if (e == b[3]) {
      console.log("Projects");
    } else {
      console.log("Contacts");
    }
  });
});
