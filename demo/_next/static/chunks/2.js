(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./src/components/builder/panels/FlexContainerPanel.js":
/*!*************************************************************!*\
  !*** ./src/components/builder/panels/FlexContainerPanel.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/Panel */ "./src/components/builder/panels/style/Panel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\panels\\FlexContainerPanel.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var FlexContainerPanel = function FlexContainerPanel(_ref) {
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
        htmlFor: "style.display",
        className: classes.label,
        children: "Display"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outlined",
        "native": true,
        name: "style.display",
        id: "style.display",
        value: editor.props.style.display || '',
        onChange: editor.handleUpdate,
        className: classes.input,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "flex",
          children: "Flex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), editor.props.style.display === 'flex' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "style.flexDirection",
          className: classes.label,
          children: "Flex Direction"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "outlined",
          "native": true,
          name: "style.flexDirection",
          id: "style.flexDirection",
          value: editor.props.style.flexDirection || '',
          onChange: editor.handleUpdate,
          className: classes.input,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "row",
            children: "Row"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "column",
            children: "Column"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "style.alignItems",
          className: classes.label,
          children: "Flex Align Items"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "outlined",
          "native": true,
          name: "style.alignItems",
          id: "style.alignItems",
          value: editor.props.style.alignItems || '',
          onChange: editor.handleUpdate,
          className: classes.input,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "nowrap",
            children: "No Wrap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "wrap",
            children: "Wrap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "style.alignItems",
          className: classes.label,
          children: "Flex Align Items"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "outlined",
          "native": true,
          name: "style.alignItems",
          id: "style.alignItems",
          value: editor.props.style.alignItems || '',
          onChange: editor.handleUpdate,
          className: classes.input,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "flex-start",
            children: "Flex Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "center",
            children: "Flex Center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "flex-end",
            children: "Flex End"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "stretch",
            children: "Stretch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "style.justifyContent",
          className: classes.label,
          children: "Flex  Justify Content"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "outlined",
          "native": true,
          name: "style.justifyContent",
          id: "style.justifyContent",
          value: editor.props.style.justifyContent || '',
          onChange: editor.handleUpdate,
          className: classes.input,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "flex-start",
            children: "Flex Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "center",
            children: "Flex Center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "flex-end",
            children: "Flex End"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            value: "space-evenly",
            children: "Space Evenly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 51
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, _this);
};

_s(FlexContainerPanel, "A3+mkMkYiCmCAe2UewEAE70iItI=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__["default"], _style_Panel__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = FlexContainerPanel;
/* harmony default export */ __webpack_exports__["default"] = (FlexContainerPanel);

var _c;

$RefreshReg$(_c, "FlexContainerPanel");

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

/***/ "./src/components/builder/ui/section/SectionPanel.js":
/*!***********************************************************!*\
  !*** ./src/components/builder/ui/section/SectionPanel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _style_SectionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/SectionPanel */ "./src/components/builder/ui/section/style/SectionPanel.js");
/* harmony import */ var _panels_PalettePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/PalettePanel */ "./src/components/builder/panels/PalettePanel.js");
/* harmony import */ var _panels_SizingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/SizingPanel */ "./src/components/builder/panels/SizingPanel.js");
/* harmony import */ var _panels_PositionPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/PositionPanel */ "./src/components/builder/panels/PositionPanel.js");
/* harmony import */ var _panels_FlexContainerPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../panels/FlexContainerPanel */ "./src/components/builder/panels/FlexContainerPanel.js");
/* harmony import */ var _panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../panels/FlexItemPanel */ "./src/components/builder/panels/FlexItemPanel.js");


var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\section\\SectionPanel.js",
    _this = undefined,
    _s = $RefreshSig$();












var SectionPanel = function SectionPanel(_ref) {
  _s();

  var id = _ref.id;
  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__["default"])({
    id: id
  });
  var styler = Object(_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id
  });
  var classes = Object(_style_SectionPanel__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_PalettePanel__WEBPACK_IMPORTED_MODULE_6__["BackgroundPanel"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "style.backgroundUrl",
        className: classes.label,
        children: "Background URL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "outlined",
        name: "style.backgroundUrl",
        id: "style.backgroundUrl",
        value: editor.props.style.backgroundUrl || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "style.backgroundPosition",
        className: classes.label,
        children: "Background Position"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "outlined",
        name: "style.backgroundPosition",
        id: "style.backgroundPosition",
        value: editor.props.style.backgroundPosition || '',
        onChange: editor.handleUpdate,
        className: classes.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "style.backgroundSize",
        className: classes.label,
        children: "Background Size"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "native": true,
        variant: "outlined",
        name: "style.backgroundSize",
        value: editor.props.style.backgroundSize || '',
        onChange: editor.handleUpdate,
        className: classes.input,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "cover",
          children: "Cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "auto",
          children: "Auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this), styler.styles.flexItem && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_FlexItemPanel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 36
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_FlexContainerPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_SizingPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_panels_PositionPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, _this);
};

