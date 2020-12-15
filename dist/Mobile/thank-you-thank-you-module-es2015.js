(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-md=\"4\" style=\"margin-top: 10%;\">\n        <ion-icon class=\"check-icon\" src=\"../../../assets/icon/white-check.svg\" ></ion-icon>\n        <h6 style=\"font-size: 1.5em;\">Thank you for signing up with Find Your Future! You can now login to your account</h6>\n        <ion-button (click)=\"goToLogin()\" class=\"thank-you-button\">LOGIN</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ThankYouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageRoutingModule", function() { return ThankYouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts");




const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_3__["ThankYouPage"]
    }
];
let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {
};
ThankYouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThankYouPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts ***!
  \******************************************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you-routing.module */ "./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts");







let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankYouPageRoutingModule"]
        ],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
    })
], ThankYouPageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thank-you-button {\n  opacity: 0;\n  width: 200px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin: 40px 0 40px 0;\n  --background: white;\n  --color: #797;\n  transition: 1s;\n  -webkit-animation: slide-up 0.5s ease 3s forwards;\n          animation: slide-up 0.5s ease 3s forwards;\n}\n\n.background {\n  text-align: center;\n  background: #797;\n  height: 100vh;\n  width: 100%;\n  -webkit-animation: background-slide-up 0.5s ease forwards;\n          animation: background-slide-up 0.5s ease forwards;\n}\n\nh6 {\n  color: white;\n  margin-top: 100px;\n  opacity: 0;\n  -webkit-animation: header-fade-in 0.5s ease-in-out 1s forwards;\n          animation: header-fade-in 0.5s ease-in-out 1s forwards;\n}\n\n.check-icon {\n  opacity: 0;\n  -webkit-animation: check-slide-down 0.5s ease-out 1.5s forwards;\n          animation: check-slide-down 0.5s ease-out 1.5s forwards;\n}\n\n@-webkit-keyframes background-slide-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes background-slide-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(50px) scale(2);\n  }\n}\n\n@keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(50px) scale(2);\n  }\n}\n\n@-webkit-keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDhEQUFBO1VBQUEsc0RBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSwrREFBQTtVQUFBLHVEQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDRCQUFBO0VDQ0Y7RURFQTtJQUNFLDBCQUFBO0VDQUY7QUFDRjs7QURQQTtFQUNFO0lBQ0UsNEJBQUE7RUNDRjtFREVBO0lBQ0UsMEJBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUNERjtFRElBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDRkY7QUFDRjs7QURQQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDREY7RURJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQ0FBQTtFQ0hGO0VETUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUNKRjtBQUNGOztBRExBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0NBQUE7RUNIRjtFRE1BO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO0VDSkY7QUFDRjs7QURPQTtFQUNFO0lBQ0UsVUFBQTtFQ0xGO0VEUUE7SUFDRSxVQUFBO0VDTkY7QUFDRjs7QUREQTtFQUNFO0lBQ0UsVUFBQTtFQ0xGO0VEUUE7SUFDRSxVQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC90aGFuay15b3UvdGhhbmsteW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFuay15b3UtYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogNDBweCAwIDQwcHggMDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzc5NztcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDNzIGZvcndhcmRzO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzc5NztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZC1zbGlkZS11cCAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbmg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItZmFkZS1pbiAwLjVzIGVhc2UtaW4tb3V0IDFzIGZvcndhcmRzO1xufVxuXG4uY2hlY2staWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogY2hlY2stc2xpZGUtZG93biAwLjVzIGVhc2Utb3V0IDEuNXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgYmFja2dyb3VuZC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY2hlY2stc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpIHNjYWxlKDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgc2NhbGUoMik7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoZWFkZXItZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIi50aGFuay15b3UtYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogNDBweCAwIDQwcHggMDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzc5NztcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDNzIGZvcndhcmRzO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzc5NztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZC1zbGlkZS11cCAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbmg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItZmFkZS1pbiAwLjVzIGVhc2UtaW4tb3V0IDFzIGZvcndhcmRzO1xufVxuXG4uY2hlY2staWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogY2hlY2stc2xpZGUtZG93biAwLjVzIGVhc2Utb3V0IDEuNXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgYmFja2dyb3VuZC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoZWNrLXNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KSBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgyKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFkZXItZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts ***!
  \****************************************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ThankYouPage = class ThankYouPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['']);
    }
};
ThankYouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thank-you',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-you.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-you.page.scss */ "./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ThankYouPage);



/***/ })

}]);
//# sourceMappingURL=thank-you-thank-you-module-es2015.js.map