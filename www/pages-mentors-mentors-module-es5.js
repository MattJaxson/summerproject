(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mentors-mentors-module"], {
    /***/
    "+DJb":
    /*!********************************************!*\
      !*** ./src/app/services/mentor.service.ts ***!
      \********************************************/

    /*! exports provided: MentorsService */

    /***/
    function DJb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorsService", function () {
        return MentorsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var MentorsService = /*#__PURE__*/function () {
        function MentorsService(http) {
          _classCallCheck(this, MentorsService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        }

        _createClass(MentorsService, [{
          key: "getMentors",
          value: function getMentors() {
            console.log('Getting Mentors');
            return this.http.get("".concat(this.BACKEND_URL, "/api/mentors"));
          }
        }, {
          key: "sendMentorAnEmail",
          value: function sendMentorAnEmail(message, mentorName, mentorEmail, studentEmail, studentName, studentCity, studentState, studentAge, studentGrade, studentSchool, studentProfilePic, studentResume) {
            console.log("Sending email to ".concat(mentorEmail));
            return this.http.post("".concat(this.BACKEND_URL, "/api/mentors/mentor-message"), {
              message: message,
              mentorName: mentorName,
              mentorEmail: mentorEmail,
              studentEmail: studentEmail,
              studentName: studentName,
              studentCity: studentCity,
              studentState: studentState,
              studentAge: studentAge,
              studentGrade: studentGrade,
              studentSchool: studentSchool,
              studentProfilePic: studentProfilePic,
              studentResume: studentResume
            });
          }
        }]);

        return MentorsService;
      }();

      MentorsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      MentorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MentorsService);
      /***/
    },

    /***/
    "7e7T":
    /*!*************************************************!*\
      !*** ./src/app/pages/mentors/mentors.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function e7T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0px;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nh2 {\n  font-size: 1em;\n  font-weight: 400;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n}\n\n.mentor-thumbnail {\n  position: absolute;\n  top: 25px;\n  right: 15px;\n  height: 50px;\n  width: 50px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n\n.mentors {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  box-shadow: none;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 0.1s;\n}\n\n.mentors:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 30px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  transition: 0.1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#mentor-name {\n  font-size: 1.3em;\n  font-weight: 800;\n}\n\n#mentor-title {\n  font-size: 1.1em;\n  font-weight: 800;\n  color: #777;\n  position: relative;\n  top: -10px;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnRvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtVQUFBLGVBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIRiIsImZpbGUiOiJtZW50b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG59XG5cblxuXG4ubWVudG9yLXRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICByaWdodDogMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Fhcm9uLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cblxuLm1lbnRvcnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDBweCA0MHB4IDQwcHggNDBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cblxuLm1lbnRvcnM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDBweCA0MHB4IDQwcHggNDBweDtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI21lbnRvci1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI21lbnRvci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG59XG5cbiNzZWFyY2hiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiB9Il19 */";
      /***/
    },

    /***/
    "hdAQ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentors.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function hdAQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Mentors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\" size-xl=\"5\">\n        <p>Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!</p>\n      <hr style=\"border-top: #9993 solid 2px;\n      margin-bottom: 20px;\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" *ngFor=\"let mentor of allMentors\" style=\" margin-top: 20px;\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\" size-xl=\"5\">\n        <ion-list>\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"../../../assets/aaron.jpg\" />\n            </ion-avatar>\n            <ion-label>\n              <h2>{{mentor.name}}</h2>\n              <p>{{mentor.title}}</p>\n            </ion-label>\n            <ion-buttons slot=\"end\">\n              <ion-button style=\"--background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2)); --color: #005191; font-weight: 600; margin-right: 20px; width: 80px;\" (click)=\"mentorPage(mentor)\">\n                Info\n              </ion-button>\n              <!-- <ion-button (click)=\"newMessage()\">\n                <ion-icon size=\"large\"  class=\"new-message\" slot=\"start\" name=\"create\"></ion-icon>\n              </ion-button> -->\n            </ion-buttons>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div\n  id=\"searchbar-wrapper\">\n    <ion-searchbar\n    debounce=\"2000\"\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      showCancelButton=\"true\"\n      placeholder=\"Search for Mentor by Name\"\n      (ionChange)=\"filter($event)\">\n    </ion-searchbar>\n    <div id=\"search-options\">\n      <p>You can choose up to five hashtags. Please seperate each tag with a comma ( , ) . Example: \"Computers, Science, Technology\"</p>\n      <p>Current Search: ----</p>\n      <div>\n        <ion-button class=\"cancel-button\">\n          Cancel\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-footer>";
      /***/
    },

    /***/
    "heuU":
    /*!*************************************************!*\
      !*** ./src/app/pages/mentors/mentors.module.ts ***!
      \*************************************************/

    /*! exports provided: MentorsPageModule */

    /***/
    function heuU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorsPageModule", function () {
        return MentorsPageModule;
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


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _mentors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mentors-routing.module */
      "hwUp");
      /* harmony import */


      var _mentors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mentors.page */
      "wsGs");
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.module */
      "OWIS");

      var MentorsPageModule = function MentorsPageModule() {
        _classCallCheck(this, MentorsPageModule);
      };

      MentorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _mentors_routing_module__WEBPACK_IMPORTED_MODULE_6__["MentorsPageRoutingModule"], src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_8__["NewMessageMentorPageModule"]],
        declarations: [_mentors_page__WEBPACK_IMPORTED_MODULE_7__["MentorsPage"]]
      })], MentorsPageModule);
      /***/
    },

    /***/
    "hwUp":
    /*!*********************************************************!*\
      !*** ./src/app/pages/mentors/mentors-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: MentorsPageRoutingModule */

    /***/
    function hwUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorsPageRoutingModule", function () {
        return MentorsPageRoutingModule;
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


      var _mentors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mentors.page */
      "wsGs");

      var routes = [{
        path: '',
        component: _mentors_page__WEBPACK_IMPORTED_MODULE_3__["MentorsPage"]
      }, {
        path: 'mentor-page/:name/:title/:email/:description/:photo/:city/:state',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mentor-page-mentor-page-module */
          "mentor-page-mentor-page-module").then(__webpack_require__.bind(null,
          /*! ./mentor-page/mentor-page.module */
          "o1Rv")).then(function (m) {
            return m.MentorPagePageModule;
          });
        }
      }, {
        path: 'mentor-chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mentor-chat-mentor-chat-module */
          "mentor-chat-mentor-chat-module").then(__webpack_require__.bind(null,
          /*! ./mentor-chat/mentor-chat.module */
          "NZe1")).then(function (m) {
            return m.MentorChatPageModule;
          });
        }
      }];

      var MentorsPageRoutingModule = function MentorsPageRoutingModule() {
        _classCallCheck(this, MentorsPageRoutingModule);
      };

      MentorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MentorsPageRoutingModule);
      /***/
    },

    /***/
    "wsGs":
    /*!***********************************************!*\
      !*** ./src/app/pages/mentors/mentors.page.ts ***!
      \***********************************************/

    /*! exports provided: MentorsPage */

    /***/
    function wsGs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorsPage", function () {
        return MentorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mentors_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mentors.page.html */
      "hdAQ");
      /* harmony import */


      var _mentors_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mentors.page.scss */
      "7e7T");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/mentor.service */
      "+DJb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.page */
      "R7fP");

      var MentorsPage = /*#__PURE__*/function () {
        function MentorsPage(router, mentors, loading, modal) {
          _classCallCheck(this, MentorsPage);

          this.router = router;
          this.mentors = mentors;
          this.loading = loading;
          this.modal = modal;
          this.searching = false;
          this.noSearchInput = false;
        }

        _createClass(MentorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMentors();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.searchbar.getInputElement().then(function (searchbarInputElement) {
              searchbarInputElement.style.boxShadow = "none";
            });
          }
        }, {
          key: "getMentors",
          value: function getMentors() {
            var _this = this;

            this.mentors.getMentors().subscribe(function (mentors) {
              _this.allMentors = Object.values(mentors);
              _this.allMentorsLength = _this.allMentors.length;

              _this.allMentors.reverse();

              _this.loadedAllMentors = Object.values(mentors);

              _this.loadedAllMentors.reverse();

              _this.searching = false;
            });
          }
        }, {
          key: "chat",
          value: function chat() {
            this.router.navigate(['/home/mentors/mentor-chat']);
          }
        }, {
          key: "newMessage",
          value: function newMessage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var newMessageModalConfig;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modal.create({
                        component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_7__["NewMessageMentorPage"],
                        componentProps: {}
                      });

                    case 2:
                      newMessageModalConfig = _context.sent;
                      _context.next = 5;
                      return newMessageModalConfig.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mentorPage",
          value: function mentorPage(mentor) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/mentors/mentor-page', mentor.name, mentor.title, mentor.email, mentor.description, mentor.photo, mentor.city, mentor.state]);
          }
        }, {
          key: "filter",
          value: function filter($event) {
            var _this2 = this;

            this.initializeItems();
            var searchTerm = $event.detail.value;
            this.presentLoadingWithOptions();
            console.log(this.allMentors);
            this.allMentors = this.allMentors.filter(function (currentMentors) {
              console.log(currentMentors);

              if (!currentMentors || !searchTerm) {
                console.log('No results from that search');
                _this2.noSearchInput = true;
              }

              if (currentMentors.name && searchTerm) {
                if (currentMentors.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentMentors.name);
                  console.log(currentMentors);
                  _this2.searchTerm = searchTerm;
                  _this2.searching = true;
                  _this2.noSearchInput = false;
                  return true;
                }

                return false;
              }
            });
            this.allMentorsLength = this.allMentors.length; // If there are no matches with the searchTerm

            if (this.allMentorsLength === 0) {
              console.log('No results from that search');
              this.searching = true;
              this.searchTerm = searchTerm;
              this.searchbar.getInputElement().then(function (searchbarInputElement) {
                searchbarInputElement.value = '';
              });
              this.noSearchInput = true;
            }

            if (!searchTerm) {
              console.log('Search term is empty; showing all events instead');
              this.noSearchInput = false;
              this.searching = false;
              this.getMentors();
            }
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.allMentors = this.loadedAllMentors;
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for Mentors...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return MentorsPage;
      }();

      MentorsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      MentorsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSearchbar"], {
            "static": false
          }]
        }]
      };
      MentorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mentors',
        template: _raw_loader_mentors_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mentors_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], MentorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-mentors-mentors-module-es5.js.map