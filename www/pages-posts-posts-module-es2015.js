(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-md-up\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-title>\r\n      Posts\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"following()\">\r\n          <ion-icon name=\"chatboxes\"></ion-icon>\r\n        Followed\r\n      </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n\r\n      <!-- Posts -->\r\n      <ion-col\r\n        size-xs=\"12\" push-xs=\"0\"\r\n        size-sm=\"10\" push-sm=\"\"\r\n        size-md=\"8\"  push-md=\"\"\r\n        size-lg=\"6\"  push-lg=\"\"\r\n        size-xl=\"6\"  push-xl=\"\">\r\n\r\n        <!-- Post -->\r\n        <ion-row *ngFor=\"let post of allPosts\" style=\"margin-bottom: 90px; background: white; border-radius: 5px; border: 1px solid #999;\" class=\"ion-justify-content-center\" padding>\r\n\r\n          <ion-row>\r\n              <!-- Post Header -->\r\n\r\n          <!-- Profile Picture -->\r\n          <ion-col size=\"3\">\r\n            <img src=\"../../assets/batman-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\">\r\n          </ion-col>\r\n\r\n          <!-- Post Creator's Name -->\r\n          <ion-col size=\"7\">\r\n            <h6 style=\"font-size: 1.2em; font-weight: 700; padding-left: 0px;\">{{post.creatorName}}</h6>\r\n          </ion-col>\r\n\r\n          <!-- Date -->\r\n          <ion-col size=\"2\">\r\n              <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{date}} ago</h6>\r\n          </ion-col>\r\n\r\n           <!-- Post Content -->\r\n          <ion-col size=\"12\" (click)=\"postPage(post)\" style=\"height: 40vh; padding: 20px; background: white\">\r\n\r\n             <p style=\"font-size: 1em; line-height: 25px; width: 100%;\">{{post.post}}</p>\r\n\r\n          </ion-col>\r\n\r\n          <!-- Post Actions -->\r\n          <ion-col style=\"margin-top: 10px; height: 50px;\" size=\"12\">\r\n            <ion-toolbar class=\"post-toolbar\" style=\"--background: none;\">\r\n              <ion-buttons slot=\"end\">\r\n                  <!-- Icons -->\r\n                 <ion-button>\r\n                    <app-follow-icon [post]=\"post\" [userEmail]=\"userEmail\"></app-follow-icon>\r\n                  Follow\r\n                </ion-button>\r\n\r\n                <ion-button (click)=\"postPage(post)\">\r\n                <ion-icon style=\" position: relative; left: -5px;\"  name=\"chatboxes\" ></ion-icon>\r\n                ({{post.comments.length}})\r\n                </ion-button>\r\n\r\n              </ion-buttons>\r\n           </ion-toolbar>\r\n\r\n                <hr/>\r\n\r\n          </ion-col>\r\n\r\n          <!-- Comment -->\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\">\r\n              <form style=\"border-top: 1px solid #999; padding-top: 20px;\" (ngSubmit)=\"comment(this.commentForm.value, this .post._id)\" [formGroup]=\"commentForm\">\r\n                <ion-input type=\"text\" placeholder=\"Comment\" formControlName=\"comment\">\r\n                </ion-input>\r\n             </form>\r\n             <ion-icon\r\n              *ngIf=\"!commentForm\r\n              .get('comment')\r\n              .pristine\"\r\n              slot=\"end\"\r\n              name=\"send\"></ion-icon>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          </ion-row>\r\n\r\n        </ion-row>\r\n\r\n      </ion-col>\r\n\r\n      <!-- User Info -->\r\n      <ion-col\r\n        size-xs=\"0\" push-xs=\"0\"\r\n        size-sm=\"0\" push-sm=\"0\"\r\n        size-md=\"0\" push-md=\"0\"\r\n        size-lg=\"2\" push-lg=\"0\"\r\n        size-xl=\"2\" push-xl=\"0\">\r\n\r\n          <ion-row style=\"position: fixed; background: none; height: 200px; width: 300px; padding: 25px 0 0 40px;\">\r\n\r\n            <ion-col size=\"4\">\r\n              <img src=\"../../assets/goku-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\">\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <h6 style=\"font-size: 1.2em; font-weight: 700; padding-left: 0px;\">Son Goku\r\n              </h6>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\">\r\n              <ion-button class=\"followed-button\" (click)=\"following()\">\r\n                Followed (X)\r\n              </ion-button>\r\n              <ion-button class=\"add-button\"  (click)=\"addTextPost()\">\r\n                Add Post\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <!-- Floating Action Button -->\r\n  <!-- <ion-fab class=\"ion-hide-md-up\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\" style=\"color: #FFB351\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" (click)=\"addTextPost()\">\r\n        <p>Add Post</p>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\">\r\n        <p>Add Photo</p>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\">\r\n        <p>Add Video</p>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\">\r\n        <p>Add Link</p>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab> -->\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/follow-icon/follow-icon.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93LWljb24vZm9sbG93LWljb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/follow-icon/follow-icon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
  \*****************************************************************/
/*! exports provided: FollowIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowIconComponent", function() { return FollowIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");




let FollowIconComponent = class FollowIconComponent {
    constructor(posts) {
        this.posts = posts;
        this.followState = 'not-followed';
        this.iconName = 'checkbox-outline';
    }
    ngOnInit() { }
    toggleLikeState(post) {
        if (this.followState === 'not-followed') {
            this.followState = 'followed';
            this.iconName = 'checkbox';
            console.log('Followed: ' + post._id + '\n' + this.userEmail);
            this.posts.followPost(post._id, this.userEmail);
        }
        else {
            this.followState = 'not-followed';
            this.iconName = 'checkbox-outline';
            console.log('Un-Followed');
            this.posts.unFollowPost(post._id, this.userEmail);
        }
    }
};
FollowIconComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FollowIconComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FollowIconComponent.prototype, "userEmail", void 0);
FollowIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-follow-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./follow-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('follow', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#d1d8e0',
                    opacity: '0.4',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#21ce99',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-followed <=> followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./follow-icon.component.scss */ "./src/app/components/follow-icon/follow-icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]])
], FollowIconComponent);



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
/* harmony import */ var _components_follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/follow-icon/follow-icon.component */ "./src/app/components/follow-icon/follow-icon.component.ts");









