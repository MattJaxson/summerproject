(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-chat-student-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/student-chat/student-chat.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/student-chat/student-chat.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Student Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  \n\n  <!-- List of Text Items -->\n<ion-list class=\"ion-hide-lg-up\">\n  <!-- If student has no messages in their inbox -->\n  <div *ngIf=\"this.conversations == 0\" id=\"no-messages\" class=\"ion-text-center\" style=\"margin-top: 75px; padding: 15px;\">\n    <p>You have <b>no messages</b> in your inbox. Please press the <ion-icon class=\"new-message\" size=\"small\" name=\"create\"></ion-icon> button to create a new message. </p>\n  </div>\n\n  <ion-item-sliding *ngFor=\"let convo of conversations\" (click)=\"chatPage(convo.chatId)\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <!-- Show images are profiles of the other user -->\n      <img src=\"{{convo.isUser ? convo.respondingUserPhoto : convo.requestingUserPhoto}}\">\n    </ion-avatar>\n    <ion-label>\n      <h2>{{convo.isUser ? convo.respondingUserFullname : convo.requestingUserFullname}} <span class=\"date-sent\">&middot; {{convo.lastMessageTime}}</span></h2>\n      <!-- TODO: Most recent message -->\n      <p>{{convo.lastMessageText}}</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n  <!-- Desktop -->\n  <!-- <ion-grid class=\"ion-hide-lg-down\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/posts/student-chat/student-chat-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StudentChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatPageRoutingModule", function() { return StudentChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-chat.page */ "./src/app/pages/posts/student-chat/student-chat.page.ts");




const routes = [
    {
        path: '',
        component: _student_chat_page__WEBPACK_IMPORTED_MODULE_3__["StudentChatPage"]
    },
    {
        path: 'chat-page/:chatId/:fullName/:profilePicture/:email',
        loadChildren: () => Promise.all(/*! import() | chat-page-chat-page-module */[__webpack_require__.e("default~chat-page-chat-page-module~modals-replies-page-replies-page-module~modals-third-person-profi~b8cd77e3"), __webpack_require__.e("common"), __webpack_require__.e("chat-page-chat-page-module")]).then(__webpack_require__.bind(null, /*! ./chat-page/chat-page.module */ "./src/app/pages/posts/student-chat/chat-page/chat-page.module.ts")).then(m => m.ChatPagePageModule)
    },
];
let StudentChatPageRoutingModule = class StudentChatPageRoutingModule {
};
StudentChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentChatPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/student-chat/student-chat.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat.module.ts ***!
  \*****************************************************************/
/*! exports provided: StudentChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatPageModule", function() { return StudentChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-chat-routing.module */ "./src/app/pages/posts/student-chat/student-chat-routing.module.ts");
/* harmony import */ var _student_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-chat.page */ "./src/app/pages/posts/student-chat/student-chat.page.ts");
/* harmony import */ var src_app_modals_new_message_student_new_message_student_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/new-message-student/new-message-student.module */ "./src/app/modals/new-message-student/new-message-student.module.ts");








let StudentChatPageModule = class StudentChatPageModule {
};
StudentChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _student_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentChatPageRoutingModule"],
            src_app_modals_new_message_student_new_message_student_module__WEBPACK_IMPORTED_MODULE_7__["NewMessageStudentPageModule"]
        ],
        declarations: [_student_chat_page__WEBPACK_IMPORTED_MODULE_6__["StudentChatPage"]]
    })
], StudentChatPageModule);



/***/ }),

/***/ "./src/app/pages/posts/student-chat/student-chat.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvc3R1ZGVudC1jaGF0L3N0dWRlbnQtY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3N0dWRlbnQtY2hhdC9zdHVkZW50LWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvc3R1ZGVudC1jaGF0L3N0dWRlbnQtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVye1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDBweDtcbn1cblxuLnVucmVhZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwMywgMjE1LCAyMzApO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufSIsIi5uZXctbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwcHg7XG59XG5cbi51bnJlYWQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDMsIDIxNSwgMjMwKTtcbn1cblxuLmRhdGUtc2VudCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/posts/student-chat/student-chat.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat.page.ts ***!
  \***************************************************************/
/*! exports provided: StudentChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatPage", function() { return StudentChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modals_new_message_student_new_message_student_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/new-message-student/new-message-student.page */ "./src/app/modals/new-message-student/new-message-student.page.ts");
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/student-chat.service */ "./src/app/services/student-chat.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");








let StudentChatPage = class StudentChatPage {
    constructor(router, modal, studentChat, profile) {
        this.router = router;
        this.modal = modal;
        this.studentChat = studentChat;
        this.profile = profile;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            this.fullName = data['fullName'];
            this.profilePicture = data['profilePicture'];
            this.email = data['email'];
            this.studentChat.conversations$.subscribe(conversations => {
                this.conversations = Object.values(conversations).reverse();
                for (let convo of this.conversations) {
                    for (const message of convo.messages) {
                        message.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(message.date));
                    }
                    if (convo.requestingUserEmail === this.email) {
                        // console.log('The requesting users is the same user as the one who logged in on this app');
                        convo.isUser = true;
                    }
                    // Get the most recent message information for text and date
                    convo.lastMessage = convo.messages.slice(-1)[0];
                    convo.lastMessageText = convo.lastMessage.text;
                    convo.lastMessageTime = convo.lastMessage.date;
                }
            });
        });
    }
    chatPage(chatId) {
        this.router.navigate(['home/posts/student-chat/chat-page', chatId, this.fullName, this.profilePicture, this.email]);
    }
    newMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newMessageModalConfig = yield this.modal.create({
                component: src_app_modals_new_message_student_new_message_student_page__WEBPACK_IMPORTED_MODULE_4__["NewMessageStudentPage"],
                componentProps: {}
            });
            yield newMessageModalConfig.present();
        });
    }
    delete(item) {
    }
};
StudentChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__["StudentChatService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }
];
StudentChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/student-chat/student-chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-chat.page.scss */ "./src/app/pages/posts/student-chat/student-chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__["StudentChatService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]])
], StudentChatPage);



/***/ })

}]);
//# sourceMappingURL=student-chat-student-chat-module-es2015.js.map