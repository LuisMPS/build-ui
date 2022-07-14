(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_builder_ui_alert_AlertView_js"],{

/***/ "./src/components/builder/ui/alert/Alert.js":
/*!**************************************************!*\
  !*** ./src/components/builder/ui/alert/Alert.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _style_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/Alert */ "./src/components/builder/ui/alert/style/Alert.js");
/* harmony import */ var _AlertRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertRoot */ "./src/components/builder/ui/alert/AlertRoot.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\alert\\Alert.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().forwardRef(_c = _s(function (_ref, ref) {
  _s();

  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["style", "className", "children"]);

  var classes = (0,_style_Alert__WEBPACK_IMPORTED_MODULE_3__.default)(style);
  var classAlert = (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.alert, classes.fill);
  var classAll = (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(className, classes.ui);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: classAll,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AlertRoot__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({
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
  return [_style_Alert__WEBPACK_IMPORTED_MODULE_3__.default];
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

/***/ "./src/components/builder/ui/alert/AlertRoot.js":
/*!******************************************************!*\
  !*** ./src/components/builder/ui/alert/AlertRoot.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\alert\\AlertRoot.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var AlertRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(_c = function _c(_ref, ref) {
  var message = _ref.message,
      text = _ref.text,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["message", "text"]);

  var handleAlert = function handleAlert() {
    alert(message);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({
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

/***/ "./src/components/builder/ui/alert/AlertView.js":
/*!******************************************************!*\
  !*** ./src/components/builder/ui/alert/AlertView.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Alert */ "./src/components/builder/ui/alert/Alert.js");
/* harmony import */ var _style_AlertView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/AlertView */ "./src/components/builder/ui/alert/style/AlertView.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\alert\\AlertView.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var BuilderAlert = (0,build_ui__WEBPACK_IMPORTED_MODULE_3__.DnDBuilderHOC)(_Alert__WEBPACK_IMPORTED_MODULE_6__.default);
_c = BuilderAlert;

var AlertView = function AlertView(_ref) {
  _s();

  var id = _ref.id,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["id"]);

  var editor = (0,_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__.default)({
    id: id
  });
  var styler = (0,_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__.default)({
    id: id
  });
  var classes = (0,_style_AlertView__WEBPACK_IMPORTED_MODULE_7__.default)({
    selected: editor.indexes.selected,
    fixed: editor.meta.fixed
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BuilderAlert // DnD Props
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
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__.default, _style_AlertView__WEBPACK_IMPORTED_MODULE_7__.default];
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

/***/ "./src/components/builder/ui/alert/style/Alert.js":
/*!********************************************************!*\
  !*** ./src/components/builder/ui/alert/style/Alert.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/ui */ "./src/components/builder/styles/ui.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var alertStyles = {
  alert: function alert(props) {
    return {
      padding: props.padding,
      margin: props.margin
    };
  }
};
var useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((0,_styles__WEBPACK_IMPORTED_MODULE_0__.default)(alertStyles, _styles_ui__WEBPACK_IMPORTED_MODULE_1__.fillStyles, _styles_ui__WEBPACK_IMPORTED_MODULE_1__.sizingStyles, _styles_ui__WEBPACK_IMPORTED_MODULE_1__.positionStyles, _styles_ui__WEBPACK_IMPORTED_MODULE_1__.flexStyles));
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


/***/ }),

