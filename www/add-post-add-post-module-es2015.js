(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Toolbar -->\r\n<ion-header class=\"ion-hide-lg-up\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title slot=\"end\">Add Post</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Mobile -->\r\n  <ion-grid>\r\n    <!-- Header -->\r\n    <ion-row class=\"header\" style=\"padding: 5% 0% 3% 0%;\">\r\n      <ion-col offset=\"3\" size=\"2\">\r\n        <h1>Make a Post</h1>\r\n      </ion-col>\r\n      <ion-col push=\"3\" size=\"2\">\r\n        <ion-button class=\"orange-button\"  (click)=\"back()\">\r\n           Back\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 3%;\">\r\n      <ion-col  size-xs=\"11\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\r\n        <!-- Mobile Text Header -->\r\n        <p class=\"message ion-hide-md-up\"><span class=\"blue-mobile\">Please keep your content clean.</span> In order to maintain a high standard of content, each post will have to be <span class=\"green-mobile\">verified</span> before they are added to the Posts feed. Happy posting, and be inspired!</p>\r\n\r\n        <p class=\"message ion-hide-lg-down\"><span class=\"blue\">Please keep your content clean.</span> In order to maintain a high standard of content, each post will have to be <span class=\"green\">verified</span> before they are added to the Posts feed. Happy posting, and be inspired!</p>\r\n      </ion-col>\r\n\r\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\r\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"post(this.creatorName, this.creatorEmail, this.textPostForm.value.textPost)\">\r\n          <ion-item>\r\n              <ion-textarea\r\n              rows=\"15\"\r\n              auto-grow=\"true\"\r\n              spellcheck=\"true\"\r\n              wrap=\"soft\"\r\n              formControlName=\"textPost\"\r\n              placeholder=\"What do you have to say?\"></ion-textarea>\r\n              <ion-button\r\n                  class=\"orange-button\"\r\n                  type=\"submit\">\r\n                 Add Post\r\n                </ion-button>\r\n            </ion-item>\r\n          </form>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-text-center\" size-lg=\"6\" style=\"margin-bottom: 100px;\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/posts/add-post/add-post-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddPostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageRoutingModule", function() { return AddPostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-post.page */ "./src/app/pages/posts/add-post/add-post.page.ts");




const routes = [
    {
        path: '',
        component: _add_post_page__WEBPACK_IMPORTED_MODULE_3__["AddPostPage"]
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() | verification-verification-module */ "verification-verification-module").then(__webpack_require__.bind(null, /*! ./verification/verification.module */ "./src/app/pages/posts/add-post/verification/verification.module.ts")).then(m => m.VerificationPageModule)
    }
];
let AddPostPageRoutingModule = class AddPostPageRoutingModule {
};
AddPostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPostPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/add-post/add-post.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.module.ts ***!
  \*********************************************************/
/*! exports provided: AddPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-post-routing.module */ "./src/app/pages/posts/add-post/add-post-routing.module.ts");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-post.page */ "./src/app/pages/posts/add-post/add-post.page.ts");







let AddPostPageModule = class AddPostPageModule {
};
AddPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPostPageRoutingModule"]
        ],
        declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_6__["AddPostPage"]]
    })
], AddPostPageModule);



/***/ }),

