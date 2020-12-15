(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module"], {
    /***/
    "6e3a":
    /*!************************************************************************!*\
      !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.ts ***!
      \************************************************************************/

    /*! exports provided: UploadResumeModalPage */

    /***/
    function e3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadResumeModalPage", function () {
        return UploadResumeModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_upload_resume_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./upload-resume-modal.page.html */
      "ZI5f");
      /* harmony import */


      var _upload_resume_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./upload-resume-modal.page.scss */
      "DEJT");
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
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/resume.service */
      "h8Q2");

      var UploadResumeModalPage = /*#__PURE__*/function () {
        function UploadResumeModalPage(resume, router, profile, alert, modal, toast, loading) {
          _classCallCheck(this, UploadResumeModalPage);

          this.resume = resume;
          this.router = router;
          this.profile = profile;
          this.alert = alert;
          this.modal = modal;
          this.toast = toast;
          this.loading = loading;
          this.userProPicUrl = this.profile.resume.getValue();
          this.awsPrefix = this.userProPicUrl.slice(-51);
        }

        _createClass(UploadResumeModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this.userEmail = data['email'];
              console.log(_this.userEmail);
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/profile/view-resume']);
          }
        }, {
          key: "getFormData",
          value: function getFormData(event) {
            var _this2 = this;

            var formElement = document.querySelectorAll('form');
            formElement.forEach(function (form) {
              if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                _this2.formData = new FormData(form);
                _this2.uploadedResume = true;
              }
            });
            console.log(this.formData);
            var reader = new FileReader();
            reader.addEventListener('load', function () {
              // convert image file to base64 string
              _this2.uploadedPhotoURL = reader.result;
            }, false);

            if (formElement) {
              reader.readAsDataURL(event.target.files[0]);
            }
          }
        }, {
          key: "uploadResume",
          value: function uploadResume() {
            var _this3 = this;

            var formElement = document.querySelectorAll('form');
            formElement.forEach(function (form) {
              if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                _this3.formData = new FormData(form);

                _this3.formData.append('oldResumeKey', _this3.awsPrefix);

                _this3.formData.append('email', _this3.userEmail);
              }
            });
            this.resume.changeResume(this.formData).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var newResume;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(data);
                        newResume = data['objectUrl'];
                        console.log(newResume);
                        _context.next = 5;
                        return this.presentLoading();

                      case 5:
                        _context.next = 7;
                        return this.profile.resume.next(newResume);

                      case 7:
                        _context.next = 9;
                        return this.presentToast();

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: 'Your Resume has been changed',
                        animated: true,
                        cssClass: 'updated-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        cssClass: 'my-custom-class',
                        message: 'Updating Resume...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');
                      this.modal.dismiss();

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);

        return UploadResumeModalPage;
      }();

      UploadResumeModalPage.ctorParameters = function () {
        return [{
          type: src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_7__["ResumeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      UploadResumeModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upload-resume-modal',
        template: _raw_loader_upload_resume_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upload_resume_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_7__["ResumeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], UploadResumeModalPage);
      /***/
    },

    /***/
    "BD02":
    /*!**************************************************************************!*\
      !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.module.ts ***!
      \**************************************************************************/

    /*! exports provided: UploadResumeModalPageModule */

    /***/
    function BD02(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadResumeModalPageModule", function () {
        return UploadResumeModalPageModule;
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


      var _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./upload-resume-modal-routing.module */
      "cXfn");
      /* harmony import */


      var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./upload-resume-modal.page */
      "6e3a");

      var UploadResumeModalPageModule = function UploadResumeModalPageModule() {
        _classCallCheck(this, UploadResumeModalPageModule);
      };

      UploadResumeModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadResumeModalPageRoutingModule"]],
        declarations: [_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_6__["UploadResumeModalPage"]]
      })], UploadResumeModalPageModule);
      /***/
    },

    /***/
    "DEJT":
    /*!**************************************************************************!*\
      !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function DEJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VwbG9hZC1yZXN1bWUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7QUFERiIsImZpbGUiOiJ1cGxvYWQtcmVzdW1lLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */";
      /***/
    },

    /***/
    "ZI5f":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/upload-resume-modal/upload-resume-modal.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZI5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Update Resume</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.8\" size=\"2.5\">\n        <h1>Update Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background: #666;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <p class=\"text-header\">Please upload a resume from your phone</p>\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "cXfn":
    /*!**********************************************************************************!*\
      !*** ./src/app/modals/upload-resume-modal/upload-resume-modal-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: UploadResumeModalPageRoutingModule */

    /***/
    function cXfn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadResumeModalPageRoutingModule", function () {
        return UploadResumeModalPageRoutingModule;
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


      var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./upload-resume-modal.page */
      "6e3a");

      var routes = [{
        path: '',
        component: _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_3__["UploadResumeModalPage"]
      }];

      var UploadResumeModalPageRoutingModule = function UploadResumeModalPageRoutingModule() {
        _classCallCheck(this, UploadResumeModalPageRoutingModule);
      };

      UploadResumeModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UploadResumeModalPageRoutingModule);
      /***/
    },

    /***/
    "h8Q2":
    /*!********************************************!*\
      !*** ./src/app/services/resume.service.ts ***!
      \********************************************/

    /*! exports provided: ResumeService */

    /***/
    function h8Q2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResumeService", function () {
        return ResumeService;
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

      var ResumeService = /*#__PURE__*/function () {
        function ResumeService(http) {
          _classCallCheck(this, ResumeService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        }

        _createClass(ResumeService, [{
          key: "resumeUpload",
          value: function resumeUpload(resumeForm) {
            console.log('resume uploading');
            return this.http.post("".concat(this.BACKEND_URL, "/api/resume/upload-resume"), resumeForm);
          }
        }, {
          key: "changeResume",
          value: function changeResume(imageForm) {
            console.log(imageForm);
            return this.http.post("".concat(this.BACKEND_URL, "/api/resume/change-resume"), imageForm);
          }
        }]);

        return ResumeService;
      }();

      ResumeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ResumeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ResumeService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module-es5.js.map