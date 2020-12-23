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


      __webpack_exports__["default"] = "ion-header {\n  display: none;\n}\nion-header ion-buttons ion-button {\n  color: white;\n}\nion-toolbar {\n  --color: #005191;\n}\nion-alert {\n  --background: #e4405f;\n}\n#profile-info {\n  height: auto;\n  margin-top: 20px;\n  text-align: left;\n  padding: 25px;\n}\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 0;\n  -webkit-animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\np {\n  font-size: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  -webkit-animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n.header-half {\n  height: auto;\n  background: #edf3f8;\n  padding: 50px 0 50px 0;\n}\n.header-half .orange-button {\n  opacity: 0;\n  -webkit-animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n          animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n}\nspan {\n  color: #005191;\n  font-weight: 600;\n  width: 120px;\n  display: inline-block;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 0 auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n#change-pro-pic-button {\n  width: 40px;\n  height: 40px;\n  background: #faa71b;\n  color: white;\n  padding: 0;\n  font-size: 1.5em;\n  font-weight: 400;\n  border-radius: 100px;\n  display: inline-block;\n  position: relative;\n  top: -20px;\n  left: 25px;\n  opacity: 0;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n}\n.back-button {\n  opacity: 0;\n  -webkit-animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n#edit-profile-button {\n  --background: #d3d3d3;\n  --color: #333;\n  font-size: 0.6em;\n}\n.logout-button {\n  color: white;\n  --background: #e4405f;\n  --background-hover: #dd3252;\n  height: 45px;\n  width: 120px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 52px auto;\n  -webkit-animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n          animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n}\n@-webkit-keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1.2em;\n  }\n\n  span {\n    color: #005191;\n    font-weight: 600;\n    width: 90px;\n    display: inline-block;\n    text-align: right;\n    margin-right: 10px;\n  }\n}\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEZBQUE7VUFBQSxzRkFBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0VBQ0EsaUdBQUE7VUFBQSx5RkFBQTtBQURKO0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsOEZBQUE7VUFBQSxzRkFBQTtBQUhGO0FBTUE7RUFDRSxVQUFBO0VBQ0EseUZBQUE7VUFBQSxpRkFBQTtBQUhGO0FBTUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLGlHQUFBO1VBQUEseUZBQUE7QUFIRjtBQU1BO0VBQ0U7SUFDRSwyQkFBQTtFQUhGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFIRjtBQUNGO0FBSkE7RUFDRTtJQUNFLDJCQUFBO0VBSEY7RUFLQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFO0lBQ0UsNEJBQUE7RUFKRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBSkY7QUFDRjtBQUhBO0VBQ0U7SUFDRSw0QkFBQTtFQUpGO0VBTUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRTtJQUNFLDRCQUFBO0VBTEY7RUFPQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUxGO0FBQ0Y7QUFGQTtFQUNFO0lBQ0UsNEJBQUE7RUFMRjtFQU9BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0U7SUFDRSw0QkFBQTtFQU5GO0VBUUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFORjtBQUNGO0FBREE7RUFDRTtJQUNFLDRCQUFBO0VBTkY7RUFRQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsNEJBQUE7RUFQRjtFQVNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBUEY7QUFDRjtBQUFBO0VBQ0U7SUFDRSw0QkFBQTtFQVBGO0VBU0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFQRjtBQUNGO0FBVUE7RUFDRTtJQUNFLGdCQUFBO0VBUkY7O0VBVUM7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBUEY7QUFDRjtBQVdBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBpb24tYnV0dG9ucyB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cblxuaW9uLWFsZXJ0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTQ0MDVmO1xufVxuXG4jcHJvZmlsZS1pbmZvIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGhlYWRlci1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxcyBmb3J3YXJkcztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHRleHQtc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS41cyBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1oYWxmIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBwYWRkaW5nOiA1MHB4IDAgNTBweCAwO1xuXG4gIC5vcmFuZ2UtYnV0dG9ue1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIC45cyBmb3J3YXJkcztcbiAgfVxufVxuXG5cbnNwYW4ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNwcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDUxOTE7XG4gIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbiNjaGFuZ2UtcHJvLXBpYy1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwaWMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC43NXMgZm9yd2FyZHM7XG59XG5cbi5iYWNrLWJ1dHRvbntcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4jZWRpdC1wcm9maWxlLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDNkMztcbiAgLS1jb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZGQzMjUyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogNTJweCBhdXRvO1xuICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS4zcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyB0ZXh0LXNsaWRlLXVwIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBpYy1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaGVhZGVyLXNsaWRlLXJpZ2h0IHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidXR0b25zLXNsaWRlLXVwIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidXR0b25zLXNsaWRlLXJpZ2h0IHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuICAgc3BhbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzVweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgfVxufSJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid style=\"--ion-grid-padding: 0px\" class=\"ion-text-center ion-hide-md-up\">\n\n    <ion-row class=\"header-half ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <div>\n              <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n                </button>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col id=\"profile-info\" push=\"0.5\" size=\"11\">\n        <p><span>About</span>{{userObject.about}}</p>\n        <p><span>Name:</span> {{userObject.fullName}}</p>\n        <p><span>Email:</span> {{userObject.email}}</p>\n        <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n        <p><span>School:</span> {{userObject.school}}</p>\n        <p><span>Grade:</span> {{userObject.grade}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-button class=\"logout-button\" (click)=\"confirmLogout()\">\n          Logout\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 5%;\">\n\n        <ion-col size=\"4\">\n          <div>\n              <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n              </button>\n          </div>\n        </ion-col>\n\n\n        <ion-col push=\"2\" size=\"6\">\n          <ion-button class=\"blue-button\" style=\"display: inline-block; width: 200px; margin-right: 50px; animation-delay: 2.5s;\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n          <ion-button class=\"blue-button\" style=\"display: inline-block; width: 200px; animation-delay: 3s;\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col id=\"profile-info\" push=\"1\" size=\"10\">\n\n          <h4>Profile Information: </h4>\n          <br>\n\n          <p><span style=\"margin-bottom: 10px;\">About: </span><br>\n            {{userObject.about}}</p>\n\n          <p><span style=\"margin-top: 30px;\">Name:</span> {{userObject.fullName}}</p>\n          <p><span>Email:</span> {{userObject.email}}</p>\n          <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n          <p><span>School:</span> {{userObject.school}}</p>\n          <p><span>Grade:</span> {{userObject.grade}}</p>\n        </ion-col>\n\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button style=\"--background: white; border-radius: 5px; border: 1px solid #d3d3d3; color: #e4405f; margin-bottom: 50px;\" class=\"orange-button\"  (click)=\"confirmLogout()\">\n            Logout\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>";
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