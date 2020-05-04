(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/register/register.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/register/register.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar class=\"ion-hide-md-up\">\r\n      <ion-title>Register as Chaperone</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <!-- Dekstop Toolbar -->\r\n    <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\r\n        <ion-title color=\"primary\">Register for {{title}} as Chaperone</ion-title>\r\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n        </ion-button>\r\n      </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n\r\n    <!-- Mobile & Tablet -->\r\n    <ion-grid class=\"ion-text-center ion-hide-md-up\">\r\n\r\n     <ion-row class=\"ion-justify-content-center register-wrapper\">\r\n        <ion-col size-sm=\"8\" size-xs=\"10\">\r\n          <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. You will need to go to that email and click     on the link to confirm your Registration.\r\n          </p>\r\n        </ion-col>\r\n\r\n        <ion-col size-sm=\"8\" size-xs=\"10\">\r\n         <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\r\n           <ion-list class=\"line-input\">\r\n              <ion-item>\r\n                <ion-input\r\n                 #autoFucousInput\r\n                 required\r\n                 inputmode=\"text\"\r\n                 formControlName=\"name\"\r\n                 type=\"text\"\r\n                 placeholder=\"First & Last Name\"></ion-input>\r\n              </ion-item>\r\n             <ion-item>\r\n               <ion-input\r\n                #autoFucousInput\r\n                required\r\n                inputmode=\"email\"\r\n                formControlName=\"email\"\r\n                type=\"text\"\r\n                placeholder=\"Email\"></ion-input>\r\n             </ion-item>\r\n\r\n                  <!-- Email Validation-->\r\n                  <div class=\"validation-errors\">\r\n                      <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                        <div class=\"error-message\"\r\n                        *ngIf=\"registerForm\r\n                          .get('email')\r\n                          .hasError(validation.type) && (registerForm.get('email')\r\n                          .dirty || registerForm.get('email').touched)\">\r\n                          {{ validation.message }}\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n\r\n             <ion-item>\r\n                <ion-select\r\n                  interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                  placeholder=\"School\"\r\n                  formControlName=\"school\">\r\n                  <ion-select-option\r\n                    *ngFor=\"let school of schoolList\"\r\n                    value=\"{{school}}\">{{school}}</ion-select-option>\r\n                </ion-select>\r\n             </ion-item>\r\n             <ion-item>\r\n               <ion-input\r\n                required\r\n                inputmode=\"phone\"\r\n                formControlName=\"phone\"\r\n                type=\"text\"\r\n                maxlength='10'\r\n                minlength='10'\r\n                placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\r\n             </ion-item>\r\n             <ion-item>\r\n                <ion-select\r\n                  interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                  placeholder=\"Gender\"\r\n                  formControlName=\"gender\">\r\n                  <ion-select-option\r\n                    value=\"Male\">Male</ion-select-option>\r\n                    <ion-select-option\r\n                    value=\"Female\">Female</ion-select-option>\r\n                </ion-select>\r\n             </ion-item>\r\n             <ion-item>\r\n                <ion-radio-group\r\n                required\r\n                formControlName=\"lunch\">\r\n                    <ion-list-header>\r\n                      <ion-label>Lunch</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item>\r\n                      <ion-label>Apple</ion-label>\r\n                      <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>Grape</ion-label>\r\n                      <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>Cherry</ion-label>\r\n                      <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n             </ion-item>\r\n           </ion-list>\r\n\r\n           <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button [disabled]=\"disabled\" class=\"orange-button\" type=\"submit\">Register</ion-button>\r\n           </ion-col>\r\n\r\n         </form>\r\n        </ion-col>\r\n        <ion-col size=\"11\" offset=\"0.5\">\r\n          <!-- <ion-button (click)=\"register()\">\r\n            Register\r\n          </ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- Desktop -->\r\n    <ion-grid class=\"ion-text-center ion-hide-sm-down\">\r\n\r\n      <ion-row style=\"margin-top: 100px\">\r\n        <ion-col push=\"2\" size=\"5\">\r\n          <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email.\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col push=\"2\" size=\"5\">\r\n         <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\r\n           <ion-list class=\"line-input\">\r\n              <ion-item>\r\n                <ion-input\r\n                 #autoFucousInput\r\n                 required\r\n                 inputmode=\"text\"\r\n                 formControlName=\"name\"\r\n                 type=\"text\"\r\n                 placeholder=\"First & Last Name\"></ion-input>\r\n              </ion-item>\r\n             <ion-item>\r\n               <ion-input\r\n                #autoFucousInput\r\n                required\r\n                inputmode=\"email\"\r\n                formControlName=\"email\"\r\n                type=\"text\"\r\n                placeholder=\"Email\"></ion-input>\r\n             </ion-item>\r\n\r\n                  <!-- Email Validation-->\r\n                  <div class=\"validation-errors\">\r\n                      <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                        <div class=\"error-message\"\r\n                        *ngIf=\"registerForm\r\n                          .get('email')\r\n                          .hasError(validation.type) && (registerForm.get('email')\r\n                          .dirty || registerForm.get('email').touched)\">\r\n                          {{ validation.message }}\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n\r\n             <ion-item>\r\n                <ion-select\r\n                  interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                  placeholder=\"School\"\r\n                  formControlName=\"school\">\r\n                  <ion-select-option\r\n                    *ngFor=\"let school of schoolList\"\r\n                    value=\"{{school}}\">{{school}}</ion-select-option>\r\n                </ion-select>\r\n             </ion-item>\r\n             <ion-item>\r\n               <ion-input\r\n                required\r\n                inputmode=\"phone\"\r\n                formControlName=\"phone\"\r\n                type=\"text\"\r\n                maxlength='10'\r\n                placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\r\n             </ion-item>\r\n             <ion-item>\r\n                <ion-radio-group\r\n                required\r\n                formControlName=\"lunch\">\r\n                    <ion-list-header>\r\n                      <ion-label>Lunch</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item>\r\n                      <ion-label>Turkey</ion-label>\r\n                      <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>Ham</ion-label>\r\n                      <ion-radio slot=\"start\" color=\"tertiary\" value=\"Ham\" checked></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>Veggie</ion-label>\r\n                      <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n             </ion-item>\r\n           </ion-list>\r\n\r\n           <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\r\n           </ion-col>\r\n\r\n         </form>\r\n        </ion-col>\r\n        <ion-col size=\"11\" offset=\"0.5\">\r\n          <!-- <ion-button (click)=\"register()\">\r\n            Register\r\n          </ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/register/register.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/register/register.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar class=\"ion-hide-md-up\">\r\n      <ion-title>Register for {{title}} as Partner</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n\r\n    <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\r\n        <ion-title color=\"primary\">Register for {{title}} as Partner</ion-title>\r\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n        </ion-button>\r\n      </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n\r\n    <ion-grid  class=\"ion-text-center ion-hide-md-up\">\r\n\r\n      <!-- Mobile & Tablet -->\r\n        <ion-row class=\"ion-justify-content-center register-wrapper\">\r\n            <ion-col size-sm=\"8\" size-xs=\"10\">\r\n\r\n            <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. If your school has more than 30 students r    registered, you will be notified and waitlisted.\r\n            </p>\r\n            </ion-col>\r\n\r\n            <ion-col size-sm=\"8\" size-xs=\"10\">\r\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\r\n                <ion-list class=\"line-input\">\r\n                  <ion-item>\r\n                     <ion-input\r\n                     #autoFucousInput\r\n                     required\r\n                     inputmode=\"text\"\r\n                     formControlName=\"name\"\r\n                      type=\"text\"\r\n                      placeholder=\"Contact First & Last Name\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                     <ion-input\r\n                      #autoFucousInput\r\n                      required\r\n                      inputmode=\"email\"\r\n                      formControlName=\"email\"\r\n                      type=\"text\"\r\n                      placeholder=\"Contact Email\"></ion-input>\r\n                  </ion-item>\r\n\r\n                    <!-- Email Validation-->\r\n                    <div class=\"validation-errors\">\r\n                        <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                          <div class=\"error-message\"\r\n                          *ngIf=\"registerForm\r\n                            .get('email')\r\n                            .hasError(validation.type) && (registerForm.get('email')\r\n                            .dirty || registerForm.get('email').touched)\">\r\n                            {{ validation.message }}\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n\r\n               <ion-item>\r\n                 <ion-input\r\n                  required\r\n                  inputmode=\"phone\"\r\n                  formControlName=\"phone\"\r\n                  type=\"text\"\r\n                  maxlength='10'\r\n                  placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\r\n               </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-input\r\n                     required\r\n                     formControlName=\"logo\"\r\n                     type=\"file\"\r\n                     placeholder=\"Logo\"></ion-input>\r\n                  </ion-item>\r\n\r\n                      <ion-item>\r\n                        <ion-input\r\n                         required\r\n                         formControlName=\"company\"\r\n                         type=\"text\"\r\n                         placeholder=\"Company/Organization\"></ion-input>\r\n                      </ion-item>\r\n\r\n               <ion-item>\r\n                  <ion-radio-group\r\n                  required\r\n                  formControlName=\"lunch\">\r\n                      <ion-list-header>\r\n                        <ion-label>Lunch</ion-label>\r\n                      </ion-list-header>\r\n                      <ion-item>\r\n                        <ion-label>Apple</ion-label>\r\n                        <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item>\r\n                        <ion-label>Grape</ion-label>\r\n                        <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item>\r\n                        <ion-label>Cherry</ion-label>\r\n                        <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n               </ion-item>\r\n\r\n               <ion-item>\r\n                  <ion-textarea\r\n                  formControlName=\"colleagues\" rows=\"6\" cols=\"20\" placeholder=\"Enter any of your colleagues names here, each seperated by a comma ( , )\"></ion-textarea>\r\n                </ion-item>\r\n             </ion-list>\r\n\r\n             <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\r\n             </ion-col>\r\n\r\n           </form>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <!-- Desktop -->\r\n\r\n    <ion-grid class=\"ion-text-center ion-hide-sm-down\">\r\n\r\n      <ion-row style=\"margin-top: 100px\">\r\n          <ion-col push=\"2\" size=\"5\">\r\n            <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-right register-wrapper\">\r\n\r\n          <ion-col size=\"5\" offset=\"2\">\r\n           <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\r\n             <ion-list class=\"line-input\">\r\n               <ion-item>\r\n                 <ion-input\r\n                  #autoFucousInput\r\n                  required\r\n                  inputmode=\"text\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                  placeholder=\"Contact First & Last Name\"></ion-input>\r\n               </ion-item>\r\n               <ion-item>\r\n                 <ion-input\r\n                  #autoFucousInput\r\n                  required\r\n                  inputmode=\"email\"\r\n                  formControlName=\"email\"\r\n                  type=\"text\"\r\n                  placeholder=\"Contact Email\"></ion-input>\r\n               </ion-item>\r\n\r\n                    <!-- Email Validation-->\r\n                    <div class=\"validation-errors\">\r\n                        <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                          <div class=\"error-message\"\r\n                          *ngIf=\"registerForm\r\n                            .get('email')\r\n                            .hasError(validation.type) && (registerForm.get('email')\r\n                            .dirty || registerForm.get('email').touched)\">\r\n                            {{ validation.message }}\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n\r\n               <ion-item>\r\n                 <ion-input\r\n                  required\r\n                  inputmode=\"phone\"\r\n                  formControlName=\"phone\"\r\n                  type=\"text\"\r\n                  maxlength='10'\r\n                  placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\r\n               </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-input\r\n                     required\r\n                     formControlName=\"logo\"\r\n                     type=\"file\"\r\n                     placeholder=\"Logo\"></ion-input>\r\n                  </ion-item>\r\n\r\n                      <ion-item>\r\n                        <ion-input\r\n                         required\r\n                         formControlName=\"company\"\r\n                         type=\"text\"\r\n                         placeholder=\"Company/Organization\"></ion-input>\r\n                      </ion-item>\r\n\r\n               <ion-item>\r\n                  <ion-radio-group\r\n                  required\r\n                  formControlName=\"lunch\">\r\n                      <ion-list-header>\r\n                        <ion-label>Lunch</ion-label>\r\n                      </ion-list-header>\r\n                      <ion-item>\r\n                        <ion-label>Turkey</ion-label>\r\n                        <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item>\r\n                        <ion-label>Ham</ion-label>\r\n                        <ion-radio slot=\"start\" color=\"tertiary\" value=\"Ham\" checked></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item>\r\n                        <ion-label>Veggie</ion-label>\r\n                        <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n               </ion-item>\r\n\r\n               <ion-item>\r\n                  <ion-textarea\r\n                  formControlName=\"colleagues\" rows=\"6\" cols=\"20\" placeholder=\"Enter any of your colleagues names here, each seperated by a comma ( , )\"></ion-textarea>\r\n                </ion-item>\r\n             </ion-list>\r\n\r\n             <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\r\n             </ion-col>\r\n\r\n           </form>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/register/register.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/register/register.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"ion-hide-md-up\">\r\n    <ion-title>Register for {{title}} as Student</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <!-- Desktop Toolbar -->\r\n  <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\r\n      <ion-title color=\"primary\">Register for {{title}} as Student</ion-title>\r\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n      </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Mobile and Tablet -->\r\n  <ion-grid class=\"ion-text-center ion-hide-md-up\">\r\n\r\n    <ion-row class=\"ion-justify-content-center register-wrapper ion-hide-md-up\">\r\n\r\n      <ion-col size-sm=\"8\" size-xs=\"10\">\r\n\r\n            <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. If your school has more than 30 students registered, you will be notified and waitlisted.\r\n            </p>\r\n\r\n      </ion-col>\r\n      <ion-col size-sm=\"8\" size-xs=\"10\">\r\n\r\n       <form  [formGroup]=\"registerForm\"\r\n       (ngSubmit)=\"register(this.registerForm.value)\">\r\n         <ion-list class=\"line-input\">\r\n            <ion-item>\r\n              <ion-input\r\n               #autoFucousInput\r\n               required\r\n               inputmode=\"text\"\r\n               formControlName=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"First & Last Name\"></ion-input>\r\n            </ion-item>\r\n\r\n           <ion-item>\r\n             <ion-input\r\n              required\r\n              inputmode=\"email\"\r\n              formControlName=\"email\"\r\n              type=\"text\"\r\n              placeholder=\"Email\"></ion-input>\r\n           </ion-item>\r\n\r\n\r\n                <!-- Email Validation-->\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                      <div class=\"error-message\"\r\n                      *ngIf=\"registerForm\r\n                        .get('email')\r\n                        .hasError(validation.type) && (registerForm.get('email')\r\n                        .dirty || registerForm.get('email').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n\r\n\r\n           <ion-item>\r\n              <ion-select\r\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                placeholder=\"School\"\r\n                formControlName=\"school\">\r\n                <ion-select-option\r\n                  *ngFor=\"let school of schoolList\"\r\n                  value=\"{{school}}\">{{school}}</ion-select-option>\r\n              </ion-select>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n              <ion-select\r\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                placeholder=\"Grade\"\r\n                formControlName=\"grade\">\r\n                <ion-select-option\r\n                  *ngFor=\"let grade of gradeList\"\r\n                  value=\"{{grade}}\">{{grade}}</ion-select-option>\r\n              </ion-select>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n             <ion-input\r\n              required\r\n              inputmode=\"phone\"\r\n              formControlName=\"phone\"\r\n              type=\"text\"\r\n              maxlength='10'\r\n              placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\r\n           </ion-item>\r\n           <ion-item>\r\n              <ion-select\r\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                placeholder=\"Gender\"\r\n                formControlName=\"gender\">\r\n                <ion-select-option\r\n                  value=\"Male\">Male</ion-select-option>\r\n                  <ion-select-option\r\n                  value=\"Female\">Female</ion-select-option>\r\n              </ion-select>\r\n           </ion-item>\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required>\r\n                  <ion-list-header>\r\n                    <ion-label>Lunch</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Turkey BLT & provolone (Turkey, Smokehouse Bacon, Lettuce, Tomato, Provolone, Pesto Mayo)</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Southwest Chicken Wrap (Crispy Chicken Tenders, Smoked Pepper Aioli, Roasted Corn & Peppers, Pico de Gallo)</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"Chicken\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Grilled Vegetable & Goat Cheese (Seasonal Marinated Grilled Vegetables, Balsamic Syrup, Local Goat Cheese)</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionOne\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionTwo\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionThree\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionFour\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n           <ion-item>\r\n              <ion-radio-group\r\n                required\r\n                formControlName=\"questionFive\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question </ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n         </ion-list>\r\n\r\n         <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\r\n         </ion-col>\r\n\r\n       </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid class=\"ion-hide-sm-down\">\r\n\r\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 100px\">\r\n        <ion-col size=\"4\">\r\n          <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. If your school has more than 30 students registered, you will be notified and waitlisted.\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"4\">\r\n       <form  [formGroup]=\"registerForm\"\r\n       (ngSubmit)=\"register(this.registerForm.value)\">\r\n         <ion-list class=\"line-input\">\r\n\r\n            <!-- Name -->\r\n            <ion-item>\r\n              <ion-input\r\n               #autoFucousInput\r\n               required\r\n               inputmode=\"text\"\r\n               formControlName=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"First & Last Name\"></ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Email -->\r\n           <ion-item>\r\n             <ion-input\r\n              required\r\n              inputmode=\"email\"\r\n              formControlName=\"email\"\r\n              type=\"text\"\r\n              placeholder=\"Email\"></ion-input>\r\n           </ion-item>\r\n\r\n\r\n                <!-- Email Validation-->\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                      <div class=\"error-message\"\r\n                      *ngIf=\"registerForm\r\n                        .get('email')\r\n                        .hasError(validation.type) && (registerForm.get('email')\r\n                        .dirty || registerForm.get('email').touched)\">\r\n                        {{ validation.message }}\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n\r\n            <!-- School -->\r\n           <ion-item>\r\n              <ion-select\r\n                placeholder=\"School\"\r\n                formControlName=\"school\">\r\n                <ion-select-option\r\n                  *ngFor=\"let school of schoolList\"\r\n                  value=\"school\">{{school}}</ion-select-option>\r\n              </ion-select>\r\n           </ion-item>\r\n\r\n           <!-- Grade -->\r\n           <ion-item>\r\n              <ion-select\r\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                placeholder=\"Grade\"\r\n                formControlName=\"grade\">\r\n                <ion-select-option\r\n                  *ngFor=\"let grade of gradeList\"\r\n                  value=\"grade\">{{grade}}</ion-select-option>\r\n              </ion-select>\r\n           </ion-item>\r\n\r\n           <!-- Phone -->\r\n           <ion-item>\r\n             <ion-input\r\n              required\r\n              inputmode=\"phone\"\r\n              formControlName=\"phone\"\r\n              type=\"text\"\r\n              maxlength='10'\r\n              placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\r\n           </ion-item>\r\n\r\n           <!-- Gender -->\r\n           <ion-item>\r\n              <ion-select\r\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\r\n                placeholder=\"Gender\"\r\n                formControlName=\"gender\">\r\n                <ion-select-option\r\n                  value=\"Male\">Male</ion-select-option>\r\n                  <ion-select-option\r\n                  value=\"Female\">Female</ion-select-option>\r\n              </ion-select>\r\n           </ion-item>\r\n\r\n           <!-- Lunch -->\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"lunch\">\r\n                  <ion-list-header>\r\n                    <ion-label>Lunch</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>Turkey BLT & provolone (Turkey, Smokehouse Bacon, Lettuce, Tomato, Provolone, Pesto Mayo)</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Southwest Chicken Wrap (Crispy Chicken Tenders, Smoked Pepper Aioli, Roasted Corn & Peppers, Pico de Gallo)</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"Chicken\" ></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Grilled Vegetable & Goat Cheese (Seasonal Marinated Grilled Vegetables, Balsamic Syrup, Local Goat Cheese)</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n\r\n\r\n          <!-- Interests -->\r\n          <!-- <ion-item *ngFor=\"let interest of studentInterests\">\r\n              <ion-label>{{interest.name}}</ion-label>\r\n              <ion-checkbox\r\n              formControlName=\"interests\" slot=\"end\" [(ngModel)]=\"interest.isChecked\"\r\n              (IonChange)=\"selectMember(interest.name)\">\r\n            </ion-checkbox>\r\n            </ion-item>\r\n\r\n          <!-- Survey Questions -->\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionOne\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionTwo\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionThree\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n              <ion-radio-group\r\n              required\r\n              formControlName=\"questionFour\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n              <ion-radio-group\r\n                required\r\n                formControlName=\"questionFive\">\r\n                  <ion-list-header>\r\n                    <ion-label>Pre Survey Question </ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>Answer</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n           </ion-item>\r\n         </ion-list>\r\n\r\n         <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\r\n         </ion-col>\r\n\r\n       </form>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/register/register.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/register/register.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"ion-hide-md-up\">\r\n    <ion-title>Register for {{title}} as Volunteer</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\r\n      <ion-title color=\"primary\">Register for {{title}} as Volunteer</ion-title>\r\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\r\n      </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid class=\"ion-text-center ion-hide-md-up\">\r\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 75px\">\r\n          <ion-col size-sm=\"8\" size-xs=\"10\">\r\n            <p class=\"text-header\">\r\n              Information goes here about letting the user know they are being redirected to another page to sign up as a volunteer.\r\n            </p>\r\n          </ion-col>\r\n          <form  [formGroup]=\"registerForm\"\r\n          (ngSubmit)=\"register(this.registerForm.value)\">\r\n            <ion-list class=\"line-input\">\r\n                <ion-item>\r\n                  <ion-input\r\n                   #autoFucousInput\r\n                   required\r\n                   inputmode=\"text\"\r\n                   formControlName=\"name\"\r\n                   type=\"text\"\r\n                   placeholder=\"First & Last Name\"></ion-input>\r\n                </ion-item>\r\n    \r\n               <ion-item>\r\n                 <ion-input\r\n                  required\r\n                  inputmode=\"email\"\r\n                  formControlName=\"email\"\r\n                  type=\"text\"\r\n                  placeholder=\"Email\"></ion-input>\r\n               </ion-item>\r\n            </ion-list>\r\n          </form>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- Desktop -->\r\n\r\n    <ion-grid class=\"ion-text-center ion-hide-sm-down\">\r\n\r\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 100px;\">\r\n            <ion-col size=\"4\">\r\n              <p class=\"text-header\">\r\n                Please enter your name and email address. You will be sent an email with further registration instructions.\r\n              </p>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"4\">\r\n              <form  [formGroup]=\"registerForm\"\r\n              (ngSubmit)=\"register(this.registerForm.value)\">\r\n                <ion-list class=\"line-input\">\r\n                    <ion-item>\r\n                      <ion-input\r\n                       #autoFucousInput\r\n                       required\r\n                       inputmode=\"text\"\r\n                       formControlName=\"name\"\r\n                       type=\"text\"\r\n                       placeholder=\"First & Last Name\"></ion-input>\r\n                    </ion-item>\r\n\r\n                   <ion-item>\r\n                     <ion-input\r\n                      required\r\n                      inputmode=\"email\"\r\n                      formControlName=\"email\"\r\n                      type=\"text\"\r\n                      placeholder=\"Email\"></ion-input>\r\n                   </ion-item>\r\n\r\n\r\n                   <!-- Email Validation-->\r\n                   <div class=\"validation-errors\">\r\n                       <ng-container *ngFor=\"let validation of validationMessasges.email\">\r\n                         <div class=\"error-message\"\r\n                         *ngIf=\"registerForm\r\n                           .get('email')\r\n                           .hasError(validation.type) && (registerForm.get('email')\r\n                           .dirty || registerForm.get('email').touched)\">\r\n                           {{ validation.message }}\r\n                         </div>\r\n                       </ng-container>\r\n                     </div>\r\n                </ion-list>\r\n\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                 <ion-button class=\"orange-button\" type=\"submit\">Continue</ion-button>\r\n                </ion-col>\r\n\r\n              </form>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/chaperones/register/register-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/chaperones/register/register-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/chaperones/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/chaperones/register/register.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/chaperones/register/register.module.ts ***!
  \******************************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/fairs/fair-page/chaperones/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/chaperones/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/chaperones/register/register.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/chaperones/register/register.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL2NoYXBlcm9uZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXlcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGZhaXJzXFxmYWlyLXBhZ2VcXGNoYXBlcm9uZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9jaGFwZXJvbmVzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0FDQUo7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9jaGFwZXJvbmVzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZjO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcclxuXHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItd3JhcHBlcntcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItaW5mbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pb24tcmFkaW8tZ3JvdXAge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59XHJcbiIsIi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZmFmYztcbiAgLS1wYWRkaW5nLWVuZDogMjUlO1xufVxuLmZhaXItcGFnZS10b29sYmFyLWxnIGlvbi10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xufVxuXG4ucmVnaXN0ZXItd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59XG5cbi5yZWdpc3Rlci1pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5pb24tcmFkaW8tZ3JvdXAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/chaperones/register/register.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/chaperones/register/register.page.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// Chaperones






let RegisterPage = class RegisterPage {
    constructor(activatedRoute, formBuilder, fairs, navCtrl, loading, toast, alert) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.alert = alert;
        this.disabled = true;
        this.schoolList = ['School 1', 'School 2', 'School 3'];
        this.gradeList = ['7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
        this.customAlertOptions = {
            header: 'Pizza Toppings',
            subHeader: 'Select your toppings',
            message: '$1.00 per topping',
            translucent: true
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            school: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lunch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.formOnChanges();
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        this.fairs.getFair(this.id).subscribe(fair => {
            console.log('Fair ID: ' + this.id);
            console.log(fair);
            this.title = fair['title'];
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 1000);
    }
    register(chaperone) {
        chaperone.id = this.id;
        console.log('Registering');
        this.fairs.registerChaperone(chaperone);
    }
    goBack() {
        console.log('going back');
        this.navCtrl.back();
    }
    formOnChanges() {
        this.registerForm.statusChanges.subscribe(status => {
            console.log(status);
            if (status === 'VALID') {
                this.disabled = false;
            }
        });
    }
    // Alerts
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Registered!',
                cssClass: 'registered',
                message: `You have been Registered. Please check your email (email) for details. `,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], RegisterPage.prototype, "inputElement", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/fairs/fair-page/chaperones/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/register/register-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/register/register-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/partners/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/register/register.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/register/register.module.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/fairs/fair-page/partners/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/partners/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/register/register.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/register/register.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3BhcnRuZXJzL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxmYWlyc1xcZmFpci1wYWdlXFxwYXJ0bmVyc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3BhcnRuZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0FDQUo7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9wYXJ0bmVycy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y5ZmFmYztcclxuICAtLXBhZGRpbmctZW5kOiAyNSU7XHJcblxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXdyYXBwZXJ7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWluZm8ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuaW9uLXJhZGlvLWdyb3VwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG4iLCIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcbn1cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyBpb24tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucmVnaXN0ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/partners/register/register.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/partners/register/register.page.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// Partners






let RegisterPage = class RegisterPage {
    constructor(activatedRoute, formBuilder, fairs, navCtrl, loading, toast) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.schoolList = ['School 1', 'School 2', 'School 3'];
        this.gradeList = ['7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
        this.customAlertOptions = {
            header: 'Pizza Toppings',
            subHeader: 'Select your toppings',
            message: '$1.00 per topping',
            translucent: true
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lunch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            colleagues: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 1000);
    }
    goBack() {
        console.log('going back');
        this.navCtrl.back();
    }
    register(partner) {
        partner.id = this.id;
        console.log('Registering');
        this.fairs.registerPartner(partner);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], RegisterPage.prototype, "inputElement", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/fairs/fair-page/partners/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/register/register-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/register/register-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/students/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/register/register.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/register/register.module.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/fairs/fair-page/students/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/students/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/register/register.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/register/register.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3N0dWRlbnRzL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcYWdvb2RcXFNvZnR3YXJlIERldiBQcm9qZWN0c1xcSk9VUk5pXFxVbml0ZWQgV2F5XFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxmYWlyc1xcZmFpci1wYWdlXFxzdHVkZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3N0dWRlbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0FDQUo7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9zdHVkZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y5ZmFmYztcclxuICAtLXBhZGRpbmctZW5kOiAyNSU7XHJcblxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXdyYXBwZXJ7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWluZm8ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuaW9uLXJhZGlvLWdyb3VwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG4iLCIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcbn1cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyBpb24tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucmVnaXN0ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/students/register/register.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/students/register/register.page.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// Students






let RegisterPage = class RegisterPage {
    constructor(activatedRoute, formBuilder, fairs, navCtrl, loading, toast, router) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.router = router;
        // For Checkbox
        this.interests = [];
        // tslint:disable-next-line: max-line-length
        this.schoolList = ['Central High School', 'Communications Media Arts High School', 'Davis Aerospace Technical High School', 'Henry Ford High School', 'Martin Luther King Jr. Senior High School', 'Mumford High School', 'Pershing High School', 'Western International High School', 'West Side Academy of Technology and Cyber Security', 'University High School Academy', 'Southfield Regional Academic Campus', 'Southfield High School For The Arts And Technology', 'Hazel Park High School', 'Pontiac High', 'Pontiac International Technology Academy'];
        this.gradeList = ['10th Grade', '11th Grade', '12th Grade'];
        this.studentInterests = [
            { name: 'Automotive Mobility', isChecked: false },
            { name: 'Artificial Intelligence', isChecked: false },
            { name: 'Coding', isChecked: false },
            { name: 'Computer Science', isChecked: false },
            { name: 'Cyber Security', isChecked: false },
            { name: 'Digital Media', isChecked: false },
            { name: 'Engineering', isChecked: false },
            { name: 'Graphic Design', isChecked: false },
            { name: 'Robotics', isChecked: false },
            { name: 'Software Development', isChecked: false },
            { name: 'Video Game Design', isChecked: false },
        ];
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
    }
    ngOnInit() {
        this.schoolList.sort();
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            school: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lunch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            interests: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questionOne: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questionTwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questionThree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questionFour: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questionFive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 1000);
    }
    goBack() {
        console.log('going back');
        this.navCtrl.back();
    }
    register(student) {
        student.id = this.id;
        console.log('Registering');
        this.fairs.registerStudent(student);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], RegisterPage.prototype, "inputElement", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/fairs/fair-page/students/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/register/register-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/register/register-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/volunteers/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/register/register.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/register/register.module.ts ***!
  \******************************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/fairs/fair-page/volunteers/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/fairs/fair-page/volunteers/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/register/register.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/register/register.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3ZvbHVudGVlcnMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXlcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGZhaXJzXFxmYWlyLXBhZ2VcXHZvbHVudGVlcnNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS92b2x1bnRlZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0FDQUo7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS92b2x1bnRlZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZjO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcclxuXHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItd3JhcHBlcntcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItaW5mbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pb24tcmFkaW8tZ3JvdXAge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59XHJcbiIsIi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZmFmYztcbiAgLS1wYWRkaW5nLWVuZDogMjUlO1xufVxuLmZhaXItcGFnZS10b29sYmFyLWxnIGlvbi10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xufVxuXG4ucmVnaXN0ZXItd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59XG5cbi5yZWdpc3Rlci1pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5pb24tcmFkaW8tZ3JvdXAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/fairs/fair-page/volunteers/register/register.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fairs/fair-page/volunteers/register/register.page.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// Volunteers






let RegisterPage = class RegisterPage {
    constructor(activatedRoute, formBuilder, fairs, navCtrl, loading, toast) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
        };
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.fairs.getFair(this.id).subscribe(fair => {
            console.log('Fair ID: ' + this.id);
            console.log(fair);
            this.title = fair['title'];
        });
    }
    goBack() {
        console.log('going back');
        this.navCtrl.back();
    }
    register(volunteer) {
        volunteer.id = this.id;
        console.log('Registering Volunteer');
        this.fairs.registerVolunteer(volunteer);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFucousInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], RegisterPage.prototype, "inputElement", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/fairs/fair-page/volunteers/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map