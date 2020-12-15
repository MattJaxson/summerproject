(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-mentor-contact-mentor-module"],{

/***/ "Np6Q":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ContactMentorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMentorPage", function() { return ContactMentorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-mentor.page.html */ "PedB");
/* harmony import */ var _contact_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-mentor.page.scss */ "aOPl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/profile.service */ "Aso2");
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/mentor.service */ "+DJb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let ContactMentorPage = class ContactMentorPage {
    constructor(profile, mentors, activatedRoute, formBuilder, router, location) {
        this.profile = profile;
        this.mentors = mentors;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
    }
    ngOnInit() {
        this.contactMenorForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
    back() {
        this.location.back();
    }
};
ContactMentorPage.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
ContactMentorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-mentor',
        template: _raw_loader_contact_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _services_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
], ContactMentorPage);



/***/ }),

/***/ "PedB":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col class=\"ion-text-center\" push-lg=\"2\" size=\"8\">\n        <!-- Mentor Photo -->\n        <div id=\"mentor-photo\"></div>\n        <h3 class=\"name\">{{mentorName}}</h3>\n        <h3 class=\"name\" style=\"\n        animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.6s forwards;\">{{mentorEmail}}</h3>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back();\">Back</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Contact Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <!-- Form -->\n        <!-- Mentor Photo -->\n        <div id=\"mentor-photo\" class=\"ion-hide-lg-up\"></div>\n        <form id=\"mentor-form\" [formGroup]=\"contactMenorForm\"  (ngSubmit)=\"confirm(this.contactMenorForm.value)\">\n            <ion-item lines=\"none\" >\n                <ion-textarea\n                formControlName=\"message\"\n                placeholder=\"Have a question for a {{mentorName}}? Send them an email!\"\n                rows=\"10\"\n                autogrow=\"true\"\n                required\n                spellcheck=\"true\"\n                (keydown.control.enter)=\"messageValid ? confirm(this.contactMenorForm.value) : null\"></ion-textarea>\n            </ion-item>\n            <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!messageValid\"\n            expand=\"block\">\n                Send\n            </ion-button>\n          </form>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "aOPl":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name {\n  display: block;\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n}\n\n.name:nth-child(1) {\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n}\n\n#mentor-photo {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  background-image: url('aaron.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin: 35px auto;\n  display: inline-block;\n  opacity: 0;\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n@media screen and (min-width: 992px) {\n  #mentor-photo {\n    width: 50px;\n    height: 50px;\n  }\n}\n\n#mentor-form {\n  opacity: 0;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.45s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.45s forwards;\n}\n\nion-item {\n  padding: 20px 0;\n  margin-bottom: 90px;\n  border-radius: 5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\n\n.orange-button {\n  margin-bottom: 30px;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.9s forwards;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9jb250YWN0LW1lbnRvci9jb250YWN0LW1lbnRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREo7O0FBS0E7RUFDSSx5RkFBQTtVQUFBLGlGQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVGQUFBO1VBQUEsK0VBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFGTjtBQUNGOztBQUtBO0VBQ0ksVUFBQTtFQUNBLHNGQUFBO1VBQUEsOEVBQUE7QUFISjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFIRjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUpKOztBQU9BO0VBQ0ksdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0k7SUFDSSw0QkFBQTtFQUpOO0VBTUU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFKTjtBQUNGOztBQUhBO0VBQ0k7SUFDSSw0QkFBQTtFQUpOO0VBTUU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFKTjtBQUNGOztBQU9BO0VBQ0E7SUFDSSw0QkFBQTtFQUxGO0VBT0Y7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFMRjtBQUNGOztBQUZBO0VBQ0E7SUFDSSw0QkFBQTtFQUxGO0VBT0Y7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudG9ycy9tZW50b3ItcGFnZS9jb250YWN0LW1lbnRvci9jb250YWN0LW1lbnRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8vIDpudGgtY2hpbGQoMikgbm90IHdvcmtpbmdcbi5uYW1lOm50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjNzIGZvcndhcmRzO1xufVxuXG4jbWVudG9yLXBob3RvIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYWFyb24uanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW46IDM1cHggYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNtZW50b3ItcGhvdG8ge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbn1cblxuI21lbnRvci1mb3JtIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDEuNDVzIGZvcndhcmRzO1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcblxufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjlzIGZvcndhcmRzO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiB1bnNldDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG59XG4xMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xufVxufSJdfQ== */");

/***/ }),

/***/ "pRc2":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ContactMentorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMentorPageModule", function() { return ContactMentorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-mentor-routing.module */ "tIFP");
/* harmony import */ var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-mentor.page */ "Np6Q");







let ContactMentorPageModule = class ContactMentorPageModule {
};
ContactMentorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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

/***/ "tIFP":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContactMentorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMentorPageRoutingModule", function() { return ContactMentorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-mentor.page */ "Np6Q");




const routes = [
    {
        path: '',
        component: _contact_mentor_page__WEBPACK_IMPORTED_MODULE_3__["ContactMentorPage"]
    },
    {
        path: 'confirm/:name/:email/:phone',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ./confirm/confirm.module */ "p/Ua")).then(m => m.ConfirmPageModule)
    }
];
let ContactMentorPageRoutingModule = class ContactMentorPageRoutingModule {
};
ContactMentorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactMentorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=contact-mentor-contact-mentor-module-es2015.js.map