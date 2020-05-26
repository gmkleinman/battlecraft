const Session = require("./session")
const GAMEHEIGHT = 400
const GAMEWIDTH = 1200

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById("canvas");
    canvasEl.width = GAMEWIDTH;
    canvasEl.height = GAMEHEIGHT;

    const ctx = canvas.getContext('2d');
    session = new Session(ctx);
    session.play();



})
