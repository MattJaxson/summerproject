(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enter-code-enter-code-module"],{

/***/ "/STr":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EnterCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePageRoutingModule", function() { return EnterCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _enter_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-code.page */ "Z20D");




const routes = [
    {
        path: '',
        component: _enter_code_page__WEBPACK_IMPORTED_MODULE_3__["EnterCodePage"]
    },
    {
        path: 'thank-you-page',
        loadChildren: () => __webpack_require__.e(/*! import() | thank-you-thank-you-module */ "thank-you-thank-you-module").then(__webpack_require__.bind(null, /*! ../thank-you/thank-you.module */ "oo7F")).then(m => m.ThankYouPageModule)
    }
];
let EnterCodePageRoutingModule = class EnterCodePageRoutingModule {
};
EnterCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnterCodePageRoutingModule);



/***/ }),

/***/ "V3nl":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/enter-code/enter-code.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\"></ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Header -->\n    <ion-row class=\"ion-justify-content-center header\">\n      <ion-col size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n        <h6 class=\"text-header\">Please enter the 6 character code that was sent to <span>{{userEmail}}</span></h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col size-lg=\"5\" size-md=\"7\" size-xs=\"11\">\n        <form (ngSubmit)=\"thankYouPage()\" [formGroup]=\"enterCodeForm\">\n          <ion-list class=\"line-input\">\n            <ion-item>\n              <ion-input\n              formControlName=\"code\"\n              type=\"email\"\n              placeholder=\"enter code\"></ion-input>\n            </ion-item>\n            <ion-button class=\"send-new-code\" (click)=\"sendNewCode()\">\n              Send new code\n            </ion-button>\n            <ion-button [disabled]=\"disabled\" class=\"orange-button\" type=\"submit\">\n              ENTER CODE\n            </ion-button>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "Wx8N":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code.module.ts ***!
  \********************************************************************/
/*! exports provided: EnterCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePageModule", function() { return EnterCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-code-routing.module */ "/STr");
/* harmony import */ var _enter_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-code.page */ "Z20D");







let EnterCodePageModule = class EnterCodePageModule {
};
EnterCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterCodePageRoutingModule"]
        ],
        declarations: [_enter_code_page__WEBPACK_IMPORTED_MODULE_6__["EnterCodePage"]]
    })
], EnterCodePageModule);



/***/ }),

/***/ "Z20D":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code.page.ts ***!
  \******************************************************************/
/*! exports provided: EnterCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePage", function() { return EnterCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enter_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enter-code.page.html */ "V3nl");
/* harmony import */ var _enter_code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter-code.page.scss */ "mh6O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let EnterCodePage = class EnterCodePage {
    constructor(router, formBuilder, auth, activatedRoute, toast) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.disabled = true;
        this.code = '';
        this.userEmail = '';
    }
    ngOnInit() {
        this.enterCodeForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(6)]]
        });
        this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
        this.generateCode(6).then(code => {
            console.log(`Sent Email to ${this.userEmail}`);
            this.auth.sendEmailWithCode(code, this.userEmail);
        });
        this.formOnChanges();
    }
    formOnChanges() {
        console.log(this.enterCodeForm);
        this.enterCodeForm.valueChanges.subscribe(data => {
            console.log(data);
            if (data.code === this.code) {
                console.log('codes match');
                this.disabled = false;
            }
            if (data.code !== this.code) {
                this.disabled = true;
            }
        });
    }
    generateCode(length) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log('Generated Code: ' + result);
            return this.code = result;
        });
    }
    sendNewCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.generateCode(6).then(code => {
                console.log('Data: ' + code);
                this.auth.sendEmailWithCode(code, this.userEmail);
            });
            yield this.presentNewCodeToast(this.userEmail);
        });
    }
    thankYouPage() {
        if (this.enterCodeForm.controls.code.value !== this.code) {
            this.presentErrorToast();
            console.log('Codes do not match');
        }
        console.log('Thank you page');
        this.auth.register();
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page']);
    }
    ;
    presentCodesMatchedToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Codes Matched!',
                duration: 2000,
                cssClass: 'wrong-password-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    presentErrorToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'The codes do not match. Please try again.',
                duration: 2000,
                cssClass: 'wrong-password-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    presentNewCodeToast(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: `New Code sent to ${email}`,
                duration: 2000,
                cssClass: 'success-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
};
EnterCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
EnterCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-enter-code',
        template: _raw_loader_enter_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enter_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
], EnterCodePage);



/***/ }),

/***/ "mh6O":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.cancel-button {\n  margin: 0 10px;\n}\n\n.header {\n  background: #edf3f8;\n  height: 200px;\n}\n\n.text-header {\n  font-size: 1em;\n  position: relative;\n  top: 50px;\n  color: #666;\n  z-index: 999;\n  text-align: justify;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 100px auto 200px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\nspan {\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #005191;\n}\n\n.send-new-code {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 150px;\n  margin: 50px auto;\n  opacity: 0;\n  -webkit-animation: slide-from-right 1s ease-out 5s forwards;\n          animation: slide-from-right 1s ease-out 5s forwards;\n}\n\nspan {\n  font-weight: 900;\n  font-size: 1em;\n  color: #005191;\n}\n\n@-webkit-keyframes slide-from-right {\n  0% {\n    transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-from-right {\n  0% {\n    transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VudGVyLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxVQUFBO0FBRUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBRUU7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFBRjtFQUdBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBREY7QUFDRjs7QUFUQTtFQUVFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBQUY7RUFHQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoiZW50ZXItY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xuICBjb2xvcjogIzY2NjtcbiAgei1pbmRleDogOTk5O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTAwcHggYXV0byAyMDBweCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5zZW5kLW5ldy1jb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci13aWR0aCA6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1mcm9tLXJpZ2h0IDFzIGVhc2Utb3V0IDVzIGZvcndhcmRzO1xufVxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xuXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=enter-code-enter-code-module-es2015.js.map