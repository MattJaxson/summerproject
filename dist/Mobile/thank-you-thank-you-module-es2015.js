(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"],{

/***/ "5cwi":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts ***!
  \****************************************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thank-you.page.html */ "FELy");
/* harmony import */ var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you.page.scss */ "uphs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ThankYouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-thank-you',
        template: _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ThankYouPage);



/***/ }),

/***/ "FELy":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-md=\"4\" style=\"margin-top: 10%;\">\n        <ion-icon class=\"check-icon\" src=\"../../../assets/icon/white-check.svg\" ></ion-icon>\n        <h6 style=\"font-size: 1.5em;\">Thank you for signing up with Find Your Future! You can now login to your account</h6>\n        <ion-button (click)=\"goToLogin()\" class=\"thank-you-button\">LOGIN</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n\n");

/***/ }),

/***/ "oo7F":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts ***!
  \******************************************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you-routing.module */ "uoFv");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thank-you.page */ "5cwi");







let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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

/***/ "uoFv":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ThankYouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageRoutingModule", function() { return ThankYouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you.page */ "5cwi");




const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_3__["ThankYouPage"]
    }
];
let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {
};
ThankYouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThankYouPageRoutingModule);



/***/ }),

/***/ "uphs":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thank-you-button {\n  opacity: 0;\n  width: 200px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin: 40px 0 40px 0;\n  --background: white;\n  --color: #797;\n  transition: 1s;\n  -webkit-animation: slide-up 0.5s ease 3s forwards;\n          animation: slide-up 0.5s ease 3s forwards;\n}\n\n.background {\n  text-align: center;\n  background: #797;\n  height: 100vh;\n  width: 100%;\n  -webkit-animation: background-slide-up 0.5s ease forwards;\n          animation: background-slide-up 0.5s ease forwards;\n}\n\nh6 {\n  color: white;\n  margin-top: 100px;\n  opacity: 0;\n  -webkit-animation: header-fade-in 0.5s ease-in-out 1s forwards;\n          animation: header-fade-in 0.5s ease-in-out 1s forwards;\n}\n\n.check-icon {\n  opacity: 0;\n  -webkit-animation: check-slide-down 0.5s ease-out 1.5s forwards;\n          animation: check-slide-down 0.5s ease-out 1.5s forwards;\n}\n\n@-webkit-keyframes background-slide-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes background-slide-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(50px) scale(2);\n  }\n}\n\n@keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(50px) scale(2);\n  }\n}\n\n@-webkit-keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDhEQUFBO1VBQUEsc0RBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSwrREFBQTtVQUFBLHVEQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0VBQUY7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsNEJBQUE7RUFDRjtFQUVBO0lBQ0UsMEJBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFERjtFQUlBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBRkY7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQ0FBQTtFQUhGO0VBTUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUFKRjtBQUNGOztBQUxBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0NBQUE7RUFIRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFO0lBQ0UsVUFBQTtFQUxGO0VBUUE7SUFDRSxVQUFBO0VBTkY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsVUFBQTtFQUxGO0VBUUE7SUFDRSxVQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJ0aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoYW5rLXlvdS1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiA0MHB4IDAgNDBweCAwO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjNzk3O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgM3MgZm9yd2FyZHM7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNzk3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kLXNsaWRlLXVwIDAuNXMgZWFzZSBmb3J3YXJkcztcbn1cblxuaDYge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGhlYWRlci1mYWRlLWluIDAuNXMgZWFzZS1pbi1vdXQgMXMgZm9yd2FyZHM7XG59XG5cbi5jaGVjay1pY29uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBjaGVjay1zbGlkZS1kb3duIDAuNXMgZWFzZS1vdXQgMS41cyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBiYWNrZ3JvdW5kLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjaGVjay1zbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCkgc2NhbGUoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgyKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1mYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=thank-you-thank-you-module-es2015.js.map