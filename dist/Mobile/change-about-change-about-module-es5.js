(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-about-change-about-module"], {
    /***/
    "H9sF":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/profile/change-about/change-about.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ChangeAboutPage */

    /***/
    function H9sF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeAboutPage", function () {
        return ChangeAboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-about.page.html */
      "IhBm");
      /* harmony import */


      var _change_about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-about.page.scss */
      "Prz4");
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
      /*! ../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/profile.service */
      "Aso2");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ChangeAboutPage = /*#__PURE__*/function () {
        function ChangeAboutPage(formBuilder, router, auth, toast, alertController, profile) {
          _classCallCheck(this, ChangeAboutPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.auth = auth;
          this.toast = toast;
          this.alertController = alertController;
          this.profile = profile;
          this.activeEmail = '';
          this.currentAbout = '';
          this.validationMessasges = {
            about: [{
              type: 'about',
              message: 'Must be a 500 characters or less.'
            }],
            password: [// tslint:disable-next-line: max-line-length
            {
              type: 'pattern',
              message: 'Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number.'
            }]
          };
        }

        _createClass(ChangeAboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activeEmail = this.profile.email.getValue();
            console.log('Active Email: ' + this.activeEmail);
            this.currentAbout = this.profile.about.getValue();
            console.log('Current About: ' + this.currentAbout);
            this.changeAbout = this.formBuilder.group({
              about: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
            });
            this.changeAbout.valueChanges.subscribe(function (value) {
              console.log(value);

              if (value.about.length > 0) {
                _this.formValid = true;
              } else {
                _this.formValid = false;
              }
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
          key: "confirmChangedAbout",
          value: function confirmChangedAbout(email, newAbout, password) {
            this.profile.changeAbout(email, newAbout, password);
          }
        }]);

        return ChangeAboutPage;
      }();

      ChangeAboutPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }];
      };

      ChangeAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-about',
        template: _raw_loader_change_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])], ChangeAboutPage);
      /***/
    },

    /***/
    "IhBm":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-about/change-about.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IhBm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Desktop Header -->\n    <ion-grid fixed class=\"ion-text-center\">\n      <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n        <ion-col offset=\"2.5\" size=\"2.5\">\n          <h1>Change About</h1>\n        </ion-col>\n        <ion-col push=\"2.5\" size=\"2\">\n          <ion-button class=\"blue-button\" (click)=\"back()\">\n             Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- Horizontal Line for Desktop Header -->\n      <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n        <ion-col size=\"10\">\n          <hr style=\"background-color: #00000044;\" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n            <h6 class=\"text-header\">{{currentAbout}}</h6>\n            <form (ngSubmit)=\"confirmChangedAbout(this.activeEmail, this.changeAbout.controls.about.value, this.changeAbout.controls.password.value)\" [formGroup]=\"changeAbout\">\n\n\n            <ion-list class=\"line-input\">\n\n                <!-- About -->\n                <ion-item>\n                  <ion-textarea\n                    required\n                    autogrow=\"true\"\n                    autocapitalize=\"true\"\n                    rows=\"5\"\n                    spellcheck=\"true\"\n                    wrap=\"soft\"\n                    type=\"text\"\n                    maxlength=\"500\"\n                    placeholder=\"Tell us about yourself\"\n                    formControlName=\"about\">\n                  </ion-textarea>\n                </ion-item>\n\n                <!-- About Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.about\">\n                    <div class=\"error-message\"\n                    *ngIf=\"changeAbout\n                      .get('about')\n                      .hasError(validation.type) && (changeAbout.get('email')\n                      .dirty || changeAbout.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"password\"\n                      formControlName=\"password\"\n                      minlength=\"8\"\n                      type=\"password\">\n                    </ion-input>\n                </ion-item>\n          </ion-list>\n                <ion-button type=\"submit\" [disabled]=\"!formValid\" class=\"orange-button\" style=\"width: unset;\">CHANGE ABOUT</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "Nqrf":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/profile/change-about/change-about-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ChangeAboutPageRoutingModule */

    /***/
    function Nqrf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeAboutPageRoutingModule", function () {
        return ChangeAboutPageRoutingModule;
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


      var _change_about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-about.page */
      "H9sF");

      var routes = [{
        path: '',
        component: _change_about_page__WEBPACK_IMPORTED_MODULE_3__["ChangeAboutPage"]
      }];

      var ChangeAboutPageRoutingModule = function ChangeAboutPageRoutingModule() {
        _classCallCheck(this, ChangeAboutPageRoutingModule);
      };

      ChangeAboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangeAboutPageRoutingModule);
      /***/
    },

    /***/
    "Prz4":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/profile/change-about/change-about.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Prz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-header {\n  text-align: left;\n  padding: 30px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYW5nZS1hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiY2hhbmdlLWFib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "s+QV":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/profile/change-about/change-about.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ChangeAboutPageModule */

    /***/
    function sQV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeAboutPageModule", function () {
        return ChangeAboutPageModule;
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


      var _change_about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-about-routing.module */
      "Nqrf");
      /* harmony import */


      var _change_about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-about.page */
      "H9sF");

      var ChangeAboutPageModule = function ChangeAboutPageModule() {
        _classCallCheck(this, ChangeAboutPageModule);
      };

      ChangeAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_about_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeAboutPageRoutingModule"]],
        declarations: [_change_about_page__WEBPACK_IMPORTED_MODULE_6__["ChangeAboutPage"]]
      })], ChangeAboutPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=change-about-change-about-module-es5.js.map