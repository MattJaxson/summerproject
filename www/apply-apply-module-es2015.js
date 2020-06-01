(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-apply-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  <ion-title style=\"color: white;\">Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"app-wrapper\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n\n        <!-- Logo, Title, Company Name -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n            <div class=\"company-logo\" style=\"height: 80px; width: 80px;\"></div>\n\n            <h1 class=\"job-title\">{{jobTitle}}</h1>\n\n            <h2 class=\"company-name\">{{jobCompanyName}}</h2>\n\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button class=\"ion-hide-md-down back-button\" (click)=\"goBack()\">\n              Go Back</ion-button>\n          </ion-col>\n        </ion-row>\n\n        <!-- Line -->\n        <ion-row id=\"instructions\" class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n            <hr style=\"background-color: #999;\">\n          </ion-col>\n        </ion-row>\n\n        <!-- Instructions -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n            <p class=\"instructions\" style=\"font-weight: 600;\">Please go over your Resume and information before you apply.</p>\n          </ion-col>\n        </ion-row>\n\n        <!-- Forms -->\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 100px;\">\n            <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n              <form *ngIf=\"applyPageForm\" [formGroup]=\"applyPageForm\">\n                <ion-list class=\"line-input\">\n                  <p class=\"instructions\" >Phone Number</p>\n                  <ion-item>\n                    <ion-input formControlName=\"phoneNumber\" maxlength=\"10\" inputmode=\"tel\"></ion-input>\n                  </ion-item>\n\n                  <p class=\"instructions\" >Resume</p>\n                  <ion-item>\n                    <ion-button class=\"back-button\" style=\"height: 30px;\" (click)=\"viewResume()\">\n                      View Resume\n                    </ion-button>\n                    <!-- <p>or</p> -->\n                    <ion-input type=\"file\" class=\"custom-file-input \">\n                      <label style=\"margin-right: 10px;\">Upload Resume</label>\n                    </ion-input>\n                  </ion-item>\n\n\n                  <ion-item>\n                    <ion-textarea\n                    formControlName=\"reasonTextArea\"\n                    maxlength=\"2500\"\n                    rows=\"10\"\n                    placeholder=\"Why are you a great candidate for the position of {{jobTitle}}? .. optional - 2500 characters max\"\n                    ></ion-textarea>\n                  </ion-item>\n                </ion-list>\n                <p></p>\n                <ion-row>\n                  <ion-col class=\"ion-text-center\" size=\"12\">\n                    <ion-button (click)=\"finishApplication()\" class=\"orange-button next-button\">Submit</ion-button>\n                  </ion-col>\n                </ion-row>\n              </form>\n              </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/jobs/apply/apply-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ApplyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageRoutingModule", function() { return ApplyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply.page */ "./src/app/pages/jobs/apply/apply.page.ts");




const routes = [
    {
        path: '',
        component: _apply_page__WEBPACK_IMPORTED_MODULE_3__["ApplyPage"]
    },
    {
        path: 'apply-confirm/:title/:companyName/:companyEmail',
        loadChildren: () => __webpack_require__.e(/*! import() | apply-confirm-apply-confirm-module */ "apply-confirm-apply-confirm-module").then(__webpack_require__.bind(null, /*! ../apply-confirm/apply-confirm.module */ "./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts")).then(m => m.ApplyConfirmPageModule)
    }
];
let ApplyPageRoutingModule = class ApplyPageRoutingModule {
};
ApplyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jobs/apply/apply.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.module.ts ***!
  \**************************************************/
/*! exports provided: ApplyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageModule", function() { return ApplyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-routing.module */ "./src/app/pages/jobs/apply/apply-routing.module.ts");
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply.page */ "./src/app/pages/jobs/apply/apply.page.ts");







let ApplyPageModule = class ApplyPageModule {
};
ApplyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyPageRoutingModule"]
        ],
        declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_6__["ApplyPage"]]
    })
], ApplyPageModule);



/***/ }),

