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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- Mobile & Tablet -->\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-lg-up\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        Logo\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-searchbar\n        class=\"searchbar\"\n        showCancelButton=\"true\"\n        placeholder=\"Search Job Titles\"\n        (ionChange)=\"filter($event)\"\n        ></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"ion-align-items-center\" size=\"5\">\n          <ion-button (click)=\"onClick()\">\n            <ion-icon style=\"margin-left: 20px;\" src=\"../../../assets/icon/filter-outline.svg\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"favoritesPage()\">\n              <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n            {{favoriteJobsAmount}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\" style=\"margin-top: 50px;\">\n      <ion-col size=\"8\">\n        <ion-searchbar\n        class=\"searchbar\"\n        showCancelButton=\"true\"\n        placeholder=\"Search\"\n        debounce=\"1500\"\n        (ionChange)=\"filter($event)\"\n        ></ion-searchbar>\n\n\n        <ion-button style=\"float: right; position: relative; top: -40px;\" (click)=\"favoritesPage()\">\n          <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n        {{favoriteJobsAmount}}</ion-button>\n\n        <ion-button style=\"float: right; position: relative; top: -40px;\">\n          filter by: title\n          <ion-icon style=\"margin-left: 20px;\" src=\"../../../assets/icon/filter-outline.svg\"></ion-icon>\n        </ion-button>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\">There were no Search results with that name. Please Refresh the page</h6>\n        <ion-button class=\"orange-button\" (click)=\"doRefresh($event)\">\n          Refresh\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"!noSearchInput\" class=\"ion-justify-content-center\">\n\n      <ion-col size-lg=\"8\" size-md=\"8\" size-sm=\"10\" size-xs=\"12\">\n\n          <ion-list inset=\"true\" lines=\"none\" style=\"background: #f4f5f8;\">\n\n              <ion-item *ngFor=\"let job of allJobs\" style=\"margin-bottom: 20px;\">\n                <ion-row class=\"job-section\" (click)=\"jobPage(job)\">\n\n                  <!-- First Row w/ Job Tile, Date posted, and Logo -->\n                  <ion-col size=\"2\">\n                    <div style=\"height: 40px; width: 40px; background: lightblue;\"></div>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <h5 style=\"font-weight: 900;\">{{job.title}}</h5>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                    <h5 style=\"font-size: 10px; opacity: 0.7;\">Posted: {{job.dateCreated}}</h5>\n                  </ion-col>\n\n                  <!-- Second Row w/ Company Name -->\n                  <ion-col style=\"position: relative; top: -20px\" size=\"2\">\n                  </ion-col>\n                  <ion-col style=\"position: relative; top: -20px\" size=\"7\">\n                    {{job.companyName}}\n                  </ion-col>\n                  <ion-col style=\"position: relative; top: -20px\" size=\"3\">\n                  </ion-col>\n\n                  <!-- Third Row w/ Job Summary -->\n                  <ion-col style=\"position: relative; top: -30px\" size=\"2\">\n                  </ion-col>\n                  <ion-col style=\"position: relative; top: -30px\" size=\"7\">\n                    {{job.summary}}\n                  </ion-col>\n                  <ion-col style=\"position: relative; top: -30px\" size=\"3\">\n                  </ion-col>\n\n                  <!-- Fourth Row w/ Favorite Button -->\n                  <ion-col size=\"12\" style=\"height: 45px; margin-bottom: 20px;\">\n                      <!-- Heart Icon Component holds the state for Favorites -->\n                      <app-heart-icon [job]=\"job\"></app-heart-icon>\n                  </ion-col>\n                </ion-row>\n\n              </ion-item>\n            </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  color: #005191;\n  --background: none;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 5px;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2pvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG5cblxufVxuXG4uam9iLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDIzMHB4O1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn0iLCJpb24tYnV0dG9uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDYwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uam9iLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDIzMHB4O1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn0iXX0= */");

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