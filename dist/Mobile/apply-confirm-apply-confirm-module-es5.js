function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-confirm-apply-confirm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsApplyConfirmApplyConfirmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n  <ion-toolbar>\n    <ion-title>Application Sent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 5% 0% 3%;\">\n      <ion-col class=\"ion-align-self-center ion-text-center\" size=\"10\">\n        <img id=\"confirm-icon\" src=\"../../../../assets/icon/white-check.svg\">\n        <p id=\"confirm-text\">Thanks for applying to {{jobCompanyName}} for the role of {{jobTitle}}. {{jobCompanyName}} has been notified at the email address of {{jobCompanyEmail}} and you will hear from them shortly.</p>\n        <ion-button (click)=\"backHome()\" color=\"light\" fill=\"solid\">Done</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ApplyConfirmPageRoutingModule */

  /***/
  function srcAppPagesJobsApplyConfirmApplyConfirmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyConfirmPageRoutingModule", function () {
      return ApplyConfirmPageRoutingModule;
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


    var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./apply-confirm.page */
    "./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts");

    var routes = [{
      path: '',
      component: _apply_confirm_page__WEBPACK_IMPORTED_MODULE_3__["ApplyConfirmPage"]
    }];

    var ApplyConfirmPageRoutingModule = function ApplyConfirmPageRoutingModule() {
      _classCallCheck(this, ApplyConfirmPageRoutingModule);
    };

    ApplyConfirmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ApplyConfirmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts ***!
    \******************************************************************/

  /*! exports provided: ApplyConfirmPageModule */

  /***/
  function srcAppPagesJobsApplyConfirmApplyConfirmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyConfirmPageModule", function () {
      return ApplyConfirmPageModule;
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


    var _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./apply-confirm-routing.module */
    "./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts");
    /* harmony import */


    var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./apply-confirm.page */
    "./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts");

    var ApplyConfirmPageModule = function ApplyConfirmPageModule() {
      _classCallCheck(this, ApplyConfirmPageModule);
    };

    ApplyConfirmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyConfirmPageRoutingModule"]],
      declarations: [_apply_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ApplyConfirmPage"]]
    })], ApplyConfirmPageModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobsApplyConfirmApplyConfirmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: #999;\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: white;\n  font-size: 1.3em;\n  font-weight: 800;\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n}\n\n#confirm-icon {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n}\n\nion-button {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9hcHBseS1jb25maXJtL2FwcGx5LWNvbmZpcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2JzL2FwcGx5LWNvbmZpcm0vYXBwbHktY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsdUZBQUE7VUFBQSwrRUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7QUNDRjs7QURHQTtFQUNFO0lBQ0UsNEJBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7RUNBRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSw0QkFBQTtFQ0FGO0VERUE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLDBCQUFBO0VDREY7RURHQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ0RGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLDBCQUFBO0VDREY7RURHQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2FwcGx5LWNvbmZpcm0vYXBwbHktY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIC4zcyBmb3J3YXJkcztcbn1cbiAgXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogODAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDJzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS1pY29uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjNzIGZvcndhcmRzO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAzcyBmb3J3YXJkcztcbn1cblxuLy8gS2V5ZnJhbWVzXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtLWJhY2tncm91bmQ6ICM3OTc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cC0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cbn0iLCIjYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC43NSwgMC45KSAwLjNzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogODAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC43NSwgMC45KSAycyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0taWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllcigwLjE1LCAwLjg1LCAwLjc1LCAwLjkpIDEuM3MgZm9yd2FyZHM7XG59XG5cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoMC4xNSwgMC44NSwgMC43NSwgMC45KSAzcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNzk3O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwLTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts ***!
    \****************************************************************/

  /*! exports provided: ApplyConfirmPage */

  /***/
  function srcAppPagesJobsApplyConfirmApplyConfirmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyConfirmPage", function () {
      return ApplyConfirmPage;
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

    var ApplyConfirmPage = /*#__PURE__*/function () {
      function ApplyConfirmPage(router, activatedRoute) {
        _classCallCheck(this, ApplyConfirmPage);

        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(ApplyConfirmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line: radix
          var title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

          var companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
          var companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
          this.jobTitle = title;
          this.jobCompanyName = companyName;
          this.jobCompanyEmail = companyEmail;
        }
      }, {
        key: "backHome",
        value: function backHome() {
          this.router.navigate(['/home/jobs']);
        }
      }]);

      return ApplyConfirmPage;
    }();

    ApplyConfirmPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ApplyConfirmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apply-confirm',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apply-confirm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apply-confirm.page.scss */
      "./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ApplyConfirmPage);
    /***/
  }
}]);
//# sourceMappingURL=apply-confirm-apply-confirm-module-es5.js.map