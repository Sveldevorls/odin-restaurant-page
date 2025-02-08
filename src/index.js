import "./style.css"

const navButtons = document.querySelector("nav").querySelectorAll("button");
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