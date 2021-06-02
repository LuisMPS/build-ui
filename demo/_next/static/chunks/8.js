(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "./src/components/builder/ui/link/Link.js":
/*!************************************************!*\
  !*** ./src/components/builder/ui/link/Link.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _style_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/Link */ "./src/components/builder/ui/link/style/Link.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LinkRoot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinkRoot */ "./src/components/builder/ui/link/LinkRoot.js");




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\link\\Link.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.forwardRef(_c = _s(function (_ref, ref) {
  _s();

  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "className", "style"]);

  var classes = Object(_style_Link__WEBPACK_IMPORTED_MODULE_3__["default"])(style);
  var classLink = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.link, classes.fill);
  var classAll = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(className, classes.ui);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classAll,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_LinkRoot__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
      ref: ref,
      className: classLink
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
  return [_style_Link__WEBPACK_IMPORTED_MODULE_3__["default"]];
}));
_c2 = Link;
/* harmony default export */ __webpack_exports__["default"] = (Link);

var _c, _c2;

$RefreshReg$(_c, "Link$React.forwardRef");
$RefreshReg$(_c2, "Link");

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

/***/ "./src/components/builder/ui/link/LinkRoot.js":
/*!****************************************************!*\
  !*** ./src/components/builder/ui/link/LinkRoot.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\link\\LinkRoot.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var LinkRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c = function _c(_ref, ref) {
  var text = _ref.text,
      disabled = _ref.disabled,
      href = _ref.href,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["text", "disabled", "href"]);

  return disabled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread(_objectSpread({
    ref: ref,
    href: href
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, _this);
});
_c2 = LinkRoot;
/* harmony default export */ __webpack_exports__["default"] = (LinkRoot);

var _c, _c2;

$RefreshReg$(_c, "LinkRoot$React.forwardRef");
$RefreshReg$(_c2, "LinkRoot");

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

/***/ "./src/components/builder/ui/link/LinkView.js":
/*!****************************************************!*\
  !*** ./src/components/builder/ui/link/LinkView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var _resize_Resizable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resize/Resizable */ "./src/components/resize/Resizable.js");
/* harmony import */ var _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useDemoStyler */ "./src/hooks/useDemoStyler.js");
/* harmony import */ var _hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useDemoEditor */ "./src/hooks/useDemoEditor.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Link */ "./src/components/builder/ui/link/Link.js");
/* harmony import */ var _style_LinkView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/LinkView */ "./src/components/builder/ui/link/style/LinkView.js");




var _jsxFileName = "C:\\Users\\DELL\\Documents\\build-ui\\examples\\demo\\src\\components\\builder\\ui\\link\\LinkView.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ResizableLink = Object(_resize_Resizable__WEBPACK_IMPORTED_MODULE_4__["default"])(_Link__WEBPACK_IMPORTED_MODULE_7__["default"]);
_c = ResizableLink;
var BuilderLink = Object(build_ui__WEBPACK_IMPORTED_MODULE_3__["DnDBuilderHOC"])(ResizableLink);
_c2 = BuilderLink;

