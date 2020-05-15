(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-page-job-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsJobPageJobPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  <ion-title style=\"color: white;\">Job Page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"description\" size-xs=\"10\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\r\n          <ion-col size=\"12\">\r\n            <!-- Back and Favorite Buttons (Desktop) -->\r\n            <ion-row class=\"ion-align-items-end\">\r\n              <ion-col size=\"7\">\r\n                <div style=\"height: 100px; width: 100px; background: lightblue;\"></div>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <app-heart-icon [job]=\"jobId\"></app-heart-icon>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-button  class=\"ion-hide-sm-down back-button\" style=\"float: right; position: relative; top: -40px;\" (click)=\"goBack()\">\r\n                  Go Back</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n            \r\n            <h3 style=\"color: #005191; font-weight: 600;\">{{jobTitle}}</h3>\r\n            <h6>{{jobCompanyName}}</h6>\r\n            <h6>{{jobCompanyEmail}}</h6>\r\n            <h6>{{jobFullJobDescription}}</h6>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"6\"  class=\"ion-text-center\">\r\n        <ion-button (click)=\"applyForJob()\" class=\"orange-button\">Apply for Job</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n  <ion-fab class=\"ion-hide-md-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button (click)=\"favoriteThisJob()\">\r\n        <ion-icon name=\"heart\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/jobs/job-page/job-page-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/jobs/job-page/job-page-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: JobPagePageRoutingModule */

  /***/
  function srcAppPagesJobsJobPageJobPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobPagePageRoutingModule", function () {
      return JobPagePageRoutingModule;
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


    var _job_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./job-page.page */
    "./src/app/pages/jobs/job-page/job-page.page.ts");

    const routes = [{
      path: '',
      component: _job_page_page__WEBPACK_IMPORTED_MODULE_3__["JobPagePage"]
    }, {
      path: 'apply/:title/:companyName/:companyEmail',
      loadChildren: () => __webpack_require__.e(
      /*! import() | apply-apply-module */
      "apply-apply-module").then(__webpack_require__.bind(null,
      /*! ../apply/apply.module */
      "./src/app/pages/jobs/apply/apply.module.ts")).then(m => m.ApplyPageModule)
    }];
    let JobPagePageRoutingModule = class JobPagePageRoutingModule {};
    JobPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], JobPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/job-page/job-page.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/jobs/job-page/job-page.module.ts ***!
    \********************************************************/

  /*! exports provided: JobPagePageModule */

  /***/
  function srcAppPagesJobsJobPageJobPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobPagePageModule", function () {
      return JobPagePageModule;
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


    var _components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/shared.module */
    "./src/app/components/shared.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _job_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./job-page-routing.module */
    "./src/app/pages/jobs/job-page/job-page-routing.module.ts");
    /* harmony import */


    var _job_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./job-page.page */
    "./src/app/pages/jobs/job-page/job-page.page.ts");

    let JobPagePageModule = class JobPagePageModule {};
    JobPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _job_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["JobPagePageRoutingModule"]],
      declarations: [_job_page_page__WEBPACK_IMPORTED_MODULE_7__["JobPagePage"]]
    })], JobPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/job-page/job-page.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/jobs/job-page/job-page.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobsJobPageJobPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\n  font-weight: 700;\n}\n\n.description {\n  margin-top: 5%;\n  background: white;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy9qb2ItcGFnZS9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGpvYnNcXGpvYi1wYWdlXFxqb2ItcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2pvYnMvam9iLXBhZ2Uvam9iLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvam9iLXBhZ2Uvam9iLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyJTtcclxufSIsInNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/jobs/job-page/job-page.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/jobs/job-page/job-page.page.ts ***!
    \******************************************************/

  /*! exports provided: JobPagePage */

  /***/
  function srcAppPagesJobsJobPageJobPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobPagePage", function () {
      return JobPagePage;
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

    let JobPagePage = class JobPagePage {
      constructor(activatedRoute, router, toastController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
      }

      ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id'); // tslint:disable-next-line: radix

        const title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName'); // tslint:disable-next-line: radix

        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail'); // tslint:disable-next-line: radix

        const summary = this.activatedRoute.snapshot.paramMap.get('summary'); // tslint:disable-next-line: radix

        const fullJobDescription = this.activatedRoute.snapshot.paramMap.get('fullJobDescription'); // tslint:disable-next-line: radix

        const rateOfPay = this.activatedRoute.snapshot.paramMap.get('rateOfPay');
        this.jobId = id;
        this.jobTitle = title; // this.jobPosted = posted;

        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.jobSummary = summary;
        this.jobFullJobDescription = fullJobDescription;
        this.jobRateOfPay = rateOfPay;
      }

      applyForJob() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
      }

      favoriteThisJob() {
        console.log('Favoriting this Job'); // Check for error before we present the toast

        this.presentToast();
      }

      goBack() {
        this.router.navigate(['/home/jobs']);
      }

      presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: 'This job has been favorited.',
            duration: 2000
          });
          toast.present();
        });
      }

    };

    JobPagePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }];

    JobPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./job-page.page.scss */
      "./src/app/pages/jobs/job-page/job-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], JobPagePage);
    /***/
  }
}]);
//# sourceMappingURL=job-page-job-page-module-es5.js.map