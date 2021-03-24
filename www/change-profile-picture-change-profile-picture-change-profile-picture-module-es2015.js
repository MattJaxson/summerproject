(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-change-profile-picture-change-profile-picture-module"],{

/***/ "AGLF":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 50px auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: #888;\n  --border-color: #888;\n  --border-width: 3px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.blue-button {\n  width: unset;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 4px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #222;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 1.2em;\n  padding: unset;\n  color: #333;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n\n@-webkit-keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNGQUFBO1VBQUEsOEVBQUE7QUFFSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBRUo7O0FBQ0U7RUFDRSwyQ0FBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0U7SUFDRSw0QkFBQTtFQURKO0VBSUU7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFGSjtBQUNGOztBQU5FO0VBQ0U7SUFDRSw0QkFBQTtFQURKO0VBSUU7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFGSjtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICAgIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG4gIH1cblxuICAub3JhbmdlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5ibHVlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cblxuICAuc2tpcC1idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjODg4O1xuICAgIC0tYm9yZGVyLXdpZHRoIDogM3B4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIC5ibHVlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiB1bnNldDtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG5cbiAgI2RlZmF1bHQtcGljdHVyZS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gNTBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9kZWZhdWx0LXByby1waWN0dXJlLnN2ZycpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpIDAuNXMgZm9yd2FyZHM7XG4gIH1cblxuICAjdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDUxOTE7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbiAgfVxuXG4gIHNwYW57XG4gICAgY29sb3I6ICNGRkIzNTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgI25leHQtYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIC50ZXh0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiB1bnNldDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIC5jYW5jZWwtYnV0dG9uIHtcbiAgICBjb2xvcjogI2U0NDA1ZjtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIH1cblxuICAuY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC40KTtcbiAgfVxuXG4gIC5jYW1lcmEtYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1jb2xvcjogIzAwNTE5MTtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1jb2xvcjojMDA1MTkxO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgfVxuXG4gIGlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuXG5cbiAgI2ltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbGlkZS11cCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "ANOX":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ChangeProfilePicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePicturePageRoutingModule", function() { return ChangeProfilePicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-profile-picture.page */ "WWSx");




const routes = [
    {
        path: '',
        component: _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ChangeProfilePicturePage"]
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "TY5D")).then(m => m.ConfirmPageModule)
    }
];
let ChangeProfilePicturePageRoutingModule = class ChangeProfilePicturePageRoutingModule {
};
ChangeProfilePicturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeProfilePicturePageRoutingModule);



/***/ }),

/***/ "Ps9y":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Profile Picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2\" size=\"3.5\">\n        <h1>Change Profile Picture</h1>\n      </ion-col>\n      <ion-col push=\"2\" size=\"2\">\n        <ion-button class=\"blue-button\" expand=\"block\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" style=\"margin-top: 50px;\">\n        <h6 class=\"text-header\">Please select the profile picture you will use to replace your current one. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <!-- <p>{{awsPrefix}}</p> -->\n        <img *ngIf=\"!uploadedPhoto\" id=\"profile-picture\" src=\"{{imageUrl}}\" alt=\"Profile Picture\">\n\n\n        <img *ngIf=\"uploadedPhoto\" id=\"profile-picture\" src=\"{{uploadedPhotoURL}}\" alt=\"Profile Picture\">\n\n        <form\n        (ngSubmit)=\"uploadChangedPhoto()\" id=\"changePhotoForm\">\n          <input\n            name=\"profile-picture-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!imageUrl\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "WWSx":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChangeProfilePicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePicturePage", function() { return ChangeProfilePicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-profile-picture.page.html */ "Ps9y");
/* harmony import */ var _change_profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-profile-picture.page.scss */ "AGLF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/profile.service */ "Aso2");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/photo.service */ "6/gD");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.page */ "1tJ+");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/emitters/single-post-page-emitter.service */ "wbj2");












let ChangeProfilePicturePage = class ChangeProfilePicturePage {
    constructor(photo, router, profile, alert, modal, toast, loading, postEmitter, singlePostEmitterService) {
        this.photo = photo;
        this.router = router;
        this.profile = profile;
        this.alert = alert;
        this.modal = modal;
        this.toast = toast;
        this.loading = loading;
        this.postEmitter = postEmitter;
        this.singlePostEmitterService = singlePostEmitterService;
        this.imageUrl = this.profile.profilePicture.getValue();
        this.uploadedPhoto = false;
        this.awsPrefix = this.imageUrl.slice(-51);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            this.userEmail = data['email'];
            console.log(this.userEmail);
        });
    }
    getFormData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formElement = document.querySelectorAll('form');
            yield formElement.forEach(form => {
                if (form.id === 'changePhotoForm') {
                    console.log('Got Form: ' + form);
                    this.formData = new FormData(form);
                    this.uploadedPhoto = true;
                }
            });
            console.log(this.formData);
            let reader = new FileReader();
            yield reader.addEventListener('load', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // convert image file to base64 string
                this.uploadedPhotoURL = reader.result;
                console.log('Before cropping: ' + reader.result);
                yield this.cropPhoto(this.uploadedPhotoURL);
            }), true);
            if (formElement) {
                return reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
    uploadChangedPhoto() {
        const formData = new FormData();
        formData.append('oldPhotoKey', this.awsPrefix);
        formData.append('email', this.userEmail);
        const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');
        formData.append('profile-picture-update', photoFile);
        if (this.uploadedPhoto === true) {
            this.photo.changeProfilePicture(formData).subscribe(data => {
                console.log(data);
                let newPhoto = data['objectUrl'];
                // Update all the creatorProfilePicture properties with newPhoto
                // this.photo.updatePostPhotos(newPhoto, this.userEmail);
                this.presentLoading();
                this.profile.profilePicture.next(newPhoto);
                this.presentToast();
                // Get profile pages to refresh with updated profile pics
                this.postEmitter.postPageRefresh();
                this.singlePostEmitterService.singlePostPageRefresh();
                this.router.navigate(['/home/profile']);
            });
        }
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
    cropPhoto(uploadedPhotoURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_9__["ImageCropperPage"],
                cssClass: 'image-cropper',
                componentProps: {
                    uploadedPhotoURL
                }
            });
            yield modal.present();
            modal.onDidDismiss().then(data => {
                this.uploadedPhotoURL = data.data;
            });
        });
    }
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
};
ChangeProfilePicturePage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"] },
    { type: src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_11__["SinglePostPageEmitterService"] }
];
ChangeProfilePicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-profile-picture',
        template: _raw_loader_change_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"],
        src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_11__["SinglePostPageEmitterService"]])
], ChangeProfilePicturePage);



/***/ }),

/***/ "aGP+":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ChangeProfilePicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePicturePageModule", function() { return ChangeProfilePicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-profile-picture-routing.module */ "ANOX");
/* harmony import */ var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-profile-picture.page */ "WWSx");
/* harmony import */ var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.module */ "Scpy");








let ChangeProfilePicturePageModule = class ChangeProfilePicturePageModule {
};
ChangeProfilePicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeProfilePicturePageRoutingModule"],
            src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__["ImageCropperPageModule"]
        ],
        declarations: [_change_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ChangeProfilePicturePage"]]
    })
], ChangeProfilePicturePageModule);



/***/ })

}]);
//# sourceMappingURL=change-profile-picture-change-profile-picture-change-profile-picture-module-es2015.js.map