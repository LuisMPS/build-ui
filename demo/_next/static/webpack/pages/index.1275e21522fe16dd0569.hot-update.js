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
      lineNumber: 132,
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
      lineNumber: 142,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "primary",
      variant: "outlined",
      onClick: handleSave,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.action, classes.button),
      children: "Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      hidden: true,
      download: true,
      href: saveLink,
      ref: saver
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      type: "file",
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
      lineNumber: 167,
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
    lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcyJdLCJuYW1lcyI6WyJNZW51QmFyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJidWlsZGVyIiwidXNlQnVpbGRlciIsImV4cG9ydGVyIiwidXNlRXhwb3J0ZXIiLCJzYXZlciIsInVzZVJlZiIsImV4cG9ydGVySFRNTCIsImV4cG9ydGVyQ1NTIiwidXNlU3RhdGUiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJleHBvcnRpbmciLCJzZXRFeHBvcnRpbmciLCJzYXZlTGluayIsInNldFNhdmVMaW5rIiwiaHRtbExpbmsiLCJzZXRIVE1MTGluayIsImNzc0xpbmsiLCJzZXRDU1NMaW5rIiwiZmlsZSIsInNldEZpbGUiLCJoYW5kbGVSZWRvIiwiaGFuZGxlVW5kbyIsImpzb24iLCJsb2FkVHJlZSIsImNhblJlZG8iLCJjYW5VbmRvIiwiaGFuZGxlU2F2ZSIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiQmxvYiIsInR5cGUiLCJsaW5rIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlTG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVFeHBvcnQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJ0ZXh0IiwidGhlbiIsInBhcnNlIiwidHJlZSIsImJhdGNoIiwiY3NzIiwiaHRtbCIsImZvcm1hdEhUTUwiLCJmb3JtYXR0ZWRIVE1MIiwiY2xhc3NlcyIsInVzZVN0eWxlIiwiY2xhc3NBbGwiLCJjbHN4IiwibWVudSIsImFjdGlvbiIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FHVjtBQUFBOztBQUFBLE1BRkZDLFNBRUUsUUFGRkEsU0FF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QUFHLFVBRmQ7QUFHSSxhQUFPLEVBQUlJLFlBSGY7QUFJSSxlQUFTLEVBQUlpQiw2Q0FBSSxDQUFDSCxPQUFPLENBQUNLLE1BQVQsRUFBaUJMLE9BQU8sQ0FBQ00sTUFBekIsQ0FKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4REcsZUFnRUg7QUFDSSxZQUFNLEVBQUksSUFEZDtBQUVJLGNBQVEsRUFBSSxJQUZoQjtBQUdJLFVBQUksRUFBSTdDLFFBSFo7QUFJSSxTQUFHLEVBQUlUO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhFRyxlQXNFSDtBQUNJLFlBQU0sRUFBSSxJQURkO0FBRUksY0FBUSxFQUFJLElBRmhCO0FBR0ksVUFBSSxFQUFJVyxPQUhaO0FBSUksU0FBRyxFQUFJVjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0RUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUE4RUgsQ0FwTUQ7O0dBQU1WLE87VUFJY0ksZ0QsRUFDQ0UsdUQsRUE0R0RvRCxtRDs7O0tBakhkMUQsTztBQXNNTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjc1ZTIxNTIyZmUxNmRkMDU2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZUJ1aWxkZXJ9IGZyb20gXCJidWlsZC11aVwiO1xyXG5pbXBvcnQge3Vuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNofSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgdXNlRXhwb3J0ZXIgZnJvbSBcIi4uL2hvb2tzL3VzZUV4cG9ydGVyXCI7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tIFwiLi9zdHlsZS9NZW51QmFyXCI7XHJcblxyXG5jb25zdCBNZW51QmFyID0gKHtcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGJ1aWxkZXIgPSB1c2VCdWlsZGVyKCk7XHJcbiAgICBjb25zdCBleHBvcnRlciA9IHVzZUV4cG9ydGVyKCk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZXIgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGV4cG9ydGVySFRNTCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZXhwb3J0ZXJDU1MgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2V4cG9ydGluZywgc2V0RXhwb3J0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2F2ZUxpbmssIHNldFNhdmVMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2h0bWxMaW5rLCBzZXRIVE1MTGlua10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjc3NMaW5rLCBzZXRDU1NMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGJ1aWxkZXIuaGlzdG9yeSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlUmVkbyxcclxuICAgICAgICBoYW5kbGVVbmRvLFxyXG4gICAgICAgIGpzb24sXHJcbiAgICAgICAgbG9hZFRyZWUsXHJcbiAgICAgICAgY2FuUmVkbyxcclxuICAgICAgICBjYW5VbmRvLFxyXG4gICAgfSA9IGJ1aWxkZXI7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbY29udGVudF0sIHt0eXBlOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCBsaW5rID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICBzZXRTYXZlTGluayhsaW5rKTtcclxuICAgICAgICBzZXRTYXZpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9hZCA9IGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIC8vIE11c3QgbWFuYWdlIHdpdGggZWZmZWN0XHJcbiAgICAgICAgLy8gc2luY2UgcmVhZGluZyBmaWxlXHJcbiAgICAgICAgLy8gd2lsbCBiZSBkb25lIGFzeW5jLlxyXG4gICAgICAgIHNldEZpbGUoZmlsZSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVFeHBvcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZXhwb3J0ZXIuaGFuZGxlRXhwb3J0KCk7XHJcbiAgICAgICAgc2V0RXhwb3J0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzYXZpbmcpIHJldHVybjtcclxuICAgICAgICBzYXZlci5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzYXZlTGluayk7XHJcbiAgICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcclxuICAgIH0sIFtzYXZpbmcsIHNhdmVMaW5rXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZmlsZS50ZXh0KCk7XHJcbiAgICAgICAgY29udGVudC50aGVuKHRleHQgPT4gSlNPTi5wYXJzZSh0ZXh0KSlcclxuICAgICAgICAudGhlbih0cmVlID0+IGJhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgbG9hZFRyZWUodHJlZSk7XHJcbiAgICAgICAgICAgIHNldEZpbGUobnVsbCk7XHJcbiAgICAgICAgfSkpLmNhdGNoKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjc3MgPSBleHBvcnRlci5jc3M7XHJcbiAgICBjb25zdCBodG1sID0gZXhwb3J0ZXIuaHRtbDtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFleHBvcnRpbmcpIHJldHVybjtcclxuICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbY3NzXSwge3R5cGU6ICd0ZXh0L2Nzcyd9KTtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIHNldENTU0xpbmsobGluayk7XHJcbiAgICAgICAgICAgIHNldEV4cG9ydGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChodG1sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdEhUTUwgPSBodG1sID0+IChcclxuICAgICAgICAgICAgICAgICc8aHRtbD4nICtcclxuICAgICAgICAgICAgICAgICc8aGVhZD48L2hlYWQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPGJvZHk+JyArIGh0bWwgKyAnPC9ib2R5PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvaHRtbD4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZEhUTUwgPSBmb3JtYXRIVE1MKGh0bWwpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gbmV3IEJsb2IoW2Zvcm1hdHRlZEhUTUxdLCB7dHlwZTogJ3RleHQvaHRtbCd9KTtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIHNldEhUTUxMaW5rKGxpbmspO1xyXG4gICAgICAgICAgICBzZXRFeHBvcnRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBodG1sLCBcclxuICAgICAgICBjc3MsIFxyXG4gICAgICAgIGV4cG9ydGluZyxcclxuICAgIF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFodG1sTGluaykgcmV0dXJuO1xyXG4gICAgICAgIGV4cG9ydGVySFRNTC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChodG1sTGluayk7XHJcbiAgICAgICAgc2V0SFRNTExpbmsobnVsbCk7XHJcbiAgICB9LCBbaHRtbExpbmtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghY3NzTGluaykgcmV0dXJuO1xyXG4gICAgICAgIGV4cG9ydGVyQ1NTLmN1cnJlbnQuY2xpY2soKTtcclxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGNzc0xpbmspO1xyXG4gICAgICAgIHNldENTU0xpbmsobnVsbCk7XHJcbiAgICB9LCBbY3NzTGlua10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICAgIGNvbnN0IGNsYXNzQWxsID0gY2xzeChcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgY2xhc3Nlcy5tZW51XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxkaXYgXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc0FsbH1cclxuICAgID5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvciA9ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICB2YXJpYW50ID0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xzeChjbGFzc2VzLmFjdGlvbiwgY2xhc3Nlcy5idXR0b24pfVxyXG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZVJlZG99XHJcbiAgICAgICAgICAgIGRpc2FibGVkID0geyFjYW5SZWRvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgUmVkb1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbHN4KGNsYXNzZXMuYWN0aW9uLCBjbGFzc2VzLmJ1dHRvbil9XHJcbiAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlVW5kb31cclxuICAgICAgICAgICAgZGlzYWJsZWQgPSB7IWNhblVuZG99XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBVbmRvXHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSAnb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2sgPSB7aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Nsc3goY2xhc3Nlcy5hY3Rpb24sIGNsYXNzZXMuYnV0dG9uKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdmUgXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgICAgaGlkZGVuID0ge3RydWV9XHJcbiAgICAgICAgICAgIGRvd25sb2FkID0ge3RydWV9XHJcbiAgICAgICAgICAgIGhyZWYgPSB7c2F2ZUxpbmt9XHJcbiAgICAgICAgICAgIHJlZiA9IHtzYXZlcn1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICB0eXBlID0gJ2ZpbGUnXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICdsYWJlbCdcclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Nsc3goY2xhc3Nlcy5hY3Rpb24sIGNsYXNzZXMuYnV0dG9uKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIExvYWRcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnZmlsZSdcclxuICAgICAgICAgICAgICAgIG5hbWUgPSAnbG9hZF90cmVlJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlTG9hZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcclxuICAgICAgICAgICAgdmFyaWFudCA9ICdvdXRsaW5lZCdcclxuICAgICAgICAgICAgb25DbGljayA9IHtoYW5kbGVFeHBvcnR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbHN4KGNsYXNzZXMuYWN0aW9uLCBjbGFzc2VzLmJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBFeHBvcnRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBoaWRkZW4gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgZG93bmxvYWQgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgaHJlZiA9IHtodG1sTGlua31cclxuICAgICAgICAgICAgcmVmID0ge2V4cG9ydGVySFRNTH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhpZGRlbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICBkb3dubG9hZCA9IHt0cnVlfVxyXG4gICAgICAgICAgICBocmVmID0ge2Nzc0xpbmt9XHJcbiAgICAgICAgICAgIHJlZiA9IHtleHBvcnRlckNTU31cclxuICAgICAgICAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=