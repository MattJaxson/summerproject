(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsJobsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Toolbar -->\r\n<ion-header>\r\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-lg-up\">\r\n    <ion-grid>\r\n      <!-- Searchbar & Favorites Icon -->\r\n      <ion-row>\r\n        <ion-col offset-xs=\"0\" offset-sm=\"1\" offset-md=\"1\" size-xs=\"9\" size-sm=\"8\" size-md=\"8\">\r\n          <ion-searchbar\r\n          class=\"searchbar\"\r\n          debounce=\"2000\"\r\n          showCancelButton=\"true\"\r\n          placeholder=\"Search Jobs\"\r\n          (ionChange)=\"filter($event)\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n\r\n\r\n      <ion-col offset-xs=\"0\" offset-sm=\"1\" offset-md=\"1\" size-xs=\"1\" size-sm=\"1\" size-md=\"1\">\r\n        <ion-button (click)=\"favoritesPage()\">\r\n            <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\r\n          {{favoriteJobsAmount}}</ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Refresher -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n\r\n    <!-- Desktop Searchbar / Toolbar -->\r\n    <ion-row class=\"ion-hide-md-down\" style=\"margin-top: 50px;\">\r\n      <ion-col offset=\"2\" size=\"6\">\r\n        <ion-searchbar\r\n        class=\"searchbar\"\r\n        showCancelButton=\"true\"\r\n        placeholder=\"Search\"\r\n        debounce=\"1500\"\r\n        (ionChange)=\"filter($event)\"\r\n        ></ion-searchbar>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button class=\"ion-float-right\" (click)=\"favoritesPage()\">\r\n          <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\r\n        {{favoriteJobsAmount}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- No Search Results Message -->\r\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-center-text\" size=\"6\" style=\"margin-top: 10%\">\r\n        <h6 class=\"text-header-mobile\">There were no Search results with that name. Please Refresh the page</h6>\r\n        <ion-button class=\"orange-button\" (click)=\"doRefresh($event)\">\r\n          Refresh\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"!noSearchInput\">\r\n\r\n      <ion-col offset-lg=\"2\" offset-md=\"1\" offset-sm=\"1\" offset-xs=\"0\" size-lg=\"6\" size-md=\"8\" size-sm=\"10\" size-xs=\"12\">\r\n\r\n          <ion-list inset=\"true\" lines=\"none\" style=\"background: #f4f5f8;\">\r\n\r\n              <ion-item *ngFor=\"let job of allJobs\" style=\"margin-bottom: 20px;\">\r\n                <ion-row class=\"job-section\" (click)=\"jobPage(job)\">\r\n\r\n                  <!-- First Row w/ Job Tile, Date posted, and Logo -->\r\n                  <ion-col size=\"12\">\r\n                    <ion-row>\r\n                      <ion-col size=\"2\">\r\n                        <div style=\"height: 40px; width: 40px; background: lightblue;\"></div>\r\n                      </ion-col>\r\n                      <ion-col size=\"6\">\r\n                        <h5 style=\"font-weight: 900;\">{{job.title}}</h5>\r\n                      </ion-col>\r\n                      <ion-col size=\"3\">\r\n                        <h5 style=\"font-size: 10px; opacity: 0.7;\">Posted: {{job.dateCreated}}</h5>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"12\">\r\n                    <ion-row>\r\n                      <!-- Second Row w/ Company Name -->\r\n                      <ion-col style=\"position: relative; top: -20px\" size=\"2\">\r\n                      </ion-col>\r\n                      <ion-col style=\"position: relative; top: -20px\" size=\"7\">\r\n                        {{job.companyName}}\r\n                      </ion-col>\r\n                      <ion-col style=\"position: relative; top: -20px\" size=\"3\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"12\">\r\n                    <ion-row>\r\n                      <!-- Third Row w/ Job Summary -->\r\n                      <ion-col style=\"position: relative; top: -30px\" size=\"2\">\r\n                      </ion-col>\r\n                      <ion-col style=\"position: relative; top: -30px\" size=\"7\">\r\n                        {{job.summary}}\r\n                      </ion-col>\r\n                      <ion-col style=\"position: relative; top: -30px\" size=\"3\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n\r\n                  <!-- Fourth Row w/ Favorite Button -->\r\n                  <ion-col size=\"12\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\" style=\"height: 45px; margin-bottom: 20px;\">\r\n                          <!-- Heart Icon Component holds the state for Favorites -->\r\n                          <app-heart-icon [job]=\"job\"></app-heart-icon>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: JobsPageRoutingModule */

  /***/
  function srcAppPagesJobsJobsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPageRoutingModule", function () {
      return JobsPageRoutingModule;
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


    var _jobs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jobs.page */
    "./src/app/pages/jobs/jobs.page.ts");

    const routes = [{
      path: '',
      component: _jobs_page__WEBPACK_IMPORTED_MODULE_3__["JobsPage"]
    }, {
      path: 'job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
      loadChildren: () => __webpack_require__.e(
      /*! import() | job-page-job-page-module */
      "job-page-job-page-module").then(__webpack_require__.bind(null,
      /*! ./job-page/job-page.module */
      "./src/app/pages/jobs/job-page/job-page.module.ts")).then(m => m.JobPagePageModule)
    }, {
      path: 'favorites',
      loadChildren: () => __webpack_require__.e(
      /*! import() | favorites-favorites-module */
      "favorites-favorites-module").then(__webpack_require__.bind(null,
      /*! ./favorites/favorites.module */
      "./src/app/pages/jobs/favorites/favorites.module.ts")).then(m => m.FavoritesPageModule)
    }];
    let JobsPageRoutingModule = class JobsPageRoutingModule {};
    JobsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], JobsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/jobs/jobs.module.ts ***!
    \*******************************************/

  /*! exports provided: JobsPageModule */

  /***/
  function srcAppPagesJobsJobsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPageModule", function () {
      return JobsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jobs.page */
    "./src/app/pages/jobs/jobs.page.ts");
    /* harmony import */


    var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./jobs-routing.module */
    "./src/app/pages/jobs/jobs-routing.module.ts");
    /* harmony import */


    var _components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/shared.module */
    "./src/app/components/shared.module.ts");

    let JobsPageModule = class JobsPageModule {};
    JobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]
      }])],
      declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]]
    })], JobsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/jobs/jobs.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobsJobsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n\nion-button {\n  color: #005191;\n  --background: none;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 5px;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.job-section {\n  height: 250px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGpvYnNcXGpvYnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2JzL2pvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2pvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWhlaWdodDogNjBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuXHJcblxyXG59XHJcblxyXG4uam9iLXNlY3Rpb24ge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDYsIHAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4tLWlvbi1idXR0b25zIHtcclxuICAtLWNvbG9yOiAjODg4O1xyXG59IiwiI2xvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDYwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uam9iLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/jobs/jobs.page.ts ***!
    \*****************************************/

  /*! exports provided: JobsPage */

  /***/
  function srcAppPagesJobsJobsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPage", function () {
      return JobsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/jobs.service */
    "./src/app/services/jobs.service.ts");
    /* harmony import */


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    let JobsPage = class JobsPage {
      constructor(router, jobs, favorites, profile, loading) {
        this.router = router;
        this.jobs = jobs;
        this.favorites = favorites;
        this.profile = profile;
        this.loading = loading;
        this.jobsGoingLength = 0;
        this.searching = false;
        this.noSearchInput = false;
        this.favorited = 'favorited';
        this.unfavorited = 'unfavorited';
      }

      ngOnInit() {
        // Get all the jobs t be viewed on the home page
        this.jobs.getJobs().subscribe(jobs => {
          this.allJobs = Object.values(jobs);
        }); // getting all the favorite jobs that the user has on their profile

        this.profile.getUserDetails().subscribe(data => {
          this.favoriteJobs = data['favoriteJobs'];
          console.log('Favorite Jobs');
          console.log(this.favoriteJobs);
          this.favorites.favoriteJobs$.next(this.favoriteJobs);
          this.favorites.favoriteJobs$.subscribe(favs => {
            console.log('Favorite Jobs in Service');
            this.favoriteJobsAmount = favs.length;
          });
        });
        this.jobs.getJobs().subscribe(jobs => {
          // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list jobs,
          // .
          console.log('jobs that are intially loaded: ');
          console.log(jobs);
          this.allJobs = Object.values(jobs);
          this.allJobsLength = this.allJobs.length;
          this.allJobs.reverse();
          this.loadedAllJobs = Object.values(jobs);
          this.loadedAllJobs.reverse();

          for (const job of this.allJobs) {
            job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), {
              addSuffix: true
            });
          }
        });
      }

      ngOnDestroy() {} // getFavoritesAmount() {
      //   this.favorites.favoriteJobs$.subscribe(
      //     favs => {
      //       console.log(favs.length);
      //       this.favsAmount = favs.length;
      //     }
      //   );
      // }


      jobPage(job) {
        console.log(job);
        console.log('Going to specific Job Page'); // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length

        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
        console.log(job.name);
      }

      favoritesPage() {
        this.router.navigate(['/home/jobs/favorites']);
      }

      doRefresh(job) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.allJobs = [];
          yield this.jobs.getJobs().subscribe(jobs => {
            this.allJobs = Object.values(jobs);
            this.allJobsLength = this.allJobs.length;
            this.allJobs.reverse();
            this.searching = false; // Format Times

            for (const job of this.allJobs) {
              job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), {
                addSuffix: false
              });
            }
          });
          setTimeout(() => {
            job.target.complete();
            console.log('jobs Refreshed');
          }, 2000);
          yield this.searchbar.getInputElement().then(searchbarInputElement => {
            searchbarInputElement.value = '';
            this.noSearchInput = false;
          });
          yield console.log('Refreshing jobs Page..');
        });
      }

      filter($job) {
        this.initializeItems();
        let searchTerm = $job.detail.value;

        if (!searchTerm) {
          console.log('No results returned from Search');
          this.noSearchInput = true;
        }

        this.presentLoadingWithOptions();
        this.allJobs = this.allJobs.filter(currentJobs => {
          console.log(currentJobs);

          if (!currentJobs || !searchTerm) {
            console.log('No results from that search');
            this.noSearchInput = true;
          }

          if (currentJobs.title && searchTerm) {
            if (currentJobs.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
              console.log(currentJobs.title);
              console.log(currentJobs);
              this.searchTerm = searchTerm;
              this.searching = true;
              this.noSearchInput = false;
              return true;
            }

            return false;
          }

          this.noSearchInput = true;
        });
        this.allJobsLength = this.allJobs.length; // If there are no matches with the searchTerm

        if (this.allJobsLength === 0) {
          console.log('No results from that search');
          this.searching = true;
          this.searchTerm = searchTerm;
          this.searchbar.getInputElement().then(searchbarInputElement => {
            searchbarInputElement.value = '';
          });
          this.noSearchInput = true;
        }
      }

      initializeItems() {
        this.allJobs = this.loadedAllJobs;
      }

      presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            duration: 1000,
            message: 'Searching for jobs...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
          });
          return yield loading.present();
        });
      }

    };

    JobsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"]
    }, {
      type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])], JobsPage.prototype, "searchbar", void 0);
    JobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobs.page.scss */
      "./src/app/pages/jobs/jobs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], JobsPage);
    /***/
  },

  /***/
  "./src/app/services/jobs.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/jobs.service.ts ***!
    \******************************************/

  /*! exports provided: JobsService */

  /***/
  function srcAppServicesJobsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsService", function () {
      return JobsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    let JobsService = class JobsService {
      constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      getJobs() {
        console.log('Getting Jobs');
        return this.http.get("".concat(this.BACKEND_URL, "/api/admin/jobs"));
      }

      sendEmailApplication(user) {
        console.log(user);
        console.log("Sending email to ".concat(user.jobCompanyEmail));
        return this.http.post("".concat(this.BACKEND_URL, "/api/job"), user);
      }

    };

    JobsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    JobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], JobsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-jobs-jobs-module-es5.js.map