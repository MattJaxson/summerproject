(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/posts/add-post/verification/verification.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/posts/add-post/verification/verification.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"display: none;\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-title>Verification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 5% 0% 3%;\">\n      <ion-col class=\"ion-align-self-center ion-text-center\" size=\"10\">\n        <img id=\"confirm-icon\" src=\"../../../../../assets/icon/white-check.svg\">\n        <p id=\"confirm-text\">Thank you for adding a post! Please allow for up to 1 day for your post to be verified. You will recieve a notifcation soon. (Refactor message)</p>\n        <ion-button (click)=\"backToPosts()\" color=\"light\" fill=\"solid\">Done</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/posts/add-post/verification/verification-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/posts/add-post/verification/verification.page.ts");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/add-post/verification/verification.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification.module.ts ***!
  \**************************************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-routing.module */ "./src/app/pages/posts/add-post/verification/verification-routing.module.ts");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/posts/add-post/verification/verification.page.ts");







let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"]
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "./src/app/pages/posts/add-post/verification/verification.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  margin: 0;\n}\n\n#background {\n  opacity: 0;\n  height: 90vh;\n  --background: #999;\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: white;\n  font-size: 1.3em;\n  font-weight: 800;\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n}\n\n#confirm-icon {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n}\n\nion-button {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2FkZC1wb3N0L3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLHVGQUFBO1VBQUEsK0VBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0FGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNERjtFREdBO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7RUNERjtBQUNGOztBRE5BO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDREY7RURHQTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2FkZC1wb3N0L3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIC4zcyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAycyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0taWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMS4zcyBmb3J3YXJkcztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgM3MgZm9yd2FyZHM7XG59XG5cbi8vIEtleWZyYW1lc1xuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNzk3O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAtMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG59IiwiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC43NSwgMC45KSAwLjNzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogODAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC43NSwgMC45KSAycyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0taWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllcigwLjE1LCAwLjg1LCAwLjc1LCAwLjkpIDEuM3MgZm9yd2FyZHM7XG59XG5cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC43NSwgMC45KSAzcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNzk3O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwLTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/posts/add-post/verification/verification.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification.page.ts ***!
  \************************************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let VerificationPage = class VerificationPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToPosts() {
        this.router.navigate(['/home/posts']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: __webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/posts/add-post/verification/verification.page.html"),
        styles: [__webpack_require__(/*! ./verification.page.scss */ "./src/app/pages/posts/add-post/verification/verification.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=verification-verification-module-es2015.js.map