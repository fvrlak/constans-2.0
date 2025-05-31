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

eval("window._CONSTANTS_GLOBAL = {\r\n  _SORT: function (data) {\r\n    arrays = {\r\n      _zero: [],\r\n      _one: [],\r\n      _two: [],\r\n      _three: [],\r\n      _four: [],\r\n      _five: [],\r\n      _six: [],\r\n      _seven: [],\r\n      _eight: [],\r\n      _nine: []\r\n    }\r\n    DataArray = []\r\n    data.map(el => {\r\n      if (el == 0) {\r\n        arrays._zero.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 1) {\r\n        arrays._one.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 2) {\r\n        arrays._two.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 3) {\r\n        arrays._three.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 4) {\r\n        arrays._four.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 5) {\r\n        arrays._five.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 6) {\r\n        arrays._six.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 7) {\r\n        arrays._seven.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 8) {\r\n        arrays._eight.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n      if (el == 9) {\r\n        arrays._nine.push(el)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      }\r\n    })\r\n\r\n    return DataArray\r\n  },\r\n  _ANALYSIS: function (data) {\r\n    const len = data.length\r\n    let range = () => {\r\n      const buffer = Object.assign([], data)\r\n      let min = Math.min.apply(null, buffer)\r\n      let max = Math.max.apply(null, buffer)\r\n      return max - min\r\n    }\r\n    let aMean = () => {\r\n      const buffer = Object.assign([], data)\r\n      return buffer.reduce((p, c) => p + c) / len\r\n    }\r\n    let median = () => {\r\n      const buffer = Object.assign([], data)\r\n      let alpha = Object.assign([], buffer).sort((a, b) => a - b)\r\n      let beta = alpha[4] + alpha[5]\r\n      return beta / 2\r\n    }\r\n    let std = () => {\r\n      const buffer = Object.assign([], data)\r\n      return Math.sqrt(\r\n        buffer.map(e => {\r\n            let sqDelta = []\r\n            let deltaMean = e - aMean()\r\n            sqDelta.push(Math.pow(deltaMean, 2))\r\n            return sqDelta[0]\r\n          })\r\n          .reduce((p, c) => p + c) / len\r\n      )\r\n    }\r\n    let hMean = () => {\r\n      const buffer = Object.assign([], data)\r\n      return len / buffer.map(e => 1 / e).reduce((p, c) => p + c) // bad\r\n    }\r\n    let gMean = () => {\r\n      const buffer = Object.assign([], data)\r\n      return Math.pow(buffer.reduce((p, c) => p * c), 1 / len)\r\n    }\r\n    let meanRange = () => {\r\n      return Math.abs(aMean() - hMean())\r\n    }\r\n    Array.prototype.maxValue = () => {\r\n      const buffer = Object.assign([], data)\r\n      return Math.max.apply(null, buffer)\r\n    }\r\n    Array.prototype.minValue = () => {\r\n      const buffer = Object.assign([], data)\r\n      return Math.min.apply(null, buffer)\r\n    }\r\n    return {\r\n      range: range(),\r\n      meanRange: meanRange(),\r\n      aMean: aMean(),\r\n      median: median(),\r\n      std: std(),\r\n      hMean: hMean(),\r\n      gMean: gMean(),\r\n      maxValue: Array.prototype.maxValue(),\r\n      minValue: Array.prototype.minValue(),\r\n    }\r\n  },\r\n  _SORT2: function (data) {\r\n    let arrays = [[],[],[],[],[],[],[],[],[],[]]\r\n      \r\n    let DataArray = []\r\n    data.map(e => (() => {\r\n        arrays[e].push(e)\r\n        DataArray.push(Object.values(arrays).map(e => e.length))\r\n      })()\r\n    )\r\n    return DataArray\r\n  },\r\n  _SOUND: function (data) {\r\n    let maxValueOcurr = () => {\r\n      const buffer = Object.assign([], data)\r\n      let max = Math.max.apply(null,buffer)\r\n      let alpha = buffer.indexOf(max)\r\n      let output = []\r\n      while (alpha != -1) { // alpha needs to be found ** ingore ?returns? while alpha is not found\r\n        output.push(alpha)\r\n        alpha = buffer.indexOf(max, alpha + 1)\r\n      }\r\n      return output\r\n    }\r\n    let minValueOcurr = () => {\r\n      const buffer = Object.assign([], data)\r\n      let min = Math.min.apply(null,buffer)\r\n      let alpha = buffer.indexOf(min)\r\n      let output = []\r\n      while (alpha != -1) {\r\n        output.push(alpha)\r\n        alpha = buffer.indexOf(min, alpha + 1)\r\n      }\r\n      return output\r\n    }\r\n    return {\r\n      maxValueOcurr : maxValueOcurr(),\r\n      minValueOcurr : minValueOcurr()\r\n    }\r\n\r\n  }\r\n}\r\n\r\n\r\n/////////////////////////////////////////////////////////////////////////////////////////////////////\r\nfunction cFunction (alpha) {\r\n  let data = Object.assign([],constant_data_array)\r\n      .map(e => JSON.stringify(e))\r\n      .reduce((p,c) => p + c)\r\n  let output = []\r\n  for (let i = 0; i < data.length; i++) {\r\n    if(data.substring(i,i + alpha.length) == alpha) {\r\n      output.push(i)\r\n    }\r\n  }\r\n  return output\r\n  }\r\nfunction rExp(v) {\r\nlet data = Object.assign([],constant_data_array)\r\n  .map(e => JSON.stringify(e))\r\n  .reduce((p,c) => p + c)\r\nlet alpha = new RegExp(v,'g')\r\nlet beta;\r\nwhile((beta = alpha.exec(data))) {\r\n  let msg = `${beta[0]} + ${alpha.lastIndex}`\r\n  console.log(msg)\r\n}\r\n}\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ })

/******/ });