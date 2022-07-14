(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_builder_ui_text_TextPanel_js"],{

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

/***/ "./src/components/builder/panels/FontPanel.js":
/*!****************************************************!*\
  !*** ./src/components/builder/panels/FontPanel.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\FontPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var FontPanel = function FontPanel(_ref) {
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
        htmlFor: "style.fontSize",
        className: classes.label,
        children: "Text Size"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "outlined",
        name: "style.fontSize",
        id: "style.fontSize",
        value: editor.props.style.fontSize || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.fontWeight",
        className: classes.label,
        children: "Text Boldness"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "outlined",
        name: "style.fontWeight",
        id: "style.fontWeight",
        value: editor.props.style.fontWeight || '',
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
        htmlFor: "style.fontFamily",
        className: classes.label,
        children: "Text Font"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__.default, {
        variant: "outlined",
        "native": true,
        name: "style.fontFamily",
        id: "style.fontFamily",
        value: editor.props.style.fontFamily || '',
        onChange: editor.handleUpdate,
        className: classes.input,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "Times New Roman",
          children: "Times New Roman"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "Courier New",
          children: "Courier New"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "Roboto",
          children: "Roboto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "KoHo",
          children: "KoHo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "style.textAlign",
        className: classes.label,
        children: "Text Align"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__.default, {
        variant: "outlined",
        "native": true,
        name: "style.textAlign",
        id: "style.textAlign",
        value: editor.props.style.textAlign || '',
        onChange: editor.handleUpdate,
        className: classes.input,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "left",
          children: "Left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "center",
          children: "Center"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "right",
          children: "Right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: "justify",
          children: "Justify"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, _this);
};

_s(FontPanel, "A3+mkMkYiCmCAe2UewEAE70iItI=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default, _style_Panel__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = FontPanel;
/* harmony default export */ __webpack_exports__["default"] = (FontPanel);

var _c;

$RefreshReg$(_c, "FontPanel");

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

/***/ "./src/components/builder/panels/SpacingPanel.js":
/*!*******************************************************!*\
  !*** ./src/components/builder/panels/SpacingPanel.js ***!
  \*******************************************************/
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




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\SpacingPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SpacingPanel = function SpacingPanel(_ref) {
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
        htmlFor: "style.padding",
        className: classes.label,
        children: "Padding"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "outlined",
        name: "style.padding",
        id: "style.padding",
        value: editor.props.style.padding || '',
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
        htmlFor: "style.margin",
        className: classes.label,
        children: "Margin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "outlined",
        name: "style.margin",
        id: "style.margin",
        value: editor.props.style.margin || '',
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

_s(SpacingPanel, "A3+mkMkYiCmCAe2UewEAE70iItI=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__.default, _style_Panel__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = SpacingPanel;
/* harmony default export */ __webpack_exports__["default"] = (SpacingPanel);

var _c;

$RefreshReg$(_c, "SpacingPanel");

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

/***/ "./src/components/builder/ui/text/TextPanel.js":
/*!*****************************************************!*\
  !*** ./src/components/builder/ui/text/TextPanel.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _style_TextPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/TextPanel */ "./src/components/builder/ui/text/style/TextPanel.js");
/* harmony import */ var _panels_FontPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/FontPanel */ "./src/components/builder/panels/FontPanel.js");
/* harmony import */ var _panels_PalettePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/PalettePanel */ "./src/components/builder/panels/PalettePanel.js");
/* harmony import */ var _panels_PositionPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/PositionPanel */ "./src/components/builder/panels/PositionPanel.js");
/* harmony import */ var _panels_SpacingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/SpacingPanel */ "./src/components/builder/panels/SpacingPanel.js");
/* harmony import */ var _panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/FlexItemPanel */ "./src/components/builder/panels/FlexItemPanel.js");
/* harmony import */ var _panels_SizingPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../panels/SizingPanel */ "./src/components/builder/panels/SizingPanel.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\text\\TextPanel.js",
    _this = undefined,
    _s = $RefreshSig$();












var TextPanel = function TextPanel(_ref) {
  _s();

  var id = _ref.id;
  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_1__.default)({
    id: id
  });
  var styler = (0,_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_2__.default)({
    id: id
  });
  var classes = (0,_style_TextPanel__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "text",
        className: classes.label,
        children: "Text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
        variant: "outlined",
        name: "text",
        id: "text",
        value: editor.props.text,
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), styler.styles.flexItem && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_8__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 36
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_SpacingPanel__WEBPACK_IMPORTED_MODULE_7__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_PalettePanel__WEBPACK_IMPORTED_MODULE_5__.ColorPanel, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_FontPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_SizingPanel__WEBPACK_IMPORTED_MODULE_9__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_PositionPanel__WEBPACK_IMPORTED_MODULE_6__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, _this);
};

