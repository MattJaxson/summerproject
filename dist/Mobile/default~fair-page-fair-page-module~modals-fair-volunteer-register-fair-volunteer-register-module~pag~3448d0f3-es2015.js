(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fair-page-fair-page-module~modals-fair-volunteer-register-fair-volunteer-register-module~pag~3448d0f3"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header>\n</ion-header>\n\n\n<ion-content>\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Register New Volunteer</p>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1>Tech Fair</h1>\n        <h5>Date</h5>\n        <h5>Address</h5>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit a expedita sed nostrum reprehenderit assumenda sequi veritatis rerum magnam omnis minima ratione, odio quidem adipisci possimus qui molestiae! Quisquam!</p>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <div style=\"text-align: center; margin: 100px auto\">\n          <ion-button type=\"submit\" class=\"orange-button\">\n            Register\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modals/fair-volunteer-register/fair-volunteer-register-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modals/fair-volunteer-register/fair-volunteer-register-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: FairVolunteerRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairVolunteerRegisterPageRoutingModule", function() { return FairVolunteerRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fair_volunteer_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fair-volunteer-register.page */ "./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.ts");




const routes = [
    {
        path: '',
        component: _fair_volunteer_register_page__WEBPACK_IMPORTED_MODULE_3__["FairVolunteerRegisterPage"]
    }
];
let FairVolunteerRegisterPageRoutingModule = class FairVolunteerRegisterPageRoutingModule {
};
FairVolunteerRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FairVolunteerRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/fair-volunteer-register/fair-volunteer-register.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modals/fair-volunteer-register/fair-volunteer-register.module.ts ***!
  \**********************************************************************************/
/*! exports provided: FairVolunteerRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairVolunteerRegisterPageModule", function() { return FairVolunteerRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fair_volunteer_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fair-volunteer-register-routing.module */ "./src/app/modals/fair-volunteer-register/fair-volunteer-register-routing.module.ts");
/* harmony import */ var _fair_volunteer_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fair-volunteer-register.page */ "./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.ts");







let FairVolunteerRegisterPageModule = class FairVolunteerRegisterPageModule {
};
FairVolunteerRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fair_volunteer_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairVolunteerRegisterPageRoutingModule"]
        ],
        declarations: [_fair_volunteer_register_page__WEBPACK_IMPORTED_MODULE_6__["FairVolunteerRegisterPage"]]
    })
], FairVolunteerRegisterPageModule);



/***/ }),

/***/ "./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  color: white;\n  font-size: 1.2em;\n  position: relative;\n  top: -5px;\n}\n\nion-header {\n  background: #21ce99;\n}\n\n.confirm-popout {\n  height: 100vh;\n  width: 100vw;\n  background-color: White;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  -webkit-animation: popout 1s ease forwards;\n          animation: popout 1s ease forwards;\n}\n\n.header-slide-up {\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n.slide-up {\n  opacity: 0;\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n#sign-up {\n  background: lightblue;\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nion-list-header {\n  margin-top: 100px;\n}\n\n@-webkit-keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@-webkit-keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n\n@keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL2ZhaXItdm9sdW50ZWVyLXJlZ2lzdGVyL2ZhaXItdm9sdW50ZWVyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2ZhaXItdm9sdW50ZWVyLXJlZ2lzdGVyL2ZhaXItdm9sdW50ZWVyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFRENBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0NGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFRENBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDQUY7RURFQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDQUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxjQUFBO0VDREY7RURHQTtJQUNFLGFBQUE7RUNERjtBQUNGOztBRExBO0VBQ0U7SUFDRSxjQUFBO0VDREY7RURHQTtJQUNFLGFBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2ZhaXItdm9sdW50ZWVyLXJlZ2lzdGVyL2ZhaXItdm9sdW50ZWVyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMWNlOTk7XG59XG5cbi5jb25maXJtLXBvcG91dCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBhbmltYXRpb246IHBvcG91dCAxcyBlYXNlIGZvcndhcmRzO1xufVxuXG4uaGVhZGVyLXNsaWRlLXVwe1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbi5zbGlkZS11cCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuI3NpZ24tdXAge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb2ZmIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCJpb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMjFjZTk5O1xufVxuXG4uY29uZmlybS1wb3BvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBwb3BvdXQgMXMgZWFzZSBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1zbGlkZS11cCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuLnNsaWRlLXVwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBlYXNlIDFzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBvZmYge1xuICAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.ts ***!
  \********************************************************************************/
/*! exports provided: FairVolunteerRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairVolunteerRegisterPage", function() { return FairVolunteerRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let FairVolunteerRegisterPage = class FairVolunteerRegisterPage {
    constructor(modal, formBuilder) {
        this.modal = modal;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.resgisterForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].name],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            lunch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            school: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    cancel() {
        this.modal.dismiss();
    }
    confirm() {
        this.modal.dismiss();
    }
};
FairVolunteerRegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
FairVolunteerRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fair-volunteer-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fair-volunteer-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fair-volunteer-register.page.scss */ "./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], FairVolunteerRegisterPage);



/***/ })

}]);
//# sourceMappingURL=default~fair-page-fair-page-module~modals-fair-volunteer-register-fair-volunteer-register-module~pag~3448d0f3-es2015.js.map