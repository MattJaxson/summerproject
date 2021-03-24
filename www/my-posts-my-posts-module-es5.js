(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-posts-my-posts-module"], {
    /***/
    "3c3Z":
    /*!*********************************************************!*\
      !*** ./src/app/pages/posts/my-posts/my-posts.module.ts ***!
      \*********************************************************/

    /*! exports provided: MyPostsPageModule */

    /***/
    function c3Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPostsPageModule", function () {
        return MyPostsPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/custom-component.module */
      "zAgk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _my_posts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-posts-routing.module */
      "zico");
      /* harmony import */


      var _my_posts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./my-posts.page */
      "R97K");

      var MyPostsPageModule = function MyPostsPageModule() {
        _classCallCheck(this, MyPostsPageModule);
      };

      MyPostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _my_posts_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyPostsPageRoutingModule"]],
        declarations: [_my_posts_page__WEBPACK_IMPORTED_MODULE_7__["MyPostsPage"]]
      })], MyPostsPageModule);
      /***/
    },

    /***/
    "MYB+":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/my-posts/my-posts.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function MYB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>My Posts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n    <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-lg-down\">\n      <ion-col offset-lg=\"2\" offset-xl=\"3\" size=\"3\" style=\"margin: 3% 0% 2% 0%;\">\n        <h1 style=\"font-size: 3em;\n        font-weight: 600;\">My Posts</h1>\n      </ion-col>\n      <ion-col style=\"padding-top: 64px;\" push-lg=\"2.5\" push-xl=\"0.8\" size-lg=\"4.2\" size-xl=\"3.5\">\n        <ion-button style=\"position: relative; top: 33px;\" class=\"add-button\"  (click)=\"addPost()\">\n          Add Post\n        </ion-button>\n        <ion-button class=\"blue-button\"  (click)=\"back()\">\n          Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col\n      class=\"no-posts ion-align-items-center\"\n      *ngIf=\"allMyPosts.length === 0\"\n      size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n      <div>\n        <p style=\"font-size: 1.2em;\">You currently do not have any posts. Please click the Add Post button to create a Post.</p>\n      </div>\n      </ion-col>\n\n    <!-- Posts -->\n    <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <div class=\"post\" *ngFor=\"let post of allMyPosts\" style=\"margin-top: 1%;\">\n        <!-- Profile Header -->\n        <ion-row class=\"ion-justify-content-center\">\n              <!-- Profile Picture -->\n              <ion-col size=\"1\">\n                <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n              </ion-col>\n\n              <!-- Post Creator's Name -->\n              <ion-col size=\"10\">\n                <p class=\"post-name\">{{post.creatorName}}</p>\n                <p class=\"post-date\">{{post.date}}</p>\n              </ion-col>\n\n        </ion-row>\n        <!-- Post Content -->\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- (click)=\"postPage(post)\"  -->\n          <!-- 1080x1350 -->\n          <ion-col size=\"11\">\n            <p class=\"post-title\">{{post.title}}</p>\n            <div class=\"hashtags\">\n              <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n                #{{tag}}\n              </p>\n            </div>\n            <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n              No #hashtags for this post\n            </p>\n            <p [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n            <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n            <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText()\">\n              {{ showShortDesciption ? 'SHOW ALL': 'SHOW LESS' }}\n            </button>\n          </ion-col>\n        </ion-row>\n        <!-- Comment -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <ion-item  style=\"height: auto;\" lines=\"none\">\n              <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                <ion-textarea\n                    class=\"comment-input-mobile\"\n                    autogrow=\"true\"\n                    autocapitalize=\"true\"\n                    rows=\"5\"\n                    spellcheck=\"true\"\n                    wrap=\"soft\"\n                    type=\"text\"\n                    #postComment\n                    placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  *ngIf=\"postComment.value.length >= 2;\"\n                  class=\"comment-post-button\"\n                  name=\"send\"\n                  type=\"submit\">Post Comment\n                </ion-button>\n              </form>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Post Buttons -->\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- Upvote & Downvote-->\n          <ion-col size=\"8\">\n            <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n          </ion-col>\n          <!-- Follow & Comment -->\n          <ion-col size=\"3\">\n            <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "R97K":
    /*!*******************************************************!*\
      !*** ./src/app/pages/posts/my-posts/my-posts.page.ts ***!
      \*******************************************************/

    /*! exports provided: MyPostsPage */

    /***/
    function R97K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPostsPage", function () {
        return MyPostsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_posts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-posts.page.html */
      "MYB+");
      /* harmony import */


      var _my_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-posts.page.scss */
      "f6im");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MyPostsPage = /*#__PURE__*/function () {
        function MyPostsPage(activatedRoute, router, posts, profile, toast, formBuilder, eventEmitterService, modal, location) {
          _classCallCheck(this, MyPostsPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.formBuilder = formBuilder;
          this.eventEmitterService = eventEmitterService;
          this.modal = modal;
          this.location = location;
          this.showShortDesciption = true;
          this.isUser = true;
          this.allMyPosts = [];
        }

        _createClass(MyPostsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.location.onPopState(function () {
              _this.eventEmitterService.onBackAction();
            });
            this.profile.getUserDetails().subscribe(function (details) {
              _this.userID = details['_id'];
              _this.userFullName = details['fullName'];
              _this.userEmail = details['email'];
              _this.userProfilePicture = details['profilePicture'];
            }); // To collect comment data

            this.commentForm = this.formBuilder.group({
              comment: ['']
            });
            var email = this.activatedRoute.snapshot.paramMap.get('email');
            this.userEmail = email;
            console.log(this.userEmail);
            this.myPosts(this.userEmail);
          }
        }, {
          key: "alterDescriptionText",
          value: function alterDescriptionText() {
            this.showShortDesciption = !this.showShortDesciption;
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
          key: "myPosts",
          value: function myPosts(userEmail) {
            var _this2 = this;

            this.posts.getMyPosts(userEmail).subscribe(function (data) {
              _this2.allMyPosts = Object.values(data).reverse();
              console.log(data);

              var _iterator = _createForOfIteratorHelper(_this2.allMyPosts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var post = _step.value;
                  post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), 'MMMM do, yyyy');
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return _this2.allMyPosts;
            });
          }
        }, {
          key: "comment",
          value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var date, toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Reset Comment Input
                      this.commentForm.reset();
                      _context.next = 3;
                      return Date.now();

                    case 3:
                      date = _context.sent;
                      console.log('Posting comment');
                      console.log('Post ID: ' + postID);
                      _context.next = 8;
                      return this.posts.comment(postID, this.userFullName, this.userEmail, this.userProfilePicture, _comment).subscribe(function () {
                        _this3.posts.getPostInfo(postID).subscribe(function (post) {
                          _this3.posts.getPostInfo(postID).subscribe(function (post) {
                            var _iterator2 = _createForOfIteratorHelper(post['comments']),
                                _step2;

                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var postComments = _step2.value;
                                console.log(postComments);
                                postComments.isUser = false;
                                postComments.canDeleteComment = false;
                                postComments.canReport = true; // If this comment is from the logged in user, they can delete and edit

                                if (postComments.userEmail === _this3.userEmail) {
                                  postComments.isUser = true;
                                  postComments.canDeleteComment = true;
                                  postComments.canReport = false;
                                }

                                postComments.repliesLength = postComments.replies.length;
                                postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                                  includeSeconds: true,
                                  addSuffix: false
                                });
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }

                            _this3.posts.commentsSubject$.next(post['comments'].reverse());
                          });
                        });
                      });

                    case 8:
                      _context.next = 10;
                      return this.posts.getPostInfo(postID).subscribe(function (post) {
                        var _iterator3 = _createForOfIteratorHelper(post['comments']),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var postComments = _step3.value;
                            postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }

                        _this3.posts.commentsSubject$.next(post['comments'].reverse());
                      });

                    case 10:
                      toast = this.toast.create({
                        message: 'Your comment has been added.',
                        duration: 1500
                      });
                      toast.then(function (toast) {
                        return toast.present();
                      });
                      _context.next = 14;
                      return this.router.navigate(['/home/posts/post-page', postID]);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MyPostsPage;
      }();

      MyPostsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]
        }];
      };

      MyPostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-posts',
        template: _raw_loader_my_posts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]])], MyPostsPage);
      /***/
    },

    /***/
    "f6im":
    /*!*********************************************************!*\
      !*** ./src/app/pages/posts/my-posts/my-posts.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function f6im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.post {\n  padding: 24px 0;\n  margin-bottom: 80px;\n  border-radius: 11px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  font-size: 1.1em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-content {\n  font-size: 1em;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #0055a5;\n  font-size: 0.9em;\n  position: relative;\n  top: -20px;\n  line-height: 25px;\n  margin: 10px 0px 0px 0px;\n}\n\n.post-buttons ion-toolbar {\n  --background: none;\n}\n\n.post-name {\n  font-size: 0.9em;\n  font-weight: 700;\n  color: #666;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.65em;\n  margin: 0;\n  line-height: 18px;\n}\n\n.show-less {\n  height: auto;\n  overflow: hidden;\n}\n\n.show-more-or-less-button {\n  float: right;\n  position: relative;\n  right: 0px;\n  margin-top: 35px;\n  padding: 0.5em;\n  background: #0055a5;\n  color: white;\n  border-radius: 5px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n\n.ellipsis {\n  float: right;\n  position: relative;\n  right: 20px;\n  top: -18px;\n}\n\n@media screen and (max-width: 567px) {\n  .post {\n    padding: 30px 0px;\n  }\n}\n\n.no-posts {\n  height: 70vh;\n}\n\nform {\n  width: 100%;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 0.55em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.no-tags {\n  font-size: 0.7em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #333;\n  opacity: 0.5;\n  position: relative;\n  top: -32px;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.blue-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0055a2);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#bffce9, #7efcd4);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.comment {\n  border: 1px solid #0055a5;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-button {\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  right: -20px;\n  top: 5px;\n}\n\n.comment-post-button {\n  --border-color: #40c59d;\n  --border-width: 2px;\n  --border-style: solid;\n  --background: #40c59d;\n  --color: white;\n  height: 40px;\n  margin: 29px auto;\n  font-weight: 600;\n  font-size: 0.6em;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-button {\n  width: 130px;\n  --background: #0055a5;\n  --background-hover: #0055a5;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215LXBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUdGOztBQUNFO0VBQ0Usa0JBQUE7QUFFSjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQWEsU0FBQTtFQUNiLGlCQUFBO0FBRUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQVcsaUJBQUE7QUFFYjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsaUJBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7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WUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBQUY7RUFHQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQURGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUFGO0VBR0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFERjtBQUNGIiwiZmlsZSI6Im15LXBvc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuIH1cbi5wb3N0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLnBvc3QtYnV0dG9uc3tcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuXG4ucG9zdC1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM2NjY7IG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cbn1cblxuLnBvc3QtZGF0ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZm9udC1zaXplOiAwLjY1ZW07XG4gIG1hcmdpbjogMDsgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uc2hvdy1sZXNzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2hvdy1tb3JlLW9yLWxlc3MtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBiYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmVsbGlwc2lzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IC0xOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuICAucG9zdCB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gIH1cbn1cblxuLm5vLXBvc3RzIHtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGFzaHRhZ3N7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzJweDtcbn1cbi5oYXNodGFne1xuICBmb250LXNpemU6IDAuNTVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNlYTg0MDA7XG59XG4ubm8tdGFncyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzJweDtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogODBweDtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IDAgODBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDMwcHggMCAxNTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnRvb2xiYXIgPiBpb24tYnV0dG9ucyA+IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA5LDIxNiwyMjQsMC4xMyk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG5cbiAgaW9uLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgfVxufVxuXG4ucG9zdC10b29sYmFyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICAgIH1cbiAgfVxufVxuXG4uYmx1ZS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMDA1NWEyKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2JmZmNlOSwgIzdlZmNkNCk7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTVhNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb21tZW50LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1ib3JkZXItY29sb3I6ICM0MGM1OWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1iYWNrZ3JvdW5kOiAjNDBjNTlkO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDI5cHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweCAwIDRweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIzMiwgMjM2LCAuMyk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDU1YTU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMTUwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtYnV0dG9ue1xuICB3aWR0aDogMTMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA1NWE1O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzFiYWY4ODtcbiAgLS1jb2xvci1mb2N1c2VkOiB3aGl0ZTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "zico":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/posts/my-posts/my-posts-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MyPostsPageRoutingModule */

    /***/
    function zico(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPostsPageRoutingModule", function () {
        return MyPostsPageRoutingModule;
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


      var _my_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-posts.page */
      "R97K");

      var routes = [{
        path: '',
        component: _my_posts_page__WEBPACK_IMPORTED_MODULE_3__["MyPostsPage"]
      }];

      var MyPostsPageRoutingModule = function MyPostsPageRoutingModule() {
        _classCallCheck(this, MyPostsPageRoutingModule);
      };

      MyPostsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyPostsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-posts-my-posts-module-es5.js.map