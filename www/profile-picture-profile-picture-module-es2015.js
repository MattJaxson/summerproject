(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-picture-profile-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <ion-grid style=\"margin-top: 10%;\">\r\n    <ion-row>\r\n\r\n      <!-- Mobile -->\r\n      <ion-col class=\"ion-hide-md-up\" size-md=\"6\" offset-md=\"3\">\r\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions '.png', '.jpg', and '.jpeg' are allowed. </h6>\r\n\r\n        <div id=\"img-wrapper\">\r\n          <img src=\"{{profilePicture}}\" alt=\"\">\r\n        </div>\r\n\r\n        <ion-button type=\"file\" class=\"camera-button\"  (click)=\"selectImage()\">\r\n          Get Picture\r\n        </ion-button>\r\n\r\n        <ion-button class=\"skip-button\"  (click)=\"skip()\">\r\n          Skip\r\n        </ion-button>\r\n\r\n        <input (click)=\"goToUploadResumePage()\" class=\"orange-button\" type=\"submit\" value=\"Upload Picture\"><br>\r\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n            cancel\r\n          </ion-button>\r\n      </ion-col>\r\n\r\n      <!-- Desktop -->\r\n      <ion-col class=\"ion-hide-md-down\" size-lg=\"6\" offset-lg=\"3\">\r\n        <input (change)=\"onImagePicked($event)\" placeholder=\"Upload Image\"\r\n        type=\"file\" /><br>\r\n        <button (click)=\"onImageUpload()\">Upload Image</button>\r\n\r\n         <div *ngIf=\"imageUrl\">\r\n          Preview Image from AWS\r\n          <br />\r\n          <img width=\"200px\" src=\"https://YOUR S3 BUCKET\r\n          NAME.s3.amazonaws.com/{{\r\n          imageUrl }}\"\r\n          />\r\n         </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <!-- <ion-input\r\n    (change)=\"onChange($event)\"\r\n    class=\"camera-button\"\r\n    type=\"file\"\r\n    name=\"picture\"\r\n    enctype=\"multipart/form-data\"></ion-input> -->\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfilePicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageRoutingModule", function() { return ProfilePicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-picture.page */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts");




const routes = [
    {
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePage"]
    },
    {
        path: 'upload-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | upload-resume-upload-resume-module */ "upload-resume-upload-resume-module").then(__webpack_require__.bind(null, /*! ../upload-resume/upload-resume.module */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts")).then(m => m.UploadResumePageModule)
    },
];
let ProfilePicturePageRoutingModule = class ProfilePicturePageRoutingModule {
};
ProfilePicturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePicturePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfilePicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function() { return ProfilePicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-picture-routing.module */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-picture.page */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts");







let ProfilePicturePageModule = class ProfilePicturePageModule {
};
ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"]
        ],
        declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
    })
], ProfilePicturePageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 0.8em;\n}\n\n#cancel-button {\n  --background: none;\n  --color: red;\n  --opacity: 0.3;\n  --box-shadow:none;\n  --color-activated: lightgray;\n  --background-hover: none;\n  font-size: 0.7em;\n}\n\n.camera-button {\n  display: block;\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: #005191;\n  border: #005191 1px solid;\n  padding: 10px;\n}\n\ninput[type=submit] {\n  background: #FFB351;\n  border-radius: 5px;\n  color: #005191;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: lightgray;\n  --border-color: lightgray;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 100px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXHNpZ24tdXBcXHByb2ZpbGUtcGljdHVyZVxccHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV4dC1idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4udGV4dC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbiNjYW5jZWwtYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgLS1jb2xvcjogcmVkO1xyXG4gIC0tb3BhY2l0eTogMC4zO1xyXG4gIC0tYm94LXNoYWRvdzpub25lO1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiBsaWdodGdyYXk7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5jYW1lcmEtYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLS1jb2xvcjogIzAwNTE5MTtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJvcmRlci1jb2xvcjojMDA1MTkxO1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgY29sb3I6ICMwMDUxOTE7XHJcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQ6ICNGRkIzNTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG59XHJcblxyXG4jaW1nLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4uc2tpcC1idXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcclxuICAtLWJvcmRlci13aWR0aCA6IDFweDtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59IiwiI25leHQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbiNjYW5jZWwtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWNvbG9yOiByZWQ7XG4gIC0tb3BhY2l0eTogMC4zO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IGxpZ2h0Z3JheTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uY2FtZXJhLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQ6ICNGRkIzNTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbiNpbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5za2lwLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyOiAxcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts ***!
  \****************************************************************************/
