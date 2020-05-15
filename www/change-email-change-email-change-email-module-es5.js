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


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Change Email</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid fixed class=\"ion-text-center\">\r\n      <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\r\n        <ion-col offset=\"2.5\" size=\"2.5\">\r\n          <h1>Change Email</h1>\r\n        </ion-col>\r\n        <ion-col push=\"2.5\" size=\"2\">\r\n          <ion-button class=\"back-button\" (click)=\"back()\">\r\n             Back\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\r\n        <ion-col size=\"10\">\r\n          <hr style=\"background-color: #00000044;\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\r\n            <h6 class=\"text-header\" style=\"width: unset;\">{{activeEmail}}</h6>\r\n            <form (ngSubmit)=\"confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value)\" [formGroup]=\"changeEmail\">\r\n\r\n\r\n            <ion-list class=\"line-input\">\r\n\r\n                <!-- Email -->\r\n                <ion-item>\r\n                  <ion-input\r\n                    required\r\n                    placeholder=\"new email\"\r\n                    formControlName=\"email\"\r\n                    type=\"email\">\r\n                  </ion-input>\r\n                </ion-item>\r\n\r\n                <!-- Email Validation-->\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                    <div class=\"error-message\"\r\n                    *ngIf=\"changeEmail\r\n                      .get('email')\r\n                      .hasError(validation.type) && (changeEmail.get('email')\r\n                      .dirty || changeEmail.get('email').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n                <ion-item>\r\n                    <ion-input\r\n                      required\r\n                      placeholder=\"password\"\r\n                      formControlName=\"password\"\r\n                      type=\"password\">\r\n                    </ion-input>\r\n                </ion-item>\r\n          </ion-list>\r\n                <ion-button type=\"submit\" class=\"orange-button\" style=\"width: unset;\">CHANGE EMAIL</ion-button>\r\n              </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n\r\n";
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


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtZW1haWwvY2hhbmdlLWVtYWlsL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxcY2hhbmdlLWVtYWlsXFxjaGFuZ2UtZW1haWxcXGNoYW5nZS1lbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC9jaGFuZ2UtZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtZW1haWwvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
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
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
          _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
        });
      }

      back() {
        this.router.navigate(['/home/profile/edit-profile-page']);
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