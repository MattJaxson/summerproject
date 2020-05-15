(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-page-events-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\r\n<ion-header class=\"ion-hide-lg-up\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button *ngIf=\"going\" (click)=\"notGoingToEvent()\" style=\"--padding-end: 20px;\">\r\n          No longer going to this Event?\r\n            <ion-icon  name=\"close-circle-outline\" style=\"color: #e4405f\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!going\" (click)=\"goingToEvent()\" style=\"--padding-end: 20px;\">\r\n          Want to go to this Event?\r\n            <ion-icon name=\"add-circle\" style=\"color: #21ce99\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-grid class=\"ion-hide-lg-down\">\r\n\r\n        <!-- Picture Header -->\r\n        <ion-row class=\"ion-justify-content-center header ion-align-items-center\">\r\n          <ion-col size-lg=\"6\">\r\n            <!-- Image needs to be 500x357, 800x571, or 1050x750 -->\r\n              <div class=\"event-image\"></div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Event Details -->\r\n        <ion-row class=\"details ion-justify-content-center ion-align-items-center\">\r\n          <ion-col size-lg=\"6\">\r\n            <p> <span>Title</span><br> {{ eventTitle }}</p><br>\r\n            <p> <span>Address </span><br>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p><br>\r\n            <p> <span>Date</span><br> {{ eventDate }}</p><br>\r\n            <p> <span>Time</span><br> {{ eventTime }}</p><br>\r\n            <p> <span>Description</span><br> {{ eventDescription }}</p><br>\r\n        </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Going or Not Going sections? -->\r\n\r\n        <!-- GOING? -->\r\n        <ion-row *ngIf=\"!going\" class=\"going ion-justify-content-center\">\r\n            <ion-col class=\"going\" size=\"12\">\r\n              <ion-row class=\"going ion-justify-content-center\">\r\n                <ion-col class=\"ion-text-center\" size=\"6\">\r\n                  <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'Yes', this event will be added to your Your Events.</p>\r\n                  <ion-button class=\"going-button\" (click)=\"goingToEvent()\">\r\n                   Yes.\r\n                  </ion-button><br><br>\r\n                  <a class=\"going-link\" routerLink=\"/home/events\">Go back to Events Page</a><br><br>\r\n                  <a class=\"going-link\" routerLink=\"/home/events/going\">View My Events</a>\r\n                 </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- NOT GOING -->\r\n        <ion-row *ngIf=\"going\" class=\"ion-justify-content-center\">\r\n          <ion-col class=\"not-going\" size=\"12\">\r\n            <ion-row class=\"not-going ion-justify-content-center\">\r\n              <ion-col class=\"ion-text-center\" size=\"6\">\r\n                <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'No', this event will be deleted to your Your Events.</p>\r\n                <ion-button class=\"not-going-button\" (click)=\"notGoingToEvent()\">\r\n                 No.\r\n                </ion-button><br><br>\r\n                <a class=\"not-going-link\" routerLink=\"/home/events\">Go back to Events Page</a><br><br>\r\n                <a class=\"not-going-link\" routerLink=\"/home/events/going\">View My Events</a>\r\n               </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n      </ion-row>\r\n\r\n      </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/events/events-page/events-page-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EventsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPagePageRoutingModule", function() { return EventsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-page.page */ "./src/app/pages/events/events-page/events-page.page.ts");




const routes = [
    {
        path: '',
        component: _events_page_page__WEBPACK_IMPORTED_MODULE_3__["EventsPagePage"]
    }
];
let EventsPagePageRoutingModule = class EventsPagePageRoutingModule {
};
EventsPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/events/events-page/events-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.module.ts ***!
  \****************************************************************/
/*! exports provided: EventsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPagePageModule", function() { return EventsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-page-routing.module */ "./src/app/pages/events/events-page/events-page-routing.module.ts");
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-page.page */ "./src/app/pages/events/events-page/events-page.page.ts");







let EventsPagePageModule = class EventsPagePageModule {
};
EventsPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _events_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPagePageRoutingModule"]
        ],
        declarations: [_events_page_page__WEBPACK_IMPORTED_MODULE_6__["EventsPagePage"]]
    })
], EventsPagePageModule);



/***/ }),

