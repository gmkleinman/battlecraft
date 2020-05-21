const Game = require("./game")
const GAMEHEIGHT = 900
const GAMEWIDTH = 400

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = GAMEHEIGHT;
    canvasEl.height = GAMEWIDTH;

    const ctx = canvas.getContext('2d');
    game = new Game(ctx);
    game.start();

    document.getElementById("spawnCat").onclick = () => { 
        game.createArmy(game.players[0], 'cat');
    } 

    document.getElementById("spawnBlob").onclick = () => { 
        game.createArmy(game.players[1], 'blob');
    } 

})
