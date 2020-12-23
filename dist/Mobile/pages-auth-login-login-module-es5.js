(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"], {
    /***/
    "NKrf":
    /*!************************************************!*\
      !*** ./src/app/pages/auth/login/login.page.ts ***!
      \************************************************/

    /*! exports provided: LoginPage */

    /***/
    function NKrf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "tvH6");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "faZD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage( // private auth: AuthService,
        formBuilder, auth, loading, toast, router) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.auth = auth;
          this.loading = loading;
          this.toast = toast;
          this.router = router;
          this.validationMessasges = {
            email: [{
              type: 'email',
              message: 'Must be a valid email address'
            }],
            password: [// tslint:disable-next-line: max-line-length
            {
              type: 'pattern',
              message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'
            }]
          };
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (window.navigator.onLine === false) {
              console.log('We are OFFLINE!');
            }

            if (window.navigator.onLine === true) {
              console.log('We are ONLINE!');
            }

            this.loginForm = this.formBuilder.group({
              email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
              password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, // this is for the letters (both uppercase and lowercase) and numbers validation
              _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
            });
            console.log(this.loginForm.value); // this.wrongPasswordToast();

            this.downloadButton = document.getElementById('download-button');
            this.closeIPhoneInstallBannerButton = document.getElementById('close');
            this.iPhoneInstallBanner = document.getElementById('iphone-install-banner');
            this.openSafariBanner = document.getElementById('open-safari-banner');
            this.openSafariClose = document.getElementById('open-safari-close');
            var deviceType = window.navigator.userAgent;
            console.log(deviceType); // Safari Desktop

            if (deviceType.search(true && 'Version') > -1) {
              console.log('Safari');
              this.downloadButton.innerHTML = 'Safari';
            } // Chrome Desktop


            if (deviceType.search('Chrome') > -1) {// this.downloadButton.innerHTML = 'Chrome';
            } // Firefox Desktop


            if (deviceType.search('Firefox') > -1) {
              this.downloadButton.innerHTML = 'Firefox';
            } // Edge Desktop


            if (deviceType.search('Edg') > -1) {
              this.downloadButton.innerHTML = 'Edge';
            } // Opera Desktop


            if (deviceType.search('OPR') > -1) {
              console.log('Opera');
              this.downloadButton.innerHTML = 'Opera';
            } // iOS
            // (Mobile) Safari iOS


            if (deviceType.search(true && 'Mobile') > -1) {
              this.downloadButton.innerHTML = 'iOS Safari';
              this.downloadButton.style.display = 'block';
              this.downloadButton.addEventListener('click', function () {
                console.log('Clicked Button');
                _this.iPhoneInstallBanner.style.display = 'block';

                _this.closeIPhoneInstallBannerButton.addEventListener('click', function () {
                  console.log('Closing iPhone Install banner');
                  _this.iPhoneInstallBanner.style.display = 'none';
                });
              });
            } // (Mobile) Chrome iOS


            if (deviceType.search('CriOS') > -1) {
              this.downloadButton.innerHTML = 'iOS Chrome';
              this.downloadButton.addEventListener('click', function () {
                console.log('Clicked Button');
                _this.openSafariBanner.style.display = 'block';

                _this.openSafariClose.addEventListener('click', function () {
                  console.log('Closing iPhone Install banner');
                  _this.openSafariBanner.style.display = 'none';
                });
              });
            } // (Mobile) FireFox iOS


            if (deviceType.search('FxiOS') > -1) {
              this.downloadButton.innerHTML = 'iOS Firefox';
              this.downloadButton.style.display = 'block';
              this.downloadButton.addEventListener('click', function () {
                console.log('Clicked Button');
                _this.openSafariBanner.style.display = 'block';
                _this.iPhoneInstallBanner.style.display = 'none';

                _this.openSafariClose.addEventListener('click', function () {
                  console.log('Closing iPhone Install banner');
                  _this.openSafariBanner.style.display = 'none';
                });
              });
            } // (Mobile) Edge iOS


            if (deviceType.search('EdgiOS') > -1) {
              this.downloadButton.innerHTML = 'iOS Edge';
              this.downloadButton.style.display = 'block';
              this.downloadButton.addEventListener('click', function () {
                _this.openSafariBanner.style.display = 'block';
                _this.iPhoneInstallBanner.style.display = 'none';

                _this.openSafariClose.addEventListener('click', function () {
                  console.log('Closing iPhone Install banner');
                  _this.openSafariBanner.style.display = 'none';
                });
              });
            } // (Mobile) Opera iOS


            if (deviceType.search('OPT') > -1) {
              this.downloadButton.innerHTML = 'iOS Opera';
              this.downloadButton.style.display = 'block';
              this.downloadButton.addEventListener('click', function () {
                console.log('Clicked Button');
                _this.openSafariBanner.style.display = 'block';
                _this.iPhoneInstallBanner.style.display = 'none';

                _this.openSafariClose.addEventListener('click', function () {
                  console.log('Closing iPhone Install banner');
                  _this.openSafariBanner.style.display = 'none';
                });
              });
            } // iPad


            if (deviceType.search('iPad') > -1) {
              this.downloadButton.innerHTML = 'iPad';
              this.downloadButton.style.display = 'block';
            } // Android
            // (Mobile) Chrome Android


            if (deviceType.search('Chrome') > -1 && deviceType.search('Android') > -1) {
              this.downloadButton.innerHTML = 'Chrome Android';
              this.downloadButton.addEventListener('click', function () {
                _this.iPhoneInstallBanner.style.display = 'none';

                _this.showInstallBanner();
              });
            } // (Mobile) Firefox Android


            if (deviceType.search('Firefox') > -1 && deviceType.search('Android') > -1) {
              this.downloadButton.innerHTML = 'Firefox Android';
            } // (Mobile) Edge Android


            if (deviceType.search('EdgA') > -1) {
              this.downloadButton.innerHTML = 'Edge Android';
            } // (Mobile) Opera Mini Android
            // Samsung Browser


            if (deviceType.search('SamsungBrowser') > -1) {
              this.downloadButton.innerHTML = 'Samsung Browser';
            } // Check to see if the app is already installed on the users device


            console.log(window.navigator); // Detect if app is launched from home screen

            if (window.matchMedia('(display-mode: standalone)').matches) {
              console.log('display-mode is standalone');
              this.iPhoneInstallBanner.style.display = 'none';
              this.openSafariBanner.style.display = 'none';
              this.downloadButton.style.display = 'none';
            } // Detect if app is launched from home screen
            // Safari


            if (window.navigator['standalone'] === true) {
              console.log('display-mode is standalone');
              this.iPhoneInstallBanner.style.display = 'none';
              this.openSafariBanner.style.display = 'none';
              this.downloadButton.style.display = 'none';
            }
          }
        }, {
          key: "showInstallBanner",
          value: function showInstallBanner() {
            var _this2 = this;

            console.log('Trying to Show Install Banner ...');
            console.log(this.deferredPrompt);

            if (this.deferredPrompt === undefined) {
              console.log('This page was already installed');
              this.downloadButton.style.display = 'none';
            }

            if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
              // Hide Download Button
              this.downloadButton.style.display = 'none'; // Show the prompt

              this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

              this.deferredPrompt.userChoice.then(function (choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the A2HS prompt');
                } else {
                  _this2.downloadButton.style.display = 'block';
                  _this2.downloadButton.style.margin = '0 auto 90px auto';
                  console.log('User dismissed the A2HS prompt');
                } // We no longer need the prompt.  Clear it up.


                _this2.deferredPrompt = null;
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            setTimeout(function () {
              _this3.inputElement.setFocus();
            }, 1000);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        message: 'Logging in...',
                        duration: 1000,
                        cssClass: 'success-toast',
                        keyboardClose: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "login",
          value: function login(data) {
            this.presentLoading();
            this.auth.login(data);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/landing']);
          }
        }, {
          key: "download",
          value: function download() {
            console.log('Attempting to download app..');
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      LoginPage.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['autoFocusInput', {
            "static": false
          }]
        }]
      };
      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], LoginPage);
      /***/
    },

    /***/
    "aWET":
    /*!**********************************************************!*\
      !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aWET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "NKrf");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "faZD":
    /*!**************************************************!*\
      !*** ./src/app/pages/auth/login/login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function faZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n}\n\n#logo {\n  height: 50px;\n  margin: 5px 0 30px 0;\n}\n\nion-footer {\n  opacity: 1;\n  border: none;\n}\n\nion-button {\n  margin: 0;\n}\n\n#download-button {\n  background: linear-gradient(90deg, #1fcc6d 19.625%, #1ecb6c 19.625%, #17bf28 79.625%);\n  -webkit-background: linear-gradient(90deg, #1fcc6d 19.625%, #1ecb6c 19.625%, #17bf28 79.625%);\n  color: white;\n  width: 100%;\n  height: 60px;\n  font-size: 1.4em;\n  font-weight: 500;\n  margin: 0;\n  border-radius: 0 !important;\n  transition: 0.5;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n}\n\n#forgot {\n  width: 220px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  margin-top: 20px;\n  opacity: 0;\n  --background:none;\n  --background-hover: #474444;\n  --color: rgba(130,130,130, 0.5);\n  --color-hover: white;\n  --transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.grey-button {\n  width: 150px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  margin: 10px auto;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #999;\n  --background:none;\n  --color: #999;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtBLGtCQUFBO0FBSEE7O0FBTUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxxRkFBQTtFQUVBLDZGQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFMRjs7QUFVQTtFQUNFO0lBQ0UsMkJBQUE7RUFQRjtFQVVBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VBUkY7QUFDRjs7QUFBQTtFQUNFO0lBQ0UsMkJBQUE7RUFQRjtFQVVBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VBUkY7QUFDRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQVRGOztBQVlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQVRGOztBQVlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBVEYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuLy8gLS1iYWNrZ3JvdW5kOiBub25lO1xuLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvQmFja2dyb3VuZHMvTG9naW5fQmFja2dyb3VuZC5zdmcnKTtcbi8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHggMCAzMHB4IDA7XG59XG5cbmlvbi1mb290ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG5cbn1cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDA7XG59XG5cbiNkb3dubG9hZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzEsIDIwNCwgMTA5LDEpIDE5LjYyNSUscmdiYSgzMCwgMjAzLCAxMDgsMSkgMTkuNjI1JSxyZ2JhKDIzLCAxOTEsIDQwLDEpIDc5LjYyNSUpXG4gIDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzEsIDIwNCwgMTA5LDEpIDE5LjYyNSUscmdiYSgzMCwgMjAzLCAxMDgsMSkgMTkuNjI1JSxyZ2JhKDIzLCAxOTEsIDQwLDEpIDc5LjYyNSUpXG4gIDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC41O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLy8gYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMXMgZm9yd2FyZHM7XG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuI3NpZ24tdXAtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNTE5MSwgIzAwMDAwMCk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NzQ0NDQ7XG4gIC0tY29sb3I6IHJnYmEoMTMwLDEzMCwxMzAsIDAuNSk7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cbi5ncmV5LWJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM5OTk7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "qdgq":
    /*!**************************************************!*\
      !*** ./src/app/pages/auth/login/login.module.ts ***!
      \**************************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function qdgq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aWET");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "NKrf");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "tvH6":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function tvH6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <!-- Mobile & Tablet -->\n  <ion-grid class=\"ion-hide-md-up\">\n\n    <!-- Logo -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" style=\"margin-top: 10%;\" class=\"ion-text-center\">\n        <img id=\"logo\" src=\"../../../../assets/logo-2.png\"/>\n      </ion-col>\n    </ion-row>\n\n    <!-- Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"10\" size-sm=\"8\" size-md=\"8\">\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\"\n                (keyup.enter)=\"login(this.loginForm.value)\">\n              </ion-input>\n          </ion-item>\n\n          <!-- Password Validation-->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessasges.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n            </ion-list>\n\n              <!-- Login Button -->\n              <ion-col size=\"12\">\n                <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button>\n              </ion-col>\n\n\n            </form>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Sign Up -->\n      <ion-col size=\"12\">\n        <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n        </ion-button>\n        \n      </ion-col>\n\n      <!-- Forgot Password -->\n      <ion-col size=\"12\">\n        <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-text-center ion-hide-md-down\">\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"4\" size-lg=\"4\" size-xl=\"4\"  style=\"margin-top: 5%\">\n\n            <form  [formGroup]=\"loginForm\"\n                   (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n\n                <!-- Refactor Logo Section -->\n                <img src=\"../../../../assets/logo-2.png\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n\n              <ion-item>\n                <!-- Email -->\n                  <ion-input\n                    #autoFocusInput\n                    required\n                    placeholder=\"Email\"\n                    inputmode=\"email\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                    (keyup.enter)=\"login(this.loginForm.value)\">\n                  </ion-input>\n              </ion-item>\n                  <!-- Password Validation-->\n                  <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"loginForm\n                        .get('email')\n                        .hasError(validation.type) && (loginForm.get('email')\n                        .dirty || loginForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n            <!-- Password -->\n            <ion-item>\n                <ion-input\n                  required\n                  placeholder=\"Password\"\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n\n            </ion-list>\n\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <!-- Login Button -->\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\n          <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"6\">\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- Back Button -->\n        <ion-col size=\"6\">\n          <ion-button class=\"grey-button\" (click)=\"back()\">Back</ion-button>\n        </ion-col>\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Footer without a border -->\n<ion-footer>\n  <button id=\"download-button\" style=\" border-radius: 0\">Install App</button>\n</ion-footer>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-login-login-module-es5.js.map