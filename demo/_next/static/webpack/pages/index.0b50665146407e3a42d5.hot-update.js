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
        var _selector = cssRule.selectorText; // Remove pseudo-selectors.
        // const selector = selectorText.replace(/:(\S+)$/, '');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsInNvbWUiLCJub2RlIiwibWF0Y2hlcyIsImNzc1J1bGVzIiwiY3NzU3VicnVsZXMiLCJjc3MiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwibWFwIiwic2hlZXQiLCJydWxlcyIsImNzc1RleHQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQ2pCQyxFQURpQixFQUVqQkMsSUFGaUIsRUFHaEI7QUFBQTs7QUFFRCxNQUFNQyxPQUFPLEdBQUdDLDJEQUFVLEVBQTFCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLFNBQVM7QUFBQSxXQUN0QkEsU0FBUyxDQUFDQyxVQUFWLENBQXFCTixFQUFyQixDQURzQjtBQUFBLEdBQTFCOztBQUdBLE1BQU1PLFNBQVMsR0FBR0MsNkRBQVksQ0FBQztBQUMzQkosWUFBUSxFQUFFQTtBQURpQixHQUFELENBQTlCO0FBSUEsTUFBTUssU0FBUyxHQUNYRixTQUFTLENBQUNHLElBQVYsQ0FBZUQsU0FBZixJQUNBLEtBRko7QUFLQSxNQUFNRSxpQkFBaUIsR0FDbkJULE9BQU8sQ0FBQ1UsVUFBUixDQUFtQkQsaUJBRHZCO0FBSUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFFBQVEsR0FBR2IsSUFBSSxDQUFDYyxPQUF0QjtBQUNBLFFBQUksQ0FBQ04sU0FBRCxJQUFjLENBQUNLLFFBQW5CLEVBQTZCLE9BRmpCLENBR1o7O0FBQ0EsUUFBTUUsSUFBSSxHQUFHRixRQUFRLENBQUNHLFNBQXRCLENBSlksQ0FLWjs7QUFDQSxRQUFNQyxRQUFRLElBQ1ZKLFFBRFUsZ0tBRVBBLFFBQVEsQ0FBQ0ssb0JBQVQsQ0FBOEIsR0FBOUIsQ0FGTyxFQUFkLENBTlksQ0FVWjs7QUFDQSxhQUFTQyxvQkFBVCxDQUE4QkMsT0FBOUIsRUFBdUM7QUFDbkM7QUFDQTtBQUNBLFVBQUlBLE9BQU8sQ0FBQ0MsWUFBWixFQUEwQjtBQUN0QixZQUFNbEIsU0FBUSxHQUFHaUIsT0FBTyxDQUFDQyxZQUF6QixDQURzQixDQUV0QjtBQUNBOztBQUNBLGVBQU9KLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLFVBQUFDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDQyxPQUFMLENBQWFyQixTQUFiLENBQUo7QUFBQSxTQUFsQixDQUFQO0FBQ0gsT0FSa0MsQ0FTbkM7QUFDQTs7O0FBQ0EsVUFBSWlCLE9BQU8sQ0FBQ0ssUUFBWixFQUFzQjtBQUNsQixZQUFNQyxXQUFXLEdBQUdOLE9BQU8sQ0FBQ0ssUUFBNUI7QUFDQSxlQUFPLHVKQUFJQyxXQUFKLEVBQWlCSixJQUFqQixDQUFzQkgsb0JBQXRCLENBQVA7QUFDSCxPQUhELENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQSxXQVdLO0FBQ0QsaUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQ0QsUUFBTVEsR0FBRyxHQUFHLHVKQUFJQyxRQUFRLENBQUNDLFdBQWIsRUFBMEJDLEdBQTFCLENBQThCLFVBQUFDLEtBQUssRUFBSTtBQUMvQyxVQUFJO0FBQ0EsWUFBTU4sUUFBUSxHQUFHTSxLQUFLLENBQUNOLFFBQXZCOztBQUNBLFlBQU1PLEtBQUssR0FBRyx1SkFBSVAsUUFBSixFQUFjSyxHQUFkLENBQWtCLFVBQUFWLE9BQU8sRUFBSTtBQUN2QyxjQUFJRCxvQkFBb0IsQ0FBQ0MsT0FBRCxDQUF4QixFQUFtQztBQUMvQixtQkFBT0EsT0FBTyxDQUFDYSxPQUFmO0FBQ0g7O0FBQ0QsaUJBQU8sSUFBUDtBQUNILFNBTGEsRUFNZDtBQUNBO0FBUGMsU0FRYkMsTUFSYSxDQVFOQyxPQVJNLEVBU2JDLElBVGEsQ0FTUixFQVRRLENBQWQ7O0FBVUEsZUFBT0osS0FBUDtBQUNILE9BYkQsQ0FjQTtBQUNBO0FBQ0E7QUFDQSxhQUFPSyxDQUFQLEVBQVUsQ0FBRztBQUNoQixLQW5CVyxFQW9CWjtBQUNBO0FBckJZLEtBc0JYSCxNQXRCVyxDQXNCSkMsT0F0QkksRUF1QlhDLElBdkJXLENBdUJOLEVBdkJNLENBQVosQ0FyQ1ksQ0E2RFo7OztBQUNBLFFBQU0zQixJQUFJLEdBQUc7QUFDVEQsZUFBUyxFQUFFLEtBREY7QUFFVE8sVUFBSSxFQUFFQSxJQUZHO0FBR1RZLFNBQUcsRUFBRUE7QUFISSxLQUFiO0FBS0FqQixxQkFBaUIsQ0FBQztBQUNkWCxRQUFFLEVBQUVBLEVBRFU7QUFFZFUsVUFBSSxFQUFFQTtBQUZRLEtBQUQsQ0FBakI7QUFJSCxHQXZFUSxDQUFUO0FBeUVILENBaEdEOztHQUFNWCxZO1VBS2NJLG1ELEVBS0VLLHFEOzs7QUF3RlBULDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiNTA2NjUxNDY0MDdlM2E0MmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUFjdGlvbnMsIHVzZUNvbGxlY3Rvcn0gZnJvbSAnYnVpbGQtdWknO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlRXh0cmFjdG9yID0gKFxyXG4gICAgaWQsXHJcbiAgICByb290XHJcbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbnMgPSB1c2VBY3Rpb25zKCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnMgPT4gKFxyXG4gICAgICAgIHNlbGVjdG9ycy5zZWxlY3RCeUlkKGlkKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbGxlY3RlZCA9IHVzZUNvbGxlY3Rvcih7XHJcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRpbmcgPSAoXHJcbiAgICAgICAgY29sbGVjdGVkLm1ldGEuZXhwb3J0aW5nIHx8XHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdHJpZ2dlck1ldGFVcGRhdGUgPSAoXHJcbiAgICAgICAgYWN0aW9ucy51bnJlY29yZGVkLnRyaWdnZXJNZXRhVXBkYXRlXHJcbiAgICApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHRtbFJvb3QgPSByb290LmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCFleHBvcnRpbmcgfHwgIWh0bWxSb290KSByZXR1cm47XHJcbiAgICAgICAgLy8gRXh0cmFjdCBIVE1MXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGh0bWxSb290Lm91dGVySFRNTDtcclxuICAgICAgICAvLyBFeHRyYWN0IENTU1xyXG4gICAgICAgIGNvbnN0IGNzc05vZGVzID0gW1xyXG4gICAgICAgICAgICBodG1sUm9vdCwgXHJcbiAgICAgICAgICAgIC4uLmh0bWxSb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIENvZGUgYmVsb3cgdXNlcyBDU1NPTSBBUEkuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdWxkSW5jbHVkZUNTU1J1bGUoY3NzUnVsZSkge1xyXG4gICAgICAgICAgICAvLyBJZiBodG1sUm9vdCBvciBjaGlsZCBub2RlXHJcbiAgICAgICAgICAgIC8vIGlzIHRhcmdldGVkIGJ5IENTUyBTZWxlY3Rvci5cclxuICAgICAgICAgICAgaWYgKGNzc1J1bGUuc2VsZWN0b3JUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNzc1J1bGUuc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBzZXVkby1zZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKC86KFxcUyspJC8sICcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjc3NOb2Rlcy5zb21lKG5vZGUgPT4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgcnVsZSBpcyBhIGdyb3VwaW5nIENTU1J1bGVcclxuICAgICAgICAgICAgLy8gbGlrZSBAbWVkaWEgb3IgQHN1cHBvcnRzXHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlLmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NTdWJydWxlcyA9IGNzc1J1bGUuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmNzc1N1YnJ1bGVzXS5zb21lKHNob3VsZEluY2x1ZGVDU1NSdWxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgcnVsZSBjYW5ub3QgYmUgYWRyZXNzZWRcclxuICAgICAgICAgICAgLy8gZWFzaWx5LCBiZXR0ZXIgaW5jbHVkZSB0aGFuIGxlYXZlIFxyXG4gICAgICAgICAgICAvLyBvZmYuIChUYXJnZXRlZCB0byBvdGhlciBAIHJ1bGVzLCBcclxuICAgICAgICAgICAgLy8gbGlrZSBAZm9udC1mYWNlLCBAa2V5ZnJhbWVzLCBldGMuLi4pXHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FuIGNhdXNlIHNvbWUgdW51c2VkIENTUyB0byBiZVxyXG4gICAgICAgICAgICAvLyBleHBvcnRlZCBidXQgd2lsbCBub3QgZXhwb3J0IGluY29tcGxldGVcclxuICAgICAgICAgICAgLy8gc3R5bGVzLiBDYW4gaXQgYmUgb3B0aW1pemVkP1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNzcyA9IFsuLi5kb2N1bWVudC5zdHlsZVNoZWV0c10ubWFwKHNoZWV0ID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzc1J1bGVzID0gc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlcyA9IFsuLi5jc3NSdWxlc10ubWFwKGNzc1J1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZS5jc3NUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBKb2luIGFsbCBpbmNsdWRlZCBydWxlcyBmb3IgXHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZXNoZWV0LlxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluYWNjZXNpYmxlIHN0eWxlc2hlZXQuIE1vc3RcclxuICAgICAgICAgICAgLy8gbGlrZWx5IGFuIGV4dGVybmFsIHNoZWV0IGluIGFub3RoZXJcclxuICAgICAgICAgICAgLy8gZG9tYWluLlxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBKb2luIGFsbCBpbmNsdWRlZCBydWxlcyBmcm9tIFxyXG4gICAgICAgIC8vIGV2ZXJ5IHN0eWxlc2hlZXQuXHJcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjc3MpO1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB7XHJcbiAgICAgICAgICAgIGV4cG9ydGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXHJcbiAgICAgICAgICAgIGNzczogY3NzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJpZ2dlck1ldGFVcGRhdGUoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIG1ldGE6IG1ldGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUV4dHJhY3RvcjsiXSwic291cmNlUm9vdCI6IiJ9