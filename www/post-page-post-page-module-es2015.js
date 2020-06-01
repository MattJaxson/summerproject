(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editCommentForm\" (ngSubmit)=\"edit(this.editCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"edit(this.editCommentForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newComment\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancel()\">\n          cancel\n        </ion-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <ion-col size=\"10\">\n        <p id=\"userfullname\"></p>\n        <form [formGroup]=\"replyCommentForm\" (ngSubmit)=\"reply(this.replyCommentForm.value)\">\n          <ion-textarea\n            (keyup.enter)=\"reply(this.replyCommentForm.value)\"\n            class=\"reply-input\"\n            autogrow=\"true\"\n            autocapitalize=\"true\"\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            type=\"text\"\n            placeholder=\"Replying to: {{userFullName}}\" formControlName=\"reply\">\n          </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Reply\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <p id=\"comment\">Comment: {{commentContents}}</p>\n      <p id=\"userfullname\">User being Reported: {{commentUserFullName}}</p>\n      <p id=\"useremail\">User being Reported Email: {{commentUserEmail}}</p>\n      <p id=\"date\">Posted: {{commentDate}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"reportCommentForm\" (ngSubmit)=\"report(this.reportCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"report(this.reportCommentForm.value)\"\n          class=\"report-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"8\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          placeholder=\"Why are you reporting this post?\" formControlName=\"reportedReason\">\n        </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Report\n            </ion-button>\n          </div>\n      </form>\n    </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <div slot=\"end\">\n        <ion-title >{{creatorName}}'s Post &middot; <span style=\"font-size: 0.5em;\">{{date}} ago</span></ion-title>\n      </div>\n      <div style=\"position: relative; right: 15px;\" slot=\"end\">\n        <img style=\"position: relative; right: 5px; display: inline-block;\" slot=\"end\" class=\"profile-picture\" src=\"../../../../assets/aaron.jpg\">\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n   <!-- fab placed to the bottom end; Going back to the top of the page on the mobile view. -->\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button (click)=\"fabScrollTop()\">\n            <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\n          </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n\n    <ion-row class=\"post ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"12\">\n\n        <ion-row class=\"ion-justify-content-center\">\n\n          <!-- Profile Header -->\n          <!-- Only on Desktop -->\n          <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n            <ion-row>\n\n            <!-- Profile Picture -->\n            <ion-col class=\"ion-hide-md-down\" size=\"1\">\n              <img class=\"profile-picture\" src=\"../../../../assets/aaron.jpg\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col class=\"ion-hide-md-down\" size=\"5\">\n              <h6 style=\"font-size: 1em; font-weight: 500; opacity: 0.4;\">{{creatorName}} - <span style=\"font-size: 0.5em;\">{{date}}  ago</span></h6>\n            </ion-col>\n\n            <!-- Back button-->\n            <ion-col class=\"ion-hide-md-down\" push=\"5\" size=\"1\">\n              <ion-button class=\"back-button ion-float-right\" (click)=\"back()\">\n                Back\n              </ion-button>\n            </ion-col>\n\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Content -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- 1080x1350 -->\n              <ion-col size-xs=\"11\" size-sm=\"12\" size-md=\"12\" size-lg=\"8\">\n               <p class=\"post-content\">{{post}}</p>\n              </ion-col>\n           </ion-row>\n          </ion-col>\n\n          <!-- Line -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"11\" size-lg=\"8\">\n                <hr style=\"background-color: #999; opacity: 0.4; margin: 20px 0 20px 0;\">\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Comment Input -->\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"8\">\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\">\n                 <form (ngSubmit)=\"comment(this.commentForm.value, this.postID)\" [formGroup]=\"commentForm\">\n                    <ion-textarea\n                      (ionFocus)=\"ScrollToTop()\"\n                      (ionBlur)=\"onBlur()\"\n                      (onfocusout)=\"blur()\"\n                      (keyup.enter)=\"comment(this.commentForm.value, this.postID) && ScrollToPostedComment()\"\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\n                    </ion-textarea>\n                    <ion-button\n                      style=\"float: right;\"\n                      class=\"comment-post-button\"\n                      type=\"submit\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\">Post\n                      </ion-button>\n                 </form>\n                </ion-item>\n\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Upvote and Downvote Post -->\n          <ion-col id=\"votes\" size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"8\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <app-up-down-vote-buttons [postID]=\"postID\"></app-up-down-vote-buttons>\n            </ion-col>\n            <ion-col class=\"\" size=\"7\">\n              <ion-button *ngIf=\"this.isUser === true\" (click)=\"deleteComment(this.postID)\"  class=\"delete ion-float-right\">\n                Delete\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === true\" (click)=\"editComment  (this.postID)\"\n                class=\"edit ion-float-right\"\n                style=\"--background: none;\">\n                Edit\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && !following\" (click)=\"follow(this.postID)\"\n                class=\"follow ion-float-right\">\n                Follow\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && following\" (click)=\"unFollow(this.postID)\"\n                class=\"delete ion-float-right\"\n                style=\"width: 80px\">\n                Unfollow\n              </ion-button>\n            </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Comments -->\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- If No Comments -->\n      <ion-col class=\"ion-text-center\" style=\"margin: 100px 0;\" *ngIf=\"comments.length === 0\" size=\"10\">\n      <p style=\"color: #888;\">This post has no comments</p>\n      </ion-col>\n\n      <ion-col *ngIf=\"comments.length > 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <p style=\"color: #888; margin: 60px 0\">Comments - {{comments.length}}</p>\n      </ion-col>\n\n        <!-- Comment Wrapper -->\n        <ion-col *ngFor=\"let comment of comments\" class=\"comment\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n\n          <!-- Comment Header -->\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\n                  <img src=\"../../../../assets/aaron.jpg\">\n                </ion-avatar>\n                <ion-label>\n                  <h6 style=\"opacity: 0.5\">{{ comment.userFullName  }} - {{ comment.date }} </h6>\n                  </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n                <p class=\"comment-text ion-text-wrap\" style=\"margin-top: 40px;\">  {{comment.comment}}\n                </p>\n            </ion-col>\n          </ion-row>\n\n          <!-- Line -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <hr style=\"background-color: #999; opacity: 0.4; margin: 20px 0 0 0;\">\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Replies -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <p\n              (click)=\"repliesModal(\n                this.postID,\n                comment.replies,\n                comment.comment,\n                comment._id,\n                comment.userFullName,\n                comment.userEmail,\n                comment.date,\n                comment.userProfilePicture,\n                this.userFullName,\n                this.userEmail)\"\n              *ngIf=\"comment.repliesLength >= 1\" id=\"replies-link\">Replies - {{comment.repliesLength}}</p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Comment Buttons -->\n          <ion-row style=\"margin-top: 20px;\">\n            <!-- Upvote & Downvote Comments-->\n            <ion-col size=\"4\">\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button class=\"upvote\" (click)=\"upVoteComment(comment)\">\n                      <ion-icon size=\"large\" src=\"../../../assets/icon/caret-up-outline.svg\"></ion-icon>\n                      0\n                    </ion-button>\n                    <ion-button class=\"downvote\" (click)=\"downVoteComment()\">\n                      <ion-icon size=\"large\" src=\"../../../assets/icon/caret-down-outline.svg\"></ion-icon>\n                      0\n                    </ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <!-- Report, Edit & Reply -->\n            <ion-col push=\"1\" size=\"6\">\n              <ion-toolbar>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"reply(comment._id, this.userFullName, this.userEmail, this.userProfilePicture,comment.userFullName, comment.userEmail)\" class=\"reply ion-float-right\">\n                    Reply\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canReport === true\" (click)=\"report(comment._id, comment.comment, this.post, this.postID, comment.userFullName, comment.userEmail, comment.date, this.userEmail, this.userFullName)\"  class=\"report ion-float-right\">\n                    Report\n                  </ion-button>\n                  <ion-button\n                    *ngIf=\"comment.isUser === true\" (click)=\"editComment(comment._id,this.postID, comment.comment)\"\n                    class=\"edit ion-float-right\">\n                    Edit\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canDeleteComment === true\" (click)=\"deleteComment(comment._id)\"  class=\"delete ion-float-right\">\n                    Delete\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modals/edit-comment/edit-comment-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EditCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentPageRoutingModule", function() { return EditCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-comment.page */ "./src/app/modals/edit-comment/edit-comment.page.ts");




const routes = [
    {
        path: '',
        component: _edit_comment_page__WEBPACK_IMPORTED_MODULE_3__["EditCommentPage"]
    }
];
let EditCommentPageRoutingModule = class EditCommentPageRoutingModule {
};
EditCommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditCommentPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/edit-comment/edit-comment.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.module.ts ***!
  \************************************************************/
/*! exports provided: EditCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentPageModule", function() { return EditCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-comment-routing.module */ "./src/app/modals/edit-comment/edit-comment-routing.module.ts");
/* harmony import */ var _edit_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-comment.page */ "./src/app/modals/edit-comment/edit-comment.page.ts");







