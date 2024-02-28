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
exports.id = "pages/api/Token";
exports.ids = ["pages/api/Token"];
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

/***/ "(api)/./pages/api/Token.js":
/*!****************************!*\
  !*** ./pages/api/Token.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst accessTokenModule = __webpack_require__(/*! ../../accessToken */ \"(api)/./accessToken.js\");\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nasync function handler(req, res) {\n    const clientId = \"c4226cf0a5894fef915038d76c3ab896\";\n    const clientSecret = \"1b972edc171f41f18ce19ea28cc23cd0\";\n    const authUrl = \"https://accounts.spotify.com/api/token\";\n    const authData = new URLSearchParams();\n    authData.append(\"grant_type\", \"client_credentials\");\n    const authHeaders = {\n        \"Content-Type\": \"application/x-www-form-urlencoded\",\n        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(\"base64\")}`\n    };\n    const authResponse = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authUrl, {\n        method: \"POST\",\n        body: authData,\n        headers: authHeaders\n    });\n    const authDatas = await authResponse.json();\n    const accessToken = authDatas.access_token;\n    res.status(200).json(accessToken);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvVG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNIO0FBQzVCLE1BQU1FLG9CQUFvQkMsbUJBQU9BLENBQUM7QUFDbENGLG9EQUFhO0FBRUUsZUFBZUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsV0FBVztJQUNqQixNQUFNQyxlQUFlO0lBRXJCLE1BQU1DLFVBQVU7SUFHaEIsTUFBTUMsV0FBVyxJQUFJQztJQUNyQkQsU0FBU0UsTUFBTSxDQUFDLGNBQWM7SUFFOUIsTUFBTUMsY0FBYztRQUNsQixnQkFBZ0I7UUFDaEJDLGVBQWUsQ0FBQyxNQUFNLEVBQUVDLE9BQU9DLElBQUksQ0FBQyxDQUFDLEVBQUVULFNBQVMsQ0FBQyxFQUFFQyxhQUFhLENBQUMsRUFBRVMsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUN6RjtJQUVBLE1BQU1DLGVBQWUsTUFBTW5CLHNEQUFLQSxDQUFDVSxTQUFTO1FBQ3hDVSxRQUFRO1FBQ1JDLE1BQU1WO1FBQ05XLFNBQVNSO0lBQ1g7SUFFQSxNQUFNUyxZQUFZLE1BQU1KLGFBQWFLLElBQUk7SUFDekMsTUFBTUMsY0FBY0YsVUFBVUcsWUFBWTtJQUk1Q25CLElBQUlvQixNQUFNLENBQUMsS0FBS0gsSUFBSSxDQUFDQztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeS8uL3BhZ2VzL2FwaS9Ub2tlbi5qcz9mYTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5jb25zdCBhY2Nlc3NUb2tlbk1vZHVsZSA9IHJlcXVpcmUoJy4uLy4uL2FjY2Vzc1Rva2VuJyk7XHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICBjb25zdCBjbGllbnRJZCA9ICdjNDIyNmNmMGE1ODk0ZmVmOTE1MDM4ZDc2YzNhYjg5Nic7XHJcbiAgICBjb25zdCBjbGllbnRTZWNyZXQgPSAnMWI5NzJlZGMxNzFmNDFmMThjZTE5ZWEyOGNjMjNjZDAnO1xyXG4gIFxyXG4gICAgY29uc3QgYXV0aFVybCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbic7XHJcbiAgXHJcbiAgXHJcbiAgICBjb25zdCBhdXRoRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIGF1dGhEYXRhLmFwcGVuZCgnZ3JhbnRfdHlwZScsICdjbGllbnRfY3JlZGVudGlhbHMnKTtcclxuICBcclxuICAgIGNvbnN0IGF1dGhIZWFkZXJzID0ge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKGAke2NsaWVudElkfToke2NsaWVudFNlY3JldH1gKS50b1N0cmluZygnYmFzZTY0Jyl9YCxcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBhdXRoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhdXRoVXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBhdXRoRGF0YSxcclxuICAgICAgaGVhZGVyczogYXV0aEhlYWRlcnMsXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGF1dGhEYXRhcyA9IGF3YWl0IGF1dGhSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF1dGhEYXRhcy5hY2Nlc3NfdG9rZW47XHJcblxyXG4gICAgXHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFjY2Vzc1Rva2VuKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZmV0Y2giLCJkb3RlbnYiLCJhY2Nlc3NUb2tlbk1vZHVsZSIsInJlcXVpcmUiLCJjb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJhdXRoVXJsIiwiYXV0aERhdGEiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJhdXRoSGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJhdXRoUmVzcG9uc2UiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImF1dGhEYXRhcyIsImpzb24iLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/Token.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/Token.js"));
module.exports = __webpack_exports__;

})();