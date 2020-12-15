(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-sign-up-personal-info-personal-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-text-center\">\n\n    <!-- Header -->\n    <ion-row class=\"header ion-justify-content-center\">\n      <ion-col size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n        <h6 class=\"text-header\">Please enter your profile information.</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Form -->\n      <ion-col style=\"margin-top: 50px;\" size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n        <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"goToProfilePicturePage(this.userInfoForm.value)\">\n\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input\n              #ioninput\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              formControlName=\"fullName\"\n              placeholder=\"First & Last Name\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"gender\"  placeholder=\"Gender\">\n                    <ion-select-option value=\"female\">Female</ion-select-option>\n                    <ion-select-option value=\"male\">Male</ion-select-option>\n                  </ion-select>\n            </ion-item>\n\n            <ion-item>\n                  <ion-label>Date of Birth</ion-label>\n                  <ion-datetime\n                    required\n                    min=\"2000\"\n                    displayFormat=\"DDD. MMM DD, YY\"\n                    placeholder=\"Select Date\"\n                    formControlName=\"dob\"\n                    monthShortNames=\"Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec\"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                required\n                formControlName=\"school\"    placeholder=\"School\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"grade\"   placeholder=\"Grade\">\n                  <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\n                  <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\n                  <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\n                  <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\n                  <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\n                  <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\n                  <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\n                  <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\n\n                  </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n              <ion-textarea\n              autogrow=\"true\"\n              autocapitalize=\"true\"\n              rows=\"5\"\n              spellcheck=\"true\"\n              wrap=\"soft\"\n              type=\"text\"\n              maxlength=\"500\"\n              placeholder=\"Tell us about yourself\" formControlName=\"about\">\n            </ion-textarea>\n          </ion-item>\n          <p class=\"char-limit\">500 character limit</p>\n\n            </ion-list>\n            <ion-button class=\"orange-button\" type=\"submit\">NEXT</ion-button><br>\n            <ion-button (click)=\"cancel()\" id=\"cancel-button\" class=\"blue-button\" slot=\"end\">\n                cancel\n              </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageRoutingModule", function() { return PersonalInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts");




const routes = [
    {
        path: '',
        component: _personal_info_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoPage"]
    },
    {
        path: 'profile-picture',
        loadChildren: () => Promise.all(/*! import() | profile-picture-profile-picture-module */[__webpack_require__.e("default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83"), __webpack_require__.e("common"), __webpack_require__.e("profile-picture-profile-picture-module")]).then(__webpack_require__.bind(null, /*! ../profile-picture/profile-picture.module */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts")).then(m => m.ProfilePicturePageModule)
    }
];
let PersonalInfoPageRoutingModule = class PersonalInfoPageRoutingModule {
};
PersonalInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts ***!
  \**************************************************************************/
/*! exports provided: PersonalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function() { return PersonalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-info-routing.module */ "./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts");







let PersonalInfoPageModule = class PersonalInfoPageModule {
};
PersonalInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInfoPageRoutingModule"]
        ],
        declarations: [_personal_info_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoPage"]]
    })
], PersonalInfoPageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n  padding: unset;\n}\n\n.header {\n  background: #edf3f8;\n  height: auto;\n  text-align: center;\n}\n\n.orange-button, .blue-button {\n  margin: 25px 0 25px 0;\n}\n\n.blue-button {\n  margin: 25px 0 100px 0;\n}\n\n.text-header {\n  background: #edf3f8;\n  padding: 30px 0;\n  color: #666;\n  z-index: 999;\n  margin: 0 auto;\n}\n\n.char-limit {\n  float: right;\n  position: relative;\n  top: -20px;\n  color: #e4405f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNiB7XG4gICAgcGFkZGluZzogdW5zZXQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4ub3JhbmdlLWJ1dHRvbiwgLmJsdWUtYnV0dG9uIHtcbiAgICBtYXJnaW46IDI1cHggMCAyNXB4IDA7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyNXB4IDAgMTAwcHggMDtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNoYXItbGltaXQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBjb2xvcjogI2U0NDA1Zjtcbn0iLCJoNiB7XG4gIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcmFuZ2UtYnV0dG9uLCAuYmx1ZS1idXR0b24ge1xuICBtYXJnaW46IDI1cHggMCAyNXB4IDA7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjVweCAwIDEwMHB4IDA7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgY29sb3I6ICM2NjY7XG4gIHotaW5kZXg6IDk5OTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jaGFyLWxpbWl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGNvbG9yOiAjZTQ0MDVmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts ***!
  \************************************************************************/
/*! exports provided: PersonalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPage", function() { return PersonalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");






let PersonalInfoPage = class PersonalInfoPage {
    constructor(
    // private auth: AuthService,
    formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.validationMessasges = {
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ],
            phone: [
                // tslint:disable-next-line: max-line-length
                { type: 'text', message: 'Phone Number has to be 10 digits (xxx) xxx - xxxx' }
            ]
        };
        this.fullNamePattern = '/^([^0-9]*)$/';
        this.phonePattern = '';
    }
    ngOnInit() {
        this.userInfoForm = this.formBuilder.group({
            fullName: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            gender: '',
            // Date of Birth
            dob: '',
            school: ['Wayne', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grade: ['Senior', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            about: ['Wassup', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.formOnChanges();
    }
    goToProfilePicturePage(data) {
        console.log(data);
        this.auth.getPersonalInfo(data);
        this.router.navigate(['/personal-info/profile-picture']);
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
    formOnChanges() {
        console.log(this.userInfoForm);
    }
};
PersonalInfoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ioninput', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], PersonalInfoPage.prototype, "inputElement", void 0);
PersonalInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./personal-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./personal-info.page.scss */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], PersonalInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-sign-up-personal-info-personal-info-module-es2015.js.map