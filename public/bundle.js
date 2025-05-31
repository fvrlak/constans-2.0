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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window._CONSTANTS_GLOBAL = {\n  _SORT: function (data) {\n    arrays = {\n      _zero: [],\n      _one: [],\n      _two: [],\n      _three: [],\n      _four: [],\n      _five: [],\n      _six: [],\n      _seven: [],\n      _eight: [],\n      _nine: []\n    }\n    DataArray = []\n    data.map(el => {\n      if (el == 0) {\n        arrays._zero.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 1) {\n        arrays._one.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 2) {\n        arrays._two.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 3) {\n        arrays._three.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 4) {\n        arrays._four.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 5) {\n        arrays._five.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 6) {\n        arrays._six.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 7) {\n        arrays._seven.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 8) {\n        arrays._eight.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n      if (el == 9) {\n        arrays._nine.push(el)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      }\n    })\n\n    return DataArray\n  },\n  _ANALYSIS: function (data) {\n    const len = data.length\n    let range = () => {\n      const buffer = Object.assign([], data)\n      let min = Math.min.apply(null, buffer)\n      let max = Math.max.apply(null, buffer)\n      return max - min\n    }\n    let aMean = () => {\n      const buffer = Object.assign([], data)\n      return buffer.reduce((p, c) => p + c) / len\n    }\n    let median = () => {\n      const buffer = Object.assign([], data)\n      let alpha = Object.assign([], buffer).sort((a, b) => a - b)\n      let beta = alpha[4] + alpha[5]\n      return beta / 2\n    }\n    let std = () => {\n      const buffer = Object.assign([], data)\n      return Math.sqrt(\n        buffer.map(e => {\n            let sqDelta = []\n            let deltaMean = e - aMean()\n            sqDelta.push(Math.pow(deltaMean, 2))\n            return sqDelta[0]\n          })\n          .reduce((p, c) => p + c) / len\n      )\n    }\n    let hMean = () => {\n      const buffer = Object.assign([], data)\n      return len / buffer.map(e => 1 / e).reduce((p, c) => p + c) // bad\n    }\n    let gMean = () => {\n      const buffer = Object.assign([], data)\n      return Math.pow(buffer.reduce((p, c) => p * c), 1 / len)\n    }\n    let meanRange = () => {\n      return Math.abs(aMean() - hMean())\n    }\n    Array.prototype.maxValue = () => {\n      const buffer = Object.assign([], data)\n      return Math.max.apply(null, buffer)\n    }\n    Array.prototype.minValue = () => {\n      const buffer = Object.assign([], data)\n      return Math.min.apply(null, buffer)\n    }\n    return {\n      range: range(),\n      meanRange: meanRange(),\n      aMean: aMean(),\n      median: median(),\n      std: std(),\n      hMean: hMean(),\n      gMean: gMean(),\n      maxValue: Array.prototype.maxValue(),\n      minValue: Array.prototype.minValue(),\n    }\n  },\n  _SORT2: function (data) {\n    let arrays = [[],[],[],[],[],[],[],[],[],[]]\n      \n    let DataArray = []\n    data.map(e => (() => {\n        arrays[e].push(e)\n        DataArray.push(Object.values(arrays).map(e => e.length))\n      })()\n    )\n    return DataArray\n  },\n  _SOUND: function (data) {\n    let maxValueOcurr = () => {\n      const buffer = Object.assign([], data)\n      let max = Math.max.apply(null,buffer)\n      let alpha = buffer.indexOf(max)\n      let output = []\n      while (alpha != -1) { // alpha needs to be found ** ingore ?returns? while alpha is not found\n        output.push(alpha)\n        alpha = buffer.indexOf(max, alpha + 1)\n      }\n      return output\n    }\n    let minValueOcurr = () => {\n      const buffer = Object.assign([], data)\n      let min = Math.min.apply(null,buffer)\n      let alpha = buffer.indexOf(min)\n      let output = []\n      while (alpha != -1) {\n        output.push(alpha)\n        alpha = buffer.indexOf(min, alpha + 1)\n      }\n      return output\n    }\n    return {\n      maxValueOcurr : maxValueOcurr(),\n      minValueOcurr : minValueOcurr()\n    }\n\n  }\n}\n\n\n/////////////////////////////////////////////////////////////////////////////////////////////////////\nfunction cFunction (alpha) {\n  let data = Object.assign([],constant_data_array)\n      .map(e => JSON.stringify(e))\n      .reduce((p,c) => p + c)\n  let output = []\n  for (let i = 0; i < data.length; i++) {\n    if(data.substring(i,i + alpha.length) == alpha) {\n      output.push(i)\n    }\n  }\n  return output\n  }\nfunction rExp(v) {\nlet data = Object.assign([],constant_data_array)\n  .map(e => JSON.stringify(e))\n  .reduce((p,c) => p + c)\nlet alpha = new RegExp(v,'g')\nlet beta;\nwhile((beta = alpha.exec(data))) {\n  let msg = `${beta[0]} + ${alpha.lastIndex}`\n  console.log(msg)\n}\n}\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ })

/******/ });