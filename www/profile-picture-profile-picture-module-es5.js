function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 3%;\">\n\n      <!-- Mobile -->\n      <ion-col class=\"ion-hide-lg-up\" size-xs=\"9\" size-md=\"8\">\n\n        <!-- Picture Wrapper -->\n        <div\n          id=\"default-picture-wrapper\"\n          *ngIf=\"!imageUrl\">\n        </div>\n\n        <!-- User has uploaded profile picture -->\n        <div\n          id=\"upload-picture-wrapper\"\n          *ngIf=\"imageUrl\"\n          style=\"\n          background-image: url('../../../../../assets/icon/default-pro-picture.svg');\">\n\n      </div>\n\n        <ion-row class=\"ion-hide-lg-up\">\n          <ion-col size=\"11\" push=\"0.7\">\n            <hr style=\"background-color: #00000044; margin: 20px 0;\" />\n          </ion-col>\n        </ion-row>\n\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <form\n        (ngSubmit)=\"uploadPhoto()\" id=\"image-form\">\n          <input\n            name=\"profile-picture\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!imageUrl\">Next\n          </ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n\n        <ion-button (click)=\"goToUploadResumePage()\" class=\"orange-button\" type=\"submit\"\n        [disabled]=\"!imageUrl\" >Next\n        </ion-button>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n\n      <!-- Desktop -->\n      <ion-col class=\"ion-hide-md-down wrapper  ion-align-self-center\" size-lg=\"8\" size-xl=\"6\">\n\n\n        <ion-row class=\"ion-hide-md-down\">\n          <ion-col size=\"4\">\n            <h1>Profile Picture</h1>\n          </ion-col>\n          <ion-col push=\"4\" size=\"4\" class=\"ion-float-right\">\n            <ion-button class=\"blue-button\" (click)=\"cancel()\">\n              Cancel\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-hide-md-down\">\n          <ion-col size=\"11\" push=\"0.7\">\n            <hr style=\"background-color: #00000044; margin: 20px 0;\" />\n          </ion-col>\n        </ion-row>\n\n        <!-- Picture Wrapper -->\n        <div\n          id=\"default-picture-wrapper\"\n          style=\"\n          background-image: url('{{defaultProfilePicture}}');\"\n          *ngIf=\"!imageUrl\">\n        </div>\n\n        <!-- User has uploaded profile picture -->\n        <img\n          id=\"upload-picture-wrapper\"\n          src=\"{{imageUrl}}\"\n          *ngIf=\"imageUrl\">\n\n        <h6 class=\"text-header\">Please select your profile picture.<br> Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <form\n        (ngSubmit)=\"uploadPhoto()\" id=\"image-form\">\n          <input\n            name=\"profile-picture\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!imageUrl\">Next\n          </ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\" (click)=\"skip()\" style=\"margin-top: 20px;\">\n          Skip\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
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

    var routes = [{
      path: '',
      component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePage"]
    }, {
      path: 'upload-resume',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | upload-resume-upload-resume-module */
        [__webpack_require__.e("common"), __webpack_require__.e("upload-resume-upload-resume-module")]).then(__webpack_require__.bind(null,
        /*! ../upload-resume/upload-resume.module */
        "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts")).then(function (m) {
          return m.UploadResumePageModule;
        });
      }
    }];

    var ProfilePicturePageRoutingModule = function ProfilePicturePageRoutingModule() {
      _classCallCheck(this, ProfilePicturePageRoutingModule);
    };

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

    var ProfilePicturePageModule = function ProfilePicturePageModule() {
      _classCallCheck(this, ProfilePicturePageModule);
    };

    ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"]],
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


    __webpack_exports__["default"] = ".orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: #888;\n  --border-color: #888;\n  --border-width: 3px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 4px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #999;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 1.2em;\n  padding: unset;\n  color: #333;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n\n@-webkit-keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURNQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNGQUFBO1VBQUEsOEVBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDREY7O0FESUE7RUFDRSwyQ0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0U7SUFDRSw0QkFBQTtFQ0pGO0VET0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGOztBREhBO0VBQ0U7SUFDRSw0QkFBQTtFQ0pGO0VET0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cblxuLnNraXAtYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItY29sb3I6ICM4ODg7XG4gIC0tYm9yZGVyLXdpZHRoIDogM3B4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5pb24tYnV0dG9uIHtcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2RlZmF1bHQtcHJvLXBpY3R1cmUuc3ZnJyk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xufVxuXG4jdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwNTE5MTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuc3BhbntcbiAgY29sb3I6ICNGRkIzNTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNuZXh0LWJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmc6IHVuc2V0O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5jYW1lcmEtYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG5cbiNpbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbkBrZXlmcmFtZXMgbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5za2lwLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjODg4O1xuICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9kZWZhdWx0LXByby1waWN0dXJlLnN2Z1wiKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpIDAuNXMgZm9yd2FyZHM7XG59XG5cbiN1cGxvYWQtcGljdHVyZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjMDA1MTkxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICNGRkIzNTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNuZXh0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udGV4dC1oZWFkZXIge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwYWRkaW5nOiB1bnNldDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uY2FtZXJhLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgYm9yZGVyOiAxcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2ltZy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuQGtleWZyYW1lcyBsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
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

    var ProfilePicturePage = /*#__PURE__*/function () {
      function ProfilePicturePage(router, alertController, photo, auth, camera, file, http, actionSheet, loading, platform, ref, filePath, storage, webView, toast) {
        _classCallCheck(this, ProfilePicturePage);

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
        this.defaultProfilePicture = '../../../../../assets/icon/default-pro-picture.svg'; // Options for Cordova Camera plugin

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

      _createClass(ProfilePicturePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getFormData",
        value: function getFormData(event) {
          var _this = this;

          var formElement = document.querySelectorAll('form');
          console.log(formElement[3]);
          this.formData = new FormData(formElement[3]);
          var reader = new FileReader();
          reader.addEventListener('load', function () {
            // convert image file to base64 string
            _this.imageUrl = reader.result;
          }, false);

          if (formElement) {
            reader.readAsDataURL(event.target.files[0]);
          }
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto() {
          var _this2 = this;

          var formElement = document.querySelectorAll('form');
          formElement.forEach(function (form) {
            if (form.id === 'image-form') {
              console.log('Got Form: ' + form);
              _this2.formData = new FormData(form);
            }
          });
          this.photo.imageUpload(this.formData).subscribe(function (data) {
            console.log(data);
            console.log('Image Upload API Successful');

            _this2.goToUploadResumePage(data['objectUrl']);
          });
        }
      }, {
        key: "skip",
        value: function skip() {
          console.log('Skipping to Upload Resume >>');
          this.presentSkipAlert();
        }
      }, {
        key: "goToUploadResumePage",
        value: function goToUploadResumePage(photoURL) {
          this.auth.getProfilePicture(photoURL);
          console.log('Going to Resume Page >>');
          this.router.navigate(['/personal-info/profile-picture/upload-resume']);
        }
      }, {
        key: "presentSkipAlert",
        value: function presentSkipAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Skip',
                      message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
                      buttons: [{
                        text: 'Skip',
                        handler: function handler() {
                          _this3.router.navigate(['/personal-info/profile-picture/upload-resume']);

                          console.log('Skipping Profile Picture...');
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancelling Profile Picture Upload Skip...');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toast.create({
                      message: text,
                      position: 'bottom',
                      duration: 3000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentCancelAlert",
        value: function presentCancelAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Cancel Sign up?',
                      cssClass: 'danger-alert',
                      buttons: [{
                        text: 'Yes',
                        handler: function handler() {
                          _this4.router.navigate(['']);

                          console.log('Cancelling Sign Up...');
                        }
                      }, {
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          console.log('Sign up cancelled');
          this.presentCancelAlert();
        }
      }]);

      return ProfilePicturePage;
    }();

    ProfilePicturePage.ctorParameters = function () {
      return [{
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
    };

    ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-picture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-picture.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html"))["default"],
      providers: [],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-picture.page.scss */
      "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_photo_service__WEBPACK_IMPORTED_MODULE_11__["PhotoService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], ProfilePicturePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-picture-profile-picture-module-es5.js.map