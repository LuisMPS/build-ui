(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

/***/ "./src/components/builder/ui/alert/Alert.js":
/*!**************************************************!*\
  !*** ./src/components/builder/ui/alert/Alert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _style_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/Alert */ "./src/components/builder/ui/alert/style/Alert.js");
/* harmony import */ var _AlertRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertRoot */ "./src/components/builder/ui/alert/AlertRoot.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\alert\\Alert.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(_c = _s(function (_ref, ref) {
  _s();

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["style", "className", "children"]);

  var classes = Object(_style_Alert__WEBPACK_IMPORTED_MODULE_3__["default"])(style);
  var classAlert = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.alert, classes.fill);
  var classAll = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(className, classes.ui);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classAll,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AlertRoot__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
      ref: ref,
      className: classAlert
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, _this);
}, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [_style_Alert__WEBPACK_IMPORTED_MODULE_3__["default"]];
}));
_c2 = Alert;
/* harmony default export */ __webpack_exports__["default"] = (Alert);

var _c, _c2;

$RefreshReg$(_c, "Alert$React.forwardRef");
$RefreshReg$(_c2, "Alert");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/ui/alert/AlertRoot.js":
/*!******************************************************!*\
  !*** ./src/components/builder/ui/alert/AlertRoot.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\alert\\AlertRoot.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var AlertRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(_c = function _c(_ref, ref) {
  var message = _ref.message,
      text = _ref.text,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["message", "text"]);

  var handleAlert = function handleAlert() {
    alert(message);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    ref: ref,
    onClick: handleAlert
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, _this);
});
_c2 = AlertRoot;
/* harmony default export */ __webpack_exports__["default"] = (AlertRoot);

var _c, _c2;

$RefreshReg$(_c, "AlertRoot$React.forwardRef");
$RefreshReg$(_c2, "AlertRoot");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/ui/alert/AlertView.js":
/*!******************************************************!*\
  !*** ./src/components/builder/ui/alert/AlertView.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Alert */ "./src/components/builder/ui/alert/Alert.js");
/* harmony import */ var _style_AlertView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/AlertView */ "./src/components/builder/ui/alert/style/AlertView.js");




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\alert\\AlertView.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var BuilderAlert = Object(build_ui__WEBPACK_IMPORTED_MODULE_3__["DnDBuilderHOC"])(_Alert__WEBPACK_IMPORTED_MODULE_6__["default"]);
_c = BuilderAlert;

var AlertView = function AlertView(_ref) {
  _s();

  var id = _ref.id,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["id"]);

  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id
  });
  var styler = Object(_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__["default"])({
    id: id
  });
  var classes = Object(_style_AlertView__WEBPACK_IMPORTED_MODULE_7__["default"])({
    selected: editor.indexes.selected,
    fixed: editor.meta.fixed
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(BuilderAlert // DnD Props
  , _objectSpread(_objectSpread({
    onDragStart: !editor.meta.fixed && editor.handlePositionedDragStart,
    onDragEnd: !editor.meta.fixed && editor.handleDragEnd,
    draggable: !editor.meta.fixed // Other Props
    ,
    onClick: editor.handleSelect,
    className: classes.view // Alert Props

  }, props), {}, {
    style: styler.completeStyle(props.style)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 12
  }, _this);
};

_s(AlertView, "IVVmjF1vhoqUsjYrXJLDH+ihIh8=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__["default"], _style_AlertView__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c2 = AlertView;
/* harmony default export */ __webpack_exports__["default"] = (AlertView);

var _c, _c2;

$RefreshReg$(_c, "BuilderAlert");
$RefreshReg$(_c2, "AlertView");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/ui/alert/style/Alert.js":
/*!********************************************************!*\
  !*** ./src/components/builder/ui/alert/style/Alert.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/ui */ "./src/components/builder/styles/ui.js");



var alertStyles = {
  alert: function alert(props) {
    return {
      padding: props.padding,
      margin: props.margin
    };
  }
};
var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(alertStyles, _styles_ui__WEBPACK_IMPORTED_MODULE_2__["fillStyles"], _styles_ui__WEBPACK_IMPORTED_MODULE_2__["sizingStyles"], _styles_ui__WEBPACK_IMPORTED_MODULE_2__["positionStyles"], _styles_ui__WEBPACK_IMPORTED_MODULE_2__["flexStyles"]));
/* harmony default export */ __webpack_exports__["default"] = (useStyle);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/ui/alert/style/AlertView.js":
/*!************************************************************!*\
  !*** ./src/components/builder/ui/alert/style/AlertView.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/views */ "./src/components/builder/styles/views.js");



