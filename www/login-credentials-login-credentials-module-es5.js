(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-credentials-login-credentials-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSignUpLoginCredentialsLoginCredentialsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login Credentials</ion-title>\r\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n        cancel\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed class=\"ion-text-center\">\r\n    <ion-row>\r\n\r\n      <ion-col size-lg=\"6\" offset-lg=\"1\">\r\n\r\n        <h6 class=\"text-header\">Please create your login credentials. This is the information you will use to login with - an <span>email</span> and a <span>password</span>. Your password needs to be at least 8 characters long, with at least 1 uppercase letter and one number.</h6>\r\n\r\n          <form (ngSubmit)=\"enterCodePage(this.credentialsForm.value)\" [formGroup]=\"credentialsForm\">\r\n\r\n              <ion-list class=\"line-input\">\r\n\r\n                <ion-item>\r\n                  <ion-input\r\n                  #autoFucousInput\r\n                  formControlName=\"email\"\r\n                  type=\"email\"\r\n                  placeholder=\"email\"></ion-input>\r\n                </ion-item>\r\n\r\n                <!-- Email Validation-->\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                      <div class=\"error-message\"\r\n                        *ngIf=\"credentialsForm\r\n                          .get('email')\r\n                          .hasError(validation.type) && (credentialsForm.get('email')\r\n                          .dirty || credentialsForm.get('email').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n                <br>\r\n                <ion-item>\r\n                  <ion-input\r\n                  required\r\n                  inputmode=\"text\"\r\n                  formControlName=\"password\"\r\n                  type=\"password\"\r\n                  placeholder=\"enter password\"></ion-input>\r\n\r\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\r\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\r\n                  </ion-button>\r\n\r\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\r\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\r\n                   </ion-button>\r\n\r\n                </ion-item>\r\n\r\n                <!-- Password Validation-->\r\n             <div class=\"validation-errors\">\r\n                 <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                   <div class=\"error-message\"\r\n                     *ngIf=\"credentialsForm\r\n                       .get('password')\r\n                       .hasError('pattern') && (credentialsForm.get('password')\r\n                       .dirty || credentialsForm.get('password').touched)\">\r\n                     {{ validation.message }}\r\n                   </div>\r\n                 </ng-container>\r\n               </div>\r\n\r\n                <br>\r\n                <ion-item>\r\n                  <ion-input\r\n                  formControlName=\"reTypePassword\"\r\n                  type=\"password\"\r\n                  placeholder=\"re-type password\"></ion-input>\r\n\r\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\r\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\r\n                    </ion-button>\r\n\r\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\r\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\r\n                    </ion-button>\r\n\r\n                </ion-item>\r\n\r\n                <!-- Password Validation-->\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                      <div class=\"error-message\"\r\n                        *ngIf=\"credentialsForm\r\n                          .get('reTypePassword')\r\n                          .hasError('pattern') && (credentialsForm.get('reTypePassword')\r\n                          .dirty || credentialsForm.get('reTypePassword').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n                <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!passwordsMatch\">NEXT</ion-button>\r\n              </ion-list>\r\n          </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/login-credentials/login-credentials-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: LoginCredentialsPageRoutingModule */

  /***/
  function srcAppPagesAuthSignUpLoginCredentialsLoginCredentialsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCredentialsPageRoutingModule", function () {
      return LoginCredentialsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_credentials_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-credentials.page */
    "./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.ts");

    const routes = [{
      path: '',
      component: _login_credentials_page__WEBPACK_IMPORTED_MODULE_3__["LoginCredentialsPage"]
    }, {
      path: 'enter-code/:email',
      loadChildren: () => __webpack_require__.e(
      /*! import() | enter-code-enter-code-module */
      "enter-code-enter-code-module").then(__webpack_require__.bind(null,
      /*! ../enter-code/enter-code.module */
      "./src/app/pages/auth/sign-up/enter-code/enter-code.module.ts")).then(m => m.EnterCodePageModule)
    }];
    let LoginCredentialsPageRoutingModule = class LoginCredentialsPageRoutingModule {};
    LoginCredentialsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginCredentialsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: LoginCredentialsPageModule */

  /***/
  function srcAppPagesAuthSignUpLoginCredentialsLoginCredentialsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCredentialsPageModule", function () {
      return LoginCredentialsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _login_credentials_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-credentials-routing.module */
    "./src/app/pages/auth/sign-up/login-credentials/login-credentials-routing.module.ts");
    /* harmony import */


    var _login_credentials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-credentials.page */
    "./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.ts");

    let LoginCredentialsPageModule = class LoginCredentialsPageModule {};
    LoginCredentialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_credentials_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginCredentialsPageRoutingModule"]],
      declarations: [_login_credentials_page__WEBPACK_IMPORTED_MODULE_6__["LoginCredentialsPage"]]
    })], LoginCredentialsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthSignUpLoginCredentialsLoginCredentialsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #005191;\n}\n\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n@-webkit-keyframes password-icons {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes password-icons {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL2xvZ2luLWNyZWRlbnRpYWxzL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcc2lnbi11cFxcbG9naW4tY3JlZGVudGlhbHNcXGxvZ2luLWNyZWRlbnRpYWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL2xvZ2luLWNyZWRlbnRpYWxzL2xvZ2luLWNyZWRlbnRpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDQ0Y7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9sb2dpbi1jcmVkZW50aWFscy9sb2dpbi1jcmVkZW50aWFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICMwMDUxOTE7XHJcbn1cclxuXHJcbi5iYWRQYXNzd29yZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIDAuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5iYWRQYXNzd29yZDpudGgtY2hpbGQoMikge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcclxufVxyXG5cclxuLmdvb2RQYXNzd29yZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIDAuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5nb29kUGFzc3dvcmQ6bnRoLWNoaWxkKDIpIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGFzc3dvcmQtaWNvbnMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufSIsInNwYW4ge1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLmJhZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmJhZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG4uZ29vZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwYXNzd29yZC1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.ts ***!
    \********************************************************************************/

  /*! exports provided: LoginCredentialsPage */

  /***/
  function srcAppPagesAuthSignUpLoginCredentialsLoginCredentialsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCredentialsPage", function () {
      return LoginCredentialsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    let LoginCredentialsPage = class LoginCredentialsPage {
      constructor(router, formBuilder, auth) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.passwordsMatch = false;
        this.code = '';
        this.validationMessasges = {
          email: [{
            type: 'email',
            message: 'Please enter a valid email address'
          }],
          password: [{
            type: 'password',
            message: 'Please enter a valid password.'
          }]
        };
      }

      ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // at least 1 number, 1 uppercase letter, and one lowercase letter
          _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
          reTypePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // at least 1 number, 1 uppercase letter, and one lowercase letter
          _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
        });
        this.formOnChanges();
      }

      ngAfterViewInit() {
        setTimeout(() => {
          this.inputElement.setFocus();
        }, 1000);
      }

      ngOnDestroy() {}

      formOnChanges() {
        console.log(this.credentialsForm);
        this.credentialsForm.valueChanges.subscribe(data => {
          console.log(data);
          this.credentialsForm.statusChanges.subscribe(status => {
            console.log(status);

            if (status === 'VALID') {
              console.log('you did it bruh');
              this.passwordsMatch = true;
            }
          });

          if (this.credentialsForm.controls.password.value === this.credentialsForm.controls.reTypePassword.value && this.credentialsForm.controls.password.touched && this.credentialsForm.controls.email.valid) {
            console.log('Passwords Match');
          }

          if (this.credentialsForm.controls.password.value !== this.credentialsForm.controls.reTypePassword.value) {
            console.log('Passwords dont match');
            this.passwordsMatch = false;
          }
        });
      }

      enterCodePage(data) {
        this.email = this.credentialsForm.controls.email.value;
        this.auth.getLoginCredentials(data);
        console.log('Going to Enter Code Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/', this.email]);
      }

      cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
      }

    };

    LoginCredentialsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"])], LoginCredentialsPage.prototype, "inputElement", void 0);
    LoginCredentialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-credentials',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-credentials.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-credentials.page.scss */
      "./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], LoginCredentialsPage);
    /***/
  }
}]);
//# sourceMappingURL=login-credentials-login-credentials-module-es5.js.map