(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-change-password-module"], {
    /***/
    "/kck":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function kck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "bFnd");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }, {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-confirm-module */
          "confirm-confirm-module").then(__webpack_require__.bind(null,
          /*! ../confirm/confirm.module */
          "cuFB")).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }];

      var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "2uJy":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function uJy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "/kck");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "bFnd");

      var ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "VJfH":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password.page.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function VJfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n@-webkit-keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUFGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLDJCQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbn1cblxuLmJhZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmJhZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG4uZ29vZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwYXNzd29yZC1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "bFnd":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password.page.ts ***!
      \***************************************************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function bFnd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-password.page.html */
      "wkr6");
      /* harmony import */


      var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-password.page.scss */
      "VJfH");
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      "Aso2");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(formBuilder, router, auth, alertController, profile) {
          _classCallCheck(this, ChangePasswordPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.auth = auth;
          this.alertController = alertController;
          this.profile = profile;
          this.activeEmail = '';
          this.passwordsMatch = false;
          this.validationMessasges = {
            password: [{
              type: 'password',
              message: 'Please enter a valid password.'
            }]
          };
          this.activeEmail = this.auth.user.email;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePassword = this.formBuilder.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // at least 1 number, 1 uppercase letter, and one lowercase letter
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
              reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // at least 1 number, 1 uppercase letter, and one lowercase letter
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
            });
            this.formOnChanges();
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/profile/edit-profile-page']);
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            var _this = this;

            console.log(this.changePassword);
            this.changePassword.valueChanges.subscribe(function (data) {
              console.log(data);

              _this.changePassword.statusChanges.subscribe(function (status) {
                console.log(status);

                if (status === 'VALID') {
                  _this.passwordsMatch = true;
                }
              });

              if (_this.changePassword.controls.newPassword.value === _this.changePassword.controls.reTypeNewPassword.value && _this.changePassword.controls.newPassword.touched) {
                console.log('Passwords Match');
              }

              if (_this.changePassword.controls.newPassword.value !== _this.changePassword.controls.reTypeNewPassword.value) {
                console.log('Passwords dont match');
                _this.passwordsMatch = false;
              }
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: 'Invalid Password',
                        message: 'New password cannot be the same as the current one.',
                        buttons: [{
                          text: 'OK'
                        }]
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
          key: "confirmChangedPassword",
          value: function confirmChangedPassword(oldPassword, newPassword, reTypeNewPassword) {
            if (oldPassword == newPassword) {
              // Show an alert telling the user that they can't use the same email
              this.presentAlert();
            } else {
              this.profile.changePassword(this.activeEmail, oldPassword, newPassword, reTypeNewPassword);
            }
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])], ChangePasswordPage);
      /***/
    },

    /***/
    "wkr6":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password/change-password.page.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wkr6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed class=\"ion-text-center\">\n      <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n        <ion-col offset=\"2.4\" size=\"3\">\n          <h1>Change Password</h1>\n        </ion-col>\n        <ion-col push=\"2.5\" size=\"2\">\n          <ion-button class=\"blue-button\" (click)=\"back()\">\n             Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n        <ion-col size=\"10\">\n          <hr style=\"background-color: #00000044;\" />\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n            <h6 class=\"text-header\" style=\"width: unset;\">Change your password below.</h6>\n            <form \n             (ngSubmit)=\"confirmChangedPassword(\n              this.changePassword.controls.password.value,\n              this.changePassword.controls.newPassword.value,\n              this.changePassword.controls.reTypeNewPassword.value)\"\n            [formGroup]=\"changePassword\">\n\n\n            <ion-list class=\"line-input\">\n                <!-- Email -->\n                <ion-item>\n                  <ion-input\n                    required\n                    placeholder=\"Current password\"\n                    formControlName=\"password\"\n                    type=\"password\"\n                    (keyup.enter)=\"passwordsMatch ? confirmChangedPassword(this.changePassword.controls.password.value, this.changePassword.controls.newPassword.value, this.changePassword.controls.reTypeNewPassword.value) : null\">\n                  </ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"New Password\"\n                      formControlName=\"newPassword\"\n                      type=\"password\"\n                      (keyup.enter)=\"passwordsMatch ? confirmChangedPassword(this.changePassword.controls.password.value, this.changePassword.controls.newPassword.value, this.changePassword.controls.reTypeNewPassword.value) : null\">\n                    </ion-input>\n\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                    </ion-button>\n\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                    </ion-button>\n                </ion-item>\n                \n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                      <div class=\"error-message\"\n                        *ngIf=\"changePassword\n                          .get('newPassword')\n                          .hasError('pattern') && (changePassword.get('newPassword')\n                          .dirty || changePassword.get('newPassword').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n  \n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"Re-Type New Password\"\n                      formControlName=\"reTypeNewPassword\"\n                      type=\"password\"\n                      (keyup.enter)=\"passwordsMatch ? confirmChangedPassword(this.changePassword.controls.password.value, this.changePassword.controls.newPassword.value, this.changePassword.controls.reTypeNewPassword.value) : null\">\n                    </ion-input>\n\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                    </ion-button>\n\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                    </ion-button>\n                </ion-item>\n              </ion-list>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\"\n                      *ngIf=\"changePassword\n                        .get('reTypeNewPassword')\n                        .hasError('pattern') && (changePassword.get('reTypeNewPassword')\n                        .dirty || changePassword.get('reTypeNewPassword').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-button \n                [disabled]=\"!passwordsMatch\" \n                type=\"submit\" class=\"orange-button\" style=\"width: unset;\">CHANGE PASSWORD</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=change-password-change-password-change-password-module-es5.js.map