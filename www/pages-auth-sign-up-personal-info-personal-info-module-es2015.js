(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-sign-up-personal-info-personal-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-text-center\">\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Header -->\n      <h6 class=\"text-header\">Please enter your profile information.</h6>\n\n      <!-- Form -->\n      <ion-col style=\"margin-top: 150px;\" size-lg=\"5\" size-md=\"7\" size-xs=\"10\">\n        <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"goToProfilePicturePage(this.userInfoForm.value)\">\n\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input\n              #ioninput\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              formControlName=\"fullName\"\n              placeholder=\"First & Last Name\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                required \n                formControlName=\"addressOne\"  placeholder=\"Address\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName=\"addressTwo\"  placeholder=\"Apt/Unit #\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n              required\n              inputmode=\"text\"\n              formControlName=\"phone\"\n              maxlength=\"10\"\n              placeholder=\"Phone # e.i (xxx) xxx - xxxx\"></ion-input>\n            </ion-item>\n            <!-- Password Validation-->\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessasges.phone\">\n                <div class=\"error-message\"\n                *ngIf=\"userInfoForm\n                  .get('phone')\n                  .hasError(validation.type) && (userInfoForm.get('phone')\n                  .dirty || userInfoForm.get('phone').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n\n            <ion-item>\n              <ion-input \n              required\n              formControlName=\"city\"  placeholder=\"City\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                id=\"state-select\"\n                required\n                formControlName=\"state\"\n                interface=\"action-sheet\"\n                placeholder=\"State\"\n                value=\"\">\n                    <ion-select-option value=\"Alabama\">Alabama</ion-select-option>\n                    <ion-select-option value=\"Alaska\">Alaska</ion-select-option>\n                    <ion-select-option value=\"Arizona\">Arizona</ion-select-option>\n                    <ion-select-option value=\"Arkansas\">Arkansas</ion-select-option>\n                    <ion-select-option value=\"California\">California</ion-select-option>\n                    <ion-select-option value=\"Colorado\">Colorado</ion-select-option>\n                    <ion-select-option value=\"Connecticut\">Connecticut</ion-select-option>\n                    <ion-select-option value=\"Delaware\">Delaware</ion-select-option>\n                    <ion-select-option value=\"Florida\">Florida</ion-select-option>\n                    <ion-select-option value=\"Georgia\">Georgia</ion-select-option>\n                    <ion-select-option value=\"Hawaii\">Hawaii</ion-select-option>\n                    <ion-select-option value=\"Idaho\">Idaho</ion-select-option>\n                    <ion-select-option value=\"Illinois\">Illinois</ion-select-option>\n                    <ion-select-option value=\"Indiana\">Indiana</ion-select-option>\n                    <ion-select-option value=\"Iowa\">Iowa</ion-select-option>\n                    <ion-select-option value=\"Kansas\">Kansas</ion-select-option>\n                    <ion-select-option value=\"Kentucky\">Kentucky</ion-select-option>\n                    <ion-select-option value=\"Louisiana\">Louisiana</ion-select-option>\n                    <ion-select-option value=\"Maine\">Maine</ion-select-option>\n                    <ion-select-option value=\"Maryland\">Maryland</ion-select-option>\n                    <ion-select-option value=\"Massachusetts\">Massachusetts</ion-select-option>\n                    <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\n                    <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\n                    <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\n                    <ion-select-option value=\"Montana\">Montana</ion-select-option>\n                    <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\n                    <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\n                    <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\n                    <ion-select-option value=\"New Mexico\">New Mexico</ion-select-option>\n                    <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\n                    <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\n                    <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\n                    <ion-select-option value=\"Montana\">Montana</ion-select-option>\n                    <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\n                    <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\n                    <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\n                    <ion-select-option value=\"New Jersey\">New Mexico</ion-select-option>\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"South Carolina\">South Carolina</ion-select-option>\n                    <ion-select-option value=\"South Dakota\">South Dakota</ion-select-option>\n                    <ion-select-option value=\"Tennessee\">Tennessee</ion-select-option>\n                    <ion-select-option value=\"Texas\">Texas</ion-select-option>\n                    <ion-select-option value=\"Utah\">Utah</ion-select-option>\n                    <ion-select-option value=\"Vermont\">Vermont</ion-select-option>\n                    <ion-select-option value=\"Virginia\">Virginia</ion-select-option>\n                    <ion-select-option value=\"Washington\">Washington</ion-select-option>\n                    <ion-select-option value=\"West Virginia\">West Virginia</ion-select-option>\n                    <ion-select-option value=\"Wisconsin\">Wisconsin</ion-select-option>\n                    <ion-select-option value=\"Wyoming\">Wyoming</ion-select-option>\n                  </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                required\n                maxLength=\"5\"\n                formControlName=\"zip\"   placeholder=\"Zip Code\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"gender\"  placeholder=\"Gender\">\n                    <ion-select-option value=\"female\">Female</ion-select-option>\n                    <ion-select-option value=\"male\">Male</ion-select-option>\n                  </ion-select>\n            </ion-item>\n\n            <ion-item>\n                  <ion-label>Date of Birth</ion-label>\n                  <ion-datetime\n                    required\n                    min=\"2000\"\n                    displayFormat=\"DDD. MMM DD, YY\"\n                    placeholder=\"Select Date\"\n                    formControlName=\"dob\"\n                    monthShortNames=\"Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec\"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                required\n                formControlName=\"school\"    placeholder=\"School\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"grade\"   placeholder=\"Grade\">\n                  <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\n                  <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\n                  <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\n                  <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\n                  <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\n                  <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\n                  <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\n                  <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\n\n                  </ion-select>\n\n            </ion-item>\n            </ion-list>\n            <ion-button [disabled]=\"!this.userInfoForm.valid\" class=\"orange-button\" type=\"submit\">NEXT</ion-button><br>\n            <ion-button (click)=\"cancel()\" class=\"blue-button\" slot=\"end\">\n                cancel\n              </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts");




