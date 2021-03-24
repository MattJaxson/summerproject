(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-credentials-login-credentials-module"], {
    /***/
    "5pJW":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function pJW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.header {\n  background: #edf3f8;\n  height: auto;\n}\n\n.text-header {\n  font-size: 1em;\n  line-height: 1.9em;\n  color: #666;\n  z-index: 999;\n  text-align: justify;\n}\n\n.cancel-button {\n  margin: 0 10px;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 100px auto 100px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\nspan {\n  font-weight: 900;\n  font-size: 1em;\n  color: #005191;\n}\n\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n@-webkit-keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xvZ2luLWNyZWRlbnRpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLDJCQUFBO0VBQUY7RUFHQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQURGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDJCQUFBO0VBQUY7RUFHQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoibG9naW4tY3JlZGVudGlhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4udGV4dC1oZWFkZXIge1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuOWVtO1xuICBjb2xvcjogIzY2NjtcbiAgei1pbmRleDogOTk5O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTAwcHggYXV0byAxMDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4uYmFkUGFzc3dvcmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuXG4uYmFkUGFzc3dvcmQ6bnRoLWNoaWxkKDIpIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbi5nb29kUGFzc3dvcmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuXG4uZ29vZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHBhc3N3b3JkLWljb25zIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "Kuzd":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: LoginCredentialsPageRoutingModule */

    /***/
    function Kuzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginCredentialsPageRoutingModule", function () {
        return LoginCredentialsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_credentials_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-credentials.page */
      "yh2L");

      var routes = [{
        path: '',
        component: _login_credentials_page__WEBPACK_IMPORTED_MODULE_3__["LoginCredentialsPage"]
      }, {
        path: 'enter-code/:email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | enter-code-enter-code-module */
          "enter-code-enter-code-module").then(__webpack_require__.bind(null,
          /*! ../enter-code/enter-code.module */
          "Wx8N")).then(function (m) {
            return m.EnterCodePageModule;
          });
        }
      }];

      var LoginCredentialsPageRoutingModule = function LoginCredentialsPageRoutingModule() {
        _classCallCheck(this, LoginCredentialsPageRoutingModule);
      };

      LoginCredentialsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginCredentialsPageRoutingModule);
      /***/
    },

    /***/
    "gWAs":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gWAs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\"></ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Header -->\n    <ion-row class=\"ion-justify-content-center header\">\n      <ion-col size-lg=\"6\" size-md=\"7\" size-xs=\"11\">\n        <h6 class=\"text-header\">Please create your login credentials. This is the information you will use to login with - an <span>email</span> and a <span>password</span>. Your password needs to be <span>at least 8 characters long, with at least 1 uppercase letter and one number.</span></h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n\n          <form (ngSubmit)=\"enterCodePage(this.credentialsForm.value.email, this.credentialsForm.value.password)\" [formGroup]=\"credentialsForm\">\n\n              <ion-list class=\"line-input\">\n\n                <ion-item>\n                  <ion-input\n                  #autoFucousInput\n                  formControlName=\"email\"\n                  type=\"email\"\n                  placeholder=\"email\"></ion-input>\n                </ion-item>\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                        *ngIf=\"credentialsForm\n                          .get('email')\n                          .hasError(validation.type) && (credentialsForm.get('email')\n                          .dirty || credentialsForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n                <br>\n                <ion-item>\n                  <ion-input\n                  required\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\"\n                  placeholder=\"enter password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" size=\"large\"  name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n\n                </ion-item>\n\n                <!-- Password Validation-->\n             <div class=\"validation-errors\">\n                 <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                   <div class=\"error-message\"\n                     *ngIf=\"credentialsForm\n                       .get('password')\n                       .hasError('pattern') && (credentialsForm.get('password')\n                       .dirty || credentialsForm.get('password').touched)\">\n                     {{ validation.message }}\n                   </div>\n                 </ng-container>\n               </div>\n\n                <br>\n                <ion-item>\n                  <ion-input\n                  formControlName=\"reTypePassword\"\n                  type=\"password\"\n                  placeholder=\"re-type password\"></ion-input>\n\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                    </ion-button>\n\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                         <ion-icon style=\"color: #21df82;\" size=\"large\" name=\"checkmark\"> </ion-icon>\n                    </ion-button>\n\n                </ion-item>\n\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                      <div class=\"error-message\"\n                        *ngIf=\"credentialsForm\n                          .get('reTypePassword')\n                          .hasError('pattern') && (credentialsForm.get('reTypePassword')\n                          .dirty || credentialsForm.get('reTypePassword').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n                <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!passwordsMatch\">NEXT</ion-button>\n              </ion-list>\n          </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "lnR2":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: LoginCredentialsPageModule */

    /***/
    function lnR2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginCredentialsPageModule", function () {
        return LoginCredentialsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_credentials_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-credentials-routing.module */
      "Kuzd");
      /* harmony import */


      var _login_credentials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-credentials.page */
      "yh2L");

      var LoginCredentialsPageModule = function LoginCredentialsPageModule() {
        _classCallCheck(this, LoginCredentialsPageModule);
      };

      LoginCredentialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_credentials_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginCredentialsPageRoutingModule"]],
        declarations: [_login_credentials_page__WEBPACK_IMPORTED_MODULE_6__["LoginCredentialsPage"]]
      })], LoginCredentialsPageModule);
      /***/
    },

    /***/
    "yh2L":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.ts ***!
      \********************************************************************************/

    /*! exports provided: LoginCredentialsPage */

    /***/
    function yh2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginCredentialsPage", function () {
        return LoginCredentialsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_credentials_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-credentials.page.html */
      "gWAs");
      /* harmony import */


      var _login_credentials_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-credentials.page.scss */
      "5pJW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoginCredentialsPage = /*#__PURE__*/function () {
        function LoginCredentialsPage(router, formBuilder, auth, alert) {
          _classCallCheck(this, LoginCredentialsPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.alert = alert;
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

        _createClass(LoginCredentialsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.credentialsForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // at least 1 number, 1 uppercase letter, and one lowercase letter
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
              reTypePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // at least 1 number, 1 uppercase letter, and one lowercase letter
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
            });
            this.formOnChanges();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.inputElement.setFocus();
            }, 1000);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('Being Destroyed');
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            var _this2 = this;

            console.log(this.credentialsForm);
            this.credentialsForm.valueChanges.subscribe(function (data) {
              console.log(data);

              _this2.credentialsForm.statusChanges.subscribe(function (status) {
                console.log(status);

                if (status === 'VALID') {
                  console.log('you did it bruh');
                  _this2.passwordsMatch = true;
                }
              });

              if (_this2.credentialsForm.controls.password.value === _this2.credentialsForm.controls.reTypePassword.value && _this2.credentialsForm.controls.password.touched && _this2.credentialsForm.controls.email.valid) {
                console.log('Passwords Match');
              }

              if (_this2.credentialsForm.controls.password.value !== _this2.credentialsForm.controls.reTypePassword.value) {
                console.log('Passwords dont match');
                _this2.passwordsMatch = false;
              }
            });
          }
        }, {
          key: "enterCodePage",
          value: function enterCodePage(email, password) {
            var _this3 = this;

            this.email = this.credentialsForm.controls.email.value;
            this.auth.doesUserExists(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
              console.error(e);

              if (e.error.msg === 'User already registered with that email address.') {
                return _this3.userAlreadyExistAlert();
              }
            })).subscribe(function (value) {
              console.log(value);
              var exists = value['exists'];

              if (exists === false) {
                _this3.auth.getLoginCredentials(email, password);

                console.log('Going to Enter Code Page');

                _this3.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/', _this3.email]);
              }
            });
          }
        }, {
          key: "userAlreadyExistAlert",
          value: function userAlreadyExistAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.create({
                        cssClass: 'danger-alert',
                        message: 'This user already exists.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('Sign up cancelled');
            this.router.navigate(['']);
          }
        }]);

        return LoginCredentialsPage;
      }();

      LoginCredentialsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      LoginCredentialsPage.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['autoFucousInput', {
            "static": false
          }]
        }]
      };
      LoginCredentialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-credentials',
        template: _raw_loader_login_credentials_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_credentials_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], LoginCredentialsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-credentials-login-credentials-module-es5.js.map