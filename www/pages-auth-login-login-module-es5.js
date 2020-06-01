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


    __webpack_exports__["default"] = "<ion-content>\n\n  <!-- Mobile & Tablet -->\n  <ion-grid class=\"ion-hide-md-up\">\n\n    <!-- Logo -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" style=\"margin-top: 10%;\" class=\"ion-text-center\">\n        <img src=\"../../../../assets/fyf-logo-2.png\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n      </ion-col>\n    </ion-row>\n\n    <!-- Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"10\" size-sm=\"8\" size-md=\"8\">\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n          <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  #autoFocusInput\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\"\n                (keyup.enter)=\"login(this.loginForm.value)\">\n              </ion-input>\n          </ion-item>\n\n          </ion-list>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                    {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n\n              <!-- Login Button -->\n              <ion-col size=\"12\">\n                <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button>\n              </ion-col>\n\n\n            </form>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Sign Up -->\n      <ion-col size=\"12\">\n        <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n        </ion-button>\n      </ion-col>\n\n      <!-- Forgot Password -->\n      <ion-col size=\"12\">\n        <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-text-center ion-hide-sm-down\">\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"4\" size-lg=\"4\" size-xl=\"4\"  style=\"margin-top: 5%\">\n\n            <form  [formGroup]=\"loginForm\"\n                   (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n\n                <!-- Refactor Logo Section -->\n                <img src=\"../../../../assets/fyf-logo-2.png\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n \n              <ion-item>\n                <!-- Email -->\n                  <ion-input\n                    #autoFocusInput\n                    required\n                    placeholder=\"Email\"\n                    inputmode=\"email\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                    (keyup.enter)=\"login(this.loginForm.value)\">\n                  </ion-input>\n              </ion-item>\n                  <!-- Password Validation-->\n                  <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"loginForm\n                        .get('email')\n                        .hasError(validation.type) && (loginForm.get('email')\n                        .dirty || loginForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n  \n            <!-- Password -->\n            <ion-item>\n                <ion-input\n                  required\n                  placeholder=\"Password\"\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n  \n            </ion-list>\n  \n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <!-- Login Button -->\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\n          <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"6\">\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n        </ion-col>\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n";
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


    __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n}\n\nion-footer {\n  opacity: 0;\n  --ion-padding-grid: 0;\n  position: fixed;\n  bottom: 0;\n  -webkit-animation: slide-up 0.5s ease 3.5s forwards;\n          animation: slide-up 0.5s ease 3.5s forwards;\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n}\n\n#forgot {\n  width: 220px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  margin-top: 60px;\n  opacity: 0;\n  --background:none;\n  --background-hover: #474444;\n  --color: rgba(130,130,130, 0.5);\n  --color-hover: white;\n  --transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0Esa0JBQUE7QUNIQTs7QURNQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4vLyAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9Mb2dpbl9CYWNrZ3JvdW5kLnN2ZycpO1xuLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mb290ZXIge1xuICBvcGFjaXR5OiAwO1xuICAtLWlvbi1wYWRkaW5nLWdyaWQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAzLjVzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA1MTkxLCAjMDAwMDAwKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NzQ0NDQ7XG4gIC0tY29sb3I6IHJnYmEoMTMwLDEzMCwxMzAsIDAuNSk7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cblxuIiwiaW9uLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mb290ZXIge1xuICBvcGFjaXR5OiAwO1xuICAtLWlvbi1wYWRkaW5nLWdyaWQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAzLjVzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA1MTkxLCAjMDAwMDAwKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NzQ0NDQ7XG4gIC0tY29sb3I6IHJnYmEoMTMwLDEzMCwxMzAsIDAuNSk7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59Il19 */";
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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFocusInput', {
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