/***/ "./src/app/pages/jobs/apply/apply.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.app-wrapper {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin: 100px 0 100px 0;\n}\n\n@media only screen and (max-width: 992px) {\n  .app-wrapper {\n    margin: 40px 0 40px 0;\n  }\n}\n\n.company-logo {\n  margin-top: 20px;\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nh1.job-title {\n  font-size: 2em;\n  font-weight: 900;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\nh2.company-name {\n  margin-top: 0;\n  margin-bottom: 15px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;\n}\n\np {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n\np:nth-child(1) {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\np:nth-child(2) {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\np:nth-child(3) {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n.custom-file-input {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  display: inline-block;\n  background: -webkit-gradient(linear, left top, left bottom, from(#f9f9f9), to(#e3e3e3));\n  background: linear-gradient(top, #f9f9f9, #e3e3e3);\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: black;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\nion-label {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n\nion-item {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\nion-item:nth-child(1) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\nion-item:nth-child(2) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\nion-item:nth-child(3) {\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n}\n\nion-item:nth-child(4) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n\nion-item:nth-child(5) {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n}\n\nion-item:nth-child(6) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\nion-item:nth-child(7) {\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s;\n}\n\nion-item:nth-child(8) {\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n\n.back-button {\n  width: unset;\n}\n\n.orange-button {\n  width: unset;\n}\n\n@-webkit-keyframes logo-slide-in {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes logo-slide-in {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes header-slide-up {\n  0% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes header-slide-up {\n  0% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes item-slide-in {\n  0% {\n    -webkit-transform: translateX(-7px);\n            transform: translateX(-7px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes item-slide-in {\n  0% {\n    -webkit-transform: translateX(-7px);\n            transform: translateX(-7px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9hcHBseS9hcHBseS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2pvYnMvYXBwbHkvYXBwbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHFCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLDJGQUFBO1VBQUEsbUZBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUZBQUE7RUFBQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsMERBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQ0dGOztBREFBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0dGOztBRERBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0lGOztBREZBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0tGOztBREhBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ01GOztBREpBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ09GOztBRExBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ1NGOztBRFBBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ1VGOztBRFBBO0VBQ0UsWUFBQTtBQ1VGOztBRFBBO0VBQ0UsWUFBQTtBQ1VGOztBRFBBO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDVUY7RURSQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDVUY7QUFDRjs7QURqQkE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNVRjtFRFJBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNVRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDU0Y7RURQQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDU0Y7QUFDRjs7QURoQkE7RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNTRjtFRFBBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNTRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDUUY7RUROQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDUUY7QUFDRjs7QURmQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtFQ1FGO0VETkE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ1FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2FwcGx5L2FwcGx5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgbWFyZ2luOiAxMDBweCAwIDEwMHB4IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFwcC13cmFwcGVyIHtcbiAgICBtYXJnaW46IDQwcHggMCA0MHB4IDA7XG4gIH1cbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGxvZ28tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuaDEuam9iLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuaDIuY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS4xcyBmb3J3YXJkcztcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5wOm50aC1jaGlsZCgxKSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG5wOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG5wOm50aC1jaGlsZCgzKSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTZWxlY3Qgc29tZSBmaWxlcyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuaW9uLWl0ZW0ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjdzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4zcztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi42cztcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbn1cblxuQGtleWZyYW1lcyBsb2dvLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaXRlbS1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTdweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luOiAxMDBweCAwIDEwMHB4IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFwcC13cmFwcGVyIHtcbiAgICBtYXJnaW46IDQwcHggMCA0MHB4IDA7XG4gIH1cbn1cbi5jb21wYW55LWxvZ28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBsb2dvLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbmgxLmpvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuOHMgZm9yd2FyZHM7XG59XG5cbmgyLmNvbXBhbnktbmFtZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuMXMgZm9yd2FyZHM7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzY2Njtcbn1cblxucDpudGgtY2hpbGQoMSkge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxucDpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxucDpudGgtY2hpbGQoMykge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiU2VsZWN0IHNvbWUgZmlsZXNcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjlmOWY5LCAjZTNlM2UzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0OmhvdmVyOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuaW9uLWl0ZW0ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4xcztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuN3M7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4zcztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xufVxuXG4uYmFjay1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xufVxuXG5Aa2V5ZnJhbWVzIGxvZ28tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGl0ZW0tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/jobs/apply/apply.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.ts ***!
  \************************************************/
/*! exports provided: ApplyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPage", function() { return ApplyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ApplyPage = class ApplyPage {
    constructor(router, activatedRoute, jobs, profile, formBuilder, location) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobs = jobs;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.location = location;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        this.jobTitle = title;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.profile.getUserDetails().subscribe(data => {
            let user = data;
            let userPhoneNumber = data["phone"];
            let userResume = data["resume"];
            this.user = user;
            this.userPhoneNumber = userPhoneNumber;
            this.userResume = userResume;
            this.populateForm(userPhoneNumber);
        });
    }
    goBack() {
        this.location.back();
    }
    populateForm(phoneNumber) {
        this.applyPageForm = this.formBuilder.group({
            phoneNumber: [phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)
                ])],
            reasonTextArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2500)])]
        });
    }
    viewResume() {
        console.log('Viewing Resume');
    }
    uploadResume() {
        console.log('Uploading Resume');
    }
    sendConfirmationEmail() {
        console.log('Sending confirmation email to Users email address');
    }
    finishApplication() {
        this.jobs.sendEmailApplication(this.user).subscribe();
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
    }
};
ApplyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ApplyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apply.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apply.page.scss */ "./src/app/pages/jobs/apply/apply.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], ApplyPage);



/***/ })

}]);
//# sourceMappingURL=apply-apply-module-es2015.js.map