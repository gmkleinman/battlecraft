const Unit = require("./unit");
const Base = require('./base')
const Player = require('./player')


class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.units = [];
        this.projectiles = [];
        this.players = [];
    }

    createPlayers() {
        this.players.push(
            new Player('green'),
            new Player('red'))
    }

    createBases() {
        this.units.push(
            new Base('green'), 
            new Base('red'))
    }

    createArmy(player, type) {
        let startPos;
        let vel;

        if(player.team === "green") {
            startPos = 200
            vel = [1,0]
        } else {
            startPos = 650 
            vel = [-1,0]
        }

        if( player.spend(1000) ) {
            for (let i = 175; i < 325; i+=55) {
                this.units.push(new Unit({
                    pos: [startPos + Math.random()*50,i],
                    vel,
                    team: player.team,
                    type,
                }));        
            } 
        }

    }

    drawArena() {
        let grd = this.ctx.createLinearGradient(0, 0, 800, 0);
        grd.addColorStop(0, "#4bb436");
        grd.addColorStop(1, "#aa6300");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(50,150,800,200)
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
        let target = 'none';

        this.units.forEach(otherUnit => {
            let distance = this.distance(currentUnit.pos, otherUnit.pos)
            if ( distance <= 200 && currentUnit.team != otherUnit.team) {
                target = 'enemy';
                let newProjectile = currentUnit.attack(otherUnit.pos);
                if (newProjectile) {
                    this.projectiles.push(newProjectile);
                }
            } else if(currentUnit.team === otherUnit.team && this.checkAllyCollision(currentUnit, otherUnit)) {
                target = 'ally';
            }
        });
        return target;
    }
    

    checkProjectileCollisions() {
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
                        if (unit.team != projectile.team) {
                            unit.hp -= projectile.damage;
                            this.projectiles.splice(j,1)
                        }
                }
            }
        }
    }

    checkAllyCollision(ally1, ally2) { //this is not DRY, fix later
        if(ally1 === ally2) return false;
        let x1 = ally1.pos[0] - ally1.width/2
        let x2 = ally1.pos[0] + ally1.width/2
        let y1 = ally1.pos[1] - ally1.height/2
        let y2 = ally1.pos[1] + ally1.height/2
        let x3 = ally2.pos[0] - ally2.width/2
        let x4 = ally2.pos[0] + ally2.width/2
        let y3 = ally2.pos[1] - ally2.height/2
        let y4 = ally2.pos[1] + ally2.height/2
        if (((x1 <= x3 && x2 >= x3) || (x1 <= x4 && x2 >= x4))
            && ((y1 <= y3 && y2 >= y3) || (y1 <= y4 && y2 >= y4))) {
            if (ally1.team === 'green' && x3 >= x1) {
                return true;
            } else if (ally1.team === 'red' && x1 >= x3) {
                return true;
            }
        }
        return false;
    }

    checkEliminations() {
        for (let i = 0; i < this.units.length; i++) {
            let unit = this.units[i];
            if (unit.hp <= 0) {
                this.units.splice(i,1)
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
            let target = this.acquireTarget(unit)
            if(target === 'enemy') {
                unit.moving = false;
                unit.attacking = true;
            } else if(target === 'ally') {
                unit.moving = false;
                unit.attacking = false;
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
        this.drawArena();
        this.drawUnits();
        this.drawProjectiles();
    }

    giveIncome(){
        this.players.forEach(player => {
            player.earn();
        })
    }

    renderGold() {
        document.getElementById('gold').innerHTML = `${this.players[0].gold}`
    }

    start() {
        this.createPlayers();
        this.createArmy(this.players[0], 'cat');
        this.createArmy(this.players[1], 'blob');
        this.createBases();

        setInterval(() => {
            this.drawAll();
            this.moveUnits();
            this.moveProjectiles();
            this.checkProjectileCollisions();
            this.checkEliminations();
            this.giveIncome();
            this.renderGold();
        }, 5) //17 is "standard" speed
    }
}

module.exports = Game;