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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/buttons.js":
/*!********************************!*\
  !*** ./src/scripts/buttons.js ***!
  \********************************/
/*! exports provided: subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscribe\", function() { return subscribe; });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/scripts/modal.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\n\nvar buttonsSelectors = {\n  languageMenuClass: \"language-menu-btn\",\n  mainCtaClass: \"cta-btn\",\n  callOfferClass: \"call-offer-btn\"\n};\nvar sections = {\n  leadFormId: \"leadform-section\"\n};\n\nvar errorMessage = function errorMessage(className) {\n  console.error(\"Cannot find any button with class \" + className);\n};\n\nvar subscribeCtaButtons = function subscribeCtaButtons() {\n  var mainCtaClass = buttonsSelectors.mainCtaClass;\n  var $buttons = document.querySelectorAll(\".\".concat(mainCtaClass));\n  if ($buttons.length === 0) return errorMessage(mainCtaClass);\n\n  var scrollToForm = function scrollToForm() {\n    var $section = document.getElementById(sections.leadFormId);\n    if ($section === null) return;\n    $section.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  };\n\n  $buttons.forEach(function (btn) {\n    btn.addEventListener(\"click\", scrollToForm);\n  });\n};\n\nvar subscribeCallOfferButton = function subscribeCallOfferButton() {\n  var callOfferClass = buttonsSelectors.callOfferClass;\n  var $buttons = document.querySelectorAll(\".\".concat(callOfferClass));\n  if ($buttons.length === 0) return errorMessage(callOfferClass); // close modal\n\n  var handleCloseModal = function handleCloseModal(_ref) {\n    var target = _ref.target;\n    var $modal = Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"getModal\"])();\n    if ($modal === null) return;\n\n    if (target.closest(\".\".concat(callOfferClass))) {\n      return;\n    }\n\n    if (target.closest(\".\".concat(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modals\"].callOfferClass))) {\n      return;\n    }\n\n    Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"closeModal\"])($modal);\n    window.removeEventListener(\"click\", handleCloseModal);\n  }; //  open modal\n\n\n  var handleOpenCallOfferModal = function handleOpenCallOfferModal(_ref2) {\n    var currentTarget = _ref2.currentTarget;\n    var rect = currentTarget.getBoundingClientRect();\n    var $modal = Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"getModal\"])();\n    var $arrow = $modal.querySelector(\".\".concat(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modals\"].arrowClass));\n    $modal.style.top = \"\".concat(window.pageYOffset + rect.bottom + 12, \"px\");\n\n    if (window.innerWidth <= _constants__WEBPACK_IMPORTED_MODULE_1__[\"$bpDownSmall\"]) {\n      $modal.style.right = \"20px\";\n    } else {\n      $modal.style.right = \"\".concat(window.innerWidth - rect.right, \"px\");\n    }\n\n    $arrow.style.right = \"\".concat(rect.width / 2, \"px\");\n    $arrow.style.transform = \"translateX(50%)\";\n    if ($modal === null) return;\n\n    if (Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"isActive\"])($modal)) {\n      return Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"closeModal\"])($modal);\n    }\n\n    Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"openModal\"])($modal);\n    window.addEventListener(\"click\", handleCloseModal);\n  }; // subscribe\n\n\n  $buttons.forEach(function (btn) {\n    btn.addEventListener(\"click\", handleOpenCallOfferModal);\n  });\n};\n\nvar subscribe = function subscribe() {\n  subscribeCallOfferButton();\n  subscribeCtaButtons();\n};\n\n//# sourceURL=webpack:///./src/scripts/buttons.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/*! exports provided: TRANSITION_DELAY, $bpSmall, $bpMedium, $bpIpad, $bpLarge, $bpIpadPro, $bpDownSmall, $bpDownMedium, $bpDownIpad, $bpDownLarge, $bpDownIpadPro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRANSITION_DELAY\", function() { return TRANSITION_DELAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpSmall\", function() { return $bpSmall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpMedium\", function() { return $bpMedium; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpIpad\", function() { return $bpIpad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpLarge\", function() { return $bpLarge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpIpadPro\", function() { return $bpIpadPro; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpDownSmall\", function() { return $bpDownSmall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpDownMedium\", function() { return $bpDownMedium; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpDownIpad\", function() { return $bpDownIpad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpDownLarge\", function() { return $bpDownLarge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$bpDownIpadPro\", function() { return $bpDownIpadPro; });\nvar TRANSITION_DELAY = 300;\nvar $bpSmall = 601;\nvar $bpMedium = 961;\nvar $bpIpad = 769;\nvar $bpLarge = 1281;\nvar $bpIpadPro = 1025;\nvar $bpDownSmall = 601;\nvar $bpDownMedium = 961;\nvar $bpDownIpad = 769;\nvar $bpDownLarge = 1281;\nvar $bpDownIpadPro = 1025;\n\n//# sourceURL=webpack:///./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/*! exports provided: initHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initHeader\", function() { return initHeader; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nvar smallHeaderClass = \"header-small\";\nvar activeClass = \"active\";\nvar visibleClass = \"visible\";\nvar heroSection = \"hero\";\nvar initHeader = function initHeader() {\n  var handleScroll = function handleScroll() {\n    var $header = document.querySelector(\".\".concat(smallHeaderClass));\n    var $heroSection = document.querySelector(\".\".concat(heroSection));\n    if (!$header || !$heroSection) return;\n    var rect = $heroSection.getBoundingClientRect();\n\n    if (window.pageYOffset <= (rect.height || 0)) {\n      if (!$header.classList.contains(activeClass)) return;\n      $header.classList.remove(activeClass);\n      setTimeout(function () {\n        if (!$header) return;\n        $header.classList.remove(visibleClass);\n      }, _constants__WEBPACK_IMPORTED_MODULE_0__[\"TRANSITION_DELAY\"]);\n      return;\n    }\n\n    if ($header.classList.contains(activeClass)) return;\n    $header.classList.add(visibleClass);\n    setTimeout(function () {\n      if (!$header) return;\n      $header.classList.add(activeClass);\n    }, 0);\n  };\n\n  window.addEventListener(\"scroll\", handleScroll);\n};\n\n//# sourceURL=webpack:///./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/scripts/buttons.js\");\n/* harmony import */ var _owl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owl */ \"./src/scripts/owl.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/scripts/header.js\");\n/* eslint-disable no-unused-vars */\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  try {\n    Object(_buttons__WEBPACK_IMPORTED_MODULE_0__[\"subscribe\"])();\n    Object(_owl__WEBPACK_IMPORTED_MODULE_1__[\"initOwls\"])();\n    Object(_header__WEBPACK_IMPORTED_MODULE_2__[\"initHeader\"])();\n  } catch (e) {\n    console.log(e, \"Catch at root\");\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/*! exports provided: modals, openModal, closeModal, getModal, isActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modals\", function() { return modals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModal\", function() { return openModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getModal\", function() { return getModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isActive\", function() { return isActive; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nvar modals = {\n  callOfferClass: \"modal-call-offer\",\n  arrowClass: \"modal__arrow\",\n  activeClass: \"active\",\n  visibleClass: \"visible\"\n};\nvar openModal = function openModal($el) {\n  if (!$el) return;\n  $el.classList.add(modals.activeClass);\n  document.body.style.overflowY = \"hidden\";\n  setTimeout(function () {\n    $el && $el.classList.add(modals.visibleClass);\n  }, 100);\n};\nvar closeModal = function closeModal($el) {\n  document.body.style.overflowY = \"visible\";\n  if (!$el) return;\n  $el.classList.remove(modals.visibleClass);\n  setTimeout(function () {\n    $el && $el.classList.remove(modals.activeClass);\n  }, _constants__WEBPACK_IMPORTED_MODULE_0__[\"TRANSITION_DELAY\"]);\n};\nvar getModal = function getModal() {\n  return document.querySelector(\".\".concat(modals.callOfferClass));\n};\nvar isActive = function isActive($el) {\n  return $el && $el.classList.contains(modals.activeClass);\n};\n\n//# sourceURL=webpack:///./src/scripts/modal.js?");

