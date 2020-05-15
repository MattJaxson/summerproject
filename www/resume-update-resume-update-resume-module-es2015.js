(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-update-resume-update-resume-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Update Resume</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\r\n      <ion-col offset=\"2.8\" size=\"2.5\">\r\n        <h1>Update Resume</h1>\r\n      </ion-col>\r\n      <ion-col push=\"2.5\" size=\"2\">\r\n        <ion-button class=\"back-button\" (click)=\"back()\">\r\n           Back\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color: #00000044;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\r\n        <!-- Need to express to User formats that are acceptable -->\r\n        <!-- pdf, ect -->\r\n        <p>Please upload a resume from your phone</p>\r\n        <ion-item>\r\n          <ion-label>file</ion-label>\r\n          <p>resume.pdf</p>\r\n        </ion-item>\r\n        <ion-button (click)=\"updateResume()\" class=\"orange-button\" style=\"width: unset;\">UPLOAD</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumePageRoutingModule", function() { return UpdateResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-resume.page */ "./src/app/pages/profile/resume/update-resume/update-resume.page.ts");




const routes = [
    {
        path: '',
        component: _update_resume_page__WEBPACK_IMPORTED_MODULE_3__["UpdateResumePage"]
    }
];
let UpdateResumePageRoutingModule = class UpdateResumePageRoutingModule {
};
UpdateResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateResumePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.module.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumePageModule", function() { return UpdateResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-resume-routing.module */ "./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts");
/* harmony import */ var _update_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-resume.page */ "./src/app/pages/profile/resume/update-resume/update-resume.page.ts");







let UpdateResumePageModule = class UpdateResumePageModule {
};
UpdateResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateResumePageRoutingModule"]
        ],
        declarations: [_update_resume_page__WEBPACK_IMPORTED_MODULE_6__["UpdateResumePage"]]
    })
], UpdateResumePageModule);



/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9yZXN1bWUvdXBkYXRlLXJlc3VtZS9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHJlc3VtZVxcdXBkYXRlLXJlc3VtZVxcdXBkYXRlLXJlc3VtZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL3VwZGF0ZS1yZXN1bWUvdXBkYXRlLXJlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Jlc3VtZS91cGRhdGUtcmVzdW1lL3VwZGF0ZS1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxufSIsImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.ts ***!
  \**************************************************************************/
/*! exports provided: UpdateResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumePage", function() { return UpdateResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UpdateResumePage = class UpdateResumePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home/profile/resume/<resume>']);
    }
    updateResume() {
        console.log('Going to Update Resume Confirm');
        this.router.navigate(['/home/profile/resume/confirm']);
    }
};
UpdateResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-resume.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-resume.page.scss */ "./src/app/pages/profile/resume/update-resume/update-resume.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UpdateResumePage);



/***/ })

}]);
//# sourceMappingURL=resume-update-resume-update-resume-module-es2015.js.map