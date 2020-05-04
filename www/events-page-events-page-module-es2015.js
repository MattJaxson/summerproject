(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-page-events-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button *ngIf=\"going\" (click)=\"notGoingToEvent()\" style=\"--padding-end: 20px;\">\r\n          No longer going to this Event?\r\n            <ion-icon  name=\"close-circle-outline\" style=\"color: #e4405f\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!going\" (click)=\"goingToEvent()\" style=\"--padding-end: 20px;\">\r\n          Want to go to this Event?\r\n            <ion-icon name=\"add-circle\" style=\"color: #21ce99\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"event-header\">\r\n              <img src=\"../assets/Journi_flyer.jpg\" />\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"--ion-grid-column-padding: 20px;\">\r\n              <p> <span>Title:</span><br> {{ eventTitle }}</p>\r\n              <p> <span>Address: </span><br>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p>\r\n              <p> <span>Date:</span><br> {{ eventDate }}</p>\r\n              <p> <span>Time:</span><br> {{ eventTime }}</p>\r\n              <p> <span>Description:</span><br> {{ eventDescription }}</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button class=\"orange-button\" (click)=\"googleMaps()\">\r\n              Google Maps\r\n            </ion-button>\r\n            <p style=\"opacity: 0.3; margin-top: 40px; background: rgba(205,205,205, 0.6); padding: 20px;\">posted: {{ eventDateCreated }}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  color: #005191;\n  font-weight: 600;\n}\n\nion-header::after {\n  background-image: none;\n}\n\n.event-header {\n  height: 40vh;\n  background-attachment: fixed;\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxldmVudHNcXGV2ZW50cy1wYWdlXFxldmVudHMtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMtcGFnZS9ldmVudHMtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wYWdlL2V2ZW50cy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uZXZlbnQtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XHJcbiAgLS1wYWRkaW5nOiA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufSIsInNwYW4ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uZXZlbnQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG5pb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmc6IDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */");

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
    googleMaps() {
        console.log('Google Maps');
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