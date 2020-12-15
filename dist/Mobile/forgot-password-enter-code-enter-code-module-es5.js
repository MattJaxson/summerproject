(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-enter-code-enter-code-module"], {
    /***/
    "5uv+":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/enter-code/enter-code.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\n        <ion-row>\n          <ion-col size-sm=\"10\" size-lg=\"6\" offset-lg=\"3\" offset-sm=\"1\">\n            <h6 class=\"text-header\">Please enter <span style=\"font-weight: 700;\">6 character code</span> that was sent to {{userEmail}}</h6>\n            <form [formGroup]=\"enterCodeForm\" (ngSubmit)=\"newPasswordPage(this.enterCodeForm.value)\">\n              <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-input\n                placeholder=\"Enter Code\"\n                required\n                formControlName=\"code\"\n                type=\"text\"\n                placeholder=\"Enter Code\"></ion-input>\n              </ion-item>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.code\">\n                    <div class=\"error-message\"\n                      *ngIf=\"enterCodeForm\n                        .get('code')\n                        .hasError(validation.type) && (enterCodeForm.get('code')\n                        .dirty || enterCodeForm.get('code').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n\n              <ion-button type=\"submit\"  class=\"orange-button\">ENTER CODE</ion-button><br>\n              <ion-button class=\"send-new-code\" (click)=\"sendNewCode()\">\n                Send new code\n              </ion-button>\n              <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n                  cancel\n              </ion-button>\n            </ion-list>\n\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "R7aW":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code.page.ts ***!
      \**************************************************************************/

    /*! exports provided: EnterCodePage */

    /***/
    function R7aW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnterCodePage", function () {
        return EnterCodePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_enter_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./enter-code.page.html */
      "5uv+");
      /* harmony import */


      var _enter_code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enter-code.page.scss */
      "Tzh/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EnterCodePage = /*#__PURE__*/function () {
        function EnterCodePage(router, formBuilder, auth, activatedRoute, toast) {
          _classCallCheck(this, EnterCodePage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.activatedRoute = activatedRoute;
          this.toast = toast;
          this.code = '';
          this.userEmail = '';
          this.validationMessasges = {
            code: [{
              type: 'text',
              message: 'The codes do not match'
            }]
          };
        }

        _createClass(EnterCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.enterCodeForm = this.formBuilder.group({
              code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
            this.generateCode(6).then(function (code) {
              _this.auth.sendEmailWithCodeForgotPassword(code, _this.userEmail);
            });
            this.formOnChanges();
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            console.log(this.enterCodeForm);
            this.enterCodeForm.valueChanges.subscribe(function (data) {
              console.log(data);
            });
          }
        }, {
          key: "generateCode",
          value: function generateCode(length) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var result, characters, charactersLength, i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      result = '';
                      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                      charactersLength = characters.length;

                      for (i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                      }

                      console.log('Generated Code: ' + result);
                      return _context.abrupt("return", this.code = result);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "newPasswordPage",
          value: function newPasswordPage(newPassword) {
            console.log('New Password: ');
            console.log(newPassword);

            if (this.enterCodeForm.controls.code.value !== this.code) {
              this.presentToast();
              console.log('Codes do not match');
            } else {
              console.log('Codes matched');
              this.router.navigate(['/enter-email/enter-code/:email/new-password', this.userEmail]);
            }
          }
        }, {
          key: "sendNewCode",
          value: function sendNewCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.generateCode(6).then(function (code) {
                        console.log('Data: ' + code);

                        _this2.auth.sendEmailWithCode(code, _this2.userEmail);
                      });

                    case 2:
                      _context2.next = 4;
                      return this.presentNewCodeToast(this.userEmail);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: 'The codes do not match. Please try again.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentNewCodeToast",
          value: function presentNewCodeToast(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toast.create({
                        message: "New Code sent to ".concat(email),
                        duration: 2000,
                        cssClass: 'success-toast',
                        keyboardClose: true,
                        position: 'top'
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('Forgot password cancelled');
            this.router.navigate(['']);
          }
        }]);

        return EnterCodePage;
      }();

      EnterCodePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      EnterCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-enter-code',
        template: _raw_loader_enter_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enter_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])], EnterCodePage);
      /***/
    },

    /***/
    "Tzh/":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function Tzh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".send-new-code {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 150px;\n  margin: 50px auto;\n  opacity: 0;\n  -webkit-animation: slide-from-right 1s ease-out 5s forwards;\n          animation: slide-from-right 1s ease-out 5s forwards;\n}\n\nspan {\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #005191;\n}\n\n@-webkit-keyframes slide-from-right {\n  0% {\n    transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-from-right {\n  0% {\n    transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZW50ZXItY29kZS9lbnRlci1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFFRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUFGO0VBR0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFERjtBQUNGOztBQVRBO0VBRUU7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFBRjtFQUdBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2VudGVyLWNvZGUvZW50ZXItY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1uZXctY29kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItd2lkdGggOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyOiAxcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtZnJvbS1yaWdodCAxcyBlYXNlLW91dCA1cyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xuXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "ZwyO":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: EnterCodePageRoutingModule */

    /***/
    function ZwyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnterCodePageRoutingModule", function () {
        return EnterCodePageRoutingModule;
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


      var _enter_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enter-code.page */
      "R7aW");

      var routes = [{
        path: '',
        component: _enter_code_page__WEBPACK_IMPORTED_MODULE_3__["EnterCodePage"]
      }, //  to new password page
      {
        path: 'new-password/:email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-new-password-new-password-module */
          "forgot-password-new-password-new-password-module").then(__webpack_require__.bind(null,
          /*! ../../forgot-password/new-password/new-password.module */
          "PJsJ")).then(function (m) {
            return m.NewPasswordPageModule;
          });
        }
      }];

      var EnterCodePageRoutingModule = function EnterCodePageRoutingModule() {
        _classCallCheck(this, EnterCodePageRoutingModule);
      };

      EnterCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnterCodePageRoutingModule);
      /***/
    },

    /***/
    "veoP":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code.module.ts ***!
      \****************************************************************************/

    /*! exports provided: EnterCodePageModule */

    /***/
    function veoP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnterCodePageModule", function () {
        return EnterCodePageModule;
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


      var _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./enter-code-routing.module */
      "ZwyO");
      /* harmony import */


      var _enter_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./enter-code.page */
      "R7aW");

      var EnterCodePageModule = function EnterCodePageModule() {
        _classCallCheck(this, EnterCodePageModule);
      };

      EnterCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterCodePageRoutingModule"]],
        declarations: [_enter_code_page__WEBPACK_IMPORTED_MODULE_6__["EnterCodePage"]]
      })], EnterCodePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-enter-code-enter-code-module-es5.js.map