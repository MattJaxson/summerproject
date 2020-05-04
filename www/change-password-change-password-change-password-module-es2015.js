(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password/change-password.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password/change-password.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Change Password</ion-title>\r\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n        cancel\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid fixed class=\"ion-text-center\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n            <h6 class=\"text-header\">Change your password.</h6>\r\n            <form \r\n             (ngSubmit)=\"confirmChangedPassword(\r\n              this.changePassword.controls.password.value,\r\n              this.changePassword.controls.newPassword.value,\r\n              this.changePassword.controls.reTypeNewPassword.value)\"\r\n            [formGroup]=\"changePassword\">\r\n\r\n\r\n            <ion-list class=\"line-input\">\r\n                <!-- Email -->\r\n                <ion-item>\r\n                  <ion-input\r\n                    required\r\n                    placeholder=\"Current password\"\r\n                    formControlName=\"password\"\r\n                    type=\"password\">\r\n                  </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-input\r\n                      required\r\n                      placeholder=\"New Password\"\r\n                      formControlName=\"newPassword\"\r\n                      type=\"password\">\r\n                    </ion-input>\r\n\r\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\r\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\r\n                    </ion-button>\r\n\r\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\r\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n                \r\n                <!-- Password Validation-->\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                      <div class=\"error-message\"\r\n                        *ngIf=\"changePassword\r\n                          .get('newPassword')\r\n                          .hasError('pattern') && (changePassword.get('newPassword')\r\n                          .dirty || changePassword.get('newPassword').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n\r\n  \r\n                <ion-item>\r\n                    <ion-input\r\n                      required\r\n                      placeholder=\"Re-Type New Password\"\r\n                      formControlName=\"reTypeNewPassword\"\r\n                      type=\"password\">\r\n                    </ion-input>\r\n\r\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\r\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\r\n                    </ion-button>\r\n\r\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\r\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <!-- Password Validation-->\r\n              <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                    <div class=\"error-message\"\r\n                      *ngIf=\"changePassword\r\n                        .get('reTypeNewPassword')\r\n                        .hasError('pattern') && (changePassword.get('reTypeNewPassword')\r\n                        .dirty || changePassword.get('reTypeNewPassword').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n                <ion-button \r\n                [disabled]=\"!passwordsMatch\" \r\n                type=\"submit\" class=\"orange-button\">CHANGE PASSWORD</ion-button>\r\n\r\n              </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password/change-password-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password/change-password-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/profile/change-password/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "./src/app/pages/profile/change-password/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    },
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password/change-password.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password/change-password.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/pages/profile/change-password/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/profile/change-password/change-password/change-password.page.ts");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password/change-password.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password/change-password.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n@-webkit-keyframes password-icons {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes password-icons {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDQ0Y7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZFBhc3N3b3JkIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcclxufVxyXG5cclxuLmJhZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xyXG59XHJcblxyXG4uZ29vZFBhc3N3b3JkIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcclxufVxyXG5cclxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBwYXNzd29yZC1pY29ucyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59IiwiLmJhZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmJhZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG4uZ29vZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwYXNzd29yZC1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password/change-password.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password/change-password.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");






let ChangePasswordPage = class ChangePasswordPage {
    constructor(formBuilder, router, auth, profile) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.profile = profile;
        this.activeEmail = '';
        this.passwordsMatch = false;
        this.validationMessasges = {
            password: [
                { type: 'password', message: 'Please enter a valid password.' }
            ]
        };
        this.activeEmail = this.auth.user.email;
    }
    ngOnInit() {
        this.changePassword = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
            reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        this.formOnChanges();
    }
    formOnChanges() {
        console.log(this.changePassword);
        this.changePassword.valueChanges
            .subscribe(data => {
            console.log(data);
            this.changePassword.statusChanges.subscribe(status => {
                console.log(status);
                if (status === 'VALID') {
                    this.passwordsMatch = true;
                }
            });
            if (this.changePassword.controls.newPassword.value === this.changePassword.controls.reTypeNewPassword.value &&
                this.changePassword.controls.newPassword.touched) {
                console.log('Passwords Match');
            }
            if (this.changePassword.controls.newPassword.value !== this.changePassword.controls.reTypeNewPassword.value) {
                console.log('Passwords dont match');
                this.passwordsMatch = false;
            }
        });
    }
    confirmChangedPassword(oldPassword, newPassword, reTypeNewPassword) {
        this.profile.changePassword(this.activeEmail, oldPassword, newPassword, reTypeNewPassword);
    }
    cancel() {
        console.log('change password cancelled');
        this.router.navigate(['/home/profile']);
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password/change-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/profile/change-password/change-password/change-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-change-password-module-es2015.js.map