(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mobile version -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar class=\"ion-padding-horizontal\">\n    <img id=\"logo\" src=\"../../../assets/fyf-logo-2.png\" />\n    <ion-button (click)=\"loginSignup()\" color=\"dark\" fill=\"outline\" slot=\"end\">Login/Signup</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Web version -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar class=\"ion-justify-content-center\">\n    <img id=\"logo\" src=\"../../../assets/fyf-logo-2.png\" />\n    <!-- Social media desktop -->\n    <div class=\"button-row ion-hide-sm-down\">\n      <ion-button fill=\"clear\"><ion-icon name=\"logo-facebook\" size=\"large\"></ion-icon></ion-button>\n      <ion-button fill=\"clear\"><ion-icon name=\"logo-twitter\" size=\"large\"></ion-icon></ion-button>\n      <ion-button fill=\"clear\"><ion-icon name=\"logo-instagram\" size=\"large\"></ion-icon></ion-button>\n    </div>\n    <ion-button (click)=\"loginSignup()\" color=\"dark\" fill=\"outline\" slot=\"end\">Login/Signup</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Mobile version slides -->\n    <ion-row class=\"ion-hide-lg-up\">\n      <ion-slides [options]=\"slideOptions\">\n        <ion-slide class=\"ion-align-items-center\">\n          <h1>Connect with Students</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\n        </ion-slide>\n        <ion-slide>\n          <h1>Find Jobs</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Sign Up</ion-button>\n        </ion-slide>\n        <ion-slide>\n          <h1>Find Events</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\n        </ion-slide>\n        <ion-slide>\n          <h1>Connect with Mentors</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Apply Now</ion-button>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n    \n    <!-- Web version slides -->\n    <ion-row class=\"ion-hide-md-down\">\n      <ion-slides [options]=\"slideOptions\">\n        <ion-slide class=\"ion-align-items-center\">\n          <h1>Connect with Students</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\n        </ion-slide>\n        <ion-slide>\n          <h1>Find Jobs</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Sign Up</ion-button>\n        </ion-slide>\n        <ion-slide>\n          <h1>Find Events</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\n        </ion-slide>\n        <ion-slide>\n          <h1>Connect with Mentors</h1>\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Apply Now</ion-button>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n\n    <!-- App description -->\n    <ion-row class=\"ion-justify-content-center detail-section\" id=\"app-description\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\" style=\"font-size: 1.3em; padding-top: 15px; padding-bottom: 15px\">\n        <p>\n          Lorem ipsum dolor sit amet. This is a paragraph that introduces the app.\n          It educates the user about the features of this app.\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <!-- Who is United Way? -->\n    <ion-row class=\"ion-justify-content-center detail-section\" id=\"who-is\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <h3 style=\"text-transform: uppercase;\">Who is United Way?</h3>\n        <img src=\"../../../assets/United_Way_Logo_3.svg\" style=\"margin: 32px auto;\" />\n        <p>\n          Lorem ipsum dolor sit amet. This paragraph talks about United Way. It describes to the user what the\n          organization does. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at auctor urna. Massa ultricies mi quis\n          hendrerit dolor magna eget est. Venenatis cras sed felis eget velit aliquet. Enim praesent elementum\n          facilisis leo.\n        </p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-footer>\n    <!-- Social media mobile -->\n    <ion-toolbar class=\"ion-hide-md-up\">\n      <ion-button fill=\"clear\" color=\"light\" size=\"small\"><ion-icon name=\"logo-facebook\" size=\"large\"></ion-icon></ion-button>\n      <ion-button fill=\"clear\" color=\"light\" size=\"small\"><ion-icon name=\"logo-twitter\" size=\"large\"></ion-icon></ion-button>\n      <ion-button fill=\"clear\" color=\"light\" size=\"small\"><ion-icon name=\"logo-instagram\" size=\"large\"></ion-icon></ion-button>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-button routerLink=\"/terms\" fill=\"clear\" color=\"light\" size=\"small\">Terms of Use</ion-button>\n      <span class=\"floating-dot\">&#9679;</span>\n      <ion-button routerLink=\"/privacy\" fill=\"clear\" color=\"light\" size=\"small\">Privacy Policy</ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/landing/landing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "./src/app/pages/landing/terms/terms.module.ts")).then(m => m.TermsPageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-privacy-module */ "privacy-privacy-module").then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "./src/app/pages/landing/privacy/privacy.module.ts")).then(m => m.PrivacyPageModule)
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/pages/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");








let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingPageRoutingModule"]
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_7__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  padding: 0;\n}\n\nion-toolbar {\n  height: 100%;\n  --background: #fff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n}\n\nion-header > ion-toolbar {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.button-row {\n  position: absolute;\n  display: inline-block;\n  margin-left: 10px;\n}\n\nion-slides {\n  width: 100%;\n  height: 75vh;\n  min-height: 400px;\n  background-color: #bbb;\n}\n\nion-slide {\n  display: block;\n  padding-top: 25vh;\n}\n\nion-slide h1 {\n  color: white;\n  font-size: 3em;\n  font-weight: bolder;\n  text-shadow: 3px 2px 8px #000;\n}\n\n.detail-section {\n  height: 60vh;\n  min-height: 300px;\n}\n\n#who-is {\n  background-color: #ffb35166;\n}\n\n#who-is ion-col {\n  font-size: 1.2em;\n}\n\nion-col {\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center;\n}\n\nion-footer > ion-toolbar {\n  color: #fff;\n  text-align: center;\n}\n\nion-footer > ion-toolbar:first-child {\n  --background: #676767;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nion-footer > ion-toolbar:first-child > ion-button {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\nion-footer > ion-toolbar:nth-child(2) {\n  --background: #555;\n}\n\nion-footer ion-button {\n  text-transform: capitalize;\n}\n\n.floating-dot {\n  position: relative;\n  top: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NSOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREVJO0VBQ0ksZ0JBQUE7QUNBUjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDREo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSwwQkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWhlYWRlciA+IGlvbi10b29sYmFyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ1dHRvbi1yb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiOyAvLyBwbGFjZWhvbGRlciBiYWNrZ3JvdW5kXG59XG5cbmlvbi1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDI1dmg7XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggMnB4IDhweCAjMDAwO1xuICAgIH1cbn1cblxuLmRldGFpbC1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbiN3aG8taXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIzNTE2NjtcblxuICAgIGlvbi1jb2wge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlciA+IGlvbi10b29sYmFyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAgIC0tYmFja2dyb3VuZDogIzY3Njc2NztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCA+IGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXI6bnRoLWNoaWxkKDIpIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1NTU7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZmxvYXRpbmctZG90IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjNlbTtcbn0iLCJpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWhlYWRlciA+IGlvbi10b29sYmFyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnV0dG9uLXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI1dmg7XG59XG5pb24tc2xpZGUgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LXNoYWRvdzogM3B4IDJweCA4cHggIzAwMDtcbn1cblxuLmRldGFpbC1zZWN0aW9uIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cblxuI3doby1pcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzNTE2Njtcbn1cbiN3aG8taXMgaW9uLWNvbCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzY3Njc2NztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQgPiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhcjpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6ICM1NTU7XG59XG5cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZmxvYXRpbmctZG90IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuM2VtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LandingPage = class LandingPage {
    constructor(router) {
        this.router = router;
        this.slideOptions = {
            autoplay: {
                delay: 6000
            },
            speed: 500
        };
    }
    ngOnInit() {
    }
    loginSignup() {
        this.router.navigate(['login']);
    }
};
LandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html"),
        styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map