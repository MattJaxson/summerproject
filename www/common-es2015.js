(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "6/gD":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let PhotoService = class PhotoService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    // Testing
    imageUpload(imageForm) {
        console.log('image uploading');
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/photo/upload-profile-picture`, imageForm);
    }
    changeProfilePicture(imageForm) {
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`, imageForm);
    }
    updatePostPhotos(newPhoto, email) {
        console.log(newPhoto);
        return this.http.post(`${this.BACKEND_URL}/api/photo/update-all-post-pictures`, newPhoto, email).subscribe();
    }
    boothPartnerLogo(logo) {
        console.log('both partner uploading');
        console.log(logo);
        return this.http.post(`${this.BACKEND_URL}/api/photo/upload-booth-partner-logo`, logo);
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PhotoService);



/***/ }),

/***/ "6kEE":
/*!************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.module.ts ***!
  \************************************************************/
/*! exports provided: ReportConvoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConvoPageModule", function() { return ReportConvoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-convo-routing.module */ "Ip59");
/* harmony import */ var _report_convo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-convo.page */ "pCvL");







let ReportConvoPageModule = class ReportConvoPageModule {
};
ReportConvoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportConvoPageRoutingModule"]
        ],
        declarations: [_report_convo_page__WEBPACK_IMPORTED_MODULE_6__["ReportConvoPage"]]
    })
], ReportConvoPageModule);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "77Eq":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/view-resume/view-resume.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col push-lg=\"0.5\" size=\"2\">\n        <h1>View Resume</h1>\n      </ion-col>\n      <ion-col push-lg=\"6.4\" size=\"6\">\n        <ion-button (click)=\"updateResume()\" class=\"orange-button\" style=\"width: 150px;\">UPDATE</ion-button>\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n          Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"11\">\n        <hr style=\"background-color: #666;\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n        <h4>You can View and Update your Resume here</h4>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n\n      </ion-col>\n      <ion-button (click)=\"updateResume()\" class=\"orange-button ion-hide-md-up\" style=\"width: 150px;\">UPDATE</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "7UM6":
/*!******************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "7vZz":
/*!**********************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NewMessageStudentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageStudentPageRoutingModule", function() { return NewMessageStudentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_message_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-message-student.page */ "gLVQ");




const routes = [
    {
        path: '',
        component: _new_message_student_page__WEBPACK_IMPORTED_MODULE_3__["NewMessageStudentPage"]
    }
];
let NewMessageStudentPageRoutingModule = class NewMessageStudentPageRoutingModule {
};
NewMessageStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewMessageStudentPageRoutingModule);



/***/ }),

/***/ "8Vcj":
/*!************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 20px;\n}\n\nion-textarea {\n  background: rgba(224, 224, 224, 0.2);\n  padding: 8px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydC1jb252by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InJlcG9ydC1jb252by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59Il19 */");

/***/ }),

/***/ "9CtM":
/*!******************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.module.ts ***!
  \******************************************************/
/*! exports provided: EditPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostPageModule", function() { return EditPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-post-routing.module */ "OHV1");
/* harmony import */ var _edit_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-post.page */ "VPH/");







let EditPostPageModule = class EditPostPageModule {
};
EditPostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPostPageRoutingModule"]
        ],
        declarations: [_edit_post_page__WEBPACK_IMPORTED_MODULE_6__["EditPostPage"]]
    })
], EditPostPageModule);



/***/ }),

/***/ "AhZb":
/*!**************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.module.ts ***!
  \**************************************************************************/
/*! exports provided: NewMessageStudentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageStudentPageModule", function() { return NewMessageStudentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-message-student-routing.module */ "7vZz");
/* harmony import */ var _new_message_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-message-student.page */ "gLVQ");







let NewMessageStudentPageModule = class NewMessageStudentPageModule {
};
NewMessageStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewMessageStudentPageRoutingModule"]
        ],
        declarations: [_new_message_student_page__WEBPACK_IMPORTED_MODULE_6__["NewMessageStudentPage"]]
    })
], NewMessageStudentPageModule);



/***/ }),

/***/ "D48j":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.ts ***!
  \**********************************************************************/
/*! exports provided: ViewResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResumePage", function() { return ViewResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-resume.page.html */ "77Eq");
/* harmony import */ var _view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-resume.page.scss */ "FsrL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/profile.service */ "Aso2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







