(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/events/events.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/events/events.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"ion-hide-lg-up\">\n\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col push-xs=\"0.3\" push-sm=\"1\" size-xs=\"8\" size-sm=\"8\" size-md=\"8\">\n          <ion-searchbar\n          debounce=\"2000\"\n          class=\"searchbar\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Event Titles\"\n          (ionChange)=\"filter($event)\"\n          ></ion-searchbar>\n        </ion-col>\n\n        <ion-col push-xs=\"0.3\" push-sm=\"1\" size-xs=\"3\" size-sm=\"3\" size-md=\"3\">\n          <ion-button  id=\"my-events-button\" (click)=\"going()\">\n            Events ({{ eventsGoingLength }})\n        </ion-button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Refresh -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Events Cards -->\n    <ion-row class=\"ion-justify-content-center\" *ngIf=\"!noSearchInput\" >\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" size-xs=\"12\">\n        <ion-card *ngFor=\"let event of allEvents\">\n          <img src=\"../assets/Journi_flyer.jpg\" />\n          <ion-card-header (click)=\"eventPage(event)\">\n            <ion-card-title>{{ event.title }}</ion-card-title>\n            <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n            <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n            <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n            <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n          </ion-card-header>\n          <ion-card-content style=\"--ion-grid-padding: 0;\">\n            <ion-toolbar>\n              <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n            </ion-toolbar>\n         </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n\n    <ion-row style=\"margin: 50px 0 50px 0;\">\n\n      <!-- Search Bar -->\n      <ion-col size=\"7.5\" push=\"1\">\n            <ion-searchbar\n            no-border\n            debounce=\"800\"\n            showCancelButton=\"focus\"\n            placeholder=\"Search Event Titles\"\n            (ionChange)=\"filter($event)\"\n            ></ion-searchbar>\n      </ion-col>\n      <ion-col size=\"2\" push=\"1.5\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button ion-float-right\" style=\"width: 170px; position: fixed; top: 60px;\" (click)=\"going()\">\n              My Events ({{ eventsGoingLength }})\n            </ion-button>\n          </ion-col>\n        </ion-row>\n          \n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\" style=\"margin-top: 25px;\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Card List -->\n    <ion-row>\n      <ion-col push=\"1\" size=\"8\" size-xl=\"8\">\n        <ion-row>\n          <!-- Search Results -->\n          <ion-col size=\"11\" *ngIf=\"searching && allEventsLength > 0\" class=\"ion-text-center\">\n            <ion-title style=\"background: rgba(230,230,230,1); padding: 20px; margin-top: 35px;\">{{allEventsLength}} search result(s) for '{{searchTerm}}'</ion-title>\n          </ion-col>\n          <!-- Individual Cards -->\n          <ion-col size-lg=\"5.5\" *ngFor=\"let event of allEvents\">\n              <ion-card class=\"event-card\">\n                  <img src=\"../assets/Journi_flyer.jpg\" />\n                  <ion-card-header (click)=\"eventPage(event)\">\n                    <ion-card-title>{{ event.title }}</ion-card-title>\n                    <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                    <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                    <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n                    <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n                  </ion-card-header>\n                  <ion-card-content class=\"ion-text-center\" style=\"width: 91%;\">\n                    <ion-toolbar style=\"--background: none; height: auto;\">\n                      <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n                    </ion-toolbar>\n                 </ion-card-content>\n              </ion-card>\n            </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/emitters/events-event-emitter.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/emitters/events-event-emitter.service.ts ***!
  \**********************************************************/
/*! exports provided: EventsEventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEventEmitterService", function() { return EventsEventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventsEventEmitterService = /** @class */ (function () {
    function EventsEventEmitterService() {
        this.invokeEventsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventsEventEmitterService.prototype.onBackAction = function () {
        this.invokeEventsPageRefresh.emit();
    };
    EventsEventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventsEventEmitterService);
    return EventsEventEmitterService;
}());



/***/ }),

/***/ "./src/app/pages/events/events-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/events/events-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function() { return EventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");




var routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    },
    {
        path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
        loadChildren: function () { return __webpack_require__.e(/*! import() | events-page-events-page-module */ "events-page-events-page-module").then(__webpack_require__.bind(null, /*! ./events-page/events-page.module */ "./src/app/pages/events/events-page/events-page.module.ts")).then(function (m) { return m.EventsPagePageModule; }); }
    },
    {
        path: 'going',
        loadChildren: function () { return __webpack_require__.e(/*! import() | going-going-module */ "going-going-module").then(__webpack_require__.bind(null, /*! ./going/going.module */ "./src/app/pages/events/going/going.module.ts")).then(function (m) { return m.GoingPageModule; }); }
    }
];
var EventsPageRoutingModule = /** @class */ (function () {
    function EventsPageRoutingModule() {
    }
    EventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EventsPageRoutingModule);
    return EventsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/events/events.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.module.ts ***!
  \***********************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/pages/events/events-routing.module.ts");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");









var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _events_routing_module__WEBPACK_IMPORTED_MODULE_7__["EventsPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _events_page__WEBPACK_IMPORTED_MODULE_8__["EventsPage"] }])
            ],
            declarations: [
                _events_page__WEBPACK_IMPORTED_MODULE_8__["EventsPage"]
            ]
        })
    ], EventsPageModule);
    return EventsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/events.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n}\n\n#my-events-button {\n  opacity: 1;\n  --background: rgba(255,255,255,0.1);\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 80px;\n  height: 40px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n\nion-card {\n  --background: white;\n  margin: 0px 0 50px 0;\n  position: relative;\n  top: -5px;\n}\n\nion-card.event-card {\n  height: 60vh;\n  min-height: 530px;\n  max-height: 560px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\nion-card.event-card ion-card-content {\n  position: absolute;\n  bottom: 0;\n}\n\nion-toolbar {\n  --background: none;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  width: 100%;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.orange-button {\n  width: unset;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\nh6.text-header {\n  padding: unset;\n  text-align: center;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\nion-card-title {\n  font-weight: 900;\n  margin-bottom: 25px;\n}\n\nion-card-subtitle {\n  font-weight: 400;\n  font-size: 1.3em;\n}\n\n@media screen and (min-width: 1200px) {\n  ion-card.event-card {\n    height: 44vw;\n    max-height: 670px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4jbXktZXZlbnRzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHggMCA1MHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xufVxuXG5pb24tY2FyZC5ldmVudC1jYXJkIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBtaW4taGVpZ2h0OiA1MzBweDtcbiAgbWF4LWhlaWdodDogNTYwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbmlvbi1jYXJkLmV2ZW50LWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDYudGV4dC1oZWFkZXIge1xuICBwYWRkaW5nOiB1bnNldDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBpb24tY2FyZC5ldmVudC1jYXJkIHtcbiAgICBoZWlnaHQ6IDQ0dnc7XG4gICAgbWF4LWhlaWdodDogNjcwcHg7XG4gIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4jbXktZXZlbnRzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHggMCA1MHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xufVxuXG5pb24tY2FyZC5ldmVudC1jYXJkIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBtaW4taGVpZ2h0OiA1MzBweDtcbiAgbWF4LWhlaWdodDogNTYwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmlvbi1jYXJkLmV2ZW50LWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmg2LnRleHQtaGVhZGVyIHtcbiAgcGFkZGluZzogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaW9uLWNhcmQuZXZlbnQtY2FyZCB7XG4gICAgaGVpZ2h0OiA0NHZ3O1xuICAgIG1heC1oZWlnaHQ6IDY3MHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/events/events.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/events/events.page.ts ***!
  \*********************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ "./src/app/emitters/events-event-emitter.service.ts");








