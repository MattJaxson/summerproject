(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-logout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/logout/logout/logout.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/logout/logout/logout.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-title>Logout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center full-page\">\n      <ion-col size=\"6\" class=\"white-background padding\">\n        <ion-button (click)=\"confirmLogout()\" class=\"orange-button\" style=\"position: relative; top: 40%\">Logout</ion-button>\n        <br><br>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">cancel</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/profile/logout/logout/logout-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LogoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function() { return LogoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.page */ "./src/app/pages/profile/logout/logout/logout.page.ts");




var routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }
];
var LogoutPageRoutingModule = /** @class */ (function () {
    function LogoutPageRoutingModule() {
    }
    LogoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LogoutPageRoutingModule);
    return LogoutPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/logout/logout/logout.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.module.ts ***!
  \**************************************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout-routing.module */ "./src/app/pages/profile/logout/logout/logout-routing.module.ts");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "./src/app/pages/profile/logout/logout/logout.page.ts");







var LogoutPageModule = /** @class */ (function () {
    function LogoutPageModule() {
    }
    LogoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
    return LogoutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/logout/logout/logout.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbG9nb3V0L2xvZ291dC9sb2dvdXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/logout/logout/logout.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.page.ts ***!
  \************************************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LogoutPage = /** @class */ (function () {
    function LogoutPage(router, auth, toast, loading, alert) {
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.loading = loading;
        this.alert = alert;
    }
    LogoutPage.prototype.ngOnInit = function () {
    };
    LogoutPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            message: 'Logging out...',
                            duration: 1000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoutPage.prototype.confirmLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, loading, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toast = this.toast.create({
                            message: 'User has been logged out',
                            duration: 3000
                        });
                        return [4 /*yield*/, this.loading.create({
                                message: 'Logging out...',
                                duration: 1000
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.alert.create({
                                message: 'Are you sure you want to logout?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancelling logout');
                                            _this.router.navigate(['/home/profile']);
                                        }
                                    },
                                    {
                                        text: 'Logout',
                                        handler: function () {
                                            console.log('Logging out');
                                            _this.auth.logout();
                                            loading.present();
                                            toast.then(function (t) { return t.present(); });
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoutPage.prototype.cancel = function () {
        console.log('logout cancelled');
        this.router.navigate(['/home/profile']);
    };
    LogoutPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    LogoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/logout/logout/logout.page.html"),
            styles: [__webpack_require__(/*! ./logout.page.scss */ "./src/app/pages/profile/logout/logout/logout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], LogoutPage);
    return LogoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=logout-logout-logout-module-es5.js.map