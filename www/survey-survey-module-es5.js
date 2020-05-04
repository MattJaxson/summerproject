(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-survey-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/survey/survey.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/survey/survey.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsFairPagePartnersSurveySurveyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>survey</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/survey/survey.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/survey/survey.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsFairPageStudentsSurveySurveyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>survey</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/partners/survey/survey-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/partners/survey/survey-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: SurveyPageRoutingModule */

  /***/
  function srcAppPagesFairsFairPagePartnersSurveySurveyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyPageRoutingModule", function () {
      return SurveyPageRoutingModule;
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


    var _survey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./survey.page */
    "./src/app/pages/fairs/fair-page/partners/survey/survey.page.ts");

    const routes = [{
      path: '',
      component: _survey_page__WEBPACK_IMPORTED_MODULE_3__["SurveyPage"]
    }];
    let SurveyPageRoutingModule = class SurveyPageRoutingModule {};
    SurveyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SurveyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/partners/survey/survey.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/partners/survey/survey.module.ts ***!
    \************************************************************************/

  /*! exports provided: SurveyPageModule */

  /***/
  function srcAppPagesFairsFairPagePartnersSurveySurveyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyPageModule", function () {
      return SurveyPageModule;
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


    var _survey_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./survey-routing.module */
    "./src/app/pages/fairs/fair-page/partners/survey/survey-routing.module.ts");
    /* harmony import */


    var _survey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./survey.page */
    "./src/app/pages/fairs/fair-page/partners/survey/survey.page.ts");

    let SurveyPageModule = class SurveyPageModule {};
    SurveyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _survey_routing_module__WEBPACK_IMPORTED_MODULE_5__["SurveyPageRoutingModule"]],
      declarations: [_survey_page__WEBPACK_IMPORTED_MODULE_6__["SurveyPage"]]
    })], SurveyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/partners/survey/survey.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/partners/survey/survey.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsFairPagePartnersSurveySurveyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9wYXJ0bmVycy9zdXJ2ZXkvc3VydmV5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/partners/survey/survey.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/partners/survey/survey.page.ts ***!
    \**********************************************************************/

  /*! exports provided: SurveyPage */

  /***/
  function srcAppPagesFairsFairPagePartnersSurveySurveyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyPage", function () {
      return SurveyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SurveyPage = class SurveyPage {
      constructor() {}

      ngOnInit() {}

    };
    SurveyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survey',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survey.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/survey/survey.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survey.page.scss */
      "./src/app/pages/fairs/fair-page/partners/survey/survey.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SurveyPage);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/students/survey/survey-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/students/survey/survey-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: SurveyPageRoutingModule */

  /***/
  function srcAppPagesFairsFairPageStudentsSurveySurveyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyPageRoutingModule", function () {
      return SurveyPageRoutingModule;
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


    var _survey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./survey.page */
    "./src/app/pages/fairs/fair-page/students/survey/survey.page.ts");

    const routes = [{
      path: '',
      component: _survey_page__WEBPACK_IMPORTED_MODULE_3__["SurveyPage"]
    }];
    let SurveyPageRoutingModule = class SurveyPageRoutingModule {};
    SurveyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SurveyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/students/survey/survey.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/students/survey/survey.module.ts ***!
    \************************************************************************/

  /*! exports provided: SurveyPageModule */

  /***/
  function srcAppPagesFairsFairPageStudentsSurveySurveyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyPageModule", function () {
      return SurveyPageModule;
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


    var _survey_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./survey-routing.module */
    "./src/app/pages/fairs/fair-page/students/survey/survey-routing.module.ts");
    /* harmony import */


    var _survey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./survey.page */
    "./src/app/pages/fairs/fair-page/students/survey/survey.page.ts");

    let SurveyPageModule = class SurveyPageModule {};
    SurveyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _survey_routing_module__WEBPACK_IMPORTED_MODULE_5__["SurveyPageRoutingModule"]],
      declarations: [_survey_page__WEBPACK_IMPORTED_MODULE_6__["SurveyPage"]]
    })], SurveyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/students/survey/survey.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/students/survey/survey.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsFairPageStudentsSurveySurveyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9zdHVkZW50cy9zdXJ2ZXkvc3VydmV5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fair-page/students/survey/survey.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/fairs/fair-page/students/survey/survey.page.ts ***!
    \**********************************************************************/

  /*! exports provided: SurveyPage */

  /***/
  function srcAppPagesFairsFairPageStudentsSurveySurveyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyPage", function () {
      return SurveyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SurveyPage = class SurveyPage {
      constructor() {}

      ngOnInit() {}

    };
    SurveyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survey',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survey.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/survey/survey.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survey.page.scss */
      "./src/app/pages/fairs/fair-page/students/survey/survey.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SurveyPage);
    /***/
  }
}]);
//# sourceMappingURL=survey-survey-module-es5.js.map