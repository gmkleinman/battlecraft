const Base = require('./base')
const Player = require('./player')
const Cat = require('./cat')
const Blob = require('./blob')
const Alien = require('./alien')
const Frog = require('./frog')
const Monk = require('./monk')
const Snake = require('./snake')
const Unit = require('./snake')
const Level = require('./level')

const MIN_X = 0;
const MAX_X = 1200;
const MIN_Y = 0;
const MAX_Y = 400;

class Game {
    constructor(ctx, level) {
        this.ctx = ctx;
        this.units = [];
        this.projectiles = [];
        this.players = [];
        this.level = level;
        this.baseDestroyed;
        this.spawnTimer = 0;
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
            startPos = MIN_X + 150
            vel = 1
        } else {
            startPos = MAX_X - 250
            vel = -1
        }

        let cost = Unit.cost(type);

        if( player.spend(cost) ) {
            //if player has enough money, spawn their units
            for (let i = MIN_Y+100; i < MAX_Y-100; i+=55) {
                let unitProps = {
                    pos: [startPos + Math.random()*50,i],
                    vel,
                    team: player.team,
                }

                switch (type) {
                    case 'cat':
                        this.units.push(new Cat(unitProps));                          
                        break;
                    case 'blob':
                        this.units.push(new Blob(unitProps));   
                        break;
                    case 'alien':
                        this.units.push(new Alien(unitProps));   
                        break;
                    case 'monk':
                        this.units.push(new Monk(unitProps));   
                        break;
                    case 'snake':
                        this.units.push(new Snake(unitProps));   
                        break;
                    case 'frog':
                        this.units.push(new Frog(unitProps));   
                        break;
                    default:
                        break;
                }
     
            } 
        } else this.displayLowSticks();
    }

    displayLowSticks() {
        let lowSticks = document.getElementById('not-enough-sticks')
        if(lowSticks.innerHTML != 'NOT ENOUGH STICKS') {
            lowSticks.innerHTML = 'NOT ENOUGH STICKS';
            setTimeout(() => lowSticks.innerHTML = '', 3000)
        }
    }

    drawArena() {
        let grd = this.ctx.createLinearGradient(0, 0, MAX_X, 0);
        grd.addColorStop(0, "#4bb436");
        grd.addColorStop(1, "#aa6300");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(MIN_X,MIN_Y,MAX_X,MAX_Y)
    }

    drawUnits() {
        this.units.forEach(unit => {
            unit.draw(this.ctx);
            unit.attackCooldown += 1;
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
            if ( distance <= currentUnit.attackRange && currentUnit.team != otherUnit.team) {
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
            let x1 = unit.pos[0] - unit.width/2 + 5
            let x2 = unit.pos[0] + unit.width/2 - 5
            let y1 = unit.pos[1] - unit.height/2 + 5
            let y2 = unit.pos[1] + unit.height/2 - 5

            for (let j = 0; j < this.projectiles.length; j++) {

                let projectile = this.projectiles[j];
                let x3 = projectile.pos[0] - projectile.width/2 + 10
                let x4 = projectile.pos[0] + projectile.width/2 - 10
                let y3 = projectile.pos[1] - projectile.height/2 + 10
                let y4 = projectile.pos[1] + projectile.height/2 - 10
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
                if(i === 0 || i === 1) {
                    this.baseDestroyed = i;
                } else {
                    this.units.splice(i,1)
                }
            }
        }
    }

    outOfBounds(pos) {
        return pos[0] > MAX_X-50 || pos[0] < MIN_X-50 || pos[1] > MAX_Y-50 || pos[1] < MIN_Y-50
    }

    ensureInBounds() {
        for (let i = 0; i < this.units.length; i++) {
            let unit = this.units[i];
            if(this.outOfBounds(unit.pos)) this.units.splice(i,1)
        }

        for (let j = 0; j < this.projectiles.length; j++) {
            let projectile = this.projectiles[j];
            if(this.outOfBounds(projectile.pos)) this.projectiles.splice(j,1)
        }
    }
    
    moveUnits() {
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
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.drawArena();
        this.drawUnits();
        this.drawProjectiles();
    }

    giveIncome(){
        this.players.forEach(player => {
            player.earn();
        })
    }

    renderStickAmount() {
        document.getElementById('sticks').innerHTML = `${this.players[0].sticks}`
    }

    setup() {
        this.createBases();
        this.createPlayers();
        document.getElementById("spawnCat").onclick = () => { 
            this.createArmy(this.players[0], 'cat');
        } 
        document.getElementById("spawnAlien").onclick = () => { 
            this.createArmy(this.players[0], 'alien');
        } 
        document.getElementById("spawnFrog").onclick = () => { 
            this.createArmy(this.players[0], 'frog');
        } 
        
        this.spawnTimer = 1;

        // for testing:
        // document.getElementById("spawnBlob").onclick = () => { 
        //     this.createArmy(this.players[1], 'blob');
        // } 
        // document.getElementById("spawnMonk").onclick = () => { 
        //     this.createArmy(this.players[1], 'monk');
        // } 
        // document.getElementById("spawnSnake").onclick = () => { 
        //     this.createArmy(this.players[1], 'snake');
        // } 
    }

    spawnEnemies() {
        let spawnUnit = Level.checkSpawn(this.spawnTimer, this.level);
        if(spawnUnit){
            this.createArmy(this.players[1], spawnUnit);
        }

        this.spawnTimer += 1;

        if(this.spawnTimer === Number.MAX_SAFE_INTEGER) {
            this.spawnTimer = 0;
        }
    }

    renderTutorial() {
        this.ctx.font = "900 20px Arial";
        this.ctx.fillStyle = "black"
        this.ctx.fillText("DEFEND THIS", 25, 300);  
        this.ctx.fillText("DESTROY THIS", 1025, 300);  
        this.ctx.fillText("SPEND THESE", 225, 75);  
        this.ctx.fillText("CLICK THESE", 125, 340);  
        this.renderUpArrow();
        this.renderDownArrow();
    }

    renderUpArrow() {
        this.ctx.beginPath();
        this.ctx.moveTo(300, 50);
        this.ctx.lineTo(300, 4);
        this.ctx.moveTo(301, 4);
        this.ctx.lineTo(290, 25);
        this.ctx.moveTo(299, 4);
        this.ctx.lineTo(310, 25);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    }

    renderDownArrow() {
        this.ctx.beginPath();
        this.ctx.moveTo(200, 396);
        this.ctx.lineTo(200, 350);
        this.ctx.moveTo(201, 396);
        this.ctx.lineTo(190, 375);
        this.ctx.moveTo(199, 396);
        this.ctx.lineTo(210, 375);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    }

    play() {
        this.drawAll();
        this.moveUnits();
        this.moveProjectiles();
        this.checkProjectileCollisions();
        this.checkEliminations();
        this.ensureInBounds();
        this.giveIncome();
        this.renderStickAmount();
        this.spawnEnemies();
        if(this.level === 1 && this.spawnTimer <= 1000) this.renderTutorial();
    }


}

module.exports = Game;