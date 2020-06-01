(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-page-mentor-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title slot=\"end\">Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-align-items-center\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2\" size=\"4\">\n        <h1>Mentor</h1>\n      </ion-col>\n      <ion-col offset=\"2\" size=\"2\">\n        <ion-button class=\"back-button ion-float-right\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Horizontal Line -->\n    <!-- <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background-color: rgba(0, 0, 0, 0.1);\" >\n      </ion-col>\n    </ion-row> -->\n\n    <!-- Mentors -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n        <ion-row class=\"mentor ion-justify-content-center\" style=\" margin-top: 20px; padding: 10% 0 10% 0;\">\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" push-lg=\"1\" size-lg=\"10\">\n            <div id=\"mentor-profile-picture\"></div>\n\n            <!-- <ion-button id=\"contact-button-header\" (click)=\"contactMentor()\">\n            Contact\n            </ion-button> -->\n            <!-- <ion-img [src]=\"{{mentorPhoto}}\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\n          </ion-col>\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n            <p id=\"mentor-name\">{{mentorName}}</p>\n            <p id=\"mentor-title\">{{mentorTitle}}</p>\n            <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n            <p id=\"mentor-email\">{{mentorEmail}}</p>\n          </ion-col>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n              <p id=\"mentor-description\">{{mentorDescription}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"9\" size-md=\"2\" class=\"ion-text-center\">\n        <ion-button class=\"orange-button\" style=\"margin: 100px 0 100px 0;\" (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MentorPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPagePageRoutingModule", function() { return MentorPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mentor-page.page */ "./src/app/pages/mentors/mentor-page/mentor-page.page.ts");




const routes = [
    {
        path: '',
        component: _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__["MentorPagePage"]
    },
    {
        path: 'contact-mentor/:name/:email/:photo',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-mentor-contact-mentor-module */ "contact-mentor-contact-mentor-module").then(__webpack_require__.bind(null, /*! ./contact-mentor/contact-mentor.module */ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts")).then(m => m.ContactMentorPageModule)
    }
];
let MentorPagePageRoutingModule = class MentorPagePageRoutingModule {
};
MentorPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MentorPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/mentor-page.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: MentorPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPagePageModule", function() { return MentorPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mentor-page-routing.module */ "./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts");
/* harmony import */ var _mentor_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentor-page.page */ "./src/app/pages/mentors/mentor-page/mentor-page.page.ts");







let MentorPagePageModule = class MentorPagePageModule {
};
MentorPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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



/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/mentor-page.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\nion-header {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n.header-wrapper {\n  background: white;\n  width: 50%;\n  height: 100px;\n  border-radius: 100px;\n}\n\n.mentor {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n#mentor-profile-picture {\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n#mentor-title {\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n\n#mentor-location {\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n}\n\n#mentor-email {\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #666;\n  line-height: 1.7em;\n  opacity: 0;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9tZW50b3ItcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLXBhZ2UvbWVudG9yLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0ksWUFBQTtFQUFjLFdBQUE7RUFDZCxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDRUo7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSTtJQUNJLG9DQUFBO1lBQUEsNEJBQUE7RUNFTjtFREFFO0lBQ0ksVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNFTjtBQUNGOztBRFRBO0VBQ0k7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VDRU47RURBRTtJQUNJLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJO0lBQ0ksb0NBQUE7WUFBQSw0QkFBQTtFQ0NOO0VEQ0U7SUFDSSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0NOO0FBQ0Y7O0FEUkE7RUFDSTtJQUNJLG9DQUFBO1lBQUEsNEJBQUE7RUNDTjtFRENFO0lBQ0ksVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9tZW50b3ItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4ubWVudG9yIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuI21lbnRvci1wcm9maWxlLXBpY3R1cmV7XG4gICAgaGVpZ2h0OiA1MHB4OyB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvYWFyb24uanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjVzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjZzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWVtYWlsIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjdzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDEuOXMgZm9yd2FyZHM7XG59XG5cbiNjb250YWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1MHB4IDAgMjUwcHggMDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMjIyKTtcbiAgICAtLXRyYW5zaXRpb246IDAuNXM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5tZW50b3Ige1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4jbWVudG9yLXByb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9hYXJvbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjVzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjZzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWVtYWlsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjdzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjhzIGN1YmljLWJlemllcigwLjE1LCAwLjg1LCAwLjc1LCAwLjkpIDEuOXMgZm9yd2FyZHM7XG59XG5cbiNjb250YWN0LWJ1dHRvbiB7XG4gIG1hcmdpbjogNTBweCAwIDI1MHB4IDA7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMjIyKTtcbiAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/mentor-page.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.ts ***!
  \***************************************************************/
/*! exports provided: MentorPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPagePage", function() { return MentorPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
MentorPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mentor-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mentor-page.page.scss */ "./src/app/pages/mentors/mentor-page/mentor-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], MentorPagePage);



/***/ })

}]);
//# sourceMappingURL=mentor-page-mentor-page-module-es2015.js.map