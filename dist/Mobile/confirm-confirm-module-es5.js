(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-confirm-module"], {
    /***/
    "0IYb":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/confirm/confirm.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IYb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <p>Your profile's picture has been changed.</p>\n  </ion-content>\n  <button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n";
      /***/
    },

    /***/
    "29ht":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/confirm/confirm.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Your Resume has been uploaded.</p>\n</ion-content>\n<button (click)=\"goBackToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n";
      /***/
    },

    /***/
    "33pv":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function pv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtcGljdHVyZS9jb25maXJtL2NvbmZpcm0ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "4iPI":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/confirm/confirm.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function iPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "8+IP":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/confirm/confirm.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5>You email has been changed.</h5>\n</ion-content>\n<button (click)=\"backToProfilePage()\" id=\"next-button\">BACK TO PROFILE</button>\n";
      /***/
    },

    /***/
    "9v2h":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/profile/change-school/confirm/confirm-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function v2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "ZDvN");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "Aqrq":
    /*!**************************************************************!*\
      !*** ./src/app/pages/profile/resume/confirm/confirm.page.ts ***!
      \**************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function Aqrq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "29ht");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "zr+d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBackToProfile",
          value: function goBackToProfile() {
            console.log('Updating Resume from View Resume page');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "Bz9F":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bz9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: #999;\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: white;\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n}\n\n#mentor-photo {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n}\n\nion-button {\n  opacity: 0;\n  -webkit-animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n          animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9jb250YWN0LW1lbnRvci9jb25maXJtL2NvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDSSw0QkFBQTtFQUNKO0VBQ0E7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQUNKO0FBQ0Y7O0FBVEE7RUFDRTtJQUNJLDRCQUFBO0VBQ0o7RUFDQTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0VBQ0o7QUFDRjs7QUFFRTtFQUNFO0lBQ0ksMEJBQUE7RUFBTjtFQUVFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQU47QUFDRjs7QUFQRTtFQUNFO0lBQ0ksMEJBQUE7RUFBTjtFQUVFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLXBhZ2UvY29udGFjdC1tZW50b3IvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiA5MHZoO1xuICAtLWJhY2tncm91bmQ6ICM5OTk7XG4gIC0tdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgLjNzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDJzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLXBob3RvIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjNzIGZvcndhcmRzO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAzcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNzk3O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tdXAtMiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgIH1cbiAgfVxuIl19 */";
      /***/
    },

    /***/
    "Cv4O":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/confirm/confirm-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function Cv4O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "U923");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "E0Ma":
    /*!********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/confirm/confirm.page.ts ***!
      \********************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function E0Ma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "kXK0");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "Xe7Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "QGB6":
    /*!********************************************************************!*\
      !*** ./src/app/pages/profile/change-email/confirm/confirm.page.ts ***!
      \********************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function QGB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "8+IP");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "i2uu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToProfilePage",
          value: function backToProfilePage() {
            console.log('Going back to Profile Page');
            this.router.navigate(['/home/profile']);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('change email password cancelled');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "QGQF":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile/change-email/confirm/confirm.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function QGQF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "u5jz");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "QGB6");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "RPEx":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/profile/change-school/confirm/confirm.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function RPEx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "9v2h");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "ZDvN");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "TY5D":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function TY5D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "dTNj");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "vQgF");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "U923":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/profile/change-password/confirm/confirm.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function U923(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "gI+l");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "4iPI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToProfile",
          value: function backToProfile() {
            console.log('Going back to profile');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "VSyP":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-school/confirm/confirm.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VSyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <p>Your profile's picture has been changed.</p>\n  </ion-content>\n  <button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>";
      /***/
    },

    /***/
    "X3aN":
    /*!****************************************************************!*\
      !*** ./src/app/pages/profile/resume/confirm/confirm.module.ts ***!
      \****************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function X3aN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "a4x9");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "Aqrq");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "Xe7Q":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/confirm/confirm.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function Xe7Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".check-icon {\n  width: 80px;\n  height: 80px;\n  margin-top: 30px;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9jb25maXJtL2NvbmZpcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrLWljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAwLjVzIGZvcndhcmRzO1xufSJdfQ== */";
      /***/
    },

    /***/
    "ZDvN":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/profile/change-school/confirm/confirm.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function ZDvN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "VSyP");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "wNpw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToProfile",
          value: function backToProfile() {
            console.log('Going back to profile');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "a4x9":
    /*!************************************************************************!*\
      !*** ./src/app/pages/profile/resume/confirm/confirm-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function a4x9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "Aqrq");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "bj1g":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bj1g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col class=\"ion-align-self-center ion-text-center\" size=\"10\">\n        <img id=\"mentor-photo\" src=\"../../../../../../assets/icon/white-check.svg\">\n        <p id=\"confirm-text\">An email has been sent to <span style=\"font-weight: 800;\">{{mentorName}}</span> with your message. They will contact you at their earliest convenience.</p>\n        <ion-button (click)=\"returnToMentors()\" color=\"light\" fill=\"solid\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "cuFB":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/confirm/confirm.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function cuFB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "Cv4O");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "U923");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "dTNj":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function dTNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "vQgF");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "gI+l":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/confirm/confirm.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Your profile's pass been has been changed./p>\n</ion-content>\n<button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n";
      /***/
    },

    /***/
    "gX9W":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function gX9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "pFW0");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "hVY2":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/confirm/confirm-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function hVY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "E0Ma");

      var routes = [// Last page of forgot password route
      {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "i2uu":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile/change-email/confirm/confirm.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function i2uu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLWVtYWlsL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "kXK0":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/confirm/confirm.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kXK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\n      <ion-row>\n        <ion-col size-lg=\"6\" offset-lg=\"3\">\n          <ion-icon class=\"check-icon\" src=\"../../../assets/icon/green-check.svg\" ></ion-icon>\n          <h6 class=\"text-header\">Your password has been changed. Please log in with your new password</h6>\n          <ion-button (click)=\"goToLogin()\" class=\"orange-button\" >LOGIN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "mDKk":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/confirm/confirm.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function mDKk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "hVY2");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "E0Ma");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "p/Ua":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function pUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "gX9W");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "pFW0");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "pFW0":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.ts ***!
      \**********************************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function pFW0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "bj1g");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "Bz9F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(activatedRoute, router) {
          _classCallCheck(this, ConfirmPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mentorName = this.activatedRoute.snapshot.paramMap.get('name');
            this.mentorEmail = this.activatedRoute.snapshot.paramMap.get('email');
            this.mentorPhoto = this.activatedRoute.snapshot.paramMap.get('photo');
            console.log('Mentor Photo:');
            console.log(this.mentorName); // setTimeout(() => {
            //   this.router.navigate(['/home/mentors']);
            // }, 9000);
          }
        }, {
          key: "returnToMentors",
          value: function returnToMentors() {
            this.router.navigate(['/home/mentors']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "u5jz":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/profile/change-email/confirm/confirm-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function u5jz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "QGB6");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "vQgF":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm/confirm.page.ts ***!
      \******************************************************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function vQgF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "0IYb");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "33pv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToProfile",
          value: function backToProfile() {
            console.log('Going back to profile');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPage);
      /***/
    },

    /***/
    "wNpw":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/profile/change-school/confirm/confirm.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function wNpw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXNjaG9vbC9jb25maXJtL2NvbmZpcm0ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "zr+d":
    /*!****************************************************************!*\
      !*** ./src/app/pages/profile/resume/confirm/confirm.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function zrD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=confirm-confirm-module-es5.js.map