let EditCommentPageModule = class EditCommentPageModule {
};
EditCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

/***/ "./src/app/modals/edit-comment/edit-comment.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL2VkaXQtY29tbWVudC9lZGl0LWNvbW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvZWRpdC1jb21tZW50L2VkaXQtY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lZGl0LWNvbW1lbnQvZWRpdC1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSIsIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modals/edit-comment/edit-comment.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.page.ts ***!
  \**********************************************************/
/*! exports provided: EditCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommentPage", function() { return EditCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "./src/app/emitters/post-page-emitter.service.ts");






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
        this.postID = this.navParams.get('postID');
        this.commentContents = this.navParams.get('commentCotents');
        // To collect comment data
        this.editCommentForm = this.formBuilder.group({
            newComment: this.commentContents
        });
        console.log(this.commentID);
        console.log(this.postID);
    }
    cancel() {
        console.log('cancelling');
        this.modal.dismiss();
    }
    refreshComment() {
        this.postEmitterService.postPageRefresh();
    }
    edit(newComment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('editting');
            yield this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe();
            yield this.editLoading();
            yield this.refreshComment();
        });
    }
    editLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"] }
];
EditCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-comment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-comment.page.scss */ "./src/app/modals/edit-comment/edit-comment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"]])
], EditCommentPage);



