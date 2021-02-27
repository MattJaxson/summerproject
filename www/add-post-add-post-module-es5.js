(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"], {
    /***/
    "ANTd":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ANTd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Add Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"header ion-hide-md-down ion-justify-content-center ion-text-center\"  style=\"margin: 2% 0% 3% 0%;\">\n      <ion-col size=\"5\">\n        <h1>New Post</h1>\n      </ion-col>\n      <ion-col push=\"\" size=\"5\">\n        <ion-button class=\"blue-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-lg-up\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <!-- Desktop Text Header -->\n        <p class=\"message ion-hide-md-down\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n        <hr style=\"border-top: #9993 solid 2px;\n        margin-bottom: 50px;\">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"textPostForm.value.post.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.hashtags, this.textPostForm.controls.post.value, this.textPostForm.controls.title.value) : null\">\n\n          <ion-list class=\"line-input\">\n            <ion-label>Title</ion-label>\n            <ion-item>\n              <ion-input\n              #titleChars\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              formControlName=\"title\"\n              placeholder=\"Title\"></ion-input>\n            </ion-item>\n            <ion-label>Hashtags</ion-label>\n            <h5>Please seperate each tag with a comma ( , ). You can add up to 5 hashtags.</h5>\n            <div class=\"hashtag\" *ngFor=\"let i = index; let tag of hashtags\">\n              <p>{{tag}}</p>\n              <img (click)=\"deleteTag(i)\" src=\"../../../../assets/icon/close-icon.svg\" alt=\"\" srcset=\"\">\n            </div>\n            <ion-item>\n              <ion-input\n              #hashtagRef\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              clearInput=\"true\"\n              (keydown)=\"addHashTag($event)\"\n              formControlName=\"hashtags\"\n              placeholder=\"Type tag then press Enter\">#</ion-input>\n            </ion-item>\n            <!-- <p class=\"char-limit\">{{titleChars.value.length}} / 100 character limit</p> -->\n\n            <ion-label>Post</ion-label>\n            <h5>Keep your content clean. There is a filter for profane language. Administrative action will be taken against posts with too much profanity.</h5>\n              <ion-item style=\"height: auto;\">\n                <ion-textarea\n                  #postChars\n                  rows=\"50\"\n                  auto-grow=\"true\"\n                  spellcheck=\"true\"\n                  maxlength=\"1000\"\n                  formControlName=\"post\"\n                  placeholder=\"What do you have to say?\"\n                  (keydown.control.enter)=\"textPostForm.value.textPost.length > 0 ? post(this.hashtags, this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.value.textPost, this.textPostForm.value.title) : null\">\n                </ion-textarea>\n              </ion-item>\n              <p class=\"char-limit\">{{postChars.value.length}} / 3000 character limit</p>\n            </ion-list>\n\n            <ion-row>\n              <ion-col>\n                <ion-item style=\"margin: 15px 0 20px;\" lines=\"none\">\n                  <ion-button\n                  class=\"orange-button\"\n                  type=\"submit\">\n                    Submit\n                  </ion-button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-lg=\"6\" style=\"margin-bottom: 100px;\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "E2mU":
    /*!*********************************************************!*\
      !*** ./src/app/pages/posts/add-post/add-post.module.ts ***!
      \*********************************************************/

    /*! exports provided: AddPostPageModule */

    /***/
    function E2mU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function () {
        return AddPostPageModule;
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


      var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-post-routing.module */
      "qx8h");
      /* harmony import */


      var _add_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-post.page */
      "t5Bf");

      var AddPostPageModule = function AddPostPageModule() {
        _classCallCheck(this, AddPostPageModule);
      };

      AddPostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPostPageRoutingModule"]],
        declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_6__["AddPostPage"]]
      })], AddPostPageModule);
      /***/
    },

    /***/
    "j2jN":
    /*!*********************************************************!*\
      !*** ./src/app/pages/posts/add-post/add-post.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function j2jN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: unset;\n  height: 36px;\n  margin-top: 20px;\n  margin-bottom: 4px;\n  position: unset;\n}\n\nion-label {\n  font-size: 1em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\nh5 {\n  font-size: 1em;\n  color: #222;\n  margin-bottom: 25px;\n}\n\n.hashtag {\n  background: #e1f0fc;\n  width: 300px;\n  padding: 0.1px 10px;\n  margin-bottom: 14px;\n  border-radius: 5px;\n  font-size: 1em;\n  color: #005191;\n}\n\n.hashtag p {\n  display: inline-block;\n}\n\n.hashtag img {\n  height: 20px;\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: 14px;\n}\n\n.line-input > ion-item {\n  margin-bottom: 45px;\n}\n\n.char-limit {\n  position: relative;\n  top: -35px;\n  text-align: right;\n}\n\nion-title {\n  margin: 0;\n}\n\n.message {\n  font-size: 1.05em;\n  text-align: left;\n  font-weight: 600;\n  line-height: 1.5em;\n  color: #555;\n}\n\n.char-limit {\n  color: #e4405f;\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-input {\n    box-shadow: none;\n    background: #edf3f8;\n  }\n}\n\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZC1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNJO0VBQ0UscUJBQUE7QUFDTjs7QUFFSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBTjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQURGO0FBQ0Y7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5GIiwiZmlsZSI6ImFkZC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJ1dHRvbiB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG4gIHdpZHRoOiB1bnNldDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBvc2l0aW9uOiB1bnNldDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5oYXNodGFnIHtcbiAgYmFja2dyb3VuZDogI2UxZjBmYztcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAwLjFweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzAwNTE5MTtcblxuICAgIHAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDE0cHg7XG4gICAgfVxufVxuXG4ubGluZS1pbnB1dCA+IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuLmNoYXItbGltaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjA1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5jaGFyLWxpbWl0IHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRleHQtaW5wdXQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgfVxuXG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgLy8gYmFja2dyb3VuZDogI2VkZjNmODtcbiAgfVxufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "qx8h":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/posts/add-post/add-post-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AddPostPageRoutingModule */

    /***/
    function qx8h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPostPageRoutingModule", function () {
        return AddPostPageRoutingModule;
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


      var _add_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-post.page */
      "t5Bf");

      var routes = [{
        path: '',
        component: _add_post_page__WEBPACK_IMPORTED_MODULE_3__["AddPostPage"]
      }, {
        path: 'verification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | verification-verification-module */
          "verification-verification-module").then(__webpack_require__.bind(null,
          /*! ./verification/verification.module */
          "Wtw0")).then(function (m) {
            return m.VerificationPageModule;
          });
        }
      }];

      var AddPostPageRoutingModule = function AddPostPageRoutingModule() {
        _classCallCheck(this, AddPostPageRoutingModule);
      };

      AddPostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddPostPageRoutingModule);
      /***/
    },

    /***/
    "t5Bf":
    /*!*******************************************************!*\
      !*** ./src/app/pages/posts/add-post/add-post.page.ts ***!
      \*******************************************************/

    /*! exports provided: AddPostPage */

    /***/
    function t5Bf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPostPage", function () {
        return AddPostPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_post_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-post.page.html */
      "ANTd");
      /* harmony import */


      var _add_post_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-post.page.scss */
      "j2jN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/post.service */
      "ENZJ");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddPostPage = /*#__PURE__*/function () {
        function AddPostPage(router, loading, posts, profile, formBuilder) {
          _classCallCheck(this, AddPostPage);

          this.router = router;
          this.loading = loading;
          this.posts = posts;
          this.profile = profile;
          this.formBuilder = formBuilder;
          this.hashtags = []; // Do some sort of Validation Later

          this.validationMessages = {};
        }

        _createClass(AddPostPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.textPostForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              hashtags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
            });
            this.profile.getUserDetails().subscribe(function (details) {
              console.log(details);
              _this.creatorEmail = details['email'];
              _this.creatorName = details['fullName'];
              _this.creatorProfilePicture = details['profilePicture'];
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/posts']);
          }
        }, {
          key: "post",
          value: function post(creatorName, creatorEmail, creatorProfilePicture, hashtags, _post, title) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.presentLoading();

                    case 2:
                      _context.next = 4;
                      return this.posts.addPost(creatorName, creatorEmail, creatorProfilePicture, hashtags, _post, title).subscribe(function (data) {
                        console.log(data);
                      });

                    case 4:
                      _context.next = 6;
                      return this.router.navigate(['home/posts/add-post/verification']);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        message: 'Sending post to be Verified...',
                        spinner: 'bubbles',
                        duration: 2000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context2.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addHashTag",
          value: function addHashTag(event) {
            console.log(event);
            var hashtagControl = this.textPostForm.get('hashtags');

            if (event.code === "Enter") {
              console.log('ENTER button pressed.');
              console.log('Value: ');
              console.log(hashtagControl.value);
              console.log('Hashtags: ');
              this.hashtags.push(hashtagControl.value);
              console.log(this.hashtags);
            }
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(i) {
            console.log(i);
            var index = this.hashtags.indexOf(i);
            console.log(index);

            if (index = -1) {
              this.hashtags.splice(index, 1);
              console.log(this.hashtags);
            }
          }
        }]);

        return AddPostPage;
      }();

      AddPostPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      AddPostPage.propDecorators = {
        postChars: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['postChars', {
            "static": false
          }]
        }],
        titleChars: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['titleChars', {
            "static": false
          }]
        }],
        hashtagRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['hashtagRef', {
            "static": false
          }]
        }]
      };
      AddPostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-post',
        template: _raw_loader_add_post_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_post_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], AddPostPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-post-add-post-module-es5.js.map