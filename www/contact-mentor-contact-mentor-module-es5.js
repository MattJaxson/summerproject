(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-mentor-contact-mentor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMentorsMentorPageContactMentorContactMentorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact-Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=\"11\" offset=\"0.5\" style=\"margin-top: 80px;\">\n          <div style=\"width: 100px; height: 100px; border-radius: 100px; background: lightgrey; margin: 0 auto;\"></div>\n          <p style=\"font-size: 1em;\">Have a question for a {{mentorName}}? Send them an email!</p>\n          <form [formGroup]=\"contactMenorForm\"  (ngSubmit)=\"confirm(this.contactMenorForm.value)\">\n              <ion-item>\n                  <ion-textarea\n                  formControlName=\"message\"\n                  placeholder=\"Your message goes here\"\n                  rows=\"25\"\n                  autogrow=\"true\"\n                  required\n                  spellcheck=\"true\"></ion-textarea>\n                </ion-item>\n                <ion-button type=\"submit\" expand=\"full\">\n                    Send\n                  </ion-button>\n          </form>\n        </ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ContactMentorPageRoutingModule */

  /***/
  function srcAppPagesMentorsMentorPageContactMentorContactMentorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMentorPageRoutingModule", function () {
      return ContactMentorPageRoutingModule;
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


    var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact-mentor.page */
    "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts");

    const routes = [{
      path: '',
      component: _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__["ContactMentorPage"]
    }, {
      path: 'confirm/:name/:email',
      loadChildren: () => __webpack_require__.e(
      /*! import() | confirm-confirm-module */
      "confirm-confirm-module").then(__webpack_require__.bind(null,
      /*! ./confirm/confirm.module */
      "./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }];
    let ContactMentorPageRoutingModule = class ContactMentorPageRoutingModule {};
    ContactMentorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactMentorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ContactMentorPageModule */

  /***/
  function srcAppPagesMentorsMentorPageContactMentorContactMentorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMentorPageModule", function () {
      return ContactMentorPageModule;
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


    var _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-mentor-routing.module */
    "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts");
    /* harmony import */


    var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-mentor.page */
    "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts");

    let ContactMentorPageModule = class ContactMentorPageModule {};
    ContactMentorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactMentorPageRoutingModule"]],
      declarations: [_contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__["ContactMentorPage"]]
    })], ContactMentorPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMentorsMentorPageContactMentorContactMentorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLXBhZ2UvY29udGFjdC1tZW50b3IvY29udGFjdC1tZW50b3IucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ContactMentorPage */

  /***/
  function srcAppPagesMentorsMentorPageContactMentorContactMentorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMentorPage", function () {
      return ContactMentorPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/mentor.service */
    "./src/app/services/mentor.service.ts");

    let ContactMentorPage = class ContactMentorPage {
      constructor(profile, mentors, activatedRoute, formBuilder, router) {
        this.profile = profile;
        this.mentors = mentors;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
      }

      ngOnInit() {
        this.contactMenorForm = this.formBuilder.group({
          message: ['This is a message', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.message = this.contactMenorForm.value.message; // tslint:disable-next-line: radix

        const id = this.activatedRoute.snapshot.paramMap.get('id'); // tslint:disable-next-line: radix

        const email = this.activatedRoute.snapshot.paramMap.get('email'); // tslint:disable-next-line: radix

        const name = this.activatedRoute.snapshot.paramMap.get('name');
        this.mentorId = id;
        this.mentorName = name;
        this.mentorEmail = email; // Get User details

        this.userDetails();
      }

      confirm(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('Formdata: ');
          console.log(formData);
          yield this.sendMessage(); // tslint:disable-next-line: max-line-length

          yield this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/confirm', this.mentorName, this.mentorEmail]);
        });
      }

      userDetails() {
        this.profile.getUserDetails().subscribe(details => {
          this.userEmail = details['email'];
          this.userName = details['fullName'];
          this.userCity = details['city'];
          this.userState = details['state'];
          this.userAge = details['age'];
          this.userGrade = details['grade'];
          this.userSchool = details['school'];
          this.userProfilePicture = details['profilePicture'];
          this.userResume = details['resume'];
        });
      }

      sendMessage() {
        this.mentors.sendMentorAnEmail(this.message, this.mentorName, this.mentorEmail, this.userEmail, this.userName, this.userCity, this.userState, this.userAge, this.userGrade, this.userSchool, this.userProfilePicture, this.userResume).subscribe();
      }

    };

    ContactMentorPage.ctorParameters = () => [{
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorsService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ContactMentorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-mentor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-mentor.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-mentor.page.scss */
      "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ContactMentorPage);
    /***/
  }
}]);
//# sourceMappingURL=contact-mentor-contact-mentor-module-es5.js.map