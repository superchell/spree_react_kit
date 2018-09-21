webpackHotUpdate("static/development/pages/index.js",{

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

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _actions = __webpack_require__(/*! ../../bus/products/actions */ "./bus/products/actions.js");

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");

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
      return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Products"), _react.default.createElement(_link.default, null), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "javascript:void",
        onClick: function onClick(e) {
          _this2._getProductsFilterAsync(e, 6);
        }
      }, "Filter1")), _react.default.createElement("li", null, _react.default.createElement("a", {
        onClick: function onClick(e) {
          _this2._getProductsFilterAsync(e, 11);
        }
      }, "Filter2")), _react.default.createElement("li", null, _react.default.createElement("a", {
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

/***/ })

})
//# sourceMappingURL=index.js.32f6114da81bf55e38a9.hot-update.js.map