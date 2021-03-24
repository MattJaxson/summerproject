(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"],{

/***/ "+RqQ":
/*!**************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.module.ts ***!
  \**************************************************************/
/*! exports provided: ReplyCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentPageModule", function() { return ReplyCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reply-comment-routing.module */ "hCOu");
/* harmony import */ var _reply_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reply-comment.page */ "cZU3");







let ReplyCommentPageModule = class ReplyCommentPageModule {
};
ReplyCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReplyCommentPageRoutingModule"]
        ],
        declarations: [_reply_comment_page__WEBPACK_IMPORTED_MODULE_6__["ReplyCommentPage"]]
    })
], ReplyCommentPageModule);



/***/ }),

/***/ "0NOO":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancel()\">\n          cancel\n        </ion-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <ion-col size=\"10\">\n        <p id=\"userfullname\"></p>\n        <form [formGroup]=\"replyCommentForm\" (ngSubmit)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\">\n          <ion-textarea\n            (keydown.control.enter)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\"\n            class=\"reply-input\"\n            autogrow=\"true\"\n            autocapitalize=\"true\"\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            type=\"text\"\n            placeholder=\"Replying to: {{userFullName}}\" formControlName=\"reply\">\n          </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Reply\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "8WaI":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.3;\n  margin-top: 10px;\n}\n\n.post {\n  margin-bottom: 40px;\n  background: #edf3f8;\n  padding: 80px 0px;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #0055a5;\n  font-size: 1.2em;\n  position: relative;\n  top: -26px;\n  line-height: 25px;\n  margin: 10px 0px 0px 0px;\n}\n\n.profile-picture {\n  border-radius: 100px;\n  height: 35px;\n  width: 35px;\n  display: inline-block;\n}\n\n.post-name {\n  font-size: 1.2em;\n  font-weight: 600;\n  color: #444;\n  margin: 0;\n  line-height: 18px;\n  display: inline-block;\n}\n\n.post-date {\n  opacity: 0.8;\n  font-size: 0.5em;\n  margin: 0;\n  line-height: 18px;\n  display: block;\n}\n\n.blue-button-small {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0055a2);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 0.8em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.post-mobile {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 90px;\n  background: white;\n  box-shadow: none;\n}\n\n.post-mobile:hover {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 120px;\n  background: white;\n  box-shadow: 1px 1px 3px #999;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 576px) {\n  .profile-picture {\n    height: 40px;\n    width: 40px;\n  }\n}\n\n.post-content {\n  font-size: 1em;\n  line-height: 25px;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  height: 40px;\n  margin-top: 10px;\n  opacity: 0;\n  font-size: 1.1em;\n  width: 100%;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.unfollow-button {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n  font-weight: 900;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment {\n  background: white;\n  height: auto;\n  opacity: 0;\n  margin: 30px 0 60px 0;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.comment:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.follow-button {\n  width: 100px;\n  height: 36px;\n  opacity: 0;\n  --background: #24d8a8;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: linear-gradient(#797, #799);\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  font-weight: 900;\n  width: 100px;\n}\n\n.delete-button {\n  --color: white;\n  --background: linear-gradient(#FF443B, rgb(206, 48, 40));\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.reply {\n  width: 60px;\n  --border-width: 1px;\n  --border-color: #005191;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #005191;\n  font-size: 0.6em;\n  font-weight: 600;\n  margin-right: 10px;\n}\n\n.report {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #888;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #888;\n  font-size: 0.6em;\n  font-weight: 600;\n  margin-right: 10px;\n}\n\n.edit {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #faa71b;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #faa71b;\n  font-size: 0.6em;\n  font-weight: 600;\n  margin-right: 10px;\n}\n\n.delete {\n  width: 60px;\n  --background: #faa71b;\n  border-radius: 5px;\n  --color: white;\n  font-size: 0.6em;\n  font-weight: 600;\n  margin-right: 10px;\n}\n\n.follow {\n  --border-width: 1px;\n  width: 80px;\n  --border-color: linear-gradient(#24d8a8, #1baf88);\n  --border-style: solid;\n  border-radius: 5px;\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  font-size: 0.7em;\n  font-weight: 600;\n  margin-right: 10px;\n}\n\nion-title {\n  color: #0055a5;\n}\n\n.toolbar {\n  --background: #0055a5;\n}\n\nion-item {\n  --background: none;\n}\n\nion-fab {\n  opacity: 0;\n  padding-right: 2%;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #222;\n  font-size: 1.2em;\n}\n\n.reply-wrapper {\n  position: relative;\n  top: 10px;\n  margin-bottom: 5px;\n}\n\n.reply-text {\n  color: #222;\n  font-size: 1em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-link {\n  color: #005191;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n}\n\n.comment-input {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:focus {\n  background: rgba(250, 167, 27, 0.04);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#replies-link {\n  color: #005191;\n  font-weight: 500;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Bvc3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFJQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUFXLGlCQUFBO0VBQ1gsY0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtRUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtRUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBRUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQUFGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrR0FBQTtVQUFBLDBGQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1FQUFBO0FBRkY7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDRixxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0Esd0RBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0E7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFDRjs7QUFDRTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNJO0VBQ0EsY0FBQTtBQUNKOztBQUlBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFERjtFQUdBO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBREY7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUVBQUE7QUFGRjs7QUFJQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUFGO0VBRUE7SUFDRSwwQkFBQTtJQUNFLFVBQUE7RUFBSjtBQUNGOztBQVJBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFBRjtFQUVBO0lBQ0UsMEJBQUE7SUFDRSxVQUFBO0VBQUo7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBREY7RUFHQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQURGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQURGO0VBR0E7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFGRjtFQUlBO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRjs7QUFOQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBRkY7RUFJQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoicG9zdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaHJ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wb3N0IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgcGFkZGluZzogODBweCAwcHg7XG59XG5cbi5wb3N0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIHJpZ2h0OiA1cHg7XG4gIC8vIHRvcDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnBvc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0LWRhdGUge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIG1hcmdpbjogMDsgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYmx1ZS1idXR0b24tc21hbGwge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMDA1NWEyKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhhc2h0YWdze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG59XG4uaGFzaHRhZ3tcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNlYTg0MDA7XG59XG4ucG9zdC1tb2JpbGUge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBvc3QtbW9iaWxlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucHJvZmlsZS1waWN0dXJlICB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG5cbi5wb3N0LWNvbnRlbnR7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4vLyBDaGFuZ2UgY29sb3Jcbi51bmZvbGxvdy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZhYTcxYiwgI2U5OWIxNCk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29tbWVudHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3N0LWJ1dHRvbi1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4uY29tbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc5NywgIzc5OSk7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRlbGV0ZS1idXR0b257XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkY0NDNCLCByZ2IoMjA2LCA0OCwgNDApKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4ucmVwbHl7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZXBvcnR7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5lZGl0e1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGVsZXRle1xuICB3aWR0aDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9sbG93IHtcbi0tYm9yZGVyLXdpZHRoOiAxcHg7XG53aWR0aDogODBweDtcbi0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7O1xuLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuLS1jb2xvcjogd2hpdGU7XG4tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbmZvbnQtc2l6ZTogMC43ZW07XG5mb250LXdlaWdodDogNjAwO1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzAwNTVhNTtcbn1cblxuLnRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tZmFiIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG5cbiAgaW9uLWZhYi1idXR0b24ge1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFiLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxufVxuXG4ucG9zdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbi5oZWFkZXItYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNvbW1lbnQtZm9ybXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ucmVwbHktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZXBseS10ZXh0IHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDBweCAwIDIwcHggMDtcbn1cblxuLnJlcGx5LWxpbmsge1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLmNvbW1lbnQtYXZhdGFyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjMyLCAyMzYsIC4zKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNTVhNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5jb21tZW50LWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDE2NywgMjcsIDAuMDQpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuI3JlcGx5LWRhdGUge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuI3JlcGxpZXMtbGluayB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc2VuZC1pY29uLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBvc3QtYnV0dG9uLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29tbWVudC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "DVFE":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editCommentForm\" (ngSubmit)=\"edit(this.editCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"edit(this.editCommentForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newComment\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "IBiA":
/*!****************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".report-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.report-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n  color: #e4405f;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoicmVwb3J0LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwb3J0LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNlNDQwNWY7XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "NS6A":
/*!************************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ReportCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCommentPageRoutingModule", function() { return ReportCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-comment.page */ "st0V");




