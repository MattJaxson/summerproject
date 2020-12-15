(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-picture-profile-picture-module"],{

/***/ "KJ7D":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: #e6e6e6;\n  --background-hover: #999;\n  color: #888;\n  width: 150px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.skip-button:hover {\n  color: white;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #005191;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.header {\n  background: #edf3f8;\n  margin-bottom: 20px;\n  padding: 50px 0;\n}\n\n.text-header {\n  font-size: 1em;\n  padding: 0 50px;\n  color: #333;\n  text-align: justify;\n  opacity: 0;\n  position: relative;\n  top: 35px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-header {\n    padding: 0 50px;\n    font-size: 1em;\n  }\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 150px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: #005191;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  width: 300px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 0px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n}\n\ninput[type=file]:hover {\n  background: linear-gradient(#0672c4, #054372);\n  color: white;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBTUE7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUNmLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG15SEFBQTtFQUNBLFVBQUE7RUFDQSxrRkFBQTtVQUFBLDBFQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUNmLGNBQUE7RUFFQSxVQUFBO0VBQ0Esc0ZBQUE7VUFBQSw4RUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNFLFdBQUE7RUFDRixtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrRkFBQTtVQUFBLDBFQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSw2Q0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG4uc2tpcC1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzk5OTtcbiAgY29sb3I6ICM4ODg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uc2tpcC1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xufVxuXG4ud3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuI2RlZmF1bHQtcGljdHVyZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTVRBd2NIZ2lJR2hsYVdkb2REMGlNVEF3Y0hnaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01UQXdJaUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGdvZ0lDQWdQQ0V0TFNCSFpXNWxjbUYwYjNJNklGTnJaWFJqYUNBMU5pNHpJQ2c0TVRjeE5pa2dMU0JvZEhSd2N6b3ZMM05yWlhSamFDNWpiMjBnTFMwK0NpQWdJQ0E4ZEdsMGJHVStaR1ZtWVhWc2RDMXdjbTh0Y0dsamRIVnlaVHd2ZEdsMGJHVStDaUFnSUNBOFpHVnpZejVEY21WaGRHVmtJSGRwZEdnZ1UydGxkR05vTGp3dlpHVnpZejRLSUNBZ0lEeGtaV1p6UGdvZ0lDQWdJQ0FnSUR4c2FXNWxZWEpIY21Ga2FXVnVkQ0I0TVQwaU5UQWxJaUI1TVQwaU1DVWlJSGd5UFNJMU1DVWlJSGt5UFNJeE1EQWxJaUJwWkQwaWJHbHVaV0Z5UjNKaFpHbGxiblF0TVNJK0NpQWdJQ0FnSUNBZ0lDQWdJRHh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU0zT1VFNVEwVWlJRzltWm5ObGREMGlNQ1VpUGp3dmMzUnZjRDRLSUNBZ0lDQWdJQ0FnSUNBZ1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6VTFOek00UWlJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3TGpVek1UWXpNalF6SWlCdlptWnpaWFE5SWpFd01DVWlQand2YzNSdmNENEtJQ0FnSUNBZ0lDQThMMnhwYm1WaGNrZHlZV1JwWlc1MFBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHlPQ3d5Tmk0NE5qUTNOVFF4SUVNeU5TNDBNemMxTERJMkxqZzJORGMxTkRFZ01qUXVNakExTXpVM01Td3lPQzR5TnpnMk9EZzFJREl3TERJNExqSTNPRFk0T0RVZ1F6RTFMamM1TkRZME1qa3NNamd1TWpjNE5qZzROU0F4TkM0MU56RTBNamcyTERJMkxqZzJORGMxTkRFZ01USXNNall1T0RZME56VTBNU0JETlM0ek56VXNNall1T0RZME56VTBNU0F3TERNeUxqRTRORFk0TWpRZ01Dd3pPQzQzTkRFNE1ETXpJRXd3TERReExqQXdOREE1T0RRZ1F6QXNORE11TXpRMU9USTNNeUF4TGpreE9UWTBNamcyTERRMUxqSTBOVGt3TVRZZ05DNHlPRFUzTVRReU9TdzBOUzR5TkRVNU1ERTJJRXd6TlM0M01UUXlPRFUzTERRMUxqSTBOVGt3TVRZZ1F6TTRMakE0TURNMU56RXNORFV1TWpRMU9UQXhOaUEwTUN3ME15NHpORFU1TWpjeklEUXdMRFF4TGpBd05EQTVPRFFnVERRd0xETTRMamMwTVRnd016TWdRelF3TERNeUxqRTRORFk0TWpRZ016UXVOakkxTERJMkxqZzJORGMxTkRFZ01qZ3NNall1T0RZME56VTBNU0JhSUUwek5TNDNNVFF5T0RVM0xEUXhMakF3TkRBNU9EUWdURFF1TWpnMU56RTBNamtzTkRFdU1EQTBNRGs0TkNCTU5DNHlPRFUzTVRReU9Td3pPQzQzTkRFNE1ETXpJRU0wTGpJNE5UY3hOREk1TERNMExqVXpOVE0wT0RRZ055NDNOU3d6TVM0eE1EWTFOVGMwSURFeUxETXhMakV3TmpVMU56UWdRekV6TGpNd016VTNNVFFzTXpFdU1UQTJOVFUzTkNBeE5TNDBNVGsyTkRJNUxETXlMalV5TURRNU1UZ2dNakFzTXpJdU5USXdORGt4T0NCRE1qUXVOakUyTURjeE5Dd3pNaTQxTWpBME9URTRJREkyTGpZNE56VXNNekV1TVRBMk5UVTNOQ0F5T0N3ek1TNHhNRFkxTlRjMElFTXpNaTR5TlN3ek1TNHhNRFkxTlRjMElETTFMamN4TkRJNE5UY3NNelF1TlRNMU16UTROQ0F6TlM0M01UUXlPRFUzTERNNExqYzBNVGd3TXpNZ1RETTFMamN4TkRJNE5UY3NOREV1TURBME1EazROQ0JhSUUweU1Dd3lOUzQwTlRBNE1UazNJRU15Tnk0d09UZ3lNVFF6TERJMUxqUTFNRGd4T1RjZ016SXVPRFUzTVRReU9Td3hPUzQzTlRBNE9UWTFJRE15TGpnMU56RTBNamtzTVRJdU56STFOREE1T0NCRE16SXVPRFUzTVRReU9TdzFMalk1T1RreU16RTJJREkzTGpBNU9ESXhORE1zTUNBeU1Dd3dJRU14TWk0NU1ERTNPRFUzTERBZ055NHhOREk0TlRjeE5DdzFMalk1T1RreU16RTJJRGN1TVRReU9EVTNNVFFzTVRJdU56STFOREE1T0NCRE55NHhOREk0TlRjeE5Dd3hPUzQzTlRBNE9UWTFJREV5TGprd01UYzROVGNzTWpVdU5EVXdPREU1TnlBeU1Dd3lOUzQwTlRBNE1UazNJRm9nVFRJd0xEUXVNalF4T0RBek1qZ2dRekkwTGpjeU16SXhORE1zTkM0eU5ERTRNRE15T0NBeU9DNDFOekUwTWpnMkxEZ3VNRFV3TlRnNU1UUWdNamd1TlRjeE5ESTROaXd4TWk0M01qVTBNRGs0SUVNeU9DNDFOekUwTWpnMkxERTNMalF3TURJek1EVWdNalF1TnpJek1qRTBNeXd5TVM0eU1Ea3dNVFkwSURJd0xESXhMakl3T1RBeE5qUWdRekUxTGpJM05qYzROVGNzTWpFdU1qQTVNREUyTkNBeE1TNDBNamcxTnpFMExERTNMalF3TURJek1EVWdNVEV1TkRJNE5UY3hOQ3d4TWk0M01qVTBNRGs0SUVNeE1TNDBNamcxTnpFMExEZ3VNRFV3TlRnNU1UUWdNVFV1TWpjMk56ZzFOeXcwTGpJME1UZ3dNekk0SURJd0xEUXVNalF4T0RBek1qZ2dXaUlnYVdROUluQmhkR2d0TWlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4bWFXeDBaWElnZUQwaUxURTNMalVsSWlCNVBTSXRNVEV1TVNVaUlIZHBaSFJvUFNJeE16VXVNQ1VpSUdobGFXZG9kRDBpTVRNd0xqa2xJaUJtYVd4MFpYSlZibWwwY3owaWIySnFaV04wUW05MWJtUnBibWRDYjNnaUlHbGtQU0ptYVd4MFpYSXRNeUkrQ2lBZ0lDQWdJQ0FnSUNBZ0lEeG1aVTltWm5ObGRDQmtlRDBpTUNJZ1pIazlJaklpSUdsdVBTSlRiM1Z5WTJWQmJIQm9ZU0lnY21WemRXeDBQU0p6YUdGa2IzZFBabVp6WlhSUGRYUmxjakVpUGp3dlptVlBabVp6WlhRK0NpQWdJQ0FnSUNBZ0lDQWdJRHhtWlVkaGRYTnphV0Z1UW14MWNpQnpkR1JFWlhacFlYUnBiMjQ5SWpJaUlHbHVQU0p6YUdGa2IzZFBabVp6WlhSUGRYUmxjakVpSUhKbGMzVnNkRDBpYzJoaFpHOTNRbXgxY2s5MWRHVnlNU0krUEM5bVpVZGhkWE56YVdGdVFteDFjajRLSUNBZ0lDQWdJQ0FnSUNBZ1BHWmxRMjlzYjNKTllYUnlhWGdnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREFnSUNBd0lEQWdNQ0F3SURBZ0lDQXdJREFnTUNBd0lEQWdJREFnTUNBd0lEQXVOU0F3SWlCMGVYQmxQU0p0WVhSeWFYZ2lJR2x1UFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWo0OEwyWmxRMjlzYjNKTllYUnlhWGcrQ2lBZ0lDQWdJQ0FnUEM5bWFXeDBaWEkrQ2lBZ0lDQThMMlJsWm5NK0NpQWdJQ0E4WnlCcFpEMGlaR1ZtWVhWc2RDMXdjbTh0Y0dsamRIVnlaU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhKbFkzUWdhV1E5SWxKbFkzUmhibWRzWlNJZ1ptbHNiRDBpZFhKc0tDTnNhVzVsWVhKSGNtRmthV1Z1ZEMweEtTSWdlRDBpTUNJZ2VUMGlNQ0lnZDJsa2RHZzlJakV3TUNJZ2FHVnBaMmgwUFNJeE1EQWlQand2Y21WamRENEtJQ0FnSUNBZ0lDQThaeUJwWkQwaWRYTmxjaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb016QXVNREF3TURBd0xDQXlOeTR3TURBd01EQXBJaUJtYVd4c0xYSjFiR1U5SW01dmJucGxjbThpUGdvZ0lDQWdJQ0FnSUNBZ0lDQThaeUJwWkQwaVUyaGhjR1VpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWelpTQm1hV3hzUFNKaWJHRmpheUlnWm1sc2JDMXZjR0ZqYVhSNVBTSXhJaUJtYVd4MFpYSTlJblZ5YkNnalptbHNkR1Z5TFRNcElpQjRiR2x1YXpwb2NtVm1QU0lqY0dGMGFDMHlJajQ4TDNWelpUNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFjMlVnWm1sc2JEMGlJMFpHUWpNMU1TSWdlR3hwYm1zNmFISmxaajBpSTNCaGRHZ3RNaUkrUEM5MWMyVStDaUFnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZz09Jyk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xufVxuXG4jdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuc3BhbntcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jbmV4dC1idXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuXG4udGV4dC1oZWFkZXIge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzVweDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpIDAuOXMgZm9yd2FyZHM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRleHQtaGVhZGVyICB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgjZmRmYmZiLCAjZmZmN2Y4KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2YxNWI3NywgI2U0NDA1Zik7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbWVyYS1idXR0b257XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgYm9yZGVyOiAxcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDYsIDExNCwgMTk2LCAwLjMpLCByZ2JhKDAsIDgxLCAxNDUsIDAuMikpO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDU0MzcyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG5cbiNpbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "M98F":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts ***!
  \****************************************************************************/
/*! exports provided: ProfilePicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePage", function() { return ProfilePicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-picture.page.html */ "mCBp");
/* harmony import */ var _profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-picture.page.scss */ "KJ7D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/photo.service */ "6/gD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.page */ "1tJ+");










