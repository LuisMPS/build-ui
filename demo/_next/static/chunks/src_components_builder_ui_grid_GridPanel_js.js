(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_builder_ui_grid_GridPanel_js"],{

/***/ "./src/components/builder/ui/grid/GridPanel.js":
/*!*****************************************************!*\
  !*** ./src/components/builder/ui/grid/GridPanel.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _style_GridPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/GridPanel */ "./src/components/builder/ui/grid/style/GridPanel.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\grid\\GridPanel.js",
    _this = undefined,
    _s = $RefreshSig$();








var GridPanel = function GridPanel(_ref) {
  _s();

  var id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('xs'),
      breakpoint = _useState[0],
      setBreakpoint = _useState[1];

  var handleBreakpoint = function handleBreakpoint(event) {
    return setBreakpoint(event.target.value);
  };

  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_2__.default)({
    id: id
  });
  var classes = (0,_style_GridPanel__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "container",
        className: classes.label,
        children: "Container?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: classes.input,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "item",
        className: classes.label,
        children: "Item?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: classes.input,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__.default, {
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
    }, _this), editor.props.item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "xs",
          className: classes.label,
          children: "Extra Small Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "sm",
          className: classes.label,
          children: "Small Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "md",
          className: classes.label,
          children: "Medium Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "lg",
          className: classes.label,
          children: "Large Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "xl",
          className: classes.label,
          children: "Extra Large Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.field,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "breakpoint",
        className: classes.label,
        children: "Breakpoint Styling"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__.default, {
        "native": true,
        variant: "outlined",
        name: "breakpoint",
        value: breakpoint,
        onChange: handleBreakpoint,
        className: classes.input,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "xs",
          children: "Extra Small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "sm",
          children: "Small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "md",
          children: "Medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "lg",
          children: "Large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
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
    }, _this), Boolean(breakpoint) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "style.".concat(breakpoint, ".width"),
          className: classes.label,
          children: "Width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.field,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "style.".concat(breakpoint, ".height"),
          className: classes.label,
          children: "Height"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_2__.default, _style_GridPanel__WEBPACK_IMPORTED_MODULE_3__.default];
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