/***/ "./src/app/pages/events/events-page/events-page.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  color: #005191;\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\np {\n  font-size: 1.3em;\n  color: #999;\n}\n\n.going-link:link {\n  color: #1baf88;\n}\n\n.going-link:visited {\n  color: #1baf88;\n}\n\n.not-going-link:link {\n  color: #FA6400;\n}\n\n.not-going-link:visited {\n  color: #FA6400;\n}\n\n.going-text {\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 10%;\n}\n\n.header {\n  background-color: none;\n  height: 70vh;\n}\n\n.event-image {\n  height: 500px;\n  background: lightgrey;\n  background: url('Journi_flyer-500x357.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  opacity: 0;\n  -webkit-animation: slide-up 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;\n          animation: slide-up 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;\n}\n\n.details {\n  padding: 100px 0 100px;\n  height: auto;\n  background: white;\n}\n\n.going {\n  height: 60vh;\n  width: 100%;\n  background: url('Event_Page_Bottom_Background_Green.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.not-going {\n  height: 60vh;\n  width: 100%;\n  background: url('Event_Page_Bottom_Background_Orange.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.going-button {\n  width: 200px;\n  font-size: 1.2em;\n  font-weight: 800;\n  --background: #1baf88;\n  --background-hover: #1baf88;\n  --color: white;\n}\n\n.not-going-button {\n  width: 200px;\n  font-size: 1.2em;\n  --background: #FA6400;\n  --background-hover: #FA6400;\n  --color: white;\n}\n\n.going-button:hover, .not-going-button:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n          transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.going-button:not(:hover), .not-going-button:not(:hover) {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n          transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    width: 0px;\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    width: 0px;\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcZXZlbnRzXFxldmVudHMtcGFnZVxcZXZlbnRzLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLXBhZ2UvZXZlbnRzLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEVBQUE7VUFBQSxzRUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsdUVBQUE7VUFBQSwrREFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx1RUFBQTtVQUFBLCtEQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxVQUFBO0VDREY7QUFDRjs7QURUQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxVQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMtcGFnZS9ldmVudHMtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICBjb2xvcjogIzAwNTE5MTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5nb2luZy1saW5rOmxpbmsge1xyXG4gIGNvbG9yOiAjMWJhZjg4O1xyXG59XHJcblxyXG4uZ29pbmctbGluazp2aXNpdGVkIHtcclxuICBjb2xvcjogIzFiYWY4ODtcclxufVxyXG5cclxuLm5vdC1nb2luZy1saW5rOmxpbmsge1xyXG4gIGNvbG9yOiAjRkE2NDAwO1xyXG59XHJcblxyXG4ubm90LWdvaW5nLWxpbms6dmlzaXRlZCB7XHJcbiAgY29sb3I6ICNGQTY0MDA7XHJcbn1cclxuXHJcbi5nb2luZy10ZXh0IHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5ldmVudC1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvSm91cm5pX2ZseWVyLTUwMHgzNTcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpIDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMTAwcHggMCAxMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5nb2luZyB7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL0JhY2tncm91bmRzL0V2ZW50X1BhZ2VfQm90dG9tX0JhY2tncm91bmRfR3JlZW4uc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbn1cclxuXHJcbi5ub3QtZ29pbmcge1xyXG4gIGhlaWdodDogNjB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9FdmVudF9QYWdlX0JvdHRvbV9CYWNrZ3JvdW5kX09yYW5nZS5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxufVxyXG5cclxuLmdvaW5nLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMWJhZjg4O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubm90LWdvaW5nLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkE2NDAwO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZBNjQwMDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdvaW5nLWJ1dHRvbjpob3ZlciwgLm5vdC1nb2luZy1idXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxufVxyXG5cclxuLmdvaW5nLWJ1dHRvbjpub3QoOmhvdmVyKSwgLm5vdC1nb2luZy1idXR0b246bm90KDpob3Zlcikge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbn1cclxuXHJcblxyXG5pb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xyXG4gIC0tcGFkZGluZzogO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufSIsInNwYW4ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZ29pbmctbGluazpsaW5rIHtcbiAgY29sb3I6ICMxYmFmODg7XG59XG5cbi5nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogIzFiYWY4ODtcbn1cblxuLm5vdC1nb2luZy1saW5rOmxpbmsge1xuICBjb2xvcjogI0ZBNjQwMDtcbn1cblxuLm5vdC1nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogI0ZBNjQwMDtcbn1cblxuLmdvaW5nLXRleHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4uZXZlbnQtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9Kb3VybmlfZmx5ZXItNTAweDM1Ny5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAxcyBmb3J3YXJkcztcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZ29pbmcge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvQmFja2dyb3VuZHMvRXZlbnRfUGFnZV9Cb3R0b21fQmFja2dyb3VuZF9HcmVlbi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLm5vdC1nb2luZyB7XG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9FdmVudF9QYWdlX0JvdHRvbV9CYWNrZ3JvdW5kX09yYW5nZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMxYmFmODg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkE2NDAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGQTY0MDA7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uZ29pbmctYnV0dG9uOmhvdmVyLCAubm90LWdvaW5nLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG4uZ29pbmctYnV0dG9uOm5vdCg6aG92ZXIpLCAubm90LWdvaW5nLWJ1dHRvbjpub3QoOmhvdmVyKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cblxuaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nOiA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/events/events-page/events-page.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.ts ***!
  \**************************************************************/
