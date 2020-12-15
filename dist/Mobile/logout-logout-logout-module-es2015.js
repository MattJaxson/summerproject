(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-logout-module"],{

/***/ "GWPF":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.module.ts ***!
  \**************************************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout-routing.module */ "QZbg");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "lK87");







let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
    })
], LogoutPageModule);



/***/ }),

/***/ "OJlL":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "QZbg":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LogoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function() { return LogoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.page */ "lK87");




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogoutPageRoutingModule);



/***/ }),

/***/ "lK87":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.page.ts ***!
  \************************************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout.page.html */ "p6QD");
/* harmony import */ var _logout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.page.scss */ "OJlL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let LogoutPage = class LogoutPage {
    constructor(router, auth, toast, loading, alert) {
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.loading = loading;
        this.alert = alert;
    }
    ngOnInit() {
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Logging out...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    confirmLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling logout');
                            this.router.navigate(['/home/profile']);
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            console.log('Logging out');
                            this.auth.logout();
                            loading.present();
                            toast.then(t => t.present());
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('logout cancelled');
        this.router.navigate(['/home/profile']);
    }
};
LogoutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], LogoutPage);



/***/ }),

/***/ "p6QD":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/logout/logout/logout.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-title>Logout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center full-page\">\n      <ion-col size=\"6\" class=\"white-background padding\">\n        <ion-button (click)=\"confirmLogout()\" class=\"orange-button\" style=\"position: relative; top: 40%\">Logout</ion-button>\n        <br><br>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">cancel</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=logout-logout-logout-module-es2015.js.map