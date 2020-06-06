function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <!-- Toolbar for Desktop -->\n  <ion-toolbar slot=\"top\" class=\"ion-hide-md-down\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img id=\"logo\" src=\"../../assets/fyf-logo-2.png\">\n        </ion-col>\n        <ion-col class=\"ion-float-end\" size=\"8\">\n          <a (click)=\"logoutConfirm()\">\n            LOGOUT\n          </a>\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\n            PROFILE\n          </a>\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\n            MENTORS\n          </a>\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\n            POSTS\n          </a>\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\n           EVENTS\n          </a>\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\n            JOBS\n          </a>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n\n  <!-- Tab Bar for Mobile -->\n  <ion-tab-bar slot=\"bottom\" id=\"myTabBar\" class=\"ion-hide-lg-up\">\n    <ion-tab-button tab=\"jobs\">\n      <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\n      <ion-label>JOBS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"events\">\n      <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\n      <ion-label>EVENTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"posts\">\n      <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon>\n      <ion-label>POSTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mentors\">\n      <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\n      <ion-label>MENTORS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\n      <ion-label>PROFILE</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      redirectTo: '/home/profile',
      pathMatch: 'full'
    }, {
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'jobs',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-jobs-jobs-module */
            [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-jobs-jobs-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/jobs/jobs.module */
            "./src/app/pages/jobs/jobs.module.ts")).then(function (m) {
              return m.JobsPageModule;
            });
          }
        }]
      }, {
        path: 'posts',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-posts-posts-module */
            [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/posts/posts.module */
            "./src/app/pages/posts/posts.module.ts")).then(function (m) {
              return m.PostPageModule;
            });
          }
        }]
      }, {
        path: 'profile',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-profile-profile-module */
            "pages-profile-profile-module").then(__webpack_require__.bind(null,
            /*! ../pages/profile/profile.module */
            "./src/app/pages/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }]
      }, {
        path: 'events',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-events-events-module */
            [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/events/events.module */
            "./src/app/pages/events/events.module.ts")).then(function (m) {
              return m.EventsPageModule;
            });
          }
        }]
      }, {
        path: 'mentors',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-mentors-mentors-module */
            "pages-mentors-mentors-module").then(__webpack_require__.bind(null,
            /*! ../pages/mentors/mentors.module */
            "./src/app/pages/mentors/mentors.module.ts")).then(function (m) {
              return m.MentorsPageModule;
            });
          }
        }]
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-bar {\n  height: 70px;\n  box-shadow: 2px 1px 5px #555;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-label {\n  position: relative;\n  top: 10px;\n  font-size: 0.8em;\n  transition: 0.5s;\n}\n\nion-tab-button {\n  font-size: 10px;\n  --color: #D0D4D8;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 2.3em;\n  --font-size-selected: 4em;\n  --fill-selected: red;\n  --background-color: white;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-toolbar {\n  --min-height: 10vh;\n  --background: white;\n  font-size: 1.1em;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar a {\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: #888888;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #faa71b;\n  font-weight: 800;\n  transition: 0.5s;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n\nion-grid {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FERUU7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQU47O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBQ0xKOztBRE9JO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTE47O0FEUUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05OOztBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQTjs7QURXRTtFQUNFLFlBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWItQmFyXG5pb24tdGFiLWJhciAge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggNXB4ICM1NTU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuXG59XG5cbmlvbi10YWItYnV0dG9ue1xuICBmb250LXNpemU6IDEwcHg7XG4gIC0tY29sb3I6ICNEMEQ0RDg7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNGRkIzNTE7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tbWFyZ2luLWxlZnQ6MHB4O1xuICAtLW1hcmdpbi1yaWdodDowcHg7XG4gIG1heC13aWR0aDoxMDBweDtcbiAgaW9uLWljb257XG4gICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgICAgLS1mb250LXNpemUtc2VsZWN0ZWQ6IDRlbTtcbiAgICAgIC0tZmlsbC1zZWxlY3RlZDogcmVkO1xuICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH19XG5cblxuXG5cbiAgLy8gVG9vbGJhclxuXG4gICNsb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiAxMHZoO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggcmdiYSgwLDAsMCwwLjA4KTtcblxuICAgIGEge1xuICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5hY3RpdmUtbGluayB7XG4gICAgICBjb2xvcjogI2ZhYTcxYjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogI0QwRDREODtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5cbiAgaW9uLWdyaWQge1xuICAgIGhlaWdodDogNTBweDtcbiAgfSIsImlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC0tY29sb3I6ICNEMEQ0RDg7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNGRkIzNTE7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tbWFyZ2luLWxlZnQ6MHB4O1xuICAtLW1hcmdpbi1yaWdodDowcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5pb24tdGFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG4gIC0tZm9udC1zaXplLXNlbGVjdGVkOiA0ZW07XG4gIC0tZmlsbC1zZWxlY3RlZDogcmVkO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDEwdmg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuaW9uLXRvb2xiYXIgYSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgb3BhY2l0eTogMC43O1xuICBmbG9hdDogcmlnaHQ7XG59XG5pb24tdG9vbGJhciAuYWN0aXZlLWxpbmsge1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiAjRDBENEQ4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(auth, alert, location) {
        _classCallCheck(this, TabsPage);

        this.auth = auth;
        this.alert = alert;
        this.location = location;
      }

      _createClass(TabsPage, [{
        key: "logoutConfirm",
        value: function logoutConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alert.create({
                      header: 'Are you sure you want to log out?',
                      cssClass: 'danger-alert',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Logout',
                        handler: function handler() {
                          _this.auth.logout();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map