/***/ "./src/components/builder/ui/alert/style/AlertView.js":
/*!************************************************************!*\
  !*** ./src/components/builder/ui/alert/style/AlertView.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/views */ "./src/components/builder/styles/views.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var alertStyles = {
  view: {}
};
var useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((0,_styles__WEBPACK_IMPORTED_MODULE_0__.default)(alertStyles, _styles_views__WEBPACK_IMPORTED_MODULE_1__.viewStyles));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9hbGVydC9BbGVydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9hbGVydC9BbGVydFJvb3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2J1aWxkZXIvdWkvYWxlcnQvQWxlcnRWaWV3LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2FsZXJ0L3N0eWxlL0FsZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2FsZXJ0L3N0eWxlL0FsZXJ0Vmlldy5qcyJdLCJuYW1lcyI6WyJBbGVydCIsIlJlYWN0IiwicmVmIiwic3R5bGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlIiwiY2xhc3NBbGVydCIsImNsc3giLCJhbGVydCIsImZpbGwiLCJjbGFzc0FsbCIsInVpIiwiQWxlcnRSb290IiwibWVzc2FnZSIsInRleHQiLCJoYW5kbGVBbGVydCIsIkJ1aWxkZXJBbGVydCIsIkRuREJ1aWxkZXJIT0MiLCJBbGVydFZpZXciLCJpZCIsImVkaXRvciIsInVzZURlbW9FZGl0b3IiLCJzdHlsZXIiLCJ1c2VEZW1vU3R5bGVyIiwic2VsZWN0ZWQiLCJpbmRleGVzIiwiZml4ZWQiLCJtZXRhIiwiaGFuZGxlUG9zaXRpb25lZERyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJoYW5kbGVTZWxlY3QiLCJ2aWV3IiwiY29tcGxldGVTdHlsZSIsImFsZXJ0U3R5bGVzIiwicGFkZGluZyIsIm1hcmdpbiIsIm1ha2VTdHlsZXMiLCJjb21iaW5lU3R5bGVzIiwiZmlsbFN0eWxlcyIsInNpemluZ1N0eWxlcyIsInBvc2l0aW9uU3R5bGVzIiwiZmxleFN0eWxlcyIsInZpZXdTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7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ckNKLFdBRHFDLEVBRXJDUyxxREFGcUMsQ0FBZCxDQUEzQjtBQUtBLCtEQUFlckMsUUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3NyY19jb21wb25lbnRzX2J1aWxkZXJfdWlfYWxlcnRfQWxlcnRWaWV3X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL0FsZXJ0XCI7XHJcbmltcG9ydCBBbGVydFJvb3QgZnJvbSBcIi4vQWxlcnRSb290XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBbGVydCA9IFJlYWN0LmZvcndhcmRSZWYoKHtcclxuICAgIHN0eWxlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICAuLi5wcm9wc1xyXG59LCByZWYpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZShzdHlsZSk7XHJcbiAgICBjb25zdCBjbGFzc0FsZXJ0ID0gY2xzeChcclxuICAgICAgICBjbGFzc2VzLmFsZXJ0LFxyXG4gICAgICAgIGNsYXNzZXMuZmlsbCxcclxuICAgICk7XHJcbiAgICBjb25zdCBjbGFzc0FsbCA9IGNsc3goXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGNsYXNzZXMudWlcclxuICAgIClcclxuICAgIHJldHVybiA8ZGl2IFxyXG4gICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc0FsbH1cclxuICAgID5cclxuICAgICAgICA8QWxlcnRSb290IFxyXG4gICAgICAgICAgICByZWYgPSB7cmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NBbGVydH1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7IiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFsZXJ0Um9vdCA9IFJlYWN0LmZvcndhcmRSZWYoKHtcclxuICAgIG1lc3NhZ2UsXHJcbiAgICB0ZXh0LFxyXG4gICAgLi4ucHJvcHNcclxufSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVBbGVydCA9ICgpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiA8QnV0dG9uXHJcbiAgICAgICAgcmVmID0ge3JlZn1cclxuICAgICAgICBvbkNsaWNrID0ge2hhbmRsZUFsZXJ0fVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgICB7dGV4dH1cclxuICAgIDwvQnV0dG9uPlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0Um9vdDsiLCJpbXBvcnQge0RuREJ1aWxkZXJIT0N9IGZyb20gXCJidWlsZC11aVwiXHJcbmltcG9ydCB1c2VEZW1vRWRpdG9yIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vRWRpdG9yXCI7XHJcbmltcG9ydCB1c2VEZW1vU3R5bGVyIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VEZW1vU3R5bGVyXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi9BbGVydFwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvQWxlcnRWaWV3XCI7XHJcblxyXG5jb25zdCBCdWlsZGVyQWxlcnQgPSBEbkRCdWlsZGVySE9DKEFsZXJ0KTtcclxuXHJcbmNvbnN0IEFsZXJ0VmlldyA9ICh7XHJcbiAgICBpZCxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZURlbW9FZGl0b3Ioe1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3R5bGVyID0gdXNlRGVtb1N0eWxlcih7XHJcbiAgICAgICAgaWQ6IGlkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGVkaXRvci5pbmRleGVzLnNlbGVjdGVkLFxyXG4gICAgICAgIGZpeGVkOiBlZGl0b3IubWV0YS5maXhlZCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxCdWlsZGVyQWxlcnRcclxuICAgICAgICAvLyBEbkQgUHJvcHNcclxuICAgICAgICBvbkRyYWdTdGFydCA9IHshZWRpdG9yLm1ldGEuZml4ZWQgJiYgZWRpdG9yLmhhbmRsZVBvc2l0aW9uZWREcmFnU3RhcnR9XHJcbiAgICAgICAgb25EcmFnRW5kID0geyFlZGl0b3IubWV0YS5maXhlZCAmJiBlZGl0b3IuaGFuZGxlRHJhZ0VuZH1cclxuICAgICAgICBkcmFnZ2FibGUgPSB7IWVkaXRvci5tZXRhLmZpeGVkfVxyXG4gICAgICAgIC8vIE90aGVyIFByb3BzXHJcbiAgICAgICAgb25DbGljayA9IHtlZGl0b3IuaGFuZGxlU2VsZWN0fVxyXG4gICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnZpZXd9XHJcbiAgICAgICAgLy8gQWxlcnQgUHJvcHNcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgc3R5bGUgPSB7c3R5bGVyLmNvbXBsZXRlU3R5bGUocHJvcHMuc3R5bGUpfVxyXG4gICAgLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRWaWV3OyIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgY29tYmluZVN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMnO1xyXG5pbXBvcnQge2ZpbGxTdHlsZXMsIGZsZXhTdHlsZXMsIHBvc2l0aW9uU3R5bGVzLCBzaXppbmdTdHlsZXN9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy91aSc7XHJcblxyXG5jb25zdCBhbGVydFN0eWxlcyA9ICh7XHJcbiAgICBhbGVydDogcHJvcHMgPT4gKHtcclxuICAgICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxyXG4gICAgICAgIG1hcmdpbjogcHJvcHMubWFyZ2luLFxyXG4gICAgfSksXHJcbn0pXHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoY29tYmluZVN0eWxlcyhcclxuICAgIGFsZXJ0U3R5bGVzLFxyXG4gICAgZmlsbFN0eWxlcyxcclxuICAgIHNpemluZ1N0eWxlcyxcclxuICAgIHBvc2l0aW9uU3R5bGVzLFxyXG4gICAgZmxleFN0eWxlcyxcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IGNvbWJpbmVTdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlc1wiO1xyXG5pbXBvcnQge3ZpZXdTdHlsZXN9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvdmlld3NcIjtcclxuXHJcbmNvbnN0IGFsZXJ0U3R5bGVzID0gKHtcclxuICAgIHZpZXc6ICh7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKGNvbWJpbmVTdHlsZXMoXHJcbiAgICBhbGVydFN0eWxlcyxcclxuICAgIHZpZXdTdHlsZXMsXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==