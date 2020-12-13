(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["going-going-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Desktop -->\n    <ion-grid class=\"ion-hide-md-down\">\n\n      <!-- Back Button -->\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"margin-top: 5%;\">\n        <ion-col class=\"ion-align-self-center\" pull=\".1\" size=\"8\">\n          <div><h1>My Events</h1></div>\n          <ion-button class=\"ion-float-right blue-button\" style=\"position: relative; top: -40px;\" (click)=\"goBack()\">\n            Go Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 3%;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n\n      <!-- Events -->\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 5%;\" *ngFor=\"let event of goingToEvents\">\n        <ion-col size=\"2\">\n         <img class=\"thumbnail\" src=\"../assets/Journi_flyer.jpg\"/>\n        </ion-col>\n        <ion-col size=\"4\">\n          <p>{{ event.title }}</p>\n          <p>{{ event.time }}</p>\n          <p>{{ event.date }}</p>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n            Details\n          </ion-button>\n          <ion-button class=\"orange-button\" (click)=\"presentAlertMultipleButtons(event._id)\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Mobile -->\n    <ion-grid class=\"ion-hide-lg-up\">\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 3%;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\">\n          <ion-card *ngFor=\"let event of goingToEvents\">\n            <img src=\"../assets/Journi_flyer.jpg\" />\n            <ion-card-header (click)=\"eventPage(event)\">\n              <ion-card-title>{{ event.title }}</ion-card-title>\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n            </ion-card-header>\n            <ion-card-content class=\"ion-text-center\">\n              <ion-button class=\"grey-button\"(click)=\"eventPage(event)\">\n                Details\n              </ion-button>\n              <ion-button class=\"orange-button\" (click)=\"cancel(event._id)\">\n                Cancel\n              </ion-button>\n           </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/events/going/going-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/events/going/going-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GoingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingPageRoutingModule", function() { return GoingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _going_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./going.page */ "./src/app/pages/events/going/going.page.ts");




const routes = [
    {
        path: '',
        component: _going_page__WEBPACK_IMPORTED_MODULE_3__["GoingPage"]
    }
];
let GoingPageRoutingModule = class GoingPageRoutingModule {
};
GoingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/events/going/going.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/events/going/going.module.ts ***!
  \****************************************************/
/*! exports provided: GoingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingPageModule", function() { return GoingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _going_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./going-routing.module */ "./src/app/pages/events/going/going-routing.module.ts");
/* harmony import */ var _going_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./going.page */ "./src/app/pages/events/going/going.page.ts");







let GoingPageModule = class GoingPageModule {
};
GoingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _going_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoingPageRoutingModule"]
        ],
        declarations: [_going_page__WEBPACK_IMPORTED_MODULE_6__["GoingPage"]]
    })
], GoingPageModule);



/***/ }),

/***/ "./src/app/pages/events/going/going.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/events/going/going.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.thumbnail {\n  width: 200px;\n}\n\np {\n  font-size: 1.2em;\n  color: #999;\n}\n\nhr {\n  border: 1px solid #999;\n}\n\nion-card {\n  margin-top: 5%;\n}\n\nion-card-content ion-button {\n  width: 47%;\n}\n\nion-card-content :first-child {\n  margin-right: 5px;\n}\n\nion-card-content :nth-child(2) {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0Usc0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURJRTtFQUNFLFVBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0FDRko7O0FESUU7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA0NyU7XG4gIH1cblxuICA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIDpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi50aHVtYm5haWwge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi1idXR0b24ge1xuICB3aWR0aDogNDclO1xufVxuaW9uLWNhcmQtY29udGVudCA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/events/going/going.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/events/going/going.page.ts ***!
  \**************************************************/
/*! exports provided: GoingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingPage", function() { return GoingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ "./src/app/emitters/events-event-emitter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









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
    ngOnDestroy() {
        this.profileSub.unsubscribe();
        this.eventsGoingSub.unsubscribe();
        // this.cancelSub.unsubscribe();
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
    cancel(eventID) {
        console.log(eventID);
        console.log(`Removing ${eventID} from this Users eventsGoing property`);
        this.cancelSub = this.events.notGoingToEvent(eventID, this.userEmail, this.id).subscribe(events => {
            const eventsGoing = this.events.eventsGoing$.getValue();
            for (let i = 0; i < eventsGoing.length; i++) {
                if (eventsGoing[i] === eventID) {
                    eventsGoing.splice(i, 1);
                }
            }
            console.log(eventsGoing);
            this.goingToEvents = eventsGoing;
            this.events.eventsGoing$.next(eventsGoing);
            this.eventEmitterService.resetEvents();
            this.presentNotGoingToast();
        });
    }
    refreshGoingEvents() {
        this.eventsGoingSub = this.events.getEventsGoing(this.id).subscribe(eventsGoing => {
            this.goingToEvents = Object.values(eventsGoing);
            this.goingToEvents.reverse();
            console.log(`Updated events going list: ${this.goingToEvents}`);
            for (const event of this.goingToEvents) {
                event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["formatDistanceToNow"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
        });
    }
    presentNotGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to event. It has been removed from your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlertMultipleButtons(eventID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to delete this from My Events?',
                buttons: [{
                        text: 'Yes',
                        handler: () => {
                            this.cancel(eventID);
                            return true;
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('confirm cancel');
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
GoingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventsEventEmitterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"] }
];
GoingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-going',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./going.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./going.page.scss */ "./src/app/pages/events/going/going.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventsEventEmitterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]])
], GoingPage);



/***/ })

}]);
//# sourceMappingURL=going-going-module-es2015.js.map