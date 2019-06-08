/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./style.css":
/*!***************************************************************************************!*\
  !*** /Users/ashgracias/tables-n-tops/node_modules/css-loader/dist/cjs.js!./style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./style.css?/Users/ashgracias/tables-n-tops/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from /Users/ashgracias/tables-n-tops/node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/ashgracias/tables-n-tops/src/client/main.js: Unexpected token (14:12)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mspan\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mspan\\u001b[39m className\\u001b[33m=\\u001b[39m{\\u001b[32m'header'\\u001b[39m}\\u001b[33m>\\u001b[39m\\u001b[33mThe\\u001b[39m \\u001b[33mAvenger\\u001b[39m \\u001b[33mZone\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mspan\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m{\\u001b[32m'map'\\u001b[39m}\\u001b[33m>\\u001b[39mmap\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m{\\u001b[32m'players'\\u001b[39m}\\u001b[33m>\\u001b[39mplayers\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:6344:17)\\n    at Parser.unexpected (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:7659:16)\\n    at Parser.parseExprAtom (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8828:20)\\n    at Parser.parseExprSubscripts (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Parser.parseMaybeUnary (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Parser.parseExprOps (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Parser.parseMaybeConditional (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Parser.parseMaybeAssign (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8963:28)\\n    at Parser.parseExprAtom (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8760:21)\\n    at Parser.parseExprSubscripts (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Parser.parseMaybeUnary (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Parser.parseExprOps (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Parser.parseMaybeConditional (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Parser.parseMaybeAssign (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Parser.parseExpression (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:8148:23)\\n    at Parser.parseReturnStatement (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10157:28)\\n    at Parser.parseStatementContent (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:9836:21)\\n    at Parser.parseStatement (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Parser.parseBlockBody (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Parser.parseBlock (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10335:10)\\n    at Parser.parseFunctionBody (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:9408:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:9378:10)\\n    at Parser.parseMethod (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:9332:10)\\n    at Parser.pushClassMethod (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10767:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10692:12)\\n    at Parser.parseClassMember (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10631:10)\\n    at withTopicForbiddingContext (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:10586:14)\\n    at Parser.withTopicForbiddingContext (/Users/ashgracias/tables-n-tops/node_modules/@babel/parser/lib/index.js:9683:14)\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../node_modules/css-loader/dist/cjs.js!./style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./main.js ./style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./main.js */\"./main.js\");\nmodule.exports = __webpack_require__(/*! ./style.css */\"./style.css\");\n\n\n//# sourceURL=webpack:///multi_./main.js_./style.css?");

/***/ })

/******/ });