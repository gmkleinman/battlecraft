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
/******/ 	__webpack_require__.p = "";
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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const tree = __webpack_require__(/*! ../assets/tree.jpg */ "./assets/tree.jpg")
const rig = __webpack_require__(/*! ../assets/rig.gif */ "./assets/rig.gif")

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game */ "./src/game.js")

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 900;
    canvasEl.height = 400;

    const ctx = canvas.getContext('2d');
    game = new Game(ctx);
    game.start();

    document.getElementById("spawnGreen").onclick = () => { 
        game.createArmy('green');
    } 

    document.getElementById("spawnRed").onclick = () => { 
        game.createArmy('red');
    } 


})


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

const ANIMATE_FRAMES = 8;

class Unit {

    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.type = obj.type;
        this.animationFrame = 0;
    }

    draw(ctx) {
        // let x = this.pos[0];
        // let y = this.pos[1];
        // ctx.beginPath();
        // ctx.fillStyle = this.team;
        // ctx.arc(x, y, 20, 0, 2 * Math.PI);
        // ctx.fill();
        if (this.type === 'cat') {
            this.renderCat(ctx);
        } else {
            this.renderBlob(ctx);
        }
    }

    renderCat(ctx) {
        let cat = new Image();
        cat.width = "25";
        
        this.animationFrame += 1;

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
        ctx.drawImage(cat, x, y, 50, 50);
    }

    renderBlob(ctx) {
        let blob = new Image();
        blob.width = "25";
        this.animationFrame += 1;
        
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
        ctx.drawImage(blob, x, y, 50, 50);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

module.exports = Unit;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map