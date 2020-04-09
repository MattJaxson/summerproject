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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Events you are going to</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed>\n        <ion-row *ngFor=\"let event of goingToEvents\">\n            <ion-card>\n                <img src=\"../assets/Journi_flyer.jpg\" />\n                <ion-card-header (click)=\"eventPage(event)\">\n                  <ion-card-title>{{ event.title }}</ion-card-title>\n                  <ion-card-subtitle>{{ event.addressOne }} {{ event.addressTwo}}, {{ event.city }}, {{ event.state }}, {{ event.zip }}</ion-card-subtitle>\n                  <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                  <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                  <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-toolbar>\n                  </ion-toolbar>\n               </ion-card-content>\n              </ion-card>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-buttons > ion-button {\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZ29pbmcvZ29pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn0iLCJpb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let GoingPage = class GoingPage {
      constructor(router, events, profile, toast) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.toast = toast;
      }

      ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
          this.id = details['_id'];
          this.userEmail = details['email'];
          this.events.getEventsGoing(this.id).subscribe(events => {
            this.goingToEvents = Object.values(events);
            this.goingToEvents.reverse(); // for (const event of this.goingToEvents) {
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

    };

    GoingPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }];

    GoingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-going',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./going.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./going.page.scss */
      "./src/app/pages/events/going/going.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], GoingPage);
    /***/
  }
}]);
//# sourceMappingURL=going-going-module-es5.js.map