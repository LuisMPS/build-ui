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

        var _selector = _selector.replace(/:(\S)+/, '');

        return cssNodes.some(function (node) {
          return node.matches(_selector);
        });
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
          }

          return null;
        }) // Join all included rules for 
        // stylesheet.
        .filter(Boolean).join('');

        return rules;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInJlcGxhY2UiLCJzb21lIiwibm9kZSIsIm1hdGNoZXMiLCJjc3NSdWxlcyIsImNzc1N1YnJ1bGVzIiwiY3NzIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsIm1hcCIsInNoZWV0IiwicnVsZXMiLCJjc3NUZXh0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNqQkMsRUFEaUIsRUFFakJDLElBRmlCLEVBR2hCO0FBQUE7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQywyREFBVSxFQUExQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxTQUFTO0FBQUEsV0FDdEJBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQk4sRUFBckIsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNTyxTQUFTLEdBQUdDLDZEQUFZLENBQUM7QUFDM0JKLFlBQVEsRUFBRUE7QUFEaUIsR0FBRCxDQUE5QjtBQUlBLE1BQU1LLFNBQVMsR0FDWEYsU0FBUyxDQUFDRyxJQUFWLENBQWVELFNBQWYsSUFDQSxLQUZKO0FBS0EsTUFBTUUsaUJBQWlCLEdBQ25CVCxPQUFPLENBQUNVLFVBQVIsQ0FBbUJELGlCQUR2QjtBQUlBRSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxRQUFRLEdBQUdiLElBQUksQ0FBQ2MsT0FBdEI7QUFDQSxRQUFJLENBQUNOLFNBQUQsSUFBYyxDQUFDSyxRQUFuQixFQUE2QixPQUZqQixDQUdaOztBQUNBLFFBQU1FLElBQUksR0FBR0YsUUFBUSxDQUFDRyxTQUF0QixDQUpZLENBS1o7O0FBQ0EsUUFBTUMsUUFBUSxJQUNWSixRQURVLGdLQUVQQSxRQUFRLENBQUNLLG9CQUFULENBQThCLEdBQTlCLENBRk8sRUFBZCxDQU5ZLENBVVo7O0FBQ0EsYUFBU0Msb0JBQVQsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQSxVQUFJQSxPQUFPLENBQUNDLFlBQVosRUFBMEI7QUFDdEIsWUFBTUEsWUFBWSxHQUFHRCxPQUFPLENBQUNDLFlBQTdCLENBRHNCLENBRXRCOztBQUNBLFlBQU1sQixTQUFRLEdBQUdBLFNBQVEsQ0FBQ21CLE9BQVQsQ0FBaUIsUUFBakIsRUFBMkIsRUFBM0IsQ0FBakI7O0FBQ0EsZUFBT0wsUUFBUSxDQUFDTSxJQUFULENBQWMsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNDLE9BQUwsQ0FBYXRCLFNBQWIsQ0FBSjtBQUFBLFNBQWxCLENBQVA7QUFDSCxPQVJrQyxDQVNuQztBQUNBOzs7QUFDQSxVQUFJaUIsT0FBTyxDQUFDTSxRQUFaLEVBQXNCO0FBQ2xCLFlBQU1DLFdBQVcsR0FBR1AsT0FBTyxDQUFDTSxRQUE1QjtBQUNBLGVBQU8sdUpBQUlDLFdBQUosRUFBaUJKLElBQWpCLENBQXNCSixvQkFBdEIsQ0FBUDtBQUNILE9BSEQsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBLFdBV0s7QUFDRCxpQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxRQUFNUyxHQUFHLEdBQUcsdUpBQUlDLFFBQVEsQ0FBQ0MsV0FBYixFQUEwQkMsR0FBMUIsQ0FBOEIsVUFBQUMsS0FBSyxFQUFJO0FBQy9DLFVBQUk7QUFDQSxZQUFNTixRQUFRLEdBQUdNLEtBQUssQ0FBQ04sUUFBdkI7O0FBQ0EsWUFBTU8sS0FBSyxHQUFHLHVKQUFJUCxRQUFKLEVBQWNLLEdBQWQsQ0FBa0IsVUFBQVgsT0FBTyxFQUFJO0FBQ3ZDLGNBQUlELG9CQUFvQixDQUFDQyxPQUFELENBQXhCLEVBQW1DO0FBQy9CLG1CQUFPQSxPQUFPLENBQUNjLE9BQWY7QUFDSDs7QUFDRCxpQkFBTyxJQUFQO0FBQ0gsU0FMYSxFQU1kO0FBQ0E7QUFQYyxTQVFiQyxNQVJhLENBUU5DLE9BUk0sRUFTYkMsSUFUYSxDQVNSLEVBVFEsQ0FBZDs7QUFVQSxlQUFPSixLQUFQO0FBQ0gsT0FiRCxDQWNBO0FBQ0E7QUFDQTtBQUNBLGFBQU9LLENBQVAsRUFBVSxDQUFHO0FBQ2hCLEtBbkJXLEVBb0JaO0FBQ0E7QUFyQlksS0FzQlhILE1BdEJXLENBc0JKQyxPQXRCSSxFQXVCWEMsSUF2QlcsQ0F1Qk4sRUF2Qk0sQ0FBWixDQXJDWSxDQTZEWjs7O0FBQ0EsUUFBTTVCLElBQUksR0FBRztBQUNURCxlQUFTLEVBQUUsS0FERjtBQUVUTyxVQUFJLEVBQUVBLElBRkc7QUFHVGEsU0FBRyxFQUFFQTtBQUhJLEtBQWI7QUFLQWxCLHFCQUFpQixDQUFDO0FBQ2RYLFFBQUUsRUFBRUEsRUFEVTtBQUVkVSxVQUFJLEVBQUVBO0FBRlEsS0FBRCxDQUFqQjtBQUlILEdBdkVRLENBQVQ7QUF5RUgsQ0FoR0Q7O0dBQU1YLFk7VUFLY0ksbUQsRUFLRUsscUQ7OztBQXdGUFQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzUwOWI0NWJmNDMxNTBjYWEyM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQWN0aW9ucywgdXNlQ29sbGVjdG9yfSBmcm9tICdidWlsZC11aSc7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VFeHRyYWN0b3IgPSAoXHJcbiAgICBpZCxcclxuICAgIHJvb3RcclxuKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IHVzZUFjdGlvbnMoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9ycyA9PiAoXHJcbiAgICAgICAgc2VsZWN0b3JzLnNlbGVjdEJ5SWQoaWQpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29sbGVjdGVkID0gdXNlQ29sbGVjdG9yKHtcclxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydGluZyA9IChcclxuICAgICAgICBjb2xsZWN0ZWQubWV0YS5leHBvcnRpbmcgfHxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0cmlnZ2VyTWV0YVVwZGF0ZSA9IChcclxuICAgICAgICBhY3Rpb25zLnVucmVjb3JkZWQudHJpZ2dlck1ldGFVcGRhdGVcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBodG1sUm9vdCA9IHJvb3QuY3VycmVudDtcclxuICAgICAgICBpZiAoIWV4cG9ydGluZyB8fCAhaHRtbFJvb3QpIHJldHVybjtcclxuICAgICAgICAvLyBFeHRyYWN0IEhUTUxcclxuICAgICAgICBjb25zdCBodG1sID0gaHRtbFJvb3Qub3V0ZXJIVE1MO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgQ1NTXHJcbiAgICAgICAgY29uc3QgY3NzTm9kZXMgPSBbXHJcbiAgICAgICAgICAgIGh0bWxSb290LCBcclxuICAgICAgICAgICAgLi4uaHRtbFJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gQ29kZSBiZWxvdyB1c2VzIENTU09NIEFQSS5cclxuICAgICAgICBmdW5jdGlvbiBzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGh0bWxSb290IG9yIGNoaWxkIG5vZGVcclxuICAgICAgICAgICAgLy8gaXMgdGFyZ2V0ZWQgYnkgQ1NTIFNlbGVjdG9yLlxyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yVGV4dCA9IGNzc1J1bGUuc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBzZXVkby1zZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLzooXFxTKSsvLCAnJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3NzTm9kZXMuc29tZShub2RlID0+IG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIHJ1bGUgaXMgYSBncm91cGluZyBDU1NSdWxlXHJcbiAgICAgICAgICAgIC8vIGxpa2UgQG1lZGlhIG9yIEBzdXBwb3J0c1xyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzU3VicnVsZXMgPSBjc3NSdWxlLmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5jc3NTdWJydWxlc10uc29tZShzaG91bGRJbmNsdWRlQ1NTUnVsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHJ1bGUgY2Fubm90IGJlIGFkcmVzc2VkXHJcbiAgICAgICAgICAgIC8vIGVhc2lseSwgYmV0dGVyIGluY2x1ZGUgdGhhbiBsZWF2ZSBcclxuICAgICAgICAgICAgLy8gb2ZmLiAoVGFyZ2V0ZWQgdG8gb3RoZXIgQCBydWxlcywgXHJcbiAgICAgICAgICAgIC8vIGxpa2UgQGZvbnQtZmFjZSwgQGtleWZyYW1lcywgZXRjLi4uKVxyXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBjYXVzZSBzb21lIHVudXNlZCBDU1MgdG8gYmVcclxuICAgICAgICAgICAgLy8gZXhwb3J0ZWQgYnV0IHdpbGwgbm90IGV4cG9ydCBpbmNvbXBsZXRlXHJcbiAgICAgICAgICAgIC8vIHN0eWxlcy4gQ2FuIGl0IGJlIG9wdGltaXplZD9cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjc3MgPSBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLm1hcChzaGVldCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NSdWxlcyA9IHNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBbLi4uY3NzUnVsZXNdLm1hcChjc3NSdWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSW5jbHVkZUNTU1J1bGUoY3NzUnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gSm9pbiBhbGwgaW5jbHVkZWQgcnVsZXMgZm9yIFxyXG4gICAgICAgICAgICAgICAgLy8gc3R5bGVzaGVldC5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJbmFjY2VzaWJsZSBzdHlsZXNoZWV0LiBNb3N0XHJcbiAgICAgICAgICAgIC8vIGxpa2VseSBhbiBleHRlcm5hbCBzaGVldCBpbiBhbm90aGVyXHJcbiAgICAgICAgICAgIC8vIGRvbWFpbi5cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gSm9pbiBhbGwgaW5jbHVkZWQgcnVsZXMgZnJvbSBcclxuICAgICAgICAvLyBldmVyeSBzdHlsZXNoZWV0LlxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAuam9pbignJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3NzKTtcclxuICAgICAgICBjb25zdCBtZXRhID0ge1xyXG4gICAgICAgICAgICBleHBvcnRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBodG1sOiBodG1sLFxyXG4gICAgICAgICAgICBjc3M6IGNzcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyaWdnZXJNZXRhVXBkYXRlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICBtZXRhOiBtZXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VFeHRyYWN0b3I7Il0sInNvdXJjZVJvb3QiOiIifQ==