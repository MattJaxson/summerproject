(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Szd":
/*!*****************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
  \*****************************************************************/
/*! exports provided: FollowIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowIconComponent", function() { return FollowIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./follow-icon.component.html */ "V38i");
/* harmony import */ var _follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-icon.component.scss */ "ctJg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");






let FollowIconComponent = class FollowIconComponent {
    constructor(posts) {
        this.posts = posts;
        this.followState = 'not-followed';
        this.iconName = 'checkbox-outline';
    }
    ngOnInit() { }
    toggleLikeState(post) {
        if (this.followState === 'not-followed') {
            this.followState = 'followed';
            this.iconName = 'checkbox';
            console.log('Followed: ' + post._id + '\n' + this.userEmail);
            this.posts.followPost(post._id, this.userEmail);
        }
        else {
            this.followState = 'not-followed';
            this.iconName = 'checkbox-outline';
            console.log('Un-Followed');
            this.posts.unFollowPost(post._id, this.userEmail);
        }
    }
};
FollowIconComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] }
];
FollowIconComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FollowIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow-icon',
        template: _raw_loader_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('follow', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#d1d8e0',
                    opacity: '0.4',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#21ce99',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('not-followed <=> followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [_follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]])
], FollowIconComponent);



/***/ }),

/***/ "/ay3":
/*!*****************************************************************************!*\
  !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #005191;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQU47QUFJRTtFQUNFLHFCQUFBO0FBREo7QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQ0oiLCJmaWxlIjoiY29tbWVudC12b3RlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHZvdGV7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5kb3dudm90ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgICAgLS1mb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICAudXB2b3RlZC10b2FzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICB9XG4gIC5kb3dudm90ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfVxuICBcbiAgLmZvbGxvd2VkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIH1cbiAgLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfSJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ferro/Desktop/United-Way/Mobile/src/main.ts */"zUnb");


/***/ }),

/***/ "5atM":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid style=\"margin-bottom: 20px;\">\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n            <div class=\"ion-text-right\">\n                <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n                    Details\n                </ion-button>\n                <ion-button class=\"going\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                    Go\n                </ion-button>\n                <ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                    Cancel\n                </ion-button>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "84P7":
/*!***************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FollowCommentButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowCommentButtonsComponent", function() { return FollowCommentButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./follow-comment-buttons.component.html */ "v0br");
/* harmony import */ var _follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-comment-buttons.component.scss */ "MxxR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let FollowCommentButtonsComponent = class FollowCommentButtonsComponent {
    constructor(router, posts, profile, toast) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.comments = [];
        this.followers = [];
        this.following = false;
        this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.followingLength = null;
    }
    ngOnInit() {
        // Get information about post
        this.posts.getPostInfo(this.postID)
            .subscribe(postDetails => {
            let comments = postDetails['comments'];
            let followers = postDetails['followers'];
            let following = false;
            this.profile.getUserDetails().subscribe(userDetails => {
                let userEmail = userDetails['email'];
                followers.find(findFollower);
                function findFollower(follower) {
                    if (!follower) {
                        // User is not following post
                    }
                    if (follower === userEmail) {
                        following = true;
                    }
                }
                if (userEmail === this.postEmail) {
                    return this.isUser === true;
                }
                this.followers = followers;
                this.comments = comments;
                this.userEmail = userEmail;
                this.following = following;
                this.followingLength$.next(followers.length);
                this.followingLength$.subscribe(data => {
                    this.followingLength = data;
                });
            });
        });
    }
    follow(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('Following Post');
            yield console.log(postID);
            yield this.posts.followPost(postID, this.userEmail);
            this.following = true;
            this.followingLength$.next(this.followingLength + 1);
            yield this.followToast();
        });
    }
    followToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const followToast = yield this.toast.create({
                cssClass: 'followed-toast',
                message: 'You are FOLLOWING this post',
                duration: 2000
            });
            followToast.present();
        });
    }
    unFollow(postID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('Unfollowing Post');
            yield console.log(postID);
            yield this.posts.unFollowPost(postID, this.userEmail);
            this.following = false;
            this.followingLength$.next(this.followingLength - 1);
            yield this.unFollowToast();
        });
    }
    unFollowToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const unFollowToast = yield this.toast.create({
                cssClass: 'unfollowed-toast',
                message: 'You are UNFOLLOWING this post',
                duration: 2000
            });
            unFollowToast.present();
        });
    }
    postPage() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', this.postID]);
    }
};
FollowCommentButtonsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
FollowCommentButtonsComponent.propDecorators = {
    postID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    postEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FollowCommentButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow-comment-buttons',
        template: _raw_loader_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
], FollowCommentButtonsComponent);



/***/ }),

/***/ "Aso2":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "NuaS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");












