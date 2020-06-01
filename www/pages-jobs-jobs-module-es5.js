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


    __webpack_exports__["default"] = "<!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-grid>\n      <!-- Searchbar & Favorites Icon -->\n      <ion-row>\n        <ion-col push-xs=\"0.4\" push-sm=\"1\" push-md=\"1\" size-xs=\"8\" size-sm=\"8\" size-md=\"8\">\n          <ion-searchbar\n          class=\"searchbar\"\n          debounce=\"2000\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Jobs\"\n          (ionChange)=\"filter($event)\"\n          ></ion-searchbar>\n        </ion-col>\n\n\n      <ion-col push-xs=\"1\" push-sm=\"1\" push-md=\"1\" size-xs=\"1\" size-sm=\"1\" size-md=\"1\">\n        <ion-button id=\"favorites-button\" (click)=\"favoritesPage()\" style=\"--color: white;\">\n            <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n          {{favoriteJobsAmount}}</ion-button>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n\n    <!-- Desktop Searchbar / Toolbar -->\n    <ion-row class=\"ion-hide-md-down ion-align-items-center\" style=\"margin-top: 20px;\">\n      <ion-col offset=\"2\" size=\"6\">\n        <ion-searchbar\n        class=\"searchbar\"\n        showCancelButton=\"true\"\n        placeholder=\"Search\"\n        debounce=\"1500\"\n        (ionChange)=\"filter($event)\"\n        ></ion-searchbar>\n\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button class=\"ion-float-right\" (click)=\"favoritesPage()\">\n          <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n          {{favoriteJobsAmount}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- No Search Results Message -->\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-center-text\" size=\"6\" style=\"margin-top: 10%\">\n        <h6 class=\"text-header-mobile\" style=\"text-align: center;\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"!noSearchInput\">\n      <ion-col push-xs=\"0.5\" push-sm=\"1\" push-md=\"2\" push-lg=\"2\" size-xs=\"10.7\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <ion-row class=\"job-section\" *ngFor=\"let job of allJobs\">\n\n        <!-- First Row w/ Job Tile, Date posted, and Logo -->\n        <ion-col push=\"0.5\" size=\"10\" style=\"padding-top: 30px\">\n          <ion-row class=\"ion-align-items-start\">\n            <ion-col size=\"1\">\n              <div class=\"company-logo\" style=\"height: 60px; width: 60px;\"></div>\n            </ion-col>\n            <ion-col push-xs=\"1.3\" push-sm=\"1\" push-md=\"1\" push-lg=\"0.6\" size=\"8.7\">\n              <h5 id=\"job-title\">{{job.title}}</h5>\n              <p id=\"company-name\">{{job.companyName}}</p>\n              <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n            </ion-col>\n            <ion-col push=\"1\" size=\"1\">\n                <!-- Heart Icon Component holds the state for Favorites -->\n                <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col push=\"0.5\"  size=\"10.5\" >\n              <p id=\"job-summary\">{{job.summary}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col push=\"0.5\"  size=\"10.5\" >\n              <ion-button id=\"job-details\" class=\"back-button ion-float-right\" (click)=\"jobPage(job)\">\n                Details\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <!-- Fourth Row w/ Favorite Button -->\n        <ion-col size=\"12\">\n          <ion-row>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      </ion-col>\n\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
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


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");

    let JobsPageModule = class JobsPageModule {};
    JobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
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


    __webpack_exports__["default"] = "#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n#job-details {\n  color: #005191;\n  --background: white;\n  --background-hover: linear-gradient(#0672c4, #00467c);\n  --color-hover: white;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n#favorites-button {\n  opacity: 1;\n  --background: rgba(255,255,255,0.1);\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 70px;\n  height: 40px;\n  font-size: 0.8em;\n  font-weight: 600;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.job-section {\n  background: white;\n  height: auto;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n  margin-bottom: 50px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n  top: -60px;\n}\n\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -31px;\n}\n\n#job-title {\n  font-size: 0.9em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n}\n\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRElBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNERjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUNKRjtBQUNGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5cblxuI2pvYi1kZXRhaWxzIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDQ2N2MpO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbiNmYXZvcml0ZXMtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDYwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogNXB4O1xuXG5cbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjNjY2O1xuICBvcGFjaXR5OiAwLjc7XG4gIHRvcDogLTYwcHg7XG59XG5cbiNjb21wYW55LW5hbWUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzFweFxufVxuXG4jam9iLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXB4XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSAge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cbiIsIiNsb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jam9iLWRldGFpbHMge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNDY3Yyk7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuI2Zhdm9yaXRlcy1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzY2NjtcbiAgb3BhY2l0eTogMC43O1xuICB0b3A6IC02MHB4O1xufVxuXG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMxcHg7XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHg7XG59Il19 */";
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
    /* harmony import */


    var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/emitters/favorites-event-emitter.service */
    "./src/app/emitters/favorites-event-emitter.service.ts");

    let JobsPage = class JobsPage {
      constructor(router, jobs, favorites, profile, eventEmitterService, loading) {
        this.router = router;
        this.jobs = jobs;
        this.favorites = favorites;
        this.profile = profile;
        this.eventEmitterService = eventEmitterService;
        this.loading = loading;
        this.jobsGoingLength = 0;
        this.searching = false;
        this.noSearchInput = false;
        this.favorited = 'favorited';
        this.unfavorited = 'unfavorited';
      }

      ngOnInit() {
        if (this.eventEmitterService.subsVar == undefined) {
          this.eventEmitterService.subsVar = this.eventEmitterService.invokeJobsPageRefresh.subscribe(() => {
            this.getJobs();
          });
        } // Get all the jobs t be viewed on the home page


        this.jobs.getJobs().subscribe(jobs => {
          this.allJobs = Object.values(jobs);
          console.log("alljobs: ", this.allJobs);
        });
        this.getFavoriteJobs();
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

      ngOnDestroy() {}

      getFavoriteJobs() {
        // getting all the favorite jobs that the user has on their profile
        this.profile.getUserDetails().subscribe(data => {
          this.favoriteJobs = data['favoriteJobs'];
          console.log('Favorite Jobs:');
          console.log(this.favoriteJobs);
          this.favorites.favoriteJobs$.next(this.favoriteJobs);
          this.favorites.favoriteJobs$.subscribe(favs => {
            console.log("Favorite Jobs in Service: ".concat(favs));
            this.favoriteJobsAmount = favs.length;
            this.favorites.getFavorites(data['email']).subscribe(favDetails => {
              this.favoriteJobsObj = favDetails;
            });
          });
        });
      } // getFavoritesAmount() {
      //   this.favorites.favoriteJobs$.subscribe(
      //     favs => {
      //       console.log(favs.length);
      //       this.favsAmount = favs.length;
      //     }
      //   );
      // }


      jobPage(job) {
        console.log('Going to specific Job Page:', job.title);
        console.log('The job: ', job); // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length

        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
      }

      favoritesPage() {
        this.router.navigate(['/home/jobs/favorites']);
      }

      doRefresh(job) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.allJobs = [];
          this.getFavoriteJobs();
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

      getJobs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
      type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesEventEmitterService"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesEventEmitterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], JobsPage);
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