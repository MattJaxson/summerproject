(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-resume-upload-resume-module"],{

/***/ "R+VB":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UploadResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePageRoutingModule", function() { return UploadResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-resume.page */ "cbk/");




const routes = [
    {
        path: '',
        component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumePage"]
    },
    {
        path: 'login-credentials',
        loadChildren: () => __webpack_require__.e(/*! import() | login-credentials-login-credentials-module */ "login-credentials-login-credentials-module").then(__webpack_require__.bind(null, /*! ../login-credentials/login-credentials.module */ "lnR2")).then(m => m.LoginCredentialsPageModule)
    },
];
let UploadResumePageRoutingModule = class UploadResumePageRoutingModule {
};
UploadResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadResumePageRoutingModule);



/***/ }),

/***/ "bQWd":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts ***!
  \**************************************************************************/
/*! exports provided: UploadResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePageModule", function() { return UploadResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-resume-routing.module */ "R+VB");
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-resume.page */ "cbk/");







let UploadResumePageModule = class UploadResumePageModule {
};
UploadResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumePageRoutingModule"]
        ],
        declarations: [_upload_resume_page__WEBPACK_IMPORTED_MODULE_6__["UploadResumePage"]]
    })
], UploadResumePageModule);



/***/ }),

/***/ "cbk/":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts ***!
  \************************************************************************/
/*! exports provided: UploadResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePage", function() { return UploadResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upload_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upload-resume.page.html */ "l4Vi");
/* harmony import */ var _upload_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-resume.page.scss */ "gfbc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _services_resume_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/resume.service */ "h8Q2");








let UploadResumePage = class UploadResumePage {
    constructor(router, alertController, auth, resume) {
        this.router = router;
        this.alertController = alertController;
        this.auth = auth;
        this.resume = resume;
        this.uploaded = true;
    }
    ngOnInit() {
    }
    getFormData(event) {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'resume-form') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
            }
        });
    }
    uploadResume() {
        this.resume.resumeUpload(this.formData).subscribe(data => {
            console.log(data['objectUrl']);
            this.goToCredentialsPage(data['objectUrl']);
        });
    }
    goToCredentialsPage(resume) {
        this.auth.getResume(resume);
        console.log('Going to Credentials Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
    }
    getFileFromPhone() {
        console.error("TODO: getFileFromPhone() not implemented yet");
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentAlert();
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Skip',
                message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
                buttons: [
                    {
                        text: 'Skip',
                        handler: () => {
                            // Get Default Picture Logo
                            this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_resume_service__WEBPACK_IMPORTED_MODULE_7__["ResumeService"] }
];
UploadResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upload-resume',
        template: _raw_loader_upload_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upload_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_resume_service__WEBPACK_IMPORTED_MODULE_7__["ResumeService"]])
], UploadResumePage);



/***/ }),

/***/ "gfbc":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 150px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\nh6 {\n  margin: 30px auto;\n  padding: unset;\n}\n\n.no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n\n.text-header {\n  background: #edf3f8;\n  width: 100%;\n  position: relative;\n  top: -40px;\n  padding: 50px 0;\n  color: #666;\n  z-index: 999;\n}\n\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n\nspan {\n  color: #005191;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n.skip-button {\n  display: block;\n  border: none;\n  --background: rgb(230, 230, 230);\n  color: #888;\n  width: 150px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\ninput[type=file] {\n  color: #005191;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  width: auto;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 0px;\n  text-align: center;\n  cursor: pointer;\n  margin: 50px auto;\n}\n\ninput[type=file]:hover {\n  background: linear-gradient(#0672c4, #054372);\n  color: white;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvdXBsb2FkLXJlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQUNBOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBFQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLDZDQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFJQTtFQUNFO0lBQ0UsNEJBQUE7RUFERjtFQUlBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRjs7QUFOQTtFQUNFO0lBQ0UsNEJBQUE7RUFERjtFQUlBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC91cGxvYWQtcmVzdW1lL3VwbG9hZC1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoI2ZkZmJmYiwgI2ZmZjdmOCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmMTViNzcsICNlNDQwNWYpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ubm8tcmVzdW1lIHtcbmJhY2tncm91bmQ6IHJnYmEoMTMsNzAsMTIzLDAuMSk7XG5mb250LXNpemU6IDAuOGVtO1xucGFkZGluZzogMjBweDtcbm1hcmdpbjogNjBweCAwIDYwcHggMDtcbnRyYW5zaXRpb246IDAuNXM7XG5vcGFjaXR5OiAwO1xuYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbn1cblxuLnVwbG9hZGVkLXJlc3VtZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsMjIzLDEzMCwwLjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgY29sb3I6ICM2NjY7XG4gIHotaW5kZXg6IDk5OTtcbiAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmdldC1maWxle1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXdpZHRoIDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlcjogMXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5zcGFue1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5za2lwLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gIGNvbG9yOiAjODg4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDU0MzcyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "h8Q2":
/*!********************************************!*\
  !*** ./src/app/services/resume.service.ts ***!
  \********************************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let ResumeService = class ResumeService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    resumeUpload(resumeForm) {
        console.log('resume uploading');
        return this.http.post(`${this.BACKEND_URL}/api/resume/upload-resume`, resumeForm);
    }
    changeResume(imageForm) {
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/resume/change-resume`, imageForm);
    }
};
ResumeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResumeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ResumeService);



/***/ }),

/***/ "l4Vi":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  style=\"display: none;\"></ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <h6 class=\"text-header\">Please upload your Resume. Only <span>.pdf</span> files are allowed.</h6>\n        <form id=\"resume-form\" (ngSubmit)=\"uploadResume()\">\n\n          <input name=\"resume\" (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n          type=\"file\"/>\n\n          <ion-button\n            [disabled]=\"!uploaded\"\n            type=\"submit\"\n            class=\"orange-button\"\n            style=\"display: block;\">\n          NEXT</ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=upload-resume-upload-resume-module-es2015.js.map