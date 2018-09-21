module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./API/REST/main.js":
/*!**************************!*\
  !*** ./API/REST/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _products = __webpack_require__(/*! ./products */ "./API/REST/products.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = new function Api() {
  _classCallCheck(this, Api);

  this.products = new _products.Products();
}();

exports.default = _default;

/***/ }),

/***/ "./API/REST/products.js":
/*!******************************!*\
  !*** ./API/REST/products.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Products = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch"));

var _config = __webpack_require__(/*! ../config */ "./API/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Products =
/*#__PURE__*/
function () {
  function Products() {
    _classCallCheck(this, Products);
  }

  _createClass(Products, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var response, _ref, products, message;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicUnfetch.default)("".concat(_config.MAIN_URL, "/products?token=").concat(_config.token));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                _ref = _context.sent;
                products = _ref.products;
                message = _ref.message;

                if (!(response.status !== 200)) {
                  _context.next = 10;
                  break;
                }

                throw new Error(message);

              case 10:
                return _context.abrupt("return", products);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function get() {
        return _get.apply(this, arguments);
      };
    }()
  }, {
    key: "getOne",
    value: function () {
      var _getOne = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(slug) {
        var response, product;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _isomorphicUnfetch.default)("".concat(_config.MAIN_URL, "/products/").concat(slug, "?token=").concat(_config.token));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                product = _context2.sent;

                if (!(response.status !== 200)) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('Error get one Product');

              case 8:
                return _context2.abrupt("return", product);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getOne(_x) {
        return _getOne.apply(this, arguments);
      };
    }()
  }]);

  return Products;
}();

exports.Products = Products;

/***/ }),

/***/ "./API/config.js":
/*!***********************!*\
  !*** ./API/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.token = exports.MAIN_URL = exports.ROOT_URL = void 0;
// Config
var ROOT_URL = 'http://localhost:3000';
exports.ROOT_URL = ROOT_URL;
var MAIN_URL = "".concat(ROOT_URL, "/api/v1");
exports.MAIN_URL = MAIN_URL;
var token = '6590b78249859f69e93a405f01cefadb63e14930e1e855d7';
exports.token = token;

/***/ }),

/***/ "./API/index.js":
/*!**********************!*\
  !*** ./API/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "invite", {
  enumerable: true,
  get: function get() {
    return _config.invite;
  }
});
Object.defineProperty(exports, "groupId", {
  enumerable: true,
  get: function get() {
    return _config.groupId;
  }
});
Object.defineProperty(exports, "MAIN_URL", {
  enumerable: true,
  get: function get() {
    return _config.MAIN_URL;
  }
});
Object.defineProperty(exports, "ROOT_URL", {
  enumerable: true,
  get: function get() {
    return _config.ROOT_URL;
  }
});
Object.defineProperty(exports, "api", {
  enumerable: true,
  get: function get() {
    return _main.default;
  }
});

var _config = __webpack_require__(/*! ./config */ "./API/config.js");

var _main = _interopRequireDefault(__webpack_require__(/*! ./REST/main */ "./API/REST/main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./bus/product/actions.js":
/*!********************************!*\
  !*** ./bus/product/actions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProdyctServer = exports.getProdyct = exports.getProductAsync = void 0;

var _types = __webpack_require__(/*! ./types */ "./bus/product/types.js");

// Types
//Async
var getProductAsync = function getProductAsync(slug) {
  return {
    type: _types.types.GET_PRODUCT_ASYNC,
    payload: slug
  };
}; //Sync


exports.getProductAsync = getProductAsync;

var getProdyct = function getProdyct(product) {
  return {
    type: _types.types.GET_PRODUCT,
    payload: product
  };
}; //Server


exports.getProdyct = getProdyct;

var getProdyctServer = function getProdyctServer(slug) {
  return {
    type: _types.types.GET_PRODUCT_SERVER,
    payload: slug
  };
};

exports.getProdyctServer = getProdyctServer;

/***/ }),

/***/ "./bus/product/types.js":
/*!******************************!*\
  !*** ./bus/product/types.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = void 0;
var types = Object.freeze({
  //Async
  GET_PRODUCT_ASYNC: 'GET_PRODUCT_ASYNC',
  //Sync
  GET_PRODUCT: 'GET_PRODUCT',
  //Server
  GET_PRODUCT_SERVER: 'GET_PRODUCT_SERVER'
});
exports.types = types;

/***/ }),

/***/ "./bus/products/actions.js":
/*!*********************************!*\
  !*** ./bus/products/actions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProdyctsServer = exports.getProdyctsFilter = exports.getProductsFilterAsync = exports.getProductsAsync = void 0;

var _types = __webpack_require__(/*! ./types */ "./bus/products/types.js");

// Types
//Async
var getProductsAsync = function getProductsAsync() {
  return {
    type: _types.types.GET_PRODUCTS_ASYNC
  };
};

exports.getProductsAsync = getProductsAsync;

var getProductsFilterAsync = function getProductsFilterAsync(filter) {
  return {
    type: _types.types.GET_PRODUCTS_FILTER_ASYNC,
    payload: filter
  };
}; //Sync


exports.getProductsFilterAsync = getProductsFilterAsync;

var getProdyctsFilter = function getProdyctsFilter(products) {
  return {
    type: _types.types.GET_PRODUCTS_FILTER,
    payload: products
  };
}; //Server


exports.getProdyctsFilter = getProdyctsFilter;

