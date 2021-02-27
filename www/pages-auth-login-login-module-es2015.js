(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "NKrf":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "tvH6");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "faZD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LoginPage = class LoginPage {
    constructor(
    // private auth: AuthService,
    formBuilder, auth, loading, toast, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.router = router;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
    }
    ngOnInit() {
        if (window.navigator.onLine === false) {
            console.log('We are OFFLINE!');
        }
        if (window.navigator.onLine === true) {
            console.log('We are ONLINE!');
        }
        // Chrome, Edge,
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('beforeinstallprompt Event fired');
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.deferredPrompt = e;
            console.log(this.deferredPrompt);
            if (this.deferredPrompt) {
                this.downloadButton.style.display = 'block';
                this.downloadButton.addEventListener('click', () => {
                    this.deferredPrompt.prompt();
                });
            }
            // If there was no Install Prompt event returned,
            // do not display the Install App button.
            if (!this.deferredPrompt) {
                this.downloadButton.style.display = 'none';
            }
        });
        this.loginForm = this.formBuilder.group({
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    // this is for the letters (both uppercase and lowercase) and numbers validation
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        this.downloadButton = document.getElementById('download-button');
        this.closeIPhoneInstallBannerButton = document.getElementById('close');
        this.iPhoneInstallBanner = document.getElementById('iphone-install-banner');
        this.openSafariBanner = document.getElementById('open-safari-banner');
        this.openSafariClose = document.getElementById('open-safari-close');
        const deviceType = window.navigator.userAgent;
        console.log(deviceType);
        // Safari Desktop
        if (deviceType.search( true && 'Version') > -1) {
            console.log('Safari');
            this.downloadButton.innerHTML = 'Download App';
        }
        // Chrome Desktop
        if (deviceType.search('Chrome') > -1) {
            this.downloadButton.innerHTML = 'Download App';
        }
        // Firefox Desktop
        if (deviceType.search('Firefox') > -1) {
            this.downloadButton.innerHTML = 'Download App';
        }
        // Edge Desktop
        if (deviceType.search('Edg') > -1) {
            this.downloadButton.innerHTML = 'Download App';
        }
        // Opera Desktop
        if (deviceType.search('OPR') > -1) {
            console.log('Opera');
            this.downloadButton.innerHTML = 'Download App';
        }
        // iOS
        // (Mobile) Safari iOS
        if (deviceType.search( true && 'Mobile') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.style.display = 'block';
            this.downloadButton.addEventListener('click', () => {
                console.log('Clicked Button');
                this.iPhoneInstallBanner.style.display = 'block';
                this.closeIPhoneInstallBannerButton.addEventListener('click', () => {
                    console.log('Closing iPhone Install banner');
                    this.iPhoneInstallBanner.style.display = 'none';
                });
            });
        }
        // (Mobile) Chrome iOS
        if (deviceType.search('CriOS') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.addEventListener('click', () => {
                console.log('Clicked Button');
                this.openSafariBanner.style.display = 'block';
                this.openSafariClose.addEventListener('click', () => {
                    console.log('Closing iPhone Install banner');
                    this.openSafariBanner.style.display = 'none';
                });
            });
        }
        // (Mobile) FireFox iOS
        if (deviceType.search('FxiOS') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.style.display = 'block';
            this.downloadButton.addEventListener('click', () => {
                console.log('Clicked Button');
                this.openSafariBanner.style.display = 'block';
                this.iPhoneInstallBanner.style.display = 'none';
                this.openSafariClose.addEventListener('click', () => {
                    console.log('Closing iPhone Install banner');
                    this.openSafariBanner.style.display = 'none';
                });
            });
        }
        // (Mobile) Edge iOS
        if (deviceType.search('EdgiOS') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.style.display = 'block';
            this.downloadButton.addEventListener('click', () => {
                this.openSafariBanner.style.display = 'block';
                this.iPhoneInstallBanner.style.display = 'none';
                this.openSafariClose.addEventListener('click', () => {
                    console.log('Closing iPhone Install banner');
                    this.openSafariBanner.style.display = 'none';
                });
            });
        }
        // (Mobile) Opera iOS
        if (deviceType.search('OPT') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.style.display = 'block';
            this.downloadButton.addEventListener('click', () => {
                console.log('Clicked Button');
                this.openSafariBanner.style.display = 'block';
                this.iPhoneInstallBanner.style.display = 'none';
                this.openSafariClose.addEventListener('click', () => {
                    console.log('Closing iPhone Install banner');
                    this.openSafariBanner.style.display = 'none';
                });
            });
        }
        // iPad
        if (deviceType.search('iPad') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.style.display = 'block';
        }
        // Android
        // (Mobile) Chrome Android
        if (deviceType.search('Chrome') > -1 &&
            deviceType.search('Android') > -1) {
            this.downloadButton.innerHTML = 'Download App';
            this.downloadButton.addEventListener('click', () => {
                this.iPhoneInstallBanner.style.display = 'none';
                this.showInstallBanner();
            });
        }
        // (Mobile) Firefox Android
        if (deviceType.search('Firefox') > -1 &&
            deviceType.search('Android') > -1) {
            this.downloadButton.innerHTML = 'Download App';
        }
        // (Mobile) Edge Android
        if (deviceType.search('EdgA') > -1) {
            this.downloadButton.innerHTML = 'Download App';
        }
        // (Mobile) Opera Mini Android
        // Samsung Browser
        if (deviceType.search('SamsungBrowser') > -1) {
            this.downloadButton.innerHTML = 'Download App';
        }
        // Check to see if the app is already installed on the users device
        console.log(window.navigator);
        // Detect if app is launched from home screen
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('display-mode is standalone');
            this.iPhoneInstallBanner.style.display = 'none';
            this.openSafariBanner.style.display = 'none';
            this.downloadButton.style.display = 'none';
        }
        // Detect if app is launched from home screen
        // Safari
        if (window.navigator['standalone'] === true) {
            console.log('display-mode is standalone');
            this.iPhoneInstallBanner.style.display = 'none';
            this.openSafariBanner.style.display = 'none';
            this.downloadButton.style.display = 'none';
        }
    }
    showInstallBanner() {
        console.log('Trying to Show Install Banner ...');
        console.log(this.deferredPrompt);
        if (this.deferredPrompt === undefined) {
            console.log('This page was already installed');
            this.downloadButton.style.display = 'none';
        }
        if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
            // Hide Download Button
            this.downloadButton.style.display = 'none';
            // Show the prompt
            this.deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            this.deferredPrompt.userChoice
                .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                }
                else {
                    this.downloadButton.style.display = 'block';
                    this.downloadButton.style.margin = '0 auto 90px auto';
                    console.log('User dismissed the A2HS prompt');
                }
                // We no longer need the prompt.  Clear it up.
                this.deferredPrompt = null;
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 1000);
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Logging in...',
                duration: 1000,
                cssClass: 'success-toast',
                keyboardClose: true,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    login(data) {
        this.presentLoading();
        this.auth.login(data);
    }
    back() {
        this.router.navigate(['/landing']);
    }
    download() {
        console.log('Attempting to download app..');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginPage.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['autoFocusInput', { static: false },] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], LoginPage);



