(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fair-page-fair-page-module~pages-fairs-selection-fair-page-fair-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/selection/fair-page/fair-page.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/selection/fair-page/fair-page.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsSelectionFairPageFairPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <p class=\"toolbar-title\">Back</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"this.getYPosition($event)\">\n\n  <!-- fab placed to the bottom start -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"register(this.id)\">\n\n      <!-- <ion-icon name=\"add\" size=\"large\"></ion-icon> -->\n      <ion-icon src=\"../../assets/icons/register-icon.svg\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Info & Agenda -->\n  <div id=\"info\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"fair-header\" size-xs=\"10\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n          <div style=\"padding: 10px;\">\n            <h2 class=\"usertype\">{{usertype}}</h2>\n            <h1 class=\"fair-name\">{{fairName}}</h1>\n            <h5 class=\"fair-date\">\n              <ion-icon slot=\"start\" src=\"../../assets/icons/time-icon.svg\"></ion-icon>{{date}}</h5>\n            <h5 class=\"fair-address\">\n              <ion-icon slot=\"start\" src=\"../../assets/icons/location-icon.svg\"></ion-icon>{{address}}, {{city}}, {{state}}, {{zip}}</h5>\n            <p class=\"fair-summary\">{{summary}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- Agenda -->\n  <div>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"agenda\" size-xs=\"10\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1>Agenda</h1>\n        <ion-list>\n          <ion-item class=\"agenda-item\" *ngFor=\"let item of agenda\" lines=\"\">\n            <ion-badge slot=\"start\">{{item.time}}</ion-badge>\n            <ion-label>\n              <h2>{{item.title}}</h2>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- Parking -->\n  <div #parking id=\"parking\" [className]=\"parkingPopIn ? 'parking' : 'off'\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n          <img style=\"width: 100%;\" src=\"../../../../../assets/icons/parking-placeholder.svg\" alt=\"\" srcset=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  <!-- FAQ -->\n  <div #faq id=\"faq\" [className]=\"faqPopIn ? 'faq' : 'off'\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col  size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n          <ion-list>\n            <h3 style=\"margin-bottom: 35px;\">Frequently Asked Questions</h3>\n            <div *ngFor=\"let question of faqInfo\">\n              <h5>{{question.question}}</h5>\n              <p>{{question.answer}}</p>\n              <div class=\"divider\"></div>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- Booth Partners -->\n  <div #boothPartners id=\"boothPartners\" [className]=\"boothPartnersPopIn ? 'booth-partners' : 'off'\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n          <h1 style=\"margin-top: 40px;\">Booth Partners</h1>\n          <div *ngFor=\"let partner of partners\">\n            <div *ngIf=\"partner.verified === true\">\n              <ion-row style=\"margin-bottom: 80px;\">\n                <ion-col size=\"4\">\n                  <img src=\"{{partner.logo}}\" alt=\"\">\n                  <a class=\"partner-link\" href=\"http://www.google.com\">Website</a>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <h3 class=\"organization\">{{partner.organization}}</h3>\n                  <p class=\"partner-description\">{{partner.description}}</p>\n                  <div class=\"divider\"></div>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- Survey -->\n  <div #survey id=\"survey\" [className]=\"surveyPopIn ? 'survey' : 'off'\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n          <h1 style=\"margin-top: 40px;\">Survey</h1>\n          <ion-list class=\"line-input\">\n            <!-- Post Suvery Questions -->\n            <h3>Please fill out the entire form to successfully submit the survey.</h3>\n            <ion-item>\n              <ion-input #email type=\"email\" placeholder=\"Email\"></ion-input>\n            </ion-item>\n\n            <!-- Question 1 -->\n            <ion-radio-group\n            required (ionChange)=\"question1Handler($event)\">\n              <ion-list-header>\n                <h3>Question 1\n                  <ion-text color=\"danger\">*</ion-text></h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n            <div class=\"divider\"></div>\n\n            <!-- Question 2 -->\n            <ion-radio-group\n            required (ionChange)=\"question2Handler($event)\">\n              <ion-list-header>\n                <h3>Question 2\n                  <ion-text color=\"danger\">*</ion-text></h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n            <div class=\"divider\"></div>\n\n            <!-- Question 3 -->\n            <ion-radio-group\n            required\n            (ionChange)=\"question3Handler($event)\">\n              <ion-list-header>\n                <h3>Question 3\n                  <ion-text color=\"danger\">*</ion-text></h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n            <div class=\"divider\"></div>\n\n            <!-- Question 4 -->\n            <ion-radio-group\n            required\n            (ionChange)=\"question4Handler($event)\">\n              <ion-list-header>\n                <h3>Question 4\n                  <ion-text color=\"danger\">*</ion-text>\n                </h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n            <div class=\"divider\"></div>\n\n            <!-- Question 5 -->\n            <ion-radio-group\n            required\n            (ionChange)=\"question5Handler($event)\">\n              <ion-list-header>\n                <h3>Question 5\n                  <ion-text color=\"danger\">*</ion-text>\n                </h3>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Cord</ion-label>\n                <ion-radio value=\"cord\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Duesenberg</ion-label>\n                <ion-radio value=\"duesenberg\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Hudson</ion-label>\n                <ion-radio value=\"hudson\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Packard</ion-label>\n                <ion-radio value=\"packard\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Studebaker</ion-label>\n                <ion-radio value=\"studebaker\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n            <div class=\"divider\"></div>\n\n          </ion-list>\n        </ion-col>\n        <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n          <ion-button class=\"green-button\" (click)=\"submitSurvey()\"\n          [disabled]=\" !this.email.value || !this.surveyObject.question1.answer || !this.surveyObject.question2.answer || !this.surveyObject.question3.answer || !this.surveyObject.question4.answer || !this.surveyObject.question5.answer\">\n            Submit\n          </ion-button>\n          <p class=\"survey-validation\" *ngIf=\" !this.email.value || !this.surveyObject.question1.answer || !this.surveyObject.question2.answer || !this.surveyObject.question3.answer || !this.surveyObject.question4.answer || !this.surveyObject.question5.answer\">\n            In order to submit the survey, please answer all the questions first.\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/fair-page/fair-page-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/fairs/selection/fair-page/fair-page-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: FairPagePageRoutingModule */

  /***/
  function srcAppPagesFairsSelectionFairPageFairPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPagePageRoutingModule", function () {
      return FairPagePageRoutingModule;
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


    var _fair_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fair-page.page */
    "./src/app/pages/fairs/selection/fair-page/fair-page.page.ts");

    const routes = [{
      path: '',
      component: _fair_page_page__WEBPACK_IMPORTED_MODULE_3__["FairPagePage"]
    }, {
      path: 'fair-page/:fair/:usertype/:summary/:description/:agenda/:faq',
      loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
      /*! ./fair-page.module */
      "./src/app/pages/fairs/selection/fair-page/fair-page.module.ts")).then(m => m.FairPagePageModule)
    }];
    let FairPagePageRoutingModule = class FairPagePageRoutingModule {};
    FairPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FairPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/fair-page/fair-page.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/fairs/selection/fair-page/fair-page.module.ts ***!
    \*********************************************************************/

  /*! exports provided: FairPagePageModule */

  /***/
  function srcAppPagesFairsSelectionFairPageFairPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPagePageModule", function () {
      return FairPagePageModule;
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


    var _fair_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fair-page-routing.module */
    "./src/app/pages/fairs/selection/fair-page/fair-page-routing.module.ts");
    /* harmony import */


    var _fair_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fair-page.page */
    "./src/app/pages/fairs/selection/fair-page/fair-page.page.ts");
    /* harmony import */


    var src_app_modals_fair_student_register_fair_student_register_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/fair-student-register/fair-student-register.module */
    "./src/app/modals/fair-student-register/fair-student-register.module.ts");
    /* harmony import */


    var src_app_modals_fair_chaperone_register_fair_chaperone_register_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modals/fair-chaperone-register/fair-chaperone-register.module */
    "./src/app/modals/fair-chaperone-register/fair-chaperone-register.module.ts");
    /* harmony import */


    var src_app_modals_fair_volunteer_register_fair_volunteer_register_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modals/fair-volunteer-register/fair-volunteer-register.module */
    "./src/app/modals/fair-volunteer-register/fair-volunteer-register.module.ts");
    /* harmony import */


    var src_app_modals_fair_partner_register_fair_partner_register_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modals/fair-partner-register/fair-partner-register.module */
    "./src/app/modals/fair-partner-register/fair-partner-register.module.ts");

    let FairPagePageModule = class FairPagePageModule {};
    FairPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fair_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairPagePageRoutingModule"], src_app_modals_fair_student_register_fair_student_register_module__WEBPACK_IMPORTED_MODULE_7__["FairStudentRegisterPageModule"], src_app_modals_fair_chaperone_register_fair_chaperone_register_module__WEBPACK_IMPORTED_MODULE_8__["FairChaperoneRegisterPageModule"], src_app_modals_fair_volunteer_register_fair_volunteer_register_module__WEBPACK_IMPORTED_MODULE_9__["FairVolunteerRegisterPageModule"], src_app_modals_fair_partner_register_fair_partner_register_module__WEBPACK_IMPORTED_MODULE_10__["FairPartnerRegisterPageModule"]],
      declarations: [_fair_page_page__WEBPACK_IMPORTED_MODULE_6__["FairPagePage"]]
    })], FairPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/fair-page/fair-page.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/fairs/selection/fair-page/fair-page.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsSelectionFairPageFairPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: linear-gradient(#4dc066, #2da847);\n  --background-hover: none;\n  position: relative;\n  bottom: 50px;\n  right: 20px;\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n}\nion-fab-button ion-icon {\n  font-size: 3.2em;\n}\n.fair-header {\n  height: auto;\n  padding: 30px 0;\n}\nh1 {\n  color: #005191;\n  margin-bottom: 20px;\n}\n.usertype {\n  text-transform: capitalize;\n  background: #faa71b;\n  width: auto;\n  color: white;\n  padding: 5px 0px 5px 15px;\n  border-radius: 5px;\n  margin-bottom: 0px;\n}\n.fair-date ion-icon {\n  font-size: 2.2em;\n  position: relative;\n  top: 10px;\n}\n.fair-address {\n  border-bottom: 1px solid #999;\n  padding-bottom: 30px;\n  position: relative;\n  top: -20px;\n}\n.fair-address ion-icon {\n  font-size: 2.2em;\n  position: relative;\n  top: 10px;\n}\n.fair-summary {\n  padding: 10px;\n  font-size: 0.9em;\n  line-height: 1.3em;\n}\n#info {\n  background: #edf3f8;\n}\n.agenda {\n  padding: 1.5em 2em 3em 2em;\n  opacity: 0;\n  height: auto;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: popin 500ms ease forwards;\n          animation: popin 500ms ease forwards;\n  border-bottom: 1px solid #dddddd;\n}\n.parking {\n  padding: 1.5em 2em 3em 2em;\n  height: auto;\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: popin 1s ease forwards;\n          animation: popin 1s ease forwards;\n  border-bottom: 1px solid #dddddd;\n}\n.faq {\n  padding: 1.5em 2em 3em 2em;\n  height: auto;\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: popin 1s ease forwards;\n          animation: popin 1s ease forwards;\n  border-bottom: 1px solid #dddddd;\n}\n.booth-partners {\n  padding: 1.5em 2em 3em 2em;\n  border-bottom: 1px solid #dddddd;\n  height: auto;\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: popin 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: popin 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n.booth-partners img {\n  height: 80px;\n  width: 80px;\n  display: inline-block;\n  border-radius: 100px;\n  position: relative;\n  top: 10px;\n}\n.booth-partners .partner-link {\n  background: #edf3f8;\n  color: #005191;\n  padding: 8px 13px;\n  font-weight: 500;\n  border-radius: 5px;\n  position: relative;\n  top: 30px;\n  width: 100px;\n  text-decoration: none;\n}\n.booth-partners .organization {\n  background: #faa71b;\n  border-radius: 5px;\n  margin-bottom: 25px;\n  color: white;\n  padding: 0.3em;\n}\n.booth-partners .partner-description {\n  position: relative;\n  top: -10px;\n  font-size: 0.9em;\n  line-height: 1.3em;\n}\n.booth-partners .divider {\n  width: 100px;\n  height: 1.5px;\n  background: #c7c6c6;\n  float: right;\n}\n.survey {\n  padding: 1.5em 2em 3em 2em;\n  height: auto;\n  opacity: 0;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-animation: popin 1s ease forwards;\n          animation: popin 1s ease forwards;\n}\n.survey .divider {\n  width: 100px;\n  height: 1.5px;\n  background: #c7c6c6;\n  float: right;\n}\n.survey .survey-validation {\n  background: #edf3f8;\n  padding: 0.8em;\n  margin-top: 30px;\n}\n.agenda-item {\n  margin: 0px 0px 15px 0px;\n  position: relative;\n  left: -15px;\n}\n.agenda-item ion-badge {\n  font-size: 1em;\n  width: 4em;\n  padding: 12px;\n}\n.agenda-item h2 {\n  font-size: 1.3em;\n}\nh5 {\n  color: #666;\n}\nion-radio-group h3 {\n  margin-top: 80px;\n}\n.green-button {\n  margin-top: 80px;\n}\n.off {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-animation: popin-reverse 1s ease forwards;\n          animation: popin-reverse 1s ease forwards;\n}\n@-webkit-keyframes popin {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n@keyframes popin {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n@-webkit-keyframes popin-reverse {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n@keyframes popin-reverse {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvc2VsZWN0aW9uL2ZhaXItcGFnZS9mYWlyLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYWlycy9zZWxlY3Rpb24vZmFpci1wYWdlL2ZhaXItcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjtBREdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FESUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0RKO0FES0E7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRkY7QURHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLG1CQUFBO0FDRkY7QURLQTtFQUNFLDBCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLGdDQUFBO0FDSEY7QURNQTtFQUNFLDBCQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLGdDQUFBO0FDSkY7QURPQTtFQUNFLDBCQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLGdDQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFpREEsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsK0VBQUE7VUFBQSx1RUFBQTtBQ3JERjtBRE9FO0VBQ0UsWUFBQTtFQUFjLFdBQUE7RUFDZCxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDSko7QURPRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0xKO0FEUUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ05KO0FEU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUEo7QURVRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDUko7QURrQkE7RUFDRSwwQkFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUNoQkY7QURrQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2hCSjtBRG1CRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDakJKO0FEcUJBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNsQkY7QURtQkU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNqQko7QURtQkU7RUFDRSxnQkFBQTtBQ2pCSjtBRDBCQTtFQUNFLFdBQUE7QUN2QkY7QUQyQkU7RUFDRSxnQkFBQTtBQ3hCSjtBRDRCQTtFQUNFLGdCQUFBO0FDekJGO0FENEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ3pCRjtBRDZCQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQzFCRjtFRDZCQTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0VDM0JGO0FBQ0Y7QURtQkE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUMxQkY7RUQ2QkE7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7WUFBQSx5QkFBQTtFQzNCRjtBQUNGO0FEOEJBO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDNUJGO0VEK0JBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUM3QkY7QUFDRjtBRHFCQTtFQUNFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQzVCRjtFRCtCQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDN0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWlycy9zZWxlY3Rpb24vZmFpci1wYWdlL2ZhaXItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0ZGMwNjYsICMyZGE4NDcpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMjBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMy4yZW07XG4gIH1cbn1cblxuLmZhaXItaGVhZGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIC8vIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcbn1cblxuaDEge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnVzZXJ0eXBlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIHdpZHRoOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZmFpci1kYXRlIHtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgfVxufVxuXG4uZmFpci1hZGRyZXNzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbn1cblxuLmZhaXItc3VtbWFyeSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbn1cblxuI2luZm8ge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xufVxuXG4uYWdlbmRhIHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHBvcGluIDUwMG1zIGVhc2UgZm9yd2FyZHM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG59XG5cbi5wYXJraW5nIHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3BpbiAxcyBlYXNlIGZvcndhcmRzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xufVxuXG4uZmFxIHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIC8vIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3BpbiAxcyBlYXNlIGZvcndhcmRzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xufVxuXG4uYm9vdGgtcGFydG5lcnMge1xuICBwYWRkaW5nOiAxLjVlbSAyZW0gM2VtIDJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgLy8gaDEge1xuICAvLyAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAvLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8vIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogODBweDsgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gIH1cblxuICAucGFydG5lci1saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIHBhZGRpbmc6IDhweCAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5vcmdhbml6YXRpb24ge1xuICAgIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuM2VtO1xuICB9XG5cbiAgLnBhcnRuZXItZGVzY3JpcHRpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gIH1cblxuICAuZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMS41cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDE5OSwgMTk4LCAxOTgpO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC8vIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHBvcGluIDUwMG1zIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuLnN1cnZleSB7XG4gIHBhZGRpbmc6IDEuNWVtIDJlbSAzZW0gMmVtO1xuICAvLyBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3BpbiAxcyBlYXNlIGZvcndhcmRzO1xuXG4gIC5kaXZpZGVyIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxLjVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5LCAxOTgsIDE5OCk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLnN1cnZleS12YWxpZGF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cblxuLmFnZW5kYS1pdGVtIHtcbiAgbWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xNXB4O1xuICBpb24tYmFkZ2Uge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHdpZHRoOiA0ZW07XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBoMntcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICB9XG59XG5cblxuaW9uLWNvbCB7XG4gIC8vIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5oNSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5pb24tcmFkaW8tZ3JvdXB7XG4gIGgzIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG59XG5cbi5ncmVlbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4ub2Zme1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcG9waW4tcmV2ZXJzZSAxcyBlYXNlIGZvcndhcmRzO1xufVxuXG5cbkBrZXlmcmFtZXMgcG9waW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBvcGluLXJldmVyc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufSIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzRkYzA2NiwgIzJkYTg0Nyk7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDMuMmVtO1xufVxuXG4uZmFpci1oZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuaDEge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnVzZXJ0eXBlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIHdpZHRoOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZmFpci1kYXRlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG5cbi5mYWlyLWFkZHJlc3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbn1cbi5mYWlyLWFkZHJlc3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cblxuLmZhaXItc3VtbWFyeSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbn1cblxuI2luZm8ge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xufVxuXG4uYWdlbmRhIHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3BpbiA1MDBtcyBlYXNlIGZvcndhcmRzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLnBhcmtpbmcge1xuICBwYWRkaW5nOiAxLjVlbSAyZW0gM2VtIDJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHBvcGluIDFzIGVhc2UgZm9yd2FyZHM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4uZmFxIHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3BpbiAxcyBlYXNlIGZvcndhcmRzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLmJvb3RoLXBhcnRuZXJzIHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogcG9waW4gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuLmJvb3RoLXBhcnRuZXJzIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmJvb3RoLXBhcnRuZXJzIC5wYXJ0bmVyLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBjb2xvcjogIzAwNTE5MTtcbiAgcGFkZGluZzogOHB4IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJvb3RoLXBhcnRuZXJzIC5vcmdhbml6YXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4zZW07XG59XG4uYm9vdGgtcGFydG5lcnMgLnBhcnRuZXItZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbn1cbi5ib290aC1wYXJ0bmVycyAuZGl2aWRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxLjVweDtcbiAgYmFja2dyb3VuZDogI2M3YzZjNjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3VydmV5IHtcbiAgcGFkZGluZzogMS41ZW0gMmVtIDNlbSAyZW07XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBwb3BpbiAxcyBlYXNlIGZvcndhcmRzO1xufVxuLnN1cnZleSAuZGl2aWRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxLjVweDtcbiAgYmFja2dyb3VuZDogI2M3YzZjNjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnN1cnZleSAuc3VydmV5LXZhbGlkYXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmFnZW5kYS1pdGVtIHtcbiAgbWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xNXB4O1xufVxuLmFnZW5kYS1pdGVtIGlvbi1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3aWR0aDogNGVtO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmFnZW5kYS1pdGVtIGgyIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuaDUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIGgzIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmdyZWVuLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5vZmYge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcG9waW4tcmV2ZXJzZSAxcyBlYXNlIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHBvcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvcGluLXJldmVyc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/fair-page/fair-page.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/fairs/selection/fair-page/fair-page.page.ts ***!
    \*******************************************************************/

  /*! exports provided: FairPagePage */

  /***/
  function srcAppPagesFairsSelectionFairPageFairPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairPagePage", function () {
      return FairPagePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var src_app_modals_fair_chaperone_register_fair_chaperone_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modals/fair-chaperone-register/fair-chaperone-register.page */
    "./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.ts");
    /* harmony import */


    var src_app_modals_fair_partner_register_fair_partner_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modals/fair-partner-register/fair-partner-register.page */
    "./src/app/modals/fair-partner-register/fair-partner-register.page.ts");
    /* harmony import */


    var src_app_modals_fair_student_register_fair_student_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/fair-student-register/fair-student-register.page */
    "./src/app/modals/fair-student-register/fair-student-register.page.ts");
    /* harmony import */


    var src_app_modals_fair_volunteer_register_fair_volunteer_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modals/fair-volunteer-register/fair-volunteer-register.page */
    "./src/app/modals/fair-volunteer-register/fair-volunteer-register.page.ts");
    /* harmony import */


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");

    let FairPagePage = class FairPagePage {
      constructor(activatedRoute, modal, fairs) {
        this.activatedRoute = activatedRoute;
        this.modal = modal;
        this.fairs = fairs; // Popin Animation properties

        this.parking = false;
        this.parkingPopIn = false;
        this.boothPartners = false;
        this.boothPartnersPopIn = false;
        this.faq = false;
        this.faqPopIn = false;
        this.survey = false;
        this.surveyPopIn = false;
        this.surveyObject = {
          question1: {
            question: 'This is the question 1',
            answer: ''
          },
          question2: {
            question: 'This is the question 2',
            answer: ''
          },
          question3: {
            question: 'This is the question 3',
            answer: ''
          },
          question4: {
            question: 'This is the question 4',
            answer: ''
          },
          question5: {
            question: 'This is the question 5',
            answer: ''
          }
        };
      }

      ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = id;
        const fair = this.activatedRoute.snapshot.paramMap.get('fair');
        this.fairName = fair;
        const usertype = this.activatedRoute.snapshot.paramMap.get('usertype');
        this.usertype = usertype;
        const summary = this.activatedRoute.snapshot.paramMap.get('summary');
        this.summary = summary;
        const date = this.activatedRoute.snapshot.paramMap.get('date');
        this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(date), 'hh:mm a, MMMM dd, yyyy');
        const address = this.activatedRoute.snapshot.paramMap.get('address');
        this.address = address;
        const city = this.activatedRoute.snapshot.paramMap.get('city');
        this.city = city;
        const state = this.activatedRoute.snapshot.paramMap.get('state');
        this.state = state;
        const zip = this.activatedRoute.snapshot.paramMap.get('zip');
        this.zip = zip;
        const description = this.activatedRoute.snapshot.paramMap.get('description');
        this.description = description;
        const agenda = JSON.parse(this.activatedRoute.snapshot.paramMap.get('agenda'));
        this.agenda = agenda;
        const faqInfo = JSON.parse(this.activatedRoute.snapshot.paramMap.get('faq'));
        this.faqInfo = faqInfo;
        const partners = JSON.parse(this.activatedRoute.snapshot.paramMap.get('partners')); // In order for a partner to be shown on the UI, their 'verified' property must be set to 'true'

        this.partners = partners;
        console.log(partners);
        console.log("This is the ".concat(usertype, " agenda."));

        switch (usertype) {
          case 'student':
            this.boothPartners = true; // set survey to false until surveys have to be pushed out posts surcey

            this.survey = true;
            var parking = document.getElementById('parking');
            var faq = document.getElementById('faq');
            parking.style.height = '0px';
            faq.style.height = '0px';
            break;

          case 'chaperone':
            console.log('usertype: chaperone');
            this.boothPartners = true; // set survey to false until surveys have to be pushed out posts surcey

            this.survey = true;
            var parking = document.getElementById('parking');
            var faq = document.getElementById('faq');
            parking.style.height = '0px';
            faq.style.height = '0px';
            break;

          case 'volunteer':
            console.log('usertype: volunteer');
            this.parking = true;
            this.faq = true; // set survey to false until surveys have to be pushed out posts surcey

            this.survey = true;
            var booth = document.getElementById('boothPartners');
            booth.style.height = '0px';
            break;

          case 'partner':
            console.log('usertype: partner');
            this.parking = true;
            this.faq = true; // set survey to false until surveys have to be pushed out posts surcey

            this.survey = true;
            var booth = document.getElementById('boothPartners');
            booth.style.height = '0px';
            break;

          default:
            console.log('There was a problem getting the usertype');
            break;
        }
      }

      ngAfterViewInit() {}

      submitSurvey() {
        console.log(this.surveyObject);
      }

      question1Handler(e) {
        this.surveyObject.question1.answer = e.detail.value;
        console.log(this.surveyObject.question1);
      }

      question2Handler(e) {
        this.surveyObject.question2.answer = e.detail.value;
        console.log(this.surveyObject.question2);
      }

      question3Handler(e) {
        this.surveyObject.question3.answer = e.detail.value;
        console.log(this.surveyObject.question3);
      }

      question4Handler(e) {
        this.surveyObject.question4.answer = e.detail.value;
        console.log(this.surveyObject.question4);
      }

      question5Handler(e) {
        this.surveyObject.question5.answer = e.detail.value;
        console.log(this.surveyObject.question5);
      }

      getYPosition(e) {
        // console.log(this.boothPartnersGrid);
        const boothPartnersGridFromTop = this.boothPartnersGrid.nativeElement.offsetTop;
        const parkingGridFromTop = this.parkingGrid.nativeElement.offsetTop;
        const faqGridFromTop = this.faqGrid.nativeElement.offsetTop;
        const surveyGridFromTop = this.surveyGrid.nativeElement.offsetTop; // console.log('Current Y position: ' + e['detail'].currentY);
        // console.log('Current boothpartners height: ' +boothPartnersGridHeight);
        // Booth Partners Popin

        if (e['detail'].currentY > boothPartnersGridFromTop - window.innerHeight / 1.2 && this.boothPartners) {
          console.log('From Top: ' + boothPartnersGridFromTop);
          console.log('Booth Partners Popping In');
          this.boothPartnersPopIn = true;
        } else {
          this.boothPartnersPopIn = false;
        } // Parking Popin


        if (e['detail'].currentY > parkingGridFromTop - window.innerHeight / 1.2 && this.parking) {
          console.log('Parking Popping In');
          this.parkingPopIn = true;
        } else {
          this.parkingPopIn = false;
        } // FAQ Popin


        if (e['detail'].currentY > faqGridFromTop - window.innerHeight / 1.2 && this.faq) {
          console.log('FAQ Popping In');
          this.faqPopIn = true;
        } else {
          this.faqPopIn = false;
        }

        if (e['detail'].currentY > surveyGridFromTop - window.innerHeight / 1.2 && this.survey) {
          console.log('Survey Popping In');
          this.surveyPopIn = true;
        } else {
          this.surveyPopIn = false;
        }
      }

      register(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Student
          if (this.usertype === 'student') {
            const registerModalConfig = yield this.modal.create({
              component: src_app_modals_fair_student_register_fair_student_register_page__WEBPACK_IMPORTED_MODULE_7__["FairStudentRegisterPage"],
              componentProps: {
                id,
                city: this.city,
                state: this.state,
                zip: this.zip,
                address: this.address,
                fairName: this.fairName,
                date: this.date
              }
            });
            yield registerModalConfig.present();
          } // Chaperone


          if (this.usertype === 'chaperone') {
            const registerModalConfig = yield this.modal.create({
              component: src_app_modals_fair_chaperone_register_fair_chaperone_register_page__WEBPACK_IMPORTED_MODULE_5__["FairChaperoneRegisterPage"],
              componentProps: {
                id
              }
            });
            yield registerModalConfig.present();
          } // Volunteer


          if (this.usertype === 'volunteer') {
            const registerModalConfig = yield this.modal.create({
              component: src_app_modals_fair_volunteer_register_fair_volunteer_register_page__WEBPACK_IMPORTED_MODULE_8__["FairVolunteerRegisterPage"],
              componentProps: {
                id
              }
            });
            yield registerModalConfig.present();
          } // Partner


          if (this.usertype === 'partner') {
            const registerModalConfig = yield this.modal.create({
              component: src_app_modals_fair_partner_register_fair_partner_register_page__WEBPACK_IMPORTED_MODULE_6__["FairPartnerRegisterPage"],
              componentProps: {
                id
              }
            });
            yield registerModalConfig.present();
          }
        });
      }

    };

    FairPagePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_9__["FairsService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('info', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FairPagePage.prototype, "infoGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parking', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FairPagePage.prototype, "parkingGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('boothPartners', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FairPagePage.prototype, "boothPartnersGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('faq', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FairPagePage.prototype, "faqGrid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('survey', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FairPagePage.prototype, "surveyGrid", void 0);
    FairPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fair-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fair-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/selection/fair-page/fair-page.page.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fair-page.page.scss */
      "./src/app/pages/fairs/selection/fair-page/fair-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_9__["FairsService"]])], FairPagePage);
    /***/
  }
}]);
//# sourceMappingURL=default~fair-page-fair-page-module~pages-fairs-selection-fair-page-fair-page-module-es5.js.map