(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/faq/faq.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/faq/faq.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>faq</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile & Tablet Header -->\n<ion-header class=\"ion-hide-md-up\">\n\n    <ion-toolbar>\n        <ion-title>Volunteers FAQ</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<!-- Desktop Header -->\n<ion-header class=\"ion-hide-sm-down\">\n\n    <ion-toolbar class=\"ion-padding-horizontal fair-page-toolbar-lg\">\n        <ion-title color=\"primary\">Volunteers FAQ</ion-title>\n        <ion-title class=\"sub-title\" color=\"primary\">{{title}}, {{time}}, {{date}}</ion-title>\n\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n        </ion-button>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content style=\"\n--background: rgba(245,245,245,1);\">\n\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 50px;\">\n    <ion-col size=\"6\">\n      <h2>Some Frequently asked questions for Volunteers</h2>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"question\" *ngFor=\"let question of faq\" class=\"ion-justify-content-center\">\n    <ion-col size=\"6\">\n      <h1>{{question.question}}</h1>\n      <p>{{question.answer}}</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/faq/faq-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/faq/faq-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/fairs/fair-page/partners/faq/faq.page.ts");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/faq/faq.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/faq/faq.module.ts ***!
  \******************************************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/fairs/fair-page/partners/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/fairs/fair-page/partners/faq/faq.page.ts");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/faq/faq.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/faq/faq.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9wYXJ0bmVycy9mYXEvZmFxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/faq/faq.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/faq/faq.page.ts ***!
  \****************************************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqPage = class FaqPage {
    constructor() { }
    ngOnInit() {
    }
};
FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/faq/faq.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/fairs/fair-page/partners/faq/faq.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqPage);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/faq/faq-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/faq/faq-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.ts");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/faq/faq.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/faq/faq.module.ts ***!
  \********************************************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/fairs/fair-page/volunteers/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.ts");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: rgba(245,245,245,1);\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 75px;\n  font-size: 1.5em;\n}\n.fair-page-toolbar-lg .sub-title {\n  padding-left: 75px;\n  font-size: 1em;\n  color: #999;\n}\n.question {\n  padding: 10px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3ZvbHVudGVlcnMvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS92b2x1bnRlZXJzL2ZhcS9mYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3ZvbHVudGVlcnMvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LDI0NSwyNDUsMSk7XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuXG4gIC5zdWItdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNzVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxufVxuXG4ucXVlc3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iLCIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LDI0NSwyNDUsMSk7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmZhaXItcGFnZS10b29sYmFyLWxnIC5zdWItdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.ts ***!
  \******************************************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






let FaqPage = class FaqPage {
    constructor(activatedRoute, navCtrl, fairs) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.fairs = fairs;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        this.fairs.getFair(this.id).subscribe(fair => {
            console.log('Fair ID: ' + this.id);
            console.log(fair);
            this.title = fair['title'];
            this.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair['date']), 'hh:mm a');
            this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair['date']), 'MMMM dd, yyyy');
            this.faq = fair['FAQ'];
            console.log(this.faq);
        });
    }
    goBack() {
        console.log('going back');
        this.navCtrl.back();
    }
};
FaqPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] }
];
FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/fairs/fair-page/volunteers/faq/faq.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"]])
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=faq-faq-module-es2015.js.map