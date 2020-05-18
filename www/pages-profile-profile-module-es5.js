(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid style=\"--ion-grid-padding: 0px\" class=\"ion-text-center ion-hide-md-up\">\n\n    <ion-row class=\"header-half ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <div>\n              <img id=\"profile-picture\" src=\"../../assets/batman-pro-pic.png\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n                </button>\n          </div>\n        </ion-col>\n\n        <!-- <ion-col size=\"11\" offset=\"0.5\">\n          <ion-button class=\"orange-button\" (click)=\"viewFairs()\">\n            View Fairs\n          </ion-button>\n        </ion-col> -->\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col id=\"profile-info\" size=\"6\">\n\n        <h4>Profile Information: </h4>\n        <br>\n\n        <p><span>Name</span>: {{userObject.fullName}}</p>\n        <p><span>Email</span>: {{userObject.email}}</p>\n        <p><span>Gender</span>: {{userObject.gender}}</p>\n        <p><span>Address</span>: {{userObject.addressOne}}, {{userObject.addressTwo}}</p>\n        <p><span>Phone</span>: {{userObject.phone}}</p>\n        <p><span>City</span>: {{userObject.city}}</p>\n        <p><span>State</span>: {{userObject.state}}</p>\n        <p><span>Zip</span>: {{userObject.zip}}</p>\n        <p><span>School</span>: {{userObject.school}}</p>\n        <p><span>Grade</span>: {{userObject.grade}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-button style=\"--background: white; border-radius: 5px; border: 1px solid #d3d3d3; color: #e4405f; margin-bottom: 50px;\" class=\"orange-button\"  (click)=\"confirmLogout()\">\n          Logout\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid style=\"--ion-grid-padding: 0px; max-width: 1024px;\" class=\"ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 5%;\">\n\n          <ion-col size=\"4\">\n            <div>\n                <img id=\"profile-picture\" src=\"../../assets/batman-pro-pic.png\" alt=\"User Profile Picture\">\n                <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                    +\n                </button>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <ion-button class=\"orange-button\" (click)=\"editPage()\" style=\"margin-right: 16px\">\n              Edit Profile\n            </ion-button>\n            <ion-button class=\"orange-button\" (click)=\"updateResume()\">\n              View Resume\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"4\">\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col id=\"profile-info\" size=\"12\">\n\n          <h4>Profile Information: </h4>\n          <br>\n\n          <p><span>Name</span>: {{userObject.fullName}}</p>\n          <p><span>Email</span>: {{userObject.email}}</p>\n          <p><span>Gender</span>: {{userObject.gender}}</p>\n          <p><span>Address</span>: {{userObject.addressOne}}, {{userObject.addressTwo}}</p>\n          <p><span>Phone</span>: {{userObject.phone}}</p>\n          <p><span>City</span>: {{userObject.city}}</p>\n          <p><span>State</span>: {{userObject.state}}</p>\n          <p><span>Zip</span>: {{userObject.zip}}</p>\n          <p><span>School</span>: {{userObject.school}}</p>\n          <p><span>Grade</span>: {{userObject.grade}}</p>\n        </ion-col>\n\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button style=\"--background: white; border-radius: 5px; border: 1px solid #d3d3d3; color: #e4405f; margin-bottom: 50px;\" class=\"orange-button\"  (click)=\"confirmLogout()\">\n            Logout\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");
    /* harmony import */


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");

    let ProfilePageModule = class ProfilePageModule {};
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
      }])],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  display: none;\n}\nion-header ion-buttons ion-button {\n  color: white;\n}\nion-toolbar {\n  --color: #005191;\n}\nion-alert {\n  --background: #e4405f;\n}\n#profile-info {\n  height: auto;\n  margin-top: 20px;\n  text-align: left;\n  padding: 25px;\n}\nh4 {\n  color: #777;\n}\n.header-half {\n  height: auto;\n  background-image: -webkit-gradient(linear, left top, right bottom, from(rgba(230, 230, 230, 0.4)), to(rgba(200, 200, 200, 0.9)));\n  background-image: linear-gradient(to bottom right, rgba(230, 230, 230, 0.4), rgba(200, 200, 200, 0.9));\n  background-attachment: fixed;\n  padding: 50px 0 50px 0;\n}\nspan {\n  color: #005191;\n  font-weight: 600;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 0 auto;\n  display: block;\n}\n#change-pro-pic-button {\n  width: 30px;\n  height: 30px;\n  background: #0d467b;\n  color: white;\n  font-size: 1.5em;\n  font-weight: 400;\n  border-radius: 100px;\n  display: inline-block;\n  position: relative;\n  top: -20px;\n  left: 25px;\n}\n#edit-profile-button {\n  --background: #d3d3d3;\n  --color: #333;\n  font-size: 0.6em;\n}\n.logout-button {\n  color: red;\n}\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZ0lBQUE7RUFBQSxzR0FBQTtFQUlBLDRCQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRFFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0xGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0xGO0FEUUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxVQUFBO0FDTEY7QURRQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGlvbi1idXR0b25zIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuXG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbmg0IHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5oZWFkZXItaGFsZiB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSByaWdodCwgXG4gICAgcmdiYSgyMzAsMjMwLDIzMCwwLjQpLCBcbiAgICByZ2JhKDIwMCwyMDAsMjAwLDAuOSkpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiA1MHB4IDAgNTBweCAwO1xufVxuXG5cbnNwYW4ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICMwZDQ2N2I7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNXB4O1xufVxuXG4jZWRpdC1wcm9maWxlLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDNkMztcbiAgLS1jb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICBjb2xvcjogcmVkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjY2hhbmdlLXByby1waWMtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICB9XG59ICIsImlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG5cbmlvbi1hbGVydCB7XG4gIC0tYmFja2dyb3VuZDogI2U0NDA1Zjtcbn1cblxuI3Byb2ZpbGUtaW5mbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuaDQge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmhlYWRlci1oYWxmIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNCksIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC45KSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDUwcHggMCA1MHB4IDA7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICMwZDQ2N2I7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNXB4O1xufVxuXG4jZWRpdC1wcm9maWxlLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2QzZDNkMztcbiAgLS1jb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICBjb2xvcjogcmVkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjY2hhbmdlLXByby1waWMtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ProfilePage = class ProfilePage {
      constructor(auth, profile, storage, router, toast, alert, loading, navCtrl) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.userObject = {
          fullName: '',
          addressOne: '',
          addressTwo: '',
          phone: '',
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

      ngOnInit() {
        this.profile.getUserDetails().subscribe(res => {
          console.log(res);
          const fullName = res['fullName'];
          const addressOne = res['addressOne'];
          const addressTwo = res['addressTwo'];
          const phone = res['phone'];
          const city = res['city'];
          const state = res['state'];
          const zip = res['zip'];
          const gender = res['gender'];
          const dob = res['dob'];
          const school = res['school'];
          const grade = res['grade'];
          const profilePicture = res['profilePicture'];
          const resume = res['resume'];
          const email = res['email']; // Send initial profile values to Profile Service;
          // Have to initial these values from the Profile Component

          this.profile.fullName.next(fullName);
          this.profile.addressOne.next(addressOne);
          this.profile.addressTwo.next(addressTwo);
          this.profile.phone.next(phone);
          this.profile.city.next(city);
          this.profile.state.next(state);
          this.profile.zip.next(zip);
          this.profile.gender.next(gender);
          this.profile.dob.next(dob);
          this.profile.school.next(school);
          this.profile.grade.next(grade);
          this.profile.profilePicture.next(profilePicture);
          this.profile.resume.next(resume);
          this.profile.email.next(email); // Subscribe to all the B.Subjects to get live updates of value changes.

          this.profile.fullName.subscribe(data => {
            this.userObject.fullName = data;
          });
          this.profile.addressOne.subscribe(data => {
            this.userObject.addressOne = data;
          });
          this.profile.addressTwo.subscribe(data => {
            this.userObject.addressTwo = data;
          });
          this.profile.phone.subscribe(data => {
            this.userObject.phone = data;
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

      ngOnDestroy() {}

      clearToken() {
        // ONLY FOR TESTING!
        this.storage.remove('access_token');
        const toast = this.toast.create({
          message: 'JWT removed',
          duration: 3000
        });
        toast.then(toast => toast.present());
      }

      viewFairs() {
        this.router.navigate(['/fairs']);
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
        this.router.navigate(['/home/profile/resume', this.userObject.resume]);
      }

      confirmLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancelling logout');
                this.router.navigate(['/home/profile']);
              }
            }, {
              text: 'Logout',
              handler: () => {
                console.log('Logging out');
                this.auth.logout();
                loading.present();
                toast.then(t => t.present());
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    ProfilePage.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }];

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map