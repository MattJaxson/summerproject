(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-page-mentor-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMentorsMentorPageMentorPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed>\n        <ion-row style=\" margin-top: 20px;\">\n            <ion-col size=\"2\" offset=\"0.5\">\n                <div style=\"height: 50px; width: 50px; background: #222; border-radius: 50px;\"></div>\n                  <!-- <ion-img [src]=\"{{mentorPhoto}}\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\n              </ion-col>\n              <ion-col size=\"7\">\n    <ion-title></ion-title>\n    <ion-title></ion-title>\n                  <h6>{{mentorName}}</h6>\n                  <p>{{mentorTitle}}</p>\n                  <p>{{mentorCity}}, {{mentorState}}</p>\n                  <p>{{mentorEmail}}</p>\n              </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"11\" offset=\"0.5\">\n                <p>{{mentorDescription}}</p>\n              </ion-col>\n        </ion-row>\n\n        <ion-button (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: MentorPagePageRoutingModule */

  /***/
  function srcAppPagesMentorsMentorPageMentorPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorPagePageRoutingModule", function () {
      return MentorPagePageRoutingModule;
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


    var _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mentor-page.page */
    "./src/app/pages/mentors/mentor-page/mentor-page.page.ts");

    const routes = [{
      path: '',
      component: _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__["MentorPagePage"]
    }, {
      path: 'contact-mentor/:name/:email',
      loadChildren: () => Promise.all(
      /*! import() | contact-mentor-contact-mentor-module */
      [__webpack_require__.e("default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7"), __webpack_require__.e("contact-mentor-contact-mentor-module")]).then(__webpack_require__.bind(null,
      /*! ./contact-mentor/contact-mentor.module */
      "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts")).then(m => m.ContactMentorPageModule)
    }];
    let MentorPagePageRoutingModule = class MentorPagePageRoutingModule {};
    MentorPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MentorPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/mentor-page.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/mentor-page.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MentorPagePageModule */

  /***/
  function srcAppPagesMentorsMentorPageMentorPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorPagePageModule", function () {
      return MentorPagePageModule;
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


    var _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mentor-page-routing.module */
    "./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts");
    /* harmony import */


    var _mentor_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mentor-page.page */
    "./src/app/pages/mentors/mentor-page/mentor-page.page.ts");

    let MentorPagePageModule = class MentorPagePageModule {};
    MentorPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["MentorPagePageRoutingModule"]],
      declarations: [_mentor_page_page__WEBPACK_IMPORTED_MODULE_6__["MentorPagePage"]]
    })], MentorPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/mentor-page.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMentorsMentorPageMentorPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLXBhZ2UvbWVudG9yLXBhZ2UucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentor-page/mentor-page.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.ts ***!
    \***************************************************************/

  /*! exports provided: MentorPagePage */

  /***/
  function srcAppPagesMentorsMentorPageMentorPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorPagePage", function () {
      return MentorPagePage;
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

    let MentorPagePage = class MentorPagePage {
      constructor(activatedRoute, router, toastController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
      }

      ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

        const name = this.activatedRoute.snapshot.paramMap.get('name'); // tslint:disable-next-line: radix

        const email = this.activatedRoute.snapshot.paramMap.get('email'); // tslint:disable-next-line: radix

        const description = this.activatedRoute.snapshot.paramMap.get('description'); // tslint:disable-next-line: radix

        const photo = this.activatedRoute.snapshot.paramMap.get('photo'); // tslint:disable-next-line: radix

        const city = this.activatedRoute.snapshot.paramMap.get('city'); // tslint:disable-next-line: radix

        const state = this.activatedRoute.snapshot.paramMap.get('state');
        this.mentorName = name;
        this.mentorTitle = title;
        this.mentorEmail = email;
        this.mentorDescription = description;
        this.mentorPhoto = photo;
        this.mentorCity = city;
        this.mentorState = state;
      }

      contactMentor() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor', this.mentorName, this.mentorEmail]);
      }

    };

    MentorPagePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }];

    MentorPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mentor-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mentor-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mentor-page.page.scss */
      "./src/app/pages/mentors/mentor-page/mentor-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], MentorPagePage);
    /***/
  }
}]);
//# sourceMappingURL=mentor-page-mentor-page-module-es5.js.map