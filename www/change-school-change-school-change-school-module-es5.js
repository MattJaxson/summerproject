(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-school-change-school-change-school-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-school/change-school/change-school.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-school/change-school/change-school.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileChangeSchoolChangeSchoolChangeSchoolPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Change School/Grade</ion-title>\r\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n        cancel\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid fixed class=\"ion-text-center\">\r\n      <ion-row> \r\n          <ion-col size=\"12\">\r\n              <h6 class=\"text-header\">{{grade}}, {{school}}</h6>\r\n            <form [formGroup]=\"changeSchool\" (ngSubmit)=\"confirmChangedSchool(\r\n              this.activeEmail,\r\n              this.changeSchool.controls.newSchool.value,\r\n              this.changeSchool.controls.newGrade.value,\r\n              this.changeSchool.controls.password.value\r\n            )\" >\r\n\r\n\r\n            <ion-list class=\"line-input\">\r\n                <!-- Email -->\r\n                <ion-item>\r\n                    <ion-input\r\n                      required\r\n                      placeholder=\"Name of new school\"\r\n                      formControlName=\"newSchool\"\r\n                      type=\"\">\r\n                    </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-select\r\n                      required  \r\n                      formControlName=\"newGrade\"   placeholder=\"Grade\">\r\n                        <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\r\n                        <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\r\n                        <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\r\n                        <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\r\n                        <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\r\n                        <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\r\n                        <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\r\n                        <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\r\n    \r\n                      </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-input\r\n                      required\r\n                      placeholder=\"Password\"\r\n                      formControlName=\"password\"\r\n                      type=\"password\">\r\n                    </ion-input>\r\n                </ion-item>\r\n              </ion-list>\r\n                <ion-button type=\"submit\" class=\"orange-button\">CHANGE SCHOOL</ion-button>\r\n              </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/change-school/change-school/change-school-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/profile/change-school/change-school/change-school-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ChangeSchoolPageRoutingModule */

  /***/
  function srcAppPagesProfileChangeSchoolChangeSchoolChangeSchoolRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeSchoolPageRoutingModule", function () {
      return ChangeSchoolPageRoutingModule;
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


    var _change_school_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-school.page */
    "./src/app/pages/profile/change-school/change-school/change-school.page.ts");

    const routes = [{
      path: '',
      component: _change_school_page__WEBPACK_IMPORTED_MODULE_3__["ChangeSchoolPage"]
    }, {
      path: 'confirm',
      loadChildren: () => __webpack_require__.e(
      /*! import() | confirm-confirm-module */
      "confirm-confirm-module").then(__webpack_require__.bind(null,
      /*! ../confirm/confirm.module */
      "./src/app/pages/profile/change-school/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }];
    let ChangeSchoolPageRoutingModule = class ChangeSchoolPageRoutingModule {};
    ChangeSchoolPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangeSchoolPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/change-school/change-school/change-school.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/profile/change-school/change-school/change-school.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ChangeSchoolPageModule */

  /***/
  function srcAppPagesProfileChangeSchoolChangeSchoolChangeSchoolModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeSchoolPageModule", function () {
      return ChangeSchoolPageModule;
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


    var _change_school_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-school-routing.module */
    "./src/app/pages/profile/change-school/change-school/change-school-routing.module.ts");
    /* harmony import */


    var _change_school_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-school.page */
    "./src/app/pages/profile/change-school/change-school/change-school.page.ts");

    let ChangeSchoolPageModule = class ChangeSchoolPageModule {};
    ChangeSchoolPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _change_school_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeSchoolPageRoutingModule"]],
      declarations: [_change_school_page__WEBPACK_IMPORTED_MODULE_6__["ChangeSchoolPage"]]
    })], ChangeSchoolPageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/change-school/change-school/change-school.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/profile/change-school/change-school/change-school.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileChangeSchoolChangeSchoolChangeSchoolPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXNjaG9vbC9jaGFuZ2Utc2Nob29sL2NoYW5nZS1zY2hvb2wucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/change-school/change-school/change-school.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/profile/change-school/change-school/change-school.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ChangeSchoolPage */

  /***/
  function srcAppPagesProfileChangeSchoolChangeSchoolChangeSchoolPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeSchoolPage", function () {
      return ChangeSchoolPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    let ChangeSchoolPage = class ChangeSchoolPage {
      constructor(activatedRoute, formBuilder, profile, auth, router) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.profile = profile;
        this.auth = auth;
        this.router = router;
        this.activeEmail = this.profile.email.getValue();
        this.school = this.profile.school.getValue();
        this.grade = this.profile.grade.getValue();
        this.activeEmail = this.auth.user.email;
      }

      ngOnInit() {
        this.changeSchool = this.formBuilder.group({
          newSchool: ["".concat(this.school), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          newGrade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      confirmChangedSchool(email, newSchool, newGrade, password) {
        this.profile.changeSchool(email, newSchool, newGrade, password);
      }

      cancel() {
        console.log('change school cancelled');
        this.router.navigate(['/home/profile']);
      }

    };

    ChangeSchoolPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    ChangeSchoolPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-school',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-school.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-school/change-school/change-school.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-school.page.scss */
      "./src/app/pages/profile/change-school/change-school/change-school.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ChangeSchoolPage);
    /***/
  }
}]);
//# sourceMappingURL=change-school-change-school-change-school-module-es5.js.map