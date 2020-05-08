(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-page-edit-profile-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileEditProfilePageEditProfilePagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-title>Edit Profile</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-col size=\"11\" offset=\"0.5\">\n        <ion-list>\n            <ion-item detail=\"true\" lines=\"none\" (click)=\"changeEmail()\">\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n              <ion-label>Change Email</ion-label>\n            </ion-item>\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeAddress()\">\n              <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n              <ion-label>Change Address</ion-label>\n            </ion-item>\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePassword()\">\n              <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n              <ion-label>Change Password</ion-label>\n            </ion-item>\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePhoneNumber()\">\n              <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n              <ion-label>Change Phone Number</ion-label>\n            </ion-item>\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeSchool()\">\n              <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n              <ion-label>Change School/Grade</ion-label>\n            </ion-item>\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeProfilePicture()\">\n              <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n              <ion-label>Change Profile Picture</ion-label>\n            </ion-item>\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"updateResume()\">\n              <ion-icon name=\"document\" slot=\"start\"></ion-icon>\n              <ion-label>View/Update Resume</ion-label>\n            </ion-item >\n            <ion-item detail=\"true\" lines=\"none\"   (click)=\"logout()\">\n              <ion-icon name=\"arrow-round-back\" slot=\"start\"></ion-icon>\n              <ion-label>Logout</ion-label>\n            </ion-item>\n          </ion-list>\n    </ion-col>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: EditProfilePagePageRoutingModule */

  /***/
  function srcAppPagesProfileEditProfilePageEditProfilePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePagePageRoutingModule", function () {
      return EditProfilePagePageRoutingModule;
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


    var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile-page.page */
    "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts");

    const routes = [{
      path: '',
      component: _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePagePage"]
    }];
    let EditProfilePagePageRoutingModule = class EditProfilePagePageRoutingModule {};
    EditProfilePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfilePagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: EditProfilePagePageModule */

  /***/
  function srcAppPagesProfileEditProfilePageEditProfilePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePagePageModule", function () {
      return EditProfilePagePageModule;
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


    var _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-profile-page-routing.module */
    "./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts");
    /* harmony import */


    var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile-page.page */
    "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts");

    let EditProfilePagePageModule = class EditProfilePagePageModule {};
    EditProfilePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePagePageRoutingModule"]],
      declarations: [_edit_profile_page_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePagePage"]]
    })], EditProfilePagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileEditProfilePageEditProfilePagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --min-height: 65px;\n}\nion-item ion-icon {\n  color: #005191;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUtcGFnZS9lZGl0LXByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlLXBhZ2UvZWRpdC1wcm9maWxlLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUtcGFnZS9lZGl0LXByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNjVweDtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gIH1cbn0iLCJpb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNjVweDtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts ***!
    \***************************************************************************/

  /*! exports provided: EditProfilePagePage */

  /***/
  function srcAppPagesProfileEditProfilePageEditProfilePagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePagePage", function () {
      return EditProfilePagePage;
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
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let EditProfilePagePage = class EditProfilePagePage {
      constructor(auth, profile, storage, router, toastController) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toastController = toastController;
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

      ngOnInit() {}

      changeEmail() {
        console.log('Navigating to Change Email Page');
        this.router.navigate(['/home/profile/change-email']);
      }

      changeAddress() {
        console.log('Navigating to Change Address Page'); // tslint:disable-next-line: max-line-length

        this.router.navigate(['/home/profile/change-address/', this.userObject.addressOne, this.userObject.addressTwo, this.userObject.city, this.userObject.state, this.userObject.city]); // Delete params
      }

      changePassword() {
        console.log('Navigating to Change Password Page');
        this.router.navigate(['/home/profile/change-password']);
      }

      changePhoneNumber() {
        console.log('Navigating to Change Phone Number Page');
        this.router.navigate(['/home/profile/change-phone', this.userObject.phone]);
      }

      changeSchool() {
        console.log('Navigating to Change School Page');
        this.router.navigate(['/home/profile/change-school', this.userObject.school, this.userObject.grade]);
      }

      changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
      }

      updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/resume', this.userObject.resume]);
      }

      logout() {
        this.router.navigate(['/home/profile/logout']);
      }

    };

    EditProfilePagePage.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }];

    EditProfilePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile-page.page.scss */
      "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], EditProfilePagePage);
    /***/
  }
}]);
//# sourceMappingURL=edit-profile-page-edit-profile-page-module-es5.js.map