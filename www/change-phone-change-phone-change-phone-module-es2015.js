(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-phone-change-phone-change-phone-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-phone/change-phone/change-phone.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-phone/change-phone/change-phone.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Change Phone Number</ion-title>\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed class=\"ion-text-center\">\n      <ion-row>\n        <ion-col size=\"12\">\n            <h6 class=\"text-header\">Current Phone Number: {{activePhone}}</h6>\n            <form (ngSubmit)=\"confirmChangedPhoneNumber(\n              this.changePhone.controls.newNumber.value,\n              this.changePhone.controls.password.value\n            )\" [formGroup]=\"changePhone\">\n\n\n            <ion-list class=\"line-input\">\n                <!-- Email -->\n                <ion-item>\n                  <ion-input\n                    maxLength=\"10\"\n                    placeholder=\"New Number  - xxx - xxx - xxxx\"\n                    formControlName=\"newNumber\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n\n                <!-- Number Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.phone\">\n                      <div class=\"error-message\"\n                        *ngIf=\"changePhone\n                          .get('newNumber')\n                          .hasError(validation.text) && (changePhone.get('newNumber')\n                          .dirty || changePhone.get('newNumber').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n                <ion-item>\n                    <ion-input\n                      placeholder=\"Password\"\n                      formControlName=\"password\"\n                      type=\"password\">\n                    </ion-input>\n                </ion-item>\n              </ion-list>\n                <ion-button\n                  [disabled]=\"disabled\"\n                  type=\"submit\"\n                  class=\"orange-button\">CHANGE NUMBER</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/profile/change-phone/change-phone/change-phone-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/profile/change-phone/change-phone/change-phone-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ChangePhonePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePhonePageRoutingModule", function() { return ChangePhonePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_phone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-phone.page */ "./src/app/pages/profile/change-phone/change-phone/change-phone.page.ts");




const routes = [
    {
        path: '',
        component: _change_phone_page__WEBPACK_IMPORTED_MODULE_3__["ChangePhonePage"]
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "./src/app/pages/profile/change-phone/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }
];
let ChangePhonePageRoutingModule = class ChangePhonePageRoutingModule {
};
ChangePhonePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePhonePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/change-phone/change-phone/change-phone.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/change-phone/change-phone/change-phone.module.ts ***!
  \********************************************************************************/
/*! exports provided: ChangePhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePhonePageModule", function() { return ChangePhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-phone-routing.module */ "./src/app/pages/profile/change-phone/change-phone/change-phone-routing.module.ts");
/* harmony import */ var _change_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-phone.page */ "./src/app/pages/profile/change-phone/change-phone/change-phone.page.ts");







let ChangePhonePageModule = class ChangePhonePageModule {
};
ChangePhonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _change_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePhonePageRoutingModule"]
        ],
        declarations: [_change_phone_page__WEBPACK_IMPORTED_MODULE_6__["ChangePhonePage"]]
    })
], ChangePhonePageModule);



/***/ }),

/***/ "./src/app/pages/profile/change-phone/change-phone/change-phone.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/change-phone/change-phone/change-phone.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXBob25lL2NoYW5nZS1waG9uZS9jaGFuZ2UtcGhvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/profile/change-phone/change-phone/change-phone.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile/change-phone/change-phone/change-phone.page.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePhonePage", function() { return ChangePhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");






let ChangePhonePage = class ChangePhonePage {
    constructor(formBuilder, router, auth, profile) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.profile = profile;
        this.activeEmail = this.profile.email.getValue();
        this.activePhone = this.profile.phone.getValue();
        this.disabled = true;
        this.validationMessasges = {
            phone: [
                { type: 'text', message: 'Phone number has to be 10 digits long' }
            ]
        };
        this.activeEmail = this.auth.user.email;
    }
    ngOnInit() {
        this.changePhone = this.formBuilder.group({
            newNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formOnChanges();
    }
    confirmChangedPhoneNumber(newNumber, password) {
        this.profile.changePhone(this.activeEmail, newNumber, password);
    }
    cancel() {
        console.log('change phone number cancelled');
        this.router.navigate(['/home/profile']);
    }
    formOnChanges() {
        this.changePhone.statusChanges.subscribe(status => {
            console.log(status);
            if (status === 'VALID') {
                this.disabled = false;
            }
        });
    }
};
ChangePhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
ChangePhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-phone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-phone.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-phone/change-phone/change-phone.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-phone.page.scss */ "./src/app/pages/profile/change-phone/change-phone/change-phone.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], ChangePhonePage);



/***/ })

}]);
//# sourceMappingURL=change-phone-change-phone-change-phone-module-es2015.js.map