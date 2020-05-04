(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGoingIconGoingIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button class=\"event-details\" (click)=\"eventPage(event)\">\r\n    View Event Details\r\n</ion-button>\r\n\r\n<ion-button *ngIf='!going' (click)=\"toggleGoingState(event)\">\r\n    Go to Event\r\n</ion-button>\r\n\r\n<ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\r\n    Cancel\r\n</ion-button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotGoingIconNotGoingIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid fixed>\r\n    <ion-row>\r\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\r\n            <p>No longer going to this Event?</p>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleGoingState(event)\" tappable [@notGoing]=\"goingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\r\n\r\n      <ion-col size=\"11\" offset=\"0.5\">\r\n          <ion-searchbar\r\n          debounce=\"800\"\r\n          showCancelButton=\"focus\"\r\n          placeholder=\"Search Events\"\r\n          (ionChange)=\"filter($event)\"\r\n          ></ion-searchbar>\r\n\r\n        </ion-col>\r\n\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: rgba(245,245,245,1); background-attachment: fixed;\">\r\n\r\n    <!-- Refresh -->\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n      </ion-refresher>\r\n\r\n      <!-- Mobile -->\r\n      <ion-toolbar class=\"ion-hide-md-up\">\r\n        <ion-title style=\"font-weight: 800;\" slot=\"start\">Events ({{allEventsLength}})</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"going()\">\r\n            Going ( {{ eventsGoingLength }} )\r\n          </ion-button>\r\n          </ion-buttons>\r\n      </ion-toolbar>\r\n\r\n      <!-- Search Results -->\r\n      <ion-row *ngIf=\"searching\" class=\"ion-text-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-title style=\"background: rgba(230,230,230,1); padding: 20px;\">{{allEventsLength}} search result(s) for '{{searchTerm}}'</ion-title>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n  <!-- Mobile -->\r\n  <ion-grid class=\"ion-hide-md-up\">\r\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-text-center\">\r\n      <ion-col size=\"11\" offset=\"0.5\">\r\n        <h6 class=\"text-header\">There were no Search results with that name. Please Refresh the page</h6>\r\n        <ion-button class=\"orange-button\" (click)=\"doRefresh($event)\">\r\n          Refresh\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"!noSearchInput\" >\r\n        <ion-card *ngFor=\"let event of allEvents\">\r\n            <img src=\"../assets/Journi_flyer.jpg\" />\r\n            <ion-card-header (click)=\"eventPage(event)\">\r\n              <ion-card-title>{{ event.title }}</ion-card-title>\r\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\r\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\r\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\r\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\r\n            </ion-card-header>\r\n            <ion-card-content style=\"--ion-grid-padding: 0;\">\r\n              <ion-toolbar>\r\n                <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\r\n              </ion-toolbar>\r\n           </ion-card-content>\r\n          </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid class=\"ion-hide-md-down\" style=\"--ion-grid-padding: 5%; --ion-grid-column-padding:        25px;\">\r\n\r\n     <ion-row>\r\n        <ion-col size=\"5\">\r\n            <ion-searchbar\r\n            no-border\r\n            debounce=\"800\"\r\n            showCancelButton=\"focus\"\r\n            placeholder=\"Search Events\"\r\n            (ionChange)=\"filter($event)\"\r\n            ></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n      <ion-toolbar class=\"ion-hide-md-down\" style=\"--ion-grid-padding: 5%;\">\r\n          <!-- <ion-title style=\"font-weight: 800; color: #999\" slot=\"start\">Events ({{allEventsLength}})</ion-title> -->\r\n          <a slot=\"end\" (click)=\"going()\">\r\n              View Events you are going to ( {{ eventsGoingLength }} )\r\n          </a>\r\n        </ion-toolbar>\r\n        </ion-col>\r\n     </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" *ngFor=\"let event of allEvents\">\r\n          <ion-card>\r\n              <img src=\"../assets/Journi_flyer.jpg\" />\r\n              <ion-card-header (click)=\"eventPage(event)\">\r\n                <ion-card-title>{{ event.title }}</ion-card-title>\r\n                <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\r\n                <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\r\n                <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\r\n                <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\r\n              </ion-card-header>\r\n              <ion-card-content class=\"ion-text-center\">\r\n                <ion-toolbar style=\"--background: none; height: auto;\">\r\n                  <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\r\n                </ion-toolbar>\r\n             </ion-card-content>\r\n            </ion-card></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/components/going-icon/going-icon.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/going-icon/going-icon.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGoingIconGoingIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 50px;\n  width: 90%;\n  margin: 5px;\n  --background: none;\n  --color: #21ce99;\n  --border-style: solid;\n  --border-color: #21ce99;\n  --border-width: 2px;\n}\n\n.not-going {\n  --color: #e4405f;\n  --border-style: solid;\n  --border-color: #e4405f;\n  --border-width: 2px;\n}\n\n.event-details {\n  --color: #999;\n  --border-style: solid;\n  --border-color: #999;\n  --border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2luZy1pY29uL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdvaW5nLWljb25cXGdvaW5nLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ29pbmctaWNvbi9nb2luZy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvaW5nLWljb24vZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDVweDtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgLS1jb2xvcjogIzIxY2U5OTtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6ICMyMWNlOTk7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuLm5vdC1nb2luZyB7XHJcbiAgLS1jb2xvcjogI2U0NDA1ZjtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6ICNlNDQwNWY7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuLmV2ZW50LWRldGFpbHN7XHJcbiAgLS1jb2xvcjogIzk5OTtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItY29sb3I6ICM5OTk7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuIiwicCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWNvbG9yOiAjMjFjZTk5O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMjFjZTk5O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4ubm90LWdvaW5nIHtcbiAgLS1jb2xvcjogI2U0NDA1ZjtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogI2U0NDA1ZjtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLmV2ZW50LWRldGFpbHMge1xuICAtLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/going-icon/going-icon.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/going-icon/going-icon.component.ts ***!
    \***************************************************************/

  /*! exports provided: GoingIconComponent */

  /***/
  function srcAppComponentsGoingIconGoingIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoingIconComponent", function () {
      return GoingIconComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");

    let GoingIconComponent = class GoingIconComponent {
      constructor(events, favs, toast, router, profile) {
        this.events = events;
        this.favs = favs;
        this.toast = toast;
        this.router = router;
        this.profile = profile;
        this.going = false;
        this.goingState = 'not-going';
        this.iconName = 'add-circle-outline';
      }

      ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
          this.userEmail = details['email'];
          this.events = details['eventsGoing'];
        });
      }

      toggleGoingState(event) {
        if (this.goingState === 'not-going') {
          this.goingState = 'going';
          this.iconName = 'close-circle-outline';
          this.going = true;
          this.goingToast();
          console.log("Going to event, ".concat(event.title));
          this.events.getEvents();
        } else {
          this.goingState = 'not-going';
          this.iconName = 'add-circle-outline';
          this.going = false;
          this.notGoingToast();
          console.log('No longer going to Event'); // this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
      }

      goingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'You are going to this event.',
            duration: 2000
          });
          toast.present();
        });
      }

      notGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'You are no longer going to this event.',
            duration: 2000
          });
          toast.present();
        });
      }

      eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
      }

    };

    GoingIconComponent.ctorParameters = () => [{
      type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
    }, {
      type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GoingIconComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GoingIconComponent.prototype, "userEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GoingIconComponent.prototype, "id", void 0);
    GoingIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-going-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./going-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('going', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: 'blue',
        opacity: '0.4',
        transition: '0.5s',
        transform: 'scale(0.9)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#21ce99',
        opacity: '1',
        transition: '0.5s',
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-going <=> going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./going-icon.component.scss */
      "./src/app/components/going-icon/going-icon.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], GoingIconComponent);
    /***/
  },

  /***/
  "./src/app/components/not-going-icon/not-going-icon.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotGoingIconNotGoingIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWdvaW5nLWljb24vbm90LWdvaW5nLWljb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/not-going-icon/not-going-icon.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NotGoingIconComponent */

  /***/
  function srcAppComponentsNotGoingIconNotGoingIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotGoingIconComponent", function () {
      return NotGoingIconComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let NotGoingIconComponent = class NotGoingIconComponent {
      constructor(events, toast) {
        this.events = events;
        this.toast = toast;
        this.notGoingState = 'not-going';
        this.iconName = 'add-circle';
      }

      ngOnInit() {}

      toggleNotGoingState(event) {
        if (this.notGoingState === 'not-going') {
          this.notGoingState = 'going';
          this.iconName = 'close-circle-outline';
          this.goingToast();
          console.log("Going to event, ".concat(event.title));
          this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
        } else {
          this.notGoingState = 'not-not-going';
          this.iconName = 'add-circle-outline';
          this.notGoingToast();
          console.log('No longer going to Event');
          this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
      }

      goingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'You are going to this event.',
            duration: 2000
          });
          toast.present();
        });
      }

      notGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'You are no longer going to this event.',
            duration: 2000
          });
          toast.present();
        });
      }

    };

    NotGoingIconComponent.ctorParameters = () => [{
      type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotGoingIconComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotGoingIconComponent.prototype, "userEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotGoingIconComponent.prototype, "id", void 0);
    NotGoingIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-going-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-going-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('notGoing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#e4405f',
        opacity: '0.4',
        transition: '0.5s',
        transform: 'scale(0.9)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#21ce99',
        opacity: '1',
        transition: '0.5s',
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-going <=> ot-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-going-icon.component.scss */
      "./src/app/components/not-going-icon/not-going-icon.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], NotGoingIconComponent);
    /***/
  },

  /***/
  "./src/app/pages/events/events-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/events/events-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: EventsPageRoutingModule */

  /***/
  function srcAppPagesEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
      return EventsPageRoutingModule;
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


    var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/pages/events/events.page.ts");

    const routes = [{
      path: '',
      component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }, {
      path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
      loadChildren: () => __webpack_require__.e(
      /*! import() | events-page-events-page-module */
      "events-page-events-page-module").then(__webpack_require__.bind(null,
      /*! ./events-page/events-page.module */
      "./src/app/pages/events/events-page/events-page.module.ts")).then(m => m.EventsPagePageModule)
    }, {
      path: 'going',
      loadChildren: () => __webpack_require__.e(
      /*! import() | going-going-module */
      "going-going-module").then(__webpack_require__.bind(null,
      /*! ./going/going.module */
      "./src/app/pages/events/going/going.module.ts")).then(m => m.GoingPageModule)
    }];
    let EventsPageRoutingModule = class EventsPageRoutingModule {};
    EventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/events/events.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/events/events.module.ts ***!
    \***********************************************/

  /*! exports provided: EventsPageModule */

  /***/
  function srcAppPagesEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
      return EventsPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/pages/events/events-routing.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/pages/events/events.page.ts");
    /* harmony import */


    var _components_going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/going-icon/going-icon.component */
    "./src/app/components/going-icon/going-icon.component.ts");
    /* harmony import */


    var _components_not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/not-going-icon/not-going-icon.component */
    "./src/app/components/not-going-icon/not-going-icon.component.ts");

    let EventsPageModule = class EventsPageModule {};
    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_6__["EventsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_7__["EventsPage"]
      }])],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_7__["EventsPage"], _components_going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_8__["GoingIconComponent"], _components_not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_9__["NotGoingIconComponent"]]
    })], EventsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/events/events.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/events/events.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-buttons > ion-button {\n  height: 35px;\n  border-radius: 5px;\n  padding: 0px;\n  --color: #ffffff;\n  font-size: 0.7em;\n  opacity: 1;\n}\n\na {\n  color: #005191;\n  padding-bottom: 15px;\n  font-size: 1.2em;\n  font-weight: 800;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\na:hover {\n  color: #faa71b;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-title {\n  color: #555;\n  font-size: 1.2em;\n}\n\nion-icon {\n  color: #faa71b;\n}\n\nion-card {\n  background: white;\n}\n\nion-toolbar {\n  padding: 10px;\n  --background: none;\n}\n\nion-toolbar ion-button {\n  --color: #999;\n  font-weight: 700;\n  font-size: 1.2em;\n}\n\n.events-toolbar {\n  --background: white;\n}\n\n.going {\n  font-size: 1em;\n  font-weight: 800;\n  height: 50px;\n  width: 90%;\n  margin: 5px;\n  --background: none;\n  --color: #999;\n  --border-style: solid;\n  --border-color: #999;\n  --border-width: 2px;\n}\n\nion-row {\n  margin-top: 10px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxldmVudHNcXGV2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NBOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0FDQ0g7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmEge1xyXG5jb2xvcjogIzAwNTE5MTtcclxucGFkZGluZy1ib3R0b206IDE1cHg7XHJcbmZvbnQtc2l6ZTogMS4yZW07XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmFhNzFiO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICBjb2xvcjogIzU1NTtcclxuICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmFhNzFiO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZXZlbnRzLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uZ29pbmcge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tY29sb3I6ICM5OTk7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcblxyXG5pb24tcm93IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWhlaWdodDogNjBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG4iLCJpb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBvcGFjaXR5OiAxO1xufVxuXG5hIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmYWE3MWI7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogI2ZhYTcxYjtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogIzk5OTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmV2ZW50cy10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdvaW5nIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1jb2xvcjogIzk5OTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogIzk5OTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taGVpZ2h0OiA2MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/events/events.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/events/events.page.ts ***!
    \*********************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppPagesEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
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
    /*! ../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");

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
        this.searchbar.getInputElement().then(searchbarInputElement => {
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
              console.log(currentEvents);
              this.searchTerm = searchTerm;
              this.searching = true;
              this.noSearchInput = false;
              return true;
            }

            return false;
          }

          this.noSearchInput = true;
        });
        this.allEventsLength = this.allEvents.length; // If there are no matches with the searchTerm

        if (this.allEventsLength === 0) {
          console.log('No results from that search');
          this.searching = true;
          this.searchTerm = searchTerm;
          this.searchbar.getInputElement().then(searchbarInputElement => {
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
            this.searching = false; // Format Times

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
          yield this.searchbar.getInputElement().then(searchbarInputElement => {
            searchbarInputElement.value = '';
            this.noSearchInput = false;
          });
          yield console.log('Refreshing Events Page..');
        });
      }

    };

    EventsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"])], EventsPage.prototype, "searchbar", void 0);
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/pages/events/events.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], EventsPage);
    /***/
  },

  /***/
  "./src/app/services/events.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/events.service.ts ***!
    \********************************************/

  /*! exports provided: EventsService */

  /***/
  function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsService", function () {
      return EventsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");

    let EventsService = class EventsService {
      constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      getEvents() {
        console.log('Getting Events');
        return this.http.get("".concat(this.BACKEND_URL, "/api/events"));
      }

      getEventsGoing(id) {
        return this.http.post("".concat(this.BACKEND_URL, "/api/events/events-going"), {
          id
        });
      }

      goingToEvent(eventID, userEmail, id) {
        console.log(this.profile);
        return this.http.post("".concat(this.BACKEND_URL, "/api/events/go-to-event"), {
          eventID,
          userEmail,
          id
        });
      }

      notGoingToEvent(eventID, userEmail, id) {
        return this.http.post("".concat(this.BACKEND_URL, "/api/events/dont-go-to-event"), {
          userEmail,
          eventID,
          id
        });
      }

    };

    EventsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }];

    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], EventsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-events-events-module-es5.js.map