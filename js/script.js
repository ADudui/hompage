console.log("Cześć!");

let button = document.querySelector(".section__button");
let picture = document.querySelector(".section__picture");
button.addEventListener("click", () => {
    picture.remove();
});

let backgroundbutton = document.querySelector(".backgroundbutton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
backgroundbutton.addEventListener("click", () => {
    body.classList.toggle("bodyDark");
    if (body.classList.contains("bodyDark")) {
        themeName.innerText = "a light";
    } else {
        themeName.innerText = "a dark";
    }
});
