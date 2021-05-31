(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./src/components/builder/panels/FlexItemPanel.js":
/*!********************************************************!*\
  !*** ./src/components/builder/panels/FlexItemPanel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\FlexItemPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FlexItemPanel = function FlexItemPanel(_ref) {
  _s();

  var id = _ref.id,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["id"]);

  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id
  });
  var classes = Object(_style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.flexGrow",
        className: classes.label,
        children: "Flex Grow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        type: "number",
        name: "style.flexGrow",
        id: "style.flexGrow",
        value: editor.props.style.flexGrow || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.flexShrink",
        className: classes.label,
        children: "Flex Shrink"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        type: "number",
        name: "style.flexShrink",
        id: "style.flexShrink",
        value: editor.props.style.flexShrink || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.flexBasis",
        className: classes.label,
        children: "Flex Basis"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        name: "style.flexBasis",
        id: "style.flexBasis",
        value: editor.props.style.flexBasis || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, _this);
};

_s(FlexItemPanel, "A3+mkMkYiCmCAe2UewEAE70iItI=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"], _style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = FlexItemPanel;
/* harmony default export */ __webpack_exports__["default"] = (FlexItemPanel);

var _c;

$RefreshReg$(_c, "FlexItemPanel");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/panels/PositionPanel.js":
/*!********************************************************!*\
  !*** ./src/components/builder/panels/PositionPanel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\PositionPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var PositionPanel = function PositionPanel(_ref) {
  _s();

  var id = _ref.id,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["id"]);

  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id
  });
  var classes = Object(_style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.top",
        className: classes.label,
        children: "Top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        name: "style.top",
        id: "style.top",
        value: editor.props.style.top || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.left",
        className: classes.label,
        children: "Left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        name: "style.left",
        id: "style.left",
        value: editor.props.style.left || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, _this);
};

_s(PositionPanel, "A3+mkMkYiCmCAe2UewEAE70iItI=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"], _style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = PositionPanel;
/* harmony default export */ __webpack_exports__["default"] = (PositionPanel);

var _c;

$RefreshReg$(_c, "PositionPanel");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/panels/SizingPanel.js":
/*!******************************************************!*\
  !*** ./src/components/builder/panels/SizingPanel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\SizingPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SizingPanel = function SizingPanel(_ref) {
  _s();

  var id = _ref.id,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["id"]);

  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id
  });
  var classes = Object(_style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.width",
        className: classes.label,
        children: "Width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        name: "style.width",
        id: "style.width",
        value: editor.props.style.width || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "style.height",
        className: classes.label,
        children: "Height"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        name: "style.height",
        id: "style.height",
        value: editor.props.style.height || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, _this);
};

_s(SizingPanel, "A3+mkMkYiCmCAe2UewEAE70iItI=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"], _style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = SizingPanel;
/* harmony default export */ __webpack_exports__["default"] = (SizingPanel);

var _c;

$RefreshReg$(_c, "SizingPanel");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/builder/ui/image/ImagePanel.js":
/*!*******************************************************!*\
  !*** ./src/components/builder/ui/image/ImagePanel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _style_ImagePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/ImagePanel */ "./src/components/builder/ui/image/style/ImagePanel.js");
/* harmony import */ var _panels_SizingPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/SizingPanel */ "./src/components/builder/panels/SizingPanel.js");
/* harmony import */ var _panels_PositionPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../panels/PositionPanel */ "./src/components/builder/panels/PositionPanel.js");
/* harmony import */ var _panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../panels/FlexItemPanel */ "./src/components/builder/panels/FlexItemPanel.js");


var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\image\\ImagePanel.js",
    _this = undefined,
    _s = $RefreshSig$();












var ImagePanel = function ImagePanel(_ref) {
  _s();

  var id = _ref.id;
  var actions = Object(build_ui__WEBPACK_IMPORTED_MODULE_2__["useActions"])();
  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_5__["default"])({
    id: id
  });
  var styler = Object(_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_6__["default"])({
    id: id
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(editor.props.src),
      source = _useState[0],
      setSource = _useState[1];

  var handleSourceChange = function handleSourceChange() {
    actions.timeBatched.triggerUpdate({
      id: id,
      props: {
        src: source
      }
    });
  };

  var handleChange = function handleChange(event) {
    setSource(event.target.value);
  };

  var classes = Object(_style_ImagePanel__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "link",
        className: classes.label,
        children: "Image Link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classes.input,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "outlined",
          id: "link",
          value: source,
          onChange: handleChange,
          className: classes.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classes.sourceChange,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: "primary",
          variant: "outlined",
          onClick: handleSourceChange,
          className: classes.sourceButton,
          children: "Change Source"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this), styler.styles.flexItem && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 36
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_SizingPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_PositionPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }, _this);
};

