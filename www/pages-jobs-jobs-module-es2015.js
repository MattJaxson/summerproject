(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"favoriteState\" size=\"large\" [name]=\"iconName\"></ion-icon>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- Mobile & Tablet -->\r\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-lg-up\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        Logo\r\n      </ion-col>\r\n      <ion-col size=\"5\">\r\n        <ion-searchbar\r\n        class=\"searchbar\"\r\n        showCancelButton=\"true\"\r\n        placeholder=\"Search Job Titles\"\r\n        (ionChange)=\"filter($event)\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col class=\"ion-align-items-center\" size=\"5\">\r\n          <ion-button (click)=\"onClick()\">\r\n            Filter\r\n          </ion-button>\r\n          <ion-button (click)=\"favoritesPage()\">\r\n              <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\r\n            {{favoriteJobsAmount}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\" style=\"margin-top: 50px;\">\r\n      <ion-col size=\"8\">\r\n        <ion-searchbar\r\n        class=\"searchbar\"\r\n        showCancelButton=\"true\"\r\n        placeholder=\"Search\"\r\n        debounce=\"1500\"\r\n        (ionChange)=\"filter($event)\"\r\n        ></ion-searchbar>\r\n\r\n\r\n        <ion-button style=\"float: right; position: relative; top: -40px;\" (click)=\"favoritesPage()\">\r\n          <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\r\n        {{favoriteJobsAmount}}</ion-button>\r\n\r\n        <ion-button style=\"float: right; position: relative; top: -40px;\">\r\n          filter by: title\r\n          <ion-icon style=\"margin-left: 20px;\" src=\"../../../assets/icon/filter-outline.svg\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\r\n      <ion-col size=\"6\">\r\n        <h6 class=\"text-header\">There were no Search results with that name. Please Refresh the page</h6>\r\n        <ion-button class=\"orange-button\" (click)=\"doRefresh($event)\">\r\n          Refresh\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"!noSearchInput\" class=\"ion-justify-content-center\">\r\n\r\n      <ion-col size-lg=\"8\" size-md=\"8\" size-sm=\"10\" size-xs=\"12\">\r\n\r\n          <ion-list inset=\"true\" lines=\"none\" style=\"background: #f4f5f8;\">\r\n\r\n              <ion-item *ngFor=\"let job of allJobs\" style=\"margin-bottom: 20px;\">\r\n                <ion-row class=\"job-section\" (click)=\"jobPage(job)\">\r\n\r\n                  <!-- First Row w/ Job Tile, Date posted, and Logo -->\r\n                  <ion-col size=\"2\">\r\n                    <div style=\"height: 40px; width: 40px; background: lightblue;\"></div>\r\n                  </ion-col>\r\n                  <ion-col size=\"7\">\r\n                    <h5 style=\"font-weight: 900;\">{{job.title}}</h5>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <h5 style=\"font-size: 10px; opacity: 0.7;\">Posted: {{job.dateCreated}}</h5>\r\n                  </ion-col>\r\n\r\n                  <!-- Second Row w/ Company Name -->\r\n                  <ion-col style=\"position: relative; top: -20px\" size=\"2\">\r\n                  </ion-col>\r\n                  <ion-col style=\"position: relative; top: -20px\" size=\"7\">\r\n                    {{job.companyName}}\r\n                  </ion-col>\r\n                  <ion-col style=\"position: relative; top: -20px\" size=\"3\">\r\n                  </ion-col>\r\n\r\n                  <!-- Third Row w/ Job Summary -->\r\n                  <ion-col style=\"position: relative; top: -30px\" size=\"2\">\r\n                  </ion-col>\r\n                  <ion-col style=\"position: relative; top: -30px\" size=\"7\">\r\n                    {{job.summary}}\r\n                  </ion-col>\r\n                  <ion-col style=\"position: relative; top: -30px\" size=\"3\">\r\n                  </ion-col>\r\n\r\n                  <!-- Fourth Row w/ Favorite Button -->\r\n                  <ion-col size=\"12\" style=\"height: 45px; margin-bottom: 20px;\">\r\n                      <!-- Heart Icon Component holds the state for Favorites -->\r\n                      <app-heart-icon [job]=\"job\"></app-heart-icon>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/heart-icon/heart-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  float: right;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFydC1pY29uL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYXJ0LWljb25cXGhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhcnQtaWNvbi9oZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhcnQtaWNvbi9oZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59IiwiaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTk7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  color: #005191;\n  --background: none;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 5px;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheVxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcam9ic1xcam9icy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2pvYnMvam9icy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBjb2xvcjogIzAwNTE5MTtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLS1oZWlnaHQ6IDYwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcclxuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcclxuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nOiA1cHg7XHJcblxyXG5cclxufVxyXG5cclxuLmpvYi1zZWN0aW9uIHtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmg2LCBwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLS1pb24tYnV0dG9ucyB7XHJcbiAgLS1jb2xvcjogIzg4ODtcclxufSIsImlvbi1idXR0b24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufSJdfQ== */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");








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
                job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: true });
            }
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
    doRefresh(job) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.allJobs = [];
            yield this.jobs.getJobs().subscribe(jobs => {
                this.allJobs = Object.values(jobs);
                this.allJobsLength = this.allJobs.length;
                this.allJobs.reverse();
                this.searching = false;
                // Format Times
                for (const job of this.allJobs) {
                    job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: false });
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
JobsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
], JobsPage.prototype, "searchbar", void 0);
JobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobs.page.scss */ "./src/app/pages/jobs/jobs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"],
        _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
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