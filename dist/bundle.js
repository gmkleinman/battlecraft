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

/***/ "./assets/alien1.png":
/*!***************************!*\
  !*** ./assets/alien1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96b03681ba084207df899cc040e87c40.png";

/***/ }),

/***/ "./assets/alien2.png":
/*!***************************!*\
  !*** ./assets/alien2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01bbc0dece97c2fb1e6122451804d527.png";

/***/ }),

/***/ "./assets/alien3.png":
/*!***************************!*\
  !*** ./assets/alien3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "23c75eb1cdedc551d1e0e76803aea2c1.png";

/***/ }),

/***/ "./assets/alienproj.png":
/*!******************************!*\
  !*** ./assets/alienproj.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6c24069235ea6716e69279b7253d4ad6.png";

/***/ }),

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

/***/ "./assets/blobproj.png":
/*!*****************************!*\
  !*** ./assets/blobproj.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c8ada7245aa454d18a7140d2e577f099.png";

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

/***/ "./assets/catproj.png":
/*!****************************!*\
  !*** ./assets/catproj.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7fb4ec026a28fb69882b7a2cfec4d164.png";

/***/ }),

/***/ "./assets/frog1.png":
/*!**************************!*\
  !*** ./assets/frog1.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea1693113b85152eba5630d36231bdaf.png";

/***/ }),

/***/ "./assets/frog2.png":
/*!**************************!*\
  !*** ./assets/frog2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ac02d99310a2d3bf7db15c88bd5e80c.png";

/***/ }),

/***/ "./assets/frog3.png":
/*!**************************!*\
  !*** ./assets/frog3.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04f71d4f81f2a96f4a1b8cb5cf28e078.png";

/***/ }),

/***/ "./assets/frogproj.png":
/*!*****************************!*\
  !*** ./assets/frogproj.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bbc13ff2de2c4424d18a403bdb8c93f2.png";

/***/ }),

/***/ "./assets/monk1.png":
/*!**************************!*\
  !*** ./assets/monk1.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "94ef4063c53d95665b5318d3b05290b7.png";

/***/ }),

/***/ "./assets/monk2.png":
/*!**************************!*\
  !*** ./assets/monk2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a950262a2b00d6afc4134cc7cf50462.png";

/***/ }),

/***/ "./assets/monk3.png":
/*!**************************!*\
  !*** ./assets/monk3.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "608c1343fec7d93727001d6ea2cf25ec.png";

/***/ }),

/***/ "./assets/monkproj.png":
/*!*****************************!*\
  !*** ./assets/monkproj.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cb7f73f59f962f164c4b4c39bdb2c182.png";

/***/ }),

/***/ "./assets/rig.gif":
/*!************************!*\
  !*** ./assets/rig.gif ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e20eb9907f931c3918d6144669c7e0a5.gif";

/***/ }),

/***/ "./assets/snake1.png":
/*!***************************!*\
  !*** ./assets/snake1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d960f959e207e9031e1f65797d641258.png";

/***/ }),

/***/ "./assets/snake2.png":
/*!***************************!*\
  !*** ./assets/snake2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83414a2aab6bcc04a66e94d438208271.png";

/***/ }),

/***/ "./assets/snake3.png":
/*!***************************!*\
  !*** ./assets/snake3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3380a4a8aadcbf3114f2fa0dbb92ff1f.png";

/***/ }),

/***/ "./assets/snakeproj.png":
/*!******************************!*\
  !*** ./assets/snakeproj.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c105558299f47daad2428bea61cb832.png";

/***/ }),

/***/ "./assets/tree.jpg":
/*!*************************!*\
  !*** ./assets/tree.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c14702dca898c96e30e0a8f26590c72c.jpg";

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n    background: rgb(53, 54, 58);\n    font-family: 'Roboto', sans-serif;\n}\n\n#container {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#game {\n    width: 1200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 8px solid rgb(0, 0, 0);\n    border-radius: 8px;\n}\n\n#canvas {\n    background: rgb(98, 167, 95);\n\n}\n\n.hud {\n   display: inline-block;\n   width: 1200px;\n   height: 50px;\n   /* background: rgb(0, 94, 8); */\n   /* background: rgb(0, 53, 5); */\n   background: rgb(0, 37, 4);\n   color: rgb(221, 221, 221);\n   /* color: rgb(8, 0, 126); */\n}\n\n/* #bottom-hud {\n   display: inline-block;\n   width: 1200px;\n   height: 50px;\n   background: rgb(0, 37, 4);\n} */\n\n#header-text {\n    display: flex;\n    justify-content: space-between;\n    align-content: space-between;\n    font-size: 30px;\n    margin-top: 7px;\n    margin-left: 25px;\n    margin-right: 25px;\n}\n\nbutton {\n    height: 30px;\n}\n\n#not-enough-sticks {\n    color: rgb(255, 110, 110);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/alien.js":
/*!**********************!*\
  !*** ./src/alien.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const alienUrl1 = __webpack_require__(/*! ../assets/alien1.png */ "./assets/alien1.png")
