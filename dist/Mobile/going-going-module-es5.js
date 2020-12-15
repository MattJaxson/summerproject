(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["going-going-module"], {
    /***/
    "JF4/":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/going/going.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function JF4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Desktop -->\n    <ion-grid class=\"ion-hide-md-down\">\n\n      <!-- Back Button -->\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"margin-top: 5%;\">\n        <ion-col class=\"ion-align-self-center\" pull=\".1\" size=\"8\">\n          <div><h1>My Events</h1></div>\n          <ion-button class=\"ion-float-right blue-button\" style=\"position: relative; top: -40px;\" (click)=\"goBack()\">\n            Go Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 3%;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n\n      <!-- Events -->\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 5%;\" *ngFor=\"let event of goingToEvents\">\n        <ion-col size=\"2\">\n         <img class=\"thumbnail\" src=\"../assets/Journi_flyer.jpg\"/>\n        </ion-col>\n        <ion-col size=\"4\">\n          <p>{{ event.title }}</p>\n          <p>{{ event.time }}</p>\n          <p>{{ event.date }}</p>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n            Details\n          </ion-button>\n          <ion-button class=\"orange-button\" (click)=\"presentAlertMultipleButtons(event._id)\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Mobile -->\n    <ion-grid class=\"ion-hide-lg-up\">\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 3%;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\">\n          <ion-card *ngFor=\"let event of goingToEvents\">\n            <img src=\"../assets/Journi_flyer.jpg\" />\n            <ion-card-header (click)=\"eventPage(event)\">\n              <ion-card-title>{{ event.title }}</ion-card-title>\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n            </ion-card-header>\n            <ion-card-content class=\"ion-text-center\">\n              <ion-button class=\"grey-button\"(click)=\"eventPage(event)\">\n                Details\n              </ion-button>\n              <ion-button class=\"orange-button\" (click)=\"cancel(event._id)\">\n                Cancel\n              </ion-button>\n           </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "MNQM":
    /*!************************************************************!*\
      !*** ./src/app/pages/events/going/going-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: GoingPageRoutingModule */

    /***/
    function MNQM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoingPageRoutingModule", function () {
        return GoingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _going_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./going.page */
      "sQIK");

      var routes = [{
        path: '',
        component: _going_page__WEBPACK_IMPORTED_MODULE_3__["GoingPage"]
      }];

      var GoingPageRoutingModule = function GoingPageRoutingModule() {
        _classCallCheck(this, GoingPageRoutingModule);
      };

      GoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GoingPageRoutingModule);
      /***/
    },

    /***/
    "XcFq":
    /*!****************************************************!*\
      !*** ./src/app/pages/events/going/going.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function XcFq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.thumbnail {\n  width: 200px;\n}\n\np {\n  font-size: 1.2em;\n  color: #999;\n}\n\nhr {\n  border: 1px solid #999;\n}\n\nion-card {\n  margin-top: 5%;\n}\n\nion-card-content ion-button {\n  width: 47%;\n}\n\nion-card-content :first-child {\n  margin-right: 5px;\n}\n\nion-card-content :nth-child(2) {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFJRTtFQUNFLFVBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0FBRko7O0FBSUU7RUFDRSxnQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2dvaW5nL2dvaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA0NyU7XG4gIH1cblxuICA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIDpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "no2t":
    /*!****************************************************!*\
      !*** ./src/app/pages/events/going/going.module.ts ***!
      \****************************************************/

    /*! exports provided: GoingPageModule */

    /***/
    function no2t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoingPageModule", function () {
        return GoingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _going_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./going-routing.module */
      "MNQM");
      /* harmony import */


      var _going_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./going.page */
      "sQIK");

      var GoingPageModule = function GoingPageModule() {
        _classCallCheck(this, GoingPageModule);
      };

      GoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _going_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoingPageRoutingModule"]],
        declarations: [_going_page__WEBPACK_IMPORTED_MODULE_6__["GoingPage"]]
      })], GoingPageModule);
      /***/
    },

    /***/
    "sQIK":
    /*!**************************************************!*\
      !*** ./src/app/pages/events/going/going.page.ts ***!
      \**************************************************/

    /*! exports provided: GoingPage */

    /***/
    function sQIK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoingPage", function () {
        return GoingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_going_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./going.page.html */
      "JF4/");
      /* harmony import */


      var _going_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./going.page.scss */
      "XcFq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/events.service */
      "riPR");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/emitters/events-event-emitter.service */
      "xcW5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var GoingPage = /*#__PURE__*/function () {
        function GoingPage(router, events, profile, cdr, toast, alert, eventEmitterService, location) {
          _classCallCheck(this, GoingPage);

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

        _createClass(GoingPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.profileSub.unsubscribe();
            this.eventsGoingSub.unsubscribe(); // this.cancelSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.location.onPopState(function () {
              _this.eventEmitterService.onBackAction();
            }); // Get the User's details

            this.profileSub = this.profile.getUserDetails().subscribe(function (details) {
              _this.id = details['_id'];
              _this.userEmail = details['email'];
              _this.eventsGoingSub = _this.events.eventsGoing$.subscribe(function (events) {
                _this.goingToEvents = events;
              });
              console.log('getting event user ' + _this.id + ' is going to');

              _this.refreshGoingEvents();
            });
          }
        }, {
          key: "eventPage",
          value: function eventPage(event) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.eventEmitterService.onBackAction();
            this.router.navigate(['/home/events']);
          }
        }, {
          key: "cancel",
          value: function cancel(eventID) {
            var _this2 = this;

            console.log(eventID);
            console.log("Removing ".concat(eventID, " from this Users eventsGoing property"));
            this.cancelSub = this.events.notGoingToEvent(eventID, this.userEmail, this.id).subscribe(function (events) {
              var eventsGoing = _this2.events.eventsGoing$.getValue();

              for (var i = 0; i < eventsGoing.length; i++) {
                if (eventsGoing[i] === eventID) {
                  eventsGoing.splice(i, 1);
                }
              }

              console.log(eventsGoing);
              _this2.goingToEvents = eventsGoing;

              _this2.events.eventsGoing$.next(eventsGoing);

              _this2.eventEmitterService.resetEvents();

              _this2.presentNotGoingToast();
            });
          }
        }, {
          key: "refreshGoingEvents",
          value: function refreshGoingEvents() {
            var _this3 = this;

            this.eventsGoingSub = this.events.getEventsGoing(this.id).subscribe(function (eventsGoing) {
              _this3.goingToEvents = Object.values(eventsGoing);

              _this3.goingToEvents.reverse();

              console.log("Updated events going list: ".concat(_this3.goingToEvents));

              var _iterator = _createForOfIteratorHelper(_this3.goingToEvents),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var event = _step.value;
                  event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                  event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(event.date), 'hh:mm a');
                  event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "presentNotGoingToast",
          value: function presentNotGoingToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toast.create({
                        message: 'You are no longer going to event. It has been removed from your "Going" list',
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
          key: "presentAlertMultipleButtons",
          value: function presentAlertMultipleButtons(eventID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.create({
                        header: 'Are you sure you want to delete this from My Events?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            _this4.cancel(eventID);

                            return true;
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('confirm cancel');
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return GoingPage;
      }();

      GoingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]
        }];
      };

      GoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-going',
        template: _raw_loader_going_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_going_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]])], GoingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=going-going-module-es5.js.map