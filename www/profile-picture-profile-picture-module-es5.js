(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-picture-profile-picture-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Mobile -->\n      <ion-col size=\"12\">\n\n        <!-- Picture Wrappers -->\n      <ion-row class=\"ion-justify-content-center header\">\n        <ion-col size=\"12\" class=\"ion-align-items-center\">\n          <!-- Default Picture if user does not select profile picture Wrapper -->\n          <canvas\n            id=\"default-picture-wrapper\"\n            *ngIf=\"!uploadedPhoto\"></canvas>\n\n          <!-- User has uploaded profile picture -->\n          <img\n            id=\"upload-picture-wrapper\"\n            *ngIf=\"uploadedPhoto\"\n            src=\"{{uploadedPhotoURL}}\" />\n        </ion-col>\n\n        <h6 class=\"text-header\">Please select your profile picture. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n      </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"10\">\n          </ion-col>\n        </ion-row>\n\n        <form\n        (ngSubmit)=\"uploadPhoto()\" id=\"proPicForm\">\n\n          <input\n            name=\"profile-picture\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhoto\">Next\n          </ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n\n        <!-- <ion-button (click)=\"goToUploadResumePage()\" class=\"orange-button\" type=\"submit\"\n        [disabled]=\"!imageUrl\" >Next\n        </ion-button> -->\n\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-picture.page */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts");




