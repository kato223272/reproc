"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/KeniaOs";
exports.ids = ["pages/api/KeniaOs"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ "(api)/./accessToken.js":
/*!************************!*\
  !*** ./accessToken.js ***!
  \************************/
/***/ ((module) => {

eval("\nlet accessToken = null;\nfunction setAccessToken(token) {\n    accessToken = token;\n}\nfunction getAccessToken() {\n    return accessToken;\n}\nmodule.exports = {\n    setAccessToken,\n    getAccessToken\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hY2Nlc3NUb2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUlBLGNBQWMsSUFBSTtBQUV0QixTQUFTQyxlQUFlQyxLQUFLLEVBQUU7SUFDN0JGLGNBQWNFO0FBQ2hCO0FBRUEsU0FBU0MsaUJBQWlCO0lBRXhCLE9BQU9IO0FBQ1Q7QUFFQUksT0FBT0MsT0FBTyxHQUFHO0lBQ2ZKO0lBQ0FFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5Ly4vYWNjZXNzVG9rZW4uanM/NmQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYWNjZXNzVG9rZW4gPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gc2V0QWNjZXNzVG9rZW4odG9rZW4pIHtcclxuICBhY2Nlc3NUb2tlbiA9IHRva2VuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY2Nlc3NUb2tlbigpIHtcclxuXHJcbiAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzZXRBY2Nlc3NUb2tlbixcclxuICBnZXRBY2Nlc3NUb2tlbixcclxufTtcclxuIl0sIm5hbWVzIjpbImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJ0b2tlbiIsImdldEFjY2Vzc1Rva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./accessToken.js\n");

/***/ }),

/***/ "(api)/./pages/api/KeniaOs.js":
/*!******************************!*\
  !*** ./pages/api/KeniaOs.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst accessTokenModule = __webpack_require__(/*! ../../accessToken */ \"(api)/./accessToken.js\");\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nasync function handler(req, res) {\n    const accessToken = accessTokenModule.getAccessToken();\n    const searchUrl = \"https://api.spotify.com/v1/search\";\n    const query = \"q=KeniaOs&type=track\";\n    const searchHeaders = {\n        Authorization: `Bearer ${accessToken}`\n    };\n    const searchResponse = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${searchUrl}?${query}`, {\n        method: \"GET\",\n        headers: searchHeaders\n    });\n    const searchData = await searchResponse.json();\n    res.status(200).json(searchData);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvS2VuaWFPcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ0g7QUFDNUIsTUFBTUUsb0JBQW9CQyxtQkFBT0EsQ0FBQztBQUNsQ0Ysb0RBQWE7QUFFRSxlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU1QyxNQUFNQyxjQUFjTixrQkFBa0JPLGNBQWM7SUFFdEQsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxRQUFRO0lBQ2QsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxlQUFlLENBQUMsT0FBTyxFQUFFTCxZQUFZLENBQUM7SUFDeEM7SUFFQSxNQUFNTSxpQkFBaUIsTUFBTWQsc0RBQUtBLENBQUMsQ0FBQyxFQUFFVSxVQUFVLENBQUMsRUFBRUMsTUFBTSxDQUFDLEVBQUU7UUFDMURJLFFBQVE7UUFDUkMsU0FBU0o7SUFDWDtJQUVBLE1BQU1LLGFBQWEsTUFBTUgsZUFBZUksSUFBSTtJQUM1Q1gsSUFBSVksTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnkvLi9wYWdlcy9hcGkvS2VuaWFPcy5qcz9jN2UyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5jb25zdCBhY2Nlc3NUb2tlbk1vZHVsZSA9IHJlcXVpcmUoJy4uLy4uL2FjY2Vzc1Rva2VuJyk7XHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuIFxyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbk1vZHVsZS5nZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICBjb25zdCBzZWFyY2hVcmwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvc2VhcmNoJztcclxuICBjb25zdCBxdWVyeSA9ICdxPUtlbmlhT3MmdHlwZT10cmFjayc7ICBcclxuICBjb25zdCBzZWFyY2hIZWFkZXJzID0ge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzZWFyY2hVcmx9PyR7cXVlcnl9YCwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHNlYXJjaEhlYWRlcnMsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaERhdGEgPSBhd2FpdCBzZWFyY2hSZXNwb25zZS5qc29uKCk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoRGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZldGNoIiwiZG90ZW52IiwiYWNjZXNzVG9rZW5Nb2R1bGUiLCJyZXF1aXJlIiwiY29uZmlnIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFjY2Vzc1Rva2VuIiwiZ2V0QWNjZXNzVG9rZW4iLCJzZWFyY2hVcmwiLCJxdWVyeSIsInNlYXJjaEhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic2VhcmNoUmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwic2VhcmNoRGF0YSIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/KeniaOs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/KeniaOs.js"));
module.exports = __webpack_exports__;

})();