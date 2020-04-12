(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing/landing.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing/landing.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid fixed class=\"ion-text-center\">\n    <ion-row>\n      <ion-col size=\"8\" offset=\"2\">\n        <!-- Refactor Logo Section -->\n        <img src=\"./assets/logo.png\" style=\"background: lightgray; height: 70px; margin: 35px 0 30px 0;\"/>\n        <!--  -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"11\" offset=\"0.5\">\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n          <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  #autoFucousInput\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\">\n                </ion-input>\n            </ion-item>\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\">\n              </ion-input>\n          </ion-item>\n\n          </ion-list>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                    {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n\n              <!-- Login Button -->\n              <ion-button text-center class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n            </form>\n      </ion-col>\n    </ion-row>\n\n    <!-- Forgot Password -->\n    <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n    <!-- Positioning Sign up Button outside of Ion Content for customization -->\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"text-center\">\n  <ion-toolbar>\n    <ion-button style=\"--box-shadow: none;\" expand=\"full\" [routerLink]=\"['personal-info']\">Sign Up</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/auth/landing/landing-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/landing/landing-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/auth/landing/landing.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    },
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/landing/landing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/landing/landing.module.ts ***!
  \******************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/pages/auth/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/auth/landing/landing.page.ts");







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/auth/landing/landing.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/landing/landing.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: none;\n  --background: #005191;\n}\n\nion-footer {\n  opacity: 0;\n  position: fixed;\n  bottom: 0;\n  -webkit-animation: slide-up 0.5s ease 3.5s forwards;\n          animation: slide-up 0.5s ease 3.5s forwards;\n}\n\n#sign-up-button {\n  height: 60px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: #005191;\n  background: #FFB351;\n  opacity: 0;\n}\n\n#forgot {\n  width: 70%;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin: 40px 0 40px 0;\n  opacity: 0;\n  --background: #dedede;\n  --color: #777;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL0FwcHMgJiBXZWJzaXRlcy9Vbml0ZWQtV2F5L01vYmlsZS9zcmMvYXBwL3BhZ2VzL2F1dGgvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NBOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuLS1iYWNrZ3JvdW5kOiBub25lO1xuLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDMuNXMgZm9yd2FyZHM7XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGJhY2tncm91bmQ6ICNGRkIzNTE7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogNDBweCAwIDQwcHggMDtcbiAgb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAtLWNvbG9yOiAjNzc3O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuXG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDMuNXMgZm9yd2FyZHM7XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIGJhY2tncm91bmQ6ICNGRkIzNTE7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogNDBweCAwIDQwcHggMDtcbiAgb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAtLWNvbG9yOiAjNzc3O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/landing/landing.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/landing/landing.page.ts ***!
  \****************************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LandingPage = class LandingPage {
    constructor(
    // private auth: AuthService,
    formBuilder, auth, loading, toast) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    // this is for the letters (both uppercase and lowercase) and numbers validation
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        // this.wrongPasswordToast();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 1000);
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Logging in...',
                duration: 1000,
                cssClass: 'success-toast',
                keyboardClose: true,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    login(data) {
        this.presentLoading();
        this.auth.login(data);
    }
};
LandingPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], LandingPage.prototype, "inputElement", void 0);
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing/landing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/auth/landing/landing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-landing-landing-module.js.map