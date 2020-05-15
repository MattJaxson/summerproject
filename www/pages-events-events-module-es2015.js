(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <!-- Mobile & Tablet Toolbar -->\r\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-md-up\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col offset-xs=\"0\" offset-sm=\"1\" offset-md=\"1\" size-xs=\"9\" size-sm=\"8\" size-md=\"8\">\r\n          <ion-searchbar\r\n          debounce=\"2000\"\r\n          class=\"searchbar\"\r\n          showCancelButton=\"true\"\r\n          placeholder=\"Search Events\"\r\n          (ionChange)=\"filter($event)\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n  \r\n        <ion-col offset-xs=\"0\" offset-sm=\"1\" offset-md=\"1\" size-xs=\"1\" size-sm=\"1\" size-md=\"1\">\r\n          <ion-button style=\"font-size: 0.7em; width: 100px\" class=\"blue-button\" style=\"animation: none; opacity: 1; width: 70px; font-size: 0.6em;\" (click)=\"going()\">\r\n            My Events\r\n        </ion-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: rgba(245,245,245,1); background-attachment: fixed;\">\r\n\r\n    <!-- Refresh -->\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n      </ion-refresher>\r\n\r\n\r\n      <!-- Search Results -->\r\n      <ion-row *ngIf=\"searching\" class=\"ion-text-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-title style=\"background: rgba(230,230,230,1); padding: 20px;\">{{allEventsLength}} search result(s) for '{{searchTerm}}'</ion-title>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n  <!-- Mobile -->\r\n  <ion-grid class=\"ion-hide-md-up\">\r\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\r\n      <ion-col size=\"6\">\r\n        <h6 class=\"text-header\">There were no Search results with that name. Please Refresh the page</h6>\r\n        <ion-button class=\"orange-button\" (click)=\"doRefresh($event)\">\r\n          Refresh\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Mobile Events Cards -->\r\n    <ion-row class=\"ion-justify-content-center\" *ngIf=\"!noSearchInput\" >\r\n      <ion-col offset-lg=\"2\" offset-md=\"2\" offset-sm=\"1\" offset-xs=\"0\" size-lg=\"6\" size-md=\"8\" size-sm=\"10\" size-xs=\"12\">\r\n        <ion-card *ngFor=\"let event of allEvents\">\r\n          <img src=\"../assets/Journi_flyer.jpg\" />\r\n          <ion-card-header (click)=\"eventPage(event)\">\r\n            <ion-card-title>{{ event.title }}</ion-card-title>\r\n            <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\r\n            <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\r\n            <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\r\n            <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\r\n          </ion-card-header>\r\n          <ion-card-content style=\"--ion-grid-padding: 0;\">\r\n            <ion-toolbar>\r\n              <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\r\n            </ion-toolbar>\r\n         </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid class=\"ion-hide-md-down\">\r\n\r\n    <ion-row class=\"ion-align-items-center\" style=\"margin-top: 50px;\">\r\n\r\n      <!-- Search Bar -->\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"7\">\r\n            <ion-searchbar\r\n            no-border\r\n            debounce=\"800\"\r\n            showCancelButton=\"focus\"\r\n            placeholder=\"Search Events\"\r\n            (ionChange)=\"filter($event)\"\r\n            ></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n          <ion-button class=\"blue-button ion-float-right\" style=\"width: 200px;\" (click)=\"going()\">\r\n              My Events ( {{ eventsGoingLength }} )\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Cards -->\r\n    <ion-row>\r\n      <ion-col offset-lg=\"1\" size-lg=\"4\" *ngFor=\"let event of allEvents\">\r\n          <ion-card>\r\n              <img src=\"../assets/Journi_flyer.jpg\" />\r\n              <ion-card-header (click)=\"eventPage(event)\">\r\n                <ion-card-title>{{ event.title }}</ion-card-title>\r\n                <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\r\n                <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\r\n                <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\r\n                <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\r\n              </ion-card-header>\r\n              <ion-card-content class=\"ion-text-center\">\r\n                <ion-toolbar style=\"--background: none; height: auto;\">\r\n                  <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\r\n                </ion-toolbar>\r\n             </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    },
    {
        path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
        loadChildren: () => __webpack_require__.e(/*! import() | events-page-events-page-module */ "events-page-events-page-module").then(__webpack_require__.bind(null, /*! ./events-page/events-page.module */ "./src/app/pages/events/events-page/events-page.module.ts")).then(m => m.EventsPagePageModule)
    },
    {
        path: 'going',
        loadChildren: () => __webpack_require__.e(/*! import() | going-going-module */ "going-going-module").then(__webpack_require__.bind(null, /*! ./going/going.module */ "./src/app/pages/events/going/going.module.ts")).then(m => m.GoingPageModule)
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/pages/events/events-routing.module.ts");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");









let EventsPageModule = class EventsPageModule {
};
EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
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



/***/ }),