const routes = [
    {
        path: '',
        component: _report_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReportCommentPage"]
    }
];
let ReportCommentPageRoutingModule = class ReportCommentPageRoutingModule {
};
ReportCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportCommentPageRoutingModule);



/***/ }),

/***/ "SJQ/":
/*!**************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: white;\n}\n\n.reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.reply-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcGx5LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6InJlcGx5LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXBseS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwbHktaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jdXNlcmZ1bGxuYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNkYXRlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "W0kA":
/*!********************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EditCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentPageRoutingModule", function() { return EditCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-comment.page */ "yJ2h");




const routes = [
    {
        path: '',
        component: _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__["EditCommentPage"]
    }
];
let EditCommentPageRoutingModule = class EditCommentPageRoutingModule {
};
EditCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditCommentPageRoutingModule);



/***/ }),

/***/ "cZU3":
/*!************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.page.ts ***!
  \************************************************************/
/*! exports provided: ReplyCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentPage", function() { return ReplyCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reply_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reply-comment.page.html */ "0NOO");
/* harmony import */ var _reply_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reply-comment.page.scss */ "SJQ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "7xvl");









let ReplyCommentPage = class ReplyCommentPage {
    constructor(formBuilder, modal, navParams, loading, alert, posts, postEmitterService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.alert = alert;
        this.posts = posts;
        this.postEmitterService = postEmitterService;
    }
    ngOnInit() {
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
    reply(reply) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('replying to comment...');
            // tslint:disable-next-line: max-line-length
            yield this.posts.replyComment(this.commentID, this.postID, reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail)
                .subscribe(data => {
                console.log(data);
                let comments = data['comments'];
                let userEmail = data['userEmail'];
                // Give User ability to Edit, Delete, or Report a Comment.
                // User cannot Report their own comment **
                for (const comment of comments) {
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
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === userEmail) {
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                    // Format the Reply Dates
                    for (let i = 0; comment.replies.length > i; i++) {
                        comment.replies[i].date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                    }
                }
                this.posts.commentsSubject$.next(comments.reverse());
            });
            yield this.replyLoading();
        });
    }
    replyLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Replying to Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been added.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('cancelling reply...');
        this.modal.dismiss();
    }
};
ReplyCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"] }
];
ReplyCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reply-post',
        template: _raw_loader_reply_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reply_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]])
], ReplyCommentPage);



