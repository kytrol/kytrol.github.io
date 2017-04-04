/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use_strict';

// Utility to perform general operations dealing with elements.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EleUtil = function () {
  function EleUtil() {
    _classCallCheck(this, EleUtil);
  }

  _createClass(EleUtil, null, [{
    key: 'addClass',
    value: function addClass(ele, className) {
      ele.classList.add(className);
    }
  }, {
    key: 'addClasses',
    value: function addClasses(ele, classes) {
      for (var i = 0; i < classes.length; i++) {
        this.addClass(ele, classes[i]);
      }
    }
  }, {
    key: 'dropClass',
    value: function dropClass(ele, className) {
      ele.classList.remove(className);
    }
  }, {
    key: 'dropClasses',
    value: function dropClasses(ele, classes) {
      var _this = this;

      classes.forEach(function (c) {
        return _this.dropClass(ele, c);
      });
    }
  }, {
    key: 'hasClass',
    value: function hasClass(ele, className) {
      return ele.classList.contains(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(ele, className) {
      ele.classList.toggle(className);
    }

    /*
    * Takes in an object with multiple properties. Tag
    * property is required, while the rest are optional.
    * Returns the element created based on the parameters.
    */

  }, {
    key: 'createEleWithAttrs',
    value: function createEleWithAttrs(_ref) {
      var _ref$tag = _ref.tag,
          tag = _ref$tag === undefined ? 'div' : _ref$tag,
          idName = _ref.idName,
          className = _ref.className,
          classes = _ref.classes;

      var ele = document.createElement(tag);

      if (idName) ele.setAttribute('id', idName);

      if (className) {
        ele.setAttribute('class', className);
      } else if (classes) {
        for (var i = 0; i < classes.length; i++) {
          this.addClass(ele, classes[i]);
        }
      }

      return ele;
    }
  }, {
    key: 'dropChildren',
    value: function dropChildren(ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }
    }
  }]);

  return EleUtil;
}();

exports.default = EleUtil;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use_strict';

var _eleUtil = __webpack_require__(0);

var _eleUtil2 = _interopRequireDefault(_eleUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(1);

document.addEventListener('DOMContentLoaded', function () {
  setNavigation();

  loadSectionFromImg();
  loadSectionFromCaption();

  initialSectionLoad();

  setProjectBar();
});

function setNavigation() {
  var menu = document.getElementById('menu-btn');
  var nav = document.getElementsByTagName('nav')[0];

  menu.onclick = function () {
    var _this = this;

    _eleUtil2.default.toggleClass(nav, 'active');
    _eleUtil2.default.toggleClass(this, 'open');
    setTimeout(function () {
      var hr = document.getElementsByClassName('hline')[0].children[0];

      if (_eleUtil2.default.hasClass(_this, 'open')) _eleUtil2.default.addClass(hr, 'extend');else _eleUtil2.default.dropClass(hr, 'extend');
    }, 200);
  };
}

function loadSection(tag) {
  var container = document.getElementsByClassName('description')[0];
  var pageEle = container.firstElementChild;
  var currTag = pageEle.id.split('-')[0];
  if (tag !== currTag) {
    _eleUtil2.default.addClass(pageEle, 'hide');
    setTimeout(function () {
      _eleUtil2.default.dropChildren(container);
      var section = document.getElementById(tag + '-page-hidden').cloneNode(true);
      var sectionId = section.id;
      section.id = sectionId.substring(0, sectionId.length - 7);
      container.appendChild(section);
      _eleUtil2.default.dropClasses(section, ['no-display', 'hide']);
    }, 300);
  }
}

function loadSectionFromImg() {
  var imgs = document.getElementsByClassName('nav-img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
      var tag = this.id;
      if (tag !== 'resume') loadSection(tag);
    };
  }
}

function loadSectionFromCaption() {
  var captions = document.getElementsByClassName('caption');
  for (var i = 0; i < captions.length; i++) {
    captions[i].onclick = function () {
      var img = this.parentNode.firstElementChild;
      var tag = img.id;
      if (tag !== 'resume') loadSection(tag);else img.click();
    };
  }
}

function initialSectionLoad() {
  var container = document.getElementsByClassName('description')[0];
  _eleUtil2.default.dropChildren(container);
  var section = document.getElementById('proj-page-hidden').cloneNode(true);

  container.appendChild(section);
  _eleUtil2.default.dropClass(section, 'hide');
  _eleUtil2.default.dropClass(section, 'no-display');
}

function setProjectBar() {
  var container = document.getElementsByClassName('proj-icons')[0];
  var icons = container.getElementsByClassName('proj-icon');

  setIconClick(icons);
}

function setIconClick(icons) {
  var _loop = function _loop(i) {
    icons[i].onclick = function () {
      _eleUtil2.default.dropClass(this, 'inactive');
      for (var j = 0; j < icons.length; j++) {
        if (this !== icons[j]) _eleUtil2.default.addClass(icons[j], 'inactive');
      }

      slidePlatform(i);

      revealProject(i);
    };
  };

  for (var i = 0; i < icons.length; i++) {
    _loop(i);
  }
}

function slidePlatform(index) {
  var platform = document.getElementsByClassName('platform')[0];
  if (index === 0) {
    _eleUtil2.default.dropClasses(platform, ['plat-mid', 'plat-right']);
  } else if (index === 1) {
    _eleUtil2.default.dropClass(platform, 'plat-right');
    _eleUtil2.default.addClass(platform, 'plat-mid');
  } else {
    _eleUtil2.default.dropClass(platform, 'plat-mid');
    _eleUtil2.default.addClass(platform, 'plat-right');
  }
}

function revealProject(index) {
  var projects = document.getElementsByClassName('desc-container')[0].children;
  var currProj = projects.item(index);

  var _loop2 = function _loop2(i) {
    if (currProj !== projects[i]) {
      _eleUtil2.default.addClass(projects[i], 'hide');

      setTimeout(function () {
        _eleUtil2.default.addClass(projects[i], 'no-display');
        _eleUtil2.default.dropClasses(currProj, ['no-display', 'hide']);
      }, 200);
    }
  };

  for (var i = 0; i < projects.length; i++) {
    _loop2(i);
  }
}

/***/ })
/******/ ]);