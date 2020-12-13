(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <!-- Mobile & Tablet -->\n  <ion-grid class=\"ion-hide-md-up\">\n\n    <!-- Logo -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" style=\"margin-top: 10%;\" class=\"ion-text-center\">\n        <img id=\"logo\" src=\"../../../../assets/logo-2.png\"/>\n      </ion-col>\n    </ion-row>\n\n    <!-- Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"10\" size-sm=\"8\" size-md=\"8\">\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\"\n                (keyup.enter)=\"login(this.loginForm.value)\">\n              </ion-input>\n          </ion-item>\n\n          <!-- Password Validation-->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessasges.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n            </ion-list>\n\n              <!-- Login Button -->\n              <ion-col size=\"12\">\n                <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button>\n              </ion-col>\n\n\n            </form>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- Sign Up -->\n      <ion-col size=\"12\">\n        <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n        </ion-button>\n        \n      </ion-col>\n\n      <!-- Forgot Password -->\n      <ion-col size=\"12\">\n        <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-text-center ion-hide-sm-down\">\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"4\" size-lg=\"4\" size-xl=\"4\"  style=\"margin-top: 5%\">\n\n            <form  [formGroup]=\"loginForm\"\n                   (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n\n                <!-- Refactor Logo Section -->\n                <img src=\"../../../../assets/logo-2.png\" style=\"height: 70px; margin: 35px 0 30px 0;\"/>\n\n              <ion-item>\n                <!-- Email -->\n                  <ion-input\n                    #autoFocusInput\n                    required\n                    placeholder=\"Email\"\n                    inputmode=\"email\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                    (keyup.enter)=\"login(this.loginForm.value)\">\n                  </ion-input>\n              </ion-item>\n                  <!-- Password Validation-->\n                  <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                      *ngIf=\"loginForm\n                        .get('email')\n                        .hasError(validation.type) && (loginForm.get('email')\n                        .dirty || loginForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n            <!-- Password -->\n            <ion-item>\n                <ion-input\n                  required\n                  placeholder=\"Password\"\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n\n            </ion-list>\n\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <!-- Login Button -->\n                <ion-button style=\"width: 200px;\" class=\"orange-button\" type=\"submit\">Login</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-hide-sm-down\" size=\"6\">\n          <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"6\">\n          <ion-button text-center [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password?</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- Back Button -->\n        <ion-col size=\"6\">\n          <ion-button class=\"grey-button\" (click)=\"back()\">Back</ion-button>\n        </ion-col>\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Footer without a border -->\n<ion-footer>\n  <button id=\"download-button\" style=\" border-radius: 0\">Install App</button>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/pages/auth/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n}\n\n#logo {\n  height: 50px;\n  margin: 5px 0 30px 0;\n}\n\nion-footer {\n  opacity: 1;\n  border: none;\n}\n\n#download-button {\n  background: linear-gradient(90deg, #1fcc6d 19.625%, #1ecb6c 19.625%, #17bf28 79.625%);\n  -webkit-background: linear-gradient(90deg, #1fcc6d 19.625%, #1ecb6c 19.625%, #17bf28 79.625%);\n  color: white;\n  width: 100%;\n  height: 60px;\n  font-size: 1.4em;\n  font-weight: 500;\n  margin: 0;\n  border-radius: 0 !important;\n  -webkit-animation: slide-up 0.5s ease 1s forwards;\n          animation: slide-up 0.5s ease 1s forwards;\n  transform: translateY(100%);\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n}\n\n#forgot {\n  width: 220px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  margin-top: 20px;\n  opacity: 0;\n  --background:none;\n  --background-hover: #474444;\n  --color: rgba(130,130,130, 0.5);\n  --color-hover: white;\n  --transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.grey-button {\n  width: 150px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  margin: 10px auto;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #999;\n  --background:none;\n  --color: #999;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0Esa0JBQUE7QUNIQTs7QURNQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNIRjs7QURPQTtFQUNFLHFGQUFBO0VBRUEsNkZBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLDJCQUFBO0FDTkY7O0FEU0E7RUFDRTtJQUNFLDJCQUFBO0VDTkY7RURTQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFQ1BGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLDJCQUFBO0VDTkY7RURTQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFQ1BGO0FBQ0Y7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4vLyAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9CYWNrZ3JvdW5kcy9Mb2dpbl9CYWNrZ3JvdW5kLnN2ZycpO1xuLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweCAwIDMwcHggMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogbm9uZTtcblxufVxuXG4jZG93bmxvYWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMxLCAyMDQsIDEwOSwxKSAxOS42MjUlLHJnYmEoMzAsIDIwMywgMTA4LDEpIDE5LjYyNSUscmdiYSgyMywgMTkxLCA0MCwxKSA3OS42MjUlKVxuICA7XG4gIC13ZWJraXQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMxLCAyMDQsIDEwOSwxKSAxOS42MjUlLHJnYmEoMzAsIDIwMywgMTA4LDEpIDE5LjYyNSUscmdiYSgyMywgMTkxLCA0MCwxKSA3OS42MjUlKVxuICA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDFzIGZvcndhcmRzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDUxOTEsICMwMDAwMDApO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jZm9yZ290IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNDc0NDQ0O1xuICAtLWNvbG9yOiByZ2JhKDEzMCwxMzAsMTMwLCAwLjUpO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufVxuXG4uZ3JleS1idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgLS1jb2xvcjogIzk5OTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiIsImlvbi1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHggMCAzMHB4IDA7XG59XG5cbmlvbi1mb290ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNkb3dubG9hZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZmNjNmQgMTkuNjI1JSwgIzFlY2I2YyAxOS42MjUlLCAjMTdiZjI4IDc5LjYyNSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFmY2M2ZCAxOS42MjUlLCAjMWVjYjZjIDE5LjYyNSUsICMxN2JmMjggNzkuNjI1JSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDFzIGZvcndhcmRzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI3NpZ24tdXAtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNTE5MSwgIzAwMDAwMCk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NzQ0NDQ7XG4gIC0tY29sb3I6IHJnYmEoMTMwLDEzMCwxMzAsIDAuNSk7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cbi5ncmV5LWJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM5OTk7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






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
        window.addEventListener('onbeforeinstallprompt', (e) => {
            console.log('beforeinstallprompt Event fired');
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.deferredPrompt = e;
            if (this.deferredPrompt) {
                this.downloadButton.style.display = 'block';
                this.downloadButton.addEventListener('click', () => {
                    this.showInstallBanner();
                });
            }
            console.log('This is the stashed event');
            console.log(e);
        });
        this.loginForm = this.formBuilder.group({
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    // this is for the letters (both uppercase and lowercase) and numbers validation
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        console.log(this.loginForm.value);
        // this.wrongPasswordToast();
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
            this.downloadButton.innerHTML = 'Safari';
        }
        // Chrome Desktop
        if (deviceType.search('Chrome') > -1) {
            this.downloadButton.innerHTML = 'Chrome';
        }
        // Firefox Desktop
        if (deviceType.search('Firefox') > -1) {
            this.downloadButton.innerHTML = 'Firefox';
        }
        // Edge Desktop
        if (deviceType.search('Edg') > -1) {
            this.downloadButton.innerHTML = 'Edge';
        }
        // Opera Desktop
        if (deviceType.search('OPR') > -1) {
            console.log('Opera');
            this.downloadButton.innerHTML = 'Opera';
        }
        // iOS
        // (Mobile) Safari iOS
        if (deviceType.search( true && 'Mobile') > -1) {
            this.downloadButton.innerHTML = 'iOS Safari';
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
            this.downloadButton.innerHTML = 'iOS Chrome';
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
            this.downloadButton.innerHTML = 'iOS Firefox';
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
            this.downloadButton.innerHTML = 'iOS Edge';
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
            this.downloadButton.innerHTML = 'iOS Opera';
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
            this.downloadButton.innerHTML = 'iPad';
            this.downloadButton.style.display = 'block';
        }
        // Android
        // (Mobile) Chrome Android
        if (deviceType.search('Chrome') > -1 &&
            deviceType.search('Android') > -1) {
            this.downloadButton.innerHTML = 'Chrome Android';
            this.downloadButton.addEventListener('click', () => {
                this.iPhoneInstallBanner.style.display = 'none';
                this.showInstallBanner();
            });
        }
        // (Mobile) Firefox Android
        if (deviceType.search('Firefox') > -1 &&
            deviceType.search('Android') > -1) {
            this.downloadButton.innerHTML = 'Firefox Android';
        }
        // (Mobile) Edge Android
        if (deviceType.search('EdgA') > -1) {
            this.downloadButton.innerHTML = 'Edge Android';
        }
        // (Mobile) Opera Mini Android
        // Samsung Browser
        if (deviceType.search('SamsungBrowser') > -1) {
            this.downloadButton.innerHTML = 'Samsung Browser';
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoFocusInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], LoginPage.prototype, "inputElement", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map