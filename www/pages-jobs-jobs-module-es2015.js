(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"],{

/***/ "0Fj6":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-title>Jobs</ion-title>\n\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         <ion-icon slot=\"start\" src=\"../../assets/icon/my-favorite-jobs.svg\"></ion-icon>\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n\n    <!-- Desktop Searchbar / Toolbar -->\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 50px 0 50px 0;\">\n      <ion-col size=\"8.33\" push=\"1\">\n        <ion-searchbar\n        class=\"searchbar\"\n        showCancelButton=\"true\"\n        placeholder=\"Search Job Titles\"\n        debounce=\"1500\"\n        (ionChange)=\"filter($event)\"\n        ></ion-searchbar>\n\n      </ion-col>\n      <ion-col size=\"2\" push=\"0.5\">\n        <ion-button class=\"blue-button ion-float-right\" style=\"width: 170px; position: fixed; top: 60px;\" (click)=\"favoritesPage()\">\n          <ion-icon src=\"../../../assets/icons/my-favorite-jobs\"></ion-icon>\n          {{favoriteJobsAmount}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- No Search Results Message -->\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\" style=\"margin-top: 25px;\">\n        <h6 class=\"text-header-mobile\" style=\"text-align: center;\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"!noSearchInput\">\n      <ion-col push-xs=\"0\" push-sm=\"1.3\" push-lg=\"1.05\" size-xs=\"12\" size-sm=\"10\" size-md=\"7.4\">\n        <ion-row class=\"job-section\" *ngFor=\"let job of allJobs\">\n\n          <!-- First Row w/ Job Tile, Date posted, and Logo -->\n          <ion-col push=\"0.5\" push-lg=\"0.6\" size-xs=\"12 \"size=\"7\" style=\"padding-top: 30px\">\n            <ion-row class=\"ion-align-items-start\">\n              <ion-col size=\"1\">\n                <div class=\"company-logo\" style=\"height: 60px; width: 60px;\"></div>\n              </ion-col>\n              <ion-col push-xs=\"1\" push-sm=\"1\" push-md=\"1\" push-lg=\"0.5\" size=\"4\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n              </ion-col>\n              <ion-col push-xs=\"3.5\" push-sm=\"3.5\" push-sm=\"3.5\" push-sm=\"3.9\" size=\"1\">\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n            <ion-row>\n              <ion-col push=\"0.5\"  size=\"10.5\" >\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n            </ion-row>\n\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col push=\"0.5\" size=\"10.5\">\n                <ion-button id=\"job-details\" class=\"ion-float-right\" (click)=\"jobPage(job)\">\n                  Details\n                </ion-button>\n                <!-- Heart Icon Component holds the state for Favorites -->\n                <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Fourth Row w/ Favorite Button -->\n          <ion-col size=\"12\">\n            <ion-row>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div\n  id=\"searchbar-wrapper\">\n    <ion-searchbar\n    debounce=\"2000\"\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      showCancelButton=\"true\"\n      placeholder=\"Search for Job by Position Name\"\n      (ionChange)=\"filter($event)\">\n    </ion-searchbar>\n    <div id=\"search-options\">\n      <p>You can choose up to five hashtags. Please seperate each tag with a comma ( , ) . Example: \"Computers, Science, Technology\"</p>\n      <p>Current Search: ----</p>\n      <div>\n        <ion-button class=\"cancel-button\">\n          Cancel\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n<!-- <ion-searchbar\n      debounce=\"2000\"\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      showCancelButton=\"true\"\n      placeholder=\"Search Job Titles\"\n      (ionChange)=\"filter($event)\"\n       ></ion-searchbar> -->\n");

/***/ }),

/***/ "A8Ph":
/*!*******************************************!*\
  !*** ./src/app/pages/jobs/jobs.module.ts ***!
  \*******************************************/
/*! exports provided: JobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs.page */ "X1l8");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs-routing.module */ "gkcM");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/custom-component.module */ "zAgk");
/* harmony import */ var _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile/resume/view-resume/view-resume.module */ "bUUK");










let JobsPageModule = class JobsPageModule {
};
JobsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"] }]),
            _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_9__["ViewResumePageModule"]
        ],
        declarations: [
            _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]
        ]
    })
], JobsPageModule);



/***/ }),

/***/ "X1l8":
/*!*****************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.ts ***!
  \*****************************************/
/*! exports provided: JobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPage", function() { return JobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./jobs.page.html */ "0Fj6");
/* harmony import */ var _jobs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs.page.scss */ "nfLs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/jobs.service */ "sgUz");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/favorites.service */ "U8oy");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ "lFXj");











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
    ngOnDestroy() {
        this.eventEmitterService.subsVar.unsubscribe();
        this.jobsSub.unsubscribe();
        this.profileSub.unsubscribe();
        this.favoriteJobsSub.unsubscribe();
    }
    ngOnInit() {
        // Hide Tab Bar
        const tabBar = document.getElementById('tabBar');
        tabBar.style.display = 'static';
        if (this.eventEmitterService.subsVar == undefined) {
            this.eventEmitterService.subsVar = this.eventEmitterService.invokeJobsPageRefresh.subscribe(() => {
                this.getJobs();
            });
        }
        this.getFavoriteJobs();
        this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
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
                job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: true });
            }
        });
    }
    filter($job) {
        this.initializeItems();
        let searchTerm = $job.detail.value;
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
                    console.log((currentJobs));
                    this.searchTerm = searchTerm;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
            this.noSearchInput = true;
        });
        this.allJobsLength = this.allJobs.length;
        // If there are no matches with the searchTerm
        if (this.allJobsLength === 0) {
            console.log('No results from that search');
            this.searching = true;
            this.searchTerm = searchTerm;
            this.searchbar.getInputElement().then((searchbarInputElement) => {
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
    initializeItems() {
        this.allJobs = this.loadedAllJobs;
    }
    getFavoriteJobs() {
        // Get all the user's favorite jobs
        this.profileSub = this.profile.getUserDetails().subscribe(data => {
            this.favoriteJobs = data['favoriteJobs'];
            console.log('Favorite Jobs:');
            console.log(this.favoriteJobs);
            this.favorites.favoriteJobs$.next(this.favoriteJobs);
            this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(favs => {
                console.log(`Favorite Jobs in Service: ${favs}`);
                this.favoriteJobsAmount = favs.length;
                this.favorites.getFavorites(data['email']).subscribe(favDetails => {
                    this.favoriteJobsObj = favDetails;
                });
            });
        });
    }
    jobPage(job) {
        console.log('Going to specific Job Page:', job.title);
        console.log('The job: ', job);
        // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
    }
    favoritesPage() {
        this.router.navigate(['/home/jobs/favorites']);
    }
    doRefresh(job) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.allJobs = [];
            this.getFavoriteJobs();
            this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
                this.allJobs = Object.values(jobs);
                this.allJobsLength = this.allJobs.length;
                this.allJobs.reverse();
                this.searching = false;
                // Format Times
                for (const job of this.allJobs) {
                    job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: false });
                }
            });
            setTimeout(() => {
                job.target.complete();
                console.log('jobs Refreshed');
            }, 2000);
            yield this.searchbar.getInputElement().then((searchbarInputElement) => {
                searchbarInputElement.value = '';
                this.noSearchInput = false;
            });
            yield console.log('Refreshing jobs Page..');
        });
    }
    getJobs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
                this.allJobs = Object.values(jobs);
                this.allJobsLength = this.allJobs.length;
                this.allJobs.reverse();
                this.searching = false;
                // Format Times
                for (const job of this.allJobs) {
                    job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: false });
                }
            });
        });
    }
    presentLoadingWithOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                duration: 1000,
                message: 'Searching for jobs...',
                translucent: true,
                cssClass: 'custom-class custom-loading',
                keyboardClose: false
            });
            return yield loading.present();
        });
    }
};
JobsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["FavoritesEventEmitterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
JobsPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], { static: false },] }]
};
JobsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jobs',
        template: _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jobs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"],
        _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"],
        src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["FavoritesEventEmitterService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], JobsPage);



/***/ }),

/***/ "gkcM":
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JobsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageRoutingModule", function() { return JobsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs.page */ "X1l8");




const routes = [
    {
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_3__["JobsPage"]
    },
    {
        path: 'job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
        loadChildren: () => __webpack_require__.e(/*! import() | job-page-job-page-module */ "job-page-job-page-module").then(__webpack_require__.bind(null, /*! ./job-page/job-page.module */ "2Iy3")).then(m => m.JobPagePageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => __webpack_require__.e(/*! import() | favorites-favorites-module */ "favorites-favorites-module").then(__webpack_require__.bind(null, /*! ./favorites/favorites.module */ "B9Dp")).then(m => m.FavoritesPageModule)
    }
];
let JobsPageRoutingModule = class JobsPageRoutingModule {
};
JobsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JobsPageRoutingModule);



/***/ }),

/***/ "nfLs":
/*!*******************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n  background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\nion-header ion-icon {\n  font-size: 2.5em;\n}\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n#job-details {\n  --background: #edf3f8;\n  --background-hover: #edf3f8;\n  color: #005191;\n  margin-right: 10px;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 5px;\n}\n#job-details:hover {\n  color: white;\n}\n#favorites-button {\n  opacity: 1;\n  --background: #005191;\n  --background-hover: #005191;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 100px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\nion-searchbar {\n  margin-left: 10px;\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  width: 95%;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n  padding: 5px;\n}\nion-searchbar:focus {\n  border: 1px solid #005191;\n}\n.job-section {\n  background: white;\n  height: auto;\n  color: #777;\n  width: 100%;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\nh6, p {\n  display: block;\n}\n--ion-buttons {\n  --color: #888;\n}\n#job-summary {\n  font-size: 1.3em;\n  line-height: 1.3em;\n  position: relative;\n  color: #333;\n  opacity: 0.7;\n  top: -60px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #005191;\n}\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2pvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREY7QUFJQTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFERjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0UseUJBQUE7QUFGRjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsYUFBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBRkY7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZGO0FBS0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFGRjtBQUtBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKRiIsImZpbGUiOiJqb2JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59XG5cblxuI3NlYXJjaGJhci13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuIH1cblxuI2xvZ297XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI2pvYi1kZXRhaWxzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNlZGYzZjg7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNqb2ItZGV0YWlsczpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA1MTkxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG5cbmlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgd2lkdGg6IDk1JTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmlvbi1zZWFyY2hiYXI6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xufVxuXG4uam9iLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzc3NztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn1cblxuI2pvYi1zdW1tYXJ5IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRvcDogLTYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNTE5MTtcbn1cblxuI2NvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yOXB4XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1cHg7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4jam9iLXJhdGUge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUzcHg7XG4gIGNvbG9yOiAjMTE2ZTU2O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAjam9iLXRpdGxlICB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbiNqb2ItcG9zdGVkLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00M3B4XG59XG4iXX0= */");

/***/ }),

/***/ "sgUz":
/*!******************************************!*\
  !*** ./src/app/services/jobs.service.ts ***!
  \******************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let JobsService = class JobsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    getJobs() {
        console.log('Getting Jobs');
        return this.http.get(`${this.BACKEND_URL}/api/jobs`);
    }
    sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
        console.log(`Sending email to ${jobCompanyEmail}`);
        return this.http.post(`${this.BACKEND_URL}/api/jobs/send-application`, { user, age, phoneNumber, reason, jobTitle, jobCompanyEmail });
    }
};
JobsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JobsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], JobsService);



/***/ })

}]);
//# sourceMappingURL=pages-jobs-jobs-module-es2015.js.map