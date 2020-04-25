(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile & Tablet -->\n<!-- <ion-header class=\"ion-hide-md-up\">\n    <ion-toolbar class=\"login-toolbar\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n          Back to home page\n          </ion-buttons>\n    </ion-toolbar>\n</ion-header> -->\n\n<!-- Desktop -->\n<!-- <ion-header class=\"ion-hide-sm-down\">\n    <ion-toolbar class=\"login-toolbar ion-padding-horizontal\">\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n      </ion-button>\n    </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content>\n\n  <!-- Mobile & Tablet -->\n  <ion-grid class=\"ion-hide-md-up ion-text-center\">\n    <ion-row size-xs=\"8\" size-sm=\"10\">\n      <ion-col>\n        <!-- Refactor Logo Section -->\n        <img src=\"./assets/United_Way_Logo_3.svg\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n        <!--  -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"11\" offset=\"0.5\">\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n          <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  #autoFucousInput\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\">\n                </ion-input>\n            </ion-item>\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\">\n              </ion-input>\n          </ion-item>\n\n          </ion-list>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                    {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n\n              <!-- Login Button -->\n              <ion-button text-center class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n            </form>\n      </ion-col>\n    </ion-row>\n\n    <!-- Forgot Password -->\n    <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n    <!-- Positioning Sign up Button outside of Ion Content for customization -->\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-text-center ion-hide-sm-down\">\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"4\"  style=\"margin-top: 5%\">\n\n            <form  [formGroup]=\"loginForm\"\n                   (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n\n                <!-- Refactor Logo Section -->\n                <img src=\"./assets/United_Way_Logo_3.svg\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n \n              <ion-item>\n                <!-- Email -->\n                  <ion-input\n                    #autoFucousInput\n                    required\n                    placeholder=\"Email\"\n                    inputmode=\"email\"\n                    formControlName=\"email\"\n                    type=\"email\">\n                  </ion-input>\n              </ion-item>\n                  <!-- Password Validation-->\n                  <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"loginForm\n                        .get('email')\n                        .hasError(validation.type) && (loginForm.get('email')\n                        .dirty || loginForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n  \n            <!-- Password -->\n            <ion-item>\n                <ion-input\n                  required\n                  placeholder=\"Password\"\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\">\n                </ion-input>\n            </ion-item>\n  \n            </ion-list>\n  \n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <!-- Login Button -->\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\n          <ion-button id=\"sign-up-button\" style=\"--box-shadow: none;\" [routerLink]=\"['personal-info']\">Sign Up\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"6\">\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n\n<ion-footer class=\"text-center ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-button style=\"--box-shadow: none;\" expand=\"full\" [routerLink]=\"['personal-info']\">Sign Up</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/auth/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-toolbar {\n  --background: white;\n  --color: #005191;\n  --box-shadow: none;\n}\n.login-toolbar ion-back-button {\n  --color: #005191 !important;\n}\nion-footer {\n  opacity: 0;\n  --ion-padding-grid: 0;\n  position: fixed;\n  bottom: 0;\n  -webkit-animation: slide-up 0.5s ease 3.5s forwards;\n          animation: slide-up 0.5s ease 3.5s forwards;\n}\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  background: #FFB351;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n}\n#forgot {\n  width: 200px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin-top: 60px;\n  opacity: 0;\n  --border-color: rgba(220,220,220, 0.9);\n  --border-width: 2px;\n  --border-style: solid;\n  --background:white;\n  --color: rgba(130,130,130, 1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0E7QURDRTtFQUNJLDJCQUFBO0FDQ047QURHQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tdG9vbGJhciB7XG4tLWJhY2tncm91bmQ6IHdoaXRlO1xuLS1jb2xvcjogIzAwNTE5MTtcbi0tYm94LXNoYWRvdzogbm9uZTtcblxuICBpb24tYmFjay1idXR0b257XG4gICAgICAtLWNvbG9yOiAjMDA1MTkxICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIG9wYWNpdHk6IDA7XG4gIC0taW9uLXBhZGRpbmctZ3JpZDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDMuNXMgZm9yd2FyZHM7XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNGRkIzNTE7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDFzIGZvcndhcmRzO1xufVxuXG4jZm9yZ290IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIyMCwyMjAsMjIwLCAwLjkpO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgLS1jb2xvcjogcmdiYSgxMzAsMTMwLDEzMCwgMSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cblxuIiwiLmxvZ2luLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4ubG9naW4tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiAjMDA1MTkxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBvcGFjaXR5OiAwO1xuICAtLWlvbi1wYWRkaW5nLWdyaWQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAzLjVzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjRkZCMzUxO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuI2ZvcmdvdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBvcGFjaXR5OiAwO1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgyMjAsMjIwLDIyMCwgMC45KTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gIC0tY29sb3I6IHJnYmEoMTMwLDEzMCwxMzAsIDEpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(
    // private auth: AuthService,
    formBuilder, auth, loading, toast, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.router = router;
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
    goBack() {
        this.router.navigate(['']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], LoginPage.prototype, "inputElement", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map