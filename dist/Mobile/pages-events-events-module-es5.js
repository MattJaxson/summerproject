function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"], {
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


    __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-searchbar\n      debounce=\"2000\"\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      showCancelButton=\"true\"\n      placeholder=\"Search Event Titles\"\n      (ionChange)=\"filter($event)\"\n       ></ion-searchbar>\n\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"going()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         <ion-icon slot=\"start\" src=\"../../assets/icons/my-events-icon.svg\"></ion-icon>\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Refresh -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Events Cards -->\n    <ion-row  style=\"margin-top: 30px;\" class=\"ion-justify-content-center\" *ngIf=\"!noSearchInput\" >\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" size-xs=\"11.5 \">\n        <ion-card *ngFor=\"let event of allEvents\">\n          <img src=\"../assets/Journi_flyer.jpg\" />\n          <ion-card-header (click)=\"eventPage(event)\">\n            <ion-card-title>{{ event.title }}</ion-card-title>\n            <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n            <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n            <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n            <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n          </ion-card-header>\n          <ion-card-content>\n              <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n         </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-hide-md-down\">\n\n    <ion-row style=\"margin: 50px 0 50px 0;\">\n\n      <!-- Search Bar -->\n      <ion-col size=\"8.33\" push=\"1\">\n        <ion-searchbar\n            no-border\n            debounce=\"800\"\n            showCancelButton=\"focus\"\n            placeholder=\"Search Event Titles\"\n            (ionChange)=\"filter($event)\"\n            >\n      </ion-searchbar>\n      </ion-col>\n      <ion-col size=\"2\" push=\"0.5\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button ion-float-right\" style=\"width: 170px; position: fixed; top: 60px;\" (click)=\"going()\">\n              <ion-icon slot=\"start\" src=\"../../assets/icons/my-events-icon.svg\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <h6 class=\"text-header\" style=\"margin-top: 25px;\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Card List -->\n    <ion-row>\n      <ion-col push=\"1\" size=\"8\" size-xl=\"8\">\n        <ion-row>\n          <!-- Search Results -->\n          <ion-col size=\"11\" *ngIf=\"searching && allEventsLength > 0\" class=\"ion-text-center\">\n            <ion-title style=\"background: rgba(230,230,230,1); padding: 20px; margin-top: 35px;\">{{allEventsLength}} search result(s) for '{{searchTerm}}'</ion-title>\n          </ion-col>\n          <!-- Individual Cards -->\n          <ion-col size-lg=\"5.5\" *ngFor=\"let event of allEvents\">\n              <ion-card class=\"event-card\">\n                  <img src=\"../assets/Journi_flyer.jpg\" />\n                  <ion-card-header (click)=\"eventPage(event)\">\n                    <ion-card-title>{{ event.title }}</ion-card-title>\n                    <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                    <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                    <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n                    <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n                  </ion-card-header>\n                  <ion-card-content class=\"ion-text-center\" style=\"width: 91%;\">\n                    <ion-toolbar style=\"--background: none; height: auto;\">\n                      <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n                    </ion-toolbar>\n                 </ion-card-content>\n              </ion-card>\n            </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/emitters/events-event-emitter.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/emitters/events-event-emitter.service.ts ***!
    \**********************************************************/

  /*! exports provided: EventsEventEmitterService */

  /***/
  function srcAppEmittersEventsEventEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsEventEmitterService", function () {
      return EventsEventEmitterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    EventsEventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EventsEventEmitterService);
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
        "./src/app/pages/events/events-page/events-page.module.ts")).then(function (m) {
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
        "./src/app/pages/events/going/going.module.ts")).then(function (m) {
          return m.GoingPageModule;
        });
      }
    }];

    var EventsPageRoutingModule = function EventsPageRoutingModule() {
      _classCallCheck(this, EventsPageRoutingModule);
    };

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


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/pages/events/events-routing.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/pages/events/events.page.ts");

    var EventsPageModule = function EventsPageModule() {
      _classCallCheck(this, EventsPageModule);
    };

    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_7__["EventsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_8__["EventsPage"]
      }])],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_8__["EventsPage"]]
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


    __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n  background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\n\n#my-events-button {\n  opacity: 1;\n  --background: #005191;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 120px;\n  height: 40px;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  #my-events-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\nion-card {\n  --background: white;\n  margin: 0px 0 50px 0;\n  position: relative;\n  top: -5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\n\nion-card {\n  min-height: 300px;\n  max-height: 500px;\n  padding-bottom: 150px;\n}\n\nion-card ion-card-content {\n  position: absolute;\n  bottom: 0;\n  padding: 0;\n  width: 100%;\n}\n\nion-toolbar {\n  --background: none;\n}\n\nion-searchbar {\n  --background: white;\n  margin-left: 10px;\n  border-radius: 5px;\n  --height: 30px;\n  width: 95%;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n}\n\n.orange-button {\n  width: unset;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\nh6.text-header {\n  padding: unset;\n  text-align: center;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\nion-button {\n  --background: none;\n}\n\nion-button ion-icon {\n  font-size: 2.5em;\n}\n\n.header-hr {\n  border-top: 2px solid #005191;\n  opacity: 0.5;\n  margin-top: 40px;\n  opacity: 0.2;\n}\n\nion-card-title {\n  font-weight: 400;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  padding-bottom: 10px;\n  font-size: 2em;\n  color: #005191;\n  border-bottom: 1px solid #005191;\n}\n\nion-card-subtitle {\n  font-weight: 800;\n  line-height: 1em;\n  background: #fff1d9;\n  width: 200px;\n  color: #faa71b;\n  font-size: 1.3em;\n  padding: 10px 0px 10px 20px;\n  border-radius: 50px;\n}\n\n@media screen and (min-width: 1200px) {\n  ion-card.event-card {\n    height: 44vw;\n    max-height: 670px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNTE5MTtcbn1cblxuI215LWV2ZW50cy1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xuICAjbXktZXZlbnRzLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHggMCA1MHB4IDA7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmg2LnRleHQtaGVhZGVyIHtcbiAgcGFkZGluZzogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbn1cblxuLmhlYWRlci1ocntcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDUxOTE7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1MTkxO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGJhY2tncm91bmQ6ICNmZmYxZDk7XG4gIHdpZHRoOiAyMDBweDtcbiAgY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGlvbi1jYXJkLmV2ZW50LWNhcmQge1xuICAgIGhlaWdodDogNDR2dztcbiAgICBtYXgtaGVpZ2h0OiA2NzBweDtcbiAgfVxufSIsImlvbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1MTkxO1xufVxuXG4jbXktZXZlbnRzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgI215LWV2ZW50cy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMzVweDtcbiAgfVxufVxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDBweCAwIDUwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5pb24tY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xufVxuXG4uam9iLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDIzMHB4O1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oNi50ZXh0LWhlYWRlciB7XG4gIHBhZGRpbmc6IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5oZWFkZXItaHIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzAwNTE5MTtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDUxOTE7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjFkOTtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaW9uLWNhcmQuZXZlbnQtY2FyZCB7XG4gICAgaGVpZ2h0OiA0NHZ3O1xuICAgIG1heC1oZWlnaHQ6IDY3MHB4O1xuICB9XG59Il19 */";
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
    /* harmony import */


    var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/emitters/events-event-emitter.service */
    "./src/app/emitters/events-event-emitter.service.ts");

    var EventsPage = /*#__PURE__*/function () {
      function EventsPage(router, events, profile, toast, loading, eventEmitterService) {
        _classCallCheck(this, EventsPage);

        this.router = router;
        this.events = events;
        this.profile = profile;
        this.toast = toast;
        this.loading = loading;
        this.eventEmitterService = eventEmitterService;
        this.searching = false;
        this.noSearchInput = false;
      }

      _createClass(EventsPage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.eventsSub.unsubscribe();
          this.eventsGoingSub.unsubscribe();
          this.eventEmitterService.subsVar.unsubscribe();
          this.deleteEventSub.unsubscribe();
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
            _this.allEvents = Object.values(events);
            _this.allEventsLength = _this.allEvents.length;

            _this.allEvents.reverse(); // Second Array of Events


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
                if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isAfter"])(new Date(Date.now()), new Date(event.date))) {
                  _this.deleteEventSub = _this.events.deleteEvent(event._id).subscribe();
                }

                event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event.dateCreated), {
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
          var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isAfter"])(new Date(1989, 6, 10), new Date(1987, 1, 11));
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isAfter"])(new Date(Date.now()), new Date(_event.date))) {
                            _this3.deleteEventSub = _this3.events.deleteEvent(_event._id).subscribe();
                          }

                          _event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(_event.date), 'MMMM dd, yyyy');
                          _event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(_event.dateCreated), {
                            includeSeconds: true,
                            addSuffix: true
                          });
                          _event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(_event.date), 'hh:mm a');
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
                    return this.searchbar.getInputElement().then(function (searchbarInputElement) {
                      searchbarInputElement.value = '';
                      _this3.noSearchInput = false;
                    });

                  case 5:
                    _context2.next = 7;
                    return console.log('Refreshing Events Page..');

                  case 7:
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
                          event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                          event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event.dateCreated), {
                            includeSeconds: true,
                            addSuffix: true
                          });
                          event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'hh:mm a');
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventsEventEmitterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"])], EventsPage.prototype, "searchbar", void 0);
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/pages/events/events.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventsEventEmitterService"]])], EventsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-events-events-module-es5.js.map