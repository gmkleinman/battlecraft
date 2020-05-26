/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/blob1.png":
/*!**************************!*\
  !*** ./assets/blob1.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c5aac480279d615489d5de5581a2759a.png";

/***/ }),

/***/ "./assets/blob2.png":
/*!**************************!*\
  !*** ./assets/blob2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1b56b4d1e45440ad997445b637aa7985.png";

/***/ }),

/***/ "./assets/blob3.png":
/*!**************************!*\
  !*** ./assets/blob3.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4da03cea04ff485f442c814c507fac5c.png";

/***/ }),

/***/ "./assets/cat1.png":
/*!*************************!*\
  !*** ./assets/cat1.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "942b83797e1b65529eaf1900aaf8d563.png";

/***/ }),

/***/ "./assets/cat2.png":
/*!*************************!*\
  !*** ./assets/cat2.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb1b51a1f057579138c78f85d865933d.png";

/***/ }),

/***/ "./assets/cat3.png":
/*!*************************!*\
  !*** ./assets/cat3.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b128e8f0e620cebcc2d30907d7889055.png";

/***/ }),

/***/ "./assets/hadoken1.png":
/*!*****************************!*\
  !*** ./assets/hadoken1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7fb4ec026a28fb69882b7a2cfec4d164.png";

/***/ }),

/***/ "./assets/rig.gif":
/*!************************!*\
  !*** ./assets/rig.gif ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e20eb9907f931c3918d6144669c7e0a5.gif";

/***/ }),

/***/ "./assets/tree.jpg":
/*!*************************!*\
  !*** ./assets/tree.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c14702dca898c96e30e0a8f26590c72c.jpg";

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const tree = __webpack_require__(/*! ../assets/tree.jpg */ "./assets/tree.jpg")
const rig = __webpack_require__(/*! ../assets/rig.gif */ "./assets/rig.gif")

class Base {
    constructor(team) {
        this.vel = [0,0];
        this.team = team;
        this.type = 'base';
        this.animationFrame = 0;
        this.moving = true;
        this.attacking = false;
        this.attackCooldown = 300;
        this.timeBetweenAttacks = 300;
        this.projectile = 'hadoken';
        this.hp = 10;
        this.width = 100;
        this.height = 100;

        if (team === 'green') {
            this.pos = [50,175];
        } else {
            this.pos = [1050,175]
        }
    }

    attack(pos) {
        return null;
    }

    move() {
        return null;
    }

    draw(ctx) {
        let x = this.pos[0];
        let y = this.pos[1];
        if (this.team === 'green') {
            let greenBase = new Image();
            greenBase.src = tree;
            ctx.drawImage(greenBase, x, y, this.width, this.height);
        } else {
            let redBase = new Image();
            redBase.src = rig;
            ctx.drawImage(redBase, x, y, this.width, this.height);
        }

    }
}

module.exports = Base;


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Base = __webpack_require__(/*! ./base */ "./src/base.js")
const Player = __webpack_require__(/*! ./player */ "./src/player.js")

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
            vel = [1,0]
        } else {
            startPos = MAX_X - 250
            vel = [-1,0]
        }

        if( player.spend(1000) ) {
            //if player has enough money, spawn their units
            for (let i = MIN_Y+100; i < MAX_Y-100; i+=55) {
                this.units.push(new Unit({
                    pos: [startPos + Math.random()*50,i],
                    vel,
                    team: player.team,
                    type,
                }));        
            } 
        } else {
            //display not enough $ message
            let lowSticks = document.getElementById('not-enough-sticks')
            if(lowSticks.innerHTML != 'NOT ENOUGH STICKS') {
                lowSticks.innerHTML = 'NOT ENOUGH STICKS';
                setTimeout(() => lowSticks.innerHTML = '', 3000)
            }   
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
        this.createArmy(this.players[0], 'cat');
        this.createArmy(this.players[1], 'blob');
        document.getElementById("spawnCat").onclick = () => { 
            this.createArmy(this.players[0], 'cat');
        } 
    
        document.getElementById("spawnBlob").onclick = () => { 
            this.createArmy(this.players[1], 'blob');
        } 
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
    }


}

