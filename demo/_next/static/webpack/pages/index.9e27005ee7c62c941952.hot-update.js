webpackHotUpdate_N_E("pages/index",{

/***/ "./src/hooks/useExtractor.js":
/*!***********************************!*\
  !*** ./src/hooks/useExtractor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var build_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! build-ui */ "./node_modules/build-ui/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _s = $RefreshSig$();




var useExtractor = function useExtractor(id, root) {
  _s();

  var actions = Object(build_ui__WEBPACK_IMPORTED_MODULE_1__["useActions"])();

  var selector = function selector(selectors) {
    return selectors.selectById(id);
  };

  var collected = Object(build_ui__WEBPACK_IMPORTED_MODULE_1__["useCollector"])({
    selector: selector
  });
  var exporting = collected.meta.exporting || false;
  var triggerMetaUpdate = actions.unrecorded.triggerMetaUpdate;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var htmlRoot = root.current;
    if (!exporting || !htmlRoot) return; // Extract HTML

    var html = htmlRoot.outerHTML; // Extract CSS

    var cssNodes = [htmlRoot].concat(Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(htmlRoot.getElementsByTagName('*'))); // Code below uses CSSOM API.

    function shouldIncludeCSSRule(cssRule) {
      // If htmlRoot or child node
      // is targeted by CSS Selector.
      if (cssRule.selectorText) {
        var selectorText = cssRule.selectorText; // Remove pseudo-selectors.

        var _selector = selectorText.replace(/:(\S)+/, '');

        console.log(selectorText, _selector);
        var match = cssNodes.some(function (node) {
          return node.matches(_selector);
        });
        return match;
      } // If rule is a grouping CSSRule
      // like @media or @supports


      if (cssRule.cssRules) {
        var cssSubrules = cssRule.cssRules;
        return Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cssSubrules).some(shouldIncludeCSSRule);
      } // In case rule cannot be adressed
      // easily, better include than leave 
      // off. (Targeted to other @ rules, 
      // like @font-face, @keyframes, etc...)
      // This can cause some unused CSS to be
      // exported but will not export incomplete
      // styles. Can it be optimized?
      else {
          return true;
        }
    }

    var css = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(document.styleSheets).map(function (sheet) {
      try {
        var cssRules = sheet.cssRules;

        var rules = Object(C_Users_DELL_Documents_build_ui_examples_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cssRules).map(function (cssRule) {
          if (shouldIncludeCSSRule(cssRule)) {
            // console.log('rule is', cssRule.cssText)
            return cssRule.cssText;
          } else return '';
        }); // Join all included rules for 
        // stylesheet.
        // console.log(rules);


        return rules.filter(Boolean).join('');
      } // Inaccesible stylesheet. Most
      // likely an external sheet in another
      // domain.
      catch (e) {
        console.log(e);
      }
    }) // Join all included rules from 
    // every stylesheet.
    .filter(Boolean).join(''); // console.log(css);


    var meta = {
      exporting: false,
      html: html,
      css: css
    };
    triggerMetaUpdate({
      id: id,
      meta: meta
    });
  });
};

