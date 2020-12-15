(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"], {
    /***/
    "+RqQ":
    /*!**************************************************************!*\
      !*** ./src/app/modals/reply-comment/reply-comment.module.ts ***!
      \**************************************************************/

    /*! exports provided: ReplyCommentPageModule */

    /***/
    function RqQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyCommentPageModule", function () {
        return ReplyCommentPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reply-comment-routing.module */
      "hCOu");
      /* harmony import */


      var _reply_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reply-comment.page */
      "cZU3");

      var ReplyCommentPageModule = function ReplyCommentPageModule() {
        _classCallCheck(this, ReplyCommentPageModule);
      };

      ReplyCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReplyCommentPageRoutingModule"]],
        declarations: [_reply_comment_page__WEBPACK_IMPORTED_MODULE_6__["ReplyCommentPage"]]
      })], ReplyCommentPageModule);
      /***/
    },

    /***/
    "0NOO":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NOO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancel()\">\n          cancel\n        </ion-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <ion-col size=\"10\">\n        <p id=\"userfullname\"></p>\n        <form [formGroup]=\"replyCommentForm\" (ngSubmit)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\">\n          <ion-textarea\n            (keydown.control.enter)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\"\n            class=\"reply-input\"\n            autogrow=\"true\"\n            autocapitalize=\"true\"\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            type=\"text\"\n            placeholder=\"Replying to: {{userFullName}}\" formControlName=\"reply\">\n          </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Reply\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "8WaI":
    /*!***********************************************************!*\
      !*** ./src/app/pages/posts/post-page/post-page.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function WaI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.3;\n  margin-top: 10px;\n}\n\n.post {\n  margin-bottom: 40px;\n  background: #edf3f8;\n  padding: 20px 0px;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #005191;\n}\n\n.profile-picture {\n  border-radius: 100px;\n  height: 35px;\n  width: 35px;\n  display: inline-block;\n}\n\n.post-name {\n  font-size: 1.2em;\n  font-weight: 500;\n  color: #005191;\n  margin: 0;\n  line-height: 18px;\n  display: inline-block;\n}\n\n.post-date {\n  opacity: 0.8;\n  font-size: 0.5em;\n  margin: 0;\n  line-height: 18px;\n  display: block;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: 100px;\n  height: 36px;\n  margin-top: 30px;\n  margin-bottom: 4px;\n  position: unset;\n  font-size: 0.7em;\n}\n\n.post-mobile {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 90px;\n  background: white;\n  box-shadow: none;\n}\n\n.post-mobile:hover {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 120px;\n  background: white;\n  box-shadow: 1px 1px 3px #999;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 576px) {\n  .profile-picture {\n    height: 40px;\n    width: 40px;\n  }\n}\n\n.post-content {\n  font-size: 0.9em;\n  line-height: 25px;\n  text-align: justify;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  height: 40px;\n  margin-top: 10px;\n  opacity: 0;\n  font-size: 1.1em;\n  width: 100%;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.unfollow-button {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n  font-weight: 900;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment {\n  background: white;\n  height: auto;\n  opacity: 0;\n  margin: 30px 0 60px 0;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.comment:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.follow-button {\n  width: 100px;\n  height: 36px;\n  opacity: 0;\n  --background: #24d8a8;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: linear-gradient(#797, #799);\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  font-weight: 900;\n  width: 100px;\n}\n\n.delete-button {\n  --color: white;\n  --background: linear-gradient(#FF443B, rgb(206, 48, 40));\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.reply {\n  width: 60px;\n  --border-width: 1px;\n  --border-color: #005191;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #005191;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.report {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #888;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #888;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.edit {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #faa71b;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #faa71b;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.delete {\n  width: 60px;\n  --background: #faa71b;\n  border-radius: 5px;\n  --color: white;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.follow {\n  --border-width: 1px;\n  width: 80px;\n  --border-color: linear-gradient(#24d8a8, #1baf88);\n  --border-style: solid;\n  border-radius: 5px;\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  font-size: 0.7em;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  background: #edf3f8;\n}\n\nion-title {\n  color: #005191;\n}\n\n.toolbar {\n  --background: none;\n}\n\nion-item {\n  --background: none;\n}\n\nion-fab {\n  opacity: 0;\n  padding-right: 2%;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #222;\n  font-size: 1.2em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-wrapper {\n  position: relative;\n  top: 10px;\n  margin-bottom: 5px;\n}\n\n.reply-text {\n  color: #222;\n  font-size: 1em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-link {\n  color: #005191;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n}\n\n.comment-input {\n  background: white;\n  height: auto;\n  margin: 10px 0 0px 0;\n  width: 100%;\n  box-shadow: none;\n  border: 2px solid #005191;\n  border-radius: 2px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: linear;\n}\n\n.comment-input:hover {\n  background: rgba(250, 167, 27, 0.02);\n  height: auto;\n  margin: 12px 0 0px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:focus {\n  background: rgba(250, 167, 27, 0.04);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#replies-link {\n  color: #005191;\n  font-weight: 500;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFJQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUFXLGlCQUFBO0VBQ1gsY0FBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxtRUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxtRUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQUhGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrR0FBQTtVQUFBLDBGQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1FQUFBO0FBTEY7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDRixxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0Esd0RBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBT0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBTEo7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGQTs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFGRjs7QUFJRTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlJO0VBQ0EsY0FBQTtBQUZKOztBQU9BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFKRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBSkY7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBSkY7RUFNQTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBTEY7O0FBUUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUxGOztBQVFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBTEY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtBQUpGOztBQU9BO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFKRjtFQU1BO0lBQ0UsMEJBQUE7SUFDRSxVQUFBO0VBSko7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBSkY7RUFNQTtJQUNFLDBCQUFBO0lBQ0UsVUFBQTtFQUpKO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUxGO0VBT0E7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFMRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFMRjtFQU9BO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBTkY7RUFRQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQU5GO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU5GO0VBUUE7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWhye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcbiAgb3BhY2l0eTogMC4zO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucG9zdCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gcmlnaHQ6IDVweDtcbiAgLy8gdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4ucG9zdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3QtZGF0ZSB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgbWFyZ2luOiAwOyBsaW5lLWhlaWdodDogMThweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLnBvc3QtbW9iaWxlIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wb3N0LW1vYmlsZTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2ZpbGUtcGljdHVyZSAge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG4ucG9zdC1jb250ZW50e1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4vLyBDaGFuZ2UgY29sb3Jcbi51bmZvbGxvdy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZhYTcxYiwgI2U5OWIxNCk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29tbWVudHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3N0LWJ1dHRvbi1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4uY29tbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc5NywgIzc5OSk7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRlbGV0ZS1idXR0b257XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkY0NDNCLCByZ2IoMjA2LCA0OCwgNDApKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4ucmVwbHl7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZXBvcnR7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5lZGl0e1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGVsZXRle1xuICB3aWR0aDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9sbG93IHtcbi0tYm9yZGVyLXdpZHRoOiAxcHg7XG53aWR0aDogODBweDtcbi0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7O1xuLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuLS1jb2xvcjogd2hpdGU7XG4tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbmZvbnQtc2l6ZTogMC43ZW07XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi50b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWZhYiB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBhbmltYXRpb246IGZhYi1zbGlkZS11cCAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xuXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQjM1MTtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbn1cblxuLnBvc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjgpO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4uaGVhZGVyLWF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jb21tZW50LWZvcm17XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG5cbi5jb21tZW50LXRleHQge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAwcHggMCAyMHB4IDA7XG59XG5cbi5yZXBseS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnJlcGx5LXRleHQge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMHB4IDAgMjBweCAwO1xufVxuXG4ucmVwbHktbGluayB7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4uY29tbWVudC1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCAwIDBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDE2NywgMjcsIDAuMDIpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wNCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4jcmVwbHktZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4jcmVwbGllcy1saW5rIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBzZW5kLWljb24tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcG9zdC1idXR0b24tc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb21tZW50LXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "DVFE":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DVFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editCommentForm\" (ngSubmit)=\"edit(this.editCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"edit(this.editCommentForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newComment\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "IBiA":
    /*!****************************************************************!*\
      !*** ./src/app/modals/report-comment/report-comment.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function IBiA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".report-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.report-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n  color: #e4405f;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3JlcG9ydC1jb21tZW50L3JlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvcmVwb3J0LWNvbW1lbnQvcmVwb3J0LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwb3J0LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNlNDQwNWY7XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "NS6A":
    /*!************************************************************************!*\
      !*** ./src/app/modals/report-comment/report-comment-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ReportCommentPageRoutingModule */

    /***/
    function NS6A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportCommentPageRoutingModule", function () {
        return ReportCommentPageRoutingModule;
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


      var _report_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report-comment.page */
      "st0V");

      var routes = [{
        path: '',
        component: _report_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReportCommentPage"]
      }];

      var ReportCommentPageRoutingModule = function ReportCommentPageRoutingModule() {
        _classCallCheck(this, ReportCommentPageRoutingModule);
      };

      ReportCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportCommentPageRoutingModule);
      /***/
    },

    /***/
    "SJQ/":
    /*!**************************************************************!*\
      !*** ./src/app/modals/reply-comment/reply-comment.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function SJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  color: white;\n}\n\n.reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.reply-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3JlcGx5LWNvbW1lbnQvcmVwbHktY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvcmVwbHktY29tbWVudC9yZXBseS1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVwbHktaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLnJlcGx5LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI3VzZXJmdWxsbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "W0kA":
    /*!********************************************************************!*\
      !*** ./src/app/modals/edit-comment/edit-comment-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: EditCommentPageRoutingModule */

    /***/
    function W0kA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCommentPageRoutingModule", function () {
        return EditCommentPageRoutingModule;
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


      var _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-comment.page */
      "yJ2h");

      var routes = [{
        path: '',
        component: _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__["EditCommentPage"]
      }];

      var EditCommentPageRoutingModule = function EditCommentPageRoutingModule() {
        _classCallCheck(this, EditCommentPageRoutingModule);
      };

      EditCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditCommentPageRoutingModule);
      /***/
    },

    /***/
    "cZU3":
    /*!************************************************************!*\
      !*** ./src/app/modals/reply-comment/reply-comment.page.ts ***!
      \************************************************************/

    /*! exports provided: ReplyCommentPage */

    /***/
    function cZU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyCommentPage", function () {
        return ReplyCommentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reply_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reply-comment.page.html */
      "0NOO");
      /* harmony import */


      var _reply_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reply-comment.page.scss */
      "SJQ/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns/formatDistanceToNow */
      "7xvl");

      var ReplyCommentPage = /*#__PURE__*/function () {
        function ReplyCommentPage(formBuilder, modal, navParams, loading, alert, posts, postEmitterService) {
          _classCallCheck(this, ReplyCommentPage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.navParams = navParams;
          this.loading = loading;
          this.alert = alert;
          this.posts = posts;
          this.postEmitterService = postEmitterService;
        }

        _createClass(ReplyCommentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // To collect comment data
            this.replyCommentForm = this.formBuilder.group({
              reply: ['']
            });
            this.commentID = this.navParams.get('commentID');
            this.postID = this.navParams.get('postID');
            this.userFullName = this.navParams.get('userFullName');
            this.userEmail = this.navParams.get('userEmail');
            this.userProfilePicture = this.navParams.get('userProfilePicture');
            this.commentUserFullName = this.navParams.get('commentUserFullName');
            this.commentUserEmail = this.navParams.get('commentUserEmail');
            console.log(this.commentUserEmail);
            console.log(this.userEmail);
          }
        }, {
          key: "reply",
          value: function reply(_reply) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return console.log('replying to comment...');

                    case 2:
                      _context.next = 4;
                      return this.posts.replyComment(this.commentID, this.postID, _reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail).subscribe(function (data) {
                        console.log(data);
                        var comments = data['comments'];
                        var userEmail = data['userEmail']; // Give User ability to Edit, Delete, or Report a Comment.
                        // User cannot Report their own comment **

                        var _iterator = _createForOfIteratorHelper(comments),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var comment = _step.value;
                            // If the Logged in User's Email equals the creatorEmail of the Comment,
                            // they will be given the ability to edit and delete their Comment.
                            // The ability for them to report their own comment is disabled
                            comment.repliesLength = comment.replies.length;
                            comment.isUser = false;
                            comment.canDeleteComment = false;
                            comment.canReport = true;
                            comment.date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(comment.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If this comment is the logged in user, they can delete and edit

                            if (comment.userEmail === userEmail) {
                              comment.isUser = true;
                              comment.canDeleteComment = true;
                              comment.canReport = false;
                            } // Format the Reply Dates


                            for (var i = 0; comment.replies.length > i; i++) {
                              comment.replies[i].date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(comment.replies[i].date), {
                                addSuffix: false
                              });
                            }
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }

                        _this.posts.commentsSubject$.next(comments.reverse());
                      });

                    case 4:
                      _context.next = 6;
                      return this.replyLoading();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "replyLoading",
          value: function replyLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        message: 'Replying to Comment...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context2.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      _context2.next = 12;
                      return this.modal.dismiss();

                    case 12:
                      _context2.next = 14;
                      return this.confirmAlert();

                    case 14:
                      console.log('Loading dismissed!');

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alert.create({
                        cssClass: 'success-alert',
                        message: 'Your comment has been added.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling reply...');
            this.modal.dismiss();
          }
        }]);

        return ReplyCommentPage;
      }();

      ReplyCommentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]
        }];
      };

      ReplyCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reply-post',
        template: _raw_loader_reply_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reply_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]])], ReplyCommentPage);
      /***/
    },

    /***/
    "hCOu":
    /*!**********************************************************************!*\
      !*** ./src/app/modals/reply-comment/reply-comment-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ReplyCommentPageRoutingModule */

    /***/
    function hCOu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyCommentPageRoutingModule", function () {
        return ReplyCommentPageRoutingModule;
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


      var _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reply-comment.page */
      "cZU3");

      var routes = [{
        path: '',
        component: _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReplyCommentPage"]
      }];

      var ReplyCommentPageRoutingModule = function ReplyCommentPageRoutingModule() {
        _classCallCheck(this, ReplyCommentPageRoutingModule);
      };

      ReplyCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReplyCommentPageRoutingModule);
      /***/
    },

    /***/
    "iW5p":
    /*!*********************************************************!*\
      !*** ./src/app/pages/posts/post-page/post-page.page.ts ***!
      \*********************************************************/

    /*! exports provided: PostPagePage */

    /***/
    function iW5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPagePage", function () {
        return PostPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-page.page.html */
      "yJXo");
      /* harmony import */


      var _post_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-page.page.scss */
      "8WaI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modals/reply-comment/reply-comment.page */
      "cZU3");
      /* harmony import */


      var src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modals/report-comment/report-comment.page */
      "st0V");
      /* harmony import */


      var src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modals/edit-comment/edit-comment.page */
      "yJ2h");
      /* harmony import */


      var src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/modals/edit-post/edit-post.page */
      "VPH/");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/modals/replies-page/replies-page.page */
      "nfbU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/modals/third-person-profile/third-person-profile.page */
      "u2AK");
      /* harmony import */


      var src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/emitters/single-post-page-emitter.service */
      "wbj2"); // tslint:disable-next-line: max-line-length


      var LANGUAGE_FILTER_LIST = ['fuck', 'damn', 'shit', 'ass', 'bitch', 'slut', 'whore', 'dick', 'pussy', 'cunt', 'faggot'];

      var PostPagePage = /*#__PURE__*/function () {
        function PostPagePage(activatedRoute, postEmitterService, singlePostEmitterService, router, posts, profile, formBuilder, toast, modal, alert, loading, location) {
          _classCallCheck(this, PostPagePage);

          this.activatedRoute = activatedRoute;
          this.postEmitterService = postEmitterService;
          this.singlePostEmitterService = singlePostEmitterService;
          this.router = router;
          this.posts = posts;
          this.profile = profile;
          this.formBuilder = formBuilder;
          this.toast = toast;
          this.modal = modal;
          this.alert = alert;
          this.loading = loading;
          this.location = location;
          this.tabBar = document.getElementById('myTabBar');
          this.votes = document.getElementById('votes');
          this.showFab = false;
          this.following = false;
          this.isUser = false; // debugging

          this.scroll = '';
        }

        _createClass(PostPagePage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.singlePostEmitterService.subsVar.unsubscribe();
            this.commentsSub.unsubscribe();
            this.postsSub.unsubscribe();
            this.userDetailsSub.unsubscribe();
            this.postInfoSub.unsubscribe(); // this.deletePostSub.unsubscribe();
            // this.deleteCommentSub.unsubscribe();
            // this.unfollowPostSub.unsubscribe();
            // this.followPostSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.location.onPopState(function () {
              _this2.postEmitterService.onBackAction();
            }); // Get Post ID from navigation params on the main posts tab

            var id = this.activatedRoute.snapshot.paramMap.get('_id');
            this.postID = id; // Get the user's information to insert into the comment metadata

            this.getPostInfo();

            if (this.singlePostEmitterService.subsVar == undefined) {
              // For Comment and Reply Refreshes
              this.singlePostEmitterService.subsVar = this.singlePostEmitterService.invokeSinglePostPageRefresh.subscribe(function () {
                _this2.getPostInfo();

                console.log('Refreshing Replies');
              });
            } // To collect comment data


            this.commentForm = this.formBuilder.group({
              comment: ['']
            }); // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.

            this.commentsSub = this.posts.commentsSubject$.subscribe(function (commentsFromSub) {
              _this2.comments = commentsFromSub;
            });
            this.postsSub = this.posts.postsSubject$.subscribe(function (posts) {
              var currentPost;

              var _iterator2 = _createForOfIteratorHelper(posts),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var post = _step2.value;

                  if (post._id == _this2.postID) {
                    currentPost = post;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _this2.post = currentPost.post;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.postEmitterService.onBackAction();
            this.router.navigate(['/home/posts']);
          }
        }, {
          key: "refreshAfterComment",
          value: function refreshAfterComment() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "refreshAfterDelete",
          value: function refreshAfterDelete() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "refreshAfterFollow",
          value: function refreshAfterFollow() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "follow",
          value: function follow(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.followPostSub = this.posts.followPost(postID, this.userEmail);
                      this.following = true;
                      _context4.next = 4;
                      return this.followToast();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "followToast",
          value: function followToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var followToast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toast.create({
                        cssClass: 'followed-toast',
                        message: 'You are FOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      followToast = _context5.sent;
                      _context5.next = 5;
                      return this.refreshAfterDelete();

                    case 5:
                      _context5.next = 7;
                      return followToast.present();

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "unFollow",
          value: function unFollow(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.unfollowPostSub = this.posts.unFollowPost(postID, this.userEmail);
                      this.following = false;
                      _context6.next = 4;
                      return this.unFollowToast();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "unFollowToast",
          value: function unFollowToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var unFollowToast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toast.create({
                        cssClass: 'unfollowed-toast',
                        message: 'You are UNFOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      unFollowToast = _context7.sent;
                      _context7.next = 5;
                      return this.refreshAfterDelete();

                    case 5:
                      _context7.next = 7;
                      return unFollowToast.present();

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "logScrolling",
          value: function logScrolling(event) {
            // if (event.detail) {
            //   console.log('ScrollTop: ' + event.detail.scrollTop);
            //   console.log('Y: ' + event.detail.currentY);
            //   console.log('Event Details: ' + event.detail);
            // }
            if (event.detail.currentY >= 480) {
              this.showFab = true;
            }

            if (event.detail.currentY <= 480) {
              this.showFab = false;
            }
          } // Hide the Tab bar when the user is attempting to make a comment

        }, {
          key: "ScrollToTop",
          value: function ScrollToTop() {
            this.content.scrollToPoint(0, 200, 100);
            this.tabBar.style.height = '0px';
            this.votes.style.height = '0px';
          }
        }, {
          key: "fabScrollTop",
          value: function fabScrollTop() {
            this.content.scrollToTop();
          } // When the user submits the comment, the tabar will show up again

        }, {
          key: "ScrollToPostedComment",
          value: function ScrollToPostedComment() {
            this.content.scrollToPoint(0, 600, 100);
            this.textarea.getInputElement().then(function (textarea) {
              textarea.blur();
            });
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            var _this3 = this;

            this.textarea.getInputElement().then(function (textarea) {
              _this3.tabBar.style.height = '70px';
            });
          } // for when the user un focuses out of the comment textarea but hasnt submitted the comment

        }, {
          key: "blur",
          value: function blur() {
            var _this4 = this;

            this.textarea.getInputElement().then(function (textarea) {
              textarea.blur();
              _this4.tabBar.style.height = '70px';
            });
          }
        }, {
          key: "comment",
          value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      console.log(_comment); // Reset Comment Input

                      this.commentForm.reset();
                      this.commentLoading(postID, userFullName, userEmail, userProfilePicture, _comment);
                      toast = this.toast.create({
                        message: 'Your comment has been added.',
                        duration: 1500
                      });
                      toast.then(function (toast) {
                        return toast.present();
                      });

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "commentLoading",
          value: function commentLoading(postID, userFullName, userEmail, userProfilePicture, comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              var loading, _yield$loading$onDidD2, role, data;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.postsSub = this.posts.comment(postID, userFullName, userEmail, userProfilePicture, comment.comment).subscribe(function (data) {
                        _this5.postInfoSub = _this5.posts.getPostInfo(_this5.postID).subscribe(function (post) {
                          var _iterator3 = _createForOfIteratorHelper(post['comments']),
                              _step3;

                          try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                              var postComments = _step3.value;
                              console.log(postComments);
                              postComments.isUser = false;
                              postComments.canDeleteComment = false;
                              postComments.canReport = true; // If this comment is from the logged in user, they can delete and edit

                              if (postComments.userEmail === _this5.userEmail) {
                                postComments.isUser = true;
                                postComments.canDeleteComment = true;
                                postComments.canReport = false;
                              }

                              postComments.repliesLength = postComments.replies.length;
                              postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(postComments.date), {
                                includeSeconds: true,
                                addSuffix: false
                              });
                              console.log(postComments.comment);
                            }
                          } catch (err) {
                            _iterator3.e(err);
                          } finally {
                            _iterator3.f();
                          }

                          _this5.posts.commentsSubject$.next(post['comments'].reverse());
                        });
                      });
                      _context9.next = 3;
                      return this.loading.create({
                        message: 'Adding Comment...',
                        duration: 1000
                      });

                    case 3:
                      loading = _context9.sent;
                      _context9.next = 6;
                      return this.refreshAfterComment();

                    case 6:
                      _context9.next = 8;
                      return loading.present();

                    case 8:
                      _context9.next = 10;
                      return loading.onDidDismiss();

                    case 10:
                      _yield$loading$onDidD2 = _context9.sent;
                      role = _yield$loading$onDidD2.role;
                      data = _yield$loading$onDidD2.data;

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "report",
          value: function report(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return console.log('Attemping to report comment');

                    case 2:
                      _context10.next = 4;
                      return this.reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, this.userEmail, this.userFullName);

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "reportModal",
          value: function reportModal(commentID, commentContents, post, postID, commentUserFullName, commentUserEmail, commentDate, userEmail, userFullName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var reportModalConfig;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.modal.create({
                        component: src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_11__["ReportCommentPage"],
                        componentProps: {
                          commentID: commentID,
                          commentContents: commentContents,
                          post: post,
                          postID: postID,
                          commentUserFullName: commentUserFullName,
                          commentUserEmail: commentUserEmail,
                          commentDate: commentDate,
                          userEmail: userEmail,
                          userFullName: userFullName
                        }
                      });

                    case 2:
                      reportModalConfig = _context11.sent;
                      _context11.next = 5;
                      return reportModalConfig.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "reply",
          value: function reply(commentID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return console.log('Attemping to reply to comment');

                    case 2:
                      _context12.next = 4;
                      return this.replyModal(commentID, this.postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail);

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "replyModal",
          value: function replyModal(commentID, postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var replyModalConfig;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.modal.create({
                        component: src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_10__["ReplyCommentPage"],
                        componentProps: {
                          commentID: commentID,
                          postID: postID,
                          userFullName: userFullName,
                          userProfilePicture: userProfilePicture,
                          userEmail: userEmail,
                          commentUserEmail: commentUserEmail,
                          commentUserFullName: commentUserFullName
                        },
                        cssClass: 'reply-modal'
                      });

                    case 2:
                      replyModalConfig = _context13.sent;
                      _context13.next = 5;
                      return replyModalConfig.present();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "repliesModal",
          value: function repliesModal(postID, replies, comment, commentID, commentUserFullName, commentUserEmail, commentDate, userProfilePicture, userFullName, userEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var repliesPageModalConfig;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.modal.create({
                        component: src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_15__["RepliesPagePage"],
                        componentProps: {
                          postID: postID,
                          replies: replies,
                          comment: comment,
                          commentID: commentID,
                          commentUserFullName: commentUserFullName,
                          commentUserEmail: commentUserEmail,
                          commentDate: commentDate,
                          userProfilePicture: userProfilePicture,
                          userFullName: userFullName,
                          userEmail: userEmail
                        },
                        cssClass: 'reply-modal'
                      });

                    case 2:
                      repliesPageModalConfig = _context14.sent;
                      _context14.next = 5;
                      return repliesPageModalConfig.present();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "thirdPersonProfileModal",
          value: function thirdPersonProfileModal(creatorEmail, creatorName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var thirdPersonProfileModalConfig;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.modal.create({
                        component: src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_17__["ThirdPersonProfilePage"],
                        componentProps: {
                          creatorEmail: creatorEmail,
                          creatorName: creatorName
                        },
                        cssClass: 'third-person-profile-modal'
                      });

                    case 2:
                      thirdPersonProfileModalConfig = _context15.sent;
                      _context15.next = 5;
                      return thirdPersonProfileModalConfig.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "editComment",
          value: function editComment(commentID, commentCotents, postID, userEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return console.log(commentID);

                    case 2:
                      _context16.next = 4;
                      return console.log('Attemping to edit comment');

                    case 4:
                      _context16.next = 6;
                      return this.editCommentModal(commentID, commentCotents, postID, userEmail);

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "editCommentModal",
          value: function editCommentModal(commentID, commentCotents, postID, userEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var editAlertConfig;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.modal.create({
                        component: src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_12__["EditCommentPage"],
                        componentProps: {
                          commentID: commentID,
                          commentCotents: commentCotents,
                          postID: postID,
                          userEmail: userEmail
                        }
                      });

                    case 2:
                      editAlertConfig = _context17.sent;
                      _context17.next = 5;
                      return editAlertConfig.present();

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "editPost",
          value: function editPost(postID, post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return console.log('Attemping to edit comment');

                    case 2:
                      _context18.next = 4;
                      return this.editPostModal(postID, post);

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "editPostModal",
          value: function editPostModal(postID, post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var editPostModalConfig;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.modal.create({
                        component: src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_13__["EditPostPage"],
                        componentProps: {
                          postID: postID,
                          post: post
                        }
                      });

                    case 2:
                      editPostModalConfig = _context19.sent;
                      _context19.next = 5;
                      return editPostModalConfig.present();

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(commentID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      console.log('deleting comment..');
                      console.log(this.postID);
                      console.log(commentID);
                      this.deleteCommentAlert(this.postID, commentID);

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "deleteCommentAlert",
          value: function deleteCommentAlert(postID, commentID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.alert.create({
                        header: 'Are you sure you want to delete this comment? This cannot be undone.',
                        cssClass: 'danger-alert',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this6.deleteCommentLoading(_this6.postID, commentID)["catch"](function (err) {
                              console.log(err);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context21.sent;
                      _context21.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "deleteCommentLoading",
          value: function deleteCommentLoading(postID, commentID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this7 = this;

              var loading, _yield$loading$onDidD3, role, data;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.deleteCommentSub = this.posts.deleteComment(this.postID, commentID).subscribe(function (values) {
                        var comments = values['comments'];

                        var _iterator4 = _createForOfIteratorHelper(comments),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var comment = _step4.value;
                            // If the Logged in User's Email equals the creatorEmail of the Comment,
                            // they will be given the ability to edit and delete their Comment.
                            // The ability for them to report their own comment is disabled
                            comment.repliesLength = comment.replies.length;
                            comment.isUser = false;
                            comment.canDeleteComment = false;
                            comment.canReport = true;
                            comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If this comment is the logged in user, they can delete and edit

                            if (comment.userEmail === _this7.userEmail) {
                              console.log('true');
                              comment.isUser = true;
                              comment.canDeleteComment = true;
                              comment.canReport = false;
                            }
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }

                        _this7.posts.commentsSubject$.next(comments.reverse());
                      });
                      _context22.next = 3;
                      return this.loading.create({
                        message: 'Deleting Comment...',
                        duration: 2000
                      });

                    case 3:
                      loading = _context22.sent;
                      _context22.next = 6;
                      return loading.present();

                    case 6:
                      _context22.next = 8;
                      return loading.onDidDismiss();

                    case 8:
                      _yield$loading$onDidD3 = _context22.sent;
                      role = _yield$loading$onDidD3.role;
                      data = _yield$loading$onDidD3.data;
                      console.log('Loading dismissed!');

                    case 12:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "deletePost",
          value: function deletePost(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      console.log('deleting post..');
                      console.log(postID);
                      this.deletePostAlert(postID);

                    case 3:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "deletePostAlert",
          value: function deletePostAlert(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.alert.create({
                        header: 'Are you sure you want to delete this post? This cannot be undone.',
                        cssClass: 'danger-alert',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                                while (1) {
                                  switch (_context24.prev = _context24.next) {
                                    case 0:
                                      _context24.next = 2;
                                      return this.deletePostLoading(postID);

                                    case 2:
                                    case "end":
                                      return _context24.stop();
                                  }
                                }
                              }, _callee24, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context25.sent;
                      _context25.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "deletePostLoading",
          value: function deletePostLoading(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var _this9 = this;

              var loading, _yield$loading$onDidD4, role, data;

              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      console.log(postID);
                      this.deletePostSub = this.posts.deletePost(postID).subscribe(function (remainingPosts) {
                        _this9.posts.postsSubject$.next(Object.values(remainingPosts).reverse());

                        console.log(_this9.posts.postsSubject$.getValue());
                      });
                      this.postEmitterService.onBackAction();
                      this.router.navigate(['/home/posts']);
                      console.log('Loading dismissed!');
                      _context26.next = 7;
                      return this.loading.create({
                        message: 'Deleting Comment...',
                        duration: 2000
                      });

                    case 7:
                      loading = _context26.sent;
                      _context26.next = 10;
                      return loading.present();

                    case 10:
                      _context26.next = 12;
                      return loading.onDidDismiss();

                    case 12:
                      _yield$loading$onDidD4 = _context26.sent;
                      role = _yield$loading$onDidD4.role;
                      data = _yield$loading$onDidD4.data;

                    case 15:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "getPostInfo",
          value: function getPostInfo() {
            var _this10 = this;

            this.userDetailsSub = this.profile.getUserDetails().subscribe(function (details) {
              var userEmail = details['email'];
              _this10.userEmail = userEmail;
              var userFullName = details['fullName'];
              var userProfilePicture = details['profilePicture']; // Get information about selected post.
              // Format its date on the front end
              // initiate this components post metadata from data in Posts Service

              _this10.postInfoSub = _this10.posts.getPostInfo(_this10.postID).subscribe(function (postInfo) {
                var creatorEmail = postInfo['creatorEmail'];
                var creatorName = postInfo['creatorName'];
                var creatorProfilePicture = postInfo['creatorProfilePicture'];
                var title = postInfo['title'];
                var post = postInfo['post'];
                var followers = postInfo['followers'];
                var comments = postInfo['comments'];
                var following = false;
                var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(postInfo['date']), {
                  includeSeconds: true,
                  addSuffix: false
                }); // Check if the post creator is the same as the User
                // Enables the user to delete and edit post if true

                if (creatorEmail === _this10.userEmail) {
                  _this10.isUser = true;
                } // See if the Logged in User is following the post on this page


                followers.find(findFollower);

                function findFollower(follower) {
                  if (!follower) {}

                  if (follower === userEmail) {
                    following = true;
                  }
                } // Give User ability to Edit, Delete, or Report a Comment.
                // User cannot Report their own comment **


                var _iterator5 = _createForOfIteratorHelper(comments),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var comment = _step5.value;
                    console.log(comment); // If the Logged in User's Email equals the creatorEmail of the Comment,
                    // they will be given the ability to edit and delete their Comment.
                    // The ability for them to report their own comment is disabled

                    comment.repliesLength = comment.replies.length;
                    comment.isUser = false;
                    comment.canDeleteComment = false;
                    comment.canReport = true;
                    comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.date), {
                      includeSeconds: false,
                      addSuffix: false
                    }); // If this comment is the logged in user, they can delete and edit

                    if (comment.userEmail === _this10.userEmail) {
                      comment.isUser = true;
                      comment.canDeleteComment = true;
                      comment.canReport = false;
                    } // Format the Reply Dates


                    for (var i = 0; comment.replies.length > i; i++) {
                      comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                        addSuffix: false
                      });
                    } // comment.comment = comment.comment.replace(/go/g, "not go :(");

                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                _this10.creatorName = creatorName;
                _this10.creatorEmail = creatorEmail;
                _this10.creatorProfilePicture = creatorProfilePicture;
                _this10.date = date;
                _this10.followers = followers;
                _this10.comments = comments.reverse();
                _this10.following = following;
                _this10.post = post;
                _this10.title = title;
                _this10.userProfilePicture = userProfilePicture;
                _this10.userFullName = userFullName;
              });
            });
          }
        }, {
          key: "filterLanguage",
          value: function filterLanguage(comment) {
            var updatedComment = comment;
            updatedComment.replace('fuck', '****'); // LANGUAGE_FILTER_LIST.forEach(word => {
            //   comment.replace(word, '****');
            // });

            return updatedComment;
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      this.userDetailsSub = this.profile.getUserDetails().subscribe(function (details) {
                        var userEmail = details['email'];
                        _this11.userEmail = userEmail;
                        var userFullName = details['fullName'];
                        var userProfilePicture = details['profilePicture']; // Get information about selected post.
                        // Format its date on the front end
                        // initiate this components post metadata from data in Posts Service

                        _this11.postInfoSub = _this11.posts.getPostInfo(_this11.postID).subscribe(function (postInfo) {
                          var creatorEmail = postInfo['creatorEmail'];
                          var creatorName = postInfo['creatorName'];
                          var post = postInfo['post'];
                          var title = postInfo['title'];
                          var followers = postInfo['followers'];
                          var comments = postInfo['comments'];
                          var following = false;
                          var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(postInfo['date']), {
                            includeSeconds: true,
                            addSuffix: false
                          }); // See if the Logged in User is following the post on this page

                          followers.find(findFollower);

                          function findFollower(follower) {
                            if (!follower) {}

                            if (follower === userEmail) {
                              following = true;
                            }
                          } // Give User ability to Edit, Delete, or Report a Comment.
                          // User cannot Report their own comment **


                          var _iterator6 = _createForOfIteratorHelper(comments),
                              _step6;

                          try {
                            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                              var comment = _step6.value;
                              // If the Logged in User's Email equals the creatorEmail of the Comment,
                              // they will be given the ability to edit and delete their Comment.
                              // The ability for them to report their own comment is disabled
                              comment.repliesLength = comment.replies.length;
                              comment.isUser = false;
                              comment.canDeleteComment = false;
                              comment.canReport = true;
                              comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.date), {
                                includeSeconds: true,
                                addSuffix: false
                              }); // If this comment is the logged in user, they can delete and edit

                              if (comment.userEmail === _this11.userEmail) {
                                comment.isUser = true;
                                comment.canDeleteComment = true;
                                comment.canReport = false;
                              } // Format the Reply Dates


                              for (var i = 0; comment.replies.length > i; i++) {
                                comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                                  addSuffix: false
                                });
                              }

                              comment.comment = _this11.filterLanguage(comment.comment); // comment.comment = comment.comment.replace(/go/g, "not go :(");
                            }
                          } catch (err) {
                            _iterator6.e(err);
                          } finally {
                            _iterator6.f();
                          }

                          _this11.creatorName = creatorName;
                          _this11.creatorEmail = creatorEmail;
                          _this11.date = date;
                          _this11.followers = followers;
                          _this11.comments = comments;
                          _this11.following = following;
                          _this11.post = post;
                          _this11.title = title;
                          _this11.userProfilePicture = userProfilePicture;
                          _this11.userFullName = userFullName;

                          _this11.posts.commentsSubject$.next(comments.reverse());
                        });
                      });
                      _context27.next = 3;
                      return setTimeout(function () {
                        var toast = _this11.toast.create({
                          message: 'Page has been refreshed',
                          duration: 3000
                        });

                        event.target.complete();
                        toast.then(function (toast) {
                          return toast.present();
                        });
                      }, 2000);

                    case 3:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }]);

        return PostPagePage;
      }();

      PostPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_14__["PostPageEmitterService"]
        }, {
          type: src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_18__["SinglePostPageEmitterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["PlatformLocation"]
        }];
      };

      PostPagePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], {
            "static": true
          }]
        }],
        textarea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTextarea"], {
            "static": true
          }]
        }]
      };
      PostPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-page',
        template: _raw_loader_post_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_14__["PostPageEmitterService"], src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_18__["SinglePostPageEmitterService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["PlatformLocation"]])], PostPagePage);
      /***/
    },

    /***/
    "j5il":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j5il(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 50px;\">\n    <ion-col size=\"10\">\n      <p id=\"userfullname\">User being Reported: {{commentUserFullName}}</p>\n      <hr style=\"background: #999\">\n      <p id=\"comment\">Comment: {{commentContents}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"reportCommentForm\" (ngSubmit)=\"report()\">\n        <ion-textarea\n          (keyup.enter)=\"report()\"\n          class=\"report-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"8\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          placeholder=\"Why are you reporting this post?\" formControlName=\"reportedReason\">\n        </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Report\n            </ion-button>\n          </div>\n      </form>\n    </ion-col>\n</ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "kvUc":
    /*!************************************************************!*\
      !*** ./src/app/modals/edit-comment/edit-comment.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function kvUc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2VkaXQtY29tbWVudC9lZGl0LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2VkaXQtY29tbWVudC9lZGl0LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "qQPJ":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/posts/post-page/post-page-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PostPagePageRoutingModule */

    /***/
    function qQPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPagePageRoutingModule", function () {
        return PostPagePageRoutingModule;
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


      var _post_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./post-page.page */
      "iW5p");

      var routes = [{
        path: '',
        component: _post_page_page__WEBPACK_IMPORTED_MODULE_3__["PostPagePage"]
      }];

      var PostPagePageRoutingModule = function PostPagePageRoutingModule() {
        _classCallCheck(this, PostPagePageRoutingModule);
      };

      PostPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PostPagePageRoutingModule);
      /***/
    },

    /***/
    "qgNS":
    /*!***********************************************************!*\
      !*** ./src/app/pages/posts/post-page/post-page.module.ts ***!
      \***********************************************************/

    /*! exports provided: PostPagePageModule */

    /***/
    function qgNS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPagePageModule", function () {
        return PostPagePageModule;
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


      var _post_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./post-page.page */
      "iW5p");
      /* harmony import */


      var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./post-page-routing.module */
      "qQPJ");
      /* harmony import */


      var src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/reply-comment/reply-comment.module */
      "+RqQ");
      /* harmony import */


      var src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modals/report-comment/report-comment.module */
      "zlSt");
      /* harmony import */


      var src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modals/edit-comment/edit-comment.module */
      "uUSJ");
      /* harmony import */


      var src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modals/edit-post/edit-post.module */
      "9CtM");
      /* harmony import */


      var src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modals/replies-page/replies-page.module */
      "fU57");

      var PostPagePageModule = function PostPagePageModule() {
        _classCallCheck(this, PostPagePageModule);
      };

      PostPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostPagePageRoutingModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentPageModule"], src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__["ReportCommentPageModule"], src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__["EditCommentPageModule"], src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_11__["EditPostPageModule"], src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_12__["RepliesPagePageModule"]],
        declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_6__["PostPagePage"]]
      })], PostPagePageModule);
      /***/
    },

    /***/
    "st0V":
    /*!**************************************************************!*\
      !*** ./src/app/modals/report-comment/report-comment.page.ts ***!
      \**************************************************************/

    /*! exports provided: ReportCommentPage */

    /***/
    function st0V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportCommentPage", function () {
        return ReportCommentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-comment.page.html */
      "j5il");
      /* harmony import */


      var _report_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-comment.page.scss */
      "IBiA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");

      var ReportCommentPage = /*#__PURE__*/function () {
        function ReportCommentPage(formBuilder, modal, navParams, loading, posts, alert) {
          _classCallCheck(this, ReportCommentPage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.navParams = navParams;
          this.loading = loading;
          this.posts = posts;
          this.alert = alert;
        }

        _createClass(ReportCommentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // To collect comment data
            this.reportCommentForm = this.formBuilder.group({
              reportedReason: ['']
            });
            this.commentID = this.navParams.get('commentID');
            this.commentContents = this.navParams.get('commentContents');
            this.post = this.navParams.get('post');
            this.postID = this.navParams.get('postID');
            this.commentUserFullName = this.navParams.get('commentUserFullName');
            this.commentUserEmail = this.navParams.get('commentUserEmail');
            this.commentDate = this.navParams.get('commentDate');
            this.userEmail = this.navParams.get('userEmail');
            this.userFullName = this.navParams.get('userFullName');
          }
        }, {
          key: "report",
          value: function report() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return console.log('reporting comment...');

                    case 2:
                      _context28.next = 4;
                      return console.log(this.reportCommentForm.value.reportedReason);

                    case 4:
                      _context28.next = 6;
                      return this.reportLoading();

                    case 6:
                      _context28.next = 8;
                      return this.posts.reportComment(this.commentID, this.commentContents, this.post, this.postID, this.commentUserFullName, this.commentUserEmail, this.commentDate, this.userEmail, this.userFullName, this.reportCommentForm.value.reportedReason).subscribe();

                    case 8:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "reportLoading",
          value: function reportLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var loading, _yield$loading$onDidD5, role, data;

              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.loading.create({
                        message: 'Reporting comment...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context29.sent;
                      _context29.next = 5;
                      return loading.present();

                    case 5:
                      _context29.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD5 = _context29.sent;
                      role = _yield$loading$onDidD5.role;
                      data = _yield$loading$onDidD5.data;
                      _context29.next = 12;
                      return this.modal.dismiss();

                    case 12:
                      _context29.next = 14;
                      return this.confirmAlert();

                    case 14:
                      console.log('Loading dismissed!');

                    case 15:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var alert;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.alert.create({
                        header: 'Report Sent',
                        cssClass: 'success-alert',
                        message: 'Thank you for reporting this user. Find Your Future will notifiy the user and take futher actions if necessary.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context30.sent;
                      _context30.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling comment...');
            this.modal.dismiss();
          }
        }]);

        return ReportCommentPage;
      }();

      ReportCommentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      ReportCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-comment',
        template: _raw_loader_report_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], ReportCommentPage);
      /***/
    },

    /***/
    "uUSJ":
    /*!************************************************************!*\
      !*** ./src/app/modals/edit-comment/edit-comment.module.ts ***!
      \************************************************************/

    /*! exports provided: EditCommentPageModule */

    /***/
    function uUSJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCommentPageModule", function () {
        return EditCommentPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-comment-routing.module */
      "W0kA");
      /* harmony import */


      var _edit_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-comment.page */
      "yJ2h");

      var EditCommentPageModule = function EditCommentPageModule() {
        _classCallCheck(this, EditCommentPageModule);
      };

      EditCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCommentPageRoutingModule"]],
        declarations: [_edit_comment_page__WEBPACK_IMPORTED_MODULE_6__["EditCommentPage"]]
      })], EditCommentPageModule);
      /***/
    },

    /***/
    "yJ2h":
    /*!**********************************************************!*\
      !*** ./src/app/modals/edit-comment/edit-comment.page.ts ***!
      \**********************************************************/

    /*! exports provided: EditCommentPage */

    /***/
    function yJ2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCommentPage", function () {
        return EditCommentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-comment.page.html */
      "DVFE");
      /* harmony import */


      var _edit_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-comment.page.scss */
      "kvUc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      "b/SL");

      var EditCommentPage = /*#__PURE__*/function () {
        function EditCommentPage(formBuilder, modal, navParams, loading, posts, alert, postEmitterService) {
          _classCallCheck(this, EditCommentPage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.navParams = navParams;
          this.loading = loading;
          this.posts = posts;
          this.alert = alert;
          this.postEmitterService = postEmitterService;
        }

        _createClass(EditCommentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commentID = this.navParams.get('commentID');
            this.commentContents = this.navParams.get('commentCotents');
            this.postID = this.navParams.get('postID');
            this.userEmail = this.navParams.get('userEmail');
            console.log('post_id: ' + this.postID);
            console.log(this.commentID);
            console.log(this.commentContents);
            console.log(this.userEmail); // To collect comment data

            this.editCommentForm = this.formBuilder.group({
              newComment: this.commentContents
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling');
            this.modal.dismiss();
          }
        }, {
          key: "refreshComment",
          value: function refreshComment() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "edit",
          value: function edit(newComment) {
            var _this12 = this;

            console.log('editting');
            console.log(newComment);
            this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe(function (comment) {
              _this12.posts.getPostInfo(_this12.postID).subscribe(function (post) {
                var _iterator7 = _createForOfIteratorHelper(post['comments']),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var postComments = _step7.value;
                    postComments.isUser = false;
                    postComments.canDeleteComment = false;
                    postComments.canReport = true; // If this comment is the logged in user, they can delete and edit

                    if (postComments.userEmail === _this12.userEmail) {
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
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                _this12.posts.commentsSubject$.next(post['comments'].reverse());
              });

              _this12.editLoading(comment['newComment']);
            });
          }
        }, {
          key: "editLoading",
          value: function editLoading(comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var loading, _yield$loading$onDidD6, role, data;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.loading.create({
                        message: 'Editing your comment...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context31.sent;
                      _context31.next = 5;
                      return loading.present();

                    case 5:
                      _context31.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD6 = _context31.sent;
                      role = _yield$loading$onDidD6.role;
                      data = _yield$loading$onDidD6.data;
                      _context31.next = 12;
                      return this.modal.dismiss();

                    case 12:
                      _context31.next = 14;
                      return this.confirmAlert();

                    case 14:
                      console.log('Loading dismissed!');

                    case 15:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var alert;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.alert.create({
                        cssClass: 'success-alert',
                        message: 'Your comment has been edited.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context32.sent;
                      _context32.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }]);

        return EditCommentPage;
      }();

      EditCommentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]
        }];
      };

      EditCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-comment',
        template: _raw_loader_edit_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]])], EditCommentPage);
      /***/
    },

    /***/
    "yJXo":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yJXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\" no-border>\n  <ion-toolbar class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n   <!-- fab placed to the bottom end; Going back to the top of the page on the mobile view. -->\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"fabScrollTop()\">\n        <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\n     </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n\n    <ion-row class=\"post ion-justify-content-center\">\n\n          <!-- Profile Header -->\n          <!-- Only on Desktop -->\n          <ion-col size=\"12\">\n            <ion-row>\n\n            <!-- Profile Picture -->\n            <ion-col class=\"ion-hide-md-down\" pull-lg=\"0.2\" size=\"1\" (click)=\"thirdPersonProfileModal(creatorEmail, creatorName)\">\n              <img class=\"profile-picture\" src=\"{{creatorProfilePicture}}\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col (click)=\"thirdPersonProfileModal(creatorEmail, creatorName)\" class=\"ion-hide-md-down\" size=\"5\">\n              <h6 style=\"font-size: 1em; font-weight: 500; opacity: 0.4;\">{{creatorName}} - <span style=\"font-size: 0.5em;\">{{date}}  ago</span></h6>\n            </ion-col>\n\n            <!-- Back button-->\n            <ion-col class=\"ion-hide-md-down\" push=\"4.5\" size=\"1\">\n              <ion-button class=\"blue-button ion-float-right\" (click)=\"back()\">\n                Back\n              </ion-button>\n            </ion-col>\n\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Content -->\n          <ion-col size=\"11\">\n                <img class=\"profile-picture\" src=\"{{creatorProfilePicture}}\">\n                <div style=\"display: inline-block; margin-left: 10px;\">\n                  <p class=\"post-name\">{{creatorName}}</p>\n                  <p class=\"post-date\">Posted {{date}} ago</p>\n                </div>\n                <hr class=\"header-hr\">\n          </ion-col>\n          <!-- 1080x1350 -->\n          <ion-col size=\"11\" size-lg=\"12\">\n                <p class=\"post-title\">{{title}}</p>\n               <p class=\"post-content\">{{post}}</p>\n          </ion-col>\n\n          <!-- Comment Input -->\n          <ion-col size=\"12\">\n                <ion-item lines=\"none\">\n                 <form (ngSubmit)=\"comment(this.postID, this.userFullName, this.userEmail, this.userProfilePicture, commentForm.value )\" [formGroup]=\"commentForm\">\n                    <ion-textarea\n                      (ionBlur)=\"onBlur()\"\n                      (onfocusout)=\"blur()\"\n                      (keydown.control.enter)=\"comment(this.postID, this.userFullName, this.userEmail, this.userProfilePicture, commentForm.value) && ScrollToPostedComment()\"\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\n                    </ion-textarea>\n                    <ion-button\n                      style=\"float: right;\"\n                      class=\"comment-post-button\"\n                      type=\"submit\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\">Post\n                      </ion-button>\n                 </form>\n                </ion-item>\n\n          </ion-col>\n\n          <!-- Upvote and Downvote Post -->\n          <ion-col size=\"4.5\">\n            <app-up-down-vote-buttons [postID]=\"postID\"></app-up-down-vote-buttons>\n          </ion-col>\n          <ion-col push-lg=\"0.25\" size=\"6.5\">\n              <ion-button *ngIf=\"this.isUser === true\" (click)=\"deletePost(this.postID)\"  class=\"delete ion-float-right\">\n                Delete\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === true\" (click)=\"editPost(this.postID, this.post)\"\n                class=\"edit ion-float-right\"\n                style=\"--background: none;\">\n                Edit\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && !following\" (click)=\"follow(this.postID)\"\n                class=\"follow ion-float-right\">\n                Follow\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && following\" (click)=\"unFollow(this.postID)\"\n                class=\"delete ion-float-right\"\n                style=\"width: 80px\">\n                Unfollow\n              </ion-button>\n          </ion-col>\n\n    </ion-row>\n\n    <!-- Comments -->\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- If No Comments -->\n      <ion-col class=\"ion-text-center\" style=\"margin: 100px 0;\" *ngIf=\"comments.length === 0\" size=\"10\">\n      <p style=\"color: #888;\">This post has no comments</p>\n      </ion-col>\n\n      <ion-col *ngIf=\"comments.length > 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <p style=\"color: #888; margin: 0px 0\">Comments - {{comments.length}}</p>\n      </ion-col>\n\n        <!-- Comment Wrapper -->\n        <ion-col *ngFor=\"let comment of comments\" class=\"comment\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n\n          <!-- Comment Header -->\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-avatar class=\"comment-avatar\" slot=\"start\" (click)=\"thirdPersonProfileModal(comment.userEmail, comment.userFullName)\">\n                  <img src=\"{{comment.userProfilePicture}}\">\n                </ion-avatar>\n                <ion-label (click)=\"thirdPersonProfileModal(comment.userEmail, comment.userFullName)\">\n                  <h6 style=\"opacity: 0.5\">{{ comment.userFullName  }} - {{ comment.date }} </h6>\n\n                  <hr class=\"header-hr\">\n                  </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n                <p class=\"comment-text\" style=\"margin-top: 40px;\">{{comment.comment}}\n                </p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Replies -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <p\n              (click)=\"repliesModal(\n                this.postID,\n                comment.replies,\n                comment.comment,\n                comment._id,\n                comment.userFullName,\n                comment.userEmail,\n                comment.date,\n                comment.userProfilePicture,\n                this.userFullName,\n                this.userEmail)\"\n              *ngIf=\"comment.repliesLength >= 1\" id=\"replies-link\">Replies - {{comment.repliesLength}}</p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Comment Buttons -->\n          <ion-row style=\"margin-top: 20px;\">\n            <!-- Upvote & Downvote Comments-->\n            <ion-col size=\"4\">\n              <app-comment-vote-bar [postID]=\"this.postID\" [commentID]=\"comment._id\"></app-comment-vote-bar>\n            </ion-col>\n            <!-- Report, Edit & Reply -->\n            <ion-col push=\"1\" size=\"6\">\n              <ion-toolbar>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"reply(comment._id, this.userFullName, this.userEmail, this.userProfilePicture, comment.userFullName, comment.userEmail)\" class=\"reply ion-float-right\">\n                    Reply\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canReport === true\" (click)=\"report(comment._id, comment.comment, this.post, this.postID, comment.userFullName, comment.userEmail, comment.date)\"  class=\"report ion-float-right\">\n                    Report\n                  </ion-button>\n                  <ion-button\n                    *ngIf=\"comment.isUser === true\" (click)=\"editComment(comment._id, comment.comment, this.postID, this.userEmail)\"\n                    class=\"edit ion-float-right\">\n                    Edit\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canDeleteComment === true\" (click)=\"deleteComment(comment._id)\"  class=\"delete ion-float-right\">\n                    Delete\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "zlSt":
    /*!****************************************************************!*\
      !*** ./src/app/modals/report-comment/report-comment.module.ts ***!
      \****************************************************************/

    /*! exports provided: ReportCommentPageModule */

    /***/
    function zlSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportCommentPageModule", function () {
        return ReportCommentPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./report-comment-routing.module */
      "NS6A");
      /* harmony import */


      var _report_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./report-comment.page */
      "st0V");

      var ReportCommentPageModule = function ReportCommentPageModule() {
        _classCallCheck(this, ReportCommentPageModule);
      };

      ReportCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportCommentPageRoutingModule"]],
        declarations: [_report_comment_page__WEBPACK_IMPORTED_MODULE_6__["ReportCommentPage"]]
      })], ReportCommentPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=post-page-post-page-module-es5.js.map