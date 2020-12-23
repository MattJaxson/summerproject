(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-confirm-apply-confirm-module"], {
    /***/
    "FFkE":
    /*!******************************************************************!*\
      !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function FFkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: #999;\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: white;\n  font-size: 1.3em;\n  font-weight: 800;\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n}\n\n#confirm-icon {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n}\n\nion-button {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGx5LWNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHVGQUFBO1VBQUEsK0VBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLDRCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0VBQUY7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsNEJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSwwQkFBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7RUFERjtBQUNGOztBQU5BO0VBQ0U7SUFDRSwwQkFBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImFwcGx5LWNvbmZpcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDkwdmg7XG4gIC0tYmFja2dyb3VuZDogIzk5OTtcbiAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAuM3MgZm9yd2FyZHM7XG59XG4gIFxuI2NvbmZpcm0tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAycyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0taWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMS4zcyBmb3J3YXJkcztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgM3MgZm9yd2FyZHM7XG59XG5cbi8vIEtleWZyYW1lc1xuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNzk3O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAtMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "NCAH":
    /*!******************************************************************!*\
      !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts ***!
      \******************************************************************/

    /*! exports provided: ApplyConfirmPageModule */

    /***/
    function NCAH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyConfirmPageModule", function () {
        return ApplyConfirmPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./apply-confirm-routing.module */
      "mDiT");
      /* harmony import */


      var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./apply-confirm.page */
      "dQY2");

      var ApplyConfirmPageModule = function ApplyConfirmPageModule() {
        _classCallCheck(this, ApplyConfirmPageModule);
      };

      ApplyConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyConfirmPageRoutingModule"]],
        declarations: [_apply_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ApplyConfirmPage"]]
      })], ApplyConfirmPageModule);
      /***/
    },

    /***/
    "dQY2":
    /*!****************************************************************!*\
      !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts ***!
      \****************************************************************/

    /*! exports provided: ApplyConfirmPage */

    /***/
    function dQY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyConfirmPage", function () {
        return ApplyConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_apply_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./apply-confirm.page.html */
      "ibuu");
      /* harmony import */


      var _apply_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apply-confirm.page.scss */
      "FFkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      ApplyConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-apply-confirm',
        template: _raw_loader_apply_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_apply_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], ApplyConfirmPage);
      /***/
    },

    /***/
    "ibuu":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply-confirm/apply-confirm.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ibuu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n  <ion-toolbar>\n    <ion-title>Application Sent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 5% 0% 3%;\">\n      <ion-col class=\"ion-align-self-center ion-text-center\" size=\"10\">\n        <img id=\"confirm-icon\" src=\"../../../../assets/icon/white-check.svg\">\n        <p id=\"confirm-text\">Thanks for applying to {{jobCompanyName}} for the role of {{jobTitle}}. {{jobCompanyName}} has been notified at the email address of {{jobCompanyEmail}} and you will hear from them shortly.</p>\n        <ion-button (click)=\"backHome()\" color=\"light\" fill=\"solid\">Done</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "mDiT":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ApplyConfirmPageRoutingModule */

    /***/
    function mDiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyConfirmPageRoutingModule", function () {
        return ApplyConfirmPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apply-confirm.page */
      "dQY2");

      var routes = [{
        path: '',
        component: _apply_confirm_page__WEBPACK_IMPORTED_MODULE_3__["ApplyConfirmPage"]
      }];

      var ApplyConfirmPageRoutingModule = function ApplyConfirmPageRoutingModule() {
        _classCallCheck(this, ApplyConfirmPageRoutingModule);
      };

      ApplyConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ApplyConfirmPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=apply-confirm-apply-confirm-module-es5.js.map