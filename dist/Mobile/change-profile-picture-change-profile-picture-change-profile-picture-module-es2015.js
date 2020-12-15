(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-change-profile-picture-change-profile-picture-module"],{

/***/ "AGLF":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 50px auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\n.blue-button {\n  width: 200px;\n}\n\n.skip-button {\n  display: block;\n  --background: none;\n  color: #888;\n  --border-color: #888;\n  --border-width: 3px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n.blue-button {\n  width: unset;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 4px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #222;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.text-header {\n  font-size: 1.2em;\n  padding: unset;\n  color: #333;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n\n@-webkit-keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUFlLFlBQUE7RUFDZiwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBQ0Esa0ZBQUE7VUFBQSwwRUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUFlLFlBQUE7RUFDZix5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0ZBQUE7VUFBQSw4RUFBQTtBQUVKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFFSjs7QUFDRTtFQUNFLDJDQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRTtJQUNFLDRCQUFBO0VBREo7RUFJRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUZKO0FBQ0Y7O0FBTkU7RUFDRTtJQUNFLDRCQUFBO0VBREo7RUFJRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLXBpY3R1cmUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgLm9yYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG5cbiAgLnNraXAtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci13aWR0aCA6IDNweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gICNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZGVmYXVsdC1wcm8tcGljdHVyZS5zdmcnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDA1MTkxO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG4gIH1cblxuICBzcGFue1xuICAgIGNvbG9yOiAjRkZCMzUxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gICNuZXh0LWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAudGV4dC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICAuY2FuY2VsLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNlNDQwNWY7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICB9XG5cbiAgLmNhbmNlbC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuNCk7XG4gIH1cblxuICAuY2FtZXJhLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IzAwNTE5MTtcbiAgICBib3JkZXI6IDFweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgfVxuXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIH1cblxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cblxuXG4gICNpbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIH1cblxuICBAa2V5ZnJhbWVzIGxpZGUtdXAge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4iXX0= */");

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