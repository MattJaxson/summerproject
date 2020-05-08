(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <!-- Toolbar for Desktop -->\n  <ion-toolbar slot=\"top\" class=\"ion-hide-lg-down\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img id=\"logo\" src=\"../../assets/fyf-logo.png\">\n        </ion-col>\n        <ion-col class=\"ion-float-end\" size=\"8\">\n          <a routerLink=\"/home/profile/logout\">\n            LOGOUT\n          </a>\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\n            PROFILE\n          </a>\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\n            MENTORS\n          </a>\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\n            POSTS\n          </a>\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\n           EVENTS\n          </a>\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\n            JOBS\n          </a>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n\n  <!-- Tab Bar for Mobile -->\n  <ion-tab-bar slot=\"bottom\" class=\"ion-hide-lg-up\">\n    <ion-tab-button tab=\"jobs\">\n      <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon>\n      <ion-label>JOBS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"events\">\n      <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon>\n      <ion-label>EVENTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"posts\">\n      <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon>\n      <ion-label>POSTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mentors\">\n      <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\n      <ion-label>MENTORS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon src=\"../assets/icon/profile-inactive.svg\"></ion-icon>\n      <ion-label>PROFILE</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n\n");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        redirectTo: '/home/jobs',
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
                        loadChildren: () => Promise.all(/*! import() | pages-jobs-jobs-module */[__webpack_require__.e("default~pages-events-events-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-jobs-jobs-module")]).then(__webpack_require__.bind(null, /*! ../pages/jobs/jobs.module */ "./src/app/pages/jobs/jobs.module.ts")).then(m => m.JobsPageModule)
                    }
                ]
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-posts-posts-module */[__webpack_require__.e("default~pages-events-events-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null, /*! ../pages/posts/posts.module */ "./src/app/pages/posts/posts.module.ts")).then(m => m.PostPageModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-events-events-module */[__webpack_require__.e("default~pages-events-events-module~pages-jobs-jobs-module~pages-posts-posts-module"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null, /*! ../pages/events/events.module */ "./src/app/pages/events/events.module.ts")).then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: 'mentors',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-mentors-mentors-module */ "pages-mentors-mentors-module").then(__webpack_require__.bind(null, /*! ../pages/mentors/mentors.module */ "./src/app/pages/mentors/mentors.module.ts")).then(m => m.MentorsPageModule)
                    }
                ]
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  height: 70px;\n  box-shadow: 2px 1px 5px #555;\n}\n\nion-label {\n  position: relative;\n  top: 10px;\n  font-size: 0.8em;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nion-tab-button {\n  font-size: 10px;\n  --color: #D0D4D8;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 2.3em;\n  --font-size-selected: 4em;\n  --fill-selected: red;\n  --background-color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 40px;\n}\n\nion-toolbar {\n  --min-height: 10vh;\n  --background: white;\n  font-size: 1em;\n}\n\nion-toolbar a {\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: #888888;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #FA6400;\n  font-weight: 900;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREVFO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQU47O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRE9JO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTE47O0FEUUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNOTjs7QURTSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFiLUJhclxuaW9uLXRhYi1iYXIgIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcblxufVxuXG5pb24tdGFiLWJ1dHRvbntcbiAgZm9udC1zaXplOiAxMHB4O1xuICAtLWNvbG9yOiAjRDBENEQ4O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjRkZCMzUxO1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLW1hcmdpbi1sZWZ0OjBweDtcbiAgLS1tYXJnaW4tcmlnaHQ6MHB4O1xuICBtYXgtd2lkdGg6MTAwcHg7XG4gIGlvbi1pY29ue1xuICAgICAgZm9udC1zaXplOiAyLjNlbTtcbiAgICAgIC0tZm9udC1zaXplLXNlbGVjdGVkOiA0ZW07XG4gICAgICAtLWZpbGwtc2VsZWN0ZWQ6IHJlZDtcbiAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9fVxuXG5cblxuXG4gIC8vIFRvb2xiYXJcblxuICAjbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogMTB2aDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuXG4gICAgYSB7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmFjdGl2ZS1saW5rIHtcbiAgICAgIGNvbG9yOiAjRkE2NDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tY29sb3I6ICNEMEQ0RDg7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfSIsImlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC0tY29sb3I6ICNEMEQ0RDg7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNGRkIzNTE7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tbWFyZ2luLWxlZnQ6MHB4O1xuICAtLW1hcmdpbi1yaWdodDowcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5pb24tdGFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG4gIC0tZm9udC1zaXplLXNlbGVjdGVkOiA0ZW07XG4gIC0tZmlsbC1zZWxlY3RlZDogcmVkO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDEwdmg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuaW9uLXRvb2xiYXIgYSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgb3BhY2l0eTogMC43O1xuICBmbG9hdDogcmlnaHQ7XG59XG5pb24tdG9vbGJhciAuYWN0aXZlLWxpbmsge1xuICBjb2xvcjogI0ZBNjQwMDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiAjRDBENEQ4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TabsPage = class TabsPage {
    constructor(router) {
        this.router = router;
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map