/***/ }),

/***/ "aWET":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "NKrf");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "faZD":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n}\n\n#logo {\n  height: auto;\n  width: 85%;\n  margin: 150px 0 30px 0;\n}\n\nion-footer {\n  opacity: 1;\n  border: none;\n}\n\nion-button {\n  margin: 0;\n}\n\n#download-button {\n  background: linear-gradient(90deg, #1fcc6d 19.625%, #1ecb6c 19.625%, #17bf28 79.625%);\n  -webkit-background: linear-gradient(90deg, #1fcc6d 19.625%, #1ecb6c 19.625%, #17bf28 79.625%);\n  color: white;\n  width: 100%;\n  height: 60px;\n  font-size: 1.4em;\n  font-weight: 600;\n  margin: 0;\n  border-radius: 0 !important;\n  transition: 0.5;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n  transform: translateY(100%);\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n}\n\n#forgot {\n  width: 220px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  margin-top: 20px;\n  opacity: 0;\n  --background:none;\n  --background-hover: #474444;\n  --color: rgba(130,130,130, 0.5);\n  --color-hover: white;\n  --transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.grey-button {\n  width: 150px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  margin: 10px auto;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #999;\n  --background:none;\n  --color: #999;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtBLGtCQUFBO0FBSEE7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsU0FBQTtBQUhGOztBQU1BO0VBQ0UscUZBQUE7RUFFQSw2RkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7RUFDQSwyQkFBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSwyQkFBQTtFQUxGO0VBUUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFORjtBQUNGOztBQUZBO0VBQ0U7SUFDRSwyQkFBQTtFQUxGO0VBUUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFQRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4vLyAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9Mb2dpbl9CYWNrZ3JvdW5kLnN2ZycpO1xuLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDE1MHB4IDAgMzBweCAwO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiBub25lO1xuXG59XG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jZG93bmxvYWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMxLCAyMDQsIDEwOSwxKSAxOS42MjUlLHJnYmEoMzAsIDIwMywgMTA4LDEpIDE5LjYyNSUscmdiYSgyMywgMTkxLCA0MCwxKSA3OS42MjUlKVxuICA7XG4gIC13ZWJraXQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMxLCAyMDQsIDEwOSwxKSAxOS42MjUlLHJnYmEoMzAsIDIwMywgMTA4LDEpIDE5LjYyNSUscmdiYSgyMywgMTkxLCA0MCwxKSA3OS42MjUlKVxuICA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuNTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDFzIGZvcndhcmRzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDUxOTEsICMwMDAwMDApO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jZm9yZ290IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNDc0NDQ0O1xuICAtLWNvbG9yOiByZ2JhKDEzMCwxMzAsMTMwLCAwLjUpO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufVxuXG4uZ3JleS1idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgLS1jb2xvcjogIzk5OTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "qdgq":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aWET");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "NKrf");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "tvH6":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <!-- Mobile & Tablet -->\n  <ion-grid class=\"ion-hide-md-up\">\n\n    <!-- Logo -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" style=\"margin-top: 10%;\" class=\"ion-text-center\">\n        <img id=\"logo\" src=\"../../../../assets/logo-2.png\"/>\n      </ion-col>\n    </ion-row>\n\n    <!-- Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"8\" size-sm=\"8\" size-md=\"8\">\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\"\n                (keyup.enter)=\"login(this.loginForm.value)\">\n              </ion-input>\n          </ion-item>\n\n          <!-- Password Validation-->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessasges.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n            </ion-list>\n\n              <!-- Login Button -->\n              <ion-col size=\"12\">\n                <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button>\n              </ion-col>\n\n\n            </form>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Sign Up -->\n      <ion-col size=\"12\">\n        <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n        </ion-button>\n        \n      </ion-col>\n\n      <!-- Forgot Password -->\n      <ion-col size=\"12\">\n        <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-text-center ion-hide-md-down\">\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"4\" size-lg=\"4\" size-xl=\"4\"  style=\"margin-top: 5%\">\n\n            <form  [formGroup]=\"loginForm\"\n                   (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n\n                <!-- Refactor Logo Section -->\n                <img src=\"../../../../assets/logo-2.png\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n\n              <ion-item>\n                <!-- Email -->\n                  <ion-input\n                    #autoFocusInput\n                    required\n                    placeholder=\"Email\"\n                    inputmode=\"email\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                    (keyup.enter)=\"login(this.loginForm.value)\">\n                  </ion-input>\n              </ion-item>\n                  <!-- Password Validation-->\n                  <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"loginForm\n                        .get('email')\n                        .hasError(validation.type) && (loginForm.get('email')\n                        .dirty || loginForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n            <!-- Password -->\n            <ion-item>\n                <ion-input\n                  required\n                  placeholder=\"Password\"\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n\n            </ion-list>\n\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <!-- Login Button -->\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\n          <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"6\">\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- Back Button -->\n        <ion-col size=\"6\">\n          <ion-button class=\"grey-button\" (click)=\"back()\">Back</ion-button>\n        </ion-col>\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Footer without a border -->\n<ion-footer>\n  <button id=\"download-button\" style=\" border-radius: 0\">Install App</button>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map