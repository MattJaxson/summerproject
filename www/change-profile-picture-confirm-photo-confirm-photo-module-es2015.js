(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-confirm-photo-confirm-photo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm-photo</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div style=\"width: 100px; height: 100px; border-radius: 100px;background: lightgrey; margin: 0 auto; margin-top: 30px;\">\n        new picture goes here\n      </div>\n      <p>Are you sure you want to use this photo? </p>\n</ion-content>\n<button (click)=\"uploadPhoto()\" id=\"next-button\">YES</button>\n<button (click)=\"takeAnotherPhoto()\" id=\"next-button\">TAKE ANOTHER PHOTO</button>\n");

/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ConfirmPhotoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPhotoPageRoutingModule", function() { return ConfirmPhotoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-photo.page */ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_photo_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPhotoPage"]
    }
];
let ConfirmPhotoPageRoutingModule = class ConfirmPhotoPageRoutingModule {
};
ConfirmPhotoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPhotoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ConfirmPhotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPhotoPageModule", function() { return ConfirmPhotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-photo-routing.module */ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo-routing.module.ts");
/* harmony import */ var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-photo.page */ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.ts");







let ConfirmPhotoPageModule = class ConfirmPhotoPageModule {
};
ConfirmPhotoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPhotoPageRoutingModule"]
        ],
        declarations: [_confirm_photo_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPhotoPage"]]
    })
], ConfirmPhotoPageModule);



/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jb25maXJtLXBob3RvL2NvbmZpcm0tcGhvdG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfirmPhotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPhotoPage", function() { return ConfirmPhotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ConfirmPhotoPage = class ConfirmPhotoPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    uploadPhoto() {
        console.log('User has successfully uploaded photo from their phones camera');
        this.router.navigate(['/home/profile/change-profile-picture/confirm']);
    }
    takeAnotherPhoto() {
        //  Access Gallery
        //  Replace last photo taken with another photo
    }
    cancel() {
        console.log('change photo cancelled');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPhotoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConfirmPhotoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-photo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-photo.page.scss */ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ConfirmPhotoPage);



/***/ })

}]);
//# sourceMappingURL=change-profile-picture-confirm-photo-confirm-photo-module-es2015.js.map