const alienUrl2 = __webpack_require__(/*! ../assets/alien2.png */ "./assets/alien2.png")
const alienUrl3 = __webpack_require__(/*! ../assets/alien3.png */ "./assets/alien3.png")

const ANIMATE_FRAMES = 8;

class Alien extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'alienProj';
        this.hp = 3;
        this.projectileSpeed = 2;
        this.attackRange = 500;
        this.projDamage = 2;

    }
    
    draw(ctx) {
        let alien = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            alien.src = alienUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            alien.src = alienUrl2;
        } else {
            alien.src = alienUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(alien, x, y, this.width, this.height);
    }

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Alien;

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

/***/ "./src/blob.js":
/*!*********************!*\
  !*** ./src/blob.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const blobUrl1 = __webpack_require__(/*! ../assets/blob1.png */ "./assets/blob1.png")
const blobUrl2 = __webpack_require__(/*! ../assets/blob2.png */ "./assets/blob2.png")
const blobUrl3 = __webpack_require__(/*! ../assets/blob3.png */ "./assets/blob3.png")

const ANIMATE_FRAMES = 8;

class Blob extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'blobProj';
        this.hp = 2;
        this.projectileSpeed = 6;
        this.attackRange = 200;
        this.projDamage = 1;
    }
    
    draw(ctx) {
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
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Blob;

/***/ }),

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const catUrl1 = __webpack_require__(/*! ../assets/cat1.png */ "./assets/cat1.png")
const catUrl2 = __webpack_require__(/*! ../assets/cat2.png */ "./assets/cat2.png")
const catUrl3 = __webpack_require__(/*! ../assets/cat3.png */ "./assets/cat3.png")

const ANIMATE_FRAMES = 8;

class Cat extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*4, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'catProj';
        this.hp = 3;
        this.projectileSpeed = 3;
        this.attackRange = 110;
        this.projDamage = 1;
        
    }

    draw(ctx) {
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

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Cat;

/***/ }),

/***/ "./src/frog.js":
/*!*********************!*\
  !*** ./src/frog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const frogUrl1 = __webpack_require__(/*! ../assets/frog1.png */ "./assets/frog1.png")
const frogUrl2 = __webpack_require__(/*! ../assets/frog2.png */ "./assets/frog2.png")
const frogUrl3 = __webpack_require__(/*! ../assets/frog3.png */ "./assets/frog3.png")

const ANIMATE_FRAMES = 8;

class Frog extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*2, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'frogProj';
        this.hp = 3;
        this.projectileSpeed = 6;
        this.attackRange = 250;
        this.projDamage = 1;
    }
    
    draw(ctx) {
        let frog = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            frog.src = frogUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            frog.src = frogUrl2;
        } else {
            frog.src = frogUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(frog, x, y, this.width, this.height);
    }

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Frog;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__(/*! ./base */ "./src/base.js")
const Player = __webpack_require__(/*! ./player */ "./src/player.js")
const Cat = __webpack_require__(/*! ./cat */ "./src/cat.js")
const Blob = __webpack_require__(/*! ./blob */ "./src/blob.js")
const Alien = __webpack_require__(/*! ./alien */ "./src/alien.js")
const Frog = __webpack_require__(/*! ./frog */ "./src/frog.js")
const Monk = __webpack_require__(/*! ./monk */ "./src/monk.js")
const Snake = __webpack_require__(/*! ./snake */ "./src/snake.js")
const Unit = __webpack_require__(/*! ./snake */ "./src/snake.js")

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
        document.getElementById("spawnBlob").onclick = () => { 
            this.createArmy(this.players[1], 'blob');
        } 
        document.getElementById("spawnFrog").onclick = () => { 
            this.createArmy(this.players[0], 'frog');
        } 
        document.getElementById("spawnMonk").onclick = () => { 
            this.createArmy(this.players[1], 'monk');
        } 
        document.getElementById("spawnSnake").onclick = () => { 
            this.createArmy(this.players[1], 'snake');
        } 
        this.spawnTimer = 700;
    }

    spawnEnemies() {
        if(this.spawnTimer >= 1000) {
            this.createArmy(this.players[1], 'blob');
            this.spawnTimer = 0;
        }
        this.spawnTimer += 1;
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
    }


}

