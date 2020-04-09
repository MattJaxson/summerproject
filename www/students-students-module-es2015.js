(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/students.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/students.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile & Tablet Header -->\n<ion-header class=\"ion-hide-md-up\">\n\n    <ion-toolbar>\n        <ion-title>Students</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-button class=\"register\" (click)=\"register()\">\n            Register\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n\n</ion-header>\n\n  <!-- Desktop Header -->\n<ion-header class=\"ion-hide-sm-down\">\n\n  <ion-toolbar class=\"ion-padding-horizontal fair-page-toolbar-lg\">     <img slot=\"start\" style=\"height: 50px;\" id=\"logo\" src=\"../../../../../assets/United_Way_Logo_3.svg\" />\n      <ion-title color=\"primary\">Students</ion-title>\n      <ion-title class=\"sub-title\" color=\"primary\">{{title}}, {{time}}, {{date}}</ion-title>\n\n\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n      </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  style=\"--background: #005191;\">\n\n  <!-- Mobile & Tablet -->\n  <ion-grid class=\"ion-hide-md-up\">\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"schedule-mobile\" size-xs=\"12\" size-sm=\"10\" size-md=\"10\">\n\n      <div margin>\n           <h1 class=\"agenda-header-mobile\">Agenda</h1>\n           <hr>\n       </div>\n\n       <ion-item lines=\"none\" padding *ngFor=\"let slot of slots\">\n         <ion-label class=\"ion-text-wrap\">\n         <ion-text color=\"primary\">\n           <h2>{{slot.time}}</h2>\n          </ion-text>\n          <ion-text color=\"secondary\">\n            <h4>{{slot.title}}</h4>\n           </ion-text>\n           <p>{{slot.description}}</p>\n          </ion-label>\n       </ion-item>\n\n      </ion-col>\n\n      <ion-col class=\"booth-partners-mobile\" push=\"1\" size=\"3\">\n        <div #boothPartners>\n            <h2>Booth Partners</h2>\n            <p style=\"color: #888; line-height: 2em;\">These are all the booth partners that will be involved with this fair.</p>\n            <ion-button class=\"orange-button\" style=\"--background: none; border: 2px solid #005191; border-radius: 5px; width: 200px;\" (click)=\"boothPartnersPage()\">\n              View Booth Partners\n            </ion-button>\n        </div>\n        <div #findFind class=\"find-fair-mobile\">\n            <h2>Where is the Fair?</h2>\n            <p style=\"color: #888; line-height: 2em;\">Need help finding the location of the far? Use Google maps to find the best route.</p>\n            <ion-button class=\"orange-button\" style=\"--background: none; border: 2px solid #005191; border-radius: 5px; width: 200px;\" (click)=\"findFairLocation()\">\n              View Fair Location\n            </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n    <!-- Desktop -->\n    <ion-grid style=\"margin-top: 75px\" class=\"ion-hide-sm-down\">\n\n            <!-- Register Button -->\n            <ion-row>\n              <ion-col size=\"6\" push=\"3\">\n              <ion-button color=\"success\" class=\"fair-register-button\" (click)=\"register()\">\n                  Register\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n             <!-- Overview -->\n            <ion-row>\n              <ion-col class=\"overview\" style=\"background: white;   padding: 20px;\" size=\"6\" push=\"3\">\n              <h1>Exploration Area Overview</h1>\n\n                <h3>CareerExploration Booths</h3>\n                  <ul>\n                    <li class=\"list-text\">Engage in hands-on activities connected to career pathways </li>\n                    <li class=\"list-text\">Walk away with resources and swag connected to a career you’re interested in\n                    </li>\n                    <li class=\"list-text\">Learn what a “day in the life” is like in a career\n                    </li>\n                    <li class=\"list-text\">Walk away with resources to share with parents/family\n                    </li>\n                  </ul>\n\n\n                  <h3>College Campus Corner</h3>\n                  <ul>\n                    <li>Walk away with resources and swag connected to a college you’re interested in\n                    </li>\n                    <li>Learn what a “day in the life” is like in college\n                    </li>\n                    <li>Walk away with resources to share with parents/family\n                    </li>\n                  </ul>\n\n\n                  <h3>Life and Dreams Support </h3>\n                  <ul>\n                    <li>Learn about resources, supports, and organizations that can help you in your future\n                    </li>\n                    <li>Walk away with resources and swag for local organizations\n                    </li>\n                    <li>Walk away with resources to share with parents/family\n                    </li>\n                  </ul>\n\n              </ion-col>\n            </ion-row>\n\n            <!-- Adenda -->\n            <ion-row>\n            <ion-col class=\"schedule\" style=\"background: white; padding: 20px;\" size=\"6\" push=\"3\">\n\n              <div margin>\n                 <h1 class=\"agenda-header\">Agenda</h1>\n              </div>\n\n              <ion-item *ngFor=\"let slot of slots\">\n                <ion-label class=\"ion-text-wrap\">\n                <ion-text color=\"primary\">\n                  <h2>{{slot.time}}</h2>\n                  </ion-text>\n                  <ion-text color=\"secondary\">\n                    <p style=\"font-weight: 900; font-size: 1.em;\">{{slot.title}}</p>\n                  </ion-text>\n                  <p>{{slot.description}}</p>\n                  </ion-label>\n              </ion-item>\n\n            </ion-col>\n            </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/students-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/students-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: StudentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageRoutingModule", function() { return StudentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/landing/landing.page */ "./src/app/pages/landing/landing.page.ts");




const routes = [
    {
        path: 'landing',
        component: src_app_pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    },
    {
        path: 'fairs/fair-page/students/:id/register/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "./src/app/pages/fairs/fair-page/students/register/register.module.ts")).then(m => m.RegisterPageModule)
    },
    {
        path: 'booth-partners/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | booth-partners-booth-partners-module */ "booth-partners-booth-partners-module").then(__webpack_require__.bind(null, /*! ./booth-partners/booth-partners.module */ "./src/app/pages/fairs/fair-page/students/booth-partners/booth-partners.module.ts")).then(m => m.BoothPartnersPageModule)
    },
    {
        path: 'survey',
        loadChildren: () => __webpack_require__.e(/*! import() | survey-survey-module */ "survey-survey-module").then(__webpack_require__.bind(null, /*! ./survey/survey.module */ "./src/app/pages/fairs/fair-page/students/survey/survey.module.ts")).then(m => m.SurveyPageModule)
    }
];
let StudentsPageRoutingModule = class StudentsPageRoutingModule {
};
StudentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/students.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/students.module.ts ***!
  \*******************************************************************/
/*! exports provided: StudentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageModule", function() { return StudentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students-routing.module */ "./src/app/pages/fairs/fair-page/students/students-routing.module.ts");
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students.page */ "./src/app/pages/fairs/fair-page/students/students.page.ts");







