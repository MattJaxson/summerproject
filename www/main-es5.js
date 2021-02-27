(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Szd":
    /*!*****************************************************************!*\
      !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
      \*****************************************************************/

    /*! exports provided: FollowIconComponent */

    /***/
    function Szd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowIconComponent", function () {
        return FollowIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./follow-icon.component.html */
      "V38i");
      /* harmony import */


      var _follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./follow-icon.component.scss */
      "ctJg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/post.service */
      "ENZJ");

      var FollowIconComponent = /*#__PURE__*/function () {
        function FollowIconComponent(posts) {
          _classCallCheck(this, FollowIconComponent);

          this.posts = posts;
          this.followState = 'not-followed';
          this.iconName = 'checkbox-outline';
        }

        _createClass(FollowIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleLikeState",
          value: function toggleLikeState(post) {
            if (this.followState === 'not-followed') {
              this.followState = 'followed';
              this.iconName = 'checkbox';
              console.log('Followed: ' + post._id + '\n' + this.userEmail);
              this.posts.followPost(post._id, this.userEmail);
            } else {
              this.followState = 'not-followed';
              this.iconName = 'checkbox-outline';
              console.log('Un-Followed');
              this.posts.unFollowPost(post._id, this.userEmail);
            }
          }
        }]);

        return FollowIconComponent;
      }();

      FollowIconComponent.ctorParameters = function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]
        }];
      };

      FollowIconComponent.propDecorators = {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        userEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FollowIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow-icon',
        template: _raw_loader_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('follow', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#d1d8e0',
          opacity: '0.4',
          transform: 'scale(0.9)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#21ce99',
          opacity: '1',
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('not-followed <=> followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))])],
        styles: [_follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]])], FollowIconComponent);
      /***/
    },

    /***/
    "/ay3":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ay3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #005191;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQU47QUFJRTtFQUNFLHFCQUFBO0FBREo7QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQ0oiLCJmaWxlIjoiY29tbWVudC12b3RlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHZvdGV7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5kb3dudm90ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgICAgLS1mb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICAudXB2b3RlZC10b2FzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICB9XG4gIC5kb3dudm90ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfVxuICBcbiAgLmZvbGxvd2VkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIH1cbiAgLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/ferro/Desktop/United-Way/FYF/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5atM":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function atM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid style=\"margin-bottom: 20px;\">\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n            <div class=\"ion-text-right\">\n                <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n                    Details\n                </ion-button>\n                <ion-button class=\"going\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                    Go\n                </ion-button>\n                <ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                    Cancel\n                </ion-button>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n";
      /***/
    },

    /***/
    "84P7":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: FollowCommentButtonsComponent */

    /***/
    function P7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowCommentButtonsComponent", function () {
        return FollowCommentButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./follow-comment-buttons.component.html */
      "v0br");
      /* harmony import */


      var _follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./follow-comment-buttons.component.scss */
      "MxxR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var FollowCommentButtonsComponent = /*#__PURE__*/function () {
        function FollowCommentButtonsComponent(router, posts, profile, toast) {
          _classCallCheck(this, FollowCommentButtonsComponent);

          this.router = router;
          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.comments = [];
          this.followers = [];
          this.following = false;
          this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
          this.followingLength = null;
          this.commentsLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
          this.commentsLength = null;
        }

        _createClass(FollowCommentButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Get information about post
            this.posts.getPostInfo(this.postID).subscribe(function (postDetails) {
              var comments = postDetails['comments'];
              var followers = postDetails['followers'];
              var following = false;

              _this.profile.getUserDetails().subscribe(function (userDetails) {
                var userEmail = userDetails['email'];
                followers.find(findFollower);

                function findFollower(follower) {
                  if (!follower) {// User is not following post
                  }

                  if (follower === userEmail) {
                    following = true;
                  }
                }

                _this.followers = followers;
                _this.comments = comments;
                _this.userEmail = userEmail;
                _this.following = following;

                _this.followingLength$.next(followers.length);

                _this.followingLength$.subscribe(function (data) {
                  _this.followingLength = data;
                });

                _this.commentsLength$.next(followers.length);

                _this.commentsLength$.subscribe(function (data) {
                  _this.commentsLength = data;
                });
              });
            });
          }
        }, {
          key: "follow",
          value: function follow(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return console.log('Following Post');

                    case 2:
                      _context.next = 4;
                      return console.log(postID);

                    case 4:
                      _context.next = 6;
                      return this.posts.followPost(postID, this.userEmail);

                    case 6:
                      this.following = true;
                      this.followingLength$.next(this.followingLength + 1);
                      _context.next = 10;
                      return this.followToast();

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "followToast",
          value: function followToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var followToast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        cssClass: 'followed-toast',
                        message: 'You are FOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      followToast = _context2.sent;
                      followToast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "unFollow",
          value: function unFollow(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return console.log('Unfollowing Post');

                    case 2:
                      _context3.next = 4;
                      return console.log(postID);

                    case 4:
                      _context3.next = 6;
                      return this.posts.unFollowPost(postID, this.userEmail);

                    case 6:
                      this.following = false;
                      this.followingLength$.next(this.followingLength - 1);
                      _context3.next = 10;
                      return this.unFollowToast();

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "unFollowToast",
          value: function unFollowToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var unFollowToast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toast.create({
                        cssClass: 'unfollowed-toast',
                        message: 'You are UNFOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      unFollowToast = _context4.sent;
                      unFollowToast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "postPage",
          value: function postPage() {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/posts/post-page', this.postID]);
          }
        }]);

        return FollowCommentButtonsComponent;
      }();

      FollowCommentButtonsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      FollowCommentButtonsComponent.propDecorators = {
        postID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        commentLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        postEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FollowCommentButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow-comment-buttons',
        template: _raw_loader_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])], FollowCommentButtonsComponent);
      /***/
    },

    /***/
    "Aso2":
    /*!*********************************************!*\
      !*** ./src/app/services/profile.service.ts ***!
      \*********************************************/

    /*! exports provided: ProfileService */

    /***/
    function Aso2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "NuaS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(http, storage, alertController, helper, auth, router, toastController) {
          _classCallCheck(this, ProfileService);

          this.http = http;
          this.storage = storage;
          this.alertController = alertController;
          this.helper = helper;
          this.auth = auth;
          this.router = router;
          this.toastController = toastController;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
          this.activeEmail = ''; // user = {};

          this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.about = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.city = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.school = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.email = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](''); // Needs the User's email address from the JSON Web Token stored on device.

          this.activeEmail = this.auth.user.email;
        }

        _createClass(ProfileService, [{
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.http.get("".concat(this.BACKEND_URL, "/api/home/user"));
          } //  Gets User Details from Server to populate the Profile tab with User information.

        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user"), {
              email: this.activeEmail
            });
          }
        }, {
          key: "getTheirDetails",
          value: function getTheirDetails(email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/their-details"), {
              email: email
            });
          }
        }, {
          key: "changeEmail",
          value: function changeEmail(activeEmail, newEmail, password) {
            var _this2 = this;

            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-email"), {
              oldEmail: this.activeEmail,
              email: newEmail,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
              _this2.presentFailToast(_this2.activeEmail);

              throw new Error(e);
            })).subscribe(function (data) {
              if (data === true) {
                _this2.email.next(newEmail);

                _this2.activeEmail = newEmail;

                _this2.router.navigate(['/home/profile']);

                _this2.presentSuccessToast();
              } else {
                _this2.presentFailToast(_this2.activeEmail);

                return console.log('Passwords dont match');
              }
            });
          } // Toast for Successful Change

        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast() {
            var successToast = this.toastController.create({
              message: 'Your Email address has been updated.',
              duration: 3000,
              cssClass: 'updated-toast',
              keyboardClose: true,
              position: 'bottom'
            });
            successToast.then(function (t) {
              return t.present();
            });
          }
        }, {
          key: "presentFailToast",
          value: function presentFailToast(email) {
            // Toast for Successful Change
            var failToast = this.toastController.create({
              // tslint:disable-next-line: max-line-length
              message: "Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ".concat(email),
              duration: 9000,
              cssClass: 'wrong-password-toast',
              keyboardClose: true,
              position: 'top'
            });
            failToast.then(function (t) {
              return t.present();
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-password"), {
                        oldPassword: oldPassword,
                        email: activeEmail,
                        newPassword: newPassword,
                        reTypeNewPassword: reTypeNewPassword
                      }).subscribe(function (data) {
                        // if the passwords match, navigate back to landing page
                        if (data === true) {
                          console.log('TRUE');

                          _this3.router.navigate(['']);

                          var toast = _this3.toastController.create({
                            message: 'Password updated. Please login with your new password.',
                            duration: 3000,
                            cssClass: 'updated-toast',
                            keyboardClose: true,
                            position: 'bottom'
                          });

                          toast.then(function (t) {
                            return t.present();
                          });
                        } else {
                          console.log('Passwords dont match!');
                        }
                      });

                    case 2:
                      return _context5.abrupt("return", _context5.sent);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "changeAbout",
          value: function changeAbout(email, newAbout, passsword) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-about"), {
                        email: email,
                        newAbout: newAbout,
                        passsword: passsword
                      }).subscribe();

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "changeSchool",
          value: function changeSchool(email, newSchool, newGrade, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-school"), {
                        email: email,
                        newSchool: newSchool,
                        newGrade: newGrade,
                        password: password
                      }).subscribe(function (data) {
                        if (data === true) {
                          _this4.school.next(newSchool);

                          _this4.grade.next(newGrade);

                          _this4.router.navigate(['/home/profile']);

                          var successToast = _this4.toastController.create({
                            // tslint:disable-next-line: max-line-length
                            message: 'Your school information has been updated.',
                            duration: 3000,
                            cssClass: 'updated-toast',
                            keyboardClose: true,
                            position: 'bottom'
                          });

                          successToast.then(function (t) {
                            return t.present();
                          });
                        } else {
                          var failToast = _this4.toastController.create({
                            // tslint:disable-next-line: max-line-length
                            message: 'Please make sure your password is correct',
                            duration: 3000,
                            cssClass: 'wrong-password-toast',
                            keyboardClose: true,
                            position: 'top'
                          });

                          failToast.then(function (t) {
                            return t.present();
                          });
                          return console.log('Passwords dont match');
                        }
                      });

                    case 2:
                      return _context7.abrupt("return", _context7.sent);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "changeProfilePicture",
          value: function changeProfilePicture(imageForm, oldPhotoKey) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", this.http.post("".concat(this.BACKEND_URL, "/api/photo/change-profile-picture"), {
                        imageForm: imageForm,
                        oldPhotoKey: oldPhotoKey
                      }).subscribe());

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "changeResume",
          value: function changeResume(email, newResume, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-school"), {
                        email: email,
                        newResume: newResume,
                        password: password
                      }).subscribe(function (data) {
                        if (data === true) {
                          console.log('Changing Resume...');

                          _this5.resume.next(newResume);

                          _this5.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
                        } else {
                          return console.log('Passwords dont match');
                        }
                      });

                    case 2:
                      return _context9.abrupt("return", _context9.sent);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } // Delete User

        }, {
          key: "delete",
          value: function _delete() {
            console.log('Deleted User');
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], ProfileService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone-error */
      "+Vou");
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      // const url is commented out depending on which you are testing with.
      // local host is for local machine and 10.0.1.8 is for android testing


      var ip = '10.0.1.4';
      var baseUrl = "http://".concat(ip, ":3000");
      var fairsUrl = "http://".concat(ip, ":4000");
      var environment = {
        production: false,
        url: baseUrl,
        fairsUrl: fairsUrl
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Cmz0":
    /*!***************************************************************************!*\
      !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CommentVoteBarComponent */

    /***/
    function Cmz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentVoteBarComponent", function () {
        return CommentVoteBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./comment-vote-bar.component.html */
      "FLRm");
      /* harmony import */


      var _comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./comment-vote-bar.component.scss */
      "/ay3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");

      var CommentVoteBarComponent = /*#__PURE__*/function () {
        function CommentVoteBarComponent(posts, profile, toast, postEmitterService) {
          _classCallCheck(this, CommentVoteBarComponent);

          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.postEmitterService = postEmitterService;
          this.upVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
          this.downVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
          this.currentUserUpvoted = false;
          this.currentUserDownvoted = false;
        }

        _createClass(CommentVoteBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      // Get information about comment
                      this.posts.getPostInfo(this.postID).subscribe(function (postInfo) {
                        var allComments = postInfo['comments'];
                        allComments.find(function (comment) {
                          if (comment._id === _this6.commentID) {
                            _this6.upVoters = comment['upvoters'];
                            _this6.downVoters = comment['downvoters'];
                            _this6.upVotes = comment['upvotes'];
                            _this6.downVotes = comment['downvotes'];

                            _this6.upVoteCount$.next(_this6.upVotes);

                            _this6.downVoteCount$.next(_this6.downVotes);

                            _this6.upVoteLength = _this6.upVoteCount$.getValue();
                            _this6.downVoteLength = _this6.downVoteCount$.getValue();
                            return;
                          }
                        }); // Get User Email

                        _this6.profile.getUserDetails().subscribe(function (userDetails) {
                          var userEmail = userDetails['email'];
                          var upVoted = false;
                          var downVoted = false;

                          _this6.upVoters.find(findUpVoter);

                          _this6.downVoters.find(findDownVoter);

                          function findUpVoter(upVoter) {
                            if (!upVoter) {}

                            if (upVoter === userEmail) {
                              return upVoted = true;
                            }

                            console.log(upVoter);
                          }

                          function findDownVoter(downVoter) {
                            if (!downVoter) {}

                            if (downVoter === userEmail) {
                              return downVoted = true;
                            }
                          }

                          console.log('Current user: ', userEmail);
                          _this6.userEmail = userEmail;
                          _this6.currentUserUpvoted = upVoted;
                          _this6.currentUserDownvoted = downVoted;
                        });
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "refreshAfterComment",
          value: function refreshAfterComment() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "upVoteComment",
          value: function upVoteComment() {
            var _this7 = this;

            this.posts.upVoteComment(this.postID, this.commentID, this.userEmail).subscribe(function (data) {
              var upvotes = data['upvotes'];
              var downvotes = data['downvotes'];
              console.log(data);

              _this7.upVoteCount$.next(upvotes);

              _this7.downVoteCount$.next(downvotes);

              _this7.currentUserUpvoted = true;
              _this7.upVoteLength = _this7.upVoteCount$.getValue();
              _this7.downVoteLength = _this7.downVoteCount$.getValue();

              if (_this7.currentUserUpvoted === true) {
                return _this7.currentUserDownvoted = false;
              }
            });
            this.upVoteCommentToast();
            this.refreshAfterComment();
          }
        }, {
          key: "upVoteCommentToast",
          value: function upVoteCommentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var upVotePostToast;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.toast.create({
                        cssClass: 'upvoted-toast',
                        message: 'You have UPVOTED this comment.',
                        duration: 2000
                      });

                    case 2:
                      upVotePostToast = _context11.sent;
                      upVotePostToast.present();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "downVoteComment",
          value: function downVoteComment() {
            var _this8 = this;

            this.posts.downVoteComment(this.postID, this.commentID, this.userEmail).subscribe(function (data) {
              var upvotes = data['upvotes'];
              var downvotes = data['downvotes'];
              console.log(data);

              _this8.upVoteCount$.next(upvotes);

              _this8.downVoteCount$.next(downvotes);

              _this8.currentUserDownvoted = true;
              _this8.upVoteLength = _this8.upVoteCount$.getValue();
              _this8.downVoteLength = _this8.downVoteCount$.getValue();

              if (_this8.currentUserDownvoted === true) {
                return _this8.currentUserUpvoted = false;
              }
            });
            this.downVoteCommentToast();
            this.refreshAfterComment();
          }
        }, {
          key: "downVoteCommentToast",
          value: function downVoteCommentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var downVoteToast;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.toast.create({
                        cssClass: 'downvoted-toast',
                        message: 'You have DOWNVOTED this comment.',
                        duration: 2000
                      });

                    case 2:
                      downVoteToast = _context12.sent;
                      downVoteToast.present();

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return CommentVoteBarComponent;
      }();

      CommentVoteBarComponent.ctorParameters = function () {
        return [{
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]
        }];
      };

      CommentVoteBarComponent.propDecorators = {
        postID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        commentID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CommentVoteBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comment-vote-bar',
        template: _raw_loader_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]])], CommentVoteBarComponent);
      /***/
    },

    /***/
    "DtjX":
    /*!*******************************************************!*\
      !*** ./src/app/emitters/post-page-emitter.service.ts ***!
      \*******************************************************/

    /*! exports provided: PostPageEmitterService */

    /***/
    function DtjX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPageEmitterService", function () {
        return PostPageEmitterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PostPageEmitterService = /*#__PURE__*/function () {
        function PostPageEmitterService() {
          _classCallCheck(this, PostPageEmitterService);

          this.invokePostsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(PostPageEmitterService, [{
          key: "onBackAction",
          value: function onBackAction() {
            this.invokePostsPageRefresh.emit();
          }
        }, {
          key: "postPageRefresh",
          value: function postPageRefresh() {
            this.invokePostsPageRefresh.emit();
          }
        }]);

        return PostPageEmitterService;
      }();

      PostPageEmitterService.ctorParameters = function () {
        return [];
      };

      PostPageEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PostPageEmitterService);
      /***/
    },

    /***/
    "ENZJ":
    /*!******************************************!*\
      !*** ./src/app/services/post.service.ts ***!
      \******************************************/

    /*! exports provided: PostsService */

    /***/
    function ENZJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsService", function () {
        return PostsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/profile.service */
      "Aso2");

      var PostsService = /*#__PURE__*/function () {
        function PostsService(http, profile) {
          _classCallCheck(this, PostsService);

          this.http = http;
          this.profile = profile;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
          this.postsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.followingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        }

        _createClass(PostsService, [{
          key: "getPosts",
          value: function getPosts() {
            // console.log('Getting Posts');
            return this.http.get("".concat(this.BACKEND_URL, "/api/posts/"));
          }
        }, {
          key: "getMyPosts",
          value: function getMyPosts(email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/my-posts"), {
              email: email
            });
          }
        }, {
          key: "getPostInfo",
          value: function getPostInfo(id) {
            // console.log(`Getting information for post id ${id}`);
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/post-info"), {
              _id: id
            });
          }
        }, {
          key: "addPost",
          value: function addPost(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title) {
            console.log('Adding post to post que...');
            console.log('Post: ', post);
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/add-text-post"), {
              creatorName: creatorName,
              creatorEmail: creatorEmail,
              creatorProfilePicture: creatorProfilePicture,
              hashtags: hashtags,
              post: post,
              title: title
            });
          }
        }, {
          key: "comment",
          value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/comment"), {
              postID: postID,
              userFullName: userFullName,
              userEmail: userEmail,
              userProfilePicture: userProfilePicture,
              comment: _comment
            });
          }
        }, {
          key: "editPost",
          value: function editPost(postID, newPost) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/edit-post"), {
              postID: postID,
              newPost: newPost
            });
          }
        }, {
          key: "editComment",
          value: function editComment(commentID, postID, newComment) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/edit-comment"), {
              postID: postID,
              commentID: commentID,
              newComment: newComment
            });
          } // Upvote Post

        }, {
          key: "upVotePost",
          value: function upVotePost(postID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/up-vote-post"), {
              postID: postID,
              userEmail: userEmail
            });
          } // Downvote Post

        }, {
          key: "downVotePost",
          value: function downVotePost(postID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/down-vote-post"), {
              postID: postID,
              userEmail: userEmail
            });
          } // Upvote

        }, {
          key: "upVoteComment",
          value: function upVoteComment(postID, commentID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/up-vote-comment"), {
              postID: postID,
              commentID: commentID,
              userEmail: userEmail
            });
          } // Downvote

        }, {
          key: "downVoteComment",
          value: function downVoteComment(postID, commentID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/down-vote-comment"), {
              postID: postID,
              commentID: commentID,
              userEmail: userEmail
            });
          }
        }, {
          key: "followPost",
          value: function followPost(postID, userEmail) {
            var _this9 = this;

            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/follow"), {
              _id: postID,
              email: userEmail
            }).subscribe(function (data) {
              var updatedFollowingPosts = _toConsumableArray(Object.values(data));

              _this9.followingSubject$.next(updatedFollowingPosts);
            });
          }
        }, {
          key: "unFollowPost",
          value: function unFollowPost(postID, userEmail) {
            var _this10 = this;

            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/unfollow"), {
              _id: postID,
              email: userEmail
            }).subscribe(function (data) {
              var updatedFollowingPosts = _toConsumableArray(Object.values(data));

              _this10.followingSubject$.next(updatedFollowingPosts);
            });
          }
        }, {
          key: "getFollowedPost",
          value: function getFollowedPost(userId) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/get-followed-posts"), {
              _id: userId
            });
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(postID, commentID) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-comment"), {
              _id: postID,
              _cid: commentID
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(postID) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-post"), {
              _id: postID
            });
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "reportComment",
          value: function reportComment(commentID, commentContents, post, postID, reportedUserName, reportedUserEmail, commentDate, userEmail, userFullname, reportReason) {
            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/report"), {
              commentID: commentID,
              commentContents: commentContents,
              post: post,
              postID: postID,
              reportedUserName: reportedUserName,
              reportedUserEmail: reportedUserEmail,
              commentDate: commentDate,
              userEmail: userEmail,
              userFullname: userFullname,
              reportReason: reportReason
            });
          }
        }, {
          key: "replyComment",
          value: function replyComment(commentID, postID, reply, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/reply-comment"), {
              postID: postID,
              commentID: commentID,
              reply: reply,
              userFullName: userFullName,
              userProfilePicture: userProfilePicture,
              userEmail: userEmail,
              commentUserEmail: commentUserEmail,
              commentUserFullName: commentUserFullName
            });
          }
        }, {
          key: "deleteReply",
          value: function deleteReply(replyID, commentID, postID) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-reply"), {
              _rid: replyID,
              _cid: commentID,
              _pid: postID
            });
          }
        }]);

        return PostsService;
      }();

      PostsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }];
      };

      PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], PostsService);
      /***/
    },

    /***/
    "EdnJ":
    /*!***************************************************************!*\
      !*** ./src/app/components/going-icon/going-icon.component.ts ***!
      \***************************************************************/

    /*! exports provided: GoingIconComponent */

    /***/
    function EdnJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoingIconComponent", function () {
        return GoingIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./going-icon.component.html */
      "5atM");
      /* harmony import */


      var _going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./going-icon.component.scss */
      "Y05Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/events.service */
      "riPR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "U8oy");

      var GoingIconComponent = /*#__PURE__*/function () {
        function GoingIconComponent(events, favs, toast, router, profile) {
          _classCallCheck(this, GoingIconComponent);

          this.events = events;
          this.favs = favs;
          this.toast = toast;
          this.router = router;
          this.profile = profile;
          this.going = false;
          this.goingState = 'not-going';
          this.iconName = 'add-circle-outline';
        }

        _createClass(GoingIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            // Get the User's details
            this.profile.getUserDetails().subscribe(function (details) {
              _this11.userEmail = details['email'];
              var eventsGoing = details['eventsGoing'];

              if (eventsGoing.includes(_this11.event._id)) {
                _this11.going = true;
                _this11.goingState = 'going';
              } else {
                _this11.going = false;
                _this11.goingState = 'not-going';
              }
            });
          }
        }, {
          key: "toggleGoingState",
          value: function toggleGoingState(event) {
            var _this12 = this;

            if (this.goingState === 'not-going') {
              // Going
              this.goingState = 'going';
              this.iconName = 'close-circle-outline';
              this.going = true;
              this.goingToast();
              console.log("Going to event, ".concat(event.title));
              this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe(function (events) {
                var updatedEvents = [].concat(_toConsumableArray(Object.values(events['eventsGoing'])), [_this12.event._id]);

                _this12.events.eventsGoing$.next(updatedEvents);

                console.log(_this12.events.eventsGoing$.getValue());
              });
            } else {
              // Not Going
              this.goingState = 'not-going';
              this.iconName = 'add-circle-outline';
              this.going = false;
              this.notGoingToast();
              console.log('No longer going to Event');
              this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe(function (events) {
                var eventsGoing = _this12.events.eventsGoing$.getValue();

                for (var i = 0; i < eventsGoing.length; i++) {
                  if (eventsGoing[i] === _this12.event._id) {
                    eventsGoing.splice(i, 1);
                  }
                }

                console.log(eventsGoing);

                _this12.events.eventsGoing$.next(eventsGoing);
              });
            }
          }
        }, {
          key: "goingToast",
          value: function goingToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var toast;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.toast.create({
                        message: 'You are going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context13.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "notGoingToast",
          value: function notGoingToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var toast;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.toast.create({
                        message: 'You are no longer going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context14.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "eventPage",
          value: function eventPage(event) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
          }
        }]);

        return GoingIconComponent;
      }();

      GoingIconComponent.ctorParameters = function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }];
      };

      GoingIconComponent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        userEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      GoingIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-going-icon',
        template: _raw_loader_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('going', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: 'blue',
          opacity: '0.4',
          transition: '0.5s',
          transform: 'scale(0.9)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#21ce99',
          opacity: '1',
          transition: '0.5s',
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('not-going <=> going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))])],
        styles: [_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])], GoingIconComponent);
      /***/
    },

    /***/
    "FLRm":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FLRm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "FuCT":
    /*!***********************************************************************!*\
      !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
      \***********************************************************************/

    /*! exports provided: NotGoingIconComponent */

    /***/
    function FuCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotGoingIconComponent", function () {
        return NotGoingIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-going-icon.component.html */
      "NLRV");
      /* harmony import */


      var _not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-going-icon.component.scss */
      "J9/d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/events.service */
      "riPR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var NotGoingIconComponent = /*#__PURE__*/function () {
        function NotGoingIconComponent(events, toast) {
          _classCallCheck(this, NotGoingIconComponent);

          this.events = events;
          this.toast = toast;
          this.notGoingState = 'not-going';
          this.iconName = 'add-circle';
        }

        _createClass(NotGoingIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleNotGoingState",
          value: function toggleNotGoingState(event) {
            if (this.notGoingState === 'not-going') {
              this.notGoingState = 'going';
              this.iconName = 'close-circle-outline';
              this.goingToast();
              console.log("Going to event, ".concat(event.title));
              this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
            } else {
              this.notGoingState = 'not-not-going';
              this.iconName = 'add-circle-outline';
              this.notGoingToast();
              console.log('No longer going to Event');
              this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
            }
          }
        }, {
          key: "goingToast",
          value: function goingToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var toast;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.toast.create({
                        message: 'You are going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context15.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "notGoingToast",
          value: function notGoingToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var toast;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.toast.create({
                        message: 'You are no longer going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context16.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return NotGoingIconComponent;
      }();

      NotGoingIconComponent.ctorParameters = function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      NotGoingIconComponent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        userEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NotGoingIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-going-icon',
        template: _raw_loader_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('notGoing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#e4405f',
          opacity: '0.4',
          transition: '0.5s',
          transform: 'scale(0.9)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('not-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#21ce99',
          opacity: '1',
          transition: '0.5s',
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('not-going <=> ot-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))])],
        styles: [_not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], NotGoingIconComponent);
      /***/
    },

    /***/
    "IM1W":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function IM1W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-buttons {\n  position: relative;\n  left: 10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\n.follow-button {\n  --color: #24d8a8;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #24d8a8;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n.unfollow-button {\n  --color: #faa71b;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #faa71b;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZGIiwiZmlsZSI6InVwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cbi51bmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICMyNGQ4YTg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICMyNGQ4YTg7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8vIENoYW5nZSBjb2xvclxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "J9/d":
    /*!*************************************************************************!*\
      !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function J9D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "MKys":
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function MKys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(auth) {
          _classCallCheck(this, AuthGuardService);

          this.auth = auth;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.isAuthenticated();
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthGuardService);
      /***/
    },

    /***/
    "MxxR":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function MxxR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".comment-button {\n  width: 130px;\n  --color: #0055a5;\n  font-size: 1em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\nion-icon {\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: -5px;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button, .follow-button, .unfollow-button {\n    font-size: 1em;\n    width: 130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvbGxvdy1jb21tZW50LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDSSxjQUFBO0lBQ0EsWUFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoiZm9sbG93LWNvbW1lbnQtYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWJ1dHRvbntcbiAgd2lkdGg6IDEzMHB4O1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01cHg7XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbW1lbnQtYnV0dG9uLCAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHdpZHRoOiAxMzBweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "NLRV":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NLRV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\n            <p>No longer going to this Event?</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleNotGoingState(event)\" tappable [@notGoing]=\"notGoingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, auth, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.auth = auth;
          this.router = router;
          this.tabsPlacement = 'bottom';
          this.tabsLayout = 'icon-top';
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.auth.authenticationState.unsubscribe();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this13 = this;

            this.auth.checkToken();
            this.platform.ready().then(function () {}); // State for the User. If Authentication State == False, the app reverts back to the landing page

            this.auth.authenticationState.subscribe(function (state) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        if (state) {
                          this.router.navigate(['home']);
                        } else {
                          this.router.navigate(['']);
                        }

                      case 1:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));
            });
          }
        }, {
          key: "createOnline$",
          value: function createOnline$() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AppComponent);
      /***/
    },

    /***/
    "U8oy":
    /*!***********************************************!*\
      !*** ./src/app/services/favorites.service.ts ***!
      \***********************************************/

    /*! exports provided: FavoritesService */

    /***/
    function U8oy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
        return FavoritesService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var FavoritesService = /*#__PURE__*/function () {
        function FavoritesService(http, profile, toast) {
          _classCallCheck(this, FavoritesService);

          this.http = http;
          this.profile = profile;
          this.toast = toast;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
          this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(FavoritesService, [{
          key: "getFavorites",
          value: function getFavorites(email) {
            console.log('Getting Favorites');
            return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/get-favorites"), {
              email: email
            });
          }
        }, {
          key: "favoriteThisJob",
          value: function favoriteThisJob(job) {
            var _this14 = this;

            // get user's email for database query
            var email = this.profile.activeEmail; // put this job's id into this user's favoriteJobs property

            job.userEmail = email;
            var id = job._id; // this.favoriteJobs$.next([job]);

            return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/favorite"), {
              email: email,
              _id: id
            }).subscribe(function (data) {
              console.log('Posting Favorite Job to Database..');

              var updatedFavorites = _toConsumableArray(Object.values(data));

              _this14.favoriteJobs$.next(updatedFavorites);

              _this14.presentToastFavorited('You favorited this job!');
            });
          }
        }, {
          key: "unFavoriteThisJob",
          value: function unFavoriteThisJob(job) {
            var _this15 = this;

            // get user's email for database query
            var email = this.profile.activeEmail;
            job.userEmail = email;
            var id = job._id; // post to database

            this.http.post("".concat(this.BACKEND_URL, "/api/jobs/unfavorite"), {
              email: email,
              _id: id
            }).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                var updatedFavorites;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        console.log("Unfavorite data value: ", data);
                        updatedFavorites = _toConsumableArray(Object.values(data)); // for (let i = 0; i < updatedFavorites.length; i++) {
                        //   if (updatedFavorites[i] === job) {
                        //     updatedFavorites.splice(i, 1);
                        //   }
                        // }

                        this.favoriteJobs$.next(updatedFavorites);
                        this.presentToastUnfavorited('You removed this job from Favorites.');

                      case 4:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));
            }); // update favoriteJobsSubject

            console.log('Unfavoriting this Job');
          }
        }, {
          key: "presentToastFavorited",
          value: function presentToastFavorited(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var toast;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.toast.create({
                        message: msg,
                        duration: 3000,
                        cssClass: 'favorited-toast',
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context19.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "presentToastUnfavorited",
          value: function presentToastUnfavorited(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var toast;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.toast.create({
                        message: msg,
                        duration: 3000,
                        cssClass: 'unfavorited-toast',
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context20.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return FavoritesService;
      }();

      FavoritesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      FavoritesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], FavoritesService);
      /***/
    },

    /***/
    "V38i":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V38i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n\n";
      /***/
    },

    /***/
    "Y05Y":
    /*!*****************************************************************!*\
      !*** ./src/app/components/going-icon/going-icon.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Y05Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 40px;\n  width: 100px;\n  margin-left: 0px;\n  margin-right: 10px;\n}\n\n.not-going {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button {\n  margin-right: 10px;\n  --background: #edf3f8;\n  color: #005191;\n}\n\n.going {\n  --color: white;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.going:hover {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dvaW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFLRTtFQUNFLGNBQUE7QUFISiIsImZpbGUiOiJnb2luZy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLy8gLnRodW1ibmFpbCB7XG5cbi8vIH1cblxuLm5vdC1nb2luZyB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZTk5YjE0KTtcbn1cblxuLmdyZXktYnV0dG9ue1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2VkZjNmODtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5nb2luZyB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcblxuICAmOmhvdmVyIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5cblxuIl19 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: jwtOptionsFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
        return jwtOptionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "NuaS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ion-bottom-drawer */
      "rFvw");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./emitters/favorites-event-emitter.service */
      "lFXj");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "eHpL");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9"); // Angular Modules
      // import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
      // const config: SocketIoConfig = { url: 'http://10.0.1.5:3000', options: {} };
      // Third Party
      // Custom Modules
      // Custom Emitters
      //  Ionic Modules
      // For JWT


      function jwtOptionsFactory(storage) {
        return {
          tokenGetter: function tokenGetter() {
            return storage.get('access_token');
          },
          whitelistedDomains: ['localhost:42dfc00']
        };
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_10__["IonBottomDrawerModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_11__["CustomComponentsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], // SocketIoModule.forRoot(config),
        _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
          jwtOptionsProvider: {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JWT_OPTIONS"],
            useFactory: jwtOptionsFactory,
            deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"]]
          }
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: true
        })],
        providers: [_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_12__["PostPageEmitterService"], _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_13__["FavoritesEventEmitterService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_18__["FilePath"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_19__["WebView"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "b7Ok":
    /*!***************************************************************!*\
      !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
      \***************************************************************/

    /*! exports provided: HeartIconComponent */

    /***/
    function b7Ok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeartIconComponent", function () {
        return HeartIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./heart-icon.component.html */
      "d0Dc");
      /* harmony import */


      var _heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./heart-icon.component.scss */
      "pBns");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/favorites.service */
      "U8oy");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");

      var HeartIconComponent = /*#__PURE__*/function () {
        function HeartIconComponent(favorites, profile) {
          _classCallCheck(this, HeartIconComponent);

          this.favorites = favorites;
          this.profile = profile;
          this.favoriteState = 'unfavorited';
          this.iconName = 'heart-empty';
        }

        _createClass(HeartIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            setTimeout(function () {
              var _iterator = _createForOfIteratorHelper(_this16.favoriteJobs),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var job = _step.value;

                  if (_this16.job._id == job._id) {
                    _this16.setFavoriteStateOn();
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }, 300);
          }
        }, {
          key: "toggleLikeState",
          value: function toggleLikeState() {
            if (this.favoriteState === 'unfavorited') {
              this.setFavoriteStateOn();
              this.favorites.favoriteThisJob(this.job);
            } else {
              this.setFavoriteStateOff();
              this.favorites.unFavoriteThisJob(this.job);
            }
          }
        }, {
          key: "setFavoriteStateOn",
          value: function setFavoriteStateOn() {
            this.favoriteState = 'favorited';
            this.iconName = 'heart';
          }
        }, {
          key: "setFavoriteStateOff",
          value: function setFavoriteStateOff() {
            this.favoriteState = 'unfavorited';
            this.iconName = 'heart-empty';
          }
        }]);

        return HeartIconComponent;
      }();

      HeartIconComponent.ctorParameters = function () {
        return [{
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }];
      };

      HeartIconComponent.propDecorators = {
        job: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        favoriteJobs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HeartIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-heart-icon',
        template: _raw_loader_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('heart', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('unfavorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#faa71b',
          opacity: '1',
          transform: 'scale(0.9)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          color: '#faa71b',
          opacity: '1',
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('unfavorited <=> favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms ease-out'))])],
        styles: [_heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]])], HeartIconComponent);
      /***/
    },

    /***/
    "ctJg":
    /*!*******************************************************************!*\
      !*** ./src/app/components/follow-icon/follow-icon.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function ctJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  --color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvbGxvdy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJmb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgLS1jb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */";
      /***/
    },

    /***/
    "d0Dc":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d0Dc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"favoriteState\" style=\"font-size: 3em\" [name]=\"iconName\"></ion-icon>\n";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lFXj":
    /*!*************************************************************!*\
      !*** ./src/app/emitters/favorites-event-emitter.service.ts ***!
      \*************************************************************/

    /*! exports provided: FavoritesEventEmitterService */

    /***/
    function lFXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesEventEmitterService", function () {
        return FavoritesEventEmitterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FavoritesEventEmitterService = /*#__PURE__*/function () {
        function FavoritesEventEmitterService() {
          _classCallCheck(this, FavoritesEventEmitterService);

          this.invokeJobsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(FavoritesEventEmitterService, [{
          key: "onBackAction",
          value: function onBackAction() {
            this.invokeJobsPageRefresh.emit();
          }
        }]);

        return FavoritesEventEmitterService;
      }();

      FavoritesEventEmitterService.ctorParameters = function () {
        return [];
      };

      FavoritesEventEmitterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FavoritesEventEmitterService);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "NuaS");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage, alertController, helper, plt, toast) {
          var _this17 = this;

          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.alertController = alertController;
          this.helper = helper;
          this.plt = plt;
          this.toast = toast;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
          this.TOKEN_KEY = 'access_token';
          this.user = null;
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
          this.activeEmail = ''; //  Define type

          this.userInfo = {
            fullName: '',
            about: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: '',
            password: ''
          }; // Inside the constructor we always check for an existing token so we can automatically log in a user

          this.plt.ready().then(function () {
            _this17.checkToken();

            _this17.getEmailFromToken();
          });
          console.log('Authentication State');
          this.authenticationState.subscribe(console.log);
        } // tslint:disable-next-line: use-lifecycle-interface


        _createClass(AuthService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {} // Get UserInfo -- testing purposes. Delete eventually.

        }, {
          key: "getUserInfo",
          value: function getUserInfo() {
            console.log(this.userInfo);
          } //  Sign up Functions

        }, {
          key: "getPersonalInfo",
          value: function getPersonalInfo(data) {
            console.log('Sent Personal Infoto Auth Service: ');
            this.userInfo.fullName = data.fullName;
            this.userInfo.about = data.about;
            this.userInfo.gender = data.gender;
            this.userInfo.dob = data.dob;
            this.userInfo.school = data.school;
            this.userInfo.grade = data.grade;
          }
        }, {
          key: "getProfilePicture",
          value: function getProfilePicture(data) {
            console.log('Sending Profile Picture URL to Auth Service...');
            this.userInfo.profilePicture = data;
            console.log(this.userInfo);
          }
        }, {
          key: "getResume",
          value: function getResume(data) {
            console.log('data from auth service: ' + data);
            console.log('Sent Resume to Auth Service');
            this.userInfo.resume = data;
            console.log(this.userInfo);
          }
        }, {
          key: "getLoginCredentials",
          value: function getLoginCredentials(email, password) {
            console.log('Sent Login Credentials to Auth Service');
            this.userInfo.email = email;
            this.userInfo.password = password;
            console.log(this.userInfo);
          }
        }, {
          key: "doesUserExists",
          value: function doesUserExists(email, password) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/signup/does-user-exist"), {
              email: email,
              password: password
            });
          } // looks up our storage for a valid JWT and if found, changes our authenticationState

        }, {
          key: "checkToken",
          value: function checkToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      this.storage.get(this.TOKEN_KEY).then(function (token) {
                        if (token) {
                          var decoded = _this18.helper.decodeToken(token);

                          var isExpired = _this18.helper.isTokenExpired(token);

                          if (!isExpired) {
                            _this18.user = decoded;
                            console.log('Decoded Token: ' + JSON.stringify(decoded));

                            _this18.authenticationState.next(true);
                          } else {
                            console.log('Token Removed from Storage');

                            _this18.storage.remove(_this18.TOKEN_KEY);
                          }
                        }
                      });

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "checkIfUserExits",
          value: function checkIfUserExits(email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/admin/students"), {
              email: email
            }).subscribe();
          }
        }, {
          key: "getEmailFromToken",
          value: function getEmailFromToken() {
            var _this19 = this;

            this.storage.get(this.TOKEN_KEY).then(function (token) {
              if (token) {
                var decoded = _this19.helper.decodeToken(token);

                console.log('Token Email: ' + decoded.email);
                _this19.activeEmail = decoded.email;
              }
            });
          } //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format

        }, {
          key: "sendEmailWithCode",
          value: function sendEmailWithCode(code, email) {
            console.log('almost there');
            return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials"), {
              code: code,
              email: email
            }).subscribe();
          }
        }, {
          key: "sendEmailWithCodeForgotPassword",
          value: function sendEmailWithCodeForgotPassword(code, email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials/forgot-password-email-code"), {
              code: code,
              email: email
            }).subscribe();
          } // Register User

        }, {
          key: "register",
          value: function register() {
            this.http.post("".concat(this.BACKEND_URL, "/api/signup"), this.userInfo).subscribe();
          } // Login User

        }, {
          key: "login",
          value: function login(data) {
            var _this20 = this;

            console.log('Logging in');
            return this.loginSub = this.http.post("".concat(this.BACKEND_URL, "/api/"), {
              email: data.email,
              password: data.password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
              if (!res) {
                console.log('There was no response. There might be a bad password');
              }

              _this20.storage.set(_this20.TOKEN_KEY, res['token']);

              _this20.user = _this20.helper.decodeToken(res['token']);
              _this20.activeEmail = _this20.user.email;

              _this20.authenticationState.next(true);

              console.log('Active User: ' + _this20.user.email);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
              console.error(e);

              if (e.error.msg === 'The email and password don\'t match.') {
                _this20.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
              } else if (e.error.msg === 'The user does not exist') {
                _this20.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
              } else if (e.message.startsWith('Http failure response')) {
                _this20.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
              } else {
                _this20.presentAlert('Email/Password Error', 'Please try again.');
              }

              throw new Error(e);
            })).subscribe();
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var toast;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.toast.create({
                        message: 'There was an error with your password or email. Please try again.',
                        duration: 5000,
                        cssClass: 'wrong-password-toast',
                        keyboardClose: true,
                        position: 'top'
                      });

                    case 2:
                      toast = _context22.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var alert;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context23.sent;
                      _context23.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email, newPassword) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials/forgot-password"), {
              email: email,
              newPassword: newPassword
            }).subscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this21 = this;

            this.storage.remove(this.TOKEN_KEY).then(function (token) {
              console.log('Logging out...');
              _this21.user = null;
              _this21.userInfo = {
                fullName: '',
                about: '',
                gender: '',
                dob: '',
                school: '',
                grade: '',
                profilePicture: '',
                resume: '',
                email: '',
                password: ''
              }, _this21.authenticationState.next(false); // window.location.reload();
            });
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], AuthService);
      /***/
    },

    /***/
    "p/hF":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pHF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n\n      <ion-button *ngIf=\"!following\" class=\"follow-button\" (click)=\"follow(postID)\">Follow {{followingLength}}\n      </ion-button>\n      <ion-button *ngIf=\"following\" class=\"unfollow-button\" (click)=\"unFollow(postID)\">Unfollow {{followingLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "pBns":
    /*!*****************************************************************!*\
      !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function pBns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  float: right;\n  z-index: 9999;\n  position: relative;\n  right: 10px;\n  color: #faa71b;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogOTk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTBweDtcbiAgY29sb3I6ICNmYWE3MWI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "riPR":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function riPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");

      var EventsService = /*#__PURE__*/function () {
        function EventsService(http, profile) {
          _classCallCheck(this, EventsService);

          this.http = http;
          this.profile = profile;
          this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        }

        _createClass(EventsService, [{
          key: "getEvents",
          value: function getEvents() {
            console.log('Getting Events');
            return this.http.get("".concat(this.BACKEND_URL, "/api/events"));
          }
        }, {
          key: "getEventsGoing",
          value: function getEventsGoing(id) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/events-going"), {
              _id: id
            });
          }
        }, {
          key: "goingToEvent",
          value: function goingToEvent(eventID, userEmail, id) {
            console.log(this.profile);
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/go-to-event"), {
              eventID: eventID,
              userEmail: userEmail,
              id: id
            });
          }
        }, {
          key: "notGoingToEvent",
          value: function notGoingToEvent(eventID, userEmail, id) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/dont-go-to-event"), {
              userEmail: userEmail,
              eventID: eventID,
              id: id
            });
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent(eventId) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/delete-event"), {
              _id: eventId
            });
          }
        }]);

        return EventsService;
      }();

      EventsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }];
      };

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], EventsService);
      /***/
    },

    /***/
    "u6v2":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: UpDownVoteButtonsComponent */

    /***/
    function u6v2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpDownVoteButtonsComponent", function () {
        return UpDownVoteButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./up-down-vote-buttons.component.html */
      "p/hF");
      /* harmony import */


      var _up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./up-down-vote-buttons.component.scss */
      "IM1W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");

      var UpDownVoteButtonsComponent = /*#__PURE__*/function () {
        function UpDownVoteButtonsComponent(posts, profile, toast, postsEmitterService) {
          _classCallCheck(this, UpDownVoteButtonsComponent);

          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.postsEmitterService = postsEmitterService;
          this.upVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          this.downVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          this.followingLength = null;
          this.following = false;
          this.upVoters = [];
          this.downVoters = [];
          this.followers = [];
          this.upVoted = false;
          this.downVoted = false;
        }

        _createClass(UpDownVoteButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this22 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.posts.getPostInfo(this.postID).subscribe(function (postInfo) {
                        _this22.upVotes = postInfo['upvotes'];
                        _this22.downVotes = postInfo['downvotes'];
                        _this22.upVoters = postInfo['upvoters'];
                        _this22.downVoters = postInfo['downvoters'];
                        var followers = postInfo['followers'];

                        _this22.upVotes$.next(_this22.upVotes);

                        _this22.downVotes$.next(_this22.downVotes);

                        _this22.upVoteLength = _this22.upVotes$.getValue();
                        _this22.downVoteLength = _this22.downVotes$.getValue(); // Get User Email

                        _this22.profile.getUserDetails().subscribe(function (userDetails) {
                          var userEmail = userDetails['email'];
                          var following = false;
                          var upVoted = false;
                          var downVoted = false;
                          followers.find(findFollower);

                          function findFollower(follower) {
                            if (!follower) {// User is not following post
                            }

                            if (follower === userEmail) {
                              following = true;
                            }
                          }

                          _this22.upVoters.find(findUpVoter);

                          _this22.downVoters.find(findDownVoter);

                          function findUpVoter(upVoter) {
                            if (!upVoter) {}

                            if (upVoter === userEmail) {
                              return upVoted = true;
                            }

                            console.log("Upvoter: ".concat(upVoter));
                          }

                          function findDownVoter(downVoter) {
                            if (!downVoter) {}

                            if (downVoter === userEmail) {
                              return downVoted = true;
                            }
                          }

                          _this22.userEmail = userEmail;
                          _this22.upVoted = upVoted;
                          _this22.downVoted = downVoted;
                          _this22.followers = followers;
                          _this22.following = following;
                          console.log(followers.length);

                          _this22.followingLength$.next(followers.length);

                          _this22.followingLength$.subscribe(function (data) {
                            _this22.followingLength = data;
                          });
                        });
                      });

                    case 2:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "upVotePost",
          value: function upVotePost() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this23 = this;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.posts.upVotePost(this.postID, this.userEmail).subscribe(function (data) {
                        var upvotes = data['upvotes'];
                        var downvotes = data['downvotes'];
                        console.log(data);

                        _this23.upVotes$.next(upvotes);

                        _this23.downVotes$.next(downvotes);

                        _this23.upVoted = true;
                        _this23.upVoteLength = _this23.upVotes$.getValue();
                        _this23.downVoteLength = _this23.downVotes$.getValue();

                        if (_this23.upVoted === true) {
                          return _this23.downVoted = false;
                        }
                      });

                    case 2:
                      this.postsEmitterService.postPageRefresh();
                      this.upVotePostToast();

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "upVotePostToast",
          value: function upVotePostToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var upVotePostToast;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.toast.create({
                        cssClass: 'upvoted-toast',
                        message: 'You have UPVOTED this post.',
                        duration: 2000
                      });

                    case 2:
                      upVotePostToast = _context26.sent;
                      upVotePostToast.present();

                    case 4:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "downVotePost",
          value: function downVotePost() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this24 = this;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.posts.downVotePost(this.postID, this.userEmail).subscribe(function (data) {
                        var upvotes = data['upvotes'];
                        var downvotes = data['downvotes'];
                        console.log(data);

                        _this24.upVotes$.next(upvotes);

                        _this24.downVotes$.next(downvotes);

                        _this24.downVoted = true;
                        _this24.upVoteLength = _this24.upVotes$.getValue();
                        _this24.downVoteLength = _this24.downVotes$.getValue();

                        if (_this24.downVoted === true) {
                          return _this24.upVoted = false;
                        }
                      });

                    case 2:
                      this.postsEmitterService.postPageRefresh();
                      this.downVoteToast();

                    case 4:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "downVoteToast",
          value: function downVoteToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var downVoteToast;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.toast.create({
                        cssClass: 'downvoted-toast',
                        message: 'You have DOWNVOTED this post.',
                        duration: 2000
                      });

                    case 2:
                      downVoteToast = _context28.sent;
                      downVoteToast.present();

                    case 4:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "follow",
          value: function follow(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return console.log('Following Post');

                    case 2:
                      _context29.next = 4;
                      return console.log(postID);

                    case 4:
                      _context29.next = 6;
                      return this.posts.followPost(postID, this.postEmail);

                    case 6:
                      this.following = true;
                      this.followingLength$.next(this.followingLength + 1);
                      _context29.next = 10;
                      return this.followToast();

                    case 10:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "followToast",
          value: function followToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var followToast;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.toast.create({
                        cssClass: 'followed-toast',
                        message: 'You are FOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      followToast = _context30.sent;
                      followToast.present();

                    case 4:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "unFollow",
          value: function unFollow(postID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return console.log('Unfollowing Post');

                    case 2:
                      _context31.next = 4;
                      return console.log(postID);

                    case 4:
                      _context31.next = 6;
                      return this.posts.unFollowPost(postID, this.postEmail);

                    case 6:
                      this.following = false;
                      this.followingLength$.next(this.followingLength - 1);
                      _context31.next = 10;
                      return this.unFollowToast();

                    case 10:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "unFollowToast",
          value: function unFollowToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var unFollowToast;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.toast.create({
                        cssClass: 'unfollowed-toast',
                        message: 'You are UNFOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      unFollowToast = _context32.sent;
                      unFollowToast.present();

                    case 4:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }]);

        return UpDownVoteButtonsComponent;
      }();

      UpDownVoteButtonsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]
        }];
      };

      UpDownVoteButtonsComponent.propDecorators = {
        postID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        postEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      UpDownVoteButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-up-down-vote-buttons',
        template: _raw_loader_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"]])], UpDownVoteButtonsComponent);
      /***/
    },

    /***/
    "v0br":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function v0br(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"end\">\n    <ion-button\n    class=\"comment-button\"\n    (click)=\"postPage()\"><ion-icon src=\"../../assets/icon/comments-icon.svg\"></ion-icon> {{comments.length}}\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      "MKys");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-login-login-module */
          "pages-auth-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/login/login.module */
          "qdgq")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, // Change to sign up path name later
      {
        path: 'personal-info',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-sign-up-personal-info-personal-info-module */
          "pages-auth-sign-up-personal-info-personal-info-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/sign-up/personal-info/personal-info.module */
          "a3/p")).then(function (m) {
            return m.PersonalInfoPageModule;
          });
        }
      }, //  change to forgot password path name later
      {
        path: 'enter-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-forgot-password-enter-email-enter-email-module */
          "pages-auth-forgot-password-enter-email-enter-email-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/forgot-password/enter-email/enter-email.module */
          "yucT")).then(function (m) {
            return m.EnterEmailPageModule;
          });
        }
      }, {
        path: 'enter-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-forgot-password-enter-code-enter-code-module */
          "forgot-password-enter-code-enter-code-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/forgot-password/enter-code/enter-code.module */
          "veoP")).then(function (m) {
            return m.EnterCodePageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-events-events-module */
          [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/events/events.module */
          "Obr4")).then(function (m) {
            return m.EventsPageModule;
          });
        }
      }, {
        path: 'mentors',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-mentors-mentors-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-mentors-mentors-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/mentors/mentors.module */
          "heuU")).then(function (m) {
            return m.MentorsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-login-login-module */
          "pages-auth-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/login/login.module */
          "qdgq")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'replies-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-replies-page-replies-page-module */
          [__webpack_require__.e("default~modals-replies-page-replies-page-module~pages-events-events-module~pages-jobs-jobs-module~pa~f0afecd2"), __webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ./modals/replies-page/replies-page.module */
          "fU57")).then(function (m) {
            return m.RepliesPagePageModule;
          });
        }
      }, {
        path: 'edit-post',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-edit-post-edit-post-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./modals/edit-post/edit-post.module */
          "9CtM")).then(function (m) {
            return m.EditPostPageModule;
          });
        }
      }, {
        path: 'image-cropper',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-image-cropper-image-cropper-module */
          "default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83").then(__webpack_require__.bind(null,
          /*! ./modals/image-cropper/image-cropper.module */
          "Scpy")).then(function (m) {
            return m.ImageCropperPageModule;
          });
        }
      }, {
        path: 'report-convo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-report-convo-report-convo-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./modals/report-convo/report-convo.module */
          "6kEE")).then(function (m) {
            return m.ReportConvoPageModule;
          });
        }
      }, {
        path: 'new-message-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-new-message-student-new-message-student-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./modals/new-message-student/new-message-student.module */
          "AhZb")).then(function (m) {
            return m.NewMessageStudentPageModule;
          });
        }
      }, {
        path: 'new-message-mentor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-new-message-mentor-new-message-mentor-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./modals/new-message-mentor/new-message-mentor.module */
          "OWIS")).then(function (m) {
            return m.NewMessageMentorPageModule;
          });
        }
      }, {
        path: 'report-convo-mentor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-report-convo-mentor-report-convo-mentor-module */
          "modals-report-convo-mentor-report-convo-mentor-module").then(__webpack_require__.bind(null,
          /*! ./modals/report-convo-mentor/report-convo-mentor.module */
          "3KhJ")).then(function (m) {
            return m.ReportConvoMentorPageModule;
          });
        }
      }, {
        path: 'upload-resume-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modals-upload-resume-modal-upload-resume-modal-module */
          "default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module").then(__webpack_require__.bind(null,
          /*! ./modals/upload-resume-modal/upload-resume-modal.module */
          "BD02")).then(function (m) {
            return m.UploadResumeModalPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          enableTracing: false,
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zAgk":
    /*!*******************************************************!*\
      !*** ./src/app/components/custom-component.module.ts ***!
      \*******************************************************/

    /*! exports provided: CustomComponentsModule */

    /***/
    function zAgk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function () {
        return CustomComponentsModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./heart-icon/heart-icon.component */
      "b7Ok");
      /* harmony import */


      var _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./going-icon/going-icon.component */
      "EdnJ");
      /* harmony import */


      var _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./not-going-icon/not-going-icon.component */
      "FuCT");
      /* harmony import */


      var _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./follow-icon/follow-icon.component */
      "/Szd");
      /* harmony import */


      var _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./up-down-vote-buttons/up-down-vote-buttons.component */
      "u6v2");
      /* harmony import */


      var _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./comment-vote-bar/comment-vote-bar.component */
      "Cmz0");
      /* harmony import */


      var _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./follow-comment-buttons/follow-comment-buttons.component */
      "84P7");

      var CustomComponentsModule = function CustomComponentsModule() {
        _classCallCheck(this, CustomComponentsModule);
      };

      CustomComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
        declarations: [_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__["HeartIconComponent"], _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__["GoingIconComponent"], _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__["NotGoingIconComponent"], _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__["FollowIconComponent"], _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__["UpDownVoteButtonsComponent"], _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommentVoteBarComponent"], _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FollowCommentButtonsComponent"]],
        exports: [_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__["HeartIconComponent"], _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__["GoingIconComponent"], _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__["NotGoingIconComponent"], _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__["FollowIconComponent"], _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__["UpDownVoteButtonsComponent"], _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommentVoteBarComponent"], _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FollowCommentButtonsComponent"]]
      })], CustomComponentsModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
        if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
          navigator.serviceWorker.register('/ngsw-worker.js');
        }
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map