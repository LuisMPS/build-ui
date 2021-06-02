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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInJlcGxhY2UiLCJtYXRjaCIsInNvbWUiLCJub2RlIiwibWF0Y2hlcyIsImNzc1J1bGVzIiwiY3NzU3VicnVsZXMiLCJjc3MiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwibWFwIiwic2hlZXQiLCJydWxlcyIsImNzc1RleHQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNqQkMsRUFEaUIsRUFFakJDLElBRmlCLEVBR2hCO0FBQUE7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQywyREFBVSxFQUExQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxTQUFTO0FBQUEsV0FDdEJBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQk4sRUFBckIsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNTyxTQUFTLEdBQUdDLDZEQUFZLENBQUM7QUFDM0JKLFlBQVEsRUFBRUE7QUFEaUIsR0FBRCxDQUE5QjtBQUlBLE1BQU1LLFNBQVMsR0FDWEYsU0FBUyxD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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VBY3Rpb25zLCB1c2VDb2xsZWN0b3J9IGZyb20gJ2J1aWxkLXVpJztcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUV4dHJhY3RvciA9IChcclxuICAgIGlkLFxyXG4gICAgcm9vdFxyXG4pID0+IHtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25zID0gdXNlQWN0aW9ucygpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JzID0+IChcclxuICAgICAgICBzZWxlY3RvcnMuc2VsZWN0QnlJZChpZClcclxuICAgICk7XHJcbiAgICBjb25zdCBjb2xsZWN0ZWQgPSB1c2VDb2xsZWN0b3Ioe1xyXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZXhwb3J0aW5nID0gKFxyXG4gICAgICAgIGNvbGxlY3RlZC5tZXRhLmV4cG9ydGluZyB8fFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRyaWdnZXJNZXRhVXBkYXRlID0gKFxyXG4gICAgICAgIGFjdGlvbnMudW5yZWNvcmRlZC50cmlnZ2VyTWV0YVVwZGF0ZVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGh0bWxSb290ID0gcm9vdC5jdXJyZW50O1xyXG4gICAgICAgIGlmICghZXhwb3J0aW5nIHx8ICFodG1sUm9vdCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgSFRNTFxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBodG1sUm9vdC5vdXRlckhUTUw7XHJcbiAgICAgICAgLy8gRXh0cmFjdCBDU1NcclxuICAgICAgICBjb25zdCBjc3NOb2RlcyA9IFtcclxuICAgICAgICAgICAgaHRtbFJvb3QsIFxyXG4gICAgICAgICAgICAuLi5odG1sUm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXHJcbiAgICAgICAgXTtcclxuICAgICAgICAvLyBDb2RlIGJlbG93IHVzZXMgQ1NTT00gQVBJLlxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZEluY2x1ZGVDU1NSdWxlKGNzc1J1bGUpIHtcclxuICAgICAgICAgICAgLy8gSWYgaHRtbFJvb3Qgb3IgY2hpbGQgbm9kZVxyXG4gICAgICAgICAgICAvLyBpcyB0YXJnZXRlZCBieSBDU1MgU2VsZWN0b3IuXHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlLnNlbGVjdG9yVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JUZXh0ID0gY3NzUnVsZS5zZWxlY3RvclRleHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHNldWRvLXNlbGVjdG9ycy5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JUZXh0LnJlcGxhY2UoLzooXFxTKSsvLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGNzc05vZGVzLnNvbWUobm9kZSA9PiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yVGV4dCwgc2VsZWN0b3IsIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBydWxlIGlzIGEgZ3JvdXBpbmcgQ1NTUnVsZVxyXG4gICAgICAgICAgICAvLyBsaWtlIEBtZWRpYSBvciBAc3VwcG9ydHNcclxuICAgICAgICAgICAgaWYgKGNzc1J1bGUuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzc1N1YnJ1bGVzID0gY3NzUnVsZS5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uY3NzU3VicnVsZXNdLnNvbWUoc2hvdWxkSW5jbHVkZUNTU1J1bGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBydWxlIGNhbm5vdCBiZSBhZHJlc3NlZFxyXG4gICAgICAgICAgICAvLyBlYXNpbHksIGJldHRlciBpbmNsdWRlIHRoYW4gbGVhdmUgXHJcbiAgICAgICAgICAgIC8vIG9mZi4gKFRhcmdldGVkIHRvIG90aGVyIEAgcnVsZXMsIFxyXG4gICAgICAgICAgICAvLyBsaWtlIEBmb250LWZhY2UsIEBrZXlmcmFtZXMsIGV0Yy4uLilcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gY2F1c2Ugc29tZSB1bnVzZWQgQ1NTIHRvIGJlXHJcbiAgICAgICAgICAgIC8vIGV4cG9ydGVkIGJ1dCB3aWxsIG5vdCBleHBvcnQgaW5jb21wbGV0ZVxyXG4gICAgICAgICAgICAvLyBzdHlsZXMuIENhbiBpdCBiZSBvcHRpbWl6ZWQ/XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3NzID0gWy4uLmRvY3VtZW50LnN0eWxlU2hlZXRzXS5tYXAoc2hlZXQgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzUnVsZXMgPSBzaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gWy4uLmNzc1J1bGVzXS5tYXAoY3NzUnVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEluY2x1ZGVDU1NSdWxlKGNzc1J1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdydWxlIGlzJywgY3NzUnVsZS5jc3NUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZS5jc3NUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBKb2luIGFsbCBpbmNsdWRlZCBydWxlcyBmb3IgXHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZXNoZWV0LlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVzLmZpbHRlcihCb29sZWFuKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJbmFjY2VzaWJsZSBzdHlsZXNoZWV0LiBNb3N0XHJcbiAgICAgICAgICAgIC8vIGxpa2VseSBhbiBleHRlcm5hbCBzaGVldCBpbiBhbm90aGVyXHJcbiAgICAgICAgICAgIC8vIGRvbWFpbi5cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBKb2luIGFsbCBpbmNsdWRlZCBydWxlcyBmcm9tIFxyXG4gICAgICAgIC8vIGV2ZXJ5IHN0eWxlc2hlZXQuXHJcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjc3MpO1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB7XHJcbiAgICAgICAgICAgIGV4cG9ydGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXHJcbiAgICAgICAgICAgIGNzczogY3NzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJpZ2dlck1ldGFVcGRhdGUoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIG1ldGE6IG1ldGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUV4dHJhY3RvcjsiXSwic291cmNlUm9vdCI6IiJ9