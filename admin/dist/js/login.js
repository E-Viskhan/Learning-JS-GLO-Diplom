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

/***/ "./admin/src/login.js":
/*!****************************!*\
  !*** ./admin/src/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cookies */ \"./admin/src/modules/cookies.js\");\n/* harmony import */ var _modules_repuests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/repuests */ \"./admin/src/modules/repuests.js\");\n\r\n\r\n\r\nconst redirectToAdmin = () => document.location.href = 'table.html';\r\n\r\nif ((0,_modules_cookies__WEBPACK_IMPORTED_MODULE_0__.getCookie)('access') === 'true') { redirectToAdmin(); }\r\n\r\nconst form = document.getElementById('form');\r\nconst formHandler = async (e) => {\r\n  const loginInput = form.querySelector('#login');\r\n  const passwordInput = form.querySelector('#password');\r\n  const isUserValid = async () => {\r\n    const login = loginInput.value.trim();\r\n    const password = passwordInput.value.trim();\r\n\r\n    return await (0,_modules_repuests__WEBPACK_IMPORTED_MODULE_1__.getData)(`http://localhost:3000/users?login=${login}&password=${password}`)\r\n      .then(res => res.length ? true : false);\r\n  };\r\n  const showAuthError = () => document.querySelector('.text-warning').classList.remove('d-none');\r\n\r\n  e.preventDefault();\r\n\r\n  if (await isUserValid()) {\r\n    (0,_modules_cookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)('access', 'true');\r\n    redirectToAdmin();\r\n  } else {\r\n    showAuthError();\r\n  }\r\n};\r\n\r\nform.addEventListener('submit', formHandler);\n\n//# sourceURL=webpack://example/./admin/src/login.js?");

/***/ }),

/***/ "./admin/src/modules/cookies.js":
/*!**************************************!*\
  !*** ./admin/src/modules/cookies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\nconst getCookie = (name) => {\r\n  let matches = document.cookie.match(new RegExp(\r\n    \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\r\n  ));\r\n  return matches ? decodeURIComponent(matches[1]) : undefined;\r\n};\r\n\r\nconst setCookie = (name, value) => {\r\n  let date = new Date(Date.now() + 86400 * 1000);\r\n  date = date.toUTCString();\r\n  document.cookie = `${name}=${value};expires=${date}`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/cookies.js?");

/***/ }),

/***/ "./admin/src/modules/repuests.js":
/*!***************************************!*\
  !*** ./admin/src/modules/repuests.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\nconst getData = async (url) => {\r\n  try {\r\n    const res = await fetch(url);\r\n    if (!res.ok) {\r\n      throw new Error('Произошла ошибка, данных нет!');\r\n    }\r\n    return await res.json();\r\n  } catch (error) {\r\n    console.error(error.message);\r\n  }\r\n};\r\n\r\nconst sendData = async ({ url, data, method = \"POST\" }) => {\r\n  try {\r\n    const res = await fetch(url, {\r\n      method,\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify(data)\r\n    });\r\n\r\n    if (!res.ok) {\r\n      throw new Error('Произошла ошибка, данных нет!');\r\n    }\r\n  } catch (error) {\r\n    console.error(error.message);\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/repuests.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./admin/src/login.js");
/******/ 	
/******/ })()
;