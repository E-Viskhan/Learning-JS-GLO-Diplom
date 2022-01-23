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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_checkAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/checkAuth */ \"./admin/src/modules/checkAuth.js\");\n/* harmony import */ var _modules_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiService */ \"./admin/src/modules/apiService.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ \"./admin/src/modules/render.js\");\n/* harmony import */ var _modules_filterServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filterServices */ \"./admin/src/modules/filterServices.js\");\n/* harmony import */ var _modules_addService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addService */ \"./admin/src/modules/addService.js\");\n/* harmony import */ var _modules_changeService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changeService */ \"./admin/src/modules/changeService.js\");\n/* harmony import */ var _modules_removeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/removeService */ \"./admin/src/modules/removeService.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal */ \"./admin/src/modules/modal.js\");\n/* harmony import */ var _modules_sortServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sortServices */ \"./admin/src/modules/sortServices.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_checkAuth__WEBPACK_IMPORTED_MODULE_0__.checkAuth)();\r\n\r\nwindow.apiService = new _modules_apiService__WEBPACK_IMPORTED_MODULE_1__.ApiService();\r\n\r\napiService.getServices().then(services => (0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.renderServices)(services));\r\n\r\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.renderTypesServices)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_7__.modal)();\r\n(0,_modules_filterServices__WEBPACK_IMPORTED_MODULE_3__.filterServices)();\r\n(0,_modules_addService__WEBPACK_IMPORTED_MODULE_4__.addService)();\r\n(0,_modules_changeService__WEBPACK_IMPORTED_MODULE_5__.changeService)();\r\n(0,_modules_removeService__WEBPACK_IMPORTED_MODULE_6__.removeService)();\r\n(0,_modules_sortServices__WEBPACK_IMPORTED_MODULE_8__.sortServices)();\n\n//# sourceURL=webpack://example/./admin/src/admin.js?");

/***/ }),

/***/ "./admin/src/modules/addService.js":
/*!*****************************************!*\
  !*** ./admin/src/modules/addService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addService\": () => (/* binding */ addService)\n/* harmony export */ });\n/* harmony import */ var _client_src_modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/src/modules/helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./admin/src/modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst addService = () => {\r\n  const addBtn = document.querySelector('.btn-addItem');\r\n  const form = document.getElementById('form');\r\n  const modalHeader = document.querySelector('.modal__header');\r\n\r\n  modalHeader.textContent = 'Добавение новой услуги';\r\n\r\n  addBtn.addEventListener('click', (e) => {\r\n    form.dataset.method = 'add';\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.toggleModal)();\r\n    (0,_client_src_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n  });\r\n\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/addService.js?");

/***/ }),

/***/ "./admin/src/modules/apiService.js":
/*!*****************************************!*\
  !*** ./admin/src/modules/apiService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiService\": () => (/* binding */ ApiService)\n/* harmony export */ });\n/* harmony import */ var _repuests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repuests */ \"./admin/src/modules/repuests.js\");\n\r\n\r\nconst url = 'http://localhost:3000/services/';\r\n\r\nclass ApiService {\r\n  async getServices() {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.getData)(url);\r\n  }\r\n\r\n  async getService(serviceId) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.getData)(url + serviceId);\r\n  }\r\n\r\n  async addService(service) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.sendData)({ url, data: service });\r\n  }\r\n\r\n  async removeService(serviceId) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.sendData)({ url: url + serviceId, method: 'DELETE' });\r\n  }\r\n\r\n  async changeService(serviceId, data) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.sendData)({ url: url + serviceId, data, method: 'PATCH' });\r\n  }\r\n\r\n  async replaceService(serviceId, service) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.sendData)({ url: url + serviceId, data: service, method: 'PUT' });\r\n  }\r\n\r\n  async filterServices(serviceType) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.getData)(`${url}?type=${serviceType}`);\r\n  }\r\n\r\n  async getSortServices({ sortOptionName, order }) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:4545/users?_sort=${sortOptionName}&_order=${order}`);\r\n  }\r\n\r\n  async getSearchUsers(str) {\r\n    return (0,_repuests__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:4545/users?name_like=${str}`);\r\n  }\r\n}\n\n//# sourceURL=webpack://example/./admin/src/modules/apiService.js?");

/***/ }),

