(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-mentor-contact-mentor-module"], {
    /***/
    "Np6Q":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: ContactMentorPage */

    /***/
    function Np6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactMentorPage", function () {
        return ContactMentorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact-mentor.page.html */
      "PedB");
      /* harmony import */


      var _contact_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-mentor.page.scss */
      "aOPl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      "Aso2");
      /* harmony import */


      var _services_mentor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../services/mentor.service */
      "+DJb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ContactMentorPage = /*#__PURE__*/function () {
        function ContactMentorPage(profile, mentors, activatedRoute, formBuilder, router, location) {
          _classCallCheck(this, ContactMentorPage);

          this.profile = profile;
          this.mentors = mentors;
          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.router = router;
          this.location = location;
        }

        _createClass(ContactMentorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.contactMenorForm = this.formBuilder.group({
              message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            console.log("Valid: ".concat(this.contactMenorForm.valid));
            this.contactMenorForm.get("message").valueChanges.subscribe(function (msg) {
              console.log("Subscribed message: ".concat(msg));
              setTimeout(function () {
                if (_this.contactMenorForm.valid) {
                  _this.messageValid = true;
                } else {
                  _this.messageValid = false;
                }

                console.log("Valid: ".concat(_this.contactMenorForm.valid));
              }, 100);
            });
            this.message = this.contactMenorForm.value.message; // tslint:disable-next-line: radix

            var id = this.activatedRoute.snapshot.paramMap.get('id'); // tslint:disable-next-line: radix

            var email = this.activatedRoute.snapshot.paramMap.get('email'); // tslint:disable-next-line: radix

            var name = this.activatedRoute.snapshot.paramMap.get('name'); // tslint:disable-next-line: radix

            var photo = this.activatedRoute.snapshot.paramMap.get('photo');
            this.mentorId = id;
            this.mentorName = name;
            this.mentorEmail = email;
            this.mentorPhoto = photo; // Get User details

            this.userDetails();
          }
        }, {
          key: "confirm",
          value: function confirm(value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.sendMessage(value);

                    case 2:
                      _context.next = 4;
                      return this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/:photo/confirm', this.mentorName, this.mentorEmail, this.mentorPhoto]);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "userDetails",
          value: function userDetails() {
            var _this2 = this;

            this.profile.getUserDetails().subscribe(function (details) {
              _this2.userEmail = details['email'];
              _this2.userName = details['fullName'];
              _this2.userCity = details['city'];
              _this2.userState = details['state'];
              _this2.userAge = details['age'];
              _this2.userGrade = details['grade'];
              _this2.userSchool = details['school'];
              _this2.userProfilePicture = details['profilePicture'];
              _this2.userResume = details['resume'];
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(value) {
            this.mentors.sendMentorAnEmail(value, this.mentorName, this.mentorEmail, this.userEmail, this.userName, this.userCity, this.userState, this.userAge, this.userGrade, this.userSchool, this.userProfilePicture, this.userResume).subscribe();
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return ContactMentorPage;
      }();

      ContactMentorPage.ctorParameters = function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      ContactMentorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-mentor',
        template: _raw_loader_contact_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _services_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])], ContactMentorPage);
      /***/
    },

    /***/
    "PedB":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PedB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"margin-top: 100px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <!-- Mentor Photo -->\n        <div id=\"mentor-photo\"></div>\n        <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back();\">Back</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Contact Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <!-- Form -->\n        <!-- Mentor Photo -->\n        <div class=\"ion-text-center\">\n          <img src=\"{{mentorPhoto}}\" class=\"ion-hide-lg-up\"  id=\"mentor-photo\">\n        </div>\n        <form [formGroup]=\"contactMenorForm\"  (ngSubmit)=\"confirm(this.contactMenorForm.value)\">\n          <ion-textarea\n                class=\"message-input\"\n                formControlName=\"message\"\n                placeholder=\"Have a question for a {{mentorName}}? Send them an email!\"\n                rows=\"10\"\n                autogrow=\"true\"\n                required\n                spellcheck=\"true\"\n                (keydown.control.enter)=\"messageValid ? confirm(this.contactMenorForm.value) : null\"></ion-textarea>\n            <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!messageValid\"\n            expand=\"block\">\n                Send\n            </ion-button>\n          </form>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "aOPl":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function aOPl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f4f5f8;\n}\n\n.blue-button-small {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.name {\n  display: block;\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n}\n\n.name:nth-child(1) {\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n}\n\n#mentor-photo {\n  height: 100px;\n  border-radius: 100px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  display: inline-block;\n  opacity: 1;\n  margin: 54px auto;\n}\n\n@media screen and (min-width: 992px) {\n  #mentor-photo {\n    border-radius: 100px;\n    width: 100px;\n    height: 100px;\n    position: relative;\n    top: -38px;\n  }\n}\n\n.message-input {\n  padding: 0 8px;\n  border-radius: 5px;\n  font-size: 1.2em;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n}\n\n.orange-button {\n  margin-top: 40px;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbnRhY3QtbWVudG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFDQTtFQUNJLHlGQUFBO1VBQUEsaUZBQUE7QUFFSjs7QUFDQTtFQUVJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksb0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQUNOO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSw0QkFBQTtFQUROO0VBR0U7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFETjtBQUNGOztBQU5BO0VBQ0k7SUFDSSw0QkFBQTtFQUROO0VBR0U7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0E7SUFDSSw0QkFBQTtFQUZGO0VBSUY7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFGRjtBQUNGOztBQUxBO0VBQ0E7SUFDSSw0QkFBQTtFQUZGO0VBSUY7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtbWVudG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG4uYmx1ZS1idXR0b24tc21hbGwge1xuICAgIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLm5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8vIDpudGgtY2hpbGQoMikgbm90IHdvcmtpbmdcbi5uYW1lOm50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjNzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLXBob3RvIHtcbiAgICAvLyB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYWFyb24uanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW46IDU0cHggYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAjbWVudG9yLXBob3RvIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0zOHB4O1xuICAgIH1cbn1cbi5tZXNzYWdlLWlucHV0IHtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG5cbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgLy8gYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjFzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMS45cyBmb3J3YXJkcztcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xufVxuMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbn1cbn0iXX0= */";
      /***/
    },

    /***/
    "pRc2":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ContactMentorPageModule */

    /***/
    function pRc2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactMentorPageModule", function () {
        return ContactMentorPageModule;
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


      var _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact-mentor-routing.module */
      "tIFP");
      /* harmony import */


      var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact-mentor.page */
      "Np6Q");

      var ContactMentorPageModule = function ContactMentorPageModule() {
        _classCallCheck(this, ContactMentorPageModule);
      };

      ContactMentorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactMentorPageRoutingModule"]],
        declarations: [_contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__["ContactMentorPage"]]
      })], ContactMentorPageModule);
      /***/
    },

    /***/
    "tIFP":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ContactMentorPageRoutingModule */

    /***/
    function tIFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactMentorPageRoutingModule", function () {
        return ContactMentorPageRoutingModule;
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


      var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-mentor.page */
      "Np6Q");

      var routes = [{
        path: '',
        component: _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__["ContactMentorPage"]
      }, {
        path: 'confirm/:name/:email/:phone',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-confirm-module */
          "confirm-confirm-module").then(__webpack_require__.bind(null,
          /*! ./confirm/confirm.module */
          "p/Ua")).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }];

      var ContactMentorPageRoutingModule = function ContactMentorPageRoutingModule() {
        _classCallCheck(this, ContactMentorPageRoutingModule);
      };

      ContactMentorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactMentorPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contact-mentor-contact-mentor-module-es5.js.map