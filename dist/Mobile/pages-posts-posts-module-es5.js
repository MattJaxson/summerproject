(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"], {
    /***/
    "1pJF":
    /*!*********************************************!*\
      !*** ./src/app/pages/posts/posts.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function pJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-picture {\n  height: 28px;\n  width: 28px;\n  border-radius: 100px;\n  margin-right: 5px;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n}\n\n.header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.5;\n  margin-top: 10px;\n}\n\n.post {\n  padding: 10px 0;\n  margin-bottom: 80px;\n  border-radius: 5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  font-size: 1.2em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #005191;\n  position: relative;\n  left: 5px;\n  margin: 0;\n  line-height: 25px;\n}\n\n.post-name {\n  font-size: 0.9em;\n  font-weight: 500;\n  color: #666;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.5em;\n  margin: 0;\n  line-height: 18px;\n}\n\nion-content {\n  background: #edf3f8;\n}\n\n@media screen and (max-width: 744px) {\n  .post {\n    position: relative;\n    top: 0px;\n  }\n}\n\n.post-content {\n  font-size: 0.9em;\n  position: relative;\n  top: 20px;\n  margin: 0;\n}\n\n.user-details {\n  position: fixed;\n  background: none;\n  height: 200px;\n}\n\n#username {\n  color: #005191;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  left: 0px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-header ion-toolbar {\n  --background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\n\nion-header p {\n  color: #000;\n  font-size: 1.2em;\n}\n\nion-item {\n  --backsground: none;\n}\n\n.following-mobile-button {\n  display: inline-block;\n  opacity: 1;\n  --background: #005191;\n  --color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 40px;\n  height: 40px;\n  font-size: 0.6em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  .following-mobile-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\n.following-desktop-button {\n  font-weight: 800;\n  height: 36px;\n  width: 150px;\n  margin-top: 20px;\n  font-size: 0.7em;\n  transition: 0s;\n}\n\n.blue-button {\n  height: 36px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#5ad8b2, #2e8f72);\n  font-weight: 800;\n  display: block;\n  width: 150px;\n  margin-top: 20px;\n  font-size: 0.7em;\n}\n\n.my-post-button {\n  --background: #e6e6e6;\n  --background-hover: #999;\n  --color: #888;\n  font-weight: 800;\n  display: block;\n  width: 150px;\n  margin-top: 20px;\n  font-size: 0.7em;\n}\n\n.my-post-button:hover {\n  --color: white;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#5ad8b2, #2e8f72);\n  height: 40px;\n  margin-top: 0px;\n  border-radius: 5px;\n  opacity: 0;\n  width: 100%;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: 150px;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 2px solid #005191;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUFjLFdBQUE7RUFDZCxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQWEsU0FBQTtFQUNiLGlCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQVcsaUJBQUE7QUFHYjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUFFRjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUhGO0FBQ0Y7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRkFBQTtVQUFBLHlFQUFBO0FBTEY7O0FBUUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUxGOztBQVFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUVBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1FQUFBO0FBTEY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFORjs7QUFTQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBTkY7RUFTQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVBGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQU5GO0VBU0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0U7SUFDRSw0QkFBQTtFQVJGO0VBV0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFURjtBQUNGOztBQUNBO0VBQ0U7SUFDRSw0QkFBQTtFQVJGO0VBV0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFURjtBQUNGOztBQVlBO0VBQ0U7SUFDRSxtQkFBQTtFQVZGO0VBWUE7SUFDRSxxQkFBQTtFQVZGO0VBWUE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFWRjtBQUNGOztBQUFBO0VBQ0U7SUFDRSxtQkFBQTtFQVZGO0VBWUE7SUFDRSxxQkFBQTtFQVZGO0VBWUE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMjhweDsgd2lkdGg6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuXG4uaGVhZGVyLWhye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnBvc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5wb3N0LW5hbWUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY2NjsgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMThweDtcblxufVxuXG4ucG9zdC1kYXRlIHtcbiAgb3BhY2l0eTogMC40O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NHB4KSB7XG4gIC5wb3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gIH1cbn1cblxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gfVxuXG4udXNlci1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4jdXNlcm5hbWUge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cblxuaW9uLWhlYWRlciB7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2VkZjNmODtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNTE5MTtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tzZ3JvdW5kOiBub25lO1xufVxuXG4uZm9sbG93aW5nLW1vYmlsZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gIC5mb2xsb3dpbmctbW9iaWxlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICB9XG59XG5cblxuLmZvbGxvd2luZy1kZXNrdG9wLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0cmFuc2l0aW9uOiAwcztcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzJlOGY3Mik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5teS1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOTk5O1xuICAtLWNvbG9yOiAjODg4O1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4ubXktcG9zdC1idXR0b246aG92ZXIge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjMmU4ZjcyKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMnB4IDAgNHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB1c2VybmFtZS1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFkZC1wb3N0LWJ1dHRvbi10YXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "6ViI":
    /*!****************************************************!*\
      !*** ./src/app/pages/posts/post-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: PostRoutingModule */

    /***/
    function ViI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function () {
        return PostRoutingModule;
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


      var _posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./posts.page */
      "FvZU");

      var routes = [{
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]
      }, {
        path: 'add-post',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-post-add-post-module */
          "add-post-add-post-module").then(__webpack_require__.bind(null,
          /*! ./add-post/add-post.module */
          "E2mU")).then(function (m) {
            return m.AddPostPageModule;
          });
        }
      }, {
        path: 'post-page/:_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | post-page-post-page-module */
          [__webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("common"), __webpack_require__.e("post-page-post-page-module")]).then(__webpack_require__.bind(null,
          /*! ./post-page/post-page.module */
          "qgNS")).then(function (m) {
            return m.PostPagePageModule;
          });
        }
      }, {
        path: 'following',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | following-following-module */
          "following-following-module").then(__webpack_require__.bind(null,
          /*! ./following/following.module */
          "txkh")).then(function (m) {
            return m.FollowingPageModule;
          });
        }
      }, {
        path: 'my-posts/:email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-posts-my-posts-module */
          "my-posts-my-posts-module").then(__webpack_require__.bind(null,
          /*! ./my-posts/my-posts.module */
          "3c3Z")).then(function (m) {
            return m.MyPostsPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notifications-notifications-module */
          "notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "kVc8")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'student-chat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | student-chat-student-chat-module */
          [__webpack_require__.e("common"), __webpack_require__.e("student-chat-student-chat-module")]).then(__webpack_require__.bind(null,
          /*! ./student-chat/student-chat.module */
          "JGKh")).then(function (m) {
            return m.StudentChatPageModule;
          });
        }
      }];

      var PostRoutingModule = function PostRoutingModule() {
        _classCallCheck(this, PostRoutingModule);
      };

      PostRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PostRoutingModule);
      /***/
    },

    /***/
    "FvZU":
    /*!*******************************************!*\
      !*** ./src/app/pages/posts/posts.page.ts ***!
      \*******************************************/

    /*! exports provided: PostsPage */

    /***/
    function FvZU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsPage", function () {
        return PostsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./posts.page.html */
      "XrIE");
      /* harmony import */


      var _posts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./posts.page.scss */
      "1pJF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
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


      var src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modals/third-person-profile/third-person-profile.page */
      "u2AK");
      /* harmony import */


      var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/student-chat.service */
      "Y19J");
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      "KWWs");

      var PostsPage = /*#__PURE__*/function () {
        function PostsPage(router, modal, posts, profile, toast, formBuilder, postsEmitterService, studentChat, notificationsService) {
          _classCallCheck(this, PostsPage);

          this.router = router;
          this.modal = modal;
          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.formBuilder = formBuilder;
          this.postsEmitterService = postsEmitterService;
          this.studentChat = studentChat;
          this.notificationsService = notificationsService;
        }

        _createClass(PostsPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.postsSub.unsubscribe();
            this.notificationsSub.unsubscribe();
            this.postsEmitterService.subsVar.unsubscribe();
            this.profileSub.unsubscribe();
            this.posts.followingSubject$.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getUserInfo();
            this.getPosts();
            this.getFollowingPosts(); // When Users updated their Profile Picture, Unfollow/Follow, Up/Downvote, or Comment on an individual

            if (this.postsEmitterService.subsVar === undefined) {
              this.postsEmitterService.subsVar = this.postsEmitterService.invokePostsPageRefresh.subscribe(function () {
                _this.getPosts();

                _this.getUserInfo();
              });
            } // To collect comment data


            this.commentForm = this.formBuilder.group({
              comment: ['']
            });
          }
        }, {
          key: "postPage",
          value: function postPage(post) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/posts/post-page', post._id]);
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo() {
            var _this2 = this;

            this.postsSub = this.profile.getUserDetails().subscribe(function (details) {
              _this2.userEmail = details['email'];
              _this2.userProfilePicture = details['profilePicture'];
              _this2.userFullName = details['fullName'];
              _this2.followedPost = details['followedPost'];
              _this2.notificationsSub = _this2.notificationsService.notifications$.subscribe(function (notifications) {
                console.log(notifications.length);
                _this2.notificationsLength = notifications.length;
              });
            });
          }
        }, {
          key: "getFollowingPosts",
          value: function getFollowingPosts() {
            var _this3 = this;

            // Get the user's posts he/she is following
            this.profileSub = this.profile.getUserDetails().subscribe(function (details) {
              _this3.posts.followingSubject$.next(_this3.followedPost);

              _this3.posts.followingSubject$.subscribe(function (posts) {
                _this3.followedPostCount = posts.length;
              });

              _this3.studentChat.conversations$.next(Object.values(details['studentChat']).reverse());
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this4 = this;

            this.getFollowingPosts();
            this.postsSub = this.posts.getPosts().subscribe(function (jobs) {
              _this4.allPosts = Object.values(jobs).reverse();

              var _iterator = _createForOfIteratorHelper(_this4.allPosts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var post = _step.value;
                  post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(post.date), {
                    includeSeconds: true,
                    addSuffix: true
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }); // Present Toast

            setTimeout(function () {
              var toast = _this4.toast.create({
                message: 'Inspiration Page has been refreshed',
                duration: 3000
              });

              event.target.complete();
              toast.then(function (toast) {
                return toast.present();
              });
            }, 2000);
          }
        }, {
          key: "getPosts",
          value: function getPosts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.postsSub = this.posts.getPosts().subscribe(function (posts) {
                        // console.log(posts);
                        _this5.allPosts = Object.values(posts).reverse();

                        _this5.posts.postsSubject$.next(_this5.allPosts);

                        var _iterator2 = _createForOfIteratorHelper(_this5.allPosts),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var post = _step2.value;
                            post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(post.date), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addPost",
          value: function addPost() {
            this.router.navigate(['/home/posts/add-post']);
          }
        }, {
          key: "myPosts",
          value: function myPosts(userEmail) {
            console.log('Going to my posts page');
            this.router.navigate(['/home/posts/my-posts', userEmail]);
          }
        }, {
          key: "following",
          value: function following() {
            this.router.navigate(['/home/posts/following']);
          }
        }, {
          key: "chat",
          value: function chat() {
            this.router.navigate(['/home/posts/student-chat']);
          }
        }, {
          key: "notifications",
          value: function notifications() {
            this.router.navigate(['/home/posts/notifications']);
          }
        }, {
          key: "comment",
          value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(postID, userFullName, userEmail, userProfilePicture, _comment); // Reset Comment Input

                      this.commentForm.reset();
                      console.log('Posting comment');
                      console.log('Post ID: ' + postID);
                      _context2.next = 6;
                      return this.posts.comment(postID, userFullName, userEmail, userProfilePicture, _comment.comment).subscribe(function (newComment) {
                        _this6.postsSub = _this6.posts.getPostInfo(postID).subscribe(function (post) {
                          var _iterator3 = _createForOfIteratorHelper(post['comments']),
                              _step3;

                          try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                              var postComments = _step3.value;
                              postComments.isUser = false;
                              postComments.canDeleteComment = false;
                              postComments.canReport = true; // If this comment is from the logged in user, they can delete and edit

                              if (postComments.userEmail === _this6.userEmail) {
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
                            _iterator3.e(err);
                          } finally {
                            _iterator3.f();
                          }

                          _this6.posts.commentsSubject$.next(post['comments'].reverse());

                          var postCreator = post['creatorEmail'];
                          console.log(newComment); // this.userEmail = instigatingUser
                          // postCreator = recievingUser

                          _this6.notificationsService.commentNotification(_this6.userEmail, postCreator, postID, newComment).subscribe();
                        });
                      });

                    case 6:
                      this.postsSub = this.posts.getPostInfo(postID).subscribe(function (post) {
                        var _iterator4 = _createForOfIteratorHelper(post['comments']),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var postComments = _step4.value;
                            postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }

                        _this6.posts.commentsSubject$.next(post['comments'].reverse());
                      });
                      toast = this.toast.create({
                        message: 'Your comment has been added.',
                        duration: 1500
                      });
                      toast.then(function (toast) {
                        return toast.present();
                      });
                      _context2.next = 11;
                      return this.router.navigate(['/home/posts/post-page', postID]);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "thirdPersonProfileModal",
          value: function thirdPersonProfileModal(creatorEmail, creatorName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var thirdPersonProfileModalConfig;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modal.create({
                        component: src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_11__["ThirdPersonProfilePage"],
                        componentProps: {
                          creatorEmail: creatorEmail,
                          creatorName: creatorName
                        },
                        cssClass: 'third-person-profile-modal'
                      });

                    case 2:
                      thirdPersonProfileModalConfig = _context3.sent;
                      _context3.next = 5;
                      return thirdPersonProfileModalConfig.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return PostsPage;
      }();

      PostsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"]
        }, {
          type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_12__["StudentChatService"]
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_13__["NotificationsService"]
        }];
      };

      PostsPage.propDecorators = {
        fabButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFabButton"], {
            "static": true
          }]
        }]
      };
      PostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-posts',
        template: _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"], src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_12__["StudentChatService"], src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_13__["NotificationsService"]])], PostsPage);
      /***/
    },

    /***/
    "XrIE":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function XrIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>\n        <img class=\"profile-picture\" src=\"{{userProfilePicture}}\" alt=\"\">\n        {{userFullName}}\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"following()\">\n        <ion-icon  size=\"large\" src=\"../../assets/icons/following-icon.svg\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button (click)=\"chat()\">\n        <ion-icon size=\"medium\" src=\"../../assets/icons/chat-box-icon.svg\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"notifications()\">\n        <ion-icon size=\"large\" src=\"../../assets/icons/notifications-icon.svg\"></ion-icon>\n        <span style=\"background: none; color: #e4405f; height: 15px; width: 15px; border-radius: 100px; position: relative; font-size: 1.5em;\">{{notificationsLength}}</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col push-xs=\".45\"  push-sm=\"0.35\"  size-xs=\"1.2\">\n          <img src=\"{{userProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 28px; width: 28px;\">\n        </ion-col>\n        <ion-col push-sm=\".5\" size=\"7\">\n          <p id=\"username\">{{userFullName}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"add-post-button\" (click)=\"addPost()\">\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col size=\"7.5\" style=\"margin-top: 2%;\">\n        <ion-row *ngFor=\"let post of allPosts\" class=\"post ion-justify-content-center\">\n\n          <!-- Profile Heder -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-align-items-center\">\n            <!-- Profile Picture -->\n            <ion-col push=\"0.2\" size=\"1\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"4\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n            </ion-col>\n\n            <!-- Date -->\n            <ion-col class=\"ion-float-right\" push-lg=\"4.3\" size=\"3\">\n                <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n            </ion-col>\n\n          </ion-row>\n          </ion-col>\n\n          <!-- (click)=\"postPage(post)\" -->\n          <!-- Post Content -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- 1080x1350 -->\n              <ion-col size=\"11.3\">\n               <p class=\"post-title\">{{post.title}}</p>\n              </ion-col>\n           </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- 1080x1350 -->\n              <ion-col size=\"11.3\">\n                <!-- <app-read-more [dataLength]=\"dataLength\">\n                  {{post.post}}\n                </app-read-more> -->\n               <!-- <p class=\"post-content\">{{post.post}}</p> -->\n              </ion-col>\n           </ion-row>\n          </ion-col>\n\n          <!-- Comment -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"11.8\">\n                <ion-item lines=\"none\">\n                 <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                   <ion-textarea\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\n                    </ion-textarea>\n                    <!-- Comment Post Button -->\n                    <ion-button\n                      class=\"comment-post-button\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\"\n                        type=\"submit\">Post\n                    </ion-button>\n                 </form>\n\n        </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Buttons -->\n          <ion-col size=\"11\">\n            <ion-row>\n              <!-- Upvote & Downvote-->\n              <ion-col push=\"0\" size=\"4.7\">\n                <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n              </ion-col>\n\n              <!-- Follow & Comment -->\n              <ion-col push=\"0.8\" size=\"6\">\n                <app-follow-comment-buttons [isUser]=\"post.isUser\" [postID]=\"post._id\"></app-follow-comment-buttons>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-col>\n\n      <!-- Sidebar with User Info -->\n      <ion-col push=\"0.5\" size=\"2\" style=\"margin-top: 2%;\">\n        <ion-row class=\"user-details\" style=\"position: fixed;\">\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col size-lg=\"2.8\" size-xl=\"2.1\">\n                <img src=\"{{userProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\">\n              </ion-col>\n              <ion-col size=\"6\">\n                <h6 style=\"font-size: 1.2em; font-weight: 700; position: relative; left: 10px;\">{{userFullName}}</h6>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button following-desktop-button\" (click)=\"following()\">\n              Following ({{followedPostCount}})\n            </ion-button>\n            <ion-button class=\"my-post-button\"  (click)=\"myPosts(this.userEmail)\">\n              My Posts\n            </ion-button>\n            <ion-button class=\"add-button\"  (click)=\"addPost()\">\n              Add Post\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n\n      <!-- Posts -->\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"10\" pull-lg=\"2\">\n        <ion-row *ngFor=\"let post of allPosts\" style=\"margin-top: 1%;\" class=\"post ion-justify-content-center\">\n\n          <!-- Profile Header -->\n          <ion-col size=\"11\">\n            <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\n            <!-- Profile Picture -->\n            <ion-col size=\"1.3\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"10\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <p class=\"post-name\">{{post.creatorName}}</p>\n              <p class=\"post-date\">{{post.date}}</p>\n              <hr class=\"header-hr\">\n            </ion-col>\n\n          </ion-row>\n          </ion-col>\n\n          <!-- Post Content -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- (click)=\"postPage(post)\"  -->\n              <!-- 1080x1350 -->\n              <ion-col size=\"11\">\n                <p class=\"post-title\">{{post.title}}</p>\n                <p class=\"post-content\">{{post.post}}</p>\n              </ion-col>\n          </ion-row>\n          </ion-col>\n\n          <!-- Comment -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\" style=\"position: relative; right: 0px; top: -4px;\" >\n              <ion-col size=\"12\">\n                <ion-item  style=\"height: auto;\" lines=\"none\">\n                <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                  <ion-textarea\n                  class=\"comment-input-mobile\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  class=\"comment-post-button\"\n                  *ngIf=\"!commentForm\n                          .get('comment')\n                          .pristine && commentForm.value.comment.length >= 3\"\n                    name=\"send\"\n                    type=\"submit\">Post\n                </ion-button>\n                </form>\n\n        </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Buttons -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- Upvote & Downvote-->\n              <ion-col pull=\"1\" size=\"4\" size-xs=\"4.4\">\n                <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n              </ion-col>\n\n              <!-- Follow & Comment -->\n              <ion-col push=\"1\" size=\"6\" class=\"ion-float-right\">\n                <app-follow-comment-buttons [postID]=\"post._id\"></app-follow-comment-buttons>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "XxUk":
    /*!*********************************************!*\
      !*** ./src/app/pages/posts/posts.module.ts ***!
      \*********************************************/

    /*! exports provided: PostPageModule */

    /***/
    function XxUk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPageModule", function () {
        return PostPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _posts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./posts.page */
      "FvZU");
      /* harmony import */


      var _post_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./post-routing.module */
      "6ViI");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var src_app_modals_third_person_profile_third_person_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/third-person-profile/third-person-profile.module */
      "tymS"); // import { ReadMoreComponent } from '../../components/read-more/read-more.component';


      var PostPageModule = function PostPageModule() {
        _classCallCheck(this, PostPageModule);
      };

      PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _post_routing_module__WEBPACK_IMPORTED_MODULE_6__["PostRoutingModule"], src_app_modals_third_person_profile_third_person_profile_module__WEBPACK_IMPORTED_MODULE_8__["ThirdPersonProfilePageModule"]],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_5__["PostsPage"]]
      })], PostPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-posts-posts-module-es5.js.map