/***/ "./admin/src/modules/changeService.js":
/*!********************************************!*\
  !*** ./admin/src/modules/changeService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeService\": () => (/* binding */ changeService)\n/* harmony export */ });\n/* harmony import */ var _client_src_modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/src/modules/helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./admin/src/modules/helpers.js\");\n\r\n\r\n\r\nconst changeService = () => {\r\n  const tBody = document.getElementById('tbody');\r\n\r\n  tBody.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n\r\n    if (target.closest('.action-change')) {\r\n      const modalHeader = document.querySelector('.modal__header');\r\n      const form = document.getElementById('form');\r\n      const typeInput = form.querySelector('#type');\r\n      const nameInput = form.querySelector('#name');\r\n      const costInput = form.querySelector('#cost');\r\n      const unitsInput = form.querySelector('#units');\r\n      const serviceId = target.closest('tr').querySelector('.table__id').textContent;\r\n\r\n      modalHeader.textContent = 'Редактировать услугу';\r\n\r\n      apiService.getService(serviceId).then(service => {\r\n        typeInput.value = service.type;\r\n        nameInput.value = service.name;\r\n        costInput.value = service.cost;\r\n        unitsInput.value = service.units;\r\n      });\r\n\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();\r\n      (0,_client_src_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n\r\n      form.dataset.method = 'change';\r\n      form.dataset.serviceId = serviceId;\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/changeService.js?");

/***/ }),

/***/ "./admin/src/modules/checkAuth.js":
/*!****************************************!*\
  !*** ./admin/src/modules/checkAuth.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkAuth\": () => (/* binding */ checkAuth)\n/* harmony export */ });\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies */ \"./admin/src/modules/cookies.js\");\n\r\n\r\nconst checkAuth = () => {\r\n  const redirectToAuth = () => document.location.href = 'index.html';\r\n  if ((0,_cookies__WEBPACK_IMPORTED_MODULE_0__.getCookie)('access') !== 'true') { redirectToAuth(); }\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/checkAuth.js?");

/***/ }),

/***/ "./admin/src/modules/cookies.js":
/*!**************************************!*\
  !*** ./admin/src/modules/cookies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\nconst getCookie = (name) => {\r\n  let matches = document.cookie.match(new RegExp(\r\n    \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\r\n  ));\r\n  return matches ? decodeURIComponent(matches[1]) : undefined;\r\n};\r\n\r\nconst setCookie = (name, value) => {\r\n  let date = new Date(Date.now() + 86400 * 1000);\r\n  date = date.toUTCString();\r\n  document.cookie = `${name}=${value};expires=${date}`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/cookies.js?");

/***/ }),

/***/ "./admin/src/modules/filterServices.js":
/*!*********************************************!*\
  !*** ./admin/src/modules/filterServices.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterServices\": () => (/* binding */ filterServices)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\r\n\r\nconst filterServices = () => {\r\n  const typeItem = document.getElementById('typeItem');\r\n\r\n  typeItem.addEventListener('change', async (e) => {\r\n    let services;\r\n    let selectedServiceType = typeItem.value;\r\n\r\n    if (selectedServiceType === 'Все услуги') {\r\n      services = await apiService.getServices();\r\n    } else {\r\n      services = await apiService.filterServices(selectedServiceType);\r\n    }\r\n\r\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderServices)(services);\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/filterServices.js?");

/***/ }),

/***/ "./admin/src/modules/helpers.js":
/*!**************************************!*\
  !*** ./admin/src/modules/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleModal\": () => (/* binding */ toggleModal)\n/* harmony export */ });\nconst toggleModal = () => {\r\n  const modal = document.getElementById('modal');\r\n  modal.classList.toggle('d-none');\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/helpers.js?");

/***/ }),

/***/ "./admin/src/modules/modal.js":
/*!************************************!*\
  !*** ./admin/src/modules/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _client_src_modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/src/modules/helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./admin/src/modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n  const modal = document.getElementById('modal');\r\n  const form = document.getElementById('form');\r\n  const closeModal = () => {\r\n    form.reset();\r\n    form.removeAttribute('data-service-id');\r\n    form.removeAttribute('data-method');\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.toggleModal)();\r\n    (0,_client_src_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.unblockBody)();\r\n  };\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    const target = e.target;\r\n\r\n    if (target.classList.contains('modal__overlay') || target.closest('.button__close') ||\r\n      target.closest('.cancel-button')) {\r\n      closeModal();\r\n    } else if (target.closest('#submit')) {\r\n      const formData = new FormData(form);\r\n      let data = {};\r\n\r\n      for (let [key, value] of formData) {\r\n        data[key] = value;\r\n      }\r\n\r\n      switch (form.dataset.method) {\r\n        case 'add':\r\n          apiService.addService(data).then(() => (0,_render__WEBPACK_IMPORTED_MODULE_1__.reRender)());\r\n          break;\r\n        case 'change':\r\n          const serviceId = form.dataset.serviceId;\r\n          apiService.changeService(serviceId, data).then(() => (0,_render__WEBPACK_IMPORTED_MODULE_1__.reRender)());\r\n          break;\r\n      }\r\n      closeModal();\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/modal.js?");

/***/ }),

