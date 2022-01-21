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

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contracts */ \"./client/src/modules/contracts.js\");\n/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/faq */ \"./client/src/modules/faq.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ \"./client/src/modules/forms.js\");\n/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/formula */ \"./client/src/modules/formula.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header */ \"./client/src/modules/header.js\");\n/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/portfolio */ \"./client/src/modules/portfolio.js\");\n/* harmony import */ var _modules_repairPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/repairPopup */ \"./client/src/modules/repairPopup.js\");\n/* harmony import */ var _modules_repairTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/repairTypes */ \"./client/src/modules/repairTypes.js\");\n/* harmony import */ var _modules_resize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/resize */ \"./client/src/modules/resize.js\");\n/* harmony import */ var _modules_reviews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/reviews */ \"./client/src/modules/reviews.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_4__.header)();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__.forms)();\r\n(0,_modules_formula__WEBPACK_IMPORTED_MODULE_3__.formula)();\r\n(0,_modules_repairTypes__WEBPACK_IMPORTED_MODULE_7__.repairTypes)();\r\n(0,_modules_portfolio__WEBPACK_IMPORTED_MODULE_5__.portfolio)();\r\n(0,_modules_contracts__WEBPACK_IMPORTED_MODULE_0__.contracts)();\r\n(0,_modules_reviews__WEBPACK_IMPORTED_MODULE_9__.reviews)();\r\n(0,_modules_faq__WEBPACK_IMPORTED_MODULE_1__.faq)();\r\n(0,_modules_repairPopup__WEBPACK_IMPORTED_MODULE_6__.repairPopup)();\r\n(0,_modules_resize__WEBPACK_IMPORTED_MODULE_8__.resize)();\n\n//# sourceURL=webpack://example/./client/src/index.js?");

/***/ }),

/***/ "./client/src/modules/contracts.js":
/*!*****************************************!*\
  !*** ./client/src/modules/contracts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contracts\": () => (/* binding */ contracts)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./client/src/modules/slider.js\");\n\r\n\r\n\r\nconst contracts = () => {\r\n  const transparencySlider = document.querySelector('.transparency-slider');\r\n\r\n  transparencySlider.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n\r\n    if (target.classList.contains('transparency-item__img')) {\r\n      const popup = document.querySelector('.popup-transparency');\r\n      const initialSlide = +target.closest('.transparency-item').dataset.initialSlide;\r\n      const transparencySlider = document.querySelector('.popup-transparency-container');\r\n      const slide = transparencySlider.querySelector('.popup-transparency-slider__slide');\r\n      const slideWidth = parseFloat(slide.style.width);\r\n      const current = document.querySelector('#transparency-popup-counter .slider-counter-content__current');\r\n\r\n      transparencySlider.style.transform = `translateX(-${slideWidth * (initialSlide - 1)}px)`;\r\n      current.textContent = initialSlide;\r\n\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(popup, e);\r\n    }\r\n  });\r\n\r\n  (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n    slidesWrapperClass: '.popup-transparency-slider',\r\n    slidesFieldClass: '.popup-transparency-container',\r\n    slidesClass: '.popup-transparency-slider__slide',\r\n    prevSelector: '#transparency_left',\r\n    nextSelector: '#transparency_right',\r\n    currentClass: '#transparency-popup-counter .slider-counter-content__current',\r\n    totalClass: '#transparency-popup-counter .slider-counter-content__total',\r\n    initialSlide: true\r\n  });\r\n\r\n  if (window.screen.width < 1090) {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n      slidesWrapperClass: '.transparency-slider-wrap',\r\n      slidesFieldClass: '.transparency-slider',\r\n      slidesClass: '.transparency-item',\r\n      prevSelector: '#transparency-arrow_left',\r\n      nextSelector: '#transparency-arrow_right',\r\n    });\r\n  }\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/contracts.js?");

/***/ }),

/***/ "./client/src/modules/faq.js":
/*!***********************************!*\
  !*** ./client/src/modules/faq.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"faq\": () => (/* binding */ faq)\n/* harmony export */ });\nconst faq = () => {\r\n  const accordion = document.querySelector('#faq-accordion');\r\n\r\n  accordion.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n\r\n    if (target.classList.contains('msg-active')) {\r\n      target.classList.remove('msg-active');\r\n      return;\r\n    }\r\n\r\n    const activeAcc = accordion.querySelector('.msg-active');\r\n    if (activeAcc) {\r\n      activeAcc.classList.remove('msg-active');\r\n    }\r\n\r\n    if (target.classList.contains('title_block')) {\r\n      target.classList.add('msg-active');\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/faq.js?");

/***/ }),

