(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-logout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/logout/logout/logout.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/logout/logout/logout.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileLogoutLogoutLogoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\r\n  <ion-toolbar>\r\n    <ion-title>Logout</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center full-page\">\r\n      <ion-col size=\"6\" class=\"white-background padding\">\r\n        <ion-button (click)=\"confirmLogout()\" class=\"orange-button\" style=\"position: relative; top: 40%\">Logout</ion-button>\r\n        <br><br>\r\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">cancel</ion-button>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/logout/logout/logout-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/profile/logout/logout/logout-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: LogoutPageRoutingModule */

  /***/
  function srcAppPagesProfileLogoutLogoutLogoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function () {
      return LogoutPageRoutingModule;
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


    var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logout.page */
    "./src/app/pages/profile/logout/logout/logout.page.ts");

    const routes = [{
      path: '',
      component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }];
    let LogoutPageRoutingModule = class LogoutPageRoutingModule {};
    LogoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LogoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/logout/logout/logout.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/profile/logout/logout/logout.module.ts ***!
    \**************************************************************/

  /*! exports provided: LogoutPageModule */

  /***/
  function srcAppPagesProfileLogoutLogoutLogoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function () {
      return LogoutPageModule;
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


    var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logout-routing.module */
    "./src/app/pages/profile/logout/logout/logout-routing.module.ts");
    /* harmony import */


    var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logout.page */
    "./src/app/pages/profile/logout/logout/logout.page.ts");

    let LogoutPageModule = class LogoutPageModule {};
    LogoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]],
      declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
    })], LogoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/logout/logout/logout.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/profile/logout/logout/logout.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileLogoutLogoutLogoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbG9nb3V0L2xvZ291dC9sb2dvdXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/logout/logout/logout.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/profile/logout/logout/logout.page.ts ***!
    \************************************************************/

  /*! exports provided: LogoutPage */

  /***/
  function srcAppPagesProfileLogoutLogoutLogoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPage", function () {
      return LogoutPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let LogoutPage = class LogoutPage {
      constructor(router, auth, toast, loading, alert) {
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.loading = loading;
        this.alert = alert;
      }

      ngOnInit() {}

      presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            message: 'Logging out...',
            duration: 1000
          });
          yield loading.present();
          const {
            role,
            data
          } = yield loading.onDidDismiss();
          console.log('Loading dismissed!');
        });
      }

      confirmLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = this.toast.create({
            message: 'User has been logged out',
            duration: 3000
          });
          const loading = yield this.loading.create({
            message: 'Logging out...',
            duration: 1000
          });
          const alert = yield this.alert.create({
            message: 'Are you sure you want to logout?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancelling logout');
                this.router.navigate(['/home/profile']);
              }
            }, {
              text: 'Logout',
              handler: () => {
                console.log('Logging out');
                this.auth.logout();
                loading.present();
                toast.then(t => t.present());
              }
            }]
          });
          yield alert.present();
        });
      }

      cancel() {
        console.log('logout cancelled');
        this.router.navigate(['/home/profile']);
      }

    };

    LogoutPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    LogoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/logout/logout/logout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.page.scss */
      "./src/app/pages/profile/logout/logout/logout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], LogoutPage);
    /***/
  }
}]);
//# sourceMappingURL=logout-logout-logout-module-es5.js.map