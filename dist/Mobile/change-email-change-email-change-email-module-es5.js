function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-email-change-email-change-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/change-email/change-email.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/change-email/change-email.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileChangeEmailChangeEmailChangeEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Desktop Header -->\n    <ion-grid fixed class=\"ion-text-center\">\n      <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n        <ion-col offset=\"2.5\" size=\"2.5\">\n          <h1>Change Email</h1>\n        </ion-col>\n        <ion-col push=\"2.5\" size=\"2\">\n          <ion-button class=\"blue-button\" (click)=\"back()\">\n             Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- Horizontal Line for Desktop Header -->\n      <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n        <ion-col size=\"10\">\n          <hr style=\"background-color: #00000044;\" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n            <h6 class=\"text-header\" style=\"width: unset;\">{{activeEmail}}</h6>\n            <form (ngSubmit)=\"confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value)\" [formGroup]=\"changeEmail\">\n\n\n            <ion-list class=\"line-input\">\n\n                <!-- Email -->\n                <ion-item>\n                  <ion-input\n                    required\n                    placeholder=\"new email\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                    (keyup.enter)=\"formValid ? confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value) : null\">\n                  </ion-input>\n                </ion-item>\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"changeEmail\n                      .get('email')\n                      .hasError(validation.type) && (changeEmail.get('email')\n                      .dirty || changeEmail.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"password\"\n                      formControlName=\"password\"\n                      minlength=\"8\"\n                      type=\"password\"\n                      (keyup.enter)=\"formValid ? confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value) : null\">\n                    </ion-input>\n                </ion-item>\n          </ion-list>\n                <ion-button type=\"submit\" [disabled]=\"!formValid\" class=\"orange-button\" style=\"width: unset;\">CHANGE EMAIL</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/change-email/change-email/change-email-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/profile/change-email/change-email/change-email-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: ChangeEmailPageRoutingModule */

  /***/
  function srcAppPagesProfileChangeEmailChangeEmailChangeEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeEmailPageRoutingModule", function () {
      return ChangeEmailPageRoutingModule;
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


    var _change_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-email.page */
    "./src/app/pages/profile/change-email/change-email/change-email.page.ts");

    var routes = [{
      path: '',
      component: _change_email_page__WEBPACK_IMPORTED_MODULE_3__["ChangeEmailPage"]
    }, {
      path: 'confirm',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | confirm-confirm-module */
        "confirm-confirm-module").then(__webpack_require__.bind(null,
        /*! ../confirm/confirm.module */
        "./src/app/pages/profile/change-email/confirm/confirm.module.ts")).then(function (m) {
          return m.ConfirmPageModule;
        });
      }
    }];

    var ChangeEmailPageRoutingModule = function ChangeEmailPageRoutingModule() {
      _classCallCheck(this, ChangeEmailPageRoutingModule);
    };

    ChangeEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangeEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/change-email/change-email/change-email.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/profile/change-email/change-email/change-email.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ChangeEmailPageModule */

  /***/
  function srcAppPagesProfileChangeEmailChangeEmailChangeEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeEmailPageModule", function () {
      return ChangeEmailPageModule;
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


    var _change_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-email-routing.module */
    "./src/app/pages/profile/change-email/change-email/change-email-routing.module.ts");
    /* harmony import */


    var _change_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-email.page */
    "./src/app/pages/profile/change-email/change-email/change-email.page.ts");

    var ChangeEmailPageModule = function ChangeEmailPageModule() {
      _classCallCheck(this, ChangeEmailPageModule);
    };

    ChangeEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _change_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeEmailPageRoutingModule"]],
      declarations: [_change_email_page__WEBPACK_IMPORTED_MODULE_6__["ChangeEmailPage"]]
    })], ChangeEmailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/change-email/change-email/change-email.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/profile/change-email/change-email/change-email.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileChangeEmailChangeEmailChangeEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtZW1haWwvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC9jaGFuZ2UtZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtZW1haWwvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/profile/change-email/change-email/change-email.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/profile/change-email/change-email/change-email.page.ts ***!
    \******************************************************************************/

  /*! exports provided: ChangeEmailPage */

  /***/
  function srcAppPagesProfileChangeEmailChangeEmailChangeEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeEmailPage", function () {
      return ChangeEmailPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ChangeEmailPage = /*#__PURE__*/function () {
      function ChangeEmailPage(formBuilder, router, auth, toast, alertController, profile) {
        _classCallCheck(this, ChangeEmailPage);

        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.alertController = alertController;
        this.profile = profile;
        this.activeEmail = '';
        this.validationMessasges = {
          email: [{
            type: 'email',
            message: 'Must be a valid email address'
          }],
          password: [// tslint:disable-next-line: max-line-length
          {
            type: 'pattern',
            message: 'Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number.'
          }]
        };
        this.activeEmail = this.profile.email.getValue();
        console.log('Active Email: ' + this.activeEmail);
      }

      _createClass(ChangeEmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.changeEmail = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
          });
          this.changeEmail.valueChanges.subscribe(function (_) {
            setTimeout(function () {
              if (_this.changeEmail.valid) {
                _this.formValid = true;
              } else {
                _this.formValid = false;
              }
            }, 100);
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/home/profile/edit-profile-page']);
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toast.create({
                      message: 'There was an error with your password or email. Please try again.',
                      duration: 5000,
                      cssClass: 'wrong-password-toast',
                      keyboardClose: true,
                      position: 'top'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'danger-alert',
                      header: 'Invalid Email',
                      message: 'New Email cannot be the same as the current one.',
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "confirmChangedEmail",
        value: function confirmChangedEmail(newEmail, password) {
          if (newEmail == this.activeEmail) {
            // Show an alert telling the user that they can't use the same email
            this.presentAlert();
          } else {
            this.profile.changeEmail('eddie@gmail.com', newEmail, password);
          }
        }
      }]);

      return ChangeEmailPage;
    }();

    ChangeEmailPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    ChangeEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/change-email/change-email.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-email.page.scss */
      "./src/app/pages/profile/change-email/change-email/change-email.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], ChangeEmailPage);
    /***/
  }
}]);
//# sourceMappingURL=change-email-change-email-change-email-module-es5.js.map