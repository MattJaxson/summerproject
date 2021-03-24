(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"], {
    /***/
    "0Fj6":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Fj6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-title>Jobs</ion-title>\n\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         <ion-icon slot=\"start\" src=\"../../assets/icon/my-favorite-jobs.svg\"></ion-icon>\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n                  <h1>Jobs</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"filter-button\" (click)=\"filterJobs()\">\n                  Filter\n                </ion-button>\n                <ion-button class=\"favorites-button\" (click)=\"favoritesPage()\">\n                  Favorites\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of allJobs\">\n              <ion-col size=\"1\">\n                <img class=\"company-logo\" src=\"{{job.companyLogo}\">\n              </ion-col>\n              <ion-col style=\"height: 80px;\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n              </ion-col>\n              <ion-col size=\"12\">\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n              <ion-col size=\"12\">\n                  <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                    Details\n                  </ion-button>\n                  <!-- Heart Icon Component holds the state for Favorites -->\n                  <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "A8Ph":
    /*!*******************************************!*\
      !*** ./src/app/pages/jobs/jobs.module.ts ***!
      \*******************************************/

    /*! exports provided: JobsPageModule */

    /***/
    function A8Ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsPageModule", function () {
        return JobsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./jobs.page */
      "X1l8");
      /* harmony import */


      var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./jobs-routing.module */
      "gkcM");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../profile/resume/view-resume/view-resume.module */
      "bUUK");

      var JobsPageModule = function JobsPageModule() {
        _classCallCheck(this, JobsPageModule);
      };

      JobsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]
        }]), _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_9__["ViewResumePageModule"]],
        declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]]
      })], JobsPageModule);
      /***/
    },

    /***/
    "X1l8":
    /*!*****************************************!*\
      !*** ./src/app/pages/jobs/jobs.page.ts ***!
      \*****************************************/

    /*! exports provided: JobsPage */

    /***/
    function X1l8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsPage", function () {
        return JobsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./jobs.page.html */
      "0Fj6");
      /* harmony import */


      var _jobs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jobs.page.scss */
      "nfLs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/jobs.service */
      "sgUz");
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/favorites.service */
      "U8oy");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/emitters/favorites-event-emitter.service */
      "lFXj");

      var JobsPage = /*#__PURE__*/function () {
        function JobsPage(router, jobs, favorites, profile, eventEmitterService, loading) {
          _classCallCheck(this, JobsPage);

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

        _createClass(JobsPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.eventEmitterService.subsVar.unsubscribe();
            this.jobsSub.unsubscribe();
            this.profileSub.unsubscribe();
            this.favoriteJobsSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Hide Tab Bar
            var tabBar = document.getElementById('tabBar');
            tabBar.style.display = 'static';

            if (this.eventEmitterService.subsVar == undefined) {
              this.eventEmitterService.subsVar = this.eventEmitterService.invokeJobsPageRefresh.subscribe(function () {
                _this.getJobs();
              });
            }

            this.getFavoriteJobs();
            this.jobsSub = this.jobs.getJobs().subscribe(function (jobs) {
              // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list jobs,
              // .
              console.log('jobs that are intially loaded: ');
              console.log(jobs);
              _this.allJobs = Object.values(jobs);
              _this.allJobsLength = _this.allJobs.length;

              _this.allJobs.reverse();

              _this.loadedAllJobs = Object.values(jobs);

              _this.loadedAllJobs.reverse();

              var _iterator = _createForOfIteratorHelper(_this.allJobs),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var job = _step.value;
                  job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(job.dateCreated), {
                    addSuffix: true
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "filter",
          value: function filter($job) {
            var _this2 = this;

            this.initializeItems();
            var searchTerm = $job.detail.value;
            this.presentLoadingWithOptions();
            this.allJobs = this.allJobs.filter(function (currentJobs) {
              console.log(currentJobs);

              if (!currentJobs || !searchTerm) {
                console.log('No results from that search');
                _this2.noSearchInput = true;
              }

              if (currentJobs.title && searchTerm) {
                if (currentJobs.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentJobs.title);
                  console.log(currentJobs);
                  _this2.searchTerm = searchTerm;
                  _this2.searching = true;
                  _this2.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this2.noSearchInput = true;
            });
            this.allJobsLength = this.allJobs.length; // If there are no matches with the searchTerm

            if (this.allJobsLength === 0) {
              console.log('No results from that search');
              this.searching = true;
              this.searchTerm = searchTerm;
              this.searchbar.getInputElement().then(function (searchbarInputElement) {
                searchbarInputElement.value = '';
              });
              this.noSearchInput = true;
            }

            if (!searchTerm) {
              console.log('Search term is empty; showing all jobs instead');
              this.noSearchInput = false;
              this.searching = false;
              this.getJobs();
            }
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.allJobs = this.loadedAllJobs;
          }
        }, {
          key: "getFavoriteJobs",
          value: function getFavoriteJobs() {
            var _this3 = this;

            // Get all the user's favorite jobs
            this.profileSub = this.profile.getUserDetails().subscribe(function (data) {
              _this3.favoriteJobs = data['favoriteJobs'];
              console.log('Favorite Jobs:');
              console.log(_this3.favoriteJobs);

              _this3.favorites.favoriteJobs$.next(_this3.favoriteJobs);

              _this3.favoriteJobsSub = _this3.favorites.favoriteJobs$.subscribe(function (favs) {
                console.log("Favorite Jobs in Service: ".concat(favs));
                _this3.favoriteJobsAmount = favs.length;

                _this3.favorites.getFavorites(data['email']).subscribe(function (favDetails) {
                  _this3.favoriteJobsObj = favDetails;
                });
              });
            });
          }
        }, {
          key: "jobPage",
          value: function jobPage(job) {
            console.log('Going to specific Job Page:', job.title);
            console.log('The job: ', job); // state object after url has to be an object for navigate()
            // tslint:disable-next-line: max-line-length

            this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
          }
        }, {
          key: "favoritesPage",
          value: function favoritesPage() {
            this.router.navigate(['/home/jobs/favorites']);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(job) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.allJobs = [];
                      this.getFavoriteJobs();
                      this.jobsSub = this.jobs.getJobs().subscribe(function (jobs) {
                        _this4.allJobs = Object.values(jobs);
                        _this4.allJobsLength = _this4.allJobs.length;

                        _this4.allJobs.reverse();

                        _this4.searching = false; // Format Times

                        var _iterator2 = _createForOfIteratorHelper(_this4.allJobs),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var _job = _step2.value;
                            _job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(_job.dateCreated), {
                              addSuffix: false
                            });
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      });
                      setTimeout(function () {
                        job.target.complete();
                        console.log('jobs Refreshed');
                      }, 2000);
                      _context.next = 6;
                      return this.searchbar.getInputElement().then(function (searchbarInputElement) {
                        searchbarInputElement.value = '';
                        _this4.noSearchInput = false;
                      });

                    case 6:
                      _context.next = 8;
                      return console.log('Refreshing jobs Page..');

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getJobs",
          value: function getJobs() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.jobsSub = this.jobs.getJobs().subscribe(function (jobs) {
                        _this5.allJobs = Object.values(jobs);
                        _this5.allJobsLength = _this5.allJobs.length;

                        _this5.allJobs.reverse();

                        _this5.searching = false; // Format Times

                        var _iterator3 = _createForOfIteratorHelper(_this5.allJobs),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var job = _step3.value;
                            job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(job.dateCreated), {
                              addSuffix: false
                            });
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for jobs...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading',
                        keyboardClose: false
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return JobsPage;
      }();

      JobsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"]
        }, {
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]
        }, {
          type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["FavoritesEventEmitterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      JobsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], {
            "static": false
          }]
        }]
      };
      JobsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jobs',
        template: _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jobs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"], src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["FavoritesEventEmitterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], JobsPage);
      /***/
    },

    /***/
    "gkcM":
    /*!***************************************************!*\
      !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: JobsPageRoutingModule */

    /***/
    function gkcM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsPageRoutingModule", function () {
        return JobsPageRoutingModule;
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


      var _jobs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jobs.page */
      "X1l8");

      var routes = [{
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_3__["JobsPage"]
      }, {
        path: 'job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | job-page-job-page-module */
          "job-page-job-page-module").then(__webpack_require__.bind(null,
          /*! ./job-page/job-page.module */
          "2Iy3")).then(function (m) {
            return m.JobPagePageModule;
          });
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | favorites-favorites-module */
          "favorites-favorites-module").then(__webpack_require__.bind(null,
          /*! ./favorites/favorites.module */
          "B9Dp")).then(function (m) {
            return m.FavoritesPageModule;
          });
        }
      }];

      var JobsPageRoutingModule = function JobsPageRoutingModule() {
        _classCallCheck(this, JobsPageRoutingModule);
      };

      JobsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JobsPageRoutingModule);
      /***/
    },

    /***/
    "nfLs":
    /*!*******************************************!*\
      !*** ./src/app/pages/jobs/jobs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function nfLs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n  background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\nion-header ion-icon {\n  font-size: 2.5em;\n}\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n.job-details {\n  --background: #edf3f8;\n  --color: #333;\n  --background-hover: #8c949b;\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.favorites-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #da3a57);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.filter-button {\n  --color: white;\n  --background: #333;\n  --background-hover: linear-gradient(#e3405f, #da3a57);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  padding: 1em;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\nh6, p {\n  display: block;\n}\n--ion-buttons {\n  --color: #888;\n}\n#job-summary {\n  font-size: 1em;\n  line-height: 1.3em;\n  color: #222;\n}\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2pvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREY7QUFJQTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0FBQUo7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFGIiwiZmlsZSI6ImpvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDUxOTE7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbn1cblxuXG4jc2VhcmNoYmFyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gfVxuXG4jbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uam9iLWRldGFpbHMge1xuICAtLWJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIC0tY29sb3I6ICMzMzM7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzhjOTQ5YjtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLXdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLmZhdm9yaXRlcy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTM0MDVmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjZGEzYTU3KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlci1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjZGEzYTU3KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBjb2xvcjogIzIyMjtcbn1cblxuI2NvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yOXB4XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1cHg7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4jam9iLXJhdGUge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUzcHg7XG4gIGNvbG9yOiAjMTE2ZTU2O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAjam9iLXRpdGxlICB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbiNqb2ItcG9zdGVkLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00M3B4XG59XG4iXX0= */";
      /***/
    },

    /***/
    "sgUz":
    /*!******************************************!*\
      !*** ./src/app/services/jobs.service.ts ***!
      \******************************************/

    /*! exports provided: JobsService */

    /***/
    function sgUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsService", function () {
        return JobsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var JobsService = /*#__PURE__*/function () {
        function JobsService(http) {
          _classCallCheck(this, JobsService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        }

        _createClass(JobsService, [{
          key: "getJobs",
          value: function getJobs() {
            console.log('Getting Jobs');
            return this.http.get("".concat(this.BACKEND_URL, "/api/jobs"));
          }
        }, {
          key: "sendEmailApplication",
          value: function sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
            console.log("Sending email to ".concat(jobCompanyEmail));
            return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/send-application"), {
              user: user,
              age: age,
              phoneNumber: phoneNumber,
              reason: reason,
              jobTitle: jobTitle,
              jobCompanyEmail: jobCompanyEmail
            });
          }
        }]);

        return JobsService;
      }();

      JobsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      JobsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], JobsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-jobs-jobs-module-es5.js.map