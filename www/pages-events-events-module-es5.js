(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"], {
    /***/
    "BSRB":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function BSRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n   <ion-title>Events</ion-title>\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"going()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         <ion-icon slot=\"start\" src=\"../../assets/icon/my-events-icon.svg\"></ion-icon>\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Refresh -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\" size-xl=\"10.5\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"5\" pull-xl=\"0.5\" size-xl=\"4\">\n            <h1>Events</h1>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"5\" push-xl=\"0.5\" size-xl=\"4\">\n            <img height=\"60\" class=\"ion-float-right\" src=\"../../../assets/icons/my-events-icon.svg\">\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <!-- Card List -->\n    <ion-row style=\"padding-top: 40px;\" class=\"ion-justify-content-center\">\n      <!-- Individual Cards -->\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\" size-xl=\"10.5\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let event of allEvents\">\n            <ion-card class=\"event-card\">\n              <img src=\"../assets/Journi_flyer.jpg\" />\n              <ion-card-header>\n                <ion-card-title>{{ event.title }}</ion-card-title>\n                <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                <!-- <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle> -->\n                <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n              </ion-card-header>\n              <ion-card-content class=\"ion-text-center\">\n                <ion-toolbar style=\"--background: none; height: auto;\">\n                  <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n                </ion-toolbar>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "Obr4":
    /*!***********************************************!*\
      !*** ./src/app/pages/events/events.module.ts ***!
      \***********************************************/

    /*! exports provided: EventsPageModule */

    /***/
    function Obr4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
        return EventsPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _events_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./events-routing.module */
      "dHfY");
      /* harmony import */


      var _events_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./events.page */
      "m4Vd");

      var EventsPageModule = function EventsPageModule() {
        _classCallCheck(this, EventsPageModule);
      };

      EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_7__["EventsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          component: _events_page__WEBPACK_IMPORTED_MODULE_8__["EventsPage"]
        }])],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_8__["EventsPage"]]
      })], EventsPageModule);
      /***/
    },

    /***/
    "dHfY":
    /*!*******************************************************!*\
      !*** ./src/app/pages/events/events-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: EventsPageRoutingModule */

    /***/
    function dHfY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
        return EventsPageRoutingModule;
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


      var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./events.page */
      "m4Vd");

      var routes = [{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
      }, {
        path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | events-page-events-page-module */
          "events-page-events-page-module").then(__webpack_require__.bind(null,
          /*! ./events-page/events-page.module */
          "kH/Y")).then(function (m) {
            return m.EventsPagePageModule;
          });
        }
      }, {
        path: 'going',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | going-going-module */
          "going-going-module").then(__webpack_require__.bind(null,
          /*! ./going/going.module */
          "no2t")).then(function (m) {
            return m.GoingPageModule;
          });
        }
      }];

      var EventsPageRoutingModule = function EventsPageRoutingModule() {
        _classCallCheck(this, EventsPageRoutingModule);
      };

      EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventsPageRoutingModule);
      /***/
    },

    /***/
    "m4Vd":
    /*!*********************************************!*\
      !*** ./src/app/pages/events/events.page.ts ***!
      \*********************************************/

    /*! exports provided: EventsPage */

    /***/
    function m4Vd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
        return EventsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./events.page.html */
      "BSRB");
      /* harmony import */


      var _events_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events.page.scss */
      "oG1l");
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
      /*! ../../services/events.service */
      "riPR");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/emitters/events-event-emitter.service */
      "xcW5");

      var EventsPage = /*#__PURE__*/function () {
        function EventsPage(router, events, profile, loading, eventEmitterService) {
          _classCallCheck(this, EventsPage);

          this.router = router;
          this.events = events;
          this.profile = profile;
          this.loading = loading;
          this.eventEmitterService = eventEmitterService;
          this.searching = false;
          this.noSearchInput = false;
        }

        _createClass(EventsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.deleteEvent();

            if (this.eventEmitterService.subsVar == undefined) {
              this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(function () {
                _this.getEvents();
              });
            } // Get the User's details


            this.profileSub = this.profile.getUserDetails().subscribe(function (details) {
              _this.id = details['_id'];
              _this.userEmail = details['email'];

              _this.events.eventsGoing$.next(details['eventsGoing']);

              _this.eventsGoingSub = _this.events.eventsGoing$.subscribe(function (events) {
                console.log(events.length);
                _this.eventsGoingLength = events.length;
              });
              console.log('User id: ' + _this.id);
              console.log('User email: ' + _this.userEmail);
            });
            this.eventsGoing = this.events.getEvents().subscribe(function (events) {
              // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
              // .
              // First Array of Events
              // this.allEvents = Object.values(events);
              _this.allEvents = Object.values(events);
              _this.allEventsLength = _this.allEvents.length;

              _this.allEvents.reverse();

              console.log(_this.allEvents); // Second Array of Events

              _this.loadedAllEvents = Object.values(events);

              _this.loadedAllEvents.reverse(); // Loop each Event and format the dates. Also, delete an Event if its scheduled date


              var _iterator = _createForOfIteratorHelper(_this.allEvents),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var event = _step.value;

                  // First date Event Date
                  // Second date Current Date
                  // If the Current Date is After the Event Date, Delete
                  // If True, Delete event.
                  if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(new Date(Date.now()), new Date(event.date))) {
                    _this.deleteEventSub = _this.events.deleteEvent(event._id).subscribe();
                  }

                  event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                  event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(event.date), 'hh:mm a');
                  event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(event.dateCreated), {
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
          key: "deleteEvent",
          value: function deleteEvent() {
            var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(new Date(1989, 6, 10), new Date(1987, 1, 11));
            console.log(result);
          }
        }, {
          key: "eventPage",
          value: function eventPage(event) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
          }
        }, {
          key: "going",
          value: function going() {
            this.router.navigate(['/home/events/going']);
          }
        }, {
          key: "filter",
          value: function filter($event) {
            var _this2 = this;

            this.initializeItems();
            var searchTerm = $event.detail.value;
            this.presentLoadingWithOptions();
            this.allEvents = this.allEvents.filter(function (currentEvents) {
              console.log(currentEvents);

              if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                _this2.noSearchInput = true;
              }

              if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentEvents.title);
                  console.log(currentEvents);
                  _this2.searchTerm = searchTerm;
                  _this2.searching = true;
                  _this2.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this2.noSearchInput = true;
            });
            this.allEventsLength = this.allEvents.length; // If there are no matches with the searchTerm

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
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.allEvents = this.loadedAllEvents;
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for Events...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading',
                        keyboardClose: false
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.allEvents = [];
                      this.eventsSub = this.events.getEvents().subscribe(function (events) {
                        _this3.allEvents = Object.values(events);
                        _this3.allEventsLength = _this3.allEvents.length;

                        _this3.allEvents.reverse();

                        _this3.searching = false; // Format Times

                        var _iterator2 = _createForOfIteratorHelper(_this3.allEvents),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var _event = _step2.value;

                            // First date Event Date
                            // Second date Current Date
                            // If the Current Date is After the Event Date, Delete
                            // If True, Delete event.
                            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(new Date(Date.now()), new Date(_event.date))) {
                              _this3.deleteEventSub = _this3.events.deleteEvent(_event._id).subscribe();
                            }

                            _event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(_event.date), 'MMMM dd, yyyy');
                            _event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(_event.dateCreated), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                            _event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(_event.date), 'hh:mm a');
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      });
                      setTimeout(function () {
                        event.target.complete();
                        console.log('Events Refreshed');
                      }, 2000);
                      _context2.next = 5;
                      return console.log('Refreshing Events Page..');

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.eventsSub = this.events.getEvents().subscribe(function (events) {
                        _this4.allEvents = Object.values(events);
                        _this4.allEventsLength = _this4.allEvents.length;

                        _this4.allEvents.reverse();

                        _this4.searching = false; // Format Times

                        var _iterator3 = _createForOfIteratorHelper(_this4.allEvents),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var event = _step3.value;
                            event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                            event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(event.dateCreated), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                            event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(event.date), 'hh:mm a');
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return EventsPage;
      }();

      EventsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"]
        }];
      };

      EventsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSearchbar"], {
            "static": false
          }]
        }]
      };
      EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"]])], EventsPage);
      /***/
    },

    /***/
    "oG1l":
    /*!***********************************************!*\
      !*** ./src/app/pages/events/events.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function oG1l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n}\n\nh1 {\n  font-size: 3em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\n#my-events-button {\n  opacity: 1;\n  --background: #005191;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 120px;\n  height: 40px;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  #my-events-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\nion-card {\n  --background: white;\n  margin: 0px 0 50px 0;\n  position: relative;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\n\nion-card {\n  padding-bottom: 120px;\n}\n\nion-card ion-card-content {\n  position: absolute;\n  bottom: 0;\n  padding: 0;\n  width: 100%;\n}\n\nion-searchbar {\n  --background: white;\n  margin-left: 10px;\n  border-radius: 5px;\n  --height: 30px;\n  width: 95%;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n}\n\n.orange-button {\n  width: unset;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\nh6.text-header {\n  padding: unset;\n  text-align: center;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\nion-button {\n  --background: none;\n}\n\nion-button ion-icon {\n  font-size: 2.5em;\n}\n\n.header-hr {\n  border-top: 2px solid #005191;\n  opacity: 0.5;\n  margin-top: 40px;\n  opacity: 0.2;\n}\n\nion-card-title {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n}\n\nion-card-subtitle {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsa0JBQUE7RUFDQSw0Q0FBQTtBQUVGOztBQUNBO0VBR0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFRTtFQUNFLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERiIsImZpbGUiOiJldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI215LWV2ZW50cy1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xuICAjbXktZXZlbnRzLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHggMCA1MHB4IDA7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG5pb24tY2FyZCB7XG4gIC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAvLyBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmg2LnRleHQtaGVhZGVyIHtcbiAgcGFkZGluZzogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbn1cblxuLmhlYWRlci1ocntcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDUxOTE7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwNTVhNTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-events-events-module-es5.js.map