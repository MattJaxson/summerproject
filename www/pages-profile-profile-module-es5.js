function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid style=\"--ion-grid-padding: 0px\" class=\"ion-text-center ion-hide-md-up\">\n\n    <ion-row class=\"header-half ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <div>\n              <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n                </button>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col id=\"profile-info\" push=\"0.5\" size=\"11\">\n\n        <h4>Profile Information: </h4>\n        <br>\n\n        <p><span>Name:</span> {{userObject.fullName}}</p>\n        <p><span>Email:</span> {{userObject.email}}</p>\n        <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n        <p><span>Address:</span> {{userObject.addressOne}}, {{userObject.addressTwo}}</p>\n        <p><span>Phone:</span> {{userObject.phone}}</p>\n        <p><span>City:</span> {{userObject.city}}</p>\n        <p><span>State:</span> {{userObject.state}}</p>\n        <p><span>Zip:</span> {{userObject.zip}}</p>\n        <p><span>School:</span> {{userObject.school}}</p>\n        <p><span>Grade:</span> {{userObject.grade}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-button class=\"logout-button\" (click)=\"confirmLogout()\">\n          Logout\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid style=\"--ion-grid-padding: 0px; max-width: 1024px;\" class=\"ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 5%;\">\n\n        <ion-col size=\"4\">\n          <div>\n              <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n              </button>\n          </div>\n        </ion-col>\n\n\n        <ion-col push=\"2\" size=\"6\">\n          <ion-button class=\"blue-button\" style=\"display: inline-block; width: 200px; margin-right: 50px; animation-delay: 2.5s;\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n          <ion-button class=\"blue-button\" style=\"display: inline-block; width: 200px; animation-delay: 3s;\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col id=\"profile-info\" push=\"1\" size=\"10\">\n\n          <h4>Profile Information: </h4>\n          <br>\n\n          <p><span>Name:</span> {{userObject.fullName}}</p>\n          <p><span>Email:</span> {{userObject.email}}</p>\n          <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n          <p><span>Address:</span> {{userObject.addressOne}}, {{userObject.addressTwo}}</p>\n          <p><span>Phone:</span> {{userObject.phone}}</p>\n          <p><span>City:</span> {{userObject.city}}</p>\n          <p><span>State:</span> {{userObject.state}}</p>\n          <p><span>Zip:</span> {{userObject.zip}}</p>\n          <p><span>School:</span> {{userObject.school}}</p>\n          <p><span>Grade:</span> {{userObject.grade}}</p>\n        </ion-col>\n\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button style=\"--background: white; border-radius: 5px; border: 1px solid #d3d3d3; color: #e4405f; margin-bottom: 50px;\" class=\"orange-button\"  (click)=\"confirmLogout()\">\n            Logout\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }, {
      path: 'change-email',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-email-change-email-change-email-module */
        "change-email-change-email-change-email-module").then(__webpack_require__.bind(null,
        /*! ./change-email/change-email/change-email.module */
        "./src/app/pages/profile/change-email/change-email/change-email.module.ts")).then(function (m) {
          return m.ChangeEmailPageModule;
        });
      }
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-password-change-password-change-password-module */
        "change-password-change-password-change-password-module").then(__webpack_require__.bind(null,
        /*! ./change-password/change-password/change-password.module */
        "./src/app/pages/profile/change-password/change-password/change-password.module.ts")).then(function (m) {
          return m.ChangePasswordPageModule;
        });
      }
    }, {
      path: 'change-phone/:phone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-phone-change-phone-change-phone-module */
        "change-phone-change-phone-change-phone-module").then(__webpack_require__.bind(null,
        /*! ./change-phone/change-phone/change-phone.module */
        "./src/app/pages/profile/change-phone/change-phone/change-phone.module.ts")).then(function (m) {
          return m.ChangePhonePageModule;
        });
      }
    }, {
      path: 'change-school/:school/:grade',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-school-change-school-change-school-module */
        "change-school-change-school-change-school-module").then(__webpack_require__.bind(null,
        /*! ./change-school/change-school/change-school.module */
        "./src/app/pages/profile/change-school/change-school/change-school.module.ts")).then(function (m) {
          return m.ChangeSchoolPageModule;
        });
      }
    }, {
      path: 'change-profile-picture/:profilePicture',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | change-profile-picture-change-profile-picture-change-profile-picture-module */
        [__webpack_require__.e("common"), __webpack_require__.e("change-profile-picture-change-profile-picture-change-profile-picture-module")]).then(__webpack_require__.bind(null,
        /*! ./change-profile-picture/change-profile-picture/change-profile-picture.module */
        "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.module.ts")).then(function (m) {
          return m.ChangeProfilePicturePageModule;
        });
      }
    }, {
      path: 'resume',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resume-resume-resume-module */
        "resume-resume-resume-module").then(__webpack_require__.bind(null,
        /*! ./resume/resume/resume.module */
        "./src/app/pages/profile/resume/resume/resume.module.ts")).then(function (m) {
          return m.ResumePageModule;
        });
      }
    }, {
      path: 'logout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | logout-logout-logout-module */
        "logout-logout-logout-module").then(__webpack_require__.bind(null,
        /*! ./logout/logout/logout.module */
        "./src/app/pages/profile/logout/logout/logout.module.ts")).then(function (m) {
          return m.LogoutPageModule;
        });
      }
    }, // Keep Resume pages seperate?
    {
      path: 'view-resume',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resume-view-resume-view-resume-module */
        "resume-view-resume-view-resume-module").then(__webpack_require__.bind(null,
        /*! ./resume/view-resume/view-resume.module */
        "./src/app/pages/profile/resume/view-resume/view-resume.module.ts")).then(function (m) {
          return m.ViewResumePageModule;
        });
      }
    }, {
      path: 'update-resume',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | resume-update-resume-update-resume-module */
        [__webpack_require__.e("common"), __webpack_require__.e("resume-update-resume-update-resume-module")]).then(__webpack_require__.bind(null,
        /*! ./resume/update-resume/update-resume.module */
        "./src/app/pages/profile/resume/update-resume/update-resume.module.ts")).then(function (m) {
          return m.UpdateResumePageModule;
        });
      }
    }, // Combine with profile pictures directory?
    {
      path: 'confirm-photo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-profile-picture-confirm-photo-confirm-photo-module */
        "change-profile-picture-confirm-photo-confirm-photo-module").then(__webpack_require__.bind(null,
        /*! ./change-profile-picture/confirm-photo/confirm-photo.module */
        "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.module.ts")).then(function (m) {
          return m.ConfirmPhotoPageModule;
        });
      }
    }, {
      path: 'change-address/:addressOne/:addressTwo/:city/:state/:zip',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-address-change-address-module */
        "change-address-change-address-module").then(__webpack_require__.bind(null,
        /*! ./change-address/change-address.module */
        "./src/app/pages/profile/change-address/change-address.module.ts")).then(function (m) {
          return m.ChangeAddressPageModule;
        });
      }
    }, {
      path: 'edit-profile-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-profile-page-edit-profile-page-module */
        "edit-profile-page-edit-profile-page-module").then(__webpack_require__.bind(null,
        /*! ./edit-profile-page/edit-profile-page.module */
        "./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts")).then(function (m) {
          return m.EditProfilePagePageModule;
        });
      }
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");
    /* harmony import */


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfilePageRoutingModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
      }])],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  display: none;\n}\nion-header ion-buttons ion-button {\n  color: white;\n}\nion-toolbar {\n  --color: #005191;\n}\nion-alert {\n  --background: #e4405f;\n}\n#profile-info {\n  height: auto;\n  margin-top: 20px;\n  text-align: left;\n  padding: 25px;\n}\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 0;\n  -webkit-animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\np {\n  font-size: 1.4em;\n  opacity: 0;\n  transition: 0.5s;\n  -webkit-animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n.header-half {\n  height: auto;\n  background: #edf3f8;\n  padding: 50px 0 50px 0;\n}\n.header-half .orange-button {\n  -webkit-animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n          animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n}\nspan {\n  color: #005191;\n  font-weight: 600;\n  width: 100px;\n  display: inline-block;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 0 auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n#change-pro-pic-button {\n  width: 40px;\n  height: 40px;\n  background: #faa71b;\n  color: white;\n  padding: 0;\n  font-size: 1.5em;\n  font-weight: 400;\n  border-radius: 100px;\n  display: inline-block;\n  position: relative;\n  top: -20px;\n  left: 25px;\n  opacity: 0;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n}\n.back-button {\n  opacity: 0;\n  -webkit-animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n#edit-profile-button {\n  --background: #d3d3d3;\n  --color: #333;\n  font-size: 0.6em;\n}\n.logout-button {\n  color: #e4405f;\n  --background: none;\n  height: 45px;\n  width: 120px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 39%;\n}\n@-webkit-keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1.2em;\n  }\n\n  span {\n    color: #005191;\n    font-weight: 600;\n    width: 90px;\n    display: inline-block;\n    text-align: right;\n    margin-right: 10px;\n  }\n}\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhGQUFBO1VBQUEsc0ZBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDREY7QURHRTtFQUNFLGlHQUFBO1VBQUEseUZBQUE7QUNESjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDhGQUFBO1VBQUEsc0ZBQUE7QUNIRjtBRE1BO0VBQ0UsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUNIRjtBRE1BO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFO0lBQ0UsMkJBQUE7RUNIRjtFREtBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDSEY7QUFDRjtBREpBO0VBQ0U7SUFDRSwyQkFBQTtFQ0hGO0VES0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNIRjtBQUNGO0FETUE7RUFDRTtJQUNFLDRCQUFBO0VDSkY7RURNQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ0pGO0FBQ0Y7QURIQTtFQUNFO0lBQ0UsNEJBQUE7RUNKRjtFRE1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSw0QkFBQTtFQ0xGO0VET0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNMRjtBQUNGO0FERkE7RUFDRTtJQUNFLDRCQUFBO0VDTEY7RURPQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsNEJBQUE7RUNORjtFRFFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDTkY7QUFDRjtBRERBO0VBQ0U7SUFDRSw0QkFBQTtFQ05GO0VEUUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLDRCQUFBO0VDUEY7RURTQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ1BGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsNEJBQUE7RUNQRjtFRFNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0U7SUFDRSxnQkFBQTtFQ1JGOztFRFVDO0lBQ0MsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ1BGO0FBQ0Y7QURXQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ1RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGlvbi1idXR0b25zIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuXG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiB0ZXh0LXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5cbi5oZWFkZXItaGFsZiB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgcGFkZGluZzogNTBweCAwIDUwcHggMDtcblxuICAub3JhbmdlLWJ1dHRvbntcbiAgICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgLjlzIGZvcndhcmRzO1xuICB9XG59XG5cblxuc3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgYW5pbWF0aW9uOiBwaWMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjc1cyBmb3J3YXJkcztcbn1cblxuLmJhY2stYnV0dG9ue1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbiNlZGl0LXByb2ZpbGUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAtLWNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAzOSU7XG59XG5cbkBrZXlmcmFtZXMgdGV4dC1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwaWMtc2xpZGUtcmlnaHQge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgIHNwYW4ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjaGFuZ2UtcHJvLXBpYy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuXG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiB0ZXh0LXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5cbi5oZWFkZXItaGFsZiB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgcGFkZGluZzogNTBweCAwIDUwcHggMDtcbn1cbi5oZWFkZXItaGFsZiAub3JhbmdlLWJ1dHRvbiB7XG4gIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjlzIGZvcndhcmRzO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4jY2hhbmdlLXByby1waWMtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDI1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNzVzIGZvcndhcmRzO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbiNlZGl0LXByb2ZpbGUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAtLWNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAzOSU7XG59XG5cbkBrZXlmcmFtZXMgdGV4dC1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBwaWMtc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cblxuICBzcGFuIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjaGFuZ2UtcHJvLXBpYy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(auth, profile, storage, router, toast, alert, loading, navCtrl) {
        _classCallCheck(this, ProfilePage);

        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.userObject = {
          fullName: '',
          addressOne: '',
          addressTwo: '',
          phone: '',
          city: '',
          state: '',
          zip: '',
          gender: '',
          dob: '',
          school: '',
          grade: '',
          profilePicture: '',
          resume: '',
          email: ''
        };
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.detailsSub = this.profile.getUserDetails().subscribe(function (res) {
            console.log(res);
            var fullName = res['fullName'];
            var addressOne = res['addressOne'];
            var addressTwo = res['addressTwo'];
            var phone = res['phone'];
            var city = res['city'];
            var state = res['state'];
            var zip = res['zip'];
            var gender = res['gender'];
            var dob = res['dob'];
            var school = res['school'];
            var grade = res['grade'];
            var profilePicture = res['profilePicture'];
            var resume = res['resume'];
            var email = res['email']; // Send initial profile values to Profile Service;
            // Have to initial these values from the Profile Component

            _this.profile.fullName.next(fullName);

            _this.profile.addressOne.next(addressOne);

            _this.profile.addressTwo.next(addressTwo);

            _this.profile.phone.next(phone);

            _this.profile.city.next(city);

            _this.profile.state.next(state);

            _this.profile.zip.next(zip);

            _this.profile.gender.next(gender);

            _this.profile.dob.next(dob);

            _this.profile.school.next(school);

            _this.profile.grade.next(grade);

            _this.profile.profilePicture.next(profilePicture);

            _this.profile.resume.next(resume);

            _this.profile.email.next(email); // Subscribe to all the B.Subjects to get live updates of value changes.


            _this.profile.fullName.subscribe(function (data) {
              _this.userObject.fullName = data;
            });

            _this.profile.addressOne.subscribe(function (data) {
              _this.userObject.addressOne = data;
            });

            _this.profile.addressTwo.subscribe(function (data) {
              _this.userObject.addressTwo = data;
            });

            _this.profile.phone.subscribe(function (data) {
              _this.userObject.phone = data;
            });

            _this.profile.city.subscribe(function (data) {
              _this.userObject.city = data;
            });

            _this.profile.state.subscribe(function (data) {
              _this.userObject.state = data;
            });

            _this.profile.zip.subscribe(function (data) {
              _this.userObject.zip = data;
            });

            _this.profile.gender.subscribe(function (data) {
              _this.userObject.gender = data;
            });

            _this.profile.dob.subscribe(function (data) {
              _this.userObject.dob = data;
            });

            _this.profile.school.subscribe(function (data) {
              _this.userObject.school = data;
            });

            _this.profile.grade.subscribe(function (data) {
              _this.userObject.grade = data;
            });

            _this.profile.profilePicture.subscribe(function (data) {
              _this.userObject.profilePicture = data;
            });

            _this.profile.resume.subscribe(function (data) {
              _this.userObject.resume = data;
            });

            _this.profile.email.subscribe(function (data) {
              _this.userObject.email = data;
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "clearToken",
        value: function clearToken() {
          // ONLY FOR TESTING!
          this.storage.remove('access_token');
          var toast = this.toast.create({
            message: 'JWT removed',
            duration: 3000
          });
          toast.then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "editPage",
        value: function editPage() {
          this.router.navigate(['/home/profile/edit-profile-page']);
        }
      }, {
        key: "changeProfilePicture",
        value: function changeProfilePicture() {
          console.log('Navigating to Change Profile Page');
          this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
        }
      }, {
        key: "updateResume",
        value: function updateResume() {
          console.log('Navigating to Change Resume Page');
          this.router.navigate(['/home/profile/view-resume']);
        }
      }, {
        key: "confirmLogout",
        value: function confirmLogout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var toast, loading, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    toast = this.toast.create({
                      message: 'User has been logged out',
                      duration: 3000
                    });
                    _context.next = 3;
                    return this.loading.create({
                      message: 'Logging out...',
                      duration: 1000
                    });

                  case 3:
                    loading = _context.sent;
                    _context.next = 6;
                    return this.alert.create({
                      header: 'Logout',
                      cssClass: 'alert',
                      message: 'Are you sure you want to logout?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancelling logout');

                          _this2.profile.fullName.next('');

                          _this2.profile.addressOne.next('');

                          _this2.profile.addressTwo.next('');

                          _this2.profile.phone.next('');

                          _this2.profile.city.next('');

                          _this2.profile.state.next('');

                          _this2.profile.zip.next('');

                          _this2.profile.gender.next('');

                          _this2.profile.dob.next('');

                          _this2.profile.school.next('');

                          _this2.profile.grade.next('');

                          _this2.profile.profilePicture.next('');

                          _this2.profile.resume.next('');

                          _this2.profile.email.next('');

                          _this2.router.navigate(['/home/profile']);
                        }
                      }, {
                        text: 'Logout',
                        handler: function handler() {
                          console.log('Logging out');

                          _this2.auth.logout();

                          loading.present();
                          toast.then(function (t) {
                            return t.present();
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context.sent;
                    _context.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map