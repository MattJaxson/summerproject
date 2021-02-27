(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"], {
    /***/
    "0GEM":
    /*!*******************************************!*\
      !*** ./src/app/services/fairs.service.ts ***!
      \*******************************************/

    /*! exports provided: FairsService */

    /***/
    function GEM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FairsService", function () {
        return FairsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var FairsService = /*#__PURE__*/function () {
        function FairsService(http, router, loading, alert) {
          _classCallCheck(this, FairsService);

          this.http = http;
          this.router = router;
          this.loading = loading;
          this.alert = alert;
          this.allFairs = [];
          this.FAIRS_BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fairsUrl;
        }

        _createClass(FairsService, [{
          key: "getFairs",
          value: function getFairs() {
            console.log('Getting Fairs');
            return this.http.get("".concat(this.FAIRS_BACKEND_URL, "/api/fairs"));
          }
        }, {
          key: "getFair",
          value: function getFair(name) {
            console.log(name);
            console.log('id from fairs service');
            return this.http.post("".concat(this.FAIRS_BACKEND_URL, "/api/fairs/fair"), {
              name: name
            });
          }
        }, {
          key: "registerStudent",
          value: function registerStudent(student) {
            return this.http.post("".concat(this.FAIRS_BACKEND_URL, "/api/fairs/register-student"), student);
          }
        }, {
          key: "registerChaperone",
          value: function registerChaperone(chaperone) {
            return this.http.post("".concat(this.FAIRS_BACKEND_URL, "/api/fairs/register-chaperone"), chaperone);
          }
        }, {
          key: "registerPartner",
          value: function registerPartner(partner) {
            return this.http.post("".concat(this.FAIRS_BACKEND_URL, "/api/fairs/register-partner"), partner);
          }
        }, {
          key: "registerVolunteer",
          value: function registerVolunteer(volunteer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", this.http.post("".concat(this.FAIRS_BACKEND_URL, "/api/fairs/register-volunteer"), volunteer).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return console.log('registering volunteer to fair');

                                case 2:
                                  _context.next = 4;
                                  return console.log(data);

                                case 4:
                                  _context.next = 6;
                                  return this.presentLoadingWithOptions(volunteer.name, volunteer.email);

                                case 6:
                                  _context.next = 8;
                                  return this.router.navigate(['']);

                                case 8:
                                  _context.next = 10;
                                  return console.log('REGISTERED VOLUNTEER TO FAIR!');

                                case 10:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Errors

        }, {
          key: "handleError",
          value: function handleError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(error.error === 'A Student already has that email address')) {
                        _context3.next = 3;
                        break;
                      }

                      console.log('A Student already has that email address');
                      return _context3.abrupt("return", this.emailAlreadyExistAlert());

                    case 3:
                      return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error));

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "emailAlreadyExistAlert",
          value: function emailAlreadyExistAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alert.create({
                        header: 'Email already in use.',
                        message: 'This email already exists. Please enter another email address',
                        buttons: ['Ok']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Loading

        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions(chaperoneName, chaperoneEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loading.create({
                        duration: 3000,
                        message: "Registering you as a Chaperone ".concat(chaperoneName, ". Sending an email to ").concat(chaperoneEmail),
                        translucent: true,
                        cssClass: 'loading',
                        backdropDismiss: true
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      _context5.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context5.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed with role:', role);

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // Alerts

        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alert.create({
                        header: 'Alert',
                        cssClass: 'registered',
                        message: 'This is an alert message.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getSchools",
          value: function getSchools() {
            console.log('Getting schools');
            return this.http.get("".concat(this.FAIRS_BACKEND_URL, "/api/admin/fairs/get-schools"));
          }
        }]);

        return FairsService;
      }();

      FairsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      FairsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], FairsService);
      /***/
    },

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


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n   <ion-title>Events</ion-title>\n\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"going()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         <ion-icon slot=\"start\" src=\"../../assets/icon/my-events-icon.svg\"></ion-icon>\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Refresh -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"fairs-info\" size=\"11\">\n        <h1>United Way Fairs</h1>\n        <p>Upcoming fairs with United Way</p>\n        <div>\n          <h2>{{allFairs[0].title}}</h2>\n          <h2>{{allFairs[0].date}}</h2>\n          <h2>{{allFairs[0].time}}</h2>\n          <h2>{{allFairs[0].address}}, {{allFairs[0].city}},{{allFairs[0].state}}</h2>\n          <!-- <ion-button (click)=\"onClick()\">\n            Info\n          </ion-button> -->\n\n        <hr style=\"border-top: #9993 solid 2px;\n        margin-bottom: 20px;\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Events Cards -->\n    <ion-row  style=\"margin-top: 30px;\" class=\"ion-justify-content-center\" *ngIf=\"!noSearchInput\" >\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" size-xs=\"11.5 \">\n        <ion-card *ngFor=\"let event of allEvents\">\n          <div *ngIf=\"allEvents.length === 0\">\n            <p>There are no Events, please come back later.</p>\n          </div>\n          <img src=\"../assets/Journi_flyer.jpg\" />\n          <ion-card-header (click)=\"eventPage(event)\">\n            <ion-card-title>{{ event.title }}</ion-card-title>\n            <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n            <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n            <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n            <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n          </ion-card-header>\n          <ion-card-content>\n              <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n         </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-hide-md-down\">\n\n    <ion-row style=\"margin: 50px 0 50px 0;\">\n\n      <!-- Search Bar -->\n      <ion-col size=\"8.33\" push=\"1\">\n        <ion-searchbar\n            no-border\n            debounce=\"800\"\n            showCancelButton=\"focus\"\n            placeholder=\"Search Event Titles\"\n            (ionChange)=\"filter($event)\"\n            >\n      </ion-searchbar>\n      </ion-col>\n      <ion-col size=\"2\" push=\"0.5\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button ion-float-right\" style=\"width: 170px; position: fixed; top: 60px;\" (click)=\"going()\">\n              <ion-icon slot=\"start\" src=\"../../assets/icons/my-events-icon.svg\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\" style=\"margin-top: 25px;\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Card List -->\n    <ion-row>\n      <ion-col push=\"1\" size=\"8\" size-xl=\"8\">\n        <ion-row>\n          <!-- Search Results -->\n          <ion-col size=\"11\" *ngIf=\"searching && allEventsLength > 0\" class=\"ion-text-center\">\n            <ion-title style=\"background: rgba(230,230,230,1); padding: 20px; margin-top: 35px;\">{{allEventsLength}} search result(s) for '{{searchTerm}}'</ion-title>\n          </ion-col>\n          <!-- Individual Cards -->\n          <ion-col size-lg=\"5.5\" *ngFor=\"let event of allEvents\">\n              <ion-card class=\"event-card\">\n                  <img src=\"../assets/Journi_flyer.jpg\" />\n                  <ion-card-header (click)=\"eventPage(event)\">\n                    <ion-card-title>{{ event.title }}</ion-card-title>\n                    <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                    <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                    <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n                    <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n                  </ion-card-header>\n                  <ion-card-content class=\"ion-text-center\" style=\"width: 91%;\">\n                    <ion-toolbar style=\"--background: none; height: auto;\">\n                      <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n                    </ion-toolbar>\n                 </ion-card-content>\n              </ion-card>\n            </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div\n  id=\"searchbar-wrapper\">\n    <ion-searchbar\n    debounce=\"2000\"\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      showCancelButton=\"true\"\n      placeholder=\"Search for Events by Title\"\n      (ionChange)=\"filter($event)\">\n    </ion-searchbar>\n    <div id=\"search-options\">\n      <p>You can choose up to five hashtags. Please seperate each tag with a comma ( , ) . Example: \"Computers, Science, Technology\"</p>\n      <p>Current Search: ----</p>\n      <div>\n        <ion-button class=\"cancel-button\">\n          Cancel\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n<!-- <ion-searchbar\ndebounce=\"2000\"\nclass=\"searchbar\"\nid=\"post-searchbar\"\nanimated=\"true\"\nsearchIcon=\"none\"\nshowCancelButton=\"true\"\nplaceholder=\"Search Event Titles\"\n(ionChange)=\"filter($event)\"></ion-searchbar> -->\n";
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
      /* harmony import */


      var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/fairs.service */
      "0GEM");

      var EventsPage = /*#__PURE__*/function () {
        function EventsPage(router, events, profile, fairs, toast, loading, eventEmitterService) {
          _classCallCheck(this, EventsPage);

          this.router = router;
          this.events = events;
          this.profile = profile;
          this.fairs = fairs;
          this.toast = toast;
          this.loading = loading;
          this.eventEmitterService = eventEmitterService;
          this.allFairs = [];
          this.searching = false;
          this.noSearchInput = false;
        }

        _createClass(EventsPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.eventsGoingSub.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.searchbar.getInputElement().then(function (searchbarInputElement) {
              searchbarInputElement.style.boxShadow = "none";
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.fairs.getFairs().subscribe(function (data) {
              console.log(data);
              _this2.allFairs = Object.values(data);
            });
            this.deleteEvent();

            if (this.eventEmitterService.subsVar == undefined) {
              this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(function () {
                _this2.getEvents();
              });
            } // Get the User's details


            this.profileSub = this.profile.getUserDetails().subscribe(function (details) {
              _this2.id = details['_id'];
              _this2.userEmail = details['email'];

              _this2.events.eventsGoing$.next(details['eventsGoing']);

              _this2.eventsGoingSub = _this2.events.eventsGoing$.subscribe(function (events) {
                console.log(events.length);
                _this2.eventsGoingLength = events.length;
              });
              console.log('User id: ' + _this2.id);
              console.log('User email: ' + _this2.userEmail);
            });
            this.eventsGoing = this.events.getEvents().subscribe(function (events) {
              // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
              // .
              // First Array of Events
              _this2.allEvents = Object.values(events);
              _this2.allEventsLength = _this2.allEvents.length;

              _this2.allEvents.reverse(); // Second Array of Events


              _this2.loadedAllEvents = Object.values(events);

              _this2.loadedAllEvents.reverse(); // Loop each Event and format the dates. Also, delete an Event if its scheduled date


              var _iterator = _createForOfIteratorHelper(_this2.allEvents),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var event = _step.value;

                  // First date Event Date
                  // Second date Current Date
                  // If the Current Date is After the Event Date, Delete
                  // If True, Delete event.
                  if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(new Date(Date.now()), new Date(event.date))) {
                    _this2.deleteEventSub = _this2.events.deleteEvent(event._id).subscribe();
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
            var _this3 = this;

            this.initializeItems();
            var searchTerm = $event.detail.value;
            this.presentLoadingWithOptions();
            this.allEvents = this.allEvents.filter(function (currentEvents) {
              console.log(currentEvents);

              if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                _this3.noSearchInput = true;
              }

              if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentEvents.title);
                  console.log(currentEvents);
                  _this3.searchTerm = searchTerm;
                  _this3.searching = true;
                  _this3.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this3.noSearchInput = true;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var loading;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for Events...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading',
                        keyboardClose: false
                      });

                    case 2:
                      loading = _context7.sent;
                      _context7.next = 5;
                      return loading.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.allEvents = [];
                      this.eventsSub = this.events.getEvents().subscribe(function (events) {
                        _this4.allEvents = Object.values(events);
                        _this4.allEventsLength = _this4.allEvents.length;

                        _this4.allEvents.reverse();

                        _this4.searching = false; // Format Times

                        var _iterator2 = _createForOfIteratorHelper(_this4.allEvents),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var _event = _step2.value;

                            // First date Event Date
                            // Second date Current Date
                            // If the Current Date is After the Event Date, Delete
                            // If True, Delete event.
                            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(new Date(Date.now()), new Date(_event.date))) {
                              _this4.deleteEventSub = _this4.events.deleteEvent(_event._id).subscribe();
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
                      _context8.next = 5;
                      return this.searchbar.getInputElement().then(function (searchbarInputElement) {
                        searchbarInputElement.value = '';
                        _this4.noSearchInput = false;
                      });

                    case 5:
                      _context8.next = 7;
                      return console.log('Refreshing Events Page..');

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.eventsSub = this.events.getEvents().subscribe(function (events) {
                        _this5.allEvents = Object.values(events);
                        _this5.allEventsLength = _this5.allEvents.length;

                        _this5.allEvents.reverse();

                        _this5.searching = false; // Format Times

                        var _iterator3 = _createForOfIteratorHelper(_this5.allEvents),
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
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
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
          type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_10__["FairsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
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
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_10__["FairsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventsEventEmitterService"]])], EventsPage);
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


      __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n\n.fairs-info {\n  background: #eee;\n}\n\n#my-events-button {\n  opacity: 1;\n  --background: #005191;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 120px;\n  height: 40px;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  #my-events-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\nion-card {\n  --background: white;\n  margin: 0px 0 50px 0;\n  position: relative;\n  top: -5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\n\nion-card {\n  min-height: 300px;\n  max-height: 500px;\n  padding-bottom: 150px;\n}\n\nion-card ion-card-content {\n  position: absolute;\n  bottom: 0;\n  padding: 0;\n  width: 100%;\n}\n\nion-searchbar {\n  --background: white;\n  margin-left: 10px;\n  border-radius: 5px;\n  --height: 30px;\n  width: 95%;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n}\n\n.orange-button {\n  width: unset;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\nh6.text-header {\n  padding: unset;\n  text-align: center;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\nion-button {\n  --background: none;\n}\n\nion-button ion-icon {\n  font-size: 2.5em;\n}\n\n.header-hr {\n  border-top: 2px solid #005191;\n  opacity: 0.5;\n  margin-top: 40px;\n  opacity: 0.2;\n}\n\nion-card-title {\n  font-size: 1.5em;\n  font-weight: 600;\n  color: #0055a5;\n}\n\nion-card-subtitle {\n  font-size: 1.3em;\n}\n\n@media screen and (min-width: 1200px) {\n  ion-card.event-card {\n    height: 44vw;\n    max-height: 670px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQztFQUNFLGdCQUFBO0FBQ0g7O0FBRUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBRUU7RUFDRSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuI3NlYXJjaGJhci13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuIH1cblxuIC5mYWlycy1pbmZve1xuICAgYmFja2dyb3VuZDogI2VlZTtcbiB9XG5cbiNteS1ldmVudHMtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgI215LWV2ZW50cy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMzVweDtcbiAgfVxufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMHB4IDAgNTBweCAwO1xuICAvLyBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG5pb24tY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmg2LnRleHQtaGVhZGVyIHtcbiAgcGFkZGluZzogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbn1cblxuLmhlYWRlci1ocntcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDUxOTE7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA1NWE1O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBpb24tY2FyZC5ldmVudC1jYXJkIHtcbiAgICBoZWlnaHQ6IDQ0dnc7XG4gICAgbWF4LWhlaWdodDogNjcwcHg7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "xcW5":
    /*!**********************************************************!*\
      !*** ./src/app/emitters/events-event-emitter.service.ts ***!
      \**********************************************************/

    /*! exports provided: EventsEventEmitterService */

    /***/
    function xcW5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsEventEmitterService", function () {
        return EventsEventEmitterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EventsEventEmitterService = /*#__PURE__*/function () {
        function EventsEventEmitterService() {
          _classCallCheck(this, EventsEventEmitterService);

          this.invokeEventsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(EventsEventEmitterService, [{
          key: "onBackAction",
          value: function onBackAction() {
            this.invokeEventsPageRefresh.emit();
          }
        }, {
          key: "resetEvents",
          value: function resetEvents() {
            this.invokeEventsPageRefresh.emit();
          }
        }]);

        return EventsEventEmitterService;
      }();

      EventsEventEmitterService.ctorParameters = function () {
        return [];
      };

      EventsEventEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EventsEventEmitterService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-events-events-module-es5.js.map