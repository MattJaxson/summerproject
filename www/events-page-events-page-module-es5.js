(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-page-events-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/events/events-page/events-page.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/events/events-page/events-page.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button *ngIf=\"going\" (click)=\"notGoingToEvent()\" style=\"--padding-end: 20px;\">\n          No longer going to this Event?\n          <ion-icon  name=\"close-circle-outline\" style=\"color: #e4405f; margin-left: 10px;\" size=\"large\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"!going\" (click)=\"goingToEvent()\" style=\"--padding-end: 20px;\">\n          Want to go to this Event?\n          <ion-icon name=\"add-circle\" style=\"color: #21ce99; margin-left: 10px;\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n\n        <!-- Picture Header -->\n        <ion-row class=\"ion-justify-content-center header ion-align-items-center\">\n          <ion-col size-lg=\"8\">\n            <!-- Image needs to be 500x357, 800x571, or 1050x750 -->\n              <div class=\"event-image\"></div>\n          </ion-col>\n        </ion-row>\n\n        <!-- Event Details -->\n        <ion-row class=\"details ion-justify-content-center ion-align-items-center\">\n          <ion-col size-xs=\"11\" size-lg=\"6\">\n            <p> <span>Title</span><br> {{ eventTitle }}</p><br>\n            <p> <span>Address </span><br>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p><br>\n            <p> <span>Date</span><br> {{ eventDate }}</p><br>\n            <p> <span>Time</span><br> {{ eventTime }}</p><br>\n            <p> <span>Description</span><br> <span class=\"event-description\">{{ eventDescription }}</span></p><br>\n        </ion-col>\n        </ion-row>\n\n        <!-- Going or Not Going sections? -->\n\n        <!-- GOING? -->\n        <ion-row *ngIf=\"!going\" class=\"going ion-justify-content-center\">\n            <ion-col class=\"going\" size=\"12\">\n              <ion-row class=\"going ion-justify-content-center\">\n                <ion-col class=\"ion-text-center\" size=\"6\">\n                  <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'Yes', this event will be added to your Your Events.</p>\n                  <ion-button class=\"going-button\" (click)=\"goingToEvent()\">\n                   Yes.\n                  </ion-button><br><br>\n                  <a class=\"going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n                  <a class=\"going-link\" routerLink=\"/home/events/going\">View My Events</a>\n                 </ion-col>\n              </ion-row>\n            </ion-col>\n        </ion-row>\n\n        <!-- NOT GOING -->\n        <ion-row *ngIf=\"going\" class=\"ion-justify-content-center\">\n          <ion-col class=\"not-going\" size=\"12\">\n            <ion-row class=\"not-going ion-justify-content-center\">\n              <ion-col class=\"ion-text-center\" size=\"6\">\n                <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'No', this event will be deleted to your Your Events.</p>\n                <ion-button class=\"not-going-button\" (click)=\"notGoingToEvent()\">\n                 No.\n                </ion-button><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events/going\">View My Events</a>\n               </ion-col>\n            </ion-row>\n          </ion-col>\n      </ion-row>\n\n      </ion-grid>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-page.page */ "./src/app/pages/events/events-page/events-page.page.ts");




var routes = [
    {
        path: '',
        component: _events_page_page__WEBPACK_IMPORTED_MODULE_3__["EventsPagePage"]
    }
];
var EventsPagePageRoutingModule = /** @class */ (function () {
    function EventsPagePageRoutingModule() {
    }
    EventsPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EventsPagePageRoutingModule);
    return EventsPagePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-page-routing.module */ "./src/app/pages/events/events-page/events-page-routing.module.ts");
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-page.page */ "./src/app/pages/events/events-page/events-page.page.ts");