/***/ "./client/src/modules/forms.js":
/*!*************************************!*\
  !*** ./client/src/modules/forms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maskPhone */ \"./client/src/modules/maskPhone.js\");\n\r\n\r\n\r\nconst forms = () => {\r\n  const forms = document.querySelectorAll('form');\r\n\r\n  const sendForm = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/comments/', {\r\n      method: 'POST',\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      },\r\n      body: JSON.stringify(data)\r\n    })\r\n      .then(res => res.json())\r\n      .catch(() => console.error(new Error('Ошибка отправки данных из формы')));\r\n  };\r\n\r\n  forms.forEach(form => form.addEventListener('submit', function (e) {\r\n    const inputs = this.querySelectorAll('input[type=text]');\r\n    const checkbox = this.querySelector('input[type=checkbox]');\r\n\r\n    let check = true;\r\n\r\n    inputs.forEach(input => {\r\n      switch (input.name) {\r\n        case \"phone\":\r\n          if (input.value < 18) {\r\n            alert(\"Пожалуйста, введите номер телефона.\");\r\n            check = false;\r\n          }\r\n          break;\r\n        case \"name\":\r\n          if (input.value.trim() === '') {\r\n            alert(\"Пожалуйста, напишите ваше имя.\");\r\n            check = false;\r\n          }\r\n          break;\r\n      }\r\n    });\r\n\r\n    if (!checkbox.checked) {\r\n      alert(\"Пожалуйста, дайте согласие на обработку персональных данных.\");\r\n      check = false;\r\n    }\r\n\r\n    if (check) {\r\n      const formData = new FormData(this);\r\n      let formValues = {};\r\n\r\n      formData.forEach((val, key) => {\r\n        formValues[key] = val;\r\n      });\r\n\r\n      sendForm(formValues).then(() => {\r\n        const thankPopup = document.querySelector('.popup-thank');\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(thankPopup);\r\n      });\r\n      this.reset();\r\n    }\r\n\r\n    e.preventDefault();\r\n  }));\r\n\r\n  (0,_maskPhone__WEBPACK_IMPORTED_MODULE_1__.maskPhone)('input[data-mask=\"phone\"');\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/forms.js?");

/***/ }),

/***/ "./client/src/modules/formula.js":
/*!***************************************!*\
  !*** ./client/src/modules/formula.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formula\": () => (/* binding */ formula)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./client/src/modules/slider.js\");\n\r\n\r\nconst formula = () => {\r\n  const formulaIcons = document.querySelectorAll('.mobile-hide .formula-item__icon');\r\n  const root = document.querySelector(':root');\r\n\r\n  formulaIcons.forEach(icon => {\r\n    icon.addEventListener('mouseenter', function (e) {\r\n      const item = e.target.closest('.formula-item');\r\n      const popup = item.querySelector('.formula-item-popup');\r\n      const freePlace = item.getBoundingClientRect().top;\r\n      const popupNeedPlace = parseInt(getComputedStyle(popup).height) + 15;\r\n\r\n\r\n      if (freePlace < popupNeedPlace) {\r\n        root.style.setProperty('--number-degrees', \"180deg\");\r\n        popup.style.paddingTop = '40px';\r\n        popup.style.bottom = -(popupNeedPlace + 15) + 'px';\r\n      } else {\r\n        root.style.setProperty('--number-degrees', 0);\r\n        popup.style.paddingTop = '20px';\r\n        popup.style.bottom = '90px';\r\n      }\r\n\r\n      item.classList.add('active-item');\r\n    });\r\n\r\n    icon.addEventListener('mouseleave', function (e) {\r\n      const target = e.target;\r\n      const item = target.closest('.formula-item');\r\n      item.classList.remove('active-item');\r\n    });\r\n  });\r\n\r\n  const formulaIconsMob = document.querySelectorAll('.desktop-hide .formula-item__icon');\r\n  root.style.setProperty('--number-degrees', \"180deg\");\r\n\r\n  formulaIconsMob.forEach(icon => {\r\n    icon.addEventListener('click', (e) => {\r\n      const item = e.target.closest('.formula-item');\r\n      item.classList.toggle('active-item');\r\n    });\r\n  });\r\n\r\n  (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\r\n    slidesClass: '.formula-slider__slide',\r\n    prevSelector: '#formula-arrow_left',\r\n    nextSelector: '#formula-arrow_right',\r\n    slidesWrapperClass: '.formula-slider-wrap',\r\n    slidesFieldClass: '.formula-slider'\r\n  });\r\n\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/formula.js?");