_s(useExtractor, "I3og3703sZVNDfq/pXU/WVf9GUQ=", false, function () {
  return [build_ui__WEBPACK_IMPORTED_MODULE_1__["useActions"], build_ui__WEBPACK_IMPORTED_MODULE_1__["useCollector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (useExtractor);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJzb21lIiwibm9kZSIsIm1hdGNoZXMiLCJjc3NSdWxlcyIsImNzc1N1YnJ1bGVzIiwiY3NzIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsIm1hcCIsInNoZWV0IiwicnVsZXMiLCJjc3NUZXh0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNqQkMsRUFEaUIsRUFFakJDLElBRmlCLEVBR2hCO0FBQUE7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQywyREFBVSxFQUExQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxTQUFTO0FBQUEsV0FDdEJBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQk4sRUFBckIsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNTyxTQUFTLEdBQUdDLDZEQUFZLENBQUM7QUFDM0JKLFlBQVEsRUFBRUE7QUFEaUIsR0FBRCxDQUE5QjtBQUlBLE1BQU1LLFNBQVMsR0FDWEYsU0FBUyxD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ay9wYWdlcy9pbmRleC45ZTI3MDA1ZWU3YzYyYzk0MTk1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VBY3Rpb25zLCB1c2VDb2xsZWN0b3J9IGZyb20gJ2J1aWxkLXVpJztcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUV4dHJhY3RvciA9IChcclxuICAgIGlkLFxyXG4gICAgcm9vdFxyXG4pID0+IHtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25zID0gdXNlQWN0aW9ucygpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JzID0+IChcclxuICAgICAgICBzZWxlY3RvcnMuc2VsZWN0QnlJZChpZClcclxuICAgICk7XHJcbiAgICBjb25zdCBjb2xsZWN0ZWQgPSB1c2VDb2xsZWN0b3Ioe1xyXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZXhwb3J0aW5nID0gKFxyXG4gICAgICAgIGNvbGxlY3RlZC5tZXRhLmV4cG9ydGluZyB8fFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRyaWdnZXJNZXRhVXBkYXRlID0gKFxyXG4gICAgICAgIGFjdGlvbnMudW5yZWNvcmRlZC50cmlnZ2VyTWV0YVVwZGF0ZVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGh0bWxSb290ID0gcm9vdC5jdXJyZW50O1xyXG4gICAgICAgIGlmICghZXhwb3J0aW5nIHx8ICFodG1sUm9vdCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgSFRNTFxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBodG1sUm9vdC5vdXRlckhUTUw7XHJcbiAgICAgICAgLy8gRXh0cmFjdCBDU1NcclxuICAgICAgICBjb25zdCBjc3NOb2RlcyA9IFtcclxuICAgICAgICAgICAgaHRtbFJvb3QsIFxyXG4gICAgICAgICAgICAuLi5odG1sUm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXHJcbiAgICAgICAgXTtcclxuICAgICAgICAvLyBDb2RlIGJlbG93IHVzZXMgQ1NTT00gQVBJLlxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZEluY2x1ZGVDU1NSdWxlKGNzc1J1bGUpIHtcclxuICAgICAgICAgICAgLy8gSWYgaHRtbFJvb3Qgb3IgY2hpbGQgbm9kZVxyXG4gICAgICAgICAgICAvLyBpcyB0YXJnZXRlZCBieSBDU1MgU2VsZWN0b3IuXHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlLnNlbGVjdG9yVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JUZXh0ID0gY3NzUnVsZS5zZWxlY3RvclRleHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHNldWRvLXNlbGVjdG9ycy5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JUZXh0LnJlcGxhY2UoLzooXFxTKSsvLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvclRleHQsIHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY3NzTm9kZXMuc29tZShub2RlID0+IG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIHJ1bGUgaXMgYSBncm91cGluZyBDU1NSdWxlXHJcbiAgICAgICAgICAgIC8vIGxpa2UgQG1lZGlhIG9yIEBzdXBwb3J0c1xyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzU3VicnVsZXMgPSBjc3NSdWxlLmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5jc3NTdWJydWxlc10uc29tZShzaG91bGRJbmNsdWRlQ1NTUnVsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHJ1bGUgY2Fubm90IGJlIGFkcmVzc2VkXHJcbiAgICAgICAgICAgIC8vIGVhc2lseSwgYmV0dGVyIGluY2x1ZGUgdGhhbiBsZWF2ZSBcclxuICAgICAgICAgICAgLy8gb2ZmLiAoVGFyZ2V0ZWQgdG8gb3RoZXIgQCBydWxlcywgXHJcbiAgICAgICAgICAgIC8vIGxpa2UgQGZvbnQtZmFjZSwgQGtleWZyYW1lcywgZXRjLi4uKVxyXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBjYXVzZSBzb21lIHVudXNlZCBDU1MgdG8gYmVcclxuICAgICAgICAgICAgLy8gZXhwb3J0ZWQgYnV0IHdpbGwgbm90IGV4cG9ydCBpbmNvbXBsZXRlXHJcbiAgICAgICAgICAgIC8vIHN0eWxlcy4gQ2FuIGl0IGJlIG9wdGltaXplZD9cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjc3MgPSBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLm1hcChzaGVldCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NSdWxlcyA9IHNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBbLi4uY3NzUnVsZXNdLm1hcChjc3NSdWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSW5jbHVkZUNTU1J1bGUoY3NzUnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3J1bGUgaXMnLCBjc3NSdWxlLmNzc1RleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NSdWxlLmNzc1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIEpvaW4gYWxsIGluY2x1ZGVkIHJ1bGVzIGZvciBcclxuICAgICAgICAgICAgICAgIC8vIHN0eWxlc2hlZXQuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhydWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluYWNjZXNpYmxlIHN0eWxlc2hlZXQuIE1vc3RcclxuICAgICAgICAgICAgLy8gbGlrZWx5IGFuIGV4dGVybmFsIHNoZWV0IGluIGFub3RoZXJcclxuICAgICAgICAgICAgLy8gZG9tYWluLlxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEpvaW4gYWxsIGluY2x1ZGVkIHJ1bGVzIGZyb20gXHJcbiAgICAgICAgLy8gZXZlcnkgc3R5bGVzaGVldC5cclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgLmpvaW4oJycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNzcyk7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHtcclxuICAgICAgICAgICAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaHRtbDogaHRtbCxcclxuICAgICAgICAgICAgY3NzOiBjc3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cmlnZ2VyTWV0YVVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgbWV0YTogbWV0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRXh0cmFjdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=