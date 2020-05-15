(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mentors-mentors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- Mobile & Tablet Toolbar -->\r\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-lg-up\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col offset-xs=\"0\" offset-sm=\"1\" offset-md=\"1\" size-xs=\"12\" size-sm=\"8\" size-md=\"8\">\r\n          <ion-searchbar\r\n          debounce=\"2000\"\r\n          class=\"searchbar\"\r\n          showCancelButton=\"true\"\r\n          placeholder=\"Search Mentors\"\r\n          (ionChange)=\"filter($event)\"\r\n          ></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Mobile -->\r\n  <ion-grid class=\"ion-hide-lg-up\">\r\n    <ion-row class=\"ion-justify-content-center\" *ngFor=\"let mentor of allMentors\" (click)=\"mentorPage(mentor)\" style=\" margin-top: 20px;\">\r\n     <ion-col class=\"white-background\" size-xs=\"11\" size-sm=\"8\" size-md=\"8\">\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <div style=\"height: 50px; width: 50px; background: #222; border-radius: 50px;\"></div>\r\n        </ion-col>\r\n        <ion-col size=\"10\">\r\n            <h6>{{mentor.name}}</h6>\r\n            <p>{{mentor.title}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n     </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Desktop -->\r\n  <ion-grid  class=\"ion-hide-lg-down\">\r\n    <ion-row class=\"ion-justisfy-content-center\" *ngFor=\"let mentor of allMentors\" (click)=\"mentorPage(mentor)\" style=\" margin-top: 20px;\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-row class=\"white-background\">\r\n          <ion-col size=\"1\">\r\n              <div style=\"height: 50px; width: 50px; background: #222; border-radius: 50px;\"></div>\r\n                <!-- <ion-img [src]=\"image\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n                <h6>{{mentor.name}}</h6>\r\n                <p>{{mentor.title}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-button class=\"blue-button\" (click)=\"contact()\">\r\n                Contact\r\n              </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/mentors/mentors-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mentors/mentors-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MentorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsPageRoutingModule", function() { return MentorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mentors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mentors.page */ "./src/app/pages/mentors/mentors.page.ts");




const routes = [
    {
        path: '',
        component: _mentors_page__WEBPACK_IMPORTED_MODULE_3__["MentorsPage"]
    },
    {
        path: 'mentor-page/:name/:title/:email/:description/:photo/:city/:state',
        loadChildren: () => __webpack_require__.e(/*! import() | mentor-page-mentor-page-module */ "mentor-page-mentor-page-module").then(__webpack_require__.bind(null, /*! ./mentor-page/mentor-page.module */ "./src/app/pages/mentors/mentor-page/mentor-page.module.ts")).then(m => m.MentorPagePageModule)
    }
];
let MentorsPageRoutingModule = class MentorsPageRoutingModule {
};
MentorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MentorsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mentors/mentors.module.ts ***!
  \*************************************************/
/*! exports provided: MentorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsPageModule", function() { return MentorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mentors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mentors-routing.module */ "./src/app/pages/mentors/mentors-routing.module.ts");
/* harmony import */ var _mentors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentors.page */ "./src/app/pages/mentors/mentors.page.ts");







let MentorsPageModule = class MentorsPageModule {
};
MentorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mentors_routing_module__WEBPACK_IMPORTED_MODULE_5__["MentorsPageRoutingModule"]
        ],
        declarations: [_mentors_page__WEBPACK_IMPORTED_MODULE_6__["MentorsPage"]]
    })
], MentorsPageModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentors.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/mentors/mentors.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --min-height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudG9ycy9DOlxcVXNlcnNcXGFnb29kXFxTb2Z0d2FyZSBEZXYgUHJvamVjdHNcXEpPVVJOaVxcVW5pdGVkIFdheSBGWUZcXE1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXG1lbnRvcnNcXG1lbnRvcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW50b3JzL21lbnRvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1taW4taGVpZ2h0OiAxMHZoO1xyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDEwdmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/mentors/mentors.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/mentors/mentors.page.ts ***!
  \***********************************************/
/*! exports provided: MentorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsPage", function() { return MentorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mentor.service */ "./src/app/services/mentor.service.ts");




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
MentorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorsService"] }
];
MentorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mentors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mentors.page.scss */ "./src/app/pages/mentors/mentors.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorsService"]])
], MentorsPage);



/***/ }),

/***/ "./src/app/services/mentor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/mentor.service.ts ***!
  \********************************************/
/*! exports provided: MentorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsService", function() { return MentorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let MentorsService = class MentorsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    getMentors() {
        console.log('Getting Jobs');
        return this.http.get(`${this.BACKEND_URL}/api/mentors`);
    }
    sendMentorAnEmail(message, mentorName, mentorEmail, studentEmail, studentName, studentCity, studentState, studentAge, studentGrade, studentSchool, studentProfilePic, studentResume) {
        console.log(`Sending email to ${mentorEmail}`);
        return this.http.post(`${this.BACKEND_URL}/api/mentors/mentor-message`, {
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
MentorsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MentorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MentorsService);



/***/ })

}]);
//# sourceMappingURL=pages-mentors-mentors-module-es2015.js.map