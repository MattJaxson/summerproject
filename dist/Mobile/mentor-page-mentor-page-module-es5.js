(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-page-mentor-page-module"], {
    /***/
    "Lb7l":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Lb7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\nion-header {\n  padding: 10px 0 10px 0;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n.header-wrapper {\n  background: white;\n  width: 50%;\n  height: 100px;\n  border-radius: 100px;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n#mentor-profile-picture {\n  margin-top: 50px;\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n#mentor-title {\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n\n#mentor-location {\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\n}\n\n#mentor-email {\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s forwards;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #666;\n  line-height: 1.7em;\n  opacity: 0;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbnRvci1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtFQUNkLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUZBQUE7VUFBQSxpRkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVGQUFBO1VBQUEsK0VBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7QUFGSjs7QUFLQTtFQUNJLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksNEJBQUE7RUFGTjtFQUlFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBRk47QUFDRjs7QUFMQTtFQUNJO0lBQ0ksNEJBQUE7RUFGTjtFQUlFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJO0lBQ0ksNEJBQUE7RUFITjtFQUtFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBSE47QUFDRjs7QUFKQTtFQUNJO0lBQ0ksNEJBQUE7RUFITjtFQUtFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBSE47QUFDRiIsImZpbGUiOiJtZW50b3ItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiB1bnNldDtcbn1cblxuLm1lbnRvciB7XG4gIFxufVxuXG4jbWVudG9yLXByb2ZpbGUtcGljdHVyZXtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDsgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Fhcm9uLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuI21lbnRvci1uYW1lIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxcyBmb3J3YXJkcztcbn1cblxuI21lbnRvci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM5OTk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5cbiNtZW50b3ItbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjZzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWVtYWlsIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS43cyBmb3J3YXJkcztcbn1cblxuI21lbnRvci1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjlzIGZvcndhcmRzO1xufVxuXG4jY29udGFjdC1idXR0b24ge1xuICAgIG1hcmdpbjogNTBweCAwIDI1MHB4IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzIyMik7XG4gICAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "XAfj":
    /*!***************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.ts ***!
      \***************************************************************/

    /*! exports provided: MentorPagePage */

    /***/
    function XAfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorPagePage", function () {
        return MentorPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mentor_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mentor-page.page.html */
      "d+qt");
      /* harmony import */


      var _mentor_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mentor-page.page.scss */
      "Lb7l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      MentorPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mentor-page',
        template: _raw_loader_mentor_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mentor_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], MentorPagePage);
      /***/
    },

    /***/
    "avXv":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MentorPagePageRoutingModule */

    /***/
    function avXv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorPagePageRoutingModule", function () {
        return MentorPagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _mentor_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mentor-page.page */
      "XAfj");

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
          "pRc2")).then(function (m) {
            return m.ContactMentorPageModule;
          });
        }
      }];

      var MentorPagePageRoutingModule = function MentorPagePageRoutingModule() {
        _classCallCheck(this, MentorPagePageRoutingModule);
      };

      MentorPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MentorPagePageRoutingModule);
      /***/
    },

    /***/
    "d+qt":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/mentor-page.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dQt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"toolbar-title\" slot=\"start\">Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-align-items-center\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2\" size=\"4\">\n        <h1>Mentor</h1>\n      </ion-col>\n      <ion-col offset=\"2\" size=\"2\">\n        <ion-button class=\"blue-button ion-float-right\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mentors -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"12\">\n        <ion-row class=\"mentor ion-justify-content-center\">\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" push-lg=\"1\" size-lg=\"10\">\n            <div id=\"mentor-profile-picture\"></div>\n\n            <!-- <ion-button id=\"contact-button-header\" (click)=\"contactMentor()\">\n            Contact\n            </ion-button> -->\n            <!-- <ion-img [src]=\"{{mentorPhoto}}\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\n          </ion-col>\n          <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n            <p id=\"mentor-name\">{{mentorName}}</p>\n            <p id=\"mentor-title\">{{mentorTitle}}</p>\n            <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n          </ion-col>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"9\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\">\n              <p id=\"mentor-description\">{{mentorDescription}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"9\" size-md=\"2\" class=\"ion-text-center\">\n        <ion-button class=\"orange-button\" style=\"margin: 100px 0 100px 0;\" (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "o1Rv":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/mentor-page.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MentorPagePageModule */

    /***/
    function o1Rv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorPagePageModule", function () {
        return MentorPagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mentor-page-routing.module */
      "avXv");
      /* harmony import */


      var _mentor_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mentor-page.page */
      "XAfj");

      var MentorPagePageModule = function MentorPagePageModule() {
        _classCallCheck(this, MentorPagePageModule);
      };

      MentorPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["MentorPagePageRoutingModule"]],
        declarations: [_mentor_page_page__WEBPACK_IMPORTED_MODULE_6__["MentorPagePage"]]
      })], MentorPagePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mentor-page-mentor-page-module-es5.js.map