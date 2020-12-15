(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["following-following-module"], {
    /***/
    "Go9/":
    /*!***********************************************************!*\
      !*** ./src/app/pages/posts/following/following.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function Go9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.post {\n  padding: 30px 30px;\n  margin-bottom: 80px;\n  border-radius: 5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  background: white;\n  font-size: 1em;\n  line-height: 35px;\n}\n\n.post hr {\n  background: #999;\n  opacity: 0.4;\n}\n\n@media screen and (max-width: 567px) {\n  .post {\n    padding: 30px 0px;\n  }\n}\n\n.no-posts {\n  height: 70vh;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: 100px;\n  height: 36px;\n  margin-top: 30px;\n  margin-bottom: 4px;\n  position: unset;\n  font-size: 0.7em;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#bffce9, #7efcd4);\n  font-size: 0.7em;\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 30px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 0px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  height: 40px;\n  margin-top: 40px;\n  opacity: 0;\n  width: 100%;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZvbGxvd2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFJQTtFQUNFO0lBQ0UsaUJBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQUZGOztBQUtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBRkY7O0FBS0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1FQUFBO0FBRkY7O0FBS0E7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtRUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQVFJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUxOOztBQVVBO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFQRjs7QUFVQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBUEY7O0FBVUE7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQVBGOztBQVdBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQVJGO0VBV0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFURjtBQUNGOztBQUFBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFSRjtFQVdBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJmb2xsb3dpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG5cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgb3BhY2l0eTogMC40O1xuXG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLnBvc3Qge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICB9XG59XG5cbi5uby1wb3N0cyB7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDUwcHggMCA4MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9vbGJhciA+IGlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDksMjE2LDIyNCwwLjEzKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcblxuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICB9XG59XG5cbi5wb3N0LXRvb2xiYXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgfVxuICB9XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNiZmZjZTksICM3ZWZjZDQpO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEycHggMCAwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzFiYWY4ODtcbiAgLS1jb2xvci1mb2N1c2VkOiB3aGl0ZTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "L9PC":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9PC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Following</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- fab placed to the bottom end -->\n    <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n<!-- Refresher -->\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n\n<!-- Desktop -->\n<ion-grid class=\"ion-hide-md-down\">\n\n  <!-- Desktop Header -->\n  <ion-row class=\"ion-hide-md-down\">\n    <ion-col offset=\"2.5\" size=\"2.5\" style=\"margin: 3% 0% 2% 0%;\">\n      <h1>Following</h1>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" push=\"2.65\" size=\"2\">\n      <ion-button class=\"add-button\"  (click)=\"addPost()\">\n        Add Post\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" push=\"1\" size=\"2\">\n      <ion-button class=\"blue-button\"  (click)=\"back()\">\n        Back\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n<ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n  <ion-col\n    class=\"no-posts ion-align-items-center\"\n    *ngIf=\"allFollowedPosts.length === 0\"\n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n    <div>\n      <p style=\"font-size: 1.2em;\">You are currently not following any posts. Please click the follow button on any Post to add it to this page.</p>\n    </div>\n  </ion-col>\n\n  <!-- Posts -->\n  <ion-col size=\"7\">\n    <ion-row *ngFor=\"let post of allFollowedPosts\" class=\"post\">\n\n      <!-- Profile Header -->\n      <ion-col size=\"11\">\n        <ion-row class=\"ion-align-items-center\">\n        <!-- Profile Picture -->\n        <ion-col push=\"0.25\" size=\"1\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n        </ion-col>\n\n        <!-- Post Creator's Name -->\n        <ion-col size=\"4\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n        </ion-col>\n\n        <!-- Date -->\n        <ion-col class=\"ion-float-right\" push-lg=\"5\" size=\"3\">\n            <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n        </ion-col>\n\n      </ion-row>\n      </ion-col>\n\n      <!-- Post Content -->\n      <ion-col size=\"12\">\n        <ion-row>\n          <!-- 1080x1350 -->\n          <ion-col push=\"0.25\" size=\"11\" >\n           <p class=\"post-content\">{{post.post}}</p>\n          </ion-col>\n       </ion-row>\n      </ion-col>\n\n      <!-- Comment -->\n      <ion-col size=\"12\">\n        <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n          <ion-col size=\"11.8\">\n            <ion-item lines=\"none\">\n             <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n               <ion-textarea\n                  class=\"comment-input\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  class=\"comment-post-button\"\n                  *ngIf=\"!commentForm\n                          .get('comment')\n                          .pristine && commentForm.value.comment.length >= 3\"\n                    name=\"send\"\n                    type=\"submit\">Post\n                </ion-button>\n             </form>\n\n    </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- Post Buttons -->\n      <ion-col size=\"12\">\n        <ion-row>\n          <!-- Upvote & Downvote-->\n          <ion-col size=\"4.7\">\n            <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n          </ion-col>\n\n          <!-- Follow & Comment -->\n          <ion-col push=\"0.75\" size=\"6\">\n            <app-follow-comment-buttons [isUser]=\"post.isUser\" [postID]=\"post._id\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-col>\n\n</ion-row>\n</ion-grid>\n\n<!-- Mobile -->\n<ion-grid class=\"ion-hide-lg-up\">\n\n<ion-row class=\"ion-justify-content-center\">\n\n  <!-- No Followed Post -->\n  <ion-col\n    class=\"no-posts ion-align-items-center\"\n    *ngIf=\"allFollowedPosts.length === 0\"\n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n    <div>\n      <p style=\"font-size: 1.2em;\">You are currently not following any posts. Please click the follow button on any Post to add it to this page.</p>\n    </div>\n  </ion-col>\n\n  <!-- Posts -->\n  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"10\" pull-lg=\"2\">\n    <ion-row *ngFor=\"let post of allFollowedPosts\" style=\"margin-top: 1%;\" class=\"post\">\n\n      <!-- Profile Header -->\n      <ion-col size=\"11\">\n        <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\n        <!-- Profile Picture -->\n        <ion-col push=\"0.2\" size=\"1.3\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n        </ion-col>\n\n        <!-- Post Creator's Name -->\n        <ion-col push=\"0.2\" size=\"5\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <h6 style=\"font-size: 1em; margin: 10px 0 10px 0px; color: #666;\">{{post.creatorName}}</h6>\n        </ion-col>\n\n        <!-- Date -->\n        <ion-col class=\"ion-text-right\" push=\"1.5\" size=\"3\">\n            <h6 style=\"opacity: 0.4; font-size: 0.7em; margin: 10px 0; position: relative; top: 10px;\">{{post.date}}</h6>\n        </ion-col>\n\n      </ion-row>\n      </ion-col>\n\n      <!-- Post Content -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- (click)=\"postPage(post)\"  -->\n          <!-- 1080x1350 -->\n          <ion-col size=\"11\" style=\"height: auto; background: white\">\n          <p class=\"post-content\" style=\"font-size: 1em; width: 100%; position: unset; line-height: unset;\">{{post.post}}</p>\n          </ion-col>\n      </ion-row>\n      </ion-col>\n\n      <!-- Comment -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\" style=\"position: relative; right: 6px; top: -4px;\" >\n          <ion-col size=\"12\">\n            <ion-item  style=\"height: auto;\" lines=\"none\">\n            <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n              <ion-textarea\n              class=\"comment-input-mobile\"\n              autogrow=\"true\"\n              autocapitalize=\"true\"\n              rows=\"5\"\n              spellcheck=\"true\"\n              wrap=\"soft\"\n              type=\"text\"\n              placeholder=\"Add a Comment\" formControlName=\"comment\">\n            </ion-textarea>\n            <!-- Comment Post Button -->\n            <ion-button\n              style=\"float: right;\"\n              class=\"comment-post-button\"\n              *ngIf=\"!commentForm\n                      .get('comment')\n                      .pristine && commentForm.value.comment.length >= 3\"\n                name=\"send\"\n                type=\"submit\">Post\n            </ion-button>\n            </form>\n\n    </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- Post Buttons -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- Upvote & Downvote-->\n          <ion-col pull=\"1\" size=\"4\" size-xs=\"4.4\">\n            <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n          </ion-col>\n\n          <!-- Follow & Comment -->\n          <ion-col size=\"6\">\n            <app-follow-comment-buttons style=\"font-size: 1.3em\" [postID]=\"post._id\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-col>\n\n</ion-row>\n</ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "c9Mp":
    /*!*********************************************************!*\
      !*** ./src/app/pages/posts/following/following.page.ts ***!
      \*********************************************************/

    /*! exports provided: FollowingPage */

    /***/
    function c9Mp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowingPage", function () {
        return FollowingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_following_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./following.page.html */
      "L9PC");
      /* harmony import */


      var _following_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./following.page.scss */
      "Go9/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modals/third-person-profile/third-person-profile.page */
      "u2AK");

      var FollowingPage = /*#__PURE__*/function () {
        function FollowingPage(router, posts, profile, toast, formBuilder, eventEmitterService, modal, location) {
          _classCallCheck(this, FollowingPage);

          this.router = router;
          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.formBuilder = formBuilder;
          this.eventEmitterService = eventEmitterService;
          this.modal = modal;
          this.location = location;
          this.allFollowedPosts = [];
        }

        _createClass(FollowingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.location.onPopState(function () {
              _this.eventEmitterService.onBackAction();
            }); // Get the User's Followed Posts

            this.profile.getUserDetails().subscribe(function (details) {
              console.log('User ID from Following Page OnInit');
              _this.userID = details['_id'];
              _this.userFullName = details['fullName'];
              _this.userEmail = details['email'];
              _this.userProfilePicture = details['profilePicture'];

              _this.posts.getFollowedPost(_this.userID).subscribe(function (data) {
                _this.allFollowedPosts = Object.values(data).reverse();
                console.log(data);

                var _iterator = _createForOfIteratorHelper(_this.allFollowedPosts),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var post = _step.value;
                    post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), 'MMMM do, yyyy');
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                return _this.allFollowedPosts;
              });
            });
            console.log('Got Followed Posts'); // To collect comment data

            this.commentForm = this.formBuilder.group({
              comment: ['']
            });
          }
        }, {
          key: "thirdPersonProfileModal",
          value: function thirdPersonProfileModal(creatorEmail, creatorName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var thirdPersonProfileModalConfig;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modal.create({
                        component: src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_12__["ThirdPersonProfilePage"],
                        componentProps: {
                          creatorEmail: creatorEmail,
                          creatorName: creatorName
                        },
                        cssClass: 'third-person-profile-modal'
                      });

                    case 2:
                      thirdPersonProfileModalConfig = _context.sent;
                      _context.next = 5;
                      return thirdPersonProfileModalConfig.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "postPage",
          value: function postPage(post) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/posts/post-page', post._id]);
          }
        }, {
          key: "addPost",
          value: function addPost() {
            this.router.navigate(['/home/posts/add-post']);
          }
        }, {
          key: "back",
          value: function back() {
            this.eventEmitterService.onBackAction();
            this.router.navigate(['/home/posts']);
          }
        }, {
          key: "comment",
          value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var date, toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Reset Comment Input
                      this.commentForm.reset();
                      _context2.next = 3;
                      return Date.now();

                    case 3:
                      date = _context2.sent;
                      console.log('Posting comment');
                      console.log('Post ID: ' + postID);
                      _context2.next = 8;
                      return this.posts.comment(postID, this.userFullName, this.userEmail, this.userProfilePicture, _comment).subscribe(function () {
                        _this2.posts.getPostInfo(postID).subscribe(function (post) {
                          _this2.posts.getPostInfo(postID).subscribe(function (post) {
                            var _iterator2 = _createForOfIteratorHelper(post['comments']),
                                _step2;

                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var postComments = _step2.value;
                                console.log(postComments);
                                postComments.isUser = false;
                                postComments.canDeleteComment = false;
                                postComments.canReport = true; // If this comment is from the logged in user, they can delete and edit

                                if (postComments.userEmail === _this2.userEmail) {
                                  postComments.isUser = true;
                                  postComments.canDeleteComment = true;
                                  postComments.canReport = false;
                                }

                                postComments.repliesLength = postComments.replies.length;
                                postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                                  includeSeconds: true,
                                  addSuffix: false
                                });
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }

                            _this2.posts.commentsSubject$.next(post['comments'].reverse());
                          });
                        });
                      });

                    case 8:
                      _context2.next = 10;
                      return this.posts.getPostInfo(postID).subscribe(function (post) {
                        var _iterator3 = _createForOfIteratorHelper(post['comments']),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var postComments = _step3.value;
                            postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }

                        _this2.posts.commentsSubject$.next(post['comments'].reverse());
                      });

                    case 10:
                      toast = this.toast.create({
                        message: 'Your comment has been added.',
                        duration: 1500
                      });
                      toast.then(function (toast) {
                        return toast.present();
                      });
                      _context2.next = 14;
                      return this.router.navigate(['/home/posts/post-page', postID]);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // Get the User's Followed Posts
                      this.profile.getUserDetails().subscribe(function (details) {
                        console.log('User ID from Following Page OnInit');
                        _this3.userID = details['_id'];
                        _this3.userFullName = details['fullName'];
                        _this3.userEmail = details['email'];
                        _this3.userProfilePicture = details['profilePicture'];

                        _this3.posts.getFollowedPost(_this3.userID).subscribe(function (data) {
                          _this3.allFollowedPosts = Object.values(data).reverse();
                          console.log(data);

                          var _iterator4 = _createForOfIteratorHelper(_this3.allFollowedPosts),
                              _step4;

                          try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                              var post = _step4.value;
                              post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), 'MMMM do, yyyy');
                            }
                          } catch (err) {
                            _iterator4.e(err);
                          } finally {
                            _iterator4.f();
                          }

                          return _this3.allFollowedPosts;
                        });
                      }); // Present Toast

                      _context3.next = 3;
                      return setTimeout(function () {
                        var toast = _this3.toast.create({
                          message: 'Inspiration Page has been refreshed',
                          duration: 3000
                        });

                        event.target.complete();
                        toast.then(function (toast) {
                          return toast.present();
                        });
                      }, 2000);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return FollowingPage;
      }();

      FollowingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]
        }];
      };

      FollowingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-following',
        template: _raw_loader_following_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_following_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]])], FollowingPage);
      /***/
    },

    /***/
    "txkh":
    /*!***********************************************************!*\
      !*** ./src/app/pages/posts/following/following.module.ts ***!
      \***********************************************************/

    /*! exports provided: FollowingPageModule */

    /***/
    function txkh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function () {
        return FollowingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _following_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./following-routing.module */
      "vF9a");
      /* harmony import */


      var _following_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./following.page */
      "c9Mp");

      var FollowingPageModule = function FollowingPageModule() {
        _classCallCheck(this, FollowingPageModule);
      };

      FollowingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _following_routing_module__WEBPACK_IMPORTED_MODULE_6__["FollowingPageRoutingModule"]],
        declarations: [_following_page__WEBPACK_IMPORTED_MODULE_7__["FollowingPage"]]
      })], FollowingPageModule);
      /***/
    },

    /***/
    "vF9a":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/posts/following/following-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: FollowingPageRoutingModule */

    /***/
    function vF9a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowingPageRoutingModule", function () {
        return FollowingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./following.page */
      "c9Mp");

      var routes = [{
        path: '',
        component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
      }];

      var FollowingPageRoutingModule = function FollowingPageRoutingModule() {
        _classCallCheck(this, FollowingPageRoutingModule);
      };

      FollowingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FollowingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=following-following-module-es5.js.map