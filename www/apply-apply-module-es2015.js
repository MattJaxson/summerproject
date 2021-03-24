(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-apply-module"],{

/***/ "1Xhk":
/*!**********************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResumePageModule", function() { return ViewResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-resume-routing.module */ "SW0C");
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-resume.page */ "eXUY");
/* harmony import */ var _upload_resume_modal_upload_resume_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../upload-resume-modal/upload-resume-modal.module */ "BD02");








let ViewResumePageModule = class ViewResumePageModule {
};
ViewResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewResumePageRoutingModule"],
            _upload_resume_modal_upload_resume_modal_module__WEBPACK_IMPORTED_MODULE_7__["UploadResumeModalPageModule"]
        ],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_6__["ViewResumePage"]]
    })
], ViewResumePageModule);



/***/ }),

/***/ "NMX6":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ApplyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageRoutingModule", function() { return ApplyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply.page */ "c2PQ");




const routes = [
    {
        path: '',
        component: _apply_page__WEBPACK_IMPORTED_MODULE_3__["ApplyPage"]
    },
    {
        path: 'apply-confirm/:title/:companyName/:companyEmail',
        loadChildren: () => __webpack_require__.e(/*! import() | apply-confirm-apply-confirm-module */ "apply-confirm-apply-confirm-module").then(__webpack_require__.bind(null, /*! ../apply-confirm/apply-confirm.module */ "NCAH")).then(m => m.ApplyConfirmPageModule)
    }
];
let ApplyPageRoutingModule = class ApplyPageRoutingModule {
};
ApplyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplyPageRoutingModule);



/***/ }),

/***/ "SW0C":
/*!******************************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ViewResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResumePageRoutingModule", function() { return ViewResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-resume.page */ "eXUY");




const routes = [
    {
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_3__["ViewResumePage"]
    }
];
let ViewResumePageRoutingModule = class ViewResumePageRoutingModule {
};
ViewResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewResumePageRoutingModule);



/***/ }),

/***/ "WFDr":
/*!**********************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  margin: 30px auto;\n  color: #005191;\n}\n\n.orange-button {\n  position: relative;\n  top: 4px;\n  right: 20px;\n  margin: 30px 0px 100px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoidmlldy1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAwcHggMTAwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "c2PQ":
/*!************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.ts ***!
  \************************************************/
/*! exports provided: ApplyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPage", function() { return ApplyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apply_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apply.page.html */ "sGSZ");
/* harmony import */ var _apply_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply.page.scss */ "giS8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/jobs.service */ "sgUz");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/profile.service */ "Aso2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_modals_view_resume_view_resume_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/view-resume/view-resume.page */ "eXUY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");












let ApplyPage = class ApplyPage {
    constructor(router, activatedRoute, jobs, profile, formBuilder, location, modal) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobs = jobs;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.location = location;
        this.modal = modal;
    }
    ngOnDestroy() {
        this.profileSub.unsubscribe();
        // this.sendAppSub.unsubscribe();
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        this.jobTitle = title;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.profileSub = this.profile.getUserDetails().subscribe(data => {
            this.user = data;
            this.age = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInYears"])(Date.now(), Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["parseISO"])(data["dob"]));
            console.log('User\'s age: ', this.age);
            this.populateForm(this.user["phone"]);
        });
    }
    goBack() {
        this.location.back();
    }
    populateForm(phoneNumber) {
        this.applyPageForm = this.formBuilder.group({
            phoneNumber: [phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)
                ])],
            reasonTextArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2500)])]
        });
    }
    uploadResume() {
        console.log('Uploading Resume');
    }
    viewResumeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_view_resume_view_resume_page__WEBPACK_IMPORTED_MODULE_10__["ViewResumePage"],
                cssClass: 'my-custom-class'
            });
            yield modal.present();
        });
    }
    sendConfirmationEmail() {
        console.log('Sending confirmation email to Users email address');
    }
    finishApplication() {
        this.reason = this.applyPageForm.value.reasonTextArea;
        this.phoneNumber = this.applyPageForm.value.phoneNumber;
        console.log('Reason: ', this.reason);
        // tslint:disable-next-line: max-line-length
        this.sendAppSub = this.jobs.sendEmailApplication(this.user, this.age, this.phoneNumber, this.reason, this.jobTitle, this.jobCompanyEmail).subscribe();
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
    }
};
ApplyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] }
];
ApplyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-apply',
        template: _raw_loader_apply_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_apply_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]])
], ApplyPage);



/***/ }),

/***/ "eXUY":
/*!********************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume.page.ts ***!
  \********************************************************/
/*! exports provided: ViewResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResumePage", function() { return ViewResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-resume.page.html */ "sS/t");
/* harmony import */ var _view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-resume.page.scss */ "WFDr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _upload_resume_modal_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../upload-resume-modal/upload-resume-modal.page */ "6e3a");



// Modal






let ViewResumePage = class ViewResumePage {
    constructor(router, _modal, profile, domSanitizer) {
        this.router = router;
        this._modal = _modal;
        this.profile = profile;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            console.log(data);
            this.profile.resume.next(data['resume']);
        });
        this.profile.resume.subscribe(data => {
            this.resume = data;
        });
    }
    sanitizeImageUrl(imageUrl) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
    uploadResumeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _upload_resume_modal_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_8__["UploadResumeModalPage"],
                cssClass: 'my-custom-class'
            });
            yield modal.present();
        });
    }
    cancel() {
        this._modal.dismiss();
    }
};
ViewResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
ViewResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-resume',
        template: _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
], ViewResumePage);



