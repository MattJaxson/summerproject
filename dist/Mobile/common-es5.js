(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "6/gD":
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /*! exports provided: PhotoService */

    /***/
    function gD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
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

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(http) {
          _classCallCheck(this, PhotoService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        } // Testing


        _createClass(PhotoService, [{
          key: "imageUpload",
          value: function imageUpload(imageForm) {
            console.log('image uploading');
            console.log(imageForm);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/upload-profile-picture"), imageForm);
          }
        }, {
          key: "changeProfilePicture",
          value: function changeProfilePicture(imageForm) {
            console.log(imageForm);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/change-profile-picture"), imageForm);
          }
        }, {
          key: "updatePostPhotos",
          value: function updatePostPhotos(newPhoto, email) {
            console.log(newPhoto);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/update-all-post-pictures"), newPhoto, email).subscribe();
          }
        }, {
          key: "boothPartnerLogo",
          value: function boothPartnerLogo(logo) {
            console.log('both partner uploading');
            console.log(logo);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/upload-booth-partner-logo"), logo);
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PhotoService);
      /***/
    },

    /***/
    "6kEE":
    /*!************************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo.module.ts ***!
      \************************************************************/

    /*! exports provided: ReportConvoPageModule */

    /***/
    function kEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportConvoPageModule", function () {
        return ReportConvoPageModule;
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


      var _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./report-convo-routing.module */
      "Ip59");
      /* harmony import */


      var _report_convo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./report-convo.page */
      "pCvL");

      var ReportConvoPageModule = function ReportConvoPageModule() {
        _classCallCheck(this, ReportConvoPageModule);
      };

      ReportConvoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportConvoPageRoutingModule"]],
        declarations: [_report_convo_page__WEBPACK_IMPORTED_MODULE_6__["ReportConvoPage"]]
      })], ReportConvoPageModule);
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "77Eq":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/view-resume/view-resume.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Eq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col push-lg=\"0.5\" size=\"2\">\n        <h1>View Resume</h1>\n      </ion-col>\n      <ion-col push-lg=\"6.4\" size=\"6\">\n        <ion-button (click)=\"updateResume()\" class=\"orange-button\" style=\"width: 150px;\">UPDATE</ion-button>\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n          Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"11\">\n        <hr style=\"background-color: #666;\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n        <h4>You can View and Update your Resume here</h4>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n\n      </ion-col>\n      <ion-button (click)=\"updateResume()\" class=\"orange-button ion-hide-md-up\" style=\"width: 150px;\">UPDATE</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "7UM6":
    /*!******************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function UM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2VkaXQtcG9zdC9lZGl0LXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2VkaXQtcG9zdC9lZGl0LXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "7vZz":
    /*!**********************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: NewMessageStudentPageRoutingModule */

    /***/
    function vZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewMessageStudentPageRoutingModule", function () {
        return NewMessageStudentPageRoutingModule;
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


      var _new_message_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-message-student.page */
      "gLVQ");

      var routes = [{
        path: '',
        component: _new_message_student_page__WEBPACK_IMPORTED_MODULE_3__["NewMessageStudentPage"]
      }];

      var NewMessageStudentPageRoutingModule = function NewMessageStudentPageRoutingModule() {
        _classCallCheck(this, NewMessageStudentPageRoutingModule);
      };

      NewMessageStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewMessageStudentPageRoutingModule);
      /***/
    },

    /***/
    "8Vcj":
    /*!************************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function Vcj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 20px;\n}\n\nion-textarea {\n  background: rgba(224, 224, 224, 0.2);\n  padding: 8px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3JlcG9ydC1jb252by9yZXBvcnQtY29udm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yZXBvcnQtY29udm8vcmVwb3J0LWNvbnZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkICM5OTk7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDUwcHggMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "9CtM":
    /*!******************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post.module.ts ***!
      \******************************************************/

    /*! exports provided: EditPostPageModule */

    /***/
    function CtM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPostPageModule", function () {
        return EditPostPageModule;
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


      var _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-post-routing.module */
      "OHV1");
      /* harmony import */


      var _edit_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-post.page */
      "VPH/");

      var EditPostPageModule = function EditPostPageModule() {
        _classCallCheck(this, EditPostPageModule);
      };

      EditPostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPostPageRoutingModule"]],
        declarations: [_edit_post_page__WEBPACK_IMPORTED_MODULE_6__["EditPostPage"]]
      })], EditPostPageModule);
      /***/
    },

    /***/
    "AhZb":
    /*!**************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student.module.ts ***!
      \**************************************************************************/

    /*! exports provided: NewMessageStudentPageModule */

    /***/
    function AhZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewMessageStudentPageModule", function () {
        return NewMessageStudentPageModule;
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


      var _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-message-student-routing.module */
      "7vZz");
      /* harmony import */


      var _new_message_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-message-student.page */
      "gLVQ");

      var NewMessageStudentPageModule = function NewMessageStudentPageModule() {
        _classCallCheck(this, NewMessageStudentPageModule);
      };

      NewMessageStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewMessageStudentPageRoutingModule"]],
        declarations: [_new_message_student_page__WEBPACK_IMPORTED_MODULE_6__["NewMessageStudentPage"]]
      })], NewMessageStudentPageModule);
      /***/
    },

    /***/
    "D48j":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.ts ***!
      \**********************************************************************/

    /*! exports provided: ViewResumePage */

    /***/
    function D48j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewResumePage", function () {
        return ViewResumePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-resume.page.html */
      "77Eq");
      /* harmony import */


      var _view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-resume.page.scss */
      "FsrL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ViewResumePage = /*#__PURE__*/function () {
        function ViewResumePage(router, profile, domSanitizer) {
          _classCallCheck(this, ViewResumePage);

          this.router = router;
          this.profile = profile;
          this.domSanitizer = domSanitizer;
        }

        _createClass(ViewResumePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (data) {
              console.log(data);

              _this.profile.resume.next(data['resume']);
            });
            this.profile.resume.subscribe(function (data) {
              _this.resume = data;
            });
          }
        }, {
          key: "sanitizeImageUrl",
          value: function sanitizeImageUrl(imageUrl) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/profile']);
          }
        }, {
          key: "updateResume",
          value: function updateResume() {
            console.log('Updating Resume from View Resume page');
            this.router.navigate(['/home/profile/update-resume']);
          }
        }]);

        return ViewResumePage;
      }();

      ViewResumePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }];
      };

      ViewResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-resume',
        template: _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])], ViewResumePage);
      /***/
    },

    /***/
    "FsrL":
    /*!************************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function FsrL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h4 {\n  margin: 30px auto;\n  color: #005191;\n}\n\n.orange-button {\n  position: relative;\n  top: 4px;\n  right: 20px;\n  margin: 30px 0px 100px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9yZXN1bWUvdmlldy1yZXN1bWUvdmlldy1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL3ZpZXctcmVzdW1lL3ZpZXctcmVzdW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDRweDtcbiAgICByaWdodDogMjBweDtcbiAgICBtYXJnaW46IDMwcHggMHB4IDEwMHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    "Ip59":
    /*!********************************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: ReportConvoPageRoutingModule */

    /***/
    function Ip59(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportConvoPageRoutingModule", function () {
        return ReportConvoPageRoutingModule;
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


      var _report_convo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report-convo.page */
      "pCvL");

      var routes = [{
        path: '',
        component: _report_convo_page__WEBPACK_IMPORTED_MODULE_3__["ReportConvoPage"]
      }];

      var ReportConvoPageRoutingModule = function ReportConvoPageRoutingModule() {
        _classCallCheck(this, ReportConvoPageRoutingModule);
      };

      ReportConvoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportConvoPageRoutingModule);
      /***/
    },

    /***/
    "KWWs":
    /*!***************************************************!*\
      !*** ./src/app/services/notifications.service.ts ***!
      \***************************************************/

    /*! exports provided: NotificationsService */

    /***/
    function KWWs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return NotificationsService;
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
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NotificationsService = /*#__PURE__*/function () {
        function NotificationsService(http) {
          _classCallCheck(this, NotificationsService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
          this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](['']);
        }

        _createClass(NotificationsService, [{
          key: "getNotifications",
          value: function getNotifications(email) {
            console.log('Getting Notifications');
            console.log(email);
            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications"), {
              email: email
            });
          }
        }, {
          key: "clearNotifications",
          value: function clearNotifications(email) {
            console.log('Clearing Notifications');
            console.log(email);
            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/clear-notifications"), {
              email: email
            });
          }
        }, {
          key: "commentNotification",
          value: function commentNotification(instigatingUser, recievingUser, postID, commentID) {
            console.log("Sending notfication to ".concat(recievingUser, " that ").concat(instigatingUser, " commented on their post.")); // tslint:disable-next-line: max-line-length

            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/comment-on-post-notification"), {
              instigatingUser: instigatingUser,
              recievingUser: recievingUser,
              postID: postID,
              commentID: commentID
            });
          }
        }, {
          key: "replyNotification",
          value: function replyNotification(instigatingUser, recievingUser, postID, commentID, replyID) {
            console.log("Sending notfication to ".concat(recievingUser, " that ").concat(instigatingUser, " commented on their post.")); // tslint:disable-next-line: max-line-length

            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/reply-on-comment-notification"), {
              instigatingUser: instigatingUser,
              recievingUser: recievingUser,
              postID: postID,
              commentID: commentID,
              replyID: replyID
            });
          }
        }]);

        return NotificationsService;
      }();

      NotificationsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], NotificationsService);
      /***/
    },

    /***/
    "LGlg":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/new-message-mentor/new-message-mentor.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LGlg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "OHV1":
    /*!**************************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: EditPostPageRoutingModule */

    /***/
    function OHV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPostPageRoutingModule", function () {
        return EditPostPageRoutingModule;
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


      var _edit_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-post.page */
      "VPH/");

      var routes = [{
        path: '',
        component: _edit_post_page__WEBPACK_IMPORTED_MODULE_3__["EditPostPage"]
      }];

      var EditPostPageRoutingModule = function EditPostPageRoutingModule() {
        _classCallCheck(this, EditPostPageRoutingModule);
      };

      EditPostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditPostPageRoutingModule);
      /***/
    },

    /***/
    "OWIS":
    /*!************************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor.module.ts ***!
      \************************************************************************/

    /*! exports provided: NewMessageMentorPageModule */

    /***/
    function OWIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewMessageMentorPageModule", function () {
        return NewMessageMentorPageModule;
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


      var _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-message-mentor-routing.module */
      "ddZ5");
      /* harmony import */


      var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-message-mentor.page */
      "R7fP");

      var NewMessageMentorPageModule = function NewMessageMentorPageModule() {
        _classCallCheck(this, NewMessageMentorPageModule);
      };

      NewMessageMentorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewMessageMentorPageRoutingModule"]],
        declarations: [_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_6__["NewMessageMentorPage"]]
      })], NewMessageMentorPageModule);
      /***/
    },

    /***/
    "R7fP":
    /*!**********************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.ts ***!
      \**********************************************************************/

    /*! exports provided: NewMessageMentorPage */

    /***/
    function R7fP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewMessageMentorPage", function () {
        return NewMessageMentorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_message_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-message-mentor.page.html */
      "LGlg");
      /* harmony import */


      var _new_message_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-message-mentor.page.scss */
      "w8Iy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var NewMessageMentorPage = /*#__PURE__*/function () {
        function NewMessageMentorPage(modal) {
          _classCallCheck(this, NewMessageMentorPage);

          this.modal = modal;
        }

        _createClass(NewMessageMentorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);

        return NewMessageMentorPage;
      }();

      NewMessageMentorPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      NewMessageMentorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-message-mentor',
        template: _raw_loader_new_message_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_message_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], NewMessageMentorPage);
      /***/
    },

    /***/
    "RbX/":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-convo/report-convo.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RbX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Report Conversation</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Mobile -->\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <h5>Reporting</h5>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/batman-pro-pic.png\" />\n          </ion-avatar>\n          <ion-label>Name</ion-label>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <ion-textarea rows=\"12\" required placeholder=\"Why are you reporting?\"></ion-textarea>\n        </ion-item>\n\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <ion-button class=\"blue-button\" (click)=\"reportAlert()\">\n          Report\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "SXzz":
    /*!**************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function SXzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL25ldy1tZXNzYWdlLXN0dWRlbnQvbmV3LW1lc3NhZ2Utc3R1ZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBS0E7RUFDRSxnQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL25ldy1tZXNzYWdlLXN0dWRlbnQvbmV3LW1lc3NhZ2Utc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1idXR0b24ge1xufVxuXG4ubm8tdXNlcnMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "TH4B":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ViewResumePageRoutingModule */

    /***/
    function TH4B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewResumePageRoutingModule", function () {
        return ViewResumePageRoutingModule;
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


      var _view_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-resume.page */
      "D48j");

      var routes = [{
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_3__["ViewResumePage"]
      }];

      var ViewResumePageRoutingModule = function ViewResumePageRoutingModule() {
        _classCallCheck(this, ViewResumePageRoutingModule);
      };

      ViewResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewResumePageRoutingModule);
      /***/
    },

    /***/
    "VPH/":
    /*!****************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post.page.ts ***!
      \****************************************************/

    /*! exports provided: EditPostPage */

    /***/
    function VPH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPostPage", function () {
        return EditPostPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_post_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-post.page.html */
      "zMmi");
      /* harmony import */


      var _edit_post_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-post.page.scss */
      "7UM6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");

      var EditPostPage = /*#__PURE__*/function () {
        function EditPostPage(formBuilder, modal, navParams, loading, posts, alert, postEmitterService) {
          _classCallCheck(this, EditPostPage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.navParams = navParams;
          this.loading = loading;
          this.posts = posts;
          this.alert = alert;
          this.postEmitterService = postEmitterService;
        }

        _createClass(EditPostPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.postID = this.navParams.get('postID');
            this.post = this.navParams.get('post');
            console.log(this.post); // To collect comment data

            this.editPostForm = this.formBuilder.group({
              newPost: this.post
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling');
            this.modal.dismiss();
          }
        }, {
          key: "refreshComment",
          value: function refreshComment() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "edit",
          value: function edit(newPost) {
            var _this2 = this;

            console.log('editting');
            this.posts.editPost(this.postID, newPost.newPost).subscribe(function (post) {
              console.log(post);

              _this2.editLoading(post['post']);
            });
          }
        }, {
          key: "editLoading",
          value: function editLoading(post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        message: 'Editing your Post...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      console.log(post.post);
                      _context2.next = 8;
                      return loading.onDidDismiss();

                    case 8:
                      _yield$loading$onDidD = _context2.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      _context2.next = 13;
                      return this.modal.dismiss();

                    case 13:
                      _context2.next = 15;
                      return this.posts.postsSubject$.next(post);

                    case 15:
                      _context2.next = 17;
                      return this.confirmAlert();

                    case 17:
                      console.log('Loading dismissed!');

                    case 18:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alert.create({
                        cssClass: 'success-alert',
                        message: 'Your Post has been edited.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return EditPostPage;
      }();

      EditPostPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]
        }];
      };

      EditPostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-post',
        template: _raw_loader_edit_post_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_post_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]])], EditPostPage);
      /***/
    },

    /***/
    "XzoX":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/new-message-student/new-message-student.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XzoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" color=\"secondary\" (click)=\"newChatroom()\">\n        Next\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\" (keyup)=\"search($event)\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item *ngFor=\"let user of users\" lines=\"none\" (click)=\"newChatroom(user.name, user.email, user.profilePicture)\">\n          <ion-avatar slot=\"start\">\n            <img src={{user.profilePicture}}>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{user.name}}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col *ngIf=\"this.users.length == 0\" class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "Y19J":
    /*!**************************************************!*\
      !*** ./src/app/services/student-chat.service.ts ***!
      \**************************************************/

    /*! exports provided: StudentChatService */

    /***/
    function Y19J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentChatService", function () {
        return StudentChatService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // export class SocketNameSpace extends Socket {
      //   constructor(socketConfig: SocketIoConfig) {
      //     // TODO: Study this a little more
      //     // super()
      //     super(socketConfig);
      //   }
      // }


      var StudentChatService = function StudentChatService(router) {
        _classCallCheck(this, StudentChatService);

        this.router = router;
        this.conversations$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      };

      StudentChatService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      StudentChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], StudentChatService);
      /***/
    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!delegate) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context4.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context4.abrupt("return", el);

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "bUUK":
    /*!************************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume.module.ts ***!
      \************************************************************************/

    /*! exports provided: ViewResumePageModule */

    /***/
    function bUUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewResumePageModule", function () {
        return ViewResumePageModule;
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


      var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-resume-routing.module */
      "TH4B");
      /* harmony import */


      var _view_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-resume.page */
      "D48j");

      var ViewResumePageModule = function ViewResumePageModule() {
        _classCallCheck(this, ViewResumePageModule);
      };

      ViewResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewResumePageRoutingModule"]],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_6__["ViewResumePage"]]
      })], ViewResumePageModule);
      /***/
    },

    /***/
    "ddZ5":
    /*!********************************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: NewMessageMentorPageRoutingModule */

    /***/
    function ddZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewMessageMentorPageRoutingModule", function () {
        return NewMessageMentorPageRoutingModule;
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


      var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-message-mentor.page */
      "R7fP");

      var routes = [{
        path: '',
        component: _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__["NewMessageMentorPage"]
      }];

      var NewMessageMentorPageRoutingModule = function NewMessageMentorPageRoutingModule() {
        _classCallCheck(this, NewMessageMentorPageRoutingModule);
      };

      NewMessageMentorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewMessageMentorPageRoutingModule);
      /***/
    },

    /***/
    "gLVQ":
    /*!************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student.page.ts ***!
      \************************************************************************/

    /*! exports provided: NewMessageStudentPage */

    /***/
    function gLVQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewMessageStudentPage", function () {
        return NewMessageStudentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_message_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-message-student.page.html */
      "XzoX");
      /* harmony import */


      var _new_message_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-message-student.page.scss */
      "SXzz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/student-chat.service */
      "Y19J");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NewMessageStudentPage = /*#__PURE__*/function () {
        function NewMessageStudentPage(modal, studentChat, profile, router) {
          _classCallCheck(this, NewMessageStudentPage);

          this.modal = modal;
          this.studentChat = studentChat;
          this.profile = profile;
          this.router = router;
        }

        _createClass(NewMessageStudentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this3.requestingUserFullname = data['fullName'];
              _this3.requestingUserEmail = data['email'];
              _this3.requestingUserPhoto = data['profilePicture'];

              _this3.profile.getAllUsers().subscribe(function (users) {
                // Make sure to remove the Client user from list of users to search through
                // There is no need to message yourself.
                var usersArray = Object.values(users);
                var index = usersArray.map(function (user) {
                  return user.email;
                }).indexOf(_this3.requestingUserEmail);
                usersArray.splice(index, 1);
                _this3.users = usersArray;
                _this3.loadedUsers = usersArray;
              });
            });
          }
        }, {
          key: "search",
          value: function search(event) {
            var _this4 = this;

            this.initializeItems();
            console.log(this.loadedUsers);
            var search = event.target.value;
            console.log(search);
            this.users = this.users.filter(function (currentUsers) {
              if (!currentUsers || !search) {
                console.log('No results from that search');
                _this4.noSearchInput = true;
              }

              if (currentUsers.name && search) {
                if (currentUsers.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                  _this4.searchTerm = search;
                  _this4.searching = true;
                  _this4.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this4.noSearchInput = true;
            });
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.users = this.loadedUsers;
          }
        }, {
          key: "newChatroom",
          value: function newChatroom(respondingUserFullName, respondingUserEmail, respondingUserPhoto) {
            var _this5 = this;

            this.profile.getUserDetails().subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var conversations, _iterator, _step, convo;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        // If Client user has alreadt started a conversation with a user, direct that user to their conversations chat page.
                        conversations = data['studentChat'];
                        _iterator = _createForOfIteratorHelper(conversations);
                        _context5.prev = 2;

                        _iterator.s();

                      case 4:
                        if ((_step = _iterator.n()).done) {
                          _context5.next = 15;
                          break;
                        }

                        convo = _step.value;

                        if (!(convo.requestingUserEmail === respondingUserEmail || convo.respondingUserEmail === respondingUserEmail)) {
                          _context5.next = 13;
                          break;
                        }

                        console.log('You have already started a conversation with this user');
                        _context5.next = 10;
                        return this.cancel();

                      case 10:
                        _context5.next = 12;
                        return this.router.navigate(['home/posts/student-chat/chat-page', convo.chatId, this.requestingUserFullname, this.requestingUserPhoto, this.requestingUserEmail]);

                      case 12:
                        return _context5.abrupt("return", _context5.sent);

                      case 13:
                        _context5.next = 4;
                        break;

                      case 15:
                        _context5.next = 20;
                        break;

                      case 17:
                        _context5.prev = 17;
                        _context5.t0 = _context5["catch"](2);

                        _iterator.e(_context5.t0);

                      case 20:
                        _context5.prev = 20;

                        _iterator.f();

                        return _context5.finish(20);

                      case 23:
                        // tslint:disable-next-line: max-line-length
                        // this.studentChat.newChatroom(this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, respondingUserFullName, respondingUserEmail, respondingUserPhoto);
                        // this.studentChat.newChatRoom.subscribe(
                        //   d => {
                        //     this.studentChat.conversations$.next(Object.values(d));
                        //   }
                        // );
                        this.cancel();

                      case 24:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[2, 17, 20, 23]]);
              }));
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);

        return NewMessageStudentPage;
      }();

      NewMessageStudentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__["StudentChatService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      NewMessageStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-message-student',
        template: _raw_loader_new_message_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_message_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__["StudentChatService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], NewMessageStudentPage);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "pCvL":
    /*!**********************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo.page.ts ***!
      \**********************************************************/

    /*! exports provided: ReportConvoPage */

    /***/
    function pCvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportConvoPage", function () {
        return ReportConvoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_convo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-convo.page.html */
      "RbX/");
      /* harmony import */


      var _report_convo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-convo.page.scss */
      "8Vcj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ReportConvoPage = /*#__PURE__*/function () {
        function ReportConvoPage(modal, alert, toast) {
          _classCallCheck(this, ReportConvoPage);

          this.modal = modal;
          this.alert = alert;
          this.toast = toast;
        }

        _createClass(ReportConvoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }, {
          key: "reportAlert",
          value: function reportAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to report this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      _context6.next = 2;
                                      return this.reportedToast();

                                    case 2:
                                      _context6.next = 4;
                                      return this.modal.dismiss();

                                    case 4:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6, this);
                            }));
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "reportedToast",
          value: function reportedToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toast.create({
                        cssClass: 'favorited-toast',
                        message: "You have reported you conversation with ---",
                        duration: 2000
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return ReportConvoPage;
      }();

      ReportConvoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ReportConvoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-convo',
        template: _raw_loader_report_convo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_convo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], ReportConvoPage);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "w8Iy":
    /*!************************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function w8Iy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL25ldy1tZXNzYWdlLW1lbnRvci9uZXctbWVzc2FnZS1tZW50b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9uZXctbWVzc2FnZS1tZW50b3IvbmV3LW1lc3NhZ2UtbWVudG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkICM5OTk7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XG4gIGhlaWdodDogNjBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ubm8tdXNlcnMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "wbj2":
    /*!**************************************************************!*\
      !*** ./src/app/emitters/single-post-page-emitter.service.ts ***!
      \**************************************************************/

    /*! exports provided: SinglePostPageEmitterService */

    /***/
    function wbj2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinglePostPageEmitterService", function () {
        return SinglePostPageEmitterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SinglePostPageEmitterService = /*#__PURE__*/function () {
        function SinglePostPageEmitterService() {
          _classCallCheck(this, SinglePostPageEmitterService);

          this.invokeSinglePostPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(SinglePostPageEmitterService, [{
          key: "singlePostPageRefresh",
          value: function singlePostPageRefresh() {
            this.invokeSinglePostPageRefresh.emit();
          }
        }]);

        return SinglePostPageEmitterService;
      }();

      SinglePostPageEmitterService.ctorParameters = function () {
        return [];
      };

      SinglePostPageEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SinglePostPageEmitterService);
      /***/
    },

    /***/
    "zMmi":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-post/edit-post.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zMmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editPostForm\" (ngSubmit)=\"edit(this.editPostForm.value)\">\n        <ion-textarea\n          (keydown.control.enter)=\"edit(this.editPostForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newPost\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map