let ViewResumePage = class ViewResumePage {
    constructor(router, profile, domSanitizer) {
        this.router = router;
        this.profile = profile;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            console.log(data);
            this.profile.resume.next(data['resume']);
        });
        this.profile.resume.subscribe(data => {
            this.resume = data;
        });
    }
    sanitizeImageUrl(imageUrl) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
    updateResume() {
        console.log('Updating Resume from View Resume page');
        this.router.navigate(['/home/profile/update-resume']);
    }
};
ViewResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
ViewResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-resume',
        template: _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
], ViewResumePage);



/***/ }),

/***/ "FsrL":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  margin: 30px auto;\n  color: #005191;\n}\n\n.orange-button {\n  position: relative;\n  top: 4px;\n  right: 20px;\n  margin: 30px 0px 100px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMzBweCAwcHggMTAwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "Ip59":
/*!********************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ReportConvoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConvoPageRoutingModule", function() { return ReportConvoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_convo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-convo.page */ "pCvL");




const routes = [
    {
        path: '',
        component: _report_convo_page__WEBPACK_IMPORTED_MODULE_3__["ReportConvoPage"]
    }
];
let ReportConvoPageRoutingModule = class ReportConvoPageRoutingModule {
};
ReportConvoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportConvoPageRoutingModule);



/***/ }),

/***/ "KWWs":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let NotificationsService = class NotificationsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    getNotifications(email) {
        console.log('Getting Notifications');
        console.log(email);
        return this.http.post(`${this.BACKEND_URL}/api/notifications`, { email: email });
    }
    clearNotifications(email) {
        console.log('Clearing Notifications');
        console.log(email);
        return this.http.post(`${this.BACKEND_URL}/api/notifications/clear-notifications`, { email: email });
    }
    commentNotification(instigatingUser, recievingUser, postID, commentID) {
        console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/notifications/comment-on-post-notification`, { instigatingUser, recievingUser, postID, commentID });
    }
    replyNotification(instigatingUser, recievingUser, postID, commentID, replyID) {
        console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/notifications/reply-on-comment-notification`, { instigatingUser, recievingUser, postID, commentID, replyID });
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NotificationsService);



/***/ }),

/***/ "LGlg":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/new-message-mentor/new-message-mentor.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "OHV1":
/*!**************************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EditPostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostPageRoutingModule", function() { return EditPostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-post.page */ "VPH/");




const routes = [
    {
        path: '',
        component: _edit_post_page__WEBPACK_IMPORTED_MODULE_3__["EditPostPage"]
    }
];
let EditPostPageRoutingModule = class EditPostPageRoutingModule {
};
EditPostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPostPageRoutingModule);



/***/ }),

/***/ "OWIS":
/*!************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.module.ts ***!
  \************************************************************************/
/*! exports provided: NewMessageMentorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageMentorPageModule", function() { return NewMessageMentorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-message-mentor-routing.module */ "ddZ5");
/* harmony import */ var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-message-mentor.page */ "R7fP");







let NewMessageMentorPageModule = class NewMessageMentorPageModule {
};
NewMessageMentorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewMessageMentorPageRoutingModule"]
        ],
        declarations: [_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_6__["NewMessageMentorPage"]]
    })
], NewMessageMentorPageModule);



/***/ }),

/***/ "R7fP":
/*!**********************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.ts ***!
  \**********************************************************************/
/*! exports provided: NewMessageMentorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageMentorPage", function() { return NewMessageMentorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_message_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-message-mentor.page.html */ "LGlg");
/* harmony import */ var _new_message_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-message-mentor.page.scss */ "w8Iy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let NewMessageMentorPage = class NewMessageMentorPage {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    cancel() {
        this.modal.dismiss();
    }
};
NewMessageMentorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
NewMessageMentorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-message-mentor',
        template: _raw_loader_new_message_mentor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_message_mentor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], NewMessageMentorPage);



/***/ }),

/***/ "RbX/":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-convo/report-convo.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Report Conversation</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Mobile -->\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <h5>Reporting</h5>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/batman-pro-pic.png\" />\n          </ion-avatar>\n          <ion-label>Name</ion-label>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <ion-textarea rows=\"12\" required placeholder=\"Why are you reporting?\"></ion-textarea>\n        </ion-item>\n\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <ion-button class=\"blue-button\" (click)=\"reportAlert()\">\n          Report\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "SXzz":
/*!**************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ldy1tZXNzYWdlLXN0dWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRiIsImZpbGUiOiJuZXctbWVzc2FnZS1zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkICM5OTk7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XG4gIGhlaWdodDogNjBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG59XG5cbi5uby11c2VycyB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59Il19 */");