/***/ }),

/***/ "./src/app/modals/reply-comment/reply-comment-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReplyCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentPageRoutingModule", function() { return ReplyCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reply-comment.page */ "./src/app/modals/reply-comment/reply-comment.page.ts");




const routes = [
    {
        path: '',
        component: _reply_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReplyCommentPage"]
    }
];
let ReplyCommentPageRoutingModule = class ReplyCommentPageRoutingModule {
};
ReplyCommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReplyCommentPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/reply-comment/reply-comment.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.module.ts ***!
  \**************************************************************/
/*! exports provided: ReplyCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentPageModule", function() { return ReplyCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reply-comment-routing.module */ "./src/app/modals/reply-comment/reply-comment-routing.module.ts");
/* harmony import */ var _reply_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reply-comment.page */ "./src/app/modals/reply-comment/reply-comment.page.ts");







let ReplyCommentPageModule = class ReplyCommentPageModule {
};
ReplyCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

/***/ "./src/app/modals/reply-comment/reply-comment.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: white;\n}\n\n.reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.reply-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL3JlcGx5LWNvbW1lbnQvcmVwbHktY29tbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9yZXBseS1jb21tZW50L3JlcGx5LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvcmVwbHktY29tbWVudC9yZXBseS1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVwbHktaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLnJlcGx5LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI3VzZXJmdWxsbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59IiwiaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXBseS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLnJlcGx5LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI3VzZXJmdWxsbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modals/reply-comment/reply-comment.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.page.ts ***!
  \************************************************************/
/*! exports provided: ReplyCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentPage", function() { return ReplyCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "./src/app/emitters/post-page-emitter.service.ts");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");







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
    }
    reply(reply) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                    console.log('false');
                    comment.repliesLength = comment.replies.length;
                    comment.isUser = false;
                    comment.canDeleteComment = false;
                    comment.canReport = true;
                    comment.date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(comment.date), {
                        includeSeconds: false,
                        addSuffix: false
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === userEmail) {
                        console.log('true');
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                    // Format the Reply Dates
                    for (let i = 0; comment.replies.length > i; i++) {
                        comment.replies[i].date = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                    }
                }
                this.posts.commentsSubject$.next(comments);
            });
            yield this.replyLoading();
        });
    }
    replyLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Replying to Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            // await this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been edited.',
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
ReplyCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"] }
];
ReplyCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reply-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reply-comment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reply-comment.page.scss */ "./src/app/modals/reply-comment/reply-comment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_5__["PostPageEmitterService"]])
], ReplyCommentPage);



