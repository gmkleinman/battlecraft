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

    acquireTarget(currentUnit) {
        let enemyInRange = false;
        // let allyInRange = false;

        this.units.forEach(otherUnit => {
            let distance = this.distance(currentUnit.pos, otherUnit.pos)
            if ( distance <= 200 && currentUnit.team != otherUnit.team) {
                enemyInRange = true;
                let newProjectile = currentUnit.attack();
                if (newProjectile) {
                    this.projectiles.push(newProjectile);
                    console.log("projectile created!");
                }
            }
        });
        return enemyInRange;
    }
    

    checkCollisions() {
        //for each unit,
        for (let i = 0; i < this.units.length; i++) {
            let unit = this.units[i];
            let x1 = unit.pos[0] - unit.width/2
            let x2 = unit.pos[0] + unit.width/2
            let y1 = unit.pos[1] - unit.height/2
            let y2 = unit.pos[1] + unit.height/2

            for (let j = 0; j < this.projectiles.length; j++) {

                let projectile = this.projectiles[j];
                let x3 = projectile.pos[0] - projectile.width/2
                let x4 = projectile.pos[0] + projectile.width/2
                let y3 = projectile.pos[1] - projectile.height/2
                let y4 = projectile.pos[1] + projectile.height/2
                if (
                    ((x1 <= x3 && x2 >= x3) || (x1 <= x4 && x2 >= x4))
                    && ((y1 <= y3 && y2 >= y3) || (y1 <= y4 && y2 >= y4))
                    ) {
                        //on collision, removes both projectile and enemy
                        if (unit.team != projectile.team) {
                            this.units.splice(i,1)
                            this.projectiles.splice(j,1)
                        }
                }
            }
        }
    }

    // checkBounds() {
    //     for (let i = 0; i < this.units.length; i++) {
    //         let unit = units[i];


    //     }

    //     for (let j = 0; j < this.projectiles.length; j++) {
    //         let projectile = projectiles[i];

    //     }

    // }
    
    moveUnits() {
        //this is horrible brute force - should optimize later, esp. if performance issues
        this.units.forEach(unit => {
            if(this.acquireTarget(unit) === true) {
                unit.moving = false;
                unit.attacking = true;
            } else {
                unit.moving = true;
                unit.attacking = false;
            }
            if(unit.moving === true) unit.move();
        });
    }

    moveProjectiles() {
        this.projectiles.forEach(projectile => {
            projectile.move();
        })
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
            this.checkCollisions();
        }, 5) //17 is "standard" speed
    }
}

module.exports = Game;