/***/ }),

/***/ "TH4B":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ViewResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResumePageRoutingModule", function() { return ViewResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-resume.page */ "D48j");




const routes = [
    {
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_3__["ViewResumePage"]
    }
];
let ViewResumePageRoutingModule = class ViewResumePageRoutingModule {
};
ViewResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewResumePageRoutingModule);



/***/ }),

/***/ "VPH/":
/*!****************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.page.ts ***!
  \****************************************************/
/*! exports provided: EditPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostPage", function() { return EditPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_post_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-post.page.html */ "zMmi");
/* harmony import */ var _edit_post_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-post.page.scss */ "7UM6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");








let EditPostPage = class EditPostPage {
    constructor(formBuilder, modal, navParams, loading, posts, alert, postEmitterService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.posts = posts;
        this.alert = alert;
        this.postEmitterService = postEmitterService;
    }
    ngOnInit() {
        this.postID = this.navParams.get('postID');
        this.post = this.navParams.get('post');
        console.log(this.post);
        // To collect comment data
        this.editPostForm = this.formBuilder.group({
            newPost: this.post
        });
    }
    cancel() {
        console.log('cancelling');
        this.modal.dismiss();
    }
    refreshComment() {
        this.postEmitterService.postPageRefresh();
    }
    edit(newPost) {
        console.log('editting');
        this.posts.editPost(this.postID, newPost.newPost).subscribe(post => {
            console.log(post);
            this.editLoading(post['post']);
        });
    }
    editLoading(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Editing your Post...',
                duration: 1000
            });
            yield loading.present();
            console.log(post.post);
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.posts.postsSubject$.next(post);
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your Post has been edited.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
EditPostPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"] }
];
EditPostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-post',
        template: _raw_loader_edit_post_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_post_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__["PostPageEmitterService"]])
], EditPostPage);



/***/ }),

/***/ "XzoX":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/new-message-student/new-message-student.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" color=\"secondary\" (click)=\"newChatroom()\">\n        Next\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\" (keyup)=\"search($event)\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item *ngFor=\"let user of users\" lines=\"none\" (click)=\"newChatroom(user.name, user.email, user.profilePicture)\">\n          <ion-avatar slot=\"start\">\n            <img src={{user.profilePicture}}>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{user.name}}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col *ngIf=\"this.users.length == 0\" class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Y19J":
/*!**************************************************!*\
  !*** ./src/app/services/student-chat.service.ts ***!
  \**************************************************/
/*! exports provided: StudentChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentChatService", function() { return StudentChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




// export class SocketNameSpace extends Socket {
//   constructor(socketConfig: SocketIoConfig) {
//     // TODO: Study this a little more
//     // super()
//     super(socketConfig);
//   }
// }
let StudentChatService = class StudentChatService {
    constructor(router) {
        this.router = router;
        this.conversations$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
};
StudentChatService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StudentChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StudentChatService);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "bUUK":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResumePageModule", function() { return ViewResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-resume-routing.module */ "TH4B");
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-resume.page */ "D48j");







let ViewResumePageModule = class ViewResumePageModule {
};
ViewResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewResumePageRoutingModule"]
        ],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_6__["ViewResumePage"]]
    })
], ViewResumePageModule);



/***/ }),

/***/ "ddZ5":
/*!********************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: NewMessageMentorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageMentorPageRoutingModule", function() { return NewMessageMentorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-message-mentor.page */ "R7fP");




const routes = [
    {
        path: '',
        component: _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__["NewMessageMentorPage"]
    }
];
let NewMessageMentorPageRoutingModule = class NewMessageMentorPageRoutingModule {
};
NewMessageMentorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewMessageMentorPageRoutingModule);



/***/ }),

/***/ "gLVQ":
/*!************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.page.ts ***!
  \************************************************************************/
