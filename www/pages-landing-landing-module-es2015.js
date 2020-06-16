(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile version -->\r\n<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar class=\"ion-padding-horizontal\">\r\n    <img id=\"logo\" src=\"../../../assets/fyf-logo.png\" />\r\n    <ion-button (click)=\"loginSignup()\" color=\"dark\" fill=\"outline\" slot=\"end\">Login/Signup</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Web version -->\r\n<ion-header class=\"ion-hide-md-down\">\r\n  <ion-toolbar class=\"ion-justify-content-center\">\r\n    <img id=\"logo\" src=\"../../../assets/fyf-logo.png\" />\r\n    <!-- Social media desktop -->\r\n    <div class=\"button-row ion-hide-sm-down\">\r\n      <ion-button fill=\"clear\"><ion-icon name=\"logo-facebook\" size=\"large\"></ion-icon></ion-button>\r\n      <ion-button fill=\"clear\"><ion-icon name=\"logo-twitter\" size=\"large\"></ion-icon></ion-button>\r\n      <ion-button fill=\"clear\"><ion-icon name=\"logo-instagram\" size=\"large\"></ion-icon></ion-button>\r\n    </div>\r\n    <ion-button (click)=\"loginSignup()\" color=\"dark\" fill=\"outline\" slot=\"end\">Login/Signup</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n\r\n    <!-- Mobile version slides -->\r\n    <ion-row class=\"ion-hide-lg-up\">\r\n      <ion-slides [options]=\"slideOptions\">\r\n        <ion-slide class=\"ion-align-items-center\">\r\n          <h1>Connect with Students</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <h1>Find Jobs</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Sign Up</ion-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <h1>Find Events</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <h1>Connect with Mentors</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Apply Now</ion-button>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n    \r\n    <!-- Web version slides -->\r\n    <ion-row class=\"ion-hide-md-down\">\r\n      <ion-slides [options]=\"slideOptions\">\r\n        <ion-slide class=\"ion-align-items-center\">\r\n          <h1>Connect with Students</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <h1>Find Jobs</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Sign Up</ion-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <h1>Find Events</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Join Now</ion-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <h1>Connect with Mentors</h1>\r\n          <ion-button (click)=\"loginSignup()\" class=\"orange-button\" fill=\"solid\" color=\"secondary\">Apply Now</ion-button>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n\r\n    <!-- App description -->\r\n    <ion-row class=\"ion-justify-content-center detail-section\" id=\"app-description\">\r\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\" style=\"font-size: 1.3em; padding-top: 15px; padding-bottom: 15px\">\r\n        <p>\r\n          Lorem ipsum dolor sit amet. This is a paragraph that introduces the app.\r\n          It educates the user about the features of this app.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Who is United Way? -->\r\n    <ion-row class=\"ion-justify-content-center detail-section\" id=\"who-is\">\r\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\r\n        <h3 style=\"text-transform: uppercase;\">Who is United Way?</h3>\r\n        <img src=\"../../../assets/United_Way_Logo_3.svg\" style=\"margin: 32px auto;\" />\r\n        <p>\r\n          Lorem ipsum dolor sit amet. This paragraph talks about United Way. It describes to the user what the\r\n          organization does. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n          ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at auctor urna. Massa ultricies mi quis\r\n          hendrerit dolor magna eget est. Venenatis cras sed felis eget velit aliquet. Enim praesent elementum\r\n          facilisis leo.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-footer>\r\n    <!-- Social media mobile -->\r\n    <ion-toolbar class=\"ion-hide-md-up\">\r\n      <ion-button fill=\"clear\" color=\"light\" size=\"small\"><ion-icon name=\"logo-facebook\" size=\"large\"></ion-icon></ion-button>\r\n      <ion-button fill=\"clear\" color=\"light\" size=\"small\"><ion-icon name=\"logo-twitter\" size=\"large\"></ion-icon></ion-button>\r\n      <ion-button fill=\"clear\" color=\"light\" size=\"small\"><ion-icon name=\"logo-instagram\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n      <ion-button routerLink=\"/terms\" fill=\"clear\" color=\"light\" size=\"small\">Terms of Use</ion-button>\r\n      <span class=\"floating-dot\">&#9679;</span>\r\n      <ion-button routerLink=\"/privacy\" fill=\"clear\" color=\"light\" size=\"small\">Privacy Policy</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-content>\r\n");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding: 0;\n}\n\nion-toolbar {\n  height: 100%;\n  --background: #fff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n}\n\nion-header > ion-toolbar {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.button-row {\n  position: absolute;\n  display: inline-block;\n  margin-left: 10px;\n}\n\nion-slides {\n  width: 100%;\n  height: 75vh;\n  min-height: 400px;\n  background-color: #bbb;\n}\n\nion-slide {\n  display: block;\n  padding-top: 25vh;\n}\n\nion-slide h1 {\n  color: white;\n  font-size: 3em;\n  font-weight: bolder;\n  text-shadow: 3px 2px 8px #000;\n}\n\n.detail-section {\n  height: 60vh;\n  min-height: 300px;\n}\n\n#who-is {\n  background-color: #ffb35166;\n}\n\n#who-is ion-col {\n  font-size: 1.2em;\n}\n\nion-col {\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center;\n}\n\nion-footer > ion-toolbar {\n  color: #fff;\n  text-align: center;\n}\n\nion-footer > ion-toolbar:first-child {\n  --background: #676767;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nion-footer > ion-toolbar:first-child > ion-button {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\nion-footer > ion-toolbar:nth-child(2) {\n  --background: #555;\n}\n\nion-footer ion-button {\n  text-transform: capitalize;\n}\n\n.floating-dot {\n  position: relative;\n  top: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXGxhbmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQ1I7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0FDQUo7O0FERUk7RUFDSSxnQkFBQTtBQ0FSOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLDBCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTVweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgPiBpb24tdG9vbGJhciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzV2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjsgLy8gcGxhY2Vob2xkZXIgYmFja2dyb3VuZFxyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMjV2aDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAycHggOHB4ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXRhaWwtc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI3doby1pcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzUxNjY7XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWZvb3RlciA+IGlvbi10b29sYmFyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NzY3Njc7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCA+IGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhcjpudGgtY2hpbGQoMikge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmZsb2F0aW5nLWRvdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDAuM2VtO1xyXG59IiwiaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1oZWFkZXIgPiBpb24tdG9vbGJhciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXZoO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyNXZoO1xufVxuaW9uLXNsaWRlIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1zaGFkb3c6IDNweCAycHggOHB4ICMwMDA7XG59XG5cbi5kZXRhaWwtc2VjdGlvbiB7XG4gIGhlaWdodDogNjB2aDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbiN3aG8taXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzUxNjY7XG59XG4jd2hvLWlzIGlvbi1jb2wge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICM2NzY3Njc7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWZvb3RlciA+IGlvbi10b29sYmFyOmZpcnN0LWNoaWxkID4gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXI6bnRoLWNoaWxkKDIpIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmZsb2F0aW5nLWRvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjNlbTtcbn0iXX0= */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map