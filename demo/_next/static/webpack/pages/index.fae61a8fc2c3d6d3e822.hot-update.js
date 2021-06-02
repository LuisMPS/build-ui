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
        return rules.filter(Boolean).join('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInJlcGxhY2UiLCJtYXRjaCIsInNvbWUiLCJub2RlIiwibWF0Y2hlcyIsImNzc1J1bGVzIiwiY3NzU3VicnVsZXMiLCJjc3MiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwibWFwIiwic2hlZXQiLCJydWxlcyIsImNvbnNvbGUiLCJsb2ciLCJjc3NUZXh0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNqQkMsRUFEaUIsRUFFakJDLElBRmlCLEVBR2hCO0FBQUE7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQywyREFBVSxFQUExQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxTQUFTO0FBQUEsV0FDdEJBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQk4sRUFBckIsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNTyxTQUFTLEdBQUdDLDZEQUFZLENBQUM7QUFDM0JKLFlBQVEsRUFBRUE7QUFEaUIsR0FBRCxDQUE5QjtBQUlBLE1BQU1LLFNBQVMsR0FDWEYsU0FBUyxD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UFQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmFlNjFhOGZjMmMzZDZkM2U4MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQWN0aW9ucywgdXNlQ29sbGVjdG9yfSBmcm9tICdidWlsZC11aSc7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VFeHRyYWN0b3IgPSAoXHJcbiAgICBpZCxcclxuICAgIHJvb3RcclxuKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IHVzZUFjdGlvbnMoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9ycyA9PiAoXHJcbiAgICAgICAgc2VsZWN0b3JzLnNlbGVjdEJ5SWQoaWQpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29sbGVjdGVkID0gdXNlQ29sbGVjdG9yKHtcclxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydGluZyA9IChcclxuICAgICAgICBjb2xsZWN0ZWQubWV0YS5leHBvcnRpbmcgfHxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0cmlnZ2VyTWV0YVVwZGF0ZSA9IChcclxuICAgICAgICBhY3Rpb25zLnVucmVjb3JkZWQudHJpZ2dlck1ldGFVcGRhdGVcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBodG1sUm9vdCA9IHJvb3QuY3VycmVudDtcclxuICAgICAgICBpZiAoIWV4cG9ydGluZyB8fCAhaHRtbFJvb3QpIHJldHVybjtcclxuICAgICAgICAvLyBFeHRyYWN0IEhUTUxcclxuICAgICAgICBjb25zdCBodG1sID0gaHRtbFJvb3Qub3V0ZXJIVE1MO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgQ1NTXHJcbiAgICAgICAgY29uc3QgY3NzTm9kZXMgPSBbXHJcbiAgICAgICAgICAgIGh0bWxSb290LCBcclxuICAgICAgICAgICAgLi4uaHRtbFJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gQ29kZSBiZWxvdyB1c2VzIENTU09NIEFQSS5cclxuICAgICAgICBmdW5jdGlvbiBzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGh0bWxSb290IG9yIGNoaWxkIG5vZGVcclxuICAgICAgICAgICAgLy8gaXMgdGFyZ2V0ZWQgYnkgQ1NTIFNlbGVjdG9yLlxyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yVGV4dCA9IGNzc1J1bGUuc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBzZXVkby1zZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKC86KFxcUykrLywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjc3NOb2Rlcy5zb21lKG5vZGUgPT4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvclRleHQsIHNlbGVjdG9yLCBtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgcnVsZSBpcyBhIGdyb3VwaW5nIENTU1J1bGVcclxuICAgICAgICAgICAgLy8gbGlrZSBAbWVkaWEgb3IgQHN1cHBvcnRzXHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlLmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NTdWJydWxlcyA9IGNzc1J1bGUuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmNzc1N1YnJ1bGVzXS5zb21lKHNob3VsZEluY2x1ZGVDU1NSdWxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgcnVsZSBjYW5ub3QgYmUgYWRyZXNzZWRcclxuICAgICAgICAgICAgLy8gZWFzaWx5LCBiZXR0ZXIgaW5jbHVkZSB0aGFuIGxlYXZlIFxyXG4gICAgICAgICAgICAvLyBvZmYuIChUYXJnZXRlZCB0byBvdGhlciBAIHJ1bGVzLCBcclxuICAgICAgICAgICAgLy8gbGlrZSBAZm9udC1mYWNlLCBAa2V5ZnJhbWVzLCBldGMuLi4pXHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FuIGNhdXNlIHNvbWUgdW51c2VkIENTUyB0byBiZVxyXG4gICAgICAgICAgICAvLyBleHBvcnRlZCBidXQgd2lsbCBub3QgZXhwb3J0IGluY29tcGxldGVcclxuICAgICAgICAgICAgLy8gc3R5bGVzLiBDYW4gaXQgYmUgb3B0aW1pemVkP1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNzcyA9IFsuLi5kb2N1bWVudC5zdHlsZVNoZWV0c10ubWFwKHNoZWV0ID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzc1J1bGVzID0gc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlcyA9IFsuLi5jc3NSdWxlc10ubWFwKGNzc1J1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVsZSBpcycsIGNzc1J1bGUuY3NzVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gSm9pbiBhbGwgaW5jbHVkZWQgcnVsZXMgZm9yIFxyXG4gICAgICAgICAgICAgICAgLy8gc3R5bGVzaGVldC5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJ1bGVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlcy5maWx0ZXIoQm9vbGVhbikuam9pbignJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW5hY2Nlc2libGUgc3R5bGVzaGVldC4gTW9zdFxyXG4gICAgICAgICAgICAvLyBsaWtlbHkgYW4gZXh0ZXJuYWwgc2hlZXQgaW4gYW5vdGhlclxyXG4gICAgICAgICAgICAvLyBkb21haW4uXHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEpvaW4gYWxsIGluY2x1ZGVkIHJ1bGVzIGZyb20gXHJcbiAgICAgICAgLy8gZXZlcnkgc3R5bGVzaGVldC5cclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgLmpvaW4oJycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNzcyk7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHtcclxuICAgICAgICAgICAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaHRtbDogaHRtbCxcclxuICAgICAgICAgICAgY3NzOiBjc3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cmlnZ2VyTWV0YVVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgbWV0YTogbWV0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRXh0cmFjdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=