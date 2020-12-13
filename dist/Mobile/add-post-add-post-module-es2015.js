(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Add Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"header ion-hide-md-down ion-justify-content-center ion-text-center\"  style=\"margin: 2% 0% 3% 0%;\">\n      <ion-col size=\"5\">\n        <h1>New Post</h1>\n      </ion-col>\n      <ion-col push=\"\" size=\"5\">\n        <ion-button class=\"blue-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-lg-up\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <!-- Desktop Text Header -->\n        <p class=\"message ion-hide-md-down\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"textPostForm.value.post.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.controls.post.value, this.textPostForm.controls.title.value) : null\">\n\n          <ion-list class=\"line-input\">\n            <ion-item>\n              <ion-input\n              #titleChars\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              formControlName=\"title\"\n              placeholder=\"Title\"></ion-input>\n            </ion-item>\n            <p class=\"char-limit\">{{titleChars.value.length}} / 100 character limit</p>\n\n              <ion-item>\n                <ion-textarea\n                  #postChars\n                  rows=\"10\"\n                  auto-grow=\"true\"\n                  spellcheck=\"true\"\n                  maxlength=\"3000\"\n                  formControlName=\"post\"\n                  placeholder=\"What do you have to say?\"\n                  (keydown.control.enter)=\"textPostForm.value.textPost.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.value.textPost, this.textPostForm.value.title) : null\">\n                </ion-textarea>\n                <p class=\"char-limit\">{{postChars.value.length}} / 3000 character limit</p>\n              </ion-item>\n            </ion-list>\n\n            <ion-row>\n              <ion-col>\n                <ion-item style=\"margin: 15px 0 20px;\" lines=\"none\">\n                  <ion-button\n                  class=\"orange-button\"\n                  type=\"submit\">\n                    Submit\n                  </ion-button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-lg=\"6\" style=\"margin-bottom: 100px;\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: unset;\n  height: 36px;\n  margin-top: 20px;\n  margin-bottom: 4px;\n  position: unset;\n}\n\nion-title {\n  margin: 0;\n}\n\n.message {\n  font-size: 1.2em;\n  text-align: justify;\n}\n\n.char-limit {\n  color: #e4405f;\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-input {\n    box-shadow: none;\n    background: #edf3f8;\n  }\n}\n\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUNDRjtBQUNGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2FkZC1wb3N0L2FkZC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJ1dHRvbiB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG4gIHdpZHRoOiB1bnNldDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBvc2l0aW9uOiB1bnNldDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jaGFyLWxpbWl0IHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRleHQtaW5wdXQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgfVxuXG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgLy8gYmFja2dyb3VuZDogI2VkZjNmODtcbiAgfVxufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iLCIuYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xuICB3aWR0aDogdW5zZXQ7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2hhci1saW1pdCB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LWlucHV0IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIH1cbn1cbi5pdGVtLWludGVyYWN0aXZlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAwO1xufVxuXG5oNiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */");

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
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.textPostForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.profile.getUserDetails().subscribe(details => {
            console.log(details);
            this.creatorEmail = details['email'];
            this.creatorName = details['fullName'];
            this.creatorProfilePicture = details['profilePicture'];
        });
    }
    back() {
        this.router.navigate(['/home/posts']);
    }
    post(creatorName, creatorEmail, creatorProfilePicture, post, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            yield this.posts.addPost(creatorName, creatorEmail, creatorProfilePicture, post, title).subscribe(data => {
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postChars', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddPostPage.prototype, "postChars", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titleChars', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddPostPage.prototype, "titleChars", void 0);
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