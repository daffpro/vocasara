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

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction NavLink(param) {\n    var to = param.to, children = param.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: to,\n        className: \"mx-4\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this));\n}\n_c = NavLink;\nfunction MobileNav(param) {\n    var open = param.open, setOpen = param.setOpen;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 h-screen w-8/12 transform \".concat(open ? \"-translate-x-0\" : \"-translate-x-full\", \" transition-transform duration-300 ease-in-out filter drop-shadow-md \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center filter drop-shadow-md bg-white h-20\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-xl font-semibold\",\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object-scale-down logo-img-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/img/logo.png\",\n                                alt: \"logo\",\n                                width: 500,\n                                height: 500\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 13,\n                                columnNumber: 109\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                            lineNumber: 13,\n                            columnNumber: 63\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mobile-menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: \"/historique\",\n                        className: \"lien\",\n                        children: \"Historique\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: \"/missions\",\n                        className: \"lien\",\n                        children: \"Missions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: \"#services\",\n                        className: \"lien\",\n                        children: \"Services\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: \"#contact\",\n                        className: \"lien\",\n                        children: \"Contactez-nous!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n}\n_c1 = MobileNav;\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = ref[0], setOpen = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex filter bg-white py-2 h-20 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNav, {\n                open: open,\n                setOpen: setOpen\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/12 flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"text-2xl font-semibold\",\n                    href: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"object-scale-down logo-img\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                            lineNumber: 39,\n                            columnNumber: 64\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/img/logo.png\",\n                            width: 500,\n                            height: 60,\n                            alt: \"logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                            lineNumber: 39,\n                            columnNumber: 114\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-9/12 flex justify-end items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden\",\n                        onClick: function() {\n                            setOpen(!open);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"rotate-45 translate-y-3.5\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out \".concat(open ? \"w-0\" : \"w-full\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"-rotate-45 -translate-y-3.5\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex menu\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                to: \"/historique\",\n                                className: \"lien\",\n                                children: \"Historique\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                to: \"/missions\",\n                                className: \"lien\",\n                                children: \"Missions\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                to: \"#services\",\n                                className: \"lien\",\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                to: \"#contact\",\n                                className: \"lien\",\n                                children: \"Contactez-nous!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Daff\\\\Documents\\\\GitHub\\\\vocasara\\\\components\\\\layout\\\\Header.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, _this));\n};\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"MobileNav\");\n$RefreshReg$(_c2, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUZBQTBDLE9BQXhDRSxJQUFJLEdBQUcsQ0FBMkIsNkJBQUcsQ0FBRTs7Ozs7O3dHQUN6SVUsQ0FBSTtnQ0FBQ1osU0FBUyxFQUFHLENBQXlFLDJFQUEwQixPQUF4QkUsSUFBSSxHQUFHLENBQUssT0FBRyxDQUFROzs7Ozs7d0dBQ25IVSxDQUFJO2dDQUFDWixTQUFTLEVBQUcsQ0FBK0UsaUZBQTRDLE9BQTFDRSxJQUFJLEdBQUcsQ0FBNkIsK0JBQUcsQ0FBRTs7Ozs7Ozs7Ozs7O2dHQUcvSUUsQ0FBRzt3QkFBQ0osU0FBUyxFQUFDLENBQXFCOzt3R0FDL0JMLE9BQU87Z0NBQUNDLEVBQUUsRUFBQyxDQUFhO2dDQUFDSSxTQUFTLEVBQUMsQ0FBTTswQ0FBQyxDQUUzQzs7Ozs7O3dHQUNDTCxPQUFPO2dDQUFDQyxFQUFFLEVBQUMsQ0FBVztnQ0FBQ0ksU0FBUyxFQUFDLENBQU07MENBQUMsQ0FFekM7Ozs7Ozt3R0FDQ0wsT0FBTztnQ0FBQ0MsRUFBRSxFQUFDLENBQVc7Z0NBQUNJLFNBQVMsRUFBQyxDQUFNOzBDQUFDLENBRXpDOzs7Ozs7d0dBQ0NMLE9BQU87Z0NBQUNDLEVBQUUsRUFBQyxDQUFVO2dDQUFDSSxTQUFTLEVBQUMsQ0FBTTswQ0FBQyxDQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCLENBQUM7R0F0Q0tTLE1BQU07TUFBTkEsTUFBTTtBQXdDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci5qcz81ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5mdW5jdGlvbiBOYXZMaW5rKHt0bywgY2hpbGRyZW59KSB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17dG99IGNsYXNzTmFtZT17YG14LTRgfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vYmlsZU5hdih7b3Blbiwgc2V0T3Blbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1zY3JlZW4gdy04LzEyIHRyYW5zZm9ybSAke29wZW4gPyBcIi10cmFuc2xhdGUteC0wXCIgOiBcIi10cmFuc2xhdGUteC1mdWxsXCJ9IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBmaWx0ZXIgZHJvcC1zaGFkb3ctbWQgYH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmlsdGVyIGRyb3Atc2hhZG93LW1kIGJnLXdoaXRlIGgtMjBcIj4gey8qbG9nbyBjb250YWluZXIqL31cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiIGhyZWY9XCIvXCI+PGRpdiBjbGFzc05hbWU9J29iamVjdC1zY2FsZS1kb3duIGxvZ28taW1nLTEnPjxJbWFnZSBzcmM9Jy9pbWcvbG9nby5wbmcnICBhbHQ9J2xvZ28nIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTAwfS8+PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvaGlzdG9yaXF1ZVwiIGNsYXNzTmFtZT1cImxpZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9taXNzaW9uc1wiIGNsYXNzTmFtZT1cImxpZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWlzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbmsgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwibGllblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIjY29udGFjdFwiIGNsYXNzTmFtZT1cImxpZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdGV6LW5vdXMhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rID5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5jb25zdCBIZWFkZXIgPSgpID0+e1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmaWx0ZXIgIGJnLXdoaXRlICBweS0yIGgtMjAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxNb2JpbGVOYXYgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy8xMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiIGhyZWY9XCIvXCI+PGRpdiBjbGFzc05hbWU9J29iamVjdC1zY2FsZS1kb3duIGxvZ28taW1nJz48L2Rpdj48SW1hZ2Ugc3JjPScvaW1nL2xvZ28ucG5nJyB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezYwfSBhbHQ9J2xvZ28nLz48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOS8xMiBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBmbGV4IHJlbGF0aXZlIHctOCBoLTggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBoYW1idXJnZXIgYnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGgtMSB3LWZ1bGwgYmctcHJpbWFyeSByb3VuZGVkLWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke29wZW4gPyBcInJvdGF0ZS00NSB0cmFuc2xhdGUteS0zLjVcIiA6IFwiXCJ9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLXByaW1hcnkgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtvcGVuID8gXCJ3LTBcIiA6IFwidy1mdWxsXCJ9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLXByaW1hcnkgcm91bmRlZC1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtvcGVuID8gXCItcm90YXRlLTQ1IC10cmFuc2xhdGUteS0zLjVcIiA6IFwiXCJ9YH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2hpc3RvcmlxdWVcIiBjbGFzc05hbWU9XCJsaWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmlxdWVcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbWlzc2lvbnNcIiBjbGFzc05hbWU9XCJsaWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1pc3Npb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIiNzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImxpZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbmsgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJsaWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3Rlei1ub3VzIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5hdkxpbmsiLCJ0byIsImNoaWxkcmVuIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJNb2JpbGVOYXYiLCJvcGVuIiwic2V0T3BlbiIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiSGVhZGVyIiwibmF2Iiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Header.js\n");

/***/ })

});