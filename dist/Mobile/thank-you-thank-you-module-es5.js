(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"], {
    /***/
    "5cwi":
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.ts ***!
      \****************************************************************/

    /*! exports provided: ThankYouPage */

    /***/
    function cwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThankYouPage", function () {
        return ThankYouPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thank-you.page.html */
      "FELy");
      /* harmony import */


      var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./thank-you.page.scss */
      "uphs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ThankYouPage = /*#__PURE__*/function () {
        function ThankYouPage(router) {
          _classCallCheck(this, ThankYouPage);

          this.router = router;
        }

        _createClass(ThankYouPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['']);
          }
        }]);

        return ThankYouPage;
      }();

      ThankYouPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ThankYouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-thank-you',
        template: _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ThankYouPage);
      /***/
    },

    /***/
    "FELy":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/thank-you/thank-you.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FELy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-md=\"4\" style=\"margin-top: 10%;\">\n        <ion-icon class=\"check-icon\" src=\"../../../assets/icon/white-check.svg\" ></ion-icon>\n        <h6 style=\"font-size: 1.5em;\">Thank you for signing up with Find Your Future! You can now login to your account</h6>\n        <ion-button (click)=\"goToLogin()\" class=\"thank-you-button\">LOGIN</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "oo7F":
    /*!******************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts ***!
      \******************************************************************/

    /*! exports provided: ThankYouPageModule */

    /***/
    function oo7F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function () {
        return ThankYouPageModule;
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


      var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./thank-you-routing.module */
      "uoFv");
      /* harmony import */


      var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./thank-you.page */
      "5cwi");

      var ThankYouPageModule = function ThankYouPageModule() {
        _classCallCheck(this, ThankYouPageModule);
      };

      ThankYouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankYouPageRoutingModule"]],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
      })], ThankYouPageModule);
      /***/
    },

    /***/
    "uoFv":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/thank-you/thank-you-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ThankYouPageRoutingModule */

    /***/
    function uoFv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThankYouPageRoutingModule", function () {
        return ThankYouPageRoutingModule;
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


      var _thank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./thank-you.page */
      "5cwi");

      var routes = [{
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_3__["ThankYouPage"]
      }];

      var ThankYouPageRoutingModule = function ThankYouPageRoutingModule() {
        _classCallCheck(this, ThankYouPageRoutingModule);
      };

      ThankYouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ThankYouPageRoutingModule);
      /***/
    },

    /***/
    "uphs":
    /*!******************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/thank-you/thank-you.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function uphs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".thank-you-button {\n  opacity: 0;\n  width: 200px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 700;\n  margin: 40px 0 40px 0;\n  --background: white;\n  --color: #797;\n  transition: 1s;\n  -webkit-animation: slide-up 0.5s ease 3s forwards;\n          animation: slide-up 0.5s ease 3s forwards;\n}\n\n.background {\n  text-align: center;\n  background: #797;\n  height: 100vh;\n  width: 100%;\n  -webkit-animation: background-slide-up 0.5s ease forwards;\n          animation: background-slide-up 0.5s ease forwards;\n}\n\nh6 {\n  color: white;\n  margin-top: 100px;\n  opacity: 0;\n  -webkit-animation: header-fade-in 0.5s ease-in-out 1s forwards;\n          animation: header-fade-in 0.5s ease-in-out 1s forwards;\n}\n\n.check-icon {\n  opacity: 0;\n  -webkit-animation: check-slide-down 0.5s ease-out 1.5s forwards;\n          animation: check-slide-down 0.5s ease-out 1.5s forwards;\n}\n\n@-webkit-keyframes background-slide-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes background-slide-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(50px) scale(2);\n  }\n}\n\n@keyframes check-slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-300px) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(50px) scale(2);\n  }\n}\n\n@-webkit-keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes header-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsK0RBQUE7VUFBQSx1REFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBQTtFQUNGO0VBRUE7SUFDRSwwQkFBQTtFQUFGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUZGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0NBQUE7RUFIRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO0VBSkY7QUFDRjs7QUFMQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNDQUFBO0VBSEY7RUFNQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLFVBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtFQU5GO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLFVBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24tdXAvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmsteW91LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDQwcHggMCA0MHB4IDA7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICM3OTc7XG4gIHRyYW5zaXRpb246IDFzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAzcyBmb3J3YXJkcztcbn1cblxuLmJhY2tncm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM3OTc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IGJhY2tncm91bmQtc2xpZGUtdXAgMC41cyBlYXNlIGZvcndhcmRzO1xufVxuXG5oNiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLWZhZGUtaW4gMC41cyBlYXNlLWluLW91dCAxcyBmb3J3YXJkcztcbn1cblxuLmNoZWNrLWljb24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGNoZWNrLXNsaWRlLWRvd24gMC41cyBlYXNlLW91dCAxLjVzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmQtc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNoZWNrLXNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KSBzY2FsZSgwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpIHNjYWxlKDIpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaGVhZGVyLWZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=thank-you-thank-you-module-es5.js.map