/***/ }),

/***/ "hCOu":
/*!**********************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReplyCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentPageRoutingModule", function() { return ReplyCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reply-comment.page */ "cZU3");




const routes = [
    {
        path: '',
        component: _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReplyCommentPage"]
    }
];
let ReplyCommentPageRoutingModule = class ReplyCommentPageRoutingModule {
};
ReplyCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReplyCommentPageRoutingModule);



/***/ }),

/***/ "iW5p":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.ts ***!
  \*********************************************************/
/*! exports provided: PostPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePage", function() { return PostPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-page.page.html */ "yJXo");
/* harmony import */ var _post_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-page.page.scss */ "8WaI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/reply-comment/reply-comment.page */ "cZU3");
/* harmony import */ var src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modals/report-comment/report-comment.page */ "st0V");
/* harmony import */ var src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modals/edit-comment/edit-comment.page */ "yJ2h");
/* harmony import */ var src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modals/edit-post/edit-post.page */ "VPH/");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modals/replies-page/replies-page.page */ "nfbU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/emitters/single-post-page-emitter.service */ "wbj2");








// tslint:disable-next-line: max-line-length










const LANGUAGE_FILTER_LIST = [
    'fuck',
    'damn',
    'shit',
    'ass',
    'bitch',
    'slut',
    'whore',
    'dick',
    'pussy',
    'cunt',
    'faggot'
];
let PostPagePage = class PostPagePage {
    constructor(activatedRoute, postEmitterService, singlePostEmitterService, router, changeDetectorRef, posts, profile, formBuilder, toast, modal, alert, loading, location) {
        this.activatedRoute = activatedRoute;
        this.postEmitterService = postEmitterService;
        this.singlePostEmitterService = singlePostEmitterService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
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
        this.isUser = false;
        // debugging
        this.scroll = '';
    }
    ngOnDestroy() {
        this.singlePostEmitterService.subsVar.unsubscribe();
        this.commentsSub.unsubscribe();
        this.postsSub.unsubscribe();
        this.userDetailsSub.unsubscribe();
        this.postInfoSub.unsubscribe();
        // this.deletePostSub.unsubscribe();
        // this.deleteCommentSub.unsubscribe();
        // this.unfollowPostSub.unsubscribe();
        // this.followPostSub.unsubscribe();
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.postEmitterService.onBackAction();
        });
        // Get Post ID from navigation params on the main posts tab
        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.postID = id;
        // Get the user's information to insert into the comment metadata
        this.getPostInfo();
        if (this.singlePostEmitterService.subsVar == undefined) {
            // For Comment and Reply Refreshes
            this.singlePostEmitterService.subsVar = this.singlePostEmitterService.invokeSinglePostPageRefresh.subscribe(() => {
                this.getPostInfo();
                console.log('Refreshing Replies');
            });
        }
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
        this.commentsSub = this.posts.commentsSubject$.subscribe(commentsFromSub => {
            this.comments = commentsFromSub;
        });
        this.postsSub = this.posts.postsSubject$.subscribe(posts => {
            let currentPost;
            for (const post of posts) {
                if (post._id == this.postID) {
                    currentPost = post;
                }
            }
            this.post = currentPost.post;
        });
    }
    back() {
        this.postEmitterService.onBackAction();
        this.router.navigate(['/home/posts']);
    }
    refreshAfterComment() {
        this.postEmitterService.postPageRefresh();
    }
    refreshAfterDelete() {
        this.postEmitterService.postPageRefresh();
    }
    refreshAfterFollow() {
        this.postEmitterService.postPageRefresh();
    }
    follow(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.followPostSub = this.posts.followPost(postID, this.userEmail);
            this.following = true;
            yield this.followToast();
        });
    }
    followToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const followToast = yield this.toast.create({
                cssClass: 'followed-toast',
                message: 'You are FOLLOWING this post',
                duration: 2000
            });
            // await this.refreshAfterFollow();
            yield this.refreshAfterDelete();
            yield followToast.present();
        });
    }
    unFollow(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.unfollowPostSub = this.posts.unFollowPost(postID, this.userEmail);
            this.following = false;
            yield this.unFollowToast();
        });
    }
    unFollowToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const unFollowToast = yield this.toast.create({
                cssClass: 'unfollowed-toast',
                message: 'You are UNFOLLOWING this post',
                duration: 2000
            });
            // await this.refreshAfterFollow();
            yield this.refreshAfterDelete();
            yield unFollowToast.present();
        });
    }
    logScrolling(event) {
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
    }
    // Hide the Tab bar when the user is attempting to make a comment
    ScrollToTop() {
        this.content.scrollToPoint(0, 200, 100);
        this.tabBar.style.height = '0px';
        this.votes.style.height = '0px';
    }
    fabScrollTop() {
        this.content.scrollToTop();
    }
    // When the user submits the comment, the tabar will show up again
    ScrollToPostedComment() {
        this.content.scrollToPoint(0, 600, 100);
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
        });
    }
    onBlur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            this.tabBar.style.height = '70px';
        });
    }
    // for when the user un focuses out of the comment textarea but hasnt submitted the comment
    blur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
            this.tabBar.style.height = '70px';
        });
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(comment);
            // Reset Comment Input
            this.commentForm.reset();
            this.commentLoading(postID, userFullName, userEmail, userProfilePicture, comment);
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
        });
    }
    commentLoading(postID, userFullName, userEmail, userProfilePicture, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postsSub = this.posts.comment(postID, userFullName, userEmail, userProfilePicture, comment.comment).subscribe(data => {
                this.postInfoSub = this.posts.getPostInfo(this.postID).subscribe(post => {
                    for (let postComments of post['comments']) {
                        console.log(postComments);
                        postComments.isUser = false;
                        postComments.canDeleteComment = false;
                        postComments.canReport = true;
                        // If this comment is from the logged in user, they can delete and edit
                        if (postComments.userEmail === this.userEmail) {
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
                    this.posts.commentsSubject$.next(post['comments'].reverse());
                });
            });
            const loading = yield this.loading.create({
                message: 'Adding Comment...',
                duration: 1000
            });
            yield this.refreshAfterComment();
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    report(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get information from comment
            yield console.log('Attemping to report comment');
            // tslint:disable-next-line: max-line-length
            yield this.reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, this.userEmail, this.userFullName);
        });
    }
    reportModal(commentID, commentContents, post, postID, commentUserFullName, commentUserEmail, commentDate, userEmail, userFullName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const reportModalConfig = yield this.modal.create({
                component: src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_11__["ReportCommentPage"],
                componentProps: {
                    commentID,
                    commentContents,
                    post,
                    postID,
                    commentUserFullName,
                    commentUserEmail,
                    commentDate,
                    userEmail,
                    userFullName,
                }
            });
            yield reportModalConfig.present();
        });
    }
    reply(commentID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('Attemping to reply to comment');
            yield this.replyModal(commentID, this.postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail);
        });
    }
    replyModal(commentID, postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const replyModalConfig = yield this.modal.create({
                component: src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_10__["ReplyCommentPage"],
                componentProps: {
                    commentID,
                    postID,
                    userFullName,
                    userProfilePicture,
                    userEmail,
                    commentUserEmail,
                    commentUserFullName,
                },
                cssClass: 'reply-modal'
            });
            yield replyModalConfig.present();
        });
    }
    // tslint:disable-next-line: max-line-length
    repliesModal(postID, replies, comment, commentID, commentUserFullName, commentUserEmail, commentDate, userProfilePicture, userFullName, userEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const repliesPageModalConfig = yield this.modal.create({
                component: src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_15__["RepliesPagePage"],
                componentProps: {
                    postID,
                    replies,
                    comment,
                    commentID,
                    commentUserFullName,
                    commentUserEmail,
                    commentDate,
                    userProfilePicture,
                    userFullName,
                    userEmail
                },
                cssClass: 'reply-modal'
            });
            yield repliesPageModalConfig.present();
        });
    }
    editComment(commentID, commentCotents, postID, userEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log(commentID);
            yield console.log('Attemping to edit comment');
            yield this.editCommentModal(commentID, commentCotents, postID, userEmail);
        });
    }
    editCommentModal(commentID, commentCotents, postID, userEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const editAlertConfig = yield this.modal.create({
                component: src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_12__["EditCommentPage"],
                componentProps: {
                    commentID,
                    commentCotents,
                    postID,
                    userEmail
                }
            });
            yield editAlertConfig.present();
        });
    }
    editPost(postID, post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('Attemping to edit comment');
            yield this.editPostModal(postID, post);
        });
    }
    editPostModal(postID, post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const editPostModalConfig = yield this.modal.create({
                component: src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_13__["EditPostPage"],
                componentProps: {
                    postID,
                    post
                }
            });
            yield editPostModalConfig.present();
        });
    }
    deleteComment(commentID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('deleting comment..');
            console.log(this.postID);
            console.log(commentID);
            this.deleteCommentAlert(this.postID, commentID);
        });
    }
    deleteCommentAlert(postID, commentID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to delete this comment? This cannot be undone.',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteCommentLoading(this.postID, commentID)
                                .catch((err) => {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteCommentLoading(postID, commentID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.deleteCommentSub = this.posts.deleteComment(this.postID, commentID).subscribe(values => {
                let comments = values['comments'];
                for (const comment of comments) {
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
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === this.userEmail) {
                        console.log('true');
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                }
                this.posts.commentsSubject$.next(comments.reverse());
            });
            const loading = yield this.loading.create({
                message: 'Deleting Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.changeDetectorRef.detectChanges();
        });
    }
    deletePost(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('deleting post..');
            console.log(postID);
            this.deletePostAlert(postID);
        });
    }
    deletePostAlert(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to delete this post? This cannot be undone.',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Delete',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.deletePostLoading(postID);
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    deletePostLoading(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(postID);
            this.deletePostSub = this.posts.deletePost(postID).subscribe(remainingPosts => {
                this.posts.postsSubject$.next(Object.values(remainingPosts).reverse());
                console.log(this.posts.postsSubject$.getValue());
            });
            this.postEmitterService.onBackAction();
            this.router.navigate(['/home/posts']);
            console.log('Loading dismissed!');
            const loading = yield this.loading.create({
                message: 'Deleting Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    getPostInfo() {
        this.userDetailsSub = this.profile.getUserDetails().subscribe(details => {
            let userEmail = details['email'];
            this.userEmail = userEmail;
            let userFullName = details['fullName'];
            let userProfilePicture = details['profilePicture'];
            // Get information about selected post.
            // Format its date on the front end
            // initiate this components post metadata from data in Posts Service
            this.postInfoSub = this.posts.getPostInfo(this.postID).subscribe(postInfo => {
                const creatorEmail = postInfo['creatorEmail'];
                const creatorName = postInfo['creatorName'];
                const creatorProfilePicture = postInfo['creatorProfilePicture'];
                const title = postInfo['title'];
                const post = postInfo['post'];
                const followers = postInfo['followers'];
                const hashtags = postInfo['hashtags'];
                let comments = postInfo['comments'];
                let following = false;
                let date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(postInfo['date']), {
                    includeSeconds: true,
                    addSuffix: false
                });
                // Check if the post creator is the same as the User
                // Enables the user to delete and edit post if true
                if (creatorEmail === this.userEmail) {
                    this.isUser = true;
                }
                // See if the Logged in User is following the post on this page
                followers.find(findFollower);
                function findFollower(follower) {
                    if (!follower) {
                    }
                    if (follower === userEmail) {
                        following = true;
                    }
                }
                // Give User ability to Edit, Delete, or Report a Comment.
                // User cannot Report their own comment **
                for (const comment of comments) {
                    console.log(comment);
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
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === this.userEmail) {
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                    // Format the Reply Dates
                    for (let i = 0; comment.replies.length > i; i++) {
                        comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                    }
                    // comment.comment = comment.comment.replace(/go/g, "not go :(");
                }
                this.creatorName = creatorName;
                this.creatorEmail = creatorEmail;
                this.creatorProfilePicture = creatorProfilePicture;
                this.date = date;
                this.followers = followers;
                this.hashtags = hashtags;
                this.comments = comments.reverse();
                this.following = following;
                this.post = post;
                this.title = title;
                this.userProfilePicture = userProfilePicture;
                this.userFullName = userFullName;
            });
        });
    }
    filterLanguage(comment) {
        const updatedComment = comment;
        updatedComment.replace('fuck', '****');
        // LANGUAGE_FILTER_LIST.forEach(word => {
        //   comment.replace(word, '****');
        // });
        return updatedComment;
    }
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userDetailsSub = this.profile.getUserDetails().subscribe(details => {
                let userEmail = details['email'];
                this.userEmail = userEmail;
                let userFullName = details['fullName'];
                let userProfilePicture = details['profilePicture'];
                // Get information about selected post.
                // Format its date on the front end
                // initiate this components post metadata from data in Posts Service
                this.postInfoSub = this.posts.getPostInfo(this.postID).subscribe(postInfo => {
                    const creatorEmail = postInfo['creatorEmail'];
                    const creatorName = postInfo['creatorName'];
                    const post = postInfo['post'];
                    const title = postInfo['title'];
                    const followers = postInfo['followers'];
                    let comments = postInfo['comments'];
                    let following = false;
                    let date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(postInfo['date']), {
                        includeSeconds: true,
                        addSuffix: false
                    });
                    // See if the Logged in User is following the post on this page
                    followers.find(findFollower);
                    function findFollower(follower) {
                        if (!follower) {
                        }
                        if (follower === userEmail) {
                            following = true;
                        }
                    }
                    // Give User ability to Edit, Delete, or Report a Comment.
                    // User cannot Report their own comment **
                    for (const comment of comments) {
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
                        });
                        // If this comment is the logged in user, they can delete and edit
                        if (comment.userEmail === this.userEmail) {
                            comment.isUser = true;
                            comment.canDeleteComment = true;
                            comment.canReport = false;
                        }
                        // Format the Reply Dates
                        for (let i = 0; comment.replies.length > i; i++) {
                            comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                                addSuffix: false
                            });
                        }
                        comment.comment = this.filterLanguage(comment.comment);
                        // comment.comment = comment.comment.replace(/go/g, "not go :(");
                    }
                    this.creatorName = creatorName;
                    this.creatorEmail = creatorEmail;
                    this.date = date;
                    this.followers = followers;
                    this.comments = comments;
                    this.following = following;
                    this.post = post;
                    this.title = title;
                    this.userProfilePicture = userProfilePicture;
                    this.userFullName = userFullName;
                    this.posts.commentsSubject$.next(comments.reverse());
                });
            });
            yield setTimeout(() => {
                const toast = this.toast.create({
                    message: 'Page has been refreshed',
                    duration: 3000
                });
                event.target.complete();
                toast.then(toast => toast.present());
            }, 2000);
        });
    }
};
PostPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_14__["PostPageEmitterService"] },
    { type: src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_17__["SinglePostPageEmitterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["PlatformLocation"] }
];
PostPagePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], { static: true },] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTextarea"], { static: true },] }]
};
PostPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-page',
        template: _raw_loader_post_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_14__["PostPageEmitterService"],
        src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_17__["SinglePostPageEmitterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_16__["PlatformLocation"]])
], PostPagePage);