/***/ }),

/***/ "./client/src/modules/header.js":
/*!**************************************!*\
  !*** ./client/src/modules/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./client/src/modules/helpers.js\");\n\r\n\r\nconst header = () => {\r\n  const headerArrowBlock = document.querySelector('.header-contacts__arrow');\r\n  const headerArrow = headerArrowBlock.querySelector('img');\r\n  const secondContactAccord = document.querySelector('.header-contacts__phone-number-accord');\r\n  const secondContact = secondContactAccord.querySelector('.header-contacts__phone-number');\r\n  const menuIcon = document.querySelector('.menu__icon');\r\n  const popupMenu = document.querySelector('.popup-menu');\r\n  const popupDialog = popupMenu.querySelector('.popup-dialog-menu');\r\n  const privacy = document.querySelector('.popup-privacy');\r\n  const consultation = document.querySelector('.popup-consultation');\r\n\r\n  const toggleShowContact = () => {\r\n    secondContactAccord.classList.toggle('header-contacts__phone-number-accord--open');\r\n    secondContact.classList.toggle('header-contacts__phone-number--show');\r\n    headerArrow.classList.toggle('header-contacts__arrow-img--open');\r\n  };\r\n\r\n  headerArrowBlock.addEventListener('click', toggleShowContact);\r\n\r\n  const openMenu = () => {\r\n    popupMenu.classList.add('popup-menu--active');\r\n    popupDialog.classList.add('popup-dialog-menu--active');\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n  };\r\n\r\n  const closeMenu = () => {\r\n    popupMenu.classList.remove('popup-menu--active');\r\n    popupDialog.classList.remove('popup-dialog-menu--active');\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.unblockBody)();\r\n  };\r\n\r\n  menuIcon.addEventListener('click', openMenu);\r\n\r\n  document.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n\r\n    if (target.closest('.close-menu') || target.classList.contains('popup-menu--active')) {\r\n      closeMenu();\r\n    } else if (target.closest('.popup-menu-nav__item')) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(target, e);\r\n      closeMenu();\r\n    } else if (target.closest('.button-footer')) {\r\n      const link = target.closest('.button-footer').querySelector('a');\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(link, e);\r\n    } else if (target.classList.contains('link-privacy')) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(privacy);\r\n    } else if (target.classList.contains('button_consult')) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(consultation);\r\n    } else if (target.closest('.close') || target.classList.contains('popup--active')) {\r\n      const popup = target.closest('.popup--active');\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(popup);\r\n    }\r\n\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/header.js?");

/***/ }),

