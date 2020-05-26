const Session = require("./session")
const GAMEHEIGHT = 400
const GAMEWIDTH = 1200
import css from '../css/style.css';

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById("canvas");
    canvasEl.width = GAMEWIDTH;
    canvasEl.height = GAMEHEIGHT;

    const ctx = canvas.getContext('2d');
    let session = new Session(ctx);
    session.play();
})