let ProfileService = class ProfileService {
    constructor(http, storage, alertController, helper, auth, router, toastController) {
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.auth = auth;
        this.router = router;
        this.toastController = toastController;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
        this.activeEmail = '';
        // user = {};
        this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.about = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.city = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        // Needs the User's email address from the JSON Web Token stored on device.
        this.activeEmail = this.auth.user.email;
    }
    getAllUsers() {
        return this.http.get(`${this.BACKEND_URL}/api/home/user`);
    }
    //  Gets User Details from Server to populate the Profile tab with User information.
    getUserDetails() {
        return this.http.post(`${this.BACKEND_URL}/api/home/user`, { email: this.activeEmail });
    }
    getTheirDetails(email) {
        return this.http.post(`${this.BACKEND_URL}/api/home/user/their-details`, { email });
    }
    changeEmail(activeEmail, newEmail, password) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/home/user/change-email`, {
            oldEmail: this.activeEmail,
            email: newEmail,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(e => {
            this.presentFailToast(this.activeEmail);
            throw new Error(e);
        }))
            .subscribe(data => {
            if (data === true) {
                this.email.next(newEmail);
                this.activeEmail = newEmail;
                this.router.navigate(['/home/profile']);
                this.presentSuccessToast();
            }
            else {
                this.presentFailToast(this.activeEmail);
                return console.log('Passwords dont match');
            }
        });
    }
    // Toast for Successful Change
    presentSuccessToast() {
        const successToast = this.toastController.create({
            message: 'Your Email address has been updated.',
            duration: 3000,
            cssClass: 'updated-toast',
            keyboardClose: true,
            position: 'bottom'
        });
        successToast.then(t => t.present());
    }
    presentFailToast(email) {
        // Toast for Successful Change
        const failToast = this.toastController.create({
            // tslint:disable-next-line: max-line-length
            message: `Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ${email}`,
            duration: 9000,
            cssClass: 'wrong-password-toast',
            keyboardClose: true,
            position: 'top'
        });
        failToast.then(t => t.present());
    }
    changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-password`, {
                oldPassword,
                email: activeEmail,
                newPassword,
                reTypeNewPassword
            })
                .subscribe(data => {
                // if the passwords match, navigate back to landing page
                if (data === true) {
                    console.log('TRUE');
                    this.router.navigate(['']);
                    let toast = this.toastController.create({
                        message: 'Password updated. Please login with your new password.',
                        duration: 3000,
                        cssClass: 'updated-toast',
                        keyboardClose: true,
                        position: 'bottom'
                    });
                    toast.then(t => t.present());
                }
                else {
                    console.log('Passwords dont match!');
                }
            });
        });
    }
    changeAbout(email, newAbout, passsword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-about`, { email, newAbout, passsword }).subscribe();
        });
    }
    changeSchool(email, newSchool, newGrade, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
                email,
                newSchool,
                newGrade,
                password
            }).subscribe(data => {
                if (data === true) {
                    this.school.next(newSchool);
                    this.grade.next(newGrade);
                    this.router.navigate(['/home/profile']);
                    let successToast = this.toastController.create({
                        // tslint:disable-next-line: max-line-length
                        message: 'Your school information has been updated.',
                        duration: 3000,
                        cssClass: 'updated-toast',
                        keyboardClose: true,
                        position: 'bottom'
                    });
                    successToast.then(t => t.present());
                }
                else {
                    let failToast = this.toastController.create({
                        // tslint:disable-next-line: max-line-length
                        message: 'Please make sure your password is correct',
                        duration: 3000,
                        cssClass: 'wrong-password-toast',
                        keyboardClose: true,
                        position: 'top',
                    });
                    failToast.then(t => t.present());
                    return console.log('Passwords dont match');
                }
            });
        });
    }
    changeProfilePicture(imageForm, oldPhotoKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`, {
                imageForm, oldPhotoKey
            }).subscribe();
        });
    }
    changeResume(email, newResume, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
                email,
                newResume,
                password
            }).subscribe(data => {
                if (data === true) {
                    console.log('Changing Resume...');
                    this.resume.next(newResume);
                    this.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
                }
                else {
                    return console.log('Passwords dont match');
                }
            });
        });
    }
    // Delete User
    delete() {
        console.log('Deleted User');
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], ProfileService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "+Vou");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const url is commented out depending on which you are testing with.
// local host is for local machine and 10.0.1.8 is for android testing

const ip = '10.0.1.4';
const baseUrl = `https://${ip}:4040`;
const environment = {
    production: false,
    url: baseUrl
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cmz0":
/*!***************************************************************************!*\
  !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommentVoteBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentVoteBarComponent", function() { return CommentVoteBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comment-vote-bar.component.html */ "FLRm");
/* harmony import */ var _comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-vote-bar.component.scss */ "/ay3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");









let CommentVoteBarComponent = class CommentVoteBarComponent {
    constructor(posts, profile, toast, postEmitterService) {
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.postEmitterService = postEmitterService;
        this.upVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
        this.downVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
        this.currentUserUpvoted = false;
        this.currentUserDownvoted = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get information about comment
            this.posts.getPostInfo(this.postID)
                .subscribe(postInfo => {
                let allComments = postInfo['comments'];
                allComments.find(comment => {
                    if (comment._id === this.commentID) {
                        this.upVoters = comment['upvoters'];
                        this.downVoters = comment['downvoters'];
                        this.upVotes = comment['upvotes'];
                        this.downVotes = comment['downvotes'];
                        this.upVoteCount$.next(this.upVotes);
                        this.downVoteCount$.next(this.downVotes);
                        this.upVoteLength = this.upVoteCount$.getValue();
                        this.downVoteLength = this.downVoteCount$.getValue();
                        return;
                    }
                });
                // Get User Email
                this.profile.getUserDetails()
                    .subscribe(userDetails => {
                    let userEmail = userDetails['email'];
                    let upVoted = false;
                    let downVoted = false;
                    this.upVoters.find(findUpVoter);
                    this.downVoters.find(findDownVoter);
                    function findUpVoter(upVoter) {
                        if (!upVoter) {
                        }
                        if (upVoter === userEmail) {
                            return upVoted = true;
                        }
                        console.log(upVoter);
                    }
                    function findDownVoter(downVoter) {
                        if (!downVoter) {
                        }
                        if (downVoter === userEmail) {
                            return downVoted = true;
                        }
                    }
                    console.log('Current user: ', userEmail);
                    this.userEmail = userEmail;
                    this.currentUserUpvoted = upVoted;
                    this.currentUserDownvoted = downVoted;
                });
            });
        });
    }
    refreshAfterComment() {
        this.postEmitterService.postPageRefresh();
    }
    upVoteComment() {
        this.posts.upVoteComment(this.postID, this.commentID, this.userEmail)
            .subscribe(data => {
            const upvotes = data['upvotes'];
            const downvotes = data['downvotes'];
            console.log(data);
            this.upVoteCount$.next(upvotes);
            this.downVoteCount$.next(downvotes);
            this.currentUserUpvoted = true;
            this.upVoteLength = this.upVoteCount$.getValue();
            this.downVoteLength = this.downVoteCount$.getValue();
            if (this.currentUserUpvoted === true) {
                return this.currentUserDownvoted = false;
            }
        });
        this.upVoteCommentToast();
        this.refreshAfterComment();
    }
    upVoteCommentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const upVotePostToast = yield this.toast.create({
                cssClass: 'upvoted-toast',
                message: 'You have UPVOTED this comment.',
                duration: 2000
            });
            upVotePostToast.present();
        });
    }
    downVoteComment() {
        this.posts.downVoteComment(this.postID, this.commentID, this.userEmail)
            .subscribe(data => {
            const upvotes = data['upvotes'];
            const downvotes = data['downvotes'];
            console.log(data);
            this.upVoteCount$.next(upvotes);
            this.downVoteCount$.next(downvotes);
            this.currentUserDownvoted = true;
            this.upVoteLength = this.upVoteCount$.getValue();
            this.downVoteLength = this.downVoteCount$.getValue();
            if (this.currentUserDownvoted === true) {
                return this.currentUserUpvoted = false;
            }
        });
        this.downVoteCommentToast();
        this.refreshAfterComment();
    }
    downVoteCommentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const downVoteToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this comment.',
                duration: 2000
            });
            downVoteToast.present();
        });
    }
};
CommentVoteBarComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"] }
];
CommentVoteBarComponent.propDecorators = {
    postID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    commentID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CommentVoteBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comment-vote-bar',
        template: _raw_loader_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]])
], CommentVoteBarComponent);



