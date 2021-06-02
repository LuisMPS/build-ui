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
            return cssRule.cssText;
          } else return '';
        }); // Join all included rules for 
        // stylesheet.
        // console.log(rules);


        return rules.join('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJzb21lIiwibm9kZSIsIm1hdGNoZXMiLCJjc3NSdWxlcyIsImNzc1N1YnJ1bGVzIiwiY3NzIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsIm1hcCIsInNoZWV0IiwicnVsZXMiLCJjc3NUZXh0Iiwiam9pbiIsImUiLCJmaWx0ZXIiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNqQkMsRUFEaUIsRUFFakJDLElBRmlCLEVBR2hCO0FBQUE7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQywyREFBVSxFQUExQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxTQUFTO0FBQUEsV0FDdEJBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQk4sRUFBckIsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNTyxTQUFTLEdBQUdDLDZEQUFZLENBQUM7QUFDM0JKLFlBQVEsRUFBRUE7QUFEaUIsR0FBRCxDQUE5QjtBQUlBLE1BQU1LLFNBQVMsR0FDWEYsU0FBUyxD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MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQWN0aW9ucywgdXNlQ29sbGVjdG9yfSBmcm9tICdidWlsZC11aSc7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VFeHRyYWN0b3IgPSAoXHJcbiAgICBpZCxcclxuICAgIHJvb3RcclxuKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IHVzZUFjdGlvbnMoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9ycyA9PiAoXHJcbiAgICAgICAgc2VsZWN0b3JzLnNlbGVjdEJ5SWQoaWQpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29sbGVjdGVkID0gdXNlQ29sbGVjdG9yKHtcclxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydGluZyA9IChcclxuICAgICAgICBjb2xsZWN0ZWQubWV0YS5leHBvcnRpbmcgfHxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0cmlnZ2VyTWV0YVVwZGF0ZSA9IChcclxuICAgICAgICBhY3Rpb25zLnVucmVjb3JkZWQudHJpZ2dlck1ldGFVcGRhdGVcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBodG1sUm9vdCA9IHJvb3QuY3VycmVudDtcclxuICAgICAgICBpZiAoIWV4cG9ydGluZyB8fCAhaHRtbFJvb3QpIHJldHVybjtcclxuICAgICAgICAvLyBFeHRyYWN0IEhUTUxcclxuICAgICAgICBjb25zdCBodG1sID0gaHRtbFJvb3Qub3V0ZXJIVE1MO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgQ1NTXHJcbiAgICAgICAgY29uc3QgY3NzTm9kZXMgPSBbXHJcbiAgICAgICAgICAgIGh0bWxSb290LCBcclxuICAgICAgICAgICAgLi4uaHRtbFJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gQ29kZSBiZWxvdyB1c2VzIENTU09NIEFQSS5cclxuICAgICAgICBmdW5jdGlvbiBzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGh0bWxSb290IG9yIGNoaWxkIG5vZGVcclxuICAgICAgICAgICAgLy8gaXMgdGFyZ2V0ZWQgYnkgQ1NTIFNlbGVjdG9yLlxyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yVGV4dCA9IGNzc1J1bGUuc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBzZXVkby1zZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKC86KFxcUykrLywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0b3JUZXh0LCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGNzc05vZGVzLnNvbWUobm9kZSA9PiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBydWxlIGlzIGEgZ3JvdXBpbmcgQ1NTUnVsZVxyXG4gICAgICAgICAgICAvLyBsaWtlIEBtZWRpYSBvciBAc3VwcG9ydHNcclxuICAgICAgICAgICAgaWYgKGNzc1J1bGUuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzc1N1YnJ1bGVzID0gY3NzUnVsZS5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uY3NzU3VicnVsZXNdLnNvbWUoc2hvdWxkSW5jbHVkZUNTU1J1bGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBydWxlIGNhbm5vdCBiZSBhZHJlc3NlZFxyXG4gICAgICAgICAgICAvLyBlYXNpbHksIGJldHRlciBpbmNsdWRlIHRoYW4gbGVhdmUgXHJcbiAgICAgICAgICAgIC8vIG9mZi4gKFRhcmdldGVkIHRvIG90aGVyIEAgcnVsZXMsIFxyXG4gICAgICAgICAgICAvLyBsaWtlIEBmb250LWZhY2UsIEBrZXlmcmFtZXMsIGV0Yy4uLilcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gY2F1c2Ugc29tZSB1bnVzZWQgQ1NTIHRvIGJlXHJcbiAgICAgICAgICAgIC8vIGV4cG9ydGVkIGJ1dCB3aWxsIG5vdCBleHBvcnQgaW5jb21wbGV0ZVxyXG4gICAgICAgICAgICAvLyBzdHlsZXMuIENhbiBpdCBiZSBvcHRpbWl6ZWQ/XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3NzID0gWy4uLmRvY3VtZW50LnN0eWxlU2hlZXRzXS5tYXAoc2hlZXQgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzUnVsZXMgPSBzaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gWy4uLmNzc1J1bGVzXS5tYXAoY3NzUnVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEluY2x1ZGVDU1NSdWxlKGNzc1J1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NSdWxlLmNzc1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIEpvaW4gYWxsIGluY2x1ZGVkIHJ1bGVzIGZvciBcclxuICAgICAgICAgICAgICAgIC8vIHN0eWxlc2hlZXQuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhydWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXMuam9pbignJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW5hY2Nlc2libGUgc3R5bGVzaGVldC4gTW9zdFxyXG4gICAgICAgICAgICAvLyBsaWtlbHkgYW4gZXh0ZXJuYWwgc2hlZXQgaW4gYW5vdGhlclxyXG4gICAgICAgICAgICAvLyBkb21haW4uXHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gSm9pbiBhbGwgaW5jbHVkZWQgcnVsZXMgZnJvbSBcclxuICAgICAgICAvLyBldmVyeSBzdHlsZXNoZWV0LlxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAuam9pbignJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3NzKTtcclxuICAgICAgICBjb25zdCBtZXRhID0ge1xyXG4gICAgICAgICAgICBleHBvcnRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBodG1sOiBodG1sLFxyXG4gICAgICAgICAgICBjc3M6IGNzcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyaWdnZXJNZXRhVXBkYXRlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICBtZXRhOiBtZXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VFeHRyYWN0b3I7Il0sInNvdXJjZVJvb3QiOiIifQ==