"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ClubPreview.js":
/*!***********************************!*\
  !*** ./components/ClubPreview.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClubPreview\": function() { return /* binding */ ClubPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n\n\n\nconst ClubPreview = (param)=>/*#__PURE__*/ {\n    let { club , setClubOpened , setRecentlyCopied , navigator , recentlyCopied  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        as: \"div\",\n        variant: \"primary\",\n        sx: {\n            p: [\n                1,\n                2\n            ],\n            cursor: \"pointer\"\n        },\n        mb: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            columns: [\n                null,\n                \"1.5fr 1.5fr 1.5fr 1.5fr 1fr\"\n            ],\n            gap: 3,\n            sx: {\n                pl: [\n                    1,\n                    3\n                ],\n                pr: [\n                    1,\n                    3\n                ]\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setClubOpened(club),\n                    style: {\n                        textDecoration: \"underline\"\n                    },\n                    children: club.name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 18,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setClubOpened(club),\n                    children: club.venue\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 21,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setClubOpened(club),\n                    children: club.location\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 23,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setClubOpened(club),\n                    children: club.leaders[0].name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 25,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        justifyContent: \"end\",\n                        alignItems: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"primary\",\n                        as: \"a\",\n                        onClick: ()=>{\n                            setRecentlyCopied(club.id);\n                            navigator.clipboard.writeText(club.leaders[0].email);\n                        },\n                        children: recentlyCopied == club.id ? \"Copied Email\" : \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                        lineNumber: 27,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\n_c = ClubPreview;\nvar _c;\n$RefreshReg$(_c, \"ClubPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsdWJQcmV2aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ3lCO0FBRTNDLE1BQU1LLGNBQWMsdUJBQ2hCO1FBRGlCLEVBQUNDLEtBQUksRUFBRUMsY0FBYSxFQUFFQyxrQkFBaUIsRUFBRUMsVUFBUyxFQUFFQyxlQUFjLEVBQUM7V0FDcEYsOERBQUNSLDBDQUFJQTtRQUVOUyxJQUFJO1FBQ0pDLFNBQVE7UUFDUkMsSUFBSTtZQUFDQyxHQUFHO2dCQUFDO2dCQUFFO2FBQUU7WUFBRUMsUUFBUTtRQUFTO1FBQ2hDQyxJQUFJO2tCQUVGLDRFQUFDYiwwQ0FBSUE7WUFDSGMsU0FBUztnQkFBQyxJQUFJO2dCQUFFO2FBQThCO1lBQzlDQyxLQUFLO1lBQ0xMLElBQUk7Z0JBQUNNLElBQUk7b0JBQUM7b0JBQUU7aUJBQUU7Z0JBQUVDLElBQUk7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQTs7OEJBR3pCLDhEQUFDTjtvQkFBRU8sU0FBUyxJQUNWZCxjQUFjRDtvQkFDWmdCLE9BQU87d0JBQUNDLGdCQUFnQjtvQkFBVzs4QkFBSWpCLEtBQUtrQixJQUFJOzs7Ozs7OEJBQ3BELDhEQUFDVjtvQkFBRU8sU0FBUyxJQUNWZCxjQUFjRDs4QkFBUUEsS0FBS21CLEtBQUs7Ozs7Ozs4QkFDbEMsOERBQUNYO29CQUFFTyxTQUFTLElBQU1kLGNBQWNEOzhCQUFRQSxLQUFLb0IsUUFBUTs7Ozs7OzhCQUVyRCw4REFBQ1o7b0JBQUVPLFNBQVMsSUFBTWQsY0FBY0Q7OEJBQVFBLEtBQUtxQixPQUFPLENBQUMsRUFBRSxDQUFDSCxJQUFJOzs7Ozs7OEJBQzVELDhEQUFDdkIseUNBQUdBO29CQUFDcUIsT0FBTzt3QkFBQ00sU0FBUzt3QkFBUUMsZUFBZTt3QkFBT0MsZ0JBQWdCO3dCQUFPQyxZQUFZO29CQUFROzhCQUMvRiw0RUFBQzNCLDRDQUFNQTt3QkFDTFEsU0FBUTt3QkFDUkQsSUFBRzt3QkFDSFUsU0FBUyxJQUFNOzRCQUNiYixrQkFBa0JGLEtBQUswQixFQUFFOzRCQUN6QnZCLFVBQVV3QixTQUFTLENBQUNDLFNBQVMsQ0FBQzVCLEtBQUtxQixPQUFPLENBQUMsRUFBRSxDQUFDUSxLQUFLO3dCQUNyRDtrQ0FFQ3pCLGtCQUFrQkosS0FBSzBCLEVBQUUsR0FBSSxpQkFBbUIsU0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRCxFQUNmO0tBckNZM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbHViUHJldmlldy5qcz8wZDBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBjb25zdCBDbHViUHJldmlldyA9ICh7Y2x1Yiwgc2V0Q2x1Yk9wZW5lZCwgc2V0UmVjZW50bHlDb3BpZWQsIG5hdmlnYXRvciwgcmVjZW50bHlDb3BpZWR9KSA9PiAoXG5cdCAgICAgICAgICA8Q2FyZFxuXG4gICAgICAgICAgYXM9eydkaXYnfVxuICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzeD17e3A6IFsxLDJdLCBjdXJzb3I6IFwicG9pbnRlclwifX1cbiAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb2x1bW5zPXtbbnVsbCwgXCIxLjVmciAxLjVmciAxLjVmciAxLjVmciAxZnJcIl19IFxuICAgICAgICAgICAgICBnYXA9ezN9XG4gICAgICAgICAgICAgIHN4PXt7cGw6IFsxLDNdLCBwcjogWzEsM119fSBcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgICBzZXRDbHViT3BlbmVkKGNsdWIpXG4gICAgICAgICAgICAgICAgfSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwifX0+e2NsdWIubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IFxuICAgICAgICAgICAgICAgIHNldENsdWJPcGVuZWQoY2x1Yil9PntjbHViLnZlbnVlfTwvcD5cbiAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gc2V0Q2x1Yk9wZW5lZChjbHViKX0+e2NsdWIubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gc2V0Q2x1Yk9wZW5lZChjbHViKX0+e2NsdWIubGVhZGVyc1swXS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPEJveCBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJlbmRcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0UmVjZW50bHlDb3BpZWQoY2x1Yi5pZClcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNsdWIubGVhZGVyc1swXS5lbWFpbClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlY2VudGx5Q29waWVkID09IGNsdWIuaWQgPyAoXCJDb3BpZWQgRW1haWxcIikgOiAoXCJDb250YWN0XCIpfVxuXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQ2FyZD5cbilcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiQ2x1YlByZXZpZXciLCJjbHViIiwic2V0Q2x1Yk9wZW5lZCIsInNldFJlY2VudGx5Q29waWVkIiwibmF2aWdhdG9yIiwicmVjZW50bHlDb3BpZWQiLCJhcyIsInZhcmlhbnQiLCJzeCIsInAiLCJjdXJzb3IiLCJtYiIsImNvbHVtbnMiLCJnYXAiLCJwbCIsInByIiwib25DbGljayIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJuYW1lIiwidmVudWUiLCJsb2NhdGlvbiIsImxlYWRlcnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImlkIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClubPreview.js\n"));

/***/ })

});