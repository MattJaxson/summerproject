(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module"],{

/***/ "6e3a":
/*!************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.ts ***!
  \************************************************************************/
/*! exports provided: UploadResumeModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumeModalPage", function() { return UploadResumeModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upload_resume_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upload-resume-modal.page.html */ "ZI5f");
/* harmony import */ var _upload_resume_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-resume-modal.page.scss */ "DEJT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/resume.service */ "h8Q2");








let UploadResumeModalPage = class UploadResumeModalPage {
    constructor(resume, router, profile, alert, modal, toast, loading) {
        this.resume = resume;
        this.router = router;
        this.profile = profile;
        this.alert = alert;
        this.modal = modal;
        this.toast = toast;
        this.loading = loading;
        this.userProPicUrl = this.profile.resume.getValue();
        this.awsPrefix = this.userProPicUrl.slice(-51);
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            this.userEmail = data['email'];
            console.log(this.userEmail);
        });
    }
    back() {
        this.router.navigate(['/home/profile/view-resume']);
    }
    getFormData(event) {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
                this.uploadedResume = true;
            }
        });
        console.log(this.formData);
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            // convert image file to base64 string
            this.uploadedPhotoURL = reader.result;
        }, false);
        if (formElement) {
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    uploadResume() {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
                this.formData.append('oldResumeKey', this.awsPrefix);
                this.formData.append('email', this.userEmail);
            }
        });
        this.resume.changeResume(this.formData).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
            let newResume = data['objectUrl'];
            console.log(newResume);
            yield this.presentLoading();
            yield this.profile.resume.next(newResume);
            yield this.presentToast();
        }));
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your Resume has been changed',
                animated: true,
                cssClass: 'updated-toast',
                duration: 2000
            });
            toast.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Updating Resume...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.modal.dismiss();
        });
    }
    cancel() {
        this.modal.dismiss();
    }
};
UploadResumeModalPage.ctorParameters = () => [
    { type: src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_7__["ResumeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
UploadResumeModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upload-resume-modal',
        template: _raw_loader_upload_resume_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upload_resume_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_7__["ResumeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], UploadResumeModalPage);



/***/ }),

/***/ "BD02":
/*!**************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.module.ts ***!
  \**************************************************************************/
/*! exports provided: UploadResumeModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumeModalPageModule", function() { return UploadResumeModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-resume-modal-routing.module */ "cXfn");
/* harmony import */ var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-resume-modal.page */ "6e3a");







let UploadResumeModalPageModule = class UploadResumeModalPageModule {
};
UploadResumeModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumeModalPageRoutingModule"]
        ],
        declarations: [_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_6__["UploadResumeModalPage"]]
    })
], UploadResumeModalPageModule);



/***/ }),

/***/ "DEJT":
/*!**************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3VwbG9hZC1yZXN1bWUtbW9kYWwvdXBsb2FkLXJlc3VtZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3VwbG9hZC1yZXN1bWUtbW9kYWwvdXBsb2FkLXJlc3VtZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbmlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */");

/***/ }),

/***/ "ZI5f":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/upload-resume-modal/upload-resume-modal.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Update Resume</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.8\" size=\"2.5\">\n        <h1>Update Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background: #666;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <p class=\"text-header\">Please upload a resume from your phone</p>\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "cXfn":
/*!**********************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UploadResumeModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumeModalPageRoutingModule", function() { return UploadResumeModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-resume-modal.page */ "6e3a");




const routes = [
    {
        path: '',
        component: _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumeModalPage"]
    }
];
let UploadResumeModalPageRoutingModule = class UploadResumeModalPageRoutingModule {
};
UploadResumeModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadResumeModalPageRoutingModule);



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



/***/ })

}]);
//# sourceMappingURL=default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module-es2015.js.map