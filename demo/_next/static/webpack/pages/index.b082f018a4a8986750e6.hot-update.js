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
    var file = event.target.files[0]; // Must manage with effect
    // since reading file
    // will be done async.

    console.log(file);
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
      lineNumber: 133,
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
      lineNumber: 143,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      onClick: handleSave,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      children: "Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: saveLink,
      ref: saver
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
        onChange: handleLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      onClick: handleExport,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      children: "Export"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: htmlLink,
      ref: exporterHTML
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: cssLink,
      ref: exporterCSS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcyJdLCJuYW1lcyI6WyJNZW51QmFyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJidWlsZGVyIiwidXNlQnVpbGRlciIsImV4cG9ydGVyIiwidXNlRXhwb3J0ZXIiLCJzYXZlciIsInVzZVJlZiIsImV4cG9ydGVySFRNTCIsImV4cG9ydGVyQ1NTIiwidXNlU3RhdGUiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJleHBvcnRpbmciLCJzZXRFeHBvcnRpbmciLCJzYXZlTGluayIsInNldFNhdmVMaW5rIiwiaHRtbExpbmsiLCJzZXRIVE1MTGluayIsImNzc0xpbmsiLCJzZXRDU1NMaW5rIiwiZmlsZSIsInNldEZpbGUiLCJoYW5kbGVSZWRvIiwiaGFuZGxlVW5kbyIsImpzb24iLCJsb2FkVHJlZSIsImNhblJlZG8iLCJjYW5VbmRvIiwiaGFuZGxlU2F2ZSIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiQmxvYiIsInR5cGUiLCJsaW5rIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlTG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXhwb3J0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNsaWNrIiwicmV2b2tlT2JqZWN0VVJMIiwidGV4dCIsInRoZW4iLCJwYXJzZSIsInRyZWUiLCJiYXRjaCIsImNzcyIsImh0bWwiLCJmb3JtYXRIVE1MIiwiZm9ybWF0dGVkSFRNTCIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsImNsYXNzQWxsIiwiY2xzeCIsIm1lbnUiLCJhY3Rpb24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BR1Y7QUFBQTs7QUFBQSxNQUZG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Q0ksV0FBSyxFQUFHLFNBRFo7QUFFSSxhQUFPLEVBQUcsVUFGZDtBQUdJLGFBQU8sRUFBSU0sWUFIZjtBQUlJLGVBQVMsRUFBSWlCLDZDQUFJLENBQUNILE9BQU8sQ0FBQ0ssTUFBVCxFQUFpQkwsT0FBTyxDQUFDTSxNQUF6QixDQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZERyxlQStESDtBQUNJLFlBQU0sRUFBSSxJQURkO0FBRUksY0FBUSxFQUFJLElBRmhCO0FBR0ksVUFBSSxFQUFJL0MsUUFIWjtBQUlJLFNBQUcsRUFBSVQ7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0RHLGVBcUVIO0FBQ0ksWUFBTSxFQUFJLElBRGQ7QUFFSSxjQUFRLEVBQUksSUFGaEI7QUFHSSxVQUFJLEVBQUlXLE9BSFo7QUFJSSxTQUFHLEVBQUlWO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQTZFSCxDQXBNRDs7R0FBTVYsTztVQUljSSxnRCxFQUNDRSx1RCxFQTZHRHNELG1EOzs7S0FsSGQ1RCxPO0FBc01OLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwODJmMDE4YTRhODk4Njc1MGU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlQnVpbGRlcn0gZnJvbSBcImJ1aWxkLXVpXCI7XHJcbmltcG9ydCB7dW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2h9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB1c2VFeHBvcnRlciBmcm9tIFwiLi4vaG9va3MvdXNlRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL01lbnVCYXJcIjtcclxuXHJcbmNvbnN0IE1lbnVCYXIgPSAoe1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgYnVpbGRlciA9IHVzZUJ1aWxkZXIoKTtcclxuICAgIGNvbnN0IGV4cG9ydGVyID0gdXNlRXhwb3J0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBzYXZlciA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZXhwb3J0ZXJIVE1MID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBleHBvcnRlckNTUyA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXhwb3J0aW5nLCBzZXRFeHBvcnRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtzYXZlTGluaywgc2V0U2F2ZUxpbmtdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaHRtbExpbmssIHNldEhUTUxMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Nzc0xpbmssIHNldENTU0xpbmtdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coYnVpbGRlci5oaXN0b3J5KTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVSZWRvLFxyXG4gICAgICAgIGhhbmRsZVVuZG8sXHJcbiAgICAgICAganNvbixcclxuICAgICAgICBsb2FkVHJlZSxcclxuICAgICAgICBjYW5SZWRvLFxyXG4gICAgICAgIGNhblVuZG8sXHJcbiAgICB9ID0gYnVpbGRlcjtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtjb250ZW50XSwge3R5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgIHNldFNhdmVMaW5rKGxpbmspO1xyXG4gICAgICAgIHNldFNhdmluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2FkID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgLy8gTXVzdCBtYW5hZ2Ugd2l0aCBlZmZlY3RcclxuICAgICAgICAvLyBzaW5jZSByZWFkaW5nIGZpbGVcclxuICAgICAgICAvLyB3aWxsIGJlIGRvbmUgYXN5bmMuXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgICAgc2V0RmlsZShmaWxlKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUV4cG9ydCA9ICgpID0+IHtcclxuICAgICAgICBleHBvcnRlci5oYW5kbGVFeHBvcnQoKTtcclxuICAgICAgICBzZXRFeHBvcnRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXNhdmluZykgcmV0dXJuO1xyXG4gICAgICAgIHNhdmVyLmN1cnJlbnQuY2xpY2soKTtcclxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNhdmVMaW5rKTtcclxuICAgICAgICBzZXRTYXZpbmcoZmFsc2UpO1xyXG4gICAgfSwgW3NhdmluZywgc2F2ZUxpbmtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlLnRleHQoKTtcclxuICAgICAgICBjb250ZW50LnRoZW4odGV4dCA9PiBKU09OLnBhcnNlKHRleHQpKVxyXG4gICAgICAgIC50aGVuKHRyZWUgPT4gYmF0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkVHJlZSh0cmVlKTtcclxuICAgICAgICAgICAgc2V0RmlsZShudWxsKTtcclxuICAgICAgICB9KSkuY2F0Y2goKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNzcyA9IGV4cG9ydGVyLmNzcztcclxuICAgIGNvbnN0IGh0bWwgPSBleHBvcnRlci5odG1sO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWV4cG9ydGluZykgcmV0dXJuO1xyXG4gICAgICAgIGlmIChjc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtjc3NdLCB7dHlwZTogJ3RleHQvY3NzJ30pO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgc2V0Q1NTTGluayhsaW5rKTtcclxuICAgICAgICAgICAgc2V0RXhwb3J0aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGh0bWwpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0SFRNTCA9IGh0bWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgJzxodG1sPicgK1xyXG4gICAgICAgICAgICAgICAgJzxoZWFkPjwvaGVhZD4nICtcclxuICAgICAgICAgICAgICAgICc8Ym9keT4nICsgaHRtbCArICc8L2JvZHk+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9odG1sPidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkSFRNTCA9IGZvcm1hdEhUTUwoaHRtbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbZm9ybWF0dGVkSFRNTF0sIHt0eXBlOiAndGV4dC9odG1sJ30pO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgc2V0SFRNTExpbmsobGluayk7XHJcbiAgICAgICAgICAgIHNldEV4cG9ydGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIGh0bWwsIFxyXG4gICAgICAgIGNzcywgXHJcbiAgICAgICAgZXhwb3J0aW5nLFxyXG4gICAgXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWh0bWxMaW5rKSByZXR1cm47XHJcbiAgICAgICAgZXhwb3J0ZXJIVE1MLmN1cnJlbnQuY2xpY2soKTtcclxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGh0bWxMaW5rKTtcclxuICAgICAgICBzZXRIVE1MTGluayhudWxsKTtcclxuICAgIH0sIFtodG1sTGlua10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjc3NMaW5rKSByZXR1cm47XHJcbiAgICAgICAgZXhwb3J0ZXJDU1MuY3VycmVudC5jbGljaygpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoY3NzTGluayk7XHJcbiAgICAgICAgc2V0Q1NTTGluayhudWxsKTtcclxuICAgIH0sIFtjc3NMaW5rXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gICAgY29uc3QgY2xhc3NBbGwgPSBjbHN4KFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBjbGFzc2VzLm1lbnVcclxuICAgICk7XHJcbiAgICByZXR1cm4gPGRpdiBcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzQWxsfVxyXG4gICAgPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbHN4KGNsYXNzZXMuYWN0aW9uLCBjbGFzc2VzLmJ1dHRvbil9XHJcbiAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlUmVkb31cclxuICAgICAgICAgICAgZGlzYWJsZWQgPSB7IWNhblJlZG99XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWRvXHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Nsc3goY2xhc3Nlcy5hY3Rpb24sIGNsYXNzZXMuYnV0dG9uKX1cclxuICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVVbmRvfVxyXG4gICAgICAgICAgICBkaXNhYmxlZCA9IHshY2FuVW5kb31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFVuZG9cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVTYXZlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgU2F2ZSBcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgZG93bmxvYWQgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgaHJlZiA9IHtzYXZlTGlua31cclxuICAgICAgICAgICAgcmVmID0ge3NhdmVyfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICdsYWJlbCdcclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Nsc3goY2xhc3Nlcy5hY3Rpb24sIGNsYXNzZXMuYnV0dG9uKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIExvYWRcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnZmlsZSdcclxuICAgICAgICAgICAgICAgIG5hbWUgPSAnbG9hZF90cmVlJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlTG9hZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVFeHBvcnR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbHN4KGNsYXNzZXMuYWN0aW9uLCBjbGFzc2VzLmJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBFeHBvcnRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgZG93bmxvYWQgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgaHJlZiA9IHtodG1sTGlua31cclxuICAgICAgICAgICAgcmVmID0ge2V4cG9ydGVySFRNTH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhpZGRlbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICBkb3dubG9hZCA9IHt0cnVlfVxyXG4gICAgICAgICAgICBocmVmID0ge2Nzc0xpbmt9XHJcbiAgICAgICAgICAgIHJlZiA9IHtleHBvcnRlckNTU31cclxuICAgICAgICAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=