var EventsPage = /** @class */ (function () {
    function EventsPage(router, events, profile, toast, loading, eventEmitterService) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.toast = toast;
        this.loading = loading;
        this.eventEmitterService = eventEmitterService;
        this.eventsGoingLength = 0;
        this.searching = false;
        this.noSearchInput = false;
    }
    EventsPage.prototype.ngAfterViewInit = function () {
        this.searchbar.getInputElement().then(function (searchbarInputElement) {
            searchbarInputElement.style.boxShadow = "none";
        });
    };
    EventsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.eventEmitterService.subsVar == undefined) {
            this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(function () {
                _this.getEvents();
            });
        }
        // Get the User's details
        this.profile.getUserDetails().subscribe(function (details) {
            _this.id = details['_id'];
            _this.userEmail = details['email'];
            _this.events.eventsGoing$.next(details['eventsGoing']);
            _this.events.eventsGoing$.subscribe(function (events) {
                _this.eventsGoingLength = Object.values(events).length;
            });
            console.log('User id: ' + _this.id);
            console.log('User email: ' + _this.userEmail);
        });
        this.events.getEvents().subscribe(function (events) {
            // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
            // .
            console.log('Events that are intially loaded: ');
            console.log(events);
            _this.allEvents = Object.values(events);
            _this.allEventsLength = _this.allEvents.length;
            _this.allEvents.reverse();
            _this.loadedAllEvents = Object.values(events);
            _this.loadedAllEvents.reverse();
            for (var _i = 0, _a = _this.allEvents; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                event_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_1.date), 'MMMM dd, yyyy');
                event_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_1.date), 'hh:mm a');
                event_1.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event_1.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
        });
    };
    EventsPage.prototype.eventPage = function (event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    };
    EventsPage.prototype.going = function () {
        this.router.navigate(['/home/events/going']);
    };
    EventsPage.prototype.filter = function ($event) {
        var _this = this;
        this.initializeItems();
        var searchTerm = $event.detail.value;
        this.presentLoadingWithOptions();
        this.allEvents = this.allEvents.filter(function (currentEvents) {
            console.log(currentEvents);
            if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                _this.noSearchInput = true;
            }
            if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log(currentEvents.title);
                    console.log((currentEvents));
                    _this.searchTerm = searchTerm;
                    _this.searching = true;
                    _this.noSearchInput = false;
                    return true;
                }
                return false;
            }
        });
        this.allEventsLength = this.allEvents.length;
        // If there are no matches with the searchTerm
        if (this.allEventsLength === 0) {
            console.log('No results from that search');
            this.searching = true;
            this.searchTerm = searchTerm;
            this.searchbar.getInputElement().then(function (searchbarInputElement) {
                searchbarInputElement.value = '';
            });
            this.noSearchInput = true;
        }
        if (!searchTerm) {
            console.log('Search term is empty; showing all events instead');
            this.noSearchInput = false;
            this.searching = false;
            this.getEvents();
        }
    };
    EventsPage.prototype.initializeItems = function () {
        this.allEvents = this.loadedAllEvents;
    };
    EventsPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            duration: 1000,
                            message: 'Searching for Events...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventsPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.allEvents = [];
                        return [4 /*yield*/, this.events.getEvents().subscribe(function (events) {
                                _this.allEvents = Object.values(events);
                                _this.allEventsLength = _this.allEvents.length;
                                _this.allEvents.reverse();
                                _this.searching = false;
                                // Format Times
                                for (var _i = 0, _a = _this.allEvents; _i < _a.length; _i++) {
                                    var event_2 = _a[_i];
                                    event_2.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_2.date), 'MMMM dd, yyyy');
                                    event_2.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event_2.dateCreated), {
                                        includeSeconds: true,
                                        addSuffix: true
                                    });
                                    event_2.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_2.date), 'hh:mm a');
                                }
                            })];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            event.target.complete();
                            console.log('Events Refreshed');
                        }, 2000);
                        return [4 /*yield*/, this.searchbar.getInputElement().then(function (searchbarInputElement) {
                                searchbarInputElement.value = '';
                                _this.noSearchInput = false;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, console.log('Refreshing Events Page..')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsPage.prototype.getEvents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.events.getEvents().subscribe(function (events) {
                            _this.allEvents = Object.values(events);
                            _this.allEventsLength = _this.allEvents.length;
                            _this.allEvents.reverse();
                            _this.searching = false;
                            // Format Times
                            for (var _i = 0, _a = _this.allEvents; _i < _a.length; _i++) {
                                var event_3 = _a[_i];
                                event_3.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_3.date), 'MMMM dd, yyyy');
                                event_3.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event_3.dateCreated), {
                                    includeSeconds: true,
                                    addSuffix: true
                                });
                                event_3.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_3.date), 'hh:mm a');
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventsEventEmitterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"])
    ], EventsPage.prototype, "searchbar", void 0);
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/events/events.page.html"),
            styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/pages/events/events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventsEventEmitterService"]])
    ], EventsPage);
    return EventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-events-module-es5.js.map