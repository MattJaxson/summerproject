(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPostsAddPostAddPostPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Add Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"header ion-hide-md-down ion-justify-content-center ion-text-center\" style=\"padding: 3% 0%;\">\n      <ion-col size=\"5\">\n        <h1 style=\"margin: 10px 0\">New Post</h1>\n      </ion-col>\n      <ion-col push=\"2\" size=\"5\">\n        <ion-button class=\"back-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <!-- Horizontal Line for Desktop Header -->\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"7\">\n        <hr style=\"background-color: #666;\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-md=\"8\" size-lg=\"7\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-lg-up\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <!-- Desktop Text Header -->\n        <p class=\"message ion-hide-md-down\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n      </ion-col>\n\n    </ion-row>\n    \n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-md=\"8\" size-lg=\"7\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"post(this.creatorName, this.creatorEmail, this.textPostForm.value.textPost)\">\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-textarea\n                  rows=\"15\"\n                  auto-grow=\"true\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  formControlName=\"textPost\"\n                  placeholder=\"What do you have to say?\">\n                </ion-textarea>\n              </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item style=\"margin: 15px 0 20px;\" lines=\"none\">\n                  <ion-button\n                  class=\"orange-button\"\n                  type=\"submit\">\n                    Submit\n                  </ion-button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-lg=\"6\" style=\"margin-bottom: 100px;\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddPostPageRoutingModule */

  /***/
  function srcAppPagesPostsAddPostAddPostRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPageRoutingModule", function () {
      return AddPostPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-post.page */
    "./src/app/pages/posts/add-post/add-post.page.ts");

    const routes = [{
      path: '',
      component: _add_post_page__WEBPACK_IMPORTED_MODULE_3__["AddPostPage"]
    }, {
      path: 'verification',
      loadChildren: () => __webpack_require__.e(
      /*! import() | verification-verification-module */
      "verification-verification-module").then(__webpack_require__.bind(null,
      /*! ./verification/verification.module */
      "./src/app/pages/posts/add-post/verification/verification.module.ts")).then(m => m.VerificationPageModule)
    }];
    let AddPostPageRoutingModule = class AddPostPageRoutingModule {};
    AddPostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPostPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddPostPageModule */

  /***/
  function srcAppPagesPostsAddPostAddPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function () {
      return AddPostPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-post-routing.module */
    "./src/app/pages/posts/add-post/add-post-routing.module.ts");
    /* harmony import */


    var _add_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-post.page */
    "./src/app/pages/posts/add-post/add-post.page.ts");

    let AddPostPageModule = class AddPostPageModule {};
    AddPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPostPageRoutingModule"]],
      declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_6__["AddPostPage"]]
    })], AddPostPageModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPostsAddPostAddPostPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h1 {\n  font-size: 2em;\n}\n\nion-title {\n  margin: 0;\n}\n\n.message {\n  font-size: 1.2em;\n  padding: 10px;\n}\n\nion-item {\n  --background: none;\n  --border-color: none;\n  --border-radius: 5px;\n  --inner-padding-end: 0;\n}\n\n.item {\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  padding-left: 10px;\n}\n\nion-textarea {\n  --background: white;\n  --border-color: none;\n}\n\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvYWRkLXBvc3QvYWRkLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIGgxe1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iLCIuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbmlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG4uaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogbm9uZTtcbn1cblxuLml0ZW0taW50ZXJhY3RpdmUge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDA7XG59XG5cbmg2IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/posts/add-post/add-post.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/posts/add-post/add-post.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddPostPage */

  /***/
  function srcAppPagesPostsAddPostAddPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPage", function () {
      return AddPostPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let AddPostPage = class AddPostPage {
      constructor(router, loading, posts, profile, formBuilder) {
        this.router = router;
        this.loading = loading;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder; // Do some sort of Validation Later

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
          const {
            role,
            data
          } = yield loading.onDidDismiss();
          console.log('Loading dismissed!');
        });
      }

    };

    AddPostPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
    }];

    AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-post.page.scss */
      "./src/app/pages/posts/add-post/add-post.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], AddPostPage);
    /***/
  }
}]);
//# sourceMappingURL=add-post-add-post-module-es5.js.map