/*! exports provided: EventsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPagePage", function() { return EventsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");






let EventsPagePage = class EventsPagePage {
    constructor(activatedRoute, events, profile, router, toastController) {
        this.activatedRoute = activatedRoute;
        this.events = events;
        this.profile = profile;
        this.router = router;
        this.toastController = toastController;
        this.going = false;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const addressOne = this.activatedRoute.snapshot.paramMap.get('addressOne');
        // tslint:disable-next-line: radix
        const addressTwo = this.activatedRoute.snapshot.paramMap.get('addressTwo');
        // tslint:disable-next-line: radix
        const city = this.activatedRoute.snapshot.paramMap.get('city');
        // tslint:disable-next-line: radix
        const state = this.activatedRoute.snapshot.paramMap.get('state');
        // tslint:disable-next-line: radix
        const zip = this.activatedRoute.snapshot.paramMap.get('zip');
        // tslint:disable-next-line: radix
        const date = this.activatedRoute.snapshot.paramMap.get('date');
        // tslint:disable-next-line: radix
        const dateCreated = this.activatedRoute.snapshot.paramMap.get('dateCreated');
        // tslint:disable-next-line: radix
        const time = this.activatedRoute.snapshot.paramMap.get('time');
        // tslint:disable-next-line: radix
        const description = this.activatedRoute.snapshot.paramMap.get('description');
        // tslint:disable-next-line: radix
        const photo = this.activatedRoute.snapshot.paramMap.get('photo');
        // tslint:disable-next-line: radix
        this.eventId = id;
        this.eventTitle = title;
        this.eventAddressOne = addressOne;
        this.eventAddressTwo = addressTwo;
        this.eventCity = city;
        this.eventState = state;
        this.eventZip = zip;
        this.eventDateCreated = dateCreated;
        this.eventDate = date;
        this.eventTime = time;
        this.eventDescription = description;
        this.eventPhoto = photo;
        this.profile.getUserDetails().subscribe(details => {
            // Get all the events that the user is going to.
            this.id = details['_id'];
            let eventsGoing = details['eventsGoing'];
            console.log(eventsGoing);
            if (eventsGoing.includes(this.eventId)) {
                this.going = true;
            }
            else {
                this.going = false;
            }
            console.log();
        });
    }
    goingToEvent() {
        this.going = true;
        this.presentGoingToast();
        console.log(`Adding ${this.eventId} to this Users eventsGoing property`);
        this.events.goingToEvent(this.eventId, this.userEmail, this.id)
            .subscribe(events => {
            let updatedEvents = [...Object.values(events['eventsGoing']), this.eventId];
            this.events.eventsGoing$.next(updatedEvents);
            console.log(this.events.eventsGoing$.getValue());
            // this.events.getEventsGoing(this.id).subscribe(
            //   eventsGoing => {
            //     console.log(eventsGoing);
            //   }
            // );
        });
    }
    notGoingToEvent() {
        this.going = false;
        this.presentNotGoingToast();
        console.log(`Removing ${this.eventId} from this Users eventsGoing property`);
        ;
        this.events.notGoingToEvent(this.eventId, this.userEmail, this.id).subscribe(events => {
            const eventsGoing = this.events.eventsGoing$.getValue();
            for (let i = 0; i < eventsGoing.length; i++) {
                if (eventsGoing[i] === this.eventId) {
                    eventsGoing.splice(i, 1);
                }
            }
            console.log(eventsGoing);
            this.events.eventsGoing$.next(eventsGoing);
        });
    }
    presentGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are going to this Event. It has been saved to your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
    presentNotGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are no longer going to event. It has been removed from your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
};
EventsPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EventsPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events-page.page.scss */ "./src/app/pages/events/events-page/events-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], EventsPagePage);



/***/ })

}]);
//# sourceMappingURL=events-page-events-page-module-es2015.js.map