let ProfilePicturePage = class ProfilePicturePage {
    constructor(router, alertController, modal, photo, auth, toast) {
        this.router = router;
        this.alertController = alertController;
        this.modal = modal;
        this.photo = photo;
        this.auth = auth;
        this.toast = toast;
        this.defaultProfilePicturePath = '../../../../../assets/icon/default-pro-picture.svg';
        this.uploadedPhoto = false;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url;
    }
    ngOnInit() {
        console.log(this.defaultPicDataURI());
    }
    ngAfterViewInit() {
        console.log(this.defaultPictureRef.nativeElement);
    }
    getFormData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formElement = document.querySelectorAll('form');
            yield formElement.forEach(form => {
                if (form.id === 'proPicForm') {
                    console.log('Got Form: ', form);
                    this.formData = new FormData(form);
                    console.log('Form data: ', this.formData);
                    this.uploadedPhoto = true;
                }
            });
            const reader = new FileReader();
            yield reader.addEventListener('load', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.uploadedPhotoURL = reader.result;
                console.log('Before cropping: ' + reader.result);
                yield this.cropPhoto(this.uploadedPhotoURL);
            }), true);
            if (formElement) {
                console.log(event.target.files[0]);
                return reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
    uploadPhoto() {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'proPicForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
            }
        });
        const formData = new FormData();
        const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');
        formData.append('profile-picture', photoFile);
        if (this.uploadedPhoto === true) {
            this.photo.imageUpload(formData).subscribe(data => {
                console.log(data);
                console.log('Image Upload API Successful');
                this.goToUploadResumePage(data['objectUrl']);
            });
        }
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentSkipAlert();
    }
    cropPhoto(uploadedPhotoURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_9__["ImageCropperPage"],
                cssClass: 'image-cropper',
                componentProps: {
                    uploadedPhotoURL
                }
            });
            yield modal.present();
            modal.onDidDismiss().then(data => {
                this.uploadedPhotoURL = data.data;
                console.log('After cropping: ' + this.uploadedPhotoURL);
            });
        });
    }
    goToUploadResumePage(photoURL) {
        this.auth.getProfilePicture(photoURL);
        console.log('Going to Resume Page >>');
        this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    }
    presentSkipAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Skip',
                message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
                buttons: [
                    {
                        text: 'Skip',
                        handler: () => {
                            // // Get Default Picture Logo
                            //     this.photo.imageUpload().subscribe(
                            //       data => {
                            //         console.log(data);
                            //         console.log('Default Image Upload API Successful');
                            //         console.log(data['objectUrl']);
                            //         return this.goToUploadResumePage(data['objectUrl']);
                            //       }
                            //     );
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling Profile Picture Upload Skip...');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    presentCancelAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancel Sign up?',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(['']);
                            console.log('Cancelling Sign Up...');
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('Sign up cancelled');
        this.presentCancelAlert();
    }
    defaultPicDataURI() {
        // tslint:disable-next-line: max-line-length
        return 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
    }
    dataURLtoBlob(dataurl) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
};
ProfilePicturePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ProfilePicturePage.propDecorators = {
    defaultPictureRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['defaultPicture', { static: false },] }]
};
ProfilePicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-picture',
        template: _raw_loader_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [],
        styles: [_profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], ProfilePicturePage);



