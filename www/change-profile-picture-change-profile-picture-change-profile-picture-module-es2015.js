(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-change-profile-picture-change-profile-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Change Profile Picture</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\r\n      <ion-col offset=\"2\" size=\"3.5\">\r\n        <h1>Change Profile Picture</h1>\r\n      </ion-col>\r\n      <ion-col push=\"2.5\" size=\"2\">\r\n        <ion-button class=\"back-button\" (click)=\"back()\">\r\n           Back\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color: #00000044;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\r\n        <h6 class=\"text-header\" style=\"width: unset;\">Please upload a new photo from your gallery, or take a new one with your camera. </h6>\r\n        <div style=\"width: 100px; height: 100px; border-radius: 100px;background: lightgrey; margin: 30px auto;\">\r\n          <img src=\"\" alt=\"Profile Picture\">\r\n        </div>\r\n        <ion-button (click)=\"useCamera()\" class=\"orange-button\" style=\"margin-right: 16px;\">CAMERA</ion-button>\r\n        <ion-button (click)=\"upload()\" class=\"orange-button\">UPLOAD</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ChangeProfilePicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePicturePageRoutingModule", function() { return ChangeProfilePicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-profile-picture.page */ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.ts");




const routes = [
    {
        path: '',
        component: _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ChangeProfilePicturePage"]
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "./src/app/pages/profile/change-profile-picture/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }
];
let ChangeProfilePicturePageRoutingModule = class ChangeProfilePicturePageRoutingModule {
};
ChangeProfilePicturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeProfilePicturePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ChangeProfilePicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePicturePageModule", function() { return ChangeProfilePicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-profile-picture-routing.module */ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture-routing.module.ts");
/* harmony import */ var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-profile-picture.page */ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.ts");







let ChangeProfilePicturePageModule = class ChangeProfilePicturePageModule {
};
ChangeProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeProfilePicturePageRoutingModule"]
        ],
        declarations: [_change_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ChangeProfilePicturePage"]]
    })
], ChangeProfilePicturePageModule);



/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXkgRllGXFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxjaGFuZ2UtcHJvZmlsZS1waWN0dXJlXFxjaGFuZ2UtcHJvZmlsZS1waWN0dXJlXFxjaGFuZ2UtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChangeProfilePicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePicturePage", function() { return ChangeProfilePicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");







let ChangeProfilePicturePage = class ChangeProfilePicturePage {
    constructor(formBuilder, router, auth, profile, activatedRoute, camera) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.profile = profile;
        this.activatedRoute = activatedRoute;
        this.camera = camera;
        this.activeEmail = '';
        this.activePicture = this.profile.profilePicture.getValue();
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home/profile/edit-profile-page']);
    }
    // ADD password input to profile picture
    confirmChangeProfilePicture(newPicture, psssword) {
        this.profile.changeProfilePicture(this.activeEmail, newPicture, psssword);
        // console.log('Going to Change Picture Confirm');
        // this.router.navigate(['/home/profile/change-profile-picture/confirm']);
    }
    // Not finished
    useCamera() {
        let options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            // This is the actual picture
            this.activePicture = window.Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            alert('error ' + JSON.stringify(err));
        });
        console.log("Accessing Phone's Camera to gather Photo");
        // this.router.navigate(['/home/profile/confirm-photo']);
    }
    // Not finished
    upload() {
        console.log("Accessing Phone's File System to gather Photo");
        this.router.navigate(['/home/profile/confirm-photo']);
    }
};
ChangeProfilePicturePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] }
];
ChangeProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-profile-picture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-profile-picture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-profile-picture.page.scss */ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]])
], ChangeProfilePicturePage);



/***/ })

}]);
//# sourceMappingURL=change-profile-picture-change-profile-picture-change-profile-picture-module-es2015.js.map