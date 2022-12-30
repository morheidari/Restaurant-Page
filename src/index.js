import "./style.css";
import imgBg from "./bgimage.jpg";
const {addMainHome} = require("./home.js");
const {addMenu} = require("./menu.js");
const {addInfo} = require("./info.js");

const content = document.getElementById('content');
const bg = document.createElement("div");
bg.classList.add("background");
const bgImg = new Image();
bgImg.src = imgBg;
bg.appendChild(bgImg);
content.appendChild(bg);
const header = document.createElement("div");
header.classList.add("header");
const logo = document.createElement("div");
logo.classList.add("logo");
logo.textContent = "The Last Supper Restaurant";
header.appendChild(logo);
const nav = document.createElement("div");
nav.classList.add("nav");
const ul = document.createElement("ul");
const home = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.classList.add('homelink');
homeLink.textContent = "Home";
home.appendChild(homeLink);
const menu = document.createElement("li");
const menuLink = document.createElement("a");
menuLink.classList.add("menulink");
menuLink.textContent = "Menu"
menu.appendChild(menuLink);
const info = document.createElement("li");
const infoLink = document.createElement("a");
infoLink.classList.add("infolink");
infoLink.textContent = "Info";
info.appendChild(infoLink);
ul.appendChild(home);
ul.appendChild(menu);
ul.appendChild(info);
nav.appendChild(ul);
header.appendChild(nav);
content.appendChild(header);
const main = document.createElement("div");
main.classList.add('main');
content.appendChild(main);
addMainHome(main);
const links = Array.from(document.querySelectorAll('li>a'));
links.forEach(link => {
    link.addEventListener('click', e => {
        const className = e.target.className;
        main.removeChild(main.firstChild);
        switch (className){
            case "homelink":
                addMainHome(main);
                break;
            case "menulink":
                addMenu(main);
                break;
            case "infolink":
                addInfo(main);
                break;    
        }
    })
});
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "©copyright @morheidari";
content.appendChild(footer);
