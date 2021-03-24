(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-page-events-page-module"],{

/***/ "AC5e":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{eventTitle}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n\n        <!-- Picture Header -->\n        <ion-row class=\"ion-justify-content-center event-image\">\n        </ion-row>\n\n        <!-- Event Details -->\n        <ion-row class=\"details ion-justify-content-center ion-align-items-center\">\n          <ion-col size-xs=\"11\" size-lg=\"6\">\n            <h3>Event Title</h3>\n            <p>{{ eventTitle }}</p>\n            <h3>Address </h3>\n            <p>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p>\n            <h3>Date</h3>\n            <p> {{ eventDate }}</p>\n            <h3>Time</h3>\n            <p>{{ eventTime }}</p>\n            <h3>Description</h3>\n            <p>{{ eventDescription }}</p>\n        </ion-col>\n        </ion-row>\n\n        <!-- Going or Not Going sections? -->\n\n        <!-- GOING? -->\n        <ion-row *ngIf=\"!going\" class=\"going ion-justify-content-center\">\n            <ion-col class=\"ion-text-center\" size=\"10\">\n              <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'Yes', this event will be added to your Your Events.</p>\n              <ion-button class=\"going-button\" (click)=\"goingToEvent()\">\n                   Yes.\n                </ion-button><br><br>\n              <a class=\"going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n               <a class=\"going-link\" routerLink=\"/home/events/going\">View My Events</a>\n                 </ion-col>\n        </ion-row>\n\n        <!-- NOT GOING -->\n        <ion-row *ngIf=\"going\" class=\"going ion-justify-content-center\">\n              <ion-col class=\"ion-text-center\" size=\"10\">\n                <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'No', this event will be deleted from your Your Events.</p>\n                <ion-button class=\"not-going-button\" (click)=\"notGoingToEvent()\">\n                 No.\n                </ion-button><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events/going\">View My Events</a>\n               </ion-col>\n      </ion-row>\n\n      </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "bvz0":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.ts ***!
  \**************************************************************/
/*! exports provided: EventsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPagePage", function() { return EventsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_events_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./events-page.page.html */ "AC5e");
/* harmony import */ var _events_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-page.page.scss */ "trZN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/events.service */ "riPR");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/profile.service */ "Aso2");
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ "xcW5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










let EventsPagePage = class EventsPagePage {
    constructor(activatedRoute, events, profile, router, toastController, eventEmitterService, location) {
        this.activatedRoute = activatedRoute;
        this.events = events;
        this.profile = profile;
        this.router = router;
        this.toastController = toastController;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.going = false;
    }
    ngOnDestroy() {
        // this.eventsSub.unsubscribe();
        this.eventEmitterService.subsVar.unsubscribe();
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
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
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
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
        this.goingToEventSub = this.events.goingToEvent(this.eventId, this.userEmail, this.id)
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
        this.notGoingToEventSub = this.events.notGoingToEvent(this.eventId, this.userEmail, this.id).subscribe(events => {
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
    callEventEmitter() {
        this.eventEmitterService.onBackAction();
    }
    presentGoingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are going to this Event. It has been saved to your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
    presentNotGoingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are no longer going to event. It has been removed from your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
};
EventsPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["EventsEventEmitterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"] }
];
EventsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events-page',
        template: _raw_loader_events_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["EventsEventEmitterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]])
], EventsPagePage);



/***/ }),

/***/ "kH/Y":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.module.ts ***!
  \****************************************************************/
/*! exports provided: EventsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPagePageModule", function() { return EventsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _events_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-page-routing.module */ "qsMo");
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-page.page */ "bvz0");







let EventsPagePageModule = class EventsPagePageModule {
};
EventsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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

/***/ "qsMo":
/*!************************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EventsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPagePageRoutingModule", function() { return EventsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-page.page */ "bvz0");




const routes = [
    {
        path: '',
        component: _events_page_page__WEBPACK_IMPORTED_MODULE_3__["EventsPagePage"]
    }
];
let EventsPagePageRoutingModule = class EventsPagePageRoutingModule {
};
EventsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPagePageRoutingModule);



/***/ }),

/***/ "trZN":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  background: none;\n  --box-shadow: none;\n}\n\nion-header {\n  background: none;\n  --box-shadow: none;\n}\n\nh3 {\n  font-weight: 800;\n  line-height: 1em;\n  width: 150px;\n  color: #0055a5;\n  font-size: 1.1em;\n}\n\np {\n  font-size: 1.1em;\n  color: #333;\n  margin-bottom: 40px;\n}\n\n.going-link:link {\n  color: #1baf88;\n}\n\n.going-link:visited {\n  color: #1baf88;\n}\n\n.not-going-link:link {\n  color: #faa71b;\n  font-size: 1.4em;\n}\n\n.not-going-link:visited {\n  color: #faa71b;\n  font-size: 1.4em;\n}\n\n.header {\n  background-color: #edf3f8;\n  padding: 0;\n  height: auto;\n}\n\n.event-image {\n  height: 300px;\n  background: url('Journi_flyer-500x357.png');\n  background-size: cover;\n  background-position: center;\n}\n\n.details {\n  height: auto;\n  background: white;\n  padding: 50px 0px;\n}\n\n.going-text {\n  font-weight: 600;\n  color: #222;\n  width: 100%;\n  margin: 26px auto;\n}\n\n.going {\n  background: #edf3f8;\n  padding: 80px 0px;\n  color: white;\n}\n\n.not-going {\n  background: #edf3f8;\n  padding: 80px 0px;\n  color: white;\n}\n\n.going-button {\n  width: 200px;\n  font-size: 1.2em;\n  font-weight: 800;\n  --background: #1baf88;\n  --background-hover: #1baf88;\n  --color: white;\n}\n\n.not-going-button {\n  width: 200px;\n  font-size: 1.2em;\n  --background: #faa71b;\n  --background-hover: #faa71b;\n  --color: white;\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2V2ZW50cy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFQUZGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLFVBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJldmVudHMtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB3aWR0aDogMTUwcHg7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5nb2luZy1saW5rOmxpbmsge1xuICBjb2xvcjogIzFiYWY4ODtcbn1cblxuLmdvaW5nLWxpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMWJhZjg4O1xufVxuXG4ubm90LWdvaW5nLWxpbms6bGluayB7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4ubm90LWdvaW5nLWxpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmM2Y4O1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ldmVudC1pbWFnZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL0pvdXJuaV9mbHllci01MDB4MzU3LnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG5cbi5nb2luZy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI2cHggYXV0bztcbn1cblxuLmdvaW5nIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgcGFkZGluZzogODBweCAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdC1nb2luZyB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHBhZGRpbmc6IDgwcHggMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nb2luZy1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIC0tYmFja2dyb3VuZDogIzFiYWY4ODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMWJhZjg4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdC1nb2luZy1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmFhNzFiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5pb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmc6IDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=events-page-events-page-module-es2015.js.map