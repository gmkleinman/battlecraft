const Unit = require("./unit");

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.units = [];
    }

    
    createArmy(team) {
        let startPos;
        let vel;

        if(team === "green") {
            startPos = 200
            vel = [1,0]
        } else {
            startPos = 700
            vel = [-1,0]
        }

        for (let i = 200; i < 350; i+=50) {
            this.units.push(new Unit({
                pos: [startPos,i],
                vel,
                team,
            }));        
        }    
    }

    drawBoard() {
        this.ctx.fillStyle = "#80deea";
        this.ctx.fillRect(50,150,800,200)
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(75,238,25,25)
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(800,238,25,25)
    }

    drawUnits() {
        this.units.forEach(unit => {
            unit.draw(this.ctx);
        });
    }

    moveUnits() {
        this.units.forEach(unit => {
            unit.move();
        });
    }

    drawAll() {
        this.ctx.clearRect(0, 0, 900, 400);
        this.drawBoard();
        this.drawUnits();
    }

    start() {
        this.createArmy("green");
        this.createArmy("red");
        setInterval(() => {
            this.drawAll();
            this.moveUnits();
        }, 17)
    }
}

module.exports = Game;