let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"] }])
        ],
        declarations: [
            _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"],
            _components_follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_8__["FollowIconComponent"]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  margin: 20px 0 0 0;\n}\n\nform {\n  width: 100%;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.followed-button {\n  --color: #999;\n  --background: none;\n  --border-style: solid;\n  --border-color: #999;\n  --border-width: 2px;\n  font-weight: 800;\n  display: block;\n  width: 200px;\n  margin-top: 20px;\n}\n\n.add-button {\n  --color: #21ce99;\n  --background: none;\n  --border-style: solid;\n  --border-color: #21ce99;\n  --border-width: 2px;\n  font-weight: 800;\n  display: block;\n  width: 200px;\n  margin-top: 20px;\n}\n\nion-fab-button {\n  --background: white;\n  --background-focused: #FFB351;\n  --background-hover: #FFB351;\n  --background-activated: #FFB351;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  --border-width: 2px;\n  --border-style: solid;\n  --padding-end: 50px;\n}\n\nion-fab-list ion-fab-button {\n  position: relative;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  --background: white;\n  --color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXlcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXHBvc3RzXFxwb3N0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURLSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBRE9BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvb2xiYXIgPiBpb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyMDksMjE2LDIyNCwwLjEzKTtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9zdC10b29sYmFyIHtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvbGxvd2VkLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogIzk5OTtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIC0tY29sb3I6ICMyMWNlOTk7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci1jb2xvcjogIzIxY2U5OTtcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0ZGQjM1MTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGRkIzNTE7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQjM1MTtcclxuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLXBhZGRpbmctZW5kOiA1MHB4O1xyXG59XHJcblxyXG5pb24tZmFiLWxpc3Qge1xyXG5cclxuICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzU1NTtcclxuICB9XHJcbn1cclxuXHJcbiIsImlvbi1yb3cge1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXIgPiBpb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA5LDIxNiwyMjQsMC4xMyk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG4udG9vbGJhciA+IGlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5wb3N0LXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLmZvbGxvd2VkLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM5OTk7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogIzk5OTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiAjMjFjZTk5O1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICMyMWNlOTk7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGRkIzNTE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZGQjM1MTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQjM1MTtcbiAgLS1jb2xvci1mb2N1c2VkOiB3aGl0ZTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLXBhZGRpbmctZW5kOiA1MHB4O1xufVxuXG5pb24tZmFiLWxpc3QgaW9uLWZhYi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzU1NTtcbn0iXX0= */");

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
            this.allPosts = Object.values(posts);
            let date = this.allPosts[0].date;
            date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistance"])(new Date(), new Date(date), { includeSeconds: true });
            this.date = date;
            console.log(this.date);
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
            console.log('User email: ' + this.userEmail);
        });
    }
    postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.posts.getPosts().subscribe(jobs => {
                this.allPosts = Object.values(jobs);
                console.log(this.allPosts);
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
    addTextPost() {
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



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let PostsService = class PostsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.followersSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    getPosts() {
        console.log('Getting Posts');
        return this.http.get(`${this.BACKEND_URL}/api/posts/`);
    }
    getPostInfo(id) {
        console.log(`Getting information for post id ${id}`);
        return this.http.post(`${this.BACKEND_URL}/api/posts/post-info`, { _id: id });
    }
    comment(postID, date, userFullName, userEmail, { comment: comment }) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/comment`, { postID, date, userFullName, userEmail, comment }).subscribe();
    }
    followPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/follow`, {
            _id: postID,
            email: userEmail
        }).subscribe();
        console.log('Follow Post');
    }
    unFollowPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/unfollow`, {
            _id: postID,
            email: userEmail
        }).subscribe();
        console.log('Un Follow Post');
    }
    getFollowedPost(userId) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/get-followed-posts`, {
            _id: userId
        });
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PostsService);



/***/ })

}]);
//# sourceMappingURL=pages-posts-posts-module-es2015.js.map