/***/ "./src/app/pages/posts/add-post/add-post.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background: #005191;\n}\n.header h1 {\n  color: white;\n  font-size: 2em;\n}\n.message p {\n  padding: 10px;\n}\nion-item {\n  --background: none;\n  --border-color: none;\n  --border-radius: 5px;\n}\nion-textarea {\n  --background: white;\n  --border-color: none;\n  padding: 10px 0 0 20px;\n}\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n.green {\n  -webkit-animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n          animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n  font-size: 1.6em;\n}\n.blue {\n  -webkit-animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n          animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n  font-size: 1.6em;\n}\n.green-mobile {\n  -webkit-animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n          animation: green 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;\n  font-size: 1em;\n}\n.blue-mobile {\n  -webkit-animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n          animation: blue 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;\n  font-size: 1em;\n}\n@-webkit-keyframes green {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n    font-weight: 800;\n  }\n}\n@keyframes green {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n    font-weight: 800;\n  }\n}\n@-webkit-keyframes blue {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n  }\n}\n@keyframes blue {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n  }\n}\n@-webkit-keyframes green-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n  }\n}\n@keyframes green-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #1baf88;\n  }\n}\n@-webkit-keyframes blue-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n    font-size: 1em;\n  }\n}\n@keyframes blue-mobile {\n  0% {\n    color: black;\n  }\n  100% {\n    color: #005191;\n    font-weight: 800;\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvQzpcXFVzZXJzXFxhZ29vZFxcU29mdHdhcmUgRGV2IFByb2plY3RzXFxKT1VSTmlcXFVuaXRlZCBXYXkgRllGXFxNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxwb3N0c1xcYWRkLXBvc3RcXGFkZC1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDSjtBREtFO0VBQ0UsYUFBQTtBQ0ZKO0FETUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNIRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLGdCQUFBO0FDSkY7QURRQTtFQUNFLCtFQUFBO1VBQUEsdUVBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEU0E7RUFDRSxnRkFBQTtVQUFBLHdFQUFBO0VBQ0EsY0FBQTtBQ05GO0FEVUE7RUFDRSwrRUFBQTtVQUFBLHVFQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEV0E7RUFDRTtJQUNFLFlBQUE7RUNSRjtFRFdBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDVEY7QUFDRjtBRENBO0VBQ0U7SUFDRSxZQUFBO0VDUkY7RURXQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQ1RGO0FBQ0Y7QURZQTtFQUNFO0lBQ0UsWUFBQTtFQ1ZGO0VEYUE7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNYRjtBQUNGO0FER0E7RUFDRTtJQUNFLFlBQUE7RUNWRjtFRGFBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDWEY7QUFDRjtBRGNBO0VBQ0U7SUFDRSxZQUFBO0VDWkY7RURlQTtJQUNFLGNBQUE7RUNiRjtBQUNGO0FETUE7RUFDRTtJQUNFLFlBQUE7RUNaRjtFRGVBO0lBQ0UsY0FBQTtFQ2JGO0FBQ0Y7QURnQkE7RUFDRTtJQUNFLFlBQUE7RUNkRjtFRGlCQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNmRjtBQUNGO0FETUE7RUFDRTtJQUNFLFlBQUE7RUNkRjtFRGlCQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNmRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjMDA1MTkxO1xyXG5cclxuICBoMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJvcmRlci1jb2xvcjogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWJvcmRlci1jb2xvcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAyMHB4O1xyXG59XHJcblxyXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDA7XHJcbn1cclxuXHJcbmg2IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgYW5pbWF0aW9uOiBncmVlbiAwLjVzIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpIDJzIGZvcndhcmRzO1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcblxyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYW5pbWF0aW9uOiBibHVlIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMXMgZm9yd2FyZHM7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuXHJcbi5ncmVlbi1tb2JpbGUge1xyXG4gIGFuaW1hdGlvbjogZ3JlZW4gMC41cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSAycyBmb3J3YXJkcztcclxuICBmb250LXNpemU6IDFlbTtcclxuXHJcbn1cclxuXHJcbi5ibHVlLW1vYmlsZSB7XHJcbiAgYW5pbWF0aW9uOiBibHVlIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMXMgZm9yd2FyZHM7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyZWVuIHtcclxuICAwJSB7XHJcbiAgICBjb2xvcjogYmxhY2tcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6ICMxYmFmODg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBibHVlIHtcclxuICAwJSB7XHJcbiAgICBjb2xvcjogYmxhY2tcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6ICMwMDUxOTE7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBncmVlbi1tb2JpbGUge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiBibGFja1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBjb2xvcjogIzFiYWY4ODtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmx1ZS1tb2JpbGUge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiBibGFja1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBjb2xvcjogIzAwNTE5MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5oZWFkZXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ubWVzc2FnZSBwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDIwcHg7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAwO1xufVxuXG5oNiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZ3JlZW4ge1xuICBhbmltYXRpb246IGdyZWVuIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMnMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbi5ibHVlIHtcbiAgYW5pbWF0aW9uOiBibHVlIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMXMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbi5ncmVlbi1tb2JpbGUge1xuICBhbmltYXRpb246IGdyZWVuIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgMnMgZm9yd2FyZHM7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uYmx1ZS1tb2JpbGUge1xuICBhbmltYXRpb246IGJsdWUgMC41cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSAxcyBmb3J3YXJkcztcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbkBrZXlmcmFtZXMgZ3JlZW4ge1xuICAwJSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjMWJhZjg4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmx1ZSB7XG4gIDAlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuQGtleWZyYW1lcyBncmVlbi1tb2JpbGUge1xuICAwJSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjMWJhZjg4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsdWUtbW9iaWxlIHtcbiAgMCUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/posts/add-post/add-post.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.ts ***!
  \*******************************************************/
/*! exports provided: AddPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPage", function() { return AddPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AddPostPage = class AddPostPage {
    constructor(router, loading, posts, profile, formBuilder) {
        this.router = router;
        this.loading = loading;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        // Do some sort of Validation Later
        this.validationMessages = {};
    }
    ngOnInit() {
        this.textPostForm = this.formBuilder.group({
            textPost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.profile.getUserDetails().subscribe(details => {
            console.log(details);
            this.creatorEmail = details['email'];
            this.creatorName = details['fullName'];
        });
    }
    back() {
        this.router.navigate(['/home/posts']);
    }
    post(creatorName, creatorEmail, post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            yield this.posts.addPost(creatorName, creatorEmail, post).subscribe(data => {
                console.log(data);
            });
            yield this.router.navigate(['home/posts/add-post/verification']);
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Sending post to be Verified...',
                spinner: 'bubbles',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
AddPostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-post.page.scss */ "./src/app/pages/posts/add-post/add-post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], AddPostPage);



/***/ })

}]);
//# sourceMappingURL=add-post-add-post-module-es2015.js.map