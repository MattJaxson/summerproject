(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-resume-resume-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/resume/resume.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/resume/resume.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileResumeResumeResumePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Resume</ion-title>\r\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n        cancel\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"ion-text-center\">\r\n  <h6 class=\"text-header\">Here, you can view your resume, or upload another one to your profile</h6>\r\n  <ion-button (click)=\"updateResume()\" class=\"orange-button\">UPDATE RESUME</ion-button>\r\n  <ion-button (click)=\"viewResume()\" style=\"--background: white; border: 1px solid #005191; border-radius: 5px;\" class=\"orange-button\">VIEW RESUME</ion-button>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/resume/resume-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/profile/resume/resume/resume-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ResumePageRoutingModule */

  /***/
  function srcAppPagesProfileResumeResumeResumeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePageRoutingModule", function () {
      return ResumePageRoutingModule;
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


    var _resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume.page */
    "./src/app/pages/profile/resume/resume/resume.page.ts");

    const routes = [{
      path: '',
      component: _resume_page__WEBPACK_IMPORTED_MODULE_3__["ResumePage"]
    }, {
      path: 'confirm',
      loadChildren: () => __webpack_require__.e(
      /*! import() | confirm-confirm-module */
      "confirm-confirm-module").then(__webpack_require__.bind(null,
      /*! ../confirm/confirm.module */
      "./src/app/pages/profile/resume/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }];
    let ResumePageRoutingModule = class ResumePageRoutingModule {};
    ResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResumePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/resume/resume.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/profile/resume/resume/resume.module.ts ***!
    \**************************************************************/

  /*! exports provided: ResumePageModule */

  /***/
  function srcAppPagesProfileResumeResumeResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePageModule", function () {
      return ResumePageModule;
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


    var _resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume-routing.module */
    "./src/app/pages/profile/resume/resume/resume-routing.module.ts");
    /* harmony import */


    var _resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resume.page */
    "./src/app/pages/profile/resume/resume/resume.page.ts");

    let ResumePageModule = class ResumePageModule {};
    ResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResumePageRoutingModule"]],
      declarations: [_resume_page__WEBPACK_IMPORTED_MODULE_6__["ResumePage"]]
    })], ResumePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/resume/resume.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/profile/resume/resume/resume.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileResumeResumeResumePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL3Jlc3VtZS9yZXN1bWUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/resume/resume.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/profile/resume/resume/resume.page.ts ***!
    \************************************************************/

  /*! exports provided: ResumePage */

  /***/
  function srcAppPagesProfileResumeResumeResumePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePage", function () {
      return ResumePage;
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


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/profile.service */
    "./src/app/services/profile.service.ts");

    let ResumePage = class ResumePage {
      constructor(router, profile) {
        this.router = router;
        this.profile = profile;
        this.activeResume = this.profile.resume.getValue();
      }

      ngOnInit() {}

      viewResume() {
        console.log('Going to View Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
      }

      updateResume() {
        console.log('Going to Update Resume Page');
        this.router.navigate(['/home/profile/update-resume']);
      }

      cancel() {
        console.log('change phone number cancelled');
        this.router.navigate(['/home/profile']);
      }

    };

    ResumePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
    }];

    ResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/resume/resume.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume.page.scss */
      "./src/app/pages/profile/resume/resume/resume.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])], ResumePage);
    /***/
  }
}]);
//# sourceMappingURL=resume-resume-resume-module-es5.js.map