/***/ }),

/***/ "./src/app/modals/report-comment/report-comment-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ReportCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCommentPageRoutingModule", function() { return ReportCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _report_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-comment.page */ "./src/app/modals/report-comment/report-comment.page.ts");




const routes = [
    {
        path: '',
        component: _report_comment_page__WEBPACK_IMPORTED_MODULE_3__["ReportCommentPage"]
    }
];
let ReportCommentPageRoutingModule = class ReportCommentPageRoutingModule {
};
ReportCommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportCommentPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/report-comment/report-comment.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.module.ts ***!
  \****************************************************************/
/*! exports provided: ReportCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCommentPageModule", function() { return ReportCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-comment-routing.module */ "./src/app/modals/report-comment/report-comment-routing.module.ts");
/* harmony import */ var _report_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-comment.page */ "./src/app/modals/report-comment/report-comment.page.ts");







let ReportCommentPageModule = class ReportCommentPageModule {
};
ReportCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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



/***/ }),

/***/ "./src/app/modals/report-comment/report-comment.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".report-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.report-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1.6em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL3JlcG9ydC1jb21tZW50L3JlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3JlcG9ydC1jb21tZW50L3JlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yZXBvcnQtY29tbWVudC9yZXBvcnQtY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5yZXBvcnQtaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSIsIi5yZXBvcnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5yZXBvcnQtaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modals/report-comment/report-comment.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.page.ts ***!
  \**************************************************************/
/*! exports provided: ReportCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCommentPage", function() { return ReportCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");





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
        this.commentContents = this.navParams.get('commentCotents');
        this.commentUserFullName = this.navParams.get('commentUserFullName');
        this.commentUserEmail = this.navParams.get('commentUserEmail');
        this.commentDate = this.navParams.get('commentDate');
        this.post = this.navParams.get('post');
        this.postID = this.navParams.get('postID');
    }
    report(reportReason) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('reporting comment...');
            yield this.reportLoading();
            // tslint:disable-next-line: max-line-length
            yield this.posts.reportComment(this.commentID, this.commentContents, this.post, this.postID, this.commentUserFullName, this.commentUserEmail, this.commentDate, this.userEmail, this.userFullName, reportReason.reportedReason)
                .subscribe();
        });
    }
    reportLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ReportCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-comment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-comment.page.scss */ "./src/app/modals/report-comment/report-comment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ReportCommentPage);



/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PostPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePageRoutingModule", function() { return PostPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-page.page */ "./src/app/pages/posts/post-page/post-page.page.ts");




const routes = [
    {
        path: '',
        component: _post_page_page__WEBPACK_IMPORTED_MODULE_3__["PostPagePage"]
    }
];
let PostPagePageRoutingModule = class PostPagePageRoutingModule {
};
PostPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.module.ts ***!
  \***********************************************************/
/*! exports provided: PostPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePageModule", function() { return PostPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-page.page */ "./src/app/pages/posts/post-page/post-page.page.ts");
/* harmony import */ var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-page-routing.module */ "./src/app/pages/posts/post-page/post-page-routing.module.ts");
/* harmony import */ var src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/reply-comment/reply-comment.module */ "./src/app/modals/reply-comment/reply-comment.module.ts");
/* harmony import */ var src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/report-comment/report-comment.module */ "./src/app/modals/report-comment/report-comment.module.ts");
/* harmony import */ var src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/edit-comment/edit-comment.module */ "./src/app/modals/edit-comment/edit-comment.module.ts");
/* harmony import */ var src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modals/replies-page/replies-page.module */ "./src/app/modals/replies-page/replies-page.module.ts");












let PostPagePageModule = class PostPagePageModule {
};
PostPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_11__["RepliesPagePageModule"]
        ],
        declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_6__["PostPagePage"]]
    })
], PostPagePageModule);