/***/ }),

/***/ "DtjX":
/*!*******************************************************!*\
  !*** ./src/app/emitters/post-page-emitter.service.ts ***!
  \*******************************************************/
/*! exports provided: PostPageEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageEmitterService", function() { return PostPageEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let PostPageEmitterService = class PostPageEmitterService {
    constructor() {
        this.invokePostsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onBackAction() {
        this.invokePostsPageRefresh.emit();
    }
    postPageRefresh() {
        this.invokePostsPageRefresh.emit();
    }
};
PostPageEmitterService.ctorParameters = () => [];
PostPageEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PostPageEmitterService);



/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profile.service */ "Aso2");






let PostsService = class PostsService {
    constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.postsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.followingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    getPosts() {
        // console.log('Getting Posts');
        return this.http.get(`${this.BACKEND_URL}/api/posts/`);
    }
    getMyPosts(email) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/my-posts`, { email });
    }
    getPostInfo(id) {
        // console.log(`Getting information for post id ${id}`);
        return this.http.post(`${this.BACKEND_URL}/api/posts/post-info`, { _id: id });
    }
    addPost(creatorName, creatorEmail, creatorProfilePicture, post, title) {
        console.log('Adding post to post que...');
        console.log('Post: ', post);
        return this.http.post(`${this.BACKEND_URL}/api/posts/add-text-post`, { creatorName, creatorEmail, creatorProfilePicture, post, title });
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/comment`, { postID, userFullName, userEmail, userProfilePicture, comment });
    }
    editPost(postID, newPost) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/edit-post`, { postID, newPost });
    }
    editComment(commentID, postID, newComment) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/edit-comment`, { postID, commentID, newComment });
    }
    // Upvote Post
    upVotePost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-post`, { postID, userEmail });
    }
    // Downvote Post
    downVotePost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/down-vote-post`, { postID, userEmail });
    }
    // Upvote
    upVoteComment(postID, commentID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-comment`, { postID, commentID, userEmail });
    }
    // Downvote
    downVoteComment(postID, commentID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/down-vote-comment`, { postID, commentID, userEmail });
    }
    followPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/follow`, {
            _id: postID,
            email: userEmail
        }).subscribe(data => {
            let updatedFollowingPosts = [...Object.values(data)];
            this.followingSubject$.next(updatedFollowingPosts);
        });
    }
    unFollowPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/unfollow`, {
            _id: postID,
            email: userEmail
        }).subscribe(data => {
            let updatedFollowingPosts = [...Object.values(data)];
            this.followingSubject$.next(updatedFollowingPosts);
        });
    }
    getFollowedPost(userId) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/get-followed-posts`, { _id: userId });
    }
    deleteComment(postID, commentID) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/delete-comment`, { _id: postID, _cid: commentID });
    }
    deletePost(postID) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/delete-post`, { _id: postID });
    }
    // tslint:disable-next-line: max-line-length
    reportComment(commentID, commentContents, post, postID, reportedUserName, reportedUserEmail, commentDate, userEmail, userFullname, reportReason) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/posts/report`, { commentID, commentContents, post, postID, reportedUserName, reportedUserEmail, commentDate, userEmail, userFullname, reportReason });
    }
    replyComment(commentID, postID, reply, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/posts/reply-comment`, { postID: postID, commentID: commentID, reply: reply, userFullName: userFullName, userProfilePicture: userProfilePicture, userEmail: userEmail, commentUserEmail: commentUserEmail, commentUserFullName: commentUserFullName });
    }
    deleteReply(replyID, commentID, postID) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/delete-reply`, { _rid: replyID, _cid: commentID, _pid: postID });
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], PostsService);



/***/ }),

/***/ "EdnJ":
/*!***************************************************************!*\
  !*** ./src/app/components/going-icon/going-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: GoingIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingIconComponent", function() { return GoingIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./going-icon.component.html */ "5atM");
/* harmony import */ var _going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./going-icon.component.scss */ "Y05Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ "riPR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/favorites.service */ "U8oy");










let GoingIconComponent = class GoingIconComponent {
    constructor(events, favs, toast, router, profile) {
        this.events = events;
        this.favs = favs;
        this.toast = toast;
        this.router = router;
        this.profile = profile;
        this.going = false;
        this.goingState = 'not-going';
        this.iconName = 'add-circle-outline';
    }
    ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            let eventsGoing = details['eventsGoing'];
            if (eventsGoing.includes(this.event._id)) {
                this.going = true;
                this.goingState = 'going';
            }
            else {
                this.going = false;
                this.goingState = 'not-going';
            }
        });
    }
    toggleGoingState(event) {
        if (this.goingState === 'not-going') {
            // Going
            this.goingState = 'going';
            this.iconName = 'close-circle-outline';
            this.going = true;
            this.goingToast();
            console.log(`Going to event, ${event.title}`);
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe(events => {
                let updatedEvents = [...Object.values(events['eventsGoing']), this.event._id];
                this.events.eventsGoing$.next(updatedEvents);
                console.log(this.events.eventsGoing$.getValue());
            });
        }
        else {
            // Not Going
            this.goingState = 'not-going';
            this.iconName = 'add-circle-outline';
            this.going = false;
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe(events => {
                const eventsGoing = this.events.eventsGoing$.getValue();
                for (let i = 0; i < eventsGoing.length; i++) {
                    if (eventsGoing[i] === this.event._id) {
                        eventsGoing.splice(i, 1);
                    }
                }
                console.log(eventsGoing);
                this.events.eventsGoing$.next(eventsGoing);
            });
        }
    }
    goingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notGoingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
};
GoingIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] },
    { type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] }
];
GoingIconComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
GoingIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-going-icon',
        template: _raw_loader_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('going', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: 'blue',
                    opacity: '0.4',
                    transition: '0.5s',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#21ce99',
                    opacity: '1',
                    transition: '0.5s',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('not-going <=> going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
        src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])
], GoingIconComponent);