var LinkView = function LinkView(_ref) {
  _s();

  var id = _ref.id,
      props = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["id"]);

  var editor = Object(_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_6__["default"])({
    id: id
  });
  var styler = Object(_hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__["default"])({
    id: id
  });
  var classes = Object(_style_LinkView__WEBPACK_IMPORTED_MODULE_8__["default"])({
    selected: editor.indexes.selected,
    fixed: editor.meta.fixed
  }); // To prevent selection
  // on link click

  var handleLink = function handleLink(event) {
    return event.stopPropagation();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(BuilderLink // DnD Props
  , _objectSpread(_objectSpread({
    onDragStart: !editor.meta.fixed && editor.handlePositionedDragStart,
    onDragEnd: !editor.meta.fixed && editor.handleDragEnd,
    draggable: !editor.meta.fixed // Resize Props
    ,
    isResizing: editor.indexes.selected,
    onResizeStart: editor.handleResizeStart,
    onResize: editor.handleResize,
    onResizeEnd: editor.handleResizeEnd // Pass down ref for
    // resize numerical 
    // calculations
    ,
    ref: editor.builder // Other Props
    ,
    onClick: props.disabled ? editor.handleSelect : handleLink,
    className: classes.view // Link props

  }, props), {}, {
    style: styler.completeStyle(props.style)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 12
  }, _this);
};

_s(LinkView, "IVVmjF1vhoqUsjYrXJLDH+ihIh8=", false, function () {
  return [_hooks_useDemoEditor__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useDemoStyler__WEBPACK_IMPORTED_MODULE_5__["default"], _style_LinkView__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c3 = LinkView;
/* harmony default export */ __webpack_exports__["default"] = (LinkView);

var _c, _c2, _c3;

$RefreshReg$(_c, "ResizableLink");
$RefreshReg$(_c2, "BuilderLink");
$RefreshReg$(_c3, "LinkView");

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

/***/ "./src/components/builder/ui/link/style/Link.js":
/*!******************************************************!*\
  !*** ./src/components/builder/ui/link/style/Link.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/ui */ "./src/components/builder/styles/ui.js");



var linkStyles = {
  link: function link(props) {
    return {
      margin: props.margin,
      padding: props.padding,
      color: props.color,
      display: 'inline-block'
    };
  }
};
var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(linkStyles, _styles_ui__WEBPACK_IMPORTED_MODULE_2__["sizingStyles"], _styles_ui__WEBPACK_IMPORTED_MODULE_2__["positionStyles"], _styles_ui__WEBPACK_IMPORTED_MODULE_2__["flexStyles"], _styles_ui__WEBPACK_IMPORTED_MODULE_2__["fillStyles"]));
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

/***/ "./src/components/builder/ui/link/style/LinkView.js":
/*!**********************************************************!*\
  !*** ./src/components/builder/ui/link/style/LinkView.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles */ "./src/components/builder/styles/index.js");
/* harmony import */ var _styles_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/views */ "./src/components/builder/styles/views.js");



