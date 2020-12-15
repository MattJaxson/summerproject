(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
    /***/
    "2b5O":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/posts/add-post/verification/verification-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: VerificationPageRoutingModule */

    /***/
    function b5O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
        return VerificationPageRoutingModule;
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


      var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verification.page */
      "T+hm");

      var routes = [{
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
      }];

      var VerificationPageRoutingModule = function VerificationPageRoutingModule() {
        _classCallCheck(this, VerificationPageRoutingModule);
      };

      VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerificationPageRoutingModule);
      /***/
    },

    /***/
    "89RQ":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/verification/verification.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-title>Verification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 5% 0% 3%;\">\n      <ion-col class=\"ion-align-self-center ion-text-center\" size=\"10\">\n        <img id=\"confirm-icon\" src=\"../../../../../assets/icon/white-check.svg\">\n        <p id=\"confirm-text\">Thank you for adding a post! Please allow for up to 1 day for your post to be verified. You will recieve a notifcation soon. (Refactor message)</p>\n        <ion-button (click)=\"backToPosts()\" color=\"light\" fill=\"solid\">Done</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "C8mj":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/posts/add-post/verification/verification.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function C8mj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n#background {\n  opacity: 0;\n  height: 90vh;\n  --background: #999;\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: white;\n  font-size: 1.3em;\n  font-weight: 800;\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n}\n\n#confirm-icon {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n}\n\nion-button {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsdUZBQUE7VUFBQSwrRUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsNEJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7RUFBRjtBQUNGOztBQVJBO0VBQ0U7SUFDRSw0QkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLDBCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQURGO0FBQ0Y7O0FBTkE7RUFDRTtJQUNFLDBCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuI2JhY2tncm91bmQge1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDkwdmg7XG4gIC0tYmFja2dyb3VuZDogIzk5OTtcbiAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAuM3MgZm9yd2FyZHM7XG59XG5cbiNjb25maXJtLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMnMgZm9yd2FyZHM7XG59XG5cbiNjb25maXJtLWljb24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDEuM3MgZm9yd2FyZHM7XG59XG5cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDNzIGZvcndhcmRzO1xufVxuXG4vLyBLZXlmcmFtZXNcbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC0tYmFja2dyb3VuZDogIzc5NztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwLTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "T+hm":
    /*!************************************************************************!*\
      !*** ./src/app/pages/posts/add-post/verification/verification.page.ts ***!
      \************************************************************************/

    /*! exports provided: VerificationPage */

    /***/
    function THm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
        return VerificationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verification.page.html */
      "89RQ");
      /* harmony import */


      var _verification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verification.page.scss */
      "C8mj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var VerificationPage = /*#__PURE__*/function () {
        function VerificationPage(router) {
          _classCallCheck(this, VerificationPage);

          this.router = router;
        }

        _createClass(VerificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToPosts",
          value: function backToPosts() {
            this.router.navigate(['/home/posts']);
          }
        }]);

        return VerificationPage;
      }();

      VerificationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verification',
        template: _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], VerificationPage);
      /***/
    },

    /***/
    "Wtw0":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/posts/add-post/verification/verification.module.ts ***!
      \**************************************************************************/

    /*! exports provided: VerificationPageModule */

    /***/
    function Wtw0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
        return VerificationPageModule;
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


      var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verification-routing.module */
      "2b5O");
      /* harmony import */


      var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verification.page */
      "T+hm");

      var VerificationPageModule = function VerificationPageModule() {
        _classCallCheck(this, VerificationPageModule);
      };

      VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"]],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
      })], VerificationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=verification-verification-module-es5.js.map