var alertStyles = {
  view: {}
};
var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(alertStyles, _styles_views__WEBPACK_IMPORTED_MODULE_2__["viewStyles"]));
/* harmony default export */ __webpack_exports__["default"] = (useStyle);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9hbGVydC9BbGVydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9hbGVydC9BbGVydFJvb3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2J1aWxkZXIvdWkvYWxlcnQvQWxlcnRWaWV3LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2FsZXJ0L3N0eWxlL0FsZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2FsZXJ0L3N0eWxlL0FsZXJ0Vmlldy5qcyJdLCJuYW1lcyI6WyJBbGVydCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImNsYXNzQWxlcnQiLCJjbHN4IiwiYWxlcnQiLCJmaWxsIiwiY2xhc3NBbGwiLCJ1aSIsIkFsZXJ0Um9vdCIsIm1lc3NhZ2UiLCJ0ZXh0IiwiaGFuZGxlQWxlcnQiLCJCdWlsZGVyQWxlcnQiLCJEbkRCdWlsZGVySE9DIiwiQWxlcnRWaWV3IiwiaWQiLCJlZGl0b3IiLCJ1c2VEZW1vRWRpdG9yIiwic3R5bGVyIiwidXNlRGVtb1N0eWxlciIsInNlbGVjdGVkIiwiaW5kZXhlcyIsImZpeGVkIiwibWV0YSIsImhhbmRsZVBvc2l0aW9uZWREcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiaGFuZGxlU2VsZWN0IiwidmlldyIsImNvbXBsZXRlU3R5bGUiLCJhbGVydFN0eWxlcyIsInBhZGRpbmciLCJtYXJnaW4iLCJtYWtlU3R5bGVzIiwiY29tYmluZVN0eWxlcyIsImZpbGxTdHlsZXMiLCJzaXppbmdTdHlsZXMiLCJwb3NpdGlvblN0eWxlcyIsImZsZXhTdHlsZXMiLCJ2aWV3U3R5bGVzIl0sIm1h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LENBQXJCO0FBTUEsSUFBTTFCLFFBQVEsR0FBRytCLG9FQUFVLENBQUNDLHVEQUFhLENBQ3JDSixXQURxQyxFQUVyQ1Msd0RBRnFDLENBQWQsQ0FBM0I7QUFLZXJDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9BbGVydFwiO1xyXG5pbXBvcnQgQWxlcnRSb290IGZyb20gXCIuL0FsZXJ0Um9vdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWxlcnQgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XHJcbiAgICBzdHlsZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgLi4ucHJvcHNcclxufSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoc3R5bGUpO1xyXG4gICAgY29uc3QgY2xhc3NBbGVydCA9IGNsc3goXHJcbiAgICAgICAgY2xhc3Nlcy5hbGVydCxcclxuICAgICAgICBjbGFzc2VzLmZpbGwsXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NBbGwgPSBjbHN4KFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBjbGFzc2VzLnVpXHJcbiAgICApXHJcbiAgICByZXR1cm4gPGRpdiBcclxuICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NBbGx9XHJcbiAgICA+XHJcbiAgICAgICAgPEFsZXJ0Um9vdCBcclxuICAgICAgICAgICAgcmVmID0ge3JlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzQWxlcnR9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0OyIsImltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBbGVydFJvb3QgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XHJcbiAgICBtZXNzYWdlLFxyXG4gICAgdGV4dCxcclxuICAgIC4uLnByb3BzXHJcbn0sIHJlZikgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEJ1dHRvblxyXG4gICAgICAgIHJlZiA9IHtyZWZ9XHJcbiAgICAgICAgb25DbGljayA9IHtoYW5kbGVBbGVydH1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICA8L0J1dHRvbj5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydFJvb3Q7IiwiaW1wb3J0IHtEbkRCdWlsZGVySE9DfSBmcm9tIFwiYnVpbGQtdWlcIlxyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlRGVtb1N0eWxlciBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVtb1N0eWxlclwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4vQWxlcnRcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL0FsZXJ0Vmlld1wiO1xyXG5cclxuY29uc3QgQnVpbGRlckFsZXJ0ID0gRG5EQnVpbGRlckhPQyhBbGVydCk7XHJcblxyXG5jb25zdCBBbGVydFZpZXcgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0eWxlciA9IHVzZURlbW9TdHlsZXIoe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBlZGl0b3IuaW5kZXhlcy5zZWxlY3RlZCxcclxuICAgICAgICBmaXhlZDogZWRpdG9yLm1ldGEuZml4ZWQsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8QnVpbGRlckFsZXJ0XHJcbiAgICAgICAgLy8gRG5EIFByb3BzXHJcbiAgICAgICAgb25EcmFnU3RhcnQgPSB7IWVkaXRvci5tZXRhLmZpeGVkICYmIGVkaXRvci5oYW5kbGVQb3NpdGlvbmVkRHJhZ1N0YXJ0fVxyXG4gICAgICAgIG9uRHJhZ0VuZCA9IHshZWRpdG9yLm1ldGEuZml4ZWQgJiYgZWRpdG9yLmhhbmRsZURyYWdFbmR9XHJcbiAgICAgICAgZHJhZ2dhYmxlID0geyFlZGl0b3IubWV0YS5maXhlZH1cclxuICAgICAgICAvLyBPdGhlciBQcm9wc1xyXG4gICAgICAgIG9uQ2xpY2sgPSB7ZWRpdG9yLmhhbmRsZVNlbGVjdH1cclxuICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy52aWV3fVxyXG4gICAgICAgIC8vIEFsZXJ0IFByb3BzXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIHN0eWxlID0ge3N0eWxlci5jb21wbGV0ZVN0eWxlKHByb3BzLnN0eWxlKX1cclxuICAgIC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0VmlldzsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IGNvbWJpbmVTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzJztcclxuaW1wb3J0IHtmaWxsU3R5bGVzLCBmbGV4U3R5bGVzLCBwb3NpdGlvblN0eWxlcywgc2l6aW5nU3R5bGVzfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdWknO1xyXG5cclxuY29uc3QgYWxlcnRTdHlsZXMgPSAoe1xyXG4gICAgYWxlcnQ6IHByb3BzID0+ICh7XHJcbiAgICAgICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcclxuICAgICAgICBtYXJnaW46IHByb3BzLm1hcmdpbixcclxuICAgIH0pLFxyXG59KVxyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKGNvbWJpbmVTdHlsZXMoXHJcbiAgICBhbGVydFN0eWxlcyxcclxuICAgIGZpbGxTdHlsZXMsXHJcbiAgICBzaXppbmdTdHlsZXMsXHJcbiAgICBwb3NpdGlvblN0eWxlcyxcclxuICAgIGZsZXhTdHlsZXMsXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7IiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGNvbWJpbmVTdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlc1wiO1xyXG5pbXBvcnQge3ZpZXdTdHlsZXN9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvdmlld3NcIjtcclxuXHJcbmNvbnN0IGFsZXJ0U3R5bGVzID0gKHtcclxuICAgIHZpZXc6ICh7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKGNvbWJpbmVTdHlsZXMoXHJcbiAgICBhbGVydFN0eWxlcyxcclxuICAgIHZpZXdTdHlsZXMsXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==