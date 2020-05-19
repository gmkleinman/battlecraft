const Game = require("./game")

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 900;
    canvasEl.height = 400;

    const ctx = canvas.getContext('2d');
    game = new Game(ctx);
    game.start();

    document.getElementById("spawnGreen").onclick = () => { 
        game.createArmy('green');
    } 

    document.getElementById("spawnRed").onclick = () => { 
        game.createArmy('red');
    } 


})
