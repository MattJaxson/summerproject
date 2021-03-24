(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "FJnO":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/notifications/notifications.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FJnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title>Notifications</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"--background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2)); --color: #005191; margin-right: 20px; width: 80px;\" (click)=\"clear()\">\n        Clear\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- No Messages -->\n  <ion-row *ngIf=\"this.allNotifications == 0\" class=\"ion-justify-content-center\">\n    <ion-col class=\"margin-top ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <h3 id=\"no-notifications\">You have no notifications</h3>\n      <img id=\"icon\" src=\"../../../../assets/icons/no-notifications-icon.svg\" alt=\"\">\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"this.allNotifications > 0\" class=\"ion-justify-content-center\">\n    <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <!-- List of Sliding Items -->\n      <ion-list>\n        <ion-item-sliding (click)=\"goTo()\" *ngFor=\"let n of allNotifications\">\n          <ion-item>\n            <ion-avatar>\n              <img [src]=\"n.instigatingUserProfilePicture\" />\n            </ion-avatar>\n            <p id=\"message\">{{n.message}}</p>\n            <p id=\"date\">{{n.date}}</p>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"delete(n)\">Delete</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "JvHa":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/posts/notifications/notifications-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: NotificationsPageRoutingModule */

    /***/
    function JvHa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
        return NotificationsPageRoutingModule;
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.page */
      "knYs");

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
      }];

      var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsPageRoutingModule);
      /***/
    },

    /***/
    "kVc8":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/posts/notifications/notifications.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NotificationsPageModule */

    /***/
    function kVc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
        return NotificationsPageModule;
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


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "JvHa");
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifications.page */
      "knYs");

      var NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
      })], NotificationsPageModule);
      /***/
    },

    /***/
    "knYs":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/posts/notifications/notifications.page.ts ***!
      \*****************************************************************/

    /*! exports provided: NotificationsPage */

    /***/
    function knYs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
        return NotificationsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "FJnO");
      /* harmony import */


      var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notifications.page.scss */
      "lxwU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      "KWWs");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      "b/SL");

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
                      n.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(n.date), {
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
                      n.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(n.date), {
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
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }];
      };

      NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], NotificationsPage);
      /***/
    },

    /***/
    "lxwU":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/posts/notifications/notifications.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function lxwU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-size: 0.7em;\n  margin-left: 10px;\n}\n\n#date {\n  opacity: 0.5;\n  display: inline-block;\n}\n\n#icon {\n  opacity: 0.2;\n}\n\n#no-notifications {\n  opacity: 0.3;\n}\n\n.margin-top {\n  margin-top: 15%;\n}\n\n.blue-button {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkYiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiNtZXNzYWdlIHtcbn1cblxuI2RhdGUge1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI2ljb24ge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbiNuby1ub3RpZmljYXRpb25zIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ubWFyZ2luLXRvcCB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map