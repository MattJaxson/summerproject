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


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\r\n        <ion-row>\r\n          <ion-col size-sm=\"10\" size-lg=\"6\" offset-lg=\"3\" offset-sm=\"1\">\r\n            <h6 class=\"text-header\">Please enter <span style=\"font-weight: 700;\">6 character code</span> that was sent to {{userEmail}}</h6>\r\n            <form [formGroup]=\"enterCodeForm\" (ngSubmit)=\"newPasswordPage(this.enterCodeForm.value)\">\r\n              <ion-list class=\"line-input\">\r\n              <ion-item>\r\n                <ion-input\r\n                placeholder=\"Enter Code\"\r\n                required\r\n                formControlName=\"code\"\r\n                type=\"text\"\r\n                placeholder=\"Enter Code\"></ion-input>\r\n              </ion-item>\r\n\r\n              <!-- Password Validation-->\r\n              <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessasges.code\">\r\n                    <div class=\"error-message\"\r\n                      *ngIf=\"enterCodeForm\r\n                        .get('code')\r\n                        .hasError(validation.type) && (enterCodeForm.get('code')\r\n                        .dirty || enterCodeForm.get('code').touched)\">\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n\r\n\r\n              <ion-button type=\"submit\"  class=\"orange-button\">ENTER CODE</ion-button><br>\r\n              <ion-button class=\"send-new-code\" (click)=\"sendNewCode()\">\r\n                Send new code\r\n              </ion-button>\r\n              <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n                  cancel\r\n              </ion-button>\r\n            </ion-list>\r\n\r\n            </form>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".send-new-code {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 150px;\n  margin: 50px auto;\n  opacity: 0;\n  -webkit-animation: slide-from-right 1s ease-out 5s forwards;\n          animation: slide-from-right 1s ease-out 5s forwards;\n}\n\nspan {\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #005191;\n}\n\n@-webkit-keyframes slide-from-right {\n  0% {\n    -webkit-transform: translateX(300px);\n            transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-from-right {\n  0% {\n    -webkit-transform: translateX(300px);\n            transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZW50ZXItY29kZS9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXGZvcmdvdC1wYXNzd29yZFxcZW50ZXItY29kZVxcZW50ZXItY29kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2VudGVyLWNvZGUvZW50ZXItY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBRUU7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7O0FEVEE7RUFFRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2VudGVyLWNvZGUvZW50ZXItY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1uZXctY29kZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLXdpZHRoIDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXI6IDFweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHNsaWRlLWZyb20tcmlnaHQgMXMgZWFzZS1vdXQgNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjb2xvcjogIzAwNTE5MTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcclxuXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn0iLCIuc2VuZC1uZXctY29kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1mcm9tLXJpZ2h0IDFzIGVhc2Utb3V0IDVzIGZvcndhcmRzO1xufVxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
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

      sendNewCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.generateCode(6).then(code => {
            console.log('Data: ' + code);
            this.auth.sendEmailWithCode(code, this.userEmail);
          });
          yield this.presentNewCodeToast(this.userEmail);
        });
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

      presentNewCodeToast(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: "New Code sent to ".concat(email),
            duration: 2000,
            cssClass: 'success-toast',
            keyboardClose: true,
            position: 'top'
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