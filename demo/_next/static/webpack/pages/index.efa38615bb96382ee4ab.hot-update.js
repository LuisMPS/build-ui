self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MenuBar.js":
/*!***********************************!*\
  !*** ./src/components/MenuBar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _hooks_useExporter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useExporter */ "./src/hooks/useExporter.js");
/* harmony import */ var _style_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/MenuBar */ "./src/components/style/MenuBar.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\LuisMario\\Documents\\build-ui\\build-ui\\examples\\demo\\src\\components\\MenuBar.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var MenuBar = function MenuBar(_ref) {
  _s();

  var className = _ref.className,
      props = (0,C_Users_LuisMario_Documents_build_ui_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["className"]);

  var builder = (0,build_ui__WEBPACK_IMPORTED_MODULE_4__.useBuilder)();
  var exporter = (0,_hooks_useExporter__WEBPACK_IMPORTED_MODULE_7__.default)();
  var saver = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var exporterHTML = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var exporterCSS = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      saving = _useState[0],
      setSaving = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      exporting = _useState2[0],
      setExporting = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      saveLink = _useState3[0],
      setSaveLink = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      htmlLink = _useState4[0],
      setHTMLLink = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      cssLink = _useState5[0],
      setCSSLink = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      file = _useState6[0],
      setFile = _useState6[1]; // console.log(builder.history);


  var handleRedo = builder.handleRedo,
      handleUndo = builder.handleUndo,
      json = builder.json,
      loadTree = builder.loadTree,
      canRedo = builder.canRedo,
      canUndo = builder.canUndo;

  var handleSave = function handleSave() {
    // console.log(json());
    var content = JSON.stringify(json());
    var file = new Blob([content], {
      type: 'application/json'
    });
    var link = URL.createObjectURL(file);
    setSaveLink(link);
    setSaving(true);
  };

  var handleLoad = function handleLoad(event) {
    var file = event.target.files[0];
    console.log(file);
    if (!file) return; // Must manage with effect
    // since reading file
    // will be done async.

    setFile(file);
  };

  var handleExport = function handleExport() {
    exporter.handleExport();
    setExporting(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!saving) return;
    saver.current.click();
    URL.revokeObjectURL(saveLink);
    setSaving(false);
  }, [saving, saveLink]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!file) return;
    var content = file.text();
    content.then(function (text) {
      return JSON.parse(text);
    }).then(function (tree) {
      return (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.unstable_batchedUpdates)(function () {
        loadTree(tree);
        setFile(null);
      });
    })["catch"]();
  });
  var css = exporter.css;
  var html = exporter.html;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!exporting) return;

    if (css) {
      var _file = new Blob([css], {
        type: 'text/css'
      });

      var link = URL.createObjectURL(_file);
      setCSSLink(link);
      setExporting(false);
    }

    if (html) {
      var formatHTML = function formatHTML(html) {
        return '<html>' + '<head></head>' + '<body>' + html + '</body>' + '</html>';
      };

      var formattedHTML = formatHTML(html);

      var _file2 = new Blob([formattedHTML], {
        type: 'text/html'
      });

      var _link = URL.createObjectURL(_file2);

      setHTMLLink(_link);
      setExporting(false);
    }
  }, [html, css, exporting]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!htmlLink) return;
    exporterHTML.current.click();
    URL.revokeObjectURL(htmlLink);
    setHTMLLink(null);
  }, [htmlLink]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!cssLink) return;
    exporterCSS.current.click();
    URL.revokeObjectURL(cssLink);
    setCSSLink(null);
  }, [cssLink]);
  var classes = (0,_style_MenuBar__WEBPACK_IMPORTED_MODULE_8__.default)();
  var classAll = (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(className, classes.menu);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: classAll,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      onClick: handleRedo,
      disabled: !canRedo,
      children: "Redo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      onClick: handleUndo,
      disabled: !canUndo,
      children: "Undo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      onClick: handleSave,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      children: "Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: saveLink,
      ref: saver
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      component: "label",
      color: "primary",
      variant: "outlined",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      children: ["Load", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        hidden: true,
        type: "file",
        name: "load_tree",
        onInput: handleLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      onClick: handleExport,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      children: "Export"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: htmlLink,
      ref: exporterHTML
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: cssLink,
      ref: exporterCSS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 12
  }, _this);
};

_s(MenuBar, "zL1XEU7cFhw8P/pH9Z+oRY2gA1A=", false, function () {
  return [build_ui__WEBPACK_IMPORTED_MODULE_4__.useBuilder, _hooks_useExporter__WEBPACK_IMPORTED_MODULE_7__.default, _style_MenuBar__WEBPACK_IMPORTED_MODULE_8__.default];
});

_c = MenuBar;
/* harmony default export */ __webpack_exports__["default"] = (MenuBar);

var _c;

