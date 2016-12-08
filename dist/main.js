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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(29)
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(21)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(26)
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(25)
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(27)
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(16)
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(24)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(31)
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(23)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(30)
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(19)
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(22)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(28)
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
/* 12 */
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
    onClick: function onClick(e) {
      console.log(1);
      this.$emit('click', e);
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
/* 13 */
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

/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 23 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 24 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', {
    staticClass: "row"
  }, [_vm._t("default")])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a332dfd", module.exports)
  }
}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', {
    staticClass: "cellclass"
  }, [_vm._h('div', {
    staticClass: "cell__stage clearfix",
    on: {
      "click": _vm.onClick
    }
  }, [_vm._h('div', {
    staticClass: "pull-left"
  }, [_vm._h('div', [(_vm.icon) ? _vm._h('span', {
    staticClass: "icon-pic",
    class: _vm.iconClass
  }) : _vm._e(), " ", _vm._t("default", [_vm._s(_vm.title)])]), " ", _vm._h('div', {
    staticClass: "text-muted"
  }, [_vm._s(_vm.subTitle)])]), " ", _vm._h('div', {
    staticClass: "pull-right"
  }, [_vm._h('span', {
    staticClass: "pull-right text-r",
    class: _vm.fontColor
  }, [_vm._s(_vm.rightText)]), " ", (_vm.arrow) ? _vm._h('span', {
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', {
    class: _vm.itemClass
  }, [_vm._t("default")])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a556b05", module.exports)
  }
}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('table', {
    class: _vm.tableClass
  }, [_vm._h('thead', [_vm._h('tr', [_vm._l((_vm.orderList.schema), function(v) {
    return _vm._h('th', ["\n        " + _vm._s(v) + "\n      "])
  })])]), " ", _vm._h('tbody', [_vm._l((_vm.orderList.values), function(order) {
    return _vm._h('tr', [_vm._l((_vm.orderList.schema), function(v, k) {
      return _vm._h('td', ["\n        " + _vm._s(order[k]) + "\n      "])
    })])
  })])])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e26931c", module.exports)
  }
}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('button', {
    class: _vm.btnClass,
    attrs: {
      "disabled": _vm.disabled
    },
    nativeOn: {
      "click": function($event) {
        _vm.onClick($event)
      }
    }
  }, [(_vm.icon && _vm.iconPosition == 'left') ? _vm._h('i', {
    class: _vm.iconClass
  }) : _vm._e(), " ", (!_vm.circle) ? _vm._h('span', [_vm._t("default", [_vm._s(_vm.text)])]) : _vm._e(), " ", (_vm.icon && _vm.iconPosition == 'right') ? _vm._h('i', {
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', [_vm._h('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "modalclass"
  }, [_vm._h('div', {
    staticClass: "modal-shadow",
    on: {
      "click": _vm.closeModal
    }
  }), " ", _vm._h('div', {
    staticClass: "modal-wrapper",
    class: _vm.modalSize
  }, [_vm._t("title", [_vm._h('div', {
    staticClass: "modal-title"
  }, [(_vm.showCloseButton) ? _vm._h('span', {
    staticClass: "close",
    on: {
      "click": _vm.closeModal
    }
  }, ["×"]) : _vm._e(), " ", _vm._h('div', {
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })])]), " ", _vm._t("main", [_vm._h('div', {
    staticClass: "modal-body"
  }, [_vm._t("content")])]), " ", _vm._t("button", [_vm._h('div', {
    staticClass: "modal-footer"
  }, [_vm._t("foot-btn")])])])])])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e70245e", module.exports)
  }
}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', {
    staticClass: "infoclass clearfix"
  }, [(_vm.icon) ? _vm._h('span', {
    staticClass: "pull-left icon-pic",
    class: _vm.iconClass
  }) : _vm._e(), " ", _vm._h('span', {
    staticClass: "pull-left info-text"
  }, [_vm._s(_vm.infoText)])])
},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de90c08c", module.exports)
  }
}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(1);

__webpack_require__(2);

var _UiButton = __webpack_require__(3);

var _UiButton2 = _interopRequireDefault(_UiButton);

var _UiGridGroup = __webpack_require__(5);

var _UiGridGroup2 = _interopRequireDefault(_UiGridGroup);

var _UiGridItem = __webpack_require__(6);

var _UiGridItem2 = _interopRequireDefault(_UiGridItem);

var _UiHeading = __webpack_require__(7);

var _UiHeading2 = _interopRequireDefault(_UiHeading);

var _UiPanel = __webpack_require__(10);

var _UiPanel2 = _interopRequireDefault(_UiPanel);

var _UiCell = __webpack_require__(4);

var _UiCell2 = _interopRequireDefault(_UiCell);

var _UiTable = __webpack_require__(11);

var _UiTable2 = _interopRequireDefault(_UiTable);

var _UiInfo = __webpack_require__(8);

var _UiInfo2 = _interopRequireDefault(_UiInfo);

var _UiModal = __webpack_require__(9);

var _UiModal2 = _interopRequireDefault(_UiModal);

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
  }
};

module.exports = QCUI;

/***/ }
/******/ ])
});
;