let StudentsPageModule = class StudentsPageModule {
};
StudentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _students_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsPageRoutingModule"]
        ],
        declarations: [_students_page__WEBPACK_IMPORTED_MODULE_6__["StudentsPage"]]
    })
], StudentsPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/students.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/students.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  margin-bottom: 60px;\n}\n\n.sub-title {\n  font-size: 1em;\n  color: #999;\n}\n\nh1 {\n  font-weight: 900;\n  color: #005191;\n}\n\np {\n  font-size: 1.3em;\n}\n\n.list-header {\n  font-size: 2.3em;\n}\n\n.list-header .list-text {\n  font-size: 1em;\n}\n\nh2 {\n  font-weight: 900;\n  color: #222;\n}\n\n.fair-page-toolbar-lg {\n  --background: rgba(245,245,245,1);\n}\n\n.fair-page-toolbar-lg ion-title {\n  padding-left: 75px;\n  font-size: 1.5em;\n  font-weight: 900;\n}\n\n.fair-page-toolbar-lg .sub-title {\n  padding-left: 75px;\n  font-size: 1.2em;\n  color: #666;\n}\n\n.agenda-header {\n  margin: 30px 0 30px 0;\n}\n\n.agenda-header-mobile {\n  font-weight: 400;\n  font-size: 3em;\n  color: #005191;\n}\n\n.schedule {\n  background: white;\n  overflow-y: scroll;\n  height: auto;\n  opacity: 1;\n  border-radius: 5px;\n}\n\n.schedule ion-item {\n  --background: white;\n}\n\n.schedule-mobile {\n  opacity: 1;\n}\n\n.schedule-mobile ion-item {\n  --background: rgba(245,245,245,1);\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.schedule-mobile ion-item h2 {\n  color: #005191;\n  font-size: 1.5em;\n  margin-bottom: 5px;\n}\n\n.schedule-mobile ion-item h4 {\n  color: #222;\n  font-size: 1.2em;\n}\n\n.schedule-mobile ion-item p {\n  color: #555;\n}\n\n.overview {\n  border-radius: 5px;\n}\n\n.overview p {\n  line-height: 1.5em;\n  color: #666;\n}\n\n.schedule::-webkit-scrollbar, .options::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.schedule::-webkit-scrollbar:vertical, .options::-webkit-scrollbar:vertical {\n  width: 11px;\n}\n\n.schedule::-webkit-scrollbar:horizontal, .options::-webkit-scrollbar:horizontal {\n  height: 11px;\n}\n\n.schedule::-webkit-scrollbar-thumb, .options::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  border: 2px solid white;\n  /* should match background, can't be transparent */\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.options {\n  padding: 30px;\n  opacity: 1;\n  border-radius: 5px;\n}\n\n.options p {\n  color: #666;\n}\n\na {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\na:hover {\n  color: #faa71b;\n  font-weight: 800;\n}\n\n.booth-partners-mobile {\n  opacity: 1;\n  margin-bottom: 50px;\n}\n\n.find-fair-mobile {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3N0dWRlbnRzL3N0dWRlbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3N0dWRlbnRzL3N0dWRlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNESjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElFO0VBQ0UsbUJBQUE7QUNGSjs7QURNQTtFQUNFLFVBQUE7QUNIRjs7QURLRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDSk47O0FET0k7RUFDRSxXQUFBO0FDTE47O0FEVUE7RUFDRSxrQkFBQTtBQ1BGOztBRFNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDUEo7O0FEV0E7RUFDRSx3QkFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUF5QixrREFBQTtFQUN6QixvQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFNFO0VBQ0UsV0FBQTtBQ1BKOztBRFdBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9zdHVkZW50cy9zdHVkZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG5cbiAgLmxpc3QtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cblxuaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmZhaXItcGFnZS10b29sYmFyLWxnIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NSwyNDUsMjQ1LDEpO1xuXG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuXG4gIC5zdWItdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNzVweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG59XG5cbi5hZ2VuZGEtaGVhZGVyIHtcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xufVxuXG4uYWdlbmRhLWhlYWRlci1tb2JpbGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5zY2hlZHVsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlOztcbiAgfVxufVxuXG4uc2NoZWR1bGUtbW9iaWxlIHtcbiAgb3BhY2l0eTogMTtcblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NSwyNDUsMjQ1LDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBoMiB7XG4gICAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgY29sb3I6ICMyMjI7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICM1NTU7XG4gICAgfVxuICB9XG59XG5cbi5vdmVydmlldyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbn1cblxuLnNjaGVkdWxlOjotd2Via2l0LXNjcm9sbGJhciwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uc2NoZWR1bGU6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsLCAub3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICB3aWR0aDogMTFweDtcbn1cblxuLnNjaGVkdWxlOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsLCAub3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLnNjaGVkdWxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iICB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7IC8qIHNob3VsZCBtYXRjaCBiYWNrZ3JvdW5kLCBjYW4ndCBiZSB0cmFuc3BhcmVudCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbn1cblxuLm9wdGlvbnMge1xuICBwYWRkaW5nOiAzMHB4O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmJvb3RoLXBhcnRuZXJzLW1vYmlsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5maW5kLWZhaXItbW9iaWxlIHtcbiAgb3BhY2l0eTogMTtcbn0iLCJpb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG59XG4ubGlzdC1oZWFkZXIgLmxpc3QtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LDI0NSwyNDUsMSk7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmZhaXItcGFnZS10b29sYmFyLWxnIC5zdWItdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uYWdlbmRhLWhlYWRlciB7XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcbn1cblxuLmFnZW5kYS1oZWFkZXItbW9iaWxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4uc2NoZWR1bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zY2hlZHVsZSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5zY2hlZHVsZS1tb2JpbGUge1xuICBvcGFjaXR5OiAxO1xufVxuLnNjaGVkdWxlLW1vYmlsZSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDUsMjQ1LDI0NSwxKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2NoZWR1bGUtbW9iaWxlIGlvbi1pdGVtIGgyIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zY2hlZHVsZS1tb2JpbGUgaW9uLWl0ZW0gaDQge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5zY2hlZHVsZS1tb2JpbGUgaW9uLWl0ZW0gcCB7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ub3ZlcnZpZXcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ub3ZlcnZpZXcgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5zY2hlZHVsZTo6LXdlYmtpdC1zY3JvbGxiYXIsIC5vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLnNjaGVkdWxlOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcbiAgd2lkdGg6IDExcHg7XG59XG5cbi5zY2hlZHVsZTo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5zY2hlZHVsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC5vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIC8qIHNob3VsZCBtYXRjaCBiYWNrZ3JvdW5kLCBjYW4ndCBiZSB0cmFuc3BhcmVudCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5vcHRpb25zIHtcbiAgcGFkZGluZzogMzBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm9wdGlvbnMgcCB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uYm9vdGgtcGFydG5lcnMtbW9iaWxlIHtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmZpbmQtZmFpci1tb2JpbGUge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/students.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/students.page.ts ***!
  \*****************************************************************/
/*! exports provided: StudentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPage", function() { return StudentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






let StudentsPage = class StudentsPage {
    constructor(activatedRoute, navCtrl, router, fairs) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.router = router;
        this.fairs = fairs;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        this.fairs.getFair(this.id).subscribe(fair => {
            console.log('Fair ID: ' + this.id);
            console.log(fair);
            this.title = fair['title'];
            this.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair['date']), 'hh:mm a');
            this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair['date']), 'MMMM dd, yyyy');
            this.slots = Object.values(fair['agenda']);
            console.log(this.slots);
        });
    }
    goHome() {
        console.log('going home');
        this.router.navigate(['landing']);
    }
    goBack() {
        console.log('going back');
        this.navCtrl.back();
    }
    register() {
        this.router.navigate(['/fairs/fair-page/students/:id/register', this.id]);
    }
    boothPartnersPage() {
        this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
    }
    findFairLocation() {
        this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
    }
};
StudentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('boothPartners', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], StudentsPage.prototype, "boothPartners", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('findFind', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], StudentsPage.prototype, "findFair", void 0);
StudentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./students.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/students.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./students.page.scss */ "./src/app/pages/fairs/fair-page/students/students.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"]])
], StudentsPage);



/***/ })

}]);
//# sourceMappingURL=students-students-module-es2015.js.map