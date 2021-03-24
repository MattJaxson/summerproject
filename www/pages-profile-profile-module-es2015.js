(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "723k":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "uxLX");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/custom-component.module */ "zAgk");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-routing.module */ "x0XS");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfilePageRoutingModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }])
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "EGjV":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  margin: 100px auto;\n}\n\n@media only screen and (max-width: 575px) {\n  .profile-wrapper {\n    margin: 24px auto;\n  }\n}\n\nion-alert {\n  --background: #e4405f;\n}\n\n#profile-info {\n  height: auto;\n  position: relative;\n  top: 40px;\n  text-align: left;\n  padding: 25px;\n}\n\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 1;\n}\n\np {\n  font-size: 1em;\n  opacity: 1;\n  transition: 0.5s;\n}\n\nspan {\n  color: #0055a5;\n  font-weight: 600;\n  width: 64px;\n  display: inline-block;\n}\n\n#profile-picture {\n  height: 80px;\n  width: 80px;\n  border-radius: 100px;\n  margin: 0 auto 8px;\n  display: block;\n  opacity: 1;\n  border: 5px solid #0055a5;\n}\n\n.back-button {\n  opacity: 1;\n}\n\n.blue-button {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n}\n\n.logout-button {\n  color: white;\n  --background: #e4405f;\n  --background-hover: #dd3252;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 52px auto;\n}\n\n@-webkit-keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1em;\n  }\n\n  span {\n    color: #0055a5;\n    font-weight: 600;\n    width: 64px;\n    display: inline-block;\n    text-align: left;\n    margin-right: 10px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0FBR0Y7O0FBQ0E7RUFDRTtJQUNFLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDRCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLDRCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQURGO0FBQ0Y7O0FBTkE7RUFDRTtJQUNFLDRCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLDRCQUFBO0VBRkY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUZGO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLDRCQUFBO0VBRkY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGNBQUE7RUFIRjs7RUFLQztJQUNDLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFGRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXdyYXBwZXIge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5wcm9maWxlLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICB9XG59XG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBvcGFjaXR5OiAxO1xuICAvLyBhbmltYXRpb246IGhlYWRlci1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxcyBmb3J3YXJkcztcbn1cbnAge1xuICBmb250LXNpemU6IDFlbTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgLy8gYW5pbWF0aW9uOiB0ZXh0LXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5zcGFuIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDU1YTU7XG4gIC8vIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG4uYmFjay1idXR0b257XG4gIG9wYWNpdHk6IDE7XG4gIC8vIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cbi5ibHVlLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgLy8gYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIC45cyBmb3J3YXJkcztcbn1cbi5sb2dvdXQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2RkMzI1MjtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDUycHggYXV0bztcbiAgLy8gYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuM3MgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgdGV4dC1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwaWMtc2xpZGUtcmlnaHQge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gICBzcGFuIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjaGFuZ2UtcHJvLXBpYy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "VVTS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-item style=\"--background: #0055a5;\">\n      <ion-avatar slot=\"start\">\n        <img style=\"border-radius: 80px;\" height=\"50\" src=\"../../../assets/icon/profile-icon.svg\">\n      </ion-avatar>\n      <ion-label style=\"font-size: 1.2em; color: white;\">Profile</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-text-center\">\n    <ion-row class=\"profile-wrapper ion-justify-content-center ion-align-items-center\">\n      <ion-col size-xs=\"11\" size-sm=\"3\" size-md=\"2\" size-lg=\"1.5\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button\" (click)=\"changeProfilePicture()\">\n              Change Picture\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-button class=\"blue-button\" (click)=\"editPage()\">\n                Edit Profile\n              </ion-button>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"logout-button\" (click)=\"confirmLogout()\">\n              Logout\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"6\" size-md=\"5\" size-lg=\"3\">\n        <ion-row>\n          <ion-col id=\"profile-info\" size=\"12\">\n            <!-- <p><span>About</span>{{userObject.about}}</p> -->\n            <p><span>Name:</span> {{userObject.fullName}}</p>\n            <p><span>Email:</span> {{userObject.email}}</p>\n            <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n            <p><span>School:</span> {{userObject.school}}</p>\n            <p><span>Grade:</span> {{userObject.grade}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "uxLX":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "VVTS");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "EGjV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let ProfilePage = class ProfilePage {
    constructor(auth, profile, storage, router, toast, alert, loading) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.userObject = {
            fullName: '',
            about: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: ''
        };
    }
    ngOnDestroy() {
        this.detailsSub.unsubscribe();
        this.profile.fullName.unsubscribe();
        this.profile.about.unsubscribe();
        this.profile.city.unsubscribe();
        this.profile.state.unsubscribe();
        this.profile.zip.unsubscribe();
        this.profile.gender.unsubscribe();
        this.profile.school.unsubscribe();
        this.profile.grade.unsubscribe();
        this.profile.profilePicture.unsubscribe();
        this.profile.email.unsubscribe();
        this.profile.resume.unsubscribe();
    }
    ngOnInit() {
        this.detailsSub = this.profile.getUserDetails()
            .subscribe(res => {
            console.log(res);
            const fullName = res['fullName'];
            const about = res['about'];
            const city = res['city'];
            const state = res['state'];
            const zip = res['zip'];
            const gender = res['gender'];
            const dob = res['dob'];
            const school = res['school'];
            const grade = res['grade'];
            const profilePicture = res['profilePicture'];
            const resume = res['resume'];
            const email = res['email'];
            // Send initial profile values to Profile Service;
            // Have to initial these values from the Profile Component
            this.profile.fullName.next(fullName);
            this.profile.about.next(about);
            this.profile.city.next(city);
            this.profile.state.next(state);
            this.profile.zip.next(zip);
            this.profile.gender.next(gender);
            this.profile.dob.next(dob);
            this.profile.school.next(school);
            this.profile.grade.next(grade);
            this.profile.profilePicture.next(profilePicture);
            this.profile.resume.next(resume);
            this.profile.email.next(email);
            // Subscribe to all the B.Subjects to get live updates of value changes.
            this.profile.fullName.subscribe(data => {
                this.userObject.fullName = data;
            });
            this.profile.about.subscribe(data => {
                this.userObject.about = data;
            });
            this.profile.city.subscribe(data => {
                this.userObject.city = data;
            });
            this.profile.state.subscribe(data => {
                this.userObject.state = data;
            });
            this.profile.zip.subscribe(data => {
                this.userObject.zip = data;
            });
            this.profile.gender.subscribe(data => {
                this.userObject.gender = data;
            });
            this.profile.dob.subscribe(data => {
                this.userObject.dob = data;
            });
            this.profile.school.subscribe(data => {
                this.userObject.school = data;
            });
            this.profile.grade.subscribe(data => {
                this.userObject.grade = data;
            });
            this.profile.profilePicture.subscribe(data => {
                this.userObject.profilePicture = data;
            });
            this.profile.resume.subscribe(data => {
                this.userObject.resume = data;
            });
            this.profile.email.subscribe(data => {
                this.userObject.email = data;
            });
        });
    }
    clearToken() {
        // ONLY FOR TESTING!
        this.storage.remove('access_token');
        const toast = this.toast.create({
            message: 'JWT removed',
            duration: 3000
        });
        toast.then(toast => toast.present());
    }
    editPage() {
        this.router.navigate(['/home/profile/edit-profile-page']);
    }
    changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }
    updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    confirmLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = this.toast.create({
                message: 'User has been logged out',
                duration: 3000
            });
            const loading = yield this.loading.create({
                message: 'Logging out...',
                duration: 1000
            });
            const alert = yield this.alert.create({
                header: 'Logout',
                cssClass: 'alert',
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Canceling logout');
                            this.profile.fullName.next('');
                            this.profile.about.next('');
                            this.profile.city.next('');
                            this.profile.state.next('');
                            this.profile.zip.next('');
                            this.profile.gender.next('');
                            this.profile.dob.next('');
                            this.profile.school.next('');
                            this.profile.grade.next('');
                            this.profile.profilePicture.next('');
                            this.profile.resume.next('');
                            this.profile.email.next('');
                            this.router.navigate(['/home/profile']);
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            console.log('Logging out');
                            this.auth.logout();
                            loading.present();
                            toast.then(t => t.present());
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], ProfilePage);



