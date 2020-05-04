(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-picture-profile-picture-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSignUpProfilePictureProfilePicturePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <ion-grid style=\"margin-top: 10%;\">\r\n    <ion-row>\r\n\r\n      <!-- Inputs for Phone -->\r\n      <ion-col class=\"ion-hide-md-up\" size-md=\"6\" offset-md=\"3\">\r\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions '.png', '.jpg', and '.jpeg' are allowed. </h6>\r\n\r\n        <div id=\"img-wrapper\">\r\n          <img src=\"{{profilePicture}}\" alt=\"\">\r\n        </div>\r\n\r\n        <ion-button class=\"camera-button\"  (click)=\"selectImage()\">\r\n          Get Picture\r\n        </ion-button>\r\n\r\n        <ion-button class=\"skip-button\"  (click)=\"skip()\">\r\n          Skip\r\n        </ion-button>\r\n\r\n        <input (click)=\"goToUploadResumePage()\" class=\"orange-button\" type=\"submit\" value=\"Upload Picture\"><br>\r\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n            cancel\r\n          </ion-button>\r\n      </ion-col>\r\n\r\n      <!-- Inputs for Web Browser -->\r\n      <ion-col class=\"ion-hide-md-down\" size-lg=\"6\" offset-lg=\"3\">\r\n        <p>For Web Browser</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <!-- <ion-input\r\n    (change)=\"onChange($event)\"\r\n    class=\"camera-button\"\r\n    type=\"file\"\r\n    name=\"picture\"\r\n    enctype=\"multipart/form-data\"></ion-input> -->\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProfilePicturePageRoutingModule */

  /***/
  function srcAppPagesAuthSignUpProfilePictureProfilePictureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePicturePageRoutingModule", function () {
      return ProfilePicturePageRoutingModule;
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


    var _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-picture.page */
    "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts");

    const routes = [{
      path: '',
      component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePage"]
    }, {
      path: 'upload-resume',
      loadChildren: () => __webpack_require__.e(
      /*! import() | upload-resume-upload-resume-module */
      "upload-resume-upload-resume-module").then(__webpack_require__.bind(null,
      /*! ../upload-resume/upload-resume.module */
      "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts")).then(m => m.UploadResumePageModule)
    }];
    let ProfilePicturePageRoutingModule = class ProfilePicturePageRoutingModule {};
    ProfilePicturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePicturePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ProfilePicturePageModule */

  /***/
  function srcAppPagesAuthSignUpProfilePictureProfilePictureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function () {
      return ProfilePicturePageModule;
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


    var _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-picture-routing.module */
    "./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts");
    /* harmony import */


    var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-picture.page */
    "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts");

    let ProfilePicturePageModule = class ProfilePicturePageModule {};
    ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"]],
      declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
    })], ProfilePicturePageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthSignUpProfilePictureProfilePicturePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 0.8em;\n}\n\n#cancel-button {\n  --background: none;\n  --color: red;\n  --opacity: 0.3;\n  --box-shadow:none;\n  --color-activated: lightgray;\n  --background-hover: none;\n  font-size: 0.7em;\n}\n\n.camera-button {\n  display: block;\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: #005191;\n  border: #005191 1px solid;\n  padding: 10px;\n}\n\ninput[type=submit] {\n  background: #FFB351;\n  border-radius: 5px;\n  color: #005191;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: lightgray;\n  --border-color: lightgray;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 100px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheVxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcc2lnbi11cFxccHJvZmlsZS1waWN0dXJlXFxwcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9wcm9maWxlLXBpY3R1cmUvcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuZXh0LWJ1dHRvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi50ZXh0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuI2NhbmNlbC1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWNvbG9yOiByZWQ7XHJcbiAgLS1vcGFjaXR5OiAwLjM7XHJcbiAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IGxpZ2h0Z3JheTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmNhbWVyYS1idXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWZpbGVdIHtcclxuICBjb2xvcjogIzAwNTE5MTtcclxuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZDogI0ZGQjM1MTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICMwMDUxOTE7XHJcbn1cclxuXHJcbiNpbWctd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi5za2lwLWJ1dHRvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAtLWJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG4gIC0tYm9yZGVyLXdpZHRoIDogMXB4O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXI6IDFweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn0iLCIjbmV4dC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuI2NhbmNlbC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6IHJlZDtcbiAgLS1vcGFjaXR5OiAwLjM7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogbGlnaHRncmF5O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5jYW1lcmEtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgYm9yZGVyOiAxcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuI2ltZy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLnNraXAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts ***!
    \****************************************************************************/

  /*! exports provided: ProfilePicturePage */

  /***/
  function srcAppPagesAuthSignUpProfilePictureProfilePicturePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePicturePage", function () {
      return ProfilePicturePage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");

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
        this.toast = toast; // Options for Cordova Camera plugin

        this.options = {
          targetWidth: 384,
          targetHeight: 384,
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
        };
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].url;
      }

      ngOnInit() {} // setProfilePhoto(name, sourceType): Promise<any> {
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
            }, {
              text: 'Use Camera',
              handler: () => {
                this.takePicture(this.camera.PictureSourceType.CAMERA);
              }
            }, {
              text: 'Cancel',
              role: 'cancel'
            }]
          });
          yield actionSheet.present();
        });
      }

      takePicture(sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Get IMAGE PATH from Camera
          const imagePath = yield this.camera.getPicture(this.options); // tslint:disable-next-line: max-line-length
          // Given the IMAGE PATH from the Camera, find the path, get the file from the FileEntry, and use the FileReader on the file object to get raw data from the file.

          const imageFile = yield this.photo.getSingleFile(imagePath); // console.log(imageFile.name);
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
        } else {
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
            buttons: [{
              text: 'Skip',
              handler: () => {
                this.router.navigate(['/personal-info/profile-picture/upload-resume']);
                console.log('Skipping Profile Picture...');
              }
            }, {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancelling Profile Picture Upload Skip...');
              }
            }]
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
        this.presentAlert(); // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
      }

      cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
      }

    };

    ProfilePicturePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }, {
      type: _services_photo_service__WEBPACK_IMPORTED_MODULE_11__["PhotoService"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
    }, {
      type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
    }, {
      type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
    }, {
      type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
    }, {
      type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }];

    ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-picture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-picture.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html")).default,
      providers: [],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-picture.page.scss */
      "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_photo_service__WEBPACK_IMPORTED_MODULE_11__["PhotoService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], ProfilePicturePage);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
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


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");

    let PhotoService = class PhotoService {
      constructor(ionicFileService) {
        this.ionicFileService = ionicFileService;
      }

      getSingleFile(filePath) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Get FileEntry from image path
          const fileEntry = yield this.ionicFileService.resolveLocalFilesystemUrl(filePath); // console.log('This is the fileEntry path: ' + JSON.stringify(fileEntry));
          // Get File from FileEntry. Again note that this file does not contain the actual file data yet.

          const cordovaFile = yield this.convertFileEntryToCordovaFile(fileEntry); // console.log('This is the cordova file: ' + JSON.stringify(cordovaFile));
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
            } else {
              const blob = new Blob([reader.result], {
                type: cordovaFile.type
              });
              blob.lastModifiedDate = new Date();
              blob.name = cordovaFile.name; // console.log('blob: ' + JSON.stringify(blob));

              resolve(blob);
            }
          };

          reader.readAsArrayBuffer(cordovaFile); // console.log(JSON.stringify('reader: ' + JSON.stringify(reader)));
        });
      }

    };

    PhotoService.ctorParameters = () => [{
      type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]
    }];

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]])], PhotoService);
    /***/
  }
}]);
//# sourceMappingURL=profile-picture-profile-picture-module-es5.js.map