/***/ }),

/***/ "FLRm":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n");

/***/ }),

/***/ "FfRp":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  [class.collapsed]=\"isCollapsed\"\n  [ngClass]=\"{'isCollapsed': !isCollapsed}\"\n  class=\"pull-left read-more\">\n  <ng-content></ng-content>\n</div>\n\n<a (click)=\"isCollapsed = !isCollapsed\" [hidden]=\"dataLength\" class=\"pull-right\">\n  <p class=\"collapsed-text\" *ngIf=\"isCollapsed\">Read More</p>\n  <p class=\"not-collapsed-text\" *ngIf=\"!isCollapsed\">Show Less</p>\n</a>\n\n<div class=\"cb\"></div>\n");

/***/ }),

/***/ "FuCT":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotGoingIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGoingIconComponent", function() { return NotGoingIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-going-icon.component.html */ "NLRV");
/* harmony import */ var _not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-going-icon.component.scss */ "J9/d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ "riPR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let NotGoingIconComponent = class NotGoingIconComponent {
    constructor(events, toast) {
        this.events = events;
        this.toast = toast;
        this.notGoingState = 'not-going';
        this.iconName = 'add-circle';
    }
    ngOnInit() { }
    toggleNotGoingState(event) {
        if (this.notGoingState === 'not-going') {
            this.notGoingState = 'going';
            this.iconName = 'close-circle-outline';
            this.goingToast();
            console.log(`Going to event, ${event.title}`);
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
        else {
            this.notGoingState = 'not-not-going';
            this.iconName = 'add-circle-outline';
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
    }
    goingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notGoingToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
};
NotGoingIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
NotGoingIconComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NotGoingIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-going-icon',
        template: _raw_loader_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('notGoing', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#e4405f',
                    opacity: '0.4',
                    transition: '0.5s',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#21ce99',
                    opacity: '1',
                    transition: '0.5s',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('not-going <=> ot-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [_not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], NotGoingIconComponent);



/***/ }),

/***/ "IM1W":
/*!*************************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-buttons {\n  position: relative;\n  left: 10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UscUJBQUE7QUFERiIsImZpbGUiOiJ1cC1kb3duLXZvdGUtYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMHB4O1xufVxuXG4udXB2b3Rle1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIHdpZHRoOiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4uZG93bnZvdGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgLS1mb250LXNpemU6IDQwcHg7XG4gIH1cbn1cblxuLnVwdm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG59XG4uZG93bnZvdGVkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufVxuXG4uZm9sbG93ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG59XG4udW5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbn0iXX0= */");

/***/ }),

/***/ "J9/d":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "JBbY":
/*!*************************************************************!*\
  !*** ./src/app/components/read-more/read-more.component.ts ***!
  \*************************************************************/
/*! exports provided: ReadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadMoreComponent", function() { return ReadMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_read_more_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./read-more.component.html */ "FfRp");
/* harmony import */ var _read_more_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-more.component.scss */ "MK+/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReadMoreComponent = class ReadMoreComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
    }
};
ReadMoreComponent.ctorParameters = () => [];
ReadMoreComponent.propDecorators = {
    dataLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReadMoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-read-more',
        template: _raw_loader_read_more_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_read_more_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ReadMoreComponent);



/***/ }),

/***/ "MK+/":
/*!***************************************************************!*\
  !*** ./src/app/components/read-more/read-more.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.collapsed {\n  transition: 0.5s;\n  display: -webkit-inline-box;\n  display: inline-block;\n  font-size: 1.3em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n.collapsed-text {\n  color: #005191;\n  font-size: 1.3em;\n  opacity: 0.5;\n}\n\n.not-collapsed-text {\n  color: #e4405f;\n  font-size: 1.3em;\n  background: #eee;\n}\n\n.read-more {\n  margin-top: -3px;\n  line-height: 1.4;\n  font-size: 1.3em;\n}\n\n.isCollapsed {\n  transition: 0.5s;\n  width: 100%;\n}\n\n.cb {\n  clear: both;\n  height: 0;\n}\n\n.pull-right {\n  float: right;\n}\n\n.pull-left {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWQtbW9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQVZVO0VBV1YsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0UsY0FmSztFQWdCTCxnQkFuQlU7RUFvQlYsWUFBQTtBQUxGOztBQU9BO0VBQ0UsY0FuQkk7RUFvQkosZ0JBeEJVO0VBMEJWLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBaENVO0FBMkJaOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQUhGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUlBO0VBQ0UsV0FBQTtBQURGIiwiZmlsZSI6InJlYWQtbW9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LXNpemU6IDEuM2VtO1xuJGxpbmUtaGVpZ2h0OiAxLjU7XG4kbGluZXMtdG8tc2hvdzogMTtcbiRibHVlOiAjMDA1MTkxO1xuJHJlZDogI2U0NDA1ZjtcblxuZGl2LmNvbGxhcHNlZCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbGxhcHNlZC10ZXh0IHtcbiAgY29sb3I6ICRibHVlO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ub3QtY29sbGFwc2VkLXRleHQge1xuICBjb2xvcjogJHJlZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuXG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5yZWFkLW1vcmV7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cbi5pc0NvbGxhcHNlZCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNiIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMDtcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");



let AuthGuardService = class AuthGuardService {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.isAuthenticated();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthGuardService);



/***/ }),

