(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7"],{

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");












let ProfileService = class ProfileService {
    constructor(http, storage, alertController, helper, auth, router, toastController) {
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.auth = auth;
        this.router = router;
        this.toastController = toastController;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url;
        this.activeEmail = '';
        this.user = {};
        this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.addressOne = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.addressTwo = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.phone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.city = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        // Needs the User's email address from the JSON Web Token stored on device.
        this.activeEmail = this.auth.user.email;
    }
    //  Gets User Details from Server to populate the Profile tab with User information.
    getUserDetails() {
        return this.http.post(`${this.BACKEND_URL}/api/home/user`, { email: this.activeEmail });
    }
    changeEmail(activeEmail, newEmail, password) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/home/user/change-email`, {
            oldEmail: this.activeEmail,
            email: newEmail,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(e => {
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
            message: `You have changed your email address to ${this.activeEmail}.`,
            duration: 3000,
            cssClass: 'success-toast',
            keyboardClose: true,
            position: 'top',
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                        message: 'Please login with your new Password',
                        duration: 3000
                    });
                    toast.then(t => t.present());
                }
                else {
                    console.log('Passwords dont match!');
                }
            });
        });
    }
    changePhone(email, newNumber, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-phone`, {
                newNumber,
                password,
                email
            })
                .subscribe(data => {
                if (data === true) {
                    console.log('Changing phone number...');
                    this.phone.next(newNumber);
                    this.router.navigate(['/home/profile']);
                    const successToast = this.toastController.create({
                        message: `Phone Number changed to ${newNumber}`,
                        duration: 3000,
                        cssClass: 'success-toast',
                        keyboardClose: true,
                        position: 'top'
                    });
                    successToast.then(t => t.present());
                }
                else {
                    console.log('Passwords dont match!');
                    const failToast = this.toastController.create({
                        message: 'Password was incorrect',
                        duration: 3000,
                        cssClass: 'wrong-password-toast',
                        keyboardClose: true,
                        position: 'top'
                    });
                    failToast.then(t => t.present());
                }
            });
        });
    }
    changeAddress(email, addressOne, addressTwo, city, state, zip, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-address`, {
                email,
                addressOne,
                addressTwo,
                city,
                state,
                zip,
                password
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(res => {
                if (!res) {
                    console.log('There was no response. There might be a bad password');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(e => {
                throw new Error(e);
            }))
                .subscribe(data => {
                if (data === true) {
                    this.addressOne.next(addressOne);
                    this.addressTwo.next(addressTwo);
                    this.city.next(city);
                    this.state.next(state);
                    this.zip.next(zip);
                    this.router.navigate(['/home/profile']);
                    let successToast = this.toastController.create({
                        // tslint:disable-next-line: max-line-length
                        message: `You have changed your address to ${addressOne} ${addressTwo} ,${city}, ${state}, ${zip}.`,
                        duration: 3000,
                        cssClass: 'success-toast',
                        keyboardClose: true,
                        position: 'top'
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
    changeSchool(email, newSchool, newGrade, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                        message: `Your school and grade has been updated to ${newGrade}, ${newSchool}`,
                        duration: 5000,
                        cssClass: 'success-toast',
                        keyboardClose: true,
                        position: 'top'
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
    changeProfilePicture(email, newPicture, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
                email,
                newPicture,
                password
            }).subscribe(data => {
                if (data === true) {
                    console.log('Changing Resume...');
                    this.profilePicture.next(newPicture);
                    this.router.navigate([`/home/user/change-school/:school/:grade/confirm`]);
                }
                else {
                    return console.log('Passwords dont match');
                }
            });
        });
    }
    changeResume(email, newResume, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], ProfileService);



/***/ })

}]);
//# sourceMappingURL=default~contact-mentor-contact-mentor-module~pages-events-events-module~pages-jobs-jobs-module~pages~382bb8e7-es2015.js.map