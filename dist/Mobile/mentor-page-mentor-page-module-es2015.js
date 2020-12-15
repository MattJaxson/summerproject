(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-page-mentor-page-module"],{

/***/ "Lb7l":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\nion-header {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n.header-wrapper {\n  background: white;\n  width: 50%;\n  height: 100px;\n  border-radius: 100px;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n#mentor-profile-picture {\n  margin-top: 50px;\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n#mentor-title {\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n\n#mentor-location {\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n}\n\n#mentor-email {\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #666;\n  line-height: 1.7em;\n  opacity: 0;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9tZW50b3ItcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUFjLFdBQUE7RUFDZCxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBRko7O0FBS0E7RUFDSSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSTtJQUNJLDRCQUFBO0VBRk47RUFJRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQUZOO0FBQ0Y7O0FBTEE7RUFDSTtJQUNJLDRCQUFBO0VBRk47RUFJRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQUZOO0FBQ0Y7O0FBS0E7RUFDSTtJQUNJLDRCQUFBO0VBSE47RUFLRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQUhOO0FBQ0Y7O0FBSkE7RUFDSTtJQUNJLDRCQUFBO0VBSE47RUFLRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW50b3JzL21lbnRvci1wYWdlL21lbnRvci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cblxuLmhlYWRlci13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIG9wYWNpdHk6IHVuc2V0O1xufVxuXG4ubWVudG9yIHtcbiAgXG59XG5cbiNtZW50b3ItcHJvZmlsZS1waWN0dXJle1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4OyB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvYWFyb24uanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS41cyBmb3J3YXJkcztcbn1cblxuI21lbnRvci1sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM5OTk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNnMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItZW1haWwge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjdzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDEuOXMgZm9yd2FyZHM7XG59XG5cbiNjb250YWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1MHB4IDAgMjUwcHggMDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMjIyKTtcbiAgICAtLXRyYW5zaXRpb246IDAuNXM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"toolbar-title\" slot=\"start\">Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-align-items-center\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2\" size=\"4\">\n        <h1>Mentor</h1>\n      </ion-col>\n      <ion-col offset=\"2\" size=\"2\">\n        <ion-button class=\"blue-button ion-float-right\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mentors -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\">\n        <ion-row class=\"mentor ion-justify-content-center\">\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" push-lg=\"1\" size-lg=\"10\">\n            <div id=\"mentor-profile-picture\"></div>\n\n            <!-- <ion-button id=\"contact-button-header\" (click)=\"contactMentor()\">\n            Contact\n            </ion-button> -->\n            <!-- <ion-img [src]=\"{{mentorPhoto}}\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\n          </ion-col>\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n            <p id=\"mentor-name\">{{mentorName}}</p>\n            <p id=\"mentor-title\">{{mentorTitle}}</p>\n            <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n          </ion-col>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n              <p id=\"mentor-description\">{{mentorDescription}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"9\" size-md=\"2\" class=\"ion-text-center\">\n        <ion-button class=\"orange-button\" style=\"margin: 100px 0 100px 0;\" (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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