/***/ "./src/components/builder/ui/grid/style/GridPanel.js":
/*!***********************************************************!*\
  !*** ./src/components/builder/ui/grid/style/GridPanel.js ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9ncmlkL0dyaWRQYW5lbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9ncmlkL3N0eWxlL0dyaWRQYW5lbC5qcyJdLCJuYW1lcyI6WyJHcmlkUGFuZWwiLCJpZCIsInVzZVN0YXRlIiwiYnJlYWtwb2ludCIsInNldEJyZWFrcG9pbnQiLCJoYW5kbGVCcmVha3BvaW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVkaXRvciIsInVzZURlbW9FZGl0b3IiLCJjbGFzc2VzIiwidXNlU3R5bGUiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJwcm9wcyIsImNvbnRhaW5lciIsImhhbmRsZVVwZGF0ZSIsIml0ZW0iLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiQm9vbGVhbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BRVo7QUFBQTs7QUFBQSxNQURGQyxFQUNFLFFBREZBLEVBQ0U7O0FBQUEsa0JBQ2tDQywrQ0FBUSxDQUFDLElBQUQsQ0FEMUM7QUFBQSxNQUNLQyxVQURMO0FBQUEsTUFDaUJDLGFBRGpCOztBQUVGLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsS0FBSztBQUFBLFdBQzFCRixhQUFhLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRGE7QUFBQSxHQUE5Qjs7QUFHQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFhLENBQUM7QUFDekJULE1BQUUsRUFBRUE7QUFEcUIsR0FBRCxDQUE1QjtBQUdBLE1BQU1VLE9BQU8sR0FBR0MseURBQVEsRUFBeEI7QUFDQSxzQkFBTztBQUFBLDRCQUVIO0FBQUssZUFBUyxFQUFJRCxPQUFPLENBQUNFLEtBQTFCO0FBQUEsOEJBQ0E7QUFDSSxlQUFPLEVBQUcsV0FEZDtBQUVJLGlCQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQU9BO0FBQU0saUJBQVMsRUFBSUgsT0FBTyxDQUFDSSxLQUEzQjtBQUFBLCtCQUNJLDhEQUFDLCtEQUFEO0FBQ0ksY0FBSSxFQUFHLFdBRFg7QUFFSSxZQUFFLEVBQUcsV0FGVDtBQUdJLGlCQUFPLEVBQUlOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhQyxTQUg1QjtBQUlJLGtCQUFRLEVBQUlSLE1BQU0sQ0FBQ1M7QUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRyxlQW1CSDtBQUFLLGVBQVMsRUFBSVAsT0FBTyxDQUFDRSxLQUExQjtBQUFBLDhCQUNBO0FBQ0ksZUFBTyxFQUFHLE1BRGQ7QUFFSSxpQkFBUyxFQUFJRixPQUFPLENBQUNHLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFPQTtBQUFNLGlCQUFTLEVBQUlILE9BQU8sQ0FBQ0ksS0FBM0I7QUFBQSwrQkFDSSw4REFBQywrREFBRDtBQUNJLGNBQUksRUFBRyxNQURYO0FBRUksWUFBRSxFQUFHLE1BRlQ7QUFHSSxpQkFBTyxFQUFJTixNQUFNLENBQUNPLEtBQVAsQ0FBYUcsSUFINUI7QUFJSSxrQkFBUSxFQUFJVixNQUFNLENBQUNTO0FBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJHLEVBb0NGVCxNQUFNLENBQUNPLEtBQVAsQ0FBYUcsSUFBYixpQkFBcUIsOERBQUMsdURBQUQ7QUFBQSw4QkFFbEI7QUFBSyxpQkFBUyxFQUFJUixPQUFPLENBQUNFLEtBQTFCO0FBQUEsZ0NBQ0E7QUFDSSxpQkFBTyxFQUFHLElBRGQ7QUFFSSxtQkFBUyxFQUFJRixPQUFPLENBQUNHLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBT0EsOERBQUMsZ0VBQUQ7QUFDSSxpQkFBTyxFQUFHLFVBRGQ7QUFFSSxjQUFJLEVBQUcsUUFGWDtBQUdJLGFBQUcsRUFBSSxDQUhYO0FBSUksYUFBRyxFQUFJLEVBSlg7QUFLSSxjQUFJLEVBQUcsSUFMWDtBQU1JLFlBQUUsRUFBRyxJQU5UO0FBT0ksZUFBSyxFQUFJTCxNQUFNLENBQUNPLEtBQVAsQ0FBYUksRUFBYixJQUFtQixFQVBoQztBQVFJLGtCQUFRLEVBQUlYLE1BQU0sQ0FBQ1MsWUFSdkI7QUFTSSxtQkFBUyxFQUFJUCxPQUFPLENBQUNJO0FBVHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmtCLGVBc0JsQjtBQUFLLGlCQUFTLEVBQUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSxnQ0FDQTtBQUNJLGlCQUFPLEVBQUcsSUFEZDtBQUVJLG1CQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFPQSw4REFBQyxnRUFBRDtBQUNJLGlCQUFPLEVBQUcsVUFEZDtBQUVJLGNBQUksRUFBRyxRQUZYO0FBR0ksYUFBRyxFQUFJLENBSFg7QUFJSSxhQUFHLEVBQUksRUFKWDtBQUtJLGNBQUksRUFBRyxJQUxYO0FBTUksWUFBRSxFQUFHLElBTlQ7QUFPSSxlQUFLLEVBQUlMLE1BQU0sQ0FBQ08sS0FBUCxDQUFhSyxFQUFiLElBQW1CLEVBUGhDO0FBUUksa0JBQVEsRUFBSVosTUFBTSxDQUFDUyxZQVJ2QjtBQVNJLG1CQUFTLEVBQUlQLE9BQU8sQ0FBQ0k7QUFUekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QmtCLGVBMENsQjtBQUFLLGlCQUFTLEVBQUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSxnQ0FDQTtBQUNJLGlCQUFPLEVBQUcsSUFEZDtBQUVJLG1CQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFPQSw4REFBQyxnRUFBRDtBQUNJLGlCQUFPLEVBQUcsVUFEZDtBQUVJLGNBQUksRUFBRyxRQUZYO0FBR0ksYUFBRyxFQUFJLENBSFg7QUFJSSxhQUFHLEVBQUksRUFKWDtBQUtJLGNBQUksRUFBRyxJQUxYO0FBTUksWUFBRSxFQUFHLElBTlQ7QUFPSSxlQUFLLEVBQUlMLE1BQU0sQ0FBQ08sS0FBUCxDQUFhTSxFQUFiLElBQW1CLEVBUGhDO0FBUUksa0JBQVEsRUFBSWIsTUFBTSxDQUFDUyxZQVJ2QjtBQVNJLG1CQUFTLEVBQUlQLE9BQU8sQ0FBQ0k7QUFUekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ2tCLGVBOERsQjtBQUFLLGlCQUFTLEVBQUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSxnQ0FDQTtBQUNJLGlCQUFPLEVBQUcsSUFEZDtBQUVJLG1CQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFPQSw4REFBQyxnRUFBRDtBQUNJLGlCQUFPLEVBQUcsVUFEZDtBQUVJLGNBQUksRUFBRyxRQUZYO0FBR0ksYUFBRyxFQUFJLENBSFg7QUFJSSxhQUFHLEVBQUksRUFKWDtBQUtJLGNBQUksRUFBRyxJQUxYO0FBTUksWUFBRSxFQUFHLElBTlQ7QUFPSSxlQUFLLEVBQUlMLE1BQU0sQ0FBQ08sS0FBUCxDQUFhTyxFQUFiLElBQW1CLEVBUGhDO0FBUUksa0JBQVEsRUFBSWQsTUFBTSxDQUFDUyxZQVJ2QjtBQVNJLG1CQUFTLEVBQUlQLE9BQU8sQ0FBQ0k7QUFUekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5RGtCLGVBa0ZsQjtBQUFLLGlCQUFTLEVBQUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSxnQ0FDQTtBQUNJLGlCQUFPLEVBQUcsSUFEZDtBQUVJLG1CQUFTLEVBQUlGLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFPQSw4REFBQyxnRUFBRDtBQUNJLGlCQUFPLEVBQUcsVUFEZDtBQUVJLGNBQUksRUFBRyxRQUZYO0FBR0ksYUFBRyxFQUFJLENBSFg7QUFJSSxhQUFHLEVBQUksRUFKWDtBQUtJLGNBQUksRUFBRyxJQUxYO0FBTUksWUFBRSxFQUFHLElBTlQ7QUFPSSxlQUFLLEVBQUlMLE1BQU0sQ0FBQ08sS0FBUCxDQUFhUSxFQUFiLElBQW1CLEVBUGhDO0FBUUksa0JBQVEsRUFBSWYsTUFBTSxDQUFDUyxZQVJ2QjtBQVNJLG1CQUFTLEVBQUlQLE9BQU8sQ0FBQ0k7QUFUekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsRmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDbkIsZUE0SUg7QUFBSyxlQUFTLEVBQUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSw4QkFDQTtBQUNJLGVBQU8sRUFBRyxZQURkO0FBRUksaUJBQVMsRUFBSUYsT0FBTyxDQUFDRyxLQUZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBT0EsOERBQUMsNkRBQUQ7QUFDSSxrQkFBVSxJQURkO0FBRUksZUFBTyxFQUFHLFVBRmQ7QUFHSSxZQUFJLEVBQUcsWUFIWDtBQUlJLGFBQUssRUFBSVgsVUFKYjtBQUtJLGdCQUFRLEVBQUlFLGdCQUxoQjtBQU1JLGlCQUFTLEVBQUlNLE9BQU8sQ0FBQ0ksS0FOekI7QUFBQSxnQ0FRSTtBQUFRLGVBQUssRUFBRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBU0k7QUFBUSxlQUFLLEVBQUcsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFZSTtBQUFRLGVBQUssRUFBRyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQWVJO0FBQVEsZUFBSyxFQUFHLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKLGVBa0JJO0FBQVEsZUFBSyxFQUFHLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSixlQXFCSTtBQUFRLGVBQUssRUFBRyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUlHLEVBOEtGVSxPQUFPLENBQUN0QixVQUFELENBQVAsaUJBQXVCLDhEQUFDLHVEQUFEO0FBQUEsOEJBRXBCO0FBQUssaUJBQVMsRUFBSVEsT0FBTyxDQUFDRSxLQUExQjtBQUFBLGdDQUNBO0FBQ0ksaUJBQU8sa0JBQWFWLFVBQWIsV0FEWDtBQUVJLG1CQUFTLEVBQUlRLE9BQU8sQ0FBQ0csS0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFPQSw4REFBQyxnRUFBRDtBQUNJLGlCQUFPLEVBQUcsVUFEZDtBQUVJLGNBQUksa0JBQWFYLFVBQWIsV0FGUjtBQUdJLFlBQUUsa0JBQWFBLFVBQWIsV0FITjtBQUlJLGVBQUssRUFDRE0sTUFBTSxDQUFDTyxLQUFQLENBQWFVLEtBQWIsQ0FBbUJ2QixVQUFuQixLQUNBTSxNQUFNLENBQUNPLEtBQVAsQ0FBYVUsS0FBYixDQUFtQnZCLFVBQW5CLEVBQStCd0IsS0FEL0IsSUFFQSxFQVBSO0FBU0ksa0JBQVEsRUFBSWxCLE1BQU0sQ0FBQ1MsWUFUdkI7QUFVSSxtQkFBUyxFQUFJUCxPQUFPLENBQUNJO0FBVnpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRm9CLGVBdUJwQjtBQUFLLGlCQUFTLEVBQUlKLE9BQU8sQ0FBQ0UsS0FBMUI7QUFBQSxnQ0FDQTtBQUNJLGlCQUFPLGtCQUFhVixVQUFiLFlBRFg7QUFFSSxtQkFBUyxFQUFJUSxPQUFPLENBQUNHLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBT0EsOERBQUMsZ0VBQUQ7QUFDSSxpQkFBTyxFQUFHLFVBRGQ7QUFFSSxjQUFJLGtCQUFhWCxVQUFiLFlBRlI7QUFHSSxZQUFFLGtCQUFhQSxVQUFiLFlBSE47QUFJSSxlQUFLLEVBQ0RNLE1BQU0sQ0FBQ08sS0FBUCxDQUFhVSxLQUFiLENBQW1CdkIsVUFBbkIsS0FDQU0sTUFBTSxDQUFDTyxLQUFQLENBQWFVLEtBQWIsQ0FBbUJ2QixVQUFuQixFQUErQnlCLE1BRC9CLElBRUEsRUFQUjtBQVNJLGtCQUFRLEVBQUluQixNQUFNLENBQUNTLFlBVHZCO0FBVUksbUJBQVMsRUFBSVAsT0FBTyxDQUFDSTtBQVZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUtyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQThOSCxDQXpPRDs7R0FBTWYsUztVQU9hVSx5RCxFQUdDRSxxRDs7O0tBVmRaLFM7QUEyT04sK0RBQWVBLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBBO0FBRUEsK0RBQWVZLHdEQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3Mvc3JjX2NvbXBvbmVudHNfYnVpbGRlcl91aV9ncmlkX0dyaWRQYW5lbF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZURlbW9FZGl0b3InXHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlL0dyaWRQYW5lbCc7XHJcblxyXG5jb25zdCBHcmlkUGFuZWwgPSAoe1xyXG4gICAgaWQsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFticmVha3BvaW50LCBzZXRCcmVha3BvaW50XSA9IHVzZVN0YXRlKCd4cycpO1xyXG4gICAgY29uc3QgaGFuZGxlQnJlYWtwb2ludCA9IGV2ZW50ID0+IChcclxuICAgICAgICBzZXRCcmVha3BvaW50KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICk7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ2NvbnRhaW5lcidcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBDb250YWluZXI/XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdjb250YWluZXInXHJcbiAgICAgICAgICAgICAgICBpZCA9ICdjb250YWluZXInXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkID0ge2VkaXRvci5wcm9wcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yID0gJ2l0ZW0nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgSXRlbT9cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fT5cclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2l0ZW0nXHJcbiAgICAgICAgICAgICAgICBpZCA9ICdpdGVtJ1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IHtlZGl0b3IucHJvcHMuaXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZWRpdG9yLnByb3BzLml0ZW0gJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgIGh0bWxGb3IgPSAneHMnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXh0cmEgU21hbGwgU2l6ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBtaW4gPSB7MH1cclxuICAgICAgICAgICAgICAgIG1heCA9IHsxMn1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSAneHMnXHJcbiAgICAgICAgICAgICAgICBpZCA9ICd4cydcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy54cyB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvciA9ICdzbSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTbWFsbCBTaXplXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ251bWJlcidcclxuICAgICAgICAgICAgICAgIG1pbiA9IHswfVxyXG4gICAgICAgICAgICAgICAgbWF4ID0gezEyfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdzbSdcclxuICAgICAgICAgICAgICAgIGlkID0gJ3NtJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLnNtIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yID0gJ21kJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE1lZGl1bSBTaXplXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ251bWJlcidcclxuICAgICAgICAgICAgICAgIG1pbiA9IHswfVxyXG4gICAgICAgICAgICAgICAgbWF4ID0gezEyfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdtZCdcclxuICAgICAgICAgICAgICAgIGlkID0gJ21kJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZWRpdG9yLnByb3BzLm1kIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yID0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExhcmdlIFNpemVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgbWluID0gezB9XHJcbiAgICAgICAgICAgICAgICBtYXggPSB7MTJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnbGcnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlZGl0b3IucHJvcHMubGcgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maWVsZH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgIGh0bWxGb3IgPSAneGwnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXh0cmEgTGFyZ2UgU2l6ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBtaW4gPSB7MH1cclxuICAgICAgICAgICAgICAgIG1heCA9IHsxMn1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSAneGwnXHJcbiAgICAgICAgICAgICAgICBpZCA9ICd4bCdcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VkaXRvci5wcm9wcy54bCB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2VkaXRvci5oYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpZWxkfT5cclxuICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgIGh0bWxGb3IgPSAnYnJlYWtwb2ludCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMubGFiZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBCcmVha3BvaW50IFN0eWxpbmdcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbmF0aXZlID0ge3RydWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG5hbWUgPSAnYnJlYWtwb2ludCdcclxuICAgICAgICAgICAgdmFsdWUgPSB7YnJlYWtwb2ludH1cclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQnJlYWtwb2ludH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJycgLz5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICd4cyc+XHJcbiAgICAgICAgICAgICAgICBFeHRyYSBTbWFsbFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdzbSc+XHJcbiAgICAgICAgICAgICAgICBTbWFsbFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICdtZCc+XHJcbiAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnbGcnPlxyXG4gICAgICAgICAgICAgICAgTGFyZ2VcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAneGwnPlxyXG4gICAgICAgICAgICAgICAgRXh0cmEgTGFyZ2VcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtCb29sZWFuKGJyZWFrcG9pbnQpICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yID0ge2BzdHlsZS4ke2JyZWFrcG9pbnR9LndpZHRoYH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmxhYmVsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBXaWR0aFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtgc3R5bGUuJHticmVha3BvaW50fS53aWR0aGB9XHJcbiAgICAgICAgICAgICAgICBpZCA9IHtgc3R5bGUuJHticmVha3BvaW50fS53aWR0aGB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3IucHJvcHMuc3R5bGVbYnJlYWtwb2ludF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3IucHJvcHMuc3R5bGVbYnJlYWtwb2ludF0ud2lkdGggfHxcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZWRpdG9yLmhhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZmllbGR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yID0ge2BzdHlsZS4ke2JyZWFrcG9pbnR9LmhlaWdodGB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5sYWJlbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSGVpZ2h0XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBuYW1lID0ge2BzdHlsZS4ke2JyZWFrcG9pbnR9LmhlaWdodGB9XHJcbiAgICAgICAgICAgICAgICBpZCA9IHtgc3R5bGUuJHticmVha3BvaW50fS5oZWlnaHRgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnByb3BzLnN0eWxlW2JyZWFrcG9pbnRdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnByb3BzLnN0eWxlW2JyZWFrcG9pbnRdLmhlaWdodCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlZGl0b3IuaGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn1cclxuICAgICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFBhbmVsOyIsImltcG9ydCB1c2VTdHlsZSBmcm9tICcuLi8uLi8uLi9wYW5lbHMvc3R5bGUvUGFuZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==