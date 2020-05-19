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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Unit = __webpack_require__(/*! ./unit */ \"./src/unit.js\");\n\nclass Game {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.units = [];\n    }\n\n    \n    createArmy(team) {\n        let startPos;\n        let vel;\n\n        if(team === \"green\") {\n            startPos = 200\n            vel = [1,0]\n        } else {\n            startPos = 700\n            vel = [-1,0]\n        }\n\n        for (let i = 200; i < 350; i+=50) {\n            this.units.push(new Unit({\n                pos: [startPos,i],\n                vel,\n                team,\n            }));        \n        }    \n    }\n\n    drawBoard() {\n        this.ctx.fillStyle = \"#80deea\";\n        this.ctx.fillRect(50,150,800,200)\n        this.ctx.fillStyle = \"green\";\n        this.ctx.fillRect(75,238,25,25)\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fillRect(800,238,25,25)\n    }\n\n    drawUnits() {\n        this.units.forEach(unit => {\n            unit.draw(this.ctx);\n        });\n    }\n\n    moveUnits() {\n        this.units.forEach(unit => {\n            unit.move();\n        });\n    }\n\n    drawAll() {\n        this.ctx.clearRect(0, 0, 900, 400);\n        this.drawBoard();\n        this.drawUnits();\n    }\n\n    start() {\n        this.createArmy(\"green\");\n        this.createArmy(\"red\");\n        setInterval(() => {\n            this.drawAll();\n            this.moveUnits();\n        }, 17)\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"canvas\");\n    canvasEl.width = 900;\n    canvasEl.height = 400;\n\n    const ctx = canvas.getContext('2d');\n    game = new Game(ctx);\n    game.start();\n\n    document.getElementById(\"spawnGreen\").onclick = () => { \n        game.createArmy('green');\n    } \n\n    document.getElementById(\"spawnRed\").onclick = () => { \n        game.createArmy('red');\n    } \n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/unit.js":
/*!*********************!*\
  !*** ./src/unit.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\");\n// const img = require(\"../assets/tree.png\")\n// import Tree from \"../assets/tree.jpg\"\n\nclass Unit {\n    constructor(obj) {\n        this.pos = obj.pos;\n        this.vel = obj.vel;\n        this.team = obj.team;\n    }\n\n    img(ctx) {\n        //Create a new Image object.\n        const imgObj = new Image();\n        \n        //Set the src of this Image object.\n        imgObj.src = img;\n\n        var x = 200;\n        var y = 200;\n        \n        //When our image has loaded.\n        imgObj.onload = function(){\n            //Draw the image onto the canvas.\n            ctx.drawImage(imgObj, x, y);\n    }\n\n    }\n\n    draw(ctx) {\n        let x = this.pos[0];\n        let y = this.pos[1];\n        ctx.beginPath();\n        ctx.fillStyle = this.team;\n        ctx.arc(x, y, 20, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n}\n\nmodule.exports = Unit;\n\n//# sourceURL=webpack:///./src/unit.js?");

/***/ })

/******/ });