/***/ "./src/app/pages/events/events.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: none;\n}\n\nion-card {\n  margin-bottom: 100px;\n  --background: white;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  width: 100%;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\nion-card-title {\n  font-weight: 900;\n}\n\nion-card-subtitle {\n  font-weight: 400;\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcZXZlbnRzXFxldmVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWhlaWdodDogNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuXHJcblxyXG59XHJcblxyXG4uam9iLXNlY3Rpb24ge1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDYsIHAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4tLWlvbi1idXR0b25zIHtcclxuICAtLWNvbG9yOiAjODg4O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uam9iLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDIzMHB4O1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");







let EventsPage = class EventsPage {
    constructor(router, events, profile, toast, loading) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.toast = toast;
        this.loading = loading;
        this.eventsGoingLength = 0;
        this.searching = false;
        this.noSearchInput = false;
    }
    ngAfterViewInit() {
        this.searchbar.getInputElement().then((searchbarInputElement) => {
            searchbarInputElement.style.boxShadow = "none";
        });
    }
    ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
            this.id = details['_id'];
            this.userEmail = details['email'];
            this.events.eventsGoing$.next(details['eventsGoing']);
            this.events.eventsGoing$.subscribe(events => {
                this.eventsGoingLength = Object.values(events).length;
            });
            console.log('User id: ' + this.id);
            console.log('User email: ' + this.userEmail);
        });
        this.events.getEvents().subscribe(events => {
            // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
            // .
            console.log('Events that are intially loaded: ');
            console.log(events);
            this.allEvents = Object.values(events);
            this.allEventsLength = this.allEvents.length;
            this.allEvents.reverse();
            this.loadedAllEvents = Object.values(events);
            this.loadedAllEvents.reverse();
            for (const event of this.allEvents) {
                event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
    going() {
        this.router.navigate(['/home/events/going']);
    }
    filter($event) {
        this.initializeItems();
        let searchTerm = $event.detail.value;
        if (!searchTerm) {
            console.log('No results returned from Search');
            this.noSearchInput = true;
        }
        this.presentLoadingWithOptions();
        this.allEvents = this.allEvents.filter(currentEvents => {
            console.log(currentEvents);
            if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                this.noSearchInput = true;
            }
            if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log(currentEvents.title);
                    console.log((currentEvents));
                    this.searchTerm = searchTerm;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
            this.noSearchInput = true;
        });
        this.allEventsLength = this.allEvents.length;
        // If there are no matches with the searchTerm
        if (this.allEventsLength === 0) {
            console.log('No results from that search');
            this.searching = true;
            this.searchTerm = searchTerm;
            this.searchbar.getInputElement().then((searchbarInputElement) => {
                searchbarInputElement.value = '';
            });
            this.noSearchInput = true;
        }
    }
    initializeItems() {
        this.allEvents = this.loadedAllEvents;
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                duration: 1000,
                message: 'Searching for Events...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.allEvents = [];
            yield this.events.getEvents().subscribe(events => {
                this.allEvents = Object.values(events);
                this.allEventsLength = this.allEvents.length;
                this.allEvents.reverse();
                this.searching = false;
                // Format Times
                for (const event of this.allEvents) {
                    event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                    event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event.dateCreated), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                    event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'hh:mm a');
                }
            });
            setTimeout(() => {
                event.target.complete();
                console.log('Events Refreshed');
            }, 2000);
            yield this.searchbar.getInputElement().then((searchbarInputElement) => {
                searchbarInputElement.value = '';
                this.noSearchInput = false;
            });
            yield console.log('Refreshing Events Page..');
        });
    }
};
EventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"])
], EventsPage.prototype, "searchbar", void 0);
EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.page.scss */ "./src/app/pages/events/events.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], EventsPage);



/***/ })

}]);
//# sourceMappingURL=pages-events-events-module-es2015.js.map