/***/ "./client/src/modules/helpers.js":
/*!***************************************!*\
  !*** ./client/src/modules/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"blockBody\": () => (/* binding */ blockBody),\n/* harmony export */   \"unblockBody\": () => (/* binding */ unblockBody),\n/* harmony export */   \"animateValue\": () => (/* binding */ animateValue),\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll),\n/* harmony export */   \"togglePopup\": () => (/* binding */ togglePopup)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n};\r\n\r\nconst blockBody = () => {\r\n  const calcScroll = () => {\r\n    let scrollWidth = 0;\r\n    let scrollHeight = Math.max(\r\n      document.body.scrollHeight, document.documentElement.scrollHeight,\r\n      document.body.offsetHeight, document.documentElement.offsetHeight,\r\n      document.body.clientHeight, document.documentElement.clientHeight\r\n    );\r\n\r\n    if (scrollHeight > document.documentElement.clientHeight) {\r\n      let div = document.createElement('div');\r\n      div.style.width = '500px';\r\n      div.style.height = '500px';\r\n      div.style.overflowY = 'scroll';\r\n      div.style.visibility = 'hidden';\r\n      document.body.appendChild(div);\r\n      scrollWidth = div.offsetWidth - div.clientWidth;\r\n      div.remove();\r\n    }\r\n    return scrollWidth;\r\n  };\r\n  document.body.style.marginRight = `${calcScroll()}px`;\r\n  document.body.style.overflow = 'hidden';\r\n};\r\n\r\nconst unblockBody = () => {\r\n  document.body.style.marginRight = '0';\r\n  document.body.style.overflow = 'auto';\r\n};\r\n\r\nconst smoothScroll = (link, e) => {\r\n  e.preventDefault();\r\n\r\n  const href = link.getAttribute('href').substring(1);\r\n  const targetElement = document.getElementById(href);\r\n  const scrollValue = targetElement.getBoundingClientRect().top;\r\n\r\n  window.scrollBy({\r\n    top: scrollValue,\r\n    behavior: 'smooth'\r\n  });\r\n};\r\n\r\n\r\nconst animateValue = (obj, start, end, duration) => {\r\n  let startTimestamp = null;\r\n  const step = (timestamp) => {\r\n    if (!startTimestamp) startTimestamp = timestamp;\r\n    const progress = Math.min((timestamp - startTimestamp) / duration, 1);\r\n    obj.textContent = Math.floor(progress * (end - start) + start);\r\n    if (progress < 1) {\r\n      window.requestAnimationFrame(step);\r\n    }\r\n  };\r\n  window.requestAnimationFrame(step);\r\n};\r\n\r\nconst togglePopup = (popup, e = '') => {\r\n  popup.classList.toggle('popup--active');\r\n\r\n  popup.classList.contains('popup--active') ? blockBody() : unblockBody();\r\n\r\n  if (popup.matches('.popup-repair-types.popup--active')) { e.preventDefault(); }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./client/src/modules/helpers.js?");

/***/ }),

/***/ "./client/src/modules/maskPhone.js":
/*!*****************************************!*\
  !*** ./client/src/modules/maskPhone.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maskPhone\": () => (/* binding */ maskPhone)\n/* harmony export */ });\nfunction maskPhone(selector, masked = '+7 (___) ___-__-__') {\r\n  const elems = document.querySelectorAll(selector);\r\n\r\n  function mask(event) {\r\n    const keyCode = event.keyCode;\r\n    const template = masked,\r\n      def = template.replace(/\\D/g, \"\"),\r\n      val = this.value.replace(/\\D/g, \"\");\r\n    let i = 0,\r\n      newValue = template.replace(/[_\\d]/g, function (a) {\r\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n      });\r\n    i = newValue.indexOf(\"_\");\r\n    if (i != -1) {\r\n      newValue = newValue.slice(0, i);\r\n    }\r\n    let reg = template.substr(0, this.value.length).replace(/_+/g,\r\n      function (a) {\r\n        return \"\\\\d{1,\" + a.length + \"}\";\r\n      }).replace(/[+()]/g, \"\\\\$&\");\r\n    reg = new RegExp(\"^\" + reg + \"$\");\r\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n      this.value = newValue;\r\n    }\r\n    if (event.type == \"blur\" && this.value.length < 5) {\r\n      this.value = \"\";\r\n    }\r\n\r\n  }\r\n\r\n  for (const elem of elems) {\r\n    elem.addEventListener(\"input\", mask);\r\n    elem.addEventListener(\"focus\", mask);\r\n    elem.addEventListener(\"blur\", mask);\r\n  }\r\n}\n\n//# sourceURL=webpack://example/./client/src/modules/maskPhone.js?");

/***/ }),

