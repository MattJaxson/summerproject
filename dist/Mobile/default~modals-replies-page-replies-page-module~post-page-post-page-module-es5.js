(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modals-replies-page-replies-page-module~post-page-post-page-module"], {
    /***/
    "9bWj":
    /*!********************************************************************!*\
      !*** ./src/app/modals/replies-page/replies-page-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: RepliesPagePageRoutingModule */

    /***/
    function bWj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepliesPagePageRoutingModule", function () {
        return RepliesPagePageRoutingModule;
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


      var _replies_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./replies-page.page */
      "nfbU");

      var routes = [{
        path: '',
        component: _replies_page_page__WEBPACK_IMPORTED_MODULE_3__["RepliesPagePage"]
      }];

      var RepliesPagePageRoutingModule = function RepliesPagePageRoutingModule() {
        _classCallCheck(this, RepliesPagePageRoutingModule);
      };

      RepliesPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RepliesPagePageRoutingModule);
      /***/
    },

    /***/
    "JZGy":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/replies-page/replies-page.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JZGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-title slot=\"start\">Replies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Replies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- commentUser Info -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n      <ion-item lines=\"none\">\n        <ion-avatar class=\"comment-avatar\" slot=\"start\">\n          <img src=\"{{commentUserProfilePicture}}\">\n        </ion-avatar>\n        <ion-label>\n          <h6 style=\"opacity: 0.5\">{{ commentUserFullName  }} - {{ commentDate }} </h6>\n          </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <!-- Comment -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n      <p>{{ commentContents}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- Reply Input -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n    <form [formGroup]=\"repliesForm\" (ngSubmit)=\"this.repliesForm.value.reply.length > 0 ? reply(this.repliesForm.value) && ScrollToReply() : null\">\n      <ion-textarea\n      (ionFocus)=\"ScrollToTop()\"\n      (ionBlur)=\"onBlur()\"\n      (onfocusout)=\"blur()\"\n      (keydown.control.enter)=\"this.repliesForm.value.reply.length > 0 ? reply(this.repliesForm.value) && ScrollToReply() : null\"\n      class=\"reply-input\"\n      autogrow=\"true\"\n      autocapitalize=\"true\"\n      rows=\"5\"\n      spellcheck=\"true\"\n      wrap=\"soft\"\n      type=\"text\"\n      placeholder=\"Reply to this comment\" formControlName=\"reply\">\n      </ion-textarea>\n      <ion-button type=\"submit\" expand=\"block\">\n        Reply\n      </ion-button>\n    </form>\n    </ion-col>\n  </ion-row>\n\n  <!-- Line-->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n      <hr style=\"background-color: #999; opacity: 0.4; margin: 20px 0 20px 0;\">\n    </ion-col>\n  </ion-row>\n\n  <!-- Replies -->\n  <ion-row *ngFor=\"let reply of replies\" class=\"ion-justify-content-center ion-align-items-start reply-wrapper\">\n    <ion-col size=\"1\">\n      <img id=\"reply-avatar\" src=\"{{reply.userProfilePicture}}\">\n    </ion-col>\n    <ion-col size=\"5\">\n      <p class=\"reply-name\">{{reply.userFullName}}</p>\n      <p class=\"reply-text\">{{reply.reply}}</p>\n    </ion-col>\n    <ion-col size=\"1.5\">\n       <p id=\"reply-date\">{{reply.date}}</p>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button class=\"blue-button\" *ngIf=\"reply.isEditable\" (click)=\"deleteReply(reply._id)\" expand=\"block\">\n        Delete\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "dScu":
    /*!************************************************************!*\
      !*** ./src/app/modals/replies-page/replies-page.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function dScu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: linear;\n}\n\n.reply-input:hover {\n  background: rgba(250, 167, 27, 0.02);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-button[type=submit] {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88) ;\n}\n\n.blue-button {\n  width: unset;\n  height: 36px;\n  font-size: 0.85em;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.reply-wrapper {\n  padding: 10px;\n}\n\n#reply-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  position: relative;\n  right: 15px;\n}\n\n.reply-name {\n  font-weight: bold;\n  margin: 0.5em 0 0.5em;\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3JlcGxpZXMtcGFnZS9yZXBsaWVzLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yZXBsaWVzLXBhZ2UvcmVwbGllcy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBseS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4ucmVwbHktaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wMik7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbmlvbi1idXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpXG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbn1cblxuLnJlcGx5LXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jcmVwbHktYXZhdGFyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTVweDtcbn1cblxuLnJlcGx5LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtO1xufVxuXG4jcmVwbHktZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4jYmFjay1hcnJvdy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiA4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "fU57":
    /*!************************************************************!*\
      !*** ./src/app/modals/replies-page/replies-page.module.ts ***!
      \************************************************************/

    /*! exports provided: RepliesPagePageModule */

    /***/
    function fU57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepliesPagePageModule", function () {
        return RepliesPagePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./replies-page-routing.module */
      "9bWj");
      /* harmony import */


      var _replies_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./replies-page.page */
      "nfbU");

      var RepliesPagePageModule = function RepliesPagePageModule() {
        _classCallCheck(this, RepliesPagePageModule);
      };

      RepliesPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RepliesPagePageRoutingModule"]],
        declarations: [_replies_page_page__WEBPACK_IMPORTED_MODULE_6__["RepliesPagePage"]]
      })], RepliesPagePageModule);
      /***/
    },

    /***/
    "nfbU":
    /*!**********************************************************!*\
      !*** ./src/app/modals/replies-page/replies-page.page.ts ***!
      \**********************************************************/

    /*! exports provided: RepliesPagePage */

    /***/
    function nfbU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepliesPagePage", function () {
        return RepliesPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_replies_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./replies-page.page.html */
      "JZGy");
      /* harmony import */


      var _replies_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./replies-page.page.scss */
      "dScu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      "DtjX");
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      "KWWs");

      var RepliesPagePage = /*#__PURE__*/function () {
        function RepliesPagePage(formBuilder, modal, navParams, loading, profile, posts, alert, postEmitterService, notificationsService) {
          _classCallCheck(this, RepliesPagePage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.navParams = navParams;
          this.loading = loading;
          this.profile = profile;
          this.posts = posts;
          this.alert = alert;
          this.postEmitterService = postEmitterService;
          this.notificationsService = notificationsService;
          this.replies$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]([]);
          this.tabBar = document.getElementById('myTabBar');
          this.votes = document.getElementById('votes');
        }

        _createClass(RepliesPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (details) {
              _this.commentUserProfilePicture = details['profilePicture'];
            }); // To collect comment data

            this.repliesForm = this.formBuilder.group({
              reply: ['']
            });
            this.replies$.next(this.navParams.get('replies').reverse());
            this.replies$.subscribe(function (data) {
              _this.replies = data;

              var _iterator = _createForOfIteratorHelper(_this.replies),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var reply = _step.value;
                  reply.isEditable = false;
                  console.log('Reply: ', reply);

                  if (reply.userEmail == _this.userEmail) {
                    reply.isEditable = true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            this.postID = this.navParams.get('postID');
            this.commentContents = this.navParams.get('comment');
            this.commentID = this.navParams.get('commentID');
            this.commentUserFullName = this.navParams.get('commentUserFullName');
            this.commentUserEmail = this.navParams.get('commentUserEmail');
            this.commentDate = this.navParams.get('commentDate');
            this.userFullName = this.navParams.get('userFullName');
            this.userEmail = this.navParams.get('userEmail');
            this.commentUserProfilePicture = this.navParams.get('userProfilePicture');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling comment...');
            this.modal.dismiss();
          }
        }, {
          key: "refreshRepliesAmount",
          value: function refreshRepliesAmount() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "reply",
          value: function reply(_reply) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.repliesForm.reset();

                    case 2:
                      _context.next = 4;
                      return console.log('replying to comment...');

                    case 4:
                      _context.next = 6;
                      return this.posts.replyComment(this.commentID, this.postID, _reply.reply, this.userFullName, this.userEmail, this.commentUserProfilePicture, this.commentUserFullName, this.commentUserEmail).subscribe(function (data) {
                        var currentComment;
                        var currentCommentReplies = [];

                        var _iterator2 = _createForOfIteratorHelper(data['comments']),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var comment = _step2.value;

                            if (comment._id == data['comment']) {
                              currentComment = comment;

                              for (var i = 0; i < comment.replies.length; i++) {
                                currentCommentReplies.push(comment.replies[i]);
                              }
                            }
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }

                        var comments = data['comments'];
                        var userEmail = data['userEmail'];
                        var replies = data['replies']; // Give User ability to Edit, Delete, or Report a Comment.
                        // User cannot Report their own comment **

                        var _iterator3 = _createForOfIteratorHelper(comments),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var _comment = _step3.value;
                            // If the Logged in User's Email equals the creatorEmail of the Comment,
                            // they will be given the ability to edit and delete their Comment.
                            // The ability for them to report their own comment is disabled
                            _comment.repliesLength = _comment.replies.length;
                            _comment.isUser = false;
                            _comment.canDeleteComment = false;
                            _comment.canReport = true;
                            _comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(_comment.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If this comment is the logged in user, they can delete and edit

                            if (_comment.userEmail === userEmail) {
                              _comment.isUser = true;
                              _comment.canDeleteComment = true;
                              _comment.canReport = false;
                            } // Format the Reply Dates


                            for (var _i = 0; _comment.replies.length > _i; _i++) {
                              _comment.replies[_i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(_comment.replies[_i].date), {
                                addSuffix: false
                              });
                              replies.push(_comment.replies[_i]);
                            }
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }

                        _this2.replies = currentCommentReplies;

                        _this2.posts.commentsSubject$.next(comments.reverse());

                        _this2.replies$.next(_this2.replies.reverse());

                        console.log('From replyComment');
                        console.log(data); // tslint:disable-next-line: max-line-length

                        _this2.notificationsService.replyNotification(_this2.userEmail, _this2.commentUserEmail, _this2.postID, currentComment, data['newReply']).subscribe();
                      });

                    case 6:
                      _context.next = 8;
                      return this.repliesLoading();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteReply",
          value: function deleteReply(replyID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('Deleting reply with id ', replyID);
                      _context2.next = 3;
                      return this.posts.deleteReply(replyID, this.commentID, this.postID).subscribe(function (data) {
                        console.log(data);
                        var currentComment;
                        var currentCommentReplies = [];
                        var comments = data['comments'];
                        var userEmail = data['userEmail'];
                        var replies = data['replies'];

                        var _iterator4 = _createForOfIteratorHelper(comments),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var comment = _step4.value;

                            if (comment._id == data['comment']) {
                              currentComment = comment;

                              for (var i = 0; i < comment.replies.length; i++) {
                                currentCommentReplies.push(comment.replies[i]);
                              }
                            }
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }

                        var _iterator5 = _createForOfIteratorHelper(comments),
                            _step5;

                        try {
                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            var _comment2 = _step5.value;
                            _comment2.repliesLength = _comment2.replies.length;
                            _comment2.isUser = false;
                            _comment2.canDeleteComment = false;
                            _comment2.canReport = true;
                            _comment2.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(_comment2.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If the comment was posted by the current user, it becomes editable

                            if (_comment2.userEmail == userEmail) {
                              _comment2.isUser = true;
                              _comment2.canDeleteComment = true;
                              _comment2.canReport = false;
                            } // Format the Reply Dates


                            for (var _i2 = 0; _comment2.replies.length > _i2; _i2++) {
                              _comment2.replies[_i2].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(_comment2.replies[_i2].date), {
                                addSuffix: false
                              });
                              replies.push(_comment2.replies[_i2]);
                            }
                          }
                        } catch (err) {
                          _iterator5.e(err);
                        } finally {
                          _iterator5.f();
                        }

                        _this3.replies = currentCommentReplies;

                        _this3.posts.commentsSubject$.next(comments.reverse());

                        _this3.replies$.next(_this3.replies.reverse());
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "repliesLoading",
          value: function repliesLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        message: 'Replying to Comment...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return this.refreshRepliesAmount();

                    case 5:
                      _context3.next = 7;
                      return loading.present();

                    case 7:
                      _context3.next = 9;
                      return loading.onDidDismiss();

                    case 9:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      // await this.modal.dismiss();
                      // await this.confirmAlert();
                      console.log('Loading dismissed!');

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alert.create({
                        cssClass: 'success-alert',
                        message: 'Your comment has been edited.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Hide the Tab bar when the user is attempting to make a comment

        }, {
          key: "ScrollToTop",
          value: function ScrollToTop() {
            this.content.scrollToPoint(0, 140, 100);
            this.tabBar.style.height = '0px';
            this.votes.style.height = '0px';
          } // When the user submits the comment, the tabar will show up again

        }, {
          key: "ScrollToReply",
          value: function ScrollToReply() {
            this.content.scrollToPoint(0, 300, 100);
            this.textarea.getInputElement().then(function (textarea) {
              textarea.blur();
            });
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            var _this4 = this;

            this.textarea.getInputElement().then(function (textarea) {
              _this4.tabBar.style.height = '70px';
              _this4.votes.style.height = '70px';
            });
          } // for when the user un focuses out of the comment textarea but hasnt submitted the comment

        }, {
          key: "blur",
          value: function blur() {
            var _this5 = this;

            this.textarea.getInputElement().then(function (textarea) {
              textarea.blur();
              _this5.tabBar.style.height = '70px';
              _this5.votes.style.height = '70px';
            });
          }
        }]);

        return RepliesPagePage;
      }();

      RepliesPagePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"]
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"]
        }];
      };

      RepliesPagePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": true
          }]
        }],
        textarea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], {
            "static": true
          }]
        }]
      };
      RepliesPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-replies-page',
        template: _raw_loader_replies_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_replies_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"], src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"]])], RepliesPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modals-replies-page-replies-page-module~post-page-post-page-module-es5.js.map