var linkStyles = {
  view: {}
};
var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles_views__WEBPACK_IMPORTED_MODULE_2__["viewStyles"], linkStyles));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9saW5rL0xpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2J1aWxkZXIvdWkvbGluay9MaW5rUm9vdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9saW5rL0xpbmtWaWV3LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idWlsZGVyL3VpL2xpbmsvc3R5bGUvTGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVpbGRlci91aS9saW5rL3N0eWxlL0xpbmtWaWV3LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3R5bGUiLCJjbGFzc0xpbmsiLCJjbHN4IiwibGluayIsImZpbGwiLCJjbGFzc0FsbCIsInVpIiwiTGlua1Jvb3QiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJocmVmIiwiUmVzaXphYmxlTGluayIsIlJlc2l6YWJsZSIsIkJ1aWxkZXJMaW5rIiwiRG5EQnVpbGRlckhPQyIsIkxpbmtWaWV3IiwiaWQiLCJlZGl0b3IiLCJ1c2VEZW1vRWRpdG9yIiwic3R5bGVyIiwidXNlRGVtb1N0eWxlciIsInNlbGVjdGVkIiwiaW5kZXhlcyIsImZpeGVkIiwibWV0YSIsImhhbmRsZUxpbmsiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVBvc2l0aW9uZWREcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiaGFuZGxlUmVzaXplU3RhcnQiLCJoYW5kbGVSZXNpemUiLCJoYW5kbGVSZXNpemVFbmQiLCJidWlsZGVyIiwiaGFuZGxlU2VsZWN0IiwidmlldyIsImNvbXBsZXRlU3R5bGUiLCJsaW5rU3R5bGVzIiwibWFyZ2luIiwicGFkZGluZyIsImNvbG9yIiwiZGlzcGxheSIsIm1ha2VTdHlsZXMiLCJjb21iaW5lU3R5bGVzIiwic2l6aW5nU3R5bGVzIiwicG9zaXRpb25TdHlsZXMiLCJmbGV4U3R5bGVzIiwiZmlsbFN0eWxlcyIsInZpZXdTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFNBQWlCLGdCQUszQkMsR0FMMkIsRUFLbkI7QUFBQTs7QUFBQSxNQUpQQyxRQUlPLFFBSlBBLFFBSU87QUFBQSxNQUhQQyxTQUdPLFFBSFBBLFNBR087QUFBQSxNQUZQQyxLQUVPLFFBRlBBLEtBRU87QUFBQSxNQURKQyxLQUNJOztBQUNQLE1BQU1DLE9BQU8sR0FBR0MsMkRBQVEsQ0FBQ0gsS0FBRCxDQUF4QjtBQUNBLE1BQU1JLFNBQVMsR0FBR0Msb0RBQUksQ0FDbEJILE9BQU8sQ0FBQ0ksSUFEVSxFQUVsQkosT0FBTyxDQUFDSyxJQUZVLENBQXRCO0FBSUEsTUFBTUMsUUFBUSxHQUFHSCxvREFBSSxDQUNqQk4sU0FEaUIsRUFFakJHLE9BQU8sQ0FBQ08sRUFGUyxDQUFyQjtBQUlBLHNCQUFPO0FBQ0gsYUFBUyxFQUFJRCxRQURWO0FBQUEsNEJBR0gscUVBQUMsaURBQUQ7QUFDSSxTQUFHLEVBQUlYLEdBRFg7QUFFSSxlQUFTLEVBQUlPO0FBRmpCLE9BR1FILEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhHLEVBUUZILFFBUkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFVSCxDQXpCWTtBQUFBLFVBTU9LLG1EQU5QO0FBQUEsR0FBYjtNQUFNVCxJO0FBMkJTQSxtRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQSxJQUFNZ0IsUUFBUSxnQkFBR2YsNENBQUssQ0FBQ0MsVUFBTixNQUFpQixrQkFLL0JDLEdBTCtCLEVBS3ZCO0FBQUEsTUFKUGMsSUFJTyxRQUpQQSxJQUlPO0FBQUEsTUFIUEMsUUFHTyxRQUhQQSxRQUdPO0FBQUEsTUFGUEMsSUFFTyxRQUZQQSxJQUVPO0FBQUEsTUFESlosS0FDSTs7QUFDUCxTQUFPVyxRQUFRLGdCQUNiO0FBQ0UsT0FBRyxFQUFJZjtBQURULEtBRU1JLEtBRk47QUFBQSxjQUlHVTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYSxnQkFPYjtBQUNFLE9BQUcsRUFBSWQsR0FEVDtBQUVFLFFBQUksRUFBSWdCO0FBRlYsS0FHTVosS0FITjtBQUFBLGNBS0dVO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVBGO0FBY0gsQ0FwQmdCLENBQWpCO01BQU1ELFE7QUFzQlNBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1JLGFBQWEsR0FBR0MsaUVBQVMsQ0FBQ3JCLDZDQUFELENBQS9CO0tBQU1vQixhO0FBQ04sSUFBTUUsV0FBVyxHQUFHQyw4REFBYSxDQUFDSCxhQUFELENBQWpDO01BQU1FLFc7O0FBRU4sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FHWDtBQUFBOztBQUFBLE1BRkZDLEVBRUUsUUFGRkEsRUFFRTtBQUFBLE1BRENsQixLQUNEOztBQUNGLE1BQU1tQixNQUFNLEdBQUdDLG9FQUFhLENBQUM7QUFDekJGLE1BQUUsRUFBRUE7QUFEcUIsR0FBRCxDQUE1QjtBQUdBLE1BQU1HLE1BQU0sR0FBR0Msb0VBQWEsQ0FBQztBQUN6QkosTUFBRSxFQUFFQTtBQURxQixHQUFELENBQTVCO0FBR0EsTUFBTWpCLE9BQU8sR0FBR0MsK0RBQVEsQ0FBQztBQUNyQnFCLFlBQVEsRUFBRUosTUFBTSxDQUFDSyxPQUFQLENBQWVELFFBREo7QUFFckJFLFNBQUssRUFBRU4sTUFBTSxDQUFDTyxJQUFQLENBQVlEO0FBRkUsR0FBRCxDQUF4QixDQVBFLENBV0Y7QUFDQTs7QUFDQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsV0FDcEJBLEtBQUssQ0FBQ0MsZUFBTixFQURvQjtBQUFBLEdBQXhCOztBQUdBLHNCQUFPLHFFQUFDLFdBQUQsQ0FDSDtBQURHO0FBRUgsZUFBVyxFQUFJLENBQUNWLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRCxLQUFiLElBQXNCTixNQUFNLENBQUNXLHlCQUZ6QztBQUdILGFBQVMsRUFBSSxDQUFDWCxNQUFNLENBQUNPLElBQVAsQ0FBWUQsS0FBYixJQUFzQk4sTUFBTSxDQUFDWSxhQUh2QztBQUlILGFBQVMsRUFBSSxDQUFDWixNQUFNLENBQUNPLElBQVAsQ0FBWUQsS0FKdkIsQ0FLSDtBQUxHO0FBTUgsY0FBVSxFQUFJTixNQUFNLENBQUNLLE9BQVAsQ0FBZUQsUUFOMUI7QUFPSCxpQkFBYSxFQUFJSixNQUFNLENBQUNhLGlCQVByQjtBQVFILFlBQVEsRUFBSWIsTUFBTSxDQUFDYyxZQVJoQjtBQVNILGVBQVcsRUFBSWQsTUFBTSxDQUFDZSxlQVRuQixDQVVIO0FBQ0E7QUFDQTtBQVpHO0FBYUgsT0FBRyxFQUFJZixNQUFNLENBQUNnQixPQWJYLENBY0g7QUFkRztBQWVILFdBQU8sRUFBSW5DLEtBQUssQ0FBQ1csUUFBTixHQUFpQlEsTUFBTSxDQUFDaUIsWUFBeEIsR0FBdUNULFVBZi9DO0FBZ0JILGFBQVMsRUFBSTFCLE9BQU8sQ0FBQ29DLElBaEJsQixDQWlCSDs7QUFqQkcsS0FrQkNyQyxLQWxCRDtBQW1CSCxTQUFLLEVBQUlxQixNQUFNLENBQUNpQixhQUFQLENBQXFCdEMsS0FBSyxDQUFDRCxLQUEzQjtBQW5CTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFxQkgsQ0F4Q0Q7O0dBQU1rQixRO1VBSWFHLDRELEVBR0FFLDRELEVBR0NwQix1RDs7O01BVmRlLFE7QUEwQ1NBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNc0IsVUFBVSxHQUFJO0FBQ2hCbEMsTUFBSSxFQUFFLGNBQUFMLEtBQUs7QUFBQSxXQUFLO0FBQ1p3QyxZQUFNLEVBQUV4QyxLQUFLLENBQUN3QyxNQURGO0FBRVpDLGFBQU8sRUFBRXpDLEtBQUssQ0FBQ3lDLE9BRkg7QUFHWkMsV0FBSyxFQUFFMUMsS0FBSyxDQUFDMEMsS0FIRDtBQUlaQyxhQUFPLEVBQUU7QUFKRyxLQUFMO0FBQUE7QUFESyxDQUFwQjtBQVNBLElBQU16QyxRQUFRLEdBQUcwQywyRUFBVSxDQUFDQyx1REFBYSxDQUNyQ04sVUFEcUMsRUFFckNPLHVEQUZxQyxFQUdyQ0MseURBSHFDLEVBSXJDQyxxREFKcUMsRUFLckNDLHFEQUxxQyxDQUFkLENBQTNCO0FBUWUvQyx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTXFDLFVBQVUsR0FBSTtBQUNoQkYsTUFBSSxFQUFHO0FBRFMsQ0FBcEI7QUFNQSxJQUFNbkMsUUFBUSxHQUFHMEMsb0VBQVUsQ0FBQ0MsdURBQWEsQ0FDckNLLHdEQURxQyxFQUVyQ1gsVUFGcUMsQ0FBZCxDQUEzQjtBQUtlckMsdUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy84LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUvTGluayc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlua1Jvb3QgZnJvbSAnLi9MaW5rUm9vdCc7XHJcblxyXG5jb25zdCBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZigoe1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBzdHlsZSxcclxuICAgIC4uLnByb3BzXHJcbn0sIHJlZikgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKHN0eWxlKTtcclxuICAgIGNvbnN0IGNsYXNzTGluayA9IGNsc3goXHJcbiAgICAgICAgY2xhc3Nlcy5saW5rLFxyXG4gICAgICAgIGNsYXNzZXMuZmlsbCxcclxuICAgICk7XHJcbiAgICBjb25zdCBjbGFzc0FsbCA9IGNsc3goXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGNsYXNzZXMudWksXHJcbiAgICApXHJcbiAgICByZXR1cm4gPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc0FsbH1cclxuICAgID5cclxuICAgICAgICA8TGlua1Jvb3QgXHJcbiAgICAgICAgICAgIHJlZiA9IHtyZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc0xpbmt9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGlua1Jvb3QgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XHJcbiAgICB0ZXh0LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBocmVmLFxyXG4gICAgLi4ucHJvcHNcclxufSwgcmVmKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzYWJsZWQgXHJcbiAgICA/IDxzcGFuIFxyXG4gICAgICAgIHJlZiA9IHtyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgPC9zcGFuPiBcclxuICAgIDogPGEgXHJcbiAgICAgICAgcmVmID0ge3JlZn1cclxuICAgICAgICBocmVmID0ge2hyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgPC9hPlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtSb290OyIsImltcG9ydCB7RG5EQnVpbGRlckhPQ30gZnJvbSBcImJ1aWxkLXVpXCJcclxuaW1wb3J0IFJlc2l6YWJsZSBmcm9tIFwiLi4vLi4vLi4vcmVzaXplL1Jlc2l6YWJsZVwiO1xyXG5pbXBvcnQgdXNlRGVtb1N0eWxlciBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVtb1N0eWxlclwiO1xyXG5pbXBvcnQgdXNlRGVtb0VkaXRvciBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVtb0VkaXRvclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9MaW5rVmlld1wiO1xyXG5cclxuY29uc3QgUmVzaXphYmxlTGluayA9IFJlc2l6YWJsZShMaW5rKTtcclxuY29uc3QgQnVpbGRlckxpbmsgPSBEbkRCdWlsZGVySE9DKFJlc2l6YWJsZUxpbmspO1xyXG5cclxuY29uc3QgTGlua1ZpZXcgPSAoe1xyXG4gICAgaWQsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VEZW1vRWRpdG9yKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0eWxlciA9IHVzZURlbW9TdHlsZXIoe1xyXG4gICAgICAgIGlkOiBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBlZGl0b3IuaW5kZXhlcy5zZWxlY3RlZCxcclxuICAgICAgICBmaXhlZDogZWRpdG9yLm1ldGEuZml4ZWQsXHJcbiAgICB9KTtcclxuICAgIC8vIFRvIHByZXZlbnQgc2VsZWN0aW9uXHJcbiAgICAvLyBvbiBsaW5rIGNsaWNrXHJcbiAgICBjb25zdCBoYW5kbGVMaW5rID0gZXZlbnQgPT4gKFxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxCdWlsZGVyTGlua1xyXG4gICAgICAgIC8vIERuRCBQcm9wc1xyXG4gICAgICAgIG9uRHJhZ1N0YXJ0ID0geyFlZGl0b3IubWV0YS5maXhlZCAmJiBlZGl0b3IuaGFuZGxlUG9zaXRpb25lZERyYWdTdGFydH1cclxuICAgICAgICBvbkRyYWdFbmQgPSB7IWVkaXRvci5tZXRhLmZpeGVkICYmIGVkaXRvci5oYW5kbGVEcmFnRW5kfVxyXG4gICAgICAgIGRyYWdnYWJsZSA9IHshZWRpdG9yLm1ldGEuZml4ZWR9XHJcbiAgICAgICAgLy8gUmVzaXplIFByb3BzXHJcbiAgICAgICAgaXNSZXNpemluZyA9IHtlZGl0b3IuaW5kZXhlcy5zZWxlY3RlZH1cclxuICAgICAgICBvblJlc2l6ZVN0YXJ0ID0ge2VkaXRvci5oYW5kbGVSZXNpemVTdGFydH1cclxuICAgICAgICBvblJlc2l6ZSA9IHtlZGl0b3IuaGFuZGxlUmVzaXplfVxyXG4gICAgICAgIG9uUmVzaXplRW5kID0ge2VkaXRvci5oYW5kbGVSZXNpemVFbmR9XHJcbiAgICAgICAgLy8gUGFzcyBkb3duIHJlZiBmb3JcclxuICAgICAgICAvLyByZXNpemUgbnVtZXJpY2FsIFxyXG4gICAgICAgIC8vIGNhbGN1bGF0aW9uc1xyXG4gICAgICAgIHJlZiA9IHtlZGl0b3IuYnVpbGRlcn1cclxuICAgICAgICAvLyBPdGhlciBQcm9wc1xyXG4gICAgICAgIG9uQ2xpY2sgPSB7cHJvcHMuZGlzYWJsZWQgPyBlZGl0b3IuaGFuZGxlU2VsZWN0IDogaGFuZGxlTGlua31cclxuICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy52aWV3fVxyXG4gICAgICAgIC8vIExpbmsgcHJvcHNcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgc3R5bGUgPSB7c3R5bGVyLmNvbXBsZXRlU3R5bGUocHJvcHMuc3R5bGUpfVxyXG4gICAgLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1ZpZXc7IiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBjb21iaW5lU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcyc7XHJcbmltcG9ydCB7ZmlsbFN0eWxlcywgZmxleFN0eWxlcywgcG9zaXRpb25TdHlsZXMsIHNpemluZ1N0eWxlc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VpJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZXMgPSAoe1xyXG4gICAgbGluazogcHJvcHMgPT4gKHtcclxuICAgICAgICBtYXJnaW46IHByb3BzLm1hcmdpbixcclxuICAgICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxyXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIH0pLFxyXG59KVxyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKGNvbWJpbmVTdHlsZXMoXHJcbiAgICBsaW5rU3R5bGVzLFxyXG4gICAgc2l6aW5nU3R5bGVzLFxyXG4gICAgcG9zaXRpb25TdHlsZXMsXHJcbiAgICBmbGV4U3R5bGVzLFxyXG4gICAgZmlsbFN0eWxlcyxcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgY29tYmluZVN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7dmlld1N0eWxlc30gZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy92aWV3c1wiO1xyXG5cclxuY29uc3QgbGlua1N0eWxlcyA9ICh7XHJcbiAgICB2aWV3OiAoe1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSlcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyhjb21iaW5lU3R5bGVzKFxyXG4gICAgdmlld1N0eWxlcyxcclxuICAgIGxpbmtTdHlsZXMsXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==