/***/ }),

/***/ "j5il":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 50px;\">\n    <ion-col size=\"10\">\n      <p id=\"userfullname\">User being Reported: {{commentUserFullName}}</p>\n      <hr style=\"background: #999\">\n      <p id=\"comment\">Comment: {{commentContents}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"reportCommentForm\" (ngSubmit)=\"report()\">\n        <ion-textarea\n          (keyup.enter)=\"report()\"\n          class=\"report-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"8\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          placeholder=\"Why are you reporting this post?\" formControlName=\"reportedReason\">\n        </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Report\n            </ion-button>\n          </div>\n      </form>\n    </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "kvUc":
/*!************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "qQPJ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PostPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePageRoutingModule", function() { return PostPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-page.page */ "iW5p");




const routes = [
    {
        path: '',
        component: _post_page_page__WEBPACK_IMPORTED_MODULE_3__["PostPagePage"]
    }
];
let PostPagePageRoutingModule = class PostPagePageRoutingModule {
};
PostPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostPagePageRoutingModule);



/***/ }),

/***/ "qgNS":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.module.ts ***!
  \***********************************************************/
/*! exports provided: PostPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePageModule", function() { return PostPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/custom-component.module */ "zAgk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-page.page */ "iW5p");
/* harmony import */ var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-page-routing.module */ "qQPJ");
/* harmony import */ var src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/reply-comment/reply-comment.module */ "+RqQ");
/* harmony import */ var src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/report-comment/report-comment.module */ "zlSt");
/* harmony import */ var src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/edit-comment/edit-comment.module */ "uUSJ");
/* harmony import */ var src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modals/edit-post/edit-post.module */ "9CtM");
/* harmony import */ var src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modals/replies-page/replies-page.module */ "fU57");













