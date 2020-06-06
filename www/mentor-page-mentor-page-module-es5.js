function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title slot=\"end\">Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-align-items-center\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2\" size=\"4\">\n        <h1>Mentor</h1>\n      </ion-col>\n      <ion-col offset=\"2\" size=\"2\">\n        <ion-button class=\"back-button ion-float-right\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Horizontal Line -->\n    <!-- <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background-color: rgba(0, 0, 0, 0.1);\" >\n      </ion-col>\n    </ion-row> -->\n\n    <!-- Mentors -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n        <ion-row class=\"mentor ion-justify-content-center\" style=\" margin-top: 20px; padding: 10% 0 10% 0;\">\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" push-lg=\"1\" size-lg=\"10\">\n            <div id=\"mentor-profile-picture\"></div>\n\n            <!-- <ion-button id=\"contact-button-header\" (click)=\"contactMentor()\">\n            Contact\n            </ion-button> -->\n            <!-- <ion-img [src]=\"{{mentorPhoto}}\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\n          </ion-col>\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n            <p id=\"mentor-name\">{{mentorName}}</p>\n            <p id=\"mentor-title\">{{mentorTitle}}</p>\n            <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n            <p id=\"mentor-email\">{{mentorEmail}}</p>\n          </ion-col>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n              <p id=\"mentor-description\">{{mentorDescription}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"9\" size-md=\"2\" class=\"ion-text-center\">\n        <ion-button class=\"orange-button\" style=\"margin: 100px 0 100px 0;\" (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
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

    var routes = [{
      path: '',
      component: _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__["MentorPagePage"]
    }, {
      path: 'contact-mentor/:name/:email/:photo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-mentor-contact-mentor-module */
        "contact-mentor-contact-mentor-module").then(__webpack_require__.bind(null,
        /*! ./contact-mentor/contact-mentor.module */
        "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts")).then(function (m) {
          return m.ContactMentorPageModule;
        });
      }
    }];

    var MentorPagePageRoutingModule = function MentorPagePageRoutingModule() {
      _classCallCheck(this, MentorPagePageRoutingModule);
    };

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

    var MentorPagePageModule = function MentorPagePageModule() {
      _classCallCheck(this, MentorPagePageModule);
    };

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


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\nion-header {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n.header-wrapper {\n  background: white;\n  width: 50%;\n  height: 100px;\n  border-radius: 100px;\n}\n\n.mentor {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n#mentor-profile-picture {\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n#mentor-title {\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n\n#mentor-location {\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n}\n\n#mentor-email {\n  font-size: 1.3em;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #666;\n  line-height: 1.7em;\n  opacity: 0;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9tZW50b3ItcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLXBhZ2UvbWVudG9yLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0ksWUFBQTtFQUFjLFdBQUE7RUFDZCxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDRUo7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSTtJQUNJLDRCQUFBO0VDRU47RURBRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0VOO0FBQ0Y7O0FEVEE7RUFDSTtJQUNJLDRCQUFBO0VDRU47RURBRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSTtJQUNJLDRCQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0NOO0FBQ0Y7O0FEUkE7RUFDSTtJQUNJLDRCQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW50b3JzL21lbnRvci1wYWdlL21lbnRvci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cblxuLmhlYWRlci13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5tZW50b3Ige1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4jbWVudG9yLXByb2ZpbGUtcGljdHVyZXtcbiAgICBoZWlnaHQ6IDUwcHg7IHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9hYXJvbi5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItbmFtZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNnMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItZW1haWwge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuN3MgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMS45cyBmb3J3YXJkcztcbn1cblxuI2NvbnRhY3QtYnV0dG9uIHtcbiAgICBtYXJnaW46IDUwcHggMCAyNTBweCAwO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMyMjIpO1xuICAgIC0tdHJhbnNpdGlvbjogMC41cztcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufSIsImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLm1lbnRvciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbiNtZW50b3ItcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Fhcm9uLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuI21lbnRvci1uYW1lIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItdGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItbG9jYXRpb24ge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNnMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItZW1haWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuN3MgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTUsIDAuODUsIDAuNzUsIDAuOSkgMS45cyBmb3J3YXJkcztcbn1cblxuI2NvbnRhY3QtYnV0dG9uIHtcbiAgbWFyZ2luOiA1MHB4IDAgMjUwcHggMDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMyMjIpO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59Il19 */";
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

    var MentorPagePage = /*#__PURE__*/function () {
      function MentorPagePage(activatedRoute, router, toastController) {
        _classCallCheck(this, MentorPagePage);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
      }

      _createClass(MentorPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line: radix
          var title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

          var name = this.activatedRoute.snapshot.paramMap.get('name'); // tslint:disable-next-line: radix

          var email = this.activatedRoute.snapshot.paramMap.get('email'); // tslint:disable-next-line: radix

          var description = this.activatedRoute.snapshot.paramMap.get('description'); // tslint:disable-next-line: radix

          var photo = this.activatedRoute.snapshot.paramMap.get('photo'); // tslint:disable-next-line: radix

          var city = this.activatedRoute.snapshot.paramMap.get('city'); // tslint:disable-next-line: radix

          var state = this.activatedRoute.snapshot.paramMap.get('state');
          this.mentorName = name;
          this.mentorTitle = title;
          this.mentorEmail = email;
          this.mentorDescription = description;
          this.mentorPhoto = photo;
          this.mentorCity = city;
          this.mentorState = state;
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/home/mentors']);
        }
      }, {
        key: "contactMentor",
        value: function contactMentor() {
          // tslint:disable-next-line: max-line-length
          this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor', this.mentorName, this.mentorEmail, this.mentorPhoto]);
        }
      }]);

      return MentorPagePage;
    }();

    MentorPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    MentorPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mentor-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mentor-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mentor-page.page.scss */
      "./src/app/pages/mentors/mentor-page/mentor-page.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], MentorPagePage);
    /***/
  }
}]);
//# sourceMappingURL=mentor-page-mentor-page-module-es5.js.map