/***/ "./client/src/modules/portfolio.js":
/*!*****************************************!*\
  !*** ./client/src/modules/portfolio.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"portfolio\": () => (/* binding */ portfolio)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./client/src/modules/slider.js\");\n\r\n\r\n\r\nconst portfolio = () => {\r\n  const portfolioContainer = document.querySelector('.portfolio-slider-container');\r\n  const setInitialSlide = (e) => {\r\n    const target = e.target;\r\n\r\n    const initialSlide = +target.closest('.portfolio-slider__slide-frame').dataset.initialSlide;\r\n    const portfolioSlider = document.querySelector('.popup-portfolio-slider');\r\n    const slide = portfolioSlider.querySelector('.popup-portfolio-slider__slide');\r\n    const slideWidth = parseFloat(slide.style.width);\r\n    const current = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');\r\n    document.querySelectorAll('.popup-portfolio-text').forEach((slideText, index) => {\r\n      if (index === (initialSlide - 1)) {\r\n        slideText.style.display = 'block';\r\n      } else {\r\n        slideText.style.display = 'none';\r\n      }\r\n    });\r\n\r\n    portfolioSlider.style.transform = `translateX(-${slideWidth * (initialSlide - 1)}px)`;\r\n    current.textContent = initialSlide;\r\n  };\r\n\r\n  portfolioContainer.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('portfolio-slider__slide-frame')) {\r\n      const portfolioPopup = document.querySelector('.popup-portfolio');\r\n\r\n      setInitialSlide(e);\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(portfolioPopup);\r\n    }\r\n  });\r\n\r\n  (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n    slidesWrapperClass: '.popup-portfolio-slider-wrap',\r\n    slidesFieldClass: '.popup-portfolio-slider',\r\n    slidesClass: '.popup-portfolio-slider__slide',\r\n    prevSelector: '#popup_portfolio_left',\r\n    nextSelector: '#popup_portfolio_right',\r\n    currentClass: '#popup-portfolio-counter .slider-counter-content__current',\r\n    totalClass: '#popup-portfolio-counter .slider-counter-content__total',\r\n    changeDisplayClass: '.popup-portfolio-text',\r\n    initialSlide: true\r\n  });\r\n\r\n  if (window.screen.width > 1025) {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n      slidesWrapperClass: '.portfolio-slider-container',\r\n      slidesFieldClass: '.portfolio-slider.mobile-hide',\r\n      slidesClass: '.portfolio-slider__slide',\r\n      prevSelector: '#portfolio-arrow_left',\r\n      nextSelector: '#portfolio-arrow_right',\r\n      slidesPerView: 3,\r\n      hideArrows: true\r\n    });\r\n  } else if (window.screen.width >= 900) {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n      slidesWrapperClass: '.portfolio-slider-container',\r\n      slidesFieldClass: '.portfolio-slider.mobile-hide',\r\n      slidesClass: '.portfolio-slider__slide',\r\n      prevSelector: '#portfolio-arrow_left',\r\n      nextSelector: '#portfolio-arrow_right',\r\n      slidesPerView: 2,\r\n      totalClass: '#portfolio-counter .slider-counter-content__total',\r\n      currentClass: '#portfolio-counter .slider-counter-content__current',\r\n      hideArrows: true\r\n    });\r\n  } else if (window.screen.width >= 576) {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n      slidesWrapperClass: '.portfolio-slider-container',\r\n      slidesFieldClass: '.portfolio-slider.mobile-hide',\r\n      slidesClass: '.portfolio-slider__slide',\r\n      prevSelector: '#portfolio-arrow_left',\r\n      nextSelector: '#portfolio-arrow_right',\r\n      totalClass: '#portfolio-counter .slider-counter-content__total',\r\n      currentClass: '#portfolio-counter .slider-counter-content__current',\r\n      hideArrows: true\r\n    });\r\n  } else {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.slider)({\r\n      slidesWrapperClass: '.portfolio-slider-container',\r\n      slidesFieldClass: '.portfolio-slider-mobile',\r\n      slidesClass: '.portfolio-slider__slide-frame',\r\n      prevSelector: '#portfolio-arrow-mobile_left',\r\n      nextSelector: '#portfolio-arrow-mobile_right',\r\n      totalClass: '#portfolio-counter .slider-counter-content__total',\r\n      currentClass: '#portfolio-counter .slider-counter-content__current',\r\n      hideArrows: true\r\n    });\r\n  }\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/portfolio.js?");

/***/ }),

/***/ "./client/src/modules/render.js":
/*!**************************************!*\
  !*** ./client/src/modules/render.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderServices\": () => (/* binding */ renderServices),\n/* harmony export */   \"renderTypesServices\": () => (/* binding */ renderTypesServices)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./client/src/modules/templates.js\");\n\r\n\r\nconst getServices = async () => {\r\n  const res = await fetch('http://localhost:3000/services/');\r\n  return await res.json();\r\n};\r\n\r\nconst renderServices = (container, services) => {\r\n  container.innerHTML = '';\r\n\r\n  services.forEach(service => {\r\n    const serviceItem = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.getRepairItem)(service.name, service.units, service.cost);\r\n    container.insertAdjacentHTML('beforeend', serviceItem);\r\n  });\r\n};\r\n\r\nconst renderTypesServices = async (container) => {\r\n  const types = new Set();\r\n  const services = await getServices();\r\n\r\n  let serviceIndex = 0;\r\n\r\n  container.innerHTML = '';\r\n  services.forEach(service => types.add(service.type));\r\n  types.forEach(type => {\r\n    const repairType = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.getRepairType)(type, serviceIndex);\r\n\r\n    container.insertAdjacentHTML('beforeend', repairType);\r\n    serviceIndex++;\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://example/./client/src/modules/render.js?");

