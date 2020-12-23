(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-chat-student-chat-module"],{

/***/ "JGKh":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat.module.ts ***!
  \*****************************************************************/
/*! exports provided: StudentChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatPageModule", function() { return StudentChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _student_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-chat-routing.module */ "uf9R");
/* harmony import */ var _student_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-chat.page */ "nrZL");
/* harmony import */ var src_app_modals_new_message_student_new_message_student_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/new-message-student/new-message-student.module */ "AhZb");








let StudentChatPageModule = class StudentChatPageModule {
};
StudentChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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

/***/ "Rqsi":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/student-chat/student-chat.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Student Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  \n\n  <!-- List of Text Items -->\n<ion-list class=\"ion-hide-lg-up\">\n  <!-- If student has no messages in their inbox -->\n  <div *ngIf=\"this.conversations == 0\" id=\"no-messages\" class=\"ion-text-center\" style=\"margin-top: 75px; padding: 15px;\">\n    <p>You have <b>no messages</b> in your inbox. Please press the <ion-icon class=\"new-message\" size=\"small\" name=\"create\"></ion-icon> button to create a new message. </p>\n  </div>\n\n  <ion-item-sliding *ngFor=\"let convo of conversations\" (click)=\"chatPage(convo.chatId)\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <!-- Show images are profiles of the other user -->\n      <img src=\"{{convo.isUser ? convo.respondingUserPhoto : convo.requestingUserPhoto}}\">\n    </ion-avatar>\n    <ion-label>\n      <h2>{{convo.isUser ? convo.respondingUserFullname : convo.requestingUserFullname}} <span class=\"date-sent\">&middot; {{convo.lastMessageTime}}</span></h2>\n      <!-- TODO: Most recent message -->\n      <p>{{convo.lastMessageText}}</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n  <!-- Desktop -->\n  <!-- <ion-grid class=\"ion-hide-lg-down\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n");

/***/ }),

/***/ "eMz3":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0dWRlbnQtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3R1ZGVudC1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctbWVzc2FnZXtcbiAgY29sb3I6ICNmYWE3MWI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoYmFyLXdyYXBwZXJ7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMHB4O1xufVxuXG4udW5yZWFkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjAzLCAyMTUsIDIzMCk7XG59XG5cbi5kYXRlLXNlbnQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "nrZL":
/*!***************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat.page.ts ***!
  \***************************************************************/
/*! exports provided: StudentChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatPage", function() { return StudentChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_student_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-chat.page.html */ "Rqsi");
/* harmony import */ var _student_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-chat.page.scss */ "eMz3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_new_message_student_new_message_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/new-message-student/new-message-student.page */ "gLVQ");
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/student-chat.service */ "Y19J");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "b/SL");










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
                        message.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["formatDistanceToNow"])(new Date(message.date));
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newMessageModalConfig = yield this.modal.create({
                component: src_app_modals_new_message_student_new_message_student_page__WEBPACK_IMPORTED_MODULE_6__["NewMessageStudentPage"],
                componentProps: {}
            });
            yield newMessageModalConfig.present();
        });
    }
    delete(item) {
    }
};
StudentChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_7__["StudentChatService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] }
];
StudentChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-chat',
        template: _raw_loader_student_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_7__["StudentChatService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]])
], StudentChatPage);



/***/ }),

/***/ "uf9R":
/*!*************************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/student-chat-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StudentChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatPageRoutingModule", function() { return StudentChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-chat.page */ "nrZL");




const routes = [
    {
        path: '',
        component: _student_chat_page__WEBPACK_IMPORTED_MODULE_3__["StudentChatPage"]
    },
    {
        path: 'chat-page/:chatId/:fullName/:profilePicture/:email',
        loadChildren: () => Promise.all(/*! import() | chat-page-chat-page-module */[__webpack_require__.e("common"), __webpack_require__.e("chat-page-chat-page-module")]).then(__webpack_require__.bind(null, /*! ./chat-page/chat-page.module */ "j1T8")).then(m => m.ChatPagePageModule)
    },
];
let StudentChatPageRoutingModule = class StudentChatPageRoutingModule {
};
StudentChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentChatPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=student-chat-student-chat-module-es2015.js.map