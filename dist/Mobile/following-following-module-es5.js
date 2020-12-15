function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Following</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- fab placed to the bottom end -->\n    <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n<!-- Refresher -->\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n\n<!-- Desktop -->\n<ion-grid class=\"ion-hide-md-down\">\n\n  <!-- Desktop Header -->\n  <ion-row class=\"ion-hide-md-down\">\n    <ion-col offset=\"2.5\" size=\"2.5\" style=\"margin: 3% 0% 2% 0%;\">\n      <h1>Following</h1>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" push=\"2.65\" size=\"2\">\n      <ion-button class=\"add-button\"  (click)=\"addPost()\">\n        Add Post\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" push=\"1\" size=\"2\">\n      <ion-button class=\"blue-button\"  (click)=\"back()\">\n        Back\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n<ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n  <ion-col\n    class=\"no-posts ion-align-items-center\"\n    *ngIf=\"allFollowedPosts.length === 0\"\n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n    <div>\n      <p style=\"font-size: 1.2em;\">You are currently not following any posts. Please click the follow button on any Post to add it to this page.</p>\n    </div>\n  </ion-col>\n\n  <!-- Posts -->\n  <ion-col size=\"7\">\n    <ion-row *ngFor=\"let post of allFollowedPosts\" class=\"post\">\n\n      <!-- Profile Header -->\n      <ion-col size=\"11\">\n        <ion-row class=\"ion-align-items-center\">\n        <!-- Profile Picture -->\n        <ion-col push=\"0.25\" size=\"1\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n        </ion-col>\n\n        <!-- Post Creator's Name -->\n        <ion-col size=\"4\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n        </ion-col>\n\n        <!-- Date -->\n        <ion-col class=\"ion-float-right\" push-lg=\"5\" size=\"3\">\n            <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n        </ion-col>\n\n      </ion-row>\n      </ion-col>\n\n      <!-- Post Content -->\n      <ion-col size=\"12\">\n        <ion-row>\n          <!-- 1080x1350 -->\n          <ion-col push=\"0.25\" size=\"11\" >\n           <p class=\"post-content\">{{post.post}}</p>\n          </ion-col>\n       </ion-row>\n      </ion-col>\n\n      <!-- Comment -->\n      <ion-col size=\"12\">\n        <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n          <ion-col size=\"11.8\">\n            <ion-item lines=\"none\">\n             <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n               <ion-textarea\n                  class=\"comment-input\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  class=\"comment-post-button\"\n                  *ngIf=\"!commentForm\n                          .get('comment')\n                          .pristine && commentForm.value.comment.length >= 3\"\n                    name=\"send\"\n                    type=\"submit\">Post\n                </ion-button>\n             </form>\n\n    </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- Post Buttons -->\n      <ion-col size=\"12\">\n        <ion-row>\n          <!-- Upvote & Downvote-->\n          <ion-col size=\"4.7\">\n            <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n          </ion-col>\n\n          <!-- Follow & Comment -->\n          <ion-col push=\"0.75\" size=\"6\">\n            <app-follow-comment-buttons [isUser]=\"post.isUser\" [postID]=\"post._id\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-col>\n\n</ion-row>\n</ion-grid>\n\n<!-- Mobile -->\n<ion-grid class=\"ion-hide-lg-up\">\n\n<ion-row class=\"ion-justify-content-center\">\n\n  <!-- No Followed Post -->\n  <ion-col\n    class=\"no-posts ion-align-items-center\"\n    *ngIf=\"allFollowedPosts.length === 0\"\n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n    <div>\n      <p style=\"font-size: 1.2em;\">You are currently not following any posts. Please click the follow button on any Post to add it to this page.</p>\n    </div>\n  </ion-col>\n\n  <!-- Posts -->\n  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"10\" pull-lg=\"2\">\n    <ion-row *ngFor=\"let post of allFollowedPosts\" style=\"margin-top: 1%;\" class=\"post\">\n\n      <!-- Profile Header -->\n      <ion-col size=\"11\">\n        <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\n        <!-- Profile Picture -->\n        <ion-col push=\"0.2\" size=\"1.3\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n        </ion-col>\n\n        <!-- Post Creator's Name -->\n        <ion-col push=\"0.2\" size=\"5\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n          <h6 style=\"font-size: 1em; margin: 10px 0 10px 0px; color: #666;\">{{post.creatorName}}</h6>\n        </ion-col>\n\n        <!-- Date -->\n        <ion-col class=\"ion-text-right\" push=\"1.5\" size=\"3\">\n            <h6 style=\"opacity: 0.4; font-size: 0.7em; margin: 10px 0; position: relative; top: 10px;\">{{post.date}}</h6>\n        </ion-col>\n\n      </ion-row>\n      </ion-col>\n\n      <!-- Post Content -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- (click)=\"postPage(post)\"  -->\n          <!-- 1080x1350 -->\n          <ion-col size=\"11\" style=\"height: auto; background: white\">\n          <p class=\"post-content\" style=\"font-size: 1em; width: 100%; position: unset; line-height: unset;\">{{post.post}}</p>\n          </ion-col>\n      </ion-row>\n      </ion-col>\n\n      <!-- Comment -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\" style=\"position: relative; right: 6px; top: -4px;\" >\n          <ion-col size=\"12\">\n            <ion-item  style=\"height: auto;\" lines=\"none\">\n            <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n              <ion-textarea\n              class=\"comment-input-mobile\"\n              autogrow=\"true\"\n              autocapitalize=\"true\"\n              rows=\"5\"\n              spellcheck=\"true\"\n              wrap=\"soft\"\n              type=\"text\"\n              placeholder=\"Add a Comment\" formControlName=\"comment\">\n            </ion-textarea>\n            <!-- Comment Post Button -->\n            <ion-button\n              style=\"float: right;\"\n              class=\"comment-post-button\"\n              *ngIf=\"!commentForm\n                      .get('comment')\n                      .pristine && commentForm.value.comment.length >= 3\"\n                name=\"send\"\n                type=\"submit\">Post\n            </ion-button>\n            </form>\n\n    </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- Post Buttons -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- Upvote & Downvote-->\n          <ion-col pull=\"1\" size=\"4\" size-xs=\"4.4\">\n            <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n          </ion-col>\n\n          <!-- Follow & Comment -->\n          <ion-col size=\"6\">\n            <app-follow-comment-buttons style=\"font-size: 1.3em\" [postID]=\"post._id\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-col>\n\n</ion-row>\n</ion-grid>\n\n</ion-content>\n";
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

    var routes = [{
      path: '',
      component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
    }];

    var FollowingPageRoutingModule = function FollowingPageRoutingModule() {
      _classCallCheck(this, FollowingPageRoutingModule);
    };

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


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _following_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./following-routing.module */
    "./src/app/pages/posts/following/following-routing.module.ts");
    /* harmony import */


    var _following_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/pages/posts/following/following.page.ts");

    var FollowingPageModule = function FollowingPageModule() {
      _classCallCheck(this, FollowingPageModule);
    };

    FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _following_routing_module__WEBPACK_IMPORTED_MODULE_6__["FollowingPageRoutingModule"]],
      declarations: [_following_page__WEBPACK_IMPORTED_MODULE_7__["FollowingPage"]]
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


    __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.post {\n  padding: 30px 30px;\n  margin-bottom: 80px;\n  border-radius: 5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  background: white;\n  font-size: 1em;\n  line-height: 35px;\n}\n\n.post hr {\n  background: #999;\n  opacity: 0.4;\n}\n\n@media screen and (max-width: 567px) {\n  .post {\n    padding: 30px 0px;\n  }\n}\n\n.no-posts {\n  height: 70vh;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: 100px;\n  height: 36px;\n  margin-top: 30px;\n  margin-bottom: 4px;\n  position: unset;\n  font-size: 0.7em;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#bffce9, #7efcd4);\n  font-size: 0.7em;\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 30px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 0px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  height: 40px;\n  margin-top: 40px;\n  opacity: 0;\n  width: 100%;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RzL2ZvbGxvd2luZy9mb2xsb3dpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FESUE7RUFDRTtJQUNFLGlCQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtRUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtRUFBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUVBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FESUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURRSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMTjs7QURVQTtFQUNFLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDUEY7O0FEVUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ1BGOztBRFVBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtRUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUNQRjs7QURXQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFdBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNSRjtFRFdBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VDVEY7QUFDRjs7QURBQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VDUkY7RURXQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ1RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9mb2xsb3dpbmcvZm9sbG93aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuXG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xuICAgIG9wYWNpdHk6IDAuNDtcblxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5wb3N0IHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgfVxufVxuXG4ubm8tcG9zdHMge1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogODBweDtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDMwcHggMCAxNTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnRvb2xiYXIgPiBpb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA5LDIxNiwyMjQsMC4xMyk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG5cbiAgaW9uLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgfVxufVxuXG4ucG9zdC10b29sYmFyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjYmZmY2U5LCAjN2VmY2Q0KTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMnB4IDAgMHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5wb3N0IHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cbi5wb3N0IGhyIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuICAucG9zdCB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gIH1cbn1cbi5uby1wb3N0cyB7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMTUwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50b29sYmFyID4gaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwOSwyMTYsMjI0LDAuMTMpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuLnRvb2xiYXIgPiBpb24tYnV0dG9ucyA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ucG9zdC10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjYmZmY2U5LCAjN2VmY2Q0KTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzFiYWY4ODtcbiAgLS1jb2xvci1mb2N1c2VkOiB3aGl0ZTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modals/third-person-profile/third-person-profile.page */
    "./src/app/modals/third-person-profile/third-person-profile.page.ts");

    var FollowingPage = /*#__PURE__*/function () {
      function FollowingPage(router, posts, profile, toast, formBuilder, eventEmitterService, modal, location) {
        _classCallCheck(this, FollowingPage);

        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.eventEmitterService = eventEmitterService;
        this.modal = modal;
        this.location = location;
        this.allFollowedPosts = [];
      }

      _createClass(FollowingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.location.onPopState(function () {
            _this.eventEmitterService.onBackAction();
          }); // Get the User's Followed Posts

          this.profile.getUserDetails().subscribe(function (details) {
            console.log('User ID from Following Page OnInit');
            _this.userID = details['_id'];
            _this.userFullName = details['fullName'];
            _this.userEmail = details['email'];
            _this.userProfilePicture = details['profilePicture'];

            _this.posts.getFollowedPost(_this.userID).subscribe(function (data) {
              _this.allFollowedPosts = Object.values(data).reverse();
              console.log(data);

              var _iterator = _createForOfIteratorHelper(_this.allFollowedPosts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var post = _step.value;
                  post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(post.date), 'MMMM do, yyyy');
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return _this.allFollowedPosts;
            });
          });
          console.log('Got Followed Posts'); // To collect comment data

          this.commentForm = this.formBuilder.group({
            comment: ['']
          });
        }
      }, {
        key: "thirdPersonProfileModal",
        value: function thirdPersonProfileModal(creatorEmail, creatorName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var thirdPersonProfileModalConfig;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modal.create({
                      component: src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_10__["ThirdPersonProfilePage"],
                      componentProps: {
                        creatorEmail: creatorEmail,
                        creatorName: creatorName
                      },
                      cssClass: 'third-person-profile-modal'
                    });

                  case 2:
                    thirdPersonProfileModalConfig = _context.sent;
                    _context.next = 5;
                    return thirdPersonProfileModalConfig.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "postPage",
        value: function postPage(post) {
          // tslint:disable-next-line: max-line-length
          this.router.navigate(['/home/posts/post-page', post._id]);
        }
      }, {
        key: "addPost",
        value: function addPost() {
          this.router.navigate(['/home/posts/add-post']);
        }
      }, {
        key: "back",
        value: function back() {
          this.eventEmitterService.onBackAction();
          this.router.navigate(['/home/posts']);
        }
      }, {
        key: "comment",
        value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var date, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // Reset Comment Input
                    this.commentForm.reset();
                    _context2.next = 3;
                    return Date.now();

                  case 3:
                    date = _context2.sent;
                    console.log('Posting comment');
                    console.log('Post ID: ' + postID);
                    _context2.next = 8;
                    return this.posts.comment(postID, this.userFullName, this.userEmail, this.userProfilePicture, _comment).subscribe(function () {
                      _this2.posts.getPostInfo(postID).subscribe(function (post) {
                        _this2.posts.getPostInfo(postID).subscribe(function (post) {
                          var _iterator2 = _createForOfIteratorHelper(post['comments']),
                              _step2;

                          try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                              var postComments = _step2.value;
                              console.log(postComments);
                              postComments.isUser = false;
                              postComments.canDeleteComment = false;
                              postComments.canReport = true; // If this comment is from the logged in user, they can delete and edit

                              if (postComments.userEmail === _this2.userEmail) {
                                postComments.isUser = true;
                                postComments.canDeleteComment = true;
                                postComments.canReport = false;
                              }

                              postComments.repliesLength = postComments.replies.length;
                              postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
                                includeSeconds: true,
                                addSuffix: false
                              });
                            }
                          } catch (err) {
                            _iterator2.e(err);
                          } finally {
                            _iterator2.f();
                          }

                          _this2.posts.commentsSubject$.next(post['comments'].reverse());
                        });
                      });
                    });

                  case 8:
                    _context2.next = 10;
                    return this.posts.getPostInfo(postID).subscribe(function (post) {
                      var _iterator3 = _createForOfIteratorHelper(post['comments']),
                          _step3;

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          var postComments = _step3.value;
                          postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
                            includeSeconds: true,
                            addSuffix: true
                          });
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                      _this2.posts.commentsSubject$.next(post['comments'].reverse());
                    });

                  case 10:
                    toast = this.toast.create({
                      message: 'Your comment has been added.',
                      duration: 1500
                    });
                    toast.then(function (toast) {
                      return toast.present();
                    });
                    _context2.next = 14;
                    return this.router.navigate(['/home/posts/post-page', postID]);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // Get the User's Followed Posts
                    this.profile.getUserDetails().subscribe(function (details) {
                      console.log('User ID from Following Page OnInit');
                      _this3.userID = details['_id'];
                      _this3.userFullName = details['fullName'];
                      _this3.userEmail = details['email'];
                      _this3.userProfilePicture = details['profilePicture'];

                      _this3.posts.getFollowedPost(_this3.userID).subscribe(function (data) {
                        _this3.allFollowedPosts = Object.values(data).reverse();
                        console.log(data);

                        var _iterator4 = _createForOfIteratorHelper(_this3.allFollowedPosts),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var post = _step4.value;
                            post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(post.date), 'MMMM do, yyyy');
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }

                        return _this3.allFollowedPosts;
                      });
                    }); // Present Toast

                    _context3.next = 3;
                    return setTimeout(function () {
                      var toast = _this3.toast.create({
                        message: 'Inspiration Page has been refreshed',
                        duration: 3000
                      });

                      event.target.complete();
                      toast.then(function (toast) {
                        return toast.present();
                      });
                    }, 2000);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return FollowingPage;
    }();

    FollowingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]
      }];
    };

    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./following.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./following.page.scss */
      "./src/app/pages/posts/following/following.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]])], FollowingPage);
    /***/
  }
}]);
//# sourceMappingURL=following-following-module-es5.js.map