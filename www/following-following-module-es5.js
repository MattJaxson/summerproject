(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["following-following-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPostsFollowingFollowingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Following</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- fab placed to the bottom end -->\n    <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <ion-grid>\n\n      <!-- Desktop Header -->\n      <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n        <ion-col offset=\"2.5\" size=\"2.5\">\n          <h1>Followed Posts</h1>\n        </ion-col>\n        <ion-col push=\"1.8\" size=\"2\">\n          <ion-button class=\"add-button\"  (click)=\"addPost()\">\n            Add Post\n          </ion-button>\n        </ion-col>\n        <ion-col push=\"1\" size=\"2\">\n          <ion-button class=\"back-button\"  (click)=\"back()\">\n            Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Posts -->\n      <ion-row class=\"ion-justify-content-center\">\n\n        <ion-col *ngIf=\"allFollowedPosts.length === 0\" size=\"6\">\n          <p style=\"font-size: 1.4em;\">You are currently not following any posts. Please click the follow button on any Post to add it to this page.</p>\n        </ion-col>\n\n        <ion-col size-xs=\"11\" size-sm=\"8\" size=\"6\">\n          <ion-row *ngFor=\"let post of allFollowedPosts\" class=\"post\">\n\n            <!-- Profile Header -->\n            <ion-col size=\"12\">\n              <ion-row style=\"position: relative; left: 5px; top: 4px;\" >\n              <!-- Profile Picture -->\n              <ion-col offset=\"0.5\" size=\"1\">\n                <img src=\"../../../../assets/aaron.jpg\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n              </ion-col>\n\n              <!-- Post Creator's Name -->\n              <ion-col size=\"8\">\n                <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n              </ion-col>\n\n              <!-- Date -->\n              <ion-col size=\"2\">\n                  <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n              </ion-col>\n\n            </ion-row>\n            </ion-col>\n\n            <!-- Post Content -->\n            <ion-col size=\"12\">\n              <ion-row>\n                <!-- 1080x1350 -->\n                <ion-col offset=\"0.5\" size=\"11\" (click)=\"postPage(post)\">\n                <p class=\"post-content\">{{post.post}}</p>\n                </ion-col>\n            </ion-row>\n            </ion-col>\n\n            <!-- Comment -->\n            <ion-col size=\"12\">\n              <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n                <ion-col offset=\"0.5\" size=\"11\">\n                  <ion-item lines=\"none\">\n                  <form (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\n                    <ion-textarea\n                        class=\"comment-input\"\n                        autogrow=\"true\"\n                        autocapitalize=\"true\"\n                        rows=\"5\"\n                        spellcheck=\"true\"\n                        wrap=\"soft\"\n                        type=\"text\"\n                        placeholder=\"Add a Comment\" formControlName=\"comment\">\n                      </ion-textarea>\n                      <!-- Comment Post Button -->\n                      <ion-button\n                        style=\"float: right;\"\n                        class=\"comment-post-button\"\n                        *ngIf=\"!commentForm\n                                .get('comment')\n                                .pristine && commentForm.value.comment.length >= 3\"\n                          name=\"send\"\n                          type=\"submit\">Post\n                      </ion-button>\n                  </form>\n\n          </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n            <!-- Post Buttons -->\n            <ion-col size=\"12\">\n              <ion-row>\n                <!-- Upvote & Downvote-->\n                <ion-col offset=\"0.5\"  size=\"4\">\n                  <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n                </ion-col>\n\n                <!-- Follow & Comment -->\n                <ion-col push=\"1\" size=\"6\">\n                  <app-follow-comment-buttons [postID]=\"post._id\"></app-follow-comment-buttons>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n\n          </ion-row>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/posts/following/following-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FollowingPageRoutingModule */

  /***/
  function srcAppPagesPostsFollowingFollowingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPageRoutingModule", function () {
      return FollowingPageRoutingModule;
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


    var _following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/pages/posts/following/following.page.ts");

    const routes = [{
      path: '',
      component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
    }];
    let FollowingPageRoutingModule = class FollowingPageRoutingModule {};
    FollowingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FollowingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/posts/following/following.module.ts ***!
    \***********************************************************/

  /*! exports provided: FollowingPageModule */

  /***/
  function srcAppPagesPostsFollowingFollowingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function () {
      return FollowingPageModule;
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


    var _following_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./following-routing.module */
    "./src/app/pages/posts/following/following-routing.module.ts");
    /* harmony import */


    var _following_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/pages/posts/following/following.page.ts");

    let FollowingPageModule = class FollowingPageModule {};
    FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _following_routing_module__WEBPACK_IMPORTED_MODULE_6__["FollowingPageRoutingModule"]],
      declarations: [_following_page__WEBPACK_IMPORTED_MODULE_7__["FollowingPage"]]
    })], FollowingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/posts/following/following.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPostsFollowingFollowingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.post {\n  padding-top: 20px;\n  margin-bottom: 90px;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px #888;\n}\n\nform {\n  width: 100%;\n  border-top: 1px solid rgba(50, 50, 50, 0.2);\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  -webkit-transform: 0.5s;\n          transform: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --background-focused: #FFB351;\n  --background-hover: #FFB351;\n  --background-activated: #FFB351;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2ZvbGxvd2luZy9mb2xsb3dpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREtJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBRE9BO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDSkY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFVBQUE7RUNMRjtFRFFBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNORjtBQUNGOztBREhBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ0xGO0VEUUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ05GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9mb2xsb3dpbmcvZm9sbG93aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzg4ODtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAwLjIpO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9vbGJhciA+IGlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDksMjE2LDIyNCwwLjEzKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcblxuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICB9XG59XG5cbi5wb3N0LXRvb2xiYXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgfVxuICB9XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDUwcHggMCA4MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0ZGQjM1MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjODg4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDgwcHg7XG4gIHRyYW5zZm9ybTogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50b29sYmFyID4gaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwOSwyMTYsMjI0LDAuMTMpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuLnRvb2xiYXIgPiBpb24tYnV0dG9ucyA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ucG9zdC10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuXG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogNTBweCAwIDgwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0ZGQjM1MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/following/following.page.ts ***!
    \*********************************************************/

  /*! exports provided: FollowingPage */

  /***/
  function srcAppPagesPostsFollowingFollowingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPage", function () {
      return FollowingPage;
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


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let FollowingPage = class FollowingPage {
      constructor(router, posts, profile, toast, formBuilder, eventEmitterService, location) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.allFollowedPosts = [];
      }

      ngOnInit() {
        this.location.onPopState(() => {
          this.eventEmitterService.onBackAction();
        }); // Get the User's Followed Posts

        this.profile.getUserDetails().subscribe(details => {
          console.log('User ID from Following Page OnInit');
          this.userID = details['_id'];
          this.posts.getFollowedPost(this.userID).subscribe(data => {
            this.allFollowedPosts = Object.values(data).reverse();
            console.log(data);

            for (const post of this.allFollowedPosts) {
              post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(post.date), 'MMMM do, yyyy');
            }

            return this.allFollowedPosts;
          });
        });
        console.log('Got Followed Posts'); // To collect comment data

        this.commentForm = this.formBuilder.group({
          comment: ['']
        });
      }

      postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
      }

      addPost() {
        this.router.navigate(['/home/posts/add-post']);
      }

      back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/posts']);
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

    FollowingPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
    }, {
      type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]
    }];

    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./following.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./following.page.scss */
      "./src/app/pages/posts/following/following.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]])], FollowingPage);
    /***/
  }
}]);
//# sourceMappingURL=following-following-module-es5.js.map