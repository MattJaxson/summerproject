(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-picture-profile-picture-module"],{

/***/ "KJ7D":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: #e6e6e6;\n  --background-hover: #999;\n  color: #888;\n  width: 150px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.skip-button:hover {\n  color: white;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #005191;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.header {\n  background: #edf3f8;\n  margin-bottom: 20px;\n  padding: 50px 0;\n}\n\n.text-header {\n  font-size: 1em;\n  padding: 0 50px;\n  color: #333;\n  text-align: justify;\n  opacity: 0;\n  position: relative;\n  top: 35px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-header {\n    padding: 0 50px;\n    font-size: 1em;\n  }\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 150px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: #005191;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  width: 300px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 0px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n}\n\ninput[type=file]:hover {\n  background: linear-gradient(#0672c4, #054372);\n  color: white;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFNQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbXlIQUFBO0VBQ0EsVUFBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsY0FBQTtFQUVBLFVBQUE7RUFDQSxzRkFBQTtVQUFBLDhFQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0UsV0FBQTtFQUNGLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwRUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLDZDQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMRiIsImZpbGUiOiJwcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5vcmFuZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cblxuLnNraXAtYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM5OTk7XG4gIGNvbG9yOiAjODg4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnNraXAtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejRLUEhOMlp5QjNhV1IwYUQwaU1UQXdjSGdpSUdobGFXZG9kRDBpTVRBd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1EQWdNVEF3SWlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBnb2dJQ0FnUENFdExTQkhaVzVsY21GMGIzSTZJRk5yWlhSamFDQTFOaTR6SUNnNE1UY3hOaWtnTFNCb2RIUndjem92TDNOclpYUmphQzVqYjIwZ0xTMCtDaUFnSUNBOGRHbDBiR1UrWkdWbVlYVnNkQzF3Y204dGNHbGpkSFZ5WlR3dmRHbDBiR1UrQ2lBZ0lDQThaR1Z6WXo1RGNtVmhkR1ZrSUhkcGRHZ2dVMnRsZEdOb0xqd3ZaR1Z6WXo0S0lDQWdJRHhrWldaelBnb2dJQ0FnSUNBZ0lEeHNhVzVsWVhKSGNtRmthV1Z1ZENCNE1UMGlOVEFsSWlCNU1UMGlNQ1VpSUhneVBTSTFNQ1VpSUhreVBTSXhNREFsSWlCcFpEMGliR2x1WldGeVIzSmhaR2xsYm5RdE1TSStDaUFnSUNBZ0lDQWdJQ0FnSUR4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNM09VRTVRMFVpSUc5bVpuTmxkRDBpTUNVaVBqd3ZjM1J2Y0Q0S0lDQWdJQ0FnSUNBZ0lDQWdQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJelUxTnpNNFFpSWdjM1J2Y0MxdmNHRmphWFI1UFNJd0xqVXpNVFl6TWpReklpQnZabVp6WlhROUlqRXdNQ1VpUGp3dmMzUnZjRDRLSUNBZ0lDQWdJQ0E4TDJ4cGJtVmhja2R5WVdScFpXNTBQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB5T0N3eU5pNDROalEzTlRReElFTXlOUzQwTXpjMUxESTJMamcyTkRjMU5ERWdNalF1TWpBMU16VTNNU3d5T0M0eU56ZzJPRGcxSURJd0xESTRMakkzT0RZNE9EVWdRekUxTGpjNU5EWTBNamtzTWpndU1qYzROamc0TlNBeE5DNDFOekUwTWpnMkxESTJMamcyTkRjMU5ERWdNVElzTWpZdU9EWTBOelUwTVNCRE5TNHpOelVzTWpZdU9EWTBOelUwTVNBd0xETXlMakU0TkRZNE1qUWdNQ3d6T0M0M05ERTRNRE16SUV3d0xEUXhMakF3TkRBNU9EUWdRekFzTkRNdU16UTFPVEkzTXlBeExqa3hPVFkwTWpnMkxEUTFMakkwTlRrd01UWWdOQzR5T0RVM01UUXlPU3cwTlM0eU5EVTVNREUySUV3ek5TNDNNVFF5T0RVM0xEUTFMakkwTlRrd01UWWdRek00TGpBNE1ETTFOekVzTkRVdU1qUTFPVEF4TmlBME1DdzBNeTR6TkRVNU1qY3pJRFF3TERReExqQXdOREE1T0RRZ1REUXdMRE00TGpjME1UZ3dNek1nUXpRd0xETXlMakU0TkRZNE1qUWdNelF1TmpJMUxESTJMamcyTkRjMU5ERWdNamdzTWpZdU9EWTBOelUwTVNCYUlFMHpOUzQzTVRReU9EVTNMRFF4TGpBd05EQTVPRFFnVERRdU1qZzFOekUwTWprc05ERXVNREEwTURrNE5DQk1OQzR5T0RVM01UUXlPU3d6T0M0M05ERTRNRE16SUVNMExqSTROVGN4TkRJNUxETTBMalV6TlRNME9EUWdOeTQzTlN3ek1TNHhNRFkxTlRjMElERXlMRE14TGpFd05qVTFOelFnUXpFekxqTXdNelUzTVRRc016RXVNVEEyTlRVM05DQXhOUzQwTVRrMk5ESTVMRE15TGpVeU1EUTVNVGdnTWpBc016SXVOVEl3TkRreE9DQkRNalF1TmpFMk1EY3hOQ3d6TWk0MU1qQTBPVEU0SURJMkxqWTROelVzTXpFdU1UQTJOVFUzTkNBeU9Dd3pNUzR4TURZMU5UYzBJRU16TWk0eU5Td3pNUzR4TURZMU5UYzBJRE0xTGpjeE5ESTROVGNzTXpRdU5UTTFNelE0TkNBek5TNDNNVFF5T0RVM0xETTRMamMwTVRnd016TWdURE0xTGpjeE5ESTROVGNzTkRFdU1EQTBNRGs0TkNCYUlFMHlNQ3d5TlM0ME5UQTRNVGszSUVNeU55NHdPVGd5TVRRekxESTFMalExTURneE9UY2dNekl1T0RVM01UUXlPU3d4T1M0M05UQTRPVFkxSURNeUxqZzFOekUwTWprc01USXVOekkxTkRBNU9DQkRNekl1T0RVM01UUXlPU3cxTGpZNU9Ua3lNekUySURJM0xqQTVPREl4TkRNc01DQXlNQ3d3SUVNeE1pNDVNREUzT0RVM0xEQWdOeTR4TkRJNE5UY3hOQ3cxTGpZNU9Ua3lNekUySURjdU1UUXlPRFUzTVRRc01USXVOekkxTkRBNU9DQkROeTR4TkRJNE5UY3hOQ3d4T1M0M05UQTRPVFkxSURFeUxqa3dNVGM0TlRjc01qVXVORFV3T0RFNU55QXlNQ3d5TlM0ME5UQTRNVGszSUZvZ1RUSXdMRFF1TWpReE9EQXpNamdnUXpJMExqY3lNekl4TkRNc05DNHlOREU0TURNeU9DQXlPQzQxTnpFME1qZzJMRGd1TURVd05UZzVNVFFnTWpndU5UY3hOREk0Tml3eE1pNDNNalUwTURrNElFTXlPQzQxTnpFME1qZzJMREUzTGpRd01ESXpNRFVnTWpRdU56SXpNakUwTXl3eU1TNHlNRGt3TVRZMElESXdMREl4TGpJd09UQXhOalFnUXpFMUxqSTNOamM0TlRjc01qRXVNakE1TURFMk5DQXhNUzQwTWpnMU56RTBMREUzTGpRd01ESXpNRFVnTVRFdU5ESTROVGN4TkN3eE1pNDNNalUwTURrNElFTXhNUzQwTWpnMU56RTBMRGd1TURVd05UZzVNVFFnTVRVdU1qYzJOemcxTnl3MExqSTBNVGd3TXpJNElESXdMRFF1TWpReE9EQXpNamdnV2lJZ2FXUTlJbkJoZEdndE1pSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeG1hV3gwWlhJZ2VEMGlMVEUzTGpVbElpQjVQU0l0TVRFdU1TVWlJSGRwWkhSb1BTSXhNelV1TUNVaUlHaGxhV2RvZEQwaU1UTXdMamtsSWlCbWFXeDBaWEpWYm1sMGN6MGliMkpxWldOMFFtOTFibVJwYm1kQ2IzZ2lJR2xrUFNKbWFXeDBaWEl0TXlJK0NpQWdJQ0FnSUNBZ0lDQWdJRHhtWlU5bVpuTmxkQ0JrZUQwaU1DSWdaSGs5SWpJaUlHbHVQU0pUYjNWeVkyVkJiSEJvWVNJZ2NtVnpkV3gwUFNKemFHRmtiM2RQWm1aelpYUlBkWFJsY2pFaVBqd3ZabVZQWm1aelpYUStDaUFnSUNBZ0lDQWdJQ0FnSUR4bVpVZGhkWE56YVdGdVFteDFjaUJ6ZEdSRVpYWnBZWFJwYjI0OUlqSWlJR2x1UFNKemFHRmtiM2RQWm1aelpYUlBkWFJsY2pFaUlISmxjM1ZzZEQwaWMyaGhaRzkzUW14MWNrOTFkR1Z5TVNJK1BDOW1aVWRoZFhOemFXRnVRbXgxY2o0S0lDQWdJQ0FnSUNBZ0lDQWdQR1psUTI5c2IzSk5ZWFJ5YVhnZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ0lDQXdJREFnTUNBd0lEQWdJQ0F3SURBZ01DQXdJREFnSURBZ01DQXdJREF1TlNBd0lpQjBlWEJsUFNKdFlYUnlhWGdpSUdsdVBTSnphR0ZrYjNkQ2JIVnlUM1YwWlhJeElqNDhMMlpsUTI5c2IzSk5ZWFJ5YVhnK0NpQWdJQ0FnSUNBZ1BDOW1hV3gwWlhJK0NpQWdJQ0E4TDJSbFpuTStDaUFnSUNBOFp5QnBaRDBpWkdWbVlYVnNkQzF3Y204dGNHbGpkSFZ5WlNJZ2MzUnliMnRsUFNKdWIyNWxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRWlJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0NpQWdJQ0FnSUNBZ1BISmxZM1FnYVdROUlsSmxZM1JoYm1kc1pTSWdabWxzYkQwaWRYSnNLQ05zYVc1bFlYSkhjbUZrYVdWdWRDMHhLU0lnZUQwaU1DSWdlVDBpTUNJZ2QybGtkR2c5SWpFd01DSWdhR1ZwWjJoMFBTSXhNREFpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0E4WnlCcFpEMGlkWE5sY2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NekF1TURBd01EQXdMQ0F5Tnk0d01EQXdNREFwSWlCbWFXeHNMWEoxYkdVOUltNXZibnBsY204aVBnb2dJQ0FnSUNBZ0lDQWdJQ0E4WnlCcFpEMGlVMmhoY0dVaVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIVnpaU0JtYVd4c1BTSmliR0ZqYXlJZ1ptbHNiQzF2Y0dGamFYUjVQU0l4SWlCbWFXeDBaWEk5SW5WeWJDZ2pabWxzZEdWeUxUTXBJaUI0YkdsdWF6cG9jbVZtUFNJamNHRjBhQzB5SWo0OEwzVnpaVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHgxYzJVZ1ptbHNiRDBpSTBaR1FqTTFNU0lnZUd4cGJtczZhSEpsWmowaUkzQmhkR2d0TWlJK1BDOTFjMlUrQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGc9PScpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSkgMC41cyBmb3J3YXJkcztcbn1cblxuI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbnNwYW57XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI25leHQtYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDM1cHg7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjlzIGZvcndhcmRzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LWhlYWRlciAge1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoI2ZkZmJmYiwgI2ZmZjdmOCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmMTViNzcsICNlNDQwNWYpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW1lcmEtYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzA1NDM3Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuXG4jaW1nLXdyYXBwZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4iXX0= */");

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