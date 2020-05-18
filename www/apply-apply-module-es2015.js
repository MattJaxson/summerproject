(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-apply-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  <ion-title style=\"color: white;\">Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n\n        <h1 class=\"job-title\">{{jobTitle}}</h1>\n\n        <h2 class=\"company-name\">{{jobCompanyName}}</h2>\n\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">Please go over your Resume and information before you apply. </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n          <form *ngIf=\"applyPageForm\" [formGroup]=\"applyPageForm\">\n            <ion-item>\n              <ion-label position=\"stacked\">Phone Number</ion-label>\n              <ion-input formControlName=\"phoneNumber\" maxlength=\"10\" inputmode=\"tel\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Go over your Resume</ion-label>\n              <ion-button (click)=\"viewResume()\">\n                View Resume\n              </ion-button>\n            </ion-item>\n            <p>or</p>\n            <ion-item>\n              <ion-input type=\"file\">\n                <p style=\"margin-right: 10px;\">Upload Resume</p>\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-textarea\n              formControlName=\"reasonTextArea\"\n              maxlength=\"2500\"\n              rows=\"10\"\n              placeholder=\"Why are you a great candidate for the position of {{jobTitle}}?\"\n              ></ion-textarea>\n            </ion-item>\n            <p><i>optional</i> - 2500 characters max</p>\n            <ion-button (click)=\"finishApplication()\" class=\"orange-button next-button\">Submit Application</ion-button>\n          </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/jobs/apply/apply-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ApplyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageRoutingModule", function() { return ApplyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply.page */ "./src/app/pages/jobs/apply/apply.page.ts");




const routes = [
    {
        path: '',
        component: _apply_page__WEBPACK_IMPORTED_MODULE_3__["ApplyPage"]
    },
    {
        path: 'apply-confirm/:title/:companyName/:companyEmail',
        loadChildren: () => __webpack_require__.e(/*! import() | apply-confirm-apply-confirm-module */ "apply-confirm-apply-confirm-module").then(__webpack_require__.bind(null, /*! ../apply-confirm/apply-confirm.module */ "./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts")).then(m => m.ApplyConfirmPageModule)
    }
];
let ApplyPageRoutingModule = class ApplyPageRoutingModule {
};
ApplyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jobs/apply/apply.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.module.ts ***!
  \**************************************************/
/*! exports provided: ApplyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageModule", function() { return ApplyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-routing.module */ "./src/app/pages/jobs/apply/apply-routing.module.ts");
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply.page */ "./src/app/pages/jobs/apply/apply.page.ts");







let ApplyPageModule = class ApplyPageModule {
};
ApplyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyPageRoutingModule"]
        ],
        declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_6__["ApplyPage"]]
    })
], ApplyPageModule);



/***/ }),

/***/ "./src/app/pages/jobs/apply/apply.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\nh1.job-title {\n  font-size: 2em;\n  font-weight: 900;\n  color: #005191;\n  margin-bottom: 5px;\n}\n\nh2.company-name {\n  margin-top: 0;\n}\n\nion-item {\n  margin: 10px 0;\n}\n\n.orange-button {\n  width: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9hcHBseS9hcHBseS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2pvYnMvYXBwbHkvYXBwbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2FwcGx5L2FwcGx5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMS5qb2ItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5oMi5jb21wYW55LW5hbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbmgxLmpvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5oMi5jb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/jobs/apply/apply.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.ts ***!
  \************************************************/
/*! exports provided: ApplyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPage", function() { return ApplyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let ApplyPage = class ApplyPage {
    constructor(router, activatedRoute, jobs, profile, formBuilder) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobs = jobs;
        this.profile = profile;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        this.jobTitle = title;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.profile.getUserDetails().subscribe(data => {
            let user = data;
            let userPhoneNumber = data["phone"];
            let userResume = data["resume"];
            this.user = user;
            this.userPhoneNumber = userPhoneNumber;
            this.userResume = userResume;
            this.populateForm(userPhoneNumber);
        });
    }
    populateForm(phoneNumber) {
        this.applyPageForm = this.formBuilder.group({
            phoneNumber: [phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)
                ])],
            reasonTextArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2500)])]
        });
    }
    viewResume() {
        console.log('Viewing Resume');
    }
    uploadResume() {
        console.log('Uploading Resume');
    }
    sendConfirmationEmail() {
        console.log('Sending confirmation email to Users email address');
    }
    finishApplication() {
        this.jobs.sendEmailApplication(this.user).subscribe();
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
    }
};
ApplyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
ApplyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apply.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apply.page.scss */ "./src/app/pages/jobs/apply/apply.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], ApplyPage);



/***/ })

}]);
//# sourceMappingURL=apply-apply-module-es2015.js.map