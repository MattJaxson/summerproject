(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <!-- Toolbar for Desktop -->\n  <ion-toolbar slot=\"top\" class=\"ion-hide-md-down\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img id=\"logo\" src=\"../../assets/logo-2.png\">\n        </ion-col>\n        <ion-col class=\"ion-float-end\" size=\"8\">\n          <a (click)=\"logoutConfirm()\" style=\"cursor: pointer;\">\n            LOGOUT\n          </a>\n          <!-- <a routerLink=\"/home/resources/\" routerLinkActive=\"active-link\">\n            RESOURCES\n          </a> -->\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\n            PROFILE\n          </a>\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\n            MENTORS\n          </a>\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\n            POSTS\n          </a>\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\n           EVENTS\n          </a>\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\n            JOBS\n          </a>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <!-- Tab Bar for Mobile -->\n  <ion-tab-bar slot=\"bottom\" id=\"tabBar\" class=\"ion-hide-lg-up\">\n    <ion-tab-button tab=\"jobs\">\n      <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\n      <!-- <ion-label>JOBS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"events\">\n      <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\n      <!-- <ion-label>EVENTS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"posts\">\n      <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon>\n      <!-- <ion-label>POSTS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mentors\">\n      <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\n      <!-- <ion-label>MENTORS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\n      <!-- <ion-label>PROFILE</ion-label> -->\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let TabsPage = class TabsPage {
    constructor(auth, alert, location) {
        this.auth = auth;
        this.alert = alert;
        this.location = location;
    }
    logoutConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to log out?',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Logout',
                        handler: () => {
                            this.auth.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  margin: 0 40px;\n  height: 50px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-label {\n  position: relative;\n  top: 6px;\n  font-size: 0.8em;\n  transition: 0.5s;\n  font-weight: 700;\n}\n\nion-tab-button {\n  font-size: 0.8em;\n  --color: #D0D4D8;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 1.7em;\n  --font-size-selected: 4em;\n  --fill-selected: red;\n  --background-color: white;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-toolbar {\n  --min-height: 10vh;\n  --background: white;\n  font-size: 0.9em;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar a {\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: #777;\n  letter-spacing: 1px;\n  opacity: 0.5;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #faa71b;\n  font-weight: 800;\n  transition: 0.5s;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n\nion-grid {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLG1FQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUVFO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUFOOztBQVFFO0VBQ0UsWUFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUFMSjs7QUFPSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxOOztBQVFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOTjs7QUFTSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUE47O0FBV0U7RUFDRSxZQUFBO0FBUkoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWItQmFyXG5pb24tdGFiLWJhciAge1xuICBtYXJnaW46IDAgNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAvLyBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tdGFiLWJ1dHRvbntcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgLS1jb2xvcjogI0QwRDREODtcbiAgLS1jb2xvci1zZWxlY3RlZDogI0ZGQjM1MTtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1tYXJnaW4tbGVmdDowcHg7XG4gIC0tbWFyZ2luLXJpZ2h0OjBweDtcbiAgbWF4LXdpZHRoOjEwMHB4O1xuICBpb24taWNvbntcbiAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAtLWZvbnQtc2l6ZS1zZWxlY3RlZDogNGVtO1xuICAgICAgLS1maWxsLXNlbGVjdGVkOiByZWQ7XG4gICAgICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgfX1cblxuXG5cblxuICAvLyBUb29sYmFyXG5cbiAgI2xvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDEwdmg7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCByZ2JhKDAsMCwwLDAuMDgpO1xuXG4gICAgYSB7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmFjdGl2ZS1saW5rIHtcbiAgICAgIGNvbG9yOiAjZmFhNzFiO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiAjRDBENEQ4O1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cblxuICBpb24tZ3JpZCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9Il19 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: '',
        redirectTo: '/home/posts',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'jobs',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-jobs-jobs-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("common"), __webpack_require__.e("pages-jobs-jobs-module")]).then(__webpack_require__.bind(null, /*! ../pages/jobs/jobs.module */ "A8Ph")).then(m => m.JobsPageModule)
                    }
                ]
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-posts-posts-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("common"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null, /*! ../pages/posts/posts.module */ "XxUk")).then(m => m.PostPageModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "723k")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-events-events-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null, /*! ../pages/events/events.module */ "Obr4")).then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: 'mentors',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-mentors-mentors-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mentors-mentors-module")]).then(__webpack_require__.bind(null, /*! ../pages/mentors/mentors.module */ "heuU")).then(m => m.MentorsPageModule)
                    }
                ]
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map