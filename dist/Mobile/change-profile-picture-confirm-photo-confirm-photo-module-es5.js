(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-profile-picture-confirm-photo-confirm-photo-module"], {
    /***/
    "0m15":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Confirm Photo</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        Cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.5\" size=\"2.5\">\n        <h1>Confirm Photo</h1>\n      </ion-col>\n      <ion-col push=\"2.8\" size=\"2\">\n        <ion-button class=\"back-button\" (click)=\"cancel()\">\n           Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" id=\"main-content-col\">\n        <div style=\"width: 100px; height: 100px; border-radius: 100px;background: lightgrey; margin: 30px auto 0px;\">\n          New picture goes here\n        </div>\n        <h6 class=\"text-header\">Are you sure you want to use this photo?</h6>\n        <ion-button (click)=\"uploadPhoto()\" class=\"orange-button\" id=\"next-button\" style=\"margin-right:16px;\">YES</ion-button>\n        <ion-button (click)=\"takeAnotherPhoto()\" class=\"orange-button\" id=\"next-button\">TAKE ANOTHER PHOTO</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "QHZ2":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ConfirmPhotoPageRoutingModule */

    /***/
    function QHZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPhotoPageRoutingModule", function () {
        return ConfirmPhotoPageRoutingModule;
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


      var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-photo.page */
      "j5oa");

      var routes = [{
        path: '',
        component: _confirm_photo_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPhotoPage"]
      }];

      var ConfirmPhotoPageRoutingModule = function ConfirmPhotoPageRoutingModule() {
        _classCallCheck(this, ConfirmPhotoPageRoutingModule);
      };

      ConfirmPhotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPhotoPageRoutingModule);
      /***/
    },

    /***/
    "RA/u":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: ConfirmPhotoPageModule */

    /***/
    function RAU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPhotoPageModule", function () {
        return ConfirmPhotoPageModule;
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


      var _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-photo-routing.module */
      "QHZ2");
      /* harmony import */


      var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-photo.page */
      "j5oa");

      var ConfirmPhotoPageModule = function ConfirmPhotoPageModule() {
        _classCallCheck(this, ConfirmPhotoPageModule);
      };

      ConfirmPhotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPhotoPageRoutingModule"]],
        declarations: [_confirm_photo_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPhotoPage"]]
      })], ConfirmPhotoPageModule);
      /***/
    },

    /***/
    "j5oa":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.ts ***!
      \******************************************************************************************/

    /*! exports provided: ConfirmPhotoPage */

    /***/
    function j5oa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPhotoPage", function () {
        return ConfirmPhotoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_photo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm-photo.page.html */
      "0m15");
      /* harmony import */


      var _confirm_photo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-photo.page.scss */
      "ymiP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPhotoPage = /*#__PURE__*/function () {
        function ConfirmPhotoPage(router) {
          _classCallCheck(this, ConfirmPhotoPage);

          this.router = router;
        }

        _createClass(ConfirmPhotoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "uploadPhoto",
          value: function uploadPhoto() {
            console.log('User has successfully uploaded photo from their phones camera');
            this.router.navigate(['/home/profile/change-profile-picture/confirm']);
          }
        }, {
          key: "takeAnotherPhoto",
          value: function takeAnotherPhoto() {
            //  Access Gallery
            //  Replace last photo taken with another photo
            console.error("TODO: takeAnotherPhoto() not implemented yet");
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('change photo cancelled');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPhotoPage;
      }();

      ConfirmPhotoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-photo',
        template: _raw_loader_confirm_photo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_photo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ConfirmPhotoPage);
      /***/
    },

    /***/
    "ymiP":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ymiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\nh6.text-header {\n  font-size: 1.3em;\n  margin: 30px auto;\n  padding: unset;\n}\n\n.orange-button {\n  width: unset;\n}\n\n@media screen and (max-width: 384px) {\n  #main-content-col ion-button:last-child {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1waWN0dXJlL2NvbmZpcm0tcGhvdG8vY29uZmlybS1waG90by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxnQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2NoYW5nZS1wcm9maWxlLXBpY3R1cmUvY29uZmlybS1waG90by9jb25maXJtLXBob3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oNi50ZXh0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBwYWRkaW5nOiB1bnNldDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgICAjbWFpbi1jb250ZW50LWNvbCBpb24tYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=change-profile-picture-confirm-photo-confirm-photo-module-es5.js.map