const Session = require("./session");
const catUrl1 = require("../assets/cat1.png");
const frogUrl1 = require("../assets/frog1.png")
const alienUrl1 = require("../assets/alien1.png")
import css from '../css/style.css';

const GAMEHEIGHT = 400;
const GAMEWIDTH = 1200;
const ICONSIZE = 37;

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById("canvas");
    canvasEl.width = GAMEWIDTH;
    canvasEl.height = GAMEHEIGHT;

    const ctx = canvas.getContext('2d');
    let session = new Session(ctx);
    createIcons();
    session.play();
})

const createIcons = () => {
    let cat = new Image(ICONSIZE, ICONSIZE);
    cat.src = catUrl1;
    document.getElementById('catIcon').appendChild(cat)

    let alien = new Image(ICONSIZE, ICONSIZE);
    alien.src = alienUrl1;
    document.getElementById('alienIcon').appendChild(alien)

    let frog = new Image(ICONSIZE, ICONSIZE);
    frog.src = frogUrl1;
    document.getElementById('frogIcon').appendChild(frog)
}