var getProdyctsServer = function getProdyctsServer(products) {
  return {
    type: _types.types.GET_PRODUCTS_SERVER,
    payload: products
  };
};

exports.getProdyctsServer = getProdyctsServer;

/***/ }),

/***/ "./bus/products/types.js":
/*!*******************************!*\
  !*** ./bus/products/types.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = void 0;
var types = Object.freeze({
  //Async
  GET_PRODUCTS_ASYNC: 'GET_PRODUCTS_ASYNC',
  GET_PRODUCTS_FILTER_ASYNC: 'GET_PRODUCTS_FILTER_ASYNC',
  //Sync
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_FILTER: 'GET_PRODUCTS_FILTER',
  //Server
  GET_PRODUCTS_SERVER: 'GET_PRODUCTS_SERVER'
});
exports.types = types;

/***/ }),

/***/ "./components/Product/index.js":
/*!*************************************!*\
  !*** ./components/Product/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "next/link"));

var _actions = __webpack_require__(/*! ../../bus/product/actions */ "./bus/product/actions.js");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapState = function mapState(state) {
  return {
    product: (0, _immutable.fromJS)(state.product)
  };
};

var Product = (_dec = (0, _reactRedux.connect)(mapState, {
  getProductAsync: _actions.getProductAsync
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Product, _Component);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, _getPrototypeOf(Product).apply(this, arguments));
  }

  _createClass(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {// const { isServer, query } = this.props;
      // const { slug } = this.props.query;
      //
      // if (!isServer) {
      //     this.props.getProductAsync(slug);
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var product = this.props.product;
      return _react.default.createElement("div", null, _react.default.createElement("h2", null, product.get('name')), _react.default.createElement("div", {
        className: "image_profuct"
      }, _react.default.createElement("img", {
        alt: "",
        src: product.getIn(['master', 'images', 0, 'large_url'])
      })), _react.default.createElement(_link.default, {
        href: "/"
      }, _react.default.createElement("a", null, "Home")));
    }
  }]);

  return Product;
}(_react.Component)) || _class);
exports.default = Product;

/***/ }),

/***/ "./components/Products/index.js":
/*!**************************************!*\
  !*** ./components/Products/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "next/link"));

var _actions = __webpack_require__(/*! ../../bus/products/actions */ "./bus/products/actions.js");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapState = function mapState(state) {
  return {
    products: (0, _immutable.fromJS)(state.products)
  };
};

var Products = (_dec = (0, _reactRedux.connect)(mapState, {
  getProductsAsync: _actions.getProductsAsync,
  getProductsFilterAsync: _actions.getProductsFilterAsync
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this._getProductsFilterAsync = function (event, num) {
      event.preventDefault();

      _this.props.getProductsFilterAsync(num);
    };

    return _this;
  }

  _createClass(Products, [{
    key: "componentDidMount",
    value: function componentDidMount() {// const { isServer } = this.props;
      //
      // if (!isServer) {
      //     this.props.getProductsAsync();
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var products = this.props.products;
      return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Products"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "javascript:void",
        onClick: function onClick(e) {
          _this2._getProductsFilterAsync(e, 6);
        }
      }, "Filter1")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "javascript:void",
        onClick: function onClick(e) {
          _this2._getProductsFilterAsync(e, 11);
        }
      }, "Filter2")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "javascript:void",
        onClick: function onClick(e) {
          _this2._getProductsFilterAsync(e, 4);
        }
      }, "Filter3"))), _react.default.createElement("ul", null, products.map(function (product, index) {
        return _react.default.createElement("li", {
          key: "productList".concat(index)
        }, _react.default.createElement(_link.default, {
          as: "/product/".concat(product.get('slug')),
          href: "/product?slug=".concat(product.get('slug'))
        }, _react.default.createElement("a", null, product.get('name'))), _react.default.createElement("p", null, _react.default.createElement("img", {
          alt: "",
          src: product.getIn(['master', 'images', 0, 'small_url'])
        })));
      })));
    }
  }]);

  return Products;
}(_react.Component)) || _class);
exports.default = Products;

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Products", {
  enumerable: true,
  get: function get() {
    return _Products.default;
  }
});
Object.defineProperty(exports, "Product", {
  enumerable: true,
  get: function get() {
    return _Product.default;
  }
});

var _Products = _interopRequireDefault(__webpack_require__(/*! ./Products */ "./components/Products/index.js"));

var _Product = _interopRequireDefault(__webpack_require__(/*! ./Product */ "./components/Product/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _components = __webpack_require__(/*! ../components */ "./components/index.js");

var _API = __webpack_require__(/*! ../API */ "./API/index.js");

var _actions = __webpack_require__(/*! ../bus/product/actions */ "./bus/product/actions.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductPage, _Component);

  function ProductPage() {
    _classCallCheck(this, ProductPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductPage).apply(this, arguments));
  }

  _createClass(ProductPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h1", null, "Product"), _react.default.createElement(_components.Product, this.props));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var reduxStore, req, query, isServer, slug, product;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = _ref.reduxStore, req = _ref.req, query = _ref.query;
                isServer = Boolean(req);
                slug = query.slug;
                _context.next = 5;
                return _API.api.products.getOne(slug);

              case 5:
                product = _context.sent;
                _context.next = 8;
                return reduxStore.dispatch((0, _actions.getProdyctServer)(product));

              case 8:
                return _context.abrupt("return", {
                  isServer: isServer,
                  query: query
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return ProductPage;
}(_react.Component);

exports.default = ProductPage;

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/product.js */"./pages/product.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=product.js.map