$RefreshReg$(_c, "MenuBar");

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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcyJdLCJuYW1lcyI6WyJNZW51QmFyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJidWlsZGVyIiwidXNlQnVpbGRlciIsImV4cG9ydGVyIiwidXNlRXhwb3J0ZXIiLCJzYXZlciIsInVzZVJlZiIsImV4cG9ydGVySFRNTCIsImV4cG9ydGVyQ1NTIiwidXNlU3RhdGUiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJleHBvcnRpbmciLCJzZXRFeHBvcnRpbmciLCJzYXZlTGluayIsInNldFNhdmVMaW5rIiwiaHRtbExpbmsiLCJzZXRIVE1MTGluayIsImNzc0xpbmsiLCJzZXRDU1NMaW5rIiwiZmlsZSIsInNldEZpbGUiLCJoYW5kbGVSZWRvIiwiaGFuZGxlVW5kbyIsImpzb24iLCJsb2FkVHJlZSIsImNhblJlZG8iLCJjYW5VbmRvIiwiaGFuZGxlU2F2ZSIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiQmxvYiIsInR5cGUiLCJsaW5rIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlTG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXhwb3J0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNsaWNrIiwicmV2b2tlT2JqZWN0VVJMIiwidGV4dCIsInRoZW4iLCJwYXJzZSIsInRyZWUiLCJiYXRjaCIsImNzcyIsImh0bWwiLCJmb3JtYXRIVE1MIiwiZm9ybWF0dGVkSFRNTCIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImNsYXNzQWxsIiwiY2xzeCIsIm1lbnUiLCJhY3Rpb24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BR1Y7QUFBQTs7QUFBQSxNQUZG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Q0csZUF1REgsOERBQUMsNkRBQUQ7QUFDSSxXQUFLLEVBQUcsU0FEWjtBQUVJLGFBQU8sRUFBRyxVQUZkO0FBR0ksYUFBTyxFQUFJTSxZQUhmO0FBSUksZUFBUyxFQUFJaUIsNkNBQUksQ0FBQ0gsT0FBTyxDQUFDSyxNQUFULEVBQWlCTCxPQUFPLENBQUNNLE1BQXpCLENBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkRHLGVBK0RIO0FBQ0ksWUFBTSxFQUFJLElBRGQ7QUFFSSxjQUFRLEVBQUksSUFGaEI7QUFHSSxVQUFJLEVBQUkvQyxRQUhaO0FBSUksU0FBRyxFQUFJVDtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvREcsZUFxRUg7QUFDSSxZQUFNLEVBQUksSUFEZDtBQUVJLGNBQVEsRUFBSSxJQUZoQjtBQUdJLFVBQUksRUFBSVcsT0FIWjtBQUlJLFNBQUcsRUFBSVY7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBNkVILENBck1EOztHQUFNVixPO1VBSWNJLGdELEVBQ0NFLHVELEVBOEdEc0QsbUQ7OztLQW5IZDVELE87QUF1TU4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWZhMzg2MTViYjk2MzgyZWU0YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VCdWlsZGVyfSBmcm9tIFwiYnVpbGQtdWlcIjtcclxuaW1wb3J0IHt1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyBhcyBiYXRjaH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHVzZUV4cG9ydGVyIGZyb20gXCIuLi9ob29rcy91c2VFeHBvcnRlclwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGUvTWVudUJhclwiO1xyXG5cclxuY29uc3QgTWVudUJhciA9ICh7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBidWlsZGVyID0gdXNlQnVpbGRlcigpO1xyXG4gICAgY29uc3QgZXhwb3J0ZXIgPSB1c2VFeHBvcnRlcigpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVyID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBleHBvcnRlckhUTUwgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGV4cG9ydGVyQ1NTID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtleHBvcnRpbmcsIHNldEV4cG9ydGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3NhdmVMaW5rLCBzZXRTYXZlTGlua10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtodG1sTGluaywgc2V0SFRNTExpbmtdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbY3NzTGluaywgc2V0Q1NTTGlua10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhidWlsZGVyLmhpc3RvcnkpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZVJlZG8sXHJcbiAgICAgICAgaGFuZGxlVW5kbyxcclxuICAgICAgICBqc29uLFxyXG4gICAgICAgIGxvYWRUcmVlLFxyXG4gICAgICAgIGNhblJlZG8sXHJcbiAgICAgICAgY2FuVW5kbyxcclxuICAgIH0gPSBidWlsZGVyO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coanNvbigpKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbigpKTtcclxuICAgICAgICBjb25zdCBmaWxlID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgbGluayA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgc2V0U2F2ZUxpbmsobGluayk7XHJcbiAgICAgICAgc2V0U2F2aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgICAgICAvLyBNdXN0IG1hbmFnZSB3aXRoIGVmZmVjdFxyXG4gICAgICAgIC8vIHNpbmNlIHJlYWRpbmcgZmlsZVxyXG4gICAgICAgIC8vIHdpbGwgYmUgZG9uZSBhc3luYy5cclxuICAgICAgICBzZXRGaWxlKGZpbGUpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXhwb3J0ID0gKCkgPT4ge1xyXG4gICAgICAgIGV4cG9ydGVyLmhhbmRsZUV4cG9ydCgpO1xyXG4gICAgICAgIHNldEV4cG9ydGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2F2aW5nKSByZXR1cm47XHJcbiAgICAgICAgc2F2ZXIuY3VycmVudC5jbGljaygpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2F2ZUxpbmspO1xyXG4gICAgICAgIHNldFNhdmluZyhmYWxzZSk7XHJcbiAgICB9LCBbc2F2aW5nLCBzYXZlTGlua10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZpbGUudGV4dCgpO1xyXG4gICAgICAgIGNvbnRlbnQudGhlbih0ZXh0ID0+IEpTT04ucGFyc2UodGV4dCkpXHJcbiAgICAgICAgLnRoZW4odHJlZSA9PiBiYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRUcmVlKHRyZWUpO1xyXG4gICAgICAgICAgICBzZXRGaWxlKG51bGwpO1xyXG4gICAgICAgIH0pKS5jYXRjaCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3NzID0gZXhwb3J0ZXIuY3NzO1xyXG4gICAgY29uc3QgaHRtbCA9IGV4cG9ydGVyLmh0bWw7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZXhwb3J0aW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGNzcykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gbmV3IEJsb2IoW2Nzc10sIHt0eXBlOiAndGV4dC9jc3MnfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBzZXRDU1NMaW5rKGxpbmspO1xyXG4gICAgICAgICAgICBzZXRFeHBvcnRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaHRtbCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRIVE1MID0gaHRtbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAnPGh0bWw+JyArXHJcbiAgICAgICAgICAgICAgICAnPGhlYWQ+PC9oZWFkPicgK1xyXG4gICAgICAgICAgICAgICAgJzxib2R5PicgKyBodG1sICsgJzwvYm9keT4nICtcclxuICAgICAgICAgICAgICAgICc8L2h0bWw+J1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRIVE1MID0gZm9ybWF0SFRNTChodG1sKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtmb3JtYXR0ZWRIVE1MXSwge3R5cGU6ICd0ZXh0L2h0bWwnfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBzZXRIVE1MTGluayhsaW5rKTtcclxuICAgICAgICAgICAgc2V0RXhwb3J0aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgaHRtbCwgXHJcbiAgICAgICAgY3NzLCBcclxuICAgICAgICBleHBvcnRpbmcsXHJcbiAgICBdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghaHRtbExpbmspIHJldHVybjtcclxuICAgICAgICBleHBvcnRlckhUTUwuY3VycmVudC5jbGljaygpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoaHRtbExpbmspO1xyXG4gICAgICAgIHNldEhUTUxMaW5rKG51bGwpO1xyXG4gICAgfSwgW2h0bWxMaW5rXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNzc0xpbmspIHJldHVybjtcclxuICAgICAgICBleHBvcnRlckNTUy5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChjc3NMaW5rKTtcclxuICAgICAgICBzZXRDU1NMaW5rKG51bGwpO1xyXG4gICAgfSwgW2Nzc0xpbmtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBjbGFzc0FsbCA9IGNsc3goXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGNsYXNzZXMubWVudVxyXG4gICAgKTtcclxuICAgIHJldHVybiA8ZGl2IFxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NBbGx9XHJcbiAgICA+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Nsc3goY2xhc3Nlcy5hY3Rpb24sIGNsYXNzZXMuYnV0dG9uKX1cclxuICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVSZWRvfVxyXG4gICAgICAgICAgICBkaXNhYmxlZCA9IHshY2FuUmVkb31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZG9cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZVVuZG99XHJcbiAgICAgICAgICAgIGRpc2FibGVkID0geyFjYW5VbmRvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVW5kb1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbHN4KGNsYXNzZXMuYWN0aW9uLCBjbGFzc2VzLmJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlIFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhpZGRlbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICBkb3dubG9hZCA9IHt0cnVlfVxyXG4gICAgICAgICAgICBocmVmID0ge3NhdmVMaW5rfVxyXG4gICAgICAgICAgICByZWYgPSB7c2F2ZXJ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gJ2xhYmVsJ1xyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgTG9hZFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGhpZGRlbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdmaWxlJ1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdsb2FkX3RyZWUnXHJcbiAgICAgICAgICAgICAgICBvbklucHV0ID0ge2hhbmRsZUxvYWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlRXhwb3J0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRXhwb3J0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgICAgaGlkZGVuID0ge3RydWV9XHJcbiAgICAgICAgICAgIGRvd25sb2FkID0ge3RydWV9XHJcbiAgICAgICAgICAgIGhyZWYgPSB7aHRtbExpbmt9XHJcbiAgICAgICAgICAgIHJlZiA9IHtleHBvcnRlckhUTUx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgZG93bmxvYWQgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgaHJlZiA9IHtjc3NMaW5rfVxyXG4gICAgICAgICAgICByZWYgPSB7ZXhwb3J0ZXJDU1N9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJhcjsiXSwic291cmNlUm9vdCI6IiJ9