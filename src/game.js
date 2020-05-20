const Unit = require("./unit");
const tree = require("../assets/tree.jpg")
const rig = require("../assets/rig.gif")

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.units = [];
    }

    
    createArmy(team, type) {
        let startPos;
        let vel;

        if(team === "green") {
            startPos = 200
            vel = [1,0]
            type ='cat'
        } else {
            startPos = 700
            vel = [-1,0]
            type = 'blob'
        }

        for (let i = 175; i < 325; i+=50) {
            this.units.push(new Unit({
                pos: [startPos,i],
                vel,
                team,
                type,
            }));        
        } 
    }

    drawBoard() {
        //arena
        let grd = this.ctx.createLinearGradient(0, 0, 800, 0);
        grd.addColorStop(0, "#4bb436");
        grd.addColorStop(1, "#aa6300");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(50,150,800,200)

        //green's base
        let greenBase = new Image(200,200);
        greenBase.src = tree;
        this.ctx.drawImage(greenBase, 75, 215, 50, 50);

        
        //red's base
        let redBase = new Image();
        redBase.width = "25";
        redBase.src = rig;
        this.ctx.drawImage(redBase, 775, 215, 50, 50);
        
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