/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/src/admin.js":
/*!****************************!*\
  !*** ./admin/src/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_checkAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/checkAuth */ \"./admin/src/modules/checkAuth.js\");\n\r\n\r\n(0,_modules_checkAuth__WEBPACK_IMPORTED_MODULE_0__.checkAuth)();\n\n//# sourceURL=webpack://example/./admin/src/admin.js?");

/***/ }),

/***/ "./admin/src/modules/checkAuth.js":
/*!****************************************!*\
  !*** ./admin/src/modules/checkAuth.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkAuth\": () => (/* binding */ checkAuth)\n/* harmony export */ });\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies */ \"./admin/src/modules/cookies.js\");\n\r\n\r\nconst checkAuth = () => {\r\n  const redirectToAuth = () => document.location.href = 'index.html';\r\n  if ((0,_cookies__WEBPACK_IMPORTED_MODULE_0__.getCookie)('access') !== 'true') { redirectToAuth(); }\r\n\r\n\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/checkAuth.js?");

/***/ }),

/***/ "./admin/src/modules/cookies.js":
/*!**************************************!*\
  !*** ./admin/src/modules/cookies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\nconst getCookie = (name) => {\r\n  let matches = document.cookie.match(new RegExp(\r\n    \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\r\n  ));\r\n  return matches ? decodeURIComponent(matches[1]) : undefined;\r\n};\r\n\r\nconst setCookie = (name, value) => {\r\n  let date = new Date(Date.now() + 86400 * 1000);\r\n  date = date.toUTCString();\r\n  document.cookie = `${name}=${value};expires=${date}`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/cookies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin/src/admin.js");
/******/ 	
/******/ })()
;