/***/ }),

/***/ "./client/src/modules/repairPopup.js":
/*!*******************************************!*\
  !*** ./client/src/modules/repairPopup.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"repairPopup\": () => (/* binding */ repairPopup)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./client/src/modules/helpers.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./client/src/modules/render.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./client/src/modules/slider.js\");\n\r\n\r\n\r\n\r\nconst repairPopup = () => {\r\n  const showAllServicesBtns = document.querySelectorAll('.show-all-services');\r\n  const popularRepairTypes = document.querySelector('.popup-repair-types');\r\n\r\n  const tabHandler = async (e) => {\r\n    const tabNav = document.querySelector('.nav-list-popup-repair');\r\n    const tBody = document.getElementById('popup-repair-content');\r\n    const activeClass = 'popup-repair-types-nav__item--active';\r\n\r\n    const showFilterData = (repairType) => {\r\n      fetch(`http://localhost:3000/services?type=${repairType}`)\r\n        .then(res => res.json())\r\n        .then(services => (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderServices)(tBody, services));\r\n    };\r\n\r\n    await (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderTypesServices)(tabNav);\r\n\r\n    const repairType = document.querySelector(`.${activeClass}`).dataset.repairType;\r\n    showFilterData(repairType);\r\n\r\n    tabNav.addEventListener('click', (e) => {\r\n      const clickedTab = e.target.closest('.popup-repair-types-nav__item');\r\n      const tabContentTitle = document.getElementById('switch-inner');\r\n\r\n      if (clickedTab) {\r\n        const repairType = clickedTab.dataset.repairType;\r\n\r\n        tabNav.querySelector(`.${activeClass}`).classList.remove(activeClass);\r\n        clickedTab.classList.add(activeClass);\r\n        tabContentTitle.textContent = repairType;\r\n\r\n        showFilterData(repairType);\r\n      }\r\n    });\r\n\r\n    if (window.screen.width < 1025) {\r\n      (0,_slider__WEBPACK_IMPORTED_MODULE_2__.slider)({\r\n        slidesWrapperClass: '.nav-popup-repair-types',\r\n        slidesFieldClass: '.nav-list-popup-repair',\r\n        slidesClass: '.popup-repair-types-nav__item',\r\n        prevSelector: '#nav-arrow-popup-repair_left',\r\n        nextSelector: '#nav-arrow-popup-repair_right'\r\n      });\r\n    }\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.togglePopup)(popularRepairTypes, e);\r\n  };\r\n\r\n  showAllServicesBtns.forEach(btn => btn.addEventListener('click', (e) => tabHandler(e)));\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/repairPopup.js?");

/***/ }),

/***/ "./client/src/modules/repairTypes.js":
/*!*******************************************!*\
  !*** ./client/src/modules/repairTypes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"repairTypes\": () => (/* binding */ repairTypes)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./client/src/modules/slider.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./client/src/modules/tabs.js\");\n\r\n\r\n\r\nconst repairTypes = () => {\r\n  const sliders = document.querySelectorAll('.repair-types__tab-content');\r\n\r\n  (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.tabs)({\r\n    tabsContainerClass: '.nav-list-repair',\r\n    tabClass: '.repair-types-nav__item',\r\n    contentClass: '.repair-types__tab-content'\r\n  });\r\n\r\n  if (window.screen.width < 1025) {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\r\n      slidesClass: '.repair-types-nav__item',\r\n      prevSelector: '#nav-arrow-repair-left_base',\r\n      nextSelector: '#nav-arrow-repair-right_base',\r\n      slidesWrapperClass: '.repair-types-nav',\r\n      slidesFieldClass: '.nav-list-repair'\r\n    });\r\n  }\r\n\r\n  sliders.forEach((item, index) => {\r\n    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\r\n      slidesClass: `.types-repair${index + 1} .repair-types-slider__slide`,\r\n      prevSelector: '#repair-types-arrow_left',\r\n      nextSelector: '#repair-types-arrow_right',\r\n      slidesWrapperClass: '.repair-types-slider',\r\n      slidesFieldClass: `.types-repair${index + 1}`,\r\n      currentClass: '.slider-counter-content__current',\r\n      totalClass: '.slider-counter-content__total'\r\n    });\r\n  });\r\n\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/repairTypes.js?");

