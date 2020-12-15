function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/notifications/notifications.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/notifications/notifications.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPostsNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title>Notifications</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"--background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2)); --color: #005191; margin-right: 20px; width: 80px;\" (click)=\"clear()\">\n        Clear\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- No Messages -->\n  <ion-row *ngIf=\"this.allNotifications == 0\" class=\"ion-justify-content-center\">\n    <ion-col class=\"margin-top ion-text-center\" size-xs=\"10\">\n      <h3 id=\"no-notifications\">You have no notifications</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"this.allNotifications == 0\" class=\"ion-justify-content-center\">\n    <ion-col size=\"4\">\n      <img id=\"icon\" src=\"../../../../assets/icons/no-notifications-icon.svg\" alt=\"\">\n    </ion-col>\n  </ion-row>\n\n\n<!-- List of Sliding Items -->\n<ion-list>\n  <ion-item-sliding (click)=\"goTo()\" *ngFor=\"let n of allNotifications\">\n    <ion-item>\n      <ion-avatar>\n        <img [src]=\"n.instigatingUserProfilePicture\" />\n      </ion-avatar>\n      <p id=\"message\">{{n.message}}</p>\n      <p id=\"date\">{{n.date}}</p>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"delete(n)\">Delete</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/posts/notifications/notifications-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/posts/notifications/notifications-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: NotificationsPageRoutingModule */

  /***/
  function srcAppPagesPostsNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
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


    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/pages/posts/notifications/notifications.page.ts");

    var routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }];

    var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
      _classCallCheck(this, NotificationsPageRoutingModule);
    };

    NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/notifications/notifications.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/posts/notifications/notifications.module.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppPagesPostsNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
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


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/pages/posts/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/pages/posts/notifications/notifications.page.ts");

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/notifications/notifications.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/posts/notifications/notifications.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPostsNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  font-size: 0.7em;\n  margin-left: 10px;\n}\n\n#date {\n  opacity: 0.5;\n  display: inline-block;\n}\n\n#icon {\n  opacity: 0.2;\n}\n\n#no-notifications {\n  opacity: 0.3;\n}\n\n.margin-top {\n  margin-top: 15%;\n}\n\n.blue-button {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuI21lc3NhZ2Uge1xufVxuXG4jZGF0ZSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jaWNvbiB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuI25vLW5vdGlmaWNhdGlvbnMge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59IiwicCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jZGF0ZSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jaWNvbiB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuI25vLW5vdGlmaWNhdGlvbnMge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/posts/notifications/notifications.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/posts/notifications/notifications.page.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppPagesPostsNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/notifications.service */
    "./src/app/services/notifications.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(notifications, profile) {
        _classCallCheck(this, NotificationsPage);

        this.notifications = notifications;
        this.profile = profile;
      }

      _createClass(NotificationsPage, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          console.log('Notification Added on backend');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.notificationsSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.initSub = this.profile.getUserDetails().subscribe(function (userDetails) {
            _this.userEmail = userDetails['email'];
            console.log(_this.userEmail);
            _this.notificationsSub = _this.notifications.getNotifications(_this.userEmail).subscribe(function (notifications) {
              console.log(notifications);

              _this.notifications.notifications$.next(Object.values(notifications));

              _this.notifications.notifications$.subscribe(function (data) {
                _this.allNotifications = Object.values(data);

                var _iterator = _createForOfIteratorHelper(_this.allNotifications),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var n = _step.value;
                    n.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(n.date), {
                      includeSeconds: true,
                      addSuffix: false
                    });
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }); // TODO: replaces 'minutes' with M
              // let minutes = ;

            });
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this2 = this;

          this.notifications.clearNotifications(this.userEmail).subscribe(function (data) {
            _this2.notificationsSub = _this2.notifications.getNotifications(_this2.userEmail).subscribe(function (notifications) {
              console.log(notifications);

              _this2.notifications.notifications$.next(Object.values(notifications));

              _this2.notifications.notifications$.subscribe(function (data) {
                _this2.allNotifications = Object.values(data);

                var _iterator2 = _createForOfIteratorHelper(_this2.allNotifications),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var n = _step2.value;
                    n.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(n.date), {
                      includeSeconds: true,
                      addSuffix: false
                    });
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }); // TODO: replaces 'minutes' with M
              // let minutes = ;

            });
          });
        }
      }, {
        key: "goTo",
        value: function goTo() {
          console.log('Going to page from notification');
        }
      }, {
        key: "delete",
        value: function _delete(notification) {
          console.log('Deleting notification');
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }];
    };

    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/notifications/notifications.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/pages/posts/notifications/notifications.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])], NotificationsPage);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map