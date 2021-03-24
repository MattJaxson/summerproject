(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
    /***/
    "723k":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./profile-routing.module */
      "x0XS");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfilePageRoutingModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
        }])],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "EGjV":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function EGjV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-wrapper {\n  margin: 100px auto;\n}\n\n@media only screen and (max-width: 575px) {\n  .profile-wrapper {\n    margin: 24px auto;\n  }\n}\n\nion-alert {\n  --background: #e4405f;\n}\n\n#profile-info {\n  height: auto;\n  position: relative;\n  top: 40px;\n  text-align: left;\n  padding: 25px;\n}\n\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 1;\n}\n\np {\n  font-size: 1em;\n  opacity: 1;\n  transition: 0.5s;\n}\n\nspan {\n  color: #0055a5;\n  font-weight: 600;\n  width: 64px;\n  display: inline-block;\n}\n\n#profile-picture {\n  height: 80px;\n  width: 80px;\n  border-radius: 100px;\n  margin: 0 auto 8px;\n  display: block;\n  opacity: 1;\n  border: 5px solid #0055a5;\n}\n\n.back-button {\n  opacity: 1;\n}\n\n.blue-button {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n}\n\n.logout-button {\n  color: white;\n  --background: #e4405f;\n  --background-hover: #dd3252;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 52px auto;\n}\n\n@-webkit-keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1em;\n  }\n\n  span {\n    color: #0055a5;\n    font-weight: 600;\n    width: 64px;\n    display: inline-block;\n    text-align: left;\n    margin-right: 10px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0FBR0Y7O0FBQ0E7RUFDRTtJQUNFLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDRCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLDRCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQURGO0FBQ0Y7O0FBTkE7RUFDRTtJQUNFLDRCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLDRCQUFBO0VBRkY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUZGO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLDRCQUFBO0VBRkY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGNBQUE7RUFIRjs7RUFLQztJQUNDLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFGRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXdyYXBwZXIge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5wcm9maWxlLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICB9XG59XG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBvcGFjaXR5OiAxO1xuICAvLyBhbmltYXRpb246IGhlYWRlci1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxcyBmb3J3YXJkcztcbn1cbnAge1xuICBmb250LXNpemU6IDFlbTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgLy8gYW5pbWF0aW9uOiB0ZXh0LXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5zcGFuIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDU1YTU7XG4gIC8vIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG4uYmFjay1idXR0b257XG4gIG9wYWNpdHk6IDE7XG4gIC8vIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cbi5ibHVlLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgLy8gYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIC45cyBmb3J3YXJkcztcbn1cbi5sb2dvdXQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2RkMzI1MjtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDUycHggYXV0bztcbiAgLy8gYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuM3MgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgdGV4dC1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwaWMtc2xpZGUtcmlnaHQge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gICBzcGFuIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjaGFuZ2UtcHJvLXBpYy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "VVTS":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function VVTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-item style=\"--background: #0055a5;\">\n      <ion-avatar slot=\"start\">\n        <img style=\"border-radius: 80px;\" height=\"50\" src=\"../../../assets/icon/profile-icon.svg\">\n      </ion-avatar>\n      <ion-label style=\"font-size: 1.2em; color: white;\">Profile</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-text-center\">\n    <ion-row class=\"profile-wrapper ion-justify-content-center ion-align-items-center\">\n      <ion-col size-xs=\"11\" size-sm=\"3\" size-md=\"2\" size-lg=\"1.5\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button\" (click)=\"changeProfilePicture()\">\n              Change Picture\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-button class=\"blue-button\" (click)=\"editPage()\">\n                Edit Profile\n              </ion-button>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"logout-button\" (click)=\"confirmLogout()\">\n              Logout\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"6\" size-md=\"5\" size-lg=\"3\">\n        <ion-row>\n          <ion-col id=\"profile-info\" size=\"12\">\n            <!-- <p><span>About</span>{{userObject.about}}</p> -->\n            <p><span>Name:</span> {{userObject.fullName}}</p>\n            <p><span>Email:</span> {{userObject.email}}</p>\n            <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n            <p><span>School:</span> {{userObject.school}}</p>\n            <p><span>Grade:</span> {{userObject.grade}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "uxLX":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function uxLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "VVTS");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "EGjV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(auth, profile, storage, router, toast, alert, loading) {
          _classCallCheck(this, ProfilePage);

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

        _createClass(ProfilePage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.detailsSub = this.profile.getUserDetails().subscribe(function (res) {
              console.log(res);
              var fullName = res['fullName'];
              var about = res['about'];
              var city = res['city'];
              var state = res['state'];
              var zip = res['zip'];
              var gender = res['gender'];
              var dob = res['dob'];
              var school = res['school'];
              var grade = res['grade'];
              var profilePicture = res['profilePicture'];
              var resume = res['resume'];
              var email = res['email']; // Send initial profile values to Profile Service;
              // Have to initial these values from the Profile Component

              _this.profile.fullName.next(fullName);

              _this.profile.about.next(about);

              _this.profile.city.next(city);

              _this.profile.state.next(state);

              _this.profile.zip.next(zip);

              _this.profile.gender.next(gender);

              _this.profile.dob.next(dob);

              _this.profile.school.next(school);

              _this.profile.grade.next(grade);

              _this.profile.profilePicture.next(profilePicture);

              _this.profile.resume.next(resume);

              _this.profile.email.next(email); // Subscribe to all the B.Subjects to get live updates of value changes.


              _this.profile.fullName.subscribe(function (data) {
                _this.userObject.fullName = data;
              });

              _this.profile.about.subscribe(function (data) {
                _this.userObject.about = data;
              });

              _this.profile.city.subscribe(function (data) {
                _this.userObject.city = data;
              });

              _this.profile.state.subscribe(function (data) {
                _this.userObject.state = data;
              });

              _this.profile.zip.subscribe(function (data) {
                _this.userObject.zip = data;
              });

              _this.profile.gender.subscribe(function (data) {
                _this.userObject.gender = data;
              });

              _this.profile.dob.subscribe(function (data) {
                _this.userObject.dob = data;
              });

              _this.profile.school.subscribe(function (data) {
                _this.userObject.school = data;
              });

              _this.profile.grade.subscribe(function (data) {
                _this.userObject.grade = data;
              });

              _this.profile.profilePicture.subscribe(function (data) {
                _this.userObject.profilePicture = data;
              });

              _this.profile.resume.subscribe(function (data) {
                _this.userObject.resume = data;
              });

              _this.profile.email.subscribe(function (data) {
                _this.userObject.email = data;
              });
            });
          }
        }, {
          key: "clearToken",
          value: function clearToken() {
            // ONLY FOR TESTING!
            this.storage.remove('access_token');
            var toast = this.toast.create({
              message: 'JWT removed',
              duration: 3000
            });
            toast.then(function (toast) {
              return toast.present();
            });
          }
        }, {
          key: "editPage",
          value: function editPage() {
            this.router.navigate(['/home/profile/edit-profile-page']);
          }
        }, {
          key: "changeProfilePicture",
          value: function changeProfilePicture() {
            console.log('Navigating to Change Profile Page');
            this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
          }
        }, {
          key: "updateResume",
          value: function updateResume() {
            console.log('Navigating to Change Resume Page');
            this.router.navigate(['/home/profile/view-resume']);
          }
        }, {
          key: "confirmLogout",
          value: function confirmLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var toast, loading, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      toast = this.toast.create({
                        message: 'User has been logged out',
                        duration: 3000
                      });
                      _context.next = 3;
                      return this.loading.create({
                        message: 'Logging out...',
                        duration: 1000
                      });

                    case 3:
                      loading = _context.sent;
                      _context.next = 6;
                      return this.alert.create({
                        header: 'Logout',
                        cssClass: 'alert',
                        message: 'Are you sure you want to logout?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Canceling logout');

                            _this2.profile.fullName.next('');

                            _this2.profile.about.next('');

                            _this2.profile.city.next('');

                            _this2.profile.state.next('');

                            _this2.profile.zip.next('');

                            _this2.profile.gender.next('');

                            _this2.profile.dob.next('');

                            _this2.profile.school.next('');

                            _this2.profile.grade.next('');

                            _this2.profile.profilePicture.next('');

                            _this2.profile.resume.next('');

                            _this2.profile.email.next('');

                            _this2.router.navigate(['/home/profile']);
                          }
                        }, {
                          text: 'Logout',
                          handler: function handler() {
                            console.log('Logging out');

                            _this2.auth.logout();

                            loading.present();
                            toast.then(function (t) {
                              return t.present();
                            });
                          }
                        }]
                      });

                    case 6:
                      alert = _context.sent;
                      _context.next = 9;
                      return alert.present();

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], ProfilePage);
      /***/
    },

    /***/
    "x0XS":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function x0XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }, {
        path: 'change-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | change-email-change-email-change-email-module */
          "change-email-change-email-change-email-module").then(__webpack_require__.bind(null,
          /*! ./change-email/change-email/change-email.module */
          "SmxB")).then(function (m) {
            return m.ChangeEmailPageModule;
          });
        }
      }, {
        path: 'change-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | change-password-change-password-change-password-module */
          "change-password-change-password-change-password-module").then(__webpack_require__.bind(null,
          /*! ./change-password/change-password/change-password.module */
          "2uJy")).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        }
      }, {
        path: 'change-school/:school/:grade',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | change-school-change-school-change-school-module */
          "change-school-change-school-change-school-module").then(__webpack_require__.bind(null,
          /*! ./change-school/change-school/change-school.module */
          "UWje")).then(function (m) {
            return m.ChangeSchoolPageModule;
          });
        }
      }, {
        path: 'change-profile-picture/:profilePicture',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | change-profile-picture-change-profile-picture-change-profile-picture-module */
          [__webpack_require__.e("default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83"), __webpack_require__.e("common"), __webpack_require__.e("change-profile-picture-change-profile-picture-change-profile-picture-module")]).then(__webpack_require__.bind(null,
          /*! ./change-profile-picture/change-profile-picture/change-profile-picture.module */
          "aGP+")).then(function (m) {
            return m.ChangeProfilePicturePageModule;
          });
        }
      }, {
        path: 'resume',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resume-resume-resume-module */
          "resume-resume-resume-module").then(__webpack_require__.bind(null,
          /*! ./resume/resume/resume.module */
          "wgOD")).then(function (m) {
            return m.ResumePageModule;
          });
        }
      }, {
        path: 'logout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | logout-logout-logout-module */
          "logout-logout-logout-module").then(__webpack_require__.bind(null,
          /*! ./logout/logout/logout.module */
          "GWPF")).then(function (m) {
            return m.LogoutPageModule;
          });
        }
      }, // Keep Resume pages seperate?
      {
        path: 'view-resume',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resume-view-resume-view-resume-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./resume/view-resume/view-resume.module */
          "bUUK")).then(function (m) {
            return m.ViewResumePageModule;
          });
        }
      }, {
        path: 'update-resume',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | resume-update-resume-update-resume-module */
          "resume-update-resume-update-resume-module").then(__webpack_require__.bind(null,
          /*! ./resume/update-resume/update-resume.module */
          "e0Xu")).then(function (m) {
            return m.UpdateResumePageModule;
          });
        }
      }, // Combine with profile pictures directory?
      {
        path: 'confirm-photo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | change-profile-picture-confirm-photo-confirm-photo-module */
          "change-profile-picture-confirm-photo-confirm-photo-module").then(__webpack_require__.bind(null,
          /*! ./change-profile-picture/confirm-photo/confirm-photo.module */
          "RA/u")).then(function (m) {
            return m.ConfirmPhotoPageModule;
          });
        }
      }, {
        path: 'change-about/:about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | change-about-change-about-module */
          "change-about-change-about-module").then(__webpack_require__.bind(null,
          /*! ./change-about/change-about.module */
          "s+QV")).then(function (m) {
            return m.ChangeAboutPageModule;
          });
        }
      }, {
        path: 'edit-profile-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-profile-page-edit-profile-page-module */
          "edit-profile-page-edit-profile-page-module").then(__webpack_require__.bind(null,
          /*! ./edit-profile-page/edit-profile-page.module */
          "J2g1")).then(function (m) {
            return m.EditProfilePagePageModule;
          });
        }
      }, {
        path: 'change-about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | change-about-change-about-module */
          "change-about-change-about-module").then(__webpack_require__.bind(null,
          /*! ./change-about/change-about.module */
          "s+QV")).then(function (m) {
            return m.ChangeAboutPageModule;
          });
        }
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-profile-profile-module-es5.js.map