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


    __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\r\n <ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title slot=\"end\">Following</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- fab placed to the bottom end -->\r\n    <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\"               horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button (click)=\"addPost()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- Desktop -->\r\n    <ion-grid class=\"ion-hide-md-down\">\r\n\r\n    <!-- Header -->\r\n    <ion-row style=\"margin: 5% 0% 3% 0%;\">\r\n      <ion-col offset=\"3\" size=\"2\">\r\n        <h1>Followed Posts</h1>\r\n      </ion-col>\r\n      <ion-col push=\"2\" size=\"2\">\r\n        <ion-button class=\"add-button\"  (click)=\"addPost()\">\r\n          Add Post\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col push=\"1\" size=\"2\">\r\n        <ion-button class=\"back-button\"  (click)=\"back()\">\r\n           Back\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <!-- Posts -->\r\n      <ion-col offset=\"3\" size=\"6\">\r\n        <ion-row *ngFor=\"let post of allFollowedPosts\" class=\"post\">\r\n\r\n          <!-- Profile Header -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; left: 5px; top: 4px;\" >\r\n            <!-- Profile Picture -->\r\n            <ion-col size=\"1\">\r\n              <img src=\"../../assets/batman-pro-pic.png\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\r\n            </ion-col>\r\n\r\n            <!-- Post Creator's Name -->\r\n            <ion-col size=\"8\">\r\n              <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\r\n            </ion-col>\r\n\r\n            <!-- Date -->\r\n            <ion-col size=\"2\">\r\n                <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Content -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <!-- 1080x1350 -->\r\n              <ion-col size=\"12\" (click)=\"postPage(post)\">\r\n               <p class=\"post-content\">{{post.post}}</p>\r\n              </ion-col>\r\n           </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Comment -->\r\n          <ion-col size=\"12\">\r\n            <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\r\n              <ion-col size=\"12\">\r\n                <ion-item lines=\"none\">\r\n                 <form (ngSubmit)=\"comment(this.commentForm.value, this.post._id)\" [formGroup]=\"commentForm\">\r\n                    <ion-input\r\n                      class=\"comment\"\r\n                      type=\"text\"\r\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\r\n                    </ion-input>\r\n                    <ion-button\r\n                      style=\"float: right;\"\r\n                      class=\"comment-post-button\"\r\n                      *ngIf=\"!commentForm\r\n                              .get('comment')\r\n                              .pristine && commentForm.value.comment.length >= 3\"\r\n                        name=\"send\">Post\r\n                      </ion-button>\r\n                 </form>\r\n\r\n        </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <!-- Post Buttons -->\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <ion-col push=\"1\" size=\"10\">\r\n                <ion-toolbar class=\"post-toolbar\" style=\"--background: none;\">\r\n                  <ion-buttons slot=\"end\">\r\n                      <!-- Icons -->\r\n                        <app-follow-icon [post]=\"post\" [userEmail]=\"userEmail\">Follow</app-follow-icon>\r\n\r\n\r\n                    <ion-button (click)=\"postPage(post)\">\r\n                    <ion-icon style=\" position: relative; left: -5px;\"  name=\"chatboxes\" ></ion-icon>\r\n                    ({{post.comments.length}})\r\n                    </ion-button>\r\n\r\n                  </ion-buttons>\r\n               </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";
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


    var _components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/shared.module */
    "./src/app/components/shared.module.ts");
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
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _following_routing_module__WEBPACK_IMPORTED_MODULE_6__["FollowingPageRoutingModule"]],
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


    __webpack_exports__["default"] = ".post {\n  margin-bottom: 90px;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px #888;\n}\n\nform {\n  width: 94%;\n  border-top: 1px solid rgba(50, 50, 50, 0.2);\n}\n\n.post-content {\n  position: relative;\n  left: 6px;\n  font-size: 1em;\n  line-height: 25px;\n  width: 94%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  -webkit-transform: 0.5s;\n          transform: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #005191);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88);\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 20px;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --background-focused: #FFB351;\n  --background-hover: #FFB351;\n  --background-activated: #FFB351;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvZm9sbG93aW5nL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xccG9zdHNcXGZvbGxvd2luZ1xcZm9sbG93aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdHMvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLDJDQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNERjs7QURJQTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRE9JO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0pOOztBRFNBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURVQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFVBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ1BGO0VEVUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ1JGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDUEY7RURVQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2ZvbGxvd2luZy9mb2xsb3dpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucG9zdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzg4ODtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDk0JTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MCwgNTAsIDUwLCAwLjIpO1xyXG59XHJcblxyXG4ucG9zdC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiA5NCU7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogODBweDtcclxuICB0cmFuc2Zvcm06IDAuNXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4udG9vbGJhciA+IGlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIwOSwyMTYsMjI0LDAuMTMpO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LXRvb2xiYXIge1xyXG4gIGlvbi1idXR0b25zIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAtLWNvbG9yOiAjMDA1MTkxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGRkIzNTE7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRkZCMzUxO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XHJcbiAgLS1jb2xvci1mb2N1c2VkOiB3aGl0ZTtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS11cCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufSIsIi5wb3N0IHtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzg4ODtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA5NCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG59XG5cbi5wb3N0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogOTQlO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9vbGJhciA+IGlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDksMjE2LDIyNCwwLjEzKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cbi50b29sYmFyID4gaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLnBvc3QtdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjRkOGE4LCAjMWJhZjg4KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGRkIzNTE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";
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

    let FollowingPage = class FollowingPage {
      constructor(router, posts, profile, toast, formBuilder) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
      }

      ngOnInit() {
        // Get the User's Followed Posts
        this.profile.getUserDetails().subscribe(details => {
          this.userID = details['_id'];
          this.posts.getFollowedPost(this.userID).subscribe(posts => {
            this.allFollowedPosts = Object.values(posts).reverse();

            for (const post of this.allFollowedPosts) {
              post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(post.date), 'MMMM do, yyyy');
            }

            console.log(this.allFollowedPosts);
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
    }];

    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./following.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./following.page.scss */
      "./src/app/pages/posts/following/following.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], FollowingPage);
    /***/
  }
}]);
//# sourceMappingURL=following-following-module-es5.js.map