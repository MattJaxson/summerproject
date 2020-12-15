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


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.company-logo {\n  border-radius: 50px;\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  font-weight: 700;\n}\n\n.blue-button {\n  display: block;\n  margin: 0px auto 200px auto;\n}\n\n@media only screen and (max-width: 992px) {\n  .description {\n    margin: 10px 0 10px 0;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .orange-button {\n    width: 160px;\n  }\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n  top: -60px;\n}\n\n#company-name {\n  margin-top: 0;\n  margin-bottom: 15px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n#job-title {\n  font-size: 2em;\n  font-weight: 900;\n  padding-top: 20px;\n  opacity: 0;\n  color: #005191;\n  border-top: 1px solid #005191;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n#job-full-description {\n  font-size: 1.2em;\n  line-height: 29px;\n  color: #333;\n  opacity: 0;\n  margin: 50px 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;\n}\n\n#heart-icon {\n  position: relative;\n  top: -20px;\n}\n\n@-webkit-keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2pvYi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLHFCQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsWUFBQTtFQU5GO0FBQ0Y7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQVJGOztBQWtCQTtFQUNFO0lBQ0UsMEJBQUE7RUFmRjtFQWlCQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQWZGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLDBCQUFBO0VBZkY7RUFpQkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFmRjtBQUNGOztBQWtCQTtFQUNFO0lBQ0UsNEJBQUE7RUFoQkY7RUFrQkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFoQkY7QUFDRjs7QUFTQTtFQUNFO0lBQ0UsNEJBQUE7RUFoQkY7RUFrQkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFoQkY7QUFDRiIsImZpbGUiOiJqb2ItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBsb2dvLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbnNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0byAyMDBweCBhdXRvO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAvLyBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICAvLyBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAvLyBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAub3JhbmdlLWJ1dHRvbntcbiAgICB3aWR0aDogMTYwcHg7XG4gIH1cbn1cblxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzY2NjtcbiAgb3BhY2l0eTogMC43O1xuICB0b3A6IC02MHB4O1xufVxuXG4jY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG4jam9iLXBvc3RlZC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNDNweFxufVxuXG4jam9iLWZ1bGwtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbjogNTBweCAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjJzIGZvcndhcmRzO1xufVxuXG4jaGVhcnQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweFxufVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuLy8gICAjaGVhcnQtaWNvbntcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgbGVmdDogMTAwcHg7XG4vLyAgIH1cbi8vIH1cblxuQGtleWZyYW1lcyBoZWFkZXItc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvZ28tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */";
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