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
	
	var _Search = __webpack_require__(5);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _actionsMapper = __webpack_require__(9);
	
	var _actionsMapper2 = _interopRequireDefault(_actionsMapper);
	
	var _Slider = __webpack_require__(10);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.addEventListener('load', function () {
	    var searchElement = new _Search2.default();
	    var slider = new _Slider2.default();
	
	    searchElement.initOnLoad(slider.add.bind(slider));
	    searchElement.initOnClear(slider.clear.bind(slider));
	    (0, _actionsMapper2.default)({
	        '.search-input:keyup': searchElement.searchVideos.bind(searchElement),
	        '.search-button:click': searchElement.searchVideos.bind(searchElement),
	        'window:resize': slider.resize.bind(slider)
	    });
	});

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./default.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./default.scss");
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
	exports.push([module.id, "ul {\n  list-style: none; }\n\na {\n  transition: text-shadow 0.3s; }\n  a:link, a:visited {\n    color: #ffffff;\n    text-decoration: none; }\n  a:hover, a:active {\n    text-shadow: 0 0 5px #f1f1f1; }\n\n.error-message {\n  text-align: center;\n  padding: 10px;\n  font-weight: normal;\n  position: absolute;\n  top: 150px; }\n\n.center, .video-list .title a, .video-list .video-header {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.video-list {\n  padding: 50px 35px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  overflow: hidden;\n  box-sizing: border-box;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n  -webkit-touch-callout: none; }\n  .video-list .video-list-item {\n    display: inline-block;\n    width: 300px;\n    height: 100%;\n    background: #fff;\n    padding: 20px; }\n    .video-list .video-list-item:not(last-child) {\n      margin-right: 50px; }\n  .video-list .title {\n    width: 300px;\n    height: 170px;\n    background-size: cover;\n    position: relative;\n    border-radius: 10px; }\n    .video-list .title a {\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      background: rgba(77, 79, 93, 0.5);\n      box-sizing: border-box;\n      border-radius: 10px;\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-user-drag: none;\n      -webkit-touch-callout: none; }\n  .video-list .video-header {\n    width: 100%;\n    font-size: 18px;\n    color: #fff;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 10px;\n    box-sizing: border-box; }\n  .video-list .animate {\n    transition: transform 0.5s ease-out; }\n  .video-list .description {\n    padding: 30px 20px 0 20px;\n    font-size: 18px; }\n    .video-list .description li {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden; }\n    .video-list .description li:not(:last-child) {\n      margin-bottom: 20px; }\n    .video-list .description .icon, .video-list .description .author:before, .video-list .description .date:before, .video-list .description .review:before, .video-list .description .like:before, .video-list .description .dislike:before {\n      font: 30px FontAwesome;\n      margin-right: 35px;\n      color: #858585; }\n    .video-list .description .author:before {\n      content: '\\F2C1'; }\n    .video-list .description .date:before {\n      content: '\\F073'; }\n    .video-list .description .review:before {\n      content: '\\F06E'; }\n    .video-list .description .like:before {\n      content: '\\F164'; }\n    .video-list .description .dislike:before {\n      content: '\\F165'; }\n\n@media only screen and (min-width: 1561px) {\n  .video-list {\n    width: 1580px; } }\n\n@media only screen and (max-width: 1560px) {\n  .video-list {\n    width: 1190px; } }\n\n@media only screen and (max-width: 1195px) {\n  .video-list {\n    width: 800px; } }\n\n@media only screen and (max-width: 800px) {\n  .video-list {\n    width: 330px; }\n  .video-list-item .title {\n    margin: 0 auto;\n    width: 220px;\n    height: 120px; }\n  .video-list-item .description {\n    box-sizing: border-box;\n    width: 220px;\n    font-size: 14px; }\n    .video-list-item .description li {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden; }\n  .video-list-item .like {\n    display: none; }\n  .video-list-item .dislike {\n    display: none; } }\n\n.paging-list {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px; }\n  .paging-list li {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #e62117;\n    color: #e62117;\n    font-weight: bold;\n    text-align: center;\n    line-height: 30px;\n    transition: background 0.5s, color 0.5s;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    .paging-list li:not(:last-child) {\n      margin-right: 20px; }\n    .paging-list li:not(.separator):hover {\n      background: #b81a12;\n      color: #ffffff; }\n  .paging-list li.current {\n    background: #b81a12;\n    color: #ffffff; }\n  .paging-list li.separator {\n    position: relative;\n    background: #f1f1f1;\n    color: #e62117;\n    margin: 0;\n    left: -10px; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  background: #f1f1f1; }\n\nbody, input, button {\n  font-family: 'Open Sans', sans-serif; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between; }\n", ""]);
	
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(6);
	
	var _loader = __webpack_require__(8);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Search = function () {
	    function Search() {
	        _classCallCheck(this, Search);
	
	        this.searchContainer = document.createElement('div');
	        this.search = document.createElement('input');
	        this.searchButton = document.createElement('button');
	
	        this.searchContainer.classList.add('search-container');
	        this.search.setAttribute('type', 'text');
	        this.search.setAttribute('placeholder', 'Search');
	        this.search.classList.add('search-input');
	        this.searchButton.setAttribute('type', 'button');
	        this.searchButton.classList.add('search-button');
	        this.searchButton.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>';
	
	        this.searchContainer.appendChild(this.search);
	        this.searchContainer.appendChild(this.searchButton);
	        document.body.appendChild(this.searchContainer);
	    }
	
	    _createClass(Search, [{
	        key: 'initOnLoad',
	        value: function initOnLoad(onLoad) {
	            this.onLoad = onLoad;
	        }
	    }, {
	        key: 'initOnClear',
	        value: function initOnClear(onClear) {
	            this.onClear = onClear;
	        }
	    }, {
	        key: 'searchVideos',
	        value: function searchVideos(e) {
	            if (e.code && e.code !== 'Enter') {
	                return;
	            }
	
	            this.onClear();
	            (0, _loader2.default)(this.search.value).then(this.onLoad);
	        }
	    }]);
	
	    return Search;
	}();
	
	exports.default = Search;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./_search-form.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./_search-form.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".search-container {\n  width: 100%;\n  padding: 30px 0;\n  background: #ffffff;\n  text-align: center; }\n  .search-container .search-input {\n    box-sizing: border-box;\n    padding: 5px 10px;\n    border: 1px solid #dbdbdb;\n    border-right: none;\n    outline: none; }\n    .search-container .search-input:focus {\n      box-shadow: 0 0 5px #b4b4b4;\n      border: 1px solid #b4b4b4; }\n  .search-container .search-button {\n    background: #e62117;\n    border: none;\n    vertical-align: top;\n    color: #ffffff;\n    transition: font-size 0.2s, background 0.5s;\n    cursor: pointer;\n    outline: none; }\n    .search-container .search-button:hover {\n      font-size: 18px;\n      background: #cf1e15; }\n\n@media only screen and (min-width: 1025px) {\n  .search-input {\n    width: 800px;\n    height: 40px;\n    font-size: 18px; }\n  .search-button {\n    height: 40px;\n    width: 100px; } }\n\n@media only screen and (max-width: 1024px) {\n  .search-input {\n    width: 500px;\n    height: 30px;\n    font-size: 14px; }\n  .search-button {\n    height: 30px;\n    width: 80px; } }\n\n@media only screen and (max-width: 720px) {\n  .search-container {\n    padding: 20px 0; }\n  .search-input {\n    width: 400px;\n    height: 30px;\n    font-size: 16px; }\n  .search-button {\n    height: 30px;\n    width: 90px; } }\n\n@media only screen and (max-width: 512px) {\n  .search-input {\n    width: 250px;\n    height: 30px;\n    font-size: 14px; }\n  .search-button {\n    height: 30px;\n    width: 80px; } }\n\n@media only screen and (max-width: 370px) {\n  .search-input {\n    width: 200px;\n    height: 30px;\n    font-size: 14px; }\n  .search-button {\n    height: 30px;\n    width: 70px; } }\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = loadVideos;
	exports.getNextVideos = getNextVideos;
	var nextPageToken = void 0;
	var queryString = void 0;
	
	function loadVideos(query) {
	    queryString = query;
	
	    return getVideos(queryString).then(getStatistics);
	}
	
	function getVideos(query) {
	    return fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDrURTYYuvbS21TDqNHvi_8SHT8tMZYqXA&type=video&part=snippet&maxResults=20&q=' + query).then(function (res) {
	        return res.json();
	    });
	}
	
	function getStatistics(videos) {
	    var idArray = [];
	
	    videos.items.forEach(function (item) {
	        idArray.push(item.id.videoId);
	    });
	    nextPageToken = videos.nextPageToken;
	
	    return fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDrURTYYuvbS21TDqNHvi_8SHT8tMZYqXA&id=' + idArray.join(',') + '&part=snippet,statistics').then(function (res) {
	        return res.json();
	    }).then(function (res) {
	        return res.items;
	    });
	}
	
	function getNextVideos() {
	    return fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDrURTYYuvbS21TDqNHvi_8SHT8tMZYqXA&pageToken=' + nextPageToken + '&part=snippet&maxResults=20&q=' + queryString).then(function (res) {
	        return res.json();
	    }).then(getStatistics);
	}