module.exports = Game;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Session = __webpack_require__(/*! ./session */ "./src/session.js")
const GAMEHEIGHT = 400
const GAMEWIDTH = 1200

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById("canvas");
    canvasEl.width = GAMEWIDTH;
    canvasEl.height = GAMEHEIGHT;

    const ctx = canvas.getContext('2d');
    session = new Session(ctx);
    session.play();



})


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Player {
    constructor(team) {
        this.team = team;
        this.sticks = 999999;
        this.income = 50;
        this.incomeTimer = 0;
        this.incomeCooldown = 50;

        if (team === 'red') {
            this.sticks = 999999999;
        }
    }

    spend(amt) {
        if(this.sticks >= amt) {
            this.sticks -= amt;
            return true;
        } else {
            return false;
        }
    }

    earn() {
        if(this.incomeTimer > this.incomeCooldown) {
            this.sticks += this.income;
            this.incomeTimer = 0;
        }
        else {
            this.incomeTimer += 1;
        }
    }
}

module.exports = Player;

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const hadokenUrl = __webpack_require__(/*! ../assets/hadoken1.png */ "./assets/hadoken1.png")

class Projectile {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.width = 50;
        this.height = 50;
        this.damage = 1;
    }

    draw(ctx) {
        let hadoken = new Image();
        hadoken.src = hadokenUrl;
        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(hadoken, x, y, this.width, this.height)
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

module.exports = Projectile;

/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game */ "./src/game.js");

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
            this.renderLevelInfo();
            this.game.play()
            this.checkGameEnd();
            if(this.nextLevel === true) this.loadNextLevel();
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

    loadNextLevel() {
        this.level += 1;
        clearInterval(this.gamePlay);
        this.nextLevel = false;
        this.play();
    }

    resetGame() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Next level!", 10, 50);
        this.reset = false;
        this.level = 0;
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
        this.ctx.fillText(`You win! Click anywhere to go to level ${this.level + 1}.`, 10, 50);
        this.game.players[0].income = 0;
    }

    renderLoss() {
        this.ctx.clearRect(MIN_X, MIN_Y, MAX_X, MAX_Y);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("You lose :( Click anywhere to reset.", 10, 50);
        this.game.players[0].income = 0;
    }

    renderLevelInfo() {
        document.getElementById('level').innerHTML = `${this.level}`
    }
}

module.exports = Session;

/***/ }),

/***/ "./src/unit.js":
/*!*********************!*\
  !*** ./src/unit.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const Game = require("./game.js");
const catUrl1 = __webpack_require__(/*! ../assets/cat1.png */ "./assets/cat1.png")
const catUrl2 = __webpack_require__(/*! ../assets/cat2.png */ "./assets/cat2.png")
const catUrl3 = __webpack_require__(/*! ../assets/cat3.png */ "./assets/cat3.png")
const blobUrl1 = __webpack_require__(/*! ../assets/blob1.png */ "./assets/blob1.png")
const blobUrl2 = __webpack_require__(/*! ../assets/blob2.png */ "./assets/blob2.png")
const blobUrl3 = __webpack_require__(/*! ../assets/blob3.png */ "./assets/blob3.png")
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");

const ANIMATE_FRAMES = 8;

class Unit {

    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.type = obj.type;
        this.animationFrame = 0;
        this.moving = true;
        this.attacking = false;
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectile = 'hadoken';
        this.width = 50;
        this.height = 50;
        this.hp = 3;
    }

    draw(ctx) {
        if (this.type === 'cat') {
            this.renderCat(ctx);
        } else {
            this.renderBlob(ctx);
        }
    }

    renderCat(ctx) {
        let cat = new Image();
        
        if (this.moving === true) this.animationFrame += 1;

        if(this.animationFrame < ANIMATE_FRAMES) {
            cat.src = catUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            cat.src = catUrl2;
        } else {
            cat.src = catUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(cat, x, y, this.width, this.height);
    }

    renderBlob(ctx) {
        let blob = new Image();

        if (this.moving === true) this.animationFrame += 1;
        
        if(this.animationFrame < ANIMATE_FRAMES) {
            blob.src = blobUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            blob.src = blobUrl2;
        } else {
            blob.src = blobUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(blob, x, y, this.width, this.height);
    }

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= 3;
        vel[1] *= 3;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            let team = this.team
            return new Projectile({
                pos,
                vel,
                team,
            })
        } else {
            this.attackCooldown += 1;
            return null;
        }    
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    unitVector(attackerPos, defenderPos) {
        let x = defenderPos[0] - attackerPos[0]
        let y = defenderPos[1] - attackerPos[1]
        let divisor = Math.max(Math.abs(x),Math.abs(y))
        x = x/divisor
        y = y/divisor
        return [x,y]
    }
}

module.exports = Unit;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map