/*! exports provided: ProfilePicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePage", function() { return ProfilePicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");













let ProfilePicturePage = class ProfilePicturePage {
    constructor(router, alertController, photo, auth, camera, file, http, actionSheet, loading, platform, ref, filePath, storage, webView, toast) {
        this.router = router;
        this.alertController = alertController;
        this.photo = photo;
        this.auth = auth;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.actionSheet = actionSheet;
        this.loading = loading;
        this.platform = platform;
        this.ref = ref;
        this.filePath = filePath;
        this.storage = storage;
        this.webView = webView;
        this.toast = toast;
        // Options for Cordova Camera plugin
        this.options = {
            targetWidth: 384,
            targetHeight: 384,
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].url;
    }
    ngOnInit() {
    }
    onImagePicked(event) {
        const FILE = event.target.files[0];
        this.imageObj = FILE;
    }
    onImageUpload() {
        const imageForm = new FormData();
        imageForm.append('image', this.imageObj);
        this.photo.imageUpload(imageForm).subscribe(res => {
            this.imageUrl = res['image'];
        });
    }
    // setProfilePhoto(name, sourceType): Promise<any> {
    // return new Promise((resolve, reject) => {
    // this.options.sourceType = sourceType;
    // this.camera.getPicture(this.options)
    // .then((res) => {
    // let base64Image = 'data:image/jpeg;base64,' + res;
    // resolve(base64Image);
    // })
    // .catch((err) => {
    // reject(err);
    // });
    // });
    // }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheet.create({
                header: 'Select Image source',
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Get IMAGE PATH from Camera
            const imagePath = yield this.camera.getPicture(this.options);
            // tslint:disable-next-line: max-line-length
            // Given the IMAGE PATH from the Camera, find the path, get the file from the FileEntry, and use the FileReader on the file object to get raw data from the file.
            const imageFile = yield this.photo.getSingleFile(imagePath);
            // console.log(imageFile.name);
            // console.log('Image File');
            // console.log(imageFile);
            // to show profile picture on the webview in a format it can understand.
            // this.profilePictureWebView = (window as any).Ionic.WebView.convertFileSrc(imagePath);
            // console.log(this.profilePictureWebView);
            // this.profilePicture = imageFile;
            // resize image file with sharp
            this.auth.modifyProfilePicture(imagePath).subscribe(data => {
                console.log('Pic Data');
                console.log(data);
            });
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webView.convertFileSrc(img);
            return converted;
        }
    }
    goToUploadResumePage() {
        console.log('Going to Resume Page >>');
        this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Skip',
                message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
                buttons: [
                    {
                        text: 'Skip',
                        handler: () => {
                            this.router.navigate(['/personal-info/profile-picture/upload-resume']);
                            console.log('Skipping Profile Picture...');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling Profile Picture Upload Skip...');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentAlert();
        // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
};
ProfilePicturePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_11__["PhotoService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-picture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-picture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-picture.page.scss */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _services_photo_service__WEBPACK_IMPORTED_MODULE_11__["PhotoService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], ProfilePicturePage);



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




let PhotoService = class PhotoService {
    constructor(ionicFileService, http) {
        this.ionicFileService = ionicFileService;
        this.http = http;
    }
    getSingleFile(filePath) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Get FileEntry from image path
            const fileEntry = yield this.ionicFileService.resolveLocalFilesystemUrl(filePath);
            // console.log('This is the fileEntry path: ' + JSON.stringify(fileEntry));
            // Get File from FileEntry. Again note that this file does not contain the actual file data yet.
            const cordovaFile = yield this.convertFileEntryToCordovaFile(fileEntry);
            // console.log('This is the cordova file: ' + JSON.stringify(cordovaFile));
            // Use FileReader on the File object to populate it with the true file contents.
            return this.convertCordovaFileToJavascriptFile(cordovaFile);
        });
    }
    convertFileEntryToCordovaFile(fileEntry) {
        return new Promise((resolve, reject) => {
            fileEntry.file(resolve, reject);
        });
    }
    convertCordovaFileToJavascriptFile(cordovaFile) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.error) {
                    reject(reader.error);
                }
                else {
                    const blob = new Blob([reader.result], { type: cordovaFile.type });
                    blob.lastModifiedDate = new Date();
                    blob.name = cordovaFile.name;
                    // console.log('blob: ' + JSON.stringify(blob));
                    resolve(blob);
                }
            };
            reader.readAsArrayBuffer(cordovaFile);
            // console.log(JSON.stringify('reader: ' + JSON.stringify(reader)));
        });
    }
    // Testing
    imageUpload(imageForm) {
        console.log('image uploading');
        return this.http.post('http://10.0.1.16:3000/api/photo/upload-profile-picture', imageForm);
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PhotoService);



/***/ })

}]);
//# sourceMappingURL=profile-picture-profile-picture-module-es2015.js.map