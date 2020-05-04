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


    __webpack_exports__["default"] = "<ion-tabs >\r\n\r\n  <ion-tab-bar slot=\"bottom\" class=\"ion-hide-lg-up\">\r\n    <ion-tab-button tab=\"jobs\">\r\n      <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\r\n      <ion-label>JOBS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"events\">\r\n      <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\r\n      <ion-label>EVENTS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"posts\">\r\n      <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon>\r\n      <ion-label>POSTS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"mentors\">\r\n      <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\r\n      <ion-label>MENTORS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\r\n      <ion-label>PROFILE</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n  <ion-toolbar slot=\"top\" class=\"ion-hide-md-down\">\r\n      <img id=\"logo\" src=\"../../assets/United_Way_Logo_3.svg\" />\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button routerLink=\"/home/jobs\">\r\n          <ion-icon size=\"large\" src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button routerLink=\"/home/events\">\r\n          <ion-icon size=\"large\" src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button routerLink=\"/home/posts\">\r\n          <ion-icon size=\"large\" src=\"../assets/icon/post-inactive.svg\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button routerLink=\"/home/mentors\">\r\n          <ion-icon size=\"large\" src=\"../assets/icon/question-inactive.svg\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button routerLink=\"/home/profile/\">\r\n          <ion-icon size=\"large\" src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button routerLink=\"/home/profile/logout\">\r\n          <ion-icon size=\"large\" color=\"primary\" src=\"../assets/icon/log-out-outline.svg\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-tabs>\r\n<!--\r\n<ion-tabs class=\" ion-hide-md-down\">\r\n\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button tab=\"jobs\">\r\n        <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\r\n        <ion-label>JOBS</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"events\">\r\n        <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\r\n        <ion-label>EVENTS</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"posts\">\r\n        <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon>\r\n        <ion-label>POSTS</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"mentors\">\r\n        <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\r\n        <ion-label>MENTORS</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"profile\">\r\n        <ion-icon src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\r\n        <ion-label>PROFILE</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs> -->\r\n";
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

    const routes = [{
      path: '',
      redirectTo: '/home/jobs',
      pathMatch: 'full'
    }, {
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'jobs',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-jobs-jobs-module */
          [__webpack_require__.e("default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7"), __webpack_require__.e("default~pages-events-events-module~pages-fairs-fairs-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-jobs-jobs-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/jobs/jobs.module */
          "./src/app/pages/jobs/jobs.module.ts")).then(m => m.HomePageModule)
        }]
      }, {
        path: 'posts',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-posts-posts-module */
          [__webpack_require__.e("default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7"), __webpack_require__.e("default~pages-events-events-module~pages-fairs-fairs-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/posts/posts.module */
          "./src/app/pages/posts/posts.module.ts")).then(m => m.PostPageModule)
        }]
      }, {
        path: 'profile',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-profile-profile-module */
          [__webpack_require__.e("default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
        }]
      }, {
        path: 'events',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-events-events-module */
          [__webpack_require__.e("default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7"), __webpack_require__.e("default~pages-events-events-module~pages-fairs-fairs-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/events/events.module */
          "./src/app/pages/events/events.module.ts")).then(m => m.EventsPageModule)
        }]
      }, {
        path: 'mentors',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | pages-mentors-mentors-module */
          "pages-mentors-mentors-module").then(__webpack_require__.bind(null,
          /*! ../pages/mentors/mentors.module */
          "./src/app/pages/mentors/mentors.module.ts")).then(m => m.MentorsPageModule)
        }]
      }]
    }];
    let TabsPageRoutingModule = class TabsPageRoutingModule {};
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

    let TabsPageModule = class TabsPageModule {};
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


    __webpack_exports__["default"] = "ion-tab-bar {\n  height: 70px;\n  box-shadow: 2px 1px 5px #555;\n}\n\nion-label {\n  position: relative;\n  top: 10px;\n  font-size: 0.8em;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nion-tab-button {\n  font-size: 10px;\n  --color: #D0D4D8;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 2.3em;\n  --font-size-selected: 4em;\n  --fill-selected: red;\n  --background-color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-toolbar {\n  --padding-end: 17%;\n  --padding-start: 17%;\n  --min-height: 80px;\n  --background: white;\n}\n\nion-toolbar ion-button {\n  --color: #005191;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheVxcTW9iaWxlL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREVFO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQU47O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRhYi1CYXJcclxuaW9uLXRhYi1iYXIgIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggIzU1NTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuXHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICAtLWNvbG9yOiAjRDBENEQ4O1xyXG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNGRkIzNTE7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgLS1tYXJnaW4tbGVmdDowcHg7XHJcbiAgLS1tYXJnaW4tcmlnaHQ6MHB4O1xyXG4gIG1heC13aWR0aDoxMDBweDtcclxuICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAyLjNlbTtcclxuICAgICAgLS1mb250LXNpemUtc2VsZWN0ZWQ6IDRlbTtcclxuICAgICAgLS1maWxsLXNlbGVjdGVkOiByZWQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfX1cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gVG9vbGJhclxyXG5cclxuICAjbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNyU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE3JTtcclxuICAgIC0tbWluLWhlaWdodDogODBweDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC0tY29sb3I6ICMwMDUxOTE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfSIsImlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC0tY29sb3I6ICNEMEQ0RDg7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNGRkIzNTE7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tbWFyZ2luLWxlZnQ6MHB4O1xuICAtLW1hcmdpbi1yaWdodDowcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5pb24tdGFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG4gIC0tZm9udC1zaXplLXNlbGVjdGVkOiA0ZW07XG4gIC0tZmlsbC1zZWxlY3RlZDogcmVkO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctZW5kOiAxNyU7XG4gIC0tcGFkZGluZy1zdGFydDogMTclO1xuICAtLW1pbi1oZWlnaHQ6IDgwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let TabsPage = class TabsPage {
      constructor(router) {
        this.router = router;
      }

      jobs() {
        this.router.navigate(['/home/jobs']);
      }

    };

    TabsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map