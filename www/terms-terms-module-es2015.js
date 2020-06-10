(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/terms/terms.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/terms/terms.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Implement responsiveness -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Terms of Use</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Last Updated: <i>Insert date here</i></p>\n  <p><b style=\"text-transform: uppercase;\">Please read these terms of use before using this service.</b></p>\n\n  <p>These are the terms of use.</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/landing/terms/terms-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/landing/terms/terms-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TermsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageRoutingModule", function() { return TermsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.page */ "./src/app/pages/landing/terms/terms.page.ts");




const routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_3__["TermsPage"]
    }
];
let TermsPageRoutingModule = class TermsPageRoutingModule {
};
TermsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/terms/terms.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/terms/terms.module.ts ***!
  \*****************************************************/
/*! exports provided: TermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-routing.module */ "./src/app/pages/landing/terms/terms-routing.module.ts");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms.page */ "./src/app/pages/landing/terms/terms.page.ts");







let TermsPageModule = class TermsPageModule {
};
TermsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsPageRoutingModule"]
        ],
        declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]]
    })
], TermsPageModule);



/***/ }),

/***/ "./src/app/pages/landing/terms/terms.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/terms/terms.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  height: 100%;\n  --background: #fff;\n}\n\nion-back-button {\n  color: #000 !important;\n}\n\nion-title {\n  margin: 0;\n}\n\nion-content {\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbGFuZGluZy90ZXJtcy90ZXJtcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvdGVybXMvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy90ZXJtcy90ZXJtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xufSIsImlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/landing/terms/terms.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/terms/terms.page.ts ***!
  \***************************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsPage = class TermsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__(/*! raw-loader!./terms.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/terms/terms.page.html"),
        styles: [__webpack_require__(/*! ./terms.page.scss */ "./src/app/pages/landing/terms/terms.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TermsPage);



/***/ })

}]);
//# sourceMappingURL=terms-terms-module-es2015.js.map