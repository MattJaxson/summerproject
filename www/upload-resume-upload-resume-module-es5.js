function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Upload Resume</ion-title>\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n        Cancel\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.5\" size=\"2.5\">\n        <h1>Upload Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"cancel()\">\n           Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-lg=\"8\">\n        <h6 class=\"text-header\">Please upload your resume. Only <span>.pdf</span> files are allowed.</h6>\n        <form id=\"resume-form\" (ngSubmit)=\"uploadResume()\">\n          <input name=\"resume\" (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n        type=\"file\"/>\n  \n        <ion-button\n        [disabled]=\"!uploaded\"\n        type=\"submit\"\n        class=\"orange-button\"\n        style=\"display: block;\">NEXT</ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n\n";
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

    var routes = [{
      path: '',
      component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumePage"]
    }, {
      path: 'login-credentials',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-credentials-login-credentials-module */
        "login-credentials-login-credentials-module").then(__webpack_require__.bind(null,
        /*! ../login-credentials/login-credentials.module */
        "./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts")).then(function (m) {
          return m.LoginCredentialsPageModule;
        });
      }
    }];

    var UploadResumePageRoutingModule = function UploadResumePageRoutingModule() {
      _classCallCheck(this, UploadResumePageRoutingModule);
    };

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

    var UploadResumePageModule = function UploadResumePageModule() {
      _classCallCheck(this, UploadResumePageModule);
    };

    UploadResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumePageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.cancel-button {\n  margin: 0 10px;\n}\n\nh6 {\n  margin: 30px auto;\n  padding: unset;\n}\n\n.no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #999;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n  margin: 40px 0;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvdXBsb2FkLXJlc3VtZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC91cGxvYWQtcmVzdW1lL3VwbG9hZC1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0NBOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvdXBsb2FkLXJlc3VtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ubm8tcmVzdW1lIHtcbmJhY2tncm91bmQ6IHJnYmEoMTMsNzAsMTIzLDAuMSk7XG5mb250LXNpemU6IDAuOGVtO1xucGFkZGluZzogMjBweDtcbm1hcmdpbjogNjBweCAwIDYwcHggMDtcbnRyYW5zaXRpb246IDAuNXM7XG5vcGFjaXR5OiAwO1xuYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbn1cblxuLnVwbG9hZGVkLXJlc3VtZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsMjIzLDEzMCwwLjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5nZXQtZmlsZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci13aWR0aCA6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuc3BhbntcbiAgY29sb3I6ICNGRkIzNTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ubm8tcmVzdW1lIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgNzAsIDEyMywgMC4xKTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA2MHB4IDAgNjBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufVxuXG4udXBsb2FkZWQtcmVzdW1lIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMywgMjIzLCAxMzAsIDAuMSk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogNjBweCAwIDYwcHggMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMC41cyBmb3J3YXJkcztcbn1cblxuLmdldC1maWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlcjogMXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICNGRkIzNTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */";
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


    var _services_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/resume.service */
    "./src/app/services/resume.service.ts");

    var UploadResumePage = /*#__PURE__*/function () {
      function UploadResumePage(router, alertController, auth, resume) {
        _classCallCheck(this, UploadResumePage);

        this.router = router;
        this.alertController = alertController;
        this.auth = auth;
        this.resume = resume;
        this.uploaded = true;
      }

      _createClass(UploadResumePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getFormData",
        value: function getFormData(event) {
          var _this = this;

          var formElement = document.querySelectorAll('form');
          formElement.forEach(function (form) {
            if (form.id === 'resume-form') {
              console.log('Got Form: ' + form);
              _this.formData = new FormData(form);
            }
          });
        }
      }, {
        key: "uploadResume",
        value: function uploadResume() {
          var _this2 = this;

          this.resume.resumeUpload(this.formData).subscribe(function (data) {
            console.log(data['objectUrl']);

            _this2.goToCredentialsPage(data['objectUrl']);
          });
        }
      }, {
        key: "goToCredentialsPage",
        value: function goToCredentialsPage(resume) {
          this.auth.getResume(resume);
          console.log('Going to Credentials Page');
          this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
        }
      }, {
        key: "getFileFromPhone",
        value: function getFileFromPhone() {
          console.error("TODO: getFileFromPhone() not implemented yet");
        }
      }, {
        key: "cancel",
        value: function cancel() {
          console.log('Sign up cancelled');
          this.router.navigate(['']);
        }
      }, {
        key: "skip",
        value: function skip() {
          console.log('Skipping to Upload Resume >>');
          this.presentAlert(); // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Skip',
                      message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
                      buttons: [{
                        text: 'Skip',
                        handler: function handler() {
                          _this3.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);

                          console.log('Skipping Resume Upload...');
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancelling Resume Upload Skip...');
                        }
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
      }]);

      return UploadResumePage;
    }();

    UploadResumePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_resume_service__WEBPACK_IMPORTED_MODULE_5__["ResumeService"]
      }];
    };

    UploadResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-resume.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-resume.page.scss */
      "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_resume_service__WEBPACK_IMPORTED_MODULE_5__["ResumeService"]])], UploadResumePage);
    /***/
  }
}]);
//# sourceMappingURL=upload-resume-upload-resume-module-es5.js.map