/***/ "./admin/src/modules/removeService.js":
/*!********************************************!*\
  !*** ./admin/src/modules/removeService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeService\": () => (/* binding */ removeService)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\r\n\r\nconst removeService = () => {\r\n  const tBody = document.getElementById('tbody');\r\n\r\n  tBody.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n\r\n    if (e.target.closest('.action-remove')) {\r\n      const serviceId = target.closest('tr').querySelector('.table__id').textContent;\r\n\r\n      apiService.removeService(serviceId).then(() => (0,_render__WEBPACK_IMPORTED_MODULE_0__.reRender)());\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/removeService.js?");

/***/ }),

/***/ "./admin/src/modules/render.js":
/*!*************************************!*\
  !*** ./admin/src/modules/render.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTypesServices\": () => (/* binding */ renderTypesServices),\n/* harmony export */   \"renderServices\": () => (/* binding */ renderServices),\n/* harmony export */   \"reRender\": () => (/* binding */ reRender)\n/* harmony export */ });\n/* harmony import */ var _client_src_modules_getServiceTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/src/modules/getServiceTypes */ \"./client/src/modules/getServiceTypes.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ \"./admin/src/modules/templates.js\");\n\r\n\r\n\r\nconst renderTypesServices = async () => {\r\n  const typesContainer = document.getElementById('typeItem');\r\n  const types = await (0,_client_src_modules_getServiceTypes__WEBPACK_IMPORTED_MODULE_0__.getServiceTypes)();\r\n\r\n  types.forEach(type => {\r\n    const serviceTypeHTML = (0,_templates__WEBPACK_IMPORTED_MODULE_1__.getServiceTypeHTML)(type);\r\n\r\n    typesContainer.insertAdjacentHTML('beforeend', serviceTypeHTML);\r\n  });\r\n};\r\n\r\nconst renderServices = (services) => {\r\n  const servicesContainer = document.getElementById('tbody');\r\n\r\n  servicesContainer.innerHTML = '';\r\n\r\n  services.forEach(service => {\r\n    const serviceHTML = (0,_templates__WEBPACK_IMPORTED_MODULE_1__.getServiceHTML)(service);\r\n\r\n    servicesContainer.insertAdjacentHTML('beforeend', serviceHTML);\r\n  });\r\n};\r\n\r\nconst reRender = () => {\r\n  apiService.getServices().then(services => renderServices(services));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/render.js?");

/***/ }),

/***/ "./admin/src/modules/repuests.js":
/*!***************************************!*\
  !*** ./admin/src/modules/repuests.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\nconst getData = async (url) => {\r\n  try {\r\n    const res = await fetch(url);\r\n    if (!res.ok) {\r\n      throw new Error('Произошла ошибка, данных нет!');\r\n    }\r\n    return await res.json();\r\n  } catch (error) {\r\n    console.error(error.message);\r\n  }\r\n};\r\n\r\nconst sendData = async ({ url, data, method = \"POST\" }) => {\r\n  try {\r\n    const res = await fetch(url, {\r\n      method,\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify(data)\r\n    });\r\n\r\n    if (!res.ok) {\r\n      throw new Error('Произошла ошибка, данных нет!');\r\n    }\r\n  } catch (error) {\r\n    console.error(error.message);\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/repuests.js?");

/***/ }),

/***/ "./admin/src/modules/sortServices.js":
/*!*******************************************!*\
  !*** ./admin/src/modules/sortServices.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortServices\": () => (/* binding */ sortServices)\n/* harmony export */ });\nconst sortServices = () => {\r\n  const tHead = document.querySelector('thead');\r\n\r\n  tHead.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n\r\n    console.log(target.closest('.table-th'));\r\n\r\n    if (target.closest('.action-change')) {\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./admin/src/modules/sortServices.js?");

/***/ }),

