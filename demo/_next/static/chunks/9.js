(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./src/components/builder/ui/grid/GridPanel.js":
/*!*****************************************************!*\
  !*** ./src/components/builder/ui/grid/GridPanel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_GridPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/GridPanel */ "./src/components/builder/ui/grid/style/GridPanel.js");


var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\grid\\GridPanel.js",
    _this = undefined,
    _s = $RefreshSig$();








var GridPanel = function GridPanel(_ref) {
  _s();

  var id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('xs'),
      breakpoint = _useState[0],
      setBreakpoint = _useState[1];

  var handleBreakpoint = function handleBreakpoint(event) {
    return setBreakpoint(event.target.value);
  };

  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_5__["default"])({
    id: id
  });
  var classes = Object(_style_GridPanel__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "container",
        className: classes.label,
        children: "Container?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classes.input,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "container",
          id: "container",
          checked: editor.props.container,
          onChange: editor.handleUpdate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "item",
        className: classes.label,
        children: "Item?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classes.input,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "item",
          id: "item",
          checked: editor.props.item,
          onChange: editor.handleUpdate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), editor.props.item && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "xs",
          className: classes.label,
          children: "Extra Small Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          type: "number",
          min: 0,
          max: 12,
          name: "xs",
          id: "xs",
          value: editor.props.xs || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "sm",
          className: classes.label,
          children: "Small Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          type: "number",
          min: 0,
          max: 12,
          name: "sm",
          id: "sm",
          value: editor.props.sm || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "md",
          className: classes.label,
          children: "Medium Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          type: "number",
          min: 0,
          max: 12,
          name: "md",
          id: "md",
          value: editor.props.md || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "lg",
          className: classes.label,
          children: "Large Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          type: "number",
          min: 0,
          max: 12,
          name: "lg",
          id: "lg",
          value: editor.props.lg || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "xl",
          className: classes.label,
          children: "Extra Large Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          type: "number",
          min: 0,
          max: 12,
          name: "xl",
          id: "xl",
          value: editor.props.xl || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 31
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.field,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "breakpoint",
        className: classes.label,
        children: "Breakpoint Styling"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "native": true,
        variant: "outlined",
        name: "breakpoint",
        value: breakpoint,
        onChange: handleBreakpoint,
        className: classes.input,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "xs",
          children: "Extra Small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "sm",
          children: "Small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "md",
          children: "Medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "lg",
          children: "Large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "xl",
          children: "Extra Large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }, _this), Boolean(breakpoint) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "style.".concat(breakpoint, ".width"),
          className: classes.label,
          children: "Width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          name: "style.".concat(breakpoint, ".width"),
          id: "style.".concat(breakpoint, ".width"),
          value: editor.props.style[breakpoint] && editor.props.style[breakpoint].width || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.field,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "style.".concat(breakpoint, ".height"),
          className: classes.label,
          children: "Height"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "outlined",
          name: "style.".concat(breakpoint, ".height"),
          id: "style.".concat(breakpoint, ".height"),
          value: editor.props.style[breakpoint] && editor.props.style[breakpoint].height || '',
          onChange: editor.handleUpdate,
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, _this);
};

