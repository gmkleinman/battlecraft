const Unit = require("./unit");
const Projectile = require("./projectile");
const tree = require("../assets/tree.jpg")
const rig = require("../assets/rig.gif")


class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.units = [];
        this.projectiles = [];
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

    drawProjectiles() {
        this.projectiles.forEach(projectile => {
            projectile.draw(this.ctx);
        });
    }

    distance(pos1, pos2) {
        let a = pos1[0] - pos2[0];
        let b = pos1[1] - pos2[1];
        return Math.sqrt( a*a + b*b );
    }

    unitInRange(currentUnit) {
        let enemyInRange = false;
        // let allyInRange = false;

        this.units.forEach(otherUnit => {
            let distance = this.distance(currentUnit.pos, otherUnit.pos)
            if ( distance <= 100 && currentUnit.team != otherUnit.team) {
                enemyInRange = true;
            }
        });
        return enemyInRange;
    }

    moveUnits() {
        //this is horrible brute force - should optimize later, esp. if performance issues
        this.units.forEach(unit => {
            if(this.unitInRange(unit) === true) {
                unit.moving = false;
                unit.attacking = true;
            } else {
                unit.moving = true;
                unit.attacking = false;
            }
            if(unit.moving === true) unit.move();
            if(unit.attacking === true) this.attack(unit);
        });
    }

    moveProjectiles() {
        this.projectiles.forEach(projectile => {
            projectile.move();
        })
    }

    attack(unit) { 
        let vel;
        if (unit.team === 'green') {
            vel = [2,0]
        } else {
            vel = [-2,0]
        }

        if (unit.attackCooldown >= unit.timeBetweenAttacks) {
            unit.attackCooldown = 0;
            let pos = unit.pos.slice(0)
            let team = unit.team
            this.projectiles.push(new Projectile({
                pos,
                vel,
                team,
            }))
        } else {
            unit.attackCooldown += 1;
        }
    }

    drawAll() {
        this.ctx.clearRect(0, 0, 900, 400);
        this.drawBoard();
        this.drawUnits();
        this.drawProjectiles();
    }

    start() {
        this.createArmy("green");
        this.createArmy("red");
        setInterval(() => {
            this.drawAll();
            this.moveUnits();
            this.moveProjectiles();
        }, 5) //17 is "standard" speed
    }
}

module.exports = Game;