/*! exports provided: NewMessageStudentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageStudentPage", function() { return NewMessageStudentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_message_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-message-student.page.html */ "XzoX");
/* harmony import */ var _new_message_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-message-student.page.scss */ "SXzz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/student-chat.service */ "Y19J");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let NewMessageStudentPage = class NewMessageStudentPage {
    constructor(modal, studentChat, profile, router) {
        this.modal = modal;
        this.studentChat = studentChat;
        this.profile = profile;
        this.router = router;
    }
    ngOnInit() {
        this.profile.getUserDetails().subscribe(data => {
            this.requestingUserFullname = data['fullName'];
            this.requestingUserEmail = data['email'];
            this.requestingUserPhoto = data['profilePicture'];
            this.profile.getAllUsers()
                .subscribe(users => {
                // Make sure to remove the Client user from list of users to search through
                // There is no need to message yourself.
                const usersArray = Object.values(users);
                const index = usersArray
                    .map(user => {
                    return user.email;
                })
                    .indexOf(this.requestingUserEmail);
                usersArray.splice(index, 1);
                this.users = usersArray;
                this.loadedUsers = usersArray;
            });
        });
    }
    search(event) {
        this.initializeItems();
        console.log(this.loadedUsers);
        let search = event.target.value;
        console.log(search);
        this.users = this.users.filter(currentUsers => {
            if (!currentUsers || !search) {
                console.log('No results from that search');
                this.noSearchInput = true;
            }
            if (currentUsers.name && search) {
                if (currentUsers.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                    this.searchTerm = search;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
            this.noSearchInput = true;
        });
    }
    initializeItems() {
        this.users = this.loadedUsers;
    }
    newChatroom(respondingUserFullName, respondingUserEmail, respondingUserPhoto) {
        this.profile.getUserDetails()
            .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If Client user has alreadt started a conversation with a user, direct that user to their conversations chat page.
            let conversations = data['studentChat'];
            for (const convo of conversations) {
                if (convo.requestingUserEmail === respondingUserEmail || convo.respondingUserEmail === respondingUserEmail) {
                    console.log('You have already started a conversation with this user');
                    yield this.cancel();
                    // tslint:disable-next-line: max-line-length
                    return yield this.router.navigate(['home/posts/student-chat/chat-page', convo.chatId, this.requestingUserFullname, this.requestingUserPhoto, this.requestingUserEmail]);
                }
            }
            // tslint:disable-next-line: max-line-length
            // this.studentChat.newChatroom(this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, respondingUserFullName, respondingUserEmail, respondingUserPhoto);
            // this.studentChat.newChatRoom.subscribe(
            //   d => {
            //     this.studentChat.conversations$.next(Object.values(d));
            //   }
            // );
            this.cancel();
        }));
    }
    cancel() {
        this.modal.dismiss();
    }
};
NewMessageStudentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__["StudentChatService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NewMessageStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-message-student',
        template: _raw_loader_new_message_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_message_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__["StudentChatService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], NewMessageStudentPage);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "pCvL":
/*!**********************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.page.ts ***!
  \**********************************************************/
/*! exports provided: ReportConvoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConvoPage", function() { return ReportConvoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_convo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-convo.page.html */ "RbX/");
/* harmony import */ var _report_convo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-convo.page.scss */ "8Vcj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ReportConvoPage = class ReportConvoPage {
    constructor(modal, alert, toast) {
        this.modal = modal;
        this.alert = alert;
        this.toast = toast;
    }
    ngOnInit() {
    }
    cancel() {
        this.modal.dismiss();
    }
    reportAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: '',
                header: 'Are you sure you want to report this conversation?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.reportedToast();
                            yield this.modal.dismiss();
                        })
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    reportedToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                cssClass: 'favorited-toast',
                message: `You have reported you conversation with ---`,
                duration: 2000
            });
            toast.present();
        });
    }
};
ReportConvoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ReportConvoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-convo',
        template: _raw_loader_report_convo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_convo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], ReportConvoPage);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "w8Iy":
/*!************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ldy1tZXNzYWdlLW1lbnRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6Im5ldy1tZXNzYWdlLW1lbnRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLm5vLXVzZXJzIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn0iXX0= */");

/***/ }),

/***/ "wbj2":
/*!**************************************************************!*\
  !*** ./src/app/emitters/single-post-page-emitter.service.ts ***!
  \**************************************************************/
/*! exports provided: SinglePostPageEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostPageEmitterService", function() { return SinglePostPageEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let SinglePostPageEmitterService = class SinglePostPageEmitterService {
    constructor() {
        this.invokeSinglePostPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    singlePostPageRefresh() {
        this.invokeSinglePostPageRefresh.emit();
    }
};
SinglePostPageEmitterService.ctorParameters = () => [];
SinglePostPageEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SinglePostPageEmitterService);



/***/ }),

/***/ "zMmi":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-post/edit-post.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editPostForm\" (ngSubmit)=\"edit(this.editPostForm.value)\">\n        <ion-textarea\n          (keydown.control.enter)=\"edit(this.editPostForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newPost\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map