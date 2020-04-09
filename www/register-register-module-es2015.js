(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/register/register.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/chaperones/register/register.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-hide-md-up\">\n      <ion-title>Register as Chaperone</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <!-- Dekstop Toolbar -->\n    <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\n        <ion-title color=\"primary\">Register for {{title}} as Chaperone</ion-title>\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n        </ion-button>\n      </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <!-- Mobile & Tablet -->\n    <ion-grid class=\"ion-text-center ion-hide-md-up\">\n\n     <ion-row class=\"ion-justify-content-center register-wrapper\">\n        <ion-col size-sm=\"8\" size-xs=\"10\">\n          <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. You will need to go to that email and click     on the link to confirm your Registration.\n          </p>\n        </ion-col>\n\n        <ion-col size-sm=\"8\" size-xs=\"10\">\n         <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\n           <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-input\n                 #autoFucousInput\n                 required\n                 inputmode=\"text\"\n                 formControlName=\"name\"\n                 type=\"text\"\n                 placeholder=\"First & Last Name\"></ion-input>\n              </ion-item>\n             <ion-item>\n               <ion-input\n                #autoFucousInput\n                required\n                inputmode=\"email\"\n                formControlName=\"email\"\n                type=\"text\"\n                placeholder=\"Email\"></ion-input>\n             </ion-item>\n\n                  <!-- Email Validation-->\n                  <div class=\"validation-errors\">\n                      <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                        <div class=\"error-message\"\n                        *ngIf=\"registerForm\n                          .get('email')\n                          .hasError(validation.type) && (registerForm.get('email')\n                          .dirty || registerForm.get('email').touched)\">\n                          {{ validation.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n             <ion-item>\n                <ion-select\n                  interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                  placeholder=\"School\"\n                  formControlName=\"school\">\n                  <ion-select-option\n                    *ngFor=\"let school of schoolList\"\n                    value=\"{{school}}\">{{school}}</ion-select-option>\n                </ion-select>\n             </ion-item>\n             <ion-item>\n               <ion-input\n                required\n                inputmode=\"phone\"\n                formControlName=\"phone\"\n                type=\"text\"\n                maxlength='10'\n                minlength='10'\n                placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\n             </ion-item>\n             <ion-item>\n                <ion-select\n                  interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                  placeholder=\"Gender\"\n                  formControlName=\"gender\">\n                  <ion-select-option\n                    value=\"Male\">Male</ion-select-option>\n                    <ion-select-option\n                    value=\"Female\">Female</ion-select-option>\n                </ion-select>\n             </ion-item>\n             <ion-item>\n                <ion-radio-group\n                required\n                formControlName=\"lunch\">\n                    <ion-list-header>\n                      <ion-label>Lunch</ion-label>\n                    </ion-list-header>\n                    <ion-item>\n                      <ion-label>Apple</ion-label>\n                      <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>Grape</ion-label>\n                      <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>Cherry</ion-label>\n                      <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                    </ion-item>\n                  </ion-radio-group>\n             </ion-item>\n           </ion-list>\n\n           <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button [disabled]=\"disabled\" class=\"orange-button\" type=\"submit\">Register</ion-button>\n           </ion-col>\n\n         </form>\n        </ion-col>\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button (click)=\"register()\">\n            Register\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Desktop -->\n    <ion-grid class=\"ion-text-center ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 100px\">\n        <ion-col push=\"2\" size=\"5\">\n          <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email.\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col push=\"2\" size=\"5\">\n         <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\n           <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-input\n                 #autoFucousInput\n                 required\n                 inputmode=\"text\"\n                 formControlName=\"name\"\n                 type=\"text\"\n                 placeholder=\"First & Last Name\"></ion-input>\n              </ion-item>\n             <ion-item>\n               <ion-input\n                #autoFucousInput\n                required\n                inputmode=\"email\"\n                formControlName=\"email\"\n                type=\"text\"\n                placeholder=\"Email\"></ion-input>\n             </ion-item>\n\n                  <!-- Email Validation-->\n                  <div class=\"validation-errors\">\n                      <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                        <div class=\"error-message\"\n                        *ngIf=\"registerForm\n                          .get('email')\n                          .hasError(validation.type) && (registerForm.get('email')\n                          .dirty || registerForm.get('email').touched)\">\n                          {{ validation.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n             <ion-item>\n                <ion-select\n                  interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                  placeholder=\"School\"\n                  formControlName=\"school\">\n                  <ion-select-option\n                    *ngFor=\"let school of schoolList\"\n                    value=\"{{school}}\">{{school}}</ion-select-option>\n                </ion-select>\n             </ion-item>\n             <ion-item>\n               <ion-input\n                required\n                inputmode=\"phone\"\n                formControlName=\"phone\"\n                type=\"text\"\n                maxlength='10'\n                placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\n             </ion-item>\n             <ion-item>\n                <ion-radio-group\n                required\n                formControlName=\"lunch\">\n                    <ion-list-header>\n                      <ion-label>Lunch</ion-label>\n                    </ion-list-header>\n                    <ion-item>\n                      <ion-label>Turkey</ion-label>\n                      <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>Ham</ion-label>\n                      <ion-radio slot=\"start\" color=\"tertiary\" value=\"Ham\" checked></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>Veggie</ion-label>\n                      <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\n                    </ion-item>\n                  </ion-radio-group>\n             </ion-item>\n           </ion-list>\n\n           <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\n           </ion-col>\n\n         </form>\n        </ion-col>\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button (click)=\"register()\">\n            Register\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/register/register.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/partners/register/register.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-hide-md-up\">\n      <ion-title>Register for {{title}} as Partner</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n\n    <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\n        <ion-title color=\"primary\">Register for {{title}} as Partner</ion-title>\n        <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n        </ion-button>\n      </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-grid  class=\"ion-text-center ion-hide-md-up\">\n\n      <!-- Mobile & Tablet -->\n        <ion-row class=\"ion-justify-content-center register-wrapper\">\n            <ion-col size-sm=\"8\" size-xs=\"10\">\n\n            <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. If your school has more than 30 students r    registered, you will be notified and waitlisted.\n            </p>\n            </ion-col>\n\n            <ion-col size-sm=\"8\" size-xs=\"10\">\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\n                <ion-list class=\"line-input\">\n                  <ion-item>\n                     <ion-input\n                     #autoFucousInput\n                     required\n                     inputmode=\"text\"\n                     formControlName=\"name\"\n                      type=\"text\"\n                      placeholder=\"Contact First & Last Name\"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                     <ion-input\n                      #autoFucousInput\n                      required\n                      inputmode=\"email\"\n                      formControlName=\"email\"\n                      type=\"text\"\n                      placeholder=\"Contact Email\"></ion-input>\n                  </ion-item>\n\n                    <!-- Email Validation-->\n                    <div class=\"validation-errors\">\n                        <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                          <div class=\"error-message\"\n                          *ngIf=\"registerForm\n                            .get('email')\n                            .hasError(validation.type) && (registerForm.get('email')\n                            .dirty || registerForm.get('email').touched)\">\n                            {{ validation.message }}\n                          </div>\n                        </ng-container>\n                      </div>\n\n               <ion-item>\n                 <ion-input\n                  required\n                  inputmode=\"phone\"\n                  formControlName=\"phone\"\n                  type=\"text\"\n                  maxlength='10'\n                  placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\n               </ion-item>\n\n                  <ion-item>\n                    <ion-input\n                     required\n                     formControlName=\"logo\"\n                     type=\"file\"\n                     placeholder=\"Logo\"></ion-input>\n                  </ion-item>\n\n                      <ion-item>\n                        <ion-input\n                         required\n                         formControlName=\"company\"\n                         type=\"text\"\n                         placeholder=\"Company/Organization\"></ion-input>\n                      </ion-item>\n\n               <ion-item>\n                  <ion-radio-group\n                  required\n                  formControlName=\"lunch\">\n                      <ion-list-header>\n                        <ion-label>Lunch</ion-label>\n                      </ion-list-header>\n                      <ion-item>\n                        <ion-label>Apple</ion-label>\n                        <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                      </ion-item>\n\n                      <ion-item>\n                        <ion-label>Grape</ion-label>\n                        <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                      </ion-item>\n\n                      <ion-item>\n                        <ion-label>Cherry</ion-label>\n                        <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                      </ion-item>\n                    </ion-radio-group>\n               </ion-item>\n\n               <ion-item>\n                  <ion-textarea\n                  formControlName=\"colleagues\" rows=\"6\" cols=\"20\" placeholder=\"Enter any of your colleagues names here, each seperated by a comma ( , )\"></ion-textarea>\n                </ion-item>\n             </ion-list>\n\n             <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\n             </ion-col>\n\n           </form>\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <!-- Desktop -->\n\n    <ion-grid class=\"ion-text-center ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 100px\">\n          <ion-col push=\"2\" size=\"5\">\n            <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email.\n            </p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-right register-wrapper\">\n\n          <ion-col size=\"5\" offset=\"2\">\n           <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(this.registerForm.value)\">\n             <ion-list class=\"line-input\">\n               <ion-item>\n                 <ion-input\n                  #autoFucousInput\n                  required\n                  inputmode=\"text\"\n                  formControlName=\"name\"\n                  type=\"text\"\n                  placeholder=\"Contact First & Last Name\"></ion-input>\n               </ion-item>\n               <ion-item>\n                 <ion-input\n                  #autoFucousInput\n                  required\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"text\"\n                  placeholder=\"Contact Email\"></ion-input>\n               </ion-item>\n\n                    <!-- Email Validation-->\n                    <div class=\"validation-errors\">\n                        <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                          <div class=\"error-message\"\n                          *ngIf=\"registerForm\n                            .get('email')\n                            .hasError(validation.type) && (registerForm.get('email')\n                            .dirty || registerForm.get('email').touched)\">\n                            {{ validation.message }}\n                          </div>\n                        </ng-container>\n                      </div>\n\n               <ion-item>\n                 <ion-input\n                  required\n                  inputmode=\"phone\"\n                  formControlName=\"phone\"\n                  type=\"text\"\n                  maxlength='10'\n                  placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\n               </ion-item>\n\n                  <ion-item>\n                    <ion-input\n                     required\n                     formControlName=\"logo\"\n                     type=\"file\"\n                     placeholder=\"Logo\"></ion-input>\n                  </ion-item>\n\n                      <ion-item>\n                        <ion-input\n                         required\n                         formControlName=\"company\"\n                         type=\"text\"\n                         placeholder=\"Company/Organization\"></ion-input>\n                      </ion-item>\n\n               <ion-item>\n                  <ion-radio-group\n                  required\n                  formControlName=\"lunch\">\n                      <ion-list-header>\n                        <ion-label>Lunch</ion-label>\n                      </ion-list-header>\n                      <ion-item>\n                        <ion-label>Turkey</ion-label>\n                        <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\n                      </ion-item>\n\n                      <ion-item>\n                        <ion-label>Ham</ion-label>\n                        <ion-radio slot=\"start\" color=\"tertiary\" value=\"Ham\" checked></ion-radio>\n                      </ion-item>\n\n                      <ion-item>\n                        <ion-label>Veggie</ion-label>\n                        <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\n                      </ion-item>\n                    </ion-radio-group>\n               </ion-item>\n\n               <ion-item>\n                  <ion-textarea\n                  formControlName=\"colleagues\" rows=\"6\" cols=\"20\" placeholder=\"Enter any of your colleagues names here, each seperated by a comma ( , )\"></ion-textarea>\n                </ion-item>\n             </ion-list>\n\n             <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\n             </ion-col>\n\n           </form>\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/register/register.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/students/register/register.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ion-hide-md-up\">\n    <ion-title>Register for {{title}} as Student</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <!-- Desktop Toolbar -->\n  <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\n      <ion-title color=\"primary\">Register for {{title}} as Student</ion-title>\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n      </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Mobile and Tablet -->\n  <ion-grid class=\"ion-text-center ion-hide-md-up\">\n\n    <ion-row class=\"ion-justify-content-center register-wrapper ion-hide-md-up\">\n\n      <ion-col size-sm=\"8\" size-xs=\"10\">\n\n            <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. If your school has more than 30 students registered, you will be notified and waitlisted.\n            </p>\n\n      </ion-col>\n      <ion-col size-sm=\"8\" size-xs=\"10\">\n\n       <form  [formGroup]=\"registerForm\"\n       (ngSubmit)=\"register(this.registerForm.value)\">\n         <ion-list class=\"line-input\">\n            <ion-item>\n              <ion-input\n               #autoFucousInput\n               required\n               inputmode=\"text\"\n               formControlName=\"name\"\n               type=\"text\"\n               placeholder=\"First & Last Name\"></ion-input>\n            </ion-item>\n\n           <ion-item>\n             <ion-input\n              required\n              inputmode=\"email\"\n              formControlName=\"email\"\n              type=\"text\"\n              placeholder=\"Email\"></ion-input>\n           </ion-item>\n\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"registerForm\n                        .get('email')\n                        .hasError(validation.type) && (registerForm.get('email')\n                        .dirty || registerForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n\n           <ion-item>\n              <ion-select\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                placeholder=\"School\"\n                formControlName=\"school\">\n                <ion-select-option\n                  *ngFor=\"let school of schoolList\"\n                  value=\"{{school}}\">{{school}}</ion-select-option>\n              </ion-select>\n           </ion-item>\n\n           <ion-item>\n              <ion-select\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                placeholder=\"Grade\"\n                formControlName=\"grade\">\n                <ion-select-option\n                  *ngFor=\"let grade of gradeList\"\n                  value=\"{{grade}}\">{{grade}}</ion-select-option>\n              </ion-select>\n           </ion-item>\n\n           <ion-item>\n             <ion-input\n              required\n              inputmode=\"phone\"\n              formControlName=\"phone\"\n              type=\"text\"\n              maxlength='10'\n              placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\n           </ion-item>\n           <ion-item>\n              <ion-select\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                placeholder=\"Gender\"\n                formControlName=\"gender\">\n                <ion-select-option\n                  value=\"Male\">Male</ion-select-option>\n                  <ion-select-option\n                  value=\"Female\">Female</ion-select-option>\n              </ion-select>\n           </ion-item>\n           <ion-item>\n              <ion-radio-group\n              required>\n                  <ion-list-header>\n                    <ion-label>Lunch</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Turkey BLT & provolone (Turkey, Smokehouse Bacon, Lettuce, Tomato, Provolone, Pesto Mayo)</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Southwest Chicken Wrap (Crispy Chicken Tenders, Smoked Pepper Aioli, Roasted Corn & Peppers, Pico de Gallo)</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"Chicken\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Grilled Vegetable & Goat Cheese (Seasonal Marinated Grilled Vegetables, Balsamic Syrup, Local Goat Cheese)</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n\n\n\n\n\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionOne\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionTwo\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionThree\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionFour\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n           <ion-item>\n              <ion-radio-group\n                required\n                formControlName=\"questionFive\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question </ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n         </ion-list>\n\n         <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\n         </ion-col>\n\n       </form>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-sm-down\">\n\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 100px\">\n        <ion-col size=\"4\">\n          <p class=\"text-header\">After you have successfully registered, you will be sent a confirmation email. If your school has more than 30 students registered, you will be notified and waitlisted.\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"4\">\n       <form  [formGroup]=\"registerForm\"\n       (ngSubmit)=\"register(this.registerForm.value)\">\n         <ion-list class=\"line-input\">\n\n            <!-- Name -->\n            <ion-item>\n              <ion-input\n               #autoFucousInput\n               required\n               inputmode=\"text\"\n               formControlName=\"name\"\n               type=\"text\"\n               placeholder=\"First & Last Name\"></ion-input>\n            </ion-item>\n\n            <!-- Email -->\n           <ion-item>\n             <ion-input\n              required\n              inputmode=\"email\"\n              formControlName=\"email\"\n              type=\"text\"\n              placeholder=\"Email\"></ion-input>\n           </ion-item>\n\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"registerForm\n                        .get('email')\n                        .hasError(validation.type) && (registerForm.get('email')\n                        .dirty || registerForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n            <!-- School -->\n           <ion-item>\n              <ion-select\n                placeholder=\"School\"\n                formControlName=\"school\">\n                <ion-select-option\n                  *ngFor=\"let school of schoolList\"\n                  value=\"school\">{{school}}</ion-select-option>\n              </ion-select>\n           </ion-item>\n\n           <!-- Grade -->\n           <ion-item>\n              <ion-select\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                placeholder=\"Grade\"\n                formControlName=\"grade\">\n                <ion-select-option\n                  *ngFor=\"let grade of gradeList\"\n                  value=\"grade\">{{grade}}</ion-select-option>\n              </ion-select>\n           </ion-item>\n\n           <!-- Phone -->\n           <ion-item>\n             <ion-input\n              required\n              inputmode=\"phone\"\n              formControlName=\"phone\"\n              type=\"text\"\n              maxlength='10'\n              placeholder=\"Phone (xxx) xxx - xxxxx\"></ion-input>\n           </ion-item>\n\n           <!-- Gender -->\n           <ion-item>\n              <ion-select\n                interfaceOptions=\"customAlertOptions\"   interface=\"alert\"\n                placeholder=\"Gender\"\n                formControlName=\"gender\">\n                <ion-select-option\n                  value=\"Male\">Male</ion-select-option>\n                  <ion-select-option\n                  value=\"Female\">Female</ion-select-option>\n              </ion-select>\n           </ion-item>\n\n           <!-- Lunch -->\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"lunch\">\n                  <ion-list-header>\n                    <ion-label>Lunch</ion-label>\n                  </ion-list-header>\n                  <ion-item class=\"ion-text-wrap\">\n                    <ion-label>Turkey BLT & provolone (Turkey, Smokehouse Bacon, Lettuce, Tomato, Provolone, Pesto Mayo)</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"Turkey\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Southwest Chicken Wrap (Crispy Chicken Tenders, Smoked Pepper Aioli, Roasted Corn & Peppers, Pico de Gallo)</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"Chicken\" ></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Grilled Vegetable & Goat Cheese (Seasonal Marinated Grilled Vegetables, Balsamic Syrup, Local Goat Cheese)</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"Veggie\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n\n\n          <!-- Interests -->\n          <ion-item *ngFor=\"let interest of studentInterests\">\n              <ion-label>{{interest.name}}</ion-label>\n              <ion-checkbox\n              formControlName=\"interests\" slot=\"end\" [(ngModel)]=\"interest.isChecked\"\n              ></ion-checkbox>\n            </ion-item>\n\n          <!-- Survey Questions -->\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionOne\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionTwo\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionThree\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n\n           <ion-item>\n              <ion-radio-group\n              required\n              formControlName=\"questionFour\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n\n           <ion-item>\n              <ion-radio-group\n                required\n                formControlName=\"questionFive\">\n                  <ion-list-header>\n                    <ion-label>Pre Survey Question </ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\" checked></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Answer</ion-label>\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n           </ion-item>\n         </ion-list>\n\n         <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button class=\"orange-button\" type=\"submit\">Register</ion-button>\n         </ion-col>\n\n       </form>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/register/register.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fair-page/volunteers/register/register.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ion-hide-md-up\">\n    <ion-title>Register for {{title}} as Volunteer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n  <ion-toolbar class=\"ion-hide-sm-down fair-page-toolbar-lg\">\n      <ion-title color=\"primary\">Register for {{title}} as Volunteer</ion-title>\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n      </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center ion-hide-md-up\">\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 75px\">\n          <ion-col size-sm=\"8\" size-xs=\"10\">\n            <p class=\"text-header\">\n              Information goes here about letting the user know they are being redirected to another page to sign up as a volunteer.\n            </p>\n          </ion-col>\n          <form  [formGroup]=\"registerForm\"\n          (ngSubmit)=\"register(this.registerForm.value)\">\n            <ion-list class=\"line-input\">\n                <ion-item>\n                  <ion-input\n                   #autoFucousInput\n                   required\n                   inputmode=\"text\"\n                   formControlName=\"name\"\n                   type=\"text\"\n                   placeholder=\"First & Last Name\"></ion-input>\n                </ion-item>\n    \n               <ion-item>\n                 <ion-input\n                  required\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"text\"\n                  placeholder=\"Email\"></ion-input>\n               </ion-item>\n            </ion-list>\n          </form>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n\n\n\n    <!-- Desktop -->\n\n    <ion-grid class=\"ion-text-center ion-hide-sm-down\">\n\n        <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 100px;\">\n            <ion-col size=\"4\">\n              <p class=\"text-header\">\n                Please enter your name and email address. You will be sent an email with further registration instructions.\n              </p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"4\">\n              <form  [formGroup]=\"registerForm\"\n              (ngSubmit)=\"register(this.registerForm.value)\">\n                <ion-list class=\"line-input\">\n                    <ion-item>\n                      <ion-input\n                       #autoFucousInput\n                       required\n                       inputmode=\"text\"\n                       formControlName=\"name\"\n                       type=\"text\"\n                       placeholder=\"First & Last Name\"></ion-input>\n                    </ion-item>\n\n                   <ion-item>\n                     <ion-input\n                      required\n                      inputmode=\"email\"\n                      formControlName=\"email\"\n                      type=\"text\"\n                      placeholder=\"Email\"></ion-input>\n                   </ion-item>\n\n\n                   <!-- Email Validation-->\n                   <div class=\"validation-errors\">\n                       <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                         <div class=\"error-message\"\n                         *ngIf=\"registerForm\n                           .get('email')\n                           .hasError(validation.type) && (registerForm.get('email')\n                           .dirty || registerForm.get('email').touched)\">\n                           {{ validation.message }}\n                         </div>\n                       </ng-container>\n                     </div>\n                </ion-list>\n\n                <ion-col size=\"12\" class=\"ion-text-center\">\n                 <ion-button class=\"orange-button\" type=\"submit\">Continue</ion-button>\n                </ion-col>\n\n              </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL2NoYXBlcm9uZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYWlycy9mYWlyLXBhZ2UvY2hhcGVyb25lcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7QUNERjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FES0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWlycy9mYWlyLXBhZ2UvY2hhcGVyb25lcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcblxuXG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVye1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucmVnaXN0ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuIiwiLmZhaXItcGFnZS10b29sYmFyLWxnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICAtLXBhZGRpbmctZW5kOiAyNSU7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnJlZ2lzdGVyLWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3BhcnRuZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3BhcnRuZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0FDQUo7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9wYXJ0bmVycy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcblxuXG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVye1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucmVnaXN0ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuIiwiLmZhaXItcGFnZS10b29sYmFyLWxnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICAtLXBhZGRpbmctZW5kOiAyNSU7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnJlZ2lzdGVyLWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3N0dWRlbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3N0dWRlbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0FDQUo7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhaXJzL2ZhaXItcGFnZS9zdHVkZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcblxuXG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVye1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucmVnaXN0ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuIiwiLmZhaXItcGFnZS10b29sYmFyLWxnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICAtLXBhZGRpbmctZW5kOiAyNSU7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnJlZ2lzdGVyLWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".fair-page-toolbar-lg {\n  --background: #f9fafc;\n  --padding-end: 25%;\n}\n.fair-page-toolbar-lg ion-title {\n  padding-left: 100px;\n  font-size: 1.4em;\n  font-weight: 900;\n}\nion-item {\n  margin: 30px 0 30px 0;\n}\n.register-wrapper {\n  margin-top: 75px;\n}\n.register-info {\n  position: fixed;\n}\nion-radio-group {\n  padding: 10px;\n}\nion-radio-group ion-item {\n  border: none;\n}\nion-list-header ion-label {\n  font-size: 1.4em;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpci1wYWdlL3ZvbHVudGVlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYWlycy9mYWlyLXBhZ2Uvdm9sdW50ZWVycy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7QUNERjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FES0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWlycy9mYWlyLXBhZ2Uvdm9sdW50ZWVycy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIC0tcGFkZGluZy1lbmQ6IDI1JTtcblxuXG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVye1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucmVnaXN0ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuIiwiLmZhaXItcGFnZS10b29sYmFyLWxnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICAtLXBhZGRpbmctZW5kOiAyNSU7XG59XG4uZmFpci1wYWdlLXRvb2xiYXItbGcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG59XG5cbi5yZWdpc3Rlci13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnJlZ2lzdGVyLWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */");

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