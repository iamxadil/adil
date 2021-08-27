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
const projectsPage = document.querySelector(".projects-page");
const projectNames = document.querySelectorAll(".project-name h1");
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
let all = [homePage, aboutPage, skillsPage, projectsPage];
isRight = true;

//Loops

for (i in bars) {
  bars[i].style.transition = "650ms ease-in-out";
}

for (x in all) {
  all[x].style.transition = "850ms ease-in-out";
}

//Functions

function increment() {
  bars.html.style.width = "90%";
  bars.css.style.width = "100%";
  bars.js.style.width = "90%";
  bars.py.style.width = "65%";
  bars.ui.style.width = "95%";
}
function decrement() {
  bars.html.style.width = "0";
  bars.css.style.width = "0";
  bars.js.style.width = "0";
  bars.py.style.width = "0";
  bars.ui.style.width = "0";
}

function zero() {
  projectNames.forEach((x) => {
    x.style.opacity = "0";
  });
}

function one() {
  projectNames.forEach((x) => {
    x.style.opacity = "1";
  });
}

//Events

//Menu Pop Up
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

//Menu Buttons
btns.forEach((e) => {
  e.addEventListener("click", () => {
    if (e == b[0]) {
      decrement();
      zero();
      box.style.backgroundImage = ``;
      aboutPage.style.display = "none";
      skillsPage.style.display = "none";
      projectsPage.style.display = "none";
      homePage.style.display = "flex";
      setTimeout(() => {
        aboutPage.style.opacity = "0";
        skillsPage.style.opacity = "0";
        projectsPage.style.opacity = "0";
        homePage.style.opacity = "1";
      }, 1);
    } else if (e == b[1]) {
      decrement();
      zero();
      homePage.style.display = "none";
      skillsPage.style.display = "none";
      projectsPage.style.display = "none";
      box.style.backgroundImage = `linear-gradient(to left, rgba(71, 71, 71, 0.6), rgba(0, 0, 0, 0.616)), url('./Images/saturn.jpg')`;
      aboutPage.style.display = "flex";
      setTimeout(() => {
        homePage.style.opacity = "0";
        skillsPage.style.opacity = "0";
        projectsPage.style.opacity = "0";
        aboutPage.style.opacity = "1";
      }, 1);
    } else if (e == b[2]) {
      zero();
      box.style.backgroundImage = ``;
      homePage.style.display = "none";
      aboutPage.style.display = "none";
      skillsPage.style.display = "flex";
      projectsPage.style.display = "none";
      setTimeout(() => {
        homePage.style.opacity = "0";
        aboutPage.style.opacity = "0";
        projectsPage.style.opacity = "0";
        skillsPage.style.opacity = "1";
      }, 1);

      setTimeout(() => {
        increment();
      }, 650);
    } else if (e == b[3]) {
      decrement();
      box.style.backgroundImage = ``;
      homePage.style.display = "none";
      aboutPage.style.display = "none";
      skillsPage.style.display = "none";
      projectsPage.style.display = "flex";
      setTimeout(() => {
        homePage.style.opacity = "0";
        aboutPage.style.opacity = "0";
        skillsPage.style.opacity = "0";
        projectsPage.style.opacity = "1";
      }, 1);
      setTimeout(() => {
        one();
      }, 850);
    } else {
      console.log("Contacts");
    }
  });
});