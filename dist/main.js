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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/*! exports provided: Defaults, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Defaults\", function() { return Defaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nvar Defaults = {\r\n    location: {\r\n        x: 200,\r\n        y: 150\r\n    },\r\n    speed: {\r\n        x: 6.0,\r\n        y: 6.0\r\n    },\r\n    color: '#3399FF',\r\n    size: 4\r\n};\r\nvar Component = /** @class */ (function () {\r\n    function Component(props) {\r\n        if (props === void 0) { props = null; }\r\n        this.props = __assign({}, JSON.parse(JSON.stringify(Defaults)), (props || {}));\r\n    }\r\n    Component.prototype.move = function (size) {\r\n        var props = this.props;\r\n        var location = props.location;\r\n        var speed = props.speed;\r\n        location.x += speed.x;\r\n        location.y += speed.y;\r\n        if (location.x < 0 || location.x > size.width) {\r\n            speed.x *= -1;\r\n        }\r\n        if (location.y < 0 || location.y > size.height) {\r\n            speed.y *= -1;\r\n            if (location.y < 0)\r\n                location.y = 0;\r\n            if (location.y > size.height)\r\n                location.y = size.height;\r\n        }\r\n        if (location.x < 0)\r\n            location.x = 0;\r\n        if (location.x > size.width)\r\n            location.x = size.width;\r\n        if (location.y < 0)\r\n            location.y = 0;\r\n        if (location.y > size.height)\r\n            location.y = size.height;\r\n    };\r\n    Component.prototype.draw = function (context) {\r\n        var props = this.props;\r\n        var location = props.location;\r\n        context.beginPath();\r\n        context.fillStyle = props.color;\r\n        context.arc(location.x, location.y, props.size, 0, Math.PI * 2.0);\r\n        context.fill();\r\n    };\r\n    return Component;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Component.ts?");

/***/ }),

/***/ "./src/Field.ts":
/*!**********************!*\
  !*** ./src/Field.ts ***!
  \**********************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Field\", function() { return Field; });\nvar Field = /** @class */ (function () {\r\n    function Field(e) {\r\n        var _this = this;\r\n        this.canvas = e;\r\n        this.context = this.canvas.getContext('2d');\r\n        this.context.globalCompositeOperation = \"source-over\";\r\n        this.size = { width: 0, height: 0 };\r\n        this.components = [];\r\n        setInterval(function () { return _this.draw(); }, 33);\r\n    }\r\n    Field.prototype.clear = function () {\r\n        var context = this.context;\r\n        if (!context)\r\n            return;\r\n        var size = this.size;\r\n        context.fillStyle = \"#000\";\r\n        context.fillRect(0, 0, size.width, size.height);\r\n    };\r\n    Field.prototype.resize = function (parent) {\r\n        var width = parent.clientWidth;\r\n        var height = parent.clientHeight;\r\n        this.size.width = width;\r\n        this.canvas.width = width;\r\n        this.size.height = height;\r\n        this.canvas.height = height;\r\n    };\r\n    Field.prototype.add = function (component) {\r\n        this.components.push(component);\r\n    };\r\n    Field.prototype.draw = function () {\r\n        var _this = this;\r\n        this.clear();\r\n        if (this.components.length < 1)\r\n            return;\r\n        this.components.forEach(function (component) {\r\n            component.move(_this.size);\r\n            component.draw(_this.context);\r\n        });\r\n    };\r\n    return Field;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Field.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Component.ts\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./src/Field.ts\");\n\r\n\r\nwindow.onload = function () {\r\n    var canvas = document.getElementById('canvas');\r\n    var field = new _Field__WEBPACK_IMPORTED_MODULE_1__[\"Field\"](canvas);\r\n    var outputArea = document.getElementById('output-area');\r\n    var resize = function () { return field.resize(outputArea); };\r\n    var getInputElementById = function (id) { return document.getElementById(id); };\r\n    resize();\r\n    field.add(new _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]());\r\n    window.addEventListener('resize', resize);\r\n    var inputs = {\r\n        locationX: getInputElementById(\"location-x\"),\r\n        locationY: getInputElementById(\"location-y\"),\r\n        speedX: getInputElementById(\"speed-x\"),\r\n        speedY: getInputElementById(\"speed-y\"),\r\n        color: getInputElementById(\"color\"),\r\n        size: getInputElementById(\"size\")\r\n    };\r\n    var setValue = function (props) {\r\n        inputs.locationX.value = props.location.x;\r\n        inputs.locationY.value = props.location.y;\r\n        inputs.speedX.value = props.speed.x;\r\n        inputs.speedY.value = props.speed.y;\r\n        inputs.color.value = props.color;\r\n        inputs.size.value = props.size;\r\n    };\r\n    var getValue = function () {\r\n        return {\r\n            location: {\r\n                x: parseInt(inputs.locationX.value),\r\n                y: parseInt(inputs.locationY.value)\r\n            },\r\n            speed: {\r\n                x: parseInt(inputs.speedX.value),\r\n                y: parseInt(inputs.speedY.value)\r\n            },\r\n            color: inputs.color.value,\r\n            size: parseInt(inputs.size.value)\r\n        };\r\n    };\r\n    var addComponent = function (props) { return field.add(new _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"](props)); };\r\n    setValue(_Component__WEBPACK_IMPORTED_MODULE_0__[\"Defaults\"]);\r\n    document.getElementById(\"add-button\").addEventListener('click', function () { return addComponent(getValue()); });\r\n    canvas.addEventListener('click', function (ev) {\r\n        inputs.locationX.value = ev.clientX.toString();\r\n        inputs.locationY.value = ev.clientY.toString();\r\n        addComponent(getValue());\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });