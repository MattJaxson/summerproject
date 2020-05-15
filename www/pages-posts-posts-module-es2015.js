(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\r\n<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-lg-up\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-items-center\" offset=\"1\" size=\"2\">\r\n          <img src=\"../../assets/goku-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 45px; width: 45px;\">\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <p style=\"color: #333;\">{{userFullName}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button style=\"font-size: 0.7em; width: 100px\" class=\"blue-button\" style=\"animation: none; opacity: 1; width: 80px; height: 40px; font-size: 0.6em;\" (click)=\"following()\">\r\n            Following\r\n        </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- fab placed to the bottom end -->\r\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addPost()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- Refresher -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid class=\"ion-hide-md-down\">\r\n    <ion-row style=\"margin-top: 5%;\">\r\n\r\n      <!-- Posts -->\r\n      <ion-col offset=\"2\" size=\"5\">\r\n        <ion-row *ngFor=\"let post of allPosts\" class=\"post\">\r\n\r\n          <!-- Profile Header -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; left: 5px; top: 4px;\" >\r\n            <!-- Profile Picture -->\r\n            <ion-col offset=\"0.5\" size=\"1\">\r\n              <img src=\"../../assets/batman-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\r\n            </ion-col>\r\n\r\n            <!-- Post Creator's Name -->\r\n            <ion-col size=\"6\">\r\n              <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\r\n            </ion-col>\r\n\r\n            <!-- Date -->\r\n            <ion-col size=\"2\">\r\n                <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Content -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <!-- 1080x1350 -->\r\n              <ion-col offset=\"0.5\" size=\"11\" (click)=\"postPage(post)\">\r\n               <p class=\"post-content\">{{post.post}}</p>\r\n              </ion-col>\r\n           </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Comment -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\r\n              <ion-col offset=\"0.5\" size=\"11\">\r\n                <ion-item lines=\"none\">\r\n                 <form (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\r\n                   <ion-textarea\r\n                      class=\"comment-input\"\r\n                      autogrow=\"true\"\r\n                      autocapitalize=\"true\"\r\n                      rows=\"5\"\r\n                      spellcheck=\"true\"\r\n                      wrap=\"soft\"\r\n                      type=\"text\"\r\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\r\n                    </ion-textarea>\r\n                    <!-- Comment Post Button -->\r\n                    <ion-button\r\n                      style=\"float: right;\"\r\n                      class=\"comment-post-button\"\r\n                      *ngIf=\"!commentForm\r\n                              .get('comment')\r\n                              .pristine && commentForm.value.comment.length >= 3\"\r\n                        name=\"send\"\r\n                        type=\"submit\">Post\r\n                    </ion-button>\r\n                 </form>\r\n\r\n        </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Buttons -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <!-- Upvote & Downvote-->\r\n              <ion-col size=\"4\">\r\n                  <ion-toolbar>\r\n                    <ion-buttons slot=\"start\">\r\n                      <ion-button class=\"upvote\" (click)=\"upVotePost(post._id)\">\r\n                        <ion-icon size=\"large\" src=\"../../../assets/icon/caret-up-outline.svg\"></ion-icon>\r\n                        {{post.upvotes}}\r\n                      </ion-button>\r\n                      <ion-button class=\"downvote\" (click)=\"downVotePost(post._id)\">\r\n                        <ion-icon size=\"large\" src=\"../../../assets/icon/caret-down-outline.svg\"></ion-icon>\r\n                        0\r\n                      </ion-button>\r\n                    </ion-buttons>\r\n                  </ion-toolbar>\r\n              </ion-col>\r\n\r\n              <!-- Follow & Comment -->\r\n              <ion-col push=\"1\" size=\"6\">\r\n                <ion-toolbar style=\"--background: none;\">\r\n                  <ion-buttons slot=\"end\">\r\n                    <ion-button class=\"follow\" (click)=\"follow()\">\r\n                      Follow\r\n                    </ion-button>\r\n                    <!-- <ion-button *ngIf=\"following\" class=\"unfollow-button\"  (click)=\"unFollow()\">\r\n                      Unfollow\r\n                    </ion-button> -->\r\n                    <ion-button\r\n                    class=\"comment-button\"\r\n                    (click)=\"postPage(post)\">\r\n                    Comments ({{post.comments.length}})\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n               </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <!-- Sidebar with User Info -->\r\n      <ion-col style=\"position: relative; left: 20px;\" size=\"2\">\r\n        <ion-row class=\"user-details\">\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <img src=\"../../assets/goku-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\">\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <h6 style=\"font-size: 1.2em; font-weight: 700; position: relative; left: 10px;\">Son Goku\r\n                </h6>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-button class=\"followed-button\" (click)=\"following()\">\r\n              Followed ({{followedPostLength}})\r\n            </ion-button>\r\n            <ion-button class=\"add-button\"  (click)=\"addPost()\">\r\n              Add Post\r\n            </ion-button></ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Mobile -->\r\n  <ion-grid class=\"ion-hide-lg-up\">\r\n    <ion-row style=\"margin-top: 5%;\">\r\n\r\n      <!-- Posts -->\r\n      <ion-col offset-xs=\"\" size-xs=\"12\" offset-sm=\"2\" size-sm=\"8\" offset-md=\"2\" size-md=\"8\">\r\n        <ion-row *ngFor=\"let post of allPosts\" style=\"margin-top: 3%;\" class=\"post\">\r\n\r\n          <!-- Profile Header -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\r\n            <!-- Profile Picture -->\r\n            <ion-col push=\"1\" size=\"2\">\r\n              <img src=\"../../assets/batman-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\r\n            </ion-col>\r\n\r\n            <!-- Post Creator's Name -->\r\n            <ion-col size=\"6\">\r\n              <h6 style=\"font-size: 0.7em; font-weight: 700;\">{{post.creatorName}}</h6>\r\n            </ion-col>\r\n\r\n            <!-- Date -->\r\n            <ion-col size=\"2\">\r\n                <h6 style=\"opacity: 0.4; font-size: 0.5em;\">{{post.date}}</h6>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Content -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <!-- 1080x1350 -->\r\n              <ion-col push=\"1\" size=\"10\" (click)=\"postPage(post)\" style=\"height: auto; background: white\">\r\n              <p style=\"font-size: 1em; line-height: 25px; width: 100%;\">{{post.post}}</p>\r\n              </ion-col>\r\n          </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Comment -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\r\n              <ion-col push=\"1\" size=\"10\">\r\n                <ion-item style=\"height: auto;\" lines=\"none\">\r\n                <form style=\"border-top: 1px solid #999; padding-top: 20px;\" (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\r\n                    <ion-input type=\"text\" placeholder=\"Add a Comment\" formControlName=\"comment\">\r\n                    </ion-input>\r\n                </form>\r\n                <ion-icon\r\n                *ngIf=\"!commentForm\r\n                .get('comment')\r\n                .pristine\"\r\n                slot=\"end\"\r\n                name=\"send\"></ion-icon>\r\n\r\n        </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Buttons -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <ion-col push=\"1\" size=\"10\">\r\n                <ion-toolbar class=\"post-toolbar\" style=\"--background: none;\">\r\n                  <ion-buttons slot=\"end\">\r\n                      <!-- Icons -->\r\n                        <app-follow-icon [post]=\"post\" [userEmail]=\"userEmail\">Follow</app-follow-icon>\r\n\r\n\r\n                    <ion-button (click)=\"postPage(post)\">\r\n                    <ion-icon style=\" position: relative; left: -5px;\"  name=\"chatboxes\" ></ion-icon>\r\n                    ({{post.comments.length}})\r\n                    </ion-button>\r\n\r\n                  </ion-buttons>\r\n              </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n       </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'add-post',
        loadChildren: () => __webpack_require__.e(/*! import() | add-post-add-post-module */ "add-post-add-post-module").then(__webpack_require__.bind(null, /*! ./add-post/add-post.module */ "./src/app/pages/posts/add-post/add-post.module.ts")).then(m => m.AddPostPageModule)
    },
    {
        path: 'post-page/:_id',
        loadChildren: () => __webpack_require__.e(/*! import() | post-page-post-page-module */ "post-page-post-page-module").then(__webpack_require__.bind(null, /*! ./post-page/post-page.module */ "./src/app/pages/posts/post-page/post-page.module.ts")).then(m => m.PostPagePageModule)
    },
    {
        path: 'following',
        loadChildren: () => __webpack_require__.e(/*! import() | following-following-module */ "following-following-module").then(__webpack_require__.bind(null, /*! ./following/following.module */ "./src/app/pages/posts/following/following.module.ts")).then(m => m.FollowingPageModule)
    }
];
let PostRoutingModule = class PostRoutingModule {
};
PostRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PostRoutingModule);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/pages/posts/post-routing.module.ts");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared.module */ "./src/app/components/shared.module.ts");









let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
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



/***/ }),

/***/ "./src/app/pages/posts/posts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post {\n  padding-top: 20px;\n  margin-bottom: 90px;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px #888;\n}\n\n.user-details {\n  position: fixed;\n  background: none;\n  height: 200px;\n}\n\nion-toolbar {\n  --background: none;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 30px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 30px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\nform {\n  width: 100%;\n  border-top: 1px solid rgba(50, 50, 50, 0.2);\n}\n\n.post-content {\n  position: relative;\n  left: 6px;\n  font-size: 1em;\n  line-height: 25px;\n  width: 94%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  -webkit-transform: 0.5s;\n          transform: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-button {\n  width: 100px;\n  --border-width: 1px;\n  --border-color: #005191;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #005191;\n  font-size: 0.6em;\n  margin-right: 25px;\n}\n\n.follow {\n  --border-width: 1px;\n  width: 100px;\n  --border-color: #1baf88;\n  --border-style: solid;\n  border-radius: 5px;\n  color: #1baf88;\n  font-size: 0.7em;\n  margin-right: 10px;\n}\n\nion-item {\n  --background: none;\n}\n\n.followed-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: block;\n  width: 200px;\n  margin-top: 20px;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88);\n  font-weight: 800;\n  display: block;\n  width: 200px;\n  margin-top: 20px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --background-focused: #FFB351;\n  --background-hover: #FFB351;\n  --background-activated: #FFB351;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXkgRllGXFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxwb3N0c1xccG9zdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNFRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ0NGO0VERUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0FGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDQ0Y7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjODg4O1xyXG59XHJcblxyXG4udXNlci1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4udXB2b3Rle1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLS1jb2xvcjogIzAwNTE5MTtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMwMDUxOTE7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZG93bnZvdGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAtLWNvbG9yOiAjMDA1MTkxO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzAwNTE5MTtcclxuICAgIC0tZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG4udXB2b3RlZC10b2FzdCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xyXG59XHJcbi5kb3dudm90ZWQtdG9hc3Qge1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcclxufVxyXG5cclxuLmZvbGxvd2VkLXRvYXN0IHtcclxuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XHJcbn1cclxuLnVuZm9sbG93ZWQtdG9hc3Qge1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMC4yKTtcclxufVxyXG5cclxuLnBvc3QtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDZweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICB3aWR0aDogOTQlO1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgdHJhbnNmb3JtOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcclxufVxyXG5cclxuLmNvbW1lbnQtYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLS1jb2xvcjogIzAwNTE5MTtcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmZvbGxvd3tcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAtLWJvcmRlci1jb2xvcjogIzFiYWY4ODtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjMWJhZjg4O1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZm9sbG93ZWQtYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbW1lbnQtaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbn1cclxuXHJcbi5jb21tZW50LWlucHV0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogNTBweCAwIDgwcHggMDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbn1cclxuXHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRkZCMzUxO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZGQjM1MTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xyXG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XHJcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn0iLCIucG9zdCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjODg4O1xufVxuXG4udXNlci1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnVwdm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cbi51cHZvdGUgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZG93bnZvdGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cbi5kb3dudm90ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnVwdm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG59XG5cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cblxuLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTAsIDUwLCA1MCwgMC4yKTtcbn1cblxuLnBvc3QtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNnB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA5NCU7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDgwcHg7XG4gIHRyYW5zZm9ybTogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuLmNvbW1lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmZvbGxvdyB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLS1ib3JkZXItY29sb3I6ICMxYmFmODg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzFiYWY4ODtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmZvbGxvd2VkLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGRkIzNTE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let PostsPage = class PostsPage {
    constructor(router, posts, profile, toast, formBuilder) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        // Get all for post for this section
        this.posts.getPosts().subscribe(posts => {
            this.allPosts = Object.values(posts).reverse();
            for (const post of this.allPosts) {
                post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(post.date), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
            this.posts.commentsSubject$.subscribe(comments => {
                this.allPosts.comments = comments;
            });
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
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userFullName = details['fullName'];
            this.followedPostLength = Object.values(details['followedPost']).length;
            console.log('User email: ' + this.userEmail);
        });
    }
    postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    }
    follow() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Upvoting');
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
            followToast.present();
        });
    }
    unFollowToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const unFollowToast = yield this.toast.create({
                cssClass: 'unfollowed-toast',
                message: 'You are UNFOLLOWING this post',
                duration: 2000
            });
            unFollowToast.present();
        });
    }
    upVotePost(postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Upvoting');
            yield this.posts.upVotePost(postID, this.userEmail);
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
    downVotePost(postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('Downvoting');
            yield this.posts.downVotePost(postID, this.userEmail);
            yield this.downVoteToast();
        });
    }
    downVoteToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const upVoteToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this post.',
                duration: 2000
            });
            upVoteToast.present();
        });
    }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.posts.getPosts().subscribe(jobs => {
                this.allPosts = Object.values(jobs).reverse();
                console.log(this.allPosts);
                for (const post of this.allPosts) {
                    post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(post.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
            });
            yield setTimeout(() => {
                const toast = this.toast.create({
                    message: 'Inspiration Page has been refreshed',
                    duration: 3000
                });
                event.target.complete();
                toast.then(toast => toast.present());
            }, 2000);
        });
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    following() {
        this.router.navigate(['/home/posts/following']);
    }
    comment(comment, postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Reset Comment Input
            this.commentForm.reset();
            const date = yield Date.now();
            console.log('Posting comment');
            console.log('Post ID: ' + postID);
            yield this.posts.comment(postID, date, this.userFullName, this.userEmail, comment);
            yield this.posts.getPostInfo(postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
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
            yield this.router.navigate(['/home/posts/post-page', postID]);
        });
    }
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.page.scss */ "./src/app/pages/posts/posts.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], PostsPage);



/***/ })

}]);
//# sourceMappingURL=pages-posts-posts-module-es2015.js.map