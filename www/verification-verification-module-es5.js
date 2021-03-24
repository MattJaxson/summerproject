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


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content id=\"background\"> \n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 15% 0% 3% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\" class=\"ion-text-center\">\n        <img src=\"../../../../../../assets/icon/Green-Checked.svg\">\n        <p>Thank you for adding a post! Please allow for up to 1 day for your post to be verified. You will recieve a notifcation soon letting you know if your post was verified.</p>\n        <ion-button (click)=\"backToPosts()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
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


      __webpack_exports__["default"] = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: rgb(239, 255, 239);\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: #111;\n  font-size: 1.3em;\n  -webkit-animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\nion-button {\n  opacity: 1;\n  font-weight: 600;\n  --background: #4DC066;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDSSw0QkFBQTtFQUVKO0VBQUE7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtFQUVKO0FBQ0Y7O0FBVkE7RUFDRTtJQUNJLDRCQUFBO0VBRUo7RUFBQTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLDBCQUFBO0VBRUo7QUFDRjs7QUFDRTtFQUNFO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQ047QUFDRjs7QUFSRTtFQUNFO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJ2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDkwdmg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzOSwgMjU1LCAyMzkpO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIC4zcyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0tdGV4dCB7XG4gIGNvbG9yOiAjMTExO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC4ycyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDAuM3MgZm9yd2FyZHM7XG59XG5pb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjNERDMDY2O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYigyMjAsIDI1NSwgMjIwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLXVwLTIge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICB9XG4gIH1cbiJdfQ== */";
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