(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-page-job-page-module"], {
    /***/
    "2Iy3":
    /*!********************************************************!*\
      !*** ./src/app/pages/jobs/job-page/job-page.module.ts ***!
      \********************************************************/

    /*! exports provided: JobPagePageModule */

    /***/
    function Iy3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobPagePageModule", function () {
        return JobPagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _job_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./job-page-routing.module */
      "zhQM");
      /* harmony import */


      var _job_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./job-page.page */
      "vnvQ");

      var JobPagePageModule = function JobPagePageModule() {
        _classCallCheck(this, JobPagePageModule);
      };

      JobPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _job_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["JobPagePageRoutingModule"]],
        declarations: [_job_page_page__WEBPACK_IMPORTED_MODULE_7__["JobPagePage"]]
      })], JobPagePageModule);
      /***/
    },

    /***/
    "TdhO":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function TdhO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"triggerJobPageRefresh()\"></ion-back-button>\n    </ion-buttons>\n  <ion-title>Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"description\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n            <!-- Back and Favorite Buttons (Desktop) -->\n            <ion-row class=\"ion-align-items-end\">\n              <ion-col push=\"1\">\n                <div class=\"company-logo\" style=\"height: 90px; width: 90px;\"></div>\n              </ion-col>\n              <ion-col  class=\"ion-float-right\" size=\"2\" push-xs=\"2\" push-sm=\"2\" push-md=\"2\">\n                <app-heart-icon  class=\"ion-float-right\" id=\"heart-icon\" [job]=\"jobObj\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n              <ion-col size=\"2\">\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col push=\"1\" size=\"10\">\n                <h1 id=\"job-title\">{{jobTitle}}</h1>\n                <h2 id=\"company-name\">{{jobCompanyName}}</h2>\n                <p id=\"company-name\">{{jobCompanyEmail}}</p>\n                <p id=\"job-full-description\">{{jobFullJobDescription}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\"  class=\"ion-text-center\">\n        <ion-button (click)=\"applyForJob()\" class=\"orange-button\" style=\"width: 150px; margin-bottom: 20px;\">Apply</ion-button>\n        <ion-button  class=\"ion-hide-md-down blue-button\"(click)=\"goBack()\">\n          Go Back</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "bJgd":
    /*!********************************************************!*\
      !*** ./src/app/pages/jobs/job-page/job-page.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function bJgd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.company-logo {\n  border-radius: 50px;\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  font-weight: 700;\n}\n\n.blue-button {\n  display: block;\n  margin: 0px auto 200px auto;\n}\n\n@media only screen and (max-width: 992px) {\n  .description {\n    margin: 10px 0 10px 0;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .orange-button {\n    width: 160px;\n  }\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n  top: -60px;\n}\n\n#company-name {\n  margin-top: 0;\n  margin-bottom: 15px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n#job-title {\n  font-size: 2em;\n  font-weight: 900;\n  padding-top: 20px;\n  opacity: 0;\n  color: #005191;\n  border-top: 1px solid #005191;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n#job-full-description {\n  font-size: 1.2em;\n  line-height: 29px;\n  color: #333;\n  opacity: 0;\n  margin: 50px 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;\n}\n\n#heart-icon {\n  position: relative;\n  top: -20px;\n}\n\n@-webkit-keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy9qb2ItcGFnZS9qb2ItcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBQUNGOztBQVFBO0VBQ0U7SUFDRSxxQkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLFlBQUE7RUFORjtBQUNGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFSRjs7QUFrQkE7RUFDRTtJQUNFLDBCQUFBO0VBZkY7RUFpQkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFmRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSwwQkFBQTtFQWZGO0VBaUJBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBZkY7QUFDRjs7QUFrQkE7RUFDRTtJQUNFLDRCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBaEJGO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLDRCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2pvYi1wYWdlL2pvYi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBhbmltYXRpb246IGxvZ28tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvIDIwMHB4IGF1dG87XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIC8vIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gIC8vIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIC8vIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5vcmFuZ2UtYnV0dG9ue1xuICAgIHdpZHRoOiAxNjBweDtcbiAgfVxufVxuXG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjNjY2O1xuICBvcGFjaXR5OiAwLjc7XG4gIHRvcDogLTYwcHg7XG59XG5cbiNjb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG4jam9iLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuOHMgZm9yd2FyZHM7XG59XG5cbiNqb2ItcG9zdGVkLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00M3B4XG59XG5cbiNqb2ItZnVsbC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuMnMgZm9yd2FyZHM7XG59XG5cbiNoZWFydC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4XG59XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4vLyAgICNoZWFydC1pY29ue1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBsZWZ0OiAxMDBweDtcbi8vICAgfVxuLy8gfVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9nby1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "vnvQ":
    /*!******************************************************!*\
      !*** ./src/app/pages/jobs/job-page/job-page.page.ts ***!
      \******************************************************/

    /*! exports provided: JobPagePage */

    /***/
    function vnvQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobPagePage", function () {
        return JobPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_job_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./job-page.page.html */
      "TdhO");
      /* harmony import */


      var _job_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-page.page.scss */
      "bJgd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "U8oy");
      /* harmony import */


      var src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/jobs.service */
      "sgUz");
      /* harmony import */


      var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/emitters/favorites-event-emitter.service */
      "lFXj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.profileSub.unsubscribe();
            this.favoriteJobsSub.unsubscribe();
            this.favoritesSub.unsubscribe();
            this.jobsSub.unsubscribe();
          }
        }, {
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
            this.profileSub = this.profile.getUserDetails().subscribe(function (data) {
              var favoriteJobs = data['favoriteJobs'];

              _this2.favorites.favoriteJobs$.next(favoriteJobs);

              _this2.favoriteJobsSub = _this2.favorites.favoriteJobs$.subscribe(function (favs) {
                console.log("Favorite Jobs in Service: ".concat(favs));
                _this2.jobsSub = _this2.jobs.getJobs().subscribe(function (jobs) {
                  for (var _i = 0, _Object$values = Object.values(jobs); _i < _Object$values.length; _i++) {
                    var job = _Object$values[_i];

                    if (_this2.jobId == job._id) {
                      _this2.jobObj = job;
                    }
                  }
                });
                _this2.favoritesSub = _this2.favorites.getFavorites(data['email']).subscribe(function (favDetails) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"]
        }, {
          type: src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobsService"]
        }, {
          type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesEventEmitterService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]
        }];
      };

      JobPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-job-page',
        template: _raw_loader_job_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_job_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"], src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobsService"], src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesEventEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]])], JobPagePage);
      /***/
    },

    /***/
    "zhQM":
    /*!****************************************************************!*\
      !*** ./src/app/pages/jobs/job-page/job-page-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: JobPagePageRoutingModule */

    /***/
    function zhQM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobPagePageRoutingModule", function () {
        return JobPagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _job_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-page.page */
      "vnvQ");

      var routes = [{
        path: '',
        component: _job_page_page__WEBPACK_IMPORTED_MODULE_3__["JobPagePage"]
      }, {
        path: 'apply/:title/:companyName/:companyEmail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | apply-apply-module */
          [__webpack_require__.e("default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module"), __webpack_require__.e("apply-apply-module")]).then(__webpack_require__.bind(null,
          /*! ../apply/apply.module */
          "lBow")).then(function (m) {
            return m.ApplyPageModule;
          });
        }
      }];

      var JobPagePageRoutingModule = function JobPagePageRoutingModule() {
        _classCallCheck(this, JobPagePageRoutingModule);
      };

      JobPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JobPagePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=job-page-job-page-module-es5.js.map