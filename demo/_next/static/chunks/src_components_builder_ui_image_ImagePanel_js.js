(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_builder_ui_image_ImagePanel_js"],{

/***/ "./src/components/builder/panels/FlexItemPanel.js":
/*!********************************************************!*\
  !*** ./src/components/builder/panels/FlexItemPanel.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\FlexItemPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FlexItemPanel = function FlexItemPanel(_ref) {
  _s();

  var id = _ref.id,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["id"]);

  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default)({
    id: id
  });
  var classes = (0,_style_Panel__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.flexGrow",
        className: classes.label,
        children: "Flex Grow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.flexShrink",
        className: classes.label,
        children: "Flex Shrink"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.flexBasis",
        className: classes.label,
        children: "Flex Basis"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default, _style_Panel__WEBPACK_IMPORTED_MODULE_4__.default];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./src/components/builder/panels/PositionPanel.js":
/*!********************************************************!*\
  !*** ./src/components/builder/panels/PositionPanel.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\PositionPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var PositionPanel = function PositionPanel(_ref) {
  _s();

  var id = _ref.id,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["id"]);

  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default)({
    id: id
  });
  var classes = (0,_style_Panel__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.top",
        className: classes.label,
        children: "Top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.left",
        className: classes.label,
        children: "Left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default, _style_Panel__WEBPACK_IMPORTED_MODULE_4__.default];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./src/components/builder/panels/SizingPanel.js":
/*!******************************************************!*\
  !*** ./src/components/builder/panels/SizingPanel.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\SizingPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SizingPanel = function SizingPanel(_ref) {
  _s();

  var id = _ref.id,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["id"]);

  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default)({
    id: id
  });
  var classes = (0,_style_Panel__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.width",
        className: classes.label,
        children: "Width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.height",
        className: classes.label,
        children: "Height"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default, _style_Panel__WEBPACK_IMPORTED_MODULE_4__.default];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./src/components/builder/ui/image/ImagePanel.js":
/*!*******************************************************!*\
  !*** ./src/components/builder/ui/image/ImagePanel.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _style_ImagePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/ImagePanel */ "./src/components/builder/ui/image/style/ImagePanel.js");
/* harmony import */ var _panels_SizingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/SizingPanel */ "./src/components/builder/panels/SizingPanel.js");
/* harmony import */ var _panels_PositionPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/PositionPanel */ "./src/components/builder/panels/PositionPanel.js");
/* harmony import */ var _panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/FlexItemPanel */ "./src/components/builder/panels/FlexItemPanel.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\image\\ImagePanel.js",
    _this = undefined,
    _s = $RefreshSig$();