_s(ImagePanel, "dqFtB3z4HdK9Y2CE1SEK8bv/dqA=", false, function () {
  return [build_ui__WEBPACK_IMPORTED_MODULE_2__["useActions"], _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_6__["default"], _style_ImagePanel__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = ImagePanel;
/* harmony default export */ __webpack_exports__["default"] = (ImagePanel);

var _c;

$RefreshReg$(_c, "ImagePanel");

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

/***/ "./src/components/builder/ui/image/style/ImagePanel.js":
/*!*************************************************************!*\
  !*** ./src/components/builder/ui/image/style/ImagePanel.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/panels */ "./src/components/builder/styles/panels.js");




var imageStyles = function imageStyles(theme) {
  return {
    field: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      rowGap: '1rem'
    },
    input: {
      flex: '1 0 40%'
    },
    textInput: {
      width: '90%'
    },
    sourceChange: {
      flex: '1 0 30%',
      textAlign: 'center'
    },
    sourceButton: {
      margin: '0 auto',
      width: '80%'
    }
  };
};

var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles_panels__WEBPACK_IMPORTED_MODULE_2__["panelStyles"], imageStyles));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRmxleEl0ZW1QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvUG9zaXRpb25QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvU2l6aW5nUGFuZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2J1aWxkZXIvdWkvaW1hZ2UvSW1hZ2VQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9pbWFnZS9zdHlsZS9JbWFnZVBhbmVsLmpzIl0sIm5hbWVzIjpbIkZsZXhJdGVtUGFuZWwiLCJpZCIsInByb3BzIiwiZWRpdG9yIiwidXNlRGVtb0VkaXRvciIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImZpZWxkIiwibGFiZWwiLCJzdHlsZSIsImZsZXhHcm93IiwiaGFuZGxlVXBkYXRlIiwiaW5wdXQiLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwiUG9zaXRpb25QYW5lbCIsInRvcCIsImxlZnQiLCJTaXppbmdQYW5lbCIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VQYW5lbCIsImFjdGlvbnMiLCJ1c2VBY3Rpb25zIiwic3R5bGVyIiwidXNlRGVtb1N0eWxlciIsInVzZVN0YXRlIiwic3JjIiwic291cmNlIiwic2V0U291cmNlIiwiaGFuZGxlU291cmNlQ2hhbmdlIiwidGltZUJhdGNoZWQiLCJ0cmlnZ2VyVXBkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRJbnB1dCIsInNvdXJjZUNoYW5nZSIsInNvdXJjZUJ1dHRvbiIsInN0eWxlcyIsImZsZXhJdGVtIiwiaW1hZ2VTdHlsZXMiLCJ0aGVtZSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJyb3dHYXAiLCJmbGV4IiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFrZVN0eWxlcyIsImNvbWJpbmVTdHlsZXMiLCJwYW5lbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FHaEI7QUFBQTs7QUFBQSxNQUZGQyxFQUVFLFFBRkZBLEVBRUU7QUFBQSxNQURDQyxLQUNEOztBQUNGLE1BQU1DLE1BQU0sR0FBR0Msb0VBQWEsQ0FBQztBQUN6QkgsTUFBRSxFQUFFQTtBQURxQixHQUFELENBQTVCO0FBR0EsTUFBTUksT0FBTyxHQUFHQyw0REFBUSxFQUF4QjtBQUNBLHNCQUFPLDRHQUFTSixLQUFUO0FBQUEsNEJBRUg7QUFBSyxlQUFTLEVBQUlHLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSw4QkFDQTtBQUNJLGVBQU8sRUFBRyxnQkFEZDtBQUVJLGlCQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQU9BLHFFQUFDLG1FQUFEO0FBQ0ksZUFBTyxFQUFHLFVBRGQ7QUFFSSxZQUFJLEVBQUcsUUFGWDtBQUdJLFlBQUksRUFBRyxnQkFIWDtBQUlJLFVBQUUsRUFBRyxnQkFKVDtBQUtJLGFBQUssRUFBSUwsTUFBTSxDQUFDRCxLQUFQLENBQWFPLEtBQWIsQ0FBbUJDLFFBQW5CLElBQStCLEVBTDVDO0FBTUksZ0JBQVEsRUFBSVAsTUFBTSxDQUFDUSxZQU52QjtBQU9JLGlCQUFTLEVBQUlOLE9BQU8sQ0FBQ087QUFQekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZHLGVBb0JIO0FBQUssZUFBUyxFQUFJUCxPQUFPLENBQUNFLEtBQTFCO0FBQUEsOEJBQ0E7QUFDSSxlQUFPLEVBQUcsa0JBRGQ7QUFFSSxpQkFBUyxFQUFJRixPQUFPLENBQUNHLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFLLEVBQUU7QUFEQyxLQVRjO0FBWTFCbUIsZ0JBQVksRUFBRztBQUNYUyxVQUFJLEVBQUUsU0FESztBQUVYQyxlQUFTLEVBQUU7QUFGQSxLQVpXO0FBZ0IxQlQsZ0JBQVksRUFBRztBQUNYVSxZQUFNLEVBQUUsUUFERztBQUVYOUIsV0FBSyxFQUFFO0FBRkk7QUFoQlcsR0FBTDtBQUFBLENBQXpCOztBQXNCQSxJQUFNYixRQUFRLEdBQUc0QywyRUFBVSxDQUFDQyx1REFBYSxDQUNyQ0MsMERBRHFDLEVBRXJDVixXQUZxQyxDQUFkLENBQTNCO0FBS2VwQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9QYW5lbFwiO1xyXG5cclxuY29uc3QgRmxleEl0ZW1QYW5lbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mbGV4R3JvdydcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBGbGV4IEdyb3dcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZmxleEdyb3cnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZsZXhHcm93J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZmxleEdyb3cgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mbGV4U2hyaW5rJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXggU2hyaW5rXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZsZXhTaHJpbmsnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZsZXhTaHJpbmsnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mbGV4U2hyaW5rIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZmxleEJhc2lzJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXggQmFzaXNcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mbGV4QmFzaXMnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZsZXhCYXNpcydcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmZsZXhCYXNpcyB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxleEl0ZW1QYW5lbDsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBQb3NpdGlvblBhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLnRvcCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUb3BcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS50b3AnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLnRvcCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLnRvcCB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmxlZnQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgTGVmdFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmxlZnQnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmxlZnQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5sZWZ0IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb25QYW5lbDsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBTaXppbmdQYW5lbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS53aWR0aCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBXaWR0aFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLndpZHRoJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS53aWR0aCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLndpZHRoIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuaGVpZ2h0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEhlaWdodFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmhlaWdodCdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuaGVpZ2h0J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuaGVpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6aW5nUGFuZWw7IiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSBcImJ1aWxkLXVpXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZURlbW9TdHlsZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3VzZURlbW9TdHlsZXJcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUvSW1hZ2VQYW5lbCc7XHJcbmltcG9ydCBTaXppbmdQYW5lbCBmcm9tIFwiLi4vLi4vcGFuZWxzL1NpemluZ1BhbmVsXCI7XHJcbmltcG9ydCBQb3NpdGlvblBhbmVsIGZyb20gXCIuLi8uLi9wYW5lbHMvUG9zaXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgRmxleEl0ZW1QYW5lbCBmcm9tIFwiLi4vLi4vcGFuZWxzL0ZsZXhJdGVtUGFuZWxcIjtcclxuXHJcbmNvbnN0IEltYWdlUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSB1c2VBY3Rpb25zKCk7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3R5bGVyID0gdXNlRGVtb1N0eWxlcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtzb3VyY2UsIHNldFNvdXJjZV0gPSB1c2VTdGF0ZShlZGl0b3IucHJvcHMuc3JjKTtcclxuICAgIGNvbnN0IGhhbmRsZVNvdXJjZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBhY3Rpb25zLnRpbWVCYXRjaGVkLnRyaWdnZXJVcGRhdGUoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHByb3BzOiB7c3JjOiBzb3VyY2V9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgc2V0U291cmNlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2PlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ2xpbmsnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgSW1hZ2UgTGlua1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnbGluaydcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3NvdXJjZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnRleHRJbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge2NsYXNzZXMuc291cmNlQ2hhbmdlfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVTb3VyY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5zb3VyY2VCdXR0b259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENoYW5nZSBTb3VyY2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAge3N0eWxlci5zdHlsZXMuZmxleEl0ZW0gJiYgPEZsZXhJdGVtUGFuZWwgaWQgPSB7aWR9IC8+fVxyXG4gICAgICAgIDxTaXppbmdQYW5lbCBpZCA9IHtpZH0gLz5cclxuICAgICAgICA8UG9zaXRpb25QYW5lbCBpZCA9IHtpZH0gLz5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VQYW5lbDsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IGNvbWJpbmVTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzJztcclxuaW1wb3J0IHtwYW5lbFN0eWxlc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3BhbmVscyc7XHJcblxyXG5jb25zdCBpbWFnZVN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgICBmaWVsZDogKHtcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICByb3dHYXA6ICcxcmVtJyxcclxuICAgIH0pLFxyXG4gICAgaW5wdXQ6ICh7XHJcbiAgICAgICAgZmxleDogJzEgMCA0MCUnXHJcbiAgICB9KSxcclxuICAgIHRleHRJbnB1dDogKHtcclxuICAgICAgICB3aWR0aDogJzkwJSdcclxuICAgIH0pLFxyXG4gICAgc291cmNlQ2hhbmdlOiAoe1xyXG4gICAgICAgIGZsZXg6ICcxIDAgMzAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9KSxcclxuICAgIHNvdXJjZUJ1dHRvbjogKHtcclxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgIHdpZHRoOiAnODAlJ1xyXG4gICAgfSlcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyhjb21iaW5lU3R5bGVzKFxyXG4gICAgcGFuZWxTdHlsZXMsXHJcbiAgICBpbWFnZVN0eWxlcyxcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTsiXSwic291cmNlUm9vdCI6IiJ9