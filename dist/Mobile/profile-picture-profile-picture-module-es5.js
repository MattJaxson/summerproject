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


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Mobile -->\n      <ion-col size=\"12\">\n\n        <!-- Picture Wrappers -->\n      <ion-row class=\"ion-justify-content-center header\">\n        <ion-col size=\"12\" class=\"ion-align-items-center\">\n          <!-- Default Picture if user does not select profile picture Wrapper -->\n          <canvas\n            #defaultPicture\n            id=\"default-picture-wrapper\"\n            *ngIf=\"!uploadedPhoto\"></canvas>\n\n          <!-- User has uploaded cropped profile picture -->\n          <img\n            id=\"upload-picture-wrapper\"\n            *ngIf=\"uploadedPhoto\"\n            src=\"{{uploadedPhotoURL}}\" />\n\n            <!-- User has cropped profile picture -->\n            <!-- <img\n              id=\"upload-picture-wrapper\"\n              *ngIf=\"uploadedPhoto\"\n              src=\"{{croppedPhotoURL}}\" /> -->\n        </ion-col>\n\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n      </ion-row>\n\n        <form\n        (ngSubmit)=\"uploadPhoto()\" id=\"proPicForm\" type=\"multipart/form-data\">\n\n          <input\n            name=\"profile-picture\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhoto\">Next\n          </ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
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
        return __webpack_require__.e(
        /*! import() | upload-resume-upload-resume-module */
        "upload-resume-upload-resume-module").then(__webpack_require__.bind(null,
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
    /* harmony import */


    var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/image-cropper/image-cropper.module */
    "./src/app/modals/image-cropper/image-cropper.module.ts");

    var ProfilePicturePageModule = function ProfilePicturePageModule() {
      _classCallCheck(this, ProfilePicturePageModule);
    };

    ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"], src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__["ImageCropperPageModule"]],
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


    __webpack_exports__["default"] = ".orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: #e6e6e6;\n  --background-hover: #999;\n  color: #888;\n  width: 150px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.skip-button:hover {\n  color: white;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #005191;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.header {\n  background: #edf3f8;\n  margin-bottom: 20px;\n  padding: 50px 0;\n}\n\n.text-header {\n  font-size: 1em;\n  padding: 0 50px;\n  color: #333;\n  text-align: justify;\n  opacity: 0;\n  position: relative;\n  top: 35px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-header {\n    padding: 0 50px;\n    font-size: 1em;\n  }\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 150px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: #005191;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  width: 300px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 0px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n}\n\ninput[type=file]:hover {\n  background: linear-gradient(#0672c4, #054372);\n  color: white;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURNQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbXlIQUFBO0VBQ0EsVUFBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsY0FBQTtFQUVBLFVBQUE7RUFDQSxzRkFBQTtVQUFBLDhFQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0UsV0FBQTtFQUNGLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwRUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLDZDQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9wcm9maWxlLXBpY3R1cmUvcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbi5za2lwLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOTk5O1xuICBjb2xvcjogIzg4ODtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5za2lwLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG59XG5cbi53cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4jZGVmYXVsdC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNVEF3Y0hnaUlHaGxhV2RvZEQwaU1UQXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQXhNREFnTVRBd0lpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZ29nSUNBZ1BDRXRMU0JIWlc1bGNtRjBiM0k2SUZOclpYUmphQ0ExTmk0eklDZzRNVGN4TmlrZ0xTQm9kSFJ3Y3pvdkwzTnJaWFJqYUM1amIyMGdMUzArQ2lBZ0lDQThkR2wwYkdVK1pHVm1ZWFZzZEMxd2NtOHRjR2xqZEhWeVpUd3ZkR2wwYkdVK0NpQWdJQ0E4WkdWell6NURjbVZoZEdWa0lIZHBkR2dnVTJ0bGRHTm9Mand2WkdWell6NEtJQ0FnSUR4a1pXWnpQZ29nSUNBZ0lDQWdJRHhzYVc1bFlYSkhjbUZrYVdWdWRDQjRNVDBpTlRBbElpQjVNVDBpTUNVaUlIZ3lQU0kxTUNVaUlIa3lQU0l4TURBbElpQnBaRDBpYkdsdVpXRnlSM0poWkdsbGJuUXRNU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lEeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTNPVUU1UTBVaUlHOW1abk5sZEQwaU1DVWlQand2YzNSdmNENEtJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpVMU56TTRRaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXdMalV6TVRZek1qUXpJaUJ2Wm1aelpYUTlJakV3TUNVaVBqd3ZjM1J2Y0Q0S0lDQWdJQ0FnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU9Dd3lOaTQ0TmpRM05UUXhJRU15TlM0ME16YzFMREkyTGpnMk5EYzFOREVnTWpRdU1qQTFNelUzTVN3eU9DNHlOemcyT0RnMUlESXdMREk0TGpJM09EWTRPRFVnUXpFMUxqYzVORFkwTWprc01qZ3VNamM0TmpnNE5TQXhOQzQxTnpFME1qZzJMREkyTGpnMk5EYzFOREVnTVRJc01qWXVPRFkwTnpVME1TQkROUzR6TnpVc01qWXVPRFkwTnpVME1TQXdMRE15TGpFNE5EWTRNalFnTUN3ek9DNDNOREU0TURNeklFd3dMRFF4TGpBd05EQTVPRFFnUXpBc05ETXVNelExT1RJM015QXhMamt4T1RZME1qZzJMRFExTGpJME5Ua3dNVFlnTkM0eU9EVTNNVFF5T1N3ME5TNHlORFU1TURFMklFd3pOUzQzTVRReU9EVTNMRFExTGpJME5Ua3dNVFlnUXpNNExqQTRNRE0xTnpFc05EVXVNalExT1RBeE5pQTBNQ3cwTXk0ek5EVTVNamN6SURRd0xEUXhMakF3TkRBNU9EUWdURFF3TERNNExqYzBNVGd3TXpNZ1F6UXdMRE15TGpFNE5EWTRNalFnTXpRdU5qSTFMREkyTGpnMk5EYzFOREVnTWpnc01qWXVPRFkwTnpVME1TQmFJRTB6TlM0M01UUXlPRFUzTERReExqQXdOREE1T0RRZ1REUXVNamcxTnpFME1qa3NOREV1TURBME1EazROQ0JNTkM0eU9EVTNNVFF5T1N3ek9DNDNOREU0TURNeklFTTBMakk0TlRjeE5ESTVMRE0wTGpVek5UTTBPRFFnTnk0M05Td3pNUzR4TURZMU5UYzBJREV5TERNeExqRXdOalUxTnpRZ1F6RXpMak13TXpVM01UUXNNekV1TVRBMk5UVTNOQ0F4TlM0ME1UazJOREk1TERNeUxqVXlNRFE1TVRnZ01qQXNNekl1TlRJd05Ea3hPQ0JETWpRdU5qRTJNRGN4TkN3ek1pNDFNakEwT1RFNElESTJMalk0TnpVc016RXVNVEEyTlRVM05DQXlPQ3d6TVM0eE1EWTFOVGMwSUVNek1pNHlOU3d6TVM0eE1EWTFOVGMwSURNMUxqY3hOREk0TlRjc016UXVOVE0xTXpRNE5DQXpOUzQzTVRReU9EVTNMRE00TGpjME1UZ3dNek1nVERNMUxqY3hOREk0TlRjc05ERXVNREEwTURrNE5DQmFJRTB5TUN3eU5TNDBOVEE0TVRrM0lFTXlOeTR3T1RneU1UUXpMREkxTGpRMU1EZ3hPVGNnTXpJdU9EVTNNVFF5T1N3eE9TNDNOVEE0T1RZMUlETXlMamcxTnpFME1qa3NNVEl1TnpJMU5EQTVPQ0JETXpJdU9EVTNNVFF5T1N3MUxqWTVPVGt5TXpFMklESTNMakE1T0RJeE5ETXNNQ0F5TUN3d0lFTXhNaTQ1TURFM09EVTNMREFnTnk0eE5ESTROVGN4TkN3MUxqWTVPVGt5TXpFMklEY3VNVFF5T0RVM01UUXNNVEl1TnpJMU5EQTVPQ0JETnk0eE5ESTROVGN4TkN3eE9TNDNOVEE0T1RZMUlERXlMamt3TVRjNE5UY3NNalV1TkRVd09ERTVOeUF5TUN3eU5TNDBOVEE0TVRrM0lGb2dUVEl3TERRdU1qUXhPREF6TWpnZ1F6STBMamN5TXpJeE5ETXNOQzR5TkRFNE1ETXlPQ0F5T0M0MU56RTBNamcyTERndU1EVXdOVGc1TVRRZ01qZ3VOVGN4TkRJNE5pd3hNaTQzTWpVME1EazRJRU15T0M0MU56RTBNamcyTERFM0xqUXdNREl6TURVZ01qUXVOekl6TWpFME15d3lNUzR5TURrd01UWTBJREl3TERJeExqSXdPVEF4TmpRZ1F6RTFMakkzTmpjNE5UY3NNakV1TWpBNU1ERTJOQ0F4TVM0ME1qZzFOekUwTERFM0xqUXdNREl6TURVZ01URXVOREk0TlRjeE5Dd3hNaTQzTWpVME1EazRJRU14TVM0ME1qZzFOekUwTERndU1EVXdOVGc1TVRRZ01UVXVNamMyTnpnMU55dzBMakkwTVRnd016STRJREl3TERRdU1qUXhPREF6TWpnZ1dpSWdhV1E5SW5CaGRHZ3RNaUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHhtYVd4MFpYSWdlRDBpTFRFM0xqVWxJaUI1UFNJdE1URXVNU1VpSUhkcFpIUm9QU0l4TXpVdU1DVWlJR2hsYVdkb2REMGlNVE13TGprbElpQm1hV3gwWlhKVmJtbDBjejBpYjJKcVpXTjBRbTkxYm1ScGJtZENiM2dpSUdsa1BTSm1hV3gwWlhJdE15SStDaUFnSUNBZ0lDQWdJQ0FnSUR4bVpVOW1abk5sZENCa2VEMGlNQ0lnWkhrOUlqSWlJR2x1UFNKVGIzVnlZMlZCYkhCb1lTSWdjbVZ6ZFd4MFBTSnphR0ZrYjNkUFptWnpaWFJQZFhSbGNqRWlQand2Wm1WUFptWnpaWFErQ2lBZ0lDQWdJQ0FnSUNBZ0lEeG1aVWRoZFhOemFXRnVRbXgxY2lCemRHUkVaWFpwWVhScGIyNDlJaklpSUdsdVBTSnphR0ZrYjNkUFptWnpaWFJQZFhSbGNqRWlJSEpsYzNWc2REMGljMmhoWkc5M1FteDFjazkxZEdWeU1TSStQQzltWlVkaGRYTnphV0Z1UW14MWNqNEtJQ0FnSUNBZ0lDQWdJQ0FnUEdabFEyOXNiM0pOWVhSeWFYZ2dkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdJQ0F3SURBZ01DQXdJREFnSUNBd0lEQWdNQ0F3SURBZ0lEQWdNQ0F3SURBdU5TQXdJaUIwZVhCbFBTSnRZWFJ5YVhnaUlHbHVQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJajQ4TDJabFEyOXNiM0pOWVhSeWFYZytDaUFnSUNBZ0lDQWdQQzltYVd4MFpYSStDaUFnSUNBOEwyUmxabk0rQ2lBZ0lDQThaeUJwWkQwaVpHVm1ZWFZzZEMxd2NtOHRjR2xqZEhWeVpTSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEpsWTNRZ2FXUTlJbEpsWTNSaGJtZHNaU0lnWm1sc2JEMGlkWEpzS0NOc2FXNWxZWEpIY21Ga2FXVnVkQzB4S1NJZ2VEMGlNQ0lnZVQwaU1DSWdkMmxrZEdnOUlqRXdNQ0lnYUdWcFoyaDBQU0l4TURBaVBqd3ZjbVZqZEQ0S0lDQWdJQ0FnSUNBOFp5QnBaRDBpZFhObGNpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTXpBdU1EQXdNREF3TENBeU55NHdNREF3TURBcElpQm1hV3hzTFhKMWJHVTlJbTV2Ym5wbGNtOGlQZ29nSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpVTJoaGNHVWlQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZ6WlNCbWFXeHNQU0ppYkdGamF5SWdabWxzYkMxdmNHRmphWFI1UFNJeElpQm1hV3gwWlhJOUluVnliQ2dqWm1sc2RHVnlMVE1wSWlCNGJHbHVhenBvY21WbVBTSWpjR0YwYUMweUlqNDhMM1Z6WlQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWMyVWdabWxzYkQwaUkwWkdRak0xTVNJZ2VHeHBibXM2YUhKbFpqMGlJM0JoZEdndE1pSStQQzkxYzJVK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBOEwyYytDand2YzNablBnPT0nKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpIDAuNXMgZm9yd2FyZHM7XG59XG5cbiN1cGxvYWQtcGljdHVyZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG5zcGFue1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNuZXh0LWJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzNXB4O1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSkgMC45cyBmb3J3YXJkcztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAudGV4dC1oZWFkZXIgIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KCNmZGZiZmIsICNmZmY3ZjgpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZjE1Yjc3LCAjZTQ0MDVmKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FtZXJhLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjojMDA1MTkxO1xuICBib3JkZXI6IDFweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoNiwgMTE0LCAxOTYsIDAuMyksIHJnYmEoMCwgODEsIDE0NSwgMC4yKSk7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwNTQzNzIpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5cblxuI2ltZy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuIiwiLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNraXAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOTk5O1xuICBjb2xvcjogIzg4ODtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5za2lwLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNVEF3Y0hnaUlHaGxhV2RvZEQwaU1UQXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQXhNREFnTVRBd0lpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZ29nSUNBZ1BDRXRMU0JIWlc1bGNtRjBiM0k2SUZOclpYUmphQ0ExTmk0eklDZzRNVGN4TmlrZ0xTQm9kSFJ3Y3pvdkwzTnJaWFJqYUM1amIyMGdMUzArQ2lBZ0lDQThkR2wwYkdVK1pHVm1ZWFZzZEMxd2NtOHRjR2xqZEhWeVpUd3ZkR2wwYkdVK0NpQWdJQ0E4WkdWell6NURjbVZoZEdWa0lIZHBkR2dnVTJ0bGRHTm9Mand2WkdWell6NEtJQ0FnSUR4a1pXWnpQZ29nSUNBZ0lDQWdJRHhzYVc1bFlYSkhjbUZrYVdWdWRDQjRNVDBpTlRBbElpQjVNVDBpTUNVaUlIZ3lQU0kxTUNVaUlIa3lQU0l4TURBbElpQnBaRDBpYkdsdVpXRnlSM0poWkdsbGJuUXRNU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lEeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTNPVUU1UTBVaUlHOW1abk5sZEQwaU1DVWlQand2YzNSdmNENEtJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpVMU56TTRRaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXdMalV6TVRZek1qUXpJaUJ2Wm1aelpYUTlJakV3TUNVaVBqd3ZjM1J2Y0Q0S0lDQWdJQ0FnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU9Dd3lOaTQ0TmpRM05UUXhJRU15TlM0ME16YzFMREkyTGpnMk5EYzFOREVnTWpRdU1qQTFNelUzTVN3eU9DNHlOemcyT0RnMUlESXdMREk0TGpJM09EWTRPRFVnUXpFMUxqYzVORFkwTWprc01qZ3VNamM0TmpnNE5TQXhOQzQxTnpFME1qZzJMREkyTGpnMk5EYzFOREVnTVRJc01qWXVPRFkwTnpVME1TQkROUzR6TnpVc01qWXVPRFkwTnpVME1TQXdMRE15TGpFNE5EWTRNalFnTUN3ek9DNDNOREU0TURNeklFd3dMRFF4TGpBd05EQTVPRFFnUXpBc05ETXVNelExT1RJM015QXhMamt4T1RZME1qZzJMRFExTGpJME5Ua3dNVFlnTkM0eU9EVTNNVFF5T1N3ME5TNHlORFU1TURFMklFd3pOUzQzTVRReU9EVTNMRFExTGpJME5Ua3dNVFlnUXpNNExqQTRNRE0xTnpFc05EVXVNalExT1RBeE5pQTBNQ3cwTXk0ek5EVTVNamN6SURRd0xEUXhMakF3TkRBNU9EUWdURFF3TERNNExqYzBNVGd3TXpNZ1F6UXdMRE15TGpFNE5EWTRNalFnTXpRdU5qSTFMREkyTGpnMk5EYzFOREVnTWpnc01qWXVPRFkwTnpVME1TQmFJRTB6TlM0M01UUXlPRFUzTERReExqQXdOREE1T0RRZ1REUXVNamcxTnpFME1qa3NOREV1TURBME1EazROQ0JNTkM0eU9EVTNNVFF5T1N3ek9DNDNOREU0TURNeklFTTBMakk0TlRjeE5ESTVMRE0wTGpVek5UTTBPRFFnTnk0M05Td3pNUzR4TURZMU5UYzBJREV5TERNeExqRXdOalUxTnpRZ1F6RXpMak13TXpVM01UUXNNekV1TVRBMk5UVTNOQ0F4TlM0ME1UazJOREk1TERNeUxqVXlNRFE1TVRnZ01qQXNNekl1TlRJd05Ea3hPQ0JETWpRdU5qRTJNRGN4TkN3ek1pNDFNakEwT1RFNElESTJMalk0TnpVc016RXVNVEEyTlRVM05DQXlPQ3d6TVM0eE1EWTFOVGMwSUVNek1pNHlOU3d6TVM0eE1EWTFOVGMwSURNMUxqY3hOREk0TlRjc016UXVOVE0xTXpRNE5DQXpOUzQzTVRReU9EVTNMRE00TGpjME1UZ3dNek1nVERNMUxqY3hOREk0TlRjc05ERXVNREEwTURrNE5DQmFJRTB5TUN3eU5TNDBOVEE0TVRrM0lFTXlOeTR3T1RneU1UUXpMREkxTGpRMU1EZ3hPVGNnTXpJdU9EVTNNVFF5T1N3eE9TNDNOVEE0T1RZMUlETXlMamcxTnpFME1qa3NNVEl1TnpJMU5EQTVPQ0JETXpJdU9EVTNNVFF5T1N3MUxqWTVPVGt5TXpFMklESTNMakE1T0RJeE5ETXNNQ0F5TUN3d0lFTXhNaTQ1TURFM09EVTNMREFnTnk0eE5ESTROVGN4TkN3MUxqWTVPVGt5TXpFMklEY3VNVFF5T0RVM01UUXNNVEl1TnpJMU5EQTVPQ0JETnk0eE5ESTROVGN4TkN3eE9TNDNOVEE0T1RZMUlERXlMamt3TVRjNE5UY3NNalV1TkRVd09ERTVOeUF5TUN3eU5TNDBOVEE0TVRrM0lGb2dUVEl3TERRdU1qUXhPREF6TWpnZ1F6STBMamN5TXpJeE5ETXNOQzR5TkRFNE1ETXlPQ0F5T0M0MU56RTBNamcyTERndU1EVXdOVGc1TVRRZ01qZ3VOVGN4TkRJNE5pd3hNaTQzTWpVME1EazRJRU15T0M0MU56RTBNamcyTERFM0xqUXdNREl6TURVZ01qUXVOekl6TWpFME15d3lNUzR5TURrd01UWTBJREl3TERJeExqSXdPVEF4TmpRZ1F6RTFMakkzTmpjNE5UY3NNakV1TWpBNU1ERTJOQ0F4TVM0ME1qZzFOekUwTERFM0xqUXdNREl6TURVZ01URXVOREk0TlRjeE5Dd3hNaTQzTWpVME1EazRJRU14TVM0ME1qZzFOekUwTERndU1EVXdOVGc1TVRRZ01UVXVNamMyTnpnMU55dzBMakkwTVRnd016STRJREl3TERRdU1qUXhPREF6TWpnZ1dpSWdhV1E5SW5CaGRHZ3RNaUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHhtYVd4MFpYSWdlRDBpTFRFM0xqVWxJaUI1UFNJdE1URXVNU1VpSUhkcFpIUm9QU0l4TXpVdU1DVWlJR2hsYVdkb2REMGlNVE13TGprbElpQm1hV3gwWlhKVmJtbDBjejBpYjJKcVpXTjBRbTkxYm1ScGJtZENiM2dpSUdsa1BTSm1hV3gwWlhJdE15SStDaUFnSUNBZ0lDQWdJQ0FnSUR4bVpVOW1abk5sZENCa2VEMGlNQ0lnWkhrOUlqSWlJR2x1UFNKVGIzVnlZMlZCYkhCb1lTSWdjbVZ6ZFd4MFBTSnphR0ZrYjNkUFptWnpaWFJQZFhSbGNqRWlQand2Wm1WUFptWnpaWFErQ2lBZ0lDQWdJQ0FnSUNBZ0lEeG1aVWRoZFhOemFXRnVRbXgxY2lCemRHUkVaWFpwWVhScGIyNDlJaklpSUdsdVBTSnphR0ZrYjNkUFptWnpaWFJQZFhSbGNqRWlJSEpsYzNWc2REMGljMmhoWkc5M1FteDFjazkxZEdWeU1TSStQQzltWlVkaGRYTnphV0Z1UW14MWNqNEtJQ0FnSUNBZ0lDQWdJQ0FnUEdabFEyOXNiM0pOWVhSeWFYZ2dkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdJQ0F3SURBZ01DQXdJREFnSUNBd0lEQWdNQ0F3SURBZ0lEQWdNQ0F3SURBdU5TQXdJaUIwZVhCbFBTSnRZWFJ5YVhnaUlHbHVQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJajQ4TDJabFEyOXNiM0pOWVhSeWFYZytDaUFnSUNBZ0lDQWdQQzltYVd4MFpYSStDaUFnSUNBOEwyUmxabk0rQ2lBZ0lDQThaeUJwWkQwaVpHVm1ZWFZzZEMxd2NtOHRjR2xqZEhWeVpTSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEpsWTNRZ2FXUTlJbEpsWTNSaGJtZHNaU0lnWm1sc2JEMGlkWEpzS0NOc2FXNWxZWEpIY21Ga2FXVnVkQzB4S1NJZ2VEMGlNQ0lnZVQwaU1DSWdkMmxrZEdnOUlqRXdNQ0lnYUdWcFoyaDBQU0l4TURBaVBqd3ZjbVZqZEQ0S0lDQWdJQ0FnSUNBOFp5QnBaRDBpZFhObGNpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTXpBdU1EQXdNREF3TENBeU55NHdNREF3TURBcElpQm1hV3hzTFhKMWJHVTlJbTV2Ym5wbGNtOGlQZ29nSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpVTJoaGNHVWlQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZ6WlNCbWFXeHNQU0ppYkdGamF5SWdabWxzYkMxdmNHRmphWFI1UFNJeElpQm1hV3gwWlhJOUluVnliQ2dqWm1sc2RHVnlMVE1wSWlCNGJHbHVhenBvY21WbVBTSWpjR0YwYUMweUlqNDhMM1Z6WlQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWMyVWdabWxzYkQwaUkwWkdRak0xTVNJZ2VHeHBibXM2YUhKbFpqMGlJM0JoZEdndE1pSStQQzkxYzJVK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBOEwyYytDand2YzNablBnPT1cIik7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xufVxuXG4jdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI25leHQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzVweDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpIDAuOXMgZm9yd2FyZHM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRleHQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbi5jYW5jZWwtYnV0dG9uIHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZGZiZmIsICNmZmY3ZjgpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZjE1Yjc3LCAjZTQ0MDVmKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FtZXJhLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgYm9yZGVyOiAxcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDYsIDExNCwgMTk2LCAwLjMpLCByZ2JhKDAsIDgxLCAxNDUsIDAuMikpO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDU0MzcyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2ltZy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn0iXX0= */";
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/image-cropper/image-cropper.page */
    "./src/app/modals/image-cropper/image-cropper.page.ts");

    var ProfilePicturePage = /*#__PURE__*/function () {
      function ProfilePicturePage(router, alertController, modal, photo, auth, toast) {
        _classCallCheck(this, ProfilePicturePage);

        this.router = router;
        this.alertController = alertController;
        this.modal = modal;
        this.photo = photo;
        this.auth = auth;
        this.toast = toast;
        this.defaultProfilePicturePath = '../../../../../assets/icon/default-pro-picture.svg';
        this.uploadedPhoto = false;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
      }

      _createClass(ProfilePicturePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.defaultPicDataURI());
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log(this.defaultPictureRef.nativeElement);
        }
      }, {
        key: "getFormData",
        value: function getFormData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var formElement, reader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    formElement = document.querySelectorAll('form');
                    _context2.next = 3;
                    return formElement.forEach(function (form) {
                      if (form.id === 'proPicForm') {
                        console.log('Got Form: ', form);
                        _this.formData = new FormData(form);
                        console.log('Form data: ', _this.formData);
                        _this.uploadedPhoto = true;
                      }
                    });

                  case 3:
                    reader = new FileReader();
                    _context2.next = 6;
                    return reader.addEventListener('load', function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.uploadedPhotoURL = reader.result;
                                console.log('Before cropping: ' + reader.result);
                                _context.next = 4;
                                return this.cropPhoto(this.uploadedPhotoURL);

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, true);

                  case 6:
                    if (!formElement) {
                      _context2.next = 9;
                      break;
                    }

                    console.log(event.target.files[0]);
                    return _context2.abrupt("return", reader.readAsDataURL(event.target.files[0]));

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto() {
          var _this2 = this;

          var formElement = document.querySelectorAll('form');
          formElement.forEach(function (form) {
            if (form.id === 'proPicForm') {
              console.log('Got Form: ' + form);
              _this2.formData = new FormData(form);
            }
          });
          var formData = new FormData();
          var photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');
          formData.append('profile-picture', photoFile);

          if (this.uploadedPhoto === true) {
            this.photo.imageUpload(formData).subscribe(function (data) {
              console.log(data);
              console.log('Image Upload API Successful');

              _this2.goToUploadResumePage(data['objectUrl']);
            });
          }
        }
      }, {
        key: "skip",
        value: function skip() {
          console.log('Skipping to Upload Resume >>');
          this.presentSkipAlert();
        }
      }, {
        key: "cropPhoto",
        value: function cropPhoto(uploadedPhotoURL) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modal.create({
                      component: src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_7__["ImageCropperPage"],
                      cssClass: 'image-cropper',
                      componentProps: {
                        uploadedPhotoURL: uploadedPhotoURL
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    modal.onDidDismiss().then(function (data) {
                      _this3.uploadedPhotoURL = data.data;
                      console.log('After cropping: ' + _this3.uploadedPhotoURL);
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Skip',
                      message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
                      buttons: [{
                        text: 'Skip',
                        handler: function handler() {// // Get Default Picture Logo
                          //     this.photo.imageUpload().subscribe(
                          //       data => {
                          //         console.log(data);
                          //         console.log('Default Image Upload API Successful');
                          //         console.log(data['objectUrl']);
                          //         return this.goToUploadResumePage(data['objectUrl']);
                          //       }
                          //     );
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
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toast.create({
                      message: text,
                      position: 'bottom',
                      duration: 3000
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentCancelAlert",
        value: function presentCancelAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
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
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          console.log('Sign up cancelled');
          this.presentCancelAlert();
        }
      }, {
        key: "defaultPicDataURI",
        value: function defaultPicDataURI() {
          // tslint:disable-next-line: max-line-length
          return 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
        }
      }, {
        key: "dataURLtoBlob",
        value: function dataURLtoBlob(dataurl) {
          var arr = dataurl.split(',');
          var mime = arr[0].match(/:(.*?);/)[1];
          var bstr = atob(arr[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          return new Blob([u8arr], {
            type: mime
          });
        }
      }]);

      return ProfilePicturePage;
    }();

    ProfilePicturePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultPicture', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ProfilePicturePage.prototype, "defaultPictureRef", void 0);
    ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-picture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-picture.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html"))["default"],
      providers: [],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-picture.page.scss */
      "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], ProfilePicturePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-picture-profile-picture-module-es5.js.map