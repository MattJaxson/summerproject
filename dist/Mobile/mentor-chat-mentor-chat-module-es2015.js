(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mentor-chat-mentor-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-chat/mentor-chat.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-chat/mentor-chat.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Mentor Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n  <!-- List of Text Items -->\n<ion-list class=\"ion-hide-lg-up\">\n  <ion-item-sliding (click)=\"chatPage()\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../../../assets/batman-pro-pic.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n      <p>This is the message...</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n      <ion-item-options side=\"end\">\n        <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n      </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-lg-down\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mentors/mentor-chat/mentor-chat-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MentorChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorChatPageRoutingModule", function() { return MentorChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mentor-chat.page */ "./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts");




const routes = [
    {
        path: '',
        component: _mentor_chat_page__WEBPACK_IMPORTED_MODULE_3__["MentorChatPage"]
    },
    {
        path: 'chat-page',
        loadChildren: () => Promise.all(/*! import() | chat-page-chat-page-module */[__webpack_require__.e("default~chat-page-chat-page-module~modals-replies-page-replies-page-module~modals-third-person-profi~b8cd77e3"), __webpack_require__.e("common"), __webpack_require__.e("chat-page-chat-page-module")]).then(__webpack_require__.bind(null, /*! ./chat-page/chat-page.module */ "./src/app/pages/mentors/mentor-chat/chat-page/chat-page.module.ts")).then(m => m.ChatPagePageModule)
    }
];
let MentorChatPageRoutingModule = class MentorChatPageRoutingModule {
};
MentorChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MentorChatPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentor-chat/mentor-chat.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.module.ts ***!
  \*****************************************************************/
/*! exports provided: MentorChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorChatPageModule", function() { return MentorChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mentor-chat-routing.module */ "./src/app/pages/mentors/mentor-chat/mentor-chat-routing.module.ts");
/* harmony import */ var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentor-chat.page */ "./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts");
/* harmony import */ var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/new-message-mentor/new-message-mentor.module */ "./src/app/modals/new-message-mentor/new-message-mentor.module.ts");








let MentorChatPageModule = class MentorChatPageModule {
};
MentorChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["MentorChatPageRoutingModule"],
            src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_7__["NewMessageMentorPageModule"]
        ],
        declarations: [_mentor_chat_page__WEBPACK_IMPORTED_MODULE_6__["MentorChatPage"]]
    })
], MentorChatPageModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentor-chat/mentor-chat.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItY2hhdC9tZW50b3ItY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLWNoYXQvbWVudG9yLWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItY2hhdC9tZW50b3ItY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVye1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDBweDtcbn1cblxuLnVucmVhZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwMywgMjE1LCAyMzApO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufSIsIi5uZXctbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwcHg7XG59XG5cbi51bnJlYWQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDMsIDIxNSwgMjMwKTtcbn1cblxuLmRhdGUtc2VudCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts ***!
  \***************************************************************/
/*! exports provided: MentorChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorChatPage", function() { return MentorChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/new-message-mentor/new-message-mentor.page */ "./src/app/modals/new-message-mentor/new-message-mentor.page.ts");
/* harmony import */ var src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mentor-chat.service */ "./src/app/services/mentor-chat.service.ts");






let MentorChatPage = class MentorChatPage {
    constructor(router, modal, mentorChat) {
        this.router = router;
        this.modal = modal;
        this.mentorChat = mentorChat;
    }
    ngOnInit() {
        // this.mentorChat.createChatRoom();
    }
    chatPage() {
        this.router.navigate(['home/mentors/mentor-chat/chat-page']);
    }
    newMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newMessageModalConfig = yield this.modal.create({
                component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_4__["NewMessageMentorPage"],
                componentProps: {}
            });
            yield newMessageModalConfig.present();
        });
    }
};
MentorChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_5__["MentorChatService"] }
];
MentorChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mentor-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-chat/mentor-chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mentor-chat.page.scss */ "./src/app/pages/mentors/mentor-chat/mentor-chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_5__["MentorChatService"]])
], MentorChatPage);



/***/ }),

/***/ "./src/app/services/mentor-chat.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/mentor-chat.service.ts ***!
  \*************************************************/
/*! exports provided: SocketNameSpace, MentorChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketNameSpace", function() { return SocketNameSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorChatService", function() { return MentorChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");



class SocketNameSpace extends ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] {
    constructor(socketConfig) {
        super(socketConfig);
    }
}
let MentorChatService = class MentorChatService {
    constructor() {
        this.mentorsChat = new SocketNameSpace({ url: 'http://127.0.0.1:3000/mentor-chat', options: {} });
    }
    newChatroom() {
        this.mentorsChat
            .emit('addChatroom', { chatId: this.chatId() });
    }
    chatId() {
        let text = 'chat-';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        text += Date.now();
        return text;
    }
};
MentorChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MentorChatService);



/***/ })

}]);
//# sourceMappingURL=mentor-chat-mentor-chat-module-es2015.js.map