/***/ "MxxR":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-button {\n  width: 130px;\n  --background: #005191;\n  --background-hover: #005191;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\n.comment-button:focus {\n  --color: orange;\n}\n\n.follow-button {\n  --color: white;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n  width: 130px;\n}\n\n.unfollow-button {\n  font-weight: 800;\n  line-height: 1em;\n  border: 1px solid #faa71b;\n  width: 300px;\n  color: #faa71b;\n  font-size: 1.5em;\n  padding: 2px 0px 2px 0px;\n  position: relative;\n  right: 20px;\n  border-radius: 50px;\n}\n\n.follow-button:hover, .unfollow-button:hover, .comment-button:hover {\n  --color: white;\n}\n\nion-icon {\n  font-size: 3em;\n  height: 100px;\n  width: 100px;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button, .follow-button, .unfollow-button {\n    font-size: 0.5em;\n    width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvbGxvdy1jb21tZW50LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0VBREo7QUFDRiIsImZpbGUiOiJmb2xsb3ctY29tbWVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtYnV0dG9ue1xuICB3aWR0aDogMTMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA1MTkxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbW1lbnQtYnV0dG9uOmZvY3VzIHtcbiAgLS1jb2xvcjogb3JhbmdlO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4vLyBDaGFuZ2UgY29sb3Jcbi51bmZvbGxvdy1idXR0b24ge1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICAvLyBiYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFhNzFiO1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAycHggMHB4IDJweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5mb2xsb3ctYnV0dG9uOmhvdmVyLCAudW5mb2xsb3ctYnV0dG9uOmhvdmVyLCAuY29tbWVudC1idXR0b246aG92ZXIge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDNlbTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29tbWVudC1idXR0b24sIC5mb2xsb3ctYnV0dG9uLCAudW5mb2xsb3ctYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "NLRV":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\n            <p>No longer going to this Event?</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleNotGoingState(event)\" tappable [@notGoing]=\"notGoingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let AppComponent = class AppComponent {
    constructor(platform, auth, router) {
        this.platform = platform;
        this.auth = auth;
        this.router = router;
        this.tabsPlacement = 'bottom';
        this.tabsLayout = 'icon-top';
        this.initializeApp();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.auth.authenticationState.unsubscribe();
    }
    initializeApp() {
        this.auth.checkToken();
        this.platform.ready().then(() => {
        });
        // State for the User. If Authentication State == False, the app reverts back to the landing page
        this.auth.authenticationState.subscribe((state) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (state) {
                this.router.navigate(['home']);
            }
            else {
                this.router.navigate(['']);
            }
        }));
    }
    createOnline$() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AppComponent);



/***/ }),

/***/ "U8oy":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let FavoritesService = class FavoritesService {
    constructor(http, profile, toast) {
        this.http = http;
        this.profile = profile;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    getFavorites(email) {
        console.log('Getting Favorites');
        return this.http.post(`${this.BACKEND_URL}/api/jobs/get-favorites`, { email: email });
    }
    favoriteThisJob(job) {
        // get user's email for database query
        const email = this.profile.activeEmail;
        // put this job's id into this user's favoriteJobs property
        job.userEmail = email;
        let id = job._id;
        // this.favoriteJobs$.next([job]);
        return this.http.post(`${this.BACKEND_URL}/api/jobs/favorite`, { email: email, _id: id }).subscribe(data => {
            console.log('Posting Favorite Job to Database..');
            let updatedFavorites = [...Object.values(data)];
            this.favoriteJobs$.next(updatedFavorites);
            this.presentToastFavorited('You favorited this job!');
        });
    }
    unFavoriteThisJob(job) {
        // get user's email for database query
        const email = this.profile.activeEmail;
        job.userEmail = email;
        let id = job._id;
        // post to database
        this.http.post(`${this.BACKEND_URL}/api/jobs/unfavorite`, { email: email, _id: id }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Unfavorite data value: ", data);
            let updatedFavorites = [...Object.values(data)];
            // for (let i = 0; i < updatedFavorites.length; i++) {
            //   if (updatedFavorites[i] === job) {
            //     updatedFavorites.splice(i, 1);
            //   }
            // }
            this.favoriteJobs$.next(updatedFavorites);
            this.presentToastUnfavorited('You removed this job from Favorites.');
        }));
        // update favoriteJobsSubject
        console.log('Unfavoriting this Job');
    }
    presentToastFavorited(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 3000,
                cssClass: 'favorited-toast',
                position: 'bottom'
            });
            toast.present();
        });
    }
    presentToastUnfavorited(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 3000,
                cssClass: 'unfavorited-toast',
                position: 'bottom'
            });
            toast.present();
        });
    }
};
FavoritesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
FavoritesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], FavoritesService);



/***/ }),

/***/ "V38i":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n\n");

/***/ }),

/***/ "Y05Y":
/*!*****************************************************************!*\
  !*** ./src/app/components/going-icon/going-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 40px;\n  width: 100px;\n  margin-left: 0px;\n  margin-right: 10px;\n}\n\n.not-going {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button {\n  margin-right: 10px;\n  --background: #edf3f8;\n  color: #005191;\n}\n\n.going {\n  --color: white;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.going:hover {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dvaW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFLRTtFQUNFLGNBQUE7QUFISiIsImZpbGUiOiJnb2luZy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLy8gLnRodW1ibmFpbCB7XG5cbi8vIH1cblxuLm5vdC1nb2luZyB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZTk5YjE0KTtcbn1cblxuLmdyZXktYnV0dG9ue1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2VkZjNmODtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5nb2luZyB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcblxuICAmOmhvdmVyIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtOptionsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "NuaS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion-bottom-drawer */ "rFvw");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/custom-component.module */ "zAgk");
/* harmony import */ var _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emitters/favorites-event-emitter.service */ "lFXj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");

// Angular Modules









// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://10.0.1.5:3000', options: {} };
// Third Party

// Custom Modules

// Custom Emitters


//  Ionic Modules








// For JWT
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whitelistedDomains: ['localhost:42dfc00']
    };
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [
            ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_10__["IonBottomDrawerModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_11__["CustomComponentsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            // SocketIoModule.forRoot(config),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JWT_OPTIONS"],
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"]],
                }
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].production }),
        ],
        providers: [
            _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__["PostPageEmitterService"],
            _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_13__["FavoritesEventEmitterService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_18__["FilePath"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_19__["WebView"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b7Ok":
/*!***************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: HeartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartIconComponent", function() { return HeartIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./heart-icon.component.html */ "d0Dc");
/* harmony import */ var _heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heart-icon.component.scss */ "pBns");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/favorites.service */ "U8oy");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");







