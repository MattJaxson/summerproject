function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsEditCommentEditCommentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editCommentForm\" (ngSubmit)=\"edit(this.editCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"edit(this.editCommentForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newComment\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsReplyCommentReplyCommentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancel()\">\n          cancel\n        </ion-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <ion-col size=\"10\">\n        <p id=\"userfullname\"></p>\n        <form [formGroup]=\"replyCommentForm\" (ngSubmit)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\">\n          <ion-textarea\n            (keydown.control.enter)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\"\n            class=\"reply-input\"\n            autogrow=\"true\"\n            autocapitalize=\"true\"\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            type=\"text\"\n            placeholder=\"Replying to: {{userFullName}}\" formControlName=\"reply\">\n          </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Reply\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsReportCommentReportCommentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <p id=\"comment\">Comment: {{commentContents}}</p>\n      <p id=\"userfullname\">User being Reported: {{commentUserFullName}}</p>\n      <p id=\"useremail\">User being Reported Email: {{commentUserEmail}}</p>\n      <p id=\"date\">Posted: {{commentDate}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"reportCommentForm\" (ngSubmit)=\"report(this.reportCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"report(this.reportCommentForm.value)\"\n          class=\"report-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"8\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          placeholder=\"Why are you reporting this post?\" formControlName=\"reportedReason\">\n        </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Report\n            </ion-button>\n          </div>\n      </form>\n    </ion-col>\n</ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPostsPostPagePostPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <div style=\"position: relative; right: 15px;\" slot=\"end\">\n        <ion-title >{{creatorName}}'s Post &middot; <span style=\"font-size: 0.5em; position: relative; top: -2.5px;\">{{date}} ago</span></ion-title>\n      </div>\n      <div style=\"position: relative; right: 15px;\" slot=\"end\">\n        <img style=\"position: relative; right: 5px; display: inline-block;\" slot=\"end\" class=\"profile-picture\" src=\"../../../../assets/aaron.jpg\">\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n   <!-- fab placed to the bottom end; Going back to the top of the page on the mobile view. -->\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button (click)=\"fabScrollTop()\">\n            <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\n          </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n\n    <ion-row class=\"post ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n\n        <ion-row class=\"ion-justify-content-center\">\n\n          <!-- Profile Header -->\n          <!-- Only on Desktop -->\n          <ion-col size=\"12\">\n            <ion-row>\n\n            <!-- Profile Picture -->\n            <ion-col class=\"ion-hide-md-down\" pull-lg=\"0.2\" size=\"1\">\n              <img class=\"profile-picture\" src=\"../../../../assets/aaron.jpg\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col class=\"ion-hide-md-down\" size=\"5\">\n              <h6 style=\"font-size: 1em; font-weight: 500; opacity: 0.4;\">{{creatorName}} - <span style=\"font-size: 0.5em;\">{{date}}  ago</span></h6>\n            </ion-col>\n\n            <!-- Back button-->\n            <ion-col class=\"ion-hide-md-down\" push=\"4.5\" size=\"1\">\n              <ion-button class=\"back-button ion-float-right\" (click)=\"back()\">\n                Back\n              </ion-button>\n            </ion-col>\n\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Content -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- 1080x1350 -->\n              <ion-col size=\"11\" size-lg=\"12\">\n               <p class=\"post-content\">{{post}}</p>\n              </ion-col>\n           </ion-row>\n          </ion-col>\n\n          <!-- Line -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"11\" size-lg=\"12\">\n                <hr style=\"background-color: #999; opacity: 0.4; margin: 20px 0 20px 0;\">\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Comment Input -->\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\">\n                 <form (ngSubmit)=\"comment(this.commentForm.value, this.postID)\" [formGroup]=\"commentForm\">\n                    <ion-textarea\n                      (ionBlur)=\"onBlur()\"\n                      (onfocusout)=\"blur()\"\n                      (keydown.control.enter)=\"comment(this.commentForm.value, this.postID) && ScrollToPostedComment()\"\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\n                    </ion-textarea>\n                    <ion-button\n                      style=\"float: right;\"\n                      class=\"comment-post-button\"\n                      type=\"submit\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\">Post\n                      </ion-button>\n                 </form>\n                </ion-item>\n\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Upvote and Downvote Post -->\n          <ion-col id=\"votes\" size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\n            <ion-row>\n              <ion-col size=\"4.5\">\n                <app-up-down-vote-buttons [postID]=\"postID\"></app-up-down-vote-buttons>\n            </ion-col>\n            <ion-col push-lg=\"0.25\" size=\"6.5\">\n              <ion-button *ngIf=\"this.isUser === true\" (click)=\"deletePost(this.postID)\"  class=\"delete ion-float-right\">\n                Delete\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === true\" (click)=\"editPost(this.postID, this.post)\"\n                class=\"edit ion-float-right\"\n                style=\"--background: none;\">\n                Edit\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && !following\" (click)=\"follow(this.postID)\"\n                class=\"follow ion-float-right\">\n                Follow\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && following\" (click)=\"unFollow(this.postID)\"\n                class=\"delete ion-float-right\"\n                style=\"width: 80px\">\n                Unfollow\n              </ion-button>\n            </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Comments -->\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- If No Comments -->\n      <ion-col class=\"ion-text-center\" style=\"margin: 100px 0;\" *ngIf=\"comments.length === 0\" size=\"10\">\n      <p style=\"color: #888;\">This post has no comments</p>\n      </ion-col>\n\n      <ion-col *ngIf=\"comments.length > 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <p style=\"color: #888; margin: 60px 0\">Comments - {{comments.length}}</p>\n      </ion-col>\n\n        <!-- Comment Wrapper -->\n        <ion-col *ngFor=\"let comment of comments\" class=\"comment\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n\n          <!-- Comment Header -->\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\n                  <img src=\"../../../../assets/aaron.jpg\">\n                </ion-avatar>\n                <ion-label>\n                  <h6 style=\"opacity: 0.5\">{{ comment.userFullName  }} - {{ comment.date }} </h6>\n                  </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n                <p class=\"comment-text\" style=\"margin-top: 40px;\">{{comment.comment}}\n                </p>\n            </ion-col>\n          </ion-row>\n\n          <!-- Line -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <hr style=\"background-color: #999; opacity: 0.4; margin: 20px 0 0 0;\">\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Replies -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <p\n              (click)=\"repliesModal(\n                this.postID,\n                comment.replies,\n                comment.comment,\n                comment._id,\n                comment.userFullName,\n                comment.userEmail,\n                comment.date,\n                comment.userProfilePicture,\n                this.userFullName,\n                this.userEmail)\"\n              *ngIf=\"comment.repliesLength >= 1\" id=\"replies-link\">Replies - {{comment.repliesLength}}</p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Comment Buttons -->\n          <ion-row style=\"margin-top: 20px;\">\n            <!-- Upvote & Downvote Comments-->\n            <ion-col size=\"4\">\n              <app-comment-vote-bar [postID]=\"this.postID\" [commentID]=\"comment._id\"></app-comment-vote-bar>\n            </ion-col>\n            <!-- Report, Edit & Reply -->\n            <ion-col push=\"1\" size=\"6\">\n              <ion-toolbar>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"reply(comment._id, this.userFullName, this.userEmail, this.userProfilePicture, comment.userFullName, comment.userEmail)\" class=\"reply ion-float-right\">\n                    Reply\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canReport === true\" (click)=\"report(comment._id, comment.comment, this.post, this.postID, comment.userFullName, comment.userEmail, comment.date, this.userEmail, this.userFullName)\"  class=\"report ion-float-right\">\n                    Report\n                  </ion-button>\n                  <ion-button\n                    *ngIf=\"comment.isUser === true\" (click)=\"editComment(comment._id, comment.comment, this.postID, this.userEmail)\"\n                    class=\"edit ion-float-right\">\n                    Edit\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canDeleteComment === true\" (click)=\"deleteComment(comment._id)\"  class=\"delete ion-float-right\">\n                    Delete\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modals/edit-comment/edit-comment-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modals/edit-comment/edit-comment-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: EditCommentPageRoutingModule */

  /***/
  function srcAppModalsEditCommentEditCommentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCommentPageRoutingModule", function () {
      return EditCommentPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-comment.page */
    "./src/app/modals/edit-comment/edit-comment.page.ts");

    var routes = [{
      path: '',
      component: _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__["EditCommentPage"]
    }];

    var EditCommentPageRoutingModule = function EditCommentPageRoutingModule() {
      _classCallCheck(this, EditCommentPageRoutingModule);
    };

    EditCommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditCommentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/edit-comment/edit-comment.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/edit-comment/edit-comment.module.ts ***!
    \************************************************************/

  /*! exports provided: EditCommentPageModule */

  /***/
  function srcAppModalsEditCommentEditCommentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCommentPageModule", function () {
      return EditCommentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-comment-routing.module */
    "./src/app/modals/edit-comment/edit-comment-routing.module.ts");
    /* harmony import */


    var _edit_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-comment.page */
    "./src/app/modals/edit-comment/edit-comment.page.ts");

    var EditCommentPageModule = function EditCommentPageModule() {
      _classCallCheck(this, EditCommentPageModule);
    };

    EditCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCommentPageRoutingModule"]],
      declarations: [_edit_comment_page__WEBPACK_IMPORTED_MODULE_6__["EditCommentPage"]]
    })], EditCommentPageModule);
    /***/
  },

  /***/
  "./src/app/modals/edit-comment/edit-comment.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/modals/edit-comment/edit-comment.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsEditCommentEditCommentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL2VkaXQtY29tbWVudC9lZGl0LWNvbW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvZWRpdC1jb21tZW50L2VkaXQtY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvZWRpdC1jb21tZW50L2VkaXQtY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iLCIuY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modals/edit-comment/edit-comment.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/edit-comment/edit-comment.page.ts ***!
    \**********************************************************/

  /*! exports provided: EditCommentPage */

  /***/
  function srcAppModalsEditCommentEditCommentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCommentPage", function () {
      return EditCommentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

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
          var _this = this;

          console.log('editting');
          console.log(newComment);
          this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe(function (comment) {
            _this.posts.getPostInfo(_this.postID).subscribe(function (post) {
              var _iterator = _createForOfIteratorHelper(post['comments']),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var postComments = _step.value;
                  postComments.isUser = false;
                  postComments.canDeleteComment = false;
                  postComments.canReport = true; // If this comment is the logged in user, they can delete and edit

                  if (postComments.userEmail === _this.userEmail) {
                    postComments.isUser = true;
                    postComments.canDeleteComment = true;
                    postComments.canReport = false;
                  }

                  postComments.repliesLength = postComments.replies.length;
                  postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
                    includeSeconds: true,
                    addSuffix: false
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.posts.commentsSubject$.next(post['comments'].reverse());
            });

            _this.editLoading(comment['newComment']);
          });
        }
      }, {
        key: "editLoading",
        value: function editLoading(comment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading, _yield$loading$onDidD, role, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loading.create({
                      message: 'Editing your comment...',
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    _context.next = 12;
                    return this.modal.dismiss();

                  case 12:
                    _context.next = 14;
                    return this.confirmAlert();

                  case 14:
                    console.log('Loading dismissed!');

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "confirmAlert",
        value: function confirmAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alert.create({
                      cssClass: 'success-alert',
                      message: 'Your comment has been edited.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return EditCommentPage;
    }();

    EditCommentPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"]
      }];
    };

    EditCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-comment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-comment.page.scss */
      "./src/app/modals/edit-comment/edit-comment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"]])], EditCommentPage);
    /***/
  },

  /***/
  "./src/app/modals/reply-comment/reply-comment-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modals/reply-comment/reply-comment-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ReplyCommentPageRoutingModule */

  /***/
  function srcAppModalsReplyCommentReplyCommentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplyCommentPageRoutingModule", function () {
      return ReplyCommentPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reply-comment.page */
    "./src/app/modals/reply-comment/reply-comment.page.ts");

    var routes = [{
      path: '',
      component: _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReplyCommentPage"]
    }];

    var ReplyCommentPageRoutingModule = function ReplyCommentPageRoutingModule() {
      _classCallCheck(this, ReplyCommentPageRoutingModule);
    };

    ReplyCommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReplyCommentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/reply-comment/reply-comment.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/reply-comment/reply-comment.module.ts ***!
    \**************************************************************/

  /*! exports provided: ReplyCommentPageModule */

  /***/
  function srcAppModalsReplyCommentReplyCommentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplyCommentPageModule", function () {
      return ReplyCommentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reply-comment-routing.module */
    "./src/app/modals/reply-comment/reply-comment-routing.module.ts");
    /* harmony import */


    var _reply_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reply-comment.page */
    "./src/app/modals/reply-comment/reply-comment.page.ts");

    var ReplyCommentPageModule = function ReplyCommentPageModule() {
      _classCallCheck(this, ReplyCommentPageModule);
    };

    ReplyCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReplyCommentPageRoutingModule"]],
      declarations: [_reply_comment_page__WEBPACK_IMPORTED_MODULE_6__["ReplyCommentPage"]]
    })], ReplyCommentPageModule);
    /***/
  },

  /***/
  "./src/app/modals/reply-comment/reply-comment.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/reply-comment/reply-comment.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsReplyCommentReplyCommentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  color: white;\n}\n\n.reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.reply-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL3JlcGx5LWNvbW1lbnQvcmVwbHktY29tbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9yZXBseS1jb21tZW50L3JlcGx5LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3JlcGx5LWNvbW1lbnQvcmVwbHktY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlcGx5LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5yZXBseS1pbnB1dDpob3ZlciB7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbiNjb21tZW50IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSIsImlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVwbHktaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5yZXBseS1pbnB1dDpob3ZlciB7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbiNjb21tZW50IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/reply-comment/reply-comment.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/reply-comment/reply-comment.page.ts ***!
    \************************************************************/

  /*! exports provided: ReplyCommentPage */

  /***/
  function srcAppModalsReplyCommentReplyCommentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplyCommentPage", function () {
      return ReplyCommentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");
    /* harmony import */


    var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns/formatDistanceToNow */
    "./node_modules/date-fns/esm/formatDistanceToNow/index.js");

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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return console.log('replying to comment...');

                  case 2:
                    _context3.next = 4;
                    return this.posts.replyComment(this.commentID, this.postID, _reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail).subscribe(function (data) {
                      console.log(data);
                      var comments = data['comments'];
                      var userEmail = data['userEmail']; // Give User ability to Edit, Delete, or Report a Comment.
                      // User cannot Report their own comment **

                      var _iterator2 = _createForOfIteratorHelper(comments),
                          _step2;

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          var comment = _step2.value;
                          // If the Logged in User's Email equals the creatorEmail of the Comment,
                          // they will be given the ability to edit and delete their Comment.
                          // The ability for them to report their own comment is disabled
                          comment.repliesLength = comment.replies.length;
                          comment.isUser = false;
                          comment.canDeleteComment = false;
                          comment.canReport = true;
                          comment.date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(comment.date), {
                            includeSeconds: false,
                            addSuffix: false
                          }); // If this comment is the logged in user, they can delete and edit

                          if (comment.userEmail === userEmail) {
                            comment.isUser = true;
                            comment.canDeleteComment = true;
                            comment.canReport = false;
                          } // Format the Reply Dates


                          for (var i = 0; comment.replies.length > i; i++) {
                            comment.replies[i].date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(comment.replies[i].date), {
                              addSuffix: false
                            });
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      _this2.posts.commentsSubject$.next(comments.reverse());
                    });

                  case 4:
                    _context3.next = 6;
                    return this.replyLoading();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "replyLoading",
        value: function replyLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var loading, _yield$loading$onDidD2, role, data;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loading.create({
                      message: 'Replying to Comment...',
                      duration: 2000
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    _context4.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD2 = _context4.sent;
                    role = _yield$loading$onDidD2.role;
                    data = _yield$loading$onDidD2.data;
                    _context4.next = 12;
                    return this.modal.dismiss();

                  case 12:
                    _context4.next = 14;
                    return this.confirmAlert();

                  case 14:
                    console.log('Loading dismissed!');

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "confirmAlert",
        value: function confirmAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alert.create({
                      cssClass: 'success-alert',
                      message: 'Your comment has been added.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
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
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
      }, {
        type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"]
      }];
    };

    ReplyCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reply-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reply-comment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reply-comment.page.scss */
      "./src/app/modals/reply-comment/reply-comment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"]])], ReplyCommentPage);
    /***/
  },

  /***/
  "./src/app/modals/report-comment/report-comment-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modals/report-comment/report-comment-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ReportCommentPageRoutingModule */

  /***/
  function srcAppModalsReportCommentReportCommentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportCommentPageRoutingModule", function () {
      return ReportCommentPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _report_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./report-comment.page */
    "./src/app/modals/report-comment/report-comment.page.ts");

    var routes = [{
      path: '',
      component: _report_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReportCommentPage"]
    }];

    var ReportCommentPageRoutingModule = function ReportCommentPageRoutingModule() {
      _classCallCheck(this, ReportCommentPageRoutingModule);
    };

    ReportCommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportCommentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/report-comment/report-comment.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/report-comment/report-comment.module.ts ***!
    \****************************************************************/

  /*! exports provided: ReportCommentPageModule */

  /***/
  function srcAppModalsReportCommentReportCommentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportCommentPageModule", function () {
      return ReportCommentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./report-comment-routing.module */
    "./src/app/modals/report-comment/report-comment-routing.module.ts");
    /* harmony import */


    var _report_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./report-comment.page */
    "./src/app/modals/report-comment/report-comment.page.ts");

    var ReportCommentPageModule = function ReportCommentPageModule() {
      _classCallCheck(this, ReportCommentPageModule);
    };

    ReportCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportCommentPageRoutingModule"]],
      declarations: [_report_comment_page__WEBPACK_IMPORTED_MODULE_6__["ReportCommentPage"]]
    })], ReportCommentPageModule);
    /***/
  },

  /***/
  "./src/app/modals/report-comment/report-comment.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modals/report-comment/report-comment.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsReportCommentReportCommentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".report-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.report-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1.6em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL3JlcG9ydC1jb21tZW50L3JlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3JlcG9ydC1jb21tZW50L3JlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvcmVwb3J0LWNvbW1lbnQvcmVwb3J0LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwb3J0LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4jdXNlcmZ1bGxuYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNkYXRlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iLCIucmVwb3J0LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwb3J0LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4jdXNlcmZ1bGxuYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNkYXRlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/report-comment/report-comment.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/report-comment/report-comment.page.ts ***!
    \**************************************************************/

  /*! exports provided: ReportCommentPage */

  /***/
  function srcAppModalsReportCommentReportCommentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportCommentPage", function () {
      return ReportCommentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");

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
          this.commentContents = this.navParams.get('commentCotents');
          this.commentUserFullName = this.navParams.get('commentUserFullName');
          this.commentUserEmail = this.navParams.get('commentUserEmail');
          this.commentDate = this.navParams.get('commentDate');
          this.post = this.navParams.get('post');
          this.postID = this.navParams.get('postID');
        }
      }, {
        key: "report",
        value: function report(reportReason) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return console.log('reporting comment...');

                  case 2:
                    _context6.next = 4;
                    return this.reportLoading();

                  case 4:
                    _context6.next = 6;
                    return this.posts.reportComment(this.commentID, this.commentContents, this.post, this.postID, this.commentUserFullName, this.commentUserEmail, this.commentDate, this.userEmail, this.userFullName, reportReason.reportedReason).subscribe();

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "reportLoading",
        value: function reportLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var loading, _yield$loading$onDidD3, role, data;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loading.create({
                      message: 'Reporting comment...',
                      duration: 2000
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                    _context7.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD3 = _context7.sent;
                    role = _yield$loading$onDidD3.role;
                    data = _yield$loading$onDidD3.data;
                    _context7.next = 12;
                    return this.modal.dismiss();

                  case 12:
                    _context7.next = 14;
                    return this.confirmAlert();

                  case 14:
                    console.log('Loading dismissed!');

                  case 15:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "confirmAlert",
        value: function confirmAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alert.create({
                      header: 'Report Sent',
                      cssClass: 'success-alert',
                      message: 'Thank you for reporting this user. Find Your Future will notifiy the user and take futher actions if necessary.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
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
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ReportCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report-comment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report-comment.page.scss */
      "./src/app/modals/report-comment/report-comment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], ReportCommentPage);
    /***/
  },

  /***/
  "./src/app/pages/posts/post-page/post-page-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/posts/post-page/post-page-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PostPagePageRoutingModule */

  /***/
  function srcAppPagesPostsPostPagePostPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPagePageRoutingModule", function () {
      return PostPagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _post_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-page.page */
    "./src/app/pages/posts/post-page/post-page.page.ts");

    var routes = [{
      path: '',
      component: _post_page_page__WEBPACK_IMPORTED_MODULE_3__["PostPagePage"]
    }];

    var PostPagePageRoutingModule = function PostPagePageRoutingModule() {
      _classCallCheck(this, PostPagePageRoutingModule);
    };

    PostPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/post-page/post-page.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/posts/post-page/post-page.module.ts ***!
    \***********************************************************/

  /*! exports provided: PostPagePageModule */

  /***/
  function srcAppPagesPostsPostPagePostPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPagePageModule", function () {
      return PostPagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _post_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-page.page */
    "./src/app/pages/posts/post-page/post-page.page.ts");
    /* harmony import */


    var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./post-page-routing.module */
    "./src/app/pages/posts/post-page/post-page-routing.module.ts");
    /* harmony import */


    var src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modals/reply-comment/reply-comment.module */
    "./src/app/modals/reply-comment/reply-comment.module.ts");
    /* harmony import */


    var src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modals/report-comment/report-comment.module */
    "./src/app/modals/report-comment/report-comment.module.ts");
    /* harmony import */


    var src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modals/edit-comment/edit-comment.module */
    "./src/app/modals/edit-comment/edit-comment.module.ts");
    /* harmony import */


    var src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/modals/edit-post/edit-post.module */
    "./src/app/modals/edit-post/edit-post.module.ts");
    /* harmony import */


    var src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/modals/replies-page/replies-page.module */
    "./src/app/modals/replies-page/replies-page.module.ts");

    var PostPagePageModule = function PostPagePageModule() {
      _classCallCheck(this, PostPagePageModule);
    };

    PostPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostPagePageRoutingModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentPageModule"], src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__["ReportCommentPageModule"], src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__["EditCommentPageModule"], src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_11__["EditPostPageModule"], src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_12__["RepliesPagePageModule"]],
      declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_6__["PostPagePage"]]
    })], PostPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/post-page/post-page.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/posts/post-page/post-page.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPostsPostPagePostPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post {\n  padding: 20px 0px 20px 0px;\n  margin-bottom: 20px;\n  background: #edf3f8;\n  border-radius: 5px;\n}\n\n.post-mobile {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 90px;\n  background: white;\n  box-shadow: none;\n}\n\n.post-mobile:hover {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 120px;\n  background: white;\n  box-shadow: 1px 1px 3px #999;\n  border-radius: 5px;\n}\n\n.profile-picture {\n  border-radius: 100px;\n  border: 2px solid white;\n  height: 50px;\n  width: 50px;\n}\n\n@media only screen and (max-width: 576px) {\n  .profile-picture {\n    height: 40px;\n    width: 40px;\n  }\n}\n\n.post-content {\n  font-size: 1.3em;\n  line-height: 35px;\n  text-align: justify;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment-post-button {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88);\n  --transition: 0.5s;\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  height: 50px;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.unfollow-button {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment {\n  background: white;\n  height: auto;\n  opacity: 0;\n  margin: 30px 0 60px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.comment:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.follow-button {\n  width: 100px;\n  height: 36px;\n  opacity: 0;\n  --background: none;\n  --color: #24d8a8;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: linear-gradient(#797, #799);\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  font-weight: 800;\n  width: 100px;\n}\n\n.delete-button {\n  --color: white;\n  --background: linear-gradient(#FF443B, rgb(206, 48, 40));\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.reply {\n  width: 60px;\n  --border-width: 1px;\n  --border-color: #005191;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #005191;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.report {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #888;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #888;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.edit {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #faa71b;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #faa71b;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.delete {\n  width: 60px;\n  --background: #faa71b;\n  border-radius: 5px;\n  --color: white;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.follow {\n  --border-width: 1px;\n  width: 80px;\n  --border-color: linear-gradient(#24d8a8, #1baf88);\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #24d8a8;\n  --background: none;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  --background: none;\n}\n\n.toolbar {\n  --background: #005191;\n}\n\nion-item {\n  --background: none;\n}\n\nion-fab {\n  opacity: 0;\n  padding-right: 2%;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #222;\n  font-size: 1.2em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-wrapper {\n  position: relative;\n  top: 10px;\n  margin-bottom: 5px;\n}\n\n.reply-text {\n  color: #222;\n  font-size: 1em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-link {\n  color: #005191;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n}\n\n.comment-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  width: 100%;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: linear;\n}\n\n.comment-input:hover {\n  background: rgba(250, 167, 27, 0.02);\n  height: auto;\n  margin: 20px 0 25px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:focus {\n  background: rgba(250, 167, 27, 0.04);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#replies-link {\n  color: #005191;\n  font-weight: 500;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQ0RGOztBREtBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrR0FBQTtVQUFBLDBGQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1FQUFBO0FDSEY7O0FETUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDRixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLHdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURLRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0RBQUE7VUFBQSw4Q0FBQTtBQ0FGOztBREVFO0VBQ0Usd0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUk7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQ0ZGO0VESUE7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUNGRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUNGRjtFRElBO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUNIRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ0ZGO0VESUE7SUFDRSwwQkFBQTtJQUNFLFVBQUE7RUNGSjtBQUNGOztBRE5BO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNGRjtFRElBO0lBQ0UsMEJBQUE7SUFDRSxVQUFBO0VDRko7QUFDRjs7QURLQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VDSEY7RURLQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ0hGO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ0hGO0VES0E7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUNKRjtFRE1BO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDSkY7QUFDRjs7QURKQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VDSkY7RURNQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0LXBhZ2UvcG9zdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBvc3QtbW9iaWxlIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wb3N0LW1vYmlsZTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2ZpbGUtcGljdHVyZSAge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG4ucG9zdC1jb250ZW50e1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7XG4gIC0tdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbi8vIENoYW5nZSBjb2xvclxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZTk5YjE0KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50e1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3N0LWJ1dHRvbi1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4uY29tbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6ICMyNGQ4YTg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IGxpbmVhci1ncmFkaWVudCgjNzk3LCAjNzk5KTtcbiAgYW5pbWF0aW9uOiBwb3N0LWJ1dHRvbi1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZGVsZXRlLWJ1dHRvbntcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGRjQ0M0IsIHJnYigyMDYsIDQ4LCA0MCkpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVwdm90ZXtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuLmRvd252b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIC0tZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5yZXBseXtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJlcG9ydHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjODg4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmVkaXR7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogI2ZhYTcxYjtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5kZWxldGV7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb2xsb3cge1xuLS1ib3JkZXItd2lkdGg6IDFweDtcbndpZHRoOiA4MHB4O1xuLS1ib3JkZXItY29sb3I6IGxpbmVhci1ncmFkaWVudCgjMjRkOGE4LCAjMWJhZjg4KTs7XG4tLWJvcmRlci1zdHlsZTogc29saWQ7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG4tLWNvbG9yOiAjMjRkOGE4O1xuLS1iYWNrZ3JvdW5kOiBub25lO1xuZm9udC1zaXplOiAwLjZlbTtcbm1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWZhYiB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBhbmltYXRpb246IGZhYi1zbGlkZS11cCAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xuXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQjM1MTtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbn1cblxuLnBvc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjgpO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4uaGVhZGVyLWF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jb21tZW50LWZvcm17XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG5cbi5jb21tZW50LXRleHQge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAwcHggMCAyMHB4IDA7XG59XG5cbi5yZXBseS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnJlcGx5LXRleHQge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMHB4IDAgMjBweCAwO1xufVxuXG4ucmVwbHktbGluayB7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4uY29tbWVudC1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wMik7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMjVweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wNCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4jcmVwbHktZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4jcmVwbGllcy1saW5rIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBzZW5kLWljb24tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcG9zdC1idXR0b24tc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb21tZW50LXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLnBvc3Qge1xuICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucG9zdC1tb2JpbGUge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBvc3QtbW9iaWxlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG4ucG9zdC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBhbmltYXRpb246IHBvc3QtYnV0dG9uLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4udW5mb2xsb3ctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIsICNlOTliMTQpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbW1lbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHBvc3QtYnV0dG9uLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5jb21tZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6ICMyNGQ4YTg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IGxpbmVhci1ncmFkaWVudCgjNzk3LCAjNzk5KTtcbiAgYW5pbWF0aW9uOiBwb3N0LWJ1dHRvbi1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkY0NDNCLCByZ2IoMjA2LCA0OCwgNDApKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi51cHZvdGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cbi51cHZvdGUgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uZG93bnZvdGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cbi5kb3dudm90ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnJlcGx5IHtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmVwb3J0IHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjODg4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZWRpdCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogI2ZhYTcxYjtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvbGxvdyB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA4MHB4O1xuICAtLWJvcmRlci1jb2xvcjogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzI0ZDhhODtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1mYWIge1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgYW5pbWF0aW9uOiBmYWItc2xpZGUtdXAgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmlvbi1mYWIgaW9uLWZhYi1idXR0b24ge1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbkBrZXlmcmFtZXMgZmFiLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxufVxuLnBvc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjgpO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4uaGVhZGVyLWF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jb21tZW50LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uY29tbWVudC10ZXh0IHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMHB4IDAgMjBweCAwO1xufVxuXG4ucmVwbHktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZXBseS10ZXh0IHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDBweCAwIDIwcHggMDtcbn1cblxuLnJlcGx5LWxpbmsge1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLmNvbW1lbnQtYXZhdGFyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxNjcsIDI3LCAwLjAyKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyNXB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxNjcsIDI3LCAwLjA0KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI3JlcGx5LWRhdGUge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuI3JlcGxpZXMtbGluayB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc2VuZC1pY29uLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9zdC1idXR0b24tc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29tbWVudC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/posts/post-page/post-page.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/post-page/post-page.page.ts ***!
    \*********************************************************/

  /*! exports provided: PostPagePage */

  /***/
  function srcAppPagesPostsPostPagePostPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPagePage", function () {
      return PostPagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modals/reply-comment/reply-comment.page */
    "./src/app/modals/reply-comment/reply-comment.page.ts");
    /* harmony import */


    var src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modals/report-comment/report-comment.page */
    "./src/app/modals/report-comment/report-comment.page.ts");
    /* harmony import */


    var src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modals/edit-comment/edit-comment.page */
    "./src/app/modals/edit-comment/edit-comment.page.ts");
    /* harmony import */


    var src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/modals/edit-post/edit-post.page */
    "./src/app/modals/edit-post/edit-post.page.ts");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");
    /* harmony import */


    var src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/modals/replies-page/replies-page.page */
    "./src/app/modals/replies-page/replies-page.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // tslint:disable-next-line: max-line-length


    var PostPagePage = /*#__PURE__*/function () {
      function PostPagePage(activatedRoute, postEmitterService, router, posts, profile, formBuilder, toast, modal, alert, loading, location) {
        _classCallCheck(this, PostPagePage);

        this.activatedRoute = activatedRoute;
        this.postEmitterService = postEmitterService;
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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.location.onPopState(function () {
            _this3.postEmitterService.onBackAction();
          }); // Get Post ID from navigation params on the main posts tab

          var id = this.activatedRoute.snapshot.paramMap.get('_id');
          this.postID = id; // Get the user's information to insert into the comment metadata

          this.getPostInfo();

          if (this.postEmitterService.subsVar == undefined) {
            // For Comment and Reply Refreshes
            this.postEmitterService.subsVar = this.postEmitterService.invokePostsPageRefresh.subscribe(function () {
              _this3.getPostInfo();

              console.log('Refreshing Post-Page-Page');
            });
          } // To collect comment data


          this.commentForm = this.formBuilder.group({
            comment: ['']
          });
          this.commentForm.controls.comment.valueChanges.subscribe(function (data) {
            if (data === '') {
              console.log('Value is empty');

              _this3.commentForm.markAsPristine();
            }

            console.log(_this3.commentForm);
          }); // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.

          this.posts.commentsSubject$.subscribe(function (commentsFromSub) {
            _this3.comments = commentsFromSub;
          });
          this.posts.postsSubject$.subscribe(function (posts) {
            var currentPost;

            var _iterator3 = _createForOfIteratorHelper(posts),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var post = _step3.value;

                if (post._id == _this3.postID) {
                  currentPost = post;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _this3.post = currentPost.post;
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return console.log('Following Post');

                  case 2:
                    _context9.next = 4;
                    return console.log(postID);

                  case 4:
                    _context9.next = 6;
                    return this.posts.followPost(postID, this.userEmail);

                  case 6:
                    this.following = true;
                    _context9.next = 9;
                    return this.followToast();

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "followToast",
        value: function followToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var followToast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toast.create({
                      cssClass: 'followed-toast',
                      message: 'You are FOLLOWING this post',
                      duration: 2000
                    });

                  case 2:
                    followToast = _context10.sent;
                    _context10.next = 5;
                    return this.refreshAfterDelete();

                  case 5:
                    _context10.next = 7;
                    return followToast.present();

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "unFollow",
        value: function unFollow(postID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return console.log('Unfollowing Post');

                  case 2:
                    _context11.next = 4;
                    return console.log(postID);

                  case 4:
                    _context11.next = 6;
                    return this.posts.unFollowPost(postID, this.userEmail);

                  case 6:
                    this.following = false;
                    _context11.next = 9;
                    return this.unFollowToast();

                  case 9:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "unFollowToast",
        value: function unFollowToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var unFollowToast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toast.create({
                      cssClass: 'unfollowed-toast',
                      message: 'You are UNFOLLOWING this post',
                      duration: 2000
                    });

                  case 2:
                    unFollowToast = _context12.sent;
                    _context12.next = 5;
                    return this.refreshAfterDelete();

                  case 5:
                    _context12.next = 7;
                    return unFollowToast.present();

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
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
          var _this4 = this;

          this.textarea.getInputElement().then(function (textarea) {
            _this4.tabBar.style.height = '70px';
          });
        } // for when the user un focuses out of the comment textarea but hasnt submitted the comment

      }, {
        key: "blur",
        value: function blur() {
          var _this5 = this;

          this.textarea.getInputElement().then(function (textarea) {
            textarea.blur();
            _this5.tabBar.style.height = '70px';
          });
        }
      }, {
        key: "comment",
        value: function comment(_comment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var toast;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    // Reset Comment Input
                    this.commentForm.reset();
                    this.commentLoading(_comment);
                    toast = this.toast.create({
                      message: 'Your comment has been added.',
                      duration: 1500
                    });
                    toast.then(function (toast) {
                      return toast.present();
                    });

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "commentLoading",
        value: function commentLoading(comment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this6 = this;

            var date, loading, _yield$loading$onDidD4, role, data;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return Date.now();

                  case 2:
                    date = _context14.sent;
                    _context14.next = 5;
                    return this.posts.comment(this.postID, date, this.userFullName, this.userEmail, comment).subscribe(function (data) {
                      _this6.posts.getPostInfo(_this6.postID).subscribe(function (post) {
                        var _iterator4 = _createForOfIteratorHelper(post['comments']),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var postComments = _step4.value;
                            postComments.isUser = false;
                            postComments.canDeleteComment = false;
                            postComments.canReport = true; // If this comment is from the logged in user, they can delete and edit

                            if (postComments.userEmail === _this6.userEmail) {
                              postComments.isUser = true;
                              postComments.canDeleteComment = true;
                              postComments.canReport = false;
                            }

                            postComments.repliesLength = postComments.replies.length;
                            postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postComments.date), {
                              includeSeconds: true,
                              addSuffix: false
                            });
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }

                        _this6.posts.commentsSubject$.next(post['comments'].reverse());
                      });
                    });

                  case 5:
                    _context14.next = 7;
                    return this.loading.create({
                      message: 'Adding Comment...',
                      duration: 1000
                    });

                  case 7:
                    loading = _context14.sent;
                    _context14.next = 10;
                    return this.refreshAfterComment();

                  case 10:
                    _context14.next = 12;
                    return loading.present();

                  case 12:
                    _context14.next = 14;
                    return loading.onDidDismiss();

                  case 14:
                    _yield$loading$onDidD4 = _context14.sent;
                    role = _yield$loading$onDidD4.role;
                    data = _yield$loading$onDidD4.data;

                  case 17:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "report",
        value: function report(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return console.log('Attemping to report comment');

                  case 2:
                    _context15.next = 4;
                    return this.reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, this.userEmail, this.userFullName);

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "reportModal",
        value: function reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, userEmail, userFullName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var reportModalConfig;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.modal.create({
                      component: src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_9__["ReportCommentPage"],
                      componentProps: {
                        commentID: commentID,
                        commentCotents: commentCotents,
                        commentUserFullName: commentUserFullName,
                        commentUserEmail: commentUserEmail,
                        commentDate: commentDate,
                        userEmail: userEmail,
                        userFullName: userFullName,
                        post: post,
                        postID: postID
                      }
                    });

                  case 2:
                    reportModalConfig = _context16.sent;
                    _context16.next = 5;
                    return reportModalConfig.present();

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "reply",
        value: function reply(commentID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return console.log('Attemping to reply to comment');

                  case 2:
                    _context17.next = 4;
                    return this.replyModal(commentID, this.postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail);

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "replyModal",
        value: function replyModal(commentID, postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var replyModalConfig;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.modal.create({
                      component: src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentPage"],
                      componentProps: {
                        commentID: commentID,
                        postID: postID,
                        userFullName: userFullName,
                        userProfilePicture: userProfilePicture,
                        userEmail: userEmail,
                        commentUserEmail: commentUserEmail,
                        commentUserFullName: commentUserFullName
                      }
                    });

                  case 2:
                    replyModalConfig = _context18.sent;
                    _context18.next = 5;
                    return replyModalConfig.present();

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "repliesModal",
        value: function repliesModal(postID, replies, comment, commentID, commentUserFullName, commentUserEmail, commentDate, userProfilePicture, userFullName, userEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var repliesPageModalConfig;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.modal.create({
                      component: src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_13__["RepliesPagePage"],
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
                      }
                    });

                  case 2:
                    repliesPageModalConfig = _context19.sent;
                    _context19.next = 5;
                    return repliesPageModalConfig.present();

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "editComment",
        value: function editComment(commentID, commentCotents, postID, userEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return console.log(commentID);

                  case 2:
                    _context20.next = 4;
                    return console.log('Attemping to edit comment');

                  case 4:
                    _context20.next = 6;
                    return this.editCommentModal(commentID, commentCotents, postID, userEmail);

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "editCommentModal",
        value: function editCommentModal(commentID, commentCotents, postID, userEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var editAlertConfig;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.modal.create({
                      component: src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_10__["EditCommentPage"],
                      componentProps: {
                        commentID: commentID,
                        commentCotents: commentCotents,
                        postID: postID,
                        userEmail: userEmail
                      }
                    });

                  case 2:
                    editAlertConfig = _context21.sent;
                    _context21.next = 5;
                    return editAlertConfig.present();

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "editPost",
        value: function editPost(postID, post) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return console.log('Attemping to edit comment');

                  case 2:
                    _context22.next = 4;
                    return this.editPostModal(postID, post);

                  case 4:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "editPostModal",
        value: function editPostModal(postID, post) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var editPostModalConfig;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.modal.create({
                      component: src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_11__["EditPostPage"],
                      componentProps: {
                        postID: postID,
                        post: post
                      }
                    });

                  case 2:
                    editPostModalConfig = _context23.sent;
                    _context23.next = 5;
                    return editPostModalConfig.present();

                  case 5:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(commentID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    console.log('deleting comment..');
                    console.log(this.postID);
                    console.log(commentID);
                    this.deleteCommentAlert(this.postID, commentID);

                  case 4:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "deleteCommentAlert",
        value: function deleteCommentAlert(postID, commentID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
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
                          _this7.deleteCommentLoading(_this7.postID, commentID)["catch"](function (err) {
                            console.log(err);
                          });
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
        key: "deleteCommentLoading",
        value: function deleteCommentLoading(postID, commentID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this8 = this;

            var loading, _yield$loading$onDidD5, role, data;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.posts.deleteComment(this.postID, commentID).subscribe(function (values) {
                      var comments = values['comments'];

                      var _iterator5 = _createForOfIteratorHelper(comments),
                          _step5;

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          var comment = _step5.value;
                          // If the Logged in User's Email equals the creatorEmail of the Comment,
                          // they will be given the ability to edit and delete their Comment.
                          // The ability for them to report their own comment is disabled
                          comment.repliesLength = comment.replies.length;
                          comment.isUser = false;
                          comment.canDeleteComment = false;
                          comment.canReport = true;
                          comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
                            includeSeconds: false,
                            addSuffix: false
                          }); // If this comment is the logged in user, they can delete and edit

                          if (comment.userEmail === _this8.userEmail) {
                            console.log('true');
                            comment.isUser = true;
                            comment.canDeleteComment = true;
                            comment.canReport = false;
                          }
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                      _this8.posts.commentsSubject$.next(comments.reverse());
                    });

                  case 2:
                    _context26.next = 4;
                    return this.loading.create({
                      message: 'Deleting Comment...',
                      duration: 2000
                    });

                  case 4:
                    loading = _context26.sent;
                    _context26.next = 7;
                    return loading.present();

                  case 7:
                    _context26.next = 9;
                    return loading.onDidDismiss();

                  case 9:
                    _yield$loading$onDidD5 = _context26.sent;
                    role = _yield$loading$onDidD5.role;
                    data = _yield$loading$onDidD5.data;
                    console.log('Loading dismissed!');

                  case 13:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "deletePost",
        value: function deletePost(postID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    console.log('deleting post..');
                    console.log(postID);
                    this.deletePostAlert(postID);

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "deletePostAlert",
        value: function deletePostAlert(postID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var _this9 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
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
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
                            return regeneratorRuntime.wrap(function _callee28$(_context28) {
                              while (1) {
                                switch (_context28.prev = _context28.next) {
                                  case 0:
                                    _context28.next = 2;
                                    return this.deletePostLoading(postID);

                                  case 2:
                                  case "end":
                                    return _context28.stop();
                                }
                              }
                            }, _callee28, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context29.sent;
                    _context29.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "deletePostLoading",
        value: function deletePostLoading(postID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var _this10 = this;

            var loading, _yield$loading$onDidD6, role, data;

            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    console.log(postID);
                    _context30.next = 3;
                    return this.posts.deletePost(postID).subscribe(function (remainingPosts) {
                      _this10.posts.postsSubject$.next(Object.values(remainingPosts).reverse());

                      console.log(_this10.posts.postsSubject$.getValue());
                    });

                  case 3:
                    this.postEmitterService.onBackAction();
                    _context30.next = 6;
                    return this.router.navigate(['/home/posts']);

                  case 6:
                    console.log('Loading dismissed!');
                    _context30.next = 9;
                    return this.loading.create({
                      message: 'Deleting Comment...',
                      duration: 2000
                    });

                  case 9:
                    loading = _context30.sent;
                    _context30.next = 12;
                    return loading.present();

                  case 12:
                    _context30.next = 14;
                    return loading.onDidDismiss();

                  case 14:
                    _yield$loading$onDidD6 = _context30.sent;
                    role = _yield$loading$onDidD6.role;
                    data = _yield$loading$onDidD6.data;

                  case 17:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "getPostInfo",
        value: function getPostInfo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return this.profile.getUserDetails().subscribe(function (details) {
                      var userEmail = details['email'];
                      _this11.userEmail = userEmail;
                      var userFullName = details['fullName'];
                      var userProfilePicture = details['profilePicture']; // Get information about selected post.
                      // Format its date on the front end
                      // initiate this components post metadata from data in Posts Service

                      _this11.posts.getPostInfo(_this11.postID).subscribe(function (postInfo) {
                        var creatorEmail = postInfo['creatorEmail'];
                        var creatorName = postInfo['creatorName'];
                        var post = postInfo['post'];
                        var followers = postInfo['followers'];
                        var comments = postInfo['comments'];
                        var following = false;
                        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postInfo['date']), {
                          includeSeconds: true,
                          addSuffix: false
                        }); // Check if the post creator is the same as the User
                        // Enables the user to delete and edit post if true

                        if (creatorEmail === _this11.userEmail) {
                          _this11.isUser = true;
                        } // See if the Logged in User is following the post on this page


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
                            comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If this comment is the logged in user, they can delete and edit

                            if (comment.userEmail === _this11.userEmail) {
                              comment.isUser = true;
                              comment.canDeleteComment = true;
                              comment.canReport = false;
                            } // Format the Reply Dates


                            for (var i = 0; comment.replies.length > i; i++) {
                              comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                                addSuffix: false
                              });
                            }
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
                        _this11.comments = comments.reverse();
                        _this11.following = following;
                        _this11.post = post;
                        _this11.userProfilePicture = userProfilePicture;
                        _this11.userFullName = userFullName;
                      });
                    });

                  case 2:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    this.profile.getUserDetails().subscribe(function (details) {
                      var userEmail = details['email'];
                      _this12.userEmail = userEmail;
                      var userFullName = details['fullName'];
                      var userProfilePicture = details['profilePicture']; // Get information about selected post.
                      // Format its date on the front end
                      // initiate this components post metadata from data in Posts Service

                      _this12.posts.getPostInfo(_this12.postID).subscribe(function (postInfo) {
                        var creatorEmail = postInfo['creatorEmail'];
                        var creatorName = postInfo['creatorName'];
                        var post = postInfo['post'];
                        var followers = postInfo['followers'];
                        var comments = postInfo['comments'];
                        var following = false;
                        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postInfo['date']), {
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


                        var _iterator7 = _createForOfIteratorHelper(comments),
                            _step7;

                        try {
                          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                            var comment = _step7.value;
                            // If the Logged in User's Email equals the creatorEmail of the Comment,
                            // they will be given the ability to edit and delete their Comment.
                            // The ability for them to report their own comment is disabled
                            comment.repliesLength = comment.replies.length;
                            comment.isUser = false;
                            comment.canDeleteComment = false;
                            comment.canReport = true;
                            comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
                              includeSeconds: true,
                              addSuffix: false
                            }); // If this comment is the logged in user, they can delete and edit

                            if (comment.userEmail === _this12.userEmail) {
                              comment.isUser = true;
                              comment.canDeleteComment = true;
                              comment.canReport = false;
                            } // Format the Reply Dates


                            for (var i = 0; comment.replies.length > i; i++) {
                              comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                                addSuffix: false
                              });
                            }
                          }
                        } catch (err) {
                          _iterator7.e(err);
                        } finally {
                          _iterator7.f();
                        }

                        _this12.creatorName = creatorName;
                        _this12.creatorEmail = creatorEmail;
                        _this12.date = date;
                        _this12.followers = followers;
                        _this12.comments = comments;
                        _this12.following = following;
                        _this12.post = post;
                        _this12.userProfilePicture = userProfilePicture;
                        _this12.userFullName = userFullName;

                        _this12.posts.commentsSubject$.next(comments.reverse());
                      });
                    });
                    ;
                    _context32.next = 4;
                    return setTimeout(function () {
                      var toast = _this12.toast.create({
                        message: 'Page has been refreshed',
                        duration: 3000
                      });

                      event.target.complete();
                      toast.then(function (toast) {
                        return toast.present();
                      });
                    }, 2000);

                  case 4:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }]);

      return PostPagePage;
    }();

    PostPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__["PostPageEmitterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["PlatformLocation"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], PostPagePage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"])], PostPagePage.prototype, "textarea", void 0);
    PostPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-page.page.scss */
      "./src/app/pages/posts/post-page/post-page.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__["PostPageEmitterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["PlatformLocation"]])], PostPagePage);
    /***/
  }
}]);
//# sourceMappingURL=post-page-post-page-module-es5.js.map