/***/ },
/* 9 */
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
	            throw Error('Not valid controllers map. Please pay attention to ' + key);
	        }
	
	        if (component === 'document') {
	            document.addEventListener(event, action);
	        } else if (component === 'window') {
	            window.addEventListener(event, action);
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Paging = __webpack_require__(11);
	
	var _Paging2 = _interopRequireDefault(_Paging);
	
	var _VideoList = __webpack_require__(12);
	
	var _VideoList2 = _interopRequireDefault(_VideoList);
	
	var _loader = __webpack_require__(8);
	
	var _ErrorMessage = __webpack_require__(14);
	
	var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Slider = function () {
	    function Slider() {
	        var numberOfSlides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var currentSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	        _classCallCheck(this, Slider);
	
	        this.numberOfSlides = numberOfSlides;
	        this.currentSlide = currentSlide;
	        this.videoList = new _VideoList2.default(this.startSwipe.bind(this));
	        this.paging = new _Paging2.default(this.navigateToPage.bind(this));
	        this.bindedMove = this.move.bind(this);
	        this.bindedEndSwipe = this.endSwipe.bind(this);
	        this.countMaxDistance();
	        this.countItemsPerSlide();
	    }
	
	    _createClass(Slider, [{
	        key: 'add',
	        value: function add(videos) {
	            if (this.numberOfSlides === 0 && videos.length === 0) {
	                this.errorMessage = new _ErrorMessage2.default('Sorry, but we couldn\'t find any videos :(');
	                return;
	            }
	            this.numberOfSlides += Math.floor(videos.length / this.itemsPerSlide);
	            this.videoList.add(videos);
	            this.paging.add(this.numberOfSlides);
	        }
	    }, {
	        key: 'startSwipe',
	        value: function startSwipe(event) {
	            if (!event.changedTouches) {
	                this.swipeStart = event.pageX;
	            } else {
	                this.swipeStart = event.changedTouches[0].pageX;
	            }
	            document.addEventListener('mousemove', this.bindedMove);
	            document.addEventListener('touchmove', this.bindedMove);
	            document.addEventListener('mouseup', this.bindedEndSwipe);
	            document.addEventListener('touchend', this.bindedEndSwipe);
	        }
	    }, {
	        key: 'navigateToPage',
	        value: function navigateToPage(e) {
	            if (e.target === e.currentTarget) {
	                return;
	            }
	
	            var pageNumber = parseInt(e.target.getAttribute('data-number'));
	
	            if (pageNumber <= this.numberOfSlides) {
	                this.videoList.moveToPage(pageNumber, this.maxDistance);
	                this.paging.changeCurrentPage(pageNumber);
	                this.currentSlide = pageNumber;
	
	                if (this.currentSlide === this.numberOfSlides - 2) {
	                    this.loadNextPage();
	                }
	            }
	        }
	    }, {
	        key: 'move',
	        value: function move(event) {
	            var currentDistance = void 0;
	
	            if (!event.changedTouches) {
	                currentDistance = event.pageX - this.swipeStart;
	            } else {
	                currentDistance = event.changedTouches[0].pageX - this.swipeStart;
	            }
	            if (currentDistance < this.maxDistance) {
	                this.videoList.move(this.currentSlide, currentDistance, this.maxDistance);
	            }
	        }
	    }, {
	        key: 'endSwipe',
	        value: function endSwipe(event) {
	            var movedDistance = void 0;
	
	            if (!event.changedTouches) {
	                movedDistance = event.pageX - this.swipeStart;
	            } else {
	                movedDistance = event.changedTouches[0].pageX - this.swipeStart;
	            }
	            if (movedDistance > 0 && this.currentSlide > 0) {
	                this.currentSlide--;
	                this.paging.changeCurrentPage(this.currentSlide);
	            }
	            if (movedDistance < 0 && this.currentSlide < this.numberOfSlides - 1) {
	                this.currentSlide++;
	                this.paging.changeCurrentPage(this.currentSlide);
	            }
	            this.videoList.moveToPage(this.currentSlide, this.maxDistance);
	            document.removeEventListener('mousemove', this.bindedMove);
	            document.removeEventListener('touchmove', this.bindedMove);
	            document.removeEventListener('mouseup', this.bindedEndSwipe);
	            document.removeEventListener('touchend', this.bindedEndSwipe);
	
	            if (this.currentSlide === this.numberOfSlides - 2) {
	                this.loadNextPage();
	            }
	        }
	    }, {
	        key: 'loadNextPage',
	        value: function loadNextPage() {
	            (0, _loader.getNextVideos)().then(this.add.bind(this));
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.numberOfSlides = 0;
	            this.currentSlide = 0;
	            this.videoList.clear();
	            this.paging.clear();
	            if (this.errorMessage) {
	                this.errorMessage.remove();
	            }
	        }
	    }, {
	        key: 'resize',
	        value: function resize() {
	            this.countSlidesNumber();
	            this.countMaxDistance();
	            this.countItemsPerSlide();
	            this.videoList.moveToPage(this.currentSlide, this.maxDistance);
	        }
	    }, {
	        key: 'countSlidesNumber',
	        value: function countSlidesNumber() {
	            if (document.body.clientWidth >= 1561) {
	                this.numberOfSlides = Math.round(this.videoList.length / 4);
	            } else if (document.body.clientWidth < 800) {
	                this.numberOfSlides = Math.round(this.videoList.length);
	            } else if (document.body.clientWidth < 1195) {
	                this.numberOfSlides = Math.round(this.videoList.length / 2);
	            } else if (document.body.clientWidth < 1561) {
	                this.numberOfSlides = Math.round(this.videoList.length / 3);
	            }
	            if (this.paging.length !== this.numberOfSlides) {
	                this.paging.update(this.numberOfSlides);
	            }
	        }
	    }, {
	        key: 'countMaxDistance',
	        value: function countMaxDistance() {
	            if (document.body.clientWidth >= 1561) {
	                this.maxDistance = 1560;
	            } else if (document.body.clientWidth < 800) {
	                this.maxDistance = 310;
	            } else if (document.body.clientWidth < 1195) {
	                this.maxDistance = 780;
	            } else if (document.body.clientWidth < 1561) {
	                this.maxDistance = 1170;
	            }
	
	            if (this.paging.length !== this.numberOfSlides) {
	                this.paging.update(this.numberOfSlides);
	            }
	        }
	    }, {
	        key: 'countItemsPerSlide',
	        value: function countItemsPerSlide() {
	            if (document.body.clientWidth >= 1561) {
	                this.itemsPerSlide = 4;
	            } else if (document.body.clientWidth < 800) {
	                this.itemsPerSlide = 1;
	            } else if (document.body.clientWidth < 1195) {
	                this.itemsPerSlide = 2;
	            } else if (document.body.clientWidth < 1561) {
	                this.itemsPerSlide = 3;
	            }
	        }
	    }]);
	
	    return Slider;
	}();
	
	exports.default = Slider;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PAGING_LENGTH = 4;
	
	var Paging = function () {
	    function Paging(navigateToPage) {
	        _classCallCheck(this, Paging);
	
	        this.paging = document.createElement('ul');
	        this.length = 0;
	        this.paging.setAttribute('class', 'paging-list');
	        this.paging.addEventListener('click', navigateToPage);
	        document.body.appendChild(this.paging);
	    }
	
	    _createClass(Paging, [{
	        key: 'add',
	        value: function add(number) {
	            if (!this.length) {
	                for (var i = 0; i < PAGING_LENGTH; i++) {
	                    this.paging.innerHTML += '<li data-number="' + i + '">' + (i + 1) + '</li>';
	                }
	                this.paging.firstChild.classList.add('current');
	            }
	            this.length += number;
	        }
	    }, {
	        key: 'update',
	        value: function update(number) {
	            this.length = number;
	        }
	    }, {
	        key: 'changeCurrentPage',
	        value: function changeCurrentPage(number) {
	            var oldPage = document.querySelector('.paging-list > li[class=current]');
	            var newPage = document.querySelector('.paging-list > li[data-number="' + number + '"]');
	            this.paging = document.querySelector('.paging-list');
	
	            if ((number === 2 || number === 0) && this.paging.children[1].classList.contains('separator')) {
	                //remove paging separator
	                this.paging.children[1].remove();
	                for (var i = 1; i < PAGING_LENGTH; i++) {
	                    this.paging.children[i].textContent = '' + (i + 1);
	                    this.paging.children[i].setAttribute('data-number', '' + i);
	                }
	                if (number === 0) {
	                    newPage.classList.add('current');
	                    oldPage.classList.remove('current');
	                }
	            } else if (number < 3) {
	                newPage.classList.add('current');
	                oldPage.classList.remove('current');
	            } else if (number === 3 && !this.paging.children[1].classList.contains('separator')) {
	                //insert paging separator
	                this.insertPagingSeparatorBefore(this.paging.children[1]);
	                this.recountDataNumber(number);
	                if (oldPage !== this.paging.lastChild.previousSibling) {
	                    this.paging.lastChild.previousSibling.classList.add('current');
	                    oldPage.classList.remove('current');
	                }
	            } else {
	                this.recountDataNumber(number);
	            }
	        }
	    }, {
	        key: 'insertPagingSeparatorBefore',
	        value: function insertPagingSeparatorBefore(element) {
	            var separator = document.createElement('li');
	
	            separator.textContent = '...';
	            separator.classList.add('separator');
	            this.paging.insertBefore(separator, element);
	        }
	    }, {
	        key: 'recountDataNumber',
	        value: function recountDataNumber(number) {
	            for (var i = 2; i < this.paging.children.length; i++) {
	                this.paging.children[i].setAttribute('data-number', '' + (number + i - 3));
	                this.paging.children[i].textContent = '' + (number + i - 2);
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.length = 0;
	            this.paging.innerHTML = '';
	        }
	    }]);
	
	    return Paging;
	}();
	
	exports.default = Paging;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Video = __webpack_require__(13);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoList = function () {
	    function VideoList(startSwipe) {
	        _classCallCheck(this, VideoList);
	
	        this.length = 0;
	        this.videoList = document.createElement('ul');
	        this.videoList.classList.add('video-list');
	        this.videoList.addEventListener('mousedown', startSwipe);
	        this.videoList.addEventListener('touchstart', startSwipe);
	
	        document.body.appendChild(this.videoList);
	    }
	
	    _createClass(VideoList, [{
	        key: 'appendVideos',
	        value: function appendVideos(videos) {
	            var videosFragment = document.createDocumentFragment();
	
	            videos.forEach(function (item) {
	                return videosFragment.appendChild(item.video);
	            });
	            this.videoList.appendChild(videosFragment);
	            this.length += videos.length;
	
	            return this;
	        }
	    }, {
	        key: 'add',
	        value: function add(data) {
	            var videosArray = data.map(function (item) {
	                return new _Video2.default(item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.channelTitle, item.snippet.publishedAt, item.statistics.viewCount, item.statistics.likeCount, item.statistics.dislikeCount, item.id);
	            });
	
	            this.appendVideos(videosArray);
	        }
	    }, {
	        key: 'moveToPage',
	        value: function moveToPage(pageNumber, maxDistance) {
	            [].forEach.call(this.videoList.children, function (item) {
	                item.classList.add('animate');
	                item.style.transform = 'translate3d(' + -maxDistance * pageNumber + 'px, 0, 0)';
	            });
	        }
	    }, {
	        key: 'move',
	        value: function move(currentSlide, currentDistance, maxDistance) {
	            [].forEach.call(this.videoList.children, function (item) {
	                item.classList.remove('animate');
	                item.style.transform = 'translate3d(' + (-maxDistance * currentSlide + currentDistance) + 'px, 0, 0)';
	            });
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.length = 0;
	            this.videoList.innerHTML = '';
	        }
	    }, {
	        key: 'getVideoList',
	        value: function getVideoList() {
	            return this.videoList;
	        }
	    }]);
	
	    return VideoList;
	}();
	
	exports.default = VideoList;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Video = function () {
	    function Video(title, preview, author, date, review, likes, dislikes, id) {
	        _classCallCheck(this, Video);
	
	        this.title = title;
	        this.preview = preview;
	        this.author = author;
	        this.date = date;
	        this.review = review;
	        this.link = 'https://www.youtube.com/watch?v=' + id;
	        this.likes = likes;
	        this.dislikes = dislikes;
	
	        this.composeElement();
	    }
	
	    _createClass(Video, [{
	        key: 'composeElement',
	        value: function composeElement() {
	            this.videoItem = document.createElement('li');
	            this.videoItem.classList.add('video-list-item');
	            this.videoItem.innerHTML = '\n            <div class="title" style="background: url(' + this.preview + ') 50% 50% no-repeat; background-size: cover">\n                <a href="' + this.link + '" target="_blank"><h2 class="video-header">' + this.title + '</h2></a>\n            </div>\n            <div class="description">\n                <ul>\n                    <li class="author">' + this.author + '</li>\n                    <li class="date">' + new Date(this.date).toISOString().slice(0, 10) + '</li>\n                    <li class="review">' + this.review + '</li>\n                    <li class="like">' + this.likes + '</li>\n                    <li class="dislike">' + this.dislikes + '</li>\n                </ul>    \n            </div>\n        ';
	        }
	    }, {
	        key: 'video',
	        get: function get() {
	            return this.videoItem;
	        }
	    }]);
	
	    return Video;
	}();
	
	exports.default = Video;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ErrorMessage = function () {
	    function ErrorMessage(message) {
	        _classCallCheck(this, ErrorMessage);
	
	        this.errorMessage = document.createElement('h2');
	        this.errorMessage.classList.add('error-message');
	        this.errorMessage.textContent = message;
	        document.body.appendChild(this.errorMessage);
	    }
	
	    _createClass(ErrorMessage, [{
	        key: 'remove',
	        value: function remove() {
	            this.errorMessage.remove();
	        }
	    }]);
	
	    return ErrorMessage;
	}();
	
	exports.default = ErrorMessage;

/***/ }
/******/ ]);
//# sourceMappingURL=scripts.bundle.js.map