/***/ }),

/***/ "V0uV":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfilePicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function() { return ProfilePicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-picture-routing.module */ "cDQk");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-picture.page */ "M98F");
/* harmony import */ var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.module */ "Scpy");








let ProfilePicturePageModule = class ProfilePicturePageModule {
};
ProfilePicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"],
            src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__["ImageCropperPageModule"]
        ],
        declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
    })
], ProfilePicturePageModule);



/***/ }),

/***/ "cDQk":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfilePicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageRoutingModule", function() { return ProfilePicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-picture.page */ "M98F");




const routes = [
    {
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePage"]
    },
    {
        path: 'upload-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | upload-resume-upload-resume-module */ "upload-resume-upload-resume-module").then(__webpack_require__.bind(null, /*! ../upload-resume/upload-resume.module */ "bQWd")).then(m => m.UploadResumePageModule)
    },
];
let ProfilePicturePageRoutingModule = class ProfilePicturePageRoutingModule {
};
ProfilePicturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePicturePageRoutingModule);



/***/ }),

/***/ "mCBp":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Mobile -->\n      <ion-col size=\"12\">\n\n        <!-- Picture Wrappers -->\n      <ion-row class=\"ion-justify-content-center header\">\n        <ion-col size=\"12\" class=\"ion-align-items-center\">\n          <!-- Default Picture if user does not select profile picture Wrapper -->\n          <canvas\n            #defaultPicture\n            id=\"default-picture-wrapper\"\n            *ngIf=\"!uploadedPhoto\"></canvas>\n\n          <!-- User has uploaded cropped profile picture -->\n          <img\n            id=\"upload-picture-wrapper\"\n            *ngIf=\"uploadedPhoto\"\n            src=\"{{uploadedPhotoURL}}\" />\n\n            <!-- User has cropped profile picture -->\n            <!-- <img\n              id=\"upload-picture-wrapper\"\n              *ngIf=\"uploadedPhoto\"\n              src=\"{{croppedPhotoURL}}\" /> -->\n        </ion-col>\n\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n      </ion-row>\n\n        <form\n        (ngSubmit)=\"uploadPhoto()\" id=\"proPicForm\" type=\"multipart/form-data\">\n\n          <input\n            name=\"profile-picture\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhoto\">Next\n          </ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=profile-picture-profile-picture-module-es2015.js.map