(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-resume-upload-resume-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  style=\"display: none;\"></ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <h6 class=\"text-header\">Please upload your Resume. Only <span>.pdf</span> files are allowed.</h6>\n        <form id=\"resume-form\" (ngSubmit)=\"uploadResume()\">\n\n          <input name=\"resume\" (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n          type=\"file\"/>\n\n          <ion-button\n            [disabled]=\"!uploaded\"\n            type=\"submit\"\n            class=\"orange-button\"\n            style=\"display: block;\">\n          NEXT</ion-button>\n        </form>\n\n        <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UploadResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePageRoutingModule", function() { return UploadResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-resume.page */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts");




const routes = [
    {
        path: '',
        component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumePage"]
    },
    {
        path: 'login-credentials',
        loadChildren: () => __webpack_require__.e(/*! import() | login-credentials-login-credentials-module */ "login-credentials-login-credentials-module").then(__webpack_require__.bind(null, /*! ../login-credentials/login-credentials.module */ "./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts")).then(m => m.LoginCredentialsPageModule)
    },
];
let UploadResumePageRoutingModule = class UploadResumePageRoutingModule {
};
UploadResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadResumePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts ***!
  \**************************************************************************/
/*! exports provided: UploadResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePageModule", function() { return UploadResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-resume-routing.module */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts");
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-resume.page */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts");







let UploadResumePageModule = class UploadResumePageModule {
};
UploadResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumePageRoutingModule"]
        ],
        declarations: [_upload_resume_page__WEBPACK_IMPORTED_MODULE_6__["UploadResumePage"]]
    })
], UploadResumePageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  margin: 0;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 150px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\nh6 {\n  margin: 30px auto;\n  padding: unset;\n}\n\n.no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n\n.text-header {\n  background: #edf3f8;\n  width: 100%;\n  position: relative;\n  top: -40px;\n  padding: 50px 0;\n  color: #666;\n  z-index: 999;\n}\n\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\n\nspan {\n  color: #005191;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n.skip-button {\n  display: block;\n  border: none;\n  --background: rgb(230, 230, 230);\n  color: #888;\n  width: 150px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\ninput[type=file] {\n  color: #005191;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(6, 114, 196, 0.3)), to(rgba(0, 81, 145, 0.2)));\n  background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  width: auto;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 0px;\n  text-align: center;\n  cursor: pointer;\n  margin: 50px auto;\n}\n\ninput[type=file]:hover {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0672c4), to(#054372));\n  background: linear-gradient(#0672c4, #054372);\n  color: white;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3VwbG9hZC1yZXN1bWUvdXBsb2FkLXJlc3VtZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC91cGxvYWQtcmVzdW1lL3VwbG9hZC1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNDQTs7QURFQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9IQUFBO0VBQUEsMEVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUZBQUE7RUFBQSw2Q0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FESUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNERjtFRElBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNGRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDREY7RURJQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC91cGxvYWQtcmVzdW1lL3VwbG9hZC1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoI2ZkZmJmYiwgI2ZmZjdmOCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmMTViNzcsICNlNDQwNWYpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ubm8tcmVzdW1lIHtcbmJhY2tncm91bmQ6IHJnYmEoMTMsNzAsMTIzLDAuMSk7XG5mb250LXNpemU6IDAuOGVtO1xucGFkZGluZzogMjBweDtcbm1hcmdpbjogNjBweCAwIDYwcHggMDtcbnRyYW5zaXRpb246IDAuNXM7XG5vcGFjaXR5OiAwO1xuYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbn1cblxuLnVwbG9hZGVkLXJlc3VtZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsMjIzLDEzMCwwLjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgY29sb3I6ICM2NjY7XG4gIHotaW5kZXg6IDk5OTtcbiAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmdldC1maWxle1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXdpZHRoIDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlcjogMXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5zcGFue1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5za2lwLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gIGNvbG9yOiAjODg4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDU0MzcyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmRmYmZiLCAjZmZmN2Y4KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2YxNWI3NywgI2U0NDA1Zik7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDYge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgcGFkZGluZzogdW5zZXQ7XG59XG5cbi5uby1yZXN1bWUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MCwgMTIzLCAwLjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cbi51cGxvYWRlZC1yZXN1bWUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAyMjMsIDEzMCwgMC4xKTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA2MHB4IDAgNjBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAwLjVzIGZvcndhcmRzO1xufVxuXG4udGV4dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00MHB4O1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGNvbG9yOiAjNjY2O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5nZXQtZmlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNraXAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gIGNvbG9yOiAjODg4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDU0MzcyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts ***!
  \************************************************************************/
/*! exports provided: UploadResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResumePage", function() { return UploadResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/resume.service */ "./src/app/services/resume.service.ts");






let UploadResumePage = class UploadResumePage {
    constructor(router, alertController, auth, resume) {
        this.router = router;
        this.alertController = alertController;
        this.auth = auth;
        this.resume = resume;
        this.uploaded = true;
    }
    ngOnInit() {
    }
    getFormData(event) {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'resume-form') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
            }
        });
    }
    uploadResume() {
        this.resume.resumeUpload(this.formData).subscribe(data => {
            console.log(data['objectUrl']);
            this.goToCredentialsPage(data['objectUrl']);
        });
    }
    goToCredentialsPage(resume) {
        this.auth.getResume(resume);
        console.log('Going to Credentials Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
    }
    getFileFromPhone() {
        console.error("TODO: getFileFromPhone() not implemented yet");
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentAlert();
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Skip',
                message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
                buttons: [
                    {
                        text: 'Skip',
                        handler: () => {
                            // Get Default Picture Logo
                            const canvasElement = document.querySelectorAll('canvas');
                            canvasElement.forEach(canvas => {
                                if (canvas.id === 'default-picture-wrapper') {
                                    console.log('Got Canvas: ' + canvas.toDataURL);
                                    canvas.toBlob((blob) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        const canvasData = new FormData();
                                        yield canvasData.set('profile-picture', blob, 'default.png');
                                        console.log(canvasData);
                                        let reader = new FileReader();
                                        if (canvasData) {
                                            reader.readAsBinaryString(blob);
                                        }
                                        yield this.resume.resumeUpload(canvasData).subscribe(data => {
                                            console.log(data);
                                            console.log('Default Image Upload API Successful');
                                            return this.goToCredentialsPage(data['objectUrl']);
                                        });
                                    }));
                                }
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling Resume Upload Skip...');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
UploadResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_resume_service__WEBPACK_IMPORTED_MODULE_5__["ResumeService"] }
];
UploadResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-resume',
        template: __webpack_require__(/*! raw-loader!./upload-resume.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html"),
        styles: [__webpack_require__(/*! ./upload-resume.page.scss */ "./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_resume_service__WEBPACK_IMPORTED_MODULE_5__["ResumeService"]])
], UploadResumePage);



/***/ })

}]);
//# sourceMappingURL=upload-resume-upload-resume-module-es2015.js.map