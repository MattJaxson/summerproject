(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-mentor-contact-mentor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.8\" size=\"2.5\">\n        <h1>Contact Mentor</h1>\n      </ion-col>\n      <ion-col push=\"2.6\" size=\"2\">\n        <ion-back-button class=\"back-button\" text=\"Back\" style=\"--icon-font-size: 0px;\"></ion-back-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Horizontal Line for Desktop Header -->\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"8\">\n        <hr style=\"background-color: #999;\" />\n      </ion-col>\n    </ion-row>\n\n    <!-- Contact Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <!-- Mentor Photo -->\n        <div id=\"mentor-photo\"></div>\n        <!-- Form -->\n        <form id=\"mentor-form\" [formGroup]=\"contactMenorForm\"  (ngSubmit)=\"confirm(this.contactMenorForm.value)\">\n            <ion-item lines=\"none\" style=\"margin: 55px 0 55px 0\">\n                <ion-textarea\n                formControlName=\"message\"\n                placeholder=\"Have a question for a {{mentorName}}? Send them an email!\"\n                rows=\"10\"\n                autogrow=\"true\"\n                required\n                spellcheck=\"true\"\n                (keydown.control.enter)=\"messageValid ? confirm(this.contactMenorForm.value) : null\"></ion-textarea>\n            </ion-item>\n            <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!messageValid\"\n            expand=\"block\">\n                Send\n            </ion-button>\n          </form>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContactMentorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMentorPageRoutingModule", function() { return ContactMentorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-mentor.page */ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts");




const routes = [
    {
        path: '',
        component: _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__["ContactMentorPage"]
    },
    {
        path: 'confirm/:name/:email/:phone',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ./confirm/confirm.module */ "./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }
];
let ContactMentorPageRoutingModule = class ContactMentorPageRoutingModule {
};
ContactMentorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactMentorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ContactMentorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMentorPageModule", function() { return ContactMentorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-mentor-routing.module */ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts");
/* harmony import */ var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-mentor.page */ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts");







let ContactMentorPageModule = class ContactMentorPageModule {
};
ContactMentorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactMentorPageRoutingModule"]
        ],
        declarations: [_contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__["ContactMentorPage"]]
    })
], ContactMentorPageModule);



/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mentor-photo {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin: 35px auto 0;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n#mentor-form {\n  opacity: 0;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.45s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.45s forwards;\n}\n\nion-item {\n  padding: 20px 0;\n  margin-bottom: 90px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n.orange-button {\n  margin-bottom: 30px;\n  --background: #faa71b;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9jb250YWN0LW1lbnRvci9jb250YWN0LW1lbnRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnRvcnMvbWVudG9yLXBhZ2UvY29udGFjdC1tZW50b3IvY29udGFjdC1tZW50b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUZBQUE7VUFBQSwrRUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHNGQUFBO1VBQUEsOEVBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLDRCQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0NOO0FBQ0Y7O0FEUkE7RUFDSTtJQUNJLDRCQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDQTtJQUNJLDRCQUFBO0VDQUY7RURFRjtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0FGO0FBQ0Y7O0FEUEE7RUFDQTtJQUNJLDRCQUFBO0VDQUY7RURFRjtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW50b3JzL21lbnRvci1wYWdlL2NvbnRhY3QtbWVudG9yL2NvbnRhY3QtbWVudG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZW50b3ItcGhvdG8ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hYXJvbi5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbjogMzVweCBhdXRvIDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWZvcm0ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMS40NXMgZm9yd2FyZHM7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjlzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4wJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbn1cbjEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG59XG59IiwiI21lbnRvci1waG90byB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hYXJvbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW46IDM1cHggYXV0byAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLWZvcm0ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTUsIDAuODUsIDAuNzUsIDAuOSkgMS40NXMgZm9yd2FyZHM7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTUsIDAuODUsIDAuNzUsIDAuOSkgMS45cyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ContactMentorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMentorPage", function() { return ContactMentorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/mentor.service */ "./src/app/services/mentor.service.ts");






let ContactMentorPage = class ContactMentorPage {
    constructor(profile, mentors, activatedRoute, formBuilder, router) {
        this.profile = profile;
        this.mentors = mentors;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.contactMenorForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        console.log(`Valid: ${this.contactMenorForm.valid}`);
        this.contactMenorForm.get("message").valueChanges.subscribe(msg => {
            console.log(`Subscribed message: ${msg}`);
            setTimeout(() => {
                if (this.contactMenorForm.valid) {
                    this.messageValid = true;
                }
                else {
                    this.messageValid = false;
                }
                console.log(`Valid: ${this.contactMenorForm.valid}`);
            }, 100);
        });
        this.message = this.contactMenorForm.value.message;
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        // tslint:disable-next-line: radix
        const name = this.activatedRoute.snapshot.paramMap.get('name');
        // tslint:disable-next-line: radix
        const photo = this.activatedRoute.snapshot.paramMap.get('photo');
        this.mentorId = id;
        this.mentorName = name;
        this.mentorEmail = email;
        this.mentorPhoto = photo;
        // Get User details
        this.userDetails();
    }
    confirm(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.sendMessage(value);
            // tslint:disable-next-line: max-line-length
            yield this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/:photo/confirm', this.mentorName, this.mentorEmail, this.mentorPhoto]);
        });
    }
    userDetails() {
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userName = details['fullName'];
            this.userCity = details['city'];
            this.userState = details['state'];
            this.userAge = details['age'];
            this.userGrade = details['grade'];
            this.userSchool = details['school'];
            this.userProfilePicture = details['profilePicture'];
            this.userResume = details['resume'];
        });
    }
    sendMessage(value) {
        this.mentors.sendMentorAnEmail(value, this.mentorName, this.mentorEmail, this.userEmail, this.userName, this.userCity, this.userState, this.userAge, this.userGrade, this.userSchool, this.userProfilePicture, this.userResume).subscribe();
    }
};
ContactMentorPage.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactMentorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-mentor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-mentor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-mentor.page.scss */ "./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _services_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ContactMentorPage);



/***/ })

}]);
//# sourceMappingURL=contact-mentor-contact-mentor-module-es2015.js.map