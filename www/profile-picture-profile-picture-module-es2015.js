(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-picture-profile-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" style=\"height: 100vh ;\">\n\n      <!-- Mobile -->\n      <ion-col class=\"ion-hide-lg-up\" style=\"position: relative; top: 100px\" size-xs=\"11\" size-md=\"8\">\n\n        <!-- Picture Wrapper -->\n        <div\n          id=\"default-picture-wrapper\"\n          *ngIf=\"!imageUrl\">\n        </div>\n\n        <!-- User has uploaded profile picture -->\n        <div\n          id=\"upload-picture-wrapper\"\n          *ngIf=\"imageUrl\"\n          style=\"\n          background-image: url('../../../../../assets/icon/default-pro-picture.svg');\">\n\n        </div>\n\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <ion-button class=\"blue-button\"  (click)=\"selectImage()\">\n          Select Picture\n        </ion-button>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n\n        <ion-button (click)=\"goToUploadResumePage()\" class=\"orange-button\" type=\"submit\" \n        [disabled]=\"!imageUrl\" >Next\n        </ion-button>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n\n      <!-- Desktop -->\n      <ion-col class=\"ion-hide-md-down wrapper  ion-align-self-center\" size-lg=\"8\" size-xl=\"6\">\n\n\n        <ion-row class=\"ion-hide-md-down\">\n          <ion-col size=\"4\">\n            <h1>Profile Picture</h1>\n          </ion-col>\n          <ion-col push=\"4\" size=\"4\" class=\"ion-float-right\">\n            <ion-button class=\"cancel-button\" (click)=\"cancel()\">\n              Cancel\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-hide-md-down\">\n          <ion-col size=\"11\" push=\"0.7\">\n            <hr style=\"background-color: #00000044; margin: 20px 0;\" />\n          </ion-col>\n        </ion-row>\n\n        <!-- Picture Wrapper -->\n        <div\n          id=\"default-picture-wrapper\"\n          *ngIf=\"!imageUrl\">\n        </div>\n\n        <!-- User has uploaded profile picture -->\n        <div\n          id=\"upload-picture-wrapper\"\n          *ngIf=\"imageUrl\"\n          style=\"\n          background-image: url('../../../../../assets/icon/default-pro-picture.svg');\">\n\n        </div>\n\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions '.png', '.jpg', and '.jpeg' are allowed. </h6>\n\n        <input (change)=\"onImagePicked($event)\" placeholder=\"Upload Image\"\n        type=\"file\"/>\n\n        <div *ngIf=\"imageUrl\">\n        Preview Image from AWS\n        <br />\n        <img width=\"200px\" src=\"https://YOUR S3 BUCKET\n        NAME.s3.amazonaws.com/{{\n        imageUrl }}\" />\n        </div>\n\n        <ion-button class=\"blue-button skip-button\" (click)=\"skip()\" style=\"margin-top: 20px;\">\n          Skip\n        </ion-button>\n\n        <ion-button\n          class=\"orange-button\"\n          (click)=\"goToUploadResumePage()\"\n          [disabled]=\"!imageUrl\">Next</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: darkgray;\n  --border-color: darkgray;\n  --border-width: 1px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 2px solid #005191;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 2px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n}\n\nspan {\n  color: #FFB351;\n  font-weight: 600;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 1.2em;\n  padding: unset;\n  color: #333;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: -webkit-gradient(linear, left top, left bottom, from(#0672c4), to(#005191));\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBRE9BO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUFlLFlBQUE7RUFDZix5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUFlLFlBQUE7RUFDZix5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0ZGOztBREtBO0VBQ0UsMkNBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1RkFBQTtFQUFBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cblxuLnNraXAtYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogZGFya2dyYXk7XG4gIC0tYm9yZGVyLWNvbG9yOiBkYXJrZ3JheTtcbiAgLS1ib3JkZXItd2lkdGggOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcblxufVxuXG5pb24tYnV0dG9uIHtcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2RlZmF1bHQtcHJvLXBpY3R1cmUuc3ZnJyk7XG59XG5cbiN1cGxvYWQtcGljdHVyZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuc3BhbntcbiAgY29sb3I6ICNGRkIzNTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNuZXh0LWJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmc6IHVuc2V0O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5jYW1lcmEtYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG5cbiNpbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4iLCIub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNraXAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGRhcmtncmF5O1xuICAtLWJvcmRlci1jb2xvcjogZGFya2dyYXk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9kZWZhdWx0LXByby1waWN0dXJlLnN2Z1wiKTtcbn1cblxuI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDUxOTE7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICNGRkIzNTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNuZXh0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udGV4dC1oZWFkZXIge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwYWRkaW5nOiB1bnNldDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uY2FtZXJhLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgYm9yZGVyOiAxcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2ltZy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn0iXX0= */");

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
        const FILE = event.target.files;
        this.imageObj = FILE;
        console.log(FILE);
    }
    goToUploadResumePage() {
        console.log('Going to Resume Page >>');
        this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    }
    presentSkipAlert() {
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
    presentCancelAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancel Sign up?',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(['']);
                            console.log('Cancelling Sign Up...');
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentSkipAlert();
    }
    cancel() {
        console.log('Sign up cancelled');
        this.presentCancelAlert();
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