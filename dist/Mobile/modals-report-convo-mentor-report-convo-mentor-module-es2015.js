(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-report-convo-mentor-report-convo-mentor-module"],{

/***/ "3KhJ":
/*!**************************************************************************!*\
  !*** ./src/app/modals/report-convo-mentor/report-convo-mentor.module.ts ***!
  \**************************************************************************/
/*! exports provided: ReportConvoMentorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConvoMentorPageModule", function() { return ReportConvoMentorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_convo_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-convo-mentor-routing.module */ "Memu");
/* harmony import */ var _report_convo_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-convo-mentor.page */ "viaB");







let ReportConvoMentorPageModule = class ReportConvoMentorPageModule {
};
ReportConvoMentorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_convo_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportConvoMentorPageRoutingModule"]
        ],
        declarations: [_report_convo_mentor_page__WEBPACK_IMPORTED_MODULE_6__["ReportConvoMentorPage"]]
    })
], ReportConvoMentorPageModule);



/***/ }),

/***/ "4trh":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-convo-mentor/report-convo-mentor.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>report-convo-mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "Memu":
/*!**********************************************************************************!*\
  !*** ./src/app/modals/report-convo-mentor/report-convo-mentor-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportConvoMentorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConvoMentorPageRoutingModule", function() { return ReportConvoMentorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_convo_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-convo-mentor.page */ "viaB");




const routes = [
    {
        path: '',
        component: _report_convo_mentor_page__WEBPACK_IMPORTED_MODULE_3__["ReportConvoMentorPage"]
    }
];
let ReportConvoMentorPageRoutingModule = class ReportConvoMentorPageRoutingModule {
};
ReportConvoMentorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportConvoMentorPageRoutingModule);



/***/ }),

/***/ "v/sa":
/*!**************************************************************************!*\
  !*** ./src/app/modals/report-convo-mentor/report-convo-mentor.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtY29udm8tbWVudG9yLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "viaB":
/*!************************************************************************!*\
  !*** ./src/app/modals/report-convo-mentor/report-convo-mentor.page.ts ***!
  \************************************************************************/
/*! exports provided: ReportConvoMentorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConvoMentorPage", function() { return ReportConvoMentorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_convo_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-convo-mentor.page.html */ "4trh");
/* harmony import */ var _report_convo_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-convo-mentor.page.scss */ "v/sa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReportConvoMentorPage = class ReportConvoMentorPage {
    constructor() { }
    ngOnInit() {
    }
};
ReportConvoMentorPage.ctorParameters = () => [];
ReportConvoMentorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-convo-mentor',
        template: _raw_loader_report_convo_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_convo_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ReportConvoMentorPage);



/***/ })

}]);
//# sourceMappingURL=modals-report-convo-mentor-report-convo-mentor-module-es2015.js.map