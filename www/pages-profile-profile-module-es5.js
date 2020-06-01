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


    __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid style=\"--ion-grid-padding: 0px\" class=\"ion-text-center ion-hide-md-up\">\n\n    <ion-row class=\"header-half ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <div>\n              <img id=\"profile-picture\" src=\"../../../assets/aaron.jpg\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n                </button>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col id=\"profile-info\" push=\"0.5\" size=\"11\">\n\n        <h4>Profile Information: </h4>\n        <br>\n\n        <p><span>Name:</span> {{userObject.fullName}}</p>\n        <p><span>Email:</span> {{userObject.email}}</p>\n        <p><span>Gender:</span> {{userObject.gender}}</p>\n        <p><span>Address:</span> {{userObject.addressOne}}, {{userObject.addressTwo}}</p>\n        <p><span>Phone:</span> {{userObject.phone}}</p>\n        <p><span>City:</span> {{userObject.city}}</p>\n        <p><span>State:</span> {{userObject.state}}</p>\n        <p><span>Zip:</span> {{userObject.zip}}</p>\n        <p><span>School:</span> {{userObject.school}}</p>\n        <p><span>Grade:</span> {{userObject.grade}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-button class=\"logout-button\" (click)=\"confirmLogout()\">\n          Logout\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid style=\"--ion-grid-padding: 0px; max-width: 1024px;\" class=\"ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 5%;\">\n\n        <ion-col size=\"4\">\n          <div>\n              <img id=\"profile-picture\" src=\"../../assets/batman-pro-pic.png\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n              </button>\n          </div>\n        </ion-col>\n\n\n        <ion-col push=\"2\" size=\"6\">\n          <ion-button class=\"back-button\" style=\"display: inline-block; width: 130px; animation-delay: 2.5s;\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n          <ion-button class=\"back-button\" style=\"display: inline-block; width: 130px; animation-delay: 3s;\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col id=\"profile-info\" push=\"1\" size=\"10\">\n\n          <h4>Profile Information: </h4>\n          <br>\n\n          <p><span>Name:</span> {{userObject.fullName}}</p>\n          <p><span>Email:</span> {{userObject.email}}</p>\n          <p><span>Gender:</span> {{userObject.gender}}</p>\n          <p><span>Address:</span> {{userObject.addressOne}}, {{userObject.addressTwo}}</p>\n          <p><span>Phone:</span> {{userObject.phone}}</p>\n          <p><span>City:</span> {{userObject.city}}</p>\n          <p><span>State:</span> {{userObject.state}}</p>\n          <p><span>Zip:</span> {{userObject.zip}}</p>\n          <p><span>School:</span> {{userObject.school}}</p>\n          <p><span>Grade:</span> {{userObject.grade}}</p>\n        </ion-col>\n\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button style=\"--background: white; border-radius: 5px; border: 1px solid #d3d3d3; color: #e4405f; margin-bottom: 50px;\" class=\"orange-button\"  (click)=\"confirmLogout()\">\n            Logout\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>";
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

    const routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }, {
      path: 'change-email',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-email-change-email-change-email-module */
      "change-email-change-email-change-email-module").then(__webpack_require__.bind(null,
      /*! ./change-email/change-email/change-email.module */
      "./src/app/pages/profile/change-email/change-email/change-email.module.ts")).then(m => m.ChangeEmailPageModule)
    }, {
      path: 'change-password',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-password-change-password-change-password-module */
      "change-password-change-password-change-password-module").then(__webpack_require__.bind(null,
      /*! ./change-password/change-password/change-password.module */
      "./src/app/pages/profile/change-password/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
    }, {
      path: 'change-phone/:phone',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-phone-change-phone-change-phone-module */
      "change-phone-change-phone-change-phone-module").then(__webpack_require__.bind(null,
      /*! ./change-phone/change-phone/change-phone.module */
      "./src/app/pages/profile/change-phone/change-phone/change-phone.module.ts")).then(m => m.ChangePhonePageModule)
    }, {
      path: 'change-school/:school/:grade',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-school-change-school-change-school-module */
      "change-school-change-school-change-school-module").then(__webpack_require__.bind(null,
      /*! ./change-school/change-school/change-school.module */
      "./src/app/pages/profile/change-school/change-school/change-school.module.ts")).then(m => m.ChangeSchoolPageModule)
    }, {
      path: 'change-profile-picture/:profilePicture',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-profile-picture-change-profile-picture-change-profile-picture-module */
      "change-profile-picture-change-profile-picture-change-profile-picture-module").then(__webpack_require__.bind(null,
      /*! ./change-profile-picture/change-profile-picture/change-profile-picture.module */
      "./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.module.ts")).then(m => m.ChangeProfilePicturePageModule)
    }, {
      path: 'resume/:resume',
      loadChildren: () => __webpack_require__.e(
      /*! import() | resume-resume-resume-module */
      "resume-resume-resume-module").then(__webpack_require__.bind(null,
      /*! ./resume/resume/resume.module */
      "./src/app/pages/profile/resume/resume/resume.module.ts")).then(m => m.ResumePageModule)
    }, {
      path: 'logout',
      loadChildren: () => __webpack_require__.e(
      /*! import() | logout-logout-logout-module */
      "logout-logout-logout-module").then(__webpack_require__.bind(null,
      /*! ./logout/logout/logout.module */
      "./src/app/pages/profile/logout/logout/logout.module.ts")).then(m => m.LogoutPageModule)
    }, // Keep Resume pages seperate?
    {
      path: 'view-resume',
      loadChildren: () => __webpack_require__.e(
      /*! import() | resume-view-resume-view-resume-module */
      "resume-view-resume-view-resume-module").then(__webpack_require__.bind(null,
      /*! ./resume/view-resume/view-resume.module */
      "./src/app/pages/profile/resume/view-resume/view-resume.module.ts")).then(m => m.ViewResumePageModule)
    }, {
      path: 'update-resume',
      loadChildren: () => __webpack_require__.e(
      /*! import() | resume-update-resume-update-resume-module */
      "resume-update-resume-update-resume-module").then(__webpack_require__.bind(null,
      /*! ./resume/update-resume/update-resume.module */
      "./src/app/pages/profile/resume/update-resume/update-resume.module.ts")).then(m => m.UpdateResumePageModule)
    }, // Combine with profile pictures directory?
    {
      path: 'confirm-photo',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-profile-picture-confirm-photo-confirm-photo-module */
      "change-profile-picture-confirm-photo-confirm-photo-module").then(__webpack_require__.bind(null,
      /*! ./change-profile-picture/confirm-photo/confirm-photo.module */
      "./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.module.ts")).then(m => m.ConfirmPhotoPageModule)
    }, {
      path: 'change-address/:addressOne/:addressTwo/:city/:state/:zip',
      loadChildren: () => __webpack_require__.e(
      /*! import() | change-address-change-address-module */
      "change-address-change-address-module").then(__webpack_require__.bind(null,
      /*! ./change-address/change-address.module */
      "./src/app/pages/profile/change-address/change-address.module.ts")).then(m => m.ChangeAddressPageModule)
    }, {
      path: 'edit-profile-page',
      loadChildren: () => __webpack_require__.e(
      /*! import() | edit-profile-page-edit-profile-page-module */
      "edit-profile-page-edit-profile-page-module").then(__webpack_require__.bind(null,
      /*! ./edit-profile-page/edit-profile-page.module */
      "./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts")).then(m => m.EditProfilePagePageModule)
    }];
    let ProfilePageRoutingModule = class ProfilePageRoutingModule {};
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

    let ProfilePageModule = class ProfilePageModule {};
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


    __webpack_exports__["default"] = "ion-header {\n  display: none;\n}\nion-header ion-buttons ion-button {\n  color: white;\n}\nion-toolbar {\n  --color: #005191;\n}\nion-alert {\n  --background: #e4405f;\n}\n#profile-info {\n  height: auto;\n  margin-top: 20px;\n  text-align: left;\n  padding: 25px;\n}\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 0;\n  -webkit-animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\np {\n  font-size: 1.4em;\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n.header-half {\n  height: auto;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(rgba(230, 230, 230, 0.4)), to(rgba(200, 200, 200, 0.9)));\n  background-image: linear-gradient(to bottom right, rgba(230, 230, 230, 0.4), rgba(200, 200, 200, 0.9));\n  background-attachment: fixed;\n  padding: 50px 0 50px 0;\n}\n.header-half .orange-button {\n  -webkit-animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n          animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n}\nspan {\n  color: #005191;\n  font-weight: 600;\n  width: 100px;\n  display: inline-block;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 0 auto;\n  display: block;\n  opacity: 0;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n#change-pro-pic-button {\n  width: 40px;\n  height: 40px;\n  background: #faa71b;\n  color: white;\n  padding: 0;\n  font-size: 1.5em;\n  font-weight: 400;\n  border-radius: 100px;\n  display: inline-block;\n  position: relative;\n  top: -20px;\n  left: 25px;\n  opacity: 0;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n}\n.back-button {\n  opacity: 0;\n  -webkit-animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n#edit-profile-button {\n  --background: #d3d3d3;\n  --color: #333;\n  font-size: 0.6em;\n}\n.logout-button {\n  color: #e4405f;\n  --background: none;\n  height: 45px;\n  width: 120px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 39%;\n}\n@-webkit-keyframes text-slide-up {\n  0% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n@keyframes text-slide-up {\n  0% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n@-webkit-keyframes pic-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes pic-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@-webkit-keyframes header-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes header-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n@keyframes buttons-slide-up {\n  0% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@keyframes buttons-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1.2em;\n  }\n\n  span {\n    color: #005191;\n    font-weight: 600;\n    width: 90px;\n    display: inline-block;\n    text-align: right;\n    margin-right: 10px;\n  }\n}\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhGQUFBO1VBQUEsc0ZBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJGQUFBO1VBQUEsbUZBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLGdJQUFBO0VBQUEsc0dBQUE7RUFJQSw0QkFBQTtFQUNBLHNCQUFBO0FDSkY7QURNRTtFQUNFLGlHQUFBO1VBQUEseUZBQUE7QUNKSjtBRFNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDTkY7QURTQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSw2RkFBQTtVQUFBLHFGQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw4RkFBQTtVQUFBLHNGQUFBO0FDTkY7QURTQTtFQUNFLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDTkY7QURTQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ05GO0FEU0E7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNORjtFRFFBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNORjtBQUNGO0FEREE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNORjtFRFFBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNQRjtFRFNBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNQRjtBQUNGO0FEQUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNQRjtFRFNBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNSRjtFRFVBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNSRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNSRjtFRFVBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNURjtFRFdBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNURjtBQUNGO0FERUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNURjtFRFdBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNURjtBQUNGO0FEWUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNWRjtFRFlBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNWRjtBQUNGO0FER0E7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNWRjtFRFlBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRTtJQUNFLGdCQUFBO0VDWEY7O0VEYUM7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDVkY7QUFDRjtBRGNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VDWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG5cbmlvbi1hbGVydCB7XG4gIC0tYmFja2dyb3VuZDogI2U0NDA1Zjtcbn1cblxuI3Byb2ZpbGUtaW5mbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuaDQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMXMgZm9yd2FyZHM7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHRleHQtc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS41cyBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1oYWxmIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tIHJpZ2h0LFxuICAgIHJnYmEoMjMwLDIzMCwyMzAsMC40KSxcbiAgICByZ2JhKDIwMCwyMDAsMjAwLDAuOSkpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiA1MHB4IDAgNTBweCAwO1xuXG4gIC5vcmFuZ2UtYnV0dG9ue1xuICAgIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAuOXMgZm9yd2FyZHM7XG4gIH1cbn1cblxuXG5zcGFuIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuXG4jY2hhbmdlLXByby1waWMtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDI1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNzVzIGZvcndhcmRzO1xufVxuXG4uYmFjay1idXR0b257XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuI2VkaXQtcHJvZmlsZS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIC0tY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDM5JTtcbn1cblxuQGtleWZyYW1lcyB0ZXh0LXNsaWRlLXVwIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBpYy1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaGVhZGVyLXNsaWRlLXJpZ2h0IHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidXR0b25zLXNsaWRlLXVwIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidXR0b25zLXNsaWRlLXJpZ2h0IHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuICAgc3BhbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzVweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgfVxufSIsImlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG5cbmlvbi1hbGVydCB7XG4gIC0tYmFja2dyb3VuZDogI2U0NDA1Zjtcbn1cblxuI3Byb2ZpbGUtaW5mbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuaDQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMXMgZm9yd2FyZHM7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHRleHQtc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS41cyBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1oYWxmIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNCksIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC45KSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDUwcHggMCA1MHB4IDA7XG59XG4uaGVhZGVyLWhhbGYgLm9yYW5nZS1idXR0b24ge1xuICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC45cyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwaWMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjc1cyBmb3J3YXJkcztcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4jZWRpdC1wcm9maWxlLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDNkMztcbiAgLS1jb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMzklO1xufVxuXG5Aa2V5ZnJhbWVzIHRleHQtc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcGljLXNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFkZXItc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1dHRvbnMtc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1dHRvbnMtc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjY2hhbmdlLXByby1waWMtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICB9XG59Il19 */";
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

    let ProfilePage = class ProfilePage {
      constructor(auth, profile, storage, router, toast, alert, loading, navCtrl) {
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

      ngOnInit() {
        this.profile.getUserDetails().subscribe(res => {
          console.log(res);
          const fullName = res['fullName'];
          const addressOne = res['addressOne'];
          const addressTwo = res['addressTwo'];
          const phone = res['phone'];
          const city = res['city'];
          const state = res['state'];
          const zip = res['zip'];
          const gender = res['gender'];
          const dob = res['dob'];
          const school = res['school'];
          const grade = res['grade'];
          const profilePicture = res['profilePicture'];
          const resume = res['resume'];
          const email = res['email']; // Send initial profile values to Profile Service;
          // Have to initial these values from the Profile Component

          this.profile.fullName.next(fullName);
          this.profile.addressOne.next(addressOne);
          this.profile.addressTwo.next(addressTwo);
          this.profile.phone.next(phone);
          this.profile.city.next(city);
          this.profile.state.next(state);
          this.profile.zip.next(zip);
          this.profile.gender.next(gender);
          this.profile.dob.next(dob);
          this.profile.school.next(school);
          this.profile.grade.next(grade);
          this.profile.profilePicture.next(profilePicture);
          this.profile.resume.next(resume);
          this.profile.email.next(email); // Subscribe to all the B.Subjects to get live updates of value changes.

          this.profile.fullName.subscribe(data => {
            this.userObject.fullName = data;
          });
          this.profile.addressOne.subscribe(data => {
            this.userObject.addressOne = data;
          });
          this.profile.addressTwo.subscribe(data => {
            this.userObject.addressTwo = data;
          });
          this.profile.phone.subscribe(data => {
            this.userObject.phone = data;
          });
          this.profile.city.subscribe(data => {
            this.userObject.city = data;
          });
          this.profile.state.subscribe(data => {
            this.userObject.state = data;
          });
          this.profile.zip.subscribe(data => {
            this.userObject.zip = data;
          });
          this.profile.gender.subscribe(data => {
            this.userObject.gender = data;
          });
          this.profile.dob.subscribe(data => {
            this.userObject.dob = data;
          });
          this.profile.school.subscribe(data => {
            this.userObject.school = data;
          });
          this.profile.grade.subscribe(data => {
            this.userObject.grade = data;
          });
          this.profile.profilePicture.subscribe(data => {
            this.userObject.profilePicture = data;
          });
          this.profile.resume.subscribe(data => {
            this.userObject.resume = data;
          });
          this.profile.email.subscribe(data => {
            this.userObject.email = data;
          });
        });
      }

      ngOnDestroy() {}

      clearToken() {
        // ONLY FOR TESTING!
        this.storage.remove('access_token');
        const toast = this.toast.create({
          message: 'JWT removed',
          duration: 3000
        });
        toast.then(toast => toast.present());
      }

      editPage() {
        this.router.navigate(['/home/profile/edit-profile-page']);
      }

      changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
      }

      updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/resume', this.userObject.resume]);
      }

      confirmLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = this.toast.create({
            message: 'User has been logged out',
            duration: 3000
          });
          const loading = yield this.loading.create({
            message: 'Logging out...',
            duration: 1000
          });
          const alert = yield this.alert.create({
            header: 'Logout',
            cssClass: 'alert',
            message: 'Are you sure you want to logout?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancelling logout');
                this.router.navigate(['/home/profile']);
              }
            }, {
              text: 'Logout',
              handler: () => {
                console.log('Logging out');
                this.auth.logout();
                loading.present();
                toast.then(t => t.present());
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    ProfilePage.ctorParameters = () => [{
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

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map