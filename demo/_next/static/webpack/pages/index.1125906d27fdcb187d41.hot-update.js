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

        var match = cssNodes.some(function (node) {
          return node.matches(_selector);
        }); // console.log(selectorText, selector, match);

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
            console.log('rule is', cssRule.cssText);
            return cssRule.cssText;
          }

          return null;
        }) // Join all included rules for 
        // stylesheet.
        .filter(Boolean);

        console.log(rules);
        return rules.join('');
      } // Inaccesible stylesheet. Most
      // likely an external sheet in another
      // domain.
      catch (e) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInJlcGxhY2UiLCJtYXRjaCIsInNvbWUiLCJub2RlIiwibWF0Y2hlcyIsImNzc1J1bGVzIiwiY3NzU3VicnVsZXMiLCJjc3MiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwibWFwIiwic2hlZXQiLCJydWxlcyIsImNvbnNvbGUiLCJsb2ciLCJjc3NUZXh0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNqQkMsRUFEaUIsRUFFakJDLElBRmlCLEVBR2hCO0FBQUE7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQywyREFBVSxFQUExQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxTQUFTO0FBQUEsV0FDdEJBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQk4sRUFBckIsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNTyxTQUFTLEdBQUdDLDZEQUFZLENBQUM7QUFDM0JKLFlBQVEsRUFBRUE7QUFEaUIsR0FBRCxDQUE5QjtBQUlBLE1BQU1LLFNBQVMsR0FDWEYsU0FBUyxD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ZWJwYWNrL3BhZ2VzL2luZGV4LjExMjU5MDZkMjdmZGNiMTg3ZDQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUFjdGlvbnMsIHVzZUNvbGxlY3Rvcn0gZnJvbSAnYnVpbGQtdWknO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlRXh0cmFjdG9yID0gKFxyXG4gICAgaWQsXHJcbiAgICByb290XHJcbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbnMgPSB1c2VBY3Rpb25zKCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnMgPT4gKFxyXG4gICAgICAgIHNlbGVjdG9ycy5zZWxlY3RCeUlkKGlkKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbGxlY3RlZCA9IHVzZUNvbGxlY3Rvcih7XHJcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRpbmcgPSAoXHJcbiAgICAgICAgY29sbGVjdGVkLm1ldGEuZXhwb3J0aW5nIHx8XHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdHJpZ2dlck1ldGFVcGRhdGUgPSAoXHJcbiAgICAgICAgYWN0aW9ucy51bnJlY29yZGVkLnRyaWdnZXJNZXRhVXBkYXRlXHJcbiAgICApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHRtbFJvb3QgPSByb290LmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCFleHBvcnRpbmcgfHwgIWh0bWxSb290KSByZXR1cm47XHJcbiAgICAgICAgLy8gRXh0cmFjdCBIVE1MXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGh0bWxSb290Lm91dGVySFRNTDtcclxuICAgICAgICAvLyBFeHRyYWN0IENTU1xyXG4gICAgICAgIGNvbnN0IGNzc05vZGVzID0gW1xyXG4gICAgICAgICAgICBodG1sUm9vdCwgXHJcbiAgICAgICAgICAgIC4uLmh0bWxSb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIENvZGUgYmVsb3cgdXNlcyBDU1NPTSBBUEkuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdWxkSW5jbHVkZUNTU1J1bGUoY3NzUnVsZSkge1xyXG4gICAgICAgICAgICAvLyBJZiBodG1sUm9vdCBvciBjaGlsZCBub2RlXHJcbiAgICAgICAgICAgIC8vIGlzIHRhcmdldGVkIGJ5IENTUyBTZWxlY3Rvci5cclxuICAgICAgICAgICAgaWYgKGNzc1J1bGUuc2VsZWN0b3JUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvclRleHQgPSBjc3NSdWxlLnNlbGVjdG9yVGV4dDtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwc2V1ZG8tc2VsZWN0b3JzLlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvclRleHQucmVwbGFjZSgvOihcXFMpKy8sICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY3NzTm9kZXMuc29tZShub2RlID0+IG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0b3JUZXh0LCBzZWxlY3RvciwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIHJ1bGUgaXMgYSBncm91cGluZyBDU1NSdWxlXHJcbiAgICAgICAgICAgIC8vIGxpa2UgQG1lZGlhIG9yIEBzdXBwb3J0c1xyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzU3VicnVsZXMgPSBjc3NSdWxlLmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5jc3NTdWJydWxlc10uc29tZShzaG91bGRJbmNsdWRlQ1NTUnVsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHJ1bGUgY2Fubm90IGJlIGFkcmVzc2VkXHJcbiAgICAgICAgICAgIC8vIGVhc2lseSwgYmV0dGVyIGluY2x1ZGUgdGhhbiBsZWF2ZSBcclxuICAgICAgICAgICAgLy8gb2ZmLiAoVGFyZ2V0ZWQgdG8gb3RoZXIgQCBydWxlcywgXHJcbiAgICAgICAgICAgIC8vIGxpa2UgQGZvbnQtZmFjZSwgQGtleWZyYW1lcywgZXRjLi4uKVxyXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBjYXVzZSBzb21lIHVudXNlZCBDU1MgdG8gYmVcclxuICAgICAgICAgICAgLy8gZXhwb3J0ZWQgYnV0IHdpbGwgbm90IGV4cG9ydCBpbmNvbXBsZXRlXHJcbiAgICAgICAgICAgIC8vIHN0eWxlcy4gQ2FuIGl0IGJlIG9wdGltaXplZD9cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjc3MgPSBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLm1hcChzaGVldCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NSdWxlcyA9IHNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBbLi4uY3NzUnVsZXNdLm1hcChjc3NSdWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSW5jbHVkZUNTU1J1bGUoY3NzUnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bGUgaXMnLCBjc3NSdWxlLmNzc1RleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NSdWxlLmNzc1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIEpvaW4gYWxsIGluY2x1ZGVkIHJ1bGVzIGZvciBcclxuICAgICAgICAgICAgICAgIC8vIHN0eWxlc2hlZXQuXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhydWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXMuam9pbignJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW5hY2Nlc2libGUgc3R5bGVzaGVldC4gTW9zdFxyXG4gICAgICAgICAgICAvLyBsaWtlbHkgYW4gZXh0ZXJuYWwgc2hlZXQgaW4gYW5vdGhlclxyXG4gICAgICAgICAgICAvLyBkb21haW4uXHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEpvaW4gYWxsIGluY2x1ZGVkIHJ1bGVzIGZyb20gXHJcbiAgICAgICAgLy8gZXZlcnkgc3R5bGVzaGVldC5cclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgLmpvaW4oJycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNzcyk7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHtcclxuICAgICAgICAgICAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaHRtbDogaHRtbCxcclxuICAgICAgICAgICAgY3NzOiBjc3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cmlnZ2VyTWV0YVVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgbWV0YTogbWV0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRXh0cmFjdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=