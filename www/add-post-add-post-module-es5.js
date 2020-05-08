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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>add-post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"10\">\n          <h2>Please keep your content clean. (Refactor message)</h2>\n          <!-- Textarea in an item with a placeholder -->\n        <ion-item>\n            <ion-textarea\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            style=\"border: 2px solid #005191;\"placeholder=\"What do you have to say?\"></ion-textarea>\n          </ion-item>\n        <ion-button\n          (click)=\"post()\"\n          >\n          Add Post\n        </ion-button></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n          <h2>Please keep your content clean. (Refactor message)</h2>\n          <!-- Textarea in an item with a placeholder -->\n        <ion-item>\n            <ion-textarea\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            style=\"border: 2px solid #005191;\"placeholder=\"What do you have to say?\"></ion-textarea>\n          </ion-item>\n        <ion-button\n          (click)=\"post()\"\n          >\n          Add Post\n        </ion-button></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
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
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPostPageRoutingModule"]],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2FkZC1wb3N0L2FkZC1wb3N0LnBhZ2Uuc2NzcyJ9 */";
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

    let AddPostPage = class AddPostPage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      post() {
        this.router.navigate(['home/posts/add-post/verification']);
      }

    };

    AddPostPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-post.page.scss */
      "./src/app/pages/posts/add-post/add-post.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AddPostPage);
    /***/
  }
}]);
//# sourceMappingURL=add-post-add-post-module-es5.js.map