/***/ "./admin/src/modules/templates.js":
/*!****************************************!*\
  !*** ./admin/src/modules/templates.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServiceHTML\": () => (/* binding */ getServiceHTML),\n/* harmony export */   \"getServiceTypeHTML\": () => (/* binding */ getServiceTypeHTML)\n/* harmony export */ });\nconst getServiceTypeHTML = (name) => `<option value=\"${name}\">${name}</option>`;\r\n\r\nconst getServiceHTML = ({ type, name, units, cost, id }) => {\r\n  return `<tr class=\"table__row\">\r\n    <td class=\"table__id table__cell\">${id}</td>\r\n    <td class=\"table-type table__cell\">${type}</td>\r\n    <td class=\"table-name table__cell\">${name}</td>\r\n    <td class=\"table-units table__cell\">${units}</td>\r\n    <td class=\"table-cost table__cell\">${cost} руб</td>\r\n    <td>\r\n      <div class=\"table__actions table__cell\">\r\n        <button class=\"button action-change\">\r\n          <span class=\"svg_ui\">\r\n            <svg class=\"action-icon_change\">\r\n              <use xlink:href=\"./img/sprite.svg#change\"></use>\r\n            </svg>\r\n          </span>\r\n          <span>Изменить</span>\r\n        </button>\r\n        <button class=\"button action-remove\">\r\n          <span class=\"svg_ui\">\r\n            <svg class=\"action-icon_remove\">\r\n              <use xlink:href=\"./img/sprite.svg#remove\"></use>\r\n            </svg>\r\n          </span>\r\n          <span>Удалить</span>\r\n        </button>\r\n      </div>\r\n    </td>\r\n  </tr>`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./admin/src/modules/templates.js?");

/***/ }),

/***/ "./client/src/modules/getServiceTypes.js":
/*!***********************************************!*\
  !*** ./client/src/modules/getServiceTypes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServiceTypes\": () => (/* binding */ getServiceTypes)\n/* harmony export */ });\nconst getServiceTypes = async () => {\r\n  return fetch('http://localhost:3000/services/')\r\n    .then(res => res.json())\r\n    .then(services => {\r\n      const types = new Set();\r\n      services.forEach(service => types.add(service.type));\r\n      return types;\r\n    });\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/getServiceTypes.js?");

/***/ }),

/***/ "./client/src/modules/helpers.js":
/*!***************************************!*\
  !*** ./client/src/modules/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"blockBody\": () => (/* binding */ blockBody),\n/* harmony export */   \"unblockBody\": () => (/* binding */ unblockBody),\n/* harmony export */   \"animateValue\": () => (/* binding */ animateValue),\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll),\n/* harmony export */   \"togglePopup\": () => (/* binding */ togglePopup)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n};\r\n\r\nconst blockBody = () => {\r\n  const calcScroll = () => {\r\n    let scrollWidth = 0;\r\n    let scrollHeight = Math.max(\r\n      document.body.scrollHeight, document.documentElement.scrollHeight,\r\n      document.body.offsetHeight, document.documentElement.offsetHeight,\r\n      document.body.clientHeight, document.documentElement.clientHeight\r\n    );\r\n\r\n    if (scrollHeight > document.documentElement.clientHeight) {\r\n      let div = document.createElement('div');\r\n      div.style.width = '500px';\r\n      div.style.height = '500px';\r\n      div.style.overflowY = 'scroll';\r\n      div.style.visibility = 'hidden';\r\n      document.body.appendChild(div);\r\n      scrollWidth = div.offsetWidth - div.clientWidth;\r\n      div.remove();\r\n    }\r\n    return scrollWidth;\r\n  };\r\n  document.body.style.marginRight = `${calcScroll()}px`;\r\n  document.body.style.overflow = 'hidden';\r\n};\r\n\r\nconst unblockBody = () => {\r\n  document.body.style.marginRight = '0';\r\n  document.body.style.overflow = 'auto';\r\n};\r\n\r\nconst smoothScroll = (link, e) => {\r\n  e.preventDefault();\r\n\r\n  const href = link.getAttribute('href').substring(1);\r\n  const targetElement = document.getElementById(href);\r\n  const scrollValue = targetElement.getBoundingClientRect().top;\r\n\r\n  window.scrollBy({\r\n    top: scrollValue,\r\n    behavior: 'smooth'\r\n  });\r\n};\r\n\r\n\r\nconst animateValue = (obj, start, end, duration) => {\r\n  let startTimestamp = null;\r\n  const step = (timestamp) => {\r\n    if (!startTimestamp) startTimestamp = timestamp;\r\n    const progress = Math.min((timestamp - startTimestamp) / duration, 1);\r\n    obj.textContent = Math.floor(progress * (end - start) + start);\r\n    if (progress < 1) {\r\n      window.requestAnimationFrame(step);\r\n    }\r\n  };\r\n  window.requestAnimationFrame(step);\r\n};\r\n\r\nconst togglePopup = (popup, e = '') => {\r\n  popup.classList.toggle('popup--active');\r\n\r\n  popup.classList.contains('popup--active') ? blockBody() : unblockBody();\r\n\r\n  if (popup.matches('.popup-repair-types.popup--active')) { e.preventDefault(); }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./client/src/modules/helpers.js?");

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