(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/favorites/favorites.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/favorites/favorites.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsFavoritesFavoritesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Favorite Jobs</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 5% 0%;\">\n    <ion-col offset=\"2.5\" size=\"2.5\">\n      <h1>Favorite Jobs</h1>\n    </ion-col>\n    <ion-col push=\"2.5\" size=\"2\">\n      <ion-button class=\"back-button\" (click)=\"back()\">\n         Back\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  \n  <ion-list>\n    <ion-item *ngFor=\"let job of favoriteJobsObj\">\n      <ion-row class=\"job-section\" (click)=\"jobPage(job)\">\n        <!-- First Row w/ Job Tile, Date posted, and Logo -->\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"2\">\n              <div class=\"company-logo\" style=\"height: 40px; width: 40px;\"></div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <h5 style=\"font-weight: 900;\">{{job.title}}</h5>\n            </ion-col>\n            <ion-col size=\"3\">\n              <h5 style=\"font-size: 10px; opacity: 0.7;\">Posted: {{job.dateCreated}}</h5>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <!-- Second Row w/ Company Name -->\n            <ion-col style=\"position: relative; top: -20px\" size=\"2\">\n            </ion-col>\n            <ion-col style=\"position: relative; top: -20px\" size=\"7\">\n              {{job.companyName}}\n            </ion-col>\n            <ion-col style=\"position: relative; top: -20px\" size=\"3\">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <!-- Third Row w/ Job Summary -->\n            <ion-col style=\"position: relative; top: -30px\" size=\"2\">\n            </ion-col>\n            <ion-col style=\"position: relative; top: -30px\" size=\"7\">\n              {{job.summary}}\n            </ion-col>\n            <ion-col style=\"position: relative; top: -30px\" size=\"3\">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n      </ion-row>\n      <!-- Fourth Row w/ Favorite Button -->\n      <ion-row>\n        <ion-col size=\"12\" style=\"height: 45px; margin-bottom: 20px;\">\n            <!-- Heart Icon Component holds the state for Favorites -->\n            <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n        </ion-col>\n      </ion-row>\n      <!-- Old UI -->\n      <!-- <ion-row class=\"job-section\">\n        <ion-col size=\"11\" offset=\"0.5\">\n            <ion-icon style=\"float: right;\" src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n            <h5>{{job.title}}</h5>\n            <h6>{{job.companyName}}</h6>\n            <h6 style=\"font-size: 0.8em; opacity: 0.5;\">{{job.summary}}</h6>\n        </ion-col>\n        <ion-col size=\"2\">\n            <h6 style=\"font-size: 0.4em; opacity: 0.5; float: right;\">{{job.posted}}</h6>\n        </ion-col>\n      </ion-row> -->\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/jobs/favorites/favorites-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/jobs/favorites/favorites-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: FavoritesPageRoutingModule */

  /***/
  function srcAppPagesJobsFavoritesFavoritesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function () {
      return FavoritesPageRoutingModule;
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


    var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorites.page */
    "./src/app/pages/jobs/favorites/favorites.page.ts");

    const routes = [{
      path: '',
      component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }];
    let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {};
    FavoritesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoritesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/favorites/favorites.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/jobs/favorites/favorites.module.ts ***!
    \**********************************************************/

  /*! exports provided: FavoritesPageModule */

  /***/
  function srcAppPagesJobsFavoritesFavoritesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function () {
      return FavoritesPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favorites-routing.module */
    "./src/app/pages/jobs/favorites/favorites-routing.module.ts");
    /* harmony import */


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _favorites_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./favorites.page */
    "./src/app/pages/jobs/favorites/favorites.page.ts");

    let FavoritesPageModule = class FavoritesPageModule {};
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__["CustomComponentsModule"]],
      declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_7__["FavoritesPage"]]
    })], FavoritesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/favorites/favorites.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/jobs/favorites/favorites.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobsFavoritesFavoritesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.job-section {\n  height: 250px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9icy9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2pvdXJuaS1sb2dvLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBjb2xvcjogIzc3NztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2pvdXJuaS1sb2dvLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/jobs/favorites/favorites.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/jobs/favorites/favorites.page.ts ***!
    \********************************************************/

  /*! exports provided: FavoritesPage */

  /***/
  function srcAppPagesJobsFavoritesFavoritesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPage", function () {
      return FavoritesPage;
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


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/emitters/favorites-event-emitter.service */
    "./src/app/emitters/favorites-event-emitter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let FavoritesPage = class FavoritesPage {
      constructor(router, favorites, profile, eventEmitterService, location) {
        this.router = router;
        this.favorites = favorites;
        this.profile = profile;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
      }

      ngOnInit() {
        this.location.onPopState(() => {
          this.eventEmitterService.onBackAction();
        }); // this.favorites.favoriteJobs$.subscribe(favorites => {
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
        this.profile.getUserDetails().subscribe(data => {
          this.userEmail = data['email'];
          this.favoriteJobs = data['favoriteJobs'];
          console.log('Favorite Jobs:');
          console.log(this.favoriteJobs);
          this.favorites.favoriteJobs$.next(this.favoriteJobs);
          this.favorites.favoriteJobs$.subscribe(favs => {
            console.log("Favorite Jobs in Service: ".concat(favs));
            this.favorites.getFavorites(this.userEmail).subscribe(favDetails => {
              this.favoriteJobsObj = favDetails;

              for (const job of this.favoriteJobsObj) {
                job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["formatDistanceToNow"])(new Date(job.dateCreated), {
                  addSuffix: true
                });
              }
            });
          });
        });
      }

      jobPage(job) {
        console.log(job);
        console.log('Going to specific Job Page'); // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length

        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
        console.log(job.name);
      }

      favoriteJobPage() {
        console.log('Going to favorite bad');
      }

    };

    FavoritesPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesEventEmitterService"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
    }];

    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/favorites/favorites.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.page.scss */
      "./src/app/pages/jobs/favorites/favorites.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesEventEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]])], FavoritesPage);
    /***/
  }
}]);
//# sourceMappingURL=favorites-favorites-module-es5.js.map