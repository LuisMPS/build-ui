(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_builder_ui_link_LinkPanel_js"],{

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

/***/ "./src/components/builder/ui/link/LinkPanel.js":
/*!*****************************************************!*\
  !*** ./src/components/builder/ui/link/LinkPanel.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_LinkPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/LinkPanel */ "./src/components/builder/ui/link/style/LinkPanel.js");
/* harmony import */ var _panels_SizingPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/SizingPanel */ "./src/components/builder/panels/SizingPanel.js");
/* harmony import */ var _panels_FontPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/FontPanel */ "./src/components/builder/panels/FontPanel.js");
/* harmony import */ var _panels_SpacingPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/SpacingPanel */ "./src/components/builder/panels/SpacingPanel.js");
/* harmony import */ var _panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/FlexItemPanel */ "./src/components/builder/panels/FlexItemPanel.js");
/* harmony import */ var _panels_PalettePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/PalettePanel */ "./src/components/builder/panels/PalettePanel.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\link\\LinkPanel.js",
    _this = undefined,
    _s = $RefreshSig$();












var LinkPanel = function LinkPanel(_ref) {
  _s();

  var id = _ref.id;
  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_1__.default)({
    id: id
  });
  var styler = (0,_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_8__.default)({
    id: id
  });
  var classes = (0,_style_LinkPanel__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "href",
        className: classes.label,
        children: "Link to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "outlined",
        name: "href",
        id: "href",
        value: editor.props.href,
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "text",
        className: classes.label,
        children: "Text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "outlined",
        name: "text",
        id: "text",
        value: editor.props.text,
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "disabled",
        className: classes.label,
        children: "Disabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: classes.input,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__.default, {
          name: "disabled",
          id: "disabled",
          checked: editor.props.disabled,
          onChange: editor.handleUpdate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, _this), styler.styles.flexItem && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_6__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 36
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_PalettePanel__WEBPACK_IMPORTED_MODULE_7__.ColorPanel, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_SpacingPanel__WEBPACK_IMPORTED_MODULE_5__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_SizingPanel__WEBPACK_IMPORTED_MODULE_3__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_FontPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, _this);
};

