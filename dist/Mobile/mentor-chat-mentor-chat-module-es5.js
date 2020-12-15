(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-chat-mentor-chat-module"], {
    /***/
    "+PKI":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MentorChatPageRoutingModule */

    /***/
    function PKI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorChatPageRoutingModule", function () {
        return MentorChatPageRoutingModule;
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


      var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mentor-chat.page */
      "EX/K");

      var routes = [{
        path: '',
        component: _mentor_chat_page__WEBPACK_IMPORTED_MODULE_3__["MentorChatPage"]
      }, {
        path: 'chat-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | chat-page-chat-page-module */
          [__webpack_require__.e("common"), __webpack_require__.e("chat-page-chat-page-module")]).then(__webpack_require__.bind(null,
          /*! ./chat-page/chat-page.module */
          "mEkD")).then(function (m) {
            return m.ChatPagePageModule;
          });
        }
      }];

      var MentorChatPageRoutingModule = function MentorChatPageRoutingModule() {
        _classCallCheck(this, MentorChatPageRoutingModule);
      };

      MentorChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MentorChatPageRoutingModule);
      /***/
    },

    /***/
    "4Jnr":
    /*!*************************************************!*\
      !*** ./src/app/services/mentor-chat.service.ts ***!
      \*************************************************/

    /*! exports provided: MentorChatService */

    /***/
    function Jnr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorChatService", function () {
        return MentorChatService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { Socket, SocketIoConfig } from 'ngx-socket-io';
      // export class SocketNameSpace extends Socket{
      //   constructor(socketConfig: SocketIoConfig){
      //     super(socketConfig);
      //   }
      // }


      var MentorChatService = /*#__PURE__*/function () {
        // mentorsChat: SocketNameSpace;
        function MentorChatService() {// this.mentorsChat  = new SocketNameSpace({url: 'http://127.0.0.1:3000/mentor-chat', options: {} });

          _classCallCheck(this, MentorChatService);
        } // newChatroom(): void {
        //   this.mentorsChat
        //     .emit('addChatroom', { chatId: this.chatId() });
        // }


        _createClass(MentorChatService, [{
          key: "chatId",
          value: function chatId() {
            var text = 'chat-';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            text += Date.now();
            return text;
          }
        }]);

        return MentorChatService;
      }();

      MentorChatService.ctorParameters = function () {
        return [];
      };

      MentorChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MentorChatService);
      /***/
    },

    /***/
    "9JG7":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function JG7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbnRvci1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJtZW50b3ItY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVye1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDBweDtcbn1cblxuLnVucmVhZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwMywgMjE1LCAyMzApO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
      /***/
    },

    /***/
    "EX/K":
    /*!***************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts ***!
      \***************************************************************/

    /*! exports provided: MentorChatPage */

    /***/
    function EXK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorChatPage", function () {
        return MentorChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mentor_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mentor-chat.page.html */
      "KO+s");
      /* harmony import */


      var _mentor_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mentor-chat.page.scss */
      "9JG7");
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


      var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.page */
      "R7fP");
      /* harmony import */


      var src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/mentor-chat.service */
      "4Jnr");

      var MentorChatPage = /*#__PURE__*/function () {
        function MentorChatPage(router, modal, mentorChat) {
          _classCallCheck(this, MentorChatPage);

          this.router = router;
          this.modal = modal;
          this.mentorChat = mentorChat;
        }

        _createClass(MentorChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.mentorChat.createChatRoom();
          }
        }, {
          key: "chatPage",
          value: function chatPage() {
            this.router.navigate(['home/mentors/mentor-chat/chat-page']);
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
                        component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_6__["NewMessageMentorPage"],
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
        }]);

        return MentorChatPage;
      }();

      MentorChatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_7__["MentorChatService"]
        }];
      };

      MentorChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mentor-chat',
        template: _raw_loader_mentor_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mentor_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_7__["MentorChatService"]])], MentorChatPage);
      /***/
    },

    /***/
    "KO+s":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-chat/mentor-chat.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KOS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Mentor Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n  <!-- List of Text Items -->\n<ion-list class=\"ion-hide-lg-up\">\n  <ion-item-sliding (click)=\"chatPage()\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../../../assets/batman-pro-pic.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n      <p>This is the message...</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n      <ion-item-options side=\"end\">\n        <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n      </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-lg-down\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "NZe1":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MentorChatPageModule */

    /***/
    function NZe1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentorChatPageModule", function () {
        return MentorChatPageModule;
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


      var _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mentor-chat-routing.module */
      "+PKI");
      /* harmony import */


      var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mentor-chat.page */
      "EX/K");
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.module */
      "OWIS");

      var MentorChatPageModule = function MentorChatPageModule() {
        _classCallCheck(this, MentorChatPageModule);
      };

      MentorChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["MentorChatPageRoutingModule"], src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_7__["NewMessageMentorPageModule"]],
        declarations: [_mentor_chat_page__WEBPACK_IMPORTED_MODULE_6__["MentorChatPage"]]
      })], MentorChatPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mentor-chat-mentor-chat-module-es5.js.map