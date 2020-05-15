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


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <!-- Toolbar for Desktop -->\r\n  <ion-toolbar slot=\"top\" class=\"ion-hide-md-down\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"2\">\r\n          <img id=\"logo\" src=\"../../assets/fyf-logo.png\">\r\n        </ion-col>\r\n        <ion-col class=\"ion-float-end\" size=\"8\">\r\n          <a routerLink=\"/home/profile/logout\">\r\n            LOGOUT\r\n          </a>\r\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\r\n            PROFILE\r\n          </a>\r\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\r\n            MENTORS\r\n          </a>\r\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\r\n            POSTS\r\n          </a>\r\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\r\n           EVENTS\r\n          </a>\r\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\r\n            JOBS\r\n          </a>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n\r\n\r\n  <!-- Tab Bar for Mobile -->\r\n  <ion-tab-bar slot=\"bottom\" class=\"ion-hide-lg-up\">\r\n    <ion-tab-button tab=\"jobs\">\r\n      <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\r\n      <ion-label>JOBS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"events\">\r\n      <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\r\n      <ion-label>EVENTS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"posts\">\r\n      <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon>\r\n      <ion-label>POSTS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"mentors\">\r\n      <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\r\n      <ion-label>MENTORS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\r\n      <ion-label>PROFILE</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n\r\n";
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
      redirectTo: '/home/profile',
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
          [__webpack_require__.e("default~pages-events-events-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-jobs-jobs-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/jobs/jobs.module */
          "./src/app/pages/jobs/jobs.module.ts")).then(m => m.JobsPageModule)
        }]
      }, {
        path: 'posts',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-posts-posts-module */
          [__webpack_require__.e("default~pages-events-events-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/posts/posts.module */
          "./src/app/pages/posts/posts.module.ts")).then(m => m.PostPageModule)
        }]
      }, {
        path: 'profile',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
        }]
      }, {
        path: 'events',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-events-events-module */
          [__webpack_require__.e("default~pages-events-events-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
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


    __webpack_exports__["default"] = "ion-tab-bar {\n  height: 70px;\n  box-shadow: 2px 1px 5px #555;\n}\n\nion-label {\n  position: relative;\n  top: 10px;\n  font-size: 0.8em;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nion-tab-button {\n  font-size: 10px;\n  --color: #D0D4D8;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 2.3em;\n  --font-size-selected: 4em;\n  --fill-selected: red;\n  --background-color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-toolbar {\n  --min-height: 10vh;\n  --background: white;\n  font-size: 1em;\n}\n\nion-toolbar a {\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: #888888;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #FA6400;\n  font-weight: 900;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURFRTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0FOOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURPSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xOOztBRFFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDTk47O0FEU0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRhYi1CYXJcclxuaW9uLXRhYi1iYXIgIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggIzU1NTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuXHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICAtLWNvbG9yOiAjRDBENEQ4O1xyXG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNGRkIzNTE7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgLS1tYXJnaW4tbGVmdDowcHg7XHJcbiAgLS1tYXJnaW4tcmlnaHQ6MHB4O1xyXG4gIG1heC13aWR0aDoxMDBweDtcclxuICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAyLjNlbTtcclxuICAgICAgLS1mb250LXNpemUtc2VsZWN0ZWQ6IDRlbTtcclxuICAgICAgLS1maWxsLXNlbGVjdGVkOiByZWQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfX1cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gVG9vbGJhclxyXG5cclxuICAjbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZS1saW5rIHtcclxuICAgICAgY29sb3I6ICNGQTY0MDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC0tY29sb3I6ICNEMEQ0RDg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9IiwiaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggNXB4ICM1NTU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLS1jb2xvcjogI0QwRDREODtcbiAgLS1jb2xvci1zZWxlY3RlZDogI0ZGQjM1MTtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1tYXJnaW4tbGVmdDowcHg7XG4gIC0tbWFyZ2luLXJpZ2h0OjBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbmlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyLjNlbTtcbiAgLS1mb250LXNpemUtc2VsZWN0ZWQ6IDRlbTtcbiAgLS1maWxsLXNlbGVjdGVkOiByZWQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogMTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5pb24tdG9vbGJhciBhIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIGZsb2F0OiByaWdodDtcbn1cbmlvbi10b29sYmFyIC5hY3RpdmUtbGluayB7XG4gIGNvbG9yOiAjRkE2NDAwO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNEMEQ0RDg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
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