var routes = [
    {
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePage"]
    },
    {
        path: 'upload-resume',
        loadChildren: function () { return Promise.all(/*! import() | upload-resume-upload-resume-module */[__webpack_require__.e("common"), __webpack_require__.e("upload-resume-upload-resume-module")]).then(__webpack_require__.bind(null, /*! ../upload-resume/upload-resume.module */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts")).then(function (m) { return m.UploadResumePageModule; }); }
    },
];
var ProfilePicturePageRoutingModule = /** @class */ (function () {
    function ProfilePicturePageRoutingModule() {
    }
    ProfilePicturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePicturePageRoutingModule);
    return ProfilePicturePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-picture-routing.module */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-picture.page */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts");







var ProfilePicturePageModule = /** @class */ (function () {
    function ProfilePicturePageModule() {
    }
    ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"]
            ],
            declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
        })
    ], ProfilePicturePageModule);
    return ProfilePicturePageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: #e6e6e6;\n  --background-hover: #999;\n  color: #888;\n  width: 150px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #005191;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.header {\n  background: #edf3f8;\n  margin-bottom: 20px;\n  padding: 50px 0;\n}\n\n.text-header {\n  font-size: 1em;\n  padding: 0 50px;\n  color: #333;\n  text-align: justify;\n  opacity: 0;\n  position: relative;\n  top: 35px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.9s forwards;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-header {\n    padding: 0 50px;\n    font-size: 1em;\n  }\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 150px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: #005191;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(6, 114, 196, 0.3)), to(rgba(0, 81, 145, 0.2)));\n  background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  width: 300px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 0px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n}\n\ninput[type=file]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0672c4), to(#054372));\n  background: linear-gradient(#0672c4, #054372);\n  color: white;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURNQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBQ0Esa0ZBQUE7VUFBQSwwRUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUFlLFlBQUE7RUFDZixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0ZBQUE7VUFBQSw4RUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNFLFdBQUE7RUFDRixtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrRkFBQTtVQUFBLDBFQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9IQUFBO0VBQUEsMEVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSx1RkFBQTtFQUFBLDZDQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9wcm9maWxlLXBpY3R1cmUvcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbi5za2lwLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOTk5O1xuICBjb2xvcjogIzg4ODtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlvbi1idXR0b24ge1xufVxuXG4ud3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuI2RlZmF1bHQtcGljdHVyZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9kZWZhdWx0LXByby1waWN0dXJlLnN2ZycpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSkgMC41cyBmb3J3YXJkcztcbn1cblxuI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbnNwYW57XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI25leHQtYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDM1cHg7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjlzIGZvcndhcmRzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LWhlYWRlciAge1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoI2ZkZmJmYiwgI2ZmZjdmOCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmMTViNzcsICNlNDQwNWYpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW1lcmEtYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzA1NDM3Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuXG4jaW1nLXdyYXBwZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4iLCIub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2tpcC1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM5OTk7XG4gIGNvbG9yOiAjODg4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2RlZmF1bHQtcHJvLXBpY3R1cmUuc3ZnXCIpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSkgMC41cyBmb3J3YXJkcztcbn1cblxuI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNuZXh0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuXG4udGV4dC1oZWFkZXIge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDM1cHg7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjlzIGZvcndhcmRzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmRmYmZiLCAjZmZmN2Y4KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2YxNWI3NywgI2U0NDA1Zik7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbWVyYS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzA1NDM3Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNpbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");







var ProfilePicturePage = /** @class */ (function () {
    function ProfilePicturePage(router, alertController, photo, auth, toast) {
        this.router = router;
        this.alertController = alertController;
        this.photo = photo;
        this.auth = auth;
        this.toast = toast;
        this.defaultProfilePicturePath = '../../../../../assets/icon/default-pro-picture.svg';
        this.uploadedPhoto = false;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
    }
    ProfilePicturePage.prototype.ngOnInit = function () {
        var defualtPhoto = document.querySelectorAll('img');
        defualtPhoto.forEach(function (div) {
            if (div.id === 'default-picture-wrapper') {
                console.log(div);
            }
        });
    };
    ProfilePicturePage.prototype.getFormData = function (event) {
        var _this = this;
        var formElement = document.querySelectorAll('form');
        formElement.forEach(function (form) {
            if (form.id === 'proPicForm') {
                console.log('Got Form: ' + form);
                _this.formData = new FormData(form);
                _this.uploadedPhoto = true;
            }
        });
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            // convert image file to base64 string
            _this.uploadedPhotoURL = reader.result;
        }, false);
        if (formElement) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ProfilePicturePage.prototype.uploadPhoto = function () {
        var _this = this;
        var formElement = document.querySelectorAll('form');
        formElement.forEach(function (form) {
            if (form.id === 'profile-picture-form') {
                console.log('Got Form: ' + form);
                _this.formData = new FormData(form);
            }
        });
        if (this.uploadedPhoto === true) {
            this.photo.imageUpload(this.formData).subscribe(function (data) {
                console.log(data);
                console.log('Image Upload API Successful');
                _this.goToUploadResumePage(data['objectUrl']);
            });
        }
    };
    ProfilePicturePage.prototype.skip = function () {
        console.log('Skipping to Upload Resume >>');
        this.presentSkipAlert();
    };
    ProfilePicturePage.prototype.goToUploadResumePage = function (photoURL) {
        this.auth.getProfilePicture(photoURL);
        console.log('Going to Resume Page >>');
        this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    };
    ProfilePicturePage.prototype.presentSkipAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Skip',
                            message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
                            buttons: [
                                {
                                    text: 'Skip',
                                    handler: function () {
                                        // Get Default Picture Logo
                                        var canvasElement = document.querySelectorAll('canvas');
                                        canvasElement.forEach(function (canvas) {
                                            if (canvas.id === 'default-picture-wrapper') {
                                                console.log('Got Canvas: ' + canvas.toDataURL);
                                                canvas.toBlob(function (blob) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var canvasData, reader;
                                                    var _this = this;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                canvasData = new FormData();
                                                                return [4 /*yield*/, canvasData.set('profile-picture', blob, 'default.png')];
                                                            case 1:
                                                                _a.sent();
                                                                console.log(canvasData);
                                                                reader = new FileReader();
                                                                if (canvasData) {
                                                                    reader.readAsBinaryString(blob);
                                                                }
                                                                return [4 /*yield*/, this.photo.imageUpload(canvasData).subscribe(function (data) {
                                                                        console.log(data);
                                                                        console.log('Default Image Upload API Successful');
                                                                        console.log(data['objectUrl']);
                                                                        return _this.goToUploadResumePage(data['objectUrl']);
                                                                    })];
                                                            case 2:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                            }
                                        });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancelling Profile Picture Upload Skip...');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePicturePage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePicturePage.prototype.presentCancelAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Sign up?',
                            cssClass: 'danger-alert',
                            buttons: [
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.router.navigate(['']);
                                        console.log('Cancelling Sign Up...');
                                    }
                                },
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePicturePage.prototype.cancel = function () {
        console.log('Sign up cancelled');
        this.presentCancelAlert();
    };
    ProfilePicturePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-picture',
            template: __webpack_require__(/*! raw-loader!./profile-picture.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./profile-picture.page.scss */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ProfilePicturePage);
    return ProfilePicturePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-picture-profile-picture-module-es5.js.map