/***/ }),

/***/ "./src/scripts/owl.js":
/*!****************************!*\
  !*** ./src/scripts/owl.js ***!
  \****************************/
/*! exports provided: initOwls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initOwls\", function() { return initOwls; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar nextBtn = \"next-btn\";\nvar prevBtn = \"prev-btn\";\nvar sliderButtons = \"slider-buttons\";\nvar pricingSection = \"pricing\";\nvar teachersSection = \"teachers\";\nvar feedbacksSection = \"feedbacks\";\nvar initOwls = function initOwls() {\n  var _responsive, _responsive3;\n\n  var $pricingCarousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(pricingSection, \"-carousel\"));\n  var $teachersCarousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(teachersSection, \"-carousel\"));\n  var $feedbacksCarousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(feedbacksSection, \"-carousel\"));\n  $pricingCarousel.owlCarousel({\n    center: true,\n    loop: true,\n    margin: 50,\n    dragEndSpeed: 500,\n    responsive: (_responsive = {\n      0: {\n        items: 1\n      }\n    }, _defineProperty(_responsive, _constants__WEBPACK_IMPORTED_MODULE_1__[\"$bpIpad\"], {\n      center: false,\n      items: 2\n    }), _defineProperty(_responsive, _constants__WEBPACK_IMPORTED_MODULE_1__[\"$bpIpadPro\"], {\n      stagePadding: 20,\n      items: 3\n    }), _responsive)\n  });\n  $feedbacksCarousel.owlCarousel({\n    loop: true,\n    margin: 50,\n    dragEndSpeed: 500,\n    responsive: _defineProperty({\n      0: {\n        center: true,\n        items: 1\n      }\n    }, _constants__WEBPACK_IMPORTED_MODULE_1__[\"$bpIpad\"], {\n      center: false,\n      items: 2\n    })\n  });\n  $teachersCarousel.owlCarousel({\n    // center: true,\n    loop: true,\n    margin: 50,\n    items: 1,\n    responsive: (_responsive3 = {\n      0: {\n        items: 1\n      }\n    }, _defineProperty(_responsive3, _constants__WEBPACK_IMPORTED_MODULE_1__[\"$bpIpad\"], {\n      center: true,\n      items: 2\n    }), _defineProperty(_responsive3, _constants__WEBPACK_IMPORTED_MODULE_1__[\"$bpMedium\"], {\n      items: 1\n    }), _responsive3)\n  }); // TRIGGERS\n\n  var $pricingButtons = document.querySelector(\".\".concat(pricingSection, \" .\").concat(sliderButtons));\n  var $teachersButtons = document.querySelector(\".\".concat(teachersSection, \" .\").concat(sliderButtons));\n  var $feedbacksButtons = document.querySelector(\".\".concat(feedbacksSection, \" .\").concat(sliderButtons));\n  $pricingButtons.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(nextBtn)) {\n      handleNext($pricingCarousel);\n    }\n\n    if (e.target.classList.contains(prevBtn)) {\n      handlePrev($pricingCarousel);\n    }\n  });\n  $teachersButtons.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(nextBtn)) {\n      handleNext($teachersCarousel);\n    }\n\n    if (e.target.classList.contains(prevBtn)) {\n      handlePrev($teachersCarousel);\n    }\n  });\n  $feedbacksButtons.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(nextBtn)) {\n      handleNext($feedbacksCarousel);\n    }\n\n    if (e.target.classList.contains(prevBtn)) {\n      handlePrev($feedbacksCarousel);\n    }\n  });\n};\n\nvar handleNext = function handleNext(owl) {\n  if (!owl) return;\n  owl.trigger(\"next.owl.carousel\");\n};\n\nvar handlePrev = function handlePrev(owl) {\n  if (!owl) return;\n  owl.trigger(\"prev.owl.carousel\");\n};\n\n//# sourceURL=webpack:///./src/scripts/owl.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });