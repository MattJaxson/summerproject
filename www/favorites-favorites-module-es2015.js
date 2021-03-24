(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "/YSQ":
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.ts ***!
  \********************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./favorites.page.html */ "Hp9O");
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.page.scss */ "lUKi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/favorites.service */ "U8oy");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ "lFXj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










let FavoritesPage = class FavoritesPage {
    constructor(router, favorites, profile, eventEmitterService, location) {
        this.router = router;
        this.favorites = favorites;
        this.profile = profile;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
    }
    ngOnDestroy() {
        // this.favoriteSubs.unsubscribe();
        // this.favorites.favoriteJobs$.unsubscribe();
        this.profileSub.unsubscribe();
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
            // this.favorites.getFavorites(this.userEmail);
        });
        // this.favorites.favoriteJobs$.subscribe(favorites => {
        //   this.favoriteJobs = Object.values(favorites);
        // });
        this.getFavoriteJobs();
    }
    back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/jobs']);
    }
    getFavoriteJobs() {
        // getting all the favorite jobs that the user has on their profile
        this.profileSub = this.profile.getUserDetails().subscribe(data => {
            this.userEmail = data['email'];
            // this.favoriteJobs = data['favoriteJobs']
            // console.log('Favorite Jobs:');
            // console.log(this.favoriteJobs);
            // this.favorites.favoriteJobs$.next(this.favoriteJobs);
            this.favorites.favoriteJobs$.subscribe(favs => {
                console.log(`Favorite Jobs in Service: ${favs}`);
                this.favoriteSubs = this.favorites.getFavorites(this.userEmail).subscribe(favDetails => {
                    this.favoriteJobsObj = favDetails;
                    console.log('Favorite jobs:');
                    console.log(favDetails);
                    if (this.favoriteJobsObj.length == 0) {
                        console.log('wassiup');
                        this.noFavorites = true;
                    }
                    else {
                        this.noFavorites = false;
                    }
                    for (const job of this.favoriteJobsObj) {
                        job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: true });
                    }
                });
            });
        });
    }
    jobPage(job) {
        console.log(job);
        console.log('Going to specific Job Page');
        // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
        console.log(job.name);
    }
    favoriteJobPage() {
        console.log('Going to favorite bad');
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesEventEmitterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"] }
];
FavoritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesEventEmitterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]])
], FavoritesPage);



/***/ }),

/***/ "B9Dp":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.module.ts ***!
  \**********************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "JcAh");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/custom-component.module */ "zAgk");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorites.page */ "/YSQ");








let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__["CustomComponentsModule"]
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_7__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "Hp9O":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/favorites/favorites.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Favorite Jobs</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 5% 0%;\">\n      <ion-col offset=\"2.9\" size=\"2.5\">\n        <h1>Favorite Jobs</h1>\n      </ion-col>\n      <ion-col push=\"2.3\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"11\">\n        <p style=\"margin-top: 54px; font-size: 1.2em;\" *ngIf=\"noFavorites\">You have no favorite jobs.</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" *ngFor=\"let job of favoriteJobsObj\">\n          <!-- First Row w/ Job Tile, Date posted, and Logo -->\n              <ion-col size=\"1\">\n                <div class=\"company-logo\" style=\"height: 40px; width: 40px;\"></div>\n              </ion-col>\n              <ion-col push-xs=\"0.5\" size=\"8.7\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\" >Posted: {{job.dateCreated}}</h5>\n              </ion-col>\n              <ion-col push=\"1\" size=\"1\">\n                <!-- Heart Icon Component holds the state for Favorites -->\n              <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n          <ion-col size=\"12\">\n            <ion-row>\n              <!-- Second Row w/ Job Summary -->\n              <ion-col push=\"0.5\" size=\"10.5\">\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col push=\"0.5\" size=\"10.5\">\n                <ion-button class=\"grey-button ion-float-right\" (click)=\"jobPage(job)\">\n                  Details\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "JcAh":
/*!******************************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "/YSQ");




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ "lUKi":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.job-section {\n  background: white;\n  height: auto;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n  margin-bottom: 50px;\n  padding-bottom: 10px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\n\n#job-details {\n  color: #005191;\n  --background: white;\n  --background-hover: linear-gradient(#0672c4, #00467c);\n  --color-hover: white;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n#favorites-button {\n  opacity: 1;\n  --background: rgba(255,255,255,0.1);\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 70px;\n  height: 40px;\n  font-size: 0.8em;\n  font-weight: 600;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n  padding: 5px;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n  top: -60px;\n}\n\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -31px;\n}\n\n#job-title {\n  font-size: 0.9em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4jam9iLWRldGFpbHMge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNDY3Yyk7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuI2Zhdm9yaXRlcy1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG5cblxufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn1cblxuI2pvYi1zdW1tYXJ5IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM2NjY7XG4gIG9wYWNpdHk6IDAuNztcbiAgdG9wOiAtNjBweDtcbn1cblxuI2NvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMXB4XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1cHhcbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAjam9iLXRpdGxlICB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module-es2015.js.map