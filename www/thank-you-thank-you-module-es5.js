(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSignUpThankYouThankYouPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"background\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center\" style=\"margin-top: 10%;\">\r\n      <ion-col size-lg=\"4\" offset-lg=\"4\">\r\n        <ion-icon class=\"check-icon\" src=\"../../../assets/icon/white-check.svg\" ></ion-icon>\r\n        <h6 style=\"font-size: 1.5em;\">Thank you for signing up with Find Your Future! You can now login to your account</h6>\r\n        <ion-button (click)=\"goToLogin()\" class=\"thank-you-button\">LOGIN</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ThankYouPageRoutingModule */

  /***/
  function srcAppPagesAuthSignUpThankYouThankYouRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouPageRoutingModule", function () {
      return ThankYouPageRoutingModule;
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


    var _thank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./thank-you.page */
    "./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts");

    const routes = [{
      path: '',
      component: _thank_you_page__WEBPACK_IMPORTED_MODULE_3__["ThankYouPage"]
    }];
    let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {};
    ThankYouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ThankYouPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts ***!
    \******************************************************************/

  /*! exports provided: ThankYouPageModule */

  /***/
  function srcAppPagesAuthSignUpThankYouThankYouModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function () {
      return ThankYouPageModule;
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


    var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./thank-you-routing.module */
    "./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts");
    /* harmony import */


    var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thank-you.page */
    "./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts");

    let ThankYouPageModule = class ThankYouPageModule {};
    ThankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankYouPageRoutingModule"]],
      declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
    })], ThankYouPageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthSignUpThankYouThankYouPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".thank-you-button {\n  opacity: 0;\n  width: 200px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin: 40px 0 40px 0;\n  --background: white;\n  --color: green;\n  -webkit-transition: 1s;\n  transition: 1s;\n  -webkit-animation: slide-up 0.5s ease 3s forwards;\n          animation: slide-up 0.5s ease 3s forwards;\n}\n\n.background {\n  text-align: center;\n  background: green;\n  height: 100vh;\n  width: 100%;\n  -webkit-animation: background-slide-up 0.5s ease forwards;\n          animation: background-slide-up 0.5s ease forwards;\n}\n\nh6 {\n  color: white;\n  margin-top: 100px;\n  opacity: 0;\n  -webkit-animation: header-fade-in 0.5s ease-in-out 1s forwards;\n          animation: header-fade-in 0.5s ease-in-out 1s forwards;\n}\n\n.check-icon {\n  opacity: 0;\n  -webkit-animation: check-slide-down 0.5s ease-out 1.5s forwards;\n          animation: check-slide-down 0.5s ease-out 1.5s forwards;\n}\n\n@-webkit-keyframes background-slide-up {\n  0% {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes background-slide-up {\n  0% {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(300px);\n            transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(300px);\n            transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-300px) scale(0);\n            transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(50px) scale(2);\n            transform: translateY(50px) scale(2);\n  }\n}\n\n@keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-300px) scale(0);\n            transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(50px) scale(2);\n            transform: translateY(50px) scale(2);\n  }\n}\n\n@-webkit-keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3RoYW5rLXlvdS9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheVxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcc2lnbi11cFxcdGhhbmsteW91XFx0aGFuay15b3UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUFBLGNBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtVQUFBLGlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsOERBQUE7VUFBQSxzREFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLCtEQUFBO1VBQUEsdURBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0VERUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDQUY7QUFDRjs7QURQQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0VERUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNERjtFRElBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNGRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0RGO0VESUE7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw4Q0FBQTtZQUFBLHNDQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7SUFDQSw0Q0FBQTtZQUFBLG9DQUFBO0VDSkY7QUFDRjs7QURMQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDhDQUFBO1lBQUEsc0NBQUE7RUNIRjtFRE1BO0lBQ0UsVUFBQTtJQUNBLDRDQUFBO1lBQUEsb0NBQUE7RUNKRjtBQUNGOztBRE9BO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGOztBRERBO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoYW5rLXlvdS1idXR0b24ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiA0MHB4IDAgNDBweCAwO1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogZ3JlZW47XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgM3MgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbmltYXRpb246IGJhY2tncm91bmQtc2xpZGUtdXAgMC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBoZWFkZXItZmFkZS1pbiAwLjVzIGVhc2UtaW4tb3V0IDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uY2hlY2staWNvbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IGNoZWNrLXNsaWRlLWRvd24gMC41cyBlYXNlLW91dCAxLjVzIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmQtc2xpZGUtdXAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS11cCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2hlY2stc2xpZGUtZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpIHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpIHNjYWxlKDIpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoZWFkZXItZmFkZS1pbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn0iLCIudGhhbmsteW91LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDQwcHggMCA0MHB4IDA7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IGdyZWVuO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgM3MgZm9yd2FyZHM7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZC1zbGlkZS11cCAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbmg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItZmFkZS1pbiAwLjVzIGVhc2UtaW4tb3V0IDFzIGZvcndhcmRzO1xufVxuXG4uY2hlY2staWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogY2hlY2stc2xpZGUtZG93biAwLjVzIGVhc2Utb3V0IDEuNXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgYmFja2dyb3VuZC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoZWNrLXNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KSBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgyKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFkZXItZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts ***!
    \****************************************************************/

  /*! exports provided: ThankYouPage */

  /***/
  function srcAppPagesAuthSignUpThankYouThankYouPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouPage", function () {
      return ThankYouPage;
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

    let ThankYouPage = class ThankYouPage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      goToLogin() {
        this.router.navigate(['']);
      }

    };

    ThankYouPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thank-you',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thank-you.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thank-you.page.scss */
      "./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ThankYouPage);
    /***/
  }
}]);
//# sourceMappingURL=thank-you-thank-you-module-es5.js.map