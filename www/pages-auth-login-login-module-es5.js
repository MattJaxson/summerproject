(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile & Tablet -->\r\n<!-- <ion-header class=\"ion-hide-md-up\">\r\n    <ion-toolbar class=\"login-toolbar\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n          Back to home page\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!-- Desktop -->\r\n<!-- <ion-header class=\"ion-hide-sm-down\">\r\n    <ion-toolbar class=\"login-toolbar ion-padding-horizontal\">\r\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n      </ion-button>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-content>\r\n\r\n  <!-- Mobile & Tablet -->\r\n  <ion-grid class=\"ion-hide-md-up ion-text-center\">\r\n    <ion-row size-xs=\"8\" size-sm=\"10\">\r\n      <ion-col>\r\n        <!-- Refactor Logo Section -->\r\n        <img src=\"./assets/United_Way_Logo_3.svg\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\r\n        <!--  -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"11\" offset=\"0.5\">\r\n          <form  [formGroup]=\"loginForm\"\r\n                 (ngSubmit)=\"login(this.loginForm.value)\">\r\n          <ion-list class=\"line-input\">\r\n            <ion-item>\r\n              <!-- Email -->\r\n                <ion-input\r\n                  #autoFucousInput\r\n                  required\r\n                  placeholder=\"Email\"\r\n                  inputmode=\"email\"\r\n                  formControlName=\"email\"\r\n                  type=\"email\">\r\n                </ion-input>\r\n            </ion-item>\r\n                <!-- Password Validation-->\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                    <div class=\"error-message\"\r\n                    *ngIf=\"loginForm\r\n                      .get('email')\r\n                      .hasError(validation.type) && (loginForm.get('email')\r\n                      .dirty || loginForm.get('email').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n          <!-- Password -->\r\n          <ion-item>\r\n              <ion-input\r\n                required\r\n                placeholder=\"Password\"\r\n                inputmode=\"text\"\r\n                formControlName=\"password\"\r\n                type=\"password\">\r\n              </ion-input>\r\n          </ion-item>\r\n\r\n          </ion-list>\r\n\r\n              <!-- Password Validation-->\r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                    {{ validation.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <!-- Login Button -->\r\n              <ion-button text-center class=\"orange-button\" type=\"submit\">Login</ion-button>\r\n\r\n            </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Forgot Password -->\r\n    <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\r\n    <!-- Positioning Sign up Button outside of Ion Content for customization -->\r\n  </ion-grid>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid class=\"ion-text-center ion-hide-sm-down\">\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"4\"  style=\"margin-top: 5%\">\r\n\r\n            <form  [formGroup]=\"loginForm\"\r\n                   (ngSubmit)=\"login(this.loginForm.value)\">\r\n            <ion-list class=\"line-input\">\r\n\r\n                <!-- Refactor Logo Section -->\r\n                <img src=\"./assets/United_Way_Logo_3.svg\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\r\n \r\n              <ion-item>\r\n                <!-- Email -->\r\n                  <ion-input\r\n                    #autoFucousInput\r\n                    required\r\n                    placeholder=\"Email\"\r\n                    inputmode=\"email\"\r\n                    formControlName=\"email\"\r\n                    type=\"email\">\r\n                  </ion-input>\r\n              </ion-item>\r\n                  <!-- Password Validation-->\r\n                  <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                      <div class=\"error-message\"\r\n                      *ngIf=\"loginForm\r\n                        .get('email')\r\n                        .hasError(validation.type) && (loginForm.get('email')\r\n                        .dirty || loginForm.get('email').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n  \r\n            <!-- Password -->\r\n            <ion-item>\r\n                <ion-input\r\n                  required\r\n                  placeholder=\"Password\"\r\n                  inputmode=\"text\"\r\n                  formControlName=\"password\"\r\n                  type=\"password\">\r\n                </ion-input>\r\n            </ion-item>\r\n  \r\n            </ion-list>\r\n  \r\n                <!-- Password Validation-->\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n                <!-- Login Button -->\r\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\r\n\r\n              </form>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\r\n          <ion-button id=\"sign-up-button\" style=\"--box-shadow: none;\" [routerLink]=\"['personal-info']\">Sign Up\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"6\">\r\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"text-center ion-hide-md-up\">\r\n  <ion-toolbar>\r\n    <ion-button style=\"--box-shadow: none;\" expand=\"full\" [routerLink]=\"['personal-info']\">Sign Up</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/auth/login/login.page.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];
    let LoginPageRoutingModule = class LoginPageRoutingModule {};
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/auth/login/login.module.ts ***!
    \**************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/auth/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/auth/login/login.page.ts");

    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/auth/login/login.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-toolbar {\n  --background: white;\n  --color: #005191;\n  --box-shadow: none;\n}\n.login-toolbar ion-back-button {\n  --color: #005191 !important;\n}\nion-footer {\n  opacity: 0;\n  --ion-padding-grid: 0;\n  position: fixed;\n  bottom: 0;\n  -webkit-animation: slide-up 0.5s ease 3.5s forwards;\n          animation: slide-up 0.5s ease 3.5s forwards;\n}\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  background: #FFB351;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n}\n#forgot {\n  width: 200px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin-top: 60px;\n  opacity: 0;\n  --border-color: rgba(220,220,220, 0.9);\n  --border-width: 2px;\n  --border-style: solid;\n  --background:white;\n  --color: rgba(130,130,130, 1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheVxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDQTtBRENFO0VBQ0ksMkJBQUE7QUNDTjtBREdBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi10b29sYmFyIHtcclxuLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuLS1jb2xvcjogIzAwNTE5MTtcclxuLS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuICBpb24tYmFjay1idXR0b257XHJcbiAgICAgIC0tY29sb3I6ICMwMDUxOTEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLS1pb24tcGFkZGluZy1ncmlkOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMy41cyBmb3J3YXJkcztcclxufVxyXG5cclxuI3NpZ24tdXAtYnV0dG9uIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI0ZGQjM1MTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4jZm9yZ290IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjIwLDIyMCwyMjAsIDAuOSk7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC0tY29sb3I6IHJnYmEoMTMwLDEzMCwxMzAsIDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcclxufVxyXG5cclxuXHJcbiIsIi5sb2dpbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmxvZ2luLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogIzAwNTE5MSAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgLS1pb24tcGFkZGluZy1ncmlkOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMy41cyBmb3J3YXJkcztcbn1cblxuI3NpZ24tdXAtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMDtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjIwLDIyMCwyMjAsIDAuOSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xuICAtLWNvbG9yOiByZ2JhKDEzMCwxMzAsMTMwLCAxKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login.page.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/auth/login/login.page.ts ***!
    \************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LoginPage = class LoginPage {
      constructor( // private auth: AuthService,
      formBuilder, auth, loading, toast, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.router = router;
        this.validationMessasges = {
          email: [{
            type: 'email',
            message: 'Must be a valid email address'
          }],
          password: [// tslint:disable-next-line: max-line-length
          {
            type: 'pattern',
            message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'
          }]
        };
      }

      ngOnInit() {
        this.loginForm = this.formBuilder.group({
          email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
          password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
        }); // this.wrongPasswordToast();
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
            keyboardClose: true
          });
          yield loading.present();
          const {
            role,
            data
          } = yield loading.onDidDismiss();
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

    LoginPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])], LoginPage.prototype, "inputElement", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/auth/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-auth-login-login-module-es5.js.map