let HeartIconComponent = class HeartIconComponent {
    constructor(favorites, profile) {
        this.favorites = favorites;
        this.profile = profile;
        this.favoriteState = 'unfavorited';
        this.iconName = 'heart-empty';
    }
    ngOnInit() {
        setTimeout(() => {
            for (const job of this.favoriteJobs) {
                if (this.job._id == job._id) {
                    this.setFavoriteStateOn();
                }
            }
        }, 300);
    }
    toggleLikeState() {
        if (this.favoriteState === 'unfavorited') {
            this.setFavoriteStateOn();
            this.favorites.favoriteThisJob(this.job);
        }
        else {
            this.setFavoriteStateOff();
            this.favorites.unFavoriteThisJob(this.job);
        }
    }
    setFavoriteStateOn() {
        this.favoriteState = 'favorited';
        this.iconName = 'heart';
    }
    setFavoriteStateOff() {
        this.favoriteState = 'unfavorited';
        this.iconName = 'heart-empty';
    }
};
HeartIconComponent.ctorParameters = () => [
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }
];
HeartIconComponent.propDecorators = {
    job: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    favoriteJobs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeartIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-heart-icon',
        template: _raw_loader_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('heart', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('unfavorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#faa71b',
                    opacity: '1',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    color: '#faa71b',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('unfavorited <=> favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [_heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]])
], HeartIconComponent);



/***/ }),

/***/ "ctJg":
/*!*******************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  --color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvbGxvdy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJmb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgLS1jb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "d0Dc":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"favoriteState\" style=\"font-size: 3em\" [name]=\"iconName\"></ion-icon>\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lFXj":
/*!*************************************************************!*\
  !*** ./src/app/emitters/favorites-event-emitter.service.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesEventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesEventEmitterService", function() { return FavoritesEventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FavoritesEventEmitterService = class FavoritesEventEmitterService {
    constructor() {
        this.invokeJobsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onBackAction() {
        this.invokeJobsPageRefresh.emit();
    }
};
FavoritesEventEmitterService.ctorParameters = () => [];
FavoritesEventEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FavoritesEventEmitterService);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "NuaS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let AuthService = class AuthService {
    constructor(http, storage, alertController, helper, plt, toast) {
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.plt = plt;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.TOKEN_KEY = 'access_token';
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this.activeEmail = '';
        //  Define type
        this.userInfo = {
            fullName: '',
            about: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: '',
            password: ''
        };
        // Inside the constructor we always check for an existing token so we can automatically log in a user
        this.plt.ready().then(() => {
            this.checkToken();
            this.getEmailFromToken();
        });
        console.log('Authentication State');
        this.authenticationState.subscribe(console.log);
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
    }
    // Get UserInfo -- testing purposes. Delete eventually.
    getUserInfo() {
        console.log(this.userInfo);
    }
    //  Sign up Functions
    getPersonalInfo(data) {
        console.log('Sent Personal Infoto Auth Service: ');
        this.userInfo.fullName = data.fullName;
        this.userInfo.about = data.about;
        this.userInfo.gender = data.gender;
        this.userInfo.dob = data.dob;
        this.userInfo.school = data.school;
        this.userInfo.grade = data.grade;
    }
    getProfilePicture(data) {
        console.log('Sending Profile Picture URL to Auth Service...');
        this.userInfo.profilePicture = data;
        console.log(this.userInfo);
    }
    getResume(data) {
        console.log('data from auth service: ' + data);
        console.log('Sent Resume to Auth Service');
        this.userInfo.resume = data;
        console.log(this.userInfo);
    }
    getLoginCredentials(email, password) {
        console.log('Sent Login Credentials to Auth Service');
        this.userInfo.email = email;
        this.userInfo.password = password;
        console.log(this.userInfo);
    }
    doesUserExists(email, password) {
        return this.http.post(`${this.BACKEND_URL}/api/signup/does-user-exist`, { email, password });
    }
    // looks up our storage for a valid JWT and if found, changes our authenticationState
    checkToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.get(this.TOKEN_KEY).then(token => {
                if (token) {
                    const decoded = this.helper.decodeToken(token);
                    const isExpired = this.helper.isTokenExpired(token);
                    if (!isExpired) {
                        this.user = decoded;
                        console.log('Decoded Token: ' + JSON.stringify(decoded));
                        this.authenticationState.next(true);
                    }
                    else {
                        console.log('Token Removed from Storage');
                        this.storage.remove(this.TOKEN_KEY);
                    }
                }
            });
        });
    }
    checkIfUserExits(email) {
        return this.http.post(`${this.BACKEND_URL}/api/admin/students`, { email })
            .subscribe();
    }
    getEmailFromToken() {
        this.storage.get(this.TOKEN_KEY).then(token => {
            if (token) {
                const decoded = this.helper.decodeToken(token);
                console.log('Token Email: ' + decoded.email);
                this.activeEmail = decoded.email;
            }
        });
    }
    //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format
    sendEmailWithCode(code, email) {
        console.log('almost there');
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials`, { code, email }).subscribe();
    }
    sendEmailWithCodeForgotPassword(code, email) {
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password-email-code`, { code, email }).subscribe();
    }
    // Register User
    register() {
        this.http.post(`${this.BACKEND_URL}/api/signup`, this.userInfo).subscribe();
    }
    // Login User
    login(data) {
        console.log('Logging in');
        return this.loginSub = this.http.post(`${this.BACKEND_URL}/api/`, { email: data.email,
            password: data.password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(res => {
            if (!res) {
                console.log('There was no response. There might be a bad password');
            }
            this.storage.set(this.TOKEN_KEY, res['token']);
            this.user = this.helper.decodeToken(res['token']);
            this.activeEmail = this.user.email;
            this.authenticationState.next(true);
            console.log('Active User: ' + this.user.email);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(e => {
            console.error(e);
            if (e.error.msg === 'The email and password don\'t match.') {
                this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
            }
            else if (e.error.msg === 'The user does not exist') {
                this.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
            }
            else if (e.message.startsWith('Http failure response')) {
                this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
            }
            else {
                this.presentAlert('Email/Password Error', 'Please try again.');
            }
            throw new Error(e);
        }))
            .subscribe();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'There was an error with your password or email. Please try again.',
                duration: 5000,
                cssClass: 'wrong-password-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    presentAlert(header, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'danger-alert',
                header,
                message: msg,
                buttons: [{
                        text: 'OK'
                    }]
            });
            yield alert.present();
        });
    }
    forgotPassword(email, newPassword) {
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password`, { email, newPassword }).subscribe();
    }
    logout() {
        this.storage.remove(this.TOKEN_KEY).then((token) => {
            console.log('Logging out...');
            this.user = null;
            this.userInfo = {
                fullName: '',
                about: '',
                gender: '',
                dob: '',
                school: '',
                grade: '',
                profilePicture: '',
                resume: '',
                email: '',
                password: ''
            },
                this.authenticationState.next(false);
            // window.location.reload();
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], AuthService);



/***/ }),

