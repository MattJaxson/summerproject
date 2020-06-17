(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/privacy/privacy.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/privacy/privacy.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingPrivacyPrivacyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TODO: Implement responsiveness -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"landing\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Privacy Policy</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p>This is the privacy policy.</p>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/privacy/privacy-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/privacy/privacy-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PrivacyPageRoutingModule */

  /***/
  function srcAppPagesLandingPrivacyPrivacyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPageRoutingModule", function () {
      return PrivacyPageRoutingModule;
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


    var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy.page */
    "./src/app/pages/landing/privacy/privacy.page.ts");

    const routes = [{
      path: '',
      component: _privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"]
    }];
    let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {};
    PrivacyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/privacy/privacy.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/privacy/privacy.module.ts ***!
    \*********************************************************/

  /*! exports provided: PrivacyPageModule */

  /***/
  function srcAppPagesLandingPrivacyPrivacyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function () {
      return PrivacyPageModule;
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


    var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacy-routing.module */
    "./src/app/pages/landing/privacy/privacy-routing.module.ts");
    /* harmony import */


    var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy.page */
    "./src/app/pages/landing/privacy/privacy.page.ts");

    let PrivacyPageModule = class PrivacyPageModule {};
    PrivacyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPageRoutingModule"]],
      declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
    })], PrivacyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/privacy/privacy.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/privacy/privacy.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingPrivacyPrivacyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  height: 100%;\n  --background: #fff;\n}\n\nion-back-button {\n  color: #000 !important;\n}\n\nion-title {\n  margin: 0;\n}\n\nion-content {\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9wcml2YWN5L0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xccHJpdmFjeVxccHJpdmFjeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvcHJpdmFjeS9wcml2YWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvcHJpdmFjeS9wcml2YWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/privacy/privacy.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/landing/privacy/privacy.page.ts ***!
    \*******************************************************/

  /*! exports provided: PrivacyPage */

  /***/
  function srcAppPagesLandingPrivacyPrivacyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPage", function () {
      return PrivacyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PrivacyPage = class PrivacyPage {
      constructor() {}

      ngOnInit() {}

    };
    PrivacyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/privacy/privacy.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.page.scss */
      "./src/app/pages/landing/privacy/privacy.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrivacyPage);
    /***/
  }
}]);
//# sourceMappingURL=privacy-privacy-module-es5.js.map