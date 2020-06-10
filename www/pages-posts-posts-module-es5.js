(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/posts/posts.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col push-xs=\".45\" push-sm=\"2\"  size-xs=\"1.2\">\n          <img src=\"{{profilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35px; width: 35px;\">\n        </ion-col>\n        <ion-col push-sm=\"1.45\" size=\"7\">\n          <p id=\"username\">{{userFullName}}</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button class=\"following-mobile-button\" (click)=\"following()\">\n            Following ({{followedPostCount}})\n        </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"add-post-button\" (click)=\"addPost()\">\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <!-- Posts -->\n      <ion-col size=\"6\">\n        <ion-row *ngFor=\"let post of allPosts\" class=\"post\">\n\n          <!-- Profile Header -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-align-items-center\">\n            <!-- Profile Picture -->\n            <ion-col offset-lg=\"0.5\" size=\"1\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"4\">\n              <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n            </ion-col>\n\n            <!-- Date -->\n            <ion-col class=\"ion-float-right\" push-lg=\"3\" size=\"3\">\n                <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n            </ion-col>\n\n          </ion-row>\n          </ion-col>\n\n          <!-- (click)=\"postPage(post)\" -->\n          <!-- Post Content -->\n          <ion-col size=\"12\">\n            <ion-row>\n              <!-- 1080x1350 -->\n              <ion-col offset=\"0.5\" size=\"11\" >\n               <p class=\"post-content\">{{post.post}}</p>\n              </ion-col>\n           </ion-row>\n          </ion-col>\n\n          <!-- Comment -->\n          <ion-col size=\"12\">\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n              <ion-col offset=\"0.5\" size=\"11\">\n                <ion-item lines=\"none\">\n                 <form (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\n                   <ion-textarea\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\"\n                      (keydown.control.enter)=\"comment(this.commentForm.value, this.post._id)\">\n                    </ion-textarea>\n                    <!-- Comment Post Button -->\n                    <ion-button\n                      style=\"float: right;\"\n                      class=\"comment-post-button\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\"\n                        type=\"submit\">Post\n                    </ion-button>\n                 </form>\n\n        </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Buttons -->\n          <ion-col size=\"12\">\n            <ion-row>\n              <!-- Upvote & Downvote-->\n              <ion-col offset=\"0.5\" size=\"4.7\">\n                <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n              </ion-col>\n\n              <!-- Follow & Comment -->\n              <ion-col size=\"6\">\n                <app-follow-comment-buttons [isUser]=\"post.isUser\" [postID]=\"post._id\"></app-follow-comment-buttons>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-col>\n\n      <!-- Sidebar with User Info -->\n      <ion-col push=\"0.5\" size=\"2\">\n        <ion-row class=\"user-details\" style=\"position: fixed;\">\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col size-lg=\"2.8\" size-xl=\"2.1\">\n                <img src=\"{{profilePicture}}\" style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\">\n              </ion-col>\n              <ion-col size=\"6\">\n                <h6 style=\"font-size: 1.2em; font-weight: 700; position: relative; left: 10px;\">{{userFullName}}</h6>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button following-desktop-button\" (click)=\"following()\">\n              Following ({{followedPostCount}})\n            </ion-button>\n            <ion-button class=\"add-button\"  (click)=\"addPost()\">\n              Add Post\n            </ion-button></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n\n      <!-- Posts -->\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"8\" size-lg=\"10\" pull-lg=\"2\">\n        <ion-row *ngFor=\"let post of allPosts\" style=\"margin-top: 1%;\" class=\"post\">\n\n          <!-- Profile Header -->\n          <ion-col  offset=\"0.5\" size=\"11\">\n            <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\n            <!-- Profile Picture -->\n            <ion-col size=\"1.3\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"5\">\n              <h6 style=\"font-size: 0.9em; font-weight: 700; margin: 10px 0 10px 0px; color: #666;\">{{post.creatorName}}</h6>\n            </ion-col>\n\n            <!-- Date -->\n            <ion-col class=\"ion-text-right\" push=\"1.5\" size=\"3\">\n                <h6 style=\"opacity: 0.4; font-size: 0.5em; margin: 10px 0; position: relative; top: 10px;\">{{post.date}}</h6>\n            </ion-col>\n\n          </ion-row>\n          </ion-col>\n\n          <!-- Post Content -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- (click)=\"postPage(post)\"  -->\n              <!-- 1080x1350 -->\n              <ion-col size=\"11\" style=\"height: auto; background: white\">\n              <p class=\"post-content\" style=\"font-size: 1em; width: 100%; position: unset; line-height: unset;\">{{post.post}}</p>\n              </ion-col>\n          </ion-row>\n          </ion-col>\n\n          <!-- Comment -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\" style=\"position: relative; right: 6px; top: -4px;\" >\n              <ion-col size=\"12\">\n                <ion-item  style=\"height: auto;\" lines=\"none\">\n                <form style=\"border-top: 1px solid rgba(0, 0, 0, 0.2); padding-top: 20px;\" (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\n                  <ion-textarea\n                  class=\"comment-input-mobile\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  placeholder=\"Add a Comment\" formControlName=\"comment\"\n                  (keydown.control.enter)=\"comment(this.commentForm.value, this.post._id)\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  class=\"comment-post-button\"\n                  *ngIf=\"!commentForm\n                          .get('comment')\n                          .pristine && commentForm.value.comment.length >= 3\"\n                    name=\"send\"\n                    type=\"submit\">Post\n                </ion-button>\n                </form>\n\n        </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Buttons -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- Upvote & Downvote-->\n              <ion-col pull=\"1\" size=\"4\" size-xs=\"4.4\">\n                <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n              </ion-col>\n\n              <!-- Follow & Comment -->\n              <ion-col size=\"6\">\n                <app-follow-comment-buttons [postID]=\"post._id\"></app-follow-comment-buttons>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/posts/post-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function() { return PostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'add-post',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-post-add-post-module */ "add-post-add-post-module").then(__webpack_require__.bind(null, /*! ./add-post/add-post.module */ "./src/app/pages/posts/add-post/add-post.module.ts")).then(function (m) { return m.AddPostPageModule; }); }
    },
    {
        path: 'post-page/:_id',
        loadChildren: function () { return Promise.all(/*! import() | post-page-post-page-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("default~modals-edit-post-edit-post-module~post-page-post-page-module"), __webpack_require__.e("post-page-post-page-module")]).then(__webpack_require__.bind(null, /*! ./post-page/post-page.module */ "./src/app/pages/posts/post-page/post-page.module.ts")).then(function (m) { return m.PostPagePageModule; }); }
    },
    {
        path: 'following',
        loadChildren: function () { return __webpack_require__.e(/*! import() | following-following-module */ "following-following-module").then(__webpack_require__.bind(null, /*! ./following/following.module */ "./src/app/pages/posts/following/following.module.ts")).then(function (m) { return m.FollowingPageModule; }); }
    }
];
var PostRoutingModule = /** @class */ (function () {
    function PostRoutingModule() {
    }
    PostRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PostRoutingModule);
    return PostRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/posts/posts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/pages/posts/post-routing.module.ts");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/custom-component.module */ "./src/app/components/custom-component.module.ts");









var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _post_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"] }])
            ],
            declarations: [
                _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]
            ]
        })
    ], PostPageModule);
    return PostPageModule;
}());



/***/ }),

/***/ "./src/app/pages/posts/posts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post {\n  padding: 10px 0;\n  margin-bottom: 90px;\n  border-radius: 5px;\n  font-size: 1.2em;\n  line-height: 35px;\n}\n\n.post-content {\n  font-size: 1.05em;\n}\n\n.user-details {\n  position: fixed;\n  background: none;\n  height: 200px;\n}\n\n#username {\n  color: white;\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  left: 10px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-toolbar {\n  --background: none;\n  height: 60px;\n}\n\nion-toolbar p {\n  color: #000;\n  font-size: 1.2em;\n}\n\nform {\n  width: 100%;\n  border-top: 1px solid rgba(50, 50, 50, 0.2);\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  -webkit-transform: 0.5s;\n          transform: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-item {\n  --backsground: none;\n}\n\n.following-mobile-button {\n  opacity: 1;\n  --background: rgba(255,255,255,0.1);\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 100px;\n  height: 40px;\n  font-size: 0.6em;\n  font-weight: 600;\n  position: relative;\n  right: 5px;\n}\n\n.following-desktop-button {\n  font-weight: 800;\n  display: block;\n  height: 36px;\n  width: 200px;\n  margin-top: 20px;\n}\n\n.blue-button {\n  height: 36px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.add-button {\n  --color: #24d8a8;\n  --background: linear-gradient(#def8f0, #e5fdf6);\n  --background-hover: linear-gradient(#def8f0, #bef5e4);\n  font-weight: 800;\n  display: block;\n  width: 200px;\n  margin-top: 20px;\n  font-size: 1em;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-fab-button {\n  --background: #defdf5;\n  --background-focused: #FFB351;\n  --background-hover: #FFB351;\n  --background-activated: #FFB351;\n  --color: #24d8a8;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes username-slide-in {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes username-slide-in {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes add-post-button-tap {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes add-post-button-tap {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUNBRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDREo7O0FES0E7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7RUFDQSxpRkFBQTtVQUFBLHlFQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUFBLGNBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNGRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEY7O0FET0E7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDSkY7RURPQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDTEY7QUFDRjs7QURKQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFVBQUE7RUNKRjtFRE9BO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGOztBRFFBO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTkY7RURTQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDUEY7QUFDRjs7QUREQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ05GO0VEU0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ1BGO0FBQ0Y7O0FEVUE7RUFDRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNSRjtFRFVBO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtFQ1JGO0VEVUE7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsVUFBQTtFQ1JGO0FBQ0Y7O0FERkE7RUFDRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNSRjtFRFVBO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtFQ1JGO0VEVUE7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsVUFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xufVxuXG4udXNlci1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4jdXNlcm5hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogNjBweDtcblxuICBwIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMC4yKTtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogODBweDtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja3Nncm91bmQ6IG5vbmU7XG59XG5cbi5mb2xsb3dpbmctbW9iaWxlLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5mb2xsb3dpbmctZGVza3RvcC1idXR0b24ge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIGhlaWdodDogMzZweDtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiAjMjRkOGE4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZGVmOGYwLCAjZTVmZGY2KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2RlZjhmMCwgI2JlZjVlNCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDMwcHggMCAxNTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZGVmZGY1O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0ZGQjM1MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAtLWNvbG9yOiAjMjRkOGE4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIC8vIGFuaW1hdGlvbjogYWRkLXBvc3QtYnV0dG9uLXRhcCAuNVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVzZXJuYW1lLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYWRkLXBvc3QtYnV0dG9uLXRhcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi5wb3N0IHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4ucG9zdC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjA1ZW07XG59XG5cbi51c2VyLWRldGFpbHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbiN1c2VybmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogNjBweDtcbn1cbmlvbi10b29sYmFyIHAge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAwLjIpO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrc2dyb3VuZDogbm9uZTtcbn1cblxuLmZvbGxvd2luZy1tb2JpbGUtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmZvbGxvd2luZy1kZXNrdG9wLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkZWY4ZjAsICNlNWZkZjYpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZGVmOGYwLCAjYmVmNWU0KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMTUwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNkZWZkZjU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGRkIzNTE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gIC0tY29sb3I6ICMyNGQ4YTg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHVzZXJuYW1lLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBhZGQtcG9zdC1idXR0b24tdGFwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/posts/posts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "./src/app/emitters/post-page-emitter.service.ts");










var PostsPage = /** @class */ (function () {
    function PostsPage(router, posts, profile, toast, formBuilder, postsEmitterService) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.postsEmitterService = postsEmitterService;
    }
    PostsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.postsEmitterService.subsVar == undefined) {
            this.postsEmitterService.subsVar = this.postsEmitterService.invokePostsPageRefresh.subscribe(function () {
                _this.getPosts();
            });
        }
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        this.commentForm.controls.comment.valueChanges.subscribe(function (data) {
            if (data === '') {
                console.log('Value is empty');
                _this.commentForm.markAsPristine();
            }
        });
        this.getPosts();
        this.getFollowingPosts();
    };
    PostsPage.prototype.postPage = function (post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    };
    PostsPage.prototype.getFollowingPosts = function () {
        var _this = this;
        // Get the user's posts he/she is following
        this.profile.getUserDetails().subscribe(function (details) {
            _this.userEmail = details['email'];
            _this.profilePicture = details['profilePicture'];
            _this.userFullName = details['fullName'];
            _this.followedPost = details['followedPost'];
            _this.posts.followingSubject$.next(_this.followedPost);
            _this.posts.followingSubject$.subscribe(function (posts) {
                _this.followedPostCount = posts.length;
            });
        });
    };
    PostsPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getFollowingPosts();
                        return [4 /*yield*/, this.posts.getPosts().subscribe(function (jobs) {
                                _this.allPosts = Object.values(jobs).reverse();
                                for (var _i = 0, _a = _this.allPosts; _i < _a.length; _i++) {
                                    var post = _a[_i];
                                    post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(post.date), {
                                        includeSeconds: true,
                                        addSuffix: true
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        // Present Toast
                        return [4 /*yield*/, setTimeout(function () {
                                var toast = _this.toast.create({
                                    message: 'Inspiration Page has been refreshed',
                                    duration: 3000
                                });
                                event.target.complete();
                                toast.then(function (toast) { return toast.present(); });
                            }, 2000)];
                    case 2:
                        // Present Toast
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsPage.prototype.getPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.posts.getPosts().subscribe(function (jobs) {
                            _this.allPosts = Object.values(jobs).reverse();
                            _this.posts.postsSubject$.next(_this.allPosts);
                            // this.posts.postsSubject$.subscribe( posts => {
                            //   this.allPosts = posts;
                            // });
                            for (var _i = 0, _a = _this.allPosts; _i < _a.length; _i++) {
                                var post = _a[_i];
                                post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(post.date), {
                                    includeSeconds: true,
                                    addSuffix: true
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsPage.prototype.addPost = function () {
        this.router.navigate(['/home/posts/add-post']);
    };
    PostsPage.prototype.following = function () {
        this.router.navigate(['/home/posts/following']);
    };
    PostsPage.prototype.comment = function (comment, postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Reset Comment Input
                        this.commentForm.reset();
                        return [4 /*yield*/, Date.now()];
                    case 1:
                        date = _a.sent();
                        console.log('Posting comment');
                        console.log('Post ID: ' + postID);
                        return [4 /*yield*/, this.posts.comment(postID, date, this.userFullName, this.userEmail, this.profilePicture).subscribe()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.posts.getPostInfo(postID).subscribe(function (post) {
                                for (var _i = 0, _a = post['comments']; _i < _a.length; _i++) {
                                    var postComments = _a[_i];
                                    postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
                                        includeSeconds: true,
                                        addSuffix: true
                                    });
                                }
                                _this.posts.commentsSubject$.next(post['comments'].reverse());
                            })];
                    case 3:
                        _a.sent();
                        toast = this.toast.create({
                            message: 'Your comment has been added.',
                            duration: 1500
                        });
                        toast.then(function (toast) { return toast.present(); });
                        return [4 /*yield*/, this.router.navigate(['/home/posts/post-page', postID])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"])
    ], PostsPage.prototype, "fabButton", void 0);
    PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/posts/posts.page.html"),
            styles: [__webpack_require__(/*! ./posts.page.scss */ "./src/app/pages/posts/posts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]])
    ], PostsPage);
    return PostsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-posts-posts-module-es5.js.map