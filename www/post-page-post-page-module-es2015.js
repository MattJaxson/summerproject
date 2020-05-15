(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [scrollEvents]=\"true\"\r\n  (ionScroll)=\"logScrolling($event)\">\r\n\r\n  <!-- Refresher -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n   <!-- fab placed to the bottom end; Going back to the top of the page on the mobile view. -->\r\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n          <ion-fab-button (click)=\"ScrollToTop()\">\r\n            <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\r\n          </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid>\r\n\r\n    <!-- Header -->\r\n    <ion-row style=\"margin: 2% 0% 3% 0%;\">\r\n      <ion-col push=\"7\" size=\"2\">\r\n        <ion-button *ngIf=\"!following\" class=\"follow-button\"  (click)=\"follow()\">\r\n          Follow\r\n        </ion-button>\r\n        <ion-button *ngIf=\"following\" class=\"unfollow-button\"  (click)=\"unFollow()\">\r\n          UnFollow\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col push=\"6\" size=\"2\">\r\n        <ion-button class=\"back-button\"  (click)=\"back()\">\r\n           Back\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Post -->\r\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 2%;\">\r\n      <ion-col size=\"6\">\r\n        <ion-row class=\"post\">\r\n\r\n          <!-- Profile Header -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; left: 5px; top: 4px;\" >\r\n            <!-- Profile Picture -->\r\n            <ion-col size=\"1\">\r\n              <img class=\"profile-picture\" src=\"../../assets/batman-pro-pic.png\">\r\n            </ion-col>\r\n\r\n            <!-- Post Creator's Name -->\r\n            <ion-col size=\"8\">\r\n              <h6 style=\"font-size: 1em; font-weight: 500; opacity: 0.4;\">{{creatorName}}</h6>\r\n            </ion-col>\r\n\r\n            <!-- Date -->\r\n            <ion-col size=\"2\">\r\n                <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{date}}</h6>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Content -->\r\n          <ion-col offset=\"1\" size=\"9\">\r\n            <ion-row>\r\n              <!-- 1080x1350 -->\r\n              <ion-col size=\"12\">\r\n               <p class=\"post-content\">{{post}}</p>\r\n              </ion-col>\r\n           </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Comment Bar -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\r\n              <ion-col offset=\"1\" size=\"10\">\r\n                <ion-item lines=\"none\">\r\n                 <form (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\r\n                    <ion-textarea\r\n                      class=\"comment-input\"\r\n                      autogrow=\"true\"\r\n                      autocapitalize=\"true\"\r\n                      rows=\"5\"\r\n                      spellcheck=\"true\"\r\n                      wrap=\"soft\"\r\n                      type=\"text\"\r\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\r\n                    </ion-textarea>\r\n                    <ion-button\r\n                      style=\"float: right;\"\r\n                      class=\"comment-post-button\"\r\n                      type=\"submit\"\r\n                      *ngIf=\"!commentForm\r\n                              .get('comment')\r\n                              .pristine && commentForm.value.comment.length >= 3\"\r\n                        name=\"send\">Post\r\n                      </ion-button>\r\n                 </form>\r\n                </ion-item>\r\n\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Upvote and Downvote Post -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <ion-col offset=\"1\" size=\"4\">\r\n                <ion-toolbar>\r\n                  <ion-buttons slot=\"start\">\r\n                    <ion-button class=\"upvote\" (click)=\"upVotePost()\">\r\n                      <ion-icon size=\"large\" src=\"../../../assets/icon/caret-up-outline.svg\"></ion-icon>\r\n                      0\r\n                    </ion-button>\r\n                    <ion-button class=\"downvote\" (click)=\"downVotePost()\">\r\n                      <ion-icon size=\"large\" src=\"../../../assets/icon/caret-down-outline.svg\"></ion-icon>\r\n                      0\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </ion-toolbar>\r\n            </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Comments -->\r\n    <ion-row class=\"ion-justify-content-center\">\r\n\r\n      <!-- If No Comments -->\r\n      <ion-col *ngIf=\"comments.length === 0\" size=\"6\">\r\n      <h4>This post has no comments</h4>\r\n      </ion-col>\r\n\r\n        <!-- Comment Wrapper -->\r\n        <ion-col *ngFor=\"let comment of comments\" class=\"comment\" size=\"6\">\r\n\r\n          <!-- Comment Header -->\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\r\n                  <img src=\"../../assets/goku-pro-pic.png\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h6 style=\"opacity: 0.5\">{{ comment.userFullName  }} - {{ comment.date }} </h6>\r\n                  </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <!-- Comment -->\r\n          <ion-row>\r\n            <ion-col offset=\"1\" size=\"10\">\r\n                <p class=\"comment-text ion-text-wrap\">  {{comment.comment}}.\r\n                </p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <!-- Comment Buttons -->\r\n          <ion-row>\r\n            <!-- Upvote & Downvote Comments-->\r\n            <ion-col offset=\"1\" size=\"4\">\r\n                <ion-toolbar>\r\n                  <ion-buttons slot=\"start\">\r\n                    <ion-button class=\"upvote\" (click)=\"upVoteComment()\">\r\n                      <ion-icon size=\"large\" src=\"../../../assets/icon/caret-up-outline.svg\"></ion-icon>\r\n                      0\r\n                    </ion-button>\r\n                    <ion-button class=\"downvote\" (click)=\"downVoteComment()\">\r\n                      <ion-icon size=\"large\" src=\"../../../assets/icon/caret-down-outline.svg\"></ion-icon>\r\n                      0\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </ion-toolbar>\r\n            </ion-col>\r\n            <!-- Report & Reply -->\r\n            <ion-col offset=\"1\" size=\"4\">\r\n              <ion-toolbar>\r\n                <ion-buttons slot=\"end\">\r\n                  <ion-button (click)=\"reply(comment._id)\" class=\"reply ion-float-right\">\r\n                    Reply\r\n                  </ion-button>\r\n                  <ion-button (click)=\"report(comment._id)\"  class=\"report ion-float-right\">\r\n                    Report\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </ion-toolbar>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <!-- Mobile -->\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\"></ion-col>\r\n      <ion-col size=\"6\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

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
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-page-routing.module */ "./src/app/pages/posts/post-page/post-page-routing.module.ts");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-page.page */ "./src/app/pages/posts/post-page/post-page.page.ts");








