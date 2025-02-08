import "./style.css"
import homeNode from "./home.js"
import menuNode from "./menu.js"
import aboutNode from "./about.js"

const contentField = document.getElementById("content");
const navButtons = document.querySelector("nav").querySelectorAll("button");
const pages = {
    "home": homeNode,
    "menu": menuNode,
    "about": aboutNode,
}
let currentPage = "home";
let currentPageButton = document.getElementById(currentPage);
let pageVisible = false;

navButtons.forEach(button => button.addEventListener("mouseenter", (e) => {
    currentPageButton.classList.toggle("current");
    e.target.classList.toggle("current");
}))

navButtons.forEach(button => button.addEventListener("mouseout", (e) => {
    e.target.classList.toggle("current");
    currentPageButton.classList.toggle("current");
}))

navButtons.forEach(button => button.addEventListener("click", (e) => {
    render(e.target.id);
}))

function render(pageName){
    contentField.textContent = "";
    contentField.appendChild(pages[pageName]);
    currentPage = pageName;
    currentPageButton = document.getElementById(currentPage);
}

render("home");

