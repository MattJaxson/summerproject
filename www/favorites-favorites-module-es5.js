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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Favorite Jobs</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n      <ion-item *ngFor=\"let job of favoriteJobs\" >\r\n        <ion-row class=\"job-section\">\r\n          <ion-col size=\"11\" offset=\"0.5\">\r\n              <ion-icon style=\"float: right;\" src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\r\n              <h5>{{job.title}}</h5>\r\n              <h6>{{job.companyName}}</h6>\r\n              <h6 style=\"font-size: 0.8em; opacity: 0.5;\">{{job.summary}}</h6>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n              <h6 style=\"font-size: 0.4em; opacity: 0.5; float: right;\">{{job.posted}}</h6>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n";
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


    var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorites.page */
    "./src/app/pages/jobs/favorites/favorites.page.ts");

    let FavoritesPageModule = class FavoritesPageModule {};
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"]],
      declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MifQ== */";
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


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/favorites.service */
    "./src/app/services/favorites.service.ts");

    let FavoritesPage = class FavoritesPage {
      constructor(favorites) {
        this.favorites = favorites;
      }

      ngOnInit() {
        this.favorites.favoriteJobs$.subscribe(favorites => {
          this.favoriteJobs = Object.values(favorites);
        });
      }

      favoriteJobPage() {
        console.log('Going to favorite bad');
      }

    };

    FavoritesPage.ctorParameters = () => [{
      type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]
    }];

    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/favorites/favorites.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.page.scss */
      "./src/app/pages/jobs/favorites/favorites.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])], FavoritesPage);
    /***/
  }
}]);
//# sourceMappingURL=favorites-favorites-module-es5.js.map