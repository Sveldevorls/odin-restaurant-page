import "./style.css"
import homeNode from "./home.js"
import menuNode from "./menu.js"

const contentField = document.getElementById("content");
const navButtons = document.querySelector("nav").querySelectorAll("button");
const pages = {
    "home": homeNode,
    "menu": menuNode,
}
let currentPage = "home";
let currentPageButton = document.getElementById(currentPage);

navButtons.forEach(button => button.addEventListener("mouseenter", (e) => {
    currentPageButton.classList.remove("current");
    e.target.classList.add("current");
}))

navButtons.forEach(button => button.addEventListener("mouseout", (e) => {
    e.target.classList.remove("current");
    currentPageButton.classList.add("current");
}))

navButtons.forEach(button => button.addEventListener("click", (e) => {
    console.log(e.target.id)
    render(e.target.id);
}))

function render(pageName){
    contentField.textContent = "";
    contentField.appendChild(pages[pageName]);
    currentPage = pageName;
    currentPageButton = document.getElementById(currentPage);
}

render("home");

