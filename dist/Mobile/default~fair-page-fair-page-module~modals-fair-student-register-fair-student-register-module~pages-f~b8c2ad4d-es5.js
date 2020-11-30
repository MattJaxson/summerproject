(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fair-page-fair-page-module~modals-fair-student-register-fair-student-register-module~pages-f~b8c2ad4d"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-student-register/fair-student-register.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-student-register/fair-student-register.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsFairStudentRegisterFairStudentRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Register New Student</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1>{{fairName}}</h1>\n        <h5>{{date}}</h5>\n        <h5>{{address}}, {{city}}, {{state}}, {{zip}}</h5>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit a expedita sed nostrum reprehenderit assumenda sequi veritatis rerum magnam omnis minima ratione, odio quidem adipisci possimus qui molestiae! Quisquam!</p>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <form [formGroup]=\"resgisterForm\" (ngSubmit)=\"registerStudent()\">\n          <ion-list class=\"line-input\">\n\n            <!-- First & Last Name -->\n            <ion-item>\n              <ion-label position=\"floating\">First & Last Name <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"name\" type=\"text\"></ion-input>\n            </ion-item>\n\n            <!-- Email -->\n            <ion-item>\n              <ion-label position=\"floating\">E-Mail <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"email\" type=\"email\"></ion-input>\n            </ion-item>\n\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"resgisterForm\n                      .get('email')\n                      .hasError(validation.type) && (resgisterForm.get('email')\n                      .dirty || resgisterForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n            <!-- Phone -->\n            <ion-item>\n              <ion-label position=\"floating\">Phone <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"phone\" type=\"phone\" maxlength=\"10\" minlength=\"10\"></ion-input>\n            </ion-item>\n\n            <!-- Phone Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.phone\">\n                    <div class=\"error-message\"\n                    *ngIf=\"resgisterForm\n                      .get('phone')\n                      .hasError(validation.type) && (resgisterForm.get('phone')\n                      .dirty || resgisterForm.get('phone').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n            <!-- Grade -->\n            <ion-item>\n              <ion-label position=\"floating\">Grade\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectGrade($event)\"\n                placeholder=\"Select Grade\">\n                  <ion-select-option  *ngFor=\"let grade of grades\" value=\"{{grade}}\">{{grade}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- School -->\n            <ion-item>\n              <ion-label position=\"floating\">School\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectSchool($event)\"\n                placeholder=\"Select School\">\n                  <ion-select-option *ngFor=\"let school of schools\" value=\"{{school}}\">{{school}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Gender -->\n            <ion-item>\n              <ion-label position=\"floating\">Gender\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectGender($event)\"\n                placeholder=\"Select Gender\">\n                  <ion-select-option value=\"Male\">Male</ion-select-option>\n                  <ion-select-option value=\"Female\">Female</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Lunch -->\n            <ion-item>\n              <ion-label position=\"floating\">Lunch\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectLunch($event)\"\n                placeholder=\"Select Grade\">\n                  <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n                  <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Student Interests -->\n            <h3 style=\"margin-top: 100px;\">Student Interests</h3>\n            <ion-item *ngFor=\"let interest of interests\">\n              <ion-label>{{interest.val}}</ion-label>\n              <ion-checkbox (click)=\"isChecked(interest.val)\" slot=\"end\"></ion-checkbox>\n            </ion-item>\n\n            <!-- Pre Suvery Questions -->\n\n            <!-- Question 1 -->\n            <ion-radio-group\n            required (ionChange)=\"question1Handler($event)\">\n              <ion-list-header>\n                <h3>Question 1\n                  <ion-text color=\"danger\">*</ion-text></h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <!-- Question 2 -->\n            <ion-radio-group\n            required (ionChange)=\"question2Handler($event)\">\n              <ion-list-header>\n                <h3>Question 2\n                  <ion-text color=\"danger\">*</ion-text></h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <!-- Question 3 -->\n            <ion-radio-group\n            required\n            (ionChange)=\"question3Handler($event)\">\n              <ion-list-header>\n                <h3>Question 3\n                  <ion-text color=\"danger\">*</ion-text></h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <!-- Question 4 -->\n            <ion-radio-group\n            required\n            (ionChange)=\"question4Handler($event)\">\n              <ion-list-header>\n                <h3>Question 4\n                  <ion-text color=\"danger\">*</ion-text>\n                </h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <!-- Question 5 -->\n            <ion-radio-group\n            required\n            (ionChange)=\"question5Handler($event)\">\n              <ion-list-header>\n                <h3>Question 5\n                  <ion-text color=\"danger\">*</ion-text>\n                </h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n          </ion-list>\n\n          <div style=\"text-align: center; margin: 100px auto\">\n            <ion-button type=\"submit\" class=\"orange-button\">\n              Register\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"registered\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center confirm-popout\">\n      <ion-col class=\"ion-text-center\" size=\"8\">\n        <ion-icon [className]=\"registered ? 'slide-up' : 'off'\" name=\"checkmark-circle-outline\" size=\"large\" color=\"success\" ></ion-icon>\n        <h3>Thank you for Registering as a Student for Tech Fair.</h3>\n        <ion-button class=\"blue-button\" (click)=\"confirm()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modals/fair-student-register/fair-student-register-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modals/fair-student-register/fair-student-register-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: FairStudentRegisterPageRoutingModule */

  /***/
  function srcAppModalsFairStudentRegisterFairStudentRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairStudentRegisterPageRoutingModule", function () {
      return FairStudentRegisterPageRoutingModule;
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


    var _fair_student_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fair-student-register.page */
    "./src/app/modals/fair-student-register/fair-student-register.page.ts");

    const routes = [{
      path: '',
      component: _fair_student_register_page__WEBPACK_IMPORTED_MODULE_3__["FairStudentRegisterPage"]
    }];
    let FairStudentRegisterPageRoutingModule = class FairStudentRegisterPageRoutingModule {};
    FairStudentRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FairStudentRegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/fair-student-register/fair-student-register.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modals/fair-student-register/fair-student-register.module.ts ***!
    \******************************************************************************/

  /*! exports provided: FairStudentRegisterPageModule */

  /***/
  function srcAppModalsFairStudentRegisterFairStudentRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairStudentRegisterPageModule", function () {
      return FairStudentRegisterPageModule;
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


    var _fair_student_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fair-student-register-routing.module */
    "./src/app/modals/fair-student-register/fair-student-register-routing.module.ts");
    /* harmony import */


    var _fair_student_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fair-student-register.page */
    "./src/app/modals/fair-student-register/fair-student-register.page.ts");
    /* harmony import */


    var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/image-cropper/image-cropper.module */
    "./src/app/modals/image-cropper/image-cropper.module.ts");

    let FairStudentRegisterPageModule = class FairStudentRegisterPageModule {};
    FairStudentRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fair_student_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairStudentRegisterPageRoutingModule"], src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_7__["ImageCropperPageModule"]],
      declarations: [_fair_student_register_page__WEBPACK_IMPORTED_MODULE_6__["FairStudentRegisterPage"]]
    })], FairStudentRegisterPageModule);
    /***/
  },

  /***/
  "./src/app/modals/fair-student-register/fair-student-register.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/modals/fair-student-register/fair-student-register.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsFairStudentRegisterFairStudentRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  color: white;\n  font-size: 1.2em;\n  position: relative;\n  top: -5px;\n}\n\nion-header {\n  background: #21ce99;\n}\n\n.confirm-popout {\n  height: 100vh;\n  width: 100vw;\n  background-color: White;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  -webkit-animation: popout 1s ease forwards;\n          animation: popout 1s ease forwards;\n}\n\n.header-slide-up {\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n.slide-up {\n  opacity: 0;\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n#sign-up {\n  background: lightblue;\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nion-list-header {\n  margin-top: 100px;\n}\n\n@-webkit-keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@-webkit-keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n\n@keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL2ZhaXItc3R1ZGVudC1yZWdpc3Rlci9mYWlyLXN0dWRlbnQtcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvZmFpci1zdHVkZW50LXJlZ2lzdGVyL2ZhaXItc3R1ZGVudC1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNDRjs7QURFQTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDQ0Y7RURDQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNDRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDQ0Y7RURDQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0FGO0VERUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0FGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDQUY7RURFQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsY0FBQTtFQ0RGO0VER0E7SUFDRSxhQUFBO0VDREY7QUFDRjs7QURMQTtFQUNFO0lBQ0UsY0FBQTtFQ0RGO0VER0E7SUFDRSxhQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9mYWlyLXN0dWRlbnQtcmVnaXN0ZXIvZmFpci1zdHVkZW50LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMWNlOTk7XG59XG5cbi5jb25maXJtLXBvcG91dCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBhbmltYXRpb246IHBvcG91dCAxcyBlYXNlIGZvcndhcmRzO1xufVxuXG4uaGVhZGVyLXNsaWRlLXVwe1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbi5zbGlkZS11cCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuI3NpZ24tdXAge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb2ZmIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCJpb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMjFjZTk5O1xufVxuXG4uY29uZmlybS1wb3BvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBwb3BvdXQgMXMgZWFzZSBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1zbGlkZS11cCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuLnNsaWRlLXVwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBlYXNlIDFzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBvZmYge1xuICAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/fair-student-register/fair-student-register.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modals/fair-student-register/fair-student-register.page.ts ***!
    \****************************************************************************/

  /*! exports provided: FairStudentRegisterPage */

  /***/
  function srcAppModalsFairStudentRegisterFairStudentRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairStudentRegisterPage", function () {
      return FairStudentRegisterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let FairStudentRegisterPage = class FairStudentRegisterPage {
      constructor(modal, alert, formBuilder, fairs, navParams, loading) {
        this.modal = modal;
        this.alert = alert;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navParams = navParams;
        this.loading = loading;
        this.registered = false;
        this.studentInterests = [];
        this.studentObject = {
          id: '',
          name: '',
          email: '',
          school: '',
          phone: '',
          gender: '',
          grade: '',
          lunch: '',
          interests: '',
          question1: {
            question: 'question 1',
            answer: ''
          },
          question2: {
            question: 'question 2',
            answer: ''
          },
          question3: {
            question: 'question 3',
            answer: ''
          },
          question4: {
            question: 'question 4',
            answer: ''
          },
          question5: {
            question: 'question 5',
            answer: ''
          }
        };
        this.validationMessasges = {
          email: [{
            type: 'email',
            message: 'Must be a valid email address'
          }],
          phone: [{
            type: 'pattern',
            message: 'Phone number must be 10 digits, ei (734)123-4567.'
          }]
        };
        this.interests = [{
          val: 'Automotive Mobility',
          isChecked: false
        }, {
          val: 'Artificial Intelligence',
          isChecked: false
        }, {
          val: 'Coding',
          isChecked: false
        }, {
          val: 'Computer Science',
          isChecked: false
        }, {
          val: 'Cyber Security',
          isChecked: false
        }, {
          val: 'Digital Media',
          isChecked: false
        }, {
          val: 'Engineering',
          isChecked: false
        }, {
          val: 'Graphic Design',
          isChecked: false
        }, {
          val: 'Robotics',
          isChecked: false
        }, {
          val: 'Software Development',
          isChecked: false
        }, {
          val: 'Video Game Design',
          isChecked: false
        }];
        this.grades = ['6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.schools = ['Martin Luther King High School', 'Cass Technical High School', 'Renaissance High School'];
        this.lunches = ['Ham', 'Turkey', 'Veggie'];
      }

      ngOnDestroy() {// this.registerStudentSubscription.unsubscribe();
      }

      ngOnInit() {
        this.resgisterForm = this.formBuilder.group({
          name: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          phone: ['7342237792', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9 ]{10}')]]
        });
        this.studentObject.id = this.navParams.get('id');
        this.city = this.navParams.get('city');
        this.state = this.navParams.get('state');
        this.zip = this.navParams.get('zip');
        this.address = this.navParams.get('address');
        this.fairName = this.navParams.get('fairName');
        this.date = this.navParams.get('date');
      }

      cancel() {
        this.modal.dismiss();
      }

      isChecked(interestName) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.interests.length; i++) {
          if (this.interests[i].val === interestName) {
            if (this.interests[i].isChecked === false) {
              console.log(interestName + ' has NOT been checked');
              this.interests[i].isChecked = true;
              console.log(this.interests);
              return;
            }

            if (this.interests[i].isChecked === true) {
              console.log(interestName + 'Interest has been checked');
              this.interests[i].isChecked = false;
              console.log(this.interests);
              return;
            }
          }
        }
      }

      selectGrade(e) {
        console.log('Added Grade ' + e.detail.value);
        this.studentObject.grade = e.detail.value;
      }

      selectSchool(e) {
        console.log('Added School ' + e.detail.value);
        this.studentObject.school = e.detail.value;
      }

      selectLunch(e) {
        console.log('Added Lunch ' + e.detail.value);
        this.studentObject.lunch = e.detail.value;
      }

      selectGender(e) {
        console.log('Added Gender ' + e.detail.value);
        this.studentObject.gender = e.detail.value;
      }

      question1Handler(e) {
        this.studentObject.question1.answer = e.detail.value;
        console.log(this.studentObject.question1);
      }

      question2Handler(e) {
        this.studentObject.question2.answer = e.detail.value;
        console.log(this.studentObject.question2);
      }

      question3Handler(e) {
        this.studentObject.question3.answer = e.detail.value;
        console.log(this.studentObject.question3);
      }

      question4Handler(e) {
        this.studentObject.question4.answer = e.detail.value;
        console.log(this.studentObject.question4);
      }

      question5Handler(e) {
        this.studentObject.question5.answer = e.detail.value;
        console.log(this.studentObject.question5);
      }

      registerStudent() {
        // Add all the students interests to the studentInterest array
        this.interests.forEach(interest => {
          if (interest.isChecked === true) {
            this.studentInterests.push(interest.val);
          }
        });
        this.studentObject.interests = JSON.stringify(this.studentInterests);
        this.studentObject.name = this.resgisterForm.value['name'];
        this.studentObject.email = this.resgisterForm.value['email'];
        this.studentObject.phone = this.resgisterForm.value['phone']; // Check to see if the user has answered all the questions

        if (!this.studentObject.question1.answer || !this.studentObject.question2.answer || !this.studentObject.question3.answer || !this.studentObject.question4.answer || !this.studentObject.question5.answer || !this.resgisterForm.valid || !this.studentObject.name || !this.studentObject.grade || !this.studentObject.gender || !this.studentObject.lunch || !this.studentObject.school || !this.studentObject.interests) {
          console.log('Please answer all the questions!');
          return this.presentFormAlert();
        } else {
          this.presentLoading();
        }
      }

      presentFormAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            // tslint:disable-next-line: max-line-length
            message: 'Please fill out the entire form, including the information at the top, and questions at the bottom. You do not need to fill out the Student Interests selection',
            // cssClass: ''
            buttons: [{
              text: 'Okay',
              role: 'cancel'
            }]
          });
          yield alert.present();
        });
      }

      presentEmailTakenAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            // tslint:disable-next-line: max-line-length
            message: 'This email has already been registered. Please use another email, or contact us if you believe your email has been used without your permission.',
            // cssClass: ''
            buttons: [{
              text: 'Okay',
              role: 'cancel'
            }]
          });
          yield alert.present();
        });
      }

      presentWaitListedAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            // tslint:disable-next-line: max-line-length
            header: 'You have been waitlisted',
            // tslint:disable-next-line: max-line-length
            message: 'There are already more than 30 students from your school signed up. If a space clears up, we will contact you via email and add you to the list.',
            // cssClass: ''
            buttons: [{
              text: 'Okay',
              handler: () => {
                this.modal.dismiss();
              }
            }]
          });
          yield alert.present();
        });
      }

      presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            cssClass: 'my-custom-class',
            message: 'Registering',
            duration: 2000
          });
          yield loading.present();
          console.log('Trying to register student..');
          this.fairs.registerStudent(this.studentObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error.error === 'A Student already has that email address') {
              console.log('A Student already has that email address');
              this.presentEmailTakenAlert();
              return rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"];
            }

            if (error.error === 'There are more than 30 students registered from your school') {
              console.log('There are more than 30 students registered from your school');
              this.presentWaitListedAlert();
              return rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"];
            }
          })).subscribe(() => {
            console.log('REGISTERED STUDENT TO FAIR!');
            this.registered = true;
            console.log(this.studentObject.interests);
            console.log('Loading dismissed!');
          });
        });
      }

      confirm() {
        this.modal.dismiss();
      }

    };

    FairStudentRegisterPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('descriptionChars', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FairStudentRegisterPage.prototype, "descriptionChars", void 0);
    FairStudentRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fair-student-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fair-student-register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-student-register/fair-student-register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fair-student-register.page.scss */
      "./src/app/modals/fair-student-register/fair-student-register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], FairStudentRegisterPage);
    /***/
  },

  /***/
  "./src/app/modals/image-cropper/image-cropper-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modals/image-cropper/image-cropper-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ImageCropperPageRoutingModule */

  /***/
  function srcAppModalsImageCropperImageCropperRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperPageRoutingModule", function () {
      return ImageCropperPageRoutingModule;
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


    var _image_cropper_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-cropper.page */
    "./src/app/modals/image-cropper/image-cropper.page.ts");

    const routes = [{
      path: '',
      component: _image_cropper_page__WEBPACK_IMPORTED_MODULE_3__["ImageCropperPage"]
    }];
    let ImageCropperPageRoutingModule = class ImageCropperPageRoutingModule {};
    ImageCropperPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImageCropperPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/image-cropper/image-cropper.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/image-cropper/image-cropper.module.ts ***!
    \**************************************************************/

  /*! exports provided: ImageCropperPageModule */

  /***/
  function srcAppModalsImageCropperImageCropperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperPageModule", function () {
      return ImageCropperPageModule;
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


    var _image_cropper_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-cropper-routing.module */
    "./src/app/modals/image-cropper/image-cropper-routing.module.ts");
    /* harmony import */


    var _image_cropper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-cropper.page */
    "./src/app/modals/image-cropper/image-cropper.page.ts");

    let ImageCropperPageModule = class ImageCropperPageModule {};
    ImageCropperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_cropper_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageCropperPageRoutingModule"]],
      declarations: [_image_cropper_page__WEBPACK_IMPORTED_MODULE_6__["ImageCropperPage"]]
    })], ImageCropperPageModule);
    /***/
  }
}]);
//# sourceMappingURL=default~fair-page-fair-page-module~modals-fair-student-register-fair-student-register-module~pages-f~b8c2ad4d-es5.js.map