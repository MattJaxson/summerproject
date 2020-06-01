(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mentors-mentors-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMentorsMentorsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"8\" size-md=\"8\">\n          <ion-searchbar\n          debounce=\"2000\"\n          class=\"searchbar\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Mentors\"\n          (ionChange)=\"filter($event)\"\n          ></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" *ngFor=\"let mentor of allMentors\" style=\" margin-top: 20px;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\" size-xl=\"5\">\n        <ion-row class=\"mentors\">\n          <ion-col size=\"1\">\n            <div class=\"mentor-thumbnail\"></div>\n          </ion-col>\n          <ion-col size=\"6\" push-xs=\"1\">\n            <p id=\"mentor-name\">{{mentor.name}}</p>\n            <p id=\"mentor-title\">{{mentor.title}}</p>\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size-md=\"4\" size-xs=\"10\" push-md=\"1\">\n            <ion-button class=\"back-button ion-hide-md-up\" (click)=\"mentorPage(mentor)\">\n              Contact\n            </ion-button>\n            <ion-button class=\"back-button ion-hide-sm-down\" (click)=\"mentorPage(mentor)\">\n              Contact\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentors-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/mentors/mentors-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MentorsPageRoutingModule */

  /***/
  function srcAppPagesMentorsMentorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorsPageRoutingModule", function () {
      return MentorsPageRoutingModule;
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


    var _mentors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mentors.page */
    "./src/app/pages/mentors/mentors.page.ts");

    const routes = [{
      path: '',
      component: _mentors_page__WEBPACK_IMPORTED_MODULE_3__["MentorsPage"]
    }, {
      path: 'mentor-page/:name/:title/:email/:description/:photo/:city/:state',
      loadChildren: () => __webpack_require__.e(
      /*! import() | mentor-page-mentor-page-module */
      "mentor-page-mentor-page-module").then(__webpack_require__.bind(null,
      /*! ./mentor-page/mentor-page.module */
      "./src/app/pages/mentors/mentor-page/mentor-page.module.ts")).then(m => m.MentorPagePageModule)
    }];
    let MentorsPageRoutingModule = class MentorsPageRoutingModule {};
    MentorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MentorsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentors.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/mentors/mentors.module.ts ***!
    \*************************************************/

  /*! exports provided: MentorsPageModule */

  /***/
  function srcAppPagesMentorsMentorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorsPageModule", function () {
      return MentorsPageModule;
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


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _mentors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mentors-routing.module */
    "./src/app/pages/mentors/mentors-routing.module.ts");
    /* harmony import */


    var _mentors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mentors.page */
    "./src/app/pages/mentors/mentors.page.ts");

    let MentorsPageModule = class MentorsPageModule {};
    MentorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _mentors_routing_module__WEBPACK_IMPORTED_MODULE_6__["MentorsPageRoutingModule"]],
      declarations: [_mentors_page__WEBPACK_IMPORTED_MODULE_7__["MentorsPage"]]
    })], MentorsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentors.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/mentors/mentors.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMentorsMentorsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --min-height: 10vh;\n}\n\n.blue-button {\n  position: static;\n  width: unset;\n  height: 36px;\n}\n\n.mentor-thumbnail {\n  position: absolute;\n  top: 25px;\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n\n.mentors {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  box-shadow: none;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n}\n\n.mentors:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 30px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#mentor-name {\n  font-size: 1.3em;\n  font-weight: 800;\n}\n\n#mentor-title {\n  font-size: 1.1em;\n  font-weight: 800;\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogMTB2aDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IHVuc2V0O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5tZW50b3ItdGh1bWJuYWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hYXJvbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5cbi5tZW50b3JzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ubWVudG9yczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jbWVudG9yLW5hbWUge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM3Nzc7XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDEwdmg7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiB1bnNldDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4ubWVudG9yLXRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYWFyb24uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLm1lbnRvcnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDBweCA0MHB4IDQwcHggNDBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cblxuLm1lbnRvcnM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDBweCA0MHB4IDQwcHggNDBweDtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI21lbnRvci1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI21lbnRvci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNzc3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mentors/mentors.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/mentors/mentors.page.ts ***!
    \***********************************************/

  /*! exports provided: MentorsPage */

  /***/
  function srcAppPagesMentorsMentorsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorsPage", function () {
      return MentorsPage;
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


    var _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/mentor.service */
    "./src/app/services/mentor.service.ts");

    let MentorsPage = class MentorsPage {
      constructor(router, mentors) {
        this.router = router;
        this.mentors = mentors;
      }

      ngOnInit() {
        this.mentors.getMentors().subscribe(mentors => {
          this.allMentors = mentors;
        });
      }

      mentorPage(mentor) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/mentors/mentor-page', mentor.name, mentor.title, mentor.email, mentor.description, mentor.photo, mentor.city, mentor.state]);
      }

    };

    MentorsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorsService"]
    }];

    MentorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mentors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mentors.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mentors.page.scss */
      "./src/app/pages/mentors/mentors.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorsService"]])], MentorsPage);
    /***/
  },

  /***/
  "./src/app/services/mentor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/mentor.service.ts ***!
    \********************************************/

  /*! exports provided: MentorsService */

  /***/
  function srcAppServicesMentorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentorsService", function () {
      return MentorsService;
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

    let MentorsService = class MentorsService {
      constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      getMentors() {
        console.log('Getting Jobs');
        return this.http.get("".concat(this.BACKEND_URL, "/api/mentors"));
      }

      sendMentorAnEmail(message, mentorName, mentorEmail, studentEmail, studentName, studentCity, studentState, studentAge, studentGrade, studentSchool, studentProfilePic, studentResume) {
        console.log("Sending email to ".concat(mentorEmail));
        return this.http.post("".concat(this.BACKEND_URL, "/api/mentors/mentor-message"), {
          message,
          mentorName,
          mentorEmail,
          studentEmail,
          studentName,
          studentCity,
          studentState,
          studentAge,
          studentGrade,
          studentSchool,
          studentProfilePic,
          studentResume
        });
      }

    };

    MentorsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    MentorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MentorsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-mentors-mentors-module-es5.js.map