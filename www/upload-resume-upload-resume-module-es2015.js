(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-resume-upload-resume-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Upload Resume</ion-title>\r\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n        cancel\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <h6 class=\"text-header\">Please upload your resume.</h6>\r\n  <h6 class=\"no-resume\" *ngIf=\"!uploaded\">No resume uploaded. Please upload your resume.</h6>\r\n  <h6 class=\"uploaded-resume\" *ngIf=\"uploaded\">filename.pdf</h6>\r\n  <ion-button class=\"get-file\" (click)=\"getFileFromPhone()\">\r\n      Get file\r\n    </ion-button>\r\n  <ion-button\r\n  [disabled]=\"!uploaded\"\r\n  (click)=\"goToCredentialsPage(this.resume)\"\r\n  class=\"orange-button\">NEXT</ion-button>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UploadResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePageRoutingModule", function() { return UploadResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-resume.page */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts");




const routes = [
    {
        path: '',
        component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumePage"]
    },
    {
        path: 'login-credentials',
        loadChildren: () => __webpack_require__.e(/*! import() | login-credentials-login-credentials-module */ "login-credentials-login-credentials-module").then(__webpack_require__.bind(null, /*! ../login-credentials/login-credentials.module */ "./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts")).then(m => m.LoginCredentialsPageModule)
    },
];
let UploadResumePageRoutingModule = class UploadResumePageRoutingModule {
};
UploadResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadResumePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts ***!
  \**************************************************************************/
/*! exports provided: UploadResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePageModule", function() { return UploadResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-resume-routing.module */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts");
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-resume.page */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts");







let UploadResumePageModule = class UploadResumePageModule {
};
UploadResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumePageRoutingModule"]
        ],
        declarations: [_upload_resume_page__WEBPACK_IMPORTED_MODULE_6__["UploadResumePage"]]
    })
], UploadResumePageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXkgRllGXFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxzaWduLXVwXFx1cGxvYWQtcmVzdW1lXFx1cGxvYWQtcmVzdW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvdXBsb2FkLXJlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQ0E7O0FERUE7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvdXBsb2FkLXJlc3VtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tcmVzdW1lIHtcclxuYmFja2dyb3VuZDogcmdiYSgxMyw3MCwxMjMsMC4xKTtcclxuZm9udC1zaXplOiAwLjhlbTtcclxucGFkZGluZzogMjBweDtcclxubWFyZ2luOiA2MHB4IDAgNjBweCAwO1xyXG50cmFuc2l0aW9uOiAwLjVzO1xyXG5vcGFjaXR5OiAwO1xyXG5hbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xyXG59XHJcblxyXG4udXBsb2FkZWQtcmVzdW1lIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDMzLDIyMywxMzAsMC4xKTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiA2MHB4IDAgNjBweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAwLjVzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uZ2V0LWZpbGV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLXdpZHRoIDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXI6IDFweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn0iLCIubm8tcmVzdW1lIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgNzAsIDEyMywgMC4xKTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA2MHB4IDAgNjBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufVxuXG4udXBsb2FkZWQtcmVzdW1lIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMywgMjIzLCAxMzAsIDAuMSk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogNjBweCAwIDYwcHggMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMC41cyBmb3J3YXJkcztcbn1cblxuLmdldC1maWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlcjogMXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts ***!
  \************************************************************************/
/*! exports provided: UploadResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePage", function() { return UploadResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let UploadResumePage = class UploadResumePage {
    constructor(router, alertController, auth, location) {
        this.router = router;
        this.alertController = alertController;
        this.auth = auth;
        this.location = location;
        this.resume = '<resume>';
        this.uploaded = true;
    }
    ngOnInit() {
    }
    goToCredentialsPage(resume) {
        this.auth.getResume(resume);
        console.log('Going to Credentials Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
    }
    getFileFromPhone() {
    }
    uploadResume() {
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentAlert();
        // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Skip',
                message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
                buttons: [
                    {
                        text: 'Skip',
                        handler: () => {
                            this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
                            console.log('Skipping Resume Upload...');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling Resume Upload Skip...');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
UploadResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
UploadResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-resume.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-resume.page.scss */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], UploadResumePage);



/***/ })

}]);
//# sourceMappingURL=upload-resume-upload-resume-module-es2015.js.map