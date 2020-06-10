(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/posts/add-post/add-post.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/posts/add-post/add-post.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Add Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"header ion-hide-md-down ion-justify-content-center ion-text-center\"  style=\"margin: 2% 0% 3% 0%;\">\n      <ion-col size=\"5\">\n        <h1>New Post</h1>\n      </ion-col>\n      <ion-col push=\"\" size=\"5\">\n        <ion-button class=\"blue-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-lg-up\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <!-- Desktop Text Header -->\n        <p class=\"message ion-hide-md-down\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"textPostForm.value.textPost.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.value.textPost) : null\">\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-item class=\"text-input ion-no-padding\">\n                <ion-textarea\n                  rows=\"15\"\n                  auto-grow=\"true\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  formControlName=\"textPost\"\n                  placeholder=\"What do you have to say?\"\n                  (keydown.control.enter)=\"textPostForm.value.textPost.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.value.textPost) : null\">\n                </ion-textarea>\n              </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item style=\"margin: 15px 0 20px;\" lines=\"none\">\n                  <ion-button\n                  class=\"orange-button\"\n                  type=\"submit\">\n                    Submit\n                  </ion-button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-lg=\"6\" style=\"margin-bottom: 100px;\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-post.page */ "./src/app/pages/posts/add-post/add-post.page.ts");




var routes = [
    {
        path: '',
        component: _add_post_page__WEBPACK_IMPORTED_MODULE_3__["AddPostPage"]
    },
    {
        path: 'verification',
        loadChildren: function () { return __webpack_require__.e(/*! import() | verification-verification-module */ "verification-verification-module").then(__webpack_require__.bind(null, /*! ./verification/verification.module */ "./src/app/pages/posts/add-post/verification/verification.module.ts")).then(function (m) { return m.VerificationPageModule; }); }
    }
];
var AddPostPageRoutingModule = /** @class */ (function () {
    function AddPostPageRoutingModule() {
    }
    AddPostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddPostPageRoutingModule);
    return AddPostPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-post-routing.module */ "./src/app/pages/posts/add-post/add-post-routing.module.ts");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-post.page */ "./src/app/pages/posts/add-post/add-post.page.ts");







var AddPostPageModule = /** @class */ (function () {
    function AddPostPageModule() {
    }
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
    return AddPostPageModule;
}());



/***/ }),

/***/ "./src/app/pages/posts/add-post/add-post.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: unset;\n  height: 36px;\n  margin-top: 20px;\n  margin-bottom: 4px;\n  position: unset;\n}\n\nion-title {\n  margin: 0;\n}\n\n.message {\n  font-size: 1.2em;\n  text-align: justify;\n}\n\nion-item {\n  --background: none;\n  --border-color: none;\n  --border-radius: 5px;\n  --inner-padding-end: 0;\n}\n\n.text-input {\n  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);\n  padding-left: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n@media only screen and (max-width: 576px) {\n  .text-input {\n    box-shadow: none;\n    background: #edf3f8;\n  }\n\n  ion-textarea {\n    background: #edf3f8;\n  }\n}\n\nion-textarea {\n  --background: white;\n  --border-color: none;\n  padding: 5px 0 0 10px;\n  font-size: 1em;\n}\n\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VERUE7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbiAgd2lkdGg6IHVuc2V0O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHVuc2V0O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnRleHQtaW5wdXQge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAudGV4dC1pbnB1dCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICB9XG5cbiAgaW9uLXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICB9XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICBwYWRkaW5nOiA1cHggMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iLCIuYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xuICB3aWR0aDogdW5zZXQ7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG4udGV4dC1pbnB1dCB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LWlucHV0IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIH1cblxuICBpb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIH1cbn1cbmlvbi10ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICBwYWRkaW5nOiA1cHggMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AddPostPage = /** @class */ (function () {
    function AddPostPage(router, loading, posts, profile, formBuilder) {
        this.router = router;
        this.loading = loading;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        // Do some sort of Validation Later
        this.validationMessages = {};
    }
    AddPostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.textPostForm = this.formBuilder.group({
            textPost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.profile.getUserDetails().subscribe(function (details) {
            console.log(details);
            _this.creatorEmail = details['email'];
            _this.creatorName = details['fullName'];
            _this.creatorProfilePicture = details['profilePicture'];
        });
    };
    AddPostPage.prototype.back = function () {
        this.router.navigate(['/home/posts']);
    };
    AddPostPage.prototype.post = function (creatorName, creatorEmail, creatorProfilePicture, post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.posts.addPost(creatorName, creatorEmail, creatorProfilePicture, post).subscribe(function (data) {
                                console.log(data);
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigate(['home/posts/add-post/verification'])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPostPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            message: 'Sending post to be Verified...',
                            spinner: 'bubbles',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPostPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! raw-loader!./add-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/posts/add-post/add-post.page.html"),
            styles: [__webpack_require__(/*! ./add-post.page.scss */ "./src/app/pages/posts/add-post/add-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AddPostPage);
    return AddPostPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-post-add-post-module-es5.js.map