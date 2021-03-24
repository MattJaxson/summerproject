(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["going-going-module"],{

/***/ "JF4/":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Desktop -->\n    <ion-grid class=\"ion-hide-md-down\">\n\n      <!-- Back Button -->\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"margin-top: 5%;\">\n        <ion-col class=\"ion-align-self-center\" pull=\".1\" size=\"8\">\n          <div><h1>My Events</h1></div>\n          <ion-button class=\"ion-float-right blue-button\" style=\"position: relative; top: -40px;\" (click)=\"goBack()\">\n            Go Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 100px;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n\n      <!-- Events -->\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 5%;\" *ngFor=\"let event of goingToEvents\">\n        <ion-col size=\"2\">\n         <img class=\"thumbnail\" src=\"../assets/Journi_flyer.jpg\"/>\n        </ion-col>\n        <ion-col size=\"4\">\n          <p>{{ event.title }}</p>\n          <p>{{ event.time }}</p>\n          <p>{{ event.date }}</p>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n            Details\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Mobile -->\n    <ion-grid class=\"ion-hide-lg-up\">\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" class=\"ion-text-center\" style=\"margin-top: 100px;\">\n          <p>You have no events saved in My Events list. Please hit the <ion-button class=\"going\">\n            Go\n        </ion-button> button on an Event to save it to this list.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\">\n          <ion-card *ngFor=\"let event of goingToEvents\">\n            <img src=\"../assets/Journi_flyer.jpg\" />\n            <ion-card-header (click)=\"eventPage(event)\">\n              <ion-card-title>{{ event.title }}</ion-card-title>\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n            </ion-card-header>\n            <ion-card-content>\n                <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n           </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "MNQM":
/*!************************************************************!*\
  !*** ./src/app/pages/events/going/going-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GoingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingPageRoutingModule", function() { return GoingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _going_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./going.page */ "sQIK");




const routes = [
    {
        path: '',
        component: _going_page__WEBPACK_IMPORTED_MODULE_3__["GoingPage"]
    }
];
let GoingPageRoutingModule = class GoingPageRoutingModule {
};
GoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoingPageRoutingModule);



/***/ }),

/***/ "XcFq":
/*!****************************************************!*\
  !*** ./src/app/pages/events/going/going.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.thumbnail {\n  width: 200px;\n}\n\n.going {\n  --color: white;\n  width: 50px;\n  font-weight: 500;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.going:hover {\n  --color: white;\n}\n\np {\n  font-size: 1.2em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\nhr {\n  border: 1px solid #999;\n}\n\nion-card {\n  margin-top: 5%;\n}\n\nion-card-content ion-button {\n  width: 47%;\n}\n\nion-card-content :first-child {\n  margin-right: 5px;\n}\n\nion-card-content :nth-child(2) {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2dvaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBQ0E7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLRTtFQUNFLFVBQUE7QUFGSjs7QUFLRTtFQUNFLGlCQUFBO0FBSEo7O0FBS0U7RUFDRSxnQkFBQTtBQUhKIiwiZmlsZSI6ImdvaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5nb2luZyB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyNGQ4YTg7XG5cbiAgJjpob3ZlciB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gIH1cbn1cbnAge1xuICBcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbn1cblxuXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogNDclO1xuICB9XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICA6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "no2t":
/*!****************************************************!*\
  !*** ./src/app/pages/events/going/going.module.ts ***!
  \****************************************************/
/*! exports provided: GoingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingPageModule", function() { return GoingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/custom-component.module */ "zAgk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _going_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./going-routing.module */ "MNQM");
/* harmony import */ var _going_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./going.page */ "sQIK");








let GoingPageModule = class GoingPageModule {
};
GoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _going_routing_module__WEBPACK_IMPORTED_MODULE_6__["GoingPageRoutingModule"]
        ],
        declarations: [_going_page__WEBPACK_IMPORTED_MODULE_7__["GoingPage"]]
    })
], GoingPageModule);



/***/ }),

/***/ "sQIK":
/*!**************************************************!*\
  !*** ./src/app/pages/events/going/going.page.ts ***!
  \**************************************************/
/*! exports provided: GoingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingPage", function() { return GoingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_going_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./going.page.html */ "JF4/");
/* harmony import */ var _going_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./going.page.scss */ "XcFq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/events.service */ "riPR");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ "xcW5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











let GoingPage = class GoingPage {
    constructor(router, events, profile, cdr, toast, alert, eventEmitterService, location) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.cdr = cdr;
        this.toast = toast;
        this.alert = alert;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.goingToEvents = [];
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        // Get the User's details
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
            this.id = details['_id'];
            this.userEmail = details['email'];
            this.eventsGoingSub = this.events.eventsGoing$.subscribe(events => {
                this.goingToEvents = events;
            });
            console.log('getting event user ' + this.id + ' is going to');
            this.refreshGoingEvents();
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
    goBack() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/events']);
    }
    refreshGoingEvents() {
        this.eventsGoingSub = this.events.getEventsGoing(this.id).subscribe(eventsGoing => {
            this.goingToEvents = Object.values(eventsGoing);
            this.goingToEvents.reverse();
            console.log(`Updated events going list: ${this.goingToEvents}`);
            for (const event of this.goingToEvents) {
                event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
            this.eventEmitterService.resetEvents();
        });
    }
    presentNotGoingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to event. It has been removed from your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
};
GoingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"] }
];
GoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-going',
        template: _raw_loader_going_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_going_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]])
], GoingPage);



/***/ })

}]);
//# sourceMappingURL=going-going-module-es2015.js.map