/***/ "p/hF":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n");

/***/ }),

/***/ "pBns":
/*!*****************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  float: right;\n  z-index: 9999;\n  position: relative;\n  right: 10px;\n  color: #faa71b;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogOTk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTBweDtcbiAgY29sb3I6ICNmYWE3MWI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "riPR":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");






let EventsService = class EventsService {
    constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    getEvents() {
        console.log('Getting Events');
        return this.http.get(`${this.BACKEND_URL}/api/events`);
    }
    getEventsGoing(id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, { _id: id });
    }
    goingToEvent(eventID, userEmail, id) {
        console.log(this.profile);
        return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, { eventID, userEmail, id });
    }
    notGoingToEvent(eventID, userEmail, id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`, {
            userEmail,
            eventID,
            id
        });
    }
    deleteEvent(eventId) {
        return this.http.post(`${this.BACKEND_URL}/api/events/delete-event`, { _id: eventId });
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], EventsService);



/***/ }),

/***/ "u6v2":
/*!***********************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UpDownVoteButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpDownVoteButtonsComponent", function() { return UpDownVoteButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./up-down-vote-buttons.component.html */ "p/hF");
/* harmony import */ var _up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./up-down-vote-buttons.component.scss */ "IM1W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");









let UpDownVoteButtonsComponent = class UpDownVoteButtonsComponent {
    constructor(posts, profile, toast, postsEmitterService) {
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.postsEmitterService = postsEmitterService;
        this.upVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.downVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.upVoters = [];
        this.downVoters = [];
        this.upVoted = false;
        this.downVoted = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get information about post
            yield this.posts.getPostInfo(this.postID)
                .subscribe(postInfo => {
                this.upVotes = postInfo['upvotes'];
                this.downVotes = postInfo['downvotes'];
                this.upVoters = postInfo['upvoters'];
                this.downVoters = postInfo['downvoters'];
                this.upVotes$.next(this.upVotes);
                this.downVotes$.next(this.downVotes);
                this.upVoteLength = this.upVotes$.getValue();
                this.downVoteLength = this.downVotes$.getValue();
                // Get User Email
                this.profile.getUserDetails()
                    .subscribe(userDetails => {
                    let userEmail = userDetails['email'];
                    let upVoted = false;
                    let downVoted = false;
                    this.upVoters.find(findUpVoter);
                    this.downVoters.find(findDownVoter);
                    function findUpVoter(upVoter) {
                        if (!upVoter) {
                        }
                        if (upVoter === userEmail) {
                            return upVoted = true;
                        }
                        console.log(`Upvoter: ${upVoter}`);
                    }
                    function findDownVoter(downVoter) {
                        if (!downVoter) {
                        }
                        if (downVoter === userEmail) {
                            return downVoted = true;
                        }
                    }
                    this.userEmail = userEmail;
                    this.upVoted = upVoted;
                    this.downVoted = downVoted;
                });
            });
        });
    }
    upVotePost() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.posts.upVotePost(this.postID, this.userEmail)
                .subscribe(data => {
                const upvotes = (data['upvotes']);
                const downvotes = (data['downvotes']);
                console.log(data);
                this.upVotes$.next(upvotes);
                this.downVotes$.next(downvotes);
                this.upVoted = true;
                this.upVoteLength = this.upVotes$.getValue();
                this.downVoteLength = this.downVotes$.getValue();
                if (this.upVoted === true) {
                    return this.downVoted = false;
                }
            });
            this.postsEmitterService.postPageRefresh();
            this.upVotePostToast();
        });
    }
    upVotePostToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const upVotePostToast = yield this.toast.create({
                cssClass: 'upvoted-toast',
                message: 'You have UPVOTED this post.',
                duration: 2000
            });
            upVotePostToast.present();
        });
    }
    downVotePost() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.posts.downVotePost(this.postID, this.userEmail)
                .subscribe(data => {
                const upvotes = (data['upvotes']);
                const downvotes = (data['downvotes']);
                console.log(data);
                this.upVotes$.next(upvotes);
                this.downVotes$.next(downvotes);
                this.downVoted = true;
                this.upVoteLength = this.upVotes$.getValue();
                this.downVoteLength = this.downVotes$.getValue();
                if (this.downVoted === true) {
                    return this.upVoted = false;
                }
            });
            this.postsEmitterService.postPageRefresh();
            this.downVoteToast();
        });
    }
    downVoteToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const downVoteToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this post.',
                duration: 2000
            });
            downVoteToast.present();
        });
    }
};
UpDownVoteButtonsComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"] }
];
UpDownVoteButtonsComponent.propDecorators = {
    postID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UpDownVoteButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-up-down-vote-buttons',
        template: _raw_loader_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]])
], UpDownVoteButtonsComponent);



/***/ }),