_s(TextPanel, "IVVmjF1vhoqUsjYrXJLDH+ihIh8=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_1__.default, _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_2__.default, _style_TextPanel__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = TextPanel;
/* harmony default export */ __webpack_exports__["default"] = (TextPanel);

var _c;

$RefreshReg$(_c, "TextPanel");

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

/***/ "./src/components/builder/ui/text/style/TextPanel.js":
/*!***********************************************************!*\
  !*** ./src/components/builder/ui/text/style/TextPanel.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_style_Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../panels/style/Panel */ "./src/components/builder/panels/style/Panel.js");
/* module decorator */ module = __webpack_require__.hmd(module);

/* harmony default export */ __webpack_exports__["default"] = (_panels_style_Panel__WEBPACK_IMPORTED_MODULE_0__.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRmxleEl0ZW1QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRm9udFBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3BhbmVscy9Qb3NpdGlvblBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3BhbmVscy9TaXppbmdQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvU3BhY2luZ1BhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL3RleHQvVGV4dFBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL3RleHQvc3R5bGUvVGV4dFBhbmVsLmpzIl0sIm5hbWVzIjpbIkZsZXhJdGVtUGFuZWwiLCJpZCIsInByb3BzIiwiZWRpdG9yIiwidXNlRGVtb0VkaXRvciIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImZpZWxkIiwibGFiZWwiLCJzdHlsZSIsImZsZXhHcm93IiwiaGFuZGxlVXBkYXRlIiwiaW5wdXQiLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwiRm9udFBhbmVsIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsIlBvc2l0aW9uUGFuZWwiLCJ0b3AiLCJsZWZ0IiwiU2l6aW5nUGFuZWwiLCJ3aWR0aCIsImhlaWdodCIsIlNwYWNpbmdQYW5lbCIsInBhZGRpbmciLCJtYXJnaW4iLCJUZXh0UGFuZWwiLCJzdHlsZXIiLCJ1c2VEZW1vU3R5bGVyIiwidGV4dCIsInN0eWxlcyIsImZsZXhJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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OERBQUMsc0RBQUQ7QUFBVyxRQUFFLEVBQUlBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkcsZUF1QkgsOERBQUMsd0RBQUQ7QUFBYSxRQUFFLEVBQUlBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkcsZUF3QkgsOERBQUMsMERBQUQ7QUFBZSxRQUFFLEVBQUlBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Qkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUEyQkgsQ0FyQ0Q7O0dBQU00QixTO1VBR2F6Qix5RCxFQUdBMkIseUQsRUFHQ3pCLHFEOzs7S0FUZHVCLFM7QUF1Q04sK0RBQWVBLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBRUEsK0RBQWV2Qix3REFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3NyY19jb21wb25lbnRzX2J1aWxkZXJfdWlfdGV4dF9UZXh0UGFuZWxfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9QYW5lbFwiO1xyXG5cclxuY29uc3QgRmxleEl0ZW1QYW5lbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mbGV4R3JvdydcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBGbGV4IEdyb3dcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZmxleEdyb3cnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZsZXhHcm93J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZmxleEdyb3cgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mbGV4U2hyaW5rJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXggU2hyaW5rXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZsZXhTaHJpbmsnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZsZXhTaHJpbmsnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mbGV4U2hyaW5rIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZmxleEJhc2lzJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXggQmFzaXNcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mbGV4QmFzaXMnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZsZXhCYXNpcydcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmZsZXhCYXNpcyB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxleEl0ZW1QYW5lbDsiLCJpbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBGb250UGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZm9udFNpemUnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVGV4dCBTaXplXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZm9udFNpemUnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZvbnRTaXplJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZm9udFNpemUgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mb250V2VpZ2h0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFRleHQgQm9sZG5lc3NcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mb250V2VpZ2h0J1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5mb250V2VpZ2h0J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZm9udFdlaWdodCB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZvbnRGYW1pbHknXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVGV4dCBGb250XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hdGl2ZSA9IHt0cnVlfVxyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZvbnRGYW1pbHknXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZvbnRGYW1pbHknXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mb250RmFtaWx5IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnVGltZXMgTmV3IFJvbWFuJz5cclxuICAgICAgICAgICAgICAgIFRpbWVzIE5ldyBSb21hblxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdDb3VyaWVyIE5ldyc+XHJcbiAgICAgICAgICAgICAgICBDb3VyaWVyIE5ld1xyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdSb2JvdG8nPlxyXG4gICAgICAgICAgICAgICAgUm9ib3RvXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ0tvSG8nPlxyXG4gICAgICAgICAgICAgICAgS29Ib1xyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS50ZXh0QWxpZ24nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVGV4dCBBbGlnblxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYXRpdmUgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS50ZXh0QWxpZ24nXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLnRleHRBbGlnbidcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLnRleHRBbGlnbiB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgTGVmdFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgQ2VudGVyXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgIFJpZ2h0XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ2p1c3RpZnknPlxyXG4gICAgICAgICAgICAgICAgSnVzdGlmeVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9udFBhbmVsO1xyXG4iLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBQb3NpdGlvblBhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLnRvcCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUb3BcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS50b3AnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLnRvcCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLnRvcCB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmxlZnQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgTGVmdFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmxlZnQnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmxlZnQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5sZWZ0IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb25QYW5lbDsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBTaXppbmdQYW5lbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS53aWR0aCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBXaWR0aFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLndpZHRoJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS53aWR0aCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLndpZHRoIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuaGVpZ2h0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEhlaWdodFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmhlaWdodCdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuaGVpZ2h0J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuaGVpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6aW5nUGFuZWw7IiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9QYW5lbFwiO1xyXG5cclxuY29uc3QgU3BhY2luZ1BhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLnBhZGRpbmcnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgUGFkZGluZ1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLnBhZGRpbmcnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLnBhZGRpbmcnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5wYWRkaW5nIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUubWFyZ2luJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIE1hcmdpblxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLm1hcmdpbidcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUubWFyZ2luJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUubWFyZ2luIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGFjaW5nUGFuZWw7IiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yJztcclxuaW1wb3J0IHVzZURlbW9TdHlsZXIgZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVtb1N0eWxlcic7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlL1RleHRQYW5lbCc7XHJcbmltcG9ydCBGb250UGFuZWwgZnJvbSAnLi4vLi4vcGFuZWxzL0ZvbnRQYW5lbCc7XHJcbmltcG9ydCB7Q29sb3JQYW5lbH0gZnJvbSAnLi4vLi4vcGFuZWxzL1BhbGV0dGVQYW5lbCc7XHJcbmltcG9ydCBQb3NpdGlvblBhbmVsIGZyb20gJy4uLy4uL3BhbmVscy9Qb3NpdGlvblBhbmVsJztcclxuaW1wb3J0IFNwYWNpbmdQYW5lbCBmcm9tICcuLi8uLi9wYW5lbHMvU3BhY2luZ1BhbmVsJztcclxuaW1wb3J0IEZsZXhJdGVtUGFuZWwgZnJvbSBcIi4uLy4uL3BhbmVscy9GbGV4SXRlbVBhbmVsXCI7XHJcbmltcG9ydCBTaXppbmdQYW5lbCBmcm9tICcuLi8uLi9wYW5lbHMvU2l6aW5nUGFuZWwnO1xyXG5cclxuY29uc3QgVGV4dFBhbmVsID0gKHtcclxuICAgIGlkLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3R5bGVyID0gdXNlRGVtb1N0eWxlcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICd0ZXh0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFRleHRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICd0ZXh0J1xyXG4gICAgICAgICAgICBpZCA9ICd0ZXh0J1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMudGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3N0eWxlci5zdHlsZXMuZmxleEl0ZW0gJiYgPEZsZXhJdGVtUGFuZWwgaWQgPSB7aWR9IC8+fVxyXG4gICAgICAgIDxTcGFjaW5nUGFuZWwgaWQgPSB7aWR9IC8+XHJcbiAgICAgICAgPENvbG9yUGFuZWwgaWQgPSB7aWR9IC8+XHJcbiAgICAgICAgPEZvbnRQYW5lbCBpZCA9IHtpZH0gLz5cclxuICAgICAgICA8U2l6aW5nUGFuZWwgaWQgPSB7aWR9IC8+XHJcbiAgICAgICAgPFBvc2l0aW9uUGFuZWwgaWQgPSB7aWR9IC8+XHJcblxyXG4gICAgPC9kaXY+IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0UGFuZWw7IiwiaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4uLy4uLy4uL3BhbmVscy9zdHlsZS9QYW5lbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTsiXSwic291cmNlUm9vdCI6IiJ9