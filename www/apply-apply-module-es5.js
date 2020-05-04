(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-apply-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsApplyApplyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  <ion-title style=\"color: white;\">Job Page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-xs=\"10\" size-sm=\"8\" size-md=\"6\" size-lg=\"6\">\r\n\r\n        <h1 style=\"font-size: 2em; font-weight: 900; color: #005191;\">{{jobTitle}}</h1>\r\n\r\n        <h2>{{jobCompanyName}}</h2>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\">Please go over your Resume and information before you apply. </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">Phone Number</ion-label>\r\n                <ion-input></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                  <ion-label position=\"stacked\"> Go over your Resume</ion-label>\r\n                  <ion-button (click)=\"viewResume()\">\r\n                    View Resume\r\n                  </ion-button>\r\n                </ion-item>\r\n                <p>or</p>\r\n                <ion-item>\r\n                    <ion-button (click)=\"viewResume()\">\r\n                      Upload Resume\r\n                    </ion-button>\r\n                  </ion-item>\r\n                <p>resume_2019.pdf</p>\r\n                <ion-item>\r\n                        <ion-textarea\r\n                        rows=\"10\" placeholder=\"Why are you a great candidate for the position of {{jobTitle}}?\"></ion-textarea>\r\n                  </ion-item>\r\n                  <p>optional - ??? characters max</p>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<button (click)=\"finishApplication()\" id=\"next-button\">Submit Application</button>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply/apply-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/jobs/apply/apply-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: ApplyPageRoutingModule */

  /***/
  function srcAppPagesJobsApplyApplyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyPageRoutingModule", function () {
      return ApplyPageRoutingModule;
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


    var _apply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./apply.page */
    "./src/app/pages/jobs/apply/apply.page.ts");

    const routes = [{
      path: '',
      component: _apply_page__WEBPACK_IMPORTED_MODULE_3__["ApplyPage"]
    }, {
      path: 'apply-confirm/:title/:companyName/:companyEmail',
      loadChildren: () => __webpack_require__.e(
      /*! import() | apply-confirm-apply-confirm-module */
      "apply-confirm-apply-confirm-module").then(__webpack_require__.bind(null,
      /*! ../apply-confirm/apply-confirm.module */
      "./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts")).then(m => m.ApplyConfirmPageModule)
    }];
    let ApplyPageRoutingModule = class ApplyPageRoutingModule {};
    ApplyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ApplyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply/apply.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/jobs/apply/apply.module.ts ***!
    \**************************************************/

  /*! exports provided: ApplyPageModule */

  /***/
  function srcAppPagesJobsApplyApplyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyPageModule", function () {
      return ApplyPageModule;
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


    var _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./apply-routing.module */
    "./src/app/pages/jobs/apply/apply-routing.module.ts");
    /* harmony import */


    var _apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./apply.page */
    "./src/app/pages/jobs/apply/apply.page.ts");

    let ApplyPageModule = class ApplyPageModule {};
    ApplyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyPageRoutingModule"]],
      declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_6__["ApplyPage"]]
    })], ApplyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply/apply.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/jobs/apply/apply.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobsApplyApplyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvYXBwbHkvYXBwbHkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply/apply.page.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/jobs/apply/apply.page.ts ***!
    \************************************************/

  /*! exports provided: ApplyPage */

  /***/
  function srcAppPagesJobsApplyApplyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyPage", function () {
      return ApplyPage;
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


    var _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/jobs.service */
    "./src/app/services/jobs.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/profile.service */
    "./src/app/services/profile.service.ts");

    let ApplyPage = class ApplyPage {
      constructor(router, activatedRoute, jobs, profile) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobs = jobs;
        this.profile = profile;
        this.user = null;
      }

      viewResume() {
        console.log('Viewing Resume');
      }

      uploadResume() {
        console.log('Uploading Resume');
      }

      sendConfirmationEmail() {
        console.log('Sending confirmation email to Users email address');
      }

      finishApplication() {
        this.jobs.sendEmailApplication(this.user).subscribe(); // tslint:disable-next-line: max-line-length

        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
      }

      ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        this.jobTitle = title;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.profile.getUserDetails().subscribe(data => {
          this.user = data;
          this.user.jobTitle = this.jobTitle;
          this.user.jobCompanyName = this.jobCompanyName;
          this.user.jobCompanyEmail = this.jobCompanyEmail;
        });
      }

    };

    ApplyPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"]
    }, {
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }];

    ApplyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apply',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apply.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apply.page.scss */
      "./src/app/pages/jobs/apply/apply.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])], ApplyPage);
    /***/
  }
}]);
//# sourceMappingURL=apply-apply-module-es5.js.map