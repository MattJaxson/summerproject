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
          [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-jobs-jobs-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/jobs/jobs.module */
          "./src/app/pages/jobs/jobs.module.ts")).then(m => m.JobsPageModule)
        }]
      }, {
        path: 'posts',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | pages-posts-posts-module */
          [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null,
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
          [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
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


    __webpack_exports__["default"] = "ion-tab-bar {\n  height: 70px;\n  box-shadow: 2px 1px 5px #555;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-label {\n  position: relative;\n  top: 10px;\n  font-size: 0.8em;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nion-tab-button {\n  font-size: 10px;\n  --color: #D0D4D8;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 2.3em;\n  --font-size-selected: 4em;\n  --fill-selected: red;\n  --background-color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-toolbar {\n  --min-height: 10vh;\n  --background: white;\n  font-size: 1.1em;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar a {\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: #888888;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #faa71b;\n  font-weight: 800;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n\nion-grid {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FERUU7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNBTjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDTEo7O0FET0k7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNMTjs7QURRSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNOTjs7QURTSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUE47O0FEV0U7RUFDRSxZQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFiLUJhclxuaW9uLXRhYi1iYXIgIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcblxufVxuXG5pb24tdGFiLWJ1dHRvbntcbiAgZm9udC1zaXplOiAxMHB4O1xuICAtLWNvbG9yOiAjRDBENEQ4O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjRkZCMzUxO1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLW1hcmdpbi1sZWZ0OjBweDtcbiAgLS1tYXJnaW4tcmlnaHQ6MHB4O1xuICBtYXgtd2lkdGg6MTAwcHg7XG4gIGlvbi1pY29ue1xuICAgICAgZm9udC1zaXplOiAyLjNlbTtcbiAgICAgIC0tZm9udC1zaXplLXNlbGVjdGVkOiA0ZW07XG4gICAgICAtLWZpbGwtc2VsZWN0ZWQ6IHJlZDtcbiAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9fVxuXG5cblxuXG4gIC8vIFRvb2xiYXJcblxuICAjbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogMTB2aDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IHJnYmEoMCwwLDAsMC4wOCk7XG5cbiAgICBhIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICAuYWN0aXZlLWxpbmsge1xuICAgICAgY29sb3I6ICNmYWE3MWI7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tY29sb3I6ICNEMEQ0RDg7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH0iLCJpb24tdGFiLWJhciB7XG4gIGhlaWdodDogNzBweDtcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggIzU1NTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAtLWNvbG9yOiAjRDBENEQ4O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjRkZCMzUxO1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLW1hcmdpbi1sZWZ0OjBweDtcbiAgLS1tYXJnaW4tcmlnaHQ6MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIuM2VtO1xuICAtLWZvbnQtc2l6ZS1zZWxlY3RlZDogNGVtO1xuICAtLWZpbGwtc2VsZWN0ZWQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuI2xvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OiAxMHZoO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbmlvbi10b29sYmFyIGEge1xuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLXRvb2xiYXIgLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogI0QwRDREODtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */";
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

    let TabsPage = class TabsPage {
      constructor(auth, alert) {
        this.auth = auth;
        this.alert = alert;
      }

      logoutConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            header: 'Are you sure you want to log out?',
            cssClass: 'danger-alert',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Logout',
              handler: () => {
                this.auth.logout();
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    TabsPage.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }];

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map