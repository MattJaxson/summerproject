(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-phone-change-phone-change-phone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/change-phone/change-phone/change-phone.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/change-phone/change-phone/change-phone.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Phone Number</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"ion-text-center\">\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"1.8\" size=\"4\">\n        <h1>Change Phone Number</h1>\n      </ion-col>\n      <ion-col push=\"2.1\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n            <h6 class=\"text-header\" style=\"width: unset;\">Current Phone Number: {{activePhone}}</h6>\n            <form (ngSubmit)=\"confirmChangedPhoneNumber(\n              this.changePhone.controls.newNumber.value,\n              this.changePhone.controls.password.value\n            )\" [formGroup]=\"changePhone\">\n\n\n            <ion-list class=\"line-input\">\n                <!-- New Number -->\n                <ion-item>\n                  <ion-input\n                    required\n                    maxLength=\"10\"\n                    placeholder=\"New Number  - xxx - xxx - xxxx\"\n                    formControlName=\"newNumber\"\n                    type=\"text\"\n                    (keyup.enter)=\"formValid ? confirmChangedPhoneNumber(this.changePhone.controls.newNumber.value, this.changePhone.controls.password.value) : null\">\n                  </ion-input>\n                </ion-item>\n\n                <!-- Number Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.phone\">\n                      <div class=\"error-message\"\n                        *ngIf=\"changePhone\n                          .get('newNumber')\n                          .hasError(validation.message) && (changePhone.get('newNumber')\n                          .dirty || changePhone.get('newNumber').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"Password\"\n                      formControlName=\"password\"\n                      type=\"password\"\n                      (keyup.enter)=\"formValid ? confirmChangedPhoneNumber(this.changePhone.controls.newNumber.value, this.changePhone.controls.password.value) : null\">\n                    </ion-input>\n                </ion-item>\n              </ion-list>\n                <ion-button\n                  [disabled]=\"!formValid\"\n                  type=\"submit\"\n                  class=\"orange-button\" style=\"width: unset;\">CHANGE NUMBER</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  margin: 0;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcGhvbmUvY2hhbmdlLXBob25lL2NoYW5nZS1waG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXBob25lL2NoYW5nZS1waG9uZS9jaGFuZ2UtcGhvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcGhvbmUvY2hhbmdlLXBob25lL2NoYW5nZS1waG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let ChangePhonePage = class ChangePhonePage {
    constructor(formBuilder, router, auth, alertController, profile) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.alertController = alertController;
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
        this.changePhone.valueChanges.subscribe(_ => {
            setTimeout(() => {
                if (this.changePhone.valid) {
                    this.formValid = true;
                }
                else {
                    this.formValid = false;
                }
            }, 100);
        });
    }
    back() {
        console.log('change phone number cancelled');
        this.router.navigate(['/home/profile/edit-profile-page']);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'danger-alert',
                header: 'Already Using This Number',
                message: 'You are already using this phone number.',
                buttons: [{
                        text: 'OK'
                    }]
            });
            yield alert.present();
        });
    }
    confirmChangedPhoneNumber(newNumber, password) {
        if (newNumber == this.activePhone) {
            this.presentAlert();
        }
        else {
            this.profile.changePhone(this.activeEmail, newNumber, password);
        }
    }
};
ChangePhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
ChangePhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-phone',
        template: __webpack_require__(/*! raw-loader!./change-phone.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/change-phone/change-phone/change-phone.page.html"),
        styles: [__webpack_require__(/*! ./change-phone.page.scss */ "./src/app/pages/profile/change-phone/change-phone/change-phone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], ChangePhonePage);



/***/ })

}]);
//# sourceMappingURL=change-phone-change-phone-change-phone-module-es2015.js.map