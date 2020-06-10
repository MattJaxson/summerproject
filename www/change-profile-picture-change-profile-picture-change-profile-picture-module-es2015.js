(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-change-profile-picture-change-profile-picture-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Profile Picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2\" size=\"3.5\">\n        <h1>Change Profile Picture</h1>\n      </ion-col>\n      <ion-col push=\"2\" size=\"2\">\n        <ion-button class=\"blue-button\" expand=\"block\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <h6 class=\"text-header\">Please select the profile picture you will use to replace your current one. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <!-- <p>{{awsPrefix}}</p> -->\n        <img *ngIf=\"!uploadedPhoto\" id=\"profile-picture\" src=\"{{imageUrl}}\" alt=\"Profile Picture\">\n\n\n        <img *ngIf=\"uploadedPhoto\" id=\"profile-picture\" src=\"{{uploadedPhotoURL}}\" alt=\"Profile Picture\">\n\n        <form\n        (ngSubmit)=\"uploadChangedPhoto()\" id=\"changePhotoForm\">\n          <input\n            name=\"profile-picture-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!imageUrl\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 50px auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: #888;\n  --border-color: #888;\n  --border-width: 3px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.blue-button {\n  width: unset;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 4px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #999;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 1.2em;\n  padding: unset;\n  color: #333;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: -webkit-gradient(linear, left top, left bottom, from(#0672c4), to(#005191));\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n\n@-webkit-keyframes lide-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes lide-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FER0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNGQUFBO1VBQUEsOEVBQUE7QUNFSjs7QURDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0VKOztBRENFO0VBQ0UsMkNBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1RkFBQTtFQUFBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBRElFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElFO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDREo7RURJRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDRko7QUFDRjs7QURORTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0RKO0VESUU7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLXBpY3R1cmUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgLm9yYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG5cbiAgLnNraXAtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci13aWR0aCA6IDNweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gICNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZGVmYXVsdC1wcm8tcGljdHVyZS5zdmcnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDA1MTkxO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG4gIH1cblxuICBzcGFue1xuICAgIGNvbG9yOiAjRkZCMzUxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gICNuZXh0LWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAudGV4dC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICAuY2FuY2VsLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNlNDQwNWY7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICB9XG5cbiAgLmNhbmNlbC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuNCk7XG4gIH1cblxuICAuY2FtZXJhLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgICBib3JkZXI6IDFweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgfVxuXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIH1cblxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cblxuXG4gICNpbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIH1cblxuICBAa2V5ZnJhbWVzIGxpZGUtdXAge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4iLCIjcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNraXAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM4ODg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjODg4O1xuICAtLWJvcmRlci13aWR0aDogM3B4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG59XG5cbi53cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4jZGVmYXVsdC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDUwcHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZGVmYXVsdC1wcm8tcGljdHVyZS5zdmdcIik7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xufVxuXG4jdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwNTE5MTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjRkZCMzUxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xuICBwYWRkaW5nOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jbmV4dC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZzogdW5zZXQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmNhbWVyYS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gIGJvcmRlcjogMXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNpbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbkBrZXlmcmFtZXMgbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ChangeProfilePicturePage = class ChangeProfilePicturePage {
    constructor(photo, router, profile, alert, toast, loading) {
        this.photo = photo;
        this.router = router;
        this.profile = profile;
        this.alert = alert;
        this.toast = toast;
        this.loading = loading;
        this.imageUrl = this.profile.profilePicture.getValue();
        this.uploadedPhoto = false;
        this.awsPrefix = this.imageUrl.slice(-51);
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            this.userEmail = data['email'];
            console.log(this.userEmail);
        });
    }
    getFormData(event) {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'changePhotoForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
                this.uploadedPhoto = true;
            }
        });
        console.log(this.formData);
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            // convert image file to base64 string
            this.uploadedPhotoURL = reader.result;
        }, false);
        if (formElement) {
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    uploadChangedPhoto() {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'changePhotoForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
                this.formData.append('oldPhotoKey', this.awsPrefix);
                this.formData.append('email', this.userEmail);
            }
        });
        this.photo.changeProfilePicture(this.formData).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let newPhoto = data['objectUrl'];
            yield this.presentLoading();
            yield this.profile.profilePicture.next(newPhoto);
            yield this.presentToast();
            yield this.router.navigate(['/home/profile']);
        }));
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your Profile Picture has been changed',
                animated: true,
                cssClass: 'updated-toast',
                duration: 2000
            });
            toast.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Updating Photo...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
};
ChangeProfilePicturePage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ChangeProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-profile-picture',
        template: __webpack_require__(/*! raw-loader!./change-profile-picture.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html"),
        styles: [__webpack_require__(/*! ./change-profile-picture.page.scss */ "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], ChangeProfilePicturePage);



/***/ })

}]);
//# sourceMappingURL=change-profile-picture-change-profile-picture-change-profile-picture-module-es2015.js.map