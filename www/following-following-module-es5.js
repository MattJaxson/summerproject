(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["following-following-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPostsFollowingFollowingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Posts you are Following</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n\n    <!-- Post -->\n    <ion-row style=\"margin: 20px 0px 60px 0px;\" *ngFor=\"let post of allFollowedPosts\">\n        <ion-col size=\"2\" offset=\"0.5\">\n          <div style=\"height: 50px; width: 50px; background: #222; border-radius: 50px;\"></div>\n            <!-- <ion-img [src]=\"image\" style=\"background: #999; border-radius: 100px;\"></ion-img> -->\n        </ion-col>\n        <ion-col size=\"7\">\n            <h6>{{post.postID}}</h6>\n        </ion-col>\n        <ion-col size=\"2\" offset=\"0.5\">\n            <h6 style=\"opacity: 0.4\">{{post.date}}</h6>\n        </ion-col>\n\n      <!-- Post Content -->\n      <ion-col (click)=\"postPage(post)\" style=\"margin-top: 20px; height: 200px;\" size=\"11\" offset=\"0.5\">\n\n          <p style=\"font-size: 1em; line-height: 25px;\">{{post.post}}</p>\n      </ion-col>\n\n      <!-- Post Actions -->\n      <ion-col style=\"margin-top: 10px; height: 50px;\" size=\"11\" offset=\"0.5\">\n          <ion-toolbar style=\"--background: none;\">\n              <ion-buttons slot=\"end\">\n                <!-- <ion-button style=\"font-size: 0.8em; color: #555;\">\n                  Followers ({{post.followers.length}})\n                </ion-button> -->\n                <!-- <app-follow-icon [post]=\"post\" [userEmail]=\"userEmail\"></app-follow-icon> -->\n                <ion-button (click)=\"postPage(post)\" style=\"font-size: 0.8em; color: #555;\">\n                  Comments ({{post.comments.length}})\n                </ion-button>\n                <hr style=\"color: red;\">\n                </ion-buttons>\n          </ion-toolbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/posts/following/following-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FollowingPageRoutingModule */

  /***/
  function srcAppPagesPostsFollowingFollowingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPageRoutingModule", function () {
      return FollowingPageRoutingModule;
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


    var _following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/pages/posts/following/following.page.ts");

    const routes = [{
      path: '',
      component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
    }];
    let FollowingPageRoutingModule = class FollowingPageRoutingModule {};
    FollowingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FollowingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/posts/following/following.module.ts ***!
    \***********************************************************/

  /*! exports provided: FollowingPageModule */

  /***/
  function srcAppPagesPostsFollowingFollowingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function () {
      return FollowingPageModule;
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


    var _following_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./following-routing.module */
    "./src/app/pages/posts/following/following-routing.module.ts");
    /* harmony import */


    var _following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/pages/posts/following/following.page.ts");

    let FollowingPageModule = class FollowingPageModule {};
    FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _following_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowingPageRoutingModule"]],
      declarations: [_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]]
    })], FollowingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/posts/following/following.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPostsFollowingFollowingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2ZvbGxvd2luZy9mb2xsb3dpbmcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/posts/following/following.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/posts/following/following.page.ts ***!
    \*********************************************************/

  /*! exports provided: FollowingPage */

  /***/
  function srcAppPagesPostsFollowingFollowingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPage", function () {
      return FollowingPage;
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


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    let FollowingPage = class FollowingPage {
      constructor(router, posts, profile, toast) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
      }

      ngOnInit() {
        // Get the User's Followed Posts
        this.profile.getUserDetails().subscribe(details => {
          this.userID = details['_id'];
          this.posts.getFollowedPost(this.userID).subscribe(posts => {
            this.allFollowedPosts = posts;

            for (const post of this.allFollowedPosts) {
              post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(post.date), 'MMMM do, yyyy');
            }

            console.log(this.allFollowedPosts);
          });
        });
        console.log('Got Followed Posts');
      }

      postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
      }

    };

    FollowingPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }];

    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./following.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./following.page.scss */
      "./src/app/pages/posts/following/following.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], FollowingPage);
    /***/
  }
}]);
//# sourceMappingURL=following-following-module-es5.js.map