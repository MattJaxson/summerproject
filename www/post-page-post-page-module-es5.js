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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [scrollEvents]=\"true\"\r\n  (ionScroll)=\"logScrolling($event)\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n          <ion-fab-button (click)=\"ScrollToTop()\">\r\n            <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\r\n          </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-grid>\r\n\r\n        <ion-row class=\"ion-justify-content-center\">\r\n\r\n          <ion-col\r\n            size-xs=\"12\" push-xs=\"0\"\r\n            size-sm=\"10\" push-sm=\"\"\r\n            size-md=\"8\"  push-md=\"\"\r\n            size-lg=\"6\"  push-lg=\"\"\r\n            size-xl=\"6\"  push-xl=\"\"\r\n            style=\"margin-bottom: 90px; background: white; border-radius: 5px; border: 1px solid #999; padding: 50px\" >\r\n\r\n            <ion-row>\r\n\r\n            <!-- Post Header -->\r\n            <ion-col size=\"2\">\r\n                <img style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\" src=\"../../assets/batman-pro-pic.png\" />\r\n            </ion-col>\r\n\r\n            <ion-col size=\"8\">\r\n              <h6 style=\"font-size: 1.2em; font-weight: 700; padding-left: 0px;\">{{creatorName}}</h6>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"2\">\r\n              <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{date}}</h6>\r\n            </ion-col>\r\n\r\n            <!-- Post Content -->\r\n            <ion-col style=\"height: 40vh; padding: 20px; background: white\" size=\"12\">\r\n              <p style=\"color: #333; font-size: 1em; line-height: 25px;\">{{post}}</p>\r\n            </ion-col>\r\n\r\n            <!-- Comment -->\r\n            <ion-col size=\"12\">\r\n              <ion-item lines=\"none\">\r\n                <form style=\"border-top: 1px solid #999; padding-top: 20px;\"  (ngSubmit)=\"comment(this.commentForm.value)\" [formGroup]=\"commentForm\">\r\n                    <ion-input type=\"text\" placeholder=\"Comment\" formControlName=\"comment\">\r\n                    </ion-input>\r\n                    <!-- <ion-button type=\"submit\">\r\n                      comment\r\n                    </ion-button> -->\r\n                </form>\r\n                <ion-icon\r\n                *ngIf=\"!commentForm\r\n                  .get('comment')\r\n                  .pristine\"\r\n                slot=\"end\"\r\n                name=\"send\"\r\n                (click)=\"comment(this.commentForm.value)\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n\r\n             <!-- Post Actions -->\r\n           <ion-col style=\"margin-top: 0px; height: 50px;\" size=\"12\">\r\n              <ion-toolbar style=\"--background: none;\">\r\n                  <ion-buttons slot=\"end\">\r\n                    <ion-button style=\"font-size: 0.8em; color: white;\">\r\n                      <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\r\n                      Follow\r\n                    </ion-button>\r\n                    <ion-button style=\"font-size: 0.8em; color: white;\">\r\n                      <ion-icon slot=\"start\" name=\"share\"></ion-icon>\r\n                      Share\r\n                    </ion-button>\r\n                    </ion-buttons>\r\n              </ion-toolbar>\r\n           </ion-col>\r\n\r\n           <!-- If No Comments -->\r\n           <ion-col *ngIf=\"comments.length === 0\" size=\"12\">\r\n             <h4>This post has no comments</h4>\r\n           </ion-col>\r\n\r\n           <!-- Comments -->\r\n           <ion-col *ngFor=\"let comment of comments\" class=\"comment\"  size=\"12\">\r\n              <ion-item>\r\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\r\n                  <img src=\"../../assets/goku-pro-pic.png\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                 <h6 style=\"opacity: 0.5\">{{ comment.userFullName}} - {{ comment.date }} </h6>\r\n                 </ion-label>\r\n               </ion-item>\r\n\r\n               <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label class=\"comment-text ion-text-wrap\">{{ comment.comment}}.</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\">\r\n                    <ion-toolbar>\r\n                      <ion-buttons slot=\"secondary\">\r\n                          {{comment.likes}}\r\n                       <ion-button>\r\n                          <ion-icon color=\"primary\" slot=\"icon-only\" name=\"thumbs-up\"></ion-icon>\r\n                       </ion-button>\r\n                       <ion-button>\r\n                         <ion-icon color=\"primary\" slot=\"icon-only\" name=\"share-alt\"></ion-icon>\r\n                       </ion-button>\r\n                       <ion-button>\r\n                         <ion-icon color=\"primary\" slot=\"icon-only\" name=\"document\"></ion-icon>\r\n                       </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-toolbar>\r\n                  </ion-col>\r\n           </ion-col>\r\n\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n\r\n\r\n\r\n      </ion-grid>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "ion-item {\n  height: auto;\n  margin: 20px 0 20px 0;\n  --background: none;\n  --border-radius: 5px;\n  --border-color: white;\n  --border-style: solid;\n  --border-width: 1.5px;\n  --inner-padding-start: 10px;\n}\n\nion-fab {\n  opacity: 0;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #005191;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n}\n\nion-icon {\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: send-icon-slide-in 0.25s ease-in forwards;\n          animation: send-icon-slide-in 0.25s ease-in forwards;\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #777;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n}\n\n.comment {\n  height: auto;\n  margin-bottom: 20px;\n  padding-top: 20px;\n  border-top: 2px solid rgba(244, 244, 244, 0.8);\n}\n\n.comment ion-item {\n  padding: 0px;\n}\n\n.comment ion-toolbar {\n  --background: rgba(244, 244, 244, 0.5);\n  --border-radius: 5px;\n}\n\n.comment ion-button ion-icon {\n  --color: blue;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxwb3N0c1xccG9zdC1wYWdlXFxwb3N0LXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0LXBhZ2UvcG9zdC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNDRjs7QURDRTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0EsY0FBQTtBQ0NKOztBRElBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ0RGO0VER0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0RGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDREY7RURHQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUNGRjs7QURJSTtFQUNFLFlBQUE7QUNGTjs7QURLSTtFQUNFLHNDQUFBO0VBQ0Esb0JBQUE7QUNITjs7QURPTTtFQUNFLGFBQUE7QUNMUjs7QURlQTtFQUNFLFdBQUE7QUNaRjs7QURlQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFVBQUE7RUNaRjtFRGNBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNFLFVBQUE7RUNaSjtBQUNGOztBRElBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ1pGO0VEY0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0UsVUFBQTtFQ1pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0LXBhZ2UvcG9zdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1mYWIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBmYWItc2xpZGUtdXAgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcclxuXHJcbiAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQjM1MTtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMwMDUxOTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogc2VuZC1pY29uLXNsaWRlLWluIDAuMjVzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5wb3N0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjgpO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItYXZhdGFyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLmNvbW1lbnQtdGV4dCB7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5jb21tZW50LWF2YXRhciB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC44KTtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjUpO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIC0tY29sb3I6IGJsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaW9uLWlucHV0IHtcclxuLy8gICAtLWJhY2tncm91bmQ6ICBub25lO1xyXG4vLyAgIC0tY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzZW5kLWljb24tc2xpZGUtaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59IiwiaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWItc2xpZGUtdXAgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbmlvbi1mYWIgaW9uLWZhYi1idXR0b24ge1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkIzNTE7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbkBrZXlmcmFtZXMgZmFiLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxufVxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2VuZC1pY29uLXNsaWRlLWluIDAuMjVzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbi5wb3N0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC44KTtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29tbWVudC1mb3JtIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uY29tbWVudC1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uY29tbWVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuOCk7XG59XG4uY29tbWVudCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jb21tZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQ0LCAyNDQsIDAuNSk7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbW1lbnQgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIC0tY29sb3I6IGJsdWU7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBzZW5kLWljb24tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
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