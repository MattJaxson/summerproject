(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-confirm-apply-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>apply-confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Thanks for applying to {{jobCompanyName}} for the role of {{jobTitle}}. {{jobCompanyName}} has been notified at the email address of {{jobCompanyEmail}} and you will hear from them shortly.</p>\n</ion-content>\n<button (click)=\"backHome()\" id=\"next-button\">GO HOME</button>\n");

/***/ }),

/***/ "./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ApplyConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyConfirmPageRoutingModule", function() { return ApplyConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply-confirm.page */ "./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts");




const routes = [
    {
        path: '',
        component: _apply_confirm_page__WEBPACK_IMPORTED_MODULE_3__["ApplyConfirmPage"]
    }
];
let ApplyConfirmPageRoutingModule = class ApplyConfirmPageRoutingModule {
};
ApplyConfirmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplyConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts ***!
  \******************************************************************/
/*! exports provided: ApplyConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyConfirmPageModule", function() { return ApplyConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-confirm-routing.module */ "./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts");
/* harmony import */ var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply-confirm.page */ "./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts");







let ApplyConfirmPageModule = class ApplyConfirmPageModule {
};
ApplyConfirmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyConfirmPageRoutingModule"]
        ],
        declarations: [_apply_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ApplyConfirmPage"]]
    })
], ApplyConfirmPageModule);



/***/ }),

/***/ "./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvYXBwbHktY29uZmlybS9hcHBseS1jb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts ***!
  \****************************************************************/
/*! exports provided: ApplyConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyConfirmPage", function() { return ApplyConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ApplyConfirmPage = class ApplyConfirmPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        this.jobTitle = title;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
    }
    backHome() {
        this.router.navigate(['/home']);
    }
};
ApplyConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ApplyConfirmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apply-confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apply-confirm.page.scss */ "./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ApplyConfirmPage);



/***/ })

}]);
//# sourceMappingURL=apply-confirm-apply-confirm-module-es2015.js.map