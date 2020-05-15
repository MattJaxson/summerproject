(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-view-resume-view-resume-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/view-resume/view-resume.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/view-resume/view-resume.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileResumeViewResumeViewResumePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>View Resume</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\r\n      <ion-col offset=\"3\" size=\"2\">\r\n        <h1>View Resume</h1>\r\n      </ion-col>\r\n      <ion-col push=\"2.5\" size=\"2\">\r\n        <ion-button class=\"back-button\" (click)=\"back()\">\r\n          Back\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color: #00000044;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\r\n        <p>This is your resume</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<button (click)=\"updateResume()\" id=\"next-button\">UPDATE RESUME</button>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ViewResumePageRoutingModule */

  /***/
  function srcAppPagesProfileResumeViewResumeViewResumeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewResumePageRoutingModule", function () {
      return ViewResumePageRoutingModule;
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


    var _view_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-resume.page */
    "./src/app/pages/profile/resume/view-resume/view-resume.page.ts");

    const routes = [{
      path: '',
      component: _view_resume_page__WEBPACK_IMPORTED_MODULE_3__["ViewResumePage"]
    }];
    let ViewResumePageRoutingModule = class ViewResumePageRoutingModule {};
    ViewResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewResumePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/view-resume/view-resume.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/profile/resume/view-resume/view-resume.module.ts ***!
    \************************************************************************/

  /*! exports provided: ViewResumePageModule */

  /***/
  function srcAppPagesProfileResumeViewResumeViewResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewResumePageModule", function () {
      return ViewResumePageModule;
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


    var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-resume-routing.module */
    "./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts");
    /* harmony import */


    var _view_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-resume.page */
    "./src/app/pages/profile/resume/view-resume/view-resume.page.ts");

    let ViewResumePageModule = class ViewResumePageModule {};
    ViewResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewResumePageRoutingModule"]],
      declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_6__["ViewResumePage"]]
    })], ViewResumePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/view-resume/view-resume.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileResumeViewResumeViewResumePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9yZXN1bWUvdmlldy1yZXN1bWUvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXkgRllGXFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxyZXN1bWVcXHZpZXctcmVzdW1lXFx2aWV3LXJlc3VtZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL3ZpZXctcmVzdW1lL3ZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL3ZpZXctcmVzdW1lL3ZpZXctcmVzdW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/view-resume/view-resume.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ViewResumePage */

  /***/
  function srcAppPagesProfileResumeViewResumeViewResumePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewResumePage", function () {
      return ViewResumePage;
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

    let ViewResumePage = class ViewResumePage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      back() {
        this.router.navigate(['/home/profile/resume/<resume>']);
      }

      updateResume() {
        console.log('Updating Resume from View Resume page');
        this.router.navigate(['/home/profile/update-resume']);
      }

    };

    ViewResumePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ViewResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-resume.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/view-resume/view-resume.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-resume.page.scss */
      "./src/app/pages/profile/resume/view-resume/view-resume.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ViewResumePage);
    /***/
  }
}]);
//# sourceMappingURL=resume-view-resume-view-resume-module-es5.js.map