let PostPagePageModule = class PostPagePageModule {
};
PostPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostPagePageRoutingModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"],
            src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentPageModule"],
            src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__["ReportCommentPageModule"],
            src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__["EditCommentPageModule"],
            src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_11__["EditPostPageModule"],
            src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_12__["RepliesPagePageModule"]
        ],
        declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_6__["PostPagePage"]]
    })
], PostPagePageModule);



/***/ }),

/***/ "st0V":
/*!**************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.page.ts ***!
  \**************************************************************/
/*! exports provided: ReportCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCommentPage", function() { return ReportCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-comment.page.html */ "j5il");
/* harmony import */ var _report_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-comment.page.scss */ "IBiA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");







let ReportCommentPage = class ReportCommentPage {
    constructor(formBuilder, modal, navParams, loading, posts, alert) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.posts = posts;
        this.alert = alert;
    }
    ngOnInit() {
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
    report() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('reporting comment...');
            yield console.log(this.reportCommentForm.value.reportedReason);
            yield this.reportLoading();
            // tslint:disable-next-line: max-line-length
            yield this.posts.reportComment(this.commentID, this.commentContents, this.post, this.postID, this.commentUserFullName, this.commentUserEmail, this.commentDate, this.userEmail, this.userFullName, this.reportCommentForm.value.reportedReason)
                .subscribe();
        });
    }
    reportLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Reporting comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Report Sent',
                cssClass: 'success-alert',
                message: 'Thank you for reporting this user. Find Your Future will notifiy the user and take futher actions if necessary.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('cancelling comment...');
        this.modal.dismiss();
    }
};
ReportCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ReportCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-comment',
        template: _raw_loader_report_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], ReportCommentPage);