/***/ "v0br":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!following && !isUser\" class=\"follow-button\" (click)=\"follow(postID)\">Follow ({{followingLength}})\n    </ion-button>\n    <ion-button *ngIf=\"following && !isUser\" class=\"unfollow-button\" (click)=\"unFollow(postID)\">Unfollow ({{followingLength}})\n    </ion-button>\n    <!-- <ion-button\n    class=\"comment-button\"\n    (click)=\"postPage()\">Comments ({{comments.length}})\n    </ion-button> -->\n    <ion-icon\n    (click)=\"postPage()\" slot=\"start\" src=\"../../assets/icons/comments-icon.svg\"></ion-icon>\n\n  </ion-buttons>\n</ion-toolbar>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-login-login-module */ "pages-auth-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/auth/login/login.module */ "qdgq")).then(m => m.LoginPageModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    // Change to sign up path name later
    {
        path: 'personal-info',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-sign-up-personal-info-personal-info-module */ "pages-auth-sign-up-personal-info-personal-info-module").then(__webpack_require__.bind(null, /*! ./pages/auth/sign-up/personal-info/personal-info.module */ "a3/p")).then(m => m.PersonalInfoPageModule)
    },
    //  change to forgot password path name later
    {
        path: 'enter-email',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-forgot-password-enter-email-enter-email-module */ "pages-auth-forgot-password-enter-email-enter-email-module").then(__webpack_require__.bind(null, /*! ./pages/auth/forgot-password/enter-email/enter-email.module */ "yucT")).then(m => m.EnterEmailPageModule)
    },
    {
        path: 'enter-code',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-forgot-password-enter-code-enter-code-module */ "forgot-password-enter-code-enter-code-module").then(__webpack_require__.bind(null, /*! ./pages/auth/forgot-password/enter-code/enter-code.module */ "veoP")).then(m => m.EnterCodePageModule)
    },
    {
        path: 'events',
        loadChildren: () => Promise.all(/*! import() | pages-events-events-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~modals-third-person-profile-third-person-profile-mod~a3bc1d59"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null, /*! ./pages/events/events.module */ "Obr4")).then(m => m.EventsPageModule)
    },
    {
        path: 'mentors',
        loadChildren: () => Promise.all(/*! import() | pages-mentors-mentors-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mentors-mentors-module")]).then(__webpack_require__.bind(null, /*! ./pages/mentors/mentors.module */ "heuU")).then(m => m.MentorsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-login-login-module */ "pages-auth-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/auth/login/login.module */ "qdgq")).then(m => m.LoginPageModule)
    },
    {
        path: 'replies-page',
        loadChildren: () => Promise.all(/*! import() | modals-replies-page-replies-page-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~modals-third-person-profile-third-person-profile-mod~a3bc1d59"), __webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./modals/replies-page/replies-page.module */ "fU57")).then(m => m.RepliesPagePageModule)
    },
    {
        path: 'edit-post',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-edit-post-edit-post-module */ "common").then(__webpack_require__.bind(null, /*! ./modals/edit-post/edit-post.module */ "9CtM")).then(m => m.EditPostPageModule)
    },
    {
        path: 'image-cropper',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-image-cropper-image-cropper-module */ "default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83").then(__webpack_require__.bind(null, /*! ./modals/image-cropper/image-cropper.module */ "Scpy")).then(m => m.ImageCropperPageModule)
    },
    {
        path: 'third-person-profile',
        loadChildren: () => Promise.all(/*! import() | modals-third-person-profile-third-person-profile-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~modals-third-person-profile-third-person-profile-mod~a3bc1d59"), __webpack_require__.e("default~modals-third-person-profile-third-person-profile-module~pages-posts-posts-module")]).then(__webpack_require__.bind(null, /*! ./modals/third-person-profile/third-person-profile.module */ "tymS")).then(m => m.ThirdPersonProfilePageModule)
    },
    {
        path: 'report-convo',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-report-convo-report-convo-module */ "common").then(__webpack_require__.bind(null, /*! ./modals/report-convo/report-convo.module */ "6kEE")).then(m => m.ReportConvoPageModule)
    },
    {
        path: 'new-message-student',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-new-message-student-new-message-student-module */ "common").then(__webpack_require__.bind(null, /*! ./modals/new-message-student/new-message-student.module */ "AhZb")).then(m => m.NewMessageStudentPageModule)
    },
    {
        path: 'new-message-mentor',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-new-message-mentor-new-message-mentor-module */ "common").then(__webpack_require__.bind(null, /*! ./modals/new-message-mentor/new-message-mentor.module */ "OWIS")).then(m => m.NewMessageMentorPageModule)
    },
    {
        path: 'report-convo-mentor',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-report-convo-mentor-report-convo-mentor-module */ "modals-report-convo-mentor-report-convo-mentor-module").then(__webpack_require__.bind(null, /*! ./modals/report-convo-mentor/report-convo-mentor.module */ "3KhJ")).then(m => m.ReportConvoMentorPageModule)
    },
    {
        path: 'upload-resume-modal',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-upload-resume-modal-upload-resume-modal-module */ "default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module").then(__webpack_require__.bind(null, /*! ./modals/upload-resume-modal/upload-resume-modal.module */ "BD02")).then(m => m.UploadResumeModalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zAgk":
/*!*******************************************************!*\
  !*** ./src/app/components/custom-component.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heart-icon/heart-icon.component */ "b7Ok");
/* harmony import */ var _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./going-icon/going-icon.component */ "EdnJ");
/* harmony import */ var _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-going-icon/not-going-icon.component */ "FuCT");
/* harmony import */ var _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./follow-icon/follow-icon.component */ "/Szd");
/* harmony import */ var _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./up-down-vote-buttons/up-down-vote-buttons.component */ "u6v2");
/* harmony import */ var _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comment-vote-bar/comment-vote-bar.component */ "Cmz0");
/* harmony import */ var _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./follow-comment-buttons/follow-comment-buttons.component */ "84P7");
/* harmony import */ var _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./read-more/read-more.component */ "JBbY");












let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()
        ],
        declarations: [
            _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__["HeartIconComponent"],
            _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__["GoingIconComponent"],
            _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__["NotGoingIconComponent"],
            _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__["FollowIconComponent"],
            _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__["UpDownVoteButtonsComponent"],
            _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommentVoteBarComponent"],
            _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FollowCommentButtonsComponent"],
            _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_11__["ReadMoreComponent"]
        ],
        exports: [
            _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__["HeartIconComponent"],
            _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__["GoingIconComponent"],
            _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__["NotGoingIconComponent"],
            _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__["FollowIconComponent"],
            _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__["UpDownVoteButtonsComponent"],
            _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommentVoteBarComponent"],
            _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FollowCommentButtonsComponent"],
            _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_11__["ReadMoreComponent"]
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(() => {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
}).catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map