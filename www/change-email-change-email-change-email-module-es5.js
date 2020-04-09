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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Change Email</ion-title>\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed class=\"ion-text-center\">\n      <ion-row>\n        <ion-col size=\"12\">\n            <h6 class=\"text-header\">{{activeEmail}}</h6>\n            <form (ngSubmit)=\"confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value)\" [formGroup]=\"changeEmail\">\n\n\n            <ion-list class=\"line-input\">\n\n                <!-- Email -->\n                <ion-item>\n                  <ion-input\n                    required\n                    placeholder=\"new email\"\n                    formControlName=\"email\"\n                    type=\"email\">\n                  </ion-input>\n                </ion-item>\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"changeEmail\n                      .get('email')\n                      .hasError(validation.type) && (changeEmail.get('email')\n                      .dirty || changeEmail.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"password\"\n                      formControlName=\"password\"\n                      type=\"password\">\n                    </ion-input>\n                </ion-item>\n          </ion-list>\n                <ion-button\n                type=\"submit\" \n                class=\"orange-button\">CHANGE EMAIL</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n";
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

    const routes = [{
      path: '',
      component: _change_email_page__WEBPACK_IMPORTED_MODULE_3__["ChangeEmailPage"]
    }, {
      path: 'confirm',
      loadChildren: () => __webpack_require__.e(
      /*! import() | confirm-confirm-module */
      "confirm-confirm-module").then(__webpack_require__.bind(null,
      /*! ../confirm/confirm.module */
      "./src/app/pages/profile/change-email/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }];
    let ChangeEmailPageRoutingModule = class ChangeEmailPageRoutingModule {};
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

    let ChangeEmailPageModule = class ChangeEmailPageModule {};
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC9jaGFuZ2UtZW1haWwucGFnZS5zY3NzIn0= */";
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

    let ChangeEmailPage = class ChangeEmailPage {
      constructor(formBuilder, router, auth, toast, profile) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.toast = toast;
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

      ngOnInit() {
        this.changeEmail = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
          _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
        });
      }

      presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'There was an error with your password or email. Please try again.',
            duration: 5000,
            cssClass: 'wrong-password-toast',
            keyboardClose: true,
            position: 'top'
          });
          toast.present();
        });
      }

      confirmChangedEmail(newEmail, password) {
        this.profile.changeEmail('eddie@gmail.com', newEmail, password);
      }

      cancel() {
        console.log('change email password cancelled');
        this.router.navigate(['/home/profile/edit-profile-page']);
      }

    };

    ChangeEmailPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
    }, {
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }];

    ChangeEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/change-email/change-email.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-email.page.scss */
      "./src/app/pages/profile/change-email/change-email/change-email.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], ChangeEmailPage);
    /***/
  }
}]);
//# sourceMappingURL=change-email-change-email-change-email-module-es5.js.map