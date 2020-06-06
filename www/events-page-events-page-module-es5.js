function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-page-events-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventsEventsPageEventsPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button *ngIf=\"going\" (click)=\"notGoingToEvent()\" style=\"--padding-end: 20px;\">\n          No longer going to this Event?\n          <ion-icon  name=\"close-circle-outline\" style=\"color: #e4405f; margin-left: 10px;\" size=\"large\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"!going\" (click)=\"goingToEvent()\" style=\"--padding-end: 20px;\">\n          Want to go to this Event?\n          <ion-icon name=\"add-circle\" style=\"color: #21ce99; margin-left: 10px;\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n\n        <!-- Picture Header -->\n        <ion-row class=\"ion-justify-content-center header ion-align-items-center\">\n          <ion-col size-lg=\"6\">\n            <!-- Image needs to be 500x357, 800x571, or 1050x750 -->\n              <div class=\"event-image\"></div>\n          </ion-col>\n        </ion-row>\n\n        <!-- Event Details -->\n        <ion-row class=\"details ion-justify-content-center ion-align-items-center\">\n          <ion-col size-xs=\"11\" size-lg=\"6\">\n            <p> <span>Title</span><br> {{ eventTitle }}</p><br>\n            <p> <span>Address </span><br>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p><br>\n            <p> <span>Date</span><br> {{ eventDate }}</p><br>\n            <p> <span>Time</span><br> {{ eventTime }}</p><br>\n            <p> <span>Description</span><br> <span class=\"event-description\">{{ eventDescription }}</span></p><br>\n        </ion-col>\n        </ion-row>\n\n        <!-- Going or Not Going sections? -->\n\n        <!-- GOING? -->\n        <ion-row *ngIf=\"!going\" class=\"going ion-justify-content-center\">\n            <ion-col class=\"going\" size=\"12\">\n              <ion-row class=\"going ion-justify-content-center\">\n                <ion-col class=\"ion-text-center\" size=\"6\">\n                  <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'Yes', this event will be added to your Your Events.</p>\n                  <ion-button class=\"going-button\" (click)=\"goingToEvent()\">\n                   Yes.\n                  </ion-button><br><br>\n                  <a class=\"going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n                  <a class=\"going-link\" routerLink=\"/home/events/going\">View My Events</a>\n                 </ion-col>\n              </ion-row>\n            </ion-col>\n        </ion-row>\n\n        <!-- NOT GOING -->\n        <ion-row *ngIf=\"going\" class=\"ion-justify-content-center\">\n          <ion-col class=\"not-going\" size=\"12\">\n            <ion-row class=\"not-going ion-justify-content-center\">\n              <ion-col class=\"ion-text-center\" size=\"6\">\n                <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'No', this event will be deleted to your Your Events.</p>\n                <ion-button class=\"not-going-button\" (click)=\"notGoingToEvent()\">\n                 No.\n                </ion-button><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events/going\">View My Events</a>\n               </ion-col>\n            </ion-row>\n          </ion-col>\n      </ion-row>\n\n      </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/events/events-page/events-page-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/events/events-page/events-page-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: EventsPagePageRoutingModule */

  /***/
  function srcAppPagesEventsEventsPageEventsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPagePageRoutingModule", function () {
      return EventsPagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _events_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events-page.page */
    "./src/app/pages/events/events-page/events-page.page.ts");

    var routes = [{
      path: '',
      component: _events_page_page__WEBPACK_IMPORTED_MODULE_3__["EventsPagePage"]
    }];

    var EventsPagePageRoutingModule = function EventsPagePageRoutingModule() {
      _classCallCheck(this, EventsPagePageRoutingModule);
    };

    EventsPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/events/events-page/events-page.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/events/events-page/events-page.module.ts ***!
    \****************************************************************/

  /*! exports provided: EventsPagePageModule */

  /***/
  function srcAppPagesEventsEventsPageEventsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPagePageModule", function () {
      return EventsPagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _events_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events-page-routing.module */
    "./src/app/pages/events/events-page/events-page-routing.module.ts");
    /* harmony import */


    var _events_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events-page.page */
    "./src/app/pages/events/events-page/events-page.page.ts");

    var EventsPagePageModule = function EventsPagePageModule() {
      _classCallCheck(this, EventsPagePageModule);
    };

    EventsPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPagePageRoutingModule"]],
      declarations: [_events_page_page__WEBPACK_IMPORTED_MODULE_6__["EventsPagePage"]]
    })], EventsPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/events/events-page/events-page.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/events/events-page/events-page.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventsEventsPageEventsPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\n  color: #005191;\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\nspan.event-description {\n  color: unset;\n  font-weight: unset;\n  font-size: unset;\n}\n\np {\n  font-size: 1.3em;\n  color: #999;\n}\n\n.going-link:link {\n  color: #1baf88;\n}\n\n.going-link:visited {\n  color: #1baf88;\n}\n\n.not-going-link:link {\n  color: #FA6400;\n}\n\n.not-going-link:visited {\n  color: #FA6400;\n}\n\n.going-text {\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 10%;\n}\n\n.header {\n  background-color: none;\n  height: 65vh;\n}\n\n.event-image {\n  height: 500px;\n  background: lightgrey;\n  background: url('Journi_flyer-500x357.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  -webkit-animation: slide-up 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;\n          animation: slide-up 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;\n}\n\n.details {\n  padding: 100px 0 100px;\n  height: auto;\n  background: white;\n}\n\n.going {\n  height: 60vh;\n  width: 100%;\n  background: url('Event_Page_Bottom_Background_Green.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.not-going {\n  height: 60vh;\n  width: 100%;\n  background: url('Event_Page_Bottom_Background_Orange.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.going-button {\n  width: 200px;\n  font-size: 1.2em;\n  font-weight: 800;\n  --background: #1baf88;\n  --background-hover: #1baf88;\n  --color: white;\n}\n\n.not-going-button {\n  width: 200px;\n  font-size: 1.2em;\n  --background: #FA6400;\n  --background-hover: #FA6400;\n  --color: white;\n}\n\n.going-button:hover, .not-going-button:hover {\n  transform: scale(1.5);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.going-button:not(:hover), .not-going-button:not(:hover) {\n  transform: scale(1);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL2V2ZW50cy1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL2V2ZW50cy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLDhFQUFBO1VBQUEsc0VBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLFVBQUE7RUNBRjtFREdBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMtcGFnZS9ldmVudHMtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbnNwYW4uZXZlbnQtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdW5zZXQ7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbiAgZm9udC1zaXplOiB1bnNldDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZ29pbmctbGluazpsaW5rIHtcbiAgY29sb3I6ICMxYmFmODg7XG59XG5cbi5nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogIzFiYWY4ODtcbn1cblxuLm5vdC1nb2luZy1saW5rOmxpbmsge1xuICBjb2xvcjogI0ZBNjQwMDtcbn1cblxuLm5vdC1nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogI0ZBNjQwMDtcbn1cblxuLmdvaW5nLXRleHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgaGVpZ2h0OiA2NXZoO1xufVxuXG4uZXZlbnQtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL0pvdXJuaV9mbHllci01MDB4MzU3LnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAxcyBmb3J3YXJkcztcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZ29pbmcge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9FdmVudF9QYWdlX0JvdHRvbV9CYWNrZ3JvdW5kX0dyZWVuLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5ub3QtZ29pbmcge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9FdmVudF9QYWdlX0JvdHRvbV9CYWNrZ3JvdW5kX09yYW5nZS5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uZ29pbmctYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzFiYWY4ODtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5ub3QtZ29pbmctYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICAtLWJhY2tncm91bmQ6ICNGQTY0MDA7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZBNjQwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5nb2luZy1idXR0b246aG92ZXIsIC5ub3QtZ29pbmctYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG5cbi5nb2luZy1idXR0b246bm90KDpob3ZlciksIC5ub3QtZ29pbmctYnV0dG9uOm5vdCg6aG92ZXIpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG5cbmlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJzcGFuIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbnNwYW4uZXZlbnQtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdW5zZXQ7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbiAgZm9udC1zaXplOiB1bnNldDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZ29pbmctbGluazpsaW5rIHtcbiAgY29sb3I6ICMxYmFmODg7XG59XG5cbi5nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogIzFiYWY4ODtcbn1cblxuLm5vdC1nb2luZy1saW5rOmxpbmsge1xuICBjb2xvcjogI0ZBNjQwMDtcbn1cblxuLm5vdC1nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogI0ZBNjQwMDtcbn1cblxuLmdvaW5nLXRleHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgaGVpZ2h0OiA2NXZoO1xufVxuXG4uZXZlbnQtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9Kb3VybmlfZmx5ZXItNTAweDM1Ny5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpIDFzIGZvcndhcmRzO1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5nb2luZyB7XG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9FdmVudF9QYWdlX0JvdHRvbV9CYWNrZ3JvdW5kX0dyZWVuLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ubm90LWdvaW5nIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL0JhY2tncm91bmRzL0V2ZW50X1BhZ2VfQm90dG9tX0JhY2tncm91bmRfT3JhbmdlLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uZ29pbmctYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzFiYWY4ODtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5ub3QtZ29pbmctYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICAtLWJhY2tncm91bmQ6ICNGQTY0MDA7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZBNjQwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5nb2luZy1idXR0b246aG92ZXIsIC5ub3QtZ29pbmctYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG5cbi5nb2luZy1idXR0b246bm90KDpob3ZlciksIC5ub3QtZ29pbmctYnV0dG9uOm5vdCg6aG92ZXIpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG5pb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmc6IDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/events/events-page/events-page.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/events/events-page/events-page.page.ts ***!
    \**************************************************************/

  /*! exports provided: EventsPagePage */

  /***/
  function srcAppPagesEventsEventsPageEventsPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPagePage", function () {
      return EventsPagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/emitters/events-event-emitter.service */
    "./src/app/emitters/events-event-emitter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var EventsPagePage = /*#__PURE__*/function () {
      function EventsPagePage(activatedRoute, events, profile, router, toastController, eventEmitterService, location) {
        _classCallCheck(this, EventsPagePage);

        this.activatedRoute = activatedRoute;
        this.events = events;
        this.profile = profile;
        this.router = router;
        this.toastController = toastController;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.going = false;
      }

      _createClass(EventsPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.location.onPopState(function () {
            _this.eventEmitterService.onBackAction();
          }); // tslint:disable-next-line: radix

          var id = this.activatedRoute.snapshot.paramMap.get('id'); // tslint:disable-next-line: radix

          var title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

          var addressOne = this.activatedRoute.snapshot.paramMap.get('addressOne'); // tslint:disable-next-line: radix

          var addressTwo = this.activatedRoute.snapshot.paramMap.get('addressTwo'); // tslint:disable-next-line: radix

          var city = this.activatedRoute.snapshot.paramMap.get('city'); // tslint:disable-next-line: radix

          var state = this.activatedRoute.snapshot.paramMap.get('state'); // tslint:disable-next-line: radix

          var zip = this.activatedRoute.snapshot.paramMap.get('zip'); // tslint:disable-next-line: radix

          var date = this.activatedRoute.snapshot.paramMap.get('date'); // tslint:disable-next-line: radix

          var dateCreated = this.activatedRoute.snapshot.paramMap.get('dateCreated'); // tslint:disable-next-line: radix

          var time = this.activatedRoute.snapshot.paramMap.get('time'); // tslint:disable-next-line: radix

          var description = this.activatedRoute.snapshot.paramMap.get('description'); // tslint:disable-next-line: radix

          var photo = this.activatedRoute.snapshot.paramMap.get('photo'); // tslint:disable-next-line: radix

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
            } else {
              _this.going = false;
            }

            console.log();
          });
        }
      }, {
        key: "goingToEvent",
        value: function goingToEvent() {
          var _this2 = this;

          this.going = true;
          this.presentGoingToast();
          console.log("Adding ".concat(this.eventId, " to this Users eventsGoing property"));
          this.events.goingToEvent(this.eventId, this.userEmail, this.id).subscribe(function (events) {
            var updatedEvents = [].concat(_toConsumableArray(Object.values(events['eventsGoing'])), [_this2.eventId]);

            _this2.events.eventsGoing$.next(updatedEvents);

            console.log(_this2.events.eventsGoing$.getValue()); // this.events.getEventsGoing(this.id).subscribe(
            //   eventsGoing => {
            //     console.log(eventsGoing);
            //   }
            // );
          });
        }
      }, {
        key: "notGoingToEvent",
        value: function notGoingToEvent() {
          var _this3 = this;

          this.going = false;
          this.presentNotGoingToast();
          console.log("Removing ".concat(this.eventId, " from this Users eventsGoing property"));
          ;
          this.events.notGoingToEvent(this.eventId, this.userEmail, this.id).subscribe(function (events) {
            var eventsGoing = _this3.events.eventsGoing$.getValue();

            for (var i = 0; i < eventsGoing.length; i++) {
              if (eventsGoing[i] === _this3.eventId) {
                eventsGoing.splice(i, 1);
              }
            }

            console.log(eventsGoing);

            _this3.events.eventsGoing$.next(eventsGoing);
          });
        }
      }, {
        key: "callEventEmitter",
        value: function callEventEmitter() {
          this.eventEmitterService.onBackAction();
        }
      }, {
        key: "presentGoingToast",
        value: function presentGoingToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: 'You are going to this Event. It has been saved to your "Going" list',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentNotGoingToast",
        value: function presentNotGoingToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: 'You are no longer going to event. It has been removed from your "Going" list',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return EventsPagePage;
    }();

    EventsPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
      }, {
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventsEventEmitterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
      }];
    };

    EventsPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events-page.page.scss */
      "./src/app/pages/events/events-page/events-page.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventsEventEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]])], EventsPagePage);
    /***/
  }
}]);
//# sourceMappingURL=events-page-events-page-module-es5.js.map