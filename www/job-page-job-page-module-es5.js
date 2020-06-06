function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"triggerJobPageRefresh()\"></ion-back-button>\n    </ion-buttons>\n  <ion-title style=\"color: white;\">Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"description\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n          <ion-col size=\"12\">\n            <!-- Back and Favorite Buttons (Desktop) -->\n            <ion-row class=\"ion-align-items-end\">\n              <ion-col push=\"1\">\n                <div class=\"company-logo\" style=\"height: 100px; width: 100px;\"></div>\n              </ion-col>\n              <ion-col  class=\"ion-float-right\" size=\"2\" push-md=\"1\">\n                <app-heart-icon  class=\"ion-float-right\" id=\"heart-icon\" [job]=\"jobObj\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-button  class=\"ion-hide-md-down back-button\" style=\" position: relative; top: -155px;\" (click)=\"goBack()\">\n                  Go Back</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col push=\"1\" size=\"10\" style=\"margin-top: 20px;\">\n                <h1  id=\"job-title\">{{jobTitle}}</h1>\n                <h2 id=\"company-name\">{{jobCompanyName}}</h2>\n                <p id=\"company-name\">{{jobCompanyEmail}}</p>\n                <p id=\"job-full-description\">{{jobFullJobDescription}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\"  class=\"ion-text-center\">\n        <ion-button (click)=\"applyForJob()\" class=\"orange-button\" style=\"width: 180px; margin-bottom: 100px;\">Apply for Job</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>";
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

    var routes = [{
      path: '',
      component: _job_page_page__WEBPACK_IMPORTED_MODULE_3__["JobPagePage"]
    }, {
      path: 'apply/:title/:companyName/:companyEmail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | apply-apply-module */
        "apply-apply-module").then(__webpack_require__.bind(null,
        /*! ../apply/apply.module */
        "./src/app/pages/jobs/apply/apply.module.ts")).then(function (m) {
          return m.ApplyPageModule;
        });
      }
    }];

    var JobPagePageRoutingModule = function JobPagePageRoutingModule() {
      _classCallCheck(this, JobPagePageRoutingModule);
    };

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


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
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

    var JobPagePageModule = function JobPagePageModule() {
      _classCallCheck(this, JobPagePageModule);
    };

    JobPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _job_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["JobPagePageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  font-weight: 700;\n}\n\n.description {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin: 100px 0 100px 0;\n}\n\n@media only screen and (max-width: 992px) {\n  .description {\n    margin: 40px 0 40px 0;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .orange-button {\n    width: 160px;\n  }\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n  top: -60px;\n}\n\n#company-name {\n  margin-top: 0;\n  margin-bottom: 15px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n#job-title {\n  font-size: 2em;\n  font-weight: 900;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n#job-full-description {\n  font-size: 1.3em;\n  line-height: 29px;\n  color: #666;\n  opacity: 0;\n  margin: 50px 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;\n}\n\n#heart-icon {\n  position: relative;\n  top: -20px;\n}\n\n@-webkit-keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9qb2ItcGFnZS9qb2ItcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2pvYnMvam9iLXBhZ2Uvam9iLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHFCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtFQ0FGO0FBQ0Y7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDRkY7O0FEWUE7RUFDRTtJQUNFLDBCQUFBO0VDVEY7RURXQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1RGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLDBCQUFBO0VDVEY7RURXQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1RGO0FBQ0Y7O0FEWUE7RUFDRTtJQUNFLDRCQUFBO0VDVkY7RURZQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1ZGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLDRCQUFBO0VDVkY7RURZQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2pvYi1wYWdlL2pvYi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBhbmltYXRpb246IGxvZ28tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbjogMTAwcHggMCAxMDBweCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiA0MHB4IDAgNDBweCAwO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm9yYW5nZS1idXR0b257XG4gICAgd2lkdGg6IDE2MHB4O1xuICB9XG59XG5cblxuI2pvYi1zdW1tYXJ5IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM2NjY7XG4gIG9wYWNpdHk6IDAuNztcbiAgdG9wOiAtNjBweDtcbn1cblxuI2NvbXBhbnktbmFtZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuOHMgZm9yd2FyZHM7XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG4jam9iLXBvc3RlZC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNDNweFxufVxuXG4jam9iLWZ1bGwtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgY29sb3I6ICM2NjY7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbjogNTBweCAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjJzIGZvcndhcmRzO1xufVxuXG4jaGVhcnQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweFxufVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuLy8gICAjaGVhcnQtaWNvbntcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgbGVmdDogMTAwcHg7XG4vLyAgIH1cbi8vIH1cblxuQGtleWZyYW1lcyBoZWFkZXItc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvZ28tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBsb2dvLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbnNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW46IDEwMHB4IDAgMTAwcHggMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogNDBweCAwIDQwcHggMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAub3JhbmdlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICB9XG59XG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzY2NjtcbiAgb3BhY2l0eTogMC43O1xuICB0b3A6IC02MHB4O1xufVxuXG4jY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuOHMgZm9yd2FyZHM7XG59XG5cbiNqb2ItcG9zdGVkLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00M3B4O1xufVxuXG4jam9iLWZ1bGwtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgY29sb3I6ICM2NjY7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbjogNTBweCAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjJzIGZvcndhcmRzO1xufVxuXG4jaGVhcnQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbn1cblxuQGtleWZyYW1lcyBoZWFkZXItc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2dvLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
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
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/jobs.service */
    "./src/app/services/jobs.service.ts");
    /* harmony import */


    var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/emitters/favorites-event-emitter.service */
    "./src/app/emitters/favorites-event-emitter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var JobPagePage = /*#__PURE__*/function () {
      function JobPagePage(activatedRoute, router, toastController, profile, favorites, jobs, eventEmitterService, location) {
        _classCallCheck(this, JobPagePage);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
        this.profile = profile;
        this.favorites = favorites;
        this.jobs = jobs;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
      }

      _createClass(JobPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.location.onPopState(function () {
            _this.triggerJobPageRefresh();
          }); // tslint:disable-next-line: radix

          var id = this.activatedRoute.snapshot.paramMap.get('id'); // tslint:disable-next-line: radix

          var title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

          var companyName = this.activatedRoute.snapshot.paramMap.get('companyName'); // tslint:disable-next-line: radix

          var companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail'); // tslint:disable-next-line: radix

          var summary = this.activatedRoute.snapshot.paramMap.get('summary'); // tslint:disable-next-line: radix

          var fullJobDescription = this.activatedRoute.snapshot.paramMap.get('fullJobDescription'); // tslint:disable-next-line: radix

          var rateOfPay = this.activatedRoute.snapshot.paramMap.get('rateOfPay');
          this.jobId = id;
          this.jobTitle = title; // this.jobPosted = posted;

          this.jobCompanyName = companyName;
          this.jobCompanyEmail = companyEmail;
          this.jobSummary = summary;
          this.jobFullJobDescription = fullJobDescription;
          this.jobRateOfPay = rateOfPay;
          this.getFavoriteJobs();
        }
      }, {
        key: "getFavoriteJobs",
        value: function getFavoriteJobs() {
          var _this2 = this;

          // getting all the favorite jobs that the user has on their profile
          this.profile.getUserDetails().subscribe(function (data) {
            var favoriteJobs = data['favoriteJobs'];

            _this2.favorites.favoriteJobs$.next(favoriteJobs);

            _this2.favorites.favoriteJobs$.subscribe(function (favs) {
              console.log("Favorite Jobs in Service: ".concat(favs));

              _this2.jobs.getJobs().subscribe(function (jobs) {
                for (var _i = 0, _Object$values = Object.values(jobs); _i < _Object$values.length; _i++) {
                  var job = _Object$values[_i];

                  if (_this2.jobId == job._id) {
                    _this2.jobObj = job;
                  }
                }
              });

              _this2.favorites.getFavorites(data['email']).subscribe(function (favDetails) {
                _this2.favoriteJobsObj = favDetails;
              });
            });
          });
        }
      }, {
        key: "applyForJob",
        value: function applyForJob() {
          // tslint:disable-next-line: max-line-length
          this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
        }
      }, {
        key: "favoriteThisJob",
        value: function favoriteThisJob() {
          console.log('Favoriting this Job'); // Check for error before we present the toast

          this.presentToast();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.triggerJobPageRefresh();
          this.router.navigate(['/home/jobs']);
        }
      }, {
        key: "triggerJobPageRefresh",
        value: function triggerJobPageRefresh() {
          this.eventEmitterService.onBackAction();
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: 'This job has been favorited.',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return JobPagePage;
    }();

    JobPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
      }, {
        type: src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"]
      }, {
        type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesEventEmitterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]
      }];
    };

    JobPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./job-page.page.scss */
      "./src/app/pages/jobs/job-page/job-page.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"], src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"], src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesEventEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]])], JobPagePage);
    /***/
  }
}]);
//# sourceMappingURL=job-page-job-page-module-es5.js.map