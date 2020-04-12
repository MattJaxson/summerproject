(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-page-job-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button>\n          </ion-back-button>\n        </ion-buttons>\n        <ion-title>Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\">\n            <h3 style=\"color: #005191; font-weight: 600;\">{{jobTitle}}</h3>\n            <h6><span>Company </span>{{jobCompanyName}}</h6>\n            <h6><span>Email:</span> {{jobCompanyEmail}}</h6>\n            <h6><span>Description:</span> {{jobSummary}}</h6>\n\n            <h6>{{jobFullJobDescription}}</h6>\n\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"11\" offset=\"0.5\"  class=\"ion-text-center\">\n        <ion-button (click)=\"applyForJob()\" class=\"orange-button\">Apply for Job</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"favoriteThisJob()\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/jobs/job-page/job-page-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: JobPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPagePageRoutingModule", function() { return JobPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _job_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-page.page */ "./src/app/pages/jobs/job-page/job-page.page.ts");




const routes = [
    {
        path: '',
        component: _job_page_page__WEBPACK_IMPORTED_MODULE_3__["JobPagePage"]
    },
    {
        path: 'apply/:title/:companyName/:companyEmail',
        loadChildren: () => __webpack_require__.e(/*! import() | apply-apply-module */ "apply-apply-module").then(__webpack_require__.bind(null, /*! ../apply/apply.module */ "./src/app/pages/jobs/apply/apply.module.ts")).then(m => m.ApplyPageModule)
    },
];
let JobPagePageRoutingModule = class JobPagePageRoutingModule {
};
JobPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JobPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jobs/job-page/job-page.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.module.ts ***!
  \********************************************************/
/*! exports provided: JobPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPagePageModule", function() { return JobPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _job_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-page-routing.module */ "./src/app/pages/jobs/job-page/job-page-routing.module.ts");
/* harmony import */ var _job_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-page.page */ "./src/app/pages/jobs/job-page/job-page.page.ts");







let JobPagePageModule = class JobPagePageModule {
};
JobPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _job_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["JobPagePageRoutingModule"]
        ],
        declarations: [_job_page_page__WEBPACK_IMPORTED_MODULE_6__["JobPagePage"]]
    })
], JobPagePageModule);



/***/ }),

/***/ "./src/app/pages/jobs/job-page/job-page.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9qb2ItcGFnZS9qb2ItcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2pvYnMvam9iLXBhZ2Uvam9iLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvam9iLXBhZ2Uvam9iLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Iiwic3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/jobs/job-page/job-page.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.page.ts ***!
  \******************************************************/
/*! exports provided: JobPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPagePage", function() { return JobPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let JobPagePage = class JobPagePage {
    constructor(activatedRoute, router, toastController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
    }
    applyForJob() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
    }
    favoriteThisJob() {
        console.log('Favoriting this Job');
        // Check for error before we present the toast
        this.presentToast();
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'This job has been favorited.',
                duration: 2000
            });
            toast.present();
        });
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        // tslint:disable-next-line: radix
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        // tslint:disable-next-line: radix
        const summary = this.activatedRoute.snapshot.paramMap.get('summary');
        // tslint:disable-next-line: radix
        const fullJobDescription = this.activatedRoute.snapshot.paramMap.get('fullJobDescription');
        // tslint:disable-next-line: radix
        const rateOfPay = this.activatedRoute.snapshot.paramMap.get('rateOfPay');
        this.jobId = id;
        this.jobTitle = title;
        // this.jobPosted = posted;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.jobSummary = summary;
        this.jobFullJobDescription = fullJobDescription;
        this.jobRateOfPay = rateOfPay;
    }
};
JobPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
JobPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-page.page.scss */ "./src/app/pages/jobs/job-page/job-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], JobPagePage);



/***/ })

}]);
//# sourceMappingURL=job-page-job-page-module-es2015.js.map