(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-enter-code-enter-code-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/enter-code/enter-code.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/enter-code/enter-code.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthForgotPasswordEnterCodeEnterCodePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Enter Code</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed class=\"ion-text-center\">\n        <ion-row>\n          <ion-col size=\"10\" offset=\"1\">\n            <h6 style=\"background: rgba(245,245,245,0.7); padding: 20px; margin: 30px 0 30px 0;\">Please enter <span style=\"font-weight: 700;\">6 character code</span> that was sent to {{userEmail}}</h6>\n            <form [formGroup]=\"enterCodeForm\" (ngSubmit)=\"newPasswordPage(this.enterCodeForm.value)\">\n              <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-input\n                placeholder=\"Enter Code\"\n                required\n                formControlName=\"code\"\n                type=\"text\"\n                placeholder=\"Enter Code\"></ion-input>\n              </ion-item>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.code\">\n                    <div class=\"error-message\"\n                      *ngIf=\"enterCodeForm\n                        .get('code')\n                        .hasError(validation.type) && (enterCodeForm.get('code')\n                        .dirty || enterCodeForm.get('code').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n\n              <ion-button type=\"submit\"  class=\"orange-button\">ENTER CODE</ion-button>\n            </ion-list>\n\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/enter-code/enter-code-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: EnterCodePageRoutingModule */

  /***/
  function srcAppPagesAuthForgotPasswordEnterCodeEnterCodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterCodePageRoutingModule", function () {
      return EnterCodePageRoutingModule;
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


    var _enter_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./enter-code.page */
    "./src/app/pages/auth/forgot-password/enter-code/enter-code.page.ts");

    const routes = [{
      path: '',
      component: _enter_code_page__WEBPACK_IMPORTED_MODULE_3__["EnterCodePage"]
    }, //  to new password page
    {
      path: 'new-password/:email',
      loadChildren: () => __webpack_require__.e(
      /*! import() | forgot-password-new-password-new-password-module */
      "forgot-password-new-password-new-password-module").then(__webpack_require__.bind(null,
      /*! ../../forgot-password/new-password/new-password.module */
      "./src/app/pages/auth/forgot-password/new-password/new-password.module.ts")).then(m => m.NewPasswordPageModule)
    }];
    let EnterCodePageRoutingModule = class EnterCodePageRoutingModule {};
    EnterCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EnterCodePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/enter-code/enter-code.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code.module.ts ***!
    \****************************************************************************/

  /*! exports provided: EnterCodePageModule */

  /***/
  function srcAppPagesAuthForgotPasswordEnterCodeEnterCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterCodePageModule", function () {
      return EnterCodePageModule;
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


    var _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./enter-code-routing.module */
    "./src/app/pages/auth/forgot-password/enter-code/enter-code-routing.module.ts");
    /* harmony import */


    var _enter_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./enter-code.page */
    "./src/app/pages/auth/forgot-password/enter-code/enter-code.page.ts");

    let EnterCodePageModule = class EnterCodePageModule {};
    EnterCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterCodePageRoutingModule"]],
      declarations: [_enter_code_page__WEBPACK_IMPORTED_MODULE_6__["EnterCodePage"]]
    })], EnterCodePageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/enter-code/enter-code.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthForgotPasswordEnterCodeEnterCodePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2VudGVyLWNvZGUvZW50ZXItY29kZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/enter-code/enter-code.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/enter-code/enter-code.page.ts ***!
    \**************************************************************************/

  /*! exports provided: EnterCodePage */

  /***/
  function srcAppPagesAuthForgotPasswordEnterCodeEnterCodePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterCodePage", function () {
      return EnterCodePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let EnterCodePage = class EnterCodePage {
      constructor(router, formBuilder, auth, activatedRoute, toast) {
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

      ngOnInit() {
        this.enterCodeForm = this.formBuilder.group({
          code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
        this.generateCode(6).then(code => {
          this.auth.sendEmailWithCodeForgotPassword(code, this.userEmail);
        });
        this.formOnChanges();
      }

      formOnChanges() {
        console.log(this.enterCodeForm);
        this.enterCodeForm.valueChanges.subscribe(data => {
          console.log(data);
        });
      }

      generateCode(length) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let result = '';
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          const charactersLength = characters.length;

          for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          console.log('Generated Code: ' + result);
          return this.code = result;
        });
      }

      newPasswordPage(newPassword) {
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

      presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'The codes do not match. Please try again.',
            duration: 2000
          });
          toast.present();
        });
      }

      cancel() {
        console.log('Forgot password cancelled');
        this.router.navigate(['']);
      }

    };

    EnterCodePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }];

    EnterCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-enter-code',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./enter-code.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/enter-code/enter-code.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./enter-code.page.scss */
      "./src/app/pages/auth/forgot-password/enter-code/enter-code.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], EnterCodePage);
    /***/
  }
}]);
//# sourceMappingURL=forgot-password-enter-code-enter-code-module-es5.js.map