const routes = [
    {
        path: '',
        component: _personal_info_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoPage"]
    },
    {
        path: 'profile-picture',
        loadChildren: () => Promise.all(/*! import() | profile-picture-profile-picture-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-picture-profile-picture-module")]).then(__webpack_require__.bind(null, /*! ../profile-picture/profile-picture.module */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts")).then(m => m.ProfilePicturePageModule)
    }
];
let PersonalInfoPageRoutingModule = class PersonalInfoPageRoutingModule {
};
PersonalInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-info-routing.module */ "./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts");







let PersonalInfoPageModule = class PersonalInfoPageModule {
};
PersonalInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  padding: unset;\n}\n\n.orange-button, .blue-button {\n  margin: 25px 0 25px 0;\n}\n\n.blue-button {\n  margin: 25px 0 100px 0;\n}\n\n.text-header {\n  background: #edf3f8;\n  width: 100%;\n  padding: 50px 0;\n  position: fixed;\n  color: #666;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcGVyc29uYWwtaW5mby9wZXJzb25hbC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcbiAgICBwYWRkaW5nOiB1bnNldDtcbn1cblxuLm9yYW5nZS1idXR0b24sIC5ibHVlLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyNXB4IDAgMjVweCAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICAgIG1hcmdpbjogMjVweCAwIDEwMHB4IDA7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAvLyBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufSIsImg2IHtcbiAgcGFkZGluZzogdW5zZXQ7XG59XG5cbi5vcmFuZ2UtYnV0dG9uLCAuYmx1ZS1idXR0b24ge1xuICBtYXJnaW46IDI1cHggMCAyNXB4IDA7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjVweCAwIDEwMHB4IDA7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICM2NjY7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // Date of Birth
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            school: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
        this.userInfoForm.statusChanges.subscribe(status => {
            if (status === 'VALID') {
                console.log('you did it bruh');
            }
            console.log(this.userInfoForm);
        });
        this.userInfoForm.controls.fullName.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.addressOne.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.addressTwo.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.phone.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.city.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.state.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.zip.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.gender.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.dob.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.school.statusChanges.subscribe(data => {
            console.log(data);
        });
        this.userInfoForm.controls.grade.statusChanges.subscribe(data => {
            console.log(data);
        });
    }
};
PersonalInfoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ioninput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], PersonalInfoPage.prototype, "inputElement", void 0);
PersonalInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: __webpack_require__(/*! raw-loader!./personal-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html"),
        styles: [__webpack_require__(/*! ./personal-info.page.scss */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], PersonalInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-sign-up-personal-info-personal-info-module-es2015.js.map