/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post {\n  padding: 20px 0px 20px 0px;\n  background: #f1f1f1;\n  margin-bottom: 20px;\n  background: #fbfbfb;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 576px) {\n  .profile-picture {\n    height: 40px;\n    width: 40px;\n  }\n}\n\n.post-mobile {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 90px;\n  background: white;\n  box-shadow: none;\n}\n\n.post-mobile:hover {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 120px;\n  background: white;\n  box-shadow: 1px 1px 3px #999;\n  border-radius: 5px;\n}\n\n.profile-picture {\n  border-radius: 100px;\n  height: 50px;\n  width: 50px;\n  position: relative;\n  left: 5px;\n  top: 4px;\n}\n\n@media only screen and (max-width: 576px) {\n  .profile-picture {\n    height: 40px;\n    width: 40px;\n  }\n}\n\n.post-content {\n  font-size: 1.2em;\n  line-height: 35px;\n  text-align: justify;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment-post-button {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.unfollow-button {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment {\n  background: white;\n  height: auto;\n  opacity: 0;\n  margin: 30px 0 60px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.comment:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.follow-button {\n  width: 100px;\n  height: 36px;\n  opacity: 0;\n  --background: none;\n  --color: #24d8a8;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: linear-gradient(#797, #799);\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  font-weight: 800;\n  width: 100px;\n}\n\n.delete-button {\n  --color: white;\n  --background: linear-gradient(#FF443B, rgb(206, 48, 40));\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.reply {\n  width: 60px;\n  --border-width: 1px;\n  --border-color: #005191;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #005191;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.report {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #888;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #888;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.edit {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #faa71b;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #faa71b;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.delete {\n  width: 60px;\n  --background: #faa71b;\n  border-radius: 5px;\n  --color: white;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\n.follow {\n  --border-width: 1px;\n  width: 80px;\n  --border-color: linear-gradient(#24d8a8, #1baf88);\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #24d8a8;\n  --background: none;\n  font-size: 0.6em;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  --background: none;\n}\n\n.toolbar {\n  --background: #005191;\n}\n\nion-item {\n  --background: none;\n}\n\nion-fab {\n  opacity: 0;\n  padding-right: 2%;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #222;\n  font-size: 1.2em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-wrapper {\n  position: relative;\n  top: 10px;\n  margin-bottom: 5px;\n}\n\n.reply-text {\n  color: #222;\n  font-size: 1em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-link {\n  color: #005191;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n}\n\n.comment-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  width: 100%;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n\n.comment-input:hover {\n  background: rgba(250, 167, 27, 0.02);\n  height: auto;\n  margin: 35px 0 65px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:focus {\n  background: rgba(250, 167, 27, 0.04);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#replies-link {\n  color: #005191;\n  font-weight: 500;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes post-button-slide-up {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes post-button-slide-up {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes comment-slide-up {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes comment-slide-up {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDRjs7QURHQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0dBQUE7VUFBQSwwRkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0hGOztBRE1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Ysa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSx3REFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURLRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FES0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURPQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBQTs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNBRjs7QURFRTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVJO0VBQ0EsY0FBQTtBQ0FKOztBREtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ0ZGO0VESUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0ZGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDRkY7RURJQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDSEY7O0FETUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNIRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDRkY7RURJQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDRSxVQUFBO0VDRko7QUFDRjs7QUROQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFVBQUE7RUNGRjtFRElBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNFLFVBQUE7RUNGSjtBQUNGOztBREtBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0hGO0VES0E7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ0hGO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDSEY7RURLQTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNKRjtFRE1BO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtJQUNBLFVBQUE7RUNKRjtBQUNGOztBREpBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0pGO0VETUE7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0LXBhZ2UvcG9zdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2ZpbGUtcGljdHVyZSAge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG4ucG9zdC1tb2JpbGUge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBvc3QtbW9iaWxlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNHB4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2ZpbGUtcGljdHVyZSAge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG4ucG9zdC1jb250ZW50e1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vLyBDaGFuZ2UgY29sb3Jcbi51bmZvbGxvdy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZhYTcxYiwgI2U5OWIxNCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29tbWVudHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuLmNvbW1lbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmZvbGxvdy1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWNvbG9yOiAjMjRkOGE4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc5NywgIzc5OSk7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRlbGV0ZS1idXR0b257XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkY0NDNCLCByZ2IoMjA2LCA0OCwgNDApKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4ucmVwbHl7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZXBvcnR7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5lZGl0e1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGVsZXRle1xuICB3aWR0aDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9sbG93IHtcbi0tYm9yZGVyLXdpZHRoOiAxcHg7XG53aWR0aDogODBweDtcbi0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7O1xuLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuLS1jb2xvcjogIzI0ZDhhODtcbi0tYmFja2dyb3VuZDogbm9uZTtcbmZvbnQtc2l6ZTogMC42ZW07XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1mYWIge1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgYW5pbWF0aW9uOiBmYWItc2xpZGUtdXAgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcblxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWItc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG59XG5cbi5wb3N0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC44KTtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29tbWVudC1mb3Jte1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uY29tbWVudC10ZXh0IHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMHB4IDAgMjBweCAwO1xufVxuXG4ucmVwbHktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZXBseS10ZXh0IHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDBweCAwIDIwcHggMDtcbn1cblxuLnJlcGx5LWxpbmsge1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLmNvbW1lbnQtYXZhdGFyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDE2NywgMjcsIDAuMDIpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzVweCAwIDY1cHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDE2NywgMjcsIDAuMDQpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuI3JlcGx5LWRhdGUge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuI3JlcGxpZXMtbGluayB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc2VuZC1pY29uLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBvc3QtYnV0dG9uLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29tbWVudC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5wb3N0IHtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cbi5wb3N0LW1vYmlsZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucG9zdC1tb2JpbGU6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiA0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG4ucG9zdC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZTk5YjE0KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3N0LWJ1dHRvbi1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4uY29tbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmZvbGxvdy1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWNvbG9yOiAjMjRkOGE4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc5NywgIzc5OSk7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGNDQzQiwgcmdiKDIwNiwgNDgsIDQwKSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udXB2b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG4udXB2b3RlIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmRvd252b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG4uZG93bnZvdGUgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1mb250LXNpemU6IDQwcHg7XG59XG5cbi5yZXBseSB7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJlcG9ydCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmVkaXQge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kZWxldGUge1xuICB3aWR0aDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb2xsb3cge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICB3aWR0aDogODBweDtcbiAgLS1ib3JkZXItY29sb3I6IGxpbmVhci1ncmFkaWVudCgjMjRkOGE4LCAjMWJhZjg4KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tZmFiIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbn1cbi5wb3N0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC44KTtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29tbWVudC1mb3JtIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDBweCAwIDIwcHggMDtcbn1cblxuLnJlcGx5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucmVwbHktdGV4dCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwcHggMCAyMHB4IDA7XG59XG5cbi5yZXBseS1saW5rIHtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5jb21tZW50LWF2YXRhciB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wMik7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzNXB4IDAgNjVweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wNCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbiNyZXBseS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbiNyZXBsaWVzLWxpbmsge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5Aa2V5ZnJhbWVzIHNlbmQtaWNvbi1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvc3QtYnV0dG9uLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNvbW1lbnQtc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.ts ***!
  \*********************************************************/
/*! exports provided: PostPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePage", function() { return PostPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/reply-comment/reply-comment.page */ "./src/app/modals/reply-comment/reply-comment.page.ts");
/* harmony import */ var src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/report-comment/report-comment.page */ "./src/app/modals/report-comment/report-comment.page.ts");
/* harmony import */ var src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/edit-comment/edit-comment.page */ "./src/app/modals/edit-comment/edit-comment.page.ts");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "./src/app/emitters/post-page-emitter.service.ts");
/* harmony import */ var src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modals/replies-page/replies-page.page */ "./src/app/modals/replies-page/replies-page.page.ts");






// tslint:disable-next-line: max-line-length







let PostPagePage = class PostPagePage {
    constructor(activatedRoute, postEmitterService, router, posts, profile, formBuilder, toast, modal, alert, loading) {
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
        this.tabBar = document.getElementById('myTabBar');
        this.votes = document.getElementById('votes');
        this.showFab = false;
        this.following = false;
        this.isUser = false;
        // debugging
        this.scroll = '';
    }
    ngOnInit() {
        // Get Post ID from navigation params on the main posts tab
        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.postID = id;
        // Get the user's information to insert into the comment metadata
        this.getPostInfo();
        if (this.postEmitterService.subsVar == undefined) {
            // For Comment and Reply Refreshes
            this.postEmitterService.subsVar = this.postEmitterService.invokePostsPageRefresh.subscribe(() => {
                this.getPostInfo();
            });
        }
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        this.commentForm.controls.comment.valueChanges.subscribe(data => {
            if (data === '') {
                console.log('Value is empty');
                this.commentForm.markAsPristine();
            }
            console.log(this.commentForm);
        });
        // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
        this.posts.commentsSubject$.subscribe(commentsFromSub => {
            this.comments = commentsFromSub;
        });
    }
    back() {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Following Post');
            yield console.log(postID);
            yield this.posts.followPost(postID, this.userEmail);
            this.following = true;
            yield this.followToast();
        });
    }
    followToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Unfollowing Post');
            yield console.log(postID);
            yield this.posts.unFollowPost(postID, this.userEmail);
            this.following = false;
            yield this.unFollowToast();
        });
    }
    unFollowToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            this.votes.style.height = '70px';
        });
    }
    // for when the user un focuses out of the comment textarea but hasnt submitted the comment
    blur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
            this.tabBar.style.height = '70px';
            this.votes.style.height = '70px';
        });
    }
    comment(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Reset Comment Input
            this.commentForm.reset();
            this.commentLoading(comment);
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
        });
    }
    commentLoading(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const date = yield Date.now();
            yield this.posts.comment(this.postID, date, this.userFullName, this.userEmail, comment).subscribe(data => {
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
                        postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postComments.date), {
                            includeSeconds: true,
                            addSuffix: false
                        });
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
    upVotePost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Upvoting Post');
            yield this.upVotePostToast();
        });
    }
    upVotePostToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const upVotePostToast = yield this.toast.create({
                cssClass: 'upvoted-toast',
                message: 'You have UPVOTED this post.',
                duration: 2000
            });
            upVotePostToast.present();
        });
    }
    downVotePost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Downvoting');
            yield this.downVotePostToast();
        });
    }
    downVotePostToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const downVotePostToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this post.',
                duration: 2000
            });
            downVotePostToast.present();
        });
    }
    upVoteComment(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Upvoting Comment');
            yield console.log(comment);
            yield this.upVoteCommentToast();
        });
    }
    upVoteCommentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const upVoteCommentToast = yield this.toast.create({
                cssClass: 'upvoted-toast',
                message: 'You have UPVOTED this comment.',
                duration: 2000
            });
            upVoteCommentToast.present();
        });
    }
    downVoteComment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Downvoting Comment');
            yield this.downVoteCommentToast();
        });
    }
    downVoteCommentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const upVoteCommentToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this comment.',
                duration: 2000
            });
            upVoteCommentToast.present();
        });
    }
    report(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Get information from comment
            yield console.log('Attemping to report comment');
            // tslint:disable-next-line: max-line-length
            yield this.reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, this.userEmail, this.userFullName);
        });
    }
    reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserEmail, commentDate, userEmail, userFullName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const reportModalConfig = yield this.modal.create({
                component: src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_9__["ReportCommentPage"],
                componentProps: {
                    commentID,
                    commentCotents,
                    commentUserFullName,
                    commentUserEmail,
                    commentDate,
                    userEmail,
                    userFullName,
                    post,
                    postID
                }
            });
            yield reportModalConfig.present();
        });
    }
    reply(commentID, userFullName, userProfilePicture, userEmail, commentUserEmail, commentUserFullName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Attemping to reply to comment');
            yield this.replyModal(commentID, this.postID, userFullName, userProfilePicture, userEmail, commentUserEmail, commentUserFullName);
        });
    }
    replyModal(commentID, postID, userFullName, userProfilePicture, userEmail, commentUserEmail, commentUserFullName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const replyModalConfig = yield this.modal.create({
                component: src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentPage"],
                componentProps: {
                    commentID,
                    postID,
                    userFullName,
                    userProfilePicture,
                    userEmail,
                    commentUserEmail,
                    commentUserFullName,
                }
            });
            yield replyModalConfig.present();
        });
    }
    // tslint:disable-next-line: max-line-length
    repliesModal(postID, replies, comment, commentID, commentUserFullName, commentUserEmail, commentDate, userProfilePicture, userFullName, userEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const repliesPageModalConfig = yield this.modal.create({
                component: src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_12__["RepliesPagePage"],
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
                }
            });
            yield repliesPageModalConfig.present();
        });
    }
    editComment(postID, commentID, commentCotents) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log(commentID);
            yield console.log('Attemping to edit comment');
            yield this.editCommentModal(postID, commentID, commentCotents);
        });
    }
    editCommentModal(postID, commentID, commentCotents) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const editAlertConfig = yield this.modal.create({
                component: src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_10__["EditCommentPage"],
                componentProps: {
                    commentID,
                    postID,
                    commentCotents
                }
            });
            yield editAlertConfig.present();
        });
    }
    deleteComment(commentID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('deleting comment..');
            console.log(this.postID);
            console.log(commentID);
            this.deleteCommentAlert(this.postID, commentID);
        });
    }
    deleteCommentAlert(postID, commentID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.posts.deleteComment(this.postID, commentID).subscribe(values => {
                let comments = values['comments'];
                for (const comment of comments) {
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
        });
    }
    deletePost(postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('deleting post..');
            console.log(postID);
            this.deletePostAlert(postID);
        });
    }
    deletePostAlert(postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                    }, {
                        text: 'Delete',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.deletePostLoading(postID);
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    deletePostLoading(postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(postID);
            yield this.posts.deletePost(postID).subscribe(remainingPosts => {
                this.posts.postsSubject$.next(Object.values(remainingPosts).reverse());
                console.log(this.posts.postsSubject$.getValue());
            });
            yield this.router.navigate(['/home/posts']);
            console.log('Loading dismissed!');
            const loading = yield this.loading.create({
                message: 'Deleting Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
        });
    }
    getPostInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.profile.getUserDetails().subscribe(details => {
                let userEmail = details['email'];
                this.userEmail = userEmail;
                let userFullName = details['fullName'];
                let userProfilePicture = details['profilePicture'];
                // Get information about selected post.
                // Format its date on the front end
                // initiate this components post metadata from data in Posts Service
                this.posts.getPostInfo(this.postID).subscribe(postInfo => {
                    const creatorEmail = postInfo['creatorEmail'];
                    const creatorName = postInfo['creatorName'];
                    const post = postInfo['post'];
                    const followers = postInfo['followers'];
                    let comments = postInfo['comments'];
                    let following = false;
                    let date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postInfo['date']), {
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
                        });
                        // If this comment is the logged in user, they can delete and edit
                        if (comment.userEmail === this.userEmail) {
                            comment.isUser = true;
                            comment.canDeleteComment = true;
                            comment.canReport = false;
                        }
                        // Format the Reply Dates
                        for (let i = 0; comment.replies.length > i; i++) {
                            comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                                addSuffix: false
                            });
                        }
                    }
                    this.creatorName = creatorName;
                    this.creatorEmail = creatorEmail;
                    this.date = date;
                    this.followers = followers;
                    this.comments = comments;
                    this.following = following;
                    this.post = post;
                    this.userProfilePicture = userProfilePicture;
                    this.userFullName = userFullName;
                });
            });
        });
    }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.profile.getUserDetails().subscribe(details => {
                let userEmail = details['email'];
                this.userEmail = userEmail;
                let userFullName = details['fullName'];
                let userProfilePicture = details['profilePicture'];
                // Get information about selected post.
                // Format its date on the front end
                // initiate this components post metadata from data in Posts Service
                this.posts.getPostInfo(this.postID).subscribe(postInfo => {
                    const creatorEmail = postInfo['creatorEmail'];
                    const creatorName = postInfo['creatorName'];
                    const post = postInfo['post'];
                    const followers = postInfo['followers'];
                    let comments = postInfo['comments'];
                    let following = false;
                    let date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postInfo['date']), {
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
                        comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
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
                            comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                                addSuffix: false
                            });
                        }
                    }
                    this.creatorName = creatorName;
                    this.creatorEmail = creatorEmail;
                    this.date = date;
                    this.followers = followers;
                    this.comments = comments;
                    this.following = following;
                    this.post = post;
                    this.userProfilePicture = userProfilePicture;
                    this.userFullName = userFullName;
                    this.posts.commentsSubject$.next(comments.reverse());
                });
            });
            ;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_11__["PostPageEmitterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], PostPagePage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"])
], PostPagePage.prototype, "textarea", void 0);
PostPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-page.page.scss */ "./src/app/pages/posts/post-page/post-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_11__["PostPageEmitterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
], PostPagePage);



/***/ })

}]);
//# sourceMappingURL=post-page-post-page-module-es2015.js.map