_s(SectionPanel, "IVVmjF1vhoqUsjYrXJLDH+ihIh8=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_4__["default"], _style_SectionPanel__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = SectionPanel;
/* harmony default export */ __webpack_exports__["default"] = (SectionPanel);

var _c;

$RefreshReg$(_c, "SectionPanel");

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

/***/ "./src/components/builder/ui/section/style/SectionPanel.js":
/*!*****************************************************************!*\
  !*** ./src/components/builder/ui/section/style/SectionPanel.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _panels_style_Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../panels/style/Panel */ "./src/components/builder/panels/style/Panel.js");

/* harmony default export */ __webpack_exports__["default"] = (_panels_style_Panel__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci9wYW5lbHMvRmxleENvbnRhaW5lclBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3BhbmVscy9GbGV4SXRlbVBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3BhbmVscy9Qb3NpdGlvblBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3BhbmVscy9TaXppbmdQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9zZWN0aW9uL1NlY3Rpb25QYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9idXR0b24vc3R5bGUvQnV0dG9uUGFuZWwuanMiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lclBhbmVsIiwiaWQiLCJwcm9wcyIsImVkaXRvciIsInVzZURlbW9FZGl0b3IiLCJjbGFzc2VzIiwidXNlU3R5bGUiLCJmaWVsZCIsImxhYmVsIiwic3R5bGUiLCJkaXNwbGF5IiwiaGFuZGxlVXBkYXRlIiwiaW5wdXQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiRmxleEl0ZW1QYW5lbCIsImZsZXhHcm93IiwiZmxleFNocmluayIsImZsZXhCYXNpcyIsIlBvc2l0aW9uUGFuZWwiLCJ0b3AiLCJsZWZ0IiwiU2l6aW5nUGFuZWwiLCJ3aWR0aCIsImhlaWdodCIsIlNlY3Rpb25QYW5lbCIsInN0eWxlciIsInVzZURlbW9TdHlsZXIiLCJiYWNrZ3JvdW5kVXJsIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJzdHlsZXMiLCJmbGV4SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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OztHQUFNeUIsWTtVQUdhdEIsNEQsRUFHQXdCLDRELEVBR0N0QiwyRDs7O0tBVGRvQixZO0FBZ0ZTQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFFZXBCLDBIQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGbGV4Q29udGFpbmVyUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZGlzcGxheSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBEaXNwbGF5XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hdGl2ZSA9IHt0cnVlfVxyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmRpc3BsYXknXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmRpc3BsYXknXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5kaXNwbGF5IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnJyAvPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdmbGV4Jz5cclxuICAgICAgICAgICAgICAgIEZsZXhcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtlZGl0b3IucHJvcHMuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuZmxleERpcmVjdGlvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBGbGV4IERpcmVjdGlvblxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYXRpdmUgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mbGV4RGlyZWN0aW9uJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5mbGV4RGlyZWN0aW9uJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZmxleERpcmVjdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ3Jvdyc+XHJcbiAgICAgICAgICAgICAgICBSb3dcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIENvbHVtblxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmFsaWduSXRlbXMnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBBbGlnbiBJdGVtc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYXRpdmUgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5hbGlnbkl0ZW1zJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5hbGlnbkl0ZW1zJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuYWxpZ25JdGVtcyB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ25vd3JhcCc+XHJcbiAgICAgICAgICAgICAgICBObyBXcmFwXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ3dyYXAnPlxyXG4gICAgICAgICAgICAgICAgV3JhcFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmFsaWduSXRlbXMnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBBbGlnbiBJdGVtc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYXRpdmUgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5hbGlnbkl0ZW1zJ1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5hbGlnbkl0ZW1zJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuYWxpZ25JdGVtcyB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ2ZsZXgtc3RhcnQnPlxyXG4gICAgICAgICAgICAgICAgRmxleCBTdGFydFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgRmxleCBDZW50ZXJcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnZmxleC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgRmxleCBFbmRcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnc3RyZXRjaCc+XHJcbiAgICAgICAgICAgICAgICBTdHJldGNoXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuanVzdGlmeUNvbnRlbnQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCAgSnVzdGlmeSBDb250ZW50XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hdGl2ZSA9IHt0cnVlfVxyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmp1c3RpZnlDb250ZW50J1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5qdXN0aWZ5Q29udGVudCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmp1c3RpZnlDb250ZW50IHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnZmxleC1zdGFydCc+XHJcbiAgICAgICAgICAgICAgICBGbGV4IFN0YXJ0XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICBGbGV4IENlbnRlclxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdmbGV4LWVuZCc+XHJcbiAgICAgICAgICAgICAgICBGbGV4IEVuZFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdzcGFjZS1ldmVubHknPlxyXG4gICAgICAgICAgICAgICAgU3BhY2UgRXZlbmx5XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn1cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxleENvbnRhaW5lclBhbmVsOyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHVzZURlbW9FZGl0b3IgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3JcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL1BhbmVsXCI7XHJcblxyXG5jb25zdCBGbGV4SXRlbVBhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZsZXhHcm93J1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXggR3Jvd1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICB0eXBlID0gJ251bWJlcidcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5mbGV4R3JvdydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZmxleEdyb3cnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5mbGV4R3JvdyB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmZsZXhTaHJpbmsnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBTaHJpbmtcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuZmxleFNocmluaydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZmxleFNocmluaydcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmZsZXhTaHJpbmsgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5mbGV4QmFzaXMnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRmxleCBCYXNpc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmZsZXhCYXNpcydcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUuZmxleEJhc2lzJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUuZmxleEJhc2lzIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGV4SXRlbVBhbmVsOyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvUGFuZWxcIjtcclxuXHJcbmNvbnN0IFBvc2l0aW9uUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUudG9wJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFRvcFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLnRvcCdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUudG9wJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUudG9wIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUubGVmdCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBMZWZ0XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUubGVmdCdcclxuICAgICAgICAgICAgaWQgPSAnc3R5bGUubGVmdCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmxlZnQgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvblBhbmVsOyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvUGFuZWxcIjtcclxuXHJcbmNvbnN0IFNpemluZ1BhbmVsID0gKHtcclxuICAgIGlkLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLndpZHRoJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFdpZHRoXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUud2lkdGgnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLndpZHRoJ1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMuc3R5bGUud2lkdGggfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdzdHlsZS5oZWlnaHQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgSGVpZ2h0XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnc3R5bGUuaGVpZ2h0J1xyXG4gICAgICAgICAgICBpZCA9ICdzdHlsZS5oZWlnaHQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5oZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXppbmdQYW5lbDsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yJ1xyXG5pbXBvcnQgdXNlRGVtb1N0eWxlciBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vU3R5bGVyJztcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUvU2VjdGlvblBhbmVsJztcclxuaW1wb3J0IHtCYWNrZ3JvdW5kUGFuZWx9IGZyb20gJy4uLy4uL3BhbmVscy9QYWxldHRlUGFuZWwnXHJcbmltcG9ydCBTaXppbmdQYW5lbCBmcm9tICcuLi8uLi9wYW5lbHMvU2l6aW5nUGFuZWwnXHJcbmltcG9ydCBQb3NpdGlvblBhbmVsIGZyb20gJy4uLy4uL3BhbmVscy9Qb3NpdGlvblBhbmVsJztcclxuaW1wb3J0IEZsZXhDb250YWluZXJQYW5lbCBmcm9tICcuLi8uLi9wYW5lbHMvRmxleENvbnRhaW5lclBhbmVsJztcclxuaW1wb3J0IEZsZXhJdGVtUGFuZWwgZnJvbSBcIi4uLy4uL3BhbmVscy9GbGV4SXRlbVBhbmVsXCI7XHJcblxyXG5jb25zdCBTZWN0aW9uUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdHlsZXIgPSB1c2VEZW1vU3R5bGVyKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgICAgPEJhY2tncm91bmRQYW5lbCBpZCA9IHtpZH0gLz4gIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuYmFja2dyb3VuZFVybCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBCYWNrZ3JvdW5kIFVSTFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ3N0eWxlLmJhY2tncm91bmRVcmwnXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmJhY2tncm91bmRVcmwnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zdHlsZS5iYWNrZ3JvdW5kVXJsIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEJhY2tncm91bmQgUG9zaXRpb25cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24nXHJcbiAgICAgICAgICAgIGlkID0gJ3N0eWxlLmJhY2tncm91bmRQb3NpdGlvbidcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ3N0eWxlLmJhY2tncm91bmRTaXplJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEJhY2tncm91bmQgU2l6ZVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBuYXRpdmUgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgbmFtZSA9ICdzdHlsZS5iYWNrZ3JvdW5kU2l6ZSdcclxuICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnN0eWxlLmJhY2tncm91bmRTaXplIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnY292ZXInPlxyXG4gICAgICAgICAgICAgICAgQ292ZXJcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnYXV0byc+XHJcbiAgICAgICAgICAgICAgICBBdXRvXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7c3R5bGVyLnN0eWxlcy5mbGV4SXRlbSAmJiA8RmxleEl0ZW1QYW5lbCBpZCA9IHtpZH0gLz59XHJcbiAgICAgICAgPEZsZXhDb250YWluZXJQYW5lbCBpZCA9IHtpZH0gLz4gICAgICAgIFxyXG4gICAgICAgIDxTaXppbmdQYW5lbCBpZCA9IHtpZH0gLz5cclxuICAgICAgICA8UG9zaXRpb25QYW5lbCBpZCA9IHtpZH0gLz5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblBhbmVsOyIsImltcG9ydCB1c2VTdHlsZSBmcm9tICcuLi8uLi8uLi9wYW5lbHMvc3R5bGUvUGFuZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==