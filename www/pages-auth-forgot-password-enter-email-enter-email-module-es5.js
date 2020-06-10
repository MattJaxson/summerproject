(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-forgot-password-enter-email-enter-email-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/forgot-password/enter-email/enter-email.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/forgot-password/enter-email/enter-email.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"display: none;\">\n  <!-- <ion-toolbar>\n    <ion-title>Forgot Password</ion-title>\n    <ion-button  slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\n      <ion-row>\n        <ion-col size-sm=\"10\" size-lg=\"6\" offset-lg=\"3\" offset-sm=\"1\">\n          <h6 class=\"text-header\">Please enter your email address. An email will be sent to you with a <span style=\"font-weight: 700;\">6 character code</span>. </h6>\n          <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"goToEnterCodePage(this.forgotPasswordForm.value.email)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <ion-input\n                placeholder=\"Enter Email Address\"\n                required\n                formControlName=\"email\"\n                inputmode=\"email\"\n                type=\"email\">\n              </ion-input>\n            </ion-item>\n\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                  <div class=\"error-message\"\n                    *ngIf=\"forgotPasswordForm\n                      .get('email')\n                      .hasError(validation.type) && (forgotPasswordForm.get('email')\n                      .dirty || forgotPasswordForm.get('email').touched)\">\n                    {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n\n          </ion-list>\n\n          <ion-button type=\"submit\" class=\"orange-button\">GET CODE</ion-button><br>\n\n          <ion-button (click)=\"cancel()\" class=\"cancel-button\">CANCEL</ion-button>\n\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/enter-email/enter-email-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: EnterEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterEmailPageRoutingModule", function() { return EnterEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enter_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-email.page */ "./src/app/pages/auth/forgot-password/enter-email/enter-email.page.ts");




var routes = [
    // 1st of 3 forgot password pages
    {
        path: '',
        component: _enter_email_page__WEBPACK_IMPORTED_MODULE_3__["EnterEmailPage"]
    },
    //  to new password page
    {
        path: 'enter-code/:email',
        loadChildren: function () { return __webpack_require__.e(/*! import() | forgot-password-enter-code-enter-code-module */ "forgot-password-enter-code-enter-code-module").then(__webpack_require__.bind(null, /*! ../../forgot-password/enter-code/enter-code.module */ "./src/app/pages/auth/forgot-password/enter-code/enter-code.module.ts")).then(function (m) { return m.EnterCodePageModule; }); }
    }
];
var EnterEmailPageRoutingModule = /** @class */ (function () {
    function EnterEmailPageRoutingModule() {
    }
    EnterEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EnterEmailPageRoutingModule);
    return EnterEmailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/forgot-password/enter-email/enter-email.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email.module.ts ***!
  \******************************************************************************/
/*! exports provided: EnterEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterEmailPageModule", function() { return EnterEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _enter_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-email-routing.module */ "./src/app/pages/auth/forgot-password/enter-email/enter-email-routing.module.ts");
/* harmony import */ var _enter_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-email.page */ "./src/app/pages/auth/forgot-password/enter-email/enter-email.page.ts");







var EnterEmailPageModule = /** @class */ (function () {
    function EnterEmailPageModule() {
    }
    EnterEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _enter_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterEmailPageRoutingModule"]
            ],
            declarations: [_enter_email_page__WEBPACK_IMPORTED_MODULE_6__["EnterEmailPage"]]
        })
    ], EnterEmailPageModule);
    return EnterEmailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/forgot-password/enter-email/enter-email.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2VudGVyLWVtYWlsL2VudGVyLWVtYWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/enter-email/enter-email.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email.page.ts ***!
  \****************************************************************************/
/*! exports provided: EnterEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterEmailPage", function() { return EnterEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var EnterEmailPage = /** @class */ (function () {
    function EnterEmailPage(formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Please enter a valid email address' }
            ]
        };
    }
    EnterEmailPage.prototype.ngOnInit = function () {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    EnterEmailPage.prototype.goToEnterCodePage = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Going to Enter Code Page');
                        // check if user exists, then navigate
                        return [4 /*yield*/, this.auth.checkIfUserExits(email)];
                    case 1:
                        // check if user exists, then navigate
                        _a.sent();
                        return [4 /*yield*/, this.router.navigate(['/enter-email/enter-code/', email])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnterEmailPage.prototype.cancel = function () {
        console.log('Forgotten password cancelled');
        this.router.navigate(['']);
    };
    EnterEmailPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    EnterEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enter-email',
            template: __webpack_require__(/*! raw-loader!./enter-email.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/forgot-password/enter-email/enter-email.page.html"),
            styles: [__webpack_require__(/*! ./enter-email.page.scss */ "./src/app/pages/auth/forgot-password/enter-email/enter-email.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], EnterEmailPage);
    return EnterEmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-forgot-password-enter-email-enter-email-module-es5.js.map