/***/ }),

/***/ "./client/src/modules/resize.js":
/*!**************************************!*\
  !*** ./client/src/modules/resize.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resize\": () => (/* binding */ resize)\n/* harmony export */ });\nconst resize = () => {\r\n  window.addEventListener('resize', () => {\r\n    // change the view\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/resize.js?");

/***/ }),

/***/ "./client/src/modules/reviews.js":
/*!***************************************!*\
  !*** ./client/src/modules/reviews.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reviews\": () => (/* binding */ reviews)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./client/src/modules/slider.js\");\n\r\n\r\nconst reviews = () => {\r\n  (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\r\n    slidesWrapperClass: '.reviews-slider',\r\n    slidesFieldClass: '.reviews-slider__container',\r\n    slidesClass: '.reviews-slider__slide',\r\n    prevSelector: '#reviews-arrow_left',\r\n    nextSelector: '#reviews-arrow_right',\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/reviews.js?");

/***/ }),

/***/ "./client/src/modules/slider.js":
/*!**************************************!*\
  !*** ./client/src/modules/slider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = ({\r\n  slidesClass, prevSelector, nextSelector, slidesWrapperClass, slidesFieldClass, totalClass, currentClass, changeDisplayClass = false, hideArrows = false, slidesPerView = 1, initialSlide = false\r\n}) => {\r\n  const slidesWrapper = document.querySelector(slidesWrapperClass),\r\n    slidesField = slidesWrapper.querySelector(slidesFieldClass),\r\n    slides = slidesField.querySelectorAll(slidesClass),\r\n    prev = document.querySelector(prevSelector),\r\n    next = document.querySelector(nextSelector),\r\n    width = getComputedStyle(slidesWrapper).width,\r\n    current = document.querySelector(currentClass),\r\n    total = document.querySelector(totalClass),\r\n    changeElems = document.querySelectorAll(changeDisplayClass),\r\n    slideWidth = Math.ceil(parseFloat(width) / slidesPerView),\r\n    isVisibleSlider = () => getComputedStyle(slidesField).display !== 'none',\r\n    setTotalSlidesNumber = () => {\r\n      if (slidesPerView === 1) {\r\n        total.textContent = slides.length;\r\n      } else {\r\n        total.textContent = slides.length - (slidesPerView - 1);\r\n      }\r\n    },\r\n    isSliderExists = () => {\r\n      const slide = slidesWrapper.querySelector(slidesClass);\r\n      return parseFloat(slide.style.width) === slideWidth ? true : false;\r\n    };\r\n\r\n  const incrementCurrentSlideNumber = () => {\r\n    if (+current.textContent === slides.length) {\r\n      current.textContent = 1;\r\n    } else {\r\n      current.textContent = +current.textContent + 1;\r\n    }\r\n  };\r\n\r\n  const decrementCurrentSlideNumber = () => {\r\n    if (+current.textContent === 1) {\r\n      current.textContent = slides.length;\r\n    } else {\r\n      current.textContent = +current.textContent - 1;\r\n    }\r\n  };\r\n\r\n  const changeDisplayElems = () => {\r\n    const currentSlideIndex = current ? +current.textContent - 1 : 0;\r\n    const prevSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;\r\n\r\n    changeElems[prevSlideIndex].style.display = 'none';\r\n    changeElems[currentSlideIndex].style.display = 'block';\r\n  };\r\n\r\n  const setOffset = () => {\r\n    offset = +slidesField.style.transform.match(/([0-9\\.]+)/)[0];\r\n  };\r\n\r\n  let offset = 0;\r\n\r\n  if (total) { setTotalSlidesNumber(); }\r\n  if (changeElems.length) { changeDisplayElems(); }\r\n\r\n  slidesField.style.width = 100 * slides.length / slidesPerView + '%';\r\n  slidesField.style.display = 'flex';\r\n  slidesField.style.minWidth = 'max-content';\r\n  slidesField.style.transition = '0.5s all';\r\n\r\n  slidesWrapper.style.overflow = 'hidden';\r\n\r\n  slides.forEach(slide => { slide.style.width = slideWidth + 'px'; });\r\n\r\n  next.addEventListener('click', () => {\r\n    if (!isVisibleSlider()) { return; }\r\n    if (initialSlide) { setOffset(); }\r\n    if (current) { incrementCurrentSlideNumber(); }\r\n    if (changeElems.length) { changeDisplayElems(); }\r\n\r\n    if (!hideArrows) {\r\n      if (offset >= slideWidth * (slides.length - 1)) {\r\n        offset = 0;\r\n      } else {\r\n        offset += slideWidth;\r\n      }\r\n    } else {\r\n      prev.style.display = 'flex';\r\n      if ((offset / slideWidth + 1) >= slides.length - slidesPerView) {\r\n        next.style.display = 'none';\r\n      }\r\n\r\n      offset += slideWidth;\r\n    }\r\n\r\n    slidesField.style.transform = `translateX(-${offset}px)`;\r\n  });\r\n\r\n  prev.addEventListener('click', () => {\r\n    if (!isVisibleSlider()) { return; }\r\n    if (initialSlide) { setOffset(); }\r\n    if (current) { decrementCurrentSlideNumber(); }\r\n    if (changeElems.length) { changeDisplayElems(); }\r\n\r\n    if (!hideArrows) {\r\n      if (offset <= 0) {\r\n        offset = slideWidth * (slides.length - 1);\r\n      } else {\r\n        offset -= slideWidth;\r\n      }\r\n    } else {\r\n      next.style.display = 'flex';\r\n\r\n      if (offset <= slideWidth) {\r\n        prev.style.display = 'none';\r\n      }\r\n\r\n      offset -= slideWidth;\r\n    }\r\n\r\n    slidesField.style.transform = `translateX(-${offset}px)`;\r\n  });\r\n\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/slider.js?");

/***/ }),

