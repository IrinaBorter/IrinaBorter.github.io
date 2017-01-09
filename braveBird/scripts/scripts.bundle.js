/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _actions_mapper = __webpack_require__(5);
	
	var _actions_mapper2 = _interopRequireDefault(_actions_mapper);
	
	var _actions_map = __webpack_require__(6);
	
	var _actions_map2 = _interopRequireDefault(_actions_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _actions_mapper2.default)(_actions_map2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./_default.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./_default.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".sky {\n  overflow: hidden;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  .sky .cloud {\n    width: 200px;\n    height: 50px;\n    background-color: #ffffff;\n    border-radius: 30px;\n    position: absolute;\n    top: 100px;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-delay: -50s; }\n  .sky .cloud-lumpy, .sky [data-type=white_1]:before, .sky [data-type=white_2]:before, .sky [data-type=white_3]:before, .sky [data-type=white_4]:before {\n    content: '';\n    display: block;\n    width: 50px;\n    height: 50px;\n    background-color: #ffffff;\n    border-radius: 30px;\n    position: absolute; }\n  .sky [data-type=white_1]:before {\n    top: -20px;\n    left: 20px;\n    box-shadow: 90px 0 0 10px #ffffff, 40px 0 0 20px #ffffff, 110px 0 0 -5px #ffffff; }\n  .sky [data-type=white_2]:before {\n    top: -20px;\n    left: 25px;\n    box-shadow: 40px -10px 0 20px #ffffff, 80px -10px 0 10px #ffffff, 115px -5px 0 -10px #ffffff; }\n  .sky [data-type=white_3]:before {\n    top: -20px;\n    left: 25px;\n    box-shadow: 40px -10px 0 15px #ffffff, 90px 0px 0 15px #ffffff; }\n  .sky [data-type=white_4]:before {\n    top: -20px;\n    left: 20px;\n    box-shadow: 80px 0 0 10px #ffffff, 40px 0 0 20px #ffffff, 110px 0 0 -5px #ffffff, 80px 25px 0 10px #ffffff, 40px 25px 0 20px #ffffff, 0 40px 0 -5px #ffffff; }\n\n@keyframes linemove {\n  from {\n    transform: translate3d(-200px, 0, 0); }\n  to {\n    transform: translate3d(2000px, 0, 0); } }\n\n[data-speed=\"1\"] {\n  animation: linemove 44s; }\n\n[data-speed=\"2\"] {\n  animation: linemove 23s; }\n\n[data-speed=\"3\"] {\n  animation: linemove 30s; }\n\n[data-speed=\"4\"] {\n  animation: linemove 21s; }\n\n[data-speed=\"5\"] {\n  animation: linemove 17s; }\n\n[data-speed=\"6\"] {\n  animation: linemove 22s; }\n\n[data-speed=\"7\"] {\n  animation: linemove 40s; }\n\n[data-speed=\"8\"] {\n  animation: linemove 12s; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  height: 100%; }\n  html body {\n    font-family: 'Bubblegum Sans', cursive;\n    height: 100%;\n    background: #81cee8;\n    overflow: hidden; }\n    html body canvas {\n      border-left: 2px dashed #ffffff;\n      border-right: 2px dashed #ffffff;\n      padding: 5px;\n      box-sizing: border-box;\n      position: absolute;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      z-index: 1; }\n    html body .button {\n      position: absolute;\n      font-family: 'Bubblegum Sans', cursive;\n      width: 300px;\n      height: 50px;\n      border-radius: 25px;\n      border: none;\n      background: #08b05a;\n      transition: background 0.5s, font-size 0.5s;\n      color: #ffffff;\n      font-size: 30px;\n      text-align: center;\n      line-height: 50px;\n      cursor: pointer;\n      top: calc(50% - 25px);\n      left: calc(50% - 150px);\n      z-index: 2; }\n    html body .button:hover {\n      background: #09c866;\n      font-size: 35px; }\n    html body .get-ready {\n      position: absolute;\n      top: calc(50% + 50px);\n      left: calc(50% - 90px);\n      color: #ffffff;\n      text-align: center; }\n    html body .display-new-level {\n      position: absolute;\n      top: 0;\n      left: 5%;\n      color: #de5d43;\n      animation-timing-function: ease-in-out;\n      animation: levelMove 5s; }\n\n@keyframes levelMove {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    transform: translate3d(0, 1200px, 0); } }\n    html body .bestScores {\n      background: rgba(86, 76, 76, 0.24);\n      padding: 20px 40px;\n      width: 100px;\n      position: absolute;\n      bottom: 30px;\n      color: #ffffff;\n      right: 150px;\n      border-radius: 10px;\n      z-index: 3; }\n      html body .bestScores h3 {\n        margin-bottom: 10px; }\n      html body .bestScores .scoreList {\n        margin-left: 15px; }\n\n.hide {\n  display: none; }\n\n#actor {\n  width: 100px;\n  height: 50px; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = bindActionMap;
	/**
	 * Binds action map to DOM
	 * @param {object} actionsMap -
	 */
	function bindActionMap(actionsMap) {
	    Object.keys(actionsMap).forEach(function (key) {
	        var optionsArray = key.split(':');
	        var component = optionsArray[0];
	        var event = optionsArray[1];
	        var action = actionsMap[key];
	        if (!component || !event || !action) {
	            throw Error('Not valid actions map. Please pay attention to ' + key);
	        }
	
	        if (component === 'document') {
	            document.addEventListener(event, action);
	        } else {
	            var item = document.querySelector(component);
	
	            if (!item) {
	                throw Error('Invalid component: ' + component);
	            }
	            item.addEventListener(event, action);
	        }
	    });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(7);
	
	exports.default = {
	    '#start:click': _actions.startGame,
	    'document:keydown': _actions.accelerateTop,
	    'document:keyup': _actions.accelerateBottom,
	    'document:touchstart': _actions.accelerateTop,
	    'document:touchend': _actions.accelerateBottom
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.startGame = startGame;
	exports.addNewScore = addNewScore;
	exports.updateLevel = updateLevel;
	exports.speedUp = speedUp;
	exports.decreaseGap = decreaseGap;
	exports.birdCrushed = birdCrushed;
	exports.returnBirdNormalState = returnBirdNormalState;
	exports.finishGame = finishGame;
	exports.accelerateTop = accelerateTop;
	exports.accelerateBottom = accelerateBottom;
	
	var _GameArea = __webpack_require__(8);
	
	var _GameArea2 = _interopRequireDefault(_GameArea);
	
	var _constants = __webpack_require__(12);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _store = __webpack_require__(13);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _action_types = __webpack_require__(37);
	
	var _action_types2 = _interopRequireDefault(_action_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ACCELERATE_TOP = -0.2;
	var ACCELERATE_BOTTOM = 0.05;
	
	var myGameArea = void 0;
	
	function startGame() {
	    var action = {
	        type: _action_types2.default.START_GAME,
	        payload: 'Start game'
	    };
	
	    _store2.default.dispatch(action);
	    document.querySelector('#start').classList.toggle('hide');
	    document.querySelector('.get-ready').classList.add('hide');
	
	    if (myGameArea) {
	        myGameArea.remove();
	    }
	    myGameArea = new _GameArea2.default(_constants2.default.GAME_AREA_WIDTH, _constants2.default.GAME_AREA_HEIGHT, _store2.default.getState().minGap, _store2.default.getState().maxGap);
	    myGameArea.play();
	}
	
	function addNewScore(score) {
	    var action = {
	        type: _action_types2.default.ADD_NEW_SCORE,
	        payload: score
	    };
	
	    _store2.default.dispatch(action);
	}
	
	function updateLevel() {
	    var action = {
	        type: _action_types2.default.UPDATE_LEVEL,
	        payload: 'update level'
	    };
	
	    _store2.default.dispatch(action);
	    speedUp();
	    decreaseGap();
	}
	
	function speedUp() {
	    var action = {
	        type: _action_types2.default.SPEED_UP,
	        payload: 'speed up'
	    };
	
	    _store2.default.dispatch(action);
	}
	
	function decreaseGap() {
	    var action = {
	        type: _action_types2.default.DECREASE_GAP,
	        payload: 'decrease gap'
	    };
	
	    _store2.default.dispatch(action);
	}
	
	function birdCrushed() {
	    var action = {
	        type: _action_types2.default.BIRD_CRUSHED,
	        payload: 'bird crushed'
	    };
	
	    _store2.default.dispatch(action);
	}
	
	function returnBirdNormalState() {
	    var action = {
	        type: _action_types2.default.RETURN_BIRD_NORMAL_STATE,
	        payload: 'normal bird'
	    };
	
	    _store2.default.dispatch(action);
	}
	
	function finishGame() {
	    var action = {
	        type: _action_types2.default.FINISH_GAME,
	        payload: 'Finish game'
	    };
	
	    _store2.default.dispatch(action);
	}
	
	function accelerateTop() {
	    if (_store2.default.getState().isGameStarted) {
	        myGameArea.accelerate(ACCELERATE_TOP);
	    }
	}
	
	function accelerateBottom() {
	    if (_store2.default.getState().isGameStarted) {
	        myGameArea.accelerate(ACCELERATE_BOTTOM);
	    }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GameActor = __webpack_require__(9);
	
	var _GameActor2 = _interopRequireDefault(_GameActor);
	
	var _Score = __webpack_require__(39);
	
	var _Score2 = _interopRequireDefault(_Score);
	
	var _Obstacle = __webpack_require__(41);
	
	var _Obstacle2 = _interopRequireDefault(_Obstacle);
	
	var _constants = __webpack_require__(12);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _colors = __webpack_require__(40);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _actions = __webpack_require__(7);
	
	var _store = __webpack_require__(13);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameArea = function () {
	    function GameArea(width, height, minGap, maxGap) {
	        _classCallCheck(this, GameArea);
	
	        this.canvas = document.createElement('canvas');
	        this.canvas.width = this.width = width;
	        this.canvas.height = this.height = height;
	        this.context = this.canvas.getContext('2d');
	        this.frameNumber = 0;
	        this.obstacles = [];
	        this.minGap = minGap;
	        this.maxGap = maxGap;
	        this.gameActor = new _GameActor2.default(_constants2.default.GAME_ACTOR_WIDTH, _constants2.default.GAME_ACTOR_HEIGHT, _constants2.default.GAME_ACTOR_INITIAL_X, _constants2.default.GAME_ACTOR_INITIAL_Y, _constants2.default.GAME_ACTOR_GRAVITY);
	        this.score = new _Score2.default(_constants2.default.SCORE_SIZE, _constants2.default.SCORE_FONT_FAMILY, _colors2.default.SCORE_COLOR, _constants2.default.SCORE_X, _constants2.default.SCORE_Y);
	
	        document.body.insertBefore(this.canvas, document.body.children[0]);
	    }
	
	    _createClass(GameArea, [{
	        key: 'play',
	        value: function play() {
	            var _this = this;
	
	            this.updateIntervalId = requestAnimationFrame(function () {
	                _this.updateScore();
	                _this.frameNumber++;
	                _this.play();
	                _this.update();
	            });
	        }
	    }, {
	        key: 'updateScore',
	        value: function updateScore() {
	            if (_store2.default.getState().crushed) {
	                this.score.score -= 0.1;
	            } else {
	                this.score.score += 0.1;
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	        }
	    }, {
	        key: 'updateGap',
	        value: function updateGap() {
	            this.minGap = _store2.default.getState().minGap;
	            this.maxGap = _store2.default.getState().maxGap;
	        }
	    }, {
	        key: 'checkLevel',
	        value: function checkLevel() {
	            if (Math.round(this.score.score) === _constants2.default.LEVEL_2 && _store2.default.getState().level === 1) {
	                (0, _actions.updateLevel)();
	                this.updateGap();
	            }
	            if (Math.round(this.score.score) === _constants2.default.LEVEL_3 && _store2.default.getState().level === 2) {
	                (0, _actions.updateLevel)();
	                this.updateGap();
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.checkCrushing();
	            this.clear();
	            this.checkLevel();
	
	            if (this.isFrameForNewObstacle()) {
	                var y = this.canvas.height;
	                var width = Math.floor(Math.random() * (this.maxGap - this.minGap + 1) + this.minGap);
	                var gap = Math.floor(Math.random() * (this.maxGap - this.minGap + 1) + this.minGap);
	                var leftObstacle = new _Obstacle2.default(width, _constants2.default.OBSTACLE_HEIGHT, _colors2.default.OBSTACLES_COLOR, _constants2.default.NEW_OBSTACLE_X, _constants2.default.NEW_OBSTACLE_Y);
	                var rightObstacle = new _Obstacle2.default(y - width - gap, _constants2.default.OBSTACLE_HEIGHT, _colors2.default.OBSTACLES_COLOR, width + gap, _constants2.default.NEW_OBSTACLE_Y);
	
	                this.obstacles.push(leftObstacle);
	                this.obstacles.push(rightObstacle);
	                if (this.obstacles.length > _constants2.default.MAX_OBSTACLES_VALUE) {
	                    this.obstacles.shift();
	                    this.obstacles.shift();
	                }
	            }
	            for (var i = 0; i < this.obstacles.length; i++) {
	                this.obstacles[i].y++;
	                this.obstacles[i].update(this, this.frameNumber);
	            }
	            this.score.update(this);
	            this.gameActor.newPosition(this);
	            this.gameActor.update(this);
	        }
	    }, {
	        key: 'updateFrame',
	        value: function updateFrame() {}
	    }, {
	        key: 'checkCrushing',
	        value: function checkCrushing() {
	            if (!this.gameActor.isInsideGameArea(this)) {
	                this.isCrushed();
	            }
	
	            for (var i = 0; i < this.obstacles.length; i++) {
	                if (this.gameActor.crashWith(this.obstacles[i])) {
	                    this.isCrushed();
	                }
	            }
	        }
	    }, {
	        key: 'isCrushed',
	        value: function isCrushed() {
	            if (!_store2.default.getState().crushed) {
	                (0, _actions.birdCrushed)();
	                this.crushedFrame = this.frameNumber;
	            } else if (this.frameNumber - this.crushedFrame > _constants2.default.IMMUTABLE_DURATION) {
	                this.finish(Math.round(this.score.score));
	            }
	        }
	    }, {
	        key: 'finish',
	        value: function finish(score) {
	            cancelAnimationFrame(this.updateIntervalId);
	            document.querySelector('#start').classList.toggle('hide');
	            document.querySelector('#start').textContent = 'Restart';
	            (0, _actions.addNewScore)(score);
	            (0, _actions.finishGame)();
	        }
	    }, {
	        key: 'isFrameForNewObstacle',
	        value: function isFrameForNewObstacle() {
	            // after every 150 frame a new obstacle will be added
	            return !(this.frameNumber / (_constants2.default.OBSTACLES_INTERVAL * _store2.default.getState().speed) % 1) || this.frameNumber === 1;
	        }
	    }, {
	        key: 'accelerate',
	        value: function accelerate(n) {
	            this.gameActor.gravity = n;
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            document.body.querySelector('canvas').remove();
	        }
	    }]);
	
	    return GameArea;
	}();
	
	exports.default = GameArea;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(10);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Sprite = __webpack_require__(11);
	
	var _Sprite2 = _interopRequireDefault(_Sprite);
	
	var _constants = __webpack_require__(12);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _store = __webpack_require__(13);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameActor = function (_Component) {
	    _inherits(GameActor, _Component);
	
	    function GameActor(width, height, x, y, gravity) {
	        _classCallCheck(this, GameActor);
	
	        var _this = _possibleConstructorReturn(this, (GameActor.__proto__ || Object.getPrototypeOf(GameActor)).call(this, width, height, x, y));
	
	        _this.gravity = gravity;
	        _this.sprite = new _Sprite2.default('../pictures/bird.png', x, y, width, height, 1);
	        _this.crushedSprite = new _Sprite2.default('../pictures/crushed_bird.png', x, y, width, height, 1);
	        return _this;
	    }
	
	    _createClass(GameActor, [{
	        key: 'update',
	        value: function update(area) {
	            var ctx = area.context;
	
	            if (_store2.default.getState().crushed) {
	                if (area.frameNumber - area.crushedFrame <= _constants2.default.CRUSHED_STATE_DURATION) {
	                    if (area.frameNumber / 5 % 1 || !_store2.default.getState().isGameStarted) {
	                        this.crushedSprite.render(ctx, area.frameNumber);
	                    }
	                } else {
	                    (0, _actions.returnBirdNormalState)();
	                }
	            } else {
	                this.sprite.render(ctx, area.frameNumber);
	            }
	        }
	    }, {
	        key: 'newPosition',
	        value: function newPosition() {
	            this.gravitySpeed += this.gravity;
	            this.sprite.y = this.crushedSprite.y = this.y = this.y + this.speedY;
	            this.sprite.x = this.crushedSprite.x = this.x = this.x + this.speedX + this.gravitySpeed;
	        }
	    }, {
	        key: 'isInsideGameArea',
	        value: function isInsideGameArea(area) {
	            return this.x < area.width && this.x > 0 && this.y < area.height && this.y > 0;
	        }
	    }, {
	        key: 'crashWith',
	        value: function crashWith(obstacle) {
	            var actorLeft = this.x;
	            var actorRight = this.x + this.width;
	            var actorTop = this.y;
	            var actorBottom = this.y + this.height;
	            var obstacleLeft = obstacle.x;
	            var obstacleRight = obstacle.x + obstacle.width;
	            var obstacleTop = obstacle.y;
	            var obstacleBottom = obstacle.y + obstacle.height;
	            var crash = actorBottom - _constants2.default.SPRITE_PADDING < obstacleTop || actorTop + _constants2.default.SPRITE_PADDING > obstacleBottom || actorRight - _constants2.default.SPRITE_PADDING < obstacleLeft || actorLeft + _constants2.default.SPRITE_PADDING + _constants2.default.BIRD_TAIL > obstacleRight;
	
	            return !crash;
	        }
	    }]);
	
	    return GameActor;
	}(_Component3.default);
	
	exports.default = GameActor;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function () {
	    function Component(width, height, x, y, color) {
	        _classCallCheck(this, Component);
	
	        this.score = 0;
	        this.width = width;
	        this.height = height;
	        this.speedX = 0;
	        this.speedY = 0;
	        this.x = x;
	        this.y = y;
	        this.gravity = 0;
	        this.gravitySpeed = 0;
	        this.color = color;
	    }
	
	    _createClass(Component, [{
	        key: "update",
	        value: function update(element) {
	            var ctx = element.context;
	
	            ctx.fillStyle = this.color;
	            ctx.fillRect(this.x, this.y, this.width, this.height);
	        }
	    }]);
	
	    return Component;
	}();
	
	exports.default = Component;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(12);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Sprite = function () {
	    function Sprite(url, x, y, width, height) {
	        _classCallCheck(this, Sprite);
	
	        this.image = new Image();
	        this.image.src = url;
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        this.pad = 0;
	    }
	
	    _createClass(Sprite, [{
	        key: 'render',
	        value: function render(ctx, frame) {
	            this.toggle = !(frame / _constants2.default.SPRITE_RENDER_INTERVAL % 1);
	
	            if (!this.pad && this.toggle) {
	                this.pad = _constants2.default.SPRITE_PAD;
	            } else if (this.toggle) {
	                this.pad = 0;
	            }
	
	            ctx.drawImage(this.image, this.pad, 0, this.width, this.height, this.x, this.y, this.width, this.height);
	        }
	    }]);
	
	    return Sprite;
	}();
	
	exports.default = Sprite;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    GAME_AREA_WIDTH: 500,
	    GAME_AREA_HEIGHT: 599,
	    OBSTACLES_INTERVAL: 150,
	    MIN_OBSTACLES_GAP: 80,
	    MAX_OBSTACLES_GAP: 200,
	    OBSTACLE_HEIGHT: 15,
	    NEW_OBSTACLE_Y: 50,
	    NEW_OBSTACLE_X: 0,
	    GAME_ACTOR_WIDTH: 70,
	    GAME_ACTOR_HEIGHT: 60,
	    GAME_ACTOR_INITIAL_X: 50,
	    GAME_ACTOR_INITIAL_Y: 200,
	    GAME_ACTOR_GRAVITY: 0.05,
	    SCORE_SIZE: '30px',
	    SCORE_FONT_FAMILY: "'Bubblegum Sans', cursive",
	    SCORE_X: 280,
	    SCORE_Y: 30,
	    UPDATE_INTERVAL: 20,
	    SPRITE_PADDING: 10,
	    BIRD_TAIL: 10,
	    SPRITE_PAD: 70,
	    SPRITE_RENDER_INTERVAL: 15,
	    OBSTACLES_RENDER_INTERVAL: 3,
	    MAX_OBSTACLES_VALUE: 30,
	    IMMUTABLE_DURATION: 100,
	    CRUSHED_STATE_DURATION: 200,
	    LEVEL_2: 100,
	    LEVEL_3: 200
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(14);
	
	var _reducer = __webpack_require__(36);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _subscriber = __webpack_require__(38);
	
	var _subscriber2 = _interopRequireDefault(_subscriber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_reducer2.default);
	
	store.subscribe(_subscriber2.default);
	
	exports.default = store;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(16);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(31);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(33);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(34);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(35);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(17);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(27);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    getPrototype = __webpack_require__(24),
	    isObjectLike = __webpack_require__(26);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    getRawTag = __webpack_require__(22),
	    objectToString = __webpack_require__(23);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(20);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(21);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(25);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(30);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(29)(module)))

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(16);
	
	var _isPlainObject = __webpack_require__(17);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(35);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _action_types = __webpack_require__(37);
	
	var _action_types2 = _interopRequireDefault(_action_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = {
	    isGameStarted: false,
	    score: [],
	    level: 1,
	    speed: 1,
	    minGap: 80,
	    maxGap: 200,
	    crushed: false
	};
	
	function reducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _action_types2.default.START_GAME:
	            {
	                return Object.assign({}, initialState, { isGameStarted: true, score: state.score });
	            }
	        case _action_types2.default.ADD_NEW_SCORE:
	            {
	                var newScore = [].concat(_toConsumableArray(state.score));
	                newScore.push(action.payload);
	                newScore.sort(function (a, b) {
	                    return b - a;
	                });
	                if (newScore.length > 5) {
	                    newScore.pop();
	                }
	                return Object.assign({}, state, { score: newScore });
	            }
	        case _action_types2.default.UPDATE_LEVEL:
	            {
	                return Object.assign({}, state, { level: state.level + 1 });
	            }
	        case _action_types2.default.SPEED_UP:
	            {
	                return Object.assign({}, state, { speed: state.speed / state.level + 0.3 });
	            }
	        case _action_types2.default.DECREASE_GAP:
	            {
	                return Object.assign({}, state, { minGap: state.minGap, maxGap: state.maxGap - 40 });
	            }
	        case _action_types2.default.BIRD_CRUSHED:
	            {
	                return Object.assign({}, state, { crushed: true });
	            }
	        case _action_types2.default.RETURN_BIRD_NORMAL_STATE:
	            {
	                return Object.assign({}, state, { crushed: false });
	            }
	        case _action_types2.default.FINISH_GAME:
	            {
	                return Object.assign({}, initialState, { score: state.score, crushed: true });
	            }
	        default:
	            return state;
	    }
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    START_GAME: 'START_GAME',
	    ADD_NEW_SCORE: 'ADD_NEW_SCORE',
	    SPEED_UP: 'SPEED_UP',
	    DECREASE_GAP: 'DECREASE_GAP',
	    FINISH_GAME: 'FINISH_GAME',
	    BIRD_CRUSHED: 'BIRD_CRUSHED',
	    RETURN_BIRD_NORMAL_STATE: 'RETURN_BIRD_NORMAL_STATE',
	    UPDATE_LEVEL: 'UPDATE_LEVEL'
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = subscriber;
	
	var _store = __webpack_require__(13);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function subscriber() {
	    var currentState = _store2.default.getState();
	
	    updateScore(currentState);
	    displayScore(currentState);
	    displayNewLevel(currentState);
	}
	
	var prevScoreLength = 0;
	var prevGameStatus = true;
	var prevLevel = 1;
	
	function updateScore(state) {
	    if (prevScoreLength !== state.score.length || state.score.length >= 5) {
	        listRender(state.score);
	        prevScoreLength++;
	    }
	}
	
	function listRender(scores) {
	    var list = document.querySelector('.scoreList');
	    var fragment = document.createDocumentFragment();
	
	    list.innerHTML = '';
	    scores.forEach(function (item) {
	        var li = document.createElement('li');
	
	        li.textContent = item;
	        fragment.appendChild(li);
	    });
	    list.appendChild(fragment);
	}
	
	function displayScore(state) {
	    if (state.isGameStarted !== prevGameStatus) {
	        document.querySelector('.bestScores').classList.toggle('hide');
	        prevGameStatus = state.isGameStarted;
	    }
	}
	
	function displayNewLevel(state) {
	    if (prevLevel !== state.level && state.isGameStarted) {
	        prevLevel = state.level;
	        document.querySelector('.new-level').classList.toggle('hide');
	        document.querySelector('.new-level').classList.add('display-new-level');
	        setTimeout(function () {
	            document.querySelector('.new-level').classList.toggle('hide');
	        }, 4000);
	    }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(10);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _colors = __webpack_require__(40);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _store = __webpack_require__(13);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Score = function (_Component) {
	    _inherits(Score, _Component);
	
	    function Score(size, fontFamily, color, x, y) {
	        _classCallCheck(this, Score);
	
	        var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, size, fontFamily, x, y, color));
	
	        _this.size = size;
	        _this.fontFamily = fontFamily;
	        _this.score = 0;
	        return _this;
	    }
	
	    _createClass(Score, [{
	        key: 'update',
	        value: function update(area) {
	            var ctx = area.context;
	
	            ctx.font = this.size + ' ' + this.fontFamily;
	            if (_store2.default.getState().crushed) {
	                ctx.fillStyle = _colors2.default.WARNING_COLOR;
	            } else {
	                ctx.fillStyle = this.color;
	            }
	            ctx.fillText('SCORE: ' + Math.round(this.score), this.x, this.y);
	        }
	    }]);
	
	    return Score;
	}(_Component3.default);
	
	exports.default = Score;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    OBSTACLES_COLOR: '#318dc0',
	    SCORE_COLOR: '#ffffff',
	    SKY_BLUE: '#81cee8',
	    WARNING_COLOR: '#de5d43'
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(10);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _colors = __webpack_require__(40);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _store = __webpack_require__(13);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Obstacle = function (_Component) {
	    _inherits(Obstacle, _Component);
	
	    function Obstacle(width, height, color, x, y) {
	        _classCallCheck(this, Obstacle);
	
	        return _possibleConstructorReturn(this, (Obstacle.__proto__ || Object.getPrototypeOf(Obstacle)).call(this, width, height, x, y, color));
	    }
	
	    _createClass(Obstacle, [{
	        key: 'update',
	        value: function update(element) {
	            var ctx = element.context;
	
	            if (_store2.default.getState().crushed) {
	                ctx.fillStyle = _colors2.default.WARNING_COLOR;
	            } else {
	                ctx.fillStyle = this.color;
	            }
	            ctx.fillRect(this.x, this.y, this.width, this.height);
	        }
	    }]);
	
	    return Obstacle;
	}(_Component3.default);
	
	exports.default = Obstacle;

/***/ }
/******/ ]);
//# sourceMappingURL=scripts.bundle.js.map