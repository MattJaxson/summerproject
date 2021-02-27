(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-sign-up-personal-info-personal-info-module"], {
    /***/
    "QiYm":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: PersonalInfoPageRoutingModule */

    /***/
    function QiYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalInfoPageRoutingModule", function () {
        return PersonalInfoPageRoutingModule;
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


      var _personal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./personal-info.page */
      "rmvN");

      var routes = [{
        path: '',
        component: _personal_info_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoPage"]
      }, {
        path: 'profile-picture',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-picture-profile-picture-module */
          [__webpack_require__.e("default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83"), __webpack_require__.e("common"), __webpack_require__.e("profile-picture-profile-picture-module")]).then(__webpack_require__.bind(null,
          /*! ../profile-picture/profile-picture.module */
          "V0uV")).then(function (m) {
            return m.ProfilePicturePageModule;
          });
        }
      }];

      var PersonalInfoPageRoutingModule = function PersonalInfoPageRoutingModule() {
        _classCallCheck(this, PersonalInfoPageRoutingModule);
      };

      PersonalInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PersonalInfoPageRoutingModule);
      /***/
    },

    /***/
    "XPif":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XPif(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-text-center\">\n\n    <!-- Header -->\n    <ion-row class=\"header ion-justify-content-center\">\n      <ion-col size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n        <h6 class=\"text-header\">Please enter your profile information.</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Form -->\n      <ion-col style=\"margin-top: 50px;\" size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n        <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"goToProfilePicturePage(this.userInfoForm.value)\">\n\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input\n              #ioninput\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              formControlName=\"fullName\"\n              placeholder=\"First & Last Name\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"gender\"  placeholder=\"Gender\">\n                    <ion-select-option value=\"female\">Female</ion-select-option>\n                    <ion-select-option value=\"male\">Male</ion-select-option>\n                  </ion-select>\n            </ion-item>\n\n            <ion-item>\n                  <ion-label>Date of Birth</ion-label>\n                  <ion-datetime\n                    required\n                    min=\"2000\"\n                    displayFormat=\"DDD. MMM DD, YY\"\n                    placeholder=\"Select Date\"\n                    formControlName=\"dob\"\n                    monthShortNames=\"Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec\"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                required\n                formControlName=\"school\"    placeholder=\"School\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"grade\"   placeholder=\"Grade\">\n                  <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\n                  <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\n                  <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\n                  <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\n                  <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\n                  <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\n                  <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\n                  <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\n\n                  </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n              <ion-textarea\n              autogrow=\"true\"\n              autocapitalize=\"true\"\n              rows=\"5\"\n              spellcheck=\"true\"\n              wrap=\"soft\"\n              type=\"text\"\n              maxlength=\"500\"\n              placeholder=\"Tell us about yourself\" formControlName=\"about\">\n            </ion-textarea>\n          </ion-item>\n          <p class=\"char-limit\">500 character limit</p>\n\n            </ion-list>\n            <ion-button class=\"orange-button\" type=\"submit\">NEXT</ion-button><br>\n            <ion-button (click)=\"cancel()\" id=\"cancel-button\" class=\"blue-button\" slot=\"end\">\n                cancel\n              </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "a3/p":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts ***!
      \**************************************************************************/

    /*! exports provided: PersonalInfoPageModule */

    /***/
    function a3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function () {
        return PersonalInfoPageModule;
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


      var _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./personal-info-routing.module */
      "QiYm");
      /* harmony import */


      var _personal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./personal-info.page */
      "rmvN");

      var PersonalInfoPageModule = function PersonalInfoPageModule() {
        _classCallCheck(this, PersonalInfoPageModule);
      };

      PersonalInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInfoPageRoutingModule"]],
        declarations: [_personal_info_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoPage"]]
      })], PersonalInfoPageModule);
      /***/
    },

    /***/
    "dUrw":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function dUrw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h6 {\n  padding: unset;\n}\n\n.header {\n  background: #edf3f8;\n  height: auto;\n  text-align: center;\n}\n\n.orange-button, .blue-button {\n  margin: 25px 0 25px 0;\n}\n\n.blue-button {\n  margin: 25px 0 100px 0;\n}\n\n.text-header {\n  background: #edf3f8;\n  padding: 30px 0;\n  color: #666;\n  z-index: 999;\n  margin: 0 auto;\n}\n\n.char-limit {\n  float: right;\n  position: relative;\n  top: -20px;\n  color: #e4405f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BlcnNvbmFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InBlcnNvbmFsLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDYge1xuICAgIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuLm9yYW5nZS1idXR0b24sIC5ibHVlLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyNXB4IDAgMjVweCAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICAgIG1hcmdpbjogMjVweCAwIDEwMHB4IDA7XG59XG5cbi50ZXh0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgei1pbmRleDogOTk5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jaGFyLWxpbWl0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgY29sb3I6ICNlNDQwNWY7XG59Il19 */";
      /***/
    },

    /***/
    "rmvN":
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts ***!
      \************************************************************************/

    /*! exports provided: PersonalInfoPage */

    /***/
    function rmvN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalInfoPage", function () {
        return PersonalInfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_personal_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./personal-info.page.html */
      "XPif");
      /* harmony import */


      var _personal_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personal-info.page.scss */
      "dUrw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      "lGQG");

      var PersonalInfoPage = /*#__PURE__*/function () {
        function PersonalInfoPage( // private auth: AuthService,
        formBuilder, router, auth) {
          _classCallCheck(this, PersonalInfoPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.auth = auth;
          this.validationMessasges = {
            password: [// tslint:disable-next-line: max-line-length
            {
              type: 'pattern',
              message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'
            }],
            phone: [// tslint:disable-next-line: max-line-length
            {
              type: 'text',
              message: 'Phone Number has to be 10 digits (xxx) xxx - xxxx'
            }]
          };
          this.fullNamePattern = '/^([^0-9]*)$/';
          this.phonePattern = '';
        }

        _createClass(PersonalInfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userInfoForm = this.formBuilder.group({
              fullName: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
              gender: '',
              // Date of Birth
              dob: '',
              school: ['Wayne', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              grade: ['Senior', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              about: ['Wassup', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.formOnChanges();
          }
        }, {
          key: "goToProfilePicturePage",
          value: function goToProfilePicturePage(data) {
            console.log(data);
            this.auth.getPersonalInfo(data);
            this.router.navigate(['/personal-info/profile-picture']);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('Sign up cancelled');
            this.router.navigate(['']);
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            console.log(this.userInfoForm);
          }
        }]);

        return PersonalInfoPage;
      }();

      PersonalInfoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      PersonalInfoPage.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['ioninput', {
            "static": false
          }]
        }]
      };
      PersonalInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personal-info',
        template: _raw_loader_personal_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], PersonalInfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-sign-up-personal-info-personal-info-module-es5.js.map