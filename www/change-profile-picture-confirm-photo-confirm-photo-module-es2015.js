(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-confirm-photo-confirm-photo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Confirm Photo</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        Cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.5\" size=\"2.5\">\n        <h1>Confirm Photo</h1>\n      </ion-col>\n      <ion-col push=\"2.8\" size=\"2\">\n        <ion-button class=\"back-button\" (click)=\"cancel()\">\n           Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" id=\"main-content-col\">\n        <div style=\"width: 100px; height: 100px; border-radius: 100px;background: lightgrey; margin: 30px auto 0px;\">\n          New picture goes here\n        </div>\n        <h6 class=\"text-header\">Are you sure you want to use this photo?</h6>\n        <ion-button (click)=\"uploadPhoto()\" class=\"orange-button\" id=\"next-button\" style=\"margin-right:16px;\">YES</ion-button>\n        <ion-button (click)=\"takeAnotherPhoto()\" class=\"orange-button\" id=\"next-button\">TAKE ANOTHER PHOTO</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  margin: 0;\n}\n\nh6.text-header {\n  font-size: 1.3em;\n  margin: 30px auto;\n  padding: unset;\n}\n\n.orange-button {\n  width: unset;\n}\n\n@media screen and (max-width: 384px) {\n  #main-content-col ion-button:last-child {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NvbmZpcm0tcGhvdG8vY29uZmlybS1waG90by5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jb25maXJtLXBob3RvL2NvbmZpcm0tcGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksZ0JBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NvbmZpcm0tcGhvdG8vY29uZmlybS1waG90by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDYudGV4dC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgcGFkZGluZzogdW5zZXQ7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgICB3aWR0aDogdW5zZXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gICAgI21haW4tY29udGVudC1jb2wgaW9uLWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oNi50ZXh0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBwYWRkaW5nOiB1bnNldDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gICNtYWluLWNvbnRlbnQtY29sIGlvbi1idXR0b246bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufSJdfQ== */"

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
        console.error("TODO: takeAnotherPhoto() not implemented yet");
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
        template: __webpack_require__(/*! raw-loader!./confirm-photo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html"),
        styles: [__webpack_require__(/*! ./confirm-photo.page.scss */ "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ConfirmPhotoPage);



/***/ })

}]);
//# sourceMappingURL=change-profile-picture-confirm-photo-confirm-photo-module-es2015.js.map