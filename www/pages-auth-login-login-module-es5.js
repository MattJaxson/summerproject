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


    __webpack_exports__["default"] = "<!-- Mobile & Tablet -->\r\n<!-- <ion-header class=\"ion-hide-md-up\">\r\n    <ion-toolbar class=\"login-toolbar\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n          Back to home page\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!-- Desktop -->\r\n<!-- <ion-header class=\"ion-hide-sm-down\">\r\n    <ion-toolbar class=\"login-toolbar ion-padding-horizontal\">\r\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n      </ion-button>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-content>\r\n\r\n  <!-- Mobile & Tablet -->\r\n  <ion-grid class=\"ion-hide-md-up\">\r\n\r\n    <!-- Logo -->\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" style=\"margin-top: 10%;\" class=\"ion-text-center\">\r\n        <img src=\"../../assets/fyf-logo.png\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Form -->\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-text-center\" size-xs=\"10\" size-sm=\"8\" size-md=\"8\">\r\n          <form  [formGroup]=\"loginForm\"\r\n                 (ngSubmit)=\"login(this.loginForm.value)\">\r\n          <ion-list class=\"line-input\">\r\n            <ion-item>\r\n              <!-- Email -->\r\n                <ion-input\r\n                  #autoFucousInput\r\n                  required\r\n                  placeholder=\"Email\"\r\n                  inputmode=\"email\"\r\n                  formControlName=\"email\"\r\n                  type=\"email\">\r\n                </ion-input>\r\n            </ion-item>\r\n                <!-- Password Validation-->\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                    <div class=\"error-message\"\r\n                    *ngIf=\"loginForm\r\n                      .get('email')\r\n                      .hasError(validation.type) && (loginForm.get('email')\r\n                      .dirty || loginForm.get('email').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n          <!-- Password -->\r\n          <ion-item>\r\n              <ion-input\r\n                required\r\n                placeholder=\"Password\"\r\n                inputmode=\"text\"\r\n                formControlName=\"password\"\r\n                type=\"password\">\r\n              </ion-input>\r\n          </ion-item>\r\n\r\n          </ion-list>\r\n\r\n              <!-- Password Validation-->\r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                    {{ validation.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n\r\n\r\n            </form>\r\n\r\n            \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n\r\n      <!-- Login Button -->\r\n      <ion-col size=\"12\">\r\n        <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button>\r\n      </ion-col>\r\n\r\n      <!-- Sign Up -->\r\n      <ion-col size=\"12\">\r\n        <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n      <!-- Forgot Password -->\r\n      <ion-col size=\"12\">\r\n        <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid class=\"ion-text-center ion-hide-sm-down\">\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size-md=\"4\" size-lg=\"4\" size-xl=\"4\"  style=\"margin-top: 5%\">\r\n\r\n            <form  [formGroup]=\"loginForm\"\r\n                   (ngSubmit)=\"login(this.loginForm.value)\">\r\n            <ion-list class=\"line-input\">\r\n\r\n                <!-- Refactor Logo Section -->\r\n                <img src=\"../../assets/fyf-logo-1.svg\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\r\n \r\n              <ion-item>\r\n                <!-- Email -->\r\n                  <ion-input\r\n                    #autoFucousInput\r\n                    required\r\n                    placeholder=\"Email\"\r\n                    inputmode=\"email\"\r\n                    formControlName=\"email\"\r\n                    type=\"email\">\r\n                  </ion-input>\r\n              </ion-item>\r\n                  <!-- Password Validation-->\r\n                  <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                      <div class=\"error-message\"\r\n                      *ngIf=\"loginForm\r\n                        .get('email')\r\n                        .hasError(validation.type) && (loginForm.get('email')\r\n                        .dirty || loginForm.get('email').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n  \r\n            <!-- Password -->\r\n            <ion-item>\r\n                <ion-input\r\n                  required\r\n                  placeholder=\"Password\"\r\n                  inputmode=\"text\"\r\n                  formControlName=\"password\"\r\n                  type=\"password\">\r\n                </ion-input>\r\n            </ion-item>\r\n  \r\n            </ion-list>\r\n  \r\n                <!-- Password Validation-->\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\r\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n                <!-- Login Button -->\r\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\r\n\r\n              </form>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\r\n          <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"6\">\r\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n";
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


    __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url('Login_Background.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\nion-footer {\n  opacity: 0;\n  --ion-padding-grid: 0;\n  position: fixed;\n  bottom: 0;\n  -webkit-animation: slide-up 0.5s ease 3.5s forwards;\n          animation: slide-up 0.5s ease 3.5s forwards;\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n}\n\n#forgot {\n  width: 220px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  margin-top: 60px;\n  opacity: 0;\n  --background:none;\n  --background-hover: #474444;\n  --color: rgba(130,130,130, 0.5);\n  --color-hover: white;\n  --transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NBOztBREVBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuLS1iYWNrZ3JvdW5kOiBub25lO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9Mb2dpbl9CYWNrZ3JvdW5kLnN2ZycpO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLS1pb24tcGFkZGluZy1ncmlkOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMy41cyBmb3J3YXJkcztcclxufVxyXG5cclxuI3NpZ24tdXAtYnV0dG9uIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNTE5MSwgIzAwMDAwMCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuI2ZvcmdvdCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtLWJhY2tncm91bmQ6bm9uZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NzQ0NDQ7XHJcbiAgLS1jb2xvcjogcmdiYSgxMzAsMTMwLDEzMCwgMC41KTtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxuICAtLXRyYW5zaXRpb246IDAuNXM7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcclxufVxyXG5cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvQmFja2dyb3VuZHMvTG9naW5fQmFja2dyb3VuZC5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIG9wYWNpdHk6IDA7XG4gIC0taW9uLXBhZGRpbmctZ3JpZDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDMuNXMgZm9yd2FyZHM7XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDUxOTEsICMwMDAwMDApO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuI2ZvcmdvdCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kOm5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzQ3NDQ0NDtcbiAgLS1jb2xvcjogcmdiYSgxMzAsMTMwLDEzMCwgMC41KTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIC0tdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbn0iXX0= */";
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
          email: ['agoodson582@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
          password: ['Password123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
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