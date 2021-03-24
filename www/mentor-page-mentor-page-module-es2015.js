(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-page-mentor-page-module"],{

/***/ "Lb7l":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-button-small {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  position: relative;\n  top: 100px;\n  z-index: 9999;\n}\n\n.orange-button {\n  margin: 120px auto;\n}\n\n#mentor-profile-picture {\n  margin-top: 50px;\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  opacity: 1;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 1;\n}\n\n#mentor-title {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n  opacity: 1;\n}\n\n#mentor-location {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n  opacity: 1;\n}\n\n#mentor-email {\n  font-size: 1em;\n  color: #999;\n  opacity: 1;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #222;\n  line-height: 1.7em;\n  opacity: 1;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbnRvci1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFBYyxXQUFBO0VBQ2Qsa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBS0o7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFGQTtFQUNJLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFGQTtFQUNJO0lBQ0ksNEJBQUE7RUFLTjtFQUhFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBS047QUFDRjs7QUFaQTtFQUNJO0lBQ0ksNEJBQUE7RUFLTjtFQUhFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBS047QUFDRjs7QUFGQTtFQUNJO0lBQ0ksNEJBQUE7RUFJTjtFQUZFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBSU47QUFDRjs7QUFYQTtFQUNJO0lBQ0ksNEJBQUE7RUFJTjtFQUZFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBSU47QUFDRiIsImZpbGUiOiJtZW50b3ItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1idXR0b24tc21hbGwge1xuICAgIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG4ub3JhbmdlLWJ1dHRvbntcbiAgICBtYXJnaW46IDEyMHB4IGF1dG87XG59XG4jbWVudG9yLXByb2ZpbGUtcGljdHVyZXtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDsgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Fhcm9uLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8vIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cbiNtZW50b3ItbmFtZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIG9wYWNpdHk6IDE7XG59XG4jbWVudG9yLWxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNtZW50b3ItZW1haWwge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNtZW50b3ItZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNjb250YWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1MHB4IDAgMjUwcHggMDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMjIyKTtcbiAgICAtLXRyYW5zaXRpb246IDAuNXM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "XAfj":
/*!***************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.ts ***!
  \***************************************************************/
/*! exports provided: MentorPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPagePage", function() { return MentorPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mentor_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mentor-page.page.html */ "d+qt");
/* harmony import */ var _mentor_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mentor-page.page.scss */ "Lb7l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let MentorPagePage = class MentorPagePage {
    constructor(activatedRoute, router, toastController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const name = this.activatedRoute.snapshot.paramMap.get('name');
        // tslint:disable-next-line: radix
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        // tslint:disable-next-line: radix
        const description = this.activatedRoute.snapshot.paramMap.get('description');
        // tslint:disable-next-line: radix
        const photo = this.activatedRoute.snapshot.paramMap.get('photo');
        // tslint:disable-next-line: radix
        const city = this.activatedRoute.snapshot.paramMap.get('city');
        // tslint:disable-next-line: radix
        const state = this.activatedRoute.snapshot.paramMap.get('state');
        this.mentorName = name;
        this.mentorTitle = title;
        this.mentorEmail = email;
        this.mentorDescription = description;
        this.mentorPhoto = photo;
        this.mentorCity = city;
        this.mentorState = state;
    }
    back() {
        this.router.navigate(['/home/mentors']);
    }
    contactMentor() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor', this.mentorName, this.mentorEmail, this.mentorPhoto]);
    }
};
MentorPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
MentorPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mentor-page',
        template: _raw_loader_mentor_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mentor_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], MentorPagePage);



/***/ }),

/***/ "avXv":
/*!*************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MentorPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPagePageRoutingModule", function() { return MentorPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mentor-page.page */ "XAfj");




const routes = [
    {
        path: '',
        component: _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__["MentorPagePage"]
    },
    {
        path: 'contact-mentor/:name/:email/:photo',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-mentor-contact-mentor-module */ "contact-mentor-contact-mentor-module").then(__webpack_require__.bind(null, /*! ./contact-mentor/contact-mentor.module */ "pRc2")).then(m => m.ContactMentorPageModule)
    }
];
let MentorPagePageRoutingModule = class MentorPagePageRoutingModule {
};
MentorPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MentorPagePageRoutingModule);



/***/ }),

/***/ "d+qt":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back()\">\n          Back\n       </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mentors -->\n    <ion-row class=\"mentor ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <div id=\"mentor-profile-picture\"></div>\n            <p id=\"mentor-name\">{{mentorName}}</p>\n            <p id=\"mentor-title\">{{mentorTitle}}</p>\n            <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n            <p id=\"mentor-description\">{{mentorDescription}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"9\" size-md=\"2\" class=\"ion-text-center\">\n        <ion-button class=\"orange-button\"  (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "o1Rv":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: MentorPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPagePageModule", function() { return MentorPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mentor-page-routing.module */ "avXv");
/* harmony import */ var _mentor_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentor-page.page */ "XAfj");







let MentorPagePageModule = class MentorPagePageModule {
};
MentorPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["MentorPagePageRoutingModule"]
        ],
        declarations: [_mentor_page_page__WEBPACK_IMPORTED_MODULE_6__["MentorPagePage"]]
    })
], MentorPagePageModule);



/***/ })

}]);
//# sourceMappingURL=mentor-page-mentor-page-module-es2015.js.map