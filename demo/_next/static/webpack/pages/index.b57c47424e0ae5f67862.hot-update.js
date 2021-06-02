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
        var _selector = cssRule.selectorText;
        console.log(_selector);
        console.log(_selector.replace(/:(\S)+/, '')); // Remove pseudo-selectors.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUV4dHJhY3Rvci5qcyJdLCJuYW1lcyI6WyJ1c2VFeHRyYWN0b3IiLCJpZCIsInJvb3QiLCJhY3Rpb25zIiwidXNlQWN0aW9ucyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QnlJZCIsImNvbGxlY3RlZCIsInVzZUNvbGxlY3RvciIsImV4cG9ydGluZyIsIm1ldGEiLCJ0cmlnZ2VyTWV0YVVwZGF0ZSIsInVucmVjb3JkZWQiLCJ1c2VFZmZlY3QiLCJodG1sUm9vdCIsImN1cnJlbnQiLCJodG1sIiwib3V0ZXJIVE1MIiwiY3NzTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3VsZEluY2x1ZGVDU1NSdWxlIiwiY3NzUnVsZSIsInNlbGVjdG9yVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwic29tZSIsIm5vZGUiLCJtYXRjaGVzIiwiY3NzUnVsZXMiLCJjc3NTdWJydWxlcyIsImNzcyIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJtYXAiLCJzaGVldCIsInJ1bGVzIiwiY3NzVGV4dCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FDakJDLEVBRGlCLEVBRWpCQyxJQUZpQixFQUdoQjtBQUFBOztBQUVELE1BQU1DLE9BQU8sR0FBR0MsMkRBQVUsRUFBMUI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsU0FBUztBQUFBLFdBQ3RCQSxTQUFTLENBQUNDLFVBQVYsQ0FBcUJOLEVBQXJCLENBRHNCO0FBQUEsR0FBMUI7O0FBR0EsTUFBTU8sU0FBUyxHQUFHQyw2REFBWSxDQUFDO0FBQzNCSixZQUFRLEVBQUVBO0FBRGlCLEdBQUQsQ0FBOUI7QUFJQSxNQUFNSyxTQUFTLEdBQ1hGLFNBQVMsQ0FBQ0csSUFBVixDQUFlRCxTQUFmLElBQ0EsS0FGSjtBQUtBLE1BQU1FLGlCQUFpQixHQUNuQlQsT0FBTyxDQUFDVSxVQUFSLENBQW1CRCxpQkFEdkI7QUFJQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsUUFBUSxHQUFHYixJQUFJLENBQUNjLE9BQXRCO0FBQ0EsUUFBSSxDQUFDTixTQUFELElBQWMsQ0FBQ0ssUUFBbkIsRUFBNkIsT0FGakIsQ0FHWjs7QUFDQSxRQUFNRSxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csU0FBdEIsQ0FKWSxDQUtaOztBQUNBLFFBQU1DLFFBQVEsSUFDVkosUUFEVSxnS0FFUEEsUUFBUSxDQUFDSyxvQkFBVCxDQUE4QixHQUE5QixDQUZPLEVBQWQsQ0FOWSxDQVVaOztBQUNBLGFBQVNDLG9CQUFULENBQThCQyxPQUE5QixFQUF1QztBQUNuQztBQUNBO0FBQ0EsVUFBSUEsT0FBTyxDQUFDQyxZQUFaLEVBQTBCO0FBQ3RCLFlBQU1sQixTQUFRLEdBQUdpQixPQUFPLENBQUNDLFlBQXpCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsU0FBWjtBQUNBbUIsZUFBTyxDQUFDQyxHQUFSLENBQVlwQixTQUFRLENBQUNxQixPQUFULENBQWlCLFFBQWpCLEVBQTJCLEVBQTNCLENBQVosRUFIc0IsQ0FJdEI7QUFDQTs7QUFDQSxlQUFPUCxRQUFRLENBQUNRLElBQVQsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ0MsT0FBTCxDQUFheEIsU0FBYixDQUFKO0FBQUEsU0FBbEIsQ0FBUDtBQUNILE9BVmtDLENBV25DO0FBQ0E7OztBQUNBLFVBQUlpQixPQUFPLENBQUNRLFFBQVosRUFBc0I7QUFDbEIsWUFBTUMsV0FBVyxHQUFHVCxPQUFPLENBQUNRLFFBQTVCO0FBQ0EsZUFBTyx1SkFBSUMsV0FBSixFQUFpQkosSUFBakIsQ0FBc0JOLG9CQUF0QixDQUFQO0FBQ0gsT0FIRCxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkEsV0FXSztBQUNELGlCQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELFFBQU1XLEdBQUcsR0FBRyx1SkFBSUMsUUFBUSxDQUFDQyxXQUFiLEVBQTBCQyxHQUExQixDQUE4QixVQUFBQyxLQUFLLEVBQUk7QUFDL0MsVUFBSTtBQUNBLFlBQU1OLFFBQVEsR0FBR00sS0FBSyxDQUFDTixRQUF2Qjs7QUFDQSxZQUFNTyxLQUFLLEdBQUcsdUpBQUlQLFFBQUosRUFBY0ssR0FBZCxDQUFrQixVQUFBYixPQUFPLEVBQUk7QUFDdkMsY0FBSUQsb0JBQW9CLENBQUNDLE9BQUQsQ0FBeEIsRUFBbUM7QUFDL0IsbUJBQU9BLE9BQU8sQ0FBQ2dCLE9BQWY7QUFDSDs7QUFDRCxpQkFBTyxJQUFQO0FBQ0gsU0FMYSxFQU1kO0FBQ0E7QUFQYyxTQVFiQyxNQVJhLENBUU5DLE9BUk0sRUFTYkMsSUFUYSxDQVNSLEVBVFEsQ0FBZDs7QUFVQSxlQUFPSixLQUFQO0FBQ0gsT0FiRCxDQWNBO0FBQ0E7QUFDQTtBQUNBLGFBQU9LLENBQVAsRUFBVSxDQUFHO0FBQ2hCLEtBbkJXLEVBb0JaO0FBQ0E7QUFyQlksS0FzQlhILE1BdEJXLENBc0JKQyxPQXRCSSxFQXVCWEMsSUF2QlcsQ0F1Qk4sRUF2Qk0sQ0FBWixDQXZDWSxDQStEWjs7O0FBQ0EsUUFBTTlCLElBQUksR0FBRztBQUNURCxlQUFTLEVBQUUsS0FERjtBQUVUTyxVQUFJLEVBQUVBLElBRkc7QUFHVGUsU0FBRyxFQUFFQTtBQUhJLEtBQWI7QUFLQXBCLHFCQUFpQixDQUFDO0FBQ2RYLFFBQUUsRUFBRUEsRUFEVTtBQUVkVSxVQUFJLEVBQUVBO0FBRlEsS0FBRCxDQUFqQjtBQUlILEdBekVRLENBQVQ7QUEyRUgsQ0FsR0Q7O0dBQU1YLFk7VUFLY0ksbUQsRUFLRUsscUQ7OztBQTBGUFQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU3YzQ3NDI0ZTBhZTVmNjc4NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQWN0aW9ucywgdXNlQ29sbGVjdG9yfSBmcm9tICdidWlsZC11aSc7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VFeHRyYWN0b3IgPSAoXHJcbiAgICBpZCxcclxuICAgIHJvb3RcclxuKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IHVzZUFjdGlvbnMoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9ycyA9PiAoXHJcbiAgICAgICAgc2VsZWN0b3JzLnNlbGVjdEJ5SWQoaWQpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29sbGVjdGVkID0gdXNlQ29sbGVjdG9yKHtcclxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydGluZyA9IChcclxuICAgICAgICBjb2xsZWN0ZWQubWV0YS5leHBvcnRpbmcgfHxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0cmlnZ2VyTWV0YVVwZGF0ZSA9IChcclxuICAgICAgICBhY3Rpb25zLnVucmVjb3JkZWQudHJpZ2dlck1ldGFVcGRhdGVcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBodG1sUm9vdCA9IHJvb3QuY3VycmVudDtcclxuICAgICAgICBpZiAoIWV4cG9ydGluZyB8fCAhaHRtbFJvb3QpIHJldHVybjtcclxuICAgICAgICAvLyBFeHRyYWN0IEhUTUxcclxuICAgICAgICBjb25zdCBodG1sID0gaHRtbFJvb3Qub3V0ZXJIVE1MO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgQ1NTXHJcbiAgICAgICAgY29uc3QgY3NzTm9kZXMgPSBbXHJcbiAgICAgICAgICAgIGh0bWxSb290LCBcclxuICAgICAgICAgICAgLi4uaHRtbFJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gQ29kZSBiZWxvdyB1c2VzIENTU09NIEFQSS5cclxuICAgICAgICBmdW5jdGlvbiBzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGh0bWxSb290IG9yIGNoaWxkIG5vZGVcclxuICAgICAgICAgICAgLy8gaXMgdGFyZ2V0ZWQgYnkgQ1NTIFNlbGVjdG9yLlxyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY3NzUnVsZS5zZWxlY3RvclRleHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3Rvci5yZXBsYWNlKC86KFxcUykrLywgJycpKVxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBzZXVkby1zZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yVGV4dC5yZXBsYWNlKC86KFxcUyspJC8sICcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjc3NOb2Rlcy5zb21lKG5vZGUgPT4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgcnVsZSBpcyBhIGdyb3VwaW5nIENTU1J1bGVcclxuICAgICAgICAgICAgLy8gbGlrZSBAbWVkaWEgb3IgQHN1cHBvcnRzXHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlLmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NTdWJydWxlcyA9IGNzc1J1bGUuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmNzc1N1YnJ1bGVzXS5zb21lKHNob3VsZEluY2x1ZGVDU1NSdWxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgcnVsZSBjYW5ub3QgYmUgYWRyZXNzZWRcclxuICAgICAgICAgICAgLy8gZWFzaWx5LCBiZXR0ZXIgaW5jbHVkZSB0aGFuIGxlYXZlIFxyXG4gICAgICAgICAgICAvLyBvZmYuIChUYXJnZXRlZCB0byBvdGhlciBAIHJ1bGVzLCBcclxuICAgICAgICAgICAgLy8gbGlrZSBAZm9udC1mYWNlLCBAa2V5ZnJhbWVzLCBldGMuLi4pXHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FuIGNhdXNlIHNvbWUgdW51c2VkIENTUyB0byBiZVxyXG4gICAgICAgICAgICAvLyBleHBvcnRlZCBidXQgd2lsbCBub3QgZXhwb3J0IGluY29tcGxldGVcclxuICAgICAgICAgICAgLy8gc3R5bGVzLiBDYW4gaXQgYmUgb3B0aW1pemVkP1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNzcyA9IFsuLi5kb2N1bWVudC5zdHlsZVNoZWV0c10ubWFwKHNoZWV0ID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzc1J1bGVzID0gc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlcyA9IFsuLi5jc3NSdWxlc10ubWFwKGNzc1J1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRJbmNsdWRlQ1NTUnVsZShjc3NSdWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZS5jc3NUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBKb2luIGFsbCBpbmNsdWRlZCBydWxlcyBmb3IgXHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZXNoZWV0LlxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEluYWNjZXNpYmxlIHN0eWxlc2hlZXQuIE1vc3RcclxuICAgICAgICAgICAgLy8gbGlrZWx5IGFuIGV4dGVybmFsIHNoZWV0IGluIGFub3RoZXJcclxuICAgICAgICAgICAgLy8gZG9tYWluLlxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBKb2luIGFsbCBpbmNsdWRlZCBydWxlcyBmcm9tIFxyXG4gICAgICAgIC8vIGV2ZXJ5IHN0eWxlc2hlZXQuXHJcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjc3MpO1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB7XHJcbiAgICAgICAgICAgIGV4cG9ydGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGh0bWw6IGh0bWwsXHJcbiAgICAgICAgICAgIGNzczogY3NzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJpZ2dlck1ldGFVcGRhdGUoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIG1ldGE6IG1ldGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUV4dHJhY3RvcjsiXSwic291cmNlUm9vdCI6IiJ9