var EventsPagePageModule = /** @class */ (function () {
    function EventsPagePageModule() {
    }
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
    return EventsPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/events-page/events-page.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  color: #005191;\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\nspan.event-description {\n  color: unset;\n  font-weight: unset;\n  font-size: unset;\n}\n\np {\n  font-size: 1.3em;\n  color: #999;\n}\n\n.going-link:link {\n  color: #1baf88;\n}\n\n.going-link:visited {\n  color: #1baf88;\n}\n\n.not-going-link:link {\n  color: #FA6400;\n}\n\n.not-going-link:visited {\n  color: #FA6400;\n}\n\n.going-text {\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 10%;\n}\n\n.header {\n  background-color: #edf3f8;\n  height: 65vh;\n}\n\n.event-image {\n  height: 500px;\n  background: lightgrey;\n  background: url('Journi_flyer-500x357.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  -webkit-animation: slide-up 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;\n          animation: slide-up 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;\n}\n\n.details {\n  padding: 100px 0 100px;\n  height: auto;\n  background: white;\n}\n\n.going {\n  height: 60vh;\n  width: 100%;\n  background: url('Event_Page_Bottom_Background_Green.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.not-going {\n  height: 60vh;\n  width: 100%;\n  background: url('Event_Page_Bottom_Background_Orange.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.going-button {\n  width: 200px;\n  font-size: 1.2em;\n  font-weight: 800;\n  --background: #1baf88;\n  --background-hover: #1baf88;\n  --color: white;\n}\n\n.not-going-button {\n  width: 200px;\n  font-size: 1.2em;\n  --background: #FA6400;\n  --background-hover: #FA6400;\n  --color: white;\n}\n\n.going-button:hover, .not-going-button:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n          transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.going-button:not(:hover), .not-going-button:not(:hover) {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n          transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    width: 0px;\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    width: 0px;\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL2V2ZW50cy1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL2V2ZW50cy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLDhFQUFBO1VBQUEsc0VBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwwREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHVFQUFBO1VBQUEsK0RBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsdUVBQUE7VUFBQSwrREFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLXBhZ2UvZXZlbnRzLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5zcGFuLmV2ZW50LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHVuc2V0O1xuICBmb250LXdlaWdodDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmdvaW5nLWxpbms6bGluayB7XG4gIGNvbG9yOiAjMWJhZjg4O1xufVxuXG4uZ29pbmctbGluazp2aXNpdGVkIHtcbiAgY29sb3I6ICMxYmFmODg7XG59XG5cbi5ub3QtZ29pbmctbGluazpsaW5rIHtcbiAgY29sb3I6ICNGQTY0MDA7XG59XG5cbi5ub3QtZ29pbmctbGluazp2aXNpdGVkIHtcbiAgY29sb3I6ICNGQTY0MDA7XG59XG5cbi5nb2luZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYzZjg7XG4gIGhlaWdodDogNjV2aDtcbn1cblxuLmV2ZW50LWltYWdlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9Kb3VybmlfZmx5ZXItNTAweDM1Ny5wbmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMXMgZm9yd2FyZHM7XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMTAwcHggMCAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdvaW5nIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvQmFja2dyb3VuZHMvRXZlbnRfUGFnZV9Cb3R0b21fQmFja2dyb3VuZF9HcmVlbi5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ubm90LWdvaW5nIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvQmFja2dyb3VuZHMvRXZlbnRfUGFnZV9Cb3R0b21fQmFja2dyb3VuZF9PcmFuZ2Uuc3ZnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMxYmFmODg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkE2NDAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGQTY0MDA7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uZ29pbmctYnV0dG9uOmhvdmVyLCAubm90LWdvaW5nLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG4uZ29pbmctYnV0dG9uOm5vdCg6aG92ZXIpLCAubm90LWdvaW5nLWJ1dHRvbjpub3QoOmhvdmVyKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cblxuXG5pb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmc6IDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Iiwic3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5zcGFuLmV2ZW50LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHVuc2V0O1xuICBmb250LXdlaWdodDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmdvaW5nLWxpbms6bGluayB7XG4gIGNvbG9yOiAjMWJhZjg4O1xufVxuXG4uZ29pbmctbGluazp2aXNpdGVkIHtcbiAgY29sb3I6ICMxYmFmODg7XG59XG5cbi5ub3QtZ29pbmctbGluazpsaW5rIHtcbiAgY29sb3I6ICNGQTY0MDA7XG59XG5cbi5ub3QtZ29pbmctbGluazp2aXNpdGVkIHtcbiAgY29sb3I6ICNGQTY0MDA7XG59XG5cbi5nb2luZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYzZjg7XG4gIGhlaWdodDogNjV2aDtcbn1cblxuLmV2ZW50LWltYWdlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvSm91cm5pX2ZseWVyLTUwMHgzNTcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAxcyBmb3J3YXJkcztcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZ29pbmcge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvQmFja2dyb3VuZHMvRXZlbnRfUGFnZV9Cb3R0b21fQmFja2dyb3VuZF9HcmVlbi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLm5vdC1nb2luZyB7XG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9FdmVudF9QYWdlX0JvdHRvbV9CYWNrZ3JvdW5kX09yYW5nZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMxYmFmODg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkE2NDAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGQTY0MDA7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uZ29pbmctYnV0dG9uOmhvdmVyLCAubm90LWdvaW5nLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG4uZ29pbmctYnV0dG9uOm5vdCg6aG92ZXIpLCAubm90LWdvaW5nLWJ1dHRvbjpub3QoOmhvdmVyKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cblxuaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nOiA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ "./src/app/emitters/events-event-emitter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var EventsPagePage = /** @class */ (function () {
    function EventsPagePage(activatedRoute, events, profile, router, toastController, eventEmitterService, location) {
        this.activatedRoute = activatedRoute;
        this.events = events;
        this.profile = profile;
        this.router = router;
        this.toastController = toastController;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.going = false;
    }
    EventsPagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.location.onPopState(function () {
            _this.eventEmitterService.onBackAction();
        });
        // tslint:disable-next-line: radix
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        var title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        var addressOne = this.activatedRoute.snapshot.paramMap.get('addressOne');
        // tslint:disable-next-line: radix
        var addressTwo = this.activatedRoute.snapshot.paramMap.get('addressTwo');
        // tslint:disable-next-line: radix
        var city = this.activatedRoute.snapshot.paramMap.get('city');
        // tslint:disable-next-line: radix
        var state = this.activatedRoute.snapshot.paramMap.get('state');
        // tslint:disable-next-line: radix
        var zip = this.activatedRoute.snapshot.paramMap.get('zip');
        // tslint:disable-next-line: radix
        var date = this.activatedRoute.snapshot.paramMap.get('date');
        // tslint:disable-next-line: radix
        var dateCreated = this.activatedRoute.snapshot.paramMap.get('dateCreated');
        // tslint:disable-next-line: radix
        var time = this.activatedRoute.snapshot.paramMap.get('time');
        // tslint:disable-next-line: radix
        var description = this.activatedRoute.snapshot.paramMap.get('description');
        // tslint:disable-next-line: radix
        var photo = this.activatedRoute.snapshot.paramMap.get('photo');
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
        this.profile.getUserDetails().subscribe(function (details) {
            // Get all the events that the user is going to.
            _this.id = details['_id'];
            var eventsGoing = details['eventsGoing'];
            console.log(eventsGoing);
            if (eventsGoing.includes(_this.eventId)) {
                _this.going = true;
            }
            else {
                _this.going = false;
            }
            console.log();
        });
    };
    EventsPagePage.prototype.goingToEvent = function () {
        var _this = this;
        this.going = true;
        this.presentGoingToast();
        console.log("Adding " + this.eventId + " to this Users eventsGoing property");
        this.events.goingToEvent(this.eventId, this.userEmail, this.id)
            .subscribe(function (events) {
            var updatedEvents = Object.values(events['eventsGoing']).concat([_this.eventId]);
            _this.events.eventsGoing$.next(updatedEvents);
            console.log(_this.events.eventsGoing$.getValue());
            // this.events.getEventsGoing(this.id).subscribe(
            //   eventsGoing => {
            //     console.log(eventsGoing);
            //   }
            // );
        });
    };
    EventsPagePage.prototype.notGoingToEvent = function () {
        var _this = this;
        this.going = false;
        this.presentNotGoingToast();
        console.log("Removing " + this.eventId + " from this Users eventsGoing property");
        ;
        this.events.notGoingToEvent(this.eventId, this.userEmail, this.id).subscribe(function (events) {
            var eventsGoing = _this.events.eventsGoing$.getValue();
            for (var i = 0; i < eventsGoing.length; i++) {
                if (eventsGoing[i] === _this.eventId) {
                    eventsGoing.splice(i, 1);
                }
            }
            console.log(eventsGoing);
            _this.events.eventsGoing$.next(eventsGoing);
        });
    };
    EventsPagePage.prototype.callEventEmitter = function () {
        this.eventEmitterService.onBackAction();
    };
    EventsPagePage.prototype.presentGoingToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You are going to this Event. It has been saved to your "Going" list',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsPagePage.prototype.presentNotGoingToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You are no longer going to event. It has been removed from your "Going" list',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsPagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventsEventEmitterService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"] }
    ]; };
    EventsPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events-page',
            template: __webpack_require__(/*! raw-loader!./events-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/events/events-page/events-page.page.html"),
            styles: [__webpack_require__(/*! ./events-page.page.scss */ "./src/app/pages/events/events-page/events-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventsEventEmitterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]])
    ], EventsPagePage);
    return EventsPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=events-page-events-page-module-es5.js.map