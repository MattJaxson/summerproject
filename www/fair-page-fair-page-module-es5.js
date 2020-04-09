(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fair-page-fair-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/fair-page.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/fair-page.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsFairPageFairPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\n    <!-- Mobile & Tablet Header -->\n    <ion-toolbar>\n      <ion-title>Fair Information</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-header class=\"ion-hide-sm-down\">\n     <!-- Desktop Header -->\n    <ion-toolbar class=\"fair-page-toolbar-lg ion-padding-horizontal\">\n        <ion-title color=\"primary\">Fair Information</ion-title>\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n        </ion-button>\n      </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop -->\n    <ion-row class=\"fair-photo-lg ion-hide-sm-down ion-justify-content-center\">\n\n        <ion-col class=\"info-section ion-align-self-center\" size=\"9\">\n          <h1>{{title}}</h1>\n          <p>{{date}}</p>\n          <p>{{time}}</p>\n          <p>{{description}}</p>\n        </ion-col>\n\n        <ion-col class=\"button-wrapper ion-align-self-center\" size=\"9\">\n            <h2>I am a: </h2>\n            <ion-button class=\"fair-page-btn\" (click)=\"students()\">\n              Student\n            </ion-button>\n\n            <ion-button class=\"fair-page-btn\" (click)=\"partners()\">\n              Partner\n            </ion-button>\n\n              <ion-button class=\"fair-page-btn\" (click)=\"volunteers()\">\n                Volunteer\n              </ion-button>\n\n             <ion-button class=\"fair-page-btn\" (click)=\"chaperones()\">\n              Chaperone\n            </ion-button>\n        </ion-col>\n\n      </ion-row>\n\n    <!-- Mobile -->\n    <ion-row class=\"ion-hide-md-up ion-justify-content-center\">\n\n      <ion-col class=\"info-section\" size-xs=\"12\" size-sm=\"8\">\n       <h1>{{title}}</h1>\n       <p>{{date}}</p>\n       <p>{{time}}</p>\n       <p style=\"\n       margin-bottom: 50px;\">{{description}}</p>\n      </ion-col>\n\n\n      <ion-col class=\"button-wrapper\" size-xs=\"12\" size-sm=\"12\" style=\"margin-top: 30px;\">\n\n        <h2>I am a </h2>\n\n        <p style=\"line-height: 2em; font-weight: 400; font-size: 1.2em;\">Register, view agendas, view FAQs, get parking information, and complete surveys. </p>\n        <ion-item lines=\"none\">\n          <ion-button class=\"orange-button\" (click)=\"students()\">\n            Student\n          </ion-button>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-button class=\"orange-button\" (click)=\"chaperones()\">\n            Chaperone\n          </ion-button>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-button class=\"orange-button\" (click)=\"volunteers()\">\n            Volunteer\n          </ion-button>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-button class=\"orange-button\" (click)=\"partners()\">\n            Partner\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/fair-page-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/fair-page-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FairPagePageRoutingModule */

  /***/
  function srcAppPagesFairsFairPageFairPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPagePageRoutingModule", function () {
      return FairPagePageRoutingModule;
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


    var _fair_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fair-page.page */
    "./src/app/pages/fairs/fair-page/fair-page.page.ts");

    const routes = [{
      path: '',
      component: _fair_page_page__WEBPACK_IMPORTED_MODULE_3__["FairPagePage"]
    }, {
      path: 'students/:id',
      loadChildren: () => Promise.all(
      /*! import() | students-students-module */
      [__webpack_require__.e("default~chaperones-chaperones-module~partners-partners-module~students-students-module~volunteers-vo~1cb681b0"), __webpack_require__.e("students-students-module")]).then(__webpack_require__.bind(null,
      /*! ./students/students.module */
      "./src/app/pages/fairs/fair-page/students/students.module.ts")).then(m => m.StudentsPageModule)
    }, {
      path: 'chaperones/:id',
      loadChildren: () => Promise.all(
      /*! import() | chaperones-chaperones-module */
      [__webpack_require__.e("default~chaperones-chaperones-module~partners-partners-module~students-students-module~volunteers-vo~1cb681b0"), __webpack_require__.e("chaperones-chaperones-module")]).then(__webpack_require__.bind(null,
      /*! ./chaperones/chaperones.module */
      "./src/app/pages/fairs/fair-page/chaperones/chaperones.module.ts")).then(m => m.ChaperonesPageModule)
    }, {
      path: 'partners/:id',
      loadChildren: () => Promise.all(
      /*! import() | partners-partners-module */
      [__webpack_require__.e("default~chaperones-chaperones-module~partners-partners-module~students-students-module~volunteers-vo~1cb681b0"), __webpack_require__.e("partners-partners-module")]).then(__webpack_require__.bind(null,
      /*! ./partners/partners.module */
      "./src/app/pages/fairs/fair-page/partners/partners.module.ts")).then(m => m.PartnersPageModule)
    }, {
      path: 'volunteers/:id',
      loadChildren: () => Promise.all(
      /*! import() | volunteers-volunteers-module */
      [__webpack_require__.e("default~chaperones-chaperones-module~partners-partners-module~students-students-module~volunteers-vo~1cb681b0"), __webpack_require__.e("volunteers-volunteers-module")]).then(__webpack_require__.bind(null,
      /*! ./volunteers/volunteers.module */
      "./src/app/pages/fairs/fair-page/volunteers/volunteers.module.ts")).then(m => m.VolunteersPageModule)
    }];
    let FairPagePageRoutingModule = class FairPagePageRoutingModule {};
    FairPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FairPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/fair-page.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/fair-page.module.ts ***!
    \***********************************************************/

  /*! exports provided: FairPagePageModule */

  /***/
  function srcAppPagesFairsFairPageFairPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPagePageModule", function () {
      return FairPagePageModule;
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


    var _fair_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fair-page-routing.module */
    "./src/app/pages/fairs/fair-page/fair-page-routing.module.ts");
    /* harmony import */


    var _fair_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fair-page.page */
    "./src/app/pages/fairs/fair-page/fair-page.page.ts");

    let FairPagePageModule = class FairPagePageModule {};
    FairPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fair_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairPagePageRoutingModule"]],
      declarations: [_fair_page_page__WEBPACK_IMPORTED_MODULE_6__["FairPagePage"]]
    })], FairPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/fair-page.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/fair-page.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsFairPageFairPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: #005191;\n  font-weight: 900;\n  font-size: 1.75em;\n  margin-bottom: 50px;\n  padding-bottom: 20px;\n  border-bottom: #005191 2px solid;\n}\n\nh2 {\n  color: #005191;\n  font-weight: 900;\n  font-size: 1.75em;\n  margin-bottom: 50px;\n  padding-bottom: 20px;\n  width: 100%;\n}\n\n.info-section {\n  padding: 20px;\n}\n\n.info-section p {\n  line-height: 0.5em;\n  color: #222;\n  font-weight: 500;\n  font-size: 1.4em;\n}\n\n.button-wrapper {\n  padding: 20px;\n}\n\n.fair-info {\n  margin-top: 20px;\n}\n\n.fair-info p {\n  opacity: 0.5;\n}\n\nion-title {\n  font-size: 1.5em;\n}\n\n.fair-page-toolbar-lg {\n  --background: rgba(245,245,245,1);\n  height: 9vh;\n}\n\n.fair-page-toolbar-lg ion-item {\n  font-size: 1.4em;\n  font-weight: 900;\n}\n\n.fair-photo {\n  height: 300px;\n  background: url(\"/../../assets/Journi_flyer-500x357.png\") no-repeat top center fixed;\n  background-size: contain;\n}\n\n.fair-photo-lg {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f3f3f3), to(#ffffff));\n  background-image: linear-gradient(#f3f3f3, #ffffff);\n  height: 100vh;\n}\n\n.fair-photo-lg .info-section {\n  margin-top: 30px;\n  border-radius: 10px;\n  border: 2px solid #005191;\n  height: 30vh;\n  padding: 30px;\n  background: white;\n}\n\n.fair-photo-lg .button-wrapper {\n  background: white;\n  border-radius: 10px;\n  border: 2px solid #005191;\n  padding: 30px;\n  height: auto;\n  text-align: center;\n  position: relative;\n  top: -100px;\n  opacity: 0;\n  -webkit-animation: btn-wrapper-slide-up 0.5s ease-out 1s forwards;\n          animation: btn-wrapper-slide-up 0.5s ease-out 1s forwards;\n}\n\n@-webkit-keyframes btn-wrapper-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes btn-wrapper-slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n.fair-photo-lg .fair-page-btn {\n  width: 120px;\n  margin: 7px;\n  --background: #faa71b;\n  --color: #005191;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL2ZhaXItcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9mYWlyLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNaRjs7QURlQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLGFBQUE7QUNaRjs7QURjRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURnQkE7RUFDRSxhQUFBO0FDYkY7O0FEaUJBO0VBQ0UsZ0JBQUE7QUNkRjs7QURnQkU7RUFDRSxZQUFBO0FDZEo7O0FEb0JBO0VBQ0UsZ0JBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0FDakJGOztBRG1CRTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7O0FEcUJBO0VBQ0UsYUFBQTtFQUNBLG9GQUFBO0VBSUEsd0JBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsNkZBQUE7RUFBQSxtREFBQTtFQUNBLGFBQUE7QUNsQkY7O0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7QUNuQko7O0FEc0JFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ3BCSjtFRHNCRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDcEJKO0FBQ0Y7O0FEWUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDcEJKO0VEc0JFO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNwQko7QUFDRjs7QUR1QkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9mYWlyLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWl0ZW0ge1xuLy8gICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4vLyAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4vLyAgIC0taGVpZ2h0OiAxMDBweDtcbi8vICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuLy8gfVxuXG4vLyBpb24tZ3JpZCB7XG4vLyAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xuLy8gfVxuXG5oMXtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwNTE5MSAycHggc29saWQ7XG59XG5cbmgye1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDAuNWVtO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxufVxuXG4uYnV0dG9uLXdyYXBwZXJ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cblxuLmZhaXItaW5mb3tcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBwIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuXG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDUsMjQ1LDI0NSwxKTtcbiAgaGVpZ2h0OiA5dmg7XG5cbiAgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICB9XG59XG5cbi5mYWlyLXBob3RvIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvLi4vLi4vYXNzZXRzL0pvdXJuaV9mbHllci01MDB4MzU3LnBuZycpIG5vLXJlcGVhdCB0b3AgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZmFpci1waG90by1sZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZjNmM2YzLCAjZmZmZmZmKTtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAuaW5mby1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC5idXR0b24td3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGJ0bi13cmFwcGVyLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgMXMgZm9yd2FyZHM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ0bi13cmFwcGVyLXNsaWRlLXVwIHtcbiAgICAwJXtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG4gIC5mYWlyLXBhZ2UtYnRuIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxufSIsImgxIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwNTE5MSAycHggc29saWQ7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmluZm8tc2VjdGlvbiBwIHtcbiAgbGluZS1oZWlnaHQ6IDAuNWVtO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZhaXItaW5mbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZmFpci1pbmZvIHAge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDUsMjQ1LDI0NSwxKTtcbiAgaGVpZ2h0OiA5dmg7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uZmFpci1waG90byB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi8uLi8uLi9hc3NldHMvSm91cm5pX2ZseWVyLTUwMHgzNTcucG5nXCIpIG5vLXJlcGVhdCB0b3AgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZmFpci1waG90by1sZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZjNmM2YzLCAjZmZmZmZmKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5mYWlyLXBob3RvLWxnIC5pbmZvLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZhaXItcGhvdG8tbGcgLmJ1dHRvbi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDUxOTE7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwMHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGJ0bi13cmFwcGVyLXNsaWRlLXVwIDAuNXMgZWFzZS1vdXQgMXMgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGJ0bi13cmFwcGVyLXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG4uZmFpci1waG90by1sZyAuZmFpci1wYWdlLWJ0biB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiA3cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/fair-page.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/fair-page.page.ts ***!
    \*********************************************************/

  /*! exports provided: FairPagePage */

  /***/
  function srcAppPagesFairsFairPageFairPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPagePage", function () {
      return FairPagePage;
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


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    let FairPagePage = class FairPagePage {
      constructor(activatedRoute, router, fairs) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fairs = fairs;
      }

      ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        console.log(this.id);
        this.fairs.getFair(this.id).subscribe(data => {
          console.log(data);
          this.title = data['title'];
          this.address = data['address'];
          this.date = data['date'];
          this.city = data['city'];
          this.state = data['state'];
          this.zip = data['zip'];
          this.time = data['time'];
          this.summary = data['summary'];
          this.description = data['description'];
          this.photo = data['photo'];
          this.dateCreated = data['dateCreated'];
          this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(this.date), 'MMMM dd, yyyy');
          this.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(this.date), 'hh:mm a');
        });
      }

      goBack() {
        console.log('going back');
        this.router.navigate(['/fairs']);
      }

      students() {
        console.log('going to students page');
        this.router.navigate(['/fairs/fair/:id/students', this.id]);
      }

      chaperones() {
        console.log('going to chaperones page');
        this.router.navigate(['/fairs/fair/:id/chaperones', this.id]);
      }

      volunteers() {
        console.log('going to volunteers page');
        this.router.navigate(['/fairs/fair/:id/volunteers', this.id]);
      }

      partners() {
        console.log('going to partners page');
        this.router.navigate(['/fairs/fair/:id/partners', this.id]);
      }

    };

    FairPagePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_2__["FairsService"]
    }];

    FairPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fair-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fair-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/fair-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fair-page.page.scss */
      "./src/app/pages/fairs/fair-page/fair-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_2__["FairsService"]])], FairPagePage);
    /***/
  }
}]);
//# sourceMappingURL=fair-page-fair-page-module-es5.js.map