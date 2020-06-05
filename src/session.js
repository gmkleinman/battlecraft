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
        this.gamePlay;
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
        this.gamePlay = setInterval(() => {
            if (this.level === 0) {
                this.renderStartScreen();
                this.enableNextLevel();
                if(this.nextLevel === true) this.loadNextLevel();
            } else {
                this.renderLevelInfo();
                this.game.play()
                this.checkGameEnd();
                if(this.nextLevel === true) this.loadNextLevel();
                if(this.reset === true) this.resetGame();
            }
            
        }, 17) //17 is 60FPS
    }

    renderStartScreen() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "900 30px Arial";
        this.ctx.fillStyle = "#000654"
        this.ctx.fillText("RECRUIT WILDLIFE", 100, 85);        
        this.ctx.fillText("DEFEND NATURE", 450, 85);        
        this.ctx.fillText("DESTROY OIL RIGS", 777, 85);        
        this.ctx.font = "900 50px Arial";
        this.ctx.fillText("CLICK TO START!", MAX_X/2-240, MAX_Y/2+15);        
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

    loadNextLevel() {
        clearInterval(this.gamePlay);
        this.nextLevel = false;
        this.play();
    }

    resetGame() {
        this.reset = false;
        this.level = 0;
        this.setup();
    }

    enableNextLevel() {
        document.getElementById("canvas").onclick = () => { 
            this.nextLevel = true;
            this.level += 1;
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
        this.ctx.fillStyle = "#000654"
        this.ctx.font = "900 50px Arial";
        this.ctx.fillText(`YOU WIN! CLICK TO GO TO LEVEL ${this.level + 1}!`, 155, MAX_Y/2+15);
        this.game.players[0].income = 0;
    }

    renderLoss() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.fillStyle = "#000654"
        this.ctx.font = "900 50px Arial";
        this.ctx.fillText("YOU LOSE :(    CLICK TO RESET", 200, MAX_Y/2+15);
        this.game.players[0].income = 0;
    }

    renderLevelInfo() {
        document.getElementById('level').innerHTML = `${this.level}`
    }
}

module.exports = Session;