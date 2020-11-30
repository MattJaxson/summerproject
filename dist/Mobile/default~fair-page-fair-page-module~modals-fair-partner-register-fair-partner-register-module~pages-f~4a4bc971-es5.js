(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fair-page-fair-page-module~modals-fair-partner-register-fair-partner-register-module~pages-f~4a4bc971"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-partner-register/fair-partner-register.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-partner-register/fair-partner-register.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsFairPartnerRegisterFairPartnerRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header>\n</ion-header>\n\n\n<ion-content>\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Register New Partner</p>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1>Tech Fair</h1>\n        <h5>Date</h5>\n        <h5>Address</h5>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit a expedita sed nostrum reprehenderit assumenda sequi veritatis rerum magnam omnis minima ratione, odio quidem adipisci possimus qui molestiae! Quisquam!</p>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <form [formGroup]=\"resgisterForm\" (ngSubmit)=\"registerPartner()\" id=\"proPicForm\">\n          <ion-list class=\"line-input\">\n\n            <!-- First & Last Name -->\n            <ion-item>\n              <ion-label position=\"floating\">First & Last Name <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"name\" type=\"text\"></ion-input>\n            </ion-item>\n\n            <!-- Email -->\n            <ion-item>\n              <ion-label position=\"floating\">E-Mail <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"email\" type=\"email\"></ion-input>\n            </ion-item>\n\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"resgisterForm\n                      .get('email')\n                      .hasError(validation.type) && (resgisterForm.get('email')\n                      .dirty || resgisterForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n            <!-- Company/Organization/School -->\n            <ion-item>\n              <ion-label position=\"floating\">Name of Organization <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"organization\" type=\"text\"></ion-input>\n            </ion-item>\n\n            <!-- Phone -->\n            <ion-item>\n              <ion-label position=\"floating\">Phone Number\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-input\n                  formControlName=\"phone\"\n                  maxlength=\"10\"\n                  minlength=\"10\" placeholder=\"#\"></ion-input>\n            </ion-item>\n\n            <!-- Phone Validation-->\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessasges.phone\">\n                <div class=\"error-message\"\n                *ngIf=\"resgisterForm\n                  .get('phone')\n                  .hasError(validation.type) && (resgisterForm.get('phone')\n                  .dirty || resgisterForm.get('phone').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n\n            <!-- Gender -->\n            <ion-item>\n             <ion-label position=\"floating\">Gender\n               <ion-text color=\"danger\">*</ion-text>\n             </ion-label>\n               <ion-select (ionChange)=\"selectGender($event)\"\n               placeholder=\"Select School\">\n                 <ion-select-option value=\"Male\">Male</ion-select-option>\n                 <ion-select-option value=\"Female\">Female</ion-select-option>\n               </ion-select>\n           </ion-item>\n\n           <!-- Lunch -->\n           <ion-item>\n            <ion-label position=\"floating\">Lunch\n              <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n              <ion-select (ionChange)=\"selectLunch($event)\"\n              placeholder=\"Select School\">\n                <ion-select-option *ngFor=\"let lunch of lunches\" value=\"{{lunch}}\">{{lunch}}</ion-select-option>\n              </ion-select>\n          </ion-item>\n\n          <input\n            name=\"booth-partner-logo\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n            <div\n            #defaultPicture\n            id=\"default-picture-wrapper\"\n            *ngIf=\"!uploadedPhoto\">\n              <p>Please upload a logo for your organization.</p>\n            </div>\n\n          <!-- User has uploaded cropped profile picture -->\n          <img\n            id=\"upload-picture-wrapper\"\n            *ngIf=\"uploadedPhoto\"\n            src=\"{{uploadedPhotoURL}}\" />\n\n            <ion-textarea #colleguesChars\n            maxlength=\"150\"\n            formControlName=\"colleagues\"\n            placeholder=\"Please enter names of collegeauges that will be helping you, seperated by commas. \">\n\n            </ion-textarea>\n            <p class=\"char-limit\">{{colleguesChars.value.length}} / 150 character limit</p>\n\n            <ion-textarea #descriptionChars\n            maxlength=\"600\"\n            formControlName=\"description\" placeholder=\"Please enter a description of what your organization does. This will be displayed for students who want to have more information about your organization. \">\n            </ion-textarea>\n            <p class=\"char-limit\">{{descriptionChars.value.length}} / 600 character limit</p>\n\n          </ion-list>\n\n          <div style=\"text-align: center; margin: 100px auto\">\n            <ion-button type=\"submit\" class=\"orange-button\">\n              Register\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"registered\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center confirm-popout\">\n      <ion-col class=\"ion-text-center\" size=\"8\">\n        <ion-icon [className]=\"registered ? 'slide-up' : 'off'\" name=\"checkmark-circle-outline\" size=\"large\" color=\"success\" ></ion-icon>\n        <h3>Thank you for Registering as a Partner for Tech Fair.</h3>\n        <ion-button class=\"blue-button\" (click)=\"confirm()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modals/fair-partner-register/fair-partner-register-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modals/fair-partner-register/fair-partner-register-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: FairPartnerRegisterPageRoutingModule */

  /***/
  function srcAppModalsFairPartnerRegisterFairPartnerRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPartnerRegisterPageRoutingModule", function () {
      return FairPartnerRegisterPageRoutingModule;
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


    var _fair_partner_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fair-partner-register.page */
    "./src/app/modals/fair-partner-register/fair-partner-register.page.ts");

    const routes = [{
      path: '',
      component: _fair_partner_register_page__WEBPACK_IMPORTED_MODULE_3__["FairPartnerRegisterPage"]
    }];
    let FairPartnerRegisterPageRoutingModule = class FairPartnerRegisterPageRoutingModule {};
    FairPartnerRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FairPartnerRegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/fair-partner-register/fair-partner-register.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modals/fair-partner-register/fair-partner-register.module.ts ***!
    \******************************************************************************/

  /*! exports provided: FairPartnerRegisterPageModule */

  /***/
  function srcAppModalsFairPartnerRegisterFairPartnerRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPartnerRegisterPageModule", function () {
      return FairPartnerRegisterPageModule;
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


    var _fair_partner_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fair-partner-register-routing.module */
    "./src/app/modals/fair-partner-register/fair-partner-register-routing.module.ts");
    /* harmony import */


    var _fair_partner_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fair-partner-register.page */
    "./src/app/modals/fair-partner-register/fair-partner-register.page.ts");

    let FairPartnerRegisterPageModule = class FairPartnerRegisterPageModule {};
    FairPartnerRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fair_partner_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairPartnerRegisterPageRoutingModule"]],
      declarations: [_fair_partner_register_page__WEBPACK_IMPORTED_MODULE_6__["FairPartnerRegisterPage"]]
    })], FairPartnerRegisterPageModule);
    /***/
  },

  /***/
  "./src/app/modals/fair-partner-register/fair-partner-register.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/modals/fair-partner-register/fair-partner-register.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsFairPartnerRegisterFairPartnerRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  color: white;\n  font-size: 1.2em;\n  position: relative;\n  top: -5px;\n}\n\nion-header {\n  background: #21ce99;\n}\n\n#upload-picture-wrapper {\n  height: 150px;\n  width: 150px;\n  opacity: 0;\n  margin-top: 50px;\n  display: block;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n#default-picture-wrapper {\n  border: 1px solid lightgrey;\n  margin: 20px 0px;\n  padding: 10px;\n  text-align: center;\n}\n\n.confirm-popout {\n  height: 100vh;\n  width: 100vw;\n  background-color: White;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  -webkit-animation: popout 1s ease forwards;\n          animation: popout 1s ease forwards;\n}\n\n.header-slide-up {\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n.slide-up {\n  opacity: 0;\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n#sign-up {\n  background: lightblue;\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nion-list-header {\n  margin-top: 100px;\n}\n\nion-textarea {\n  border: solid 1px #005191;\n}\n\n.char-limit {\n  color: #e4405f;\n  margin-bottom: 50px;\n}\n\n@-webkit-keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@-webkit-keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n\n@keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL2ZhaXItcGFydG5lci1yZWdpc3Rlci9mYWlyLXBhcnRuZXItcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvZmFpci1wYXJ0bmVyLXJlZ2lzdGVyL2ZhaXItcGFydG5lci1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUVmLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzRkFBQTtVQUFBLDhFQUFBO0FDRUY7O0FEQ0E7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNFRjs7QURDQTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDRUY7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDRUY7RURBQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNFRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDRUY7RURBQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtFQ0FGO0VERUE7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsY0FBQTtFQ0FGO0VERUE7SUFDRSxhQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9mYWlyLXBhcnRuZXItcmVnaXN0ZXIvZmFpci1wYXJ0bmVyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMWNlOTk7XG59XG4jdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7IHdpZHRoOiAxNTBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuI2RlZmF1bHQtcGljdHVyZS13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25maXJtLXBvcG91dCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBhbmltYXRpb246IHBvcG91dCAxcyBlYXNlIGZvcndhcmRzO1xufVxuXG4uaGVhZGVyLXNsaWRlLXVwe1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbi5zbGlkZS11cCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuI3NpZ24tdXAge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDA1MTkxO1xufVxuXG4uY2hhci1saW1pdCB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb2ZmIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuIiwiaW9uLXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzIxY2U5OTtcbn1cblxuI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbiNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29uZmlybS1wb3BvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBwb3BvdXQgMXMgZWFzZSBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1zbGlkZS11cCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuLnNsaWRlLXVwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBlYXNlIDFzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDA1MTkxO1xufVxuXG4uY2hhci1saW1pdCB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBvZmYge1xuICAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/fair-partner-register/fair-partner-register.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modals/fair-partner-register/fair-partner-register.page.ts ***!
    \****************************************************************************/

  /*! exports provided: FairPartnerRegisterPage */

  /***/
  function srcAppModalsFairPartnerRegisterFairPartnerRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPartnerRegisterPage", function () {
      return FairPartnerRegisterPage;
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
    /* harmony import */


    var _image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../image-cropper/image-cropper.page */
    "./src/app/modals/image-cropper/image-cropper.page.ts");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");

    let FairPartnerRegisterPage = class FairPartnerRegisterPage {
      constructor(_modal, photo, alert, formBuilder, fairs, navParams, loading) {
        this._modal = _modal;
        this.photo = photo;
        this.alert = alert;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navParams = navParams;
        this.loading = loading;
        this.registered = false;
        this.partnerObject = {
          id: '',
          name: '',
          organization: '',
          lunch: '',
          logo: '',
          phone: '',
          colleagues: '',
          description: '',
          email: '',
          gender: ''
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
        this.lunches = ['Ham', 'Turkey', 'Veggietarian'];
      }

      ngOnDestroy() {
        this.registerPartnerSubscription.unsubscribe();
      }

      ngOnInit() {
        this.resgisterForm = this.formBuilder.group({
          name: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          phone: ['7342237792', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9 ]{10}')]],
          organization: ['Journi', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          description: ['This is a description', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          colleagues: ['Eddie', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.partnerObject.id = this.navParams.get('id');
      }

      cancel() {
        this._modal.dismiss();
      }

      selectLunch(e) {
        console.log('Added Lunch ' + e.detail.value);
        this.partnerObject.lunch = e.detail.value;
      }

      selectGender(e) {
        console.log('Added Gender ' + e.detail.value);
        this.partnerObject.gender = e.detail.value;
      }

      getFormData(event) {
        const reader = new FileReader();
        const formElement = document.querySelectorAll('form');
        console.log(event);
        console.log('Reader Results from File Input');
        console.log(reader.result);
        formElement.forEach(form => {
          if (form.id === 'proPicForm') {
            console.log('Got Form: ', form);
            this.formData = new FormData(form);
            console.log('Form data: ', this.formData);
            this.uploadedPhoto = true;
          }
        });
        reader.addEventListener('load', () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.uploadedPhotoURL = reader.result; // console.log('Before cropping: ' + reader.result);

          yield this.cropPhoto(this.uploadedPhotoURL);
        }), true);

        if (formElement) {
          console.log(event.target.files[0]);
          return reader.readAsDataURL(event.target.files[0]);
        }
      }

      cropPhoto(uploadedPhotoURL) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const _modal = yield this._modal.create({
            component: _image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_7__["ImageCropperPage"],
            cssClass: 'image-cropper',
            componentProps: {
              uploadedPhotoURL
            }
          });

          yield _modal.present();

          _modal.onDidDismiss().then(data => {
            this.uploadedPhotoURL = data.data;
            console.log('After cropping: ' + data);
          });
        });
      }

      registerPartner() {
        // this.registered = true;
        this.uploadedPhoto = true;
        const formData = new FormData();
        const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'logo.png');
        formData.append('booth-partner-logo', photoFile);
        this.partnerObject.name = this.resgisterForm.value['name'];
        this.partnerObject.email = this.resgisterForm.value['email'];
        this.partnerObject.phone = this.resgisterForm.value['phone'];
        this.partnerObject.colleagues = this.resgisterForm.value['colleagues'];
        this.partnerObject.organization = this.resgisterForm.value['organization'];
        this.partnerObject.description = this.resgisterForm.value['description'];

        if (this.uploadedPhoto === true) {
          this.photo.boothPartnerLogo(formData).subscribe(data => {
            this.presentLoading();
            console.log(data);
            console.log('Image Upload API Successful');
            this.partnerObject.logo = data['objectUrl'];

            if (!this.resgisterForm.valid || !this.partnerObject.id || !this.partnerObject.name || !this.partnerObject.phone || !this.partnerObject.gender || !this.partnerObject.email || !this.partnerObject.logo || !this.partnerObject.organization || !this.partnerObject.description || !this.partnerObject.lunch || !this.partnerObject.colleagues) {
              console.log('Please answer all the questions!');
              console.log(this.partnerObject);
              return this.presentFormAlert();
            }
          });
        }
      }

      presentFormAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            // tslint:disable-next-line: max-line-length
            message: 'Please fill out the entire form.',
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
            message: 'This email has already been registered as a Partner. Please use another email, or contact us if you believe your email has been used without your permission.',
            // cssClass: ''
            buttons: [{
              text: 'Okay',
              role: 'cancel'
            }]
          });
          yield alert.present();
        });
      }

      resize() {
        // define width to resize
        const resizeWidth = 1200;
      }

      confirm() {
        this._modal.dismiss();
      }

      presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000
          });
          yield loading.present();
          this.registerPartnerSubscription = this.fairs.registerPartner(this.partnerObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error.error === 'A Partner already has that email address') {
              console.log('A Partner already has that email address');
              this.presentEmailTakenAlert();
              return rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"];
            }
          })).subscribe(() => {
            console.log('REGISTERED PARTNER TO FAIR!');
            this.registered = true;
          });
          console.log(this.partnerObject);
          const {
            role,
            data
          } = yield loading.onDidDismiss();
          console.log('Loading dismissed!');
        });
      }

      dataURLtoBlob(dataurl) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        return new Blob([u8arr], {
          type: mime
        });
      }

    };

    FairPartnerRegisterPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]
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

    FairPartnerRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fair-partner-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fair-partner-register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-partner-register/fair-partner-register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fair-partner-register.page.scss */
      "./src/app/modals/fair-partner-register/fair-partner-register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], FairPartnerRegisterPage);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    let PhotoService = class PhotoService {
      constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      } // Testing


      imageUpload(imageForm) {
        console.log('image uploading');
        console.log(imageForm);
        return this.http.post("".concat(this.BACKEND_URL, "/api/photo/upload-profile-picture"), imageForm);
      }

      changeProfilePicture(imageForm) {
        console.log(imageForm);
        return this.http.post("".concat(this.BACKEND_URL, "/api/photo/change-profile-picture"), imageForm);
      }

      updatePostPhotos(newPhoto, email) {
        console.log(newPhoto);
        return this.http.post("".concat(this.BACKEND_URL, "/api/photo/update-all-post-pictures"), newPhoto, email).subscribe();
      }

      boothPartnerLogo(logo) {
        console.log('both partner uploading');
        console.log(logo);
        return this.http.post("".concat(this.BACKEND_URL, "/api/photo/upload-booth-partner-logo"), logo);
      }

    };

    PhotoService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PhotoService);
    /***/
  }
}]);
//# sourceMappingURL=default~fair-page-fair-page-module~modals-fair-partner-register-fair-partner-register-module~pages-f~4a4bc971-es5.js.map