/***/ }),

/***/ "uUSJ":
/*!************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.module.ts ***!
  \************************************************************/
/*! exports provided: EditCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentPageModule", function() { return EditCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-comment-routing.module */ "W0kA");
/* harmony import */ var _edit_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-comment.page */ "yJ2h");







let EditCommentPageModule = class EditCommentPageModule {
};
EditCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCommentPageRoutingModule"]
        ],
        declarations: [_edit_comment_page__WEBPACK_IMPORTED_MODULE_6__["EditCommentPage"]]
    })
], EditCommentPageModule);



/***/ }),

/***/ "yJ2h":
/*!**********************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.page.ts ***!
  \**********************************************************/
/*! exports provided: EditCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentPage", function() { return EditCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-comment.page.html */ "DVFE");
/* harmony import */ var _edit_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-comment.page.scss */ "kvUc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");









let EditCommentPage = class EditCommentPage {
    constructor(formBuilder, modal, navParams, loading, posts, alert, postEmitterService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.posts = posts;
        this.alert = alert;
        this.postEmitterService = postEmitterService;
    }
    ngOnInit() {
        this.commentID = this.navParams.get('commentID');
        this.commentContents = this.navParams.get('commentCotents');
        this.postID = this.navParams.get('postID');
        this.userEmail = this.navParams.get('userEmail');
        console.log('post_id: ' + this.postID);
        console.log(this.commentID);
        console.log(this.commentContents);
        console.log(this.userEmail);
        // To collect comment data
        this.editCommentForm = this.formBuilder.group({
            newComment: this.commentContents
        });
    }
    cancel() {
        console.log('cancelling');
        this.modal.dismiss();
    }
    refreshComment() {
        this.postEmitterService.postPageRefresh();
    }
    edit(newComment) {
        console.log('editting');
        console.log(newComment);
        this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe(comment => {
            this.posts.getPostInfo(this.postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.isUser = false;
                    postComments.canDeleteComment = false;
                    postComments.canReport = true;
                    // If this comment is the logged in user, they can delete and edit
                    if (postComments.userEmail === this.userEmail) {
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
                this.posts.commentsSubject$.next(post['comments'].reverse());
            });
            this.editLoading(comment['newComment']);
        });
    }
    editLoading(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Editing your comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been edited.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
EditCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"] }
];
EditCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-comment',
        template: _raw_loader_edit_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]])
], EditCommentPage);



