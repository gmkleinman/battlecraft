const Game = require("./game");

const MIN_X = 0;
const MAX_X = 1200;
const MIN_Y = 0;
const MAX_Y = 400;

class Session {
    constructor(ctx) {
        this.ctx = ctx;
        this.level = 0;
        this.game;
        this.done = false;
        this.nextLevel = false;
        this.reset = false;
    }

    setup() {
        this.game = new Game(this.ctx, this.level)
        this.game.setup();
        this.disableCanvasClick();
    }

    play() {
        this.setup();

        const gamePlay = setInterval(() => {
            this.renderLevelInfo();
            this.game.play()
            this.checkGameEnd();
            if(this.nextLevel === true) this.enableNextLevel();
            if(this.reset === true) this.resetGame();
        }, 4)

        //clearInterval(gamePlay) -> for game over
    }

    checkGameEnd() {
        if(this.game.baseDestroyed === 0) {
            this.renderLoss()
            this.enableReset()
            
        } else if(this.game.baseDestroyed === 1) {
            this.renderWin()
            this.enableNextLevel()
        }
    }

    nextLevel() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Next level!", 10, 50);
        this.level += 1;
        //remember to reset this flag
        this.disableCanvasClick();
    }

    resetGame() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Next level!", 10, 50);
        this.reset = false;
        this.setup();
    }

    enableNextLevel() {
        document.getElementById("canvas").onclick = () => { 
            this.nextLevel = true;
        } 
    }

    enableReset() {
        document.getElementById("canvas").onclick = () => { 
            this.reset = true;
        } 
    }

    disableCanvasClick() {
        document.getElementById("canvas").onclick = null;
    }

    renderWin() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("You win! Click anywhere to go to next level", 10, 50);
    }

    renderLoss() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("You lose :( Click anywhere to reset.", 10, 50);
    }

    renderLevelInfo() {
        document.getElementById('level').innerHTML = `${this.level}`
    }
}

module.exports = Session;