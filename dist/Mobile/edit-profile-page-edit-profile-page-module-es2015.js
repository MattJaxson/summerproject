(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-page-edit-profile-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-title slot=\"end\">Edit Profile</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header - Edit Profile Head w./ Back Button -->\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"3\" size=\"2\">\n        <h1>Edit Profile</h1>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" push=\"2.1\" size=\"2\">\n        <ion-button class=\"blue-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile -->\n    <ion-row class=\"ion-justify-content-center ion-hide-lg-up\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n          <ion-list>\n              <ion-item detail=\"true\" lines=\"none\" (click)=\"changeEmail()\">\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                <ion-label>Change Email</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeAbout()\">\n                <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n                <ion-label>Change About Description</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePassword()\">\n                <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n                <ion-label>Change Password</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePhoneNumber()\">\n                <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n                <ion-label>Change Phone Number</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeSchool()\">\n                <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n                <ion-label>Change School/Grade</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeProfilePicture()\">\n                <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n                <ion-label>Change Profile Picture</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"updateResume()\">\n                <ion-icon name=\"document\" slot=\"start\"></ion-icon>\n                <ion-label>View/Update Resume</ion-label>\n              </ion-item >\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"logout()\">\n                <ion-icon name=\"arrow-round-back\" color=\"danger\" slot=\"start\"></ion-icon>\n                <ion-label>Logout</ion-label>\n              </ion-item>\n            </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <!-- Desktop -->\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col class=\"edit-profile-desktop\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"10\">\n              <ion-list>\n                <ion-item detail=\"true\" lines=\"none\" (click)=\"changeEmail()\">\n                  <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                  <ion-label>Change Email</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeAbout()\">\n                  <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n                  <ion-label>Change About Description</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePassword()\">\n                  <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n                  <ion-label>Change Password</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeSchool()\">\n                  <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n                  <ion-label>Change School/Grade</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeProfilePicture()\">\n                  <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n                  <ion-label>Change Profile Picture</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"updateResume()\">\n                  <ion-icon name=\"document\" slot=\"start\"></ion-icon>\n                  <ion-label>View/Update Resume</ion-label>\n                </ion-item >\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"logout()\">\n                  <ion-icon name=\"arrow-round-back\" color=\"danger\" slot=\"start\"></ion-icon>\n                  <ion-label>Logout</ion-label>\n                </ion-item>\n            </ion-list>\n            </ion-col>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EditProfilePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePagePageRoutingModule", function() { return EditProfilePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile-page.page */ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePagePage"]
    }
];
let EditProfilePagePageRoutingModule = class EditProfilePagePageRoutingModule {
};
EditProfilePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EditProfilePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePagePageModule", function() { return EditProfilePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-page-routing.module */ "./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts");
/* harmony import */ var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile-page.page */ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts");







let EditProfilePagePageModule = class EditProfilePagePageModule {
};
EditProfilePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePagePageRoutingModule"]
        ],
        declarations: [_edit_profile_page_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePagePage"]]
    })
], EditProfilePagePageModule);



/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\nion-item {\n  --min-height: 65px;\n  opacity: 0;\n  -webkit-animation: item-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: item-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  cursor: pointer;\n}\n\nion-item ion-icon {\n  color: #005191;\n  font-size: 1.4em;\n}\n\nion-item ion-label {\n  font-size: 1.2em;\n  color: #555;\n}\n\nion-item:nth-child(1) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\nion-item:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n\nion-item:nth-child(3) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n\nion-item:nth-child(4) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\nion-item:nth-child(5) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\nion-item:nth-child(6) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\nion-item:nth-child(7) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n\nion-item:nth-child(8) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\nion-title {\n  margin: 0;\n}\n\n.edit-profile-desktop {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px 0 20px 0;\n  margin-bottom: 100px;\n}\n\n@-webkit-keyframes item-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes item-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUtcGFnZS9lZGl0LXByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlLXBhZ2UvZWRpdC1wcm9maWxlLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUZBQUE7VUFBQSxpRkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDREY7O0FER0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQUY7O0FERUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDSUY7O0FERkE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDS0Y7O0FESEE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDTUY7O0FESEE7RUFDRSxTQUFBO0FDTUY7O0FESEE7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNNRjs7QURIQTtFQUNFO0lBQ0UsNEJBQUE7RUNNRjtFREhBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDS0Y7QUFDRjs7QURiQTtFQUNFO0lBQ0UsNEJBQUE7RUNNRjtFREhBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlLXBhZ2UvZWRpdC1wcm9maWxlLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC43cztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZWRpdC1wcm9maWxlLWRlc2t0b3Age1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuQGtleWZyYW1lcyBpdGVtLXNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG5cbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbiIsIi5ibHVlLWJ1dHRvbiB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA2NXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzU1NTtcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbmlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVkaXQtcHJvZmlsZS1kZXNrdG9wIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbkBrZXlmcmFtZXMgaXRlbS1zbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfilePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePagePage", function() { return EditProfilePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let EditProfilePagePage = class EditProfilePagePage {
    constructor(auth, profile, storage, router, toastController) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toastController = toastController;
        this.userObject = {
            fullName: '',
            about: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: ''
        };
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
    changeEmail() {
        console.log('Navigating to Change Email Page');
        this.router.navigate(['/home/profile/change-email']);
    }
    changeAbout() {
        console.log('Navigating to Change About Page');
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/profile/change-about/', this.userObject.about]);
    }
    changePassword() {
        console.log('Navigating to Change Password Page');
        this.router.navigate(['/home/profile/change-password']);
    }
    changePhoneNumber() {
        console.log('Navigating to Change Phone Number Page');
        this.router.navigate(['/home/profile/change-phone', this.userObject.phone]);
    }
    changeSchool() {
        console.log('Navigating to Change School Page');
        this.router.navigate(['/home/profile/change-school', this.userObject.school, this.userObject.grade]);
    }
    changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }
    updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    logout() {
        this.router.navigate(['/home/profile/logout']);
    }
};
EditProfilePagePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
EditProfilePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile-page.page.scss */ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], EditProfilePagePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-page-edit-profile-page-module-es2015.js.map