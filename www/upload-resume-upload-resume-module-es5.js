(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-resume-upload-resume-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSignUpUploadResumeUploadResumePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Upload Resume</ion-title>\r\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n        cancel\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <h6 class=\"text-header\">Please upload your resume.</h6>\r\n  <h6 class=\"no-resume\" *ngIf=\"!uploaded\">No resume uploaded. Please upload your resume.</h6>\r\n  <h6 class=\"uploaded-resume\" *ngIf=\"uploaded\">filename.pdf</h6>\r\n  <ion-button class=\"get-file\" (click)=\"getFileFromPhone()\">\r\n      Get file\r\n    </ion-button>\r\n  <ion-button\r\n  [disabled]=\"!uploaded\"\r\n  (click)=\"goToCredentialsPage(this.resume)\"\r\n  class=\"orange-button\">NEXT</ion-button>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: UploadResumePageRoutingModule */

  /***/
  function srcAppPagesAuthSignUpUploadResumeUploadResumeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadResumePageRoutingModule", function () {
      return UploadResumePageRoutingModule;
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


    var _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload-resume.page */
    "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts");

    const routes = [{
      path: '',
      component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumePage"]
    }, {
      path: 'login-credentials',
      loadChildren: () => __webpack_require__.e(
      /*! import() | login-credentials-login-credentials-module */
      "login-credentials-login-credentials-module").then(__webpack_require__.bind(null,
      /*! ../login-credentials/login-credentials.module */
      "./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts")).then(m => m.LoginCredentialsPageModule)
    }];
    let UploadResumePageRoutingModule = class UploadResumePageRoutingModule {};
    UploadResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UploadResumePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts ***!
    \**************************************************************************/

  /*! exports provided: UploadResumePageModule */

  /***/
  function srcAppPagesAuthSignUpUploadResumeUploadResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadResumePageModule", function () {
      return UploadResumePageModule;
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


    var _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./upload-resume-routing.module */
    "./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts");
    /* harmony import */


    var _upload_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./upload-resume.page */
    "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts");

    let UploadResumePageModule = class UploadResumePageModule {};
    UploadResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumePageRoutingModule"]],
      declarations: [_upload_resume_page__WEBPACK_IMPORTED_MODULE_6__["UploadResumePage"]]
    })], UploadResumePageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthSignUpUploadResumeUploadResumePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXlcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXHNpZ24tdXBcXHVwbG9hZC1yZXN1bWVcXHVwbG9hZC1yZXN1bWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvdXBsb2FkLXJlc3VtZS91cGxvYWQtcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNDQTs7QURFQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvdXBsb2FkLXJlc3VtZS91cGxvYWQtcmVzdW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1yZXN1bWUge1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDEzLDcwLDEyMywwLjEpO1xyXG5mb250LXNpemU6IDAuOGVtO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5tYXJnaW46IDYwcHggMCA2MHB4IDA7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbm9wYWNpdHk6IDA7XHJcbmFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi51cGxvYWRlZC1yZXN1bWUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsMjIzLDEzMCwwLjEpO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5nZXQtZmlsZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6ICMwMDUxOTE7XHJcbiAgLS1ib3JkZXItY29sb3I6ICMwMDUxOTE7XHJcbiAgLS1ib3JkZXItd2lkdGggOiAxcHg7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxufSIsIi5uby1yZXN1bWUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MCwgMTIzLCAwLjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cbi51cGxvYWRlZC1yZXN1bWUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAyMjMsIDEzMCwgMC4xKTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA2MHB4IDAgNjBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAwLjVzIGZvcndhcmRzO1xufVxuXG4uZ2V0LWZpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyOiAxcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts ***!
    \************************************************************************/

  /*! exports provided: UploadResumePage */

  /***/
  function srcAppPagesAuthSignUpUploadResumeUploadResumePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadResumePage", function () {
      return UploadResumePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let UploadResumePage = class UploadResumePage {
      constructor(router, alertController, auth, location) {
        this.router = router;
        this.alertController = alertController;
        this.auth = auth;
        this.location = location;
        this.resume = '<resume>';
        this.uploaded = true;
      }

      ngOnInit() {}

      goToCredentialsPage(resume) {
        this.auth.getResume(resume);
        console.log('Going to Credentials Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
      }

      getFileFromPhone() {}

      uploadResume() {}

      cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
      }

      skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentAlert(); // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
      }

      presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Skip',
            message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
            buttons: [{
              text: 'Skip',
              handler: () => {
                this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
                console.log('Skipping Resume Upload...');
              }
            }, {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancelling Resume Upload Skip...');
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    UploadResumePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
    }];

    UploadResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-resume.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-resume.page.scss */
      "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], UploadResumePage);
    /***/
  }
}]);
//# sourceMappingURL=upload-resume-upload-resume-module-es5.js.map