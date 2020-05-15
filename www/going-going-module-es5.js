(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["going-going-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventsGoingGoingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>Back</ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title slot=\"end\">My Events</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Desktop -->\r\n    <ion-grid class=\"ion-hide-lg-down\">\r\n\r\n      <!-- Back Button -->\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"margin-top: 5%;\">\r\n        <ion-col class=\"ion-align-self-center\" size=\"10\">\r\n          <div><h1>My Events</h1></div>\r\n          <ion-button class=\"ion-float-right blue-button\" style=\"position: relative; top: -40px;\" (click)=\"goBack()\">\r\n            Go Back\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\r\n        <ion-col offset=\"1\" size=\"10\" class=\"ion-text-center\" style=\"margin-top: 3%;\">\r\n          <p>You have no events saved in My Events list.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- Events -->\r\n      <ion-row style=\"margin-top: 5%;\" *ngFor=\"let event of goingToEvents\">\r\n\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"2\">\r\n         <img class=\"thumbnail\" src=\"../assets/Journi_flyer.jpg\" />\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <p>{{ event.title }}</p>\r\n          <p>{{ event.time }}</p>\r\n          <p>{{ event.date }}</p>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button class=\"orange-button\" style=\"--background: #999; --color: white;\" (click)=\"eventPage(event)\">\r\n            Details\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button class=\"orange-button\" (click)=\"presentAlertMultipleButtons(event._id)\">\r\n            Cancel\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <hr>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- Mobile -->\r\n    <ion-grid class=\"ion-hide-lg-up\">\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size-xs=\"10\" size-sm=\"8\" size-md=\"8\">\r\n          <ion-card *ngFor=\"let event of goingToEvents\">\r\n            <img src=\"../assets/Journi_flyer.jpg\" />\r\n            <ion-card-header (click)=\"eventPage(event)\">\r\n              <ion-card-title>{{ event.title }}</ion-card-title>\r\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\r\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\r\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\r\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\r\n            </ion-card-header>\r\n            <ion-card-content class=\"ion-text-center\">\r\n              <ion-button class=\"orange-button\">\r\n                Cancel\r\n              </ion-button>\r\n           </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/events/going/going-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/events/going/going-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: GoingPageRoutingModule */

  /***/
  function srcAppPagesEventsGoingGoingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoingPageRoutingModule", function () {
      return GoingPageRoutingModule;
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


    var _going_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./going.page */
    "./src/app/pages/events/going/going.page.ts");

    const routes = [{
      path: '',
      component: _going_page__WEBPACK_IMPORTED_MODULE_3__["GoingPage"]
    }];
    let GoingPageRoutingModule = class GoingPageRoutingModule {};
    GoingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GoingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/events/going/going.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/events/going/going.module.ts ***!
    \****************************************************/

  /*! exports provided: GoingPageModule */

  /***/
  function srcAppPagesEventsGoingGoingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoingPageModule", function () {
      return GoingPageModule;
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


    var _going_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./going-routing.module */
    "./src/app/pages/events/going/going-routing.module.ts");
    /* harmony import */


    var _going_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./going.page */
    "./src/app/pages/events/going/going.page.ts");

    let GoingPageModule = class GoingPageModule {};
    GoingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _going_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoingPageRoutingModule"]],
      declarations: [_going_page__WEBPACK_IMPORTED_MODULE_6__["GoingPage"]]
    })], GoingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/events/going/going.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/events/going/going.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventsGoingGoingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".thumbnail {\n  width: 200px;\n}\n\np {\n  font-size: 1.2em;\n  color: #999;\n}\n\nhr {\n  border: 1px solid #999;\n}\n\nion-card {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5IEZZRlxcTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcZXZlbnRzXFxnb2luZ1xcZ29pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudHMvZ29pbmcvZ29pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtYm5haWwge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufSIsIi50aHVtYm5haWwge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/events/going/going.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/events/going/going.page.ts ***!
    \**************************************************/

  /*! exports provided: GoingPage */

  /***/
  function srcAppPagesEventsGoingGoingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoingPage", function () {
      return GoingPage;
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


    var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let GoingPage = class GoingPage {
      constructor(router, events, profile, toast, alert) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.toast = toast;
        this.alert = alert;
        this.goingToEvents = [];
      }

      ngOnInit() {
        console.log('going to events: ');
        console.log(this.goingToEvents.length); // Get the User's details

        this.profile.getUserDetails().subscribe(details => {
          this.id = details['_id'];
          this.userEmail = details['email'];
          console.log('getting event user ' + this.id + ' is going to');
          this.events.getEventsGoing(this.id).subscribe(events => {
            this.goingToEvents = Object.values(events);
            this.goingToEvents.reverse();
            console.log(this.goingToEvents);

            for (const event of this.goingToEvents) {
              event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event.date), 'MMMM dd, yyyy');
              event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event.date), 'hh:mm a');
              event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["formatDistanceToNow"])(new Date(event.dateCreated), {
                includeSeconds: true,
                addSuffix: true
              });
            } // for (const event of this.goingToEvents) {
            //   event.date = format( new Date(event.date), 'MMMM-dd-yyyy');
            //   event.dateCreated = formatRelative( new Date(event.dateCreated), new Date(event.dateCreated));
            //   event.time = format( new Date(event.date), 'hh:mm a');
            // }

          });
        });
      }

      eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
      }

      goBack() {
        this.router.navigate(['/home/events']);
      }

      cancel(eventID) {
        this.presentAlertMultipleButtons(eventID);
        console.log(eventID);
        console.log("Removing ".concat(eventID, " from this Users eventsGoing property"));
        ;
        this.events.notGoingToEvent(eventID, this.userEmail, this.id).subscribe(events => {
          const eventsGoing = this.events.eventsGoing$.getValue();

          for (let i = 0; i < eventsGoing.length; i++) {
            if (eventsGoing[i] === eventID) {
              eventsGoing.splice(i, 1);
            }
          }

          console.log(eventsGoing);
          this.presentNotGoingToast();
          this.events.eventsGoing$.next(eventsGoing);
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
            }, {
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

    GoingPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
    }];

    GoingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-going',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./going.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./going.page.scss */
      "./src/app/pages/events/going/going.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], GoingPage);
    /***/
  }
}]);
//# sourceMappingURL=going-going-module-es5.js.map