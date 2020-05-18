(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPostsAddPostAddPostPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title slot=\"end\">Add Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid>\n    <!-- Header -->\n    <ion-row class=\"header\" style=\"padding: 5% 0% 3% 0%;\">\n      <ion-col offset=\"3\" size=\"2\">\n        <h1>Make a Post</h1>\n      </ion-col>\n      <ion-col push=\"3\" size=\"2\">\n        <ion-button class=\"orange-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 3%;\">\n      <ion-col  size-xs=\"11\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-md-up\"><span class=\"blue-mobile\">Please keep your content clean.</span> In order to maintain a high standard of content, each post will have to be <span class=\"green-mobile\">verified</span> before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <p class=\"message ion-hide-lg-down\"><span class=\"blue\">Please keep your content clean.</span> In order to maintain a high standard of content, each post will have to be <span class=\"green\">verified</span> before they are added to the Posts feed. Happy posting, and be inspired!</p>\n      </ion-col>\n\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"post(this.creatorName, this.creatorEmail, this.textPostForm.value.textPost)\">\n          <ion-item>\n              <ion-textarea\n              rows=\"15\"\n              auto-grow=\"true\"\n              spellcheck=\"true\"\n              wrap=\"soft\"\n              formControlName=\"textPost\"\n              placeholder=\"What do you have to say?\"></ion-textarea>\n              <ion-button\n                  class=\"orange-button\"\n                  type=\"submit\">\n                 Add Post\n                </ion-button>\n            </ion-item>\n          </form>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-lg=\"6\" style=\"margin-bottom: 100px;\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddPostPageRoutingModule */

  /***/
  function srcAppPagesPostsAddPostAddPostRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPageRoutingModule", function () {
      return AddPostPageRoutingModule;
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


    var _add_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-post.page */
    "./src/app/pages/posts/add-post/add-post.page.ts");

    const routes = [{
      path: '',
      component: _add_post_page__WEBPACK_IMPORTED_MODULE_3__["AddPostPage"]
    }, {
      path: 'verification',
      loadChildren: () => __webpack_require__.e(
      /*! import() | verification-verification-module */
      "verification-verification-module").then(__webpack_require__.bind(null,
      /*! ./verification/verification.module */
      "./src/app/pages/posts/add-post/verification/verification.module.ts")).then(m => m.VerificationPageModule)
    }];
    let AddPostPageRoutingModule = class AddPostPageRoutingModule {};
    AddPostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPostPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddPostPageModule */

  /***/
  function srcAppPagesPostsAddPostAddPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function () {
      return AddPostPageModule;
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


    var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-post-routing.module */
    "./src/app/pages/posts/add-post/add-post-routing.module.ts");
    /* harmony import */


    var _add_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-post.page */
    "./src/app/pages/posts/add-post/add-post.page.ts");

    let AddPostPageModule = class AddPostPageModule {};
    AddPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPostPageRoutingModule"]],
      declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_6__["AddPostPage"]]
    })], AddPostPageModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPostsAddPostAddPostPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background: #005191;\n}\n.header h1 {\n  color: white;\n  font-size: 2em;\n}\n.message p {\n  padding: 10px;\n}\nion-item {\n  --background: none;\n  --border-color: none;\n  --border-radius: 5px;\n}\nion-textarea {\n  --background: white;\n  --border-color: none;\n  padding: 10px 0 0 20px;\n}\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n.green {\n  -webkit-animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n          animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n  font-size: 1.6em;\n}\n.blue {\n  -webkit-animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n          animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n  font-size: 1.6em;\n}\n.green-mobile {\n  -webkit-animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n          animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n  font-size: 1em;\n}\n.blue-mobile {\n  -webkit-animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n          animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n  font-size: 1em;\n}\n@-webkit-keyframes green {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n    font-weight: 800;\n  }\n}\n@keyframes green {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n    font-weight: 800;\n  }\n}\n@-webkit-keyframes blue {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n  }\n}\n@keyframes blue {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n  }\n}\n@-webkit-keyframes green-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n  }\n}\n@keyframes green-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n  }\n}\n@-webkit-keyframes blue-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n    font-size: 1em;\n  }\n}\n@keyframes blue-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NKO0FES0U7RUFDRSxhQUFBO0FDRko7QURNQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0hGO0FET0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxnRkFBQTtVQUFBLHdFQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRFFBO0VBQ0UsK0VBQUE7VUFBQSx1RUFBQTtFQUNBLGdCQUFBO0FDTEY7QURTQTtFQUNFLGdGQUFBO1VBQUEsd0VBQUE7RUFDQSxjQUFBO0FDTkY7QURVQTtFQUNFLCtFQUFBO1VBQUEsdUVBQUE7RUFDQSxjQUFBO0FDUEY7QURXQTtFQUNFO0lBQ0UsWUFBQTtFQ1JGO0VEV0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNURjtBQUNGO0FEQ0E7RUFDRTtJQUNFLFlBQUE7RUNSRjtFRFdBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDVEY7QUFDRjtBRFlBO0VBQ0U7SUFDRSxZQUFBO0VDVkY7RURhQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQ1hGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UsWUFBQTtFQ1ZGO0VEYUE7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNYRjtBQUNGO0FEY0E7RUFDRTtJQUNFLFlBQUE7RUNaRjtFRGVBO0lBQ0UsY0FBQTtFQ2JGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsWUFBQTtFQ1pGO0VEZUE7SUFDRSxjQUFBO0VDYkY7QUFDRjtBRGdCQTtFQUNFO0lBQ0UsWUFBQTtFQ2RGO0VEaUJBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2ZGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsWUFBQTtFQ2RGO0VEaUJBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBiYWNrZ3JvdW5kOiAjMDA1MTkxO1xuXG4gIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cblxuLm1lc3NhZ2Uge1xuXG4gIHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG5pb24tdGV4dGFyZWEge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAwIDAgMjBweDtcbn1cblxuLml0ZW0taW50ZXJhY3RpdmUge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDA7XG59XG5cbmg2IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ncmVlbiB7XG4gIGFuaW1hdGlvbjogZ3JlZW4gMC41cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSAycyBmb3J3YXJkcztcbiAgZm9udC1zaXplOiAxLjZlbTtcblxufVxuXG4uYmx1ZSB7XG4gIGFuaW1hdGlvbjogYmx1ZSAwLjVzIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpIDFzIGZvcndhcmRzO1xuICBmb250LXNpemU6IDEuNmVtO1xuXG59XG5cbi5ncmVlbi1tb2JpbGUge1xuICBhbmltYXRpb246IGdyZWVuIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMnMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMWVtO1xuXG59XG5cbi5ibHVlLW1vYmlsZSB7XG4gIGFuaW1hdGlvbjogYmx1ZSAwLjVzIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpIDFzIGZvcndhcmRzO1xuICBmb250LXNpemU6IDFlbTtcblxufVxuXG5Aa2V5ZnJhbWVzIGdyZWVuIHtcbiAgMCUge1xuICAgIGNvbG9yOiBibGFja1xuICB9XG5cbiAgMTAwJSB7XG4gICAgY29sb3I6ICMxYmFmODg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsdWUge1xuICAwJSB7XG4gICAgY29sb3I6IGJsYWNrXG4gIH1cblxuICAxMDAlIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ3JlZW4tbW9iaWxlIHtcbiAgMCUge1xuICAgIGNvbG9yOiBibGFja1xuICB9XG5cbiAgMTAwJSB7XG4gICAgY29sb3I6ICMxYmFmODg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBibHVlLW1vYmlsZSB7XG4gIDAlIHtcbiAgICBjb2xvcjogYmxhY2tcbiAgfVxuXG4gIDEwMCUge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5oZWFkZXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ubWVzc2FnZSBwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDIwcHg7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAwO1xufVxuXG5oNiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZ3JlZW4ge1xuICBhbmltYXRpb246IGdyZWVuIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMnMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbi5ibHVlIHtcbiAgYW5pbWF0aW9uOiBibHVlIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMXMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbi5ncmVlbi1tb2JpbGUge1xuICBhbmltYXRpb246IGdyZWVuIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMnMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uYmx1ZS1tb2JpbGUge1xuICBhbmltYXRpb246IGJsdWUgMC41cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSAxcyBmb3J3YXJkcztcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbkBrZXlmcmFtZXMgZ3JlZW4ge1xuICAwJSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjMWJhZjg4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmx1ZSB7XG4gIDAlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuQGtleWZyYW1lcyBncmVlbi1tb2JpbGUge1xuICAwJSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjMWJhZjg4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsdWUtbW9iaWxlIHtcbiAgMCUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddPostPage */

  /***/
  function srcAppPagesPostsAddPostAddPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPage", function () {
      return AddPostPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let AddPostPage = class AddPostPage {
      constructor(router, loading, posts, profile, formBuilder) {
        this.router = router;
        this.loading = loading;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder; // Do some sort of Validation Later

        this.validationMessages = {};
      }

      ngOnInit() {
        this.textPostForm = this.formBuilder.group({
          textPost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.profile.getUserDetails().subscribe(details => {
          console.log(details);
          this.creatorEmail = details['email'];
          this.creatorName = details['fullName'];
        });
      }

      back() {
        this.router.navigate(['/home/posts']);
      }

      post(creatorName, creatorEmail, post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.presentLoading();
          yield this.posts.addPost(creatorName, creatorEmail, post).subscribe(data => {
            console.log(data);
          });
          yield this.router.navigate(['home/posts/add-post/verification']);
        });
      }

      presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            message: 'Sending post to be Verified...',
            spinner: 'bubbles',
            duration: 2000
          });
          yield loading.present();
          const {
            role,
            data
          } = yield loading.onDidDismiss();
          console.log('Loading dismissed!');
        });
      }

    };

    AddPostPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
    }];

    AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-post.page.scss */
      "./src/app/pages/posts/add-post/add-post.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], AddPostPage);
    /***/
  }
}]);
//# sourceMappingURL=add-post-add-post-module-es5.js.map