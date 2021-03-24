(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-confirm-module"],{

/***/ "0IYb":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/confirm/confirm.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <p>Your profile's picture has been changed.</p>\n  </ion-content>\n  <button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n");

/***/ }),

/***/ "29ht":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/confirm/confirm.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Your Resume has been uploaded.</p>\n</ion-content>\n<button (click)=\"goBackToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n");

/***/ }),

/***/ "33pv":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "4iPI":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "8+IP":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/confirm/confirm.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5>You email has been changed.</h5>\n</ion-content>\n<button (click)=\"backToProfilePage()\" id=\"next-button\">BACK TO PROFILE</button>\n");

/***/ }),

/***/ "9v2h":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/change-school/confirm/confirm-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "ZDvN");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "Aqrq":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/resume/confirm/confirm.page.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "29ht");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "zr+d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goBackToProfile() {
        console.log('Updating Resume from View Resume page');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "Bz9F":
/*!************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n  opacity: 0;\n  height: 90vh;\n  --background: rgb(239, 255, 239);\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: #111;\n  font-size: 1.3em;\n  -webkit-animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\nion-button {\n  opacity: 1;\n  font-weight: 600;\n  --background: #4DC066;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUZBQUE7VUFBQSwrRUFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0ksNEJBQUE7RUFFSjtFQUFBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBQ0EsMEJBQUE7RUFFSjtBQUNGOztBQVZBO0VBQ0U7SUFDSSw0QkFBQTtFQUVKO0VBQUE7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtFQUVKO0FBQ0Y7O0FBQ0U7RUFDRTtJQUNJLDBCQUFBO0VBQ047RUFDRTtJQUNJLFVBQUE7SUFDQSw2QkFBQTtFQUNOO0FBQ0Y7O0FBUkU7RUFDRTtJQUNJLDBCQUFBO0VBQ047RUFDRTtJQUNJLFVBQUE7SUFDQSw2QkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNTUsIDIzOSk7XG4gIC0tdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgLjNzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6ICMxMTE7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjJzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMC4zcyBmb3J3YXJkcztcbn1cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJhY2tncm91bmQ6ICM0REMwNjY7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiKDIyMCwgMjU1LCAyMjApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tdXAtMiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgIH1cbiAgfVxuIl19 */");

/***/ }),

/***/ "Cv4O":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "U923");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "E0Ma":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm.page.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "kXK0");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "Xe7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    goToLogin() {
        this.router.navigate(['']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "QGB6":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/change-email/confirm/confirm.page.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "8+IP");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "i2uu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToProfilePage() {
        console.log('Going back to Profile Page');
        this.router.navigate(['/home/profile']);
    }
    cancel() {
        console.log('change email password cancelled');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "QGQF":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/change-email/confirm/confirm.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "u5jz");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "QGB6");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "RPEx":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-school/confirm/confirm.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "9v2h");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "ZDvN");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "TY5D":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm.module.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "dTNj");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "vQgF");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "U923":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm.page.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "gI+l");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "4iPI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToProfile() {
        console.log('Going back to profile');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "VSyP":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-school/confirm/confirm.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <p>Your profile's picture has been changed.</p>\n  </ion-content>\n  <button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>");

/***/ }),

/***/ "X3aN":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/resume/confirm/confirm.module.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "a4x9");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "Aqrq");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "Xe7Q":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".check-icon {\n  width: 80px;\n  height: 80px;\n  margin-top: 30px;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUFDRiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVjay1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMC41cyBmb3J3YXJkcztcbn0iXX0= */");

/***/ }),

/***/ "ZDvN":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/change-school/confirm/confirm.page.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "VSyP");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "wNpw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToProfile() {
        console.log('Going back to profile');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "a4x9":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/resume/confirm/confirm-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "Aqrq");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "bj1g":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 15% 0% 3% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\" class=\"ion-text-center\" size=\"10\">\n        <img src=\"../../../../../../assets/icon/Green-Checked.svg\">\n        <p>An email has been sent to <span style=\"font-weight: 800;\">{{mentorName}}</span> with your message. They will contact you at their earliest convenience. Please be sure to check the email you have associated with your FYF Account.</p>\n        <ion-button (click)=\"returnToMentors()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "cuFB":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "Cv4O");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "U923");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "dTNj":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "vQgF");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "gI+l":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/confirm/confirm.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Your profile's pass been has been changed./p>\n</ion-content>\n<button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n");

/***/ }),

/***/ "gX9W":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "pFW0");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "hVY2":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "E0Ma");




const routes = [
    // Last page of forgot password route
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "i2uu":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/change-email/confirm/confirm.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "kXK0":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/confirm/confirm.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\n      <ion-row>\n        <ion-col size-lg=\"6\" offset-lg=\"3\">\n          <ion-icon class=\"check-icon\" src=\"../../../assets/icon/green-check.svg\" ></ion-icon>\n          <h6 class=\"text-header\">Your password has been changed. Please log in with your new password</h6>\n          <ion-button (click)=\"goToLogin()\" class=\"orange-button\" >LOGIN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "mDKk":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "hVY2");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "E0Ma");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "p/Ua":
/*!************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.module.ts ***!
  \************************************************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "gX9W");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "pFW0");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "pFW0":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "bj1g");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "Bz9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.mentorName = this.activatedRoute.snapshot.paramMap.get('name');
        this.mentorEmail = this.activatedRoute.snapshot.paramMap.get('email');
        this.mentorPhoto = this.activatedRoute.snapshot.paramMap.get('photo');
        console.log('Mentor Photo:');
        console.log(this.mentorName);
        // setTimeout(() => {
        //   this.router.navigate(['/home/mentors']);
        // }, 9000);
    }
    returnToMentors() {
        this.router.navigate(['/home/mentors']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "u5jz":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile/change-email/confirm/confirm-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "QGB6");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "vQgF":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm.page.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm.page.html */ "0IYb");
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.page.scss */ "33pv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToProfile() {
        console.log('Going back to profile');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "wNpw":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-school/confirm/confirm.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "zr+d":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/resume/confirm/confirm.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=confirm-confirm-module-es2015.js.map