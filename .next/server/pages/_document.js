"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
;// CONCATENATED MODULE: ./pages/_document.js



class MyDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        const initialProps = await next_document["default"].getInitialProps(ctx);
        return {
            ...initialProps
        };
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "fr",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charSet: "utf-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: " robots",
                            content: " index, follow"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: " author",
                            content: "Dahibou KA"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: " copyright",
                            content: "VOCASARA"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Vocasar Suarl, apporte un large choix de services graces \xe0 des technologies de nouvelle generation dans les domaines que sont les inspections \xe9nergetiques, la videosurveillance, et la couverture m\xe9diatique(photo, vid\xe9o, documentaires, vid\xe9o clip)."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            id: "hs-script-loader",
                            async: true,
                            defer: true,
                            src: "//js-eu1.hs-scripts.com/25545127.js"
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const _document = (MyDocument);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,859], () => (__webpack_exec__(620)));
module.exports = __webpack_exports__;

})();