/***/ }),

/***/ "giS8":
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.instructions {\n  font-weight: 600;\n  line-height: 1em;\n  width: 400px;\n  color: #222;\n  font-size: 1.3em;\n  border-radius: 50px;\n}\n\n.info-section {\n  margin-bottom: 60px;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.job-title {\n  font-size: 2em;\n  font-weight: 900;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  opacity: 0;\n  color: #005191;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\nh2.company-name {\n  margin-top: 0;\n  margin-bottom: 15px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;\n}\n\np {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n\n.custom-file-input {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  display: inline-block;\n  background: linear-gradient(to top, #f9f9f9, #e3e3e3);\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: black;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(to top, #e3e3e3, #f9f9f9);\n}\n\nion-label {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLDZEQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVGIiwiZmlsZSI6ImFwcGx5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5pbmZvLXNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGxvZ28tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuLmpvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG5oMi5jb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjFzIGZvcndhcmRzO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5cblxuLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xuICBjb250ZW50OiAnU2VsZWN0IHNvbWUgZmlsZXMnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmOWY5ZjksICNlM2UzZTMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuLmN1c3RvbS1maWxlLWlucHV0OmhvdmVyOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuLmN1c3RvbS1maWxlLWlucHV0OmFjdGl2ZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTNlM2UzLCAjZjlmOWY5KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "lBow":
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.module.ts ***!
  \**************************************************/
/*! exports provided: ApplyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageModule", function() { return ApplyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-routing.module */ "NMX6");
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply.page */ "c2PQ");
/* harmony import */ var src_app_modals_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/view-resume/view-resume.module */ "1Xhk");








let ApplyPageModule = class ApplyPageModule {
};
ApplyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyPageRoutingModule"],
            src_app_modals_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_7__["ViewResumePageModule"]
        ],
        declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_6__["ApplyPage"]]
    })
], ApplyPageModule);



/***/ }),

/***/ "sGSZ":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  <ion-title>Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n      <!-- Logo, Title, Company Name -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\"size-md=\"8\" size-lg=\"10\">\n            <div class=\"company-logo\" style=\"height: 80px; width: 80px;\"></div>\n\n            <h1 class=\"job-title\">{{jobTitle}}</h1>\n\n            <h2 class=\"company-name\">{{jobCompanyName}}</h2>\n\n        </ion-col>\n      </ion-row>\n\n        <!-- Instructions -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n            <p style=\"color: #0055a5;font-weight: 600;font-size: 1.2em;margin: 0;\">Please go over your information before you send your application.</p>\n          </ion-col>\n        </ion-row>\n\n        <!-- Forms -->\n        <ion-row class=\"ion-justify-content-center\" style=\"margin: 20px auto;\">\n            <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n              <form *ngIf=\"applyPageForm\" [formGroup]=\"applyPageForm\">\n                <ion-list class=\"line-input\">\n\n                  <div class=\"info-section\">\n                    <p class=\"instructions\" >Phone Number</p>\n                  <ion-item>\n                    <ion-input formControlName=\"phoneNumber\" maxlength=\"10\" inputmode=\"tel\"></ion-input>\n                  </ion-item>\n                  </div>\n                  <div class=\"info-section\">\n\n                    <p class=\"instructions\" >Resume</p>\n                      <ion-button class=\"blue-button\" style=\"height: 45px;\" (click)=\"viewResumeModal()\">\n                        View Resume\n                      </ion-button>\n                      <!-- <p>or</p> -->\n                      <ion-input type=\"file\" class=\"custom-file-input \">\n                        <label style=\"margin-right: 10px;\">Upload Resume</label>\n                      </ion-input>\n\n                  </div>\n                  <div class=\"info-section\">\n\n                    <p class=\"instructions\" >Why are you a good fit for this job?</p>\n                      <ion-textarea\n                      style=\"background: #d1d8e0\"\n                      formControlName=\"reasonTextArea\"\n                      maxlength=\"2500\"\n                      rows=\"15\"\n                      placeholder=\"Add message here - 2500 characters max\"\n                      (keydown.control.enter)=\"finishApplication()\"\n                      ></ion-textarea>\n                  </div>\n\n\n                </ion-list>\n                <p></p>\n                <ion-row>\n                  <ion-col class=\"ion-text-center\" size=\"12\">\n                    <ion-button (click)=\"finishApplication()\" class=\"orange-button next-button\">Submit</ion-button>\n                    <ion-button class=\"ion-hide-md-down blue-button\" (click)=\"goBack()\">\n                      Go Back</ion-button>\n                  </ion-col>\n                </ion-row>\n              </form>\n              </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "sS/t":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/view-resume/view-resume.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">View Resume</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col push-lg=\"0.5\" size=\"2\">\n        <h1>View Resume</h1>\n      </ion-col>\n      <ion-col push-lg=\"6.4\" size=\"6\">\n        <ion-button (click)=\"uploadResumeModal()\" class=\"orange-button\" style=\"width: 150px;\">UPDATE</ion-button>\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n          Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"11\">\n        <hr style=\"background-color: #666;\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n        <h4>You can View and Update your Resume here</h4>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n\n      </ion-col>\n      <ion-button (click)=\"uploadResumeModal()\" class=\"orange-button ion-hide-md-up\" style=\"width: 150px;\">UPDATE</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=apply-apply-module-es2015.js.map