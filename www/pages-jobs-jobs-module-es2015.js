(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"favoriteState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- No Header, ion header's display: none -->\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">\n            <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n          {{favoriteJobsAmount}}</ion-button>\n      </ion-buttons>\n    <ion-title>Jobs</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n  <ion-grid fixed>\n\n    <!-- Job -->\n    <ion-row>\n      <ion-col size=\"12\">\n        <!-- Searchbar with cancel button always shown -->\n        <ion-searchbar showCancelButton=\"false\"></ion-searchbar>\n          <ion-list>\n              <ion-item *ngFor=\"let job of allJobs\" >\n                <ion-row class=\"job-section\">\n                  <ion-col size=\"11\" offset=\"0.5\" (click)=\"jobPage(job)\">\n                      <h5>{{job.title}}</h5>\n                      <h6>{{job.companyName}}</h6>\n                      <h6 style=\"font-size: 0.8em; opacity: 0.5;\">{{job.summary}}</h6>\n                      <h6 style=\"font-size: 0.4em; opacity: 0.5; float: right;\">{{job.posted}}</h6>\n                  </ion-col>\n                  <ion-col size=\"11\" style=\"height: 45px; margin-bottom: 20px;\">\n                      <!-- Heart Icon Component holds the state for Favorites -->\n                      <app-heart-icon [job]=\"job\"></app-heart-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/heart-icon/heart-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  float: right;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9oZWFydC1pY29uL2hlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhcnQtaWNvbi9oZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhcnQtaWNvbi9oZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTk7XG59IiwiaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/heart-icon/heart-icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: HeartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartIconComponent", function() { return HeartIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");




let HeartIconComponent = class HeartIconComponent {
    constructor(favorites) {
        this.favorites = favorites;
        this.favoriteState = 'unfavorited';
        this.iconName = 'heart-empty';
    }
    ngOnInit() { }
    toggleLikeState() {
        if (this.favoriteState === 'unfavorited') {
            this.favoriteState = 'favorited';
            this.iconName = 'heart';
            this.favorites.favoriteThisJob(this.job);
        }
        else {
            this.favoriteState = 'unfavorited';
            this.iconName = 'heart-empty';
            this.favorites.unFavoriteThisJob(this.job);
        }
    }
};
HeartIconComponent.ctorParameters = () => [
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeartIconComponent.prototype, "job", void 0);
HeartIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heart-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heart-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('heart', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('unfavorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#FF443B',
                    opacity: '0.4',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#FF443B',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('unfavorited <=> favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heart-icon.component.scss */ "./src/app/components/heart-icon/heart-icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]])
], HeartIconComponent);



/***/ }),

/***/ "./src/app/pages/jobs/jobs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JobsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageRoutingModule", function() { return JobsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs.page */ "./src/app/pages/jobs/jobs.page.ts");




const routes = [
    {
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_3__["JobsPage"]
    },
    {
        path: 'job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
        loadChildren: () => __webpack_require__.e(/*! import() | job-page-job-page-module */ "job-page-job-page-module").then(__webpack_require__.bind(null, /*! ./job-page/job-page.module */ "./src/app/pages/jobs/job-page/job-page.module.ts")).then(m => m.JobPagePageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => __webpack_require__.e(/*! import() | favorites-favorites-module */ "favorites-favorites-module").then(__webpack_require__.bind(null, /*! ./favorites/favorites.module */ "./src/app/pages/jobs/favorites/favorites.module.ts")).then(m => m.FavoritesPageModule)
    }
];
let JobsPageRoutingModule = class JobsPageRoutingModule {
};
JobsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JobsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jobs/jobs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/jobs/jobs.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs.page */ "./src/app/pages/jobs/jobs.page.ts");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs-routing.module */ "./src/app/pages/jobs/jobs-routing.module.ts");
/* harmony import */ var _components_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/heart-icon/heart-icon.component */ "./src/app/components/heart-icon/heart-icon.component.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"] }])
        ],
        declarations: [
            _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"],
            _components_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_8__["HeartIconComponent"]
        ]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/jobs/jobs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  height: 80px;\n}\n\nion-button {\n  color: white;\n  background: rgba(255, 255, 255, 0.5);\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n}\n\nion-icon {\n  color: red;\n  font-size: 20px;\n  position: relative;\n  right: 5px;\n}\n\n.job-section {\n  height: 230px;\n  background: none;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWhlYWRlciB7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59IiwiaW9uLWhlYWRlciB7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/jobs/jobs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.ts ***!
  \*****************************************/
/*! exports provided: JobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPage", function() { return JobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");






let JobsPage = class JobsPage {
    constructor(router, jobServices, favorites, profile) {
        this.router = router;
        this.jobServices = jobServices;
        this.favorites = favorites;
        this.profile = profile;
        this.favorited = 'favorited';
        this.unfavorited = 'unfavorited';
    }
    ngOnInit() {
        // Get all the jobs t be viewed on the home page
        this.jobServices.getJobs().subscribe(jobs => {
            this.allJobs = Object.values(jobs);
        });
        // getting all the favorite jobs that the user has on their profile
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
    }
    ngOnDestroy() {
    }
    // getFavoritesAmount() {
    //   this.favorites.favoriteJobs$.subscribe(
    //     favs => {
    //       console.log(favs.length);
    //       this.favsAmount = favs.length;
    //     }
    //   );
    // }
    jobPage(job) {
        console.log(job);
        console.log('Going to specific Job Page');
        // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
        console.log(job.name);
    }
    favoritesPage() {
        this.router.navigate(['/home/jobs/favorites']);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.jobServices.getJobs().subscribe(jobs => {
            this.allJobs = Object.values(jobs);
            console.log(typeof this.allJobs);
            console.log(this.allJobs);
        });
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
JobsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
JobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobs.page.scss */ "./src/app/pages/jobs/jobs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"],
        _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], JobsPage);



/***/ }),

/***/ "./src/app/services/jobs.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/jobs.service.ts ***!
  \******************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let JobsService = class JobsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    getJobs() {
        console.log('Getting Jobs');
        return this.http.get(`${this.BACKEND_URL}/api/admin/jobs`);
    }
    sendEmailApplication(user) {
        console.log(user);
        console.log(`Sending email to ${user.jobCompanyEmail}`);
        return this.http.post(`${this.BACKEND_URL}/api/job`, user);
    }
};
JobsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], JobsService);



/***/ })

}]);
//# sourceMappingURL=pages-jobs-jobs-module-es2015.js.map