var ImagePanel = function ImagePanel(_ref) {
  _s();

  var id = _ref.id;
  var actions = (0,build_ui__WEBPACK_IMPORTED_MODULE_2__.useActions)();
  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default)({
    id: id
  });
  var styler = (0,_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_4__.default)({
    id: id
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(editor.props.src),
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

  var classes = (0,_style_ImagePanel__WEBPACK_IMPORTED_MODULE_5__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "link",
        className: classes.label,
        children: "Image Link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: classes.input,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: classes.sourceChange,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
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
    }, _this), styler.styles.flexItem && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_8__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 36
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_SizingPanel__WEBPACK_IMPORTED_MODULE_6__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_PositionPanel__WEBPACK_IMPORTED_MODULE_7__.default, {
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
  return [build_ui__WEBPACK_IMPORTED_MODULE_2__.useActions, _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default, _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_4__.default, _style_ImagePanel__WEBPACK_IMPORTED_MODULE_5__.default];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./src/components/builder/ui/image/style/ImagePanel.js":
/*!*************************************************************!*\
  !*** ./src/components/builder/ui/image/style/ImagePanel.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_panels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/panels */ "./src/components/builder/styles/panels.js");
/* module decorator */ module = __webpack_require__.hmd(module);




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

var useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((0,_styles__WEBPACK_IMPORTED_MODULE_0__.default)(_styles_panels__WEBPACK_IMPORTED_MODULE_1__.panelStyles, imageStyles));
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRmxleEl0ZW1QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvUG9zaXRpb25QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvU2l6aW5nUGFuZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2J1aWxkZXIvdWkvaW1hZ2UvSW1hZ2VQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9pbWFnZS9zdHlsZS9JbWFnZVBhbmVsLmpzIl0sIm5hbWVzIjpbIkZsZXhJdGVtUGFuZWwiLCJpZCIsInByb3BzIiwiZWRpdG9yIiwidXNlRGVtb0VkaXRvciIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImZpZWxkIiwibGFiZWwiLCJzdHlsZSIsImZsZXhHcm93IiwiaGFuZGxlVXBkYXRlIiwiaW5wdXQiLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwiUG9zaXRpb25QYW5lbCIsInRvcCIsImxlZnQiLCJTaXppbmdQYW5lbCIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VQYW5lbCIsImFjdGlvbnMiLCJ1c2VBY3Rpb25zIiwic3R5bGVyIiwidXNlRGVtb1N0eWxlciIsInVzZVN0YXRlIiwic3JjIiwic291cmNlIiwic2V0U291cmNlIiwiaGFuZGxlU291cmNlQ2hhbmdlIiwidGltZUJhdGNoZWQiLCJ0cmlnZ2VyVXBkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRJbnB1dCIsInNvdXJjZUNoYW5nZSIsInNvdXJjZUJ1dHRvbiIsInN0eWxlcyIsImZsZXhJdGVtIiwiaW1hZ2VTdHlsZXMiLCJ0aGVtZSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJyb3dHYXAiLCJmbGV4IiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFrZVN0eWxlcyIsImNvbWJpbmVTdHlsZXMiLCJwYW5lbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FHaEI7QUFBQTs7QUFBQSxNQUZGQyxFQUVFLFFBRkZBLEVBRUU7QUFBQSxNQURDQyxLQUNEOztBQUNGLE1BQU1DLE1BQU0sR0FBR0MsNkRBQWEsQ0FBQztBQUN6QkgsTUFBRSxFQUFFQTtBQURxQixHQUFELENBQTVCO0FBR0EsTUFBTUksT0FBTyxHQUFHQyxxREFBUSxFQUF4QjtBQUNBLHNCQUFPLHFHQUFTSixLQUFUO0FBQUEsNEJBRUg7QUFBSyxlQUFTLEVBQUlHLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSw4QkFDQTtBQUNJLGVBQU8sRUFBRyxnQkFEZDtBQUVJLGlCQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQU9BLDhEQUFDLGdFQUFEO0FBQ0ksZUFBTyxFQUFHLFVBRGQ7QUFFSSxZQUFJLEVBQUcsUUFGWDtBQUdJLFlBQUksRUFBRyxnQkFIWDtBQUlJLFVBQUUsRUFBRyxnQkFKVDtBQUtJLGFBQUssRUFBSUwsTUFBTSxDQUFDRCxLQUFQLENBQWFPLEtBQWIsQ0FBbUJDLFFBQW5CLElBQStCLEVBTDVDO0FBTUksZ0JBQVEsRUFBSVAsTUFBTSxDQUFDUSxZQU52QjtBQU9JLGlCQUFTLEVBQUlOLE9BQU8sQ0FBQ087QUFQekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZHLGVBb0JIO0FBQUssZUFBUyxFQUFJUCxPQUFPLENBQUNFLEtBQTFCO0FBQUEsOEJBQ0E7QUFDSSxlQUFPLEVBQUcsa0JBRGQ7QUFFSSxpQkFBUyxFQUFJRixPQUFPLENBQUNHLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFLLEVBQUU7QUFEQyxLQVRjO0FBWTFCbUIsZ0JBQVksRUFBRztBQUNYUyxVQUFJLEVBQUUsU0FESztBQUVYQyxlQUFTLEVBQUU7QUFGQSxLQVpXO0FBZ0IxQlQsZ0JBQVksRUFBRztBQUNYVSxZQUFNLEVBQUUsUUFERztBQUVYOUIsV0FBSyxFQUFFO0FBRkk7QUFoQlcsR0FBTDtBQUFBLENBQXpCOztBQXNCQSxJQUFNYixRQUFRLEdBQUc0QyxvRUFBVSxDQUFDQyxnREFBYSxDQUNyQ0MsdURBRHFDLEVBRXJDVixXQUZxQyxDQUFkLENBQTNCO0FBS0EsK0RBQWVwQyxRQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3Mvc3JjX2NvbXBvbmVudHNfYnVpbGRlcl91aV9pbWFnZV9JbWFnZVBhbmVsX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvUGFuZWxcIjtcclxuXHJcbmNvbnN0IEZsZXhJdGVtUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZmxleEdyb3cnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBHcm93XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZsZXhHcm93J1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5mbGV4R3JvdydcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmZsZXhHcm93IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZmxleFNocmluaydcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBGbGV4IFNocmlua1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICB0eXBlID0gJ251bWJlcidcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mbGV4U2hyaW5rJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5mbGV4U2hyaW5rJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZmxleFNocmluayB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZsZXhCYXNpcydcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBGbGV4IEJhc2lzXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZmxleEJhc2lzJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5mbGV4QmFzaXMnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mbGV4QmFzaXMgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsZXhJdGVtUGFuZWw7IiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9QYW5lbFwiO1xyXG5cclxuY29uc3QgUG9zaXRpb25QYW5lbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS50b3AnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVG9wXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUudG9wJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS50b3AnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS50b3AgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5sZWZ0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIExlZnRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5sZWZ0J1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5sZWZ0J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUubGVmdCB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uUGFuZWw7IiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9QYW5lbFwiO1xyXG5cclxuY29uc3QgU2l6aW5nUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUud2lkdGgnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgV2lkdGhcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS53aWR0aCdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUud2lkdGgnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS53aWR0aCB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmhlaWdodCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBIZWlnaHRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5oZWlnaHQnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmhlaWdodCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmhlaWdodCB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemluZ1BhbmVsOyIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gXCJidWlsZC11aVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VEZW1vU3R5bGVyIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vU3R5bGVyXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlL0ltYWdlUGFuZWwnO1xyXG5pbXBvcnQgU2l6aW5nUGFuZWwgZnJvbSBcIi4uLy4uL3BhbmVscy9TaXppbmdQYW5lbFwiO1xyXG5pbXBvcnQgUG9zaXRpb25QYW5lbCBmcm9tIFwiLi4vLi4vcGFuZWxzL1Bvc2l0aW9uUGFuZWxcIjtcclxuaW1wb3J0IEZsZXhJdGVtUGFuZWwgZnJvbSBcIi4uLy4uL3BhbmVscy9GbGV4SXRlbVBhbmVsXCI7XHJcblxyXG5jb25zdCBJbWFnZVBhbmVsID0gKHtcclxuICAgIGlkLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb25zID0gdXNlQWN0aW9ucygpO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0eWxlciA9IHVzZURlbW9TdHlsZXIoe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoZWRpdG9yLnByb3BzLnNyYyk7XHJcbiAgICBjb25zdCBoYW5kbGVTb3VyY2VDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgYWN0aW9ucy50aW1lQmF0Y2hlZC50cmlnZ2VyVXBkYXRlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICBwcm9wczoge3NyYzogc291cmNlfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHNldFNvdXJjZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdsaW5rJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEltYWdlIExpbmtcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIGlkID0gJ2xpbmsnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzb3VyY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy50ZXh0SW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnNvdXJjZUNoYW5nZX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlU291cmNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuc291cmNlQnV0dG9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2UgU291cmNlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIHtzdHlsZXIuc3R5bGVzLmZsZXhJdGVtICYmIDxGbGV4SXRlbVBhbmVsIGlkID0ge2lkfSAvPn1cclxuICAgICAgICA8U2l6aW5nUGFuZWwgaWQgPSB7aWR9IC8+XHJcbiAgICAgICAgPFBvc2l0aW9uUGFuZWwgaWQgPSB7aWR9IC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlUGFuZWw7IiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBjb21iaW5lU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcyc7XHJcbmltcG9ydCB7cGFuZWxTdHlsZXN9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9wYW5lbHMnO1xyXG5cclxuY29uc3QgaW1hZ2VTdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gICAgZmllbGQ6ICh7XHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgcm93R2FwOiAnMXJlbScsXHJcbiAgICB9KSxcclxuICAgIGlucHV0OiAoe1xyXG4gICAgICAgIGZsZXg6ICcxIDAgNDAlJ1xyXG4gICAgfSksXHJcbiAgICB0ZXh0SW5wdXQ6ICh7XHJcbiAgICAgICAgd2lkdGg6ICc5MCUnXHJcbiAgICB9KSxcclxuICAgIHNvdXJjZUNoYW5nZTogKHtcclxuICAgICAgICBmbGV4OiAnMSAwIDMwJScsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSksXHJcbiAgICBzb3VyY2VCdXR0b246ICh7XHJcbiAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICB3aWR0aDogJzgwJSdcclxuICAgIH0pXHJcbn0pXHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoY29tYmluZVN0eWxlcyhcclxuICAgIHBhbmVsU3R5bGVzLFxyXG4gICAgaW1hZ2VTdHlsZXMsXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==