/***/ }),

/***/ "x0XS":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "uxLX");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    },
    {
        path: 'change-email',
        loadChildren: () => __webpack_require__.e(/*! import() | change-email-change-email-change-email-module */ "change-email-change-email-change-email-module").then(__webpack_require__.bind(null, /*! ./change-email/change-email/change-email.module */ "SmxB")).then(m => m.ChangeEmailPageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() | change-password-change-password-change-password-module */ "change-password-change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./change-password/change-password/change-password.module */ "2uJy")).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'change-school/:school/:grade',
        loadChildren: () => __webpack_require__.e(/*! import() | change-school-change-school-change-school-module */ "change-school-change-school-change-school-module").then(__webpack_require__.bind(null, /*! ./change-school/change-school/change-school.module */ "UWje")).then(m => m.ChangeSchoolPageModule)
    },
    {
        path: 'change-profile-picture/:profilePicture',
        loadChildren: () => Promise.all(/*! import() | change-profile-picture-change-profile-picture-change-profile-picture-module */[__webpack_require__.e("default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83"), __webpack_require__.e("common"), __webpack_require__.e("change-profile-picture-change-profile-picture-change-profile-picture-module")]).then(__webpack_require__.bind(null, /*! ./change-profile-picture/change-profile-picture/change-profile-picture.module */ "aGP+")).then(m => m.ChangeProfilePicturePageModule)
    },
    {
        path: 'resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-resume-resume-module */ "resume-resume-resume-module").then(__webpack_require__.bind(null, /*! ./resume/resume/resume.module */ "wgOD")).then(m => m.ResumePageModule)
    },
    {
        path: 'logout',
        loadChildren: () => __webpack_require__.e(/*! import() | logout-logout-logout-module */ "logout-logout-logout-module").then(__webpack_require__.bind(null, /*! ./logout/logout/logout.module */ "GWPF")).then(m => m.LogoutPageModule)
    },
    // Keep Resume pages seperate?
    {
        path: 'view-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-view-resume-view-resume-module */ "common").then(__webpack_require__.bind(null, /*! ./resume/view-resume/view-resume.module */ "bUUK")).then(m => m.ViewResumePageModule)
    },
    {
        path: 'update-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-update-resume-update-resume-module */ "resume-update-resume-update-resume-module").then(__webpack_require__.bind(null, /*! ./resume/update-resume/update-resume.module */ "e0Xu")).then(m => m.UpdateResumePageModule)
    },
    // Combine with profile pictures directory?
    {
        path: 'confirm-photo',
        loadChildren: () => __webpack_require__.e(/*! import() | change-profile-picture-confirm-photo-confirm-photo-module */ "change-profile-picture-confirm-photo-confirm-photo-module").then(__webpack_require__.bind(null, /*! ./change-profile-picture/confirm-photo/confirm-photo.module */ "RA/u")).then(m => m.ConfirmPhotoPageModule)
    },
    {
        path: 'change-about/:about',
        loadChildren: () => __webpack_require__.e(/*! import() | change-about-change-about-module */ "change-about-change-about-module").then(__webpack_require__.bind(null, /*! ./change-about/change-about.module */ "s+QV")).then(m => m.ChangeAboutPageModule)
    },
    {
        path: 'edit-profile-page',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-profile-page-edit-profile-page-module */ "edit-profile-page-edit-profile-page-module").then(__webpack_require__.bind(null, /*! ./edit-profile-page/edit-profile-page.module */ "J2g1")).then(m => m.EditProfilePagePageModule)
    },
    {
        path: 'change-about',
        loadChildren: () => __webpack_require__.e(/*! import() | change-about-change-about-module */ "change-about-change-about-module").then(__webpack_require__.bind(null, /*! ./change-about/change-about.module */ "s+QV")).then(m => m.ChangeAboutPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map