module.exports = Game;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
const Session = __webpack_require__(/*! ./session */ "./src/session.js")
const GAMEHEIGHT = 400
const GAMEWIDTH = 1200


document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById("canvas");
    canvasEl.width = GAMEWIDTH;
    canvasEl.height = GAMEHEIGHT;

    const ctx = canvas.getContext('2d');
    let session = new Session(ctx);
    session.play();
})

/***/ }),

/***/ "./src/monk.js":
/*!*********************!*\
  !*** ./src/monk.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const monkUrl1 = __webpack_require__(/*! ../assets/monk1.png */ "./assets/monk1.png")
const monkUrl2 = __webpack_require__(/*! ../assets/monk2.png */ "./assets/monk2.png")
const monkUrl3 = __webpack_require__(/*! ../assets/monk3.png */ "./assets/monk3.png")

const ANIMATE_FRAMES = 8;

class Monk extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*2, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'monkProj';
        this.hp = 3;
        this.projectileSpeed = 6;
        this.attackRange = 110;
        this.projDamage = 2;
    }
    
    draw(ctx) {
        let monk = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            monk.src = monkUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            monk.src = monkUrl2;
        } else {
            monk.src = monkUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(monk, x, y, this.width, this.height);
    }

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Monk;

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
        this.sticks = 100;
        this.income = 10;
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

const catProjUrl = __webpack_require__(/*! ../assets/catproj.png */ "./assets/catproj.png")
const blobProjUrl = __webpack_require__(/*! ../assets/blobproj.png */ "./assets/blobproj.png")
const frogProjUrl = __webpack_require__(/*! ../assets/frogproj.png */ "./assets/frogproj.png")
const alienProjUrl = __webpack_require__(/*! ../assets/alienproj.png */ "./assets/alienproj.png")
const snakeProjUrl = __webpack_require__(/*! ../assets/snakeproj.png */ "./assets/snakeproj.png")
const monkProjUrl = __webpack_require__(/*! ../assets/monkproj.png */ "./assets/monkproj.png")

class Projectile {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.type = obj.type;
        this.damage = obj.damage;
        this.unitType = obj.unitType;
        this.width = 35;
        this.height = 35;
    }

    draw(ctx) {
        let x = this.pos[0];
        let y = this.pos[1];
        let proj = new Image();

        switch (this.type) {
            case 'catProj':
                proj.src = catProjUrl;
                break;
            case 'blobProj':
                proj.src = blobProjUrl;
                break;
            case 'monkProj':
                proj.src = monkProjUrl;
                break;
            case 'frogProj':
                proj.src = frogProjUrl;
                break;
            case 'alienProj':
                proj.src = alienProjUrl;
                break;
            case 'snakeProj':
                proj.src = snakeProjUrl;
                break;
            default:
                break;
        }

        ctx.drawImage(proj, x, y, this.width, this.height)
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
        // this.level += 1;
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
        this.ctx.fillText(`YOU WIN! CLICK TO GO TO LEVEL ${this.level + 1}`, 155, MAX_Y/2+15);
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

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Unit = __webpack_require__(/*! ./unit */ "./src/unit.js");
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
const snakeUrl1 = __webpack_require__(/*! ../assets/snake1.png */ "./assets/snake1.png")
const snakeUrl2 = __webpack_require__(/*! ../assets/snake2.png */ "./assets/snake2.png")
const snakeUrl3 = __webpack_require__(/*! ../assets/snake3.png */ "./assets/snake3.png")

const ANIMATE_FRAMES = 8;

class Snake extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*2, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'snakeProj';
        this.hp = 3;
        this.projectileSpeed = 6;
        this.attackRange = 150;
        this.projDamage = 1;
    }
    
    draw(ctx) {
        let snake = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            snake.src = snakeUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            snake.src = snakeUrl2;
        } else {
            snake.src = snakeUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(snake, x, y, this.width, this.height);
    }

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Snake;

/***/ }),

/***/ "./src/unit.js":
/*!*********************!*\
  !*** ./src/unit.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js");

const ANIMATE_FRAMES = 8;

class Unit {

    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.animationFrame = 0;
        this.moving = true;
        this.attacking = false;
        this.width = 50;
        this.height = 50;

        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
    }

    draw(ctx) {
        if (this.type === 'cat') {
            this.renderCat(ctx);
        } else {
            this.renderBlob(ctx);
        }
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

    static cost(unitType) {
        let costs = {
            'alien': 1,
            'frog': 1,
            'cat': 1,
            
            //AI units
            'blob': 1,
            'monk': 1,
            'snake': 1,
        }
        return costs[unitType];
    }
}

module.exports = Unit;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map