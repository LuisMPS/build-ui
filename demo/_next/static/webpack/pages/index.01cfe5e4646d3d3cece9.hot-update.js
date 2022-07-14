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
    event.target.value = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcyJdLCJuYW1lcyI6WyJNZW51QmFyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJidWlsZGVyIiwidXNlQnVpbGRlciIsImV4cG9ydGVyIiwidXNlRXhwb3J0ZXIiLCJzYXZlciIsInVzZVJlZiIsImV4cG9ydGVySFRNTCIsImV4cG9ydGVyQ1NTIiwidXNlU3RhdGUiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJleHBvcnRpbmciLCJzZXRFeHBvcnRpbmciLCJzYXZlTGluayIsInNldFNhdmVMaW5rIiwiaHRtbExpbmsiLCJzZXRIVE1MTGluayIsImNzc0xpbmsiLCJzZXRDU1NMaW5rIiwiZmlsZSIsInNldEZpbGUiLCJoYW5kbGVSZWRvIiwiaGFuZGxlVW5kbyIsImpzb24iLCJsb2FkVHJlZSIsImNhblJlZG8iLCJjYW5VbmRvIiwiaGFuZGxlU2F2ZSIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiQmxvYiIsInR5cGUiLCJsaW5rIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlTG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJ2YWx1ZSIsImhhbmRsZUV4cG9ydCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjbGljayIsInJldm9rZU9iamVjdFVSTCIsInRleHQiLCJ0aGVuIiwicGFyc2UiLCJ0cmVlIiwiYmF0Y2giLCJjc3MiLCJodG1sIiwiZm9ybWF0SFRNTCIsImZvcm1hdHRlZEhUTUwiLCJjbGFzc2VzIiwidXNlU3R5bGUiLCJjbGFzc0FsbCIsImNsc3giLCJtZW51IiwiYWN0aW9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUdWO0FBQUE7O0FBQUEsTUFGRkMsU0FFRSxR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LGFBeENHLGVBdURILDhEQUFDLDZEQUFEO0FBQ0ksV0FBSyxFQUFHLFNBRFo7QUFFSSxhQUFPLEVBQUcsVUFGZDtBQUdJLGFBQU8sRUFBSUssWUFIZjtBQUlJLGVBQVMsRUFBSWlCLDZDQUFJLENBQUNILE9BQU8sQ0FBQ0ssTUFBVCxFQUFpQkwsT0FBTyxDQUFDTSxNQUF6QixDQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZERyxlQStESDtBQUNJLFlBQU0sRUFBSSxJQURkO0FBRUksY0FBUSxFQUFJLElBRmhCO0FBR0ksVUFBSSxFQUFJOUMsUUFIWjtBQUlJLFNBQUcsRUFBSVQ7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0RHLGVBcUVIO0FBQ0ksWUFBTSxFQUFJLElBRGQ7QUFFSSxjQUFRLEVBQUksSUFGaEI7QUFHSSxVQUFJLEVBQUlXLE9BSFo7QUFJSSxTQUFHLEVBQUlWO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQTZFSCxDQXJNRDs7R0FBTVYsTztVQUljSSxnRCxFQUNDRSx1RCxFQThHRHFELG1EOzs7S0FuSGQzRCxPO0FBdU1OLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxY2ZlNWU0NjQ2ZDNkM2NlY2U5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlQnVpbGRlcn0gZnJvbSBcImJ1aWxkLXVpXCI7XHJcbmltcG9ydCB7dW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2h9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB1c2VFeHBvcnRlciBmcm9tIFwiLi4vaG9va3MvdXNlRXhwb3J0ZXJcIjtcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gXCIuL3N0eWxlL01lbnVCYXJcIjtcclxuXHJcbmNvbnN0IE1lbnVCYXIgPSAoe1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgYnVpbGRlciA9IHVzZUJ1aWxkZXIoKTtcclxuICAgIGNvbnN0IGV4cG9ydGVyID0gdXNlRXhwb3J0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBzYXZlciA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZXhwb3J0ZXJIVE1MID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBleHBvcnRlckNTUyA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXhwb3J0aW5nLCBzZXRFeHBvcnRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtzYXZlTGluaywgc2V0U2F2ZUxpbmtdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaHRtbExpbmssIHNldEhUTUxMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Nzc0xpbmssIHNldENTU0xpbmtdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coYnVpbGRlci5oaXN0b3J5KTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVSZWRvLFxyXG4gICAgICAgIGhhbmRsZVVuZG8sXHJcbiAgICAgICAganNvbixcclxuICAgICAgICBsb2FkVHJlZSxcclxuICAgICAgICBjYW5SZWRvLFxyXG4gICAgICAgIGNhblVuZG8sXHJcbiAgICB9ID0gYnVpbGRlcjtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtjb250ZW50XSwge3R5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgIHNldFNhdmVMaW5rKGxpbmspO1xyXG4gICAgICAgIHNldFNhdmluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2FkID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbnVsbDtcclxuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgICAgICAvLyBNdXN0IG1hbmFnZSB3aXRoIGVmZmVjdFxyXG4gICAgICAgIC8vIHNpbmNlIHJlYWRpbmcgZmlsZVxyXG4gICAgICAgIC8vIHdpbGwgYmUgZG9uZSBhc3luYy5cclxuICAgICAgICBzZXRGaWxlKGZpbGUpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXhwb3J0ID0gKCkgPT4ge1xyXG4gICAgICAgIGV4cG9ydGVyLmhhbmRsZUV4cG9ydCgpO1xyXG4gICAgICAgIHNldEV4cG9ydGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2F2aW5nKSByZXR1cm47XHJcbiAgICAgICAgc2F2ZXIuY3VycmVudC5jbGljaygpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2F2ZUxpbmspO1xyXG4gICAgICAgIHNldFNhdmluZyhmYWxzZSk7XHJcbiAgICB9LCBbc2F2aW5nLCBzYXZlTGlua10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZpbGUudGV4dCgpO1xyXG4gICAgICAgIGNvbnRlbnQudGhlbih0ZXh0ID0+IEpTT04ucGFyc2UodGV4dCkpXHJcbiAgICAgICAgLnRoZW4odHJlZSA9PiBiYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRUcmVlKHRyZWUpO1xyXG4gICAgICAgICAgICBzZXRGaWxlKG51bGwpO1xyXG4gICAgICAgIH0pKS5jYXRjaCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3NzID0gZXhwb3J0ZXIuY3NzO1xyXG4gICAgY29uc3QgaHRtbCA9IGV4cG9ydGVyLmh0bWw7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZXhwb3J0aW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGNzcykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gbmV3IEJsb2IoW2Nzc10sIHt0eXBlOiAndGV4dC9jc3MnfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBzZXRDU1NMaW5rKGxpbmspO1xyXG4gICAgICAgICAgICBzZXRFeHBvcnRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaHRtbCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRIVE1MID0gaHRtbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAnPGh0bWw+JyArXHJcbiAgICAgICAgICAgICAgICAnPGhlYWQ+PC9oZWFkPicgK1xyXG4gICAgICAgICAgICAgICAgJzxib2R5PicgKyBodG1sICsgJzwvYm9keT4nICtcclxuICAgICAgICAgICAgICAgICc8L2h0bWw+J1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRIVE1MID0gZm9ybWF0SFRNTChodG1sKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtmb3JtYXR0ZWRIVE1MXSwge3R5cGU6ICd0ZXh0L2h0bWwnfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBzZXRIVE1MTGluayhsaW5rKTtcclxuICAgICAgICAgICAgc2V0RXhwb3J0aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgaHRtbCwgXHJcbiAgICAgICAgY3NzLCBcclxuICAgICAgICBleHBvcnRpbmcsXHJcbiAgICBdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghaHRtbExpbmspIHJldHVybjtcclxuICAgICAgICBleHBvcnRlckhUTUwuY3VycmVudC5jbGljaygpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoaHRtbExpbmspO1xyXG4gICAgICAgIHNldEhUTUxMaW5rKG51bGwpO1xyXG4gICAgfSwgW2h0bWxMaW5rXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNzc0xpbmspIHJldHVybjtcclxuICAgICAgICBleHBvcnRlckNTUy5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChjc3NMaW5rKTtcclxuICAgICAgICBzZXRDU1NMaW5rKG51bGwpO1xyXG4gICAgfSwgW2Nzc0xpbmtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgICBjb25zdCBjbGFzc0FsbCA9IGNsc3goXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGNsYXNzZXMubWVudVxyXG4gICAgKTtcclxuICAgIHJldHVybiA8ZGl2IFxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NBbGx9XHJcbiAgICA+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Nsc3goY2xhc3Nlcy5hY3Rpb24sIGNsYXNzZXMuYnV0dG9uKX1cclxuICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVSZWRvfVxyXG4gICAgICAgICAgICBkaXNhYmxlZCA9IHshY2FuUmVkb31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZG9cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZVVuZG99XHJcbiAgICAgICAgICAgIGRpc2FibGVkID0geyFjYW5VbmRvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgVW5kb1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbHN4KGNsYXNzZXMuYWN0aW9uLCBjbGFzc2VzLmJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlIFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhpZGRlbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICBkb3dubG9hZCA9IHt0cnVlfVxyXG4gICAgICAgICAgICBocmVmID0ge3NhdmVMaW5rfVxyXG4gICAgICAgICAgICByZWYgPSB7c2F2ZXJ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gJ2xhYmVsJ1xyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgTG9hZFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGhpZGRlbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdmaWxlJ1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdsb2FkX3RyZWUnXHJcbiAgICAgICAgICAgICAgICBvbklucHV0ID0ge2hhbmRsZUxvYWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlRXhwb3J0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgRXhwb3J0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgICAgaGlkZGVuID0ge3RydWV9XHJcbiAgICAgICAgICAgIGRvd25sb2FkID0ge3RydWV9XHJcbiAgICAgICAgICAgIGhyZWYgPSB7aHRtbExpbmt9XHJcbiAgICAgICAgICAgIHJlZiA9IHtleHBvcnRlckhUTUx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgZG93bmxvYWQgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgaHJlZiA9IHtjc3NMaW5rfVxyXG4gICAgICAgICAgICByZWYgPSB7ZXhwb3J0ZXJDU1N9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJhcjsiXSwic291cmNlUm9vdCI6IiJ9