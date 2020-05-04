(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chaperones-chaperones-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/chaperones.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/chaperones.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsFairPageChaperonesChaperonesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\r\n\r\n    <!-- Mobile & Tablet Toolbar -->\r\n    <ion-toolbar>\r\n      <ion-title>Chaperones</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"register\" (click)=\"register()\">\r\n          Register\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n  </ion-header>\r\n\r\n  <!-- Desktop Header -->\r\n<ion-header class=\"ion-hide-sm-down\">\r\n\r\n    <ion-toolbar class=\"ion-padding-horizontal fair-page-toolbar-lg\">     <img slot=\"start\" style=\"height: 50px;\" id=\"logo\" src=\"../../../../../assets/United_Way_Logo_3.svg\" />\r\n\r\n        <ion-title color=\"primary\">Chaperones</ion-title>\r\n        <ion-title class=\"sub-title\" color=\"primary\">{{title}}, {{time}}, {{date}}</ion-title>\r\n\r\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n        </ion-button>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Mobile & Tablet -->\r\n    <ion-grid class=\"ion-hide-md-up\">\r\n\r\n      <ion-row>\r\n        <ion-col class=\"schedule-mobile\" size-xs=\"12\" size-sm=\"10\" size-md=\"10\">\r\n\r\n            <div margin>\r\n                <h1 class=\"agenda-header-mobile\">Agenda</h1>\r\n            </div>\r\n\r\n         <ion-item lines=\"none\" padding *ngFor=\"let slot of slots\">\r\n           <ion-label class=\"ion-text-wrap\">\r\n           <ion-text color=\"primary\">\r\n             <h2>{{slot.time}}</h2>\r\n            </ion-text>\r\n            <ion-text color=\"secondary\">\r\n              <p style=\"font-weight: 900; font-size: 1.em;\">{{slot.title}}</p>\r\n             </ion-text>\r\n             <p>{{slot.description}}</p>\r\n            </ion-label>\r\n         </ion-item>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col class=\"booth-partners-mobile\" push-xs=\"2\" size-xs=\"8\" size-sm=\"8\" size-md=\"10\">\r\n          <div>\r\n              <h2 #boothPartners >Booth Partners</h2>\r\n              <p style=\"color: #888; line-height: 2em;\">These are all the booth partners that will be involved with this fair.</p>\r\n              <ion-button class=\"orange-button\" style=\"--background: none; border: 2px solid #005191; border-radius: 5px; width: 200px;\" (click)=\"boothPartnersPage()\">\r\n                View Booth Partners\r\n              </ion-button>\r\n          </div>\r\n          <div>\r\n              <h2 #findFind >Where is the Fair?</h2>\r\n              <p style=\"width: 300px; color: #888; line-height: 2em;\">Need help finding the location of the far? Use Google maps to find the best route.</p>\r\n              <ion-button class=\"orange-button\" style=\"--background: none; border: 2px solid #005191; border-radius: 5px; width: 200px;\" (click)=\"findFairLocation()\">\r\n                View Fair Location\r\n              </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <!-- Desktop -->\r\n    <ion-grid style=\"margin-top: 75px\" class=\"ion-hide-sm-down\">\r\n\r\n      <!-- Register Button -->\r\n      <ion-row>\r\n          <ion-col size=\"6\" push=\"3\">\r\n          <ion-button color=\"success\" class=\"fair-register-button\" (click)=\"register()\">\r\n              Register\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Overview -->\r\n        <ion-row>\r\n            <ion-col class=\"overview\" style=\"background: white;   padding: 20px;\" size=\"6\" push=\"3\">\r\n            <h1>Exploration Area Overview</h1>\r\n\r\n              <h3>CareerExploration Booths</h3>\r\n                <ul>\r\n                  <li class=\"list-text\">Engage in hands-on activities connected to career pathways </li>\r\n                  <li class=\"list-text\">Walk away with resources and swag connected to a career you’re interested in\r\n                  </li>\r\n                  <li class=\"list-text\">Learn what a “day in the life” is like in a career\r\n                  </li>\r\n                  <li class=\"list-text\">Walk away with resources to share with parents/family\r\n                  </li>\r\n                </ul>\r\n\r\n\r\n                <h3>College Campus Corner</h3>\r\n                <ul>\r\n                  <li>Walk away with resources and swag connected to a college you’re interested in\r\n                  </li>\r\n                  <li>Learn what a “day in the life” is like in college\r\n                  </li>\r\n                  <li>Walk away with resources to share with parents/family\r\n                  </li>\r\n                </ul>\r\n\r\n\r\n                <h3>Life and Dreams Support </h3>\r\n                <ul>\r\n                  <li>Learn about resources, supports, and organizations that can help you in your future\r\n                  </li>\r\n                  <li>Walk away with resources and swag for local organizations\r\n                  </li>\r\n                  <li>Walk away with resources to share with parents/family\r\n                  </li>\r\n                </ul>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <!-- Adenda -->\r\n          <ion-row>\r\n          <ion-col class=\"schedule\" style=\"background: white; padding: 20px;\" size=\"6\" push=\"3\">\r\n\r\n            <div margin>\r\n               <h1 class=\"agenda-header\">Agenda</h1>\r\n            </div>\r\n\r\n            <ion-item *ngFor=\"let slot of slots\">\r\n              <ion-label class=\"ion-text-wrap\">\r\n              <ion-text color=\"primary\">\r\n                <h2>{{slot.time}}</h2>\r\n                </ion-text>\r\n                <ion-text color=\"secondary\">\r\n                  <p style=\"font-weight: 900; font-size: 1.em;\">{{slot.title}}</p>\r\n                </ion-text>\r\n                <p>{{slot.description}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          </ion-row>\r\n\r\n           <!-- Options -->\r\n          <ion-row>\r\n              <ion-col class=\"options\" style=\"background: white; padding: 20px;\" size=\"6\" push=\"3\">\r\n               <ion-col size=\"3\">\r\n                  <!-- <h1>Volunteer FAQ.</h1>\r\n                  <p>Have any questions? <a  (click)=\"viewFAQs()\">Visit this page</a> to view Frequently Asked Questions for Partners.</p> -->\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                      <h1>Parking.</h1>\r\n                      <p>Need help with parking? Get parking information <a (click)=\"findFairLocation()\" >here</a></p> -->\r\n\r\n                  </ion-col>\r\n              </ion-col>\r\n          </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/chaperones/chaperones-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/chaperones/chaperones-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ChaperonesPageRoutingModule */

  /***/
  function srcAppPagesFairsFairPageChaperonesChaperonesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChaperonesPageRoutingModule", function () {
      return ChaperonesPageRoutingModule;
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


    var src_app_pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/landing/landing.page */
    "./src/app/pages/landing/landing.page.ts");

    const routes = [{
      path: 'landing',
      component: src_app_pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }, {
      path: 'fairs/fair-page/chaperones/:id/register/:id',
      loadChildren: () => __webpack_require__.e(
      /*! import() | register-register-module */
      "register-register-module").then(__webpack_require__.bind(null,
      /*! ./register/register.module */
      "./src/app/pages/fairs/fair-page/chaperones/register/register.module.ts")).then(m => m.RegisterPageModule)
    }, {
      path: 'booth-partners',
      loadChildren: () => __webpack_require__.e(
      /*! import() | booth-partners-booth-partners-module */
      "booth-partners-booth-partners-module").then(__webpack_require__.bind(null,
      /*! ./booth-partners/booth-partners.module */
      "./src/app/pages/fairs/fair-page/chaperones/booth-partners/booth-partners.module.ts")).then(m => m.BoothPartnersPageModule)
    }];
    let ChaperonesPageRoutingModule = class ChaperonesPageRoutingModule {};
    ChaperonesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChaperonesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/chaperones/chaperones.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/chaperones/chaperones.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ChaperonesPageModule */

  /***/
  function srcAppPagesFairsFairPageChaperonesChaperonesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChaperonesPageModule", function () {
      return ChaperonesPageModule;
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


    var _chaperones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chaperones-routing.module */
    "./src/app/pages/fairs/fair-page/chaperones/chaperones-routing.module.ts");
    /* harmony import */


    var _chaperones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chaperones.page */
    "./src/app/pages/fairs/fair-page/chaperones/chaperones.page.ts");

    let ChaperonesPageModule = class ChaperonesPageModule {};
    ChaperonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _chaperones_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChaperonesPageRoutingModule"]],
      declarations: [_chaperones_page__WEBPACK_IMPORTED_MODULE_6__["ChaperonesPage"]]
    })], ChaperonesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/chaperones/chaperones.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/chaperones/chaperones.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsFairPageChaperonesChaperonesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-row {\n  margin-bottom: 60px;\n}\n\n.sub-title {\n  font-size: 1em;\n  color: #999;\n}\n\nh1 {\n  font-weight: 900;\n  color: #005191;\n}\n\np {\n  font-size: 1.3em;\n}\n\n.list-header {\n  font-size: 2.3em;\n}\n\n.list-header .list-text {\n  font-size: 1em;\n}\n\nh2 {\n  font-weight: 900;\n  color: #222;\n}\n\n.fair-page-toolbar-lg {\n  --background: rgba(245,245,245,1);\n}\n\n.fair-page-toolbar-lg ion-title {\n  padding-left: 75px;\n  font-size: 1.5em;\n  font-weight: 900;\n}\n\n.fair-page-toolbar-lg .sub-title {\n  padding-left: 75px;\n  font-size: 1.2em;\n  color: #666;\n}\n\n.agenda-header {\n  margin: 30px 0 30px 0;\n}\n\n.agenda-header-mobile {\n  font-weight: 400;\n  font-size: 3em;\n  color: #005191;\n}\n\n.schedule {\n  background: white;\n  overflow-y: scroll;\n  height: auto;\n  opacity: 1;\n  border-radius: 5px;\n}\n\n.schedule ion-item {\n  --background: white;\n}\n\n.schedule-mobile {\n  opacity: 1;\n}\n\n.schedule-mobile ion-item {\n  --background: rgba(245,245,245,1);\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.schedule-mobile ion-item h2 {\n  color: #005191;\n  font-size: 1.5em;\n  margin-bottom: 5px;\n}\n\n.schedule-mobile ion-item h4 {\n  color: #222;\n  font-size: 1.2em;\n}\n\n.schedule-mobile ion-item p {\n  color: #555;\n}\n\n.overview {\n  border-radius: 5px;\n}\n\n.overview p {\n  line-height: 1.5em;\n  color: #666;\n}\n\n.schedule::-webkit-scrollbar, .options::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.schedule::-webkit-scrollbar:vertical, .options::-webkit-scrollbar:vertical {\n  width: 11px;\n}\n\n.schedule::-webkit-scrollbar:horizontal, .options::-webkit-scrollbar:horizontal {\n  height: 11px;\n}\n\n.schedule::-webkit-scrollbar-thumb, .options::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  border: 2px solid white;\n  /* should match background, can't be transparent */\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.options {\n  padding: 30px;\n  opacity: 1;\n  border-radius: 5px;\n}\n\n.options p {\n  color: #666;\n}\n\na {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\na:hover {\n  color: #faa71b;\n  font-weight: 800;\n}\n\n.booth-partners-mobile {\n  opacity: 1;\n  margin-bottom: 50px;\n}\n\n.find-fair-mobile {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL2NoYXBlcm9uZXMvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXlcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGZhaXJzXFxmYWlyLXBhZ2VcXGNoYXBlcm9uZXNcXGNoYXBlcm9uZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYWlycy9mYWlyLXBhZ2UvY2hhcGVyb25lcy9jaGFwZXJvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNESjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElFO0VBQ0UsbUJBQUE7QUNGSjs7QURNQTtFQUNFLFVBQUE7QUNIRjs7QURLRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDSk47O0FET0k7RUFDRSxXQUFBO0FDTE47O0FEVUE7RUFDRSxrQkFBQTtBQ1BGOztBRFNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDUEo7O0FEV0E7RUFDRSx3QkFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUF5QixrREFBQTtFQUN6QixvQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFNFO0VBQ0UsV0FBQTtBQ1BKOztBRFdBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9jaGFwZXJvbmVzL2NoYXBlcm9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMi4zZW07XHJcblxyXG4gIC5saXN0LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLmZhaXItcGFnZS10b29sYmFyLWxnIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LDI0NSwyNDUsMSk7XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcblxyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxufVxyXG5cclxuLmFnZW5kYS1oZWFkZXIge1xyXG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcclxufVxyXG5cclxuLmFnZW5kYS1oZWFkZXItbW9iaWxlIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIGNvbG9yOiAjMDA1MTkxO1xyXG59XHJcblxyXG4uc2NoZWR1bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7O1xyXG4gIH1cclxufVxyXG5cclxuLnNjaGVkdWxlLW1vYmlsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NSwyNDUsMjQ1LDEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMwMDUxOTE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vdmVydmlldyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxufVxyXG5cclxuLnNjaGVkdWxlOjotd2Via2l0LXNjcm9sbGJhciwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zY2hlZHVsZTo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwsIC5vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgd2lkdGg6IDExcHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZTo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gIGhlaWdodDogMTFweDtcclxufVxyXG5cclxuLnNjaGVkdWxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiwgLm9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iICB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlOyAvKiBzaG91bGQgbWF0Y2ggYmFja2dyb3VuZCwgY2FuJ3QgYmUgdHJhbnNwYXJlbnQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogI2ZhYTcxYjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYm9vdGgtcGFydG5lcnMtbW9iaWxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5maW5kLWZhaXItbW9iaWxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59IiwiaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIuM2VtO1xufVxuLmxpc3QtaGVhZGVyIC5saXN0LXRleHQge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmZhaXItcGFnZS10b29sYmFyLWxnIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NSwyNDUsMjQ1LDEpO1xufVxuLmZhaXItcGFnZS10b29sYmFyLWxnIGlvbi10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNzVweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyAuc3ViLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmFnZW5kYS1oZWFkZXIge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5hZ2VuZGEtaGVhZGVyLW1vYmlsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLnNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2NoZWR1bGUgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc2NoZWR1bGUtbW9iaWxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zY2hlZHVsZS1tb2JpbGUgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LDI0NSwyNDUsMSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNjaGVkdWxlLW1vYmlsZSBpb24taXRlbSBoMiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc2NoZWR1bGUtbW9iaWxlIGlvbi1pdGVtIGg0IHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4uc2NoZWR1bGUtbW9iaWxlIGlvbi1pdGVtIHAge1xuICBjb2xvcjogIzU1NTtcbn1cblxuLm92ZXJ2aWV3IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm92ZXJ2aWV3IHAge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uc2NoZWR1bGU6Oi13ZWJraXQtc2Nyb2xsYmFyLCAub3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zY2hlZHVsZTo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwsIC5vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XG4gIHdpZHRoOiAxMXB4O1xufVxuXG4uc2NoZWR1bGU6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwsIC5vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuXG4uc2NoZWR1bGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLCAub3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAvKiBzaG91bGQgbWF0Y2ggYmFja2dyb3VuZCwgY2FuJ3QgYmUgdHJhbnNwYXJlbnQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ub3B0aW9ucyB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5vcHRpb25zIHAge1xuICBjb2xvcjogIzY2Njtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmJvb3RoLXBhcnRuZXJzLW1vYmlsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5maW5kLWZhaXItbW9iaWxlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/chaperones/chaperones.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/chaperones/chaperones.page.ts ***!
    \*********************************************************************/

  /*! exports provided: ChaperonesPage */

  /***/
  function srcAppPagesFairsFairPageChaperonesChaperonesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChaperonesPage", function () {
      return ChaperonesPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    let ChaperonesPage = class ChaperonesPage {
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
          this.slots = fair['agenda'];
          console.log(this.slots);
        });
      }

      goBack() {
        console.log('going back');
        this.navCtrl.back();
      }

      register() {
        this.router.navigate(['/fairs/fair-page/chaperones/:id/register', this.id]);
      }

      boothPartnersPage() {
        this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
      }

      findFairLocation() {
        this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
      }

    };

    ChaperonesPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"]
    }];

    ChaperonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chaperones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chaperones.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/chaperones.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chaperones.page.scss */
      "./src/app/pages/fairs/fair-page/chaperones/chaperones.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"]])], ChaperonesPage);
    /***/
  }
}]);
//# sourceMappingURL=chaperones-chaperones-module-es5.js.map