/***/ "./client/src/modules/tabs.js":
/*!************************************!*\
  !*** ./client/src/modules/tabs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabs\": () => (/* binding */ tabs)\n/* harmony export */ });\nconst tabs = ({ tabsContainerClass, tabClass, contentClass }) => {\r\n  const tabNav = document.querySelector(tabsContainerClass);\r\n  const tabs = tabNav.querySelectorAll(tabClass);\r\n  const tabContent = document.querySelectorAll(contentClass);\r\n  const total = document.querySelector('.slider-counter-content__total');\r\n  const current = document.querySelector('.slider-counter-content__current');\r\n\r\n  const setSliderInitialState = (index) => {\r\n    const totalNumber = tabContent[index].querySelectorAll('.repair-types-slider__slide').length;\r\n    total.textContent = totalNumber;\r\n    current.textContent = 1;\r\n    tabContent[index].style.transform = 'translateX(0)';\r\n  };\r\n\r\n  tabNav.addEventListener('click', (e) => {\r\n    const clickedTab = e.target.closest(tabClass);\r\n\r\n    if (clickedTab) {\r\n      tabs.forEach((tab, index) => {\r\n        if (clickedTab === tab) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n          setSliderInitialState(index);\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[index].classList.add('d-none');\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://example/./client/src/modules/tabs.js?");

/***/ }),

/***/ "./client/src/modules/templates.js":
/*!*****************************************!*\
  !*** ./client/src/modules/templates.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRepairItem\": () => (/* binding */ getRepairItem),\n/* harmony export */   \"getRepairType\": () => (/* binding */ getRepairType)\n/* harmony export */ });\nconst getRepairItem = (name, units, cost) =>\r\n  `<tr class=\"mobile-row\">\r\n  <td class=\"repair-types-name\">${name}</td>\r\n  <td class=\"mobile-col-title tablet-hide desktop-hide\">Ед.измерения</td>\r\n  <td class=\"mobile-col-title tablet-hide desktop-hide\">Цена за ед.</td>\r\n  <td class=\"repair-types-value\">${units === 'м2' ? 'м<sup>2</sup>' : units}</td>\r\n  <td class=\"repair-types-value\">${cost} руб.</td>\r\n</tr>`;\r\n\r\nconst getRepairType = (name, index) =>\r\n  `<button\r\n    class=\"button_o popup-repair-types-nav__item ${index === 0 ? 'popup-repair-types-nav__item--active' : ''}\"\r\n    data-repair-type=\"${name}\">${name}</button>`;\r\n\r\n\r\n\n\n//# sourceURL=webpack://example/./client/src/modules/templates.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/index.js");
/******/ 	
/******/ })()
;