_s(LinkPanel, "IVVmjF1vhoqUsjYrXJLDH+ihIh8=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_1__.default, _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_8__.default, _style_LinkPanel__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = LinkPanel;
/* harmony default export */ __webpack_exports__["default"] = (LinkPanel);

var _c;

$RefreshReg$(_c, "LinkPanel");

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

/***/ "./src/components/builder/ui/link/style/LinkPanel.js":
/*!***********************************************************!*\
  !*** ./src/components/builder/ui/link/style/LinkPanel.js ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRmxleEl0ZW1QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRm9udFBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3BhbmVscy9TaXppbmdQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvU3BhY2luZ1BhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2xpbmsvTGlua1BhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2xpbmsvc3R5bGUvTGlua1BhbmVsLmpzIl0sIm5hbWVzIjpbIkZsZXhJdGVtUGFuZWwiLCJpZCIsInByb3BzIiwiZWRpdG9yIiwidXNlRGVtb0VkaXRvciIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImZpZWxkIiwibGFiZWwiLCJzdHlsZSIsImZsZXhHcm93IiwiaGFuZGxlVXBkYXRlIiwiaW5wdXQiLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwiRm9udFBhbmVsIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsIlNpemluZ1BhbmVsIiwid2lkdGgiLCJoZWlnaHQiLCJTcGFjaW5nUGFuZWwiLCJwYWRkaW5nIiwibWFyZ2luIiwiTGlua1BhbmVsIiwic3R5bGVyIiwidXNlRGVtb1N0eWxlciIsImhyZWYiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJzdHlsZXMiLCJmbGV4SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FHaEI7QUFBQTs7QUFBQSxN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LFFBSDVCO0FBSUksa0JBQVEsRUFBSTVCLE1BQU0sQ0FBQ1E7QUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0csRUFxREZnQixNQUFNLENBQUNLLE1BQVAsQ0FBY0MsUUFBZCxpQkFBMEIsOERBQUMsMERBQUQ7QUFBZSxRQUFFLEVBQUloQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckR4QixlQXNESCw4REFBQyw0REFBRDtBQUFZLFFBQUUsRUFBSUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRERyxlQXVESCw4REFBQyx5REFBRDtBQUFjLFFBQUUsRUFBSUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZERyxlQXdESCw4REFBQyx3REFBRDtBQUFhLFFBQUUsRUFBSUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhERyxlQXlESCw4REFBQyxzREFBRDtBQUFXLFFBQUUsRUFBSUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQTRESCxDQXRFRDs7R0FBTXlCLFM7VUFHYXRCLHlELEVBR0F3Qix5RCxFQUdDdEIscUQ7OztLQVRkb0IsUztBQXdFTiwrREFBZUEsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFFQSwrREFBZXBCLHdEQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3Mvc3JjX2NvbXBvbmVudHNfYnVpbGRlcl91aV9saW5rX0xpbmtQYW5lbF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBGbGV4SXRlbVBhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZsZXhHcm93J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXggR3Jvd1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICB0eXBlID0gJ251bWJlcidcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mbGV4R3JvdydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZmxleEdyb3cnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mbGV4R3JvdyB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZsZXhTaHJpbmsnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBTaHJpbmtcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZmxleFNocmluaydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZmxleFNocmluaydcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmZsZXhTaHJpbmsgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mbGV4QmFzaXMnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBCYXNpc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZsZXhCYXNpcydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZmxleEJhc2lzJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZmxleEJhc2lzIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGV4SXRlbVBhbmVsOyIsImltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvUGFuZWxcIjtcclxuXHJcbmNvbnN0IEZvbnRQYW5lbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mb250U2l6ZSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUZXh0IFNpemVcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mb250U2l6ZSdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZm9udFNpemUnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mb250U2l6ZSB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZvbnRXZWlnaHQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVGV4dCBCb2xkbmVzc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZvbnRXZWlnaHQnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmZvbnRXZWlnaHQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mb250V2VpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZm9udEZhbWlseSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUZXh0IEZvbnRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmF0aXZlID0ge3RydWV9XHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZm9udEZhbWlseSdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZm9udEZhbWlseSdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmZvbnRGYW1pbHkgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdUaW1lcyBOZXcgUm9tYW4nPlxyXG4gICAgICAgICAgICAgICAgVGltZXMgTmV3IFJvbWFuXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ0NvdXJpZXIgTmV3Jz5cclxuICAgICAgICAgICAgICAgIENvdXJpZXIgTmV3XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ1JvYm90byc+XHJcbiAgICAgICAgICAgICAgICBSb2JvdG9cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnS29Ibyc+XHJcbiAgICAgICAgICAgICAgICBLb0hvXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLnRleHRBbGlnbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUZXh0IEFsaWduXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hdGl2ZSA9IHt0cnVlfVxyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLnRleHRBbGlnbidcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUudGV4dEFsaWduJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUudGV4dEFsaWduIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnbGVmdCc+XHJcbiAgICAgICAgICAgICAgICBMZWZ0XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICBDZW50ZXJcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgUmlnaHRcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnanVzdGlmeSc+XHJcbiAgICAgICAgICAgICAgICBKdXN0aWZ5XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb250UGFuZWw7XHJcbiIsImltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvUGFuZWxcIjtcclxuXHJcbmNvbnN0IFNpemluZ1BhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLndpZHRoJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFdpZHRoXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUud2lkdGgnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLndpZHRoJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUud2lkdGggfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5oZWlnaHQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgSGVpZ2h0XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuaGVpZ2h0J1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5oZWlnaHQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5oZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXppbmdQYW5lbDsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBTcGFjaW5nUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUucGFkZGluZydcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBQYWRkaW5nXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUucGFkZGluZydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUucGFkZGluZydcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLnBhZGRpbmcgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5tYXJnaW4nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgTWFyZ2luXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUubWFyZ2luJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5tYXJnaW4nXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5tYXJnaW4gfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwYWNpbmdQYW5lbDsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZS9MaW5rUGFuZWwnOyBcclxuaW1wb3J0IFNpemluZ1BhbmVsIGZyb20gXCIuLi8uLi9wYW5lbHMvU2l6aW5nUGFuZWxcIjtcclxuaW1wb3J0IEZvbnRQYW5lbCBmcm9tIFwiLi4vLi4vcGFuZWxzL0ZvbnRQYW5lbFwiO1xyXG5pbXBvcnQgU3BhY2luZ1BhbmVsIGZyb20gXCIuLi8uLi9wYW5lbHMvU3BhY2luZ1BhbmVsXCI7XHJcbmltcG9ydCBGbGV4SXRlbVBhbmVsIGZyb20gXCIuLi8uLi9wYW5lbHMvRmxleEl0ZW1QYW5lbFwiO1xyXG5pbXBvcnQge0NvbG9yUGFuZWx9IGZyb20gXCIuLi8uLi9wYW5lbHMvUGFsZXR0ZVBhbmVsXCI7XHJcbmltcG9ydCB1c2VEZW1vU3R5bGVyIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vU3R5bGVyXCI7XHJcblxyXG5jb25zdCBMaW5rUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdHlsZXIgPSB1c2VEZW1vU3R5bGVyKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdocmVmJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIExpbmsgdG9cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdocmVmJ1xyXG4gICAgICAgICAgICBpZCA9ICdocmVmJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuaHJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3RleHQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVGV4dFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3RleHQnXHJcbiAgICAgICAgICAgIGlkID0gJ3RleHQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy50ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fT5cclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2Rpc2FibGVkJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkID0ge2VkaXRvci5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7c3R5bGVyLnN0eWxlcy5mbGV4SXRlbSAmJiA8RmxleEl0ZW1QYW5lbCBpZCA9IHtpZH0gLz59XHJcbiAgICAgICAgPENvbG9yUGFuZWwgaWQgPSB7aWR9IC8+XHJcbiAgICAgICAgPFNwYWNpbmdQYW5lbCBpZCA9IHtpZH0gLz5cclxuICAgICAgICA8U2l6aW5nUGFuZWwgaWQgPSB7aWR9IC8+XHJcbiAgICAgICAgPEZvbnRQYW5lbCBpZCA9IHtpZH0gLz5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1BhbmVsOyIsImltcG9ydCB1c2VTdHlsZSBmcm9tICcuLi8uLi8uLi9wYW5lbHMvc3R5bGUvUGFuZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==