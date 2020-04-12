(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"], {
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button (click)=\"ScrollToTop()\">\n            <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\n          </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n\n        <ion-row class=\"ion-justify-content-center\">\n\n          <ion-col\n            size-xs=\"12\" push-xs=\"0\"\n            size-sm=\"10\" push-sm=\"\"\n            size-md=\"8\"  push-md=\"\"\n            size-lg=\"6\"  push-lg=\"\"\n            size-xl=\"6\"  push-xl=\"\"\n            style=\"margin-bottom: 90px; background: white; border-radius: 5px; border: 1px solid #999; padding: 50px\" >\n\n            <ion-row>\n\n            <!-- Post Header -->\n            <ion-col size=\"2\">\n                <img style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\" src=\"../../assets/batman-pro-pic.png\" />\n            </ion-col>\n\n            <ion-col size=\"8\">\n              <h6 style=\"font-size: 1.2em; font-weight: 700; padding-left: 0px;\">{{creatorName}}</h6>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{date}}</h6>\n            </ion-col>\n\n            <!-- Post Content -->\n            <ion-col style=\"height: 40vh; padding: 20px; background: white\" size=\"12\">\n              <p style=\"color: #333; font-size: 1em; line-height: 25px;\">{{post}}</p>\n            </ion-col>\n\n            <!-- Comment -->\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\">\n                <form style=\"border-top: 1px solid #999; padding-top: 20px;\"  (ngSubmit)=\"comment(this.commentForm.value)\" [formGroup]=\"commentForm\">\n                    <ion-input type=\"text\" placeholder=\"Comment\" formControlName=\"comment\">\n                    </ion-input>\n                    <!-- <ion-button type=\"submit\">\n                      comment\n                    </ion-button> -->\n                </form>\n                <ion-icon\n                *ngIf=\"!commentForm\n                  .get('comment')\n                  .pristine\"\n                slot=\"end\"\n                name=\"send\"\n                (click)=\"comment(this.commentForm.value)\"></ion-icon>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n\n             <!-- Post Actions -->\n           <ion-col style=\"margin-top: 0px; height: 50px;\" size=\"12\">\n              <ion-toolbar style=\"--background: none;\">\n                  <ion-buttons slot=\"end\">\n                    <ion-button style=\"font-size: 0.8em; color: white;\">\n                      <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n                      Follow\n                    </ion-button>\n                    <ion-button style=\"font-size: 0.8em; color: white;\">\n                      <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n                      Share\n                    </ion-button>\n                    </ion-buttons>\n              </ion-toolbar>\n           </ion-col>\n\n           <!-- If No Comments -->\n           <ion-col *ngIf=\"comments.length === 0\" size=\"12\">\n             <h4>This post has no comments</h4>\n           </ion-col>\n\n           <!-- Comments -->\n           <ion-col *ngFor=\"let comment of comments\" class=\"comment\"  size=\"12\">\n              <ion-item>\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\n                  <img src=\"../../assets/goku-pro-pic.png\">\n                </ion-avatar>\n                <ion-label>\n                 <h6 style=\"opacity: 0.5\">{{ comment.userFullName}} - {{ comment.date }} </h6>\n                 </ion-label>\n               </ion-item>\n\n               <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-label class=\"comment-text ion-text-wrap\">{{ comment.comment}}.</ion-label>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col size=\"12\">\n                    <ion-toolbar>\n                      <ion-buttons slot=\"secondary\">\n                          {{comment.likes}}\n                       <ion-button>\n                          <ion-icon color=\"primary\" slot=\"icon-only\" name=\"thumbs-up\"></ion-icon>\n                       </ion-button>\n                       <ion-button>\n                         <ion-icon color=\"primary\" slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                       </ion-button>\n                       <ion-button>\n                         <ion-icon color=\"primary\" slot=\"icon-only\" name=\"document\"></ion-icon>\n                       </ion-button>\n                      </ion-buttons>\n                    </ion-toolbar>\n                  </ion-col>\n           </ion-col>\n\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n      </ion-grid>\n</ion-content>\n";
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

    const routes = [{
      path: '',
      component: _post_page_page__WEBPACK_IMPORTED_MODULE_3__["PostPagePage"]
    }];
    let PostPagePageRoutingModule = class PostPagePageRoutingModule {};
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-page-routing.module */
    "./src/app/pages/posts/post-page/post-page-routing.module.ts");
    /* harmony import */


    var _post_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-page.page */
    "./src/app/pages/posts/post-page/post-page.page.ts");

    let PostPagePageModule = class PostPagePageModule {};
    PostPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _post_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPagePageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-item {\n  height: auto;\n  margin: 20px 0 20px 0;\n  --background: none;\n  --border-radius: 5px;\n  --border-color: white;\n  --border-style: solid;\n  --border-width: 1.5px;\n  --inner-padding-start: 10px;\n}\n\nion-fab {\n  opacity: 0;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\nion-icon {\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: send-icon-slide-in 0.25s ease-in forwards;\n          animation: send-icon-slide-in 0.25s ease-in forwards;\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #777;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n}\n\n.comment {\n  height: auto;\n  margin-bottom: 20px;\n  padding-top: 20px;\n  border-top: 2px solid rgba(244, 244, 244, 0.8);\n}\n\n.comment ion-item {\n  padding: 0px;\n}\n\n.comment ion-toolbar {\n  --background: rgba(244, 244, 244, 0.5);\n  --border-radius: 5px;\n}\n\n.comment ion-button ion-icon {\n  --color: blue;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esc0RBQUE7VUFBQSw4Q0FBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDQSxjQUFBO0FDQ0o7O0FESUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDREY7RURHQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDREY7QUFDRjs7QURQQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7RUNERjtFREdBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNERjtBQUNGOztBRElBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQ0ZGOztBRElJO0VBQ0UsWUFBQTtBQ0ZOOztBREtJO0VBQ0Usc0NBQUE7RUFDQSxvQkFBQTtBQ0hOOztBRE9NO0VBQ0UsYUFBQTtBQ0xSOztBRGVBO0VBQ0UsV0FBQTtBQ1pGOztBRGVBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ1pGO0VEY0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0UsVUFBQTtFQ1pKO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDWkY7RURjQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDRSxVQUFBO0VDWko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWItc2xpZGUtdXAgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcblxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWItc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNlbmQtaWNvbi1zbGlkZS1pbiAwLjI1cyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG4ucG9zdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbi5oZWFkZXItYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNvbW1lbnQtZm9ybXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uY29tbWVudC1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uY29tbWVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuOCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuNSk7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgLS1jb2xvcjogYmx1ZTtcbiAgICAgIH1cbiAgICB9XG59XG5cbi8vIGlvbi1pbnB1dCB7XG4vLyAgIC0tYmFja2dyb3VuZDogIG5vbmU7XG4vLyAgIC0tY29sb3I6IHdoaXRlO1xuLy8gfVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc2VuZC1pY29uLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxufSIsImlvbi1pdGVtIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMS41cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZCMzUxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbn1cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNlbmQtaWNvbi1zbGlkZS1pbiAwLjI1cyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG4ucG9zdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbi5oZWFkZXItYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNvbW1lbnQtZm9ybSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG5cbi5jb21tZW50LXRleHQge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmNvbW1lbnQtYXZhdGFyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmNvbW1lbnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjgpO1xufVxuLmNvbW1lbnQgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY29tbWVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb21tZW50IGlvbi1idXR0b24gaW9uLWljb24ge1xuICAtLWNvbG9yOiBibHVlO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc2VuZC1pY29uLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
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

    let PostPagePage = class PostPagePage {
      constructor(activatedRoute, router, posts, profile, formBuilder, toast) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.showFab = false; // debugging

        this.scroll = '';
      }

      ngOnInit() {
        // Get the user's information to insert into the comment metadata
        this.profile.getUserDetails().subscribe(details => {
          this.userEmail = details['email'];
          this.userFullName = details['fullName'];
        }); // To collect comment data

        this.commentForm = this.formBuilder.group({
          comment: ['']
        });
        this.commentForm.controls.comment.valueChanges.subscribe(data => {
          if (data === '') {
            console.log('Value is empty');
            this.commentForm.markAsPristine();
          }

          console.log(this.commentForm);
        }); // Get Post ID from navigation params on the main posts tab

        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.postID = id; // Get information about selected post.
        // Format its date on the front end
        // initiate this components post metadata from data in Posts Service

        this.posts.getPostInfo(this.postID).subscribe(post => {
          console.log(post); // tslint:disable-next-line: no-string-literal

          this.creatorName = post['creatorName'];
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
        }); // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.

        this.posts.commentsSubject$.subscribe(commentsFromSub => {
          this.comments = commentsFromSub;
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

      report(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('Attemtping to Report Comment');
        });
      }

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

    PostPagePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
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
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], PostPagePage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ion-fab', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFab"])], PostPagePage.prototype, "fab", void 0);
    PostPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-page.page.scss */
      "./src/app/pages/posts/post-page/post-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], PostPagePage);
    /***/
  }
}]);
//# sourceMappingURL=post-page-post-page-module-es5.js.map