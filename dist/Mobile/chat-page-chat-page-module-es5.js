(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-page-chat-page-module"], {
    /***/
    "0fH0":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function fH0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-avatar {\n  height: 1.3em;\n  width: 1.3em;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n\n.ellipsis {\n  height: 2.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItY2hhdC9jaGF0LXBhZ2UvY2hhdC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0FBRWpCOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLWNoYXQvY2hhdC1wYWdlL2NoYXQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiAxLjNlbTsgd2lkdGg6IDEuM2VtO1xufVxuXG4ubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRhdGUtc2VudCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmVsbGlwc2lzIHtcbiAgaGVpZ2h0OiAyLjFlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    "4naS":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ChatPagePage */

    /***/
    function naS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPagePage", function () {
        return ChatPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat-page.page.html */
      "OD0l");
      /* harmony import */


      var _chat_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat-page.page.scss */
      "0fH0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ion-bottom-drawer */
      "rFvw");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/report-convo/report-convo.page */
      "pCvL");

      var ChatPagePage = /*#__PURE__*/function () {
        function ChatPagePage(alert, modal) {
          _classCallCheck(this, ChatPagePage);

          this.alert = alert;
          this.modal = modal;
          this.shouldBounce = true;
          this.dockedHeight = 400;
          this.distanceTop = 56;
          this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
          this.states = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"];
          this.minimumHeight = 0;
        }

        _createClass(ChatPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "menu",
          value: function menu() {
            if (this.drawerState === ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom) {
              this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Docked;
            } else {
              this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
            }
          }
        }, {
          key: "delertAlert",
          value: function delertAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to delete this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Deleting');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reportAlert",
          value: function reportAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to report this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Reporting');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "reportConvo",
          value: function reportConvo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var reportModalConfig;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modal.create({
                        component: src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_6__["ReportConvoPage"],
                        componentProps: {}
                      });

                    case 2:
                      reportModalConfig = _context3.sent;
                      this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
                      _context3.next = 6;
                      return reportModalConfig.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ChatPagePage;
      }();

      ChatPagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      ChatPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-page',
        template: _raw_loader_chat_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], ChatPagePage);
      /***/
    },

    /***/
    "9XIs":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ChatPagePageRoutingModule */

    /***/
    function XIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPagePageRoutingModule", function () {
        return ChatPagePageRoutingModule;
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


      var _chat_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat-page.page */
      "4naS");

      var routes = [{
        path: '',
        component: _chat_page_page__WEBPACK_IMPORTED_MODULE_3__["ChatPagePage"]
      }];

      var ChatPagePageRoutingModule = function ChatPagePageRoutingModule() {
        _classCallCheck(this, ChatPagePageRoutingModule);
      };

      ChatPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPagePageRoutingModule);
      /***/
    },

    /***/
    "EdaG":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/posts/student-chat/chat-page/chat-page-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ChatPagePageRoutingModule */

    /***/
    function EdaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPagePageRoutingModule", function () {
        return ChatPagePageRoutingModule;
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


      var _chat_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat-page.page */
      "Foct");

      var routes = [{
        path: '',
        component: _chat_page_page__WEBPACK_IMPORTED_MODULE_3__["ChatPagePage"]
      }];

      var ChatPagePageRoutingModule = function ChatPagePageRoutingModule() {
        _classCallCheck(this, ChatPagePageRoutingModule);
      };

      ChatPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPagePageRoutingModule);
      /***/
    },

    /***/
    "Foct":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/posts/student-chat/chat-page/chat-page.page.ts ***!
      \**********************************************************************/

    /*! exports provided: ChatPagePage */

    /***/
    function Foct(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPagePage", function () {
        return ChatPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat-page.page.html */
      "d9t0");
      /* harmony import */


      var _chat_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat-page.page.scss */
      "XZfP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ion-bottom-drawer */
      "rFvw");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/report-convo/report-convo.page */
      "pCvL");
      /* harmony import */


      var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/student-chat.service */
      "Y19J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ChatPagePage = /*#__PURE__*/function () {
        function ChatPagePage(alert, modal, studentChatService, activatedRoute, toast) {
          _classCallCheck(this, ChatPagePage);

          this.alert = alert;
          this.modal = modal;
          this.studentChatService = studentChatService;
          this.activatedRoute = activatedRoute;
          this.toast = toast; // Bottom Drawer Settings

          this.shouldBounce = true;
          this.dockedHeight = 400;
          this.distanceTop = 56;
          this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
          this.states = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"];
          this.minimumHeight = 0;
        }

        _createClass(ChatPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chatId = this.activatedRoute.snapshot.paramMap.get('chatId');
            this.chatId = chatId;
            var email = this.activatedRoute.snapshot.paramMap.get('email');
            this.email = email;
            var fullName = this.activatedRoute.snapshot.paramMap.get('fullName');
            this.fullName = fullName;
            var profilePicture = this.activatedRoute.snapshot.paramMap.get('profilePicture');
            this.profilePicture = profilePicture;
            var messageList = document.getElementById('message-list'); // this.studentChatService.getChat(this.chatId, this.email);
            // this._chatroomSub = this.studentChatService.currentChatRoom
            // .subscribe(
            //   data => {
            //     // console.log(data);
            //     this.chatroom = data['messages'];
            //     this.requestingUserFullname = data['requestingUserFullname'];
            //     this.requestingUserEmail = data['requestingUserEmail'];
            //     this.requestingUserPhoto = data['requestingUserPhoto'];
            //     this.respondingUserFullname = data['respondingUserFullname'];
            //     this.respondingUserEmail = data['respondingUserEmail'];
            //     this.respondingUserPhoto = data['respondingUserPhoto'];
            //     // if (this.chatroom.length >= 5) {
            //     //   console.log('more than 3 messages sent');
            //     //   this.studentChatService.deleteMessages(this.chatId, this.fullName , this.email);
            //     // }
            //     for (let message of this.chatroom) {
            //       message.date = formatDistanceToNow(new Date(message.date));
            //     }
            //     // console.log(this.chatroom);
            //   });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._chatroomSub.unsubscribe(); // leave room

          } // tslint:disable-next-line: use-lifecycle-interface

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.input.getInputElement().then(function (input) {
                _this.message = input;
              });
            }, 400);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.message.value === '')) {
                        _context4.next = 7;
                        break;
                      }

                      console.log('This message has no text');
                      _context4.next = 4;
                      return this.toast.create({
                        message: 'This message has no text.',
                        cssClass: 'danger-toast',
                        duration: 2000
                      });

                    case 4:
                      toast = _context4.sent;
                      toast.present();
                      return _context4.abrupt("return", false);

                    case 7:
                      // tslint:disable-next-line: max-line-length
                      // await this.studentChatService.sendMessage(this.chatId, this.message.value, this.fullName, this.profilePicture, this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, this.respondingUserFullname, this.respondingUserEmail, this.respondingUserPhoto);
                      // this.studentChatService.conversations$.next(this.chatroom);
                      // When user submits message, clear the input value
                      this.message.value = '';
                      this.message.focus(); // this.studentChatService.getChat(this.chatId, this.email);
                      // this.message = '';

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "menu",
          value: function menu() {
            if (this.drawerState === ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom) {
              this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Docked;
            } else {
              this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
            }
          }
        }, {
          key: "delertAlert",
          value: function delertAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to delete this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Deleting');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "reportAlert",
          value: function reportAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to report this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Reporting');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "reportConvo",
          value: function reportConvo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var reportModalConfig;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modal.create({
                        component: src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_6__["ReportConvoPage"],
                        componentProps: {}
                      });

                    case 2:
                      reportModalConfig = _context7.sent;
                      this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
                      _context7.next = 6;
                      return reportModalConfig.present();

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return ChatPagePage;
      }();

      ChatPagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_7__["StudentChatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      ChatPagePage.propDecorators = {
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['message', {
            "static": false
          }]
        }]
      };
      ChatPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-page',
        template: _raw_loader_chat_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_7__["StudentChatService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], ChatPagePage);
      /***/
    },

    /***/
    "OD0l":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OD0l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Conversation</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"menu()\">\n          <img class=\"ellipsis\" src=\"../../../../../assets/icons/ellipsis.svg\" alt=\"\">\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-bottom-drawer [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\"\n[shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\n<div class=\"drawer-content\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"delertAlert()\">\n          Delete\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"reportConvo()\">\n          Report\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"grey-button\" (click)=\"menu()\">\n          Cancel\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-bottom-drawer>\n";
      /***/
    },

    /***/
    "XZfP":
    /*!************************************************************************!*\
      !*** ./src/app/pages/posts/student-chat/chat-page/chat-page.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function XZfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-avatar {\n  margin-right: 20px;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\nion-label p {\n  font-size: 1.8em;\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.8;\n}\n\n.no-messages {\n  font-size: 1.4em;\n  line-height: 1.4em;\n  padding: 20px;\n}\n\n.ellipsis {\n  height: 2.1em;\n}\n\n.chat-messages-create-container {\n  background: #005191;\n  height: 60px;\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n}\n\n.chat-messages-create-container ion-input {\n  border: 1px solid #fff;\n  --color: white;\n  height: 40px;\n  width: 90%;\n}\n\n.chat-messages-create-container ion-button {\n  --background: white;\n  --background-hover: white;\n  --color: #005191;\n  height: 40px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvc3R1ZGVudC1jaGF0L2NoYXQtcGFnZS9jaGF0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvc3R1ZGVudC1jaGF0L2NoYXQtcGFnZS9jaGF0LXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gIC8vIGhlaWdodDogMS4xZW07IHdpZHRoOiAxLjFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICB9XG59XG5cbi5kYXRlLXNlbnQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5uby1tZXNzYWdlcyB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmVsbGlwc2lzIHtcbiAgaGVpZ2h0OiAyLjFlbTtcbn1cblxuLmNoYXQtbWVzc2FnZXMtY3JlYXRlLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweDtcblxuICBpb24taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XG4gICAgLS1jb2xvcjogIzAwNTE5MTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "d9t0":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/student-chat/chat-page/chat-page.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d9t0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Conversation</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"menu()\">\n          <img class=\"ellipsis\" src=\"../../../../../assets/icons/ellipsis.svg\" alt=\"\">\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" id=\"message-list\">\n    <!-- <div class=\"ion-text-center no-messages\" *ngIf=\"chatroom.length == 0\">\n      <p>Please send a message to start this conversation.</p>\n    </div> -->\n    <ion-item *ngFor=\"let message of chatroom\">\n      <ion-avatar>\n        <img src=\"{{message.profilePicture}}\" />\n      </ion-avatar>\n      <ion-label>\n        <h4 style=\"opacity: 0.8;\">{{message.userFullName}} <span class=\"date-sent\">&middot; {{message.date}}</span></h4>\n        <p style=\"font-size: 1.1em; color: #111;\">{{message.text}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-toolbar class=\"chat-messages-create-container\">\n    <ion-input #message (keyup.enter)=\"sendMessage()\"\n     type=\"text\" placeholder=\"Type message here\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button  class=\"chat-messages-create-button\" (click)=\"sendMessage()\"> Send </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-content>\n\n<ion-bottom-drawer [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\"\n[shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\n<div class=\"drawer-content\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"delertAlert()\">\n          Delete\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"reportConvo()\">\n          Report\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"grey-button\" (click)=\"menu()\">\n          Cancel\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-bottom-drawer>\n";
      /***/
    },

    /***/
    "j1T8":
    /*!************************************************************************!*\
      !*** ./src/app/pages/posts/student-chat/chat-page/chat-page.module.ts ***!
      \************************************************************************/

    /*! exports provided: ChatPagePageModule */

    /***/
    function j1T8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPagePageModule", function () {
        return ChatPagePageModule;
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


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ion-bottom-drawer */
      "rFvw");
      /* harmony import */


      var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat-page-routing.module */
      "EdaG");
      /* harmony import */


      var _chat_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chat-page.page */
      "Foct");
      /* harmony import */


      var src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/report-convo/report-convo.module */
      "6kEE");

      var ChatPagePageModule = function ChatPagePageModule() {
        _classCallCheck(this, ChatPagePageModule);
      };

      ChatPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_5__["IonBottomDrawerModule"], _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatPagePageRoutingModule"], src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_8__["ReportConvoPageModule"]],
        declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_7__["ChatPagePage"]]
      })], ChatPagePageModule);
      /***/
    },

    /***/
    "mEkD":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChatPagePageModule */

    /***/
    function mEkD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPagePageModule", function () {
        return ChatPagePageModule;
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


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ion-bottom-drawer */
      "rFvw");
      /* harmony import */


      var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat-page-routing.module */
      "9XIs");
      /* harmony import */


      var _chat_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chat-page.page */
      "4naS");
      /* harmony import */


      var src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/report-convo/report-convo.module */
      "6kEE");

      var ChatPagePageModule = function ChatPagePageModule() {
        _classCallCheck(this, ChatPagePageModule);
      };

      ChatPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatPagePageRoutingModule"], src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_8__["ReportConvoPageModule"], ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_5__["IonBottomDrawerModule"]],
        declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_7__["ChatPagePage"]]
      })], ChatPagePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-page-chat-page-module-es5.js.map