/***/ }),

/***/ "yJXo":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\" no-border>\n  <ion-toolbar class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n   <!-- fab placed to the bottom end; Going back to the top of the page on the mobile view. -->\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"fabScrollTop()\">\n        <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\n     </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row class=\"post ion-justify-content-center\">\n       <!-- Profile Header -->\n          <!-- Only on Desktop -->\n          <ion-col class=\"ion-hide-lg-down\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n            <!-- Profile Header -->\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- Profile Picture -->\n              <ion-col class=\"ion-text-center\" pull-xl=\"0.5\" pull-lg=\"0.5\" size=\"0.75\">\n                <img src=\"{{creatorProfilePicture}}\" style=\"border-radius: 100px; height: 35xpx; width: 35px;\">\n              </ion-col>\n              <!-- Post Creator's Name -->\n              <ion-col pull-xl=\"0.5\" pull-lg=\"0.5\" size=\"9\">\n                <p class=\"post-name\">{{creatorName}}</p>\n                <p class=\"post-date\">{{date}}</p>\n              </ion-col>\n              <!-- Back button-->\n              <ion-col size=\"1\">\n                <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back()\">\n                Back\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Mlobile header -->\n          <ion-col class=\"ion-hide-lg-up\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n                <img class=\"profile-picture\" src=\"{{creatorProfilePicture}}\">\n                <div style=\"display: inline-block; margin-left: 10px;\">\n                  <p class=\"post-name\">{{creatorName}}</p>\n                  <p class=\"post-date\">Posted {{date}} ago</p>\n                </div>\n                <hr class=\"header-hr\">\n          </ion-col>\n          <!-- Post Content -->\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n                <p class=\"post-title\">{{title}}</p>\n                <div class=\"hashtags\">\n                  <p class=\"hashtag\" *ngFor=\"let tag of hashtags\">\n                    #{{tag}}\n                  </p>\n                </div>\n               <p class=\"post-content\">{{post}}</p>\n          </ion-col>\n\n          <!-- Comment Input -->\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n            <form (ngSubmit)=\"comment(this.postID, this.userFullName, this.userEmail, this.userProfilePicture, commentForm.value )\" [formGroup]=\"commentForm\">\n                    <ion-textarea\n                      (ionBlur)=\"onBlur()\"\n                      (onfocusout)=\"blur()\"\n                      (keydown.control.enter)=\"comment(this.postID, this.userFullName, this.userEmail, this.userProfilePicture, commentForm.value) && ScrollToPostedComment()\"\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\n                    </ion-textarea>\n                    <ion-button\n                      style=\"float: right;\"\n                      class=\"comment-post-button\"\n                      type=\"submit\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\">Post\n                      </ion-button>\n            </form>\n          </ion-col>\n\n          <!-- Upvote and Downvote Post -->\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"4\" push-xl=\"1.5\" size-xl=\"6\">\n            <app-up-down-vote-buttons [postID]=\"postID\"></app-up-down-vote-buttons>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"4\" pull-xl=\"1.4\" size-xl=\"3\">\n              <ion-button *ngIf=\"this.isUser === true\" (click)=\"deletePost(this.postID)\"  class=\"delete ion-float-right\">\n                Delete\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === true\" (click)=\"editPost(this.postID, this.post)\"\n                class=\"edit ion-float-right\"\n                style=\"--background: none;\">\n                Edit\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && !following\" (click)=\"follow(this.postID)\"\n                class=\"follow ion-float-right\">\n                Follow\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && following\" (click)=\"unFollow(this.postID)\"\n                class=\"delete ion-float-right\"\n                style=\"width: 80px\">\n                Unfollow\n              </ion-button>\n          </ion-col>\n    </ion-row>\n\n    <!-- Comments -->\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- If No Comments -->\n      <ion-col class=\"ion-text-center\" style=\"margin: 100px 0;\" *ngIf=\"comments.length === 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <p style=\"color: #888;\">This post has no comments</p>\n      </ion-col>\n\n      <ion-col *ngIf=\"comments.length > 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <p style=\"color: #888; margin: 0px 0\">Comments - {{comments.length}}</p>\n      </ion-col>\n\n        <!-- Comment Wrapper -->\n        <ion-col *ngFor=\"let comment of comments\" class=\"comment\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n\n          <!-- Comment Header -->\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\n                  <img src=\"{{comment.userProfilePicture}}\">\n                </ion-avatar>\n                <ion-label>\n                  <h6 style=\"opacity: 0.5\">{{ comment.userFullName  }} - {{ comment.date }} </h6>\n\n                  <hr class=\"header-hr\">\n                  </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n                <p class=\"comment-text\" style=\"margin-top: 40px;\">{{comment.comment}}\n                </p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Replies -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <p\n              (click)=\"repliesModal(\n                this.postID,\n                comment.replies,\n                comment.comment,\n                comment._id,\n                comment.userFullName,\n                comment.userEmail,\n                comment.date,\n                comment.userProfilePicture,\n                this.userFullName,\n                this.userEmail)\"\n              *ngIf=\"comment.repliesLength >= 1\" id=\"replies-link\">Replies - {{comment.repliesLength}}</p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Comment Buttons -->\n          <ion-row style=\"margin-top: 20px;\">\n            <!-- Upvote & Downvote Comments-->\n            <ion-col size=\"4\">\n              <app-comment-vote-bar [postID]=\"this.postID\" [commentID]=\"comment._id\"></app-comment-vote-bar>\n            </ion-col>\n            <!-- Report, Edit & Reply -->\n            <ion-col push=\"1\" size=\"6\">\n              <ion-toolbar style=\"--background: none;\">\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"reply(comment._id, this.userFullName, this.userEmail, this.userProfilePicture, comment.userFullName, comment.userEmail)\" class=\"reply ion-float-right\">\n                    Reply\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canReport === true\" (click)=\"report(comment._id, comment.comment, this.post, this.postID, comment.userFullName, comment.userEmail, comment.date)\"  class=\"report ion-float-right\">\n                    Report\n                  </ion-button>\n                  <ion-button\n                    *ngIf=\"comment.isUser === true\" (click)=\"editComment(comment._id, comment.comment, this.postID, this.userEmail)\"\n                    class=\"edit ion-float-right\">\n                    Edit\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canDeleteComment === true\" (click)=\"deleteComment(comment._id)\"  class=\"delete ion-float-right\">\n                    Delete\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "zlSt":
/*!****************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.module.ts ***!
  \****************************************************************/
/*! exports provided: ReportCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCommentPageModule", function() { return ReportCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-comment-routing.module */ "NS6A");
/* harmony import */ var _report_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-comment.page */ "st0V");







let ReportCommentPageModule = class ReportCommentPageModule {
};
ReportCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportCommentPageRoutingModule"]
        ],
        declarations: [_report_comment_page__WEBPACK_IMPORTED_MODULE_6__["ReportCommentPage"]]
    })
], ReportCommentPageModule);



/***/ })

}]);
//# sourceMappingURL=post-page-post-page-module-es2015.js.map