_s(GridPanel, "95ajeWXT1hP90dmzzAR/iOWAMLU=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_5__["default"], _style_GridPanel__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = GridPanel;
/* harmony default export */ __webpack_exports__["default"] = (GridPanel);

var _c;

$RefreshReg$(_c, "GridPanel");

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

/***/ "./src/components/builder/ui/grid/style/GridPanel.js":
/*!***********************************************************!*\
  !*** ./src/components/builder/ui/grid/style/GridPanel.js ***!
  \***********************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9ncmlkL0dyaWRQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9idXR0b24vc3R5bGUvQnV0dG9uUGFuZWwuanMiXSwibmFtZXMiOlsiR3JpZFBhbmVsIiwiaWQiLCJ1c2VTdGF0ZSIsImJyZWFrcG9pbnQiLCJzZXRCcmVha3BvaW50IiwiaGFuZGxlQnJlYWtwb2ludCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlZGl0b3IiLCJ1c2VEZW1vRWRpdG9yIiwiY2xhc3NlcyIsInVzZVN0eWxlIiwiZmllbGQiLCJsYWJlbCIsImlucHV0IiwicHJvcHMiLCJjb250YWluZXIiLCJoYW5kbGVVcGRhdGUiLCJpdGVtIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIkJvb2xlYW4iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUVaO0FBQUE7O0FBQUEsTUFERkMsRUFDRSxRQURGQSxFQUNFOztBQUFBLGtCQUNrQ0Msc0RBQVEsQ0FBQyxJQUFELENBRDFDO0FBQUEsTUFDS0MsVUFETDtBQUFBLE1BQ2lCQyxhQURqQjs7QUFFRixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEtBQUs7QUFBQSxXQUMxQkYsYUFBYSxDQUFDRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQURhO0FBQUEsR0FBOUI7O0FBR0EsTUFBTUMsTUFBTSxHQUFHQyxvRUFBYSxDQUFDO0FBQ3pCVCxNQUFFLEVBQUVBO0FBRHFCLEdBQUQsQ0FBNUI7QUFHQSxNQUFNVSxPQUFPLEdBQUdDLGdFQUFRLEVBQXhCO0FBQ0Esc0JBQU87QUFBQSw0QkFFSDtBQUFLLGVB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QUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSxnQ0FDQTtBQUNJLGlCQUFPLGtCQUFhVixVQUFiLFlBRFg7QUFFSSxtQkFBUyxFQUFJUSxPQUFPLENBQUNHLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBT0EscUVBQUMsbUVBQUQ7QUFDSSxpQkFBTyxFQUFHLFVBRGQ7QUFFSSxjQUFJLGtCQUFhWCxVQUFiLFlBRlI7QUFHSSxZQUFFLGtCQUFhQSxVQUFiLFlBSE47QUFJSSxlQUFLLEVBQ0RNLE1BQU0sQ0FBQ08sS0FBUCxDQUFhVSxLQUFiLENBQW1CdkIsVUFBbkIsS0FDQU0sTUFBTSxDQUFDTyxLQUFQLENBQWFVLEtBQWIsQ0FBbUJ2QixVQUFuQixFQUErQnlCLE1BRC9CLElBRUEsRUFQUjtBQVNJLGtCQUFRLEVBQUluQixNQUFNLENBQUNTLFlBVHZCO0FBVUksbUJBQVMsRUFBSVAsT0FBTyxDQUFDSTtBQVZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUtyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQThOSCxDQXpPRDs7R0FBTWYsUztVQU9hVSw0RCxFQUdDRSx3RDs7O0tBVmRaLFM7QUEyT1NBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBBO0FBQUE7QUFBQTtBQUVlWSwwSEFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yJ1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZS9HcmlkUGFuZWwnO1xyXG5cclxuY29uc3QgR3JpZFBhbmVsID0gKHtcclxuICAgIGlkLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbYnJlYWtwb2ludCwgc2V0QnJlYWtwb2ludF0gPSB1c2VTdGF0ZSgneHMnKTtcclxuICAgIGNvbnN0IGhhbmRsZUJyZWFrcG9pbnQgPSBldmVudCA9PiAoXHJcbiAgICAgICAgc2V0QnJlYWtwb2ludChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICApO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlRGVtb0VkaXRvcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdjb250YWluZXInXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgQ29udGFpbmVyP1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9PlxyXG4gICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIG5hbWUgPSAnY29udGFpbmVyJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnY29udGFpbmVyJ1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IHtlZGl0b3IucHJvcHMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvciA9ICdpdGVtJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEl0ZW0/XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdpdGVtJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnaXRlbSdcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB7ZWRpdG9yLnByb3BzLml0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2VkaXRvci5wcm9wcy5pdGVtICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yID0gJ3hzJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4dHJhIFNtYWxsIFNpemVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgbWluID0gezB9XHJcbiAgICAgICAgICAgICAgICBtYXggPSB7MTJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gJ3hzJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAneHMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMueHMgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgIGh0bWxGb3IgPSAnc20nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU21hbGwgU2l6ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBtaW4gPSB7MH1cclxuICAgICAgICAgICAgICAgIG1heCA9IHsxMn1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSAnc20nXHJcbiAgICAgICAgICAgICAgICBpZCA9ICdzbSdcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5zbSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvciA9ICdtZCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNZWRpdW0gU2l6ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBtaW4gPSB7MH1cclxuICAgICAgICAgICAgICAgIG1heCA9IHsxMn1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSAnbWQnXHJcbiAgICAgICAgICAgICAgICBpZCA9ICdtZCdcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy5tZCB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvciA9ICdsZydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMYXJnZSBTaXplXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ251bWJlcidcclxuICAgICAgICAgICAgICAgIG1pbiA9IHswfVxyXG4gICAgICAgICAgICAgICAgbWF4ID0gezEyfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdsZydcclxuICAgICAgICAgICAgICAgIGlkID0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLmxnIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yID0gJ3hsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4dHJhIExhcmdlIFNpemVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgbWluID0gezB9XHJcbiAgICAgICAgICAgICAgICBtYXggPSB7MTJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gJ3hsJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAneGwnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMueGwgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ2JyZWFrcG9pbnQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgQnJlYWtwb2ludCBTdHlsaW5nXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG5hdGl2ZSA9IHt0cnVlfVxyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBuYW1lID0gJ2JyZWFrcG9pbnQnXHJcbiAgICAgICAgICAgIHZhbHVlID0ge2JyZWFrcG9pbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUJyZWFrcG9pbnR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICcnIC8+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAneHMnPlxyXG4gICAgICAgICAgICAgICAgRXh0cmEgU21hbGxcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnc20nPlxyXG4gICAgICAgICAgICAgICAgU21hbGxcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnbWQnPlxyXG4gICAgICAgICAgICAgICAgTWVkaXVtXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ2xnJz5cclxuICAgICAgICAgICAgICAgIExhcmdlXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJ3hsJz5cclxuICAgICAgICAgICAgICAgIEV4dHJhIExhcmdlXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Qm9vbGVhbihicmVha3BvaW50KSAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvciA9IHtgc3R5bGUuJHticmVha3BvaW50fS53aWR0aGB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgV2lkdGhcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB7YHN0eWxlLiR7YnJlYWtwb2ludH0ud2lkdGhgfVxyXG4gICAgICAgICAgICAgICAgaWQgPSB7YHN0eWxlLiR7YnJlYWtwb2ludH0ud2lkdGhgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnByb3BzLnN0eWxlW2JyZWFrcG9pbnRdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnByb3BzLnN0eWxlW2JyZWFrcG9pbnRdLndpZHRoIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvciA9IHtgc3R5bGUuJHticmVha3BvaW50fS5oZWlnaHRgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEhlaWdodFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtgc3R5bGUuJHticmVha3BvaW50fS5oZWlnaHRgfVxyXG4gICAgICAgICAgICAgICAgaWQgPSB7YHN0eWxlLiR7YnJlYWtwb2ludH0uaGVpZ2h0YH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5wcm9wcy5zdHlsZVticmVha3BvaW50XSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5wcm9wcy5zdHlsZVticmVha3BvaW50XS5oZWlnaHQgfHxcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD59XHJcbiAgICAgICAgXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRQYW5lbDsiLCJpbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi4vLi4vLi4vcGFuZWxzL3N0eWxlL1BhbmVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlOyJdLCJzb3VyY2VSb290IjoiIn0=