(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["QCUI"] = factory();
	else
		root["QCUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/mixins/FormElement.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f535e28", __vue_options__)
  } else {
    hotAPI.reload("data-v-9f535e28", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] FormElement.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73551984", __vue_options__)
  } else {
    hotAPI.reload("data-v-73551984", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(32)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiCell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f6b4a6e", __vue_options__)
  } else {
    hotAPI.reload("data-v-4f6b4a6e", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiCell.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiForm.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb4f6660", __vue_options__)
  } else {
    hotAPI.reload("data-v-bb4f6660", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiForm.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(36)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiGridGroup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a332dfd", __vue_options__)
  } else {
    hotAPI.reload("data-v-1a332dfd", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiGridGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiGridItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a556b05", __vue_options__)
  } else {
    hotAPI.reload("data-v-5a556b05", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiGridItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiHeading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8d7a8b4", __vue_options__)
  } else {
    hotAPI.reload("data-v-f8d7a8b4", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiHeading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(35)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de90c08c", __vue_options__)
  } else {
    hotAPI.reload("data-v-de90c08c", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiInfo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(34)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiModal.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e70245e", __vue_options__)
  } else {
    hotAPI.reload("data-v-7e70245e", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiModal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(25)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31d30cb0", __vue_options__)
  } else {
    hotAPI.reload("data-v-31d30cb0", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiPanel.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(31)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiSelect.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e428c08", __vue_options__)
  } else {
    hotAPI.reload("data-v-4e428c08", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiSelect.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(33)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiTable.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e26931c", __vue_options__)
  } else {
    hotAPI.reload("data-v-6e26931c", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiTable.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiTabs.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5118868a", __vue_options__)
  } else {
    hotAPI.reload("data-v-5118868a", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiTabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhangxin/gitlab/fe-boilerplate/src/components/UiTextBox.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4216b502", __vue_options__)
  } else {
    hotAPI.reload("data-v-4216b502", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiTextBox.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    type: {
      type: [String, Array],
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    btnClass: function btnClass() {
      var btnClasses = typeof this.type === 'string' ? this.type.split(' ') : this.type;
      return (0, _classnames2.default)('btn', btnClasses.map(function (cls) {
        return 'btn-' + cls;
      }), {
        'disabled': this.disabled,
        'btn-circle': this.circle
      });
    },
    iconClass: function iconClass() {
      return (0, _classnames2.default)('fa', 'fa-' + this.icon);
    }
  },
  methods: {
    clickHandler: function clickHandler() {
      this.onClick();
    }
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'cell',
      require: true
    },
    subTitle: {
      type: String
    },
    arrow: {
      type: Boolean,
      default: false
    },
    rightText: {
      type: String
    },
    color: {
      type: String,
      default: 'text-muted'
    },
    onClick: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    iconClass: function iconClass() {
      return (0, _classnames2.default)('fa', 'fa-' + this.icon);
    },
    fontColor: function fontColor() {
      return (0, _classnames2.default)('text-' + this.color);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 19 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formClass: function formClass() {
      return this.horizontal ? 'form-horizontal' : 'form';
    }
  }
};

/***/ },
/* 20 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    gutter: {
      type: Boolean,
      default: true
    }
  }
};

/***/ },
/* 21 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    space: {
      type: [String, Number],
      required: true
    },
    offset: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    itemClass: function itemClass() {
      return 'col-sm-' + this.space;
    }
  }
};

/***/ },
/* 22 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    level: {
      type: [String, Number],
      required: true
    },
    color: {
      type: String,
      default: '#000'
    },
    inset: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var headingStyle = !this.inset ? {
      color: this.color
    } : {
      backgroundColor: this.color,
      color: '#fff'
    };
    return h('h' + this.level, {
      style: headingStyle,
      class: 'heading'
    }, this.$slots.default);
  }
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    icon: {
      type: String,
      default: null
    },
    infoText: {
      type: String
    }
  },
  computed: {
    iconClass: function iconClass() {
      return (0, _classnames2.default)('fa', 'fa-' + this.icon);
      // fa fa-person
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	props: {
		title: {
			type: String,
			require: true
		},
		show: {
			type: Boolean,
			default: false
		},
		showCloseButton: {
			type: Boolean,
			default: false
		},
		size: {
			type: String
		}
	},
	methods: {
		closeModal: function closeModal() {
			this.$emit('uiModelClose');
		}
	},
	computed: {
		modalSize: function modalSize() {
			return (0, _classnames2.default)('modal-' + this.size);
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      collapsed: false
    };
  },

  props: {
    headerAction: {
      type: [String, Array],
      default: null
    }
  },
  methods: {
    collapse: function collapse() {
      this.collapsed = !this.collapsed;
    },
    close: function close() {}
  },
  render: function render(h) {
    var action = typeof this.headerAction === 'string' ? this.headerAction.split(' ') : this.headerAction;
    var panelAction = action && action.length > 0 ? h('div', { class: 'panel-action' }) : null;
    var panelHeader = this.$slots.header ? h('div', { class: 'panel-heading' }, [this.$slots.header, panelAction]) : null;
    var panelFooter = this.$slots.footer ? h('div', { class: 'panel-footer' }, this.$slots.footer) : null;
    var panelBody = h('div', { class:  true ? 'in' : '' }, [h('div', { class: 'panel-body' }, [this.$slots.default || 'panel-body']), panelFooter]);
    return h('div', { class: 'panel panel-default' }, [panelHeader, panelBody]);
  }
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FormElement = __webpack_require__(1);

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_FormElement2.default],
  props: {
    label: {
      type: String
    },
    value: {
      required: true
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	props: {
		type: {
			type: [String, Array],
			default: 'default'
		},
		orderList: {
			type: Object,
			required: true
		}
	},
	computed: {
		tableClass: function tableClass() {
			var tableClasses = typeof this.type === 'string' ? this.type.split(' ') : this.type;
			return (0, _classnames2.default)('table', tableClasses.map(function (cls) {
				return 'table-' + cls;
			}));
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 28 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {}
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FormElement = __webpack_require__(1);

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_FormElement2.default],
  props: {
    label: {
      type: String
    },
    size: {
      type: String
    },
    placeHolder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      required: true
    },
    multiLine: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputSize: function inputSize() {
      return this.size ? 'input-' + this.size : '';
    },
    fontSize: function fontSize() {
      if (!this.size) return '';
      var map = {
        'sm': 'font-12'
      };
      return map[this.size] || '';
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 30 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    validationRules: {
      type: [Function, Array, String]
    },
    validationMessages: {
      type: Object
    },
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.autoFocus) {
      this.$nextTick(function () {
        _this.$refs.input.focus();
      });
    }
  },

  methods: {
    updateValue: function updateValue(value) {
      var formattedValue = value.trim();
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue;
      }
      this.$emit('input', formattedValue);
    }
  }
};

/***/ },
/* 31 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 32 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 33 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 34 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 35 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "row"
  }, [_vm._t("default")], true)
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a332dfd", module.exports)
  }
}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "form-group"
  }, [(_vm.label) ? _c('label', [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      'input-group': _vm.$slots.addon
    }
  }, [(_vm.$slots.addon) ? _c('span', {
    staticClass: "input-group-addon",
    class: _vm.fontSize
  }, [_vm._t("addon")], true) : _vm._e(), _vm._v(" "), (!_vm.multiLine) ? _c('input', {
    ref: "input",
    staticClass: "form-control",
    class: _vm.inputSize,
    attrs: {
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "placeholder": _vm.placeHolder,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.updateValue($event.target.value)
      }
    }
  }) : _c('textarea', {
    ref: "input",
    staticClass: "form-control",
    attrs: {
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "placeholder": _vm.placeHolder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.updateValue($event.target.value)
      }
    }
  }), _vm._v(" ")])])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4216b502", module.exports)
  }
}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "form-group"
  }, [(_vm.label) ? _c('label', [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), (!_vm.multiLine) ? _c('div', {
    class: {
      'input-group': _vm.$slots.addon
    }
  }, [(_vm.$slots.addon) ? _c('span', {
    staticClass: "input-group-addon"
  }, [_vm._t("addon")], true) : _vm._e(), _vm._v(" "), _c('select', {
    ref: "input",
    staticClass: "form-control",
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.updateValue($event.target.value)
      }
    }
  }, _vm._l((_vm.options), function(option) {
    return _c('option', {
      attrs: {
        "disabled": option.disabled
      },
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n        " + _vm._s(option.text) + "\n      ")])
  }))]) : _vm._e()])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e428c08", module.exports)
  }
}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "cellclass"
  }, [_c('div', {
    staticClass: "cell__stage clearfix",
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "pull-left"
  }, [_c('div', [(_vm.icon) ? _c('span', {
    staticClass: "icon-pic",
    class: _vm.iconClass
  }) : _vm._e(), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._t("sub")], true), _vm._v(" "), _c('div', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.subTitle))])]), _vm._v(" "), _c('div', {
    staticClass: "pull-right"
  }, [_c('span', {
    staticClass: "pull-right text-r",
    class: _vm.fontColor
  }, [_vm._v(_vm._s(_vm.rightText))]), _vm._v(" "), (_vm.arrow) ? _c('span', {
    staticClass: "fa fa-angle-right icon-r"
  }) : _vm._e()])])])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f6b4a6e", module.exports)
  }
}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {}, [_vm._m(0), _vm._v(" "), _vm._t("default")], true)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("123")])])])
}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5118868a", module.exports)
  }
}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    class: _vm.itemClass
  }, [_vm._t("default")], true)
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a556b05", module.exports)
  }
}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('table', {
    class: _vm.tableClass
  }, [_c('thead', [_c('tr', _vm._l((_vm.orderList.schema), function(v) {
    return _c('th', [_vm._v("\n        " + _vm._s(v) + "\n      ")])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.orderList.values), function(order) {
    return _c('tr', _vm._l((_vm.orderList.schema), function(v, k) {
      return _c('td', [_vm._v("\n        " + _vm._s(order[k]) + "\n      ")])
    }))
  }))])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e26931c", module.exports)
  }
}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('button', {
    class: _vm.btnClass,
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.clickHandler($event)
      }
    }
  }, [(_vm.icon && _vm.iconPosition == 'left') ? _c('i', {
    class: _vm.iconClass
  }) : _vm._e(), _vm._v(" "), (!_vm.circle) ? _c('span', [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], true) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.iconPosition == 'right') ? _c('i', {
    class: _vm.iconClass
  }) : _vm._e()])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73551984", module.exports)
  }
}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "modalclass"
  }, [_c('div', {
    staticClass: "modal-shadow",
    on: {
      "click": _vm.closeModal
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-wrapper",
    class: _vm.modalSize
  }, [_vm._t("title", [_c('div', {
    staticClass: "modal-title"
  }, [(_vm.showCloseButton) ? _c('span', {
    staticClass: "close",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), _c('div', {
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })])]), _vm._v(" "), _vm._t("main", [_c('div', {
    staticClass: "modal-body"
  }, [_vm._t("content")], true)]), _vm._v(" "), _vm._t("button", [_c('div', {
    staticClass: "modal-footer"
  }, [_vm._t("foot-btn")], true)])], true)])])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e70245e", module.exports)
  }
}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', [_c('form', {
    class: _vm.formClass
  }, [_vm._t("default")], true)])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bb4f6660", module.exports)
  }
}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "infoclass clearfix"
  }, [(_vm.icon) ? _c('span', {
    staticClass: "pull-left icon-pic",
    class: _vm.iconClass
  }) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "pull-left info-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.infoText))])], true)])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de90c08c", module.exports)
  }
}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(2);

__webpack_require__(3);

var _UiButton = __webpack_require__(4);

var _UiButton2 = _interopRequireDefault(_UiButton);

var _UiGridGroup = __webpack_require__(7);

var _UiGridGroup2 = _interopRequireDefault(_UiGridGroup);

var _UiGridItem = __webpack_require__(8);

var _UiGridItem2 = _interopRequireDefault(_UiGridItem);

var _UiHeading = __webpack_require__(9);

var _UiHeading2 = _interopRequireDefault(_UiHeading);

var _UiPanel = __webpack_require__(12);

var _UiPanel2 = _interopRequireDefault(_UiPanel);

var _UiCell = __webpack_require__(5);

var _UiCell2 = _interopRequireDefault(_UiCell);

var _UiTable = __webpack_require__(14);

var _UiTable2 = _interopRequireDefault(_UiTable);

var _UiInfo = __webpack_require__(10);

var _UiInfo2 = _interopRequireDefault(_UiInfo);

var _UiModal = __webpack_require__(11);

var _UiModal2 = _interopRequireDefault(_UiModal);

var _UiForm = __webpack_require__(6);

var _UiForm2 = _interopRequireDefault(_UiForm);

var _UiTextBox = __webpack_require__(16);

var _UiTextBox2 = _interopRequireDefault(_UiTextBox);

var _UiSelect = __webpack_require__(13);

var _UiSelect2 = _interopRequireDefault(_UiSelect);

var _UiTabs = __webpack_require__(15);

var _UiTabs2 = _interopRequireDefault(_UiTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QCUI = {
  UiButton: _UiButton2.default,
  UiGridGroup: _UiGridGroup2.default,
  UiGridItem: _UiGridItem2.default,
  UiHeading: _UiHeading2.default,
  UiPanel: _UiPanel2.default,
  UiCell: _UiCell2.default,
  UiTable: _UiTable2.default,
  UiInfo: _UiInfo2.default,
  UiModal: _UiModal2.default,
  UiForm: _UiForm2.default,
  UiTextBox: _UiTextBox2.default,
  UiSelect: _UiSelect2.default,
  UiTabs: _UiTabs2.default,
  install: function install(Vue) {
    Vue.component('UiButton', _UiButton2.default);
    Vue.component('UiGridGroup', _UiGridGroup2.default);
    Vue.component('UiGridItem', _UiGridItem2.default);
    Vue.component('UiHeading', _UiHeading2.default);
    Vue.component('UiPanel', _UiPanel2.default);
    Vue.component('UiCell', _UiCell2.default);
    Vue.component('UiTable', _UiTable2.default);
    Vue.component('UiInfo', _UiInfo2.default);
    Vue.component('UiModal', _UiModal2.default);
    Vue.component('UiForm', _UiForm2.default);
    Vue.component('UiTextBox', _UiTextBox2.default);
    Vue.component('UiSelect', _UiSelect2.default);
    Vue.component('UiTabs', _UiTabs2.default);
  }
};

module.exports = QCUI;

/***/ }
/******/ ]);
});