let PostPagePageModule = class PostPagePageModule {
};
PostPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _post_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["PostPagePageRoutingModule"]
        ],
        declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_7__["PostPagePage"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".post {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 90px;\n  background: white;\n  box-shadow: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-color: rgba(255, 179, 81, 0.2);\n  border-style: solid;\n}\n\n.post:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 120px;\n  background: white;\n  box-shadow: 1px 1px 3px #999;\n  border-radius: 5px;\n  border-width: 2px;\n  border-color: rgba(255, 179, 81, 0.7);\n  border-style: solid;\n}\n\n.profile-picture {\n  border-radius: 100px;\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: 10px;\n  top: 4px;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.follow-button {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.unfollow-button {\n  --color: white;\n  --background: linear-gradient(red, orange);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 10px;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 30px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 10px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 30px;\n}\n\n.reply {\n  width: 60px;\n  --border-width: 1px;\n  --border-color: #005191;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #005191;\n  font-size: 0.6em;\n  margin-right: 25px;\n}\n\n.report {\n  --border-width: 1px;\n  width: 60px;\n  --border-color: #888;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #888;\n  font-size: 0.6em;\n  margin-right: 50px;\n}\n\nion-toolbar {\n  --background: none;\n}\n\nion-item {\n  --background: none;\n}\n\nion-fab {\n  opacity: 0;\n  padding-right: 2%;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #222;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n}\n\n.comment {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nform {\n  width: 98%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xccG9zdHNcXHBvc3QtcGFnZVxccG9zdC1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FET0E7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTEY7O0FET0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURPQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURPQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNKRjs7QURNRTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE1JO0VBQ0EsY0FBQTtBQ0pKOztBRFNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ05GO0VEUUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ05GO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDTkY7RURRQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDTkY7QUFDRjs7QURTQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNSRjs7QURXQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDVEY7O0FEWUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDVEY7O0FEWUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNURjs7QURZQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ1RGOztBRFlBO0VBQ0UsVUFBQTtBQ1RGOztBRFlBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ1RGO0VEV0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0UsVUFBQTtFQ1RKO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDVEY7RURXQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDRSxVQUFBO0VDVEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3Qge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTc5LCA4MSwgMC4yKTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4ucG9zdDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNzksIDgxLCAwLjcpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IDRweDtcclxufVxyXG5cclxuLnBvc3QtY29udGVudHtcclxuICAvLyBjb2xvcjogIzIyMjtcclxuICAvLyBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3ctYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjRkOGE4LCAjMWJhZjg4KTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vLyBDaGFuZ2UgY29sb3JcclxuLnVuZm9sbG93LWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmVkLCBvcmFuZ2UpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi51cHZvdGV7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAtLWNvbG9yOiAjMDA1MTkxO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzAwNTE5MTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn1cclxuLmRvd252b3RlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC0tY29sb3I6ICMwMDUxOTE7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMDA1MTkxO1xyXG4gICAgLS1mb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG59XHJcbi5yZXBseXtcclxuICB3aWR0aDogNjBweDtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLS1jb2xvcjogIzAwNTE5MTtcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG4ucmVwb3J0e1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgLS1ib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWNvbG9yOiAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5pb24tZmFiIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcblxyXG4gIGlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMDA1MTkxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWItc2xpZGUtdXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9zdC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC44KTtcclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWF2YXRhciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm17XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5jb21tZW50LXRleHQge1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWF2YXRhciB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbn1cclxuXHJcbi5jb21tZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG59XHJcblxyXG4uY29tbWVudC1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxufVxyXG5cclxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzZW5kLWljb24tc2xpZGUtaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59IiwiLnBvc3Qge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTc5LCA4MSwgMC4yKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnBvc3Q6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTc5LCA4MSwgMC43KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNHB4O1xufVxuXG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb2xsb3ctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udW5mb2xsb3ctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJlZCwgb3JhbmdlKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVwdm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cbi51cHZvdGUgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZG93bnZvdGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG4uZG93bnZvdGUgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1mb250LXNpemU6IDMwcHg7XG59XG5cbi5yZXBseSB7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLnJlcG9ydCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tZmFiIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbn1cbi5wb3N0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC44KTtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29tbWVudC1mb3JtIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uY29tbWVudC1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uY29tbWVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA5OCU7XG59XG5cbkBrZXlmcmFtZXMgc2VuZC1pY29uLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _post_page_modals_report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-page-modals/report-modal/report-modal.page */ "./src/app/pages/posts/post-page/post-page-modals/report-modal/report-modal.page.ts");









let PostPagePage = class PostPagePage {
    constructor(activatedRoute, router, posts, profile, formBuilder, toast, modal) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.modal = modal;
        this.showFab = false;
        this.following = false;
        // debugging
        this.scroll = '';
    }
    ngOnInit() {
        // Get the user's information to insert into the comment metadata
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userFullName = details['fullName'];
        });
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
        // Get Post ID from navigation params on the main posts tab
        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.postID = id;
        // Get information about selected post.
        // Format its date on the front end
        // initiate this components post metadata from data in Posts Service
        this.posts.getPostInfo(this.postID).subscribe(post => {
            console.log(post);
            // tslint:disable-next-line: no-string-literal
            this.creatorName = post['creatorName'];
            this.post = post['post'];
            this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(post['date']), {
                includeSeconds: true,
                addSuffix: true
            });
            console.log('Date: ' + this.date);
            this.followers = post['followers'];
            console.log(post['comments']);
            for (const comment of post['comments']) {
                comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
            this.posts.commentsSubject$.next(post['comments'].reverse());
            this.post = post['post'];
        });
        // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
        this.posts.commentsSubject$.subscribe(commentsFromSub => {
            this.comments = commentsFromSub;
        });
    }
    back() {
        this.router.navigate(['/home/posts']);
    }
    follow() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.following = true;
            console.log('Following Post');
        });
    }
    unFollow() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.following = false;
            console.log('Following Post');
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
    ScrollToTop() {
        this.content.scrollToTop(1500);
    }
    comment(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Reset Comment Input
            this.commentForm.reset();
            const date = yield Date.now();
            console.log('Posting comment');
            yield this.posts.comment(this.postID, date, this.userFullName, this.userEmail, comment);
            yield this.posts.getPostInfo(this.postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(postComments.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
                this.posts.commentsSubject$.next(post['comments'].reverse());
            });
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
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
    upVoteComment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Upvoting Comment');
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
    report(commentID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log(commentID);
            yield console.log('Attemping to report comment');
            yield this.reportModal();
        });
    }
    reportModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const reportAlertConfig = yield this.modal.create({
                component: _post_page_modals_report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReportModalPage"],
                componentProps: {
                    reportedName: 'Tracy Liu',
                    reportedComment: 'This is a reported Comment',
                    commentDate: 'December 10th, 2019'
                }
            });
            yield reportAlertConfig.present();
        });
    }
    // async reply(commentID) {
    //   await console.log(commentID);
    //   await console.log('Attemping to reply to comment');
    //   await this.replyModal();
    // }
    // async replyModal() {
    //   const replayAlertConfig = await this.modal.create({
    //   component: ReplyModalPage,
    //   componentProps: {
    //     'firstName': 'Douglas',
    //     'lastName': 'Adams',
    //     'middleInitial': 'N'
    //   }
    //   });
    //   await replayAlertConfig.present();
    // }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.posts.getPostInfo(this.postID).subscribe(post => {
                for (const comment of post['comments']) {
                    comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
                this.posts.commentsSubject$.next(post['comments'].reverse());
                this.post = post['post'];
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], PostPagePage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ion-fab', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFab"])
], PostPagePage.prototype, "fab", void 0);
PostPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-page.page.scss */ "./src/app/pages/posts